/* HL Kit: the site-wide ground and motion, one file for every page (Webflow: site footer code).
   1. The sky. One moving ground mapped to the document: ink under the hero, glowing; through deep colour; into a
      light drifting sky for the content. Colours come from a curated pool, re-rolled every visit, drifting as you
      scroll, and pulled toward whatever is on screen (images, [data-palette]). Every mix carries a warm colour;
      purple and blue never pair alone. Green is not in the pool: it stays for actions.
   2. The motion the Home page introduced, wired by attributes so the Designer can place it:
        data-hl-scramble="in|hover"  letters scramble, then resolve (in: when it arrives; hover: on its row/card)
        data-hl-count                numbers step up from zero when they arrive
        data-hl-step                 windows open in stepped frames from the centre (with the reveal engine)
        data-hl-magnet               leans toward the pointer
        data-hl-grid                 a Dot Grid in this hero
                                     (tokens: ink = dark dots; lively = halftone wave, colour clouds, green lens)
        data-hl-speed="1.6"           with lively: how fast the wave and clouds move (1 = calm)
   Page config: window.HLKIT_PAGE = {dark:'#hero', light:'#index', lead:'magenta', sample:'img.wk-thumb,[data-palette]'}
   Motion stands down for prefers-reduced-motion and the site's Reduce motion switch (body.a11y-motion). */
(function(){
'use strict';
var W=window,D=document,K=W.HLKit=W.HLKit||{};if(K.__on)return;K.__on=1;
var MQ=W.matchMedia('(prefers-reduced-motion: reduce)'),FINE=W.matchMedia('(hover:hover) and (pointer:fine)').matches,G=W.gsap;
function still(){return MQ.matches||D.body.classList.contains('a11y-motion')}K.still=still;
function $(s,r){return (r||D).querySelector(s)}function $$(s,r){return s?[].slice.call((r||D).querySelectorAll(s)):[]}
function cl(v,a,b){return Math.max(a,Math.min(b,v))}function sm(t){t=cl(t,0,1);return t*t*(3-2*t)}
function hx(h){h=String(h).replace('#','');return [parseInt(h.substr(0,2),16),parseInt(h.substr(2,2),16),parseInt(h.substr(4,2),16)]}
function hsl(c){var r=c[0]/255,g=c[1]/255,b=c[2]/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,h=0,s=0,d=mx-mn;if(d){s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?((g-b)/d+(g<b?6:0)):mx===g?(b-r)/d+2:(r-g)/d+4;h*=60}return [h,s,l]}
function rgbOf(h,s,l){h=((h%360)+360)%360/360;function f(p,q,t){if(t<0)t+=1;if(t>1)t-=1;return t<1/6?p+(q-p)*6*t:t<1/2?q:t<2/3?p+(q-p)*(2/3-t)*6:p}if(!s)return [l*255,l*255,l*255];var q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;return [f(p,q,h+1/3)*255,f(p,q,h)*255,f(p,q,h-1/3)*255]}
function mx(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
function glow(c){var x=hsl(c);return rgbOf(x[0],Math.min(1,Math.max(.55,x[1]*1.1)),Math.max(.58,x[2]))}
function pastel(c){var x=hsl(c);return rgbOf(x[0],Math.min(.88,Math.max(.55,x[1])),.79)}
function deepOf(c){var x=hsl(c);return rgbOf(x[0],Math.min(.72,Math.max(.42,x[1])),.22)}
function rgba(c,a){return 'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+','+a.toFixed(3)+')'}
K.util={cl:cl,hx:hx,hsl:hsl,rgbOf:rgbOf,mix:mx,glow:glow,pastel:pastel};

/* ---------------- the palette: a curated pool, re-rolled every visit ---------------- */
var POOL={coral:'#FF7A59',apricot:'#FFB677',yellow:'#FFD166',magenta:'#F2668B',cyan:'#4CC3D9',teal:'#2BB3A3',mint:'#8FE3B5',lilac:'#C48CF0',sky:'#6EAAE1'};
var WARM=['coral','apricot','yellow','magenta'],COOL=['cyan','teal','mint','lilac','sky'];
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.random()*(i+1)|0,t=a[i];a[i]=a[j];a[j]=t}return a}
/* warm and cool alternate, so any two or three neighbours hold a warm, and lilac and sky are never alone together */
K.roll=function(lead){var w=shuffle(WARM),c=shuffle(COOL),seq=[],first=lead&&POOL[lead]?lead:null,warmFirst=first?WARM.indexOf(first)>=0:Math.random()<.5;
  if(first){if(warmFirst)w=[first].concat(w.filter(function(x){return x!==first}));else c=[first].concat(c.filter(function(x){return x!==first}))}
  for(var i=0;i<6;i++)seq.push((i%2===0)===warmFirst?w[(i/2|0)%w.length]:c[(i/2|0)%c.length]);return seq.map(function(n){return hx(POOL[n])})};

/* ---------------- content colours: what's on screen ---------------- */
var cache=new Map();
function imgColor(img){var src=img.currentSrc||img.src;if(!src)return null;if(cache.has(src))return cache.get(src);cache.set(src,null);
  /* same sampler as the case studies: bucket the saturated pixels of a 24x24 copy, keep the 3 most frequent distinct colours */
  var im=new Image();im.crossOrigin='anonymous';im.onload=function(){try{var c=D.createElement('canvas');c.width=c.height=24;var x=c.getContext('2d',{willReadFrequently:true});x.drawImage(im,0,0,24,24);
      var d=x.getImageData(0,0,24,24).data,Bk={};for(var i=0;i<d.length;i+=4){var r=d[i],g=d[i+1],b=d[i+2],h=hsl([r,g,b]);if(h[1]<.28||h[2]<.14||h[2]>.9)continue;var k=(r>>5)+','+(g>>5)+','+(b>>5);(Bk[k]=Bk[k]||{n:0,r:0,g:0,b:0}).n++;Bk[k].r+=r;Bk[k].g+=g;Bk[k].b+=b}
      var top=Object.keys(Bk).map(function(k){var o=Bk[k];return {n:o.n,c:[o.r/o.n,o.g/o.n,o.b/o.n]}}).sort(function(a,b){return b.n-a.n}),pick=[];
      top.forEach(function(t){if(pick.length<3&&pick.every(function(q){return Math.abs(q[0]-t.c[0])+Math.abs(q[1]-t.c[1])+Math.abs(q[2]-t.c[2])>90}))pick.push(t.c)});
      cache.set(src,pick.length?pick:null)}catch(e){cache.set(src,null)}};im.src=src;return null}
function elColor(e){var p=e.getAttribute&&e.getAttribute('data-palette');if(p){var m=p.match(/#[0-9a-fA-F]{6}/g);if(m)return m.map(hx)}
  if(e.tagName==='IMG')return imgColor(e);return null}
K.palette=elColor;
K.hex=function(c){return '#'+c.map(function(v){return ('0'+(Math.round(v)&255).toString(16)).slice(-2)}).join('').toUpperCase()};

/* ---------------- the sky ---------------- */
K.sky=function(o){o=o||{};if(K._sky)return K._sky;
  var host=D.createElement('div');host.className='hl-sky';host.setAttribute('aria-hidden','true');host.setAttribute('data-no-anim','');var cv=D.createElement('canvas');host.appendChild(cv);
  var gr=D.createElement('div');gr.className='hl-grain';host.appendChild(gr);D.body.insertBefore(host,D.body.firstChild);
  D.documentElement.classList.add('hl-sky-on');/* the Designer's ground colours ([data-hl-ground]) step aside for the sky */
  try{var nc=D.createElement('canvas');nc.width=nc.height=128;var nx=nc.getContext('2d'),id=nx.createImageData(128,128);for(var q=0;q<id.data.length;q+=4){var v=Math.random()*255|0;id.data[q]=id.data[q+1]=id.data[q+2]=v;id.data[q+3]=255}nx.putImageData(id,0,0);gr.style.backgroundImage='url('+nc.toDataURL()+')'}catch(e){}
  var ctx=cv.getContext('2d'),CW=72,CH=48,INK=[13,13,15],PAPER=[250,248,246];cv.width=CW;cv.height=CH;
  var DRIFT=o.drift||1,AMP=o.amp||1,SEQ=(o.seq&&o.seq.length?o.seq:K.roll(o.lead)),LIGHT=o.mode==='light',PULL=o.pull||.5,cur=[],lastDraw=0,sampleEls=[],content=[],d0=0,d1=0,d2=0,dh=0,vh=innerHeight,t0=performance.now(),lastY=-1,lastT=0,raf=0,lastSample=0;
  function el(x){return typeof x==='string'?$(x):x}
  function heroPal(){var p=o.heroPalette&&o.heroPalette();return p&&p.length?p:null}
  function measure(){vh=innerHeight;var y=scrollY,a=el(o.dark),b=el(o.light),br=el(o.bridge);dh=D.documentElement.scrollHeight;sampleEls=$$(o.sample||'[data-palette]');
    /* light pages (no ink hero): the whole page sits in the light sky from the top */
    if(LIGHT){d0=-3;d1=-2;d2=-1;return}
    if(!a||!b){d0=vh*.6;d1=vh*1.1;d2=vh*1.6;return}
    var ab=a.getBoundingClientRect().bottom+y,bt=b.getBoundingClientRect().top+y;d0=ab-vh*.28;d1=br?br.getBoundingClientRect().top+y+br.offsetHeight*.5:(ab+bt)/2;
    d2=bt+Math.min(240,vh*.28);if(d1<d0+80)d1=d0+80;if(d2<d1+120)d2=d1+120;dh=D.documentElement.scrollHeight;
    sampleEls=$$(o.sample||'[data-palette]')}
  function phase(d){return d<d1?sm((d-d0)/(d1-d0)):1+sm((d-d1)/(d2-d1))}
  /* the light sky drifts one colour per ~1.6 screens of scroll, whatever the page length (a short page used to race through the
     whole palette and read as flashing) */
  function journey(d){return Math.max(0,d-d2)/Math.max(700,vh*1.6)}
  function seqAt(k,j){var n=SEQ.length,f=k+j,i=Math.floor(f),t=f-i;return mx(SEQ[((i%n)+n)%n],SEQ[(((i+1)%n)+n)%n],sm(t))}
  /* what's on screen feeds the sky. An opened item (o.focus) takes over the whole sky with its own colours */
  function sample(now){if(now-lastSample<450)return;lastSample=now;var out=[],fe=o.focus&&$(o.focus);
    if(fe){var fc=elColor(fe);if(fc){content=fc.map(function(c,i){return {c:c,y:.5,all:1}});return}}
    /* one lead colour per item on screen (so a row of covers shows a colour from each); a lone item gives all of its colours */
    var extra=[];for(var i=0;i<sampleEls.length&&out.length<6;i++){var e=sampleEls[i],r=e.getBoundingClientRect();if(!r.width||r.bottom<vh*.05||r.top>vh*.95)continue;var cs=elColor(e),y=(r.top+r.bottom)/2/vh;
      if(cs){out.push({c:cs[0],y:y});cs.slice(1).forEach(function(c){extra.push({c:c,y:y})})}}
    if(out.length<3)out=out.concat(extra).slice(0,6);content=out}
  function deep(){var h=heroPal();return deepOf(h?h[0]:SEQ[0])}
  function ground(d){var p=phase(d);if(p<=1)return mx(INK,deep(),p);var j=journey(d),lt=mx(PAPER,pastel(seqAt(0,j)),.14);return mx(deep(),lt,p-1)}
  var CL=[[.16,.22,.2,.16,23,0],[.84,.3,.18,.2,29,1.6],[.42,.7,.22,.16,34,2.9],[.78,.86,.2,.18,27,4.1],[.1,.9,.18,.14,38,5.3]];
  function draw(now){var y=scrollY,t=still()?0:(now-t0)/1000*DRIFT,hp=heroPal(),g=ctx.createLinearGradient(0,0,0,CH);sample(now);
    for(var i=0;i<=6;i++){var f=i/6,c=ground(y+f*vh);g.addColorStop(f,'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')')}ctx.fillStyle=g;ctx.fillRect(0,0,CW,CH);
    for(var k=0;k<CL.length;k++){var q=CL[k],cx=CW*(q[0]+q[2]*AMP*Math.sin(t*6.2832/q[4]+q[5])),cy=CH*(q[1]+q[3]*AMP*Math.cos(t*6.2832/(q[4]*1.27)+q[5])),d=y+cy/CH*vh,p=phase(d),j=journey(d),
        base=seqAt(k,j),R=Math.max(CW,CH)*.5;
      /* lean toward what's on screen, nearest first */
      if(content.length){var best=content[k%content.length],bd=9;if(!best.all)content.forEach(function(x){var dd=Math.abs(x.y-cy/CH)+(k%content.length===content.indexOf(x)?0:.15);if(dd<bd){bd=dd;best=x}});base=mx(base,best.c,best.all?Math.max(PULL,.62):PULL)}
      if(p<=1&&hp)base=mx(base,hp[k%hp.length],.65);
      /* colours glide (about a second) instead of jumping when what's on screen changes */
      if(!cur[k]||still()||!lastDraw)cur[k]=base;else cur[k]=mx(cur[k],base,1-Math.exp(-Math.min(120,now-lastDraw)/900));base=cur[k];
      var foot=1-sm((d-(dh-vh*1.1))/(vh*.7))*.55,a1=p<=1?.34*(1-.4*p):.2*(2-p),a2=p<=1?0:.7*(p-1)*foot,rg,gc=glow(base),pc=pastel(base);
      if(a1>.01){rg=ctx.createRadialGradient(cx,cy,0,cx,cy,R);rg.addColorStop(0,rgba(gc,a1));rg.addColorStop(1,rgba(gc,0));ctx.fillStyle=rg;ctx.fillRect(0,0,CW,CH)}
      if(a2>.01){rg=ctx.createRadialGradient(cx,cy,0,cx,cy,R*1.1);rg.addColorStop(0,rgba(pc,a2));rg.addColorStop(1,rgba(pc,0));ctx.fillStyle=rg;ctx.fillRect(0,0,CW,CH)}}
    lastDraw=now;var lite=phase(y+70)>1.55,b=D.body;if(lite!==b.classList.contains('hd-lite')){b.classList.toggle('hd-lite',lite);b.classList.toggle('hl-dark',!lite)}}
  function loop(now){raf=0;if(D.hidden)return;var y=scrollY;if(y!==lastY||(!still()&&now-lastT>60)){lastY=y;lastT=now;draw(now)}raf=requestAnimationFrame(loop)}
  D.body.classList.add('hl-dark');measure();draw(performance.now());raf=requestAnimationFrame(loop);
  function re(){measure();draw(performance.now())}
  addEventListener('resize',re);addEventListener('load',re);if(D.fonts&&D.fonts.ready)D.fonts.ready.then(re);setTimeout(re,1500);setTimeout(re,4000);
  D.addEventListener('visibilitychange',function(){if(!D.hidden&&!raf)raf=requestAnimationFrame(loop)});
  K._sky={measure:re,phase:function(d){return phase(d)},seq:function(){return SEQ}};return K._sky};

/* ---------------- Dot Grid (React Bits), for heroes ---------------- */
K.dotGrid=function(cv,o){if(!cv)return null;o=o||{};var ctx=cv.getContext('2d'),host=o.host||cv.parentNode,dpr=1,Wc=0,Hc=0,dots=[],act=o.act||[58,231,58],base=o.base||[242,240,243],
    P={x:-1e4,y:-1e4,sx:-1e4,sy:-1e4,lx:0,ly:0,lt:0,on:false},raf=0,last=0,vis=true,busy=0,t0=performance.now(),K2=.075,DAMP=.84,BANDS=5,paths=[];
  function gap(){return innerWidth<768?15:19}
  function lay(){var r=cv.getBoundingClientRect();if(!r.width)return;dpr=Math.min(2,W.devicePixelRatio||1);Wc=r.width;Hc=r.height;cv.width=Math.round(Wc*dpr);cv.height=Math.round(Hc*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    var g=gap(),cols=Math.floor(Wc/g)+1,rows=Math.floor(Hc/g)+1,ox=(Wc-(cols-1)*g)/2,oy=(Hc-(rows-1)*g)/2;dots=[];for(var y=0;y<rows;y++)for(var x=0;x<cols;x++)dots.push({x:ox+x*g,y:oy+y*g,dx:0,dy:0,vx:0,vy:0});draw(performance.now())}
  /* lively (light heroes): every dot breathes in a travelling halftone wave, three slow colour clouds in the sky's
     colours drift through the grid, and the pointer is a green lens that lights and grows the dots under it */
  var SZ=6,LP=[];
  function deepTone(c){var x=hsl(c);return rgbOf(x[0],Math.max(.62,x[1]),Math.min(.56,Math.max(.44,x[2])))}
  function drawLively(now){ctx.clearRect(0,0,Wc,Hc);var mob=innerWidth<768,R=mob?1.2:1.65,prox=o.lens||(mob?120:190),t=still()?0:(now-t0)/1000*(o.speed||1),px=P.sx,py=P.sy,i,j,d,hot=[];
    var tn=(o.tint&&o.tint())||[act],C=[],rr=Math.max(Wc,Hc)*.36;for(j=0;j<3;j++)C.push([Wc*(.5+.44*Math.sin(t*.17+j*2.1)),Hc*(.5+.4*Math.cos(t*.13+j*1.7)),deepTone(tn[j%tn.length])]);
    for(j=0;j<4*SZ;j++)LP[j]=new Path2D();
    for(i=0;i<dots.length;i++){d=dots[i];var x=d.x+d.dx,y=d.y+d.dy,ddx=x-px,ddy=y-py,d2=ddx*ddx+ddy*ddy;
      var w=.5+.5*Math.sin(t*1.25-d.x*.013-d.y*.009),w2=.5+.5*Math.sin(t*.7+d.x*.006-d.y*.011),sz=.25+.75*(w*.65+w2*.35),ci=0,best=0;
      for(j=0;j<3;j++){var ex=(x-C[j][0])/rr,ey=(y-C[j][1])/rr,f=Math.exp(-(ex*ex+ey*ey)*1.6);if(f>best){best=f;ci=j+1}}
      if(best<.32)ci=0;else sz=Math.min(1,sz+best*.35);
      if(P.on&&d2<prox*prox){hot.push([x,y,1-Math.sqrt(d2)/prox,ci?C[ci-1][2]:base,sz]);continue}
      var si=Math.min(SZ-1,sz*SZ|0),r=R*(.45+.95*sz);LP[ci*SZ+si].moveTo(x+r,y);LP[ci*SZ+si].arc(x,y,r,0,6.2832)}
    var ba=o.alpha||.1;
    for(j=0;j<4;j++)for(var k=0;k<SZ;k++){var col=j?C[j-1][2]:base,al=j?(.22+.5*(k+.5)/SZ):ba*(.6+1.4*(k+.5)/SZ);ctx.fillStyle=rgba(col,al);ctx.fill(LP[j*SZ+k])}
    for(i=0;i<hot.length;i++){var h=hot[i],q=h[2]*h[2];ctx.fillStyle=rgba(mx(h[3],act,Math.min(1,q*1.3)),Math.min(.95,.3+.7*q));ctx.beginPath();ctx.arc(h[0],h[1],R*(.6+.9*h[4])*(1+q*1.1),0,6.2832);ctx.fill()}}
  function draw(now){if(o.lively)return drawLively(now);ctx.clearRect(0,0,Wc,Hc);var R=innerWidth<768?1.05:1.3,prox=innerWidth<768?110:170,t=(now-t0)/1000,br=!still(),px=P.sx,py=P.sy,hot=[],i,d,b;
    for(b=0;b<BANDS;b++)paths[b]=new Path2D();
    for(i=0;i<dots.length;i++){d=dots[i];var x=d.x+d.dx,y=d.y+d.dy,ddx=x-px,ddy=y-py,d2=ddx*ddx+ddy*ddy;if(P.on&&d2<prox*prox){hot.push([x,y,1-Math.sqrt(d2)/prox]);continue}
      b=br?Math.round((Math.sin(t*.9+d.x*.011+d.y*.0072)*.5+.5)*(BANDS-1)):1;paths[b].moveTo(x+R,y);paths[b].arc(x,y,R,0,6.2832)}
    var ba=o.alpha||.12;for(b=0;b<BANDS;b++){ctx.fillStyle=rgba(base,ba*(.55+b*.22));ctx.fill(paths[b])}
    for(i=0;i<hot.length;i++){var h=hot[i],k=h[2]*h[2];ctx.fillStyle=rgba(mx(base,act,k),ba+(.95-ba)*k);ctx.beginPath();ctx.arc(h[0],h[1],R*(1+k*.7),0,6.2832);ctx.fill()}}
  function physics(){var m=0;for(var i=0;i<dots.length;i++){var d=dots[i];if(d.dx||d.dy||d.vx||d.vy){d.vx=(d.vx-d.dx*K2)*DAMP;d.vy=(d.vy-d.dy*K2)*DAMP;d.dx+=d.vx;d.dy+=d.vy;
      if(Math.abs(d.dx)<.02&&Math.abs(d.dy)<.02&&Math.abs(d.vx)<.02&&Math.abs(d.vy)<.02){d.dx=d.dy=d.vx=d.vy=0}else m=1}}return m}
  function push(cx,cy,R,str,dx,dy){for(var i=0;i<dots.length;i++){var d=dots[i],x=d.x+d.dx-cx,y=d.y+d.dy-cy,dist=Math.sqrt(x*x+y*y);if(dist>R||dist<.01)continue;var f=(1-dist/R)*str;
      d.vx+=(x/dist*.65+(dx||0)*.35)*f;d.vy+=(y/dist*.65+(dy||0)*.35)*f}busy=performance.now()+1600;kick()}
  function loop(now){raf=0;if(!vis||D.hidden||still())return;var a=P.on||now<busy;if(a||now-last>(o.lively?33:66)){last=now;P.sx+=(P.x-P.sx)*.22;P.sy+=(P.y-P.sy)*.22;if(physics())busy=Math.max(busy,now+100);draw(now)}raf=requestAnimationFrame(loop)}
  function kick(){if(!raf&&vis&&!still())raf=requestAnimationFrame(loop)}
  function rel(e){var r=cv.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top]}
  if(FINE)host.addEventListener('pointermove',function(e){if(still())return;var p=rel(e),now=performance.now(),dt=Math.max(8,now-P.lt),vx=(p[0]-P.lx)/dt,vy=(p[1]-P.ly)/dt,sp=Math.sqrt(vx*vx+vy*vy);
      P.lx=p[0];P.ly=p[1];P.lt=now;P.x=p[0];P.y=p[1];if(!P.on){P.sx=P.x;P.sy=P.y}P.on=true;if(sp>.9)push(p[0],p[1],innerWidth<768?90:130,Math.min(sp,4)*1.6,vx/sp,vy/sp);kick()},{passive:true});
  host.addEventListener('pointerleave',function(){P.on=false;busy=performance.now()+300;kick()});
  host.addEventListener('pointerdown',function(e){if(still()||(e.target.closest&&e.target.closest('a,button,[role=button],input,textarea,.hl-nogrid')))return;var p=rel(e);push(p[0],p[1],innerWidth<768?170:250,9)});
  if('IntersectionObserver' in W)new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis){draw(performance.now());kick()}}).observe(host);
  var rt=0;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(lay,120)});lay();kick();
  return {color:function(c){act=c;kick();draw(performance.now())},redraw:lay}};

/* ---------------- reveal test: a plain box test on scroll, re-checked when the tab comes back ---------------- */
var queue=[];K.whenSeen=function(e,fn,f){if(!e)return;if(still()){fn(true);return}queue.push({el:e,fn:fn,f:f||.9});sweep()};
function sweep(){if(!queue.length)return;var vh=innerHeight,end=scrollY+vh>=D.documentElement.scrollHeight-4;queue=queue.filter(function(q){var r=q.el.getBoundingClientRect();if(r.width&&r.top<(end?vh:vh*q.f)&&r.bottom>0){q.fn(false);return false}return true})}
addEventListener('scroll',sweep,{passive:true});addEventListener('resize',sweep);D.addEventListener('visibilitychange',sweep);addEventListener('pageshow',sweep);addEventListener('focus',sweep);

/* ---------------- Decrypted Text: letters scramble, then resolve left to right, widths held ---------------- */
var CH='ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&*+=<>/';
K.scramble=function(e,o){o=o||{};if(!e)return null;if(e.__sc)return e.__sc;if(e.children.length)return null;var txt=e.textContent,cells=[],busy=0,tid=0;if(!txt.trim()||txt.length>48)return null;
  e.textContent='';for(var i=0;i<txt.length;i++){var s=D.createElement('span');s.className='sc-c';s.textContent=txt[i];e.appendChild(s);cells.push(s)}
  e.setAttribute('aria-label',txt);
  function measure(){cells.forEach(function(c,i){c.style.width='';c.textContent=txt[i]});cells.forEach(function(c){c.style.width=c.getBoundingClientRect().width+'px'})}
  if(D.fonts&&D.fonts.ready)D.fonts.ready.then(measure);else measure();var rt=0;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(measure,150)});
  function run(){if(still()||busy)return;busy=1;var step=0,n=txt.length,per=o.per||1;clearInterval(tid);
    tid=setInterval(function(){step++;var done=Math.floor(step/per);for(var i=0;i<n;i++){if(txt[i]===' ')continue;cells[i].textContent=i<done?txt[i]:CH[(Math.random()*CH.length)|0];cells[i].classList.toggle('sc-x',i>=done)}
      if(done>=n){clearInterval(tid);busy=0}},o.speed||32)}
  e.__sc={run:run};return e.__sc};

/* ---------------- Count Up: the numbers in a line step up from zero ---------------- */
K.count=function(e){if(!e||e.__ct)return;var nodes=[],w=D.createTreeWalker(e,NodeFilter.SHOW_TEXT,null);while(w.nextNode())nodes.push(w.currentNode);var items=[];
  nodes.forEach(function(n){var parts=n.nodeValue.split(/(\d+)/);if(parts.length<2)return;var f=D.createDocumentFragment();parts.forEach(function(p,i){if(i%2){var s=D.createElement('span');s.className='hl-num';s.textContent=p;s.setAttribute('data-to',p);items.push(s);f.appendChild(s)}else if(p)f.appendChild(D.createTextNode(p))});n.parentNode.replaceChild(f,n)});
  e.__ct=1;if(!items.length)return;items.forEach(function(s){var to=s.getAttribute('data-to');s.style.minWidth=s.getBoundingClientRect().width+'px';if(!still())s.textContent=to.replace(/\d/g,'0')});
  K.whenSeen(e,function(){if(still()||!G){items.forEach(function(s){s.textContent=s.getAttribute('data-to')});return}
    e.classList.add('hl-counting');items.forEach(function(s,i){var to=s.getAttribute('data-to'),N=+to,o={v:0},pad=to.length;
      G.to(o,{v:N,duration:1.3+Math.min(.6,N/60),delay:.15+i*.12,ease:'power3.out',onUpdate:function(){var v=String(Math.round(o.v));while(v.length<pad&&to[0]==='0')v='0'+v;s.textContent=v},
        onComplete:function(){s.textContent=to;if(i===items.length-1)setTimeout(function(){e.classList.remove('hl-counting')},250)}})})},.88)};

/* ---------------- Magnet ---------------- */
K.magnet=function(e,zone,o){var G=W.gsap;/* looked up at call time: the kit may load before GSAP */if(!e||!G||!FINE)return;o=o||{};zone=zone||e;var xTo=G.quickTo(e,'x',{duration:.55,ease:'power3'}),yTo=G.quickTo(e,'y',{duration:.55,ease:'power3'}),M=o.max||10,k=o.k||.22;
  zone.addEventListener('pointermove',function(ev){if(still())return;var r=e.getBoundingClientRect(),cx=r.left+r.width/2-(G.getProperty(e,'x')||0),cy=r.top+r.height/2-(G.getProperty(e,'y')||0);xTo(cl((ev.clientX-cx)*k,-M,M));yTo(cl((ev.clientY-cy)*k,-M,M))},{passive:true});
  zone.addEventListener('pointerleave',function(){G.to(e,{x:0,y:0,duration:.9,ease:'elastic.out(1,.45)',overwrite:true})})};

/* ---------------- Stepped windows: open from the centre in frames. With the site's reveal engine (.k-item) the CSS
   rides its timing; without it, the kit opens them itself as they arrive. ---------------- */
function stepOpen(w){if(still()){w.classList.remove('hl-pre');return}w.classList.add('hl-pre');void w.offsetWidth;w.classList.add('hl-in');w.classList.remove('hl-pre');setTimeout(function(){w.classList.remove('hl-in')},480)}
K.step=function(w){if(!w||w.__st)return;w.__st=1;setTimeout(function(){if(w.classList.contains('k-item')||w.classList.contains('k-in'))return;if(!still())w.classList.add('hl-pre');K.whenSeen(w,function(){stepOpen(w)},.9)},60)};

/* ---------------- wire everything by attribute ---------------- */
function wire(){var cfg=W.HLKIT_PAGE||{};
  if(cfg.apply)try{cfg.apply()}catch(e){}
  $$('[data-hl-scramble]').forEach(function(e){var sc=K.scramble(e);if(!sc)return;var mode=e.getAttribute('data-hl-scramble'),zone=e.closest(e.getAttribute('data-hl-zone')||'a,[role=button],li,[data-hl-zone-root]')||e;
    zone.addEventListener('pointerenter',function(){sc.run()});zone.addEventListener('focusin',function(){sc.run()});if(mode==='in')K.whenSeen(e,function(){setTimeout(sc.run,250)},.85)});
  $$('[data-hl-count]').forEach(K.count);
  $$('[data-hl-step]').forEach(K.step);
  $$('[data-hl-magnet]').forEach(function(e){K.magnet(e,e.closest('[data-hl-magnet-zone]')||e)});
  $$('[data-hl-grid]').forEach(function(h){if(h.__grid)return;var f=D.createElement('div');f.className='hl-field';f.setAttribute('aria-hidden','true');f.setAttribute('data-no-anim','');var c=D.createElement('canvas');f.appendChild(c);h.insertBefore(f,h.firstChild);
    var sky=K._sky,seq=sky?sky.seq():K.roll();var tok=' '+(h.getAttribute('data-hl-grid')||'')+' ',ink=tok.indexOf(' ink ')>=0,lively=tok.indexOf(' lively ')>=0;var go=ink?{host:h,act:[22,163,74],base:[13,13,15],alpha:.1}:{host:h,act:glow(seq[0])};
    if(lively){go.lively=true;go.act=[46,214,64];go.tint=function(){var s=K._sky;return s?s.seq():null};go.speed=parseFloat(h.getAttribute('data-hl-speed'))||1}h.__grid=K.dotGrid(c,go)});
  if(((cfg.dark&&cfg.light)||cfg.mode==='light')&&!cfg.noSky)K.sky({dark:cfg.dark,light:cfg.light,bridge:cfg.bridge,lead:cfg.lead,sample:cfg.sample,focus:cfg.focus,pull:cfg.pull,mode:cfg.mode,seq:cfg.seq,drift:cfg.drift,amp:cfg.amp});
}
/* smooth scroll stays with the site's own Lenis embed (window.__lenis): the kit never starts a second one */
if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',wire);else wire();
})();
