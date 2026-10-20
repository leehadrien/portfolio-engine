/* Get in touch (hadrienlee.com/contact), repo leehadrien/portfolio-engine. Load BEFORE kit/hl-kit.js.
   The look is native Webflow (ct-* and cf-* classes; the form's example text is set on the fields in the Designer);
   motion settings are data-hl-* attributes on the elements. This file: the page's HL Kit settings, the headline's word
   rise, and the moment after sending, when the form window closes and the thank-you stays on the sky. The form's own
   states (numbered labels, focus, errors) are CSS in contact.css; the send button's spinner and tick come from the
   site-wide stateful-button embed. */
(function(){
'use strict';
var W=window,D=document;
function $(s,r){return (r||D).querySelector(s)}function $$(s,r){return [].slice.call((r||D).querySelectorAll(s))}
var RM=W.matchMedia('(prefers-reduced-motion: reduce)');function still(){return RM.matches||D.body.classList.contains('a11y-motion')}

/* ---------- HL Kit: the dark world of Home's hero. The whole page sits on ink that glows in this visit's colours and keeps
   moving; the header turns to dark glass with it. The lively dot grid runs across the page (halftone wave, colour clouds,
   green lens under the pointer) at the speed set on .page-main (data-hl-speed). The form is a white window on the ink,
   as Home's demo window is ---------- */
var SEQ=null;
W.HLKIT_PAGE=W.HLKIT_PAGE||{mode:'dark',sample:'[data-palette]',pull:.45,drift:2.6,amp:1.6,
  heroPalette:function(){return SEQ?SEQ.slice(0,3):null},
  apply:function(){var K=W.HLKit,seq=K.roll();SEQ=seq;W.HLKIT_PAGE.seq=seq;
    var m=$('.page-main');if(m)m.setAttribute('data-palette',[seq[0],seq[1],seq[2]].map(K.hex).join(' '));
    /* the header is a shared component, so its links get their decode here */
    $$('.hd-link').forEach(function(a){if(!a.hasAttribute('data-hl-scramble'))a.setAttribute('data-hl-scramble','hover')})}};

/* ---------- boot order: the headline is split into word spans, so wait until the site's choreography engine (an inline
   DOMContentLoaded handler) has picked its reveal units. This file is deferred, so it runs before DOMContentLoaded while
   readyState already reads "interactive"; Navigation Timing says whether DOMContentLoaded has fired ---------- */
function preDCL(){var p=W.performance,n=p&&p.getEntriesByType&&p.getEntriesByType('navigation')[0],t=n?n.domContentLoadedEventStart:(p&&p.timing?p.timing.domContentLoadedEventStart:1);return D.readyState==='loading'||!t}

/* ---------- the headline: words rise in turn from their own masks, the last two held together (as on Work) ---------- */
function rise(){var t=$('.ct-h1');if(!t||t.__r)return;t.__r=1;var txt=t.textContent.trim().replace(/\s+/g,' ');t.setAttribute('aria-label',txt);
  var w=txt.split(' ');if(w.length>1)w[w.length-2]+=String.fromCharCode(160)+w.pop();
  t.innerHTML='<span class="ct-s" aria-hidden="true">'+w.map(function(x,i){return '<span class="wr"><span class="wi" style="transition-delay:'+(120+70*i)+'ms">'+x.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</span></span>'}).join(' ')+'</span>';
  if(still()){t.classList.add('in');return}
  requestAnimationFrame(function(){requestAnimationFrame(function(){t.classList.add('in')})})}
/* ---------- sent: Webflow shows its success block by writing an inline display; that is the signal. The button's tick
   draws first, then the fields lift away, the window rolls up to its title bar (which decodes to "Sent"), the bar closes
   in stepped frames to the centre, and the thank-you rises in its place on the sky. Reduced motion: straight to the end.
   The form is held in view meanwhile (cf-closing), as the stateful button holds it during its tick (cf-sending) ---------- */
function sent(){var core=$('.ct-core'),wrap=core&&core.querySelector('.w-form'),done=wrap&&wrap.querySelector('.w-form-done'),form=wrap&&wrap.querySelector('form');
  if(!core||!done||!form||done.__sent)return;done.__sent=1;
  done.setAttribute('role','status');done.setAttribute('tabindex','-1');
  var fired=false;
  new MutationObserver(function(){if(fired||!done.style.display||done.style.display==='none')return;fired=true;
    var G=W.gsap;wrap.classList.add('cf-closing');
    function end(){core.classList.add('is-sent');wrap.classList.remove('cf-closing');
      if(G)G.set(core,{clearProps:'height,clipPath,opacity'});
      if(G&&!still())G.fromTo(done,{opacity:0,y:18},{opacity:1,y:0,duration:.9,ease:'expo.out'});
      try{done.focus({preventScroll:true})}catch(e){}}
    if(!G||still()){end();return}
    var bar=$('.ct-bar',core),bt=$('.ct-bar-t',core),parts=[].slice.call(form.children);
    G.set(core,{height:core.offsetHeight});
    G.timeline({delay:.65})
      .to(parts,{opacity:0,y:-10,filter:'blur(4px)',duration:.32,ease:'power2.in',stagger:.05})
      .add(function(){if(!bt)return;bt.textContent='Sent';var K=W.HLKit,sc=K&&K.scramble&&K.scramble(bt);if(sc)sc.run()})
      .to(core,{height:bar?bar.offsetHeight:0,duration:.6,ease:'expo.inOut'},'+=.05')
      .fromTo(core,{clipPath:'inset(0% 0% 0% 0% round 10px)'},{clipPath:'inset(0% 50% 0% 50% round 10px)',duration:.45,ease:'steps(6)'},'+=.4')
      .set(core,{opacity:0})
      .add(end,'+=.15')}).observe(done,{attributes:true,attributeFilter:['style']})}
function boot(){rise();sent()}
if(preDCL())D.addEventListener('DOMContentLoaded',boot);else boot();
})();
