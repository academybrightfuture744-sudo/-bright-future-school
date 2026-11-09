
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const msg=form.querySelector('.form-message');if(msg){msg.textContent='Thank you. This is a front-end demo only; your information has not been saved or sent. Please contact the school by phone to complete your enquiry.';msg.classList.add('show');}
  form.reset();
 }));
});
