(function(){
var d=document,b=d.body,$=function(s,r){return (r||d).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||d).querySelectorAll(s))};
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
var cv=$('.cv'),seen=false;
try{seen=!!sessionStorage.getItem('sk_seen');sessionStorage.setItem('sk_seen','1')}catch(e){}
b.classList.add(seen?'quick':'intro');
function open(){b.classList.add('ready')}
if(reduce){open()}else{addEventListener('load',function(){setTimeout(open,seen?420:1500)});setTimeout(open,4500)}
addEventListener('pageshow',function(e){if(e.persisted&&cv){cv.removeAttribute('style');b.classList.add('ready')}});
/* page-leave curtain */
function leave(u){
 if(!cv){location.href=u;return}
 b.classList.remove('ready');cv.style.transition='none';cv.style.transform='translateY(101%)';cv.style.borderRadius='50% 50% 0 0/14vw 14vw 0 0';
 void cv.offsetWidth;cv.style.transition='transform .75s cubic-bezier(.76,0,.24,1),border-radius .75s cubic-bezier(.76,0,.24,1)';
 cv.style.transform='translateY(0)';cv.style.borderRadius='0';setTimeout(function(){location.href=u},790)}
d.addEventListener('click',function(e){
 var a=e.target.closest&&e.target.closest('a');if(!a||reduce)return;var h=a.getAttribute('href');
 if(!h||a.target==='_blank'||e.metaKey||e.ctrlKey||e.shiftKey||e.button||/^(#|mailto:|tel:|https?:|javascript:)/.test(h))return;
 e.preventDefault();leave(a.href)});
/* mobile menu */
var mb=$('#mb'),nav=$('#nav');
if(mb){mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);d.getElementById('hd').classList.toggle('menu-open',o);b.classList.toggle('noscroll',o)});$$('a',nav).forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');b.classList.remove('noscroll')})})}
/* split headings into masked words */
function split(el){var n=0;(function walk(node){Array.prototype.slice.call(node.childNodes).forEach(function(c){
 if(c.nodeType===3){var f=d.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){f.appendChild(d.createTextNode(' '))}else{var s=d.createElement('span');s.className='sw';s.innerHTML='<span style="--i:'+(n++)+'">'+t+'</span>';f.appendChild(s)}});node.replaceChild(f,c)}
 else if(c.nodeType===1){walk(c)}})})(el)}
$$('.split').forEach(split);
/* reveal on scroll */
function count(el){var to=+el.dataset.count,from=+(el.dataset.from||0),suf=el.dataset.suffix||'',t0=performance.now(),D=1900;
 (function f(t){var p=Math.min(1,(t-t0)/D),e=1-Math.pow(1-p,4);el.textContent=Math.round(from+(to-from)*e)+suf;if(p<1)requestAnimationFrame(f)})(t0)}
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){var t=en.target;t.classList.add('is-in');if(t.dataset.count!==undefined&&!reduce)count(t);io.unobserve(t)}})},{threshold:.14,rootMargin:'0px 0px -6% 0px'});
 $$('.rv,.rvl,.rvr,.zi,.imgr,.split,[data-count]').forEach(function(el){io.observe(el)});
 var io2=new IntersectionObserver(function(es){es.forEach(function(en){en.target.classList.toggle('vis',en.isIntersecting)})},{threshold:.5});
 $$('.hc').forEach(function(el){io2.observe(el)});
}else{$$('.rv,.rvl,.rvr,.zi,.imgr,.split').forEach(function(el){el.classList.add('is-in')})}
/* scroll-linked effects */
var hd=$('#hd'),pb=$('.pb'),fx=$('.fx'),wds=$$('.wd'),hzs=$$('.hz'),pars=$$('[data-par]');
function word(){wds.forEach(function(el){var r=el.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.88-r.top)/(innerHeight*.5+r.height*.35))),sp=el._s||(el._s=$$('span',el));sp.forEach(function(s,i){s.style.opacity=Math.min(1,Math.max(.14,(p*sp.length*1.2-i)/3+.14))})})}
function sizeHz(){hzs.forEach(function(w){var t=$('.hzt',w);if(innerWidth<=820){w.style.height='';return}w.style.height=((t.scrollWidth-innerWidth)*.8+innerHeight)+'px'})}
function hz(){hzs.forEach(function(w){if(innerWidth<=820)return;var t=$('.hzt',w),r=w.getBoundingClientRect(),max=w.offsetHeight-innerHeight,p=Math.min(1,Math.max(0,-r.top/max));t.style.transform='translate3d('+(-p*(t.scrollWidth-innerWidth))+'px,0,0)';var bar=$('.hzb i',w);if(bar)bar.style.transform='scaleX('+p+')'})}
function par(){pars.forEach(function(el){var r=el.parentNode.getBoundingClientRect();if(r.bottom<-100||r.top>innerHeight+100)return;var c=(r.top+r.height/2-innerHeight/2)/innerHeight;el.style.transform='translate3d(0,'+(c*parseFloat(el.dataset.par)).toFixed(1)+'px,0) scale(1.14)'})}
var tick=false;function onScroll(){if(tick)return;tick=true;requestAnimationFrame(function(){tick=false;var y=pageYOffset,h=d.documentElement.scrollHeight-innerHeight;
 if(hd)hd.classList.toggle('sc',y>40);if(pb)pb.style.transform='scaleX('+(h>0?y/h:0)+')';if(fx)fx.classList.toggle('show',y>520&&y<h-760);if(!reduce){word();hz();par()}})}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',function(){sizeHz();onScroll()});addEventListener('load',function(){sizeHz();onScroll()});
if(reduce){wds.forEach(function(el){$$('span',el).forEach(function(s){s.style.opacity=1})})}
sizeHz();onScroll();
/* pointer effects */
$$('.hero').forEach(function(h){h.addEventListener('mousemove',function(e){var r=h.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;h.style.setProperty('--px',(x-.5).toFixed(3));h.style.setProperty('--py',(y-.5).toFixed(3));h.style.setProperty('--mx',(x*100).toFixed(1)+'%');h.style.setProperty('--my',(y*100).toFixed(1)+'%')})});
if(!reduce){$$('.mag').forEach(function(el){el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect();el.style.transform='translate('+((e.clientX-r.left-r.width/2)*.22).toFixed(1)+'px,'+((e.clientY-r.top-r.height/2)*.32).toFixed(1)+'px)'});el.addEventListener('mouseleave',function(){el.style.transform=''})})}
/* tabs / switchers */
$$('[data-tabs]').forEach(function(w){var bs=$$('[data-t]',w),ps=$$('[data-p]',w);bs.forEach(function(bt){bt.addEventListener('click',function(){var i=bt.dataset.t;bs.forEach(function(x){x.classList.toggle('on',x===bt)});ps.forEach(function(p){var on=p.dataset.p===i;p.hidden=!on;if(on){p.classList.remove('pop');void p.offsetWidth;p.classList.add('pop')}})})})});
/* accordion */
$$('[data-acc]').forEach(function(w){var ps=$$('.pw',w);ps.forEach(function(p){$('.pr',p).addEventListener('click',function(){ps.forEach(function(x){x.classList.toggle('on',x===p)})})})});
/* lamp */
$$('.dy').forEach(function(bt){bt.addEventListener('click',function(){bt.closest('.lm').classList.toggle('on')})});
/* faq filter */
$$('[data-filter]').forEach(function(w){var bs=$$('[data-f]',w),items=$$('details[data-c]',w);bs.forEach(function(bt){bt.addEventListener('click',function(){var f=bt.dataset.f;bs.forEach(function(x){x.classList.toggle('on',x===bt)});items.forEach(function(it){it.hidden=!(f==='All'||it.dataset.c===f);it.removeAttribute('open')})})})});
/* admissions enquiry */
var fm=$('#enq');if(fm){var upd=function(){var n=$('#fn').value,p=$('#fp').value,c=$('.tb.on',fm).dataset.v,m='Hello, I would like to enquire about admission at Sanskar International School Hajipur. Child\u2019s class: '+c+'. Parent: '+n+'. Phone: '+p+'.';$('#wa').href='https://wa.me/917707090111?text='+encodeURIComponent(m);$('#ml').href='mailto:sanskarschoolhajipur@gmail.com?subject='+encodeURIComponent('Admission enquiry')+'&body='+encodeURIComponent(m)};fm.addEventListener('input',upd);fm.addEventListener('click',function(e){var t=e.target.closest('.tb[data-v]');if(t){$$('.tb',fm).forEach(function(x){x.classList.toggle('on',x===t)});upd()}});upd()}
})();
