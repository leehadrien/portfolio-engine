/* Work: behaviour only. Everything visible (hero, shelf, spines, captions, credits) is native Webflow, bound to the
   Projects CMS. This script: the page's sky settings for HL Kit, the hero headline's word rise, and the shelf's
   open/close (pointer, keyboard, touch) plus each cover's focus point from its CMS "Shelf Focus" field. */
(function(){
'use strict';
var W=window,D=document;
function $(s,r){return (r||D).querySelector(s)}function $$(s,r){return [].slice.call((r||D).querySelectorAll(s))}

/* ---------- HL Kit page settings: a light sky from the top, its colours pulled from the covers on screen;
   an opened spine hands the sky that project's colours ---------- */
W.HLKIT_PAGE=W.HLKIT_PAGE||{mode:'light',sample:'.sh-row .sh-cover',focus:'.sh-item.on .sh-cover',pull:.62,
  apply:function(){
    /* the header's links decode on hover, as on Home (the header is a shared component, so it's set here) */
    $$('.hd-link').forEach(function(a){if(!a.hasAttribute('data-hl-scramble'))a.setAttribute('data-hl-scramble','hover')});
    var h=$('.wk3-hero');if(!h)return;
    function set(){var r=h.getBoundingClientRect();h.style.setProperty('--wk-gx',Math.max(0,r.left)+'px');h.style.setProperty('--wk-gy',(r.top+scrollY)+'px')}
    set();addEventListener('resize',set)}};

function ready(f){if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',f);else f()}
ready(function(){
  /* ---------- hero headline: one sentence per line, words rise in turn, the last two words of each held together ---------- */
  (function(){var t=$('.wk3-h1');if(!t||t.__r)return;t.__r=1;var txt=t.textContent.trim(),n=0;t.setAttribute('aria-label',txt);t.textContent='';
    txt.replace(/\.\s+/g,'.\n').split('\n').forEach(function(line,li){var w=line.split(/\s+/);if(w.length>1)w[w.length-2]+=String.fromCharCode(160)+w.pop();
      var s=D.createElement('span');s.className='wk3-s';s.setAttribute('aria-hidden','true');
      s.innerHTML=w.map(function(x){return '<span class="wr"><span class="wi" style="transition-delay:'+(60*n++ +(li?220:0))+'ms">'+x.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</span></span>'}).join(' ');
      t.appendChild(s);if(li===0)t.appendChild(D.createTextNode(' '))});
    requestAnimationFrame(function(){requestAnimationFrame(function(){t.classList.add('in')})})})();

  /* ---------- the shelf: GSAP drives every change (the same engine as Home), one interruptible set of tweens per
     open or close, so crossing spines quickly never snaps or stutters ---------- */
  var row=$('.sh-row');if(!row||row.__sh)return;row.__sh=1;
  var G=W.gsap,items=$$('.sh-item',row),lt=0,cur=null,fine=W.matchMedia('(hover:hover) and (pointer:fine)').matches,stack=W.matchMedia('(max-width:767px)');
  var RM=W.matchMedia('(prefers-reduced-motion: reduce)');function still(){return RM.matches||D.body.classList.contains('a11y-motion')}
  var E='expo.out',DIM='grayscale(0.7) brightness(0.62)',CLR='grayscale(0) brightness(1)';
  function parts(it){var a=$('.sh-card',it);return {a:a,cover:$('.sh-cover',a),lat:$$('.lattice,.lattice-breathe',a),spine:$('.sh-spine',a),shade:$('.sh-shade',a),cap:$('.sh-cap',a),
    more:$('.sh-more-in',a),hook:$('.sh-hook',a),cr:$('.sh-cr',a),go:$('.sh-go',a),led:$('.sh-led',a)}}
  var P=items.map(parts);
  function t(el,v){if(!el||(el.length===0))return;v.overwrite='auto';if(still()){v.duration=0;v.delay=0}G.to(el,v)}
  function state(i,mode){/* mode: 'open' | 'dim' | 'rest' */var q=P[i],on=mode==='open';
    t(items[i],{flexGrow:on?4:mode==='dim'?.62:1,duration:.95,ease:E});
    t(q.cover,{scale:on?1.03:1,filter:mode==='dim'?DIM:CLR,duration:on?1.2:.7,ease:E});
    t(q.lat,{opacity:on?0:1,duration:on?.6:.8,ease:'power2.out'});
    t(q.spine,{opacity:on?0:1,duration:on?.25:.5,delay:on?0:.15,ease:'power2.out'});
    t(q.shade,{opacity:on?1:0,duration:.6,ease:'power2.out'});
    t(q.cap,{opacity:on?1:0,duration:on?.45:.2,delay:on?.22:0,ease:'power2.out'});
    t(q.more,{height:on?'auto':0,duration:on?.7:.35,delay:on?.18:0,ease:E});
    t(q.hook,{opacity:on?1:0,y:on?0:6,duration:on?.6:.2,delay:on?.36:0,ease:E});
    t([q.cr,q.go],{opacity:on?1:0,duration:on?.5:.2,delay:on?.46:0,ease:'power2.out',stagger:on?.06:0});
    t(q.led,{width:on?8:0,marginRight:on?8:0,duration:.5,delay:on?.3:0,ease:E})}
  function open(it){clearTimeout(lt);if(cur===it)return;cur=it;row.classList.add('pull');items.forEach(function(o,i){o.classList.toggle('on',o===it);state(i,o===it?'open':'dim')})}
  function shut(){if(!cur)return;cur=null;row.classList.remove('pull');items.forEach(function(o,i){o.classList.remove('on');state(i,'rest')})}
  /* phones are a native stack with the captions showing: hand everything back to the Designer's styles */
  function reset(){cur=null;row.classList.remove('pull');items.forEach(function(o){o.classList.remove('on')});if(G)G.set(items.concat([].concat.apply([],P.map(function(q){return [q.cover,q.spine,q.shade,q.cap,q.more,q.hook,q.cr,q.go,q.led].concat(q.lat)})).filter(Boolean)),{clearProps:'flexGrow,scale,filter,opacity,height,y,width,marginRight,transform'})}
  if(stack.addEventListener)stack.addEventListener('change',reset);
  items.forEach(function(it,i){var a=P[i].a;if(!a)return;
    var img=P[i].cover,pos=img&&img.getAttribute('data-pos');if(pos&&/^\s*-?\d/.test(pos))img.style.objectPosition=pos;
    var name=($('.sh-cap-t',a)||{}).textContent||'',hook=($('.sh-hook',a)||{}).textContent||'';
    if(name.trim())a.setAttribute('aria-label',name.trim()+(hook.trim()?'. '+hook.trim():'')+' Open the case study.');
    if(!G)return;
    if(fine)it.addEventListener('pointerenter',function(){if(!stack.matches)open(it)});
    a.addEventListener('focus',function(){if(!stack.matches)open(it)});
    a.addEventListener('blur',function(){setTimeout(function(){if(!row.contains(D.activeElement))shut()},0)});
    /* touch (tablet): the first tap opens a spine, the second follows the link */
    if(!fine)a.addEventListener('click',function(e){if(!stack.matches&&cur!==it){e.preventDefault();open(it)}})});
  if(G&&fine)row.addEventListener('pointerleave',function(){clearTimeout(lt);lt=setTimeout(shut,160)});
});
})();
