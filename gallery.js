
document.addEventListener('DOMContentLoaded',()=>{
 const filters=[...document.querySelectorAll('.filter-btn')],items=[...document.querySelectorAll('.gallery-item')],box=document.querySelector('.lightbox');
 filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const cat=btn.dataset.filter;items.forEach(i=>i.classList.toggle('hide',cat!=='all'&&i.dataset.category!==cat));}));
 items.forEach(item=>item.addEventListener('click',()=>{if(!box)return;box.querySelector('p').textContent=item.dataset.caption||'Bright Future School';box.classList.add('show');}));
 box?.addEventListener('click',e=>{if(e.target===box||e.target.matches('button'))box.classList.remove('show');});
});
