
document.querySelector('.ri-home-smile-line').addEventListener('click', ()=>{
  document.querySelector('.menu_box').style = 'display:block;';
})

this.addEventListener('click', (e)=> {
   if(e.target.classList.contains('menu_box')){
    document.querySelector('.menu_box').style = 'display:none ';
   }
  
})

      
     


      