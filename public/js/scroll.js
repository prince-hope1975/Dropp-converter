gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  ScrollTrigger: {
    trigger: '.Howto',
    start: '+500 center',
    toggleActions: 'play play resume reverse',
    markers: true
  }
});

tl.to('.Howto', {
  onEnter: ()=>{
    setInterval(()=>{
        image_container_how_to.innerHTML = `<img class="animate__animated animate__slideInLeft" src='/images/${array.svg[y]}.svg' alt='file formats'>`;
        if(y > (array.svg.length - 2 )){
          y = 0;
        }
        else{
          y++
        }
      }, 2500);
    
      
      setInterval(()=>{
        how_to_h3.innerHTML = `<h3 class="animate__animated animate__flipInX">${array.h3[x]}</h3>`;
        if (x > array.h3.length - 2){
          x= 0;
        }
        else{
          x++
        }
      }, 2500);
  }
})

ScrollTrigger.create({
    trigger: '.divelyn',
    start: 'bottom top',

    end: '+=500 +200',
    onEnter: ()=> {
      $('.divelyn').addClass('divelyn-background');
    }

})





