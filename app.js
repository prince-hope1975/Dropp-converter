const express = require('express');
var docxConverter = require('docx-pdf');
var app = express();
const libre = require('libreoffice-convert');
const bodyParser = require('body-parser')
var upload = require('express-fileupload');;
const fs = require('fs');
const path = require('path')
const extend_pdf = '.pdf';
const extend_docx = '.docx';
const process = require('process')
const mv = require('mv');

const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(upload());
app.use(express.static('./public'));

app.get('/', (req, res)=>{
   res.sendFile(path.resolve(__dirname + '/pages/index.html'))
});

app.post('/uploads/docx', (req, res)=>{
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

            //  docxConverter(initialPath, upload_Path, (err, result)=>{
            //   if(err){
            //      console.log(err)
            //   }
            //   else{
            //    res.sendFile(path.resolve(__dirname + '/pages/down_html.html'))
            //   }
            //  })

            const filew = fs.readFileSync(initialPath);
                               
             libre.convert(filew, extend_pdf, undefined, (err, done) => {
                         if (err) {
                              console.log(`Error converting file: ${err}`);
                        }
                        else{
                           fs.writeFileSync(upload_Path, done);
                           res.sendFile(path.resolve(__dirname + '/pages/down_html.html'))
                        }
          
               });
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
      // else{
      //  const delete_path_doc = process.cwd() + `/uploads/${down_name}${extend_docx}`;
      //  const delete_path_pdf = process.cwd() + `/uploads/${down_name}${extend_pdf}`;
      // }
      try{
       fs.unlinkSync(delete_path_doc);
       fs.unlinkSync(delete_path_pdf);
      }
      catch(err){
           console.log(err)
      }
      
 })
})

app.get('/thankyou', ()=>{
   res.sendFile(__dirname + '/thankYou.html')
})

app.listen(port, ()=>{
   console.log('listening on port ' + port)
})