document.querySelector('.ri-home-smile-line').addEventListener('click', ()=>{
  document.querySelector('.menu_box').style = 'display:block;';
})

this.addEventListener('click', (e)=> {
   if(e.target.classList.contains('menu_box')){
    document.querySelector('.menu_box').style = 'display:none ';
   }
  
})


const format = ["mp4", "xlsx", "pptx", "pdf", "docx", "json", "xml", "html", ""]

const space_1 = document.querySelector('.any1');
let i = 0;
 this.onload(()=>{
   space_1.innerHTML = format[i];
   if(i > format.length){
      let i = 0;
   }
   else{
    i++;
   }
 })

      
     


      