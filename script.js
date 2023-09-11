const inputEmail = document.getElementById('email');
const message = document.getElementById('msg')
const inputBtn = document.getElementById('input-btn')
const container = document.getElementById('container')
const successBox = document.getElementById('success-box')
const dismissBtn = document.getElementById('dismiss-btn')
const mail = document.getElementById('mail')

inputBtn.addEventListener('click', function(e){
  e.preventDefault();
  const inputValue = inputEmail.value;
  const atValue = inputValue.indexOf('@');
  const atDot = inputValue.indexOf('.')
  const atSpace = inputValue.indexOf(' ')
   
  if(atValue<0 || atDot<0 ) {
   inputEmail.classList.add('error');
   message.style.visibility = 'visible'

  }else{
    
    container.style.display = 'none';
    successBox.style.display = 'block'
    mail.textContent = inputValue;
    
  }
});

dismissBtn.addEventListener('click', function(){
  container.style.display = 'flex';
    successBox.style.display = 'none'
    inputEmail.value =''

})