// script.js - mejoras interactivas: search/filtrado, lightbox, testimonials, dark mode
document.addEventListener('DOMContentLoaded',function(){
  // year
  const y = new Date().getFullYear();
  const elY = document.getElementById('year'); if(elY) elY.textContent = y;

  // Dark mode toggle
  const btnTheme = document.getElementById('btn-theme');
  btnTheme?.addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', cur==='dark' ? 'light' : 'dark');
    btnTheme.textContent = cur==='dark' ? '🌙' : '☀️';
  });

  // Simple search/filter for cars
  const inputSearch = document.getElementById('search');
  const selectType = document.getElementById('filter-type');
  function filterCars(){
    const q = inputSearch?.value.toLowerCase() || '';
    const t = selectType?.value || '';
    document.querySelectorAll('.card-car').forEach(card=>{
      const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
      const type = card.dataset.type || '';
      const matches = (title+desc).includes(q) && (t==='' || t===type);
      card.style.display = matches ? '' : 'none';
    });
  }
  inputSearch?.addEventListener('input', filterCars);
  selectType?.addEventListener('change', filterCars);

  // Lightbox for gallery
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.position = 'fixed'; lightbox.style.inset = '0'; lightbox.style.background='rgba(0,0,0,0.8)';
  lightbox.style.display='flex'; lightbox.style.alignItems='center'; lightbox.style.justifyContent='center';
  lightbox.style.padding='24px'; lightbox.style.zIndex='9999'; lightbox.style.visibility='hidden';
  const img = document.createElement('img'); img.style.maxWidth='90%'; img.style.maxHeight='90%'; img.style.borderRadius='8px';
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);
  document.querySelectorAll('.gallery img').forEach(i=>{
    i.addEventListener('click', ()=>{
      img.src = i.src; lightbox.style.visibility='visible';
    });
  });
  lightbox.addEventListener('click', ()=> lightbox.style.visibility='hidden');

  // Testimonials carousel (auto)
  let idx = 0;
  const items = document.querySelectorAll('.testimonial');
  function showTest(i){
    items.forEach((it,j)=> it.style.transform = `translateX(${(j-i)*100}%)`);
  }
  if(items.length>0){
    showTest(0);
    setInterval(()=>{ idx = (idx+1)%items.length; showTest(idx); }, 4000);
  }

  // simple smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });
});
