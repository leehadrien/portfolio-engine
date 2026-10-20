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

  /* ---------- the shelf ---------- */
  var row=$('.sh-row');if(!row||row.__sh)return;row.__sh=1;
  var items=$$('.sh-item',row),lt=0,fine=W.matchMedia('(hover:hover) and (pointer:fine)').matches,stack=W.matchMedia('(max-width:767px)');
  function open(it){clearTimeout(lt);items.forEach(function(o){if(o!==it)o.classList.remove('on')});it.classList.add('on');row.classList.add('pull')}
  function shut(){items.forEach(function(o){o.classList.remove('on')});row.classList.remove('pull')}
  items.forEach(function(it){var a=$('.sh-card',it);if(!a)return;
    var img=$('.sh-cover',a),pos=img&&img.getAttribute('data-pos');if(pos&&/^\s*-?\d/.test(pos))img.style.objectPosition=pos;
    var name=($('.sh-cap-t',a)||{}).textContent||'',hook=($('.sh-hook',a)||{}).textContent||'';
    if(name.trim())a.setAttribute('aria-label',name.trim()+(hook.trim()?'. '+hook.trim():'')+' Open the case study.');
    if(fine)it.addEventListener('pointerenter',function(){if(!stack.matches)open(it)});
    a.addEventListener('focus',function(){if(!stack.matches)open(it)});
    a.addEventListener('blur',function(){setTimeout(function(){if(!row.contains(D.activeElement))shut()},0)});
    /* touch (tablet): the first tap opens a spine, the second follows the link */
    if(!fine)a.addEventListener('click',function(e){if(!stack.matches&&!it.classList.contains('on')){e.preventDefault();open(it)}})});
  if(fine)row.addEventListener('pointerleave',function(){clearTimeout(lt);lt=setTimeout(shut,160)});
});
})();
