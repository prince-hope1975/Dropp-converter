const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const extend_pdf = '.pdf';
const extend_docx = '.docx';
const docxConverter = require("docx-pdf");
var down_name;


router.post('/DOCX-PDF', (req, res)=>{
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
       file.mv('./uploads/' + name,  (err)=>{
          if(err){
             console.log(err)
          }
          else{
              console.log('file uploaded')
              var initialPath = path.join(`./uploads/${First_name}${extend_docx}`);
              var upload_Path = path.join(`./uploads/${First_name}${extend_pdf}`);
            
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
