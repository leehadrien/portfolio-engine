/* Services (hadrienlee.com/services), repo leehadrien/portfolio-engine. Load BEFORE kit/hl-kit.js.
   The look is native Webflow (sv10-* classes on the shared ab5-ground); motion settings are data-hl-* attributes on the
   elements. This file: 1) HL Kit page settings, 2) the dot-matrix face for the practice names and step numbers,
   3) the page: headline word rise, rows that open in place, practice names that resolve on arrival, the index link.
   The old hero sky, page-wide colour journey and hero lattice are retired: the HL Kit sky and lively dot grid replace them. */
(function(){
'use strict';
var W=window,D=document;
function $$(s,r){return [].slice.call((r||D).querySelectorAll(s))}

/* ---------- HL Kit: a light sky from the top that keeps moving, in this visit's colours, pulled toward the practice on
   screen (each practice carries its own data-palette); the hero's dot grid is the lively one (halftone wave, colour
   clouds, green lens under the pointer). Services moves more than About: the sky drifts faster and wider, and the
   hero's grid runs at data-hl-speed (set on #hero in the Designer) ---------- */
W.HLKIT_PAGE=W.HLKIT_PAGE||{mode:'light',sample:'[data-palette]',pull:.55,drift:2.6,amp:1.6,
  apply:function(){var K=W.HLKit,seq=K.roll();W.HLKIT_PAGE.seq=seq;
    var h=D.getElementById('hero');
    if(h){h.setAttribute('data-palette',[seq[0],seq[1],seq[2]].map(K.hex).join(' '));
      var set=function(){var r=h.getBoundingClientRect();h.style.setProperty('--sv-gx',Math.max(0,r.left)+'px')};set();addEventListener('resize',set)}
    /* the header is a shared component, so its links get their decode here */
    $$('.hd-link').forEach(function(a){if(!a.hasAttribute('data-hl-scramble'))a.setAttribute('data-hl-scramble','hover')})}};
})();

/* ---------- boot order ----------
   The headline is split into word spans, so the page must boot after the site's choreography engine (an inline
   DOMContentLoaded handler in the site footer) has picked its reveal units, as it did when this code lived in an
   on-page embed. This file is deferred, so it runs before DOMContentLoaded while readyState already reads
   "interactive"; whether DOMContentLoaded has fired yet is read from Navigation Timing instead. */
window.__svPreDCL=function(){var d=document,p=window.performance,n=p&&p.getEntriesByType&&p.getEntriesByType("navigation")[0],
  t=n?n.domContentLoadedEventStart:(p&&p.timing?p.timing.domContentLoadedEventStart:1);return d.readyState==="loading"||!t};

/* ---------- the dot-matrix face (shared with Home's hero and About's stack): real text stays for assistive tech, a
   canvas carries the look; dots fly in and resolve, and lean away from the pointer, warming to signal green ---------- */
