
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
