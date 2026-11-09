
document.addEventListener('DOMContentLoaded',()=>{
 const form=document.querySelector('#result-search'),out=document.querySelector('#result-output');
 if(!form||!out)return;
 form.addEventListener('submit',e=>{e.preventDefault();out.innerHTML='<div class="notice">Demo portal: no real student result database is connected. No student records are stored in this website.</div>';});
});