(function(){
var G={"A": [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"], "B": ["####.", "#...#", "#...#", "####.", "#...#", "#...#", "####."], "C": [".###.", "#...#", "#....", "#....", "#....", "#...#", ".###."], "D": ["####.", "#...#", "#...#", "#...#", "#...#", "#...#", "####."], "E": ["#####", "#....", "#....", "####.", "#....", "#....", "#####"], "F": ["#####", "#....", "#....", "####.", "#....", "#....", "#...."], "G": [".###.", "#...#", "#....", "#.###", "#...#", "#...#", ".###."], "H": ["#...#", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"], "I": ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "#####"], "J": ["..###", "...#.", "...#.", "...#.", "...#.", "#..#.", ".##.."], "K": ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"], "L": ["#....", "#....", "#....", "#....", "#....", "#....", "#####"], "M": ["#...#", "##.##", "#.#.#", "#.#.#", "#...#", "#...#", "#...#"], "N": ["#...#", "##..#", "#.#.#", "#..##", "#...#", "#...#", "#...#"], "O": [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."], "P": ["####.", "#...#", "#...#", "####.", "#....", "#....", "#...."], "Q": [".###.", "#...#", "#...#", "#...#", "#.#.#", "#..#.", ".##.#"], "R": ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"], "S": [".####", "#....", "#....", ".###.", "....#", "....#", "####."], "T": ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."], "U": ["#...#", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."], "V": ["#...#", "#...#", "#...#", "#...#", "#...#", ".#.#.", "..#.."], "W": ["#...#", "#...#", "#...#", "#.#.#", "#.#.#", "##.##", "#...#"], "X": ["#...#", "#...#", ".#.#.", "..#..", ".#.#.", "#...#", "#...#"], "Y": ["#...#", "#...#", ".#.#.", "..#..", "..#..", "..#..", "..#.."], "Z": ["#####", "....#", "...#.", "..#..", ".#...", "#....", "#####"], "0": [".###.", "#...#", "#..##", "#.#.#", "##..#", "#...#", ".###."], "1": ["..#..", ".##..", "..#..", "..#..", "..#..", "..#..", ".###."], "2": [".###.", "#...#", "....#", "...#.", "..#..", ".#...", "#####"], "3": ["#####", "...#.", "..#..", "...#.", "....#", "#...#", ".###."], "4": ["...#.", "..##.", ".#.#.", "#..#.", "#####", "...#.", "...#."], "5": ["#####", "#....", "####.", "....#", "....#", "#...#", ".###."], "6": ["..##.", ".#...", "#....", "####.", "#...#", "#...#", ".###."], "7": ["#####", "....#", "...#.", "..#..", ".#...", ".#...", ".#..."], "8": [".###.", "#...#", "#...#", ".###.", "#...#", "#...#", ".###."], "9": [".###.", "#...#", "#...#", ".####", "....#", "...#.", ".##.."], "&": [".##..", "#..#.", "#.#..", ".#...", "#.#.#", "#..#.", ".##.#"], "/": ["....#", "....#", "...#.", "..#..", ".#...", "#....", "#...."], "-": [".....", ".....", ".....", "#####", ".....", ".....", "....."], ".": ["..", "..", "..", "..", "..", "##", "##"], ",": ["..", "..", "..", "..", "##", ".#", "#."], "'": ["##", ".#", "#.", "..", "..", "..", ".."], "?": [".###.", "#...#", "....#", "...#.", "..#..", ".....", "..#.."]},W=window,D=document;
function still(){return (W.DM&&W.DM.still&&W.DM.still())||W.matchMedia('(prefers-reduced-motion: reduce)').matches||D.body.classList.contains('a11y-motion')}
function gw(ch){return ch===' '?3:(G[ch]?G[ch][0].length:5)}
function wordCols(w){var c=0;for(var i=0;i<w.length;i++){c+=gw(w[i]);if(i<w.length-1)c+=1}return c}
function greedy(text,maxCols){var ws=text.split(' '),lines=[],cur='';ws.forEach(function(w){var t=cur?cur+' '+w:w;if(!cur||wordCols(t)<=maxCols)cur=t;else{lines.push(cur);cur=w}});if(cur)lines.push(cur);
  /* never end a line on a lone '&' or '/': carry it down */
  for(var i=0;i<lines.length-1;i++){var m=lines[i].match(/^(.*) ([&\/])$/);if(m){lines[i]=m[1];lines[i+1]=m[2]+' '+lines[i+1]}}return lines}
/* balanced wrap: as few lines as the width allows, then as even as possible (text-wrap: balance) */
function wrap(text,maxCols){var n=greedy(text,maxCols).length;if(n<2)return greedy(text,maxCols);var lo=1,hi=maxCols;while(lo<hi){var mid=(lo+hi)>>1;if(greedy(text,mid).length<=n)hi=mid;else lo=mid+1}return greedy(text,lo)}
function maxWord(text){return text.split(' ').reduce(function(m,w){return Math.max(m,wordCols(w))},0)}
function dots(lines,gap,center){var out=[],widths=lines.map(wordCols),cols=Math.max.apply(null,widths);lines.forEach(function(ln,li){var x=center?Math.floor((cols-widths[li])/2):0,y0=li*(7+gap);for(var i=0;i<ln.length;i++){var ch=ln[i],g=G[ch];if(ch===' '){x+=4;continue}
  if(g){for(var r=0;r<7;r++)for(var c=0;c<g[r].length;c++)if(g[r][c]==='#')out.push({gx:x+c,gy:y0+r,li:li})}x+=gw(ch)+1}});return {d:out,cols:cols,rows:lines.length*7+(lines.length-1)*gap}}
function rgb(c){var m=String(c).match(/\d+(\.\d+)?/g);if(String(c)[0]==='#'){var h=c.slice(1);if(h.length===3)h=h.replace(/./g,'$&$&');return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]}return m?m.slice(0,3).map(Number):[35,35,35]}
var all=[];
function mount(el,o){if(!el.querySelector('.dm-t')){var sp=D.createElement('span');sp.className='dm-t';sp.textContent=el.textContent.trim();el.textContent='';el.appendChild(sp)}var cv=D.createElement('canvas');cv.setAttribute('aria-hidden','true');cv.className='dm-cv';if(o.emit)cv.setAttribute('data-emit','');el.appendChild(cv);el.classList.add('dm-on');
  var st={el:el,cv:cv,o:o,pts:[],p:8,mx:-1e4,my:-1e4,hover:false,raf:0};all.push(st);return st}
function source(st){var el=st.el,w=el.clientWidth||el.parentElement.clientWidth,s=el.getAttribute('data-dots-s');return (s&&w<(st.o.narrow||640))?s:el.getAttribute('data-dots')}
function measure(st){var el=st.el,o=st.o,text=source(st),w=el.clientWidth||el.parentElement.clientWidth,target=o.pitch||8,minP=o.minPitch||3,p,lines;
  if(text.indexOf('|')>=0){lines=text.split('|');var mc=Math.max.apply(null,lines.map(wordCols));p=Math.min(target,(w-1)/(mc+1))}
  else{p=Math.min(target,(w-1)/(maxWord(text)+1));lines=wrap(text,Math.floor((w-1)/p)-1);
    /* no lone word on the last line: if it would strand one, set the whole name on one line, smaller */
    if(lines.length>1&&lines[lines.length-1].split(' ').length<2){var p1=(w-1)/(wordCols(text)+1);if(p1>=minP){p=p1;lines=[text]}}}
  return {p:Math.max(minP,p),lines:lines,w:w,text:text}}
function layout(st,p,lines){st.lines=lines;var o=st.o,w0=st.el.clientWidth;st.narrowNow=w0<(o.narrow||640);var center=o.align==='center'&&w0>=(o.narrow||640),res=dots(lines,o.gap||3,center),dpr=Math.min(2,W.devicePixelRatio||1),cv=st.cv;
  st.p=p;var w=Math.ceil(res.cols*p+p*.5),h=Math.ceil(res.rows*p+p*.5);cv.style.width=w+'px';cv.style.height=h+'px';cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);st.dpr=dpr;st.w=w;st.h=h;
  cv.style.marginLeft=center?'auto':'';cv.style.marginRight=center?'auto':'';
  var accLine=-1;if(o.accentFrom)lines.forEach(function(l,i){if(accLine<0&&l.indexOf(o.accentFrom)>=0)accLine=i});
  st.pts=res.d.map(function(d){var hx=d.gx*p+p*.75,hy=d.gy*p+p*.75,a=Math.random()*Math.PI*2,r=(3+Math.random()*14)*p;
    return {hx:hx,hy:hy,x:hx+Math.cos(a)*r,y:hy+Math.sin(a)*r*.55,ox:0,oy:0,del:(d.gx/Math.max(1,res.cols))*.55+Math.random()*.18,acc:accLine>=0&&d.li>=accLine}});
  if(still()||st.settled)st.settled=true;draw(st,st.settled?1:0)}
function draw(st,prog){var o=st.o,c=st.cv.getContext('2d'),dpr=st.dpr,p=st.p,r=p*((st.narrowNow&&o.rS)||o.r||.36);c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,st.w,st.h);
  var cs=getComputedStyle(st.el).color,base=rgb(o.color||cs),acc=rgb(o.accent||o.color||cs),hot=o.hot?rgb(o.hot):null;
  for(var i=0;i<st.pts.length;i++){var q=st.pts[i],k=prog>=1?1:Math.max(0,Math.min(1,(prog-q.del)/.27)),e=1-Math.pow(1-k,4),x=q.hx+(q.x-q.hx)*(1-e)+q.ox,y=q.hy+(q.y-q.hy)*(1-e)+q.oy,b=q.acc?acc:base;
    if(prog<1&&k<=0)continue;
    if(hot&&(q.ox||q.oy)){var t=Math.min(1,Math.sqrt(q.ox*q.ox+q.oy*q.oy)/(p*.8));b=[b[0]+(hot[0]-b[0])*t,b[1]+(hot[1]-b[1])*t,b[2]+(hot[2]-b[2])*t]}
    c.globalAlpha=prog>=1?1:Math.min(1,k*1.8);c.fillStyle='rgb('+(b[0]|0)+','+(b[1]|0)+','+(b[2]|0)+')';c.beginPath();c.arc(x,y,r,0,6.2832);c.fill();if(o.ring&&q.acc){c.strokeStyle=o.ring;c.lineWidth=1;c.stroke()}}c.globalAlpha=1}
function resolve(st){if(st.started)return;st.started=true;if(st.o.onStart)st.o.onStart(st.el);
  if(st.settled||still()){st.settled=true;draw(st,1);return}
  var T=st.o.dur||1700,t0=performance.now();(function f(){var pr=Math.max(0,Math.min(1,(performance.now()-t0)/T));draw(st,pr);if(pr<1)requestAnimationFrame(f);else{st.settled=true;if(st.hover)push(st)}})()}
function push(st){if(st.raf)return;(function f(){st.raf=0;var p=st.p,R=p*5.5,moving=false,b=st.cv.getBoundingClientRect(),mx=st.mx-b.left,my=st.my-b.top;
  for(var i=0;i<st.pts.length;i++){var q=st.pts[i],tx=0,ty=0;if(st.hover){var dx=q.hx-mx,dy=q.hy-my,d=Math.sqrt(dx*dx+dy*dy);if(d<R&&d>.01){var f2=Math.pow(1-d/R,2)*p*1.9;tx=dx/d*f2;ty=dy/d*f2}}
    q.ox+=(tx-q.ox)*.2;q.oy+=(ty-q.oy)*.2;if(Math.abs(tx-q.ox)>.05||Math.abs(ty-q.oy)>.05)moving=true;else{q.ox=tx;q.oy=ty}}
  draw(st,1);if(moving)st.raf=requestAnimationFrame(f)})()}
function init(sel,o){o=o||{};var els=[].slice.call(D.querySelectorAll(sel));if(!els.length)return [];var sts=els.map(function(el){return mount(el,o)});
  function relayout(){var ms=sts.map(measure),p=o.shared?Math.min.apply(null,ms.map(function(m){return m.p})):0;
    sts.forEach(function(st,i){var m=ms[i];if(p&&p<m.p&&m.text.indexOf('|')<0){m.lines=wrap(m.text,Math.floor((m.w-1)/p)-1)}layout(st,p||m.p,m.lines)})}
  relayout();var rt=0,lastW=innerWidth;addEventListener('resize',function(){if(innerWidth===lastW)return;lastW=innerWidth;clearTimeout(rt);rt=setTimeout(relayout,120)});
  sts.forEach(function(st){
    if(o.immediate)setTimeout(function(){resolve(st)},still()?0:(o.delay||0));
    else if('IntersectionObserver' in W&&!still()){var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){io.disconnect();resolve(st)}},{threshold:o.threshold||.6});io.observe(st.el)}else resolve(st);
    if(W.matchMedia('(hover:hover) and (pointer:fine)').matches){var h=o.hoverHost?(st.el.closest(o.hoverHost)||st.el):st.el;
      h.addEventListener('pointermove',function(e){if(!st.settled||still())return;st.mx=e.clientX;st.my=e.clientY;st.hover=true;push(st)});
      h.addEventListener('pointerleave',function(){st.hover=false;push(st)})}});
  /* belt and braces: a scroll check resolves anything in the reading zone if an observer is late */
  if(!o.immediate){var tk=0;function chk(){tk=0;sts.forEach(function(st){if(st.started)return;var r=st.el.getBoundingClientRect();if(r.top<innerHeight*.85&&r.bottom>innerHeight*.08)resolve(st)})}
    addEventListener('scroll',function(){if(!tk)tk=requestAnimationFrame(chk)},{passive:true});setTimeout(chk,400)}
  return sts}
