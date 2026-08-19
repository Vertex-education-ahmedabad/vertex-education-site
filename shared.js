/* ═══════════════════════════════════
   VERTEX DARK — SHARED JS
   Include at bottom of every page
   ═══════════════════════════════════ */

/* CURSOR */
const _c=document.getElementById('cur'),_r=document.getElementById('cur-r');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;_c.style.left=mx+'px';_c.style.top=my+'px';});
(function ar(){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;_r.style.left=rx+'px';_r.style.top=ry+'px';requestAnimationFrame(ar);})();

/* SCROLL */
window.addEventListener('scroll',()=>{
  const p=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
  document.getElementById('spb').style.width=p+'%';
  document.getElementById('nav').classList.toggle('s',window.scrollY>60);
  document.getElementById('btt').classList.toggle('sh',window.scrollY>400);
});

/* REVEAL */
const _ro=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');x.target.querySelectorAll('[data-target]').forEach(_count);}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>_ro.observe(el));

/* Immediate reveal for page hero */
document.querySelector('.ph .rv')?.classList.add('in');
document.querySelector('.ph .rv.d1')?.classList.add('in');
document.querySelector('.ph .rv.d2')?.classList.add('in');

/* COUNT UP */
function _count(el){
  if(el.dataset.counted)return;el.dataset.counted='1';
  const t=+el.dataset.target,d=1800,s=performance.now();
  (function tick(n){const p=Math.min((n-s)/d,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(e*t);if(p<1)requestAnimationFrame(tick);else el.textContent=t;})(s);
}

/* BURGER */
const _bg=document.getElementById('bg'),_nl=document.getElementById('nl'),_nr=document.getElementById('nr');
_bg?.addEventListener('click',()=>{_bg.classList.toggle('o');_nl.classList.toggle('o');_nr?.classList.toggle('o');});
_nl?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{_bg.classList.remove('o');_nl.classList.remove('o');_nr?.classList.remove('o');}));

/* FAQ */
function tf(btn){const i=btn.parentElement,w=i.classList.contains('op');document.querySelectorAll('.fi').forEach(x=>x.classList.remove('op'));if(!w)i.classList.add('op');}

/* FILTER */
function setFilter(val,btn,attr){
  document.querySelectorAll('.fp').forEach(p=>p.classList.remove('on'));
  btn?.classList.add('on');
  document.querySelectorAll(`[data-${attr}]`).forEach(c=>{
    c.style.display=(val==='all'||c.dataset[attr]===val)?'':'none';
  });
}

/* SMOOTH ANCHOR */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
  });
});
