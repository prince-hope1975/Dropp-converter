var chooseFile =   document.querySelector('#upfile');
      var form = document.querySelector('.fileupload');
      document.querySelector('.selectPrompt').addEventListener('click', getFile = () => {
       chooseFile.click()
      })

     chooseFile.addEventListener('input', (e)=>{
        document.querySelector('.selectPrompt').innerHTML= `Converting...  <span class="preloader">
        <img src="/images/1475 (1).gif" alt="">
        </span>`;
          var wordDoc = chooseFile.files[0].name;
        document.querySelector('.Xash').innerHTML= `${wordDoc}`;
        document.querySelector('.preloader').style='display:block';

        
        setTimeout(()=>{
          form.submit();
        form.reset();

        }, 1000)
      })

      
      document.querySelector('.ri-home-smile-line').addEventListener('click', ()=>{
        document.querySelector('.menu_box').style = 'display:block;';
      })
      
      this.addEventListener('click', (e)=> {
         if(e.target.classList.contains('menu_box')){
          document.querySelector('.menu_box').style = 'display:none ';
         }
        
      })
      