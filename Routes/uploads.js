const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const extend_pdf = '.pdf';
const extend_docx = '.docx';
const docxConverter = require("docx-pdf");
const libre = require('libreoffice-convert');

var down_name;

router.post('/PPT-PDF', (req,res)=> {
   if(req.files.upfile){
      var file = req.files.upfile;
      var first_name = file.name.split('.')[0];
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

     file.mv('./uploads/' + file.name,  (err)=>{
      if(err){
         console.log(err)
      }
      else{
         console.log('file uploaded');
         var initialPath = path.join(`./uploads/${first_name}.pptx}`);
         var upload_Path = path.join(`./uploads/${first_name}${extend_pdf}`);

         libre.convert(initialPath, extend_pdf, undefined, (err, done) => {
            if (err) {
              console.log(`Error converting file: ${err}`);
            }
            
            fs.writeFileSync(upload_Path, done);
        });
      }
     })
   }
   else{
      console.log('e no work')
   }
})

router.post('/DOCX-PDF', (req, res)=>{
    if(req.files.upfile){
       var file = req.files.upfile,
           name =  file.name;
        var first_name = name.split('.')[0];
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
       file.mv('./uploads/' + name,  (err)=>{
          if(err){
             console.log(err)
          }
          else{
              console.log('file uploaded')
              var initialPath = path.join(`./uploads/${first_name}${extend_docx}`);
              var upload_Path = path.join(`./uploads/${first_name}${extend_pdf}`);
            
             docxConverter(initialPath, upload_Path, (err, result)=> {
                if(err){
                   console.log(err)
                }
                else{
                   res.render('download');
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


 module.exports = {router, down_name};