W.DOTS={replay:function(sel){all.forEach(function(st){if(!st.el.matches(sel))return;st.started=false;st.settled=false;layout(st,st.p,st.lines);resolve(st)})},init:init,redraw:function(){all.forEach(function(s){draw(s,s.settled?1:0)})},all:all};
})();

/* ---------- the page ---------- */
(function(){var D=document,W=window,$=function(s){return D.querySelector(s)},$$=function(s){return [].slice.call(D.querySelectorAll(s))};
var RM=W.matchMedia('(prefers-reduced-motion: reduce)');function still(){return RM.matches||D.body.classList.contains('a11y-motion')}
function once(el,fn,th){if(still()||!('IntersectionObserver' in W)){fn(true);return}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.disconnect();fn(false)}})},{threshold:th==null?.25:th});io.observe(el)}
/* word rise: split once, each word rises from its own mask */
function wordRise(el,step){if(el.querySelector('.wi'))return;var words=el.textContent.trim().split(/\s+/);el.setAttribute('aria-label',el.textContent.trim());
  el.innerHTML=words.map(function(w,i){return '<span class="wr" aria-hidden="true"><span class="wi" style="transition-delay:'+(i*(step||55))+'ms">'+w.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</span></span>'}).join(' ');
  once(el,function(){el.classList.add('is-in')},.3)}
function boot(){var g=$('.ab5-ground');if(!g||g.__sv10||!$('.sv10-hero'))return;g.__sv10=1;g.classList.add('is-live');
  $$('[data-sv10="rise"]').forEach(function(el){wordRise(el,60)});
  /* rows: open in place; keyboard as a button */
  $$('.sv10-xh').forEach(function(h){function tog(){var r=h.closest('.sv10-xr'),on=!r.classList.contains('open');r.classList.toggle('open',on);h.setAttribute('aria-expanded',on?'true':'false')}
    h.addEventListener('click',tog);h.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tog()}});
    var t=h.querySelector('.sv10-xt'),n=h.querySelector('.sv10-nm');function chk(){if(!t||!n)return;t.classList.remove('no');var a=n.getBoundingClientRect(),b=t.getBoundingClientRect();if(b.width&&a.right+24>b.left)t.classList.add('no')}
    h.addEventListener('pointerenter',chk);h.addEventListener('focus',chk)});
  /* the practice names: the Home hero's face, resolving as you reach each one */
  DOTS.init('.sv10-pn',{pitch:11,minPitch:4,rS:.42,shared:true,gap:3,dur:1700,hot:'#3AE73A',threshold:.55,onStart:function(el){el.closest('.sv10-pr').classList.add('on')}});
  DOTS.init('.sv10-sn',{pitch:6,minPitch:5,shared:true,dur:1100,hot:'#3AE73A'});
  if(still())$$('.sv10-pr').forEach(function(p){p.classList.add('on')});
  /* the hero's index link lands on the index */
  $$('a[href="#index"]').forEach(function(a){a.addEventListener('click',function(e){var t=$('#index');if(!t)return;e.preventDefault();e.stopPropagation();var y=t.getBoundingClientRect().top+scrollY-96;if(W.__lenis&&!still())__lenis.scrollTo(y,{duration:1.5,easing:function(x){return 1-Math.pow(1-x,4)}});else scrollTo({top:y,behavior:still()?'auto':'smooth'})},true)})}
if(W.__svPreDCL())D.addEventListener('DOMContentLoaded',boot);else boot()})();
