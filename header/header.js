/* ===== HEADER V2: behaviour, one owner =====
   Runs inline at the end of the header, so the bar is wired before the page paints. No libraries: this header is on
   every page and cannot assume GSAP. Everything visible is native; this script only moves it.

   What it does
   - load: the logo's dots assemble, the links rise one by one, the subtitle types in, then the green signal bar draws
     in under the current page.
   - scroll: writes --p (detach) and --c (condense); the CSS does the rest. Also --hd-bottom for the menu, and .on-dark
     when dark content sits under the bar.
   - desktop hover: the signal bar chases the pointer, leading edge first, trailing edge catching up.
   - logo: dots near the pointer light up in the page's sky colours; after 8s with no input a slow wave of the same
     colours runs through the name.
   - page change: the bar runs to the clicked link and flashes, the logo dots fly across the bar, then the browser goes;
     the next page starts with the dots scattered and flies them back into the name.
   - phone menu: the dot grid floods out of the burger until it fills the screen, then the links decode in.
   Reduced motion (system or the site's switch) skips every movement; nothing is ever left hidden. */
(function(){
'use strict';
var W=window,D=document,R=D.documentElement;
var me=D.currentScript,hd=(me&&me.closest&&me.closest('.hd'))||D.querySelector('.hd.is-v2');
if(!hd||hd.__hdx)return;hd.__hdx=1;hd.classList.add('hdx');

var row=hd.querySelector('.hd-row'),brand=hd.querySelector('.hd-brand'),svg=hd.querySelector('.hd-logo svg'),nav=hd.querySelector('.hd-nav'),
    trk=hd.querySelector('.hd-trk'),menu=hd.querySelector('.hd-menu'),tog=hd.querySelector('.hd-burger'),list=hd.querySelector('.hd-menu-list'),
    sub=hd.querySelector('.hd-sub'),links=nav?[].slice.call(nav.querySelectorAll('.hd-link')):[];
var MQ=W.matchMedia('(prefers-reduced-motion: reduce)');
function still(){return MQ.matches||D.body.classList.contains('a11y-motion')}
function clamp(v,a,b){return v<a?a:v>b?b:v}
function rand(a,b){return a+Math.random()*(b-a)}
function eOut(k){return k>=1?1:1-Math.pow(2,-10*k)}
function eIO(k){return k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2}
var now=function(){return performance.now()};

/* the arrival flag: set by the page we came from when it played its exit */
var arrive=false;try{var t=+sessionStorage.getItem('hdx-go');sessionStorage.removeItem('hdx-go');arrive=t&&Date.now()-t<4000}catch(e){}
var quiet=D.visibilityState==='hidden'||still();

/* ---------- the links: text in a span (measured by the bar; also keeps the kit's hover scramble off them) ---------- */
links.forEach(function(a,i){a.style.setProperty('--i',i);if(!a.querySelector('.hdx-t')){var s=D.createElement('span');s.className='hdx-t';s.textContent=a.textContent;a.textContent='';a.appendChild(s)}});
if(tog)tog.style.setProperty('--i',links.length);
function curLink(){var c=null,p=location.pathname.replace(/\/+$/,'')||'/';
  links.forEach(function(a){if(a.classList.contains('w--current'))c=a});
  if(!c&&/^\/projects\//.test(p))links.forEach(function(a){if((a.getAttribute('href')||'').replace(/\/+$/,'')==='/work')c=a});
  return c}
var cur=curLink();

/* ---------- the palette: the page's sky (HL Kit), else the kit's pool ---------- */
var POOL=[[255,122,89],[76,195,217],[255,182,119],[43,179,163],[242,102,139],[196,140,240]];
function seq(){var K=W.HLKit;try{var s=K&&K._sky&&K._sky.seq();if(s&&s.length)return s}catch(e){}return POOL}
function palAt(P,f){var x=clamp(f,0,1)*(P.length-1),i=Math.min(P.length-2,Math.floor(x)),t=x-i,a=P[i],b=P[i+1];return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
function vivid(c,lightBar){var r=c[0]/255,g=c[1]/255,b=c[2]/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),h=0,d=mx-mn;
  if(d){h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;h/=6}
  var s=.88,l=lightBar?.46:.66,q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;function f(t){t<0&&(t+=1);t>1&&(t-=1);return t<1/6?p+(q-p)*6*t:t<.5?q:t<2/3?p+(q-p)*(2/3-t)*6:p}
  return [f(h+1/3)*255,f(h)*255,f(h-1/3)*255]}
function rgbOf(s){var m=(s||'').match(/[\d.]+/g);return m?[+m[0],+m[1],+m[2]]:[13,13,13]}

/* ---------- the logo: every dot has its own position, opacity, size and light ---------- */
var L=(function(){
  if(!svg)return null;
  var dots=[].slice.call(svg.querySelectorAll('use')).map(function(el){var x=+el.getAttribute('x')||0,y=+el.getAttribute('y')||0;return {el:el,x:x,y:y,dx:0,dy:0,o:1,g:0,tw:null,lit:false}});
  var ptr=null,wave=0,raf=0,until=0,WAVE=1900;
  function tw(d,to,delay,dur,ease){d.tw={f:{dx:d.dx,dy:d.dy,o:d.o},to:to,t0:now()+delay,dur:dur,ease:ease}}
  function paintDot(d,base,P,light){var s=1+.38*d.g;
    d.el.setAttribute('transform',(d.dx||d.dy||s!==1)?'translate('+(d.x*(1-s)+d.dx).toFixed(2)+' '+(d.y*(1-s)+d.dy).toFixed(2)+') scale('+s.toFixed(3)+')':'');
    d.el.style.opacity=d.o>=.999?'':d.o.toFixed(3);
    if(d.g>.004){var c=palAt(P,d.x/400);var k=Math.min(1,d.g*1.15);
      d.el.style.fill='rgb('+Math.round(base[0]+(c[0]-base[0])*k)+','+Math.round(base[1]+(c[1]-base[1])*k)+','+Math.round(base[2]+(c[2]-base[2])*k)+')';d.lit=true}
    else if(d.lit){d.el.style.fill='';d.lit=false}}
  function loop(){raf=0;var t=now(),act=t<until,glowing=!!ptr||!!wave,base=null,P=null,light=false;
    for(var i=0;i<dots.length;i++){var d=dots[i];
      if(d.tw){act=true;var k=(t-d.tw.t0)/d.tw.dur;
        if(k>=1){d.dx=d.tw.to.dx;d.dy=d.tw.to.dy;d.o=d.tw.to.o;d.tw=null}
        else if(k>0){var e=d.tw.ease(k);d.dx=d.tw.f.dx+(d.tw.to.dx-d.tw.f.dx)*e;d.dy=d.tw.f.dy+(d.tw.to.dy-d.tw.f.dy)*e;d.o=d.tw.f.o+(d.tw.to.o-d.tw.f.o)*e}}
      var gt=0;if(ptr){var dist=Math.hypot(d.x-ptr.x,(d.y-ptr.y)*1.4);gt=Math.pow(clamp(1-dist/105,0,1),.7)}
      if(wave){var w=-100+(t-wave)/WAVE*620;gt=Math.max(gt,Math.exp(-Math.pow((d.x-w)/48,2)))}
      var ng=d.g+(gt-d.g)*.2;if(Math.abs(gt-ng)>.004)act=true;else ng=gt;d.g=ng;
      if(d.g>.004&&!base){base=rgbOf(getComputedStyle(svg).color);light=(base[0]+base[1]+base[2])<300;P=seq().map(function(c){return vivid(c,light)})}
      paintDot(d,base,P,light)}
    if(wave&&t-wave>WAVE)wave=0;if(wave||glowing)act=true;
    if(act)raf=requestAnimationFrame(loop)}
  function kick(){if(!raf)raf=requestAnimationFrame(loop)}
  function span(){var b=svg.getBoundingClientRect(),r=row.getBoundingClientRect();return b.width?r.width/(b.width/400):800}
  return {
    assemble:function(){if(quiet)return;dots.forEach(function(d){d.dx=rand(-28,28);d.dy=rand(-34,34);d.o=0;tw(d,{dx:0,dy:0,o:1},d.x/8*13+rand(0,90),760,eOut)});loop()},
    scattered:function(){var S=span();dots.forEach(function(d){d.dx=rand(-d.x-30,S-d.x);d.dy=rand(-46,58);d.o=rand(.25,.8)});loop()},
    scatter:function(){if(still())return;var S=span();dots.forEach(function(d){tw(d,{dx:rand(-d.x-30,S-d.x),dy:rand(-46,58),o:rand(.5,1)},rand(0,110),640,eIO)});kick()},
    reform:function(delay){dots.forEach(function(d){if(still()){d.tw=null;d.dx=d.dy=0;d.o=1}else tw(d,{dx:0,dy:0,o:1},(delay||0)+rand(0,200),880,eOut)});kick()},
    reset:function(){dots.forEach(function(d){d.tw=null;d.dx=d.dy=0;d.o=1});ptr=null;wave=0;kick()},
    shimmer:function(){if(still()||D.hidden)return;wave=now();kick()},
    pointer:function(p){ptr=p;kick()},
    refresh:function(ms){until=now()+ms;kick()}};
})();

/* ---------- the signal track ---------- */
var T={l:0,r:0,tl:0,tr:0,dir:1,run:0},drawn=false;
var FAST=.15,SLOW=.06;/* leading and trailing edge, per frame. Lower = slower, more stretch */
function bounds(a){var s=a.querySelector('.hdx-t')||a,ls=parseFloat(getComputedStyle(s).letterSpacing)||0,n=nav.getBoundingClientRect(),r=s.getBoundingClientRect();
  return [r.left-n.left,r.right-n.left-ls]}
function tpaint(){if(!trk)return;trk.style.transform='translateX('+T.l.toFixed(2)+'px)';trk.style.width=Math.max(0,T.r-T.l).toFixed(2)+'px'}
function ttick(){T.l+=(T.tl-T.l)*(T.dir>0?SLOW:FAST);T.r+=(T.tr-T.r)*(T.dir>0?FAST:SLOW);tpaint();
  if(Math.abs(T.tl-T.l)+Math.abs(T.tr-T.r)>.3)requestAnimationFrame(ttick);else{T.l=T.tl;T.r=T.tr;tpaint();T.run=0}}
function go(a,instant){if(!trk||!nav)return;if(!a){var m=(T.l+T.r)/2;T.tl=T.tr=m;T.dir=1}else{var b=bounds(a);T.dir=(b[0]+b[1])/2>=(T.l+T.r)/2?1:-1;T.tl=b[0];T.tr=b[1]}
  trk.classList.toggle('is-off',!a&&T.tl===T.tr);
  if(instant||still()||D.hidden){T.l=T.tl;T.r=T.tr;tpaint();return}if(!T.run){T.run=1;requestAnimationFrame(ttick)}}
function rest(){if(cur)go(cur);else{go(null)}}
if(nav&&trk){
  links.forEach(function(a){
    function on(){links.forEach(function(x){x.classList.toggle('is-on',x===a)});nav.classList.add('is-hover');go(a)}
    a.addEventListener('pointerenter',on);a.addEventListener('focus',on);
    a.addEventListener('pointerleave',function(){a.classList.remove('is-on')});
    a.addEventListener('blur',function(){a.classList.remove('is-on');setTimeout(function(){if(!nav.contains(D.activeElement)){nav.classList.remove('is-hover');rest()}},0)})});
  nav.addEventListener('pointerleave',function(){if(nav.contains(D.activeElement))return;nav.classList.remove('is-hover');links.forEach(function(x){x.classList.remove('is-on')});rest()});
  W.addEventListener('resize',function(){var a=nav.querySelector('.is-on')||cur;if(a){var b=bounds(a);T.l=T.tl=b[0];T.r=T.tr=b[1];tpaint()}})}

/* ---------- the logo hover ---------- */
if(brand&&L&&W.matchMedia('(hover:hover) and (pointer:fine)').matches){
  brand.addEventListener('pointermove',function(e){if(still())return;var r=svg.getBoundingClientRect();L.pointer({x:(e.clientX-r.left)/r.width*400,y:(e.clientY-r.top)/r.height*40})});
  brand.addEventListener('pointerleave',function(){L.pointer(null)})}

/* ---------- scroll: detach + condense, the bar's bottom edge, dark content underneath ---------- */
var DARK='.wk-card, .cs-proto, .cs-thumb, .cf-done, .st-sheet, [data-hd-dark]',darks=[],dist=120,fold=0,shrink=10,open=false,closing=false,sq=0;
function readVars(){var cs=getComputedStyle(R);dist=parseFloat(cs.getPropertyValue('--hd-dist'))||120;shrink=parseFloat(cs.getPropertyValue('--hd-shrink'))||0;
  fold=Math.max(0,hd.offsetHeight-row.offsetHeight);hd.style.setProperty('--hd-fold',fold+'px')}
function collect(){darks=[].slice.call(D.querySelectorAll(DARK))}
function paint(){sq=0;var y=W.pageYOffset||R.scrollTop||0,p=clamp(y/dist,0,1),c=(open||closing)?1:p;
  hd.style.setProperty('--p',p.toFixed(4));hd.style.setProperty('--c',c.toFixed(4));hd.classList.toggle('is-folded',c>.5);
  var hr=hd.getBoundingClientRect(),bottom=Math.round(hr.top+row.offsetHeight-shrink*c);
  R.style.setProperty('--hd-bottom',bottom+'px');R.style.setProperty('--hd-h',bottom+'px');
  var hit=false,w=W.innerWidth;for(var i=0;i<darks.length;i++){var r=darks[i].getBoundingClientRect();if(r.width>w*.25&&r.top<bottom&&r.bottom>hr.top){hit=true;break}}
  hd.classList.toggle('on-dark',hit&&p>.05)}
function q(){if(!sq)sq=requestAnimationFrame(paint)}
readVars();collect();paint();
if(D.fonts&&D.fonts.ready)D.fonts.ready.then(function(){readVars();q()});
W.addEventListener('scroll',q,{passive:true});
W.addEventListener('resize',function(){readVars();collect();q()});
W.addEventListener('load',function(){readVars();collect();paint();if(cur&&drawn&&!T.run&&!(nav&&nav.classList.contains('is-hover')))go(cur,true)});
D.addEventListener('DOMContentLoaded',function(){collect();q()});

/* ---------- idle shimmer: only after 8s with no scroll, pointer or keys ---------- */
var idleT=0;function idle(){clearTimeout(idleT);idleT=setTimeout(function(){if(L&&!open)L.shimmer();idle()},8000)}
['pointermove','keydown','wheel','touchstart','scroll'].forEach(function(ev){W.addEventListener(ev,idle,{passive:true})});idle();

/* ---------- subtitle type-in ---------- */
var CH='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789';
function scramble(el,txt,ms,done){if(!el)return;cancelAnimationFrame(el._r);if(still()){el.textContent=txt;if(done)done();return}var from=el.textContent,n=Math.max(from.length,txt.length),t0=now();
  function f(){var p=Math.min(1,(now()-t0)/ms),rev=Math.floor(p*n),s='';
    for(var i=0;i<n;i++){if(i<rev)s+=txt[i]||'';else if(i<rev+5){if(i<txt.length)s+=txt[i]===' '?' ':CH[Math.random()*CH.length|0]}else s+=from[i]||''}
    el.textContent=s;if(p<1)el._r=requestAnimationFrame(f);else{el.textContent=txt;if(done)done()}}
  el._r=requestAnimationFrame(f)}

/* ---------- load ---------- */
function ready(){hd.classList.add('is-ready')}
function settle(){requestAnimationFrame(function(){requestAnimationFrame(function(){hd.classList.remove('is-now')})})}
if(quiet){drawn=true;hd.classList.add('is-now','is-in');ready();settle();if(cur)go(cur,true);else go(null,true)}
else if(arrive){
  drawn=true;hd.classList.add('is-now','is-in');ready();settle();if(L){L.scattered();L.reform(60)}
  if(cur)requestAnimationFrame(function(){go(cur,true)});else go(null,true)}
else{
  if(L)L.assemble();
  requestAnimationFrame(function(){requestAnimationFrame(function(){hd.classList.add('is-in')})});
  setTimeout(ready,1400);
  if(sub){var st=sub.textContent;sub.setAttribute('aria-label',st);sub.style.minHeight=sub.offsetHeight+'px';sub.textContent='';
    setTimeout(function(){scramble(sub,st,560,function(){sub.style.minHeight='';readVars();q()})},380)}
  if(trk){if(cur){requestAnimationFrame(function(){var b=bounds(cur);T.l=T.r=T.tl=T.tr=b[0];tpaint();setTimeout(function(){drawn=true;if(!(nav&&nav.classList.contains('is-hover')))go(cur)},760)})}else{drawn=true;go(null,true)}}}

/* ---------- page change: exit here, arrival on the next page ---------- */
function leaving(a,e){if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return false;
  var t=a.getAttribute('target');if(t&&t!=='_self')return false;var h=a.getAttribute('href')||'';if(!h||h.charAt(0)==='#'||/^(mailto|tel):/.test(h))return false;
  var u;try{u=new URL(a.href,location.href)}catch(x){return false}if(u.origin!==location.origin)return false;
  if(u.pathname===location.pathname&&u.search===location.search)return false;return u.href}
var busy=false;
function exitTo(href,a,fromMenu){if(busy)return;busy=true;try{sessionStorage.setItem('hdx-go',String(Date.now()))}catch(x){}
  if(still()){location.href=href;return}
  if(!fromMenu&&trk&&a&&links.indexOf(a)>=0){go(a);setTimeout(function(){trk.classList.remove('is-flash');void trk.offsetWidth;trk.classList.add('is-flash')},300)}
  if(fromMenu&&a){a.classList.add('is-hit');setTimeout(function(){wipeClose()},220)}
  if(L)setTimeout(L.scatter,fromMenu?60:100);
  setTimeout(function(){location.href=href},fromMenu?620:540)}
function wire(a,fromMenu){a.addEventListener('click',function(e){var href=leaving(a,e);if(!href){if(fromMenu&&open&&!e.defaultPrevented)wipeClose();return}e.preventDefault();exitTo(href,a,fromMenu)})}
links.forEach(function(a){wire(a,false)});
if(brand)wire(brand,false);
W.addEventListener('pageshow',function(e){if(!e.persisted)return;busy=false;if(L)L.reset();if(open)setOpen(false,true);
  try{sessionStorage.removeItem('hdx-go')}catch(x){}[].forEach.call(hd.querySelectorAll('.is-hit'),function(x){x.classList.remove('is-hit')});
  nav&&nav.classList.remove('is-hover');trk&&trk.classList.remove('is-flash');if(cur)go(cur,true);paint()});

/* ---------- phone menu: the pixel wipe ---------- */
var cv=null,wr=0,mlinks=list?[].slice.call(list.querySelectorAll('a')):[];
mlinks.forEach(function(a,i){a.style.setProperty('--i',i);wire(a,true)});
function wipe(dir,done){if(!list)return;if(!cv){cv=D.createElement('canvas');cv.className='hdx-wipe';cv.setAttribute('aria-hidden','true');list.insertBefore(cv,list.firstChild)}
  var dpr=Math.min(2,W.devicePixelRatio||1),Wd=W.innerWidth,Ht=W.innerHeight;cv.width=Math.round(Wd*dpr);cv.height=Math.round(Ht*dpr);
  var x=cv.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);var br=(tog||row).getBoundingClientRect(),ox=br.left+br.width/2,oy=br.top+br.height/2;
  var P=13,maxD=Math.hypot(Math.max(ox,Wd-ox),Ht-oy)+20,Rr=P*.76,col=D.body.classList.contains('hl-dark')?'#F2F3F4':'#0A0A0A',t0=now(),dur=still()?1:dir?720:480;
  cancelAnimationFrame(wr);
  function f(){var p=Math.min(1,(now()-t0)/dur),qv=dir?p:1-p;x.clearRect(0,0,Wd,Ht);x.fillStyle=col;
    if(qv>=1){x.fillRect(0,0,Wd,Ht)}else for(var yy=P/2;yy<Ht+P;yy+=P)for(var xx=P/2;xx<Wd+P;xx+=P){var d=Math.hypot(xx-ox,yy-oy)/maxD,k=clamp((qv-d*.55)/.45,0,1);if(k<=0)continue;
      var e=1-Math.pow(1-k,3);x.beginPath();x.arc(xx,yy,e*Rr,0,6.2832);x.fill()}
    if(p<1)wr=requestAnimationFrame(f);else if(done)done()}
  wr=requestAnimationFrame(f)}
function lock(on){D.body.style.overflow=on?'hidden':'';var l=W.__lenis;if(l)try{on?l.stop():l.start()}catch(e){}}
var inT=0;
function finish(){closing=false;list.classList.remove('is-closing');hd.classList.remove('is-menu');lock(false);paint();if(L)L.refresh(500)}
function setOpen(o,instant){if(o===open)return;open=o;clearTimeout(inT);if(L)L.refresh(500);
  if(o){closing=false;hd.classList.add('is-menu');lock(true);paint();list.classList.remove('is-closing','is-in');wipe(1);
    inT=setTimeout(function(){if(!open)return;list.classList.add('is-in');mlinks.forEach(function(a,i){var t=a.querySelector('.hd-wl-t');if(!t)return;var s=t.getAttribute('data-t')||t.textContent;t.setAttribute('data-t',s);t.textContent='';setTimeout(function(){scramble(t,s,420)},i*70)})},still()?0:430)}
  else{list.classList.remove('is-in');if(instant||still()){if(cv)cv.getContext('2d').clearRect(0,0,cv.width,cv.height);finish();return}
    closing=true;list.classList.add('is-closing');wipe(0,function(){if(!open)finish()})}}
function wipeClose(){if(!open)return;if(tog&&tog.classList.contains('w--open')){var $=W.jQuery;if($&&menu)$(menu).triggerHandler('w-close');else tog.click()}if(open)setOpen(false)}
if(tog&&list){var was=false;
  new MutationObserver(function(){var n=tog.classList.contains('w--open');if(n===was)return;was=n;setOpen(n)}).observe(tog,{attributes:true,attributeFilter:['class']})}
})();
