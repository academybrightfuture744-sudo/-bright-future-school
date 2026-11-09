
document.addEventListener('DOMContentLoaded',()=>{
 const slides=[...document.querySelectorAll('.hero-slide')],dots=[...document.querySelectorAll('.slide-dots button')];
 if(!slides.length)return;let index=0;
 const show=n=>{index=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.hidden=i!==index);dots.forEach((d,i)=>d.classList.toggle('active',i===index));};
 document.querySelector('[data-slide="next"]')?.addEventListener('click',()=>show(index+1));
 document.querySelector('[data-slide="prev"]')?.addEventListener('click',()=>show(index-1));
 dots.forEach((d,i)=>d.addEventListener('click',()=>show(i)));show(0);
 if(slides.length>1)setInterval(()=>show(index+1),5500);
});
