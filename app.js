const express = require('express');
var app = express();
const docxConverter = require('docx-pdf');
const bodyParser = require('body-parser')
var upload = require('express-fileupload');;
const fs = require('fs');
const path = require('path')
const extend_pdf = '.pdf';
const process = require('process')
const extend_docx = '.docx';
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

      file.mv( __dirname + '/uploads/' + name,  (err)=>{
         if(err){
            console.log(err)
         }
         else{
             console.log('file uploaded')
             var initialPath = path.join(__dirname, `/uploads/${First_name}${extend_docx}`);
             var upload_Path = path.join(__dirname, `/uploads/${First_name}${extend_pdf}`);

             docxConverter(initialPath, upload_Path, (err, result)=>{
                     if(err){
                      console.log(err);
                     }
                     res.sendFile(path.resolve(__dirname + '/pages/down_html.html'));
                     console.log(result)
                    
             })
         }
      })


   }
   else{
      res.send('No file selected');
      res.end()
   }
})
app.get('/public/css/index.css', (r, rs)=>{
   rs.sendFile(path.resolve(__dirname + '/public/css/index.css'))
})

app.get('/download',(req, res)=>{
   res.download(__dirname + `/uploads/${down_name}${extend_pdf}`,`${down_name}${extend_pdf}`, (err)=>{
      if(err){
        console.log(err)
      }
      else{
       const delete_path_doc = process.cwd() + `/uploads/${down_name}${extend_docx}`;
       const delete_path_pdf = process.cwd() + `/uploads/${down_name}${extend_pdf}`;
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

app.get('/thankyou', ()=>{
   res.sendFile(__dirname + '/thankYou.html')
})

app.listen(port, ()=>{
   console.log('listening on port ' + port)
})