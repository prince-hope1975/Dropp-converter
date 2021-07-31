const express = require('express');
const router = express.Router();
const path = require('path');
var delete_path_doc;
var delete_path_pdf;
const process = require('process');
const fs = require('fs');
const extend_pdf = '.pdf';
const extend_docx = '.docx';
const Uploads = require('./uploads')


router.get('/pdf',(req, res)=>{
    res.download(`./uploads/${Uploads.down_name}${extend_pdf}`,`${down_name}${extend_pdf}`, (err)=>{
       if(err){
         console.log(err)
       }
       else{
         delete_path_doc = process.cwd() + `/uploads/${Uploads.down_name}${extend_docx}`;
        delete_path_pdf = process.cwd() + `/uploads/${Uploads.down_name}${extend_pdf}`;
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

 module.exports = router;