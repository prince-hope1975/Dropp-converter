
document.querySelector('.ri-home-smile-line').addEventListener('click', ()=>{
  document.querySelector('.menu_box').style = 'display:block;';
})

this.addEventListener('click', (e)=> {
   if(e.target.classList.contains('menu_box')){
    document.querySelector('.menu_box').style = 'display:none ';
   }
  
})


const format = ["mp4", "xlsx", "pptx", "pdf", "docx", "json", "xml", "html", "png"]

const space_1 = document.querySelector('.any1');
const space_2 = document.querySelector('.any2');
let i = 0; let x = format.length -1;
 this.addEventListener('load',()=>{
setInterval(()=>{
  space_1.innerHTML = format[i]; if(i >= format.length - 1){
     i = 0;
  }else{ i++}}, 500);

  setInterval(()=>{ space_2.innerHTML = format[x]; 
   if(x <= 0){
     x = format.length -1
    } else{x--}}, 1000)
 })

      
     


      