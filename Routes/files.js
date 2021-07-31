const express = require('express');
const router = express.Router();

router.get('/Word-pdf', (req, res)=>{
    res.render("word2pdf",{
     from: "DOCX",
     To: "PDF"
  })
  });
  router.get('/Pdf-word', (req, res)=>{
     res.render("pdfToWord",{
        from: "PDF",
        To: "DOCX"
     })
  })
  
  router.get('/Ppt-pdf', (req, res)=>{
     res.render('pptToPdf', { 
        from : "PPT",
        To: "PDF"
     })
  })


module.exports = router;