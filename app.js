const express = require('express');
const {config, engine} = require('express-edge');
var app = express();
const libre = require('libreoffice-convert');
const bodyParser = require('body-parser')
var upload = require('express-fileupload');;
const fs = require('fs');
const path = require('path');
var down_name;
const docxConverter = require("docx-pdf")
const extend_pdf = '.pdf';
const extend_docx = '.docx';
const process = require('process')
const mv = require('mv');
var delete_path_doc;
var delete_path_pdf;

const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(upload());
app.use(express.static('./public'));
app.use(engine);
app.set('views', __dirname + '/views');

// Handling Get Requests

app.get('/Files/Word-pdf', (req, res)=>{
  res.render("word2pdf",{
   from: "DOCX",
   To: "PDF"
})
});
app.get('/Files/Pdf-word', (req, res)=>{
   res.render("pdfToWord",{
      from: "PDF",
      To: "DOCX"
   })
})

app.get('/Files/Ppt-pdf', (req, res)=>{
   res.render('pptToPdf', { 
      from : "PPT",
      To: "PDF"
   })
})

// End of Get requests

app.post('/uploads/DOCX-PDF', (req, res)=>{
   if(req.files.upfile){
      var file = req.files.upfile,
          name =  file.name;
       const First_name = name.split('.')[0];
      down_name = First_name;
      var dir = './uploads'
      try {
         if (!fs.existsSync(dir)) {
             fs.mkdirSync(dir);
             console.log("Directory is created.");
         } else {
             console.log("Directory already exists.");
         }
     } catch (err) {
         console.log(err);
     }
      file.mv( __dirname + '/uploads/' + name,  (err)=>{
         if(err){
            console.log(err)
         }
         else{
             console.log('file uploaded')
             var initialPath = path.join(__dirname, `/uploads/${First_name}${extend_docx}`);
             var upload_Path = path.join(__dirname, `/uploads/${First_name}${extend_pdf}`);
           
            // docxConverter(initialPath, upload_Path, (err, result)=> {
            //    if(err){
            //       console.log(err)
            //    }
            //    else{
            //       res.sendFile(path.resolve(__dirname + '/pages/down_html.html'))
            //    }
            // })

            libre.convert(initialPath, extend_pdf, undefined, (err, done) => {
               if(err){
                  console.log(err + `This app is not working`)
               }
               else{
                  
               }
            })
            
         }
      })


   }
   else{
      res.send('No file selected');
      res.end()
   }
})
app.get('/download',(req, res)=>{
   res.download(__dirname + `/uploads/${down_name}${extend_pdf}`,`${down_name}${extend_pdf}`, (err)=>{
      if(err){
        console.log(err)
      }
      else{
        delete_path_doc = process.cwd() + `/uploads/${down_name}${extend_docx}`;
       delete_path_pdf = process.cwd() + `/uploads/${down_name}${extend_pdf}`;
      }
      try{
       fs.unlinkSync(delete_path_doc);
       fs.unlinkSync(delete_path_pdf);
      }
      catch(err){
           console.log(err)
      }
      
 })
})


app.listen(port, ()=>{
   console.log('listening on port ' + port)
})