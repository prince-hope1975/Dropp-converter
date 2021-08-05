
this.addEventListener('click', (e)=> {
   if(e.target.classList.contains('menu_box')){
    document.querySelector('.menu_box').style = 'display:none ';
   }
  
})

const  animate_landing_page = () =>{
  const array = {
    pictures : ['jpg', 'excel', 'md', 'html','sass', 'mp3-svgrepo-com', 'json', 'png', 'mp4', 'ppt','word', 'pdf','textfile'],
    svg: ['upload','01', 'dnd'],
    h3: ['Upload file', 'wait 2s...', 'Download file']
  }

  const image_container_how_to = document.querySelector('.Howto .wrap .hh221 .image');
  const three_d_image = document.querySelector('.support .wrap .hh221 .image');
  const how_to_h3 = document.querySelector('.Howto .wrap .text_field .h3');
 var i = 0,
     y = 0,
     x = 0;
  
  setInterval(()=>{
    three_d_image.innerHTML = `<img class="animate__animated animate__bounceIn" src='/images/${array.pictures[i]}.svg' alt='file formats'>`;
    if(i > (array.pictures.length - 2 )){
      i = 0;
    }
    else{
      i++
    }
  }, 800);

  
  setInterval(()=>{
    image_container_how_to.innerHTML = `<img class="animate__animated animate__lightSpeedInLeft" src='/images/${array.svg[y]}.svg' alt='file formats'>`;
    if(y > (array.svg.length - 2 )){
      y = 0;
    }
    else{
      y++
    }
  }, 2000);

  
  setInterval(()=>{
    how_to_h3.innerHTML = `<h3 class="animate__animated animate__flipInX">${array.h3[x]}</h3>`;
    if (x > array.h3.length - 2){
      x= 0;
    }
    else{
      x++
    }
  }, 2000)
}

this.addEventListener('DOMContentLoaded', animate_landing_page);
document.querySelector('.ri-home-smile-line').addEventListener('click', ()=>{
  document.querySelector('.menu_box').style = 'display:block;';
})


    