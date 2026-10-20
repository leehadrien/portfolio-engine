/* Home, hadrienlee.com. Built from about-ts/home2 by bundle_home.py. */
(function(){var s=document.currentScript&&document.currentScript.src||'',base=s.replace(/home\.js(\?.*)?$/,'');window.HM_LIVE=true;window.HM_T=window.HM_T||[];if(window.HM_SITE==null)window.HM_SITE='';window.HM_THUMBS={'phish':base+'img/phish.webp','redact':base+'img/redact.webp','gift':base+'img/gift.webp','hazard':base+'img/hazard.webp','code':base+'img/code.webp','ai':base+'img/ai.webp','page-work':base+'img/page-work.webp','page-services':base+'img/page-services.webp'};window.HP_GLYPHS={"0":[".###.","#...#","#..##","#.#.#","##..#","#...#",".###."],"1":["..#..",".##..","..#..","..#..","..#..","..#..",".###."],"2":[".###.","#...#","....#","...#.","..#..",".#...","#####"],"3":["#####","...#.","..#..","...#.","....#","#...#",".###."],"4":["...#.","..##.",".#.#.","#..#.","#####","...#.","...#."],"5":["#####","#....","####.","....#","....#","#...#",".###."],"6":["..##.",".#...","#....","####.","#...#","#...#",".###."],"7":["#####","....#","...#.","..#..",".#...",".#...",".#..."],"8":[".###.","#...#","#...#",".###.","#...#","#...#",".###."],"9":[".###.","#...#","#...#",".####","....#","...#.",".##.."],"+":[".....","..#..","..#..","#####","..#..","..#..","....."],"%":["##..#","##..#","...#.","..#..",".#...","#..##","#..##"],"A":[".###.","#...#","#...#","#####","#...#","#...#","#...#"],"B":["####.","#...#","#...#","####.","#...#","#...#","####."],"C":[".###.","#...#","#....","#....","#....","#...#",".###."],"D":["####.","#...#","#...#","#...#","#...#","#...#","####."],"E":["#####","#....","#....","####.","#....","#....","#####"],"F":["#####","#....","#....","####.","#....","#....","#...."],"G":[".###.","#...#","#....","#.###","#...#","#...#",".###."],"H":["#...#","#...#","#...#","#####","#...#","#...#","#...#"],"J":["..###","...#.","...#.","...#.","...#.","#..#.",".##.."],"K":["#...#","#..#.","#.#..","##...","#.#..","#..#.","#...#"],"L":["#....","#....","#....","#....","#....","#....","#####"],"M":["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],"N":["#...#","##..#","#.#.#","#..##","#...#","#...#","#...#"],"P":["####.","#...#","#...#","####.","#....","#....","#...."],"R":["####.","#...#","#...#","####.","#.#..","#..#.","#...#"],"S":[".####","#....","#....",".###.","....#","....#","####."],"T":["#####","..#..","..#..","..#..","..#..","..#..","..#.."],"U":["#...#","#...#","#...#","#...#","#...#","#...#",".###."],"V":["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],"W":["#...#","#...#","#...#","#.#.#","#.#.#","##.##","#...#"],"X":["#...#","#...#",".#.#.","..#..",".#.#.","#...#","#...#"],"Y":["#...#","#...#",".#.#.","..#..","..#..","..#..","..#.."],"Z":["#####","....#","...#.","..#..",".#...","#....","#####"]};})();
/* Home on Webflow: the page is built natively in the Designer (words, headings, stats, practices, doors). This file
   adds the parts only code can make, if the page doesn't already have them: the demo window, the hero's dot field,
   the bridge's flying window, the map's wires, the game window, the canvases for the dot-face numbers, the door
   previews. Runs before the engine. Safe to run on the offline preview too: it only fills what is missing. */
(function(){
'use strict';
var D=document,W=window;function $(s,r){return (r||D).querySelector(s)}function $$(s,r){return [].slice.call((r||D).querySelectorAll(s))}
function el(tag,cls,html,attrs){var e=D.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;if(attrs)for(var k in attrs)e.setAttribute(k,attrs[k]);return e}
/* Webflow turns <button> into a link; give the page its real buttons back (keeps classes, ids and contents) */
$$('a.pg-play,a.pg-all,a#hm-again,a.hm-again,a.hw-snd').forEach(function(a){var b=D.createElement('button');b.type='button';for(var i=0;i<a.attributes.length;i++){var at=a.attributes[i];if(at.name!=='href'&&at.name!=='target')b.setAttribute(at.name,at.value)}
  b.classList.remove('w-button');b.classList.remove('w-inline-block');
  while(a.firstChild)b.appendChild(a.firstChild);a.parentNode.replaceChild(b,a)});
if(!D.body.getAttribute('data-opt'))D.body.setAttribute('data-opt','b');
var hm=$('.hm');if(hm&&!hm.getAttribute('data-opt'))hm.setAttribute('data-opt','b');
var LOCK='<svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3.2 5V3.8a2.8 2.8 0 015.6 0V5h.4c.5 0 .8.3.8.8v4.4c0 .5-.3.8-.8.8H2.8c-.5 0-.8-.3-.8-.8V5.8c0-.5.3-.8.8-.8h.4zm1.3 0h3V3.8a1.5 1.5 0 00-3 0V5z"/></svg>';
var SON='<svg class="on" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 6.2h2.2L8 3.5v9L4.7 9.8H2.5z" fill="currentColor"/><path d="M10.6 5.6a3.4 3.4 0 010 4.8M12.4 3.9a5.8 5.8 0 010 8.2"/></svg>';
var SOFF='<svg class="off" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 6.2h2.2L8 3.5v9L4.7 9.8H2.5z" fill="currentColor"/><path d="M10.8 6.2l3.4 3.6M14.2 6.2l-3.4 3.6"/></svg>';
var CUR='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.2v15.6l4.3-4.1 2.7 6.2 2.9-1.3-2.7-6.1h6z" fill="#fff" stroke="#111" stroke-width="1.4" stroke-linejoin="round"/></svg>';
var PLAY='<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.8v8.4L10 6z" fill="currentColor"/></svg>';

/* the demo window */
var body=$('#hm-body');
if(body&&!$('#stage')){body.innerHTML='';body.appendChild(el('div','hm-float',
  '<div class="hm-stage" id="stage"><div class="hm-w" id="win"><div class="hw-bar"><span class="hw-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="hw-url">'+LOCK+'<i class="hw-spin" aria-hidden="true"></i><span class="hw-host" id="w-h"></span></span>'+
  '<span class="hw-tools"><button class="hw-snd" id="hw-snd" type="button" aria-pressed="true">'+SON+SOFF+'<span>Sound</span></button></span><i class="hw-load" id="hw-load"></i></div>'+
  '<div class="hw-vp" id="vp"></div><span class="hw-st" id="hw-st" aria-hidden="true"></span><div class="hw-tag" id="hw-tag" aria-live="polite"><i aria-hidden="true"></i><b></b><span></span></div>'+
  '<i class="hw-cur" id="hw-cur" aria-hidden="true">'+CUR+'</i></div></div>',{id:'hm-float'}))}
/* the window frame built in the Designer: add the icons and the demo cursor it can't hold */
var wu=$('#win .hw-url');if(wu&&!$('svg',wu))wu.insertAdjacentHTML('afterbegin',LOCK);
var ws=$('#hw-snd');if(ws&&!$('svg',ws))ws.insertAdjacentHTML('afterbegin',SON+SOFF);
var wn=$('#win');if(wn&&!$('#hw-cur'))wn.insertAdjacentHTML('beforeend','<i class="hw-cur" id="hw-cur" aria-hidden="true">'+CUR+'</i>');
$$('#vp > .hw-poster').forEach(function(p){p.setAttribute('aria-hidden','true')});
/* the hero's dot field */
var hero=$('#hm-hero');if(hero&&!$('#hm-field')){var f=el('div','hm-field',null,{id:'hm-field','aria-hidden':'true'});f.appendChild(el('canvas',null,null,{id:'hm-grid'}));hero.insertBefore(f,hero.firstChild)}
/* the bridge's flying window */
var br=$('#pg-bridge');if(br&&!$('#pg-ghost')){br.parentNode.insertBefore(el('div','pg-ghost','<div class="pg-ghost-in"><img alt="" id="pg-ghost-img"></div>',{id:'pg-ghost','aria-hidden':'true'}),br.nextSibling)}
/* the practice: dot-face canvases, the XP bar, wires, the game window */
$$('.pg-dmw').forEach(function(w){if($('canvas',w))return;var v=$('.pg-v',w),t=(v?v.textContent:w.getAttribute('data-to')||'').trim(),m=t.match(/^([0-9A-Z]+)([+%]?)$/);if(!m)return;
  w.insertBefore(el('canvas','pg-dm',null,{'data-to':m[1],'data-suf':m[2]}),w.firstChild)});
var xp=$('.pg-xp');if(xp&&!$('#pg-bar')){var ol=$('.pg-chk',xp);xp.insertBefore(el('canvas','pg-bar',null,{id:'pg-bar','aria-hidden':'true'}),ol)}
var map=$('#pg-map');
if(map&&!$('#pg-wires')){var s=D.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('class','pg-wires');s.id='pg-wires';s.setAttribute('aria-hidden','true');map.insertBefore(s,map.firstChild)}
if(map&&!$('#pg-game'))map.appendChild(el('div','pw pg-game','<div class="pw-t"><span id="pg-gt">Game</span><span class="pg-tools"><span class="pg-clock" id="pg-clock" aria-hidden="true">0:15</span>'+
  '<button class="pg-tb pg-pause" type="button" aria-pressed="false">Pause</button><button class="pg-tb pg-x" type="button" aria-label="Close the game">&times;</button></span></div><div class="pw-b pg-gb" id="pg-gb" data-lenis-prevent></div>',
  {id:'pg-game',role:'dialog','aria-labelledby':'pg-gt',hidden:''}));
if(map&&!$('#pg-live'))map.appendChild(el('p','hm-sr',null,{id:'pg-live','aria-live':'polite'}));
$$('.pg-play,.pg-all').forEach(function(b){if(!$('svg',b))b.insertAdjacentHTML('afterbegin',PLAY)});
/* the doors' page previews */
var doors=$('.pg-doors'),TH=W.HM_THUMBS||{};if(doors&&!$('.pg-prev',doors)&&TH['page-work']){var pv=el('div','pg-prev','<div class="pg-prev-in"><img src="'+TH['page-work']+'" alt="" data-i="0" decoding="async"><img src="'+TH['page-services']+'" alt="" data-i="1" decoding="async"></div>',{'aria-hidden':'true'});doors.appendChild(pv)}
$$('.pg-door').forEach(function(d,i){if(!d.getAttribute('data-prev'))d.setAttribute('data-prev',String(i));if(!$('.pg-ar',d))d.insertAdjacentHTML('beforeend','<span class="pg-ar" aria-hidden="true"><span class="pg-arm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/></svg></span></span>')});
})();

/* training: phish */
/* Phishing drill in a working mail client. Four new emails, three of them attacks.
   Round 2 (3D): an exploded-view message inspector built into the mail client, reports that fold into a letter and fly
   into the Reported folder, a lookalike sign-in comparison you can rotate, and layered depth across the app. */
(function(){
var S='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',E='</svg>';
var I={
  mail:S+'<rect x="2" y="3.5" width="12" height="9" rx="1.6"/><path d="M2.6 4.6 8 8.6l5.4-4"/>'+E,
  grid:'<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="4" cy="4" r="1.1"/><circle cx="8" cy="4" r="1.1"/><circle cx="12" cy="4" r="1.1"/><circle cx="4" cy="8" r="1.1"/><circle cx="8" cy="8" r="1.1"/><circle cx="12" cy="8" r="1.1"/><circle cx="4" cy="12" r="1.1"/><circle cx="8" cy="12" r="1.1"/><circle cx="12" cy="12" r="1.1"/></svg>',
  search:S+'<circle cx="7" cy="7" r="4.3"/><path d="m10.3 10.3 3.2 3.2"/>'+E,
  help:S+'<circle cx="8" cy="8" r="6"/><path d="M6.3 6.4a1.8 1.8 0 1 1 2.5 1.6c-.5.2-.8.6-.8 1.1v.3M8 11.2v.1"/>'+E,
  gear:S+'<circle cx="8" cy="8" r="2.1"/><path d="M8 1.8v1.7M8 12.5v1.7M1.8 8h1.7M12.5 8h1.7M3.6 3.6l1.2 1.2M11.2 11.2l1.2 1.2M3.6 12.4l1.2-1.2M11.2 4.8l1.2-1.2"/>'+E,
  menu:S+'<path d="M2.5 4.2h11M2.5 8h11M2.5 11.8h11"/>'+E,
  pen:S+'<path d="M10.8 2.6 13.4 5.2 6 12.6l-3.2.6.6-3.2z"/>'+E,
  inbox:S+'<path d="M2 9.4 3.9 3.7a1 1 0 0 1 .9-.7h6.4a1 1 0 0 1 .9.7L14 9.4v3.1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path d="M2 9.4h3.3l.8 1.6h3.8l.8-1.6H14"/>'+E,
  star:S+'<path d="m8 2.3 1.75 3.6 3.95.55-2.86 2.8.68 3.95L8 11.35 4.48 13.2l.68-3.95L2.3 6.45l3.95-.55z"/>'+E,
  clock:S+'<circle cx="8" cy="8" r="6"/><path d="M8 4.8V8l2.2 1.4"/>'+E,
  send:S+'<path d="M13.8 2.2 7.2 8.8M13.8 2.2 9.6 13.8 7.2 8.8 2.2 6.4z"/>'+E,
  file:S+'<path d="M9.4 2H4.6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.8a1 1 0 0 0 1-1V5z"/><path d="M9.4 2v3h3"/>'+E,
  junk:S+'<circle cx="8" cy="8" r="5.7"/><path d="m4 4 8 8"/>'+E,
  shield:S+'<path d="M8 1.9 13 3.7v3.8c0 3.1-2.1 5.3-5 6.6-2.9-1.3-5-3.5-5-6.6V3.7z"/><path d="M8 5.3v3.1M8 10.5v.1"/>'+E,
  reply:S+'<path d="M6.4 4 2.6 7.8l3.8 3.8"/><path d="M3 7.8h6.4a4 4 0 0 1 4 4v.9"/>'+E,
  archive:S+'<rect x="2" y="3" width="12" height="3.2" rx=".8"/><path d="M3 6.2v6.3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6.2M6.5 9h3"/>'+E,
  trash:S+'<path d="M2.8 4.5h10.4M6.4 4.5V3h3.2v1.5M4.2 4.5l.6 8.5a1 1 0 0 0 1 .9h4.4a1 1 0 0 0 1-.9l.6-8.5"/>'+E,
  back:S+'<path d="M10 3 5 8l5 5"/>'+E,
  zip:S+'<path d="M9.4 2H4.6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.8a1 1 0 0 0 1-1V5z"/><path d="M9.4 2v3h3M7 3.4h1M7 4.9h1M7 6.4h1"/><rect x="6.7" y="8.2" width="1.6" height="2.4" rx=".4"/>'+E,
  cal:S+'<rect x="2.2" y="3.2" width="11.6" height="10.6" rx="1.6"/><path d="M2.2 6.6h11.6M5.3 1.8v2.6M10.7 1.8v2.6"/>'+E,
  lock:'<svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3.2 5V3.8a2.8 2.8 0 015.6 0V5h.4c.5 0 .8.3.8.8v4.4c0 .5-.3.8-.8.8H2.8c-.5 0-.8-.3-.8-.8V5.8c0-.5.3-.8.8-.8h.4zm1.3 0h3V3.8a1.5 1.5 0 00-3 0V5z"/></svg>',
  alert:S+'<path d="M8 2.2 14.2 13H1.8z"/><path d="M8 6.4v3M8 11.2v.1"/>'+E,
  flag:S+'<path d="M3.5 14V2.5M3.5 3h8.2l-1.6 3 1.6 3H3.5"/>'+E,
  layers:S+'<path d="M8 2.1 14 5.2 8 8.3 2 5.2z"/><path d="m2.4 8.1 5.6 2.9 5.6-2.9"/><path d="m2.4 10.9 5.6 2.9 5.6-2.9"/>'+E,
  user:S+'<circle cx="8" cy="5.5" r="2.6"/><path d="M3 13.7c.6-2.5 2.6-3.9 5-3.9s4.4 1.4 5 3.9"/>'+E,
  link:S+'<path d="M6.7 9.3 9.3 6.7"/><path d="m7.6 4.5.9-.9a2.6 2.6 0 0 1 3.8 3.8l-.9.9"/><path d="m8.4 11.5-.9.9a2.6 2.6 0 0 1-3.8-3.8l.9-.9"/>'+E,
  clip:S+'<path d="M10.9 5.4 6.3 10a1.3 1.3 0 0 0 1.8 1.8l4.9-4.9a2.7 2.7 0 0 0-3.8-3.8L4.2 8.1a4.1 4.1 0 0 0 5.8 5.8l3.6-3.6"/>'+E,
  server:S+'<rect x="2.4" y="2.6" width="11.2" height="4.6" rx="1.1"/><rect x="2.4" y="8.8" width="11.2" height="4.6" rx="1.1"/><path d="M4.9 4.9h.1M4.9 11.1h.1"/>'+E,
  eye:S+'<path d="M1.8 8s2.3-4.3 6.2-4.3S14.2 8 14.2 8s-2.3 4.3-6.2 4.3S1.8 8 1.8 8z"/><circle cx="8" cy="8" r="1.9"/>'+E,
  y:S+'<path d="M3.6 8.4l2.8 2.8 6-6.4"/>'+E,
  n:S+'<path d="M4.6 4.6l6.8 6.8M11.4 4.6l-6.8 6.8"/>'+E,
  m:S+'<path d="M8 4.2v4.6"/><path d="M8 11.5v.1"/>'+E,
  i:S+'<path d="M8 7.4V12"/><path d="M8 4.4v.1"/>'+E,
  turn:S+'<path d="M2.9 8a5.1 5.1 0 1 0 1.6-3.7"/><path d="M2.7 2.5v2.8h2.8"/>'+E,
  up:S+'<path d="m4 10 4-4 4 4"/>'+E,
  down:S+'<path d="m4 6 4 4 4-4"/>'+E,
  drag:S+'<path d="M8 2.2v11.6M2.2 8h11.6"/><path d="m6.2 4 1.8-1.8L9.8 4M6.2 12 8 13.8 9.8 12M4 6.2 2.2 8 4 9.8M12 6.2 13.8 8 12 9.8"/>'+E
};

var EM=[
 {id:'it',drill:1,from:'IT Service Desk',addr:'it-supp0rt@northwind-helpdesk.co',av:'IT',c:'#5F6B7A',tm:'09:41',dt:'Thu 16 Oct, 09:41',
  subj:'Action required: your password expires in 2 hours',prev:'Hi Alex, your Northwind password expires today at 11:41. Verify your account to keep access…',
  body:'<p>Hi Alex,</p><p>Your Northwind password expires today at <b>11:41</b>. To keep access to email, chat and shared files, verify your account before then.</p><p><a class="pm-cta" data-href="https://northwind-helpdesk.co/sso/verify?u=akim" data-act="link">Verify my account</a></p><p>Accounts that are not verified will be locked, and you will need to raise a ticket to regain access.</p><p class="sig">Thanks,<br>IT Service Desk<br>Northwind</p>',
  draft:'Hi, is this genuine? I don’t want to lose access before my 2pm.'},
 {id:'cal',drill:1,from:'Priya Nair',addr:'priya.nair@northwind.co',av:'PN',c:'#A8577E',tm:'09:58',dt:'Thu 16 Oct, 09:58',
  subj:'Updated invitation: Q3 planning review',prev:'Moving this to Thursday so finance can join. Same room, video link for remote folks.',
  invite:1,body:'<p>Hi all,</p><p>Moving this to Thursday so finance can join. Same room, and there’s a video link for anyone remote.</p><p>The agenda and last quarter’s numbers are in the planning folder.</p><p class="sig">Priya</p>',
  draft:'Thanks Priya, Thursday works. See you there.'},
 {id:'inv',drill:1,from:'Accounts Payable',addr:'billing@vendor-invoices.net',av:'AP',c:'#3E7A62',tm:'10:26',dt:'Thu 16 Oct, 10:26',
  subj:'FINAL NOTICE: Invoice #4471 overdue',prev:'Payment for invoice #4471 is now 14 days overdue. Please open the attached invoice today…',
  att:1,body:'<p>Dear customer,</p><p>Our records show payment for invoice <b>#4471</b> is now <b>14 days overdue</b>. Please open the attached invoice and arrange payment today to avoid suspension of service and a late fee.</p><p class="sig">Kind regards,<br>Accounts Payable Department</p>',
  draft:'Hi, could you resend this as a PDF? I can’t open the zip.'},
 {id:'bec',drill:1,from:'Daniel Okafor',addr:'daniel.okafor@northwind-mail.com',av:'DO',c:'#8C6A3F',tm:'10:47',dt:'Thu 16 Oct, 10:47',
  subj:'Quick favour',prev:'Are you at your desk? I need a hand with something before 3pm.',
  body:'<p>Alex,</p><p>Are you at your desk? I need a hand with something before 3pm.</p><p>I want to thank a client today. Can you pick up five gift cards at $200 each and send me the codes? I’ll sort the expense claim once I’m out of meetings.</p><p>Keep this between us for now, it’s a surprise.</p><p class="sig">Daniel<br><span>Sent from my phone</span></p>',
  draft:'Hi Daniel, no problem. Which store, and do you want the codes by email?'},
 {id:'o1',from:'People Team',addr:'people@northwind.co',av:'PT',c:'#5868C9',tm:'Tue',dt:'Tue 14 Oct, 16:05',subj:'Benefits enrolment closes 31 October',prev:'A reminder to review your benefits choices before the window closes.',
  body:'<p>Hi everyone,</p><p>A reminder that benefits enrolment closes on 31 October. Your choices are in the People portal under My benefits.</p><p class="sig">People Team</p>'},
 {id:'o2',from:'Service Desk',addr:'noreply@servicedesk.northwind.co',av:'SD',c:'#2C5FC4',tm:'Mon',dt:'Mon 13 Oct, 11:20',subj:'[OPS-2291] Ticket moved to In review',prev:'Sam Patel moved OPS-2291 from In progress to In review.',
  body:'<p>Sam Patel moved <b>OPS-2291 · Badge reader on level 3</b> from In progress to In review.</p><p class="sig">Northwind Service Desk</p>'},
 {id:'o3',from:'Sam Patel',addr:'sam.patel@northwind.co',av:'SP',c:'#B4562F',tm:'Mon',dt:'Mon 13 Oct, 09:02',subj:'Re: Offsite photos',prev:'Uploaded the rest to the shared album. The sunset ones came out well.',
  body:'<p>Uploaded the rest to the shared album. The sunset ones came out well.</p><p class="sig">Sam</p>'}
];
/* what each choice is worth, and why. s: y good, m partial, n bad */
var OUT={
 it:{report:[100,'y','Reported','Caught it.','Three tells: a zero in “supp0rt”, a domain that isn’t northwind.co, and a two-hour deadline.'],
     link:[-50,'n','Clicked link','Password gone.','The button pointed at northwind-helpdesk.co. Hover before you click: the status bar shows where a link really goes.'],
     reply:[-10,'m','Replied','You told them someone’s reading.','Asking the sender whether it’s genuine asks the attacker. Check through IT’s real portal instead.'],
     del:[40,'m','Deleted','Safe for you, not for the next person.','Report it, so security can pull it from every inbox at once.']},
 cal:{accept:[100,'y','Accepted','Real one.','Internal address, nothing to log in to, nothing urgent. Not every email is a trap.'],
     tent:[70,'y','Tentative','Fine.','It was genuine. A tentative still keeps the slot.'],
     decline:[20,'m','Declined','That one was real.','priya.nair@northwind.co is internal and only moves a meeting.'],
     report:[-20,'m','Reported','False alarm.','Internal sender, no link to sign in, no pressure. Reporting everything buries the real ones.'],
     reply:[60,'y','Replied','Works.','It was genuine. The invite buttons answer it faster.'],
     del:[0,'m','Deleted','You’ll miss planning.','This one was genuine.']},
 inv:{report:[100,'y','Reported','Caught it.','A .zip from a vendor you’ve never paid, “final notice” pressure and an outside domain.'],
     file:[-50,'n','Opened file','Ransomware delivered.','Zipped “invoices” from unknown senders are the most common way it gets in.'],
     reply:[-10,'m','Replied','You told them someone’s reading.','Asking for a PDF invites a better-made second attempt. Report it instead.'],
     del:[40,'m','Deleted','Safe for you, not for the next person.','Report it, so security can block the sender for everyone.']},
 bec:{report:[100,'y','Reported','No link. Still a phish.','The name says Daniel, the address says northwind-mail.com. Gift cards plus secrecy is the classic play.'],
     reply:[-50,'n','Replied','You’re talking to the attacker.','The next message asks for the codes. Check requests like this on a channel you already trust.'],
     del:[40,'m','Deleted','Safe for you, not for the next person.','Report it. The same message is probably sitting in your teammates’ inboxes.']}
};
var URLS={link:'https://northwind-helpdesk.co/sso/verify?u=akim',safe:'https://meet.northwind.co/q3-planning-review',fol:'https://files.northwind.co/planning/q3'};

/* what the inspector finds, per email. Facts a mail security layer can actually see, nothing invented.
   Lookalike domains pass SPF and DKIM for themselves: authentication proves who sent it, not that it's Northwind. */
var IN_HOPS=function(t0){return [['mx1.northwind.co','10.20.4.11',t0[0]],['mail.northwind.co','10.20.4.2',t0[1]]]};
var X={
 it:{ex:'Your Northwind password expires today at 11:41. To keep access to email, chat and shared files, verify your account before then.',
   addr:'it-supp<mark class="n">0</mark>rt@<mark class="n">northwind-helpdesk.co</mark>',dom:'northwind-helpdesk.co',org:0,first:1,
   au:[['SPF','pass','y'],['DKIM','pass','y'],['DMARC','pass','y']],aud:'northwind-helpdesk.co',
   links:[{t:'Verify my account',btn:1,d:'northwind-helpdesk.co',p:'/sso/verify?u=akim',s:'n',x:'Off-site',exp:'sso.northwind.co'}],
   hops:[['out.northwind-helpdesk.co','203.0.113.48','09:41:05','n']].concat(IN_HOPS(['09:41:06','09:41:07'])),hx:[['Return-Path','bounce@northwind-helpdesk.co']],
   f:{msg:['m','A deadline and a sign-in button','“Expires in 2 hours”, then a button to verify.'],
      snd:['n','Name and domain don’t match','“IT Service Desk” on northwind-helpdesk.co. First time sender. SPF and DKIM pass, for that domain.'],
      lnk:['n','The button leaves Northwind','It goes to northwind-helpdesk.co. Northwind sign-in is sso.northwind.co.'],
      hdr:['m','Arrived from outside','First hop: out.northwind-helpdesk.co, 203.0.113.48.']}},
 cal:{ex:'Moving this to Thursday so finance can join. Same room, and there’s a video link for anyone remote.',
   addr:'priya.nair@<mark class="y">northwind.co</mark>',dom:'northwind.co',org:1,dir:'Priya Nair · Planning',
   au:[['SPF','pass','y'],['DKIM','pass','y'],['DMARC','pass','y']],aud:'northwind.co',
   links:[{t:'Join video call',d:'meet.northwind.co',p:'/q3-planning-review',s:'y',x:'Northwind'}],
   att:{n:'invite.ics',sz:'2 KB · Calendar',ic:'cal',claim:'Calendar invitation',real:'Calendar file, text/calendar',s:'y',x:'Matches'},
   hops:[['cal.northwind.co','10.20.6.5','09:58:10','y']].concat(IN_HOPS(['09:58:11','09:58:12'])),hx:[['Return-Path','priya.nair@northwind.co']],
   f:{msg:['y','Moves an existing meeting','Nothing to sign in to, nothing to pay.'],
      snd:['y','Internal sender','priya.nair@northwind.co, in your directory. SPF, DKIM and DMARC pass.'],
      lnk:['y','The link stays on Northwind','Join video call goes to meet.northwind.co.'],
      att:['y','A calendar file','invite.ics is exactly what it says.'],
      hdr:['y','Delivered inside Northwind','Every hop is a northwind.co server.']}},
 inv:{ex:'Our records show payment for invoice #4471 is now 14 days overdue. Please open the attached invoice and arrange payment today.',
   addr:'billing@<mark class="n">vendor-invoices.net</mark>',dom:'vendor-invoices.net',org:0,first:1,
   au:[['SPF','softfail','n'],['DKIM','none','n'],['DMARC','fail','n']],aud:'vendor-invoices.net',
   links:[],
   att:{n:'Invoice_4471.zip',sz:'182 KB · Compressed folder',ic:'zip',inner:'Invoice_4471<mark class="n">.pdf.js</mark>',isz:'4 KB',claim:'PDF document',real:'JavaScript, runs when opened',s:'n',x:'Script'},
   hops:[['unknown host','198.51.100.23','10:26:02','n']].concat(IN_HOPS(['10:26:03','10:26:04'])),hx:[['Return-Path','billing@vendor-invoices.net']],
   f:{msg:['m','Pressure and a zip file','“Final notice”, a late fee and an attachment to open today.'],
      snd:['n','Unknown sender, failed checks','vendor-invoices.net, first time sender. SPF softfail, no DKIM signature, DMARC fail.'],
      lnk:['i','No links','The attachment is the way in.'],
      att:['n','A PDF name on a script','The zip holds Invoice_4471.pdf.js. The real extension is .js.'],
      hdr:['n','Sent from an unlisted server','198.51.100.23 isn’t allowed to send for vendor-invoices.net.']}},
 bec:{ex:'Are you at your desk? I want to thank a client today. Can you pick up five gift cards at $200 each and send me the codes? Keep this between us for now.',
   addr:'daniel.okafor@<mark class="n">northwind-mail.com</mark>',dom:'northwind-mail.com',org:0,first:1,dir:'daniel.okafor@northwind.co',
   au:[['SPF','pass','y'],['DKIM','pass','y'],['DMARC','pass','y']],aud:'northwind-mail.com',
   links:[],
   hops:[['smtp.northwind-mail.com','203.0.113.190','10:47:31','m']].concat(IN_HOPS(['10:47:32','10:47:33'])),hx:[['Reply-To','daniel.okafor@northwind-mail.com','n']],hc:'hx',
   f:{msg:['m','Gift cards, a deadline, secrecy','Codes before 3pm, and keep it between us.'],
      snd:['n','A colleague’s name, an outside address','Your directory has Daniel at northwind.co. This came from northwind-mail.com. First time sender.'],
      lnk:['m','No links, no attachments','Nothing to scan. The request is the payload.'],
      hdr:['n','Replies leave Northwind','Reply-To is daniel.okafor@northwind-mail.com.']}}
};
function xOf(e){if(X[e.id])return X[e.id];var at=e.addr.split('@'),dom=at[1];
  return X[e.id]={ex:e.prev,addr:at[0]+'@<mark class="y">'+dom+'</mark>',dom:dom,org:1,dir:e.from,au:[['SPF','pass','y'],['DKIM','pass','y'],['DMARC','pass','y']],aud:'northwind.co',links:[],
    hops:[['app.northwind.co','10.20.7.3','—','y']].concat(IN_HOPS(['—','—'])),hx:[['Return-Path',e.addr]],
    f:{msg:['i','A routine update','Nothing asks you to act.'],snd:['y','Internal sender','In your directory. SPF, DKIM and DMARC pass.'],lnk:['i','No links','Nothing to check here.'],hdr:['y','Delivered inside Northwind','Every hop is a northwind.co server.']}}}

function slide(){return '<div class="lms-top"><span class="lms-ti"><span class="hl" data-n="0">Module 4: Information Security Awareness</span></span><span class="lms-no"><span class="hl" data-n="3">Slide 3 of 47</span></span></div>'+
  '<div class="lms-mid"><ul class="lms-ul"><li><span class="hl" data-n="1">Do not click links in emails from unknown senders.</span></li><li><span class="hl" data-n="1">Always verify the sender’s email address.</span></li><li><span class="hl" data-n="1">Report suspicious emails to the IT department.</span></li><li>Failure to comply may result in disciplinary action.</li></ul><div class="lms-art pm-lock" data-ps><i></i></div></div>'+
  '<div class="lms-prog"><i style="width:6.4%"></i></div><div class="lms-bot"><span class="lms-hint">Click NEXT to continue.</span><span class="lms-btns"><span class="lms-btn">&#9664; BACK</span><span class="lms-btn"><span class="hl inv" data-n="2" data-mk="r">NEXT &#9654;</span></span></span></div>'}

function app(){var f=function(ic,l,n,cls){return '<div class="pm-f'+(cls?' '+cls:'')+'"><span class="pm-ic">'+ic+'</span><span data-pt="t">'+l+'</span><span class="n">'+(n||'')+'</span></div>'};
  return '<div class="pm" id="pm">'+
  '<div class="pm-top"><div class="pm-brand"><span class="pm-ic pm-tools pm-burger">'+I.menu+'</span><span class="pm-waf">'+I.grid+'</span><span class="pm-logo" data-pt="b">'+I.mail+'</span><span data-pt="t">Northwind Mail</span></div>'+
   '<div class="pm-search" data-pt="e">'+I.search+'<span>Search mail and people</span><kbd>/</kbd></div>'+
   '<div class="pm-tools"><span class="pm-ic">'+I.help+'</span><span class="pm-ic">'+I.gear+'</span><span class="pm-me">AK</span></div></div>'+
  '<div class="pm-main"><nav class="pm-nav" aria-label="Folders"><div class="pm-new" data-pt="b">'+I.pen+'<span>New message</span></div>'+
   f(I.inbox,'Inbox','<span id="pm-unread">4</span>','on')+f(I.star,'Starred')+f(I.clock,'Snoozed')+f(I.send,'Sent')+f(I.file,'Drafts','2')+f(I.junk,'Junk email')+f(I.shield,'Reported','<span class="pm-rn" id="pm-rep">0</span>','rep')+
   '<div class="pm-sep">Labels</div><div class="pm-f"><i class="pm-dot" style="background:#3E7A62"></i><span>Finance</span></div><div class="pm-f"><i class="pm-dot" style="background:#A8577E"></i><span>Planning</span></div></nav>'+
  '<section class="pm-list" aria-label="Inbox"><div class="pm-lh"><h2 data-pt="t">Inbox</h2><span class="pm-ic pm-flag">'+I.flag+'</span><span class="pm-rc" title="Reported">'+I.shield+'<span>Reported</span><b class="pm-rn">0</b></span></div><div class="pm-tabs"><span class="on">Focused</span><span>Other</span></div><div class="pm-items" id="pm-items" data-lenis-prevent></div>'+
   '<aside class="pm-rail" aria-label="Inspection findings" data-lenis-prevent></aside></section>'+
  '<section class="pm-read" id="pm-read" aria-label="Message"></section></div>'+
  '<div class="pm-dock" aria-hidden="true">'+I.shield+'<span>Reported</span><b class="pm-rn">0</b></div></div>'}

function init(api){
  var pm=api.$('#pm'),items=api.$('#pm-items'),read=api.$('#pm-read'),rail=api.$('.pm-rail'),st={},cur=null,ended=false,typ=null,tm=null,handled=0,RM=api.rm,raf=[];
  EM.forEach(function(e){st[e.id]={unread:!!e.drill,res:null,ins:false}});
  function cl(v,a,b){return Math.max(a,Math.min(b,v))}
  function lerp(a,b,t){return a+(b-a)*t}
  function av(e){return '<span class="av" style="background:'+e.c+'">'+e.av+'</span>'}
  function find(id){for(var i=0;i<EM.length;i++)if(EM[i].id===id)return EM[i]}
  function anim(el,kf,o){if(!el||RM||!el.animate)return null;try{return el.animate(kf,o)}catch(err){return null}}

  /* a damped spring on a bag of numbers, written out through apply(). It sleeps when settled and while the hero is out of view. */
  var springs=[];
  function Spring(vals,apply,k,d){var c={},t={},v={},id=0,sp={c:c,t:t,v:v,k:k||.14,d:d||.74,pend:false};
    for(var n in vals){c[n]=t[n]=vals[n];v[n]=0}
    function tick(){id=0;var mv=false;for(var n in t){var x=(v[n]+(t[n]-c[n])*sp.k)*sp.d;v[n]=x;c[n]+=x;if(Math.abs(x)>.0015||Math.abs(t[n]-c[n])>.004)mv=true;else{c[n]=t[n];v[n]=0}}
      apply(c);if(mv){if(api.paused())sp.pend=true;else id=requestAnimationFrame(tick)}}
    sp.go=function(){if(!id)id=requestAnimationFrame(tick)};
    sp.set=function(o,snap){for(var n in o){t[n]=o[n];if(snap||RM){c[n]=o[n];v[n]=0}}if(snap||RM){apply(c);if(RM)return}sp.go()};
    sp.kick=function(o){for(var n in o)v[n]+=o[n];sp.go()};
    sp.stop=function(){if(id)cancelAnimationFrame(id);id=0};
    springs.push(sp);return sp}
  api.every(250,function(){springs.forEach(function(s){if(s.pend&&!api.paused()){s.pend=false;s.go()}})});

  /* ---------- the inbox list: built once, then updated in place so selection can lift with a transition ---------- */
  function list(){if(!items.firstChild){var h='<div class="pm-grp">Today</div>';EM.forEach(function(e,i){if(i===4)h+='<div class="pm-grp">Earlier this week</div>';
      h+='<button class="pm-it" type="button" data-id="'+e.id+'" data-pt="e">'+av(e)+'<span class="fr" data-pt="t">'+e.from+'</span><span class="tm">'+e.tm+'</span><span class="sb" data-pt="t">'+e.subj+'</span><span class="pv">'+e.prev+'</span><span class="tg"></span></button>'});
      items.innerHTML=h}
    api.$$('.pm-it').forEach(function(b){var id=b.getAttribute('data-id'),s=st[id],tg=b.querySelector('.tg'),want=s.res?s.res.tag:'';
      b.classList.toggle('unr',s.unread);b.classList.toggle('done',!!s.res);b.classList.toggle('sel',cur===id);b.setAttribute('aria-current',cur===id?'true':'false');
      if(tg.textContent!==want){tg.textContent=want;tg.className='tg'+(s.res?' '+s.res.s:'');if(want)anim(tg,[{transform:'scale(.6)',opacity:0},{transform:'scale(1.06)',opacity:1,offset:.6},{transform:'none',opacity:1}],{duration:420,easing:'cubic-bezier(.3,1.4,.5,1)'})}});
    var u=EM.filter(function(e){return st[e.id].unread}).length;api.$('#pm-unread').textContent=u||''}
  function cascade(){if(RM)return;api.$$('.pm-it').forEach(function(b,i){anim(b,[{transform:'perspective(42em) translate3d(0,1.1em,-7em) rotateX(-16deg)',opacity:0},{transform:'perspective(42em) translate3d(0,-.14em,.3em) rotateX(1.5deg)',opacity:1,offset:.66}],{duration:680,delay:40+i*55,easing:'cubic-bezier(.22,.8,.3,1)',fill:'backwards'})});
    api.$$('.pm-grp').forEach(function(g,i){anim(g,[{opacity:0},{opacity:1}],{duration:300,delay:i*220,fill:'backwards'})})}

  function toolbar(e,done){var dis=done&&e.drill?' disabled':'';return '<div class="pm-tb"><button class="pm-b bk" type="button" data-a="back" aria-label="Back to inbox">'+I.back+'</button>'+
    '<button class="pm-b" type="button" data-a="reply"'+dis+'>'+I.reply+'<span class="lb">Reply</span></button><i></i><button class="pm-b" type="button" data-a="del"'+dis+' aria-label="Archive">'+I.archive+'<span class="lb">Archive</span></button><button class="pm-b" type="button" data-a="del"'+dis+' aria-label="Delete">'+I.trash+'<span class="lb">Delete</span></button>'+
    '<button class="pm-b ins" type="button" data-a="inspect" aria-pressed="false" aria-keyshortcuts="I" aria-label="Inspect message" title="Inspect message">'+I.layers+'<span class="lb">Inspect</span><kbd>I</kbd></button>'+
    '<button class="pm-b rep" type="button" data-a="report"'+dis+'>'+I.shield+'<span>Report phishing</span></button></div>'}
  function resHTML(e){var r=st[e.id].res;if(!r)return '';var left=EM.filter(function(x){return x.drill&&!st[x.id].res}).length;
    return '<div class="pm-res '+r.s+'"><b>'+r.title+'</b><span class="pt">'+(r.pts>0?'+':'')+r.pts+'</span><p>'+r.text+'</p>'+(left?'<button type="button" data-a="next">Next unread email →</button>':'')+'</div>'}
  function invite(e){var a=st[e.id].res&&st[e.id].res.act;return '<div class="pm-inv"><div class="pm-inv-h"><span class="ci">'+I.cal+'</span><div><b>Q3 planning review</b><span>Thursday 16 October · 14:00–15:00</span><span>Room 4.2 · <a data-href="'+URLS.safe+'" data-act="safe">Join video call</a></span></div></div>'+
    '<div class="pm-inv-a"><button type="button" data-a="accept"'+(a==='accept'?' class="on"':'')+'>Accept</button><button type="button" data-a="tent"'+(a==='tent'?' class="on"':'')+'>Tentative</button><button type="button" data-a="decline"'+(a==='decline'?' class="on"':'')+'>Decline</button></div></div>'}
  function open(id,quiet,o){o=o||{};var e=find(id),prev=cur;if(IS)closeIns(true);cur=id;st[id].unread=false;closeCmp(true);
    read.innerHTML=toolbar(e,!!st[id].res)+'<div class="pm-sc'+(o.rise===2?' rise':o.rise?' fresh':'')+'" data-lenis-prevent>'+resHTML(e)+'<h1 class="pm-subj" data-pt="t">'+e.subj+'</h1>'+
      '<div class="pm-hdr">'+av(e)+'<span class="nm" data-pt="t"><b>'+e.from+'</b> <span>&lt;'+e.addr+'&gt;</span></span><span class="to">To: Alex Kim</span><span class="dt">'+e.dt+'</span></div>'+
      (e.att?'<div class="pm-att" role="button" tabindex="0" data-a="file"><span class="fi">'+I.zip+'</span><div><b>Invoice_4471.zip</b><span>182 KB · Compressed folder</span></div></div>':'')+
      (e.invite?invite(e):'')+'<div class="pm-bd" data-pt="t">'+e.body+'</div></div>'+
      '<div class="pm-cmp"><div class="to">To <b>'+e.from+' &lt;'+e.addr+'&gt;</b></div><div class="tx"></div><div class="ac"><button class="pm-send" type="button" data-a="send">'+I.send+'Send</button><button class="pm-dis" type="button" data-a="discard">Discard</button></div></div>'+
      '<div class="pm-st"></div><div class="pm-ins" role="region" aria-label="Message inspector"></div><div class="pm-sheet" role="dialog" aria-label="Open link?"><p>Open this link?</p><code></code><div><button type="button" data-a="sheet-no">Cancel</button><button class="go" type="button" data-a="sheet-go">Open</button></div></div>'+
      '<div class="pm-trap"></div><div class="pm-dl"><span class="fi">'+I.zip+'</span><div><b>Invoice_4471.zip</b><div class="bar"><i></i></div></div></div>';
    pm.classList.add('reading');list();if(!quiet)api.sfx('open');
    /* a newly opened message arrives from just behind the pane, then sits flat for reading */
    if(!quiet&&prev!==id&&!api.narrow())anim(api.$('.pm-sc'),[{transform:'perspective(60em) translate3d(0,.5em,-2.4em)',opacity:0},{transform:'none',opacity:1}],{duration:340,easing:'cubic-bezier(.2,.8,.3,1)'})}
  function empty(){read.innerHTML='<div class="pm-tb"></div><div class="pm-empty"><div><b>Four new emails.</b>Pick one to read it.</div></div>'}

  /* ---------- resolve a drill email ---------- */
  function setRep(n,bump){api.$$('.pm-rn').forEach(function(b){if(b.textContent===String(n))return;b.textContent=n;
      if(bump)anim(b,[{transform:'translateY(.7em) rotateX(-80deg)',opacity:0},{transform:'translateY(-.08em) rotateX(8deg)',opacity:1,offset:.65},{transform:'none',opacity:1}],{duration:460,easing:'cubic-bezier(.25,1,.4,1)'})});
    if(bump){[api.$('.pm-f.rep'),api.$('.pm-rc'),api.$('.pm-dock')].forEach(function(el){if(el&&el.offsetParent)anim(el,[{transform:'scale(1)'},{transform:'scale(1.07)',offset:.3},{transform:'scale(.985)',offset:.65},{transform:'scale(1)'}],{duration:520,easing:'ease-out'})});
      var f=api.$('.pm-f.rep');if(f){f.classList.add('got');api.after(900,function(){f.classList.remove('got')})}}}
  var reported=0;
  function resolve(id,act,o){o=o||{};var e=find(id);if(!e.drill){api.toast({tone:'info',title:'Not part of today’s drill',text:'The four unread emails at the top are.'});return}
    if(st[id].res||ended)return;var r=OUT[id][act];if(!r)return;st[id].res={pts:r[0],s:r[1],tag:r[2],title:r[3],text:r[4],act:act};handled++;
    api.score(r[0]);api.round(handled+' of 4 handled');
    if(act==='report'){reported++;if(o.fly)o.fly.land=function(){setRep(reported,true)};else setRep(reported,true)}
    api.toast({tone:r[1]==='y'?'good':r[1]==='n'?'bad':'warn',title:r[3],text:(act==='link'||act==='file')?null:{report:'Sent to Northwind Security.',reply:'Reply sent.',del:'Moved out of your inbox.',accept:'Added to your calendar.',tent:'Marked tentative.',decline:'Declined.'}[act],pts:r[0],big:id==='bec'&&act==='report'});
    if(cur===id&&!api.$('.pm-trap.on'))open(id,true,{rise:o.fly?2:1});list();
    if(handled===4)api.after(o.fly?2000:1600,finish)}
  function finish(){if(ended)return;ended=true;if(tm)tm.stop();if(IS)closeIns(true);var rows=EM.filter(function(e){return e.drill}).map(function(e){var r=st[e.id].res,ins=st[e.id].ins?' · inspected first':'';
      return r?{s:r.s,label:e.from+' · '+r.tag+ins,detail:r.text,pts:r.pts}:{s:'n',label:e.from+' · No decision',detail:'Still sitting in the inbox, waiting for someone less careful.',pts:0}});
    var t=api.total();api.end({max:400,rows:rows,title:t>=360?'Sharp. Nothing got past you.':t>=240?'Good instincts. One slipped through.':'Attackers would have had a good morning.',
      line:'Same lesson as the 47-slide module. Two minutes, and you’ll remember it next time an email feels urgent.'})}

  /* ---------- report: the message lifts off the pane, folds into a letter and flies into Reported ---------- */
  function rel(el){var P=pm.getBoundingClientRect(),k=pm.offsetWidth/(P.width||1),r=el.getBoundingClientRect();return {x:(r.left-P.left)*k,y:(r.top-P.top)*k,w:r.width*k,h:r.height*k}}
  function vis(el){return el&&el.offsetParent!==null&&el.getBoundingClientRect().width>0}
  function launch(){var sc=api.$('.pm-sc');if(RM||!sc)return null;
    var R=rel(sc),h=Math.min(R.h,Math.max(sc.scrollHeight-sc.scrollTop,R.h*.55)),w=R.w,nar=api.narrow(),
      tgt=!nar&&vis(api.$('.pm-f.rep'))?api.$('.pm-f.rep'):!nar&&vis(api.$('.pm-rc'))?api.$('.pm-rc'):null,dock=null;
    if(!tgt){dock=api.$('.pm-dock');dock.classList.add('on');tgt=dock}
    /* the folded note ends up as the top-left quarter of the page, so that's what flies */
    var T=dock?{x:dock.offsetLeft,y:dock.offsetTop,w:dock.offsetWidth,h:dock.offsetHeight}:rel(tgt),tx=T.x+T.w*.16-(R.x+w/4),ty=T.y+T.h/2-(R.y+h/4);
    var fly=pm.querySelector('.pm-fly')||pm.appendChild(document.createElement('div'));fly.className='pm-fly';fly.innerHTML='';
    function el(c){var d=document.createElement('div');d.className=c;return d}
    var lt=el('pm-lt');lt.style.cssText='left:'+R.x+'px;top:'+R.y+'px;width:'+w+'px;height:'+h+'px';
    var sh=el('pm-lsh');lt.appendChild(sh);
    /* four quarters: the bottom half folds up, then the right half folds over the left, like a note going into a pocket */
    var hv=['l','r'].map(function(side,hi){var H=el('pm-hv '+side);H.style.cssText='left:'+(hi*w/2)+'px;width:'+(w/2)+'px;height:'+h+'px';
      ['t','b'].forEach(function(k,vi){var P=el('pm-p '+k);P.style.cssText='top:'+(vi*h/2)+'px;width:'+(w/2)+'px;height:'+(h/2)+'px';
        var fr=el('fr'),c=sc.cloneNode(true);c.className='pm-sc pm-cl';c.removeAttribute('data-lenis-prevent');
        [].forEach.call(c.querySelectorAll('[data-pt]'),function(n){n.removeAttribute('data-pt')});c.style.cssText='width:'+w+'px;left:'+(-hi*w/2)+'px;top:'+(-vi*h/2-sc.scrollTop)+'px';fr.appendChild(c);
        var bk=el('bk'+(side==='r'&&k==='t'?' lb':''));if(side==='r'&&k==='t')bk.innerHTML='<span>'+I.shield+'Northwind Security</span><i>Phishing report from Alex Kim</i>';
        P.appendChild(fr);P.appendChild(bk);H.appendChild(P)});lt.appendChild(H);return H});
    fly.appendChild(lt);sc.style.visibility='hidden';
    var D1=1300,o={land:null},ez='cubic-bezier(.55,0,.3,1)',hold=function(t,a,b){return [{transform:t},{transform:t,offset:a},{transform:b,offset:b2(a)},{transform:b}]};
    function b2(a){return a+.24}
    lt.animate([{transform:'none'},
      {transform:'translate3d(0,-.3em,2.6em) rotateX(4deg)',offset:.12,easing:'cubic-bezier(.3,.7,.4,1)'},
      {transform:'translate3d('+(tx*.05)+'px,'+(ty*.04-8)+'px,4em) rotateX(8deg) rotateZ(-2deg) scale(.72)',offset:.52,easing:'cubic-bezier(.45,0,.55,1)'},
      {transform:'translate3d('+(tx*.55)+'px,'+(ty*.5-40)+'px,6em) rotateX(20deg) rotateZ(-8deg) scale(.38)',offset:.77,easing:'cubic-bezier(.3,0,.6,1)'},
      {transform:'translate3d('+tx+'px,'+ty+'px,0) rotateX(30deg) rotateZ(-12deg) scale(.08)'}],{duration:D1,fill:'forwards'});
    [].forEach.call(lt.querySelectorAll('.pm-p.b'),function(P){P.animate(hold('rotateX(0deg)',.12,'rotateX(180deg) translateZ(-1px)'),{duration:D1,fill:'forwards',easing:ez})});
    hv[1].animate(hold('rotateY(0deg)',.34,'rotateY(-180deg) translateZ(-3px)'),{duration:D1,fill:'forwards',easing:ez});
    sh.animate([{transform:'translateZ(-2px)'},{transform:'translateZ(-2px)',offset:.12},{transform:'translateZ(-2px) scale(1,.5)',offset:.36},{transform:'translateZ(-2px) scale(.5,.5)',offset:.58},{transform:'translateZ(-2px) scale(.5,.5)'}],{duration:D1,fill:'forwards',easing:ez});
    [].forEach.call(lt.querySelectorAll('.fr,.bk,.pm-lsh'),function(f){f.animate([{opacity:1},{opacity:1,offset:.9},{opacity:0}],{duration:D1,fill:'forwards'})});
    api.sfx('swipe');api.after(470,function(){api.sfx('flip')});api.after(680,function(){api.sfx('send')});
    api.after(D1-80,function(){if(o.land)o.land();api.sfx('drop')});
    api.after(D1+120,function(){fly.innerHTML=''});
    if(dock)api.after(D1+1300,function(){dock.classList.remove('on')});
    return o}
  function report(id){var e=find(id);if(!e.drill){resolve(id,'report');return}if(st[id].res||ended)return;
    var go=function(){var fl=launch();resolve(id,'report',{fly:fl})};if(IS)closeIns(false,go);else go()}

  /* ---------- traps: the lookalike page (as a rotatable comparison) and the zip ---------- */
  function sheet(real){var dom=real?'sso.northwind.co':'northwind-helpdesk.co',path=real?'/login':'/sso/verify?u=akim';
    return '<div class="pm-sh '+(real?'real':'fake')+'"><div class="pm-sh-fl"></div><i class="pm-ed b"></i><i class="pm-ed r"></i><i class="pm-ed l"></i><i class="pm-ed t"></i>'+
      '<div class="pm-sh-tag"><i></i>'+(real?'Real Northwind sign-in':'Where this link goes')+'</div><div class="pm-sh-w">'+
      '<div class="pm-sh-bar">'+I.lock+'<span><mark>'+dom+'</mark><i>'+path+'</i></span></div>'+
      '<div class="pm-sh-pg"><div class="pm-sso"><div class="lg"><span>'+I.mail+'</span>Northwind</div><h4>Sign in</h4><div class="fd">alex.kim@northwind.co</div><div class="fd pw">Password</div><div class="sb">Sign in</div><small>Can’t access your account?</small></div></div>'+
      '<div class="pm-sh-gl"></div></div></div>'}
  var PR=null;
  function trap(kind){var t=api.$('.pm-trap');if(!t)return;closePair();
    if(kind==='link'){t.innerHTML='<div class="pm-rib">'+I.alert+'<div><b>Training: this is where your password would go.</b><span>The real sign-in page lives at sso.northwind.co.</span></div><button type="button" data-a="trap-back">Back to inbox</button></div>'+
      '<div class="pm-cz"><div class="pm-cz-st"><div class="pm-pair">'+sheet(1)+sheet(0)+'</div></div>'+
      '<div class="pm-dif"><div><span>Real</span><code><mark class="y">sso.northwind.co</mark>/login</code></div><div><span>This link</span><code><mark class="n">northwind-helpdesk.co</mark>/sso/verify?u=akim</code></div><p>Same page, pixel for pixel. Only the address tells them apart.</p></div>'+
      '<span class="pm-hint">'+I.drag+'<span>Drag to compare</span></span></div>';t.classList.add('on');api.after(30,function(){pair(t)})}
    else{t.innerHTML='<div class="pm-rib">'+I.alert+'<div><b>Training intercept: this file would have run.</b><span>Nothing was downloaded. In real life, this is where it starts.</span></div><button type="button" data-a="trap-back">Back to inbox</button></div>'+
      '<div class="pm-rw"><div><h4>Inside Invoice_4471.zip</h4><code>Invoice_4471.pdf.js        4 KB\n→ downloads a payload, encrypts shared drives,\n  leaves a ransom note in every folder.</code><p>The “.pdf” is a disguise. The real extension is .js, a script.</p></div></div>';t.classList.add('on');
      anim(t.querySelector('.pm-rw>div'),[{transform:'perspective(50em) translate3d(0,1em,-8em) rotateX(10deg)',opacity:0},{transform:'perspective(50em) translate3d(0,-.15em,.4em)',opacity:1,offset:.7},{transform:'none',opacity:1}],{duration:620,delay:120,easing:'cubic-bezier(.2,.8,.3,1)',fill:'backwards'})}
    api.sfx('bad');var b=api.$('[data-a="trap-back"]');api.after(450,function(){if(b)b.focus({preventScroll:true})})}
  /* the two sign-in pages stand angled toward each other; drag orbits the pair, it springs back to face you */
  function pair(t){var stg=t.querySelector('.pm-cz-st'),pr=t.querySelector('.pm-pair');if(!stg||!pr)return;
    var sh=[].slice.call(pr.querySelectorAll('.pm-sh'));
    function fit(){var w=stg.clientWidth,h=stg.clientHeight,em=parseFloat(getComputedStyle(pr).fontSize)||13,nar=api.narrow(),
        bw=(nar?29:47)*em,bh=(nar?23:23.5)*em;pr.style.setProperty('--k',cl(Math.min(w/bw,h/bh),.45,1.25).toFixed(3))}
    fit();
    var sp=Spring({ry:0,rx:0,o:0,lx:50,ly:20},function(c){pr.style.transform='rotateX('+(10+c.rx).toFixed(2)+'deg) rotateY('+c.ry.toFixed(2)+'deg)';
      sh.forEach(function(s,i){var sg=i?-1:1;s.style.transform='translate3d('+(sg*-1)*lerp(0,54,c.o)+'%,0,'+lerp(-14,0,c.o)+'em) rotateY('+(sg*lerp(0,24,c.o)).toFixed(2)+'deg)'});
      pr.style.setProperty('--lx',c.lx.toFixed(1)+'%');pr.style.setProperty('--ly',c.ly.toFixed(1)+'%');pr.style.setProperty('--sh',(.5+c.ry/90).toFixed(3))},.1,.78);
    sp.set({o:0},true);sp.set({o:1});
    var drag=null;
    function down(e){if(e.button)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,ry:sp.t.ry,rx:sp.t.rx};try{stg.setPointerCapture(e.pointerId)}catch(er){}stg.classList.add('grab');t.querySelector('.pm-hint').classList.add('off')}
    function move(e){if(drag&&e.pointerId===drag.id){var dx=e.clientX-drag.x,dy=e.clientY-drag.y;sp.set({ry:cl(drag.ry+dx*.3,-48,48),rx:cl(drag.rx-dy*.18,-10,22),lx:cl(50-dx*.25,0,100)});return}
      if(e.pointerType!=='mouse'||RM)return;var r=stg.getBoundingClientRect(),nx=(e.clientX-r.left)/r.width*2-1,ny=(e.clientY-r.top)/r.height*2-1;sp.set({ry:nx*5,rx:-ny*3,lx:50+nx*30,ly:20+ny*30})}
    function up(e){if(!drag||e.pointerId!==drag.id)return;drag=null;stg.classList.remove('grab');sp.set({ry:0,rx:0,lx:50,ly:20})}
    api.listen(stg,'pointerdown',down);api.listen(stg,'pointermove',move);api.listen(stg,'pointerup',up);api.listen(stg,'pointercancel',up);
    api.listen(stg,'pointerleave',function(){if(!drag)sp.set({ry:0,rx:0,lx:50,ly:20})});
    PR={sp:sp,stg:stg,fit:fit,turn:function(d){sp.set({ry:cl(sp.t.ry+d*16,-48,48)});api.after(700,function(){if(PR&&PR.sp===sp)sp.set({ry:0})})}}}
  function closePair(){if(PR){PR.sp.stop();PR=null}}
  function download(id){var d=api.$('.pm-dl');if(!d)return;d.classList.add('on');api.sfx('click');api.after(60,function(){d.classList.add('go')});api.after(1050,function(){d.classList.remove('on','go');trap('file');resolve(id,'file')})}

  /* ---------- the inspector: the open email explodes into the layers a mail security engine reads ---------- */
  var IS=null,LN={msg:'As displayed',snd:'Sender',lnk:'Links',att:'Attachment',hdr:'Headers'},LI={msg:I.eye,snd:I.user,lnk:I.link,att:I.clip,hdr:I.server};
  function pill(s,t){return '<span class="pm-pill '+s+'">'+t+'</span>'}
  function lyBody(k,e,x){
    if(k==='msg'){var lk=(x.links||[])[0];
      return '<div class="pm-lm-h">'+av(e)+'<div><b data-c="snd">'+e.from+'</b><span>to Alex Kim · '+e.tm+'</span></div></div><b class="pm-lm-s">'+e.subj+'</b>'+
        (x.att?'<span class="pm-lm-at" data-c="att">'+I[x.att.ic]+(e.invite?'Q3 planning review · Thu 14:00':x.att.n)+'</span>':'')+
        '<p class="pm-lm-p">'+x.ex+'</p>'+(lk?(lk.btn?'<span class="pm-lm-cta" data-c="lnk">'+lk.t+'</span>':'<span class="pm-lm-a" data-c="lnk">'+lk.t+'</span>'):'')}
    if(k==='snd')return '<dl class="pm-kv"><dt>Display name</dt><dd>'+e.from+'</dd><dt>Address</dt><dd class="mo" data-c="snd" data-t="'+x.f.snd[0]+'">'+x.addr+'</dd>'+
        (x.dir&&!x.org?'<dt>Directory</dt><dd class="mo">'+x.dir+'</dd>':'')+'<dt>Domain</dt><dd><span class="mo">'+x.dom+'</span>'+(x.org?pill('y','Internal'):pill('n','External'))+'</dd></dl>'+
        '<div class="pm-au">'+x.au.map(function(a){return '<span class="'+a[2]+'">'+I[a[2]==='y'?'y':'n']+a[0]+' <b>'+a[1]+'</b></span>'}).join('')+'<em>as '+x.aud+'</em></div>'
    if(k==='lnk')return x.links.length?x.links.map(function(l){return '<dl class="pm-kv"><dt>Shows</dt><dd>'+(l.btn?'<span class="pm-lk-b">'+l.t+'</span>':'<span class="pm-lk-a">'+l.t+'</span>')+'</dd>'+
        '<dt>Goes to</dt><dd data-c="lnk" data-t="'+l.s+'"><span class="mo"><mark class="'+l.s+'">'+l.d+'</mark>'+l.p+'</span>'+pill(l.s,l.x)+'</dd>'+(l.exp?'<dt>Expected</dt><dd class="mo">'+l.exp+'</dd>':'')+'</dl>'}).join(''):
        '<div class="pm-none">'+I.link+'<b>No links in this message</b><span>'+(x.att?'1 attachment instead':'Nothing to hover, nothing to scan')+'</span></div>';
    if(k==='att'){var a=x.att;return '<div class="pm-af"><span class="fi '+a.ic+'">'+I[a.ic]+'</span><div><b>'+a.n+'</b><span>'+a.sz+'</span></div></div>'+
        (a.inner?'<div class="pm-af in"><span class="fi js">JS</span><div><b class="mo">'+a.inner+'</b><span>'+a.isz+' · inside the zip</span></div></div>':'')+
        '<dl class="pm-kv"><dt>Name says</dt><dd>'+a.claim+'</dd><dt>File is</dt><dd data-c="att" data-t="'+a.s+'"><span>'+a.real+'</span>'+pill(a.s,a.x)+'</dd></dl>'}
    if(k==='hdr'){var hc=x.hc==='hx';return '<ol class="pm-hops">'+x.hops.map(function(h,i){return '<li class="'+(h[3]||'')+'"'+(i===0&&!hc?' data-c="snd" data-t="'+x.f.hdr[0]+'"':'')+'><span class="n">'+(i+1)+'</span><span class="h">'+h[0]+'</span><span class="ip">'+h[1]+'</span><span class="t">'+h[2]+'</span></li>'}).join('')+'</ol>'+
        x.hx.map(function(r){return '<div class="pm-hx'+(r[2]?' '+r[2]:'')+'"'+(hc&&r[2]?' data-c="snd" data-t="'+x.f.hdr[0]+'"':'')+'><span>'+r[0]+':</span> '+r[1]+'</div>'}).join('')}
    return ''}
  function layers(e,x){var ks=['msg','snd','lnk'];if(x.att)ks.push('att');ks.push('hdr');return ks}
  function insHTML(e,x,ks){var n=ks.length,lay='';
    for(var i=n-1;i>=0;i--){var k=ks[i],f=x.f[k],num=('0'+(i+1)).slice(-2);
      lay+='<div class="pm-ly'+(i?' gl':' pa')+'" data-i="'+i+'" data-k="'+k+'"><i class="pm-ed b"></i><i class="pm-ed r"></i><i class="pm-ed l"></i><i class="pm-ed t"></i>'+
        '<div class="pm-lf"><div class="pm-lh2"><span class="nm">'+num+'</span>'+LI[k]+'<b>'+LN[k]+'</b>'+(k==='snd'&&x.first?pill('m','First time sender'):'')+(k==='lnk'&&x.links.length?'<em>'+x.links.length+'</em>':'')+(k==='hdr'?'<em>Received path</em>':'')+'</div>'+
        '<div class="pm-lb">'+lyBody(k,e,x)+'</div><p class="pm-lx '+f[0]+'">'+I[f[0]]+'<span><b>'+f[1]+'</b> '+f[2]+'</span></p></div>'+
        '<span class="pm-tag"><b>'+num+'</b>'+LN[k]+'</span></div>'}
    var hits='';for(var j=n-1;j>=0;j--)hits+='<i class="pm-hit" data-i="'+j+'"></i>';
    return '<div class="pm-ins-st"><div class="pm-stk"><div class="pm-flr"></div>'+lay+'<div class="pm-cns"></div>'+hits+'</div></div>'+
      '<div class="pm-ins-h"><span>'+I.layers+'<b>Exploded view</b><em>'+n+' layers</em></span><button class="pm-b2" type="button" data-a="ins-reset">'+I.turn+'<span>Reset view</span></button></div>'+
      '<div class="pm-pg"><button class="pm-b2" type="button" data-a="ly-prev" aria-label="Previous layer">'+I.up+'</button><span class="pm-pg-t" aria-live="polite"></span><button class="pm-b2" type="button" data-a="ly-next" aria-label="Next layer">'+I.down+'</button><button class="pm-b2 dn" type="button" data-a="ins-done">Done</button></div>'+
      '<span class="pm-hint">'+I.drag+'<span>'+(api.narrow()?'Swipe through the layers':'Drag to rotate · hover a layer')+'</span></span>'+
      '<span class="hm-sr">'+ks.map(function(k,i){var f=x.f[k];return 'Layer '+(i+1)+', '+LN[k]+': '+f[1]+'. '+f[2]}).join(' ')+'</span>'+
      ''}
  function railHTML(e,x,ks){var nsig=ks.filter(function(k){return x.f[k][0]==='n'}).length,nm=ks.filter(function(k){return x.f[k][0]==='m'}).length;
    return '<div class="pm-rail-h">'+I.layers+'<b>Inspector</b><button class="pm-b2" type="button" data-a="ins-done">Done <kbd>Esc</kbd></button></div>'+
      '<div class="pm-rail-m">'+av(e)+'<div><b>'+e.from+'</b><span>'+e.subj+'</span></div></div>'+
      '<div class="pm-rail-s '+(nsig?'n':nm?'m':'y')+'">'+(nsig?I.alert:nm?I.m:I.y)+'<span>'+(nsig?nsig+' warning sign'+(nsig>1?'s':'')+(nm?', '+nm+' to note':''):nm?nm+' thing'+(nm>1?'s':'')+' to note':'No warning signs')+'</span></div>'+
      '<ol class="pm-fds">'+ks.map(function(k,i){var f=x.f[k];return '<li><button class="pm-fd '+f[0]+'" type="button" data-l="'+i+'"><span class="nm">'+('0'+(i+1)).slice(-2)+'</span><span class="ic">'+I[f[0]]+'</span><span class="tx"><em>'+LN[k]+'</em><b>'+f[1]+'</b><span>'+f[2]+'</span></span></button></li>'}).join('')+'</ol>'+
      '<p class="pm-rail-f">Read-only. Inspecting doesn’t open, answer or report anything. You still decide.</p>'}

  function openIns(){if(IS||ended)return;var e=find(cur);if(!e)return;var box=api.$('.pm-ins');if(!box)return;closeCmp(true);closeSheet();
    var x=xOf(e),ks=layers(e,x),phone=api.narrow();st[e.id].ins=st[e.id].ins||!st[e.id].res;
    box.innerHTML=insHTML(e,x,ks);if(!phone){rail.innerHTML=railHTML(e,x,ks);rail.scrollTop=0}
    var stk=box.querySelector('.pm-stk'),lys=[].slice.call(box.querySelectorAll('.pm-ly')).sort(function(a,b){return a.getAttribute('data-i')-b.getAttribute('data-i')});
    IS={e:e,x:x,ks:ks,n:ks.length,phone:phone,box:box,stg:box.querySelector('.pm-ins-st'),stk:stk,lys:lys,flr:box.querySelector('.pm-flr'),cns:[],hot:-1,bx:56,bz:-16,act:0,drag:null,
      hits:[].slice.call(box.querySelectorAll('.pm-hit')).sort(function(a,b){return a.getAttribute('data-i')-b.getAttribute('data-i')})};
    box.classList.toggle('ph',phone);box.classList.add('on');pm.classList.add('ins');
    /* a narrow reading pane gives the stage the folder column's width while you inspect */
    if(!phone){pm.classList.add('ins-d');var emr=parseFloat(getComputedStyle(read).fontSize)||13;if(read.clientWidth/emr<50&&api.$('.pm-nav').offsetWidth)pm.classList.add('ins-w')}
    var b=api.$('.pm-b.ins');if(b)b.setAttribute('aria-pressed','true');
    geo();
    var vals={e:0,rx:0,rz:0,s:IS.s*1.04,ty:0,a:0,lx:50,ly:30};for(var i=0;i<IS.n;i++)vals['l'+i]=0;
    IS.sp=Spring(vals,phone?applyP:applyD,phone?.1:.075,phone?.76:.8);IS.sp.set(vals,true);
    api.after(16,function(){if(!IS)return;IS.sp.set(rest());if(RM)IS.sp.set(rest(),true)});
    if(!RM){anim(box,[{opacity:0},{opacity:1}],{duration:220,easing:'ease-out'});if(!phone)[].forEach.call(rail.children,function(c,j){anim(c,[{transform:'translateX(-.8em)',opacity:0},{transform:'none',opacity:1}],{duration:380,delay:60+j*45,easing:'cubic-bezier(.2,.8,.3,1)',fill:'backwards'})})}
    api.sfx('swipe');api.after(260,function(){api.sfx('open')});
    if(phone)pg()}
  function lifts(h,o){o=o||{};var g=IS.gap,E=g*1.1;for(var i=0;i<IS.n;i++)o['l'+i]=h<0?0:h===0?(i===0?g*.25:0):(i<h?E/2:-E/2+(i===h?g*.18:0));return o}
  function rest(){var o={e:1,s:IS.s,ty:IS.ty,lx:50,ly:30};if(IS.phone){o.a=IS.act;o.rx=0;o.rz=0}else{o.rx=IS.bx;o.rz=IS.bz}return lifts(IS.hot,o)}
  /* sizes, fit and the connector endpoints, all from layout (untransformed offsets) so it's exact at any scale */
  function geo(){var I0=IS,box=I0.box,stg=I0.stg,em=parseFloat(getComputedStyle(I0.stk).fontSize)||13,W=stg.clientWidth,H=stg.clientHeight,f=I0.lys[0].querySelector('.pm-lf');
    if(I0.phone)box.style.setProperty('--lw',Math.round(box.clientWidth-em*1.7)+'px');
    I0.W=f.offsetWidth;I0.H=f.offsetHeight;
    if(I0.phone){I0.slot=Math.min(I0.H*.62,(H-I0.H*.5)/Math.max(1,I0.n-1));I0.s=1;I0.ty=0;I0.gap=0;return}
    var short=H/em<34;I0.gap=em*(I0.n>4?(short?5.1:6.3):(short?5.8:7.1));
    /* projected size of the exploded stack at the rest angle, then scale to fit the stage */
    var rx=I0.bx*Math.PI/180,rz=Math.abs(I0.bz)*Math.PI/180,w2=I0.W+em*7,h2=I0.H,depth=I0.gap*(I0.n-1),
      pw=w2*Math.cos(rz)+h2*Math.sin(rz),ph=(w2*Math.sin(rz)+h2*Math.cos(rz))*Math.cos(rx)+depth*Math.sin(rx);
    I0.s=cl(Math.min((W-em*2.4)/pw,(H-em*(short?3.4:4.6))/ph),.5,1.25);I0.ty=em*(short?.9:.5);
    /* connectors: each data-c piece links to the next layer that carries the same key */
    var pts=[];I0.lys.forEach(function(L,i){[].forEach.call(L.querySelectorAll('[data-c]'),function(el){var x=0,y=0,n=el,lf=L.querySelector('.pm-lf');while(n&&n!==lf){x+=n.offsetLeft;y+=n.offsetTop;n=n.offsetParent}
      pts.push({i:i,k:el.getAttribute('data-c'),t:el.getAttribute('data-t'),x:x-em*.5,y:y+el.offsetHeight/2,el:el})})});
    var cn=box.querySelector('.pm-cns');cn.innerHTML='';I0.cns=[];
    pts.forEach(function(p){var q=null;pts.forEach(function(r){if(r.k===p.k&&r.i>p.i&&(!q||r.i<q.i))q=r});if(!q)return;
      var d=document.createElement('div');d.className='pm-cn '+(q.t||'i');d.innerHTML='<i></i><i></i>';cn.appendChild(d);I0.cns.push({el:d,a:p,b:q});p.el.classList.add('pin',q.t||'i');q.el.classList.add('pin')})}
  function zOf(c,i){return -i*IS.gap*c.e+c['l'+i]}
  function applyD(c){var I0=IS;if(!I0)return;var mid=I0.gap*(I0.n-1)/2*c.e;
    I0.stk.style.transform='translate3d(0,'+c.ty.toFixed(1)+'px,0) scale3d('+c.s.toFixed(4)+','+c.s.toFixed(4)+','+c.s.toFixed(4)+') rotateX('+c.rx.toFixed(2)+'deg) rotateZ('+c.rz.toFixed(2)+'deg) translateZ('+mid.toFixed(1)+'px)';
    I0.lys.forEach(function(L,i){L.style.transform='translate3d(0,0,'+zOf(c,i).toFixed(2)+'px)';L.style.setProperty('--o',i?cl(c.e*2.4-.35-i*.08,0,1).toFixed(3):'1')});
    I0.hits.forEach(function(h,i){h.style.transform='translate3d(0,0,'+(-i*I0.gap*c.e).toFixed(2)+'px)'});
    I0.flr.style.transform='translate3d(0,0,'+(-(I0.n-1)*I0.gap*c.e-I0.gap*.7*c.e-2).toFixed(1)+'px)';I0.flr.style.opacity=cl(c.e,0,1).toFixed(3);
    var co=cl(c.e*2-1.1,0,1).toFixed(3);
    I0.cns.forEach(function(k){var a=k.a,b=k.b,z1=zOf(c,a.i)-1,z2=zOf(c,b.i)+1,dx=b.x-a.x,dy=b.y-a.y,dz=z2-z1,L=Math.sqrt(dx*dx+dy*dy+dz*dz),h=Math.sqrt(dx*dx+dy*dy);
      k.el.style.width=L.toFixed(1)+'px';k.el.style.transform='translate3d('+a.x.toFixed(1)+'px,'+a.y.toFixed(1)+'px,'+z1.toFixed(1)+'px) rotateZ('+Math.atan2(dy,dx).toFixed(4)+'rad) rotateY('+Math.atan2(-dz,h).toFixed(4)+'rad)';k.el.style.setProperty('--o',co)});
    I0.stk.style.setProperty('--lx',(50+c.rz*1.3+(c.lx-50)).toFixed(1)+'%');I0.stk.style.setProperty('--ly',(c.ly+(c.rx-56)*1.2).toFixed(1)+'%')}
  /* phone: a vertical exploded stack. Slabs lie tilted in a column; the one you're on stands up flat, readable, in front */
  function applyP(c){var I0=IS;if(!I0)return;var n=I0.n,H=I0.stg.clientHeight,lim=Math.max(0,H/2-I0.H/2-6);
    I0.lys.forEach(function(L,i){var w=cl(1-Math.abs(i-c.a),0,1),s=w*w*(3-2*w),sy=(i-(n-1)/2)*I0.slot,ay=cl(sy,-lim,lim),
        y=lerp(sy,ay,s)*c.e,rx=lerp(64,0,s)*c.e,z=lerp(-I0.H*.5,46,s)*c.e,sc=lerp(.94,1,s)*(c.e<1?lerp(1.03,1,c.e):1);
      L.style.transform='translate3d(0,'+y.toFixed(1)+'px,'+(z-i*.5).toFixed(1)+'px) rotateX('+rx.toFixed(2)+'deg) scale('+sc.toFixed(4)+')';
      L.style.setProperty('--o',i?cl(c.e*2.2-.4,0,1).toFixed(3):'1');L.style.setProperty('--f',s.toFixed(3));L.classList.toggle('act',s>.5)});
    I0.stk.style.setProperty('--lx',(50+(c.a%1)*40).toFixed(1)+'%');I0.stk.style.setProperty('--ly','25%')}
  function pg(){if(!IS||!IS.phone)return;var t=IS.box.querySelector('.pm-pg-t'),k=IS.ks[IS.act];t.innerHTML='<b>'+('0'+(IS.act+1)).slice(-2)+'</b> / '+('0'+IS.n).slice(-2)+'<span>'+LN[k]+'</span>';
    IS.box.querySelector('[data-a="ly-prev"]').disabled=IS.act<=0;IS.box.querySelector('[data-a="ly-next"]').disabled=IS.act>=IS.n-1}
  function setHot(i){if(!IS||IS.phone||IS.hot===i)return;IS.hot=i;IS.sp.set(lifts(i));
    IS.box.classList.toggle('hov',i>=0);IS.lys.forEach(function(L,j){L.classList.toggle('hot',j===i)});
    IS.cns.forEach(function(k){k.el.classList.toggle('on',k.a.i===i||k.b.i===i)});
    [].forEach.call(rail.querySelectorAll('.pm-fd'),function(f){f.classList.toggle('hot',+f.getAttribute('data-l')===i)});
    if(i>=0&&!RM)api.sfx('tap')}
  function goLayer(i){if(!IS)return;i=cl(i,0,IS.n-1);if(IS.phone){if(i===IS.act)return;IS.act=i;IS.sp.set({a:i});pg();api.sfx('flip');return}setHot(i);var f=rail.querySelector('.pm-fd[data-l="'+i+'"]');if(f)f.scrollIntoView({block:'nearest'})}
  function closeIns(instant,cb){if(!IS)return;var I0=IS,b=api.$('.pm-b.ins');if(b)b.setAttribute('aria-pressed','false');
    function done(){if(IS!==I0&&IS)return;I0.sp.stop();I0.box.classList.remove('on','ph','hov');I0.box.innerHTML='';rail.innerHTML='';pm.classList.remove('ins','ins-d','ins-w');IS=null;if(cb)cb()}
    if(instant||RM){done();if(!instant)settle();return}
    IS.closing=true;IS.drag=null;var o={e:0,rx:0,rz:0,s:I0.s*1.03,ty:0,a:0};for(var i=0;i<I0.n;i++)o['l'+i]=0;I0.sp.k=.11;I0.sp.d=.72;I0.sp.set(o);
    I0.box.classList.add('closing');[].forEach.call(rail.children,function(c){anim(c,[{opacity:1},{opacity:0}],{duration:180,fill:'forwards'})});
    api.after(300,function(){anim(I0.box,[{opacity:1},{opacity:0}],{duration:170,fill:'forwards'});if(!cb)settle()});
    api.after(470,function(){I0.box.classList.remove('closing');[I0.box].concat([].slice.call(rail.children)).forEach(function(el){if(el.getAnimations)el.getAnimations().forEach(function(a){a.cancel()})});done();if(b&&!cb)b.focus({preventScroll:true})})}
  /* collapsing lands the message back in the pane with a small physical settle */
  function settle(){var sc=api.$('.pm-sc');api.sfx('drop');anim(sc,[{transform:'perspective(60em) translate3d(0,-.35em,1.6em)',opacity:.2},{transform:'perspective(60em) translate3d(0,.1em,-.2em)',opacity:1,offset:.55},{transform:'none',opacity:1}],{duration:480,easing:'cubic-bezier(.25,.9,.35,1)'})}
  /* drag to rotate (desktop), swipe through layers (phone), pointer tilt with a moving highlight */
  api.listen(read,'pointerdown',function(e){if(!IS||IS.closing||!e.target.closest('.pm-ins-st')||e.button)return;var st0=IS.stg;
    var L0=e.target.closest('.pm-ly');IS.drag={id:e.pointerId,x:e.clientX,y:e.clientY,bx:IS.bx,bz:IS.bz,a:IS.sp.c.a,t:performance.now(),vx:0,vy:0,lx:e.clientX,ly:e.clientY,moved:false,ly0:L0?+L0.getAttribute('data-i'):-1};try{st0.setPointerCapture(e.pointerId)}catch(er){}IS.box.classList.add('grab')});
  api.listen(read,'pointermove',function(e){if(!IS||IS.closing)return;var d=IS.drag;
    if(d&&e.pointerId===d.id){var dx=e.clientX-d.x,dy=e.clientY-d.y,now=performance.now(),dt=Math.max(8,now-d.t);d.vx=lerp(d.vx,(e.clientX-d.lx)/dt,.5);d.vy=lerp(d.vy,(e.clientY-d.ly)/dt,.5);d.t=now;d.lx=e.clientX;d.ly=e.clientY;
      if(Math.abs(dx)+Math.abs(dy)>4)d.moved=true;
      if(IS.phone){IS.sp.set({a:cl(d.a-dy/IS.slot,-.35,IS.n-.65)},true);return}
      IS.bz=cl(d.bz+dx*.34,-80,80);IS.bx=cl(d.bx-dy*.22,12,78);IS.sp.set({rz:IS.bz,rx:IS.bx});if(IS.hot>=0)setHot(-1);return}
    if(IS.phone||e.pointerType!=='mouse'||RM||!e.target.closest('.pm-ins-st'))return;
    var r=IS.stg.getBoundingClientRect(),nx=(e.clientX-r.left)/r.width*2-1,ny=(e.clientY-r.top)/r.height*2-1;
    IS.sp.set({rz:IS.bz+nx*4,rx:IS.bx-ny*3,lx:50+nx*28,ly:30+ny*26})});
  function release(e){if(!IS||!IS.drag||e.pointerId!==IS.drag.id)return;var d=IS.drag;IS.drag=null;IS.box.classList.remove('grab');
    if(IS.phone){var to=Math.round(cl(Math.abs(d.vy)>.25?Math.round(d.a)+(d.vy<0?1:-1):IS.sp.c.a,0,IS.n-1));if(!d.moved&&d.ly0>=0)to=d.ly0;if(to!==IS.act)api.sfx('flip');IS.act=to;IS.sp.set({a:to});pg();return}
    if(!RM&&d.moved){IS.bz=cl(IS.bz+d.vx*90,-80,80);IS.bx=cl(IS.bx-d.vy*40,12,78);IS.sp.set({rz:IS.bz,rx:IS.bx});IS.sp.kick({rz:d.vx*6})}}
  api.listen(read,'pointerup',release);api.listen(read,'pointercancel',release);
  api.listen(read,'pointerover',function(e){if(!IS||IS.phone||IS.drag||IS.closing||!e.target.closest)return;var L=e.target.closest('.pm-hit');if(L)setHot(+L.getAttribute('data-i'));else if(e.target.closest('.pm-ins'))setHot(-1)});
  api.listen(read,'pointerleave',function(){if(IS&&!IS.phone&&!IS.drag&&!rail.contains(document.activeElement)){setHot(-1);IS.sp.set({rz:IS.bz,rx:IS.bx,lx:50,ly:30})}});
  api.listen(rail,'pointerover',function(e){var f=e.target.closest&&e.target.closest('.pm-fd');if(f&&IS)setHot(+f.getAttribute('data-l'))});
  api.listen(rail,'focusin',function(e){var f=e.target.closest&&e.target.closest('.pm-fd');if(f&&IS)setHot(+f.getAttribute('data-l'))});
  api.listen(rail,'click',function(e){var f=e.target.closest('.pm-fd');if(f&&IS){setHot(+f.getAttribute('data-l'));return}if(e.target.closest('[data-a="ins-done"]'))closeIns()});
  /* touch: press and hold the message to inspect it */
  var hold=null,swallow=0;
  api.listen(read,'pointerdown',function(e){if(e.pointerType!=='touch'||IS||ended)return;var sc=e.target.closest('.pm-sc');if(!sc||e.target.closest('[data-href],[data-a],button,.pm-att,.pm-inv'))return;
    hold={x:e.clientX,y:e.clientY,sc:sc,id:api.after(520,function(){if(!hold)return;hold.sc.classList.remove('hold');hold=null;swallow=performance.now()+700;openIns()})};if(!RM)sc.classList.add('hold')});
  function unhold(){if(hold){clearTimeout(hold.id);hold.sc.classList.remove('hold');hold=null}}
  api.listen(read,'pointermove',function(e){if(hold&&Math.abs(e.clientX-hold.x)+Math.abs(e.clientY-hold.y)>10)unhold()});
  api.listen(read,'pointerup',unhold);api.listen(read,'pointercancel',unhold);
  api.listen(read,'contextmenu',function(e){if(e.target.closest('.pm-sc'))e.preventDefault()});

  /* ---------- reply composer: it rises from depth and drafts what most people would type ---------- */
  function compose(e){var c=api.$('.pm-cmp');if(!c||c.classList.contains('on'))return;if(IS)closeIns(true);c.classList.add('on');api.after(20,function(){c.classList.add('in')});var tx=api.$('.pm-cmp .tx'),s=e.draft||'Thanks.',i=0;api.sfx('open');
    clearInterval(typ);typ=api.every(34,function(){i++;tx.textContent=s.slice(0,i);if(i%2)api.sfx('key');if(i>=s.length){clearInterval(typ);typ=null}});api.after(200,function(){var b=api.$('.pm-send');if(b)b.focus({preventScroll:true})})}
  function closeCmp(now){if(typ){clearInterval(typ);typ=null}var c=api.$('.pm-cmp');if(!c)return;c.classList.remove('in');if(now)c.classList.remove('on');else api.after(350,function(){c.classList.remove('on')})}
  function closeSheet(){var s=api.$('.pm-sheet');if(s)s.classList.remove('on')}
  function status(u){var s=api.$('.pm-st');if(!s)return;if(u){s.textContent=u;s.classList.add('on')}else s.classList.remove('on')}
  var touch=false;
  api.listen(pm,'pointerdown',function(e){touch=e.pointerType==='touch'});
  api.listen(pm,'pointerover',function(e){var a=e.target.closest&&e.target.closest('[data-href]');status(a?a.getAttribute('data-href'):null)});
  api.listen(pm,'click',function(ev){if(performance.now()<swallow){ev.preventDefault();return}var t=ev.target,it=t.closest('.pm-it');if(ended&&!it&&!t.closest('[data-a="back"]'))return;
    if(it){open(it.getAttribute('data-id'));return}
    var l=t.closest('[data-href]');if(l){ev.preventDefault();var act=l.getAttribute('data-act');
      if(touch){var sh=api.$('.pm-sheet');api.$('.pm-sheet code').textContent=l.getAttribute('data-href');sh.setAttribute('data-act',act);sh.classList.add('on');api.sfx('open');return}
      follow(act);return}
    var b=t.closest('[data-a]');if(!b)return;var a=b.getAttribute('data-a'),e=find(cur);
    if(a==='back'){if(IS)closeIns(true);pm.classList.remove('reading');api.sfx('click');return}
    if(a==='next'){var n=EM.filter(function(x){return x.drill&&!st[x.id].res})[0];if(n)open(n.id);return}
    if(a==='sheet-no'){closeSheet();return}
    if(a==='sheet-go'){var sh2=api.$('.pm-sheet');sh2.classList.remove('on');follow(sh2.getAttribute('data-act'));return}
    if(a==='trap-back'){closePair();api.$('.pm-trap').classList.remove('on');open(cur,true);return}
    if(a==='inspect'){if(IS)closeIns();else openIns();return}
    if(a==='ins-done'){closeIns();return}
    if(a==='ins-reset'){if(IS&&!IS.phone){IS.bx=56;IS.bz=-16;IS.sp.set({rx:IS.bx,rz:IS.bz});api.sfx('flip')}return}
    if(a==='ly-prev'||a==='ly-next'){goLayer((IS?IS.act:0)+(a==='ly-next'?1:-1));return}
    if(!e)return;
    if(a==='reply'){compose(e);return}
    if(a==='discard'){closeCmp();api.sfx('click');return}
    if(a==='send'){closeCmp();api.sfx('send');api.after(250,function(){resolve(e.id,'reply')});return}
    if(a==='file'){if(IS)closeIns(true);if(e.drill&&!st[e.id].res)download(e.id);return}
    if(a==='report'){report(e.id);return}
    if(IS)closeIns(true);
    if(a==='del'){api.sfx('swipe');resolve(e.id,'del');return}
    resolve(e.id,a)});
  api.listen(pm,'keydown',function(ev){if(ev.key==='Enter'&&ev.target.classList.contains('pm-att')){ev.preventDefault();ev.target.click()}});
  function follow(act){var e=find(cur);if(!e)return;if(IS)closeIns(true);
    if(act==='link'){if(!st[e.id].res){trap('link');resolve(e.id,'link')}else trap('link');return}
    if(act==='safe'){api.toast({tone:'info',title:'meet.northwind.co',text:'A real link to an internal video call. The invite buttons are what answer it.'});return}}
  api.key(function(ev){if(ended)return;var k=ev.key;
    if(IS){if(k==='Escape'||k==='i'||k==='I'){ev.preventDefault();closeIns();return}
      if(k==='ArrowDown'||k==='ArrowUp'){ev.preventDefault();var c=IS.phone?IS.act:IS.hot;goLayer(c<0?0:c+(k==='ArrowDown'?1:-1));return}
      if((k==='ArrowLeft'||k==='ArrowRight')&&!IS.phone){ev.preventDefault();IS.bz=cl(IS.bz+(k==='ArrowLeft'?-14:14),-80,80);IS.sp.set({rz:IS.bz});return}return}
    if(api.$('.pm-trap.on')){if(PR&&(k==='ArrowLeft'||k==='ArrowRight')){ev.preventDefault();PR.turn(k==='ArrowLeft'?-1:1)}return}
    if((k==='i'||k==='I')&&cur&&(!api.narrow()||pm.classList.contains('reading'))){ev.preventDefault();openIns();return}
    if(k==='Escape'){closeSheet();closeCmp();return}
    if(k==='ArrowDown'||k==='ArrowUp'){ev.preventDefault();var i=EM.findIndex(function(x){return x.id===cur}),n=cl(i+(k==='ArrowDown'?1:-1),0,EM.length-1);open(EM[n].id);var it=api.$('.pm-it[data-id="'+EM[n].id+'"]');if(it)it.focus({preventScroll:true})}});
  list();if(!api.narrow())open('it',true);else empty();
  return {start:function(){api.round('0 of 4 handled');tm=api.timer(120,function(){api.toast({tone:'warn',title:'Time’s up',text:'Whatever’s left is still sitting in the inbox.',silent:true});api.after(900,finish)});
      cascade();if(!api.narrow()){anim(api.$('.pm-sc'),[{transform:'perspective(60em) translate3d(0,.6em,-3em)',opacity:0},{transform:'none',opacity:1}],{duration:520,delay:260,easing:'cubic-bezier(.2,.8,.3,1)',fill:'backwards'});var it=api.$('.pm-it');if(it)it.focus({preventScroll:true})}},
    resize:function(){if(IS){closeIns(true);openIns()}if(PR)PR.fit()},
    destroy:function(){if(typ)clearInterval(typ);springs.forEach(function(s){s.stop()});IS=null;PR=null}}
}

(window.HM_T=window.HM_T||[]).push({id:'phish',topic:'Phishing',music:'phish',
  app:{name:'Northwind Mail',url:'mail.northwind.co/inbox',color:'#2557D6',icon:I.mail},
  lms:{url:'learn.northwind.co/infosec-101/module-4/slide-3',color:'#1F3A63'},
  slide:slide(),
  notes:['A topic isn’t a goal. What should people be able to do?','Rules with no situation. Gone by Friday.','The only decision on this screen is “Next”.','Slide 3 of 47. Everyone’s already skimming.'],
  intro:{title:'Phishing drill',lede:'Four new emails just landed in Alex’s inbox. Some are real. Deal with each one the way you would at work.',
    rules:['Report the fakes with <b>Report phishing</b>. Act on the real ones.','Not sure? Hover the link, or <b>Inspect</b> the message to pull it apart.','You have two minutes. Every email counts.'],meta:'4 emails · 2 minutes',cta:'Open inbox'},
  html:app(),init:init});
})();

/* training: redact */
/* Redaction drill in a document-sharing tool. A motor claim file auto-sends to an outside body shop in 75 seconds.
   Black out the personal data, keep what the shop needs to fix the car. The claimant's name hides in five places. */
(function(){
var S='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',E='</svg>',
    B='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
var I={
  folio:S+'<path d="M4 1.9h5.3l2.9 2.9v9.3H4z"/><path d="M9.3 1.9v2.9h2.9"/><path d="M6 7.7h4.2" stroke-width="2.2" stroke-linecap="butt"/><path d="M6 11h2.6"/>'+E,
  select:S+'<path d="M3.8 2.6 12.2 7.4l-3.6 1 2.1 3.9-1.6.9-2.1-3.9-2.7 2.5z"/>'+E,
  redact:S+'<path d="M2.4 3.6h8M2.4 12.4h6"/><rect x="2.4" y="6.3" width="11.2" height="3.4" rx=".7" fill="currentColor" stroke="none"/>'+E,
  find:S+'<circle cx="7" cy="7" r="4.5"/><path d="m10.4 10.4 3.2 3.2"/><path d="M5 7h4" stroke-width="2" stroke-linecap="butt"/>'+E,
  search:S+'<circle cx="7" cy="7" r="4.3"/><path d="m10.3 10.3 3.2 3.2"/>'+E,
  undo:S+'<path d="M5.6 3.4 2.6 6.4l3 3"/><path d="M2.9 6.4h6.4a3.7 3.7 0 0 1 0 7.4H7"/>'+E,
  minus:S+'<path d="M4 8h8"/>'+E, plus:S+'<path d="M8 4v8M4 8h8"/>'+E,
  share:S+'<path d="M8 10V2.4M5.1 5.2 8 2.3l2.9 2.9"/><path d="M3.2 8.4v4.2a1.2 1.2 0 0 0 1.2 1.2h7.2a1.2 1.2 0 0 0 1.2-1.2V8.4"/>'+E,
  send:S+'<path d="M13.8 2.2 7.2 8.8M13.8 2.2 9.6 13.8 7.2 8.8 2.2 6.4z"/>'+E,
  clock:S+'<circle cx="8" cy="8" r="6"/><path d="M8 4.8V8l2.2 1.4"/>'+E,
  close:S+'<path d="M4.5 4.5l7 7M11.5 4.5l-7 7"/>'+E,
  up:S+'<path d="M4 10l4-4 4 4"/>'+E, down:S+'<path d="M4 6l4 4 4-4"/>'+E,
  saved:S+'<path d="M4.6 12.6h6.8a2.8 2.8 0 0 0 .5-5.6 4 4 0 0 0-7.7.7 2.5 2.5 0 0 0 .4 4.9z"/><path d="m6.4 9.5 1.2 1.2 2.3-2.5"/>'+E,
  eye:S+'<path d="M1.8 8s2.3-4.3 6.2-4.3S14.2 8 14.2 8s-2.3 4.3-6.2 4.3S1.8 8 1.8 8z"/><circle cx="8" cy="8" r="1.9"/>'+E,
  nodl:S+'<path d="M8 2.6v6.2M5.4 6.4 8 9l2.6-2.6M3 12.6h10"/><path d="M2.6 2.6l10.8 10.8"/>'+E,
  inbox:S+'<path d="M2 9.4 3.9 3.7a1 1 0 0 1 .9-.7h6.4a1 1 0 0 1 .9.7L14 9.4v3.1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path d="M2 9.4h3.3l.8 1.6h3.8l.8-1.6H14"/>'+E,
  pages:S+'<rect x="3.6" y="2" width="8.8" height="12" rx="1"/><path d="M5.9 5.2h4.2M5.9 7.6h4.2M5.9 10h2.4"/>'+E,
  chat:S+'<path d="M2.6 4a1.2 1.2 0 0 1 1.2-1.2h8.4A1.2 1.2 0 0 1 13.4 4v6a1.2 1.2 0 0 1-1.2 1.2H6.6L3.8 13.4v-2.2h0A1.2 1.2 0 0 1 2.6 10z"/>'+E,
  more:'<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="3.6" cy="8" r="1.2"/><circle cx="8" cy="8" r="1.2"/><circle cx="12.4" cy="8" r="1.2"/></svg>',
  y:B+'<path d="M3.5 8.4l2.9 2.9 6.1-6.6"/>'+E, n:B+'<path d="M4.5 4.5l7 7M11.5 4.5l-7 7"/>'+E, m:B+'<path d="M8 4v5"/><circle cx="8" cy="12" r=".6" fill="currentColor"/>'+E,
  nw:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="2" fill="#1F2B4D"/><path d="M7 17.5V6.5l10 11V6.5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"/></svg>'
};

/* p: personal data the shop must not get (+50 blacked out, -25 leaked). The rest is what the shop needs (-15 if blacked out). */
var G={
  name:{p:1,l:'Name'},dob:{p:1,l:'Date of birth'},addr:{p:1,l:'Home address'},phone:{p:1,l:'Mobile number'},
  email:{p:1,l:'Email address'},pol:{p:1,l:'Policy number'},health:{p:1,l:'Health details'},bank:{p:1,l:'Bank details'},
  ref:{l:'Claim reference'},veh:{l:'Vehicle'},reg:{l:'Registration'},date:{l:'Incident date'},dmg:{l:'Damage list'},lim:{l:'Repair limit'}
};
var PG=['name','dob','addr','phone','email','pol','health','bank'],NG=['ref','veh','reg','date','dmg','lim'];
var V={
  name:['Every instance, including the footer and the one inside the email address.','Still visible in {w}. Names repeat in footers, payee lines and email addresses. Search, don’t skim.'],
  dob:['A body shop never needs a birthday.','Name plus date of birth is most of an identity.'],
  addr:['They have the car. They don’t need her house.','The car is already at the shop. Her home address didn’t need to go too.'],
  phone:['The notes say bookings go through the claims team.','The notes say bookings go through the claims team, not her mobile.'],
  email:['Gone, and the surname hiding in it went too.','A personal email address, with her surname in it.'],
  pol:['They quote the claim reference. The policy number opens her whole account.','They quote the claim reference. The policy number opens her whole account.'],
  health:['Special category data. A bumper doesn’t need her medical history.','Special category data, the most protected kind. A body shop has no use for it.'],
  bank:['Refunds are Northwind’s job, not the repairer’s.','Nothing about a bumper needs a sort code.'],
  ref:'It’s how Hartley invoices Northwind.',veh:'Without the model, they can’t order parts.',reg:'They can’t book the car in without it.',
  date:'It ties the damage to this claim.',dmg:'That’s the job itself.',lim:'Without it, they stop and phone for authority.'
};
var PAT={email:{l:'Emails',re:/[^\s@]+@[^\s@]+\.[a-z]+/gi},phone:{l:'Phone numbers',re:/\b0\d{3,4} ?\d{3} ?\d{3,4}\b/g},
  date:{l:'Dates',re:/\b\d{1,2}\/\d{1,2}\/\d{4}\b|\b\d{1,2} (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*(?: \d{4})?\b/g},
  post:{l:'Postcodes',re:/\b[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}\b/g}};

/* the document: {group|words} tags the personal or needed bits, {group?|words} marks optional ones */
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function tx(s){var segs=[],re=/\{([a-z,?]+)\|([^}]*)\}/g,m,last=0;
  while((m=re.exec(s))){if(m.index>last)segs.push({t:s.slice(last,m.index)});segs.push({t:m[2],g:m[1].replace('?',''),k:m[1].indexOf('?')<0});last=re.lastIndex}
  if(last<s.length)segs.push({t:s.slice(last)});
  var ws=[],cur=null;
  segs.forEach(function(sg){for(var i=0;i<sg.t.length;i++){var c=sg.t.charAt(i);if(c===' '){if(cur){ws.push(cur);cur=null}continue}
    if(!cur)cur={t:'',g:'',k:false};cur.t+=c;if(sg.g){cur.g=sg.g;cur.k=cur.k||sg.k}}});
  if(cur)ws.push(cur);
  return ws.map(function(w){return '<span class="rd-w"'+(w.g?' data-g="'+w.g+'"'+(w.k?' data-k="1"':''):'')+'>'+esc(w.t)+'</span>'}).join(' ')}
function f(l,v,o){o=o||{};return '<div class="rd-f'+(o.w?' rd-wide':'')+'"><span class="rd-fl">'+l+'</span><span class="rd-fv"'+(o.loc?' data-loc="'+o.loc+'"':'')+'>'+tx(v)+'</span></div>'}
function sec(n,t,b,pt){return '<section class="rd-ds" data-sec="'+n+'"'+(pt?' data-pt="t"':'')+'><h3><i>'+n+'</i>'+t+'</h3>'+b+'</section>'}
var DMG=[['Front bumper cover','Split at nearside corner','Replace'],['Nearside headlamp unit','Lens cracked, unit not working','Replace'],
  ['Bonnet','Dent to leading edge, approx. 60 mm','Repair and refinish'],['Nearside front wing','Paint scuffed, panel undamaged','Refinish'],
  ['Radiator support panel','Possible distortion','Inspect on strip-down']];
function doc(){
  return '<article class="rd-pg" tabindex="0" aria-label="Motor claim summary. Arrow keys move between words, Shift and arrows select, Space redacts." data-pt="e">'+
  '<div class="rd-lh" data-sec="lh"><div class="rd-nw">'+I.nw+'<div><b data-pt="t">Northwind Insurance</b><span>Motor claims</span></div></div>'+
    '<div class="rd-lhr"><span class="rd-fv">'+tx('Claims line 0306 999 0412')+'</span><span class="rd-fv">'+tx('motor.claims@northwind.co')+'</span></div></div>'+
  '<div class="rd-tt"><h1 data-pt="t">Motor claim summary</h1><span class="rd-conf">Confidential</span></div>'+
  '<div class="rd-meta" data-sec="meta">'+f('Claim reference','{ref|CLM-2291-0457}')+f('Prepared','14 Oct 2026')+f('Handler','Jordan Okoro')+f('Status','Approved for repair')+'</div>'+
  sec(1,'Claimant','<div class="rd-g2">'+f('Name','{name|Margaret Ellison}',{loc:'the claimant field'})+f('Date of birth','{dob|14/03/1968}')+
    f('Home address','{addr|27 Larkfield Road,} {addr?|Bristol} {addr|BS7 9QT}')+f('Mobile','{phone|07700 900412}')+
    f('Email','{email,name|m.ellison@fastmail.example}',{loc:'the email address'})+f('Policy number','{pol|NWP-4471-0932}')+'</div>',1)+
  sec(2,'Vehicle','<div class="rd-g2">'+f('Make and model','{veh|2019 Kia Ceed 1.5 T-GDi}')+f('Registration','{reg|BX19 KLM}')+
    f('Colour','Lunar silver')+f('Mileage at incident','41,206')+'</div>',1)+
  sec(3,'Incident','<div class="rd-g2">'+f('Date and time','{date|3 October 2026,} {date?|08:40}')+f('Location','Gloucester Road at Ashley Down Road, Bristol')+
    f('Circumstances','Third-party vehicle pulled out of a side road and struck the front nearside. The third-party insurer has accepted liability, ref TP-88213.',{w:1})+'</div>')+
  sec(4,'Handler’s notes','<p class="rd-p rd-fv" data-loc="the handler’s notes" data-pt="t">'+tx('Spoke to {name?|Mrs} {name|Ellison} on 6 October. The car is driveable, but the nearside headlamp is out, so she is not using it after dark. She asked for the repair to go to Hartley Body Repairs, who repaired her previous car. Hire car authorised for the length of the repair. Hartley to confirm a booking date with the claims team, not with the customer directly.')+'</p>')+
  sec(5,'Damage assessment','<div class="rd-tbl" data-pt="t"><div class="rd-tr rd-thd"><span>Part</span><span>Damage</span><span>Action</span></div>'+
    DMG.map(function(r){return '<div class="rd-tr">'+r.map(function(c){return '<span class="rd-fv">'+tx('{dmg|'+c+'}')+'</span>'}).join('')+'</div>'}).join('')+'</div>')+
  sec(6,'Injury','<div class="rd-g2">'+f('Injury reported','{health|Whiplash, neck} {health?|and} {health|upper back}')+f('Treatment','{health|Physiotherapy,} {health?|6 sessions approved}')+
    f('GP','{health?|Dr} {health|Anil Shah, Southmead Surgery}')+f('Medical report','Requested 8 October')+'</div>')+
  sec(7,'Settlement','<div class="rd-g2">'+f('Authorised repair limit','{lim|£2,400.00} incl. VAT')+f('Policy excess','£250, refundable on recovery')+
    f('Excess refund to','{name?|M.} {name|Ellison} · Sort code {bank|20-45-77} · Account ending {bank|8812}',{w:1,loc:'the refund line'})+
    f('Hire','Group B, for the length of the repair')+f('Approved by','Jordan Okoro, Senior claims handler')+'</div>')+
  '<footer class="rd-ft" data-sec="ft"><span class="rd-fv" data-loc="the page footer">'+tx('{ref|CLM-2291-0457} · {name|ELLISON,} {name?|M.} · Printed 14 Oct 2026, 10:41')+'</span><span>Page 1 of 1</span></footer>'+
  '</article>'}

function app(){
  return '<div class="rd rd-mr" id="rd">'+
  '<header class="rd-hd"><div class="rd-br"><span class="rd-logo" data-pt="b">'+I.folio+'</span><b data-pt="t">Folio</b></div>'+
    '<div class="rd-crumb"><span class="rd-path"><span>Claims</span><i>/</i><span>Motor</span><i>/</i><span class="rd-mono">CLM-2291-0457</span><i class="rd-ps-i">/</i></span><b data-pt="t"><span class="rd-pdf">PDF</span><span class="rd-fn">Motor claim summary</span></b></div>'+
    '<span class="rd-gap"></span><span class="rd-saved">'+I.saved+'<span>Saved</span></span><span class="rd-me" title="Jordan Okoro">JO</span>'+
    '<button class="rd-shb" type="button" data-a="share" aria-pressed="true" data-pt="b">'+I.share+'<span>Share</span></button></header>'+
  '<div class="rd-tb" role="toolbar" aria-label="Redaction tools" data-pt="e">'+
    '<div class="rd-seg"><button class="rd-tool" type="button" data-a="mode-s" aria-pressed="false" title="Select (V)">'+I.select+'<span>Select</span></button>'+
      '<button class="rd-tool" type="button" data-a="mode-r" aria-pressed="true" title="Redact (R)">'+I.redact+'<span>Redact</span></button></div><i class="rd-sep"></i>'+
    '<button class="rd-tool" type="button" data-a="find" aria-expanded="false">'+I.find+'<span>Find &amp; redact</span><kbd>F</kbd></button><i class="rd-sep"></i>'+
    '<button class="rd-tool" type="button" data-a="undo" title="Undo (Ctrl Z)" disabled>'+I.undo+'<span>Undo</span></button><i class="rd-sep"></i>'+
    '<div class="rd-zm"><button class="rd-tool" type="button" data-a="zout" aria-label="Zoom out">'+I.minus+'</button><span class="rd-zl">100%</span><button class="rd-tool" type="button" data-a="zin" aria-label="Zoom in">'+I.plus+'</button></div>'+
    '<span class="rd-hint">Drag across text to redact. Click a redaction to remove it.</span><span class="rd-pgn">Page 1 / 1</span></div>'+
  '<div class="rd-rb" role="status"><span class="rd-rb-i">'+I.inbox+'</span><div class="rd-rb-t"><b>What Hartley received</b><span>claims@hartleybody.co.uk · Today 10:42</span></div>'+
    '<div class="rd-lg"><span class="lg-x"><i></i><b>0</b> redacted</span><span class="lg-lk"><i></i><b>0</b> leaked</span><span class="lg-ov"><i></i><b>0</b> they needed</span></div>'+
    '<button class="rd-rpt" type="button" data-a="report">See report</button></div>'+
  '<div class="rd-main">'+
    '<aside class="rd-rail" aria-label="Pages"><span class="rd-rail-h">'+I.pages+'Pages</span><button class="rd-thb" type="button" data-a="thumb" aria-label="Page 1" data-pt="e"><span class="rd-thk"><i class="rd-ts rd-ts2"></i><i class="rd-ts rd-ts1"></i><i class="rd-te rd-te-r"></i><i class="rd-te rd-te-b"></i><span class="rd-thp" aria-hidden="true"><i class="rd-thv"></i></span></span></button><span class="rd-thn">1</span></aside>'+
    '<div class="rd-cv" data-lenis-prevent><div class="rd-desk"><i class="rd-shd" aria-hidden="true"></i><div class="rd-stage"><i class="rd-sk rd-sk2" aria-hidden="true"></i><i class="rd-sk rd-sk1" aria-hidden="true"></i>'+doc()+'<i class="rd-sheen" aria-hidden="true"></i></div></div></div>'+
    '<aside class="rd-sh" aria-label="Share"><div class="rd-grab"></div><div class="rd-sh-h"><b>Share</b><span class="rd-ext">External</span><button class="rd-x" type="button" data-a="share-x" aria-label="Close share panel">'+I.close+'</button></div>'+
      '<div class="rd-sh-b" data-lenis-prevent>'+
        '<div class="rd-ps"><span class="rd-cap">To</span><div class="rd-rcp" data-pt="t"><span class="rd-av">HB</span><div><b>Hartley Body Repairs</b><span>claims@hartleybody.co.uk</span></div></div>'+
          '<div class="rd-acc">'+I.eye+'<span>View only · No download · Expires in 30 days</span></div></div>'+
        '<div class="rd-ps"><span class="rd-cap">Message</span><div class="rd-msg" data-pt="t">Hi team, claim summary for the Kia Ceed attached. Repair is authorised up to the limit shown.<br>Thanks, Jordan</div></div>'+
        '<div class="rd-ps"><span class="rd-cap">Attachment</span><div class="rd-att" data-pt="e"><span class="rd-fi-ic"><i>PDF</i></span><div><b>Motor claim summary.pdf</b><span class="rd-ac">1 page · No redactions</span></div></div></div>'+
      '</div>'+
      '<div class="rd-sh-f"><div class="rd-cd" data-pt="t">'+I.clock+'<span>Sends automatically in <b>01:15</b></span></div><div class="rd-cdb"><i></i></div>'+
        '<p class="rd-wf">Approved repairer workflow · auto-send on</p><button class="rd-send" type="button" data-a="send" data-pt="b">'+I.send+'<span>Send now</span></button></div></aside>'+
    '<div class="rd-find" role="dialog" aria-label="Find and redact"><div class="rd-grab"></div>'+
      '<div class="rd-fh"><b>Find &amp; redact</b><button class="rd-x" type="button" data-a="find-x" aria-label="Close find">'+I.close+'</button></div>'+
      '<div class="rd-fi">'+I.search+'<input type="text" placeholder="Find text" aria-label="Find text" autocomplete="off" autocapitalize="off" spellcheck="false"><span class="rd-fc" aria-live="polite"></span>'+
        '<button class="rd-ib" type="button" data-a="fprev" aria-label="Previous match">'+I.up+'</button><button class="rd-ib" type="button" data-a="fnext" aria-label="Next match">'+I.down+'</button></div>'+
      '<div class="rd-pat"><span>Patterns</span><button type="button" data-p="email" aria-pressed="false">Emails</button><button type="button" data-p="phone" aria-pressed="false">Phone numbers</button><button type="button" data-p="date" aria-pressed="false">Dates</button><button type="button" data-p="post" aria-pressed="false">Postcodes</button></div>'+
      '<div class="rd-fa"><span class="rd-fnote">Search a word, or pick a pattern.</span><button class="rd-all" type="button" data-a="fall" disabled><span>Redact all</span></button></div></div>'+
    '<div class="rd-scrim" data-a="scrim"></div>'+
    '<div class="rd-fx" aria-hidden="true"><span class="rd-fx-sh"></span><div class="rd-fx-o"></div><span class="rd-fx-chip">'+I.y+'<span>Delivered to Hartley Body Repairs · 10:42</span></span></div>'+
  '</div>'+
  '<nav class="rd-bb" aria-label="Tools"><button type="button" data-a="mode-t" class="rd-on" aria-pressed="true">'+I.redact+'<span>Redact</span></button><button type="button" data-a="find">'+I.find+'<span>Find</span></button>'+
    '<button type="button" data-a="undo" disabled>'+I.undo+'<span>Undo</span></button><button type="button" data-a="share">'+I.share+'<span>Share</span><em>1:15</em></button></nav>'+
  '</div>'}

function slide(){return '<div class="lms-top"><span class="lms-ti"><span class="hl" data-n="0">GDPR Overview: Article 4 Definitions</span></span><span class="lms-no">Page 12 of 64</span></div>'+
  '<div class="lms-mid"><div class="lms-h rd-s-h">4.2 Key definitions you need to know</div><div class="rd-s-x">'+
   '<p><span class="hl" data-n="1">(1) ‘Personal data’ means any information relating to a living individual who is identified, or who can be identified (the ‘data subject’).</span> A person can be identified directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data or an online identifier, or to factors specific to their physical, physiological, genetic, mental, economic, cultural or social identity.</p>'+
   '<p>(2) ‘Processing’ means anything done with personal data, whether by automated means or not, including collecting, recording, organising, structuring, storing, adapting, retrieving, consulting, using, disclosing, combining, restricting, erasing or destroying it.</p>'+
   '<p>(3) ‘Special category data’ is personal data that reveals a person’s racial or ethnic origin, political opinions, religious or philosophical beliefs or trade union membership. It also includes genetic data, biometric data used for identification, health data, and data about a person’s sex life or sexual orientation. Processing it is prohibited unless one of the conditions in Article 9(2) is met.</p>'+
   '<p>(4) ‘Pseudonymisation’ means processing personal data so that it can no longer be linked to a specific person without additional information, which must be kept separately and protected by appropriate technical and organisational measures.</p>'+
   '<p>(5) The ‘controller’ is the person or organisation that decides, alone or jointly with others, why and how personal data is processed. A ‘processor’ processes personal data on the controller’s behalf.</p>'+
   '<p>(6) ‘Consent’ must be freely given, specific, informed and unambiguous, and expressed through a statement or a clear affirmative action that signals the data subject’s agreement to the processing of their personal data.</p>'+
   '<p>(7) A ‘personal data breach’ is a security incident that leads to personal data being accidentally or unlawfully destroyed, lost, altered, disclosed without authorisation, or accessed by someone who should not have access to it.</p>'+
  '</div><div class="rd-s-r"><div class="rd-dyk"><div class="lms-art rd-bulb" data-ps><i></i></div><b><span class="hl" data-n="3">Did you know?</span></b><p>The most serious infringements can lead to fines of up to €20 million or 4% of total worldwide annual turnover, whichever is higher.</p></div>'+
   '<p class="rd-s-g">See Appendix C: Glossary of Terms for further definitions.</p></div></div>'+
  '<div class="lms-prog"><i style="width:18.75%"></i></div><div class="lms-bot"><span class="lms-hint">Read each definition carefully, then click NEXT to continue.</span><span class="lms-btns"><span class="lms-btn">&#9664; BACK</span><span class="lms-btn"><span class="hl inv" data-n="2" data-mk="r">NEXT &#9654;</span></span></span></div>'}

function init(api){
  var rd=api.$('#rd'),cv=api.$('.rd-cv'),pg=api.$('.rd-cv .rd-pg'),desk=api.$('.rd-desk'),stage=api.$('.rd-stage'),shd=api.$('.rd-shd'),sheen=api.$('.rd-sheen'),
    fx=api.$('.rd-fx'),fxo=api.$('.rd-fx-o'),inp=api.$('.rd-fi input'),fc=api.$('.rd-fc'),fall=api.$('.rd-all'),fnote=api.$('.rd-fnote'),
    cdT=api.$('.rd-cd b'),cdB=api.$('.rd-cdb i'),bcd=api.$('.rd-bb em'),ac=api.$('.rd-ac'),zl=api.$('.rd-zl'),hint=api.$('.rd-hint'),
    thp=api.$('.rd-thp'),thv=api.$('.rd-thv'),RM=api.rm,D=document;
  var W=api.$$('.rd-cv .rd-w').map(function(el,i){var g=el.getAttribute('data-g');el.__i=i;return {el:el,t:el.textContent,g:g?g.split(','):[],k:el.getAttribute('data-k')==='1',m:0,p:el.parentNode}});
  var TW=[],thc=null,tm=null,dr=null,raf=0,mo=0,TOP=[],topsOk=false,ZS=[.8,.9,1,1.15];
  var st={go:false,sent:false,done:false,revealed:false,mode:'r',z:2,marks:{},mid:0,hist:[],M:[],fi:0,pat:null,cur:0,ka:null,praise:0,nudged:false,warned:false,lbs:[],first:null};
  /* full text with offsets, for Find and Patterns. Blocks are joined with a newline so a match never crosses fields. */
  var FT='',OFF=[];W.forEach(function(w,i){if(i)FT+=(w.p===W[i-1].p?' ':'\n');OFF.push(FT.length);FT+=w.t});var FTL=FT.toLowerCase();
  function tg(el,c,v){el.classList.toggle(c,v)}
  function cl(v,a,b){return Math.max(a,Math.min(b,v))}
  function live(){return api.live()&&st.go&&!st.sent}
  function fmt(s){return ('0'+Math.floor(s/60)).slice(-2)+':'+('0'+s%60).slice(-2)}
  function has(w,g){return w.g.indexOf(g)>=0}
  var bb=api.$('.rd-bb');function phone(){return getComputedStyle(bb).display!=='none'}
  function pgTop(){return desk.offsetTop+stage.offsetTop}

  /* ---------- the sheet: it leans toward the pointer and settles flat under it, so text is crisp whenever you read or redact ---------- */
  var TL={x:0,y:0,vx:0,vy:0,tx:0,ty:0,raf:0,off:false},IDLE=[2.4,-3.4];
  function amp(){return phone()?.45:1}
  function tiltOK(){return !RM&&!TL.off&&!st.sent}
  function tiltTo(rx,ry){if(!tiltOK())return;TL.tx=rx;TL.ty=ry;if(!TL.raf)TL.raf=requestAnimationFrame(tiltStep)}
  function tiltStep(){TL.raf=0;if(api.paused())return;
    TL.vx=(TL.vx+(TL.tx-TL.x)*.07)*.8;TL.vy=(TL.vy+(TL.ty-TL.y)*.07)*.8;TL.x+=TL.vx;TL.y+=TL.vy;
    var done=Math.abs(TL.tx-TL.x)+Math.abs(TL.ty-TL.y)<.01&&Math.abs(TL.vx)+Math.abs(TL.vy)<.004;if(done){TL.x=TL.tx;TL.y=TL.ty;TL.vx=TL.vy=0}
    tiltPaint();if(!done)TL.raf=requestAnimationFrame(tiltStep)}
  function tiltFlat(){if(TL.raf){cancelAnimationFrame(TL.raf);TL.raf=0}TL.x=TL.y=TL.vx=TL.vy=TL.tx=TL.ty=0;tiltPaint()}
  function tiltPaint(){var x=TL.x,y=TL.y;
    if(Math.abs(x)<.02&&Math.abs(y)<.02){if(stage.style.transform){stage.style.transform='';shd.style.transform='';rd.style.setProperty('--sa','0')}return}
    var top=cv.scrollTop-pgTop(),h=cv.clientHeight;stage.style.transformOrigin='50% '+Math.round(top+h/2)+'px';
    stage.style.transform='perspective(1700px) rotateX('+x.toFixed(3)+'deg) rotateY('+y.toFixed(3)+'deg)';
    var s0=Math.max(0,top);sheen.style.top=Math.round(s0)+'px';sheen.style.height=Math.round(Math.max(0,Math.min(pg.offsetHeight,top+h)-s0))+'px';
    shd.style.transform='translate('+(-y*.14).toFixed(3)+'em,'+(x*.16+Math.hypot(x,y)*.07).toFixed(3)+'em)';
    rd.style.setProperty('--sa',Math.min(1,Math.hypot(x/3.2,y/5)).toFixed(3));
    rd.style.setProperty('--la',(Math.atan2(-y,-x)*57.2958).toFixed(1)+'deg');
    rd.style.setProperty('--tga',(.13+x*.025+Math.abs(y)*.008).toFixed(3))}
  api.listen(rd,'pointermove',function(e){if(e.pointerType!=='mouse'||dr||!tiltOK())return;
    if((e.target.closest&&e.target.closest('.rd-stage'))||rd.classList.contains('rd-fon')||pg.classList.contains('rdkb')){tiltTo(0,0);return}
    var c=cv.getBoundingClientRect(),a=amp(),nx=cl((e.clientX-c.left-c.width/2)/(c.width/2),-1.3,1.3),ny=cl((e.clientY-c.top-c.height/2)/(c.height/2),-1.3,1.3);
    tiltTo(-ny*3.2*a,nx*5*a)});
  api.listen(rd,'pointerleave',function(e){if(e.pointerType==='mouse'&&!dr&&tiltOK())tiltTo(IDLE[0]*amp(),IDLE[1]*amp())});
  api.listen(rd,'pointerdown',function(e){if(e.pointerType!=='mouse'&&!TL.off){TL.off=true;tiltFlat()}},true);

  /* ---------- painting the page ---------- */
  function tops(){if(topsOk)return;TOP=W.map(function(w){return w.el.offsetTop});topsOk=true}
  function same(i){var n=W[i+1];return !!n&&n.p===W[i].p&&Math.abs(TOP[i]-TOP[i+1])<3}
  function paint(){tops();W.forEach(function(w,i){var el=w.el,x=!!w.m,on=el.classList.contains('rdx'),pl=el.classList.contains('rdp');
      if(x){if(pl){el.classList.remove('rdp','rdx');void el.offsetWidth;on=false}if(!on)el.classList.add('rdx');tg(el,'rdxr',same(i)&&!!W[i+1].m);tg(el,'rdxl',i>0&&!!W[i-1].m&&same(i-1))}
      else if(on&&!pl){if(RM||st.sent)el.classList.remove('rdx','rdxr','rdxl');else{el.classList.add('rdp');unpeel(w)}}
      var t=TW[i];if(t){tg(t,'rdx',x);tg(t,'rdxr',x&&same(i)&&!!W[i+1].m);tg(t,'rdxl',x&&i>0&&!!W[i-1].m&&same(i-1))}});count()}
  function unpeel(w){api.after(460+(w.pd||0),function(){if(!w.m)w.el.classList.remove('rdx','rdxr','rdxl','rdp')})}
  function paintSel(a,b){tops();var lo=Math.min(a,b),hi=Math.max(a,b);W.forEach(function(w,i){var s=a>=0&&i>=lo&&i<=hi;tg(w.el,'rds',s);tg(w.el,'rdsr',s&&i<hi&&same(i))})}
  function clearSel(){W.forEach(function(w){w.el.classList.remove('rds','rdsr')})}
  function paintFind(){tops();var on={},cur={};st.M.forEach(function(m,k){m.forEach(function(i){on[i]=k+1;if(k===st.fi)cur[i]=1})});
    W.forEach(function(w,i){tg(w.el,'rdf',!!on[i]);tg(w.el,'rdfc',!!cur[i]);tg(w.el,'rdfr',!!on[i]&&on[i]===on[i+1]&&same(i))})}
  var svT=0;function saving(){var s=api.$('.rd-saved span');if(!s)return;s.textContent='Saving…';if(svT)clearTimeout(svT);svT=api.after(650,function(){s.textContent='Saved'})}
  function count(){var n=Object.keys(st.marks).length,t=n?n+' redaction'+(n>1?'s':''):'No redactions';if(st.go&&!st.sent)api.round(n?t:'No redactions yet');ac.textContent='1 page · '+t;
    api.$$('[data-a="undo"]').forEach(function(b){b.disabled=!st.hist.length})}

  /* ---------- redactions are strips of tape: they press down when applied and peel off when removed ---------- */
  function add(lists,all){var ids=[],n=0;lists.forEach(function(l,j){var ws=l.filter(function(i){return !W[i].m});if(!ws.length)return;var id=++st.mid;st.marks[id]=ws;
      ws.forEach(function(i,k){W[i].m=id;W[i].el.style.setProperty('--d',RM?0:Math.min(k*26,260)+(all?Math.min(j*70,560):0))});ids.push(id);n+=ws.length});
    if(!ids.length)return 0;st.hist.push({a:'add',ids:ids});paint();saving();api.sfx('marker');if(all&&ids.length>2){api.after(200,function(){api.sfx('marker')});api.after(400,function(){api.sfx('marker')})}refind();return n}
  function peelOrder(ws){ws.forEach(function(i,k){var d=Math.min((ws.length-1-k)*26,220);W[i].pd=d;W[i].el.style.setProperty('--pd',d)})}
  function remove(id){var ws=st.marks[id];if(!ws)return;peelOrder(ws);ws.forEach(function(i){W[i].m=0});delete st.marks[id];st.hist.push({a:'rm',id:id,ws:ws});paint();saving();api.sfx('swipe');refind()}
  function undo(){var h=st.hist.pop();if(!h)return;
    if(h.a==='add')h.ids.forEach(function(id){var ws=st.marks[id];if(!ws)return;peelOrder(ws);ws.forEach(function(i){W[i].m=0});delete st.marks[id]});
    else{var ws=h.ws.filter(function(i){return !W[i].m});if(ws.length){st.marks[h.id]=ws;ws.forEach(function(i,k){W[i].m=h.id;W[i].el.style.setProperty('--d',RM?0:Math.min(k*26,260))})}}
    paint();saving();api.sfx(h.a==='add'?'swipe':'marker');refind()}

  /* ---------- pointer: drag across words to redact, tap to toggle one; on touch a vertical swipe still scrolls ---------- */
  function wordAt(x,y){var e=D.elementFromPoint(x,y),w=e&&e.closest&&e.closest('.rd-w');return w&&w.__i!=null?w.__i:-1}
  function stopMo(){if(mo){cancelAnimationFrame(mo);mo=0}}
  function momentum(v){if(RM||Math.abs(v)<.05)return;var last=performance.now();mo=requestAnimationFrame(function f(now){var dt=Math.min(40,now-last);last=now;cv.scrollTop-=v*dt;v*=Math.pow(.94,dt/16);mo=Math.abs(v)>.02?requestAnimationFrame(f):0})}
  function selTo(){var c=cv.getBoundingClientRect(),i=wordAt(dr.x,cl(dr.y,c.top+3,c.bottom-3));if(i>=0){if(dr.a<0)dr.a=i;dr.b=i}if(dr.a>=0)paintSel(dr.a,dr.b)}
  function edge(){raf=0;if(!dr||dr.mode!=='sel')return;var c=cv.getBoundingClientRect(),d=0;
    if(dr.y>c.bottom-28)d=Math.min(15,(dr.y-(c.bottom-28))*.35+2);else if(dr.y<c.top+28)d=-Math.min(15,(c.top+28-dr.y)*.35+2);
    if(d){cv.scrollTop+=d;selTo()}raf=requestAnimationFrame(edge)}
  api.listen(cv,'pointerdown',function(e){if(!live()||(e.pointerType==='mouse'&&e.button!==0))return;stopMo();
    var w=e.target.closest&&e.target.closest('.rd-w'),i=w&&w.__i!=null?w.__i:-1;
    if(e.target.closest&&e.target.closest('.rd-stage'))tiltFlat();
    if(st.mode!=='r'){if(i>=0&&!st.nudged){st.nudged=true;api.toast({tone:'info',title:'Redact tool is off',text:phone()?'Tap Redact in the bottom bar.':'Press R, or pick Redact in the toolbar.'})}return}
    if(e.pointerType!=='mouse'&&i<0)return;
    if(!e.target.closest('.rd-pg'))return;
    e.preventDefault();if(D.activeElement!==pg)pg.focus({preventScroll:true});pg.classList.remove('rdkb');
    dr={id:e.pointerId,ty:e.pointerType,x0:e.clientX,y0:e.clientY,x:e.clientX,y:e.clientY,a:i,b:i,i0:i,mode:null,s0:cv.scrollTop,v:0,t:performance.now()};
    try{cv.setPointerCapture(e.pointerId)}catch(_){}});
  api.listen(cv,'pointermove',function(e){if(!dr||e.pointerId!==dr.id)return;var dx=e.clientX-dr.x0,dy=e.clientY-dr.y0,now=performance.now();
    if(!dr.mode){if(Math.abs(dx)+Math.abs(dy)<6)return;dr.mode=(dr.ty!=='mouse'&&Math.abs(dy)>Math.abs(dx)*1.15)?'pan':'sel'}
    if(dr.mode==='pan'){dr.v=(e.clientY-dr.y)/Math.max(1,now-dr.t);dr.y=e.clientY;dr.t=now;cv.scrollTop=dr.s0-dy;return}
    dr.x=e.clientX;dr.y=e.clientY;selTo();if(!raf)raf=requestAnimationFrame(edge)});
  function up(e){if(!dr||e.pointerId!==dr.id)return;var d=dr;dr=null;if(raf){cancelAnimationFrame(raf);raf=0}try{cv.releasePointerCapture(e.pointerId)}catch(_){}
    if(e.type==='pointercancel'){clearSel();return}
    if(d.mode==='pan'){momentum(d.v);return}
    if(d.mode==='sel'){clearSel();if(d.a<0)return;var lo=Math.min(d.a,d.b),hi=Math.max(d.a,d.b),r=[];for(var i=lo;i<=hi;i++)r.push(i);setCur(d.b);add([r]);return}
    if(d.i0>=0){setCur(d.i0);var w=W[d.i0];if(w.m)remove(w.m);else add([[d.i0]])}}
  api.listen(cv,'pointerup',up);api.listen(cv,'pointercancel',up);

  /* ---------- keyboard: the page is one tab stop with a word cursor ---------- */
  function setCur(n){W[st.cur].el.classList.remove('rdkc');st.cur=n;W[n].el.classList.add('rdkc')}
  function lineStep(c,d){var r=W[c].el.getBoundingClientRect(),cx=r.left+r.width/2,best=-1,bt=null,bd=1e9;
    for(var i=c+d;i>=0&&i<W.length;i+=d){var q=W[i].el.getBoundingClientRect();if(d>0?q.top>r.top+3:q.top<r.top-3){if(bt===null)bt=q.top;else if(Math.abs(q.top-bt)>3)break;var dd=Math.abs(q.left+q.width/2-cx);if(dd<bd){bd=dd;best=i}}}
    return best<0?c:best}
  function move(n,sh){tiltFlat();pg.classList.add('rdkb');if(sh){if(st.ka==null)st.ka=st.cur}else st.ka=null;setCur(n);if(st.ka!=null)paintSel(st.ka,n);else clearSel();ensure(W[n].el,.4,true)}
  api.listen(pg,'keydown',function(e){if(!live())return;var k=e.key,c=st.cur;
    if(k==='ArrowRight'||k==='ArrowLeft'){e.preventDefault();move(cl(c+(k==='ArrowRight'?1:-1),0,W.length-1),e.shiftKey);return}
    if(k==='ArrowDown'||k==='ArrowUp'){e.preventDefault();move(lineStep(c,k==='ArrowDown'?1:-1),e.shiftKey);return}
    if(k===' '||k==='Enter'){e.preventDefault();tiltFlat();pg.classList.add('rdkb');W[c].el.classList.add('rdkc');
      if(st.ka!=null&&st.ka!==c){var lo=Math.min(st.ka,c),hi=Math.max(st.ka,c),r=[];for(var i=lo;i<=hi;i++)r.push(i);st.ka=null;clearSel();add([r])}
      else{st.ka=null;clearSel();if(W[c].m)remove(W[c].m);else add([[c]])}return}
    if((k==='Backspace'||k==='Delete')&&W[c].m){e.preventDefault();remove(W[c].m);return}
    if(k==='Escape'&&st.ka!=null){st.ka=null;clearSel()}});
  api.listen(pg,'focus',function(){if(st.sent)return;hint.textContent='Arrow keys move. Shift selects. Space redacts.'});
  api.listen(pg,'blur',function(){hint.textContent='Drag across text to redact. Click a redaction to remove it.';pg.classList.remove('rdkb')});
  api.key(function(e){if(st.sent)return;var k=e.key;
    if(k==='f'||k==='F'||k==='/'){e.preventDefault();openFind();return}
    if(k==='r'||k==='R'){setMode('r');return}
    if(k==='v'||k==='V'){setMode('s');return}
    if(k==='Escape'){closeFind();closeShare()}});
  api.listen(rd,'keydown',function(e){if(!live()||!(e.ctrlKey||e.metaKey)||e.altKey)return;var k=(e.key||'').toLowerCase();
    if(k==='z'&&!e.shiftKey&&D.activeElement!==inp){e.preventDefault();undo()}else if(k==='f'){e.preventDefault();openFind()}});

  /* ---------- scrolling helpers ---------- */
  function ensure(el,pos,soft){var r=el.getBoundingClientRect(),c=cv.getBoundingClientRect(),bot=c.bottom;
    var sh=rd.classList.contains('rd-fon')&&phone()?api.$('.rd-find').getBoundingClientRect().top:0;if(sh&&sh<bot)bot=sh;
    if(soft&&r.top>c.top+12&&r.bottom<bot-12)return;cv.scrollTo({top:cv.scrollTop+(r.top-c.top)-(bot-c.top)*pos,behavior:RM?'auto':'smooth'})}

  /* ---------- Find & redact ---------- */
  function wordsIn(s,e){var r=[];for(var i=0;i<W.length;i++){var a=OFF[i];if(a>=e)break;if(a+W[i].t.length>s)r.push(i)}return r}
  function search(q){q=q.toLowerCase().replace(/\s+/g,' ').trim();var out=[];if(q.length<2)return out;var at=0,k;while((k=FTL.indexOf(q,at))>=0){out.push(wordsIn(k,k+q.length));at=k+q.length}return out}
  function pattern(re){var out=[],m;re.lastIndex=0;while((m=re.exec(FT))){out.push(wordsIn(m.index,m.index+m[0].length));if(!m[0].length)re.lastIndex++}return out}
  function openM(){return st.M.filter(function(m){return m.some(function(i){return !W[i].m})}).length}
  function fstate(){var n=st.M.length,o=openM(),q=st.pat||inp.value.trim().length>=2;
    fc.textContent=n?(st.fi+1)+' of '+n:(q?'No matches':'');
    fall.disabled=!o;fall.innerHTML=n&&!o?I.y+'<span>All redacted</span>':'<span>Redact all'+(o?' '+o:'')+'</span>'+(o?'<kbd>&#8629;</kbd>':'');
    fnote.textContent=n?(o<n?(n-o)+' already redacted. ':'')+'Each match becomes its own redaction.':q?'Try another spelling, or a pattern.':'Search a word, or pick a pattern.'}
  function runFind(){st.M=st.pat?pattern(PAT[st.pat].re):search(inp.value);st.fi=0;paintFind();fstate();if(st.M.length)ensure(W[st.M[0][0]].el,.32)}
  function refind(){if(rd.classList.contains('rd-fon'))fstate()}
  function step(d){var n=st.M.length;if(!n)return;st.fi=(st.fi+d+n)%n;paintFind();fstate();ensure(W[st.M[st.fi][0]].el,.32);api.sfx('tap')}
  function pats(){api.$$('.rd-pat button').forEach(function(b){var on=b.getAttribute('data-p')===st.pat;b.classList.toggle('rd-on',on);b.setAttribute('aria-pressed',on?'true':'false')});inp.placeholder=st.pat?'Pattern: '+PAT[st.pat].l:'Find text'}
  function openFind(){if(!live())return;tiltTo(0,0);if(phone())closeShare();if(!rd.classList.contains('rd-fon')){rd.classList.add('rd-fon');api.sfx('open')}
    api.$$('[data-a="find"]').forEach(function(b){b.setAttribute('aria-expanded','true');b.classList.add('rd-on')});if(st.pat||inp.value)runFind();else fstate();
    api.after(60,function(){try{inp.focus({preventScroll:true});inp.select()}catch(_){}})}
  function closeFind(quiet){if(!rd.classList.contains('rd-fon'))return;rd.classList.remove('rd-fon');st.M=[];paintFind();
    api.$$('[data-a="find"]').forEach(function(b){b.setAttribute('aria-expanded','false');b.classList.remove('rd-on')});if(!quiet)api.sfx('click');if(D.activeElement===inp)pg.focus({preventScroll:true})}
  function redactAll(){var o=openM();if(!o)return;var fresh=[];st.M.forEach(function(m){m.forEach(function(i){if(!W[i].m)fresh.push(i)})});
    add(st.M.map(function(m){return m.slice()}),true);fstate();
    var pk=fresh.filter(function(i){return W[i].k&&W[i].g.some(function(g){return G[g].p})}),nk=fresh.some(function(i){return W[i].k&&W[i].g.some(function(g){return !G[g].p})});
    if(o>1&&pk.length>1&&!nk&&st.praise<3){st.praise++;var ft=pk.some(function(i){return W[i].el.closest('.rd-ft')}),em=pk.some(function(i){return has(W[i],'email')&&has(W[i],'name')});
      api.toast({tone:'good',title:o+' redacted in one pass',text:ft?'Including the one in the page footer.':em?'Including the one inside the email address.':null})}
    if(phone())api.after(650,function(){closeFind(true)})}
  api.listen(inp,'input',function(){st.pat=null;pats();runFind()});
  api.listen(inp,'keydown',function(e){var k=e.key;if(k==='Enter'){e.preventDefault();if(e.shiftKey)step(-1);else redactAll()}
    else if(k==='ArrowDown'){e.preventDefault();step(1)}else if(k==='ArrowUp'){e.preventDefault();step(-1)}else if(k==='Escape'){e.preventDefault();closeFind()}});

  /* ---------- modes, zoom, share panel, page stack in the rail ---------- */
  function setMode(m){if(st.mode===m)return;st.mode=m;rd.classList.toggle('rd-mr',m==='r');
    api.$('[data-a="mode-r"]').setAttribute('aria-pressed',m==='r'?'true':'false');api.$('[data-a="mode-s"]').setAttribute('aria-pressed',m==='s'?'true':'false');
    var t=api.$('[data-a="mode-t"]');t.classList.toggle('rd-on',m==='r');t.setAttribute('aria-pressed',m==='r'?'true':'false');api.sfx('click')}
  function zoom(d){var z=cl(st.z+d,0,ZS.length-1);if(z===st.z)return;st.z=z;pg.style.setProperty('--z',ZS[z]);zl.textContent=Math.round(ZS[z]*100)+'%';topsOk=false;paint();thumbView();api.sfx('click')}
  function toggleShare(){if(phone()){var on=!rd.classList.contains('rd-son');closeFind(true);rd.classList.toggle('rd-son',on);api.sfx(on?'open':'click');if(on)api.after(300,function(){var b=api.$('.rd-send');if(b)b.focus({preventScroll:true})});return}
    var off=rd.classList.toggle('rd-soff');api.$('.rd-shb').setAttribute('aria-pressed',off?'false':'true');api.sfx('click');topsOk=false;paint();thumbView()}
  function closeShare(){rd.classList.remove('rd-son')}
  function clean(c){c.removeAttribute('tabindex');c.removeAttribute('aria-label');c.removeAttribute('data-pt');c.style.removeProperty('--z');c.classList.remove('rdkb');
    [].forEach.call(c.querySelectorAll('[data-pt]'),function(n){n.removeAttribute('data-pt')});
    [].forEach.call(c.querySelectorAll('.rd-w'),function(n){n.classList.remove('rds','rdsr','rdf','rdfc','rdfr','rdkc','rdp')});
    [].forEach.call(c.querySelectorAll('.rd-lb'),function(n){n.parentNode.removeChild(n)});return c}
  function buildThumb(){if(!thp)return;thc=clean(pg.cloneNode(true));thc.classList.add('rd-pgc');thp.insertBefore(thc,thv);TW=[].slice.call(thc.querySelectorAll('.rd-w'));sizeThumb()}
  function sizeThumb(){if(!thc||!thp.clientWidth||!thc.offsetWidth)return;var s=thp.clientWidth/thc.offsetWidth;thc.style.transform='scale('+s+')';thp.style.height=Math.round(thc.offsetHeight*s)+'px'}
  function thumbView(){if(!thp||!thp.offsetHeight)return;var ph=pg.offsetHeight||1,t=(cv.scrollTop-pgTop())/ph,h=cv.clientHeight/ph,t0=cl(t,0,1);
    thv.style.top=(t0*100)+'%';thv.style.height=(cl(Math.min(1-t0,h+Math.min(0,t)),0,1)*100)+'%'}
  api.listen(cv,'scroll',function(){thumbView();if(stage.style.transform)tiltPaint()},{passive:true});

  /* ---------- clicks ---------- */
  api.listen(rd,'click',function(e){var b=e.target.closest('[data-a],[data-p]');if(!b||!rd.contains(b))return;
    if(b.getAttribute('data-a')==='report'){finish();return}
    if(!live())return;
    if(b.hasAttribute('data-p')){var p=b.getAttribute('data-p');st.pat=st.pat===p?null:p;inp.value='';pats();runFind();api.sfx('click');return}
    var a=b.getAttribute('data-a');
    if(a==='mode-r')setMode('r');else if(a==='mode-s')setMode('s');else if(a==='mode-t')setMode(st.mode==='r'?'s':'r');
    else if(a==='find'){if(rd.classList.contains('rd-fon'))closeFind();else openFind()}
    else if(a==='find-x')closeFind();else if(a==='fprev')step(-1);else if(a==='fnext')step(1);else if(a==='fall')redactAll();
    else if(a==='undo')undo();else if(a==='zin')zoom(1);else if(a==='zout')zoom(-1);
    else if(a==='share')toggleShare();else if(a==='share-x'){if(phone()){closeShare();api.sfx('click')}else toggleShare()}
    else if(a==='scrim'){closeFind(true);closeShare()}
    else if(a==='send')send(false);
    else if(a==='thumb'){var r=b.getBoundingClientRect(),q=cl((e.clientY-r.top)/r.height,0,1);cv.scrollTo({top:pgTop()+q*pg.offsetHeight-cv.clientHeight/2,behavior:RM?'auto':'smooth'});api.sfx('tap')}});

  /* ---------- the countdown ---------- */
  function tick(){if(st.sent)return;var l=tm?tm.left():75,s=Math.max(0,Math.ceil(l));cdT.textContent=fmt(s);bcd.textContent=Math.floor(s/60)+':'+('0'+s%60).slice(-2);
    cdB.style.transform='scaleX('+cl(l/75,0,1).toFixed(4)+')';rd.classList.toggle('rd-low',s<=10);
    if(s<=20&&!st.warned){st.warned=true;api.toast({tone:'info',title:'Sends in 20 seconds',text:'Whatever is showing goes to Hartley.',silent:true})}}

  /* ---------- sending: the sheet lifts, folds in thirds, goes into an envelope and flies to Hartley ---------- */
  var R=null,SQ=[],FX=null;
  function at(ms,fn){SQ.push(api.after(ms,fn))}
  function judge(){var R={};
    PG.forEach(function(g){var ks=W.filter(function(w){return w.k&&has(w,g)}),left=ks.filter(function(w){return !w.m});R[g]={ok:!left.length,left:left,part:left.length>0&&left.length<ks.length}});
    NG.forEach(function(g){R[g]={over:W.some(function(w){return w.k&&w.m&&has(w,g)})}});return R}
  function send(auto){if(st.sent||!st.go)return;st.sent=true;if(tm)tm.stop();closeFind(true);closeShare();clearSel();dr=null;stopMo();tiltFlat();TL.off=true;
    rd.classList.add('rd-sending');api.round('Sending to Hartley');var b=api.$('.rd-send');b.innerHTML=I.send+'<span>Sending…</span>';
    if(auto)api.toast({tone:'info',title:'Sent automatically',text:'The workflow doesn’t wait.',silent:true});
    if(RM){rd.classList.add('rd-lift');api.sfx('send');api.after(400,function(){delivered();land()});return}
    fxSend()}
  function delivered(){var b=api.$('.rd-send');if(b)b.innerHTML=I.y+'<span>Delivered</span>';api.round('Delivered to Hartley')}
  function sheet(){var p=D.createElement('div');p.className='rd-pv';p.appendChild(clean(pg.cloneNode(true)));return p}
  /* the print layout of the page, sliced into three panels; rebuilt from the received page for the return trip */
  function fill(){var F=FX;['pt','pm','pb'].forEach(function(n,k){var f=F.lt.querySelector('.rd-'+n+' .rd-ff'),old=f.querySelector('.rd-pv');if(old)f.removeChild(old);
      var p=sheet();f.insertBefore(p,f.firstChild);var c=p.firstChild,w=c.offsetWidth,h=c.offsetHeight,sc=3*F.LH/h;
      p.style.transform='translate('+((F.LW-w*sc)/2).toFixed(2)+'px,'+(-k*F.LH).toFixed(2)+'px) scale('+sc.toFixed(5)+')'})}
  function fxBuild(){fxo.innerHTML='';var m=sheet();m.style.visibility='hidden';fxo.appendChild(m);var c=m.firstChild,W0=c.offsetWidth,H0=c.offsetHeight;fxo.removeChild(m);
    var B=fx.getBoundingClientRect(),s=Math.min(.8*B.height/H0,.56*B.width/W0),LW=W0*s,LH=H0*s/3,EW=LW*1.14,EH=LH*1.27;
    var lt=D.createElement('div');lt.className='rd-lt';lt.style.cssText='width:'+LW.toFixed(1)+'px;height:'+LH.toFixed(1)+'px;margin:'+(-LH/2).toFixed(1)+'px 0 0 '+(-LW/2).toFixed(1)+'px';
    lt.innerHTML='<div class="rd-pn rd-pm"><div class="rd-ff"><i class="rd-hz rd-hzb"></i><i class="rd-hz rd-hzt"></i></div><div class="rd-fb"></div></div>'+
      '<div class="rd-pn rd-pt"><div class="rd-ff"></div><div class="rd-fb"></div></div><div class="rd-pn rd-pb"><div class="rd-ff"></div><div class="rd-fb"></div></div>';
    var ev=D.createElement('div');ev.className='rd-ev';ev.style.cssText='width:'+EW.toFixed(1)+'px;height:'+EH.toFixed(1)+'px;margin:'+(-EH/2).toFixed(1)+'px 0 0 '+(-EW/2).toFixed(1)+'px;font-size:'+(EW/19).toFixed(2)+'px';
    ev.innerHTML='<div class="rd-ev-a"><span class="rd-ev-fr">'+I.folio+'Folio · Northwind Insurance</span><span class="rd-ev-st"><b>Folio</b>Secure</span>'+
      '<span class="rd-ev-to"><b>Hartley Body Repairs</b>Claims team<br>claims@hartleybody.co.uk</span><span class="rd-ev-pm"><b>Delivered</b>10:42</span><span class="rd-ev-ref">CLM-2291-0457</span></div>'+
      '<div class="rd-ev-i"></div><div class="rd-ev-k"><i class="l"></i><i class="r"></i><i class="bs"></i><i class="b"></i><i class="fs"></i></div><div class="rd-ev-f"><i class="o"></i><i class="n"></i></div>';
    fxo.appendChild(ev);fxo.appendChild(lt);
    api.$('.rd-fx-sh').style.cssText='width:'+(LW*.97).toFixed(1)+'px;height:'+(3*LH*.97).toFixed(1)+'px;margin:'+(-1.5*LH*.97).toFixed(1)+'px 0 0 '+(-LW*.97/2).toFixed(1)+'px';
    FX={B:B,LW:LW,LH:LH,EW:EW,EH:EH,lt:lt,ev:ev,ey:B.height*.04};fill()}
  function evT(x,y,z,rx,ry,rz){return 'translate3d('+x+'px,'+y+'px,'+z+'px) rotateX('+rx+'deg) rotateY('+ry+'deg) rotateZ('+rz+'deg)'}
  function ltT(x,y,z,rx,s){return 'translate3d('+x+'px,'+y+'px,'+z+'px) rotateX('+rx+'deg) scale('+s+')'}
  function mv(el,t,tr){el.style.transition=tr||'none';el.style.transform=t}
  function toPage(F){var B=F.B,p=pg.getBoundingClientRect(),k=p.width/F.LW;return ltT((p.left+p.width/2-(B.left+B.width/2)).toFixed(1),(p.top+1.5*F.LH*k-(B.top+B.height/2)).toFixed(1),0,0,k.toFixed(4))}
  function fxSend(){fxBuild();var F=FX,B=F.B,lt=F.lt,ev=F.ev,ey=F.ey,EH=F.EH,LH=F.LH,SP='cubic-bezier(.3,1.18,.5,1)';
    var yIn=(ey-EH/2+EH*.07+LH/2).toFixed(1),yUp=(ey-EH/2+EH*.07+LH/2-LH*.8).toFixed(1),eIn=evT(0,ey.toFixed(1),0,0,0,0);
    mv(lt,toPage(F));mv(ev,evT(0,(B.height*.85).toFixed(0),-60,-24,0,0));
    fx.classList.add('rd-on');rd.classList.add('rd-lift');void lt.offsetWidth;
    var sh=api.$('.rd-fx-sh');mv(sh,'translateY(18px) scale(.94,.94)');
    at(40,function(){mv(lt,ltT(0,0,44,10,1),'transform .54s cubic-bezier(.22,1,.36,1)');fx.classList.add('rd-up')});
    at(620,function(){lt.classList.add('f1');api.sfx('flip');mv(sh,'translateY(18px) scale(.94,.62)','transform .36s cubic-bezier(.55,.05,.3,1),opacity .35s')});
    at(990,function(){lt.classList.add('f2');api.sfx('flip');mv(sh,'translateY('+(18+LH*.97).toFixed(1)+'px) scale(.94,.3)','transform .36s cubic-bezier(.55,.05,.3,1),opacity .35s')});
    at(1370,function(){mv(lt,ltT(0,yUp,0,0,1),'transform .42s '+SP);mv(ev,eIn,'transform .46s '+SP);fx.classList.remove('rd-up')});
    at(1810,function(){mv(lt,ltT(0,yIn,0,0,1),'transform .38s cubic-bezier(.5,0,.25,1)')});
    at(2210,function(){ev.classList.add('shut');api.sfx('flip')});
    at(2520,function(){lt.style.visibility='hidden';mark();fill();mv(ev,evT(0,ey.toFixed(1),0,0,180,0),'transform .5s cubic-bezier(.45,0,.2,1)')});
    at(3060,function(){mv(ev,evT((B.width*.32).toFixed(0),(-B.height*1.3).toFixed(0),-1500,32,180,-20),'transform .62s cubic-bezier(.55,0,.85,.35)');api.sfx('send');delivered()});
    at(3700,function(){fx.classList.add('rd-dlv');ev.classList.add('pm')});
    at(4250,function(){fx.classList.remove('rd-dlv');mv(ev,eIn,'transform .68s cubic-bezier(.2,.95,.3,1)');api.round('Opened by Hartley')});
    at(4950,function(){ev.classList.remove('shut');api.sfx('flip');lt.style.visibility=''});
    at(5240,function(){mv(lt,ltT(0,yUp,0,0,1),'transform .36s cubic-bezier(.3,0,.2,1)')});
    at(5580,function(){mv(ev,evT(0,(B.height*.95).toFixed(0),-80,-30,0,6),'transform .46s cubic-bezier(.5,0,.8,.4)');mv(lt,ltT(0,0,24,0,1),'transform .44s '+SP);rd.classList.add('rd-lbx')});
    at(5940,function(){lt.classList.remove('f2');lt.classList.add('u2');api.sfx('flip')});
    at(6300,function(){lt.classList.remove('f1');lt.classList.add('u1');api.sfx('flip')});
    at(6720,function(){cv.scrollTop=0;mv(lt,toPage(F),'transform .56s cubic-bezier(.3,1,.4,1)')});
    at(7300,land)}
  /* a click on the animation skips straight to what Hartley received */
  api.listen(fx,'click',function(){if(st.sent&&!st.revealed){delivered();land()}});
  function mark(){if(R)return;R=judge();W.forEach(function(w){w.el.classList.remove('rdkc','rdf','rdfc','rdfr','rdp')});pg.classList.remove('rdkb');pg.removeAttribute('tabindex');
    W.forEach(function(w){w.lk=!w.m&&w.g.some(function(g){return G[g].p&&!R[g].ok});w.ov=!!w.m&&w.g.some(function(g){return !G[g].p&&R[g].over})});
    var done={},lbs=[],first=null;
    for(var i=0;i<W.length;){var w=W[i],fl=w.lk?'lk':w.ov?'ov':null;if(!fl){i++;continue}var j=i;while(j+1<W.length&&W[j+1].p===w.p&&(fl==='lk'?W[j+1].lk:W[j+1].ov))j++;
      var run=D.createElement('span');run.className='rd-run rd-'+fl;w.p.insertBefore(run,w.el);var n=w.el;while(n){var nx=n.nextSibling;run.appendChild(n);if(n===W[j].el)break;n=nx}
      if(!first)first=run;var sc=run.closest('[data-sec]'),key=sc?sc.getAttribute('data-sec'):'x',gs={};
      for(var q=i;q<=j;q++)W[q].g.forEach(function(g){if(fl==='lk'?(G[g].p&&!R[g].ok):(!G[g].p&&R[g].over))gs[g]=1});
      var at2=run;Object.keys(G).forEach(function(g){if(!gs[g]||done[g+key])return;done[g+key]=1;var lb=D.createElement('span');lb.className='rd-lb rd-'+fl;
        lb.textContent=G[g].l+(fl==='lk'?' · leaked':' · they needed this');at2.parentNode.insertBefore(lb,at2.nextSibling);at2=lb;lbs.push(lb)});
      i=j+1}
    st.lbs=lbs;st.first=first;topsOk=false;paint();
    var lk=PG.filter(function(g){return !R[g].ok}).length,ov=NG.filter(function(g){return R[g].over}).length,lg=api.$$('.rd-lg b');
    lg[0].textContent=Object.keys(st.marks).length;lg[1].textContent=lk;lg[2].textContent=ov}
  function land(){if(st.revealed)return;SQ.forEach(clearTimeout);SQ=[];mark();
    rd.classList.add('rd-sent','rd-lbx');rd.classList.remove('rd-sending','rd-lift');api.sfx('drop');
    if(fx.classList.contains('rd-on')){fx.classList.add('rd-out');api.after(360,function(){fx.classList.remove('rd-on','rd-out','rd-up','rd-dlv');fxo.innerHTML=''})}
    reveal()}
  /* on the light box: leaks glow red through the paper, over-redactions amber */
  function reveal(){if(st.revealed)return;st.revealed=true;var lbs=st.lbs,first=st.first;
    var lk=PG.filter(function(g){return !R[g].ok}).length,ov=NG.filter(function(g){return R[g].over}).length,
      tot=PG.reduce(function(s,g){return s+(R[g].ok?50:-25)},0)-15*ov;
    api.round('What Hartley received');
    lbs.forEach(function(lb,k){api.after(RM?0:420+k*110,function(){lb.classList.add('rd-on');if(k<5)api.sfx('pin')})});
    if(first)api.after(RM?0:380,function(){ensure(first,.3)});else cv.scrollTo({top:0,behavior:RM?'auto':'smooth'});
    sentPanel(lk,ov);
    api.after(RM?100:460+Math.min(lbs.length,6)*110,function(){api.score(tot);
      api.toast(lk===0&&ov===0?{tone:'good',big:true,title:'Clean send',text:'Everything personal stayed black.',pts:tot}:
        lk===0?{tone:'warn',title:'Nothing leaked',text:ov+(ov>1?' fields':' field')+' they needed went black too.',pts:tot}:
        {tone:lk>2?'bad':'warn',title:lk+(lk>1?' leaks':' leak')+' went out',text:'Glowing red on what Hartley received.',pts:tot})});
    api.after(RM?1800:5200,finish)}
  function sentPanel(lk,ov){var rows=PG.map(function(g){return '<li class="'+(R[g].ok?'y':'n')+'"><span class="ic">'+(R[g].ok?I.y:I.n)+'</span><span>'+G[g].l+'</span><em>'+(R[g].ok?'Blacked out':'Leaked')+'</em></li>'})
      .concat(NG.filter(function(g){return R[g].over}).map(function(g){return '<li class="m"><span class="ic">'+I.m+'</span><span>'+G[g].l+'</span><em>They needed this</em></li>'}));
    api.$('.rd-sh-b').innerHTML='<div class="rd-sok"><span class="rd-sok-i">'+I.y+'</span><div><b>Sent to Hartley Body Repairs</b><span>Today, 10:42 · Delivered</span></div></div>'+
      '<div class="rd-ps"><span class="rd-cap">What they received</span><ul class="rd-chk">'+rows.map(function(r,k){return r.replace('<li ','<li style="animation-delay:'+(RM?0:300+k*70)+'ms" ')}).join('')+'</ul></div>';
    api.$('.rd-sh-f').innerHTML='<button class="rd-send" type="button" data-a="report">See report</button>';api.$('.rd-sh-h .rd-ext').textContent='Sent'}
  function places(ws){var p=[];ws.forEach(function(w){var l=w.el.closest('[data-loc]');l=l?l.getAttribute('data-loc'):'the file';if(p.indexOf(l)<0)p.push(l)});
    return p.length>1?p.slice(0,-1).join(', ')+' and '+p[p.length-1]:p[0]}
  function finish(){if(st.done||!R||!st.revealed)return;st.done=true;
    var rows=PG.map(function(g){var r=R[g];if(r.ok)return {s:'y',label:G[g].l+' · blacked out',detail:V[g][0],pts:50};
      var d=V[g][1];if(g==='name')d=d.replace('{w}',places(r.left));else if(r.part)d='Partly covered. “'+r.left.map(function(w){return w.t}).join(' ').replace(/[,.]$/,'')+'” still showed. '+d;
      return {s:'n',label:G[g].l+' · leaked',detail:d,pts:-25}});
    var ov=NG.filter(function(g){return R[g].over});ov.forEach(function(g){rows.push({s:'m',label:G[g].l+' · they needed this',detail:V[g],pts:-15})});
    if(!ov.length)rows.push({s:'y',label:'Repair details · intact',detail:'Claim reference, vehicle, registration, incident date, damage and limit all got through.',pts:null});
    var lk=PG.filter(function(g){return !R[g].ok}).length,none=!Object.keys(st.marks).length;
    api.end({max:400,rows:rows,delay:250,
      title:none?'The whole file went out.':lk===0&&!ov.length?'Clean send. Hartley got the job, nothing else.':lk===0?'Nothing leaked, but the repair stalls.':lk===1?'Close. One thing went out that shouldn’t have.':lk===2?'Close. Two things went out that shouldn’t have.':'Hartley now knows a lot about Margaret.',
      line:'Page 12 defines personal data in one sentence. Spotting it in a real file, against the clock, is the actual skill.'})}

  buildThumb();paint();thumbView();
  if(!RM){TL.x=TL.tx=IDLE[0]*amp();TL.y=TL.ty=IDLE[1]*amp();tiltPaint()}
  return {start:function(){st.go=true;count();tm=api.timer(75,function(){send(true)});api.every(200,tick);tick();
      if(phone())tiltFlat();else pg.focus({preventScroll:true})},
    resize:function(){topsOk=false;sizeThumb();if(!st.sent)paint();thumbView();if(!phone())closeShare();if(stage.style.transform)tiltPaint()},
    destroy:function(){stopMo();if(raf)cancelAnimationFrame(raf);if(TL.raf)cancelAnimationFrame(TL.raf);dr=null}}
}

(window.HM_T=window.HM_T||[]).push({id:'redact',topic:'Personal data',music:'redact',
  app:{name:'Folio',url:'folio.northwind.co/share/CLM-2291-0457',color:'#0E6E6A',icon:I.folio},
  lms:{url:'learn.northwind.co/gdpr-essentials/article-4/page-12',color:'#4A4563',bg:'#ECEBF0'},
  slide:slide(),
  notes:['A definition isn’t a skill. Nobody’s job is reciting Article 4.','Seven definitions, and not one document to practise on.','Reading isn’t doing. The only action here is “Next”.','Page 12 of 64. The trivia box is the bit people remember.'],
  intro:{title:'Redaction drill',lede:'A motor claim file is about to go to Hartley Body Repairs. They need what it takes to fix the car, and nothing else.',
    rules:['Drag across words to black them out. Click a redaction to undo it.','Leave what the shop needs. Over-redacting stalls the repair.','It sends itself in 75 seconds, ready or not.'],meta:'1 claim file · 75 seconds',cta:'Open file'},
  html:app(),init:init});
})();

/* training: gift */
/* Gifts & hospitality approvals in a spend-compliance app. Six declarations on a physical card deck, a 15 second
   SLA on each, and anything left past its SLA auto-approves. Every call is stamped and filed into a 3D tray. */
(function(){
var S='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',E='</svg>';
var I={
  logo:S+'<path d="M4.4 2.6v10.6h7.8"/><path d="m7.3 8.5 1.8 1.8 3.5-3.7"/>'+E,
  home:S+'<path d="M2.6 7.2 8 2.8l5.4 4.4"/><path d="M4 6.1v7.1h8V6.1"/><path d="M6.6 13.2V9.7h2.8v3.5"/>'+E,
  appr:S+'<rect x="2.4" y="2.4" width="11.2" height="11.2" rx="2.2"/><path d="m5.4 8.2 1.8 1.8 3.6-3.8"/>'+E,
  card:S+'<rect x="1.8" y="3.6" width="12.4" height="8.8" rx="1.6"/><path d="M1.8 6.6h12.4M4.4 9.8h2.4"/>'+E,
  reimb:S+'<path d="M3.6 2.2h8.8v11.6l-1.5-1-1.4 1-1.5-1-1.5 1-1.4-1-1.5 1z"/><path d="M6 5.6h4M6 8.2h4"/>'+E,
  pol:S+'<path d="M8 1.9 13 3.7v3.8c0 3.1-2.1 5.3-5 6.6-2.9-1.3-5-3.5-5-6.6V3.7z"/><path d="m5.9 8 1.5 1.5 2.8-3"/>'+E,
  rep:S+'<path d="M2.6 13.4h10.8"/><path d="M4.4 11V8.2M7.2 11V4.8M10 11V7M12.6 11V3.4"/>'+E,
  book:S+'<path d="M8 4.3C6.5 3.2 4.6 2.8 2.4 2.9v9.5c2.2-.1 4.1.3 5.6 1.4 1.5-1.1 3.4-1.5 5.6-1.4V2.9c-2.2-.1-4.1.3-5.6 1.4z"/><path d="M8 4.3v9.4"/>'+E,
  clock:S+'<circle cx="8" cy="8" r="5.9"/><path d="M8 4.9V8l2 1.3"/>'+E,
  img:S+'<rect x="2.2" y="2.8" width="11.6" height="10.4" rx="1.6"/><circle cx="5.9" cy="6.4" r="1.1"/><path d="m2.6 11.6 3.3-3 2.4 2.1 1.9-1.6 3.4 2.9"/>'+E,
  pdf:S+'<path d="M9.4 2H4.6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.8a1 1 0 0 0 1-1V5z"/><path d="M9.4 2v3h3M5.9 8.6h4.2M5.9 10.9h2.8"/>'+E,
  none:S+'<path d="M9.4 2H4.6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.8a1 1 0 0 0 1-1V5z"/><path d="M9.4 2v3h3M2.4 2.4l11.2 11.2"/>'+E,
  hist:S+'<path d="M2.7 8a5.3 5.3 0 1 0 1.6-3.8"/><path d="M2.5 2.8v2.5H5"/><path d="M8 5.4V8l1.8 1.2"/>'+E,
  chk:S+'<circle cx="8" cy="8" r="5.8" stroke-dasharray="2.1 1.9"/><path d="M8 5.6v2.7M8 10.5v.1"/>'+E,
  x:S+'<path d="m4.4 4.4 7.2 7.2M11.6 4.4l-7.2 7.2"/>'+E,
  up:S+'<path d="M8 13V3.5M3.9 7.5 8 3.3l4.1 4.2"/>'+E,
  ok:S+'<path d="m3.4 8.4 3 3 6.2-6.6"/>'+E,
  down:S+'<path d="m4.4 6.2 3.6 3.6 3.6-3.6"/>'+E,
  right:S+'<path d="m6.2 3.8 4.2 4.2-4.2 4.2"/>'+E,
  filter:S+'<path d="M2.4 3.8h11.2M4.4 8h7.2M6.4 12.2h3.2"/>'+E,
  sort:S+'<path d="M5 3v10M2.9 10.9 5 13l2.1-2.1M11 13V3M8.9 5.1 11 3l2.1 2.1"/>'+E,
  menu:S+'<path d="M2.5 4.2h11M2.5 8h11M2.5 11.8h11"/>'+E,
  inA:S+'<path d="M12 4 4.6 11.4M4.6 6.4v5h5"/>'+E,
  outA:S+'<path d="M4 12l7.4-7.4M6.4 4.6h5v5"/>'+E
};

/* the queue. rows: [label, main, sub] */
var R=[
 {id:'basket',code:'GH-2038',who:'Elena Park',first:'Elena',team:'Procurement operations',av:'EP',c:'#3E7A62',
  dir:'in',cat:'Gift',title:'Fruit basket for the team',short:'Fruit basket',name:'Fruit basket',val:'$45.00',vs:'1 basket',q:'$45',
  rows:[['Offered by','Calder Packaging','Mara Lindqvist, Account manager'],['Relationship','Supplier since 2017 · No open tenders'],['Received','14 Oct 2026'],['Shared with','Procurement team, 12 people']],
  note:'Calder send one to every customer team when their year closes. It’s in the kitchen for everyone.',
  att:['img','fruit-basket.jpg','840 KB'],aud:'Submitted 14 Oct, 09:12 · Routed to you as category owner',rule:1},
 {id:'tickets',code:'GH-2041',who:'Marcus Bell',first:'Marcus',team:'Logistics category',av:'MB',c:'#4C6FB0',
  dir:'in',cat:'Event tickets',title:'Two cup final tickets',short:'Final tickets',name:'Cup final tickets',val:'$900.00',vs:'2 × $450',q:'$900',
  rows:[['Offered by','Brightline Logistics','Tom Carver, Key account director'],['Relationship','Bidder · RFP-031 Freight & warehousing (open)'],['Event','Cup final, Sat 25 Oct'],['For','Marcus Bell and a guest']],
  note:'Tom offered us two seats for the final. We’re on the freight tender panel together, so I wanted to declare it properly.',
  att:['pdf','final-invite.pdf','212 KB'],aud:'Submitted 15 Oct, 16:30 · Routed to you, value over $250',rule:3},
 {id:'fee',code:'GH-2043',who:'Dev Malhotra',first:'Dev',team:'Sales, export accounts',av:'DM',c:'#A8577E',
  dir:'out',cat:'Third-party payment',title:'“Consulting fee” for a customs agent',short:'Agent “fee”',name:'Customs “consulting fee”',val:'$2,000.00',vs:'Bank transfer',q:'$2,000',
  rows:[['Pay to','R. Haddad, customs agent','Personal account ••8812'],['Relationship','Individual · Not an approved vendor'],['Requested','15 Oct 2026'],['Related to','Pellam order, held at customs']],
  note:'Our agent says a consulting fee will speed things up at customs. He wants it paid to his personal account, not the agency’s.',
  att:['img','chat-screenshot.png','312 KB'],aud:'Submitted 15 Oct, 08:47 · Routed to you, payment over $500',rule:6},
 {id:'lunch',code:'GH-2044',who:'Aisha Bello',first:'Aisha',team:'Account management',av:'AB',c:'#8C6A3F',
  dir:'out',cat:'Hospitality',title:'Client lunch for two',short:'Client lunch',name:'Client lunch',val:'$38.00',vs:'$19 per person',q:'$38',
  rows:[['Guest','Corvel Foods','Hannah Ortiz, Operations director'],['Relationship','Customer since 2021 · Renewal in Jan'],['Date','13 Oct 2026'],['Receipt','Attached, matches amount']],
  note:'Quarterly check-in before their renewal. Sandwich place round the corner from their office.',
  att:['pdf','receipt-1013.pdf','96 KB'],aud:'Submitted 13 Oct, 15:02 · Routed to you as category owner',rule:2},
 {id:'port',code:'GH-2047',who:'Lena Fischer',first:'Lena',team:'Shipping coordination',av:'LF',c:'#B4562F',
  dir:'out',cat:'Payment to official',title:'Cash “expedite fee” at the port',short:'Port cash fee',name:'Port “expedite fee”',val:'$200.00',vs:'Cash',q:'$200',
  rows:[['Pay to','Port customs officer','Asked in person, at the gate'],['Relationship','Public official'],['Requested','Today, 10:05'],['Shipment','NW-88213, held since Monday']],
  note:'Shipment is held at the port. The officer says $200 cash releases it today. Otherwise it’s next week and the line stops.',
  att:null,aud:'Submitted today, 10:06 · Marked urgent by requester',rule:5},
 {id:'bag',code:'GH-2049',who:'Sam Okoro',first:'Sam',team:'Category analytics',av:'SO',c:'#5F6B7A',
  dir:'in',cat:'Gift',title:'Branded laptop bag',short:'Laptop bag',name:'Laptop bag',val:'$25.00',vs:'Promotional item',q:'$25',
  rows:[['Offered by','Fieldstone Analytics','Sponsor, Supply Chain Summit'],['Relationship','Not a vendor · No open tenders'],['Received','9 Oct 2026'],['Given to','Every registered attendee']],
  note:'Everyone got one at registration. Their logo’s on the front, nothing inside it.',
  att:['img','laptop-bag.jpg','1.1 MB'],aud:'Submitted 10 Oct, 11:20 · Routed to you as category owner',rule:1}
];
/* what each call is worth, and why. [pts, y|m|n, toast title, one-line reason] */
var OUT={
 basket:{app:[100,'y','Easy one.','$45, shared by the team, from a supplier with nothing in play. 4.1 covers it.'],
   esc:[30,'m','Compliance didn’t need this.','$45 and nothing in play. Escalating the easy ones buries the hard ones.'],
   dec:[10,'m','Too strict.','Under the $50 limit and shared by everyone. Declining it just snubs a good supplier.'],
   auto:[50,'m','Right result, by default.','Nobody decided. The SLA did, and it won’t always pick well.']},
 tickets:{dec:[100,'y','Conflict avoided.','Brightline is bidding in a tender you’re scoring. 4.3: nothing from them, at any value.'],
   esc:[60,'m','Safe, but you knew.','4.3 is absolute, so Compliance would decline it. Make the clear calls yourself.'],
   app:[-75,'n','That’s a conflict.','$900 of tickets from a bidder you’re scoring. Every losing bidder will ask about it.'],
   auto:[-75,'n','Approved by the clock.','$900 of tickets from an active bidder went through because nobody decided.']},
 fee:{esc:[100,'y','Exactly right.','A “fee” to an agent’s personal account is how bribes get booked. Compliance has to know.'],
   dec:[50,'m','Stopped, not reported.','The payment’s dead, but the agent will ask again. 4.6: anything that looks like a bribe goes to Compliance.'],
   app:[-100,'n','You just paid a bribe.','Cash to a personal account to “speed things up”. Northwind is liable for what its agents do.'],
   auto:[-100,'n','The clock paid a bribe.','$2,000 to a personal account, approved because nobody decided in time.']},
 lunch:{app:[100,'y','Fine, and fast.','$19 a head, an existing customer, a receipt and a reason. Exactly what 4.2 allows.'],
   esc:[30,'m','Overthinking it.','$38 for two with a receipt. Compliance didn’t need to see this one.'],
   dec:[10,'m','Too strict.','Well under $150 a head with a clear purpose. Now Aisha pays for lunch herself.'],
   auto:[50,'m','Right result, by default.','It was fine. But the SLA made the call, not you.']},
 port:{esc:[100,'y','Refused and reported.','Cash to an official to do their job faster is a facilitation payment. 4.5: never, and report it.'],
   dec:[50,'m','Refused, not reported.','Right to say no. But Lena is at the port with an official asking for cash. Compliance needs to know today.'],
   app:[-100,'n','That’s a facilitation payment.','$200 in cash to an official is a bribe at any size. 4.5 says never.'],
   auto:[-100,'n','Approved by the clock.','A cash payment to a port official went through because nobody decided.']},
 bag:{app:[100,'y','Swag is fine.','The same $25 bag every attendee got. Low value, nothing in play.'],
   esc:[30,'m','Compliance didn’t need this.','A $25 giveaway everyone got. Save escalations for the ones that matter.'],
   dec:[10,'m','Too strict.','Under $50 and given to every attendee. 4.1 says it’s fine.'],
   auto:[50,'m','Right result, by default.','It was fine. The SLA still made the call, not you.']}
};
var RULES=[
 ['4.1','Gifts','Up to $50','','Occasional gifts up to $50 are fine to accept.'],
 ['4.2','Hospitality','$150 pp','','Up to $150 a head, with a clear business purpose and a receipt.'],
 ['4.3','Open tenders','Nothing','r','Nothing at all from a company in an open tender you’re involved in.'],
 ['4.4','Cash','Never','r','No cash or equivalents, given or received. Pay company accounts, never personal ones.'],
 ['4.5','Facilitation payments','Never','r','No payments to officials to speed up routine actions. Report every request.'],
 ['4.6','When unsure','Escalate','a','Escalate to Compliance. Anything that looks like a bribe goes there, even once refused.']
];
var SLA=15,LAB={app:'Approved',dec:'Declined',esc:'Escalated'};

function slide(){return '<div class="lms-top"><span class="lms-ti">Code of Conduct: Gifts &amp; Hospitality Policy</span><span class="lms-no"><span class="hl" data-n="3">Slide 7 of 22</span></span></div>'+
  '<div class="lms-mid"><div class="gb-sl"><div class="lms-h">Accepting Gifts and Hospitality</div><ul class="lms-ul">'+
   '<li><span class="hl" data-n="0">Employees must not accept gifts that could influence, or appear to influence, business decisions.</span></li>'+
   '<li><span class="hl" data-n="1">Gifts of nominal value may be acceptable in certain circumstances.</span></li>'+
   '<li><span class="hl" data-n="0">Bribery and corruption of any kind are strictly prohibited.</span></li>'+
   '<li>If in doubt, contact the Compliance Department.</li></ul>'+
   '<div class="gb-ack"><span class="gb-box"></span><span class="hl" data-n="2" data-mk="r">I have read and understood this policy</span></div></div>'+
   '<div class="lms-art gb-gift" data-ps>'+giftArt()+'</div></div>'+
  '<div class="lms-prog"><i style="width:31.8%"></i></div><div class="lms-bot"><span class="lms-hint">Tick the box to enable NEXT.</span><span class="lms-btns"><span class="lms-btn">&#9664; BACK</span><span class="lms-btn gb-off">NEXT &#9654;</span></span></div>'}
/* clip art, circa 2004: a glossy present with a satin bow */
function giftArt(){return '<svg viewBox="0 0 200 190" aria-hidden="true"><defs>'+
  '<linearGradient id="gbR" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E8433E"/><stop offset="1" stop-color="#A3161D"/></linearGradient>'+
  '<linearGradient id="gbL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0524B"/><stop offset="1" stop-color="#BC2027"/></linearGradient>'+
  '<linearGradient id="gbG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#D99A1E"/><stop offset=".45" stop-color="#FFE48A"/><stop offset="1" stop-color="#C98A12"/></linearGradient>'+
  '<linearGradient id="gbB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE48A"/><stop offset="1" stop-color="#D5961B"/></linearGradient></defs>'+
  '<ellipse cx="100" cy="180" rx="78" ry="7" fill="#000" opacity=".14"/>'+
  '<rect x="30" y="86" width="140" height="90" fill="url(#gbR)" stroke="#7E1015" stroke-width="2"/>'+
  '<rect x="30" y="86" width="140" height="14" fill="#000" opacity=".12"/>'+
  '<rect x="88" y="86" width="24" height="90" fill="url(#gbG)" stroke="#A8730E" stroke-width="1.5"/>'+
  '<rect x="22" y="66" width="156" height="26" rx="2" fill="url(#gbL)" stroke="#7E1015" stroke-width="2"/>'+
  '<rect x="88" y="66" width="24" height="26" fill="url(#gbG)" stroke="#A8730E" stroke-width="1.5"/>'+
  '<path d="M30 71h52" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45"/>'+
  '<path d="M38 104c0 20 0 44 2 62" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".16"/>'+
  '<path d="M99 64C82 34 50 30 46 46c-4 15 26 22 53 18z" fill="url(#gbB)" stroke="#A8730E" stroke-width="1.6" stroke-linejoin="round"/>'+
  '<path d="M101 64c17-30 49-34 53-18 4 15-26 22-53 18z" fill="url(#gbB)" stroke="#A8730E" stroke-width="1.6" stroke-linejoin="round"/>'+
  '<path d="M92 66 78 92l9-2 4 7 6-29M108 66l14 26-9-2-4 7-6-29" fill="url(#gbB)" stroke="#A8730E" stroke-width="1.4" stroke-linejoin="round"/>'+
  '<path d="M60 44c8-3 22 3 32 14" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none" opacity=".6"/>'+
  '<rect x="91" y="56" width="18" height="15" rx="5" fill="url(#gbG)" stroke="#A8730E" stroke-width="1.6"/>'+
  '<path d="M160 24l2.6 7.4 7.4 2.6-7.4 2.6-2.6 7.4-2.6-7.4-7.4-2.6 7.4-2.6z" fill="#F7C531"/>'+
  '<path d="M30 30l1.8 5 5 1.8-5 1.8-1.8 5-1.8-5-5-1.8 5-1.8z" fill="#F7C531"/></svg>'}

var KS=['dec','esc','app'],PERS=900,ORIGIN=-.3;
function cl(v,a,b){return Math.max(a,Math.min(b,v))}

/* a request card is a physical object: four thickness layers, a face, and a stamp head that lives above it */
function cardHTML(r,j){var P=function(k){return j===0?' data-pt="'+k+'"':''};
  var rows=r.rows.map(function(w){return '<div><dt>'+w[0]+'</dt><dd>'+(w[2]?'<b>'+w[1]+'</b><span>'+w[2]+'</span>':w[1])+'</dd></div>'}).join('');
  var att=r.att?'<span class="gb-att">'+I[r.att[0]]+'<span class="nm">'+r.att[1]+'</span><i>'+r.att[2]+'</i></span>':'<span class="gb-att none">'+I.none+'<span class="nm">No receipt available</span></span>';
  var lay=['#CBCAD7','#D7D6E1','#E2E1EA','#ECEBF2'].map(function(c,k){return '<i class="gb-lay" style="--l:'+(4-k)+';--lc:'+c+'"></i>'}).join('');
  return '<article class="gb-card" data-i="'+j+'" data-p="'+Math.min(j,4)+'" aria-label="Request '+r.code+'"><div class="gb-c3">'+lay+
   '<div class="gb-face"'+P('e')+'><i class="gb-bar"><b></b></i><div class="gb-cin">'+
   '<header class="gb-ch"><span class="gb-av" style="background:'+r.c+'">'+r.av+'</span><div class="gb-who"><b'+P('t')+'>'+r.who+'</b><span>'+r.team+'</span></div>'+
    '<span class="gb-id">'+r.code+'</span><span class="gb-sla">'+I.clock+'<span class="l">Auto-approves in</span><b>0:'+SLA+'</b></span></header>'+
   '<div class="gb-what"><div class="gb-kick"><span class="gb-dir '+r.dir+'">'+(r.dir==='in'?I.inA+'Received':I.outA+'Given')+'</span><span>'+r.cat+'</span><span class="gb-pcm">'+I.chk+'Needs review</span></div>'+
    '<h3'+P('t')+'>'+r.title+'</h3><div class="gb-val"><b'+P('t')+'>'+r.val+'</b><span> USD</span><small>'+r.vs+'</small></div></div>'+
   '<div class="gb-bd"><dl class="gb-dl"'+P('t')+'>'+rows+'</dl>'+
    '<div class="gb-note"><div class="gb-nh"><span class="gb-av" style="background:'+r.c+'">'+r.av+'</span><b>'+r.first+'</b><span>added a note</span></div><p'+P('t')+'>'+r.note+'</p>'+att+'</div></div>'+
   '<footer class="gb-cf"><span class="gb-pc">'+I.chk+'Policy check: needs review</span><span class="gb-aud">'+I.hist+'<span>'+r.aud+'</span></span></footer>'+
   '</div><i class="gb-ssh"></i><div class="gb-ink" aria-hidden="true"></div><i class="gb-sheen"></i></div>'+
   '<div class="gb-head" aria-hidden="true"><i class="gb-hl" style="--l:3"></i><i class="gb-hl" style="--l:2"></i><i class="gb-hl" style="--l:1"></i><div class="gb-ht"><div class="gb-hg"><span></span></div></div></div>'+
  '</div></article>'}
/* a filing tray: floor, walls and a labelled front lip, seen in perspective */
function tray(k){return '<div class="gb-tray" aria-hidden="true" data-pt="e"><div class="gb-tbox"><i class="fl"></i><i class="bk"></i><i class="wl"></i><i class="wr"></i><div class="gb-pile"></div>'+
  '<i class="lp"></i></div><div class="gb-tcap"><span><i></i><em>'+LAB[k]+'</em></span><b>0</b></div></div>'}

function app(){
  var nav=function(ic,l,n,cls){return '<div class="gb-ni'+(cls?' '+cls:'')+'"><span class="gb-ic">'+ic+'</span><span class="gb-nl" data-pt="t">'+l+'</span>'+(n?'<span class="gb-n">'+n+'</span>':'')+'</div>'};
  var rules=RULES.map(function(x,j){return '<li class="gb-rule" data-r="'+(j+1)+'"><span class="no">'+x[0]+'</span><h4><span class="tt" data-pt="t">'+x[1]+'</span><span class="lm '+x[3]+'">'+x[2]+'</span></h4><p>'+x[4]+'</p></li>'}).join('');
  return '<div class="gb" id="gb">'+
  '<nav class="gb-nav" aria-label="Ledgerline">'+
   '<div class="gb-brand"><span class="gb-mark" data-pt="b">'+I.logo+'</span><span class="gb-nl" data-pt="t">Ledgerline</span></div>'+
   '<div class="gb-org"><span class="gb-orgav">N</span><span class="gb-nl">Northwind</span>'+I.down+'</div>'+
   nav(I.home,'Home')+nav(I.appr,'Approvals','<span id="gb-nav-n">6</span>','on')+
   '<div class="gb-sub"><div class="gb-si">Spend</div><div class="gb-si on">Gifts &amp; hospitality<span class="gb-n" id="gb-sub-n">6</span></div><div class="gb-si">Vendors</div></div>'+
   nav(I.card,'Cards')+nav(I.reimb,'Reimbursements')+nav(I.pol,'Policies')+nav(I.rep,'Reports')+
   '<div class="gb-me"><span class="gb-av" style="background:#2F2F36">JR</span><div class="gb-nl"><b>Jordan Reyes</b><span>Head of Procurement</span></div></div></nav>'+
  '<div class="gb-main">'+
   '<header class="gb-hd"><span class="gb-burg">'+I.menu+'</span>'+
    '<div class="gb-ttl"><span class="gb-crumb">Approvals'+I.right+'</span><h2 data-pt="t">Gifts &amp; hospitality</h2><span class="gb-sub2"><span class="gb-pend" data-pt="t"><span class="dot">·</span> <b id="gb-pend">6</b> pending</span><span class="gb-nx" id="gb-nx"></span></span></div>'+
    '<div class="gb-flts"><span class="gb-flt">'+I.filter+'Team <b>All</b></span><span class="gb-flt">Value <b>Any</b></span><span class="gb-flt">'+I.sort+'SLA, soonest</span></div>'+
    '<button class="gb-poltg" type="button" data-a="pol" aria-pressed="true" aria-controls="gb-pol">'+I.book+'<span>Policy</span><kbd>P</kbd></button></header>'+
   '<div class="gb-tabs"><span class="on">Pending <i id="gb-t-p">6</i></span><span>Escalated <i id="gb-t-esc">0</i></span><span>Approved <i id="gb-t-app">0</i></span><span>Declined <i id="gb-t-dec">0</i></span>'+
    '<span class="gb-auto">Auto-approve when SLA expires<i class="gb-sw" aria-hidden="true"></i><b>On</b></span></div>'+
   '<div class="gb-work">'+
    '<section class="gb-rev" aria-label="Request under review">'+
     '<div class="gb-deck" id="gb-deck"><i class="gb-sha"></i><i class="gb-shc"></i><div class="gb-empty"><span>'+I.ok+'</span><b>Queue clear</b><p>6 decisions filed. Nothing waiting on you.</p></div>'+R.map(cardHTML).join('')+'</div>'+
     '<div class="gb-acts">'+
      '<div class="gb-col" data-k="dec">'+tray('dec')+'<button class="gb-act dec" type="button" data-a="dec" data-pt="e">'+I.x+'<span>Decline</span><kbd>←</kbd></button></div>'+
      '<div class="gb-col" data-k="esc">'+tray('esc')+'<button class="gb-act esc" type="button" data-a="esc" data-pt="e">'+I.up+'<span>Escalate<span class="gb-lg"> to Compliance</span></span><kbd>↑</kbd></button></div>'+
      '<div class="gb-col" data-k="app">'+tray('app')+'<button class="gb-act app" type="button" data-a="app" data-pt="b">'+I.ok+'<span>Approve</span><kbd>→</kbd></button></div></div>'+
    '</section>'+
    '<aside class="gb-pol" id="gb-pol" aria-label="Gifts and Hospitality Policy excerpt"><div class="gb-pin">'+
     '<div class="gb-grab"></div><div class="gb-ph"><div class="gb-ph-t"><span class="gb-ph-ic">'+I.book+'</span><div><b data-pt="t">Gifts &amp; Hospitality Policy v4</b><span>Excerpt · Section 4 · Owner: Compliance</span></div>'+
      '<button class="gb-polx" type="button" data-a="pol" aria-label="Close policy">'+I.x+'</button></div></div>'+
     '<ol class="gb-rules" data-lenis-prevent>'+rules+'</ol>'+
     '<div class="gb-pf">Updated 3 Mar 2026 · Questions: compliance@northwind.co</div></div></aside>'+
   '</div><div class="gb-scrim" data-a="scrim"></div></div></div>'}

function init(api){
  var root=api.$('#gb'),rev=api.$('.gb-rev'),deck=api.$('#gb-deck'),cards=api.$$('.gb-card'),polB=api.$('.gb-poltg'),shA=api.$('.gb-sha'),shC=api.$('.gb-shc'),
      T={},i=0,busy=true,started=false,ended=false,tm=null,res=[],drag=null,hitT=null,pressT=null,lastT=null,anims=[],dY=300;
  KS.forEach(function(k){var c=api.$('.gb-col[data-k="'+k+'"]');T[k]={box:c.querySelector('.gb-tbox'),pile:c.querySelector('.gb-pile'),ct:c.querySelector('.gb-tcap b'),n:0}});
  function anim(el,kf,o){if(!el||!el.animate)return null;var a=el.animate(kf,o);anims.push(a);a.onfinish=function(){var k=anims.indexOf(a);if(k>=0)anims.splice(k,1)};return a}
  function $c(sel){return cards[i]&&cards[i].querySelector(sel)}
  function em(){return parseFloat(getComputedStyle(root).fontSize)||13}
  function clock(){var d=new Date();return ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)}
  function inkSet(el,kind,auto){el.className='gb-ink gb-s-'+kind+(auto?' sys':'');el.innerHTML='<b>'+LAB[kind]+'</b><small>'+(auto?'Auto · SLA expired':'J. Reyes · '+clock())+'</small>'}
  /* one toast at a time: the old one fades out of the flow while the new one lands */
  function say(o){var t=lastT;if(t&&t.parentNode){t.style.position='absolute';t.style.left=t.style.right=t.style.bottom='0';t.classList.add('out');api.after(320,function(){if(t.parentNode)t.parentNode.removeChild(t)})}lastT=api.toast(o)}
  /* where the eye is: the stage's perspective origin sits above it, so lifted things drift down unless corrected */
  function measure(){var rr=rev.getBoundingClientRect(),dr=deck.getBoundingClientRect();dY=(dr.top+dr.height/2)-(rr.top+rr.height*ORIGIN)}
  function comp(z){return -dY*z/(PERS-z)}

  /* the front card's pose (pointer tilt, drag, lift) runs on a damped spring and is written straight to transform */
  var Z={x:0,y:0,z:0,rx:0,ry:0,rz:0,so:0,sx:50,sy:28},cur=ext(Z),tgt=ext(Z),vel=ext(Z),raf=0,k0;
  for(k0 in vel)vel[k0]=0;
  function ext(o){var r={};for(var k in o)r[k]=o[k];return r}
  function pose(o){for(var k in o)tgt[k]=o[k];if(api.rm){for(k in o)cur[k]=o[k];apply();return}if(!raf)raf=requestAnimationFrame(tick)}
  function tick(){raf=0;var mv=false,k,v;for(k in tgt){v=(vel[k]+(tgt[k]-cur[k])*.16)*.72;vel[k]=v;cur[k]+=v;if(Math.abs(v)>.004||Math.abs(tgt[k]-cur[k])>.03)mv=true;else{cur[k]=tgt[k];vel[k]=0}}
    apply();if(mv&&!api.paused())raf=requestAnimationFrame(tick)}
  function settle(){if(raf){cancelAnimationFrame(raf);raf=0}cur=ext(Z);tgt=ext(Z);for(var k in vel)vel[k]=0;apply()}
  function apply(){var c=cards[i],l=cl(cur.z/46,0,1.4);
    if(c){var s=c.firstChild.style,moved=cur.x||cur.y||cur.z||cur.rx||cur.ry||cur.rz;
      s.transform=moved?'translate3d('+cur.x.toFixed(2)+'px,'+(cur.y+comp(cur.z)).toFixed(2)+'px,'+cur.z.toFixed(2)+'px) rotateX('+cur.rx.toFixed(3)+'deg) rotateY('+cur.ry.toFixed(3)+'deg) rotateZ('+cur.rz.toFixed(3)+'deg)':'';
      s.setProperty('--sx',cur.sx.toFixed(1)+'%');s.setProperty('--sy',cur.sy.toFixed(1)+'%');s.setProperty('--so',Math.max(0,cur.so).toFixed(3))}
    shA.style.transform='translate3d('+(cur.x*.9).toFixed(1)+'px,'+(cur.y*.9+l*24).toFixed(1)+'px,-12px) scale('+(1+l*.06).toFixed(3)+')';shA.style.opacity=(.6+l*.4).toFixed(3);
    shC.style.transform='translate3d('+cur.x.toFixed(1)+'px,'+cur.y.toFixed(1)+'px,-12px)';shC.style.opacity=cl(1-l*1.8,0,1).toFixed(3)}
  function canTilt(){return started&&!ended&&!busy&&!drag&&!api.rm&&!api.narrow()}
  api.listen(rev,'pointermove',function(e){if(e.pointerType!=='mouse'||!canTilt())return;
    var r=deck.getBoundingClientRect(),nx=cl((e.clientX-r.left)/r.width*2-1,-1.25,1.25),ny=cl((e.clientY-r.top)/r.height*2-1,-1.25,1.25);
    pose({rx:-ny*2.6,ry:nx*3.4,sx:50+nx*36,sy:30+ny*42,so:1})});
  api.listen(rev,'pointerleave',function(){if(!drag&&!busy)pose({rx:0,ry:0,so:0})});

  /* the SLA readout on the card follows the training clock */
  function sla(sec){var b=$c('.gb-sla b');if(!b)return;var s=Math.max(0,Math.ceil(sec-.05));b.textContent='0:'+('0'+s).slice(-2);
    var low=s<=5;$c('.gb-sla').classList.toggle('low',low);var bar=$c('.gb-bar');bar.classList.toggle('low',low);bar.firstChild.style.transform='scaleX('+Math.max(0,sec/SLA).toFixed(4)+')'}
  api.every(100,function(){if(tm&&!busy)sla(tm.left())});
  function deal(){cards.forEach(function(c,j){if(j>=i)c.setAttribute('data-p',Math.min(j-i,4))});
    var n=R[i+1];api.$('#gb-nx').innerHTML=n?'Up next: <b>'+n.name+'</b>, '+n.q:i<R.length?'Last request':'';
    if(i<R.length)api.round('Request '+(i+1)+' of '+R.length)}
  function go(){if(ended)return;busy=false;sla(SLA);measure();tm=api.timer(SLA,function(){tm=null;decide('auto')})}
  function counts(){var done=res.filter(Boolean).length,left=R.length-done,c={app:0,dec:0,esc:0};res.forEach(function(x){if(x)c[x.kind]++});
    ['#gb-pend','#gb-nav-n','#gb-sub-n','#gb-t-p'].forEach(function(s){api.$(s).textContent=left});
    KS.forEach(function(k){api.$('#gb-t-'+k).textContent=c[k]});root.classList.toggle('clear',!left)}
  function press(kind){var b=api.$('.gb-act.'+kind);if(!b)return;b.classList.add('press');clearTimeout(pressT);pressT=api.after(170,function(){b.classList.remove('press')})}
  function hot(kind){api.$$('.gb-act').forEach(function(b){b.classList.toggle('hot',!!kind&&b.classList.contains(kind))});
    api.$$('.gb-col').forEach(function(c){c.classList.toggle('hot',!!kind&&c.getAttribute('data-k')===kind)})}
  function hit(n){var el=api.$('.gb-rule[data-r="'+n+'"]');if(!el)return;api.$$('.gb-rule.hit').forEach(function(x){x.classList.remove('hit')});
    el.classList.add('hit');var list=api.$('.gb-rules');if(list&&!api.narrow()){var t=el.offsetTop-list.offsetTop;if(t<list.scrollTop||t+el.offsetHeight>list.scrollTop+list.clientHeight)list.scrollTo({top:t-8,behavior:api.rm?'auto':'smooth'})}
    clearTimeout(hitT);hitT=api.after(2600,function(){el.classList.remove('hit')})}
  /* the next card rises out of the stack as you drag the current one away */
  function peek(k,animate){var n=cards[i+1];if(!n)return;
    if(k==null){n.style.transition=animate?'transform .5s cubic-bezier(.3,1.3,.5,1)':'';n.style.transform='';if(animate)api.after(520,function(){if(!drag)n.style.transition=''});return}
    n.style.transition='none';n.style.transform='translate3d(0,'+(-.4*(1-k)).toFixed(3)+'em,'+(-1.6*(1-k)).toFixed(3)+'em)'}

  /* the stamp: a head comes down out of the screen, the card gives under it, and it leaves ink */
  function stampDown(c,ink,kind,dur){var hd=c.querySelector('.gb-head'),ssh=c.querySelector('.gb-ssh'),w=ink.offsetWidth,h=ink.offsetHeight;
    hd.className='gb-head gb-s-'+kind;hd.style.setProperty('--hw',(w+18)+'px');hd.style.setProperty('--hh',(h+16)+'px');hd.querySelector('.gb-hg span').textContent=LAB[kind];
    ssh.style.width=(w+18)+'px';ssh.style.height=(h+16)+'px';
    function impact(){ink.style.opacity='';ink.style.transform='';ink.classList.add('on');api.sfx('stamp');
      if(!api.rm)anim(c,[{transform:'none'},{transform:'translateZ(-9px) scale(.984)',offset:.26},{transform:'translateZ(2px) scale(1.005)',offset:.62},{transform:'none'}],{duration:380,easing:'cubic-bezier(.3,.7,.4,1)'})}
    if(api.rm||!dur){impact();return}
    var at=.55,b='translate(-50%,-50%) ',r=' rotate(-8deg)',y=function(z){return (comp(z)-z*.16).toFixed(1)+'px'};
    anim(hd,[{transform:b+'translate3d(0,'+y(300)+',300px)'+r,opacity:0,easing:'cubic-bezier(.6,.02,.9,.45)'},{opacity:1,offset:.16},
      {transform:b+'translate3d(0,0,1.18em)'+r,opacity:1,offset:at,easing:'cubic-bezier(.3,.8,.4,1)'},{transform:b+'translate3d(0,0,1em)'+r,offset:at+.07,easing:'cubic-bezier(.5,0,.3,1)'},
      {transform:b+'translate3d(0,'+y(230)+',230px)'+r,opacity:0}],{duration:dur,fill:'forwards'});
    anim(ssh,[{opacity:0,transform:'translate(-50%,-50%) translate(1.4em,2.4em) rotate(-8deg) scale(1.6)'},{opacity:.34,transform:'translate(-50%,-50%) rotate(-8deg) scale(1)',offset:at,easing:'cubic-bezier(.3,.8,.4,1)'},
      {opacity:0,transform:'translate(-50%,-50%) translate(1em,1.8em) rotate(-8deg) scale(1.45)'}],{duration:dur,easing:'cubic-bezier(.55,0,.8,.5)'});
    api.after(dur*at,impact)}

  function decide(act,viaDrag){if(busy||ended||!started)return;busy=true;if(tm){tm.stop();tm=null}
    if(drag){viaDrag=viaDrag||drag.moved;drag=null}
    var r=R[i],o=OUT[r.id][act],kind=act==='auto'?'app':act,c=cards[i],ink=c.querySelector('.gb-ink'),auto=act==='auto';
    res[i]={act:act,kind:kind,o:o};hot(null);c.classList.remove('drag');inkSet(ink,kind,auto);
    if(!auto)press(kind);counts();if(api.narrow())sheet(false);
    if(!viaDrag)pose({rx:0,ry:0,so:0});
    if(auto){ink.style.opacity='';ink.classList.add('on');api.after(api.rm?150:420,function(){file(c,kind,o,r,true)});return}
    var dur=api.rm?0:viaDrag?460:620;stampDown(c,ink,kind,dur);
    api.after(api.rm?320:dur,function(){file(c,kind,o,r,false)})}
  /* filing: the card arcs into its tray, lies down and joins the pile. The SLA files it by itself, slowly. */
  function file(c,kind,o,r,auto){var t=T[kind],dr=deck.getBoundingClientRect(),tb=t.box.getBoundingClientRect(),fs=parseFloat(getComputedStyle(t.box).fontSize)||13,c3=c.firstChild,H=dr.height,
      dx=+(tb.left+tb.width/2-(dr.left+dr.width/2)).toFixed(1),dy=+(tb.top+tb.height*.4-(dr.top+dr.height/2)-t.n*fs*.2).toFixed(1),s=cl(fs*7/dr.width,.06,.5).toFixed(3),rz=kind==='app'?6:kind==='dec'?-6:1.5,
      end='translate3d('+dx+'px,'+dy+'px,0px) rotateX(62deg) rotateZ('+rz+'deg) scale('+s+')',end2='translate3d('+dx+'px,'+(dy+3)+'px,0px) rotateX(62deg) rotateZ('+rz+'deg) scale('+s+')';
    if(c3.style.transform&&!api.rm)anim(c3,[{transform:c3.style.transform},{transform:'translate3d(0px,0px,0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'}],{duration:auto?520:400,easing:'cubic-bezier(.3,.7,.3,1)',fill:'forwards'});
    var kf=auto?[{transform:'translate3d(0px,0px,0px) rotateX(0deg) rotateZ(0deg) scale(1)',easing:'cubic-bezier(.45,0,.55,1)'},
        {transform:'translate3d(0px,'+(comp(14)-H*.03).toFixed(1)+'px,14px) rotateX(-2deg) rotateZ(0deg) scale(.985)',offset:.2,easing:'cubic-bezier(.5,0,.35,1)'},
        {transform:end,offset:.93},{transform:end2}]
      :[{transform:'translate3d(0px,0px,0px) rotateX(0deg) rotateZ(0deg) scale(1)',easing:'cubic-bezier(.25,.6,.4,1)'},
        {transform:'translate3d('+(dx*.22).toFixed(1)+'px,'+(comp(70)+Math.min(0,dy*.05)-H*.07).toFixed(1)+'px,70px) rotateX(-9deg) rotateZ('+(rz*.4)+'deg) scale(.9)',offset:.3,easing:'cubic-bezier(.55,0,.3,1)'},
        {transform:end,offset:.9},{transform:end2}],dur=auto?1050:740;
    c.setAttribute('data-p','x');
    if(api.rm){c.style.visibility='hidden';land(kind,auto)}
    else{anim(c,kf,{duration:dur,fill:'forwards'});api.after(dur*(auto?.93:.9),function(){c.style.visibility='hidden';land(kind,auto)})}
    api.sfx('swipe');api.score(o[0]);
    say({tone:o[1]==='y'?'good':o[1]==='n'?'bad':'warn',title:o[2],text:o[3],pts:o[0],big:o[1]==='y'&&(r.id==='fee'||r.id==='port'),ms:api.narrow()?4000:5200});
    hit(r.rule);var nx=cards[i+1];if(nx){nx.style.transition='';nx.style.transform=''}
    i++;settle();deal();
    if(i<R.length)api.after(api.rm?60:(auto?640:480),go);else api.after(1900,finish)}
  /* the card lands as a slab on the pile, and the tray counts it */
  function land(kind,auto){var t=T[kind],n=t.n++,sl=document.createElement('i');
    sl.className='gb-slab gb-s-'+kind+(auto?' auto':'')+(api.rm?'':' in');
    sl.style.setProperty('--k',n);sl.style.setProperty('--r',((n%2?1:-1)*(1.2+(n*37%5)*.7)).toFixed(1)+'deg');
    sl.style.setProperty('--ox',((n*53%7-3)*.09).toFixed(2)+'em');sl.style.setProperty('--oy',((n*29%5-2)*.07).toFixed(2)+'em');
    sl.innerHTML='<i class="m"></i><span class="t"><b></b><b></b><em></em></span>';t.pile.appendChild(sl);api.listen(sl,'animationend',function(){sl.classList.remove('in')});
    t.ct.textContent=t.n;t.ct.classList.remove('bump');void t.ct.offsetWidth;t.ct.classList.add('bump');api.sfx('tap')}
  function finish(){if(ended)return;ended=true;
    var rows=R.map(function(r,j){var x=res[j]||{kind:'app',act:'auto',o:OUT[r.id].auto};
      return {s:x.o[1],label:r.name+', '+r.q+' · '+(x.act==='auto'?'Auto-approved':LAB[x.kind]),detail:x.o[3],pts:x.o[0]}});
    var t=api.total();
    api.end({max:600,rows:rows,title:t>=540?'Clean queue. Every call would hold up.':t>=380?'Good judgement. A couple of calls need work.':t>=150?'An auditor would have questions.':'Compliance would like a word.',
      line:'Same policy as slide 7 of 22. This time you used it, on the calls that aren’t obvious, against a clock.'})}
  /* policy: a side panel on desktop, a bottom sheet on phones */
  function sheet(on){if(on===root.classList.contains('sheet'))return;root.classList.toggle('sheet',on);polB.setAttribute('aria-pressed',on?'true':'false');api.sfx(on?'open':'click')}
  function togglePol(){if(api.narrow()){sheet(!root.classList.contains('sheet'));return}
    var off=root.classList.toggle('pol-off');polB.setAttribute('aria-pressed',off?'false':'true');api.sfx(off?'click':'open');api.after(480,measure)}
  function syncPol(){polB.setAttribute('aria-pressed',api.narrow()?(root.classList.contains('sheet')?'true':'false'):(root.classList.contains('pol-off')?'false':'true'))}
  api.listen(root,'click',function(e){var b=e.target.closest('[data-a]');if(!b)return;var a=b.getAttribute('data-a');
    if(a==='pol'){togglePol();return}
    if(a==='scrim'){sheet(false);return}
    if(LAB[a])decide(a)});
  /* drag the card: right approves, left declines, up escalates. It lifts off the stack and leans into the move. */
  api.listen(deck,'pointerdown',function(e){if(busy||ended||!started||(e.button&&e.button!==0))return;var c=e.target.closest('.gb-card');if(!c||c!==cards[i])return;
    drag={id:e.pointerId,x0:e.clientX,y0:e.clientY,x:0,y:0,kind:null,p:0,moved:false,c:c,ink:c.querySelector('.gb-ink')};
    try{c.setPointerCapture(e.pointerId)}catch(_){}});
  api.listen(deck,'pointermove',function(e){if(!drag||e.pointerId!==drag.id)return;var dx=e.clientX-drag.x0,dy=e.clientY-drag.y0;
    if(!drag.moved){if(Math.abs(dx)+Math.abs(dy)<5)return;drag.moved=true;drag.c.classList.add('drag')}
    e.preventDefault();var u=em(),thx=u*8,thy=u*5.5,kind,p,lean=api.rm?0:1;
    if(dy<0&&-dy>Math.abs(dx)*1.1){kind='esc';p=-dy/thy}else if(dx>=0){kind='app';p=dx/thx}else{kind='dec';p=-dx/thx}
    drag.x=dx;drag.y=dy;drag.p=p;
    pose({x:dx,y:kind==='esc'?dy:dy*.3,z:lean*cl((Math.abs(dx)+Math.abs(dy))/(u*4),0,1)*46,ry:lean*cl(dx/u*1.5,-17,17),rx:lean*(kind==='esc'?cl(-dy/u*1.4,0,14):cl(-dy/u*.5,-5,5)),rz:lean*cl(dx/u*.5,-8,8),
      so:lean*.8,sx:50-cl(dx/u*3,-40,40),sy:kind==='esc'?60:24});
    if(kind!==drag.kind){drag.kind=kind;inkSet(drag.ink,kind,false)}
    drag.ink.style.opacity=(cl((p-.15)/.85,0,1)*.55).toFixed(3);hot(p>=1?kind:null);peek(cl(p,0,1))});
  function release(e){if(!drag||e.pointerId!==drag.id)return;var d=drag;drag=null;if(!d.moved)return;d.c.classList.remove('drag');
    if(d.p>=1&&e.type!=='pointercancel'){decide(d.kind,true);return}
    pose({x:0,y:0,z:0,rx:0,ry:0,rz:0,so:0});d.ink.style.opacity='0';hot(null);peek(null,true)}
  api.listen(deck,'pointerup',release);api.listen(deck,'pointercancel',release);
  api.key(function(e){if(ended)return;var k=e.key,m={ArrowRight:'app',ArrowLeft:'dec',ArrowUp:'esc'}[k];
    if(m){e.preventDefault();if(!drag)decide(m);return}
    if(k==='p'||k==='P'){togglePol();return}
    if(k==='Escape')sheet(false)});
  deal();syncPol();apply();
  return {start:function(){started=true;measure();deal();go()},
    resize:function(){if(!api.narrow())root.classList.remove('sheet');syncPol();measure();if(!drag)settle()},
    destroy:function(){drag=null;if(raf)cancelAnimationFrame(raf);anims.forEach(function(a){try{a.cancel()}catch(_){}});anims=[]}}
}

(window.HM_T=window.HM_T||[]).push({id:'gift',topic:'Gifts &amp; hospitality',music:'gift',
  app:{name:'Ledgerline',url:'app.ledgerline.co/approvals/gifts-hospitality',color:'#5B4BDB',icon:I.logo},
  lms:{url:'learn.northwind.co/code-of-conduct/gifts-hospitality/slide-7',color:'#6B1F2E',bg:'#ECE9E4'},
  slide:slide(),
  notes:['Every rule here is obvious. Nobody thinks bribes are fine.','“Nominal value”, “certain circumstances”. The grey area is the job, and it’s skipped.','Ticking a box isn’t judgement. It proves you scrolled.','Read once a year. The tickets turn up on a Tuesday.'],
  intro:{title:'Gifts &amp; hospitality drill',lede:'You’re Jordan Reyes, Head of Procurement at Northwind. Six gift and hospitality declarations are waiting for your call.',
    rules:['Approve <kbd>→</kbd>, decline <kbd>←</kbd> or escalate to Compliance <kbd>↑</kbd>. Or drag the card into its tray.','Each request has a 15-second SLA. Ledgerline <b>auto-approves</b> anything left past it, whatever it is.','The policy is one click away. Every call is covered by one of its six rules.'],
    meta:'6 requests · 15 seconds each',cta:'Open queue'},
  html:app(),init:init});
})();

/* training: hazard */
/* Hazard walkthrough in a site inspection app. A 3D site scan of Bay 4 (with the photo behind it), six hazards, five controls that only look like hazards. */
(function(){
var S='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',E='</svg>';
var I={
  logo:S+'<path d="M5.7 2.9h-.9a1.4 1.4 0 0 0-1.4 1.4v8.4a1.4 1.4 0 0 0 1.4 1.4h6.4a1.4 1.4 0 0 0 1.4-1.4V4.3a1.4 1.4 0 0 0-1.4-1.4h-.9"/><rect x="5.7" y="1.8" width="4.6" height="2.3" rx=".7"/><path d="m5.7 9.2 1.6 1.6 3-3.3"/>'+E,
  search:S+'<circle cx="7" cy="7" r="4.3"/><path d="m10.3 10.3 3.2 3.2"/>'+E,
  bell:S+'<path d="M4 11.2V7.4a4 4 0 0 1 8 0v3.8l1 1.3H3z"/><path d="M6.6 13.8a1.5 1.5 0 0 0 2.8 0"/>'+E,
  pin:S+'<path d="M8 14.2s4.6-4.1 4.6-7.6a4.6 4.6 0 0 0-9.2 0c0 3.5 4.6 7.6 4.6 7.6z"/><circle cx="8" cy="6.6" r="1.6"/>'+E,
  user:S+'<circle cx="8" cy="5.4" r="2.6"/><path d="M3 13.6c.6-2.4 2.6-3.8 5-3.8s4.4 1.4 5 3.8"/>'+E,
  doc:S+'<path d="M9.4 2H4.6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.8a1 1 0 0 0 1-1V5z"/><path d="M9.4 2v3h3M5.9 8.4h4.2M5.9 10.9h2.8"/>'+E,
  clock:S+'<circle cx="8" cy="8" r="6"/><path d="M8 4.8V8l2.2 1.4"/>'+E,
  cam:S+'<path d="M2.4 5.6a1 1 0 0 1 1-1h1.9l1-1.6h3.4l1 1.6h1.9a1 1 0 0 1 1 1v6.4a1 1 0 0 1-1 1h-9.2a1 1 0 0 1-1-1z"/><circle cx="8" cy="8.5" r="2.3"/>'+E,
  plus:S+'<path d="M8 3.6v8.8M3.6 8h8.8"/>'+E,
  minus:S+'<path d="M3.6 8h8.8"/>'+E,
  fit:S+'<path d="M2.8 6V2.8H6M10 2.8h3.2V6M13.2 10v3.2H10M6 13.2H2.8V10"/>'+E,
  zin:S+'<circle cx="7" cy="7" r="4.3"/><path d="m10.3 10.3 3.2 3.2M7 5.1v3.8M5.1 7h3.8"/>'+E,
  zout:S+'<circle cx="7" cy="7" r="4.3"/><path d="m10.3 10.3 3.2 3.2M5.1 7h3.8"/>'+E,
  target:S+'<circle cx="8" cy="8" r="4.4"/><path d="M8 1.6v2.4M8 12v2.4M1.6 8H4M12 8h2.4"/><circle cx="8" cy="8" r=".5" fill="currentColor"/>'+E,
  chev:S+'<path d="m4 10 4-4 4 4"/>'+E,
  cube:S+'<path d="M8 1.8 13.4 4.9v6.2L8 14.2 2.6 11.1V4.9z"/><path d="M2.6 4.9 8 8l5.4-3.1M8 8v6.2"/>'+E,
  img:S+'<rect x="2.2" y="3" width="11.6" height="10" rx="1.6"/><circle cx="5.8" cy="6.4" r="1.2"/><path d="m2.6 11.6 3.4-3.2 2.6 2.4 1.8-1.6 3 2.8"/>'+E,
  reset:S+'<path d="M3.3 8a4.7 4.7 0 1 0 1.4-3.4"/><path d="M3.1 2.6v2.6h2.6"/>'+E,
  expand:S+'<path d="M9.6 2.8h3.6v3.6M6.4 13.2H2.8V9.6M13.2 2.8 9.2 6.8M2.8 13.2l4-4"/>'+E,
  collapse:S+'<path d="M13.2 6.8H9.2v-4M2.8 9.2h4v4M9.2 6.8l4-4M6.8 9.2l-4 4"/>'+E,
  check:S+'<path d="m3.5 8.4 2.9 2.9 6.1-6.6"/>'+E,
  x:S+'<path d="m4.5 4.5 7 7M11.5 4.5l-7 7"/>'+E,
  cloud:S+'<path d="M4.7 12.3a2.9 2.9 0 0 1-.5-5.8 3.9 3.9 0 0 1 7.6.9 2.5 2.5 0 0 1-.3 4.9z"/><path d="m6.3 9.4 1.2 1.2 2.2-2.4"/>'+E,
  /* hazard categories */
  slip:S+'<circle cx="10.3" cy="3.1" r="1.3"/><path d="M9.6 5.2 7.4 9.2l2.6 1.4-.4 2.6M7.4 9.2l-3 1.6M9 6.4l2.8.6M9 6.4 6.2 5.7M2 14.2h12"/>'+E,
  fall:S+'<rect x="3.6" y="1.9" width="8.8" height="6" rx="1"/><path d="M8 10.2v4M5.9 12.2 8 14.2l2.1-2"/>'+E,
  fire:S+'<path d="M8 14.2c-2.5 0-4.3-1.8-4.3-4.2 0-2.7 2.4-3.9 2.8-7.1 1.8 1.1 2.7 2.9 2.6 4.6.9-.4 1.4-1.3 1.6-2.3 1.1 1.2 1.7 2.8 1.7 4.6 0 2.6-1.8 4.4-4.4 4.4z"/>'+E,
  height:S+'<path d="M5 1.8v12.4M11 1.8v12.4M5 4.8h6M5 8h6M5 11.2h6"/>'+E,
  elec:S+'<path d="M9.2 1.8 4.2 9h3.7l-1 5.2L11.9 7H8.2z"/>'+E,
  veh:S+'<path d="M2.2 11.4V7.2h4.4l1.4-3.4H5"/><path d="M8 7.2v4.2"/><path d="M11.2 2.6v9.8h3.2"/><circle cx="4.4" cy="12.2" r="1.4"/><circle cx="8.4" cy="12.2" r="1.4"/>'+E
};
var CAT={slip:{n:'Slip or trip',c:'#2F6DB0',a:'a slip or trip'},fall:{n:'Falling object',c:'#9A5B13',a:'a falling object'},fire:{n:'Fire safety',c:'#C0362C',a:'a fire safety risk'},height:{n:'Working at height',c:'#6A4FB5',a:'working at height'},elec:{n:'Electrical',c:'#A27A00',a:'an electrical risk'},veh:{n:'Vehicle',c:'#23786A',a:'a vehicle risk'}};
var SEV=['','Low','Medium','High','Critical'];

/* the six hazards. opts: the three categories offered, in the order shown */
var HZ={
 spill:{t:'Spill on walkway',loc:'Walkway, aisle C',cat:'slip',opts:['elec','slip','veh'],sev:3,
   ok:['Good catch.','Wet floor in a walkway. Sign it, clean it, then find the leak.'],
   wr:{elec:'It’s a slip before it’s anything electrical. Sign it and clean it.',veh:'A truck could skid on it, but people walk here. It’s a slip first.'},
   rule:'Sign it, clean it, then trace the leak.'},
 overhang:{t:'Pallet overhanging beam',loc:'Rack C-04, level 3',cat:'fall',opts:['height','veh','fall'],sev:3,
   ok:['Spotted.','Part of that pallet is resting on nothing. It comes down on whoever’s below.'],
   wr:{height:'Nobody’s up there. The risk is the load coming down.',veh:'A truck put it there, but the risk is the load coming down.'},
   rule:'Loads sit square on both beams, never past them.'},
 exit:{t:'Fire exit blocked',loc:'Fire exit E2',cat:'fire',opts:['fire','slip','fall'],sev:4,
   ok:['That’s the big one.','A blocked fire exit is a fire risk before anything is burning.'],
   wr:{slip:'You could trip on them, but the real risk is nobody gets out in a fire.',fall:'They could topple, but the real risk is a blocked way out in a fire.'},
   rule:'Fire exits stay clear to the door, every shift.'},
 crates:{t:'Standing on crates',loc:'Rack C-04, level 2',cat:'height',opts:['fall','height','slip'],sev:3,
   ok:['Right call.','Hard hat and hi-vis don’t turn two crates into a ladder. PPE never fixes the method.'],
   wr:{fall:'A box might drop, but he’ll fall first. Crates aren’t access equipment.',slip:'He could slip, from a metre up. Anything above floor level is working at height.'},
   rule:'Above floor level needs access equipment, PPE or not.'},
 cable:{t:'Cable across walkway',loc:'Walkway, by exit E2',cat:'slip',opts:['elec','fire','slip'],sev:2,
   ok:['Trip hazard. Yes.','Ankle height, across a walkway. Reroute it or cover it.'],
   wr:{elec:'Fair, but it crosses a walkway. The trip is the likelier injury.',fire:'Not a fire risk as it stands. It crosses a walkway, so it’s a trip.'},
   rule:'Leads never cross walkways. Reroute or cover them.'},
 forks:{t:'Forks left raised',loc:'Truck FL-02',cat:'veh',opts:['veh','fall','slip'],sev:2,
   ok:['Easy to walk past.','Parked means forks on the floor. Raised, they’re a walk-into at chest height.'],
   wr:{fall:'Nothing’s on them. It’s a truck parked unsafe: forks go flat on the floor.',slip:'It’s a truck parked unsafe. Forks go flat on the floor.'},
   rule:'Parked trucks: forks on the floor, key out.'}
};
var HZ_ORDER=['spill','overhang','exit','crates','cable','forks'];
/* the five controls: things doing their job */
var CT={
 pallet:{t:'Pallet, level 2',loc:'Rack C-04',opts:['fall','height','veh'],why:'Square on both beams, wrapped, under the load label. That’s correct storage.'},
 sign:{t:'Exit sign',loc:'Fire exit E2',opts:['elec','fire','fall'],why:'The sign is fine. Look under it.',why2:'The sign is fine. The boxes under it were the problem.'},
 ext:{t:'Fire extinguisher',loc:'Fire point FP-3',opts:['fire','fall','slip'],why:'Mounted, signed and nothing in front of it. That’s the control working.'},
 aid:{t:'First-aid kit',loc:'Wall, by exit E2',opts:['slip','elec','fire'],why:'On the wall, signed and easy to reach. Nothing to fix.'},
 walker:{t:'Worker in walkway',loc:'Walkway, aisle C',opts:['veh','slip','height'],why:'Hi-vis, hard hat, inside the yellow lines. Exactly where she should be.'}
};
/* hit regions in photo units (1000 × 560), in tab order. a: where a keyboard pin lands. o: the reveal outline */
var OBJ=[
 {id:'pallet',lb:'Pallet on rack C-04, level 2',r:[[52,108,166,82]],a:[136,142]},
 {id:'overhang',lb:'Pallet on rack C-04, top level',r:[[296,16,192,90]],a:[396,58],o:[298,14,190,94],lp:'r'},
 {id:'crates',lb:'Worker at rack C-04',r:[[280,140,70,266]],a:[314,262],o:[278,138,74,270]},
 {id:'spill',lb:'Walkway floor by rack C-04',r:[[232,454,180,60]],a:[306,486],o:[232,454,180,60]},
 {id:'cable',lb:'Pedestal fan and its lead',r:[[488,316,32,58],[454,368,80,176],[418,420,62,140]],a:[497,474],o:[418,316,116,244]},
 {id:'sign',lb:'Exit sign',r:[[560,160,72,36]],a:[596,180]},
 {id:'exit',lb:'Fire exit door',r:[[534,196,130,182]],a:[590,322],o:[534,196,130,182]},
 {id:'ext',lb:'Fire point',r:[[664,204,40,132]],a:[683,290]},
 {id:'aid',lb:'First-aid box',r:[[712,212,52,66]],a:[736,256]},
 {id:'walker',lb:'Worker in the walkway',r:[[708,360,66,162]],a:[742,436]},
 {id:'forks',lb:'Forklift FL-02',r:[[714,286,104,52],[800,226,192,210]],a:[764,327],o:[706,224,288,214]}
];
function obj(id){for(var i=0;i<OBJ.length;i++)if(OBJ[i].id===id)return OBJ[i]}

/* ================= the photo: Bay 4, aisle C, drawn by hand ================= */
function R(x,y,w,h,f,a){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+f+'"'+(a?' '+a:'')+'/>'}
function P(d,f,a){return '<path d="'+d+'" fill="'+f+'"'+(a?' '+a:'')+'/>'}
function C(x,y,r,f,a){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'"'+(a?' '+a:'')+'/>'}
function EL(x,y,rx,ry,f,a){return '<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+f+'"'+(a?' '+a:'')+'/>'}
function L(d,c,w,a){return '<path d="'+d+'" fill="none" stroke="'+c+'" stroke-width="'+w+'"'+(a?' '+a:'')+'/>'}
function G(t,s,a){return '<g'+(t?' transform="'+t+'"':'')+(a?' '+a:'')+'>'+s+'</g>'}
function T(x,y,txt,sz,f,a){return '<text x="'+x+'" y="'+y+'" font-size="'+sz+'" fill="'+f+'" font-family="Geist,Arial,sans-serif"'+(a?' '+a:'')+'>'+txt+'</text>'}
var SH='#1B1F24';

/* racking pieces */
function pallet(x,y,w){var b=y-11;
  return R(x,b+3,w,5,'#2A2623')+R(x,b,w,3,'#BC8752')+R(x,b,w,1,'#CC9862')+
    R(x+1,b+3,15,5,'#9C6A3E')+R(x+w/2-7.5,b+3,15,5,'#9C6A3E')+R(x+w-16,b+3,15,5,'#9C6A3E')+R(x,b+8,w,3,'#A97446')}
var BOX={tan:['#C9A06A','#B68C57','#DDC18D'],lt:['#D5B07A','#C29C66','#E6CB9C'],wh:['#E7E3D9','#CCC7BB','#F3F0EA']};
function lbl(x,y){return R(x,y,13,8.4,'#F7F5EF')+R(x+2,y+2,9,1.2,'#5B5F64')+R(x+2,y+4.6,6,1.2,'#A3A7AB')}
function boxes(x,y,w,h,cols,rows,k,o){o=o||{};var c=BOX[k],s='',bw=w/cols,bh=h/rows;
  for(var j=0;j<rows;j++)for(var i=0;i<cols;i++){var bx=x+i*bw,by=y+j*bh;
    s+=R(bx+.6,by+.6,bw-1.2,bh-1.2,c[0])+R(bx+bw-5.2,by+.6,4.6,bh-1.2,c[1]);
    if(k==='wh')s+=R(bx+.6,by+bh*.58,bw-5.8,3,'#5878A0');
    else s+=R(bx+bw/2-1.7,by+.6,3.4,Math.min(10,bh*.3),c[2]);
    if((i+j*cols+(o.seed||0))%3===0)s+=lbl(bx+4,by+bh-12.5)}
  s+=R(x,y,w,3.5,SH,'opacity=".16"');
  if(o.wrap)s+=R(x,y,w,h,'#fff','opacity=".14"')+P('M'+(x+w*.2)+' '+y+'h'+(w*.1)+'l'+(-w*.14)+' '+h+'h'+(-w*.1)+'zM'+(x+w*.62)+' '+y+'h'+(w*.05)+'l'+(-w*.14)+' '+h+'h'+(-w*.05)+'z','#fff','opacity=".2"')+R(x,y+h*.34,w,.9,'#fff','opacity=".35"')+R(x,y+h*.7,w,.9,'#fff','opacity=".3"');
  return s}
function beam(x,y,w){return R(x,y,w,9,'#E0711C')+R(x,y,w,1.6,'#EF8F45')+R(x,y+7,w,2,'#B45913')}
function bcode(x,y){var s=R(x,y,22,6,'#F7F5EF');for(var i=0;i<9;i++)s+=R(x+2+i*1.6,y+1.2,i%3?.6:1,3.6,'#2B2F33');return s}
function upright(x){return R(x,30,12,342,'#2F5D8C')+R(x,30,3,342,'#4875A5')+R(x+10,30,2,342,'#244B73')+L('M'+(x+6.5)+' 35V366','#1D4067',2.2,'stroke-dasharray="4 5"')+R(x-3,368,18,4,'#25292D')}
function guard(x){return R(x-4,336,20,32,'url(#hz-hs)')+R(x-4,334,20,2.6,'#2B2F33')}
/* free-standing cardboard: front, a sliver of top, shade on the right */
function box3(x,y,w,h,o){o=o||{};return (o.top?'':R(x-1,y+h-1,w+7,4,SH,'opacity=".16"'))+P('M'+x+' '+y+'l5-4.6h'+w+'l-5 4.6z','#DDBE88')+R(x,y,w,h,'#C99F68')+R(x+w-6,y,6,h,'#B38853')+
  R(x+w/2-2.2,y,4.4,h*.32,'#E1C690')+P('M'+(x+w/2-2.2)+' '+y+'l5-4.6h4.4l-5 4.6z','#E8D2A3')+(o.l?lbl(x+5,y+h-14):'')+(o.up?L('M'+(x+9)+' '+(y+20)+'v-9m-3 3 3-3 3 3M'+(x+17)+' '+(y+20)+'v-9m-3 3 3-3 3 3','#7A5A33',1.4,'stroke-linecap="round" stroke-linejoin="round"'):'')}
function crate(x,y,w,h){var s=R(x,y,w,h,'#4E5A66','rx="2"')+R(x,y,w,4.2,'#66737F','rx="1.6"')+R(x+w-5,y+4,5,h-4,'#434E59')+R(x+w/2-8,y+8,16,5.4,'#262C33','rx="2.7"');
  for(var i=x+7;i<x+w-6;i+=7)s+=R(i,y+17,1.6,h-21,'#434E59');return s}

/* people: faceless, flat, lit from the left. Origin at the feet, 1 unit ≈ 1.35 cm */
function reacher(){var sk='#D9A27E',shirt='#394150',v='#EE8A2E',vs='#D2731C',rf='#E3E6E9';
  return P('M-12 -7h10.5V0H-14a1.6 1.6 0 0 1-1.6-1.6c0-3 1.4-5.4 3.6-5.4z','#1E2125')+P('M1.5 -7H12c2.2 0 3.6 2.4 3.6 5.4A1.6 1.6 0 0 1 14 0H1.5z','#1E2125')+
    P('M-11.6 -63H-.6l-.4 56.4h-10z','#2C3A50')+P('M.6 -63h11l-.5 56.4H1z','#2C3A50')+P('M8 -63h3.6l-.5 56.4H7.6z','#243046')+
    R(-11.3,-27,10.3,3,rf)+R(1,-27,10.6,3,rf)+R(-12,-65,24,6,'#243046','rx="2"')+
    P('M-11.6 -100c-4 .6-6.6 3.4-7.2 7.2l-2.6 22.4h7.4l2.4-19.6z',shirt)+P('M-21.4 -71.4h7.4l-.6 3.6c-.4 2.6-2 4.4-3.6 4.4s-3.4-1.8-3.4-4.4z','#59616C')+
    P('M-13 -101.5h26c1 0 1.6.8 1.6 1.8L15.2 -63h-30.4l.6-36.7c0-1 .6-1.8 1.6-1.8z',shirt)+
    P('M-13.2 -100.5h26.4l1.4 37.6h-29.2z',v)+P('M9 -100.5h3.8l1.4 37.6h-4.2z',vs)+
    R(-14.2,-86,28.8,3.6,rf)+R(-14.4,-75.6,29.2,3.6,rf)+R(-9,-100.5,3.6,14.5,rf)+R(5.4,-100.5,3.6,14.5,rf)+
    P('M5.2 -100.8c3.4-3 9.4-2.6 11.2 1.4l1.6 -30.6-8.4-.6z',shirt)+P('M9.6 -130.8l8.4.4 3.4 -26.8-8-1.2z',shirt)+P('M13 -151.6l8 1.2-.5 3.4-8-1.2z','#2B3240')+P('M12.8 -158.6c0-3.4 2.4-6.4 5.6-6.4 3 0 5 2.4 4.8 5.4l-.4 4.8-9.8-1.2z','#59616C')+
    R(-3.7,-109,7.4,9,'#BE8A66')+C(0,-117,9.4,'#3B2B22')+EL(-9.3,-116,1.8,2.8,sk)+EL(9.3,-116,1.8,2.8,sk)+
    P('M-11.8 -120.4a11.8 11.2 0 0 1 23.6 0z','#F0C232')+R(-13.6,-121.6,27.2,3.6,'#D8A920','rx="1.6"')+R(-1.6,-131.2,3.2,10,'#DDB026')+L('M-8.4 -124.4a8.4 8 0 0 1 4.4-5.4','#F8DC77',1.4,'stroke-linecap="round"')}
function walker(){var sk='#8A5A3C',shirt='#36404F',v='#DCD33B',vs='#BFB72B',rf='#E3E6E9';
  return P('M1.2 -63h10.4l7.4 55-9.8 1.4z','#243046')+P('M9 -9.6h9.6c2.2 0 3.6 2 3.6 4.6V0H9.4z','#1E2125')+R(12.2,-31,10,3,rf,'transform="rotate(-8 17 -29)"')+
    P('M-11.4 -63H-.4l-9.2 55.8-10.2-1.4z','#2C3A50')+P('M-21.4 -8.4h11.8V0H-25.2c0-4.8 1.4-8.4 3.8-8.4z','#1E2125')+R(-17,-31,10.4,3,rf,'transform="rotate(9 -12 -29)"')+
    P('M9.2 -98.6c2.6-1.6 5.4-.6 6.2 1.4l6.4 26.4-5.8 1.8z',shirt)+C(19.2,-67.4,3.7,sk)+
    R(-12.2,-66,24.4,6,'#243046','rx="2"')+
    P('M-13 -101.5h26c1 0 1.6.8 1.6 1.8L16 -62.5h-32l1.4-37.2c0-1 .6-1.8 1.6-1.8z',shirt)+
    P('M-13.2 -100.5H-3.2l-1.4 38.4H-15.8z',v)+P('M3.2 -100.5h10l2.6 38.4H4.6z',v)+P('M10 -100.5h3.2l2.6 38.4h-3.6z',vs)+
    R(-15.1,-86,11,3.5,rf)+R(4,-86,11.6,3.5,rf)+R(-15.5,-75.6,11.2,3.5,rf)+R(4.3,-75.6,12,3.5,rf)+R(-9.4,-100.5,3.4,14.5,rf)+R(6,-100.5,3.4,14.5,rf)+
    L('M-1 -101v12.6','#2F6DB0',1.2)+R(-3.4,-89,5,7,'#F4F4F1','rx=".8"')+R(-2.4,-87.6,3,1.2,'#2F6DB0')+
    P('M-12.6 -99.6c-3 1-4.6 3.2-5.2 5.8L-24.4 -72l5.6 2.4 7.2-22.2z',shirt)+
    G('rotate(-16 -23 -71)',R(-29.4,-79,8.6,15,'#2A2F35','rx="1.8"')+R(-28.2,-77.4,6.2,5.6,'#86A9C8','rx=".6"')+R(-26.6,-64.4,3,3,'#2A2F35'))+C(-22.2,-69.6,3.7,sk)+
    P('M6.2 -118c4.6 1.6 6 8 3.6 14.6-1-4.4-3-7.4-5.8-9.4z','#241914')+R(-3.7,-109,7.4,9,'#7B4E33')+C(0,-117,9.4,sk)+P('M-9.4 -117.6c0-5.4 3.6-9.2 8.6-9.6-2.6 2.6-3.8 5.8-4 9.6z','#241914')+
    P('M-11.8 -120.4a11.8 11.2 0 0 1 23.6 0z','#F3F3EF')+R(-13.6,-121.6,27.2,3.6,'#D6D6CF','rx="1.6"')+R(-1.6,-131.2,3.2,10,'#E2E2DC')+L('M-8.4 -124.4a8.4 8 0 0 1 4.4-5.4','#fff',1.4,'stroke-linecap="round"')}
function pict(f){return C(0,-31,5.2,f)+L('M.6 -23.4-2.6 -5.6M-2.6 -5.6-10 11M-2.6 -5.6 4.4 2.6l1.8 10.6M-.6 -19.2l8.4 7M-.6 -19.2-9.2 -12.6','#F1F1EC',5.4,'stroke-linecap="round" stroke-linejoin="round"')}

function scene(){var s='',x;
  /* wall, roof steel, high windows */
  s+=R(0,0,1000,362,'#E6E2D9');
  var sm='';for(x=488;x<1000;x+=44)sm+='M'+x+' 72V292';s+=L(sm,'#DDD8CE',1.2);
  s+=R(432,19,568,50,'#9AA4AB')+R(436,23,560,42,'#C4D1D8')+P('M472 23h30l-27 42h-30zM646 23h13l-27 42h-13zM818 23h30l-27 42h-30zM930 23h12l-27 42h-12z','#D4DEE4');
  var mu='';for(x=506;x<996;x+=70)mu+='M'+x+' 23V65';s+=L(mu,'#9AA4AB',3)+R(432,67,568,4,'#C9C3B8');
  s+=R(0,0,1000,12,'#8B9197')+R(0,12,1000,3.4,'#6F757C');
  function lamp(cx){return L('M'+cx+' 15V72','#5A6066',1.6)+P('M'+(cx-21)+' 88l6-15h30l6 15z','#3E4348')+P('M'+(cx-21)+' 88l6-15h5l-4 15z','#4C5257')+R(cx-22,87,44,2.6,'#2D3135')+EL(cx,90.2,16,2.4,'#FFF3D2')}
  s+=lamp(600)+lamp(812);
  s+=T(906,150,'BAY 4',38,'#3C4249','text-anchor="middle" font-weight="700" letter-spacing="3"')+T(906,170,'AISLE C &#183; RACKS 01&#8211;08',9.6,'#6E747B','text-anchor="middle" font-weight="600" letter-spacing="2"');
  /* lower wall band and skirting */
  s+=R(0,292,1000,70,'#D0CBC1')+R(0,292,1000,2.4,'#C2BDB2')+R(0,355,1000,7,'#BBB6AB');
  /* steel column with guard */
  s+=R(456,15,18,347,'#A7ADB3')+R(456,15,4,347,'#BCC2C7')+R(470,15,4,347,'#8E949A')+R(452,316,26,46,'url(#hz-hs)')+R(452,313.6,26,3,'#2B2F33');
  /* exit sign over the door (control) */
  s+=R(567,195,58,2.4,SH,'opacity=".1"')+R(565,165,62,30,'#F4F3EF','rx="2.2"')+R(568,168,56,24,'#1E8B4E','rx="1"')+
     R(603,171,14,18,'#fff')+R(605.2,173.2,9.6,15.8,'#1E8B4E')+C(590,173.6,2.2,'#fff')+
     L('M588.8 176.6 586 182.4M586 182.4l-3.8 4.8M586 182.4l3.6 2.2.6 3.8M588.4 178l4.4 1.6M588.4 178l-3.8.2-2.2 2.4','#fff',2,'stroke-linecap="round" stroke-linejoin="round"')+
     L('M572 180h6.4M572 180l2.6-2.6M572 180l2.6 2.6','#fff',1.6,'stroke-linecap="round" stroke-linejoin="round"');
  /* fire exit door */
  s+=G('','<g data-pt="e">'+R(538,198,114,164,'#8C979E')+R(545,205,100,157,'#C4CCD1')+R(545,205,4,157,'#D4DADE')+R(641,205,4,157,'#B0B9BF')+
     R(549,341,92,21,'#AEB7BD')+R(574,224,42,23,'#1E8B4E','rx="1.5"')+T(595,233.4,'FIRE EXIT',6.4,'#fff','text-anchor="middle" font-weight="700" letter-spacing=".5"')+T(595,242,'KEEP CLEAR',5,'#fff','text-anchor="middle" font-weight="600" letter-spacing=".5"')+
     R(552,283,86,7.4,'#DCE0E3','rx="3.2"')+R(552,283,86,2,'#F2F4F5','rx="1"')+R(551,281,7,11.4,'#6F7980','rx="1.4"')+R(632,281,7,11.4,'#6F7980','rx="1.4"')+
     R(545.4,222,3,11,'#7E8990')+R(545.4,318,3,11,'#7E8990')+'</g>');
  /* socket and the lead's run down the wall */
  s+=R(497,321,16,17,'#F3F1EB','rx="2"')+R(497.5,321.5,15,16,'none','rx="2" stroke="#C9C4B9" stroke-width="1"')+R(501,326,8,10,'#1E2226','rx="1.6"')+R(502.4,327.4,2,3,'#3C434A');
  /* fire point (control) */
  s+=R(664,206,38,130,'#F1EEE7')+R(664.5,206.5,37,129,'none','stroke="#D6D1C6" stroke-width="1"')+R(664,206,38,15,'#C8302A')+T(683,216.4,'FIRE POINT',5.8,'#fff','text-anchor="middle" font-weight="700" letter-spacing=".5"')+
     R(673,225,20,20,'#C8302A','rx="1"')+R(679.4,230,7.4,12,'#fff','rx="2.4"')+R(681.2,227.6,3.8,3,'#fff')+L('M684.6 228.6l3.2 1.8','#fff',1.3,'stroke-linecap="round"')+
     R(676,249,14,4,'#2A2E33','rx="1"')+R(678,251,10,8,'#2A2E33','rx="1.6"')+L('M680 251.4l-6.4-4','#2A2E33',2.4,'stroke-linecap="round"')+
     L('M688 256c6.4 2 8.4 8.6 7.2 18.6-.8 8-1.8 13.4.2 21.4','#1E2226',2.2,'stroke-linecap="round"')+R(693.6,294,4,8.6,'#1E2226','rx="1"')+
     R(674,258,18,58,'#C9302B','rx="6"')+R(677,263,3.2,48,'#E35147','rx="1.6"')+R(686.6,263,3.2,48,'#A42420','rx="1.6"')+
     R(674,277,18,15,'#F3EFE6')+R(674,277,18,3.6,'#1E2226')+R(677.4,284.4,11,1.4,'#7E8287')+R(677.4,288,7,1.4,'#B4B8BC')+C(691,253.6,2.7,'#F3F3F0','stroke="#2A2E33" stroke-width="1"')+R(674,311,18,4,'#A42420','rx="1.6"')+
     T(683,328,'CO&#8322; &#183; 5 kg',5,'#6E737A','text-anchor="middle" font-weight="600"');
  /* first aid (control) */
  s+=R(726,213,20,15,'#1E8B4E','rx="1"')+R(734.4,215.4,3.2,10.2,'#fff')+R(730.9,218.9,10.2,3.2,'#fff')+
     R(718,272,42,3,SH,'opacity=".1"')+R(730,233.6,12,4.4,'#1F6A40','rx="1.6"')+R(716,237,40,35,'#2C8A57','rx="2.4"')+P('M756 239.4l4 3.4v28.6l-4 .6z','#1F6A40')+R(716,245,40,2,'#237349')+R(716,237,40,1.6,'#3EA06A','rx="1"')+
     R(733.5,249,5,17,'#fff')+R(727.5,255,17,5,'#fff');
  /* floor: concrete, light pools, slab joints, tyre marks */
  s+=R(0,362,1000,198,'#B5B6B2')+EL(612,480,236,34,'#BABBB7')+EL(160,488,200,30,'#BABBB7');
  s+=R(0,362,1000,5,'#9E9F9B')+R(0,367,1000,9,'#AAABA7');
  s+=L('M0 414H1000M190 376 168 560M520 376l-4 184M852 376l26 184','#ADAEAA',1.4);
  s+=L('M560 548c90-16 200-22 300-14M574 556c90-16 200-22 300-14','#ABACA8',2.2,'stroke-linecap="round"');
  /* the pedestrian walkway */
  s+=R(0,436,1000,7,'#E0B324')+R(0,441.6,1000,1.4,'#C49A1A')+R(0,530,1000,7,'#E0B324')+R(0,535.6,1000,1.4,'#C49A1A');
  s+=G('translate(914 488) scale(.95 .58)',pict('#F1F1EC')+L('M-38 -14l-12 14 12 14M-58 -14l-12 14 12 14','#F1F1EC',5.4,'stroke-linecap="round" stroke-linejoin="round"'),'opacity=".85"');
  /* racking: two bays of rack C-04 */
  var rk=R(46,30,364,342,'#3A4046')+R(60,30,5,342,'#444A51')+R(236,30,5,342,'#444A51')+R(394,30,5,342,'#444A51');
  [276,184,92].forEach(function(y){rk+=R(46,y-8,364,4,'#6C3D19')});
  /* bay 1 */
  rk+=pallet(56,372,156)+boxes(56,304,156,57,3,2,'tan',{wrap:1,seed:0});
  rk+=pallet(56,276,156)+boxes(56,206,156,59,4,2,'wh',{seed:1});
  rk+='<g data-pt="e">'+pallet(56,184,156)+boxes(56,114,156,59,3,2,'tan',{wrap:1,seed:2})+'</g>';
  rk+=pallet(56,92,156)+boxes(56,36,156,45,3,1,'lt',{seed:1});
  /* bay 2 */
  rk+=pallet(244,372,156)+boxes(244,300,156,61,3,2,'lt',{wrap:1,seed:2});
  rk+=pallet(244,276,156)+boxes(244,210,156,55,3,2,'tan',{seed:0});
  rk+=pallet(244,184,156)+boxes(250,143,96,30,2,1,'tan',{seed:1})+boxes(262,113,48,30,1,1,'tan',{seed:2});
  /* the overhang: shoved past the end of the beam, tipping */
  rk+=G('rotate(3 422 92)',pallet(318,92,164)+boxes(318,40,164,41,3,1,'tan',{seed:1})+G('rotate(-5 448 40)',boxes(424,15,50,25,1,1,'lt',{seed:0})));
  [276,184,92].forEach(function(y){rk+=beam(46,y,176)+beam(234,y,176)});
  rk+=bcode(123,277.6)+bcode(311,277.6)+bcode(311,185.6)+bcode(123,93.6)+bcode(311,93.6)+R(98,185.6,30,6,'#F2C94C')+T(113,190.2,'1000 kg',4.6,'#2B2F33','text-anchor="middle" font-weight="700"')+bcode(140,185.6);
  rk+=upright(34)+upright(222)+upright(410)+guard(34)+guard(410);
  s+=R(28,372,400,7,SH,'opacity=".12"')+'<g data-pt="e">'+rk+'</g>';
  /* boxes dumped in front of the fire exit */
  s+=box3(538,318,58,54,{l:1})+box3(594,326,66,46,{up:1})+box3(612,302,34,24,{top:1})+G('rotate(-4 584 298)',box3(556,276,58,42,{l:1,top:1}));
  /* crates, and the worker standing on them */
  s+=EL(316,404,36,4.6,SH,'opacity=".18"')+crate(285,366,56,36)+G('rotate(-2.5 314 348)',P('M289 331l5-4.4h46l-5 4.4z','#6E7B87')+crate(289,331,46,35));
  s+=G('translate(314 328)',reacher());
  /* forklift FL-02, parked with the forks up */
  var fk=EL(898,433,108,7,SH,'opacity=".16"')+
    R(812,236,10,192,'#33383E')+R(824,236,10,192,'#2B3035')+R(813,236,3,192,'#474D54')+R(829,300,5,124,'#A9B0B7')+R(808,232,30,7,'#2B3035','rx="1.5"')+L('M818 244v54','#727980',1.6,'stroke-dasharray="2 1.6"')+
    R(797,264,3,34,'#2E3338')+R(803,264,3,34,'#2E3338')+R(797,262,14,3.4,'#2E3338')+R(800,292,13,42,'#2E3338','rx="1.5"')+
    P('M722 323.4 804 321.6v-3h4v13.4h-84.4z','#1F2327')+P('M716 325 800 323.4V296h8v38H718.4c-1.6 0-2.4-.8-2.4-2v-5z','#2A2E33')+L('M718 325.6 800 324','#4E555C',1.2)+
    L('M841 346 847 250M929 342 925 250','#2B2F34',5.4,'stroke-linecap="round"')+R(836,245,98,7,'#2B2F34','rx="2"')+R(921,236,12,9,'#F0A23A','rx="3"')+R(919,243,16,3,'#2B2F34')+
    P('M834 350 848 318h18l-6 32z','#C9931A')+L('M862 320 872 300','#22262A',3,'stroke-linecap="round"')+EL(874,298.6,9.4,2.6,'none','stroke="#22262A" stroke-width="2.6" transform="rotate(-18 874 298.6)"')+
    P('M896 348v-14.4c0-2.4 1.6-4 4-4h17c2.4 0 4 1.6 4 4V348z','#22262A')+P('M915 331v-25c0-2.4 1.6-4 4-4h3.6c2.4 0 4 1.6 4 4v25z','#22262A')+
    P('M828 348h112v-8h30c10 0 18 8 18 18v54c0 4.4-3.6 8-8 8H836c-4.4 0-8-3.6-8-8z','#D9A321')+R(828,348,112,4,'#E9BA43')+R(828,402,160,18,'#B98918')+
    P('M940 340h30c10 0 18 8 18 18v54c0 4.4-3.6 8-8 8h-40z','#3A3F45')+R(940,340,30,4,'#4F555C')+T(964,384,'FL-02',9,'#E8E9EA','text-anchor="middle" font-weight="700" letter-spacing=".6"')+R(985,352,3,9,'#C8302A')+
    P('M830 420a28 28 0 0 1 56 0z','#2A2D31')+P('M938 420a24 24 0 0 1 48 0z','#2A2D31')+R(886,410,40,6,'#2A2D31','rx="1.5"')+
    C(858,412,22,'#1E2125')+C(858,412,11,'#8E969D')+C(858,412,4.4,'#4A5158')+C(962,414,19,'#1E2125')+C(962,414,9.4,'#8E969D')+C(962,414,3.8,'#4A5158');
  s+='<g data-pt="e">'+fk+'</g>';
  /* the spill, with the racking reflected in it */
  var sp='M248 487c-4-9 9-15 24-17 13-2 20-8 38-8 17 0 22 6 38 6 15 0 33 4 32 13-1 9-17 11-31 15-15 4-24 10-46 10-19 0-28-5-40-8-9-2-12-5-15-11z';
  s+=P(sp,'#99A4AC')+'<g clip-path="url(#hz-spc)">'+P('M240 470c30-8 70-12 110-6 8 12 6 28-6 40-40 4-80 2-110-6z','#8794A0','opacity=".7"')+
     R(268,455,3.4,60,'#46698F','opacity=".32"')+R(304,455,5,60,'#46698F','opacity=".26"')+R(326,455,9,60,'#D9813F','opacity=".2"')+R(356,455,3.4,60,'#46698F','opacity=".28"')+
     P('M262 485c26-7 66-10 108-7-40 3-76 6-108 10z','#F1F5F7','opacity=".95"')+P('M306 497c14-2.4 30-3.4 46-2.6-15 1.6-30 3.2-46 5z','#F1F5F7','opacity=".7"')+EL(352,475,7,1.4,'#F1F5F7','opacity=".8"')+'</g>'+
     L('M252 480c8-6 20-9 34-10M330 464c10 1 20 4 30 5','#B9C3CA',1.4,'stroke-linecap="round"')+P(sp,'none','stroke="#86929B" stroke-width="1" opacity=".6"')+EL(394,500,6,2.4,'#99A4AC')+EL(238,476,4,1.8,'#99A4AC')+EL(406,492,2.6,1.2,'#99A4AC');
  s+=G('rotate(-8 392 476)',R(374,482,28,3,SH,'opacity=".18"')+R(376,470,26,11.4,'#3F7FB8','rx="4.4"')+R(376,470,26,3,'#5C97CC','rx="1.5"')+R(382,470,10,11.4,'#E8EEF3')+R(400,472.6,6.4,6,'#2F5F8C','rx="1.2"'));
  /* the lead: socket, down the wall, across the walkway to a fan */
  var cd='M505 336C505 352 503 360 500 370C494 390 466 394 474 414C482 434 524 440 514 466C504 490 460 490 468 514C474 532 494 540 476 548C468 552 458 553 452 552';
  s+=L(cd,SH,3.4,'opacity=".14" transform="translate(1.6 2.4)"')+L(cd,'#1F2327',3.4,'stroke-linecap="round"')+L(cd,'#59616A',1,'transform="translate(-.7 -.8)" stroke-linecap="round"');
  s+=EL(452,554,26,5.4,SH,'opacity=".16"')+EL(450,552,24,5.6,'#3F464D')+EL(450,550.6,24,4,'#4D555D')+R(447.6,478,5,73,'#59616A')+R(447.6,478,1.6,73,'#737B83')+R(443.6,475,13,7,'#4A5259','rx="2"')+
     C(450,450,29,'#59616A')+C(450,450,26,'#DDE1E3')+G('',EL(450,438,6,12,'#B5C0C8')+EL(450,438,6,12,'#B5C0C8','transform="rotate(120 450 450)"')+EL(450,438,6,12,'#B5C0C8','transform="rotate(240 450 450)"'))+
     C(450,450,13,'none','stroke="#8D969D" stroke-width=".9"')+C(450,450,20,'none','stroke="#8D969D" stroke-width=".9"')+L('M450 424v52M424 450h52M432 432l36 36M468 432l-36 36','#8D969D',.7)+C(450,450,6,'#59616A')+C(448.4,448.4,1.8,'#8D969D');
  /* the worker in the walkway, doing it right (control) */
  s+=EL(746,518,26,4.6,SH,'opacity=".17"')+G('translate(742 516) scale(1.15)',walker());
  return '<svg class="hz-svg" viewBox="0 0 1000 560" role="img" aria-label="Photo: warehouse bay 4, aisle C">'+
    '<defs><pattern id="hz-hs" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="9" height="9" fill="#E0B324"/><rect width="4.5" height="9" fill="#26292D"/></pattern><clipPath id="hz-spc"><path d="'+sp+'"/></clipPath></defs>'+
    '<g id="hz-scene">'+s+'</g></svg>'}

/* a crop of the same photo, for thumbnails */
function crop(x,y,w,h,ring){var vx=Math.max(0,Math.min(1000-w,x-w/2)),vy=Math.max(0,Math.min(560-h,y-h/2));
  return '<svg viewBox="'+vx.toFixed(1)+' '+vy.toFixed(1)+' '+w+' '+h+'" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#hz-scene"/>'+(ring?'<circle cx="'+x+'" cy="'+y+'" r="13" fill="none" stroke="#fff" stroke-width="5"/><circle cx="'+x+'" cy="'+y+'" r="13" fill="none" stroke="'+ring+'" stroke-width="3"/>':'')+'</svg>'}

/* ================= SiteCheck 3D site scan: Bay 4 as a low-poly digital twin (three.js r159, global THREE) ================= */
function Scan(o){
  var T=window.THREE;if(!T||!o.host)return null;
  var R;try{R=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'})}catch(e){return null}
  if(!R||!R.getContext())return null;
  var host=o.host,PH=o.narrow(),RM=!!o.rm,L=o.listen,alive=true,raf=0,last=0,need=true,held=false,W=1,H=1;
  R.setPixelRatio(Math.min(2,window.devicePixelRatio||1));R.setClearColor(0xECEBE7,0);R.shadowMap.enabled=true;R.shadowMap.type=T.PCFSoftShadowMap;
  var cvs=R.domElement;cvs.className='hz-gl';cvs.setAttribute('aria-hidden','true');host.insertBefore(cvs,host.firstChild);
  var scene=new T.Scene(),cam=new T.PerspectiveCamera(32,1.8,.1,140),KEEP=[],TEXT=[],G={},ANC={},BOX={},RBOX={},PINS=[],FX=[],REV=[];
  scene.fog=new T.Fog(0xE9E8E4,26,62);cam.layers.enable(1);
  function keep(x){KEEP.push(x);return x}
  function lay1(ob){ob.traverse(function(x){x.layers.set(1)});return ob}
  function cl(v,a,b){return Math.max(a,Math.min(b,v))}
  /* ---------- materials, geometry, canvas textures ---------- */
  var MC={};function mat(c,r,m,e,ei){var k=[c,r,m,e,ei].join('|');if(MC[k])return MC[k];var p={color:c,roughness:r==null?.8:r,metalness:m||0};if(e){p.emissive=e;p.emissiveIntensity=ei==null?1:ei}return MC[k]=keep(new T.MeshStandardMaterial(p))}
  var GC={};function geo(k,f){return GC[k]||(GC[k]=keep(f()))}
  var UB=geo('ub',function(){return new T.BoxGeometry(1,1,1)}),UP=geo('up',function(){return new T.PlaneGeometry(1,1)});
  function cyl(a,b,h,s){return geo('c'+[a,b,h,s].join('_'),function(){return new T.CylinderGeometry(a,b,h,s||14)})}
  function sph(r,a,b,ps,pl,ts,tl){return geo('s'+[r,a,b,ps,pl,ts,tl].join('_'),function(){return new T.SphereGeometry(r,a||18,b||12,ps,pl,ts,tl)})}
  function tor(r,t){return geo('t'+r+'_'+t,function(){return new T.TorusGeometry(r,t,8,44)})}
  function M(g,m,par,x,y,z,cast){var me=new T.Mesh(g,m);me.position.set(x||0,y||0,z||0);me.castShadow=cast!==0;me.receiveShadow=true;if(par)par.add(me);return me}
  function B(par,w,h,d,m,x,y,z,q){var me=M(UB,m,par,x,y,z,q&&q.ns?0:1);me.scale.set(w,h,d);if(q){if(q.rx)me.rotation.x=q.rx;if(q.ry)me.rotation.y=q.ry;if(q.rz)me.rotation.z=q.rz}return me}
  function PL(par,w,h,m,x,y,z,q){var me=M(UP,m,par,x,y,z,0);me.scale.set(w,h,1);if(q){if(q.flat)me.rotation.x=-Math.PI/2;if(q.ry)me.rotation.y=q.ry}return me}
  function grp(id,par){var g=new T.Group();if(id){g.userData.hid=id;G[id]=g}(par||scene).add(g);return g}
  var HIDE=keep(new T.MeshBasicMaterial({visible:false}));
  function proxy(g,ge,x,y,z,s){var me=new T.Mesh(ge,HIDE);me.position.set(x,y,z);if(s)me.scale.set(s[0],s[1],s[2]);me.userData.proxy=1;g.add(me);return me}
  var MAXA=Math.min(8,R.capabilities.getMaxAnisotropy()),F='Geist,Arial,sans-serif';
  function ctex(w,h,draw,q){var c=document.createElement('canvas');c.width=w;c.height=h;var g=c.getContext('2d');draw(g,w,h);var t=keep(new T.CanvasTexture(c));t.colorSpace=T.SRGBColorSpace;t.anisotropy=MAXA;
    if(q&&q.rep){t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(q.rep[0],q.rep[1])}if(q&&q.text)TEXT.push({t:t,g:g,w:w,h:h,d:draw});return t}
  function tm(t,q){q=q||{};var p={map:t,roughness:q.r==null?.85:q.r,metalness:q.m||0};if(q.c)p.color=q.c;if(q.tr){p.transparent=true;p.depthWrite=false}
    if(q.em){p.emissive=0xffffff;p.emissiveMap=t;p.emissiveIntensity=q.em}if(q.pof){p.polygonOffset=true;p.polygonOffsetFactor=-2;p.polygonOffsetUnits=-2}return keep(new T.MeshStandardMaterial(p))}
  function rr(g,x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
  function runner(g,cx,cy,s,col,walk){g.save();g.translate(cx,cy);g.scale(s,s);g.strokeStyle=col;g.fillStyle=col;g.lineCap='round';g.lineJoin='round';g.lineWidth=5.4;
    g.beginPath();g.arc(walk?1:4,-21,4.8,0,7);g.fill();g.beginPath();
    if(walk){g.moveTo(0,-13);g.lineTo(-1,2);g.lineTo(-7,17);g.moveTo(-1,2);g.lineTo(6,17);g.moveTo(0,-10);g.lineTo(7,-1);g.moveTo(0,-10);g.lineTo(-6,-1)}
    else{g.moveTo(2,-13);g.lineTo(-3,1);g.lineTo(-11,14);g.moveTo(-3,1);g.lineTo(5,7);g.lineTo(6,18);g.moveTo(1,-10);g.lineTo(10,-5);g.moveTo(1,-10);g.lineTo(-8,-9);g.lineTo(-13,-3)}
    g.stroke();g.restore()}
  function edges(g,w,h,c){g.fillStyle=c;g.fillRect(0,0,w,2);g.fillRect(0,h-2,w,2);g.fillRect(0,0,2,h);g.fillRect(w-2,0,2,h)}
  var tCart=ctex(128,128,function(g,w,h){g.fillStyle='#DEDEDE';g.fillRect(0,0,w,h);g.fillStyle='#F7F7F7';g.fillRect(w/2-10,0,20,h*.34);edges(g,w,h,'#BFBFBF');g.fillStyle='#FFFFFF';g.fillRect(12,h-40,36,24);g.fillStyle='#6E6E6E';g.fillRect(17,h-34,25,3);g.fillRect(17,h-27,15,3)});
  var tProd=ctex(128,128,function(g,w,h){g.fillStyle='#F3F3F3';g.fillRect(0,0,w,h);g.fillStyle='#4C72A3';g.fillRect(0,h*.58,w,h*.12);edges(g,w,h,'#CDCDCD')});
  var tCrate=ctex(128,80,function(g,w,h){g.fillStyle='#4E5A66';g.fillRect(0,0,w,h);g.fillStyle='#66737F';g.fillRect(0,0,w,8);g.fillStyle='#434E59';for(var x=10;x<w-6;x+=12)g.fillRect(x,24,4,h-30);g.fillStyle='#252B32';rr(g,w/2-20,12,40,9,4.5);g.fill()});
  var tStripe=ctex(64,64,function(g,w,h){g.fillStyle='#E0B324';g.fillRect(0,0,w,h);g.fillStyle='#26292D';for(var i=-3;i<3;i++){g.beginPath();g.moveTo(i*32,0);g.lineTo(i*32+16,0);g.lineTo(i*32+80,h);g.lineTo(i*32+64,h);g.closePath();g.fill()}});
  var tFloor=ctex(512,512,function(g,w,h){g.fillStyle='#F1F1F1';g.fillRect(0,0,w,h);var s=11;function rn(){s=s*16807%2147483647;return s/2147483647}
    for(var i=0;i<3200;i++){g.fillStyle=rn()<.55?'rgba(0,0,0,.045)':'rgba(255,255,255,.4)';g.fillRect(rn()*w,rn()*h,1+rn()*2.4,1+rn()*2.4)}g.fillStyle='#D0D0D0';g.fillRect(0,0,w,3);g.fillRect(0,0,3,h)},{rep:[8.8,6.8]});
  var tWall=ctex(128,16,function(g,w,h){g.fillStyle='#FFFFFF';g.fillRect(0,0,w,h);g.fillStyle='#EEEBE5';g.fillRect(0,0,3,h)},{rep:[27,1]});
  var tExit=ctex(256,96,function(g,w,h){g.fillStyle='#1E8B4E';g.fillRect(0,0,w,h);g.strokeStyle='#fff';g.lineWidth=7;g.strokeRect(172,16,44,64);runner(g,140,52,1.5,'#fff');
    g.lineCap='round';g.lineJoin='round';g.lineWidth=6;g.beginPath();g.moveTo(34,48);g.lineTo(80,48);g.moveTo(34,48);g.lineTo(48,35);g.moveTo(34,48);g.lineTo(48,61);g.stroke()});
  var tDoor=ctex(256,128,function(g,w,h){g.fillStyle='#1E8B4E';g.fillRect(0,0,w,h);g.fillStyle='#fff';g.textAlign='center';g.font='700 50px '+F;g.fillText('FIRE EXIT',w/2,62);g.font='600 28px '+F;g.fillText('KEEP CLEAR',w/2,104)},{text:1});
  var tFP=ctex(128,400,function(g,w,h){g.fillStyle='#F1EEE7';g.fillRect(0,0,w,h);g.fillStyle='#C8302A';g.fillRect(0,0,w,50);g.fillStyle='#fff';g.textAlign='center';g.font='700 19px '+F;g.fillText('FIRE POINT',w/2,32);
    g.fillStyle='#C8302A';g.fillRect(29,66,70,70);g.fillStyle='#fff';rr(g,52,82,24,44,8);g.fill();g.fillRect(57,74,14,10);g.strokeStyle='#fff';g.lineWidth=4;g.lineCap='round';g.beginPath();g.moveTo(70,78);g.lineTo(84,86);g.stroke();
    g.fillStyle='#6E737A';g.font='600 15px '+F;g.fillText('CO₂ · 5 kg',w/2,382)},{text:1});
  var tAid=ctex(64,64,function(g,w,h){g.fillStyle='#1E8B4E';g.fillRect(0,0,w,h);g.fillStyle='#fff';g.fillRect(26,12,12,40);g.fillRect(12,26,40,12)});
  var tBay=ctex(512,200,function(g,w,h){g.clearRect(0,0,w,h);g.textAlign='center';g.fillStyle='#3C4249';g.font='700 128px '+F;g.fillText('BAY 4',w/2,124);g.fillStyle='#6E747B';g.font='600 25px '+F;g.fillText('AISLE C · RACKS 01–08',w/2,182)},{text:1});
  var tMark=ctex(256,128,function(g,w,h){g.clearRect(0,0,w,h);runner(g,176,66,2.2,'#F4F4F0',1);g.strokeStyle='#F4F4F0';g.lineWidth=10;g.lineCap='round';g.lineJoin='round';g.beginPath();g.moveTo(92,40);g.lineTo(64,64);g.lineTo(92,88);g.moveTo(54,40);g.lineTo(26,64);g.lineTo(54,88);g.stroke()});
  var tWin=ctex(1024,72,function(g,w,h){g.fillStyle='#C4D1D8';g.fillRect(0,0,w,h);g.fillStyle='#D6E0E5';for(var x=40;x<w;x+=170){g.beginPath();g.moveTo(x,0);g.lineTo(x+36,0);g.lineTo(x+6,h);g.lineTo(x-30,h);g.closePath();g.fill()}g.fillStyle='#9AA4AB';for(x=0;x<w;x+=80)g.fillRect(x,0,5,h);g.fillRect(0,0,w,5);g.fillRect(0,h-6,w,6)});
  var tFL=ctex(128,48,function(g,w,h){g.clearRect(0,0,w,h);g.fillStyle='#ECEDEE';g.textAlign='center';g.font='700 34px '+F;g.fillText('FL-02',w/2,36)},{text:1});
  var tCode=ctex(64,24,function(g,w,h){g.fillStyle='#F7F5EF';g.fillRect(0,0,w,h);g.fillStyle='#2B2F33';for(var i=0;i<14;i++)g.fillRect(5+i*3.8,4,i%3?1.2:2.2,h-8)});
  var tLoad=ctex(96,28,function(g,w,h){g.fillStyle='#F2C94C';g.fillRect(0,0,w,h);g.fillStyle='#2B2F33';g.textAlign='center';g.font='700 17px '+F;g.fillText('1000 kg',w/2,20)},{text:1});
  var tBlob=ctex(64,64,function(g,w,h){var gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(0,0,0,.55)');gr.addColorStop(.55,'rgba(0,0,0,.22)');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(0,0,w,h)});
  var blobM=keep(new T.MeshBasicMaterial({map:tBlob,color:0x000000,transparent:true,depthWrite:false,opacity:.5,polygonOffset:true,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));
  function blob(par,x,z,w,d,op){var b=PL(par,w,d,op?blobM.clone():blobM,x,.006,z,{flat:1});if(op){keep(b.material);b.material.opacity=op}b.userData.nb=1;b.renderOrder=1;lay1(b);return b}
  var CM={};function cart(c){return CM[c]||(CM[c]=tm(tCart,{c:c,r:.88}))}
  var prodM=tm(tProd,{r:.8}),wrapM=keep(new T.MeshStandardMaterial({color:0xffffff,transparent:true,opacity:.17,roughness:.16,metalness:0,depthWrite:false}));
  /* ---------- the room ---------- */
  var WZ=-4,dk=mat('#2D3237',.55,.3),dk2=mat('#3A3F45',.6,.2),white=mat('#F4F3EF',.5);
  PL(scene,44,34,tm(tFloor,{c:'#B8B9B5',r:.9}),0,0,5,{flat:1});
  var wallM=tm(tWall,{c:'#E6E2D9',r:.95});
  B(scene,32,9.6,.2,wallM,0,4.8,WZ-.1,{ns:1});B(scene,.2,9.6,11,wallM,-11.1,4.8,1.5,{ns:1});B(scene,.2,9.6,11,wallM,11.1,4.8,1.5,{ns:1});
  var dado=mat('#D0CBC1',.95);B(scene,32,1.25,.03,dado,0,.625,WZ+.01,{ns:1});B(scene,.03,1.25,11,dado,-10.99,.625,1.5,{ns:1});B(scene,.03,1.25,11,dado,10.99,.625,1.5,{ns:1});
  B(scene,32,.035,.05,mat('#C2BDB2',.9),0,1.25,WZ+.02,{ns:1});B(scene,32,.12,.05,mat('#B9B4A9',.9),0,.06,WZ+.02,{ns:1});
  PL(scene,13.5,1.0,tm(tWin,{em:.35,r:.4}),1.7,6.15,WZ+.012);B(scene,13.6,.06,.12,mat('#C9C3B8',.9),1.7,5.62,WZ+.06,{ns:1});
  B(scene,32,.45,.32,mat('#8B9197',.5,.4),0,8.7,WZ+.3,{ns:1});
  PL(scene,3.4,1.33,tm(tBay,{tr:1,r:.9}),5.0,4.55,WZ+.012);
  [[.9,-2.4],[4.1,-2.4]].forEach(function(p){M(cyl(.008,.008,3.6,6),mat('#5A6066',.6),scene,p[0],7.25,p[1],0);M(cyl(.17,.4,.26,24),mat('#3E4348',.45,.3),scene,p[0],5.32,p[1],0);
    var d=M(geo('disc',function(){return new T.CircleGeometry(.36,28)}),mat('#FFF4DA',.6,0,'#FFF0C8',1),scene,p[0],5.188,p[1],0);d.rotation.x=Math.PI/2});
  /* steel column with its guard */
  B(scene,.32,9.4,.32,mat('#A7ADB3',.5,.35),-1.75,4.7,WZ+.17);B(scene,.4,.95,.4,tm(tStripe,{r:.6}),-1.75,.475,WZ+.17);B(scene,.42,.04,.42,dk,-1.75,.97,WZ+.17);
  /* the walkway */
  var yel=mat('#E0B324',.6);[.55,2.65].forEach(function(z){B(scene,44,.006,.11,yel,0,.003,z,{ns:1})});
  var mk=PL(scene,1.7,.85,tm(tMark,{tr:1,r:.7,pof:1}),5.7,.005,1.6,{flat:1});mk.material.opacity=.88;
  /* ---------- racking C-04: blue uprights, orange beams ---------- */
  var IC=[],IW=[],IP=[],upM=mat('#2F5D8C',.48,.25),beamM=mat('#E0711C',.42,.15),UX=[-6.9,-4.75,-2.6],FZ=-2.75,BZ=-3.85,PZ=-3.3,LV=[0,1.3,2.55,3.8],b1=-5.825,b2=-3.675;
  var rack=grp(null);
  UX.forEach(function(x){[FZ,BZ].forEach(function(z){B(rack,.09,4.6,.07,upM,x,2.3,z);B(rack,.18,.02,.14,dk,x,.01,z,{ns:1})});
    [.35,1.9,3.45].forEach(function(y){B(rack,.035,.035,1.03,upM,x,y,(FZ+BZ)/2)});
    [[.35,1.9],[1.9,3.45]].forEach(function(p,i){var len=Math.hypot(p[1]-p[0],1.03);B(rack,.03,len,.03,upM,x,(p[0]+p[1])/2,(FZ+BZ)/2,{rx:(i?1:-1)*Math.atan2(1.03,p[1]-p[0])})})});
  [UX[0],UX[2]].forEach(function(x){B(rack,.22,.55,.22,tm(tStripe,{r:.6}),x,.275,FZ+.16);B(rack,.24,.03,.24,dk,x,.56,FZ+.16)});
  function put(tg,k,x,y,z,w,h,d,c,ry,rz){if(!tg){(k==='p'?IP:k==='w'?IW:IC).push([x,y,z,w,h,d,c,ry||0,rz||0]);return}
    return B(tg,w,h,d,k==='p'?mat(c,.85):k==='w'?prodM:cart(c),x,y,z,{ry:ry,rz:rz})}
  function palletAt(tg,x,yb,z){put(tg,'p',x,yb+.125,z,.95,.03,1.15,'#BC8752');[-1,0,1].forEach(function(k){put(tg,'p',x+k*.415,yb+.07,z,.11,.08,1.15,'#93623A')});put(tg,'p',x,yb+.015,z,.95,.03,1.15,'#A97446')}
  function shade(c,i){var n=parseInt(c.slice(1),16),f=[1,.955,1.035][i%3];return '#'+[16,8,0].map(function(s){return ('0'+Math.min(255,Math.round((n>>s&255)*f)).toString(16)).slice(-2)}).join('')}
  function loadAt(tg,x,yb,z,q){var cols=q.c||2,rows=q.r||2,h=q.h||.3,w=.92/cols,d=1.1/2,base=yb+.14,n=0,s=q.s||0;
    for(var r=0;r<rows;r++)for(var c=0;c<cols;c++)for(var e=0;e<2;e++){if(q.skip&&q.skip.indexOf(n++)>=0)continue;var j=((c*7+r*3+e*5+s)%5-2)*.006;
      put(tg,q.k||'c',x-.46+w*(c+.5)+j,base+h*(r+.5),z-.55+d*(e+.5),w-.014,h-.01,d-.014,shade(q.col||'#D2A771',c+r+e+s),j*2)}
    if(q.wrap)B(tg||rack,.945,h*rows+.02,1.12,wrapM,x,base+h*rows/2,z,{ns:1}).renderOrder=2}
  [b1-.5,b1+.5].forEach(function(x,i){palletAt(null,x,0,PZ);loadAt(null,x,0,PZ,{h:.31,col:'#D2A771',wrap:1,s:i})});
  [b1-.5,b1+.5].forEach(function(x,i){palletAt(null,x,LV[1],PZ);loadAt(null,x,LV[1],PZ,{k:'w',c:3,h:.27,col:'#FFFFFF',s:i})});
  var PC=grp('pallet');[b1-.5,b1+.5].forEach(function(x,i){palletAt(PC,x,LV[2],PZ);loadAt(PC,x,LV[2],PZ,{h:.3,col:'#CFA36C',wrap:1,s:i+1})});
  [b1-.5,b1+.5].forEach(function(x,i){palletAt(null,x,LV[3],PZ);loadAt(null,x,LV[3],PZ,{h:.27,col:'#DDB884',s:i+2})});
  [b2-.5,b2+.5].forEach(function(x,i){palletAt(null,x,0,PZ);loadAt(null,x,0,PZ,{h:.3,col:'#DDB884',wrap:1,s:i+1})});
  [b2-.5,b2+.5].forEach(function(x,i){palletAt(null,x,LV[1],PZ);loadAt(null,x,LV[1],PZ,{h:.3,col:'#D2A771',s:i})});
  palletAt(null,b2-.5,LV[2],PZ);loadAt(null,b2-.5,LV[2],PZ,{h:.29,col:'#CDA06A',skip:[2,3,6,7],s:1});palletAt(null,b2+.5,LV[2],PZ);loadAt(null,b2+.5,LV[2],PZ,{h:.29,col:'#D8B07A',r:1,skip:[0,2],s:2});
  palletAt(null,b2-.5,LV[3],PZ);loadAt(null,b2-.5,LV[3],PZ,{h:.27,col:'#D2A771',s:0});
  /* the overhang: shoved past the end of the beam, tipping */
  var OH=grp('overhang');OH.position.set(UX[2],LV[3],0);OH.rotation.z=-.085;palletAt(OH,.06,0,PZ);loadAt(OH,.06,0,PZ,{h:.27,col:'#D6AA70',s:1});B(OH,.42,.24,.5,cart('#DDB884'),.24,.14+.54+.12,PZ+.18,{ry:.14,rz:-.05});
  [0,1].forEach(function(bi){var xc=(UX[bi]+UX[bi+1])/2;LV.slice(1).forEach(function(y){[FZ,BZ].forEach(function(z){B(rack,2.06,.12,.055,beamM,xc,y-.06,z)});PL(rack,.22,.07,tm(tCode,{r:.6}),xc+.32,y-.06,FZ+.03)})});
  PL(rack,.28,.08,tm(tLoad,{r:.6}),b1-.5,LV[2]-.06,FZ+.03);
  function inst(list,m){if(!list.length)return;var im=new T.InstancedMesh(UB,m,list.length),d=new T.Object3D(),c=new T.Color();
    list.forEach(function(a,i){d.position.set(a[0],a[1],a[2]);d.scale.set(a[3],a[4],a[5]);d.rotation.set(0,a[7],a[8]);d.updateMatrix();im.setMatrixAt(i,d.matrix);im.setColorAt(i,c.set(a[6]))});
    im.castShadow=im.receiveShadow=true;rack.add(im)}
  inst(IC,tm(tCart,{r:.88}));inst(IW,tm(tProd,{r:.8}));inst(IP,mat('#FFFFFF',.85));
  ANC.pallet=new T.Vector3(b1,LV[2]+.5,FZ+.05);var LOC={overhang:[OH,new T.Vector3(.22,.42,FZ+.05)]};
  /* ---------- fire exit, exit sign, fire point, first aid ---------- */
  var dX=.3,EX=grp('exit'),fr=mat('#8C979E',.5,.3);
  B(EX,.09,2.2,.1,fr,dX-.545,1.1,WZ+.05);B(EX,.09,2.2,.1,fr,dX+.545,1.1,WZ+.05);B(EX,1.18,.09,.1,fr,dX,2.155,WZ+.05);B(EX,1.0,2.1,.05,mat('#C4CCD1',.45,.25),dX,1.05,WZ+.025);
  B(EX,.96,.24,.01,mat('#AEB7BD',.35,.45),dX,.13,WZ+.055);PL(EX,.44,.22,tm(tDoor,{r:.6}),dX,1.56,WZ+.052);
  M(cyl(.022,.022,.86,10),mat('#DCE0E3',.3,.6),EX,dX,1.0,WZ+.115).rotation.z=Math.PI/2;[-.43,.43].forEach(function(k){B(EX,.05,.09,.08,fr,dX+k,1.0,WZ+.08)});[1.75,.35].forEach(function(y){B(EX,.025,.13,.03,fr,dX-.5,y,WZ+.06)});
  B(EX,.62,.56,.5,cart('#CFA36A'),dX-.3,.28,-3.48,{ry:.04});B(EX,.66,.48,.52,cart('#D8B07A'),dX+.36,.24,-3.46,{ry:-.07});B(EX,.6,.44,.46,cart('#C99D64'),dX-.2,.78,-3.5,{ry:.16,rz:.03});B(EX,.36,.26,.36,cart('#DDB884'),dX+.42,.61,-3.42,{ry:-.2});
  blob(EX,dX,-3.4,1.9,1.0,.42);ANC.exit=new T.Vector3(dX-.05,.75,-3.22);
  var SG=grp('sign');B(SG,.66,.27,.07,white,dX,2.48,WZ+.035);PL(SG,.6,.215,tm(tExit,{em:.6,r:.5}),dX,2.48,WZ+.072);proxy(SG,UB,dX,2.48,WZ+.1,[.8,.4,.2]);ANC.sign=new T.Vector3(dX,2.48,WZ+.08);
  var EP=grp('ext'),red=mat('#C9302B',.28,.05);
  var bd=new T.Mesh(UB,[white,white,white,white,tm(tFP,{r:.7}),white]);bd.scale.set(.44,1.36,.02);bd.position.set(1.45,1.55,WZ+.01);bd.receiveShadow=true;EP.add(bd);
  B(EP,.14,.04,.07,dk,1.45,1.33,WZ+.055);M(cyl(.085,.085,.48,20),red,EP,1.45,1.06,WZ+.12);M(sph(.085,20,10,0,Math.PI*2,0,Math.PI/2),red,EP,1.45,1.3,WZ+.12);
  M(cyl(.087,.087,.13,20),mat('#F3EFE6',.6),EP,1.45,1.0,WZ+.12);M(cyl(.088,.088,.03,20),dk,EP,1.45,1.08,WZ+.12);B(EP,.06,.08,.06,dk,1.45,1.42,WZ+.12);B(EP,.13,.018,.03,dk,1.41,1.47,WZ+.12,{rz:.35});
  M(cyl(.026,.026,.02,14),mat('#F3F3F0',.4),EP,1.485,1.43,WZ+.155).rotation.x=Math.PI/2;
  M(keep(new T.TubeGeometry(new T.CatmullRomCurve3([new T.Vector3(1.47,1.4,WZ+.13),new T.Vector3(1.56,1.34,WZ+.16),new T.Vector3(1.58,1.14,WZ+.16),new T.Vector3(1.56,.93,WZ+.15)]),24,.012,6)),dk,EP,0,0,0);
  M(cyl(.016,.012,.08,8),dk,EP,1.56,.89,WZ+.15);proxy(EP,UB,1.45,1.55,WZ+.15,[.52,1.45,.3]);ANC.ext=new T.Vector3(1.45,1.1,WZ+.21);
  var AD=grp('aid');PL(AD,.2,.2,tm(tAid,{r:.6}),2.2,2.02,WZ+.012);B(AD,.44,.36,.17,mat('#2C8A57',.5),2.2,1.6,WZ+.085);B(AD,.445,.018,.175,mat('#237349',.6),2.2,1.7,WZ+.085);
  B(AD,.075,.24,.006,mat('#FFFFFF',.6),2.2,1.58,WZ+.172);B(AD,.24,.075,.006,mat('#FFFFFF',.6),2.2,1.58,WZ+.172);B(AD,.14,.035,.05,mat('#1F6A40',.6),2.2,1.795,WZ+.085);
  proxy(AD,UB,2.2,1.72,WZ+.14,[.58,.72,.3]);ANC.aid=new T.Vector3(2.2,1.62,WZ+.18);
  /* ---------- the lead: socket, down the wall, across the walkway to a pedestal fan ---------- */
  var CB=grp('cable');B(CB,.1,.1,.02,mat('#F3F1EB',.5),-1.0,.36,WZ+.01);B(CB,.05,.06,.05,dk,-1.0,.36,WZ+.04);
  var curve=new T.CatmullRomCurve3([[-1.0,.33,WZ+.06],[-1.0,.12,WZ+.07],[-1.03,.02,WZ+.3],[-1.32,.018,-3.25],[-1.62,.018,-2.3],[-.95,.018,-1.45],[-.72,.018,-.55],[-1.3,.018,.3],[-1.08,.018,1.2],[-.62,.018,1.95],[-1.02,.018,2.75],[-1.12,.018,3.12],[-1.2,.03,3.3]].map(function(a){return new T.Vector3(a[0],a[1],a[2])}));
  M(keep(new T.TubeGeometry(curve,240,.021,7,false)),mat('#1D2125',.5),CB,0,0,0);proxy(CB,keep(new T.TubeGeometry(curve,90,.13,5,false)),0,0,0);
  var FN=new T.Group();FN.position.set(-1.22,0,3.48);FN.rotation.y=.32;CB.add(FN);var fg=mat('#59616A',.5,.4),fl2=mat('#8D969D',.35,.55),bl=mat('#B9C3CA',.45,.1);
  M(cyl(.24,.26,.04,26),fg,FN,0,.02,0);M(cyl(.02,.02,1.0,10),fl2,FN,0,.54,0);M(cyl(.075,.075,.15,16),fg,FN,0,1.11,-.08).rotation.x=Math.PI/2;
  var fh=new T.Group();fh.position.set(0,1.12,0);FN.add(fh);M(tor(.3,.014),fl2,fh,0,0,0);M(tor(.2,.006),fl2,fh,0,0,.006);M(tor(.11,.006),fl2,fh,0,0,.01);
  [0,1,2,3].forEach(function(i){B(fh,.6,.008,.008,fl2,0,0,.012,{rz:i*Math.PI/4})});[0,1,2].forEach(function(i){var p=new T.Group();p.rotation.z=i*2.094+.3;fh.add(p);M(sph(1,14,10),bl,p,0,.14,-.012).scale.set(.085,.15,.012)});
  M(sph(.05,14,10),fg,fh,0,0,.01);proxy(CB,cyl(.38,.38,1.5,8),-1.22,.75,3.48);blob(CB,-1.22,3.48,.9,.9,.4);
  var cb=null;for(var ci=0;ci<=200;ci++){var cq=curve.getPointAt(ci/200);if(!cb||Math.abs(cq.z-1.55)<Math.abs(cb.z-1.55))cb=cq}ANC.cable=cb.clone().setY(.03);RBOX.cable=new T.Box3(new T.Vector3(-1.75,0,-.4),new T.Vector3(-.4,1.48,3.85));
  /* ---------- the spill, reflecting the bay ---------- */
  var SP=grp('spill'),sx=-3.95,sz=1.62,shp=new T.Shape(),N=40;
  for(var i=0;i<=N;i++){var a=i/N*Math.PI*2,k=1+.16*Math.sin(3*a+1)+.09*Math.sin(5*a+2)+.05*Math.sin(9*a),px=Math.cos(a)*1.1*k,py=Math.sin(a)*.5*k;if(i)shp.lineTo(px,py);else shp.moveTo(px,py)}
  var sg=keep(new T.ShapeGeometry(shp,3)),wetM=keep(new T.MeshStandardMaterial({color:'#9A9C98',roughness:.45,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));
  var puddleM=keep(new T.MeshStandardMaterial({color:'#5C6973',roughness:.03,metalness:.4,polygonOffset:true,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));
  var wet=M(sg,wetM,SP,sx,.002,sz,0);wet.rotation.x=-Math.PI/2;wet.scale.set(1.13,1.2,1);var pud=M(sg,puddleM,SP,sx,.004,sz,0);pud.rotation.x=-Math.PI/2;
  [[1.22,.26,.08],[-1.26,-.12,.06],[1.4,-.14,.035]].forEach(function(d){var c=M(geo('dr',function(){return new T.CircleGeometry(1,18)}),puddleM,SP,sx+d[0],.004,sz+d[1],0);c.rotation.x=-Math.PI/2;c.scale.set(d[2]*1.5,d[2],1)});
  var BT=new T.Group();BT.position.set(sx+1.2,.046,sz+.06);BT.rotation.y=.5;SP.add(BT);var bt=mat('#3F7FB8',.3,.05);
  M(cyl(.046,.046,.22,16),bt,BT,0,0,0).rotation.z=Math.PI/2;M(cyl(.047,.047,.085,16),mat('#E8EEF3',.6),BT,-.01,0,0).rotation.z=Math.PI/2;M(cyl(.022,.03,.05,12),bt,BT,.135,0,0).rotation.z=Math.PI/2;
  M(cyl(.024,.024,.03,12),mat('#2F5F8C',.4),SP,sx+1.46,.015,sz-.05);proxy(SP,UB,sx,.05,sz,[2.6,.12,1.25]);ANC.spill=new T.Vector3(sx,.01,sz);
  /* ---------- people: faceless, flat-shaded, in PPE ---------- */
  function person(q){var g=new T.Group(),tr=mat('#2C3A50',.88),sh=mat('#36404F',.88),vs=mat(q.vest,.62),rf=mat('#E2E5E8',.3,.25),sk=mat(q.skin,.7),hr=mat(q.hair,.9),bo=mat('#1E2125',.6),gl=mat('#59616C',.85),ht=mat(q.hat,.36);
    function leg(x,a){var p=new T.Group();p.position.set(x,.9,0);p.rotation.x=a;g.add(p);M(cyl(.074,.064,.82,10),tr,p,0,-.41,0);M(cyl(.071,.068,.045,10),rf,p,0,-.6,0);B(p,.12,.085,.25,bo,0,-.858,.045);return p}
    function arm(x,sa,sz2,ea){var s=new T.Group();s.position.set(x,1.42,0);s.rotation.x=sa;s.rotation.z=sz2;g.add(s);M(cyl(.05,.045,.3,10),sh,s,0,-.15,0);
      var e=new T.Group();e.position.y=-.3;e.rotation.x=ea;s.add(e);M(cyl(.045,.04,.27,10),sh,e,0,-.135,0);M(sph(.05,12,10),gl,e,0,-.29,0);return e}
    leg(-.1,q.l||0);leg(.1,q.r||0);B(g,.34,.14,.21,tr,0,.92,0);
    M(cyl(.185,.16,.55,16),sh,g,0,1.2,0).scale.z=.62;M(cyl(.195,.172,.47,16),vs,g,0,1.205,0).scale.z=.66;
    [1.1,1.2].forEach(function(y){M(cyl(.198,.19,.036,16),rf,g,0,y,0).scale.z=.67});[-.09,.09].forEach(function(x){B(g,.042,.2,.275,rf,x,1.36,0)});
    M(cyl(.05,.055,.1,10),sk,g,0,1.5,0);M(sph(.106,18,14),sk,g,0,1.6,0);M(sph(.11,18,12,Math.PI,Math.PI,0,2.1),hr,g,0,1.6,0);
    M(sph(.122,20,8,0,Math.PI*2,0,Math.PI/2),ht,g,0,1.64,0);M(cyl(.152,.152,.014,22),ht,g,0,1.645,0);B(g,.026,.03,.25,ht,0,1.765,0);
    return {g:g,aL:arm(.24,q.al||0,q.alz||.08,q.ael||0),aR:arm(-.24,q.ar||0,q.arz||-.08,q.aer||0)}}
  var CR=grp('crates'),crM=tm(tCrate,{r:.7});B(CR,.62,.34,.42,crM,-3.9,.17,-2.5);B(CR,.58,.34,.4,crM,-3.88,.51,-2.52,{ry:.12});blob(CR,-3.9,-2.5,1.1,.85,.5);
  var wk=person({vest:'#EE8A2E',hat:'#F0C232',skin:'#D9A27E',hair:'#3B2B22',ar:-2.72,arz:-.12,aer:-.28,al:.12,alz:.1});wk.g.position.set(-3.88,.68,-2.52);wk.g.rotation.y=Math.PI;CR.add(wk.g);proxy(CR,cyl(.32,.32,2.15,10),-3.88,1.75,-2.5);ANC.crates=new T.Vector3(-3.88,1.85,-2.42);
  var WK=grp('walker'),wl=person({vest:'#DCD33B',hat:'#F3F3EF',skin:'#8A5A3C',hair:'#241914',l:-.34,r:.3,ar:-.42,aer:-.6,al:.32,arz:-.06,alz:.06});
  wl.g.position.set(2.6,0,1.55);wl.g.rotation.y=-1.1;WK.add(wl.g);B(wl.aR,.07,.13,.035,mat('#2A2F35',.4,.2),0,-.32,.045);M(sph(.05,10,8),mat('#241914',.9),wl.g,0,1.56,-.13).scale.set(1,1.7,1);
  blob(WK,2.62,1.55,.85,.6,.5);proxy(WK,cyl(.34,.34,1.85,10),2.6,.92,1.55);ANC.walker=new T.Vector3(2.6,1.25,1.6);
  /* ---------- forklift FL-02, parked with the forks up ---------- */
  var FK=grp('forks'),yl=mat('#D9A321',.4,.1),tire=mat('#1C1F23',.9),rim=mat('#8E969D',.4,.5),seat=mat('#22262A',.7),fork=mat('#26292D',.45,.45),LF=1.15;
  FK.position.set(4.95,0,-1.95);FK.rotation.y=.1;
  B(FK,1.95,.5,1.08,yl,.32,.55,0);B(FK,1.95,.14,1.1,dk,.32,.27,0);B(FK,.5,1.0,1.12,dk2,1.17,.62,0);B(FK,.5,.06,1.12,mat('#4C535A',.5,.2),1.17,1.15,0);
  B(FK,.8,.2,.98,yl,.6,.9,0);B(FK,.26,.46,.92,yl,-.42,1.03,0,{rz:-.18});B(FK,.4,.1,.44,seat,.55,1.05,0);B(FK,.08,.42,.44,seat,.78,1.28,0,{rz:.12});
  M(cyl(.022,.022,.42,8),dk,FK,-.3,1.3,0).rotation.z=.45;var sw=M(tor(.14,.018),dk,FK,-.2,1.5,0);sw.rotation.set(Math.PI/2,0,.45);
  [[-.42,.3,.5],[1.0,.25,.47]].forEach(function(w){[-1,1].forEach(function(s){M(cyl(w[1],w[1],.22,22),tire,FK,w[0],w[1],s*w[2]).rotation.x=Math.PI/2;M(cyl(w[1]*.56,w[1]*.56,.226,16),rim,FK,w[0],w[1],s*w[2]).rotation.x=Math.PI/2})});
  [-.34,.34].forEach(function(z){B(FK,.08,2.4,.12,dk,-.8,1.22,z)});B(FK,.1,.08,.8,dk,-.8,2.42,0);B(FK,.1,.06,.8,dk,-.8,.4,0);M(cyl(.035,.035,1.5,10),mat('#B5BCC2',.25,.85),FK,-.74,.95,0);
  B(FK,.06,.42,.94,dk,-.88,LF+.21,0);[-.42,-.14,.14,.42].forEach(function(z){B(FK,.03,.55,.03,dk,-.89,LF+.69,z)});B(FK,.03,.035,.92,dk,-.89,LF+.96,0);
  [-.3,.3].forEach(function(z){B(FK,1.15,.05,.12,fork,-1.47,LF+.025,z);B(FK,.05,.46,.12,fork,-.9,LF+.23,z)});
  [[-.46,.8],[1.0,1.1]].forEach(function(p){[-.48,.48].forEach(function(z){var len=2.18-p[1];M(cyl(.034,.034,len,8),dk,FK,p[0],p[1]+len/2,z)})});
  [-.48,.48].forEach(function(z){B(FK,1.56,.05,.06,dk,.27,2.2,z)});[-.4,-.05,.3,.65,.95].forEach(function(x){B(FK,.05,.04,.96,dk,x,2.2,0)});
  M(cyl(.05,.055,.09,14),mat('#F0A23A',.4,0,'#F0A23A',.7),FK,.85,2.27,.3);B(FK,.03,.08,.08,mat('#C8302A',.4,0,'#C8302A',.5),1.43,.95,.42);B(FK,.03,.08,.08,mat('#C8302A',.4,0,'#C8302A',.5),1.43,.95,-.42);
  PL(FK,.55,.2,tm(tFL,{tr:1,r:.5}),1.17,.74,.562);blob(FK,.25,0,3.4,1.7,.55);proxy(FK,UB,.48,1.12,0,[1.96,2.25,1.14]);proxy(FK,UB,-1.42,LF+.28,0,[1.3,.75,.85]);
  LOC.forks=[FK,new T.Vector3(-1.62,LF+.05,.12)];
  /* ---------- light: sky fill plus one soft sun ---------- */
  scene.add(new T.HemisphereLight(0xFFFFFF,0xB9B2A6,1.45));
  var sun=new T.DirectionalLight(0xFFF5E8,2.15);sun.position.set(-5.5,11,7.5);sun.target.position.set(-.5,0,-1.5);scene.add(sun,sun.target);
  sun.castShadow=true;var ss=PH?1024:2048;sun.shadow.mapSize.set(ss,ss);var sc=sun.shadow.camera;sc.left=-10;sc.right=10;sc.top=8;sc.bottom=-7;sc.near=1;sc.far=36;sc.layers.enable(1);sun.shadow.bias=-.0004;sun.shadow.normalBias=.03;
  var fill=new T.DirectionalLight(0xE8EEF5,.45);fill.position.set(8,4,9);scene.add(fill);
  /* the puddle reflects the bay: a prefiltered environment captured from just above it */
  var env=null;try{var pm=new T.PMREMGenerator(R);scene.position.set(-sx,-.35,-sz);scene.updateMatrixWorld(true);env=pm.fromScene(scene,.02,.1,70);scene.position.set(0,0,0);pm.dispose();puddleM.envMap=env.texture;puddleM.envMapIntensity=1.15;puddleM.needsUpdate=true}catch(e){scene.position.set(0,0,0)}
  scene.updateMatrixWorld(true);Object.keys(LOC).forEach(function(id){ANC[id]=LOC[id][0].localToWorld(LOC[id][1].clone())});
  var tb=new T.Box3();Object.keys(G).forEach(function(id){var b=new T.Box3();G[id].traverse(function(x){if((x.isMesh||x.isInstancedMesh)&&!x.userData.proxy&&!x.userData.nb){tb.setFromObject(x);b.union(tb)}});BOX[id]=b});
  /* ---------- camera rig: orbit with limits, springs, pointer parallax ---------- */
  var DEF={th:.2,ph:1.3,x:-.45,y:1.7,z:-1.45},LIM={th:[-.62,.62],ph:[.98,1.44]},KEYS=['th','ph','r','x','y','z'],zf=1,fitR=14,mode='soft',SPR={drag:[520,44],soft:[70,11.7],slow:[22,8.4]};
  var cur={th:DEF.th,ph:DEF.ph,r:fitR,x:DEF.x,y:DEF.y,z:DEF.z},tgt={},vel={},par={th:0,ph:0},ptg={th:0,ph:0},pvl={th:0,ph:0};
  KEYS.forEach(function(k){tgt[k]=cur[k];vel[k]=0});
  if(!RM){cur.th=tgt.th=DEF.th+.3;cur.ph=tgt.ph=DEF.ph-.12;zf=1.12}
  function fit(){var a=W/H,tv=Math.tan(cam.fov*Math.PI/360),wid=a<1.25?9.4:14.4;return Math.max(wid/2/(tv*a),3.5/tv)+1.2}
  function updCam(){var th=cur.th+par.th,ph=cur.ph+par.ph,r=cur.r;cam.position.set(cur.x+r*Math.sin(ph)*Math.sin(th),cur.y+r*Math.cos(ph),cur.z+r*Math.sin(ph)*Math.cos(th));cam.lookAt(cur.x,cur.y,cur.z);cam.updateMatrixWorld()}
  function rub(v,l){return v<l[0]?l[0]-(l[0]-v)*.28:v>l[1]?l[1]+(v-l[1])*.28:v}
  function setZoom(z,live){zf=cl(z,.42,1.25);tgt.r=fitR*zf;mode=live?'drag':'soft';kick();if(o.zoomed)o.zoomed(Math.round(100/zf))}
  function size(){var w=host.clientWidth,h=host.clientHeight;if(w<4||h<4||(w===W&&h===H))return;W=w;H=h;R.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();fitR=fit();tgt.r=fitR*zf;cur.r=tgt.r;vel.r=0;need=true;kick()}
  /* ---------- pins: real 3D markers that drop in on a spring ---------- */
  var pinHead={pend:keep(new T.MeshStandardMaterial({color:'#D9480F',roughness:.3,metalness:.05,emissive:'#6B1E00',emissiveIntensity:.3})),ok:null,no:keep(new T.MeshStandardMaterial({color:'#6E6E78',roughness:.35,metalness:.05}))};pinHead.ok=pinHead.pend;
  var stemM=mat('#2B2F33',.4,.4),dotM=keep(new T.MeshBasicMaterial({color:0x1B1F24,transparent:true,opacity:.5,depthWrite:false}));
  function ptex(n,state){return ctex(96,96,function(g,w,h){g.clearRect(0,0,w,h);g.fillStyle='#fff';g.strokeStyle='#fff';g.lineCap='round';
    if(state==='pend'){g.beginPath();g.arc(48,48,13,0,7);g.fill()}else if(state==='no'){g.lineWidth=9;g.beginPath();g.moveTo(32,32);g.lineTo(64,64);g.moveTo(64,32);g.lineTo(32,64);g.stroke()}
    else{g.textAlign='center';g.textBaseline='middle';g.font='700 56px '+F;g.fillText(String(n),48,52)}},{text:state==='ok'})}
  function pin(p,state,n,quiet){var g=new T.Group();g.position.copy(p);var st=M(cyl(.012,.012,.46,6),stemM,g,0,.23,0);var hd=M(sph(.12,24,16),pinHead[state],g,0,.58,0);
    var dt=M(geo('pdot',function(){return new T.CircleGeometry(.045,18)}),dotM,g,0,.004,0,0);dt.rotation.x=-Math.PI/2;
    var sp=new T.Sprite(keep(new T.SpriteMaterial({map:ptex(n,state),transparent:true,depthWrite:false})));sp.scale.setScalar(.2);sp.position.y=.58;sp.renderOrder=6;g.add(sp);
    lay1(g);scene.add(g);var P={g:g,hd:hd,sp:sp,base:p.clone(),off:quiet||RM?0:1.7,v:0,s:quiet||RM?1:.35,sv:0,st:1,k:1};PINS.push(P);kick();return P}
  function setPin(P,state,n){P.hd.material=pinHead[state];P.sp.material.map=ptex(n,state);P.sp.material.needsUpdate=true;kick()}
  function unpin(P){P.st=0;P.dead=1;kick()}
  function bump(P){if(!P||RM)return;P.v=4.6;P.off=.0001;kick()}
  var CD=new T.Vector3(),HW=new T.Vector3();
  function updPins(){var tv=2*Math.tan(cam.fov*Math.PI/360)/H,px=PH?23:25;PINS.forEach(function(P){var d=cam.position.distanceTo(P.base);P.k=cl(px*d*tv/.24,.3,3);
    P.g.scale.setScalar(P.k*P.s);P.g.position.set(P.base.x,P.base.y+P.off*P.k,P.base.z);HW.set(P.base.x,P.g.position.y+.58*P.k*P.s,P.base.z);CD.copy(cam.position).sub(HW).normalize();P.sp.position.set(CD.x*.13,.58+CD.y*.13,CD.z*.13)})}
  function head(P){return new T.Vector3(P.base.x,P.g.position.y+.58*P.k*P.s,P.base.z)}
  /* ---------- a ring where nothing was found ---------- */
  function ripple(p,n){var m=keep(new T.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.95,depthWrite:false,side:T.DoubleSide})),r=new T.Mesh(geo('ring',function(){return new T.RingGeometry(.72,1,40)}),m);
    n=n||new T.Vector3(0,1,0);r.position.copy(p).addScaledVector(n,.012);r.lookAt(r.position.clone().add(n));lay1(r);scene.add(r);FX.push({m:r,t:0,p:p.clone()});kick()}
  /* ---------- the end: outlined volumes for what was missed ---------- */
  var V=new T.Vector3();
  function rbox(id){return (RBOX[id]||BOX[id]).clone().expandByScalar(.08)}
  function reveal(items){var first=null;items.forEach(function(it,i){var b=rbox(it.id),s=b.getSize(new T.Vector3()),c=b.getCenter(new T.Vector3()),g=new T.Group(),col=it.found?0xD9480F:0xD93F3F,mats=[];g.position.copy(c);
      if(!it.found){if(!first)first={c:c,s:s};var f=new T.Mesh(UB,keep(new T.MeshBasicMaterial({color:col,transparent:true,opacity:0,depthWrite:false})));f.scale.copy(s);f.renderOrder=4;g.add(f);mats.push([f.material,.13]);
        var Lb=Math.min(s.x,s.y,s.z)*.32+.06,th=.026,im=new T.InstancedMesh(UB,keep(new T.MeshBasicMaterial({color:col,transparent:true,opacity:0})),24),d=new T.Object3D(),n=0;mats.push([im.material,1]);
        [-1,1].forEach(function(ax){[-1,1].forEach(function(ay){[-1,1].forEach(function(az){var cx=ax*s.x/2,cy=ay*s.y/2,cz=az*s.z/2;
          [[cx-ax*Lb/2,cy,cz,Lb,th,th],[cx,cy-ay*Lb/2,cz,th,Lb,th],[cx,cy,cz-az*Lb/2,th,th,Lb]].forEach(function(q){d.position.set(q[0],q[1],q[2]);d.scale.set(q[3],q[4],q[5]);d.updateMatrix();im.setMatrixAt(n++,d.matrix)})})})});g.add(im)}
      var e=new T.LineSegments(geo('eg',function(){return new T.EdgesGeometry(UB)}),keep(new T.LineBasicMaterial({color:col,transparent:true,opacity:0})));e.scale.copy(s);g.add(e);mats.push([e.material,it.found?.85:1]);
      lay1(g);scene.add(g);var el=document.createElement('span');el.className='hz-rl '+(it.found?'got':'miss');el.innerHTML=it.label;if(o.labels)o.labels.appendChild(el);
      REV.push({g:g,mats:mats,el:el,t:RM?1:-i*.16,top:new T.Vector3(c.x,b.max.y,c.z)});if(RM){mats.forEach(function(m){m[0].opacity=m[1]});el.classList.add('on')}});
    if(first&&!RM){tgt.x=cl(first.c.x,-5,5);tgt.y=cl(first.c.y,.8,3.6);tgt.z=cl(first.c.z+.6,-3,2.2);zf=cl((Math.max(first.s.x,first.s.y)*2.4+6.5)/fitR,.55,.82);tgt.r=fitR*zf;tgt.ph=cl(tgt.ph,1.12,1.32);tgt.th=cl(tgt.th,-.4,.4);ptg.th=ptg.ph=0;mode='slow'}
    else reset(true);kick()}
  /* ---------- snapshots for finding thumbnails: the angle you flagged from ---------- */
  function proj(p){V.copy(p).project(cam);return {x:(V.x+1)/2*W,y:(1-V.y)/2*H,on:V.z<1}}
  function snapAt(p,w,h,ring){updCam();updPins();R.render(scene,cam);var s=proj(p),k=cvs.width/W,sw=Math.min(cvs.width,w*k),sh=Math.min(cvs.height,h*k),x0=cl(s.x*k-sw/2,0,cvs.width-sw),y0=cl(s.y*k-sh/2,0,cvs.height-sh);
    var c=document.createElement('canvas');c.width=Math.round(w*1.6);c.height=Math.round(h*1.6);var g=c.getContext('2d');g.fillStyle='#ECEBE7';g.fillRect(0,0,c.width,c.height);g.drawImage(cvs,x0,y0,sw,sh,0,0,c.width,c.height);
    if(ring){var rx=(s.x*k-x0)/sw*c.width,ry=(s.y*k-y0)/sh*c.height;g.lineWidth=8;g.strokeStyle='#fff';g.beginPath();g.arc(rx,ry,17,0,7);g.stroke();g.lineWidth=4.5;g.strokeStyle=ring;g.stroke()}
    need=true;kick();try{return c.toDataURL('image/jpeg',.86)}catch(e){return ''}}
  /* ---------- render on demand ---------- */
  var C8=[0,1,2,3,4,5,6,7].map(function(){return new T.Vector3()});
  function rectOf(b){var x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(var i=0;i<8;i++){var v=C8[i].set(i&1?b.max.x:b.min.x,i&2?b.max.y:b.min.y,i&4?b.max.z:b.min.z).project(cam),x=(v.x+1)/2*W,y=(1-v.y)/2*H;
    if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y}x0=cl(x0,2,W-10);y0=cl(y0,2,H-10);x1=cl(x1,x0+8,W-2);y1=cl(y1,y0+8,H-2);return [x0,y0,x1-x0,y1-y0]}
  function overlay(){if(o.hits)o.hits.forEach(function(b){var r=rectOf(BOX[b.getAttribute('data-id')]);b.style.left=r[0].toFixed(1)+'px';b.style.top=r[1].toFixed(1)+'px';b.style.width=r[2].toFixed(1)+'px';b.style.height=r[3].toFixed(1)+'px'});
    REV.forEach(function(v){var p=proj(v.top);v.el.style.transform='translate('+p.x.toFixed(1)+'px,'+p.y.toFixed(1)+'px) translate(-50%,calc(-100% - .5em))'})}
  function render(){updCam();updPins();R.render(scene,cam);overlay();if(o.after)o.after()}
  function step(dt){var act=false,sp=SPR[mode],n=Math.max(1,Math.ceil(dt/.006)),h=dt/n,s,k;
    for(s=0;s<n;s++)KEYS.forEach(function(k2){var a=sp[0]*(tgt[k2]-cur[k2])-sp[1]*vel[k2];vel[k2]+=a*h;cur[k2]+=vel[k2]*h});
    KEYS.forEach(function(k2){var e=k2==='r'?.003:.0004;if(Math.abs(tgt[k2]-cur[k2])<e&&Math.abs(vel[k2])<e*3){cur[k2]=tgt[k2];vel[k2]=0}else act=true});
    ['th','ph'].forEach(function(k2){for(s=0;s<n;s++){var a=36*(ptg[k2]-par[k2])-11*pvl[k2];pvl[k2]+=a*h;par[k2]+=pvl[k2]*h}if(Math.abs(ptg[k2]-par[k2])<1e-4&&Math.abs(pvl[k2])<1e-4){par[k2]=ptg[k2];pvl[k2]=0}else act=true});
    for(k=PINS.length-1;k>=0;k--){var P=PINS[k];
      if(P.off!==0||P.v!==0){for(s=0;s<n;s++){var a=170*(0-P.off)-18*P.v;P.v+=a*h;P.off+=P.v*h}if(Math.abs(P.off)<.002&&Math.abs(P.v)<.02){P.off=0;P.v=0}else act=true}
      if(P.s!==P.st||P.sv!==0){for(s=0;s<n;s++){var b=220*(P.st-P.s)-20*P.sv;P.sv+=b*h;P.s+=P.sv*h}if(Math.abs(P.st-P.s)<.003&&Math.abs(P.sv)<.03){P.s=P.st;P.sv=0}else act=true}
      if(P.dead&&P.s<.04){scene.remove(P.g);P.sp.material.map.dispose();PINS.splice(k,1)}}
    for(k=FX.length-1;k>=0;k--){var f=FX[k];f.t+=dt;var q=Math.min(1,f.t/.55),dd=cam.position.distanceTo(f.p);f.m.scale.setScalar((.05+.2*q)*dd/10);f.m.material.opacity=.95*(1-q)*(1-q);if(q>=1){scene.remove(f.m);FX.splice(k,1)}else act=true}
    REV.forEach(function(v){if(v.t>=1)return;v.t+=dt;var q=cl(v.t/.5,0,1),e=1-Math.pow(1-q,3);v.g.scale.setScalar(1.14-.14*e);v.mats.forEach(function(m){m[0].opacity=m[1]*e});if(q>0)v.el.classList.add('on');if(v.t<1)act=true});
    return act}
  function kick(){need=true;if(!raf&&alive)raf=requestAnimationFrame(tick)}
  function tick(now){raf=0;if(!alive)return;if(o.paused()){held=true;last=0;return}var dt=last?Math.min(.05,(now-last)/1000):1/60;last=now;var act=step(dt);if(need||act){render();need=false}if(act)raf=requestAnimationFrame(tick);else last=0}
  function wake(){if(held&&!o.paused()){held=false;kick()}}
  function reset(slow){KEYS.forEach(function(k){if(k!=='r')tgt[k]=DEF[k]});zf=1;tgt.r=fitR;mode=slow?'slow':'soft';if(RM)snap0();kick();if(o.zoomed)o.zoomed(100)}
  function snap0(){KEYS.forEach(function(k){cur[k]=tgt[k];vel[k]=0})}
  /* ---------- input: drag to orbit, pinch or ctrl-wheel to zoom, tap to flag ---------- */
  var ray=new T.Raycaster(),ndc=new T.Vector2(),PT={},drag=null,pinch=null;
  function pick(cx,cy){var r=cvs.getBoundingClientRect();ndc.set((cx-r.left)/r.width*2-1,-((cy-r.top)/r.height)*2+1);updCam();ray.setFromCamera(ndc,cam);var hs=ray.intersectObjects(scene.children,true),hit=null;
    for(var i=0;i<hs.length;i++){var h=hs[i],ob=h.object,id=null;while(ob){if(ob.userData.hid){id=ob.userData.hid;break}ob=ob.parent}
      if(!hit)hit={id:id,point:h.point.clone(),normal:h.face?h.face.normal.clone().transformDirection(h.object.matrixWorld):new T.Vector3(0,1,0),px:!!h.object.userData.proxy};
      else if(hit.px&&id===hit.id&&!h.object.userData.proxy){hit.point.copy(h.point);if(h.face)hit.normal.copy(h.face.normal).transformDirection(h.object.matrixWorld);hit.px=false;break}
      if(!hit.px)break}
    if(hit&&hit.px&&hit.id==='cable'&&hit.point.y<.3)hit.point.y=.03;return hit}
  L(cvs,'pointerdown',function(e){if(!o.ok())return;PT[e.pointerId]={x:e.clientX,y:e.clientY};var ids=Object.keys(PT);
    if(ids.length===1){drag={id:e.pointerId,x0:e.clientX,y0:e.clientY,t0:performance.now(),th0:tgt.th,ph0:tgt.ph,moved:false,lx:e.clientX,ly:e.clientY,lt:performance.now(),vx:0,vy:0,touch:e.pointerType!=='mouse'};
      if(e.pointerType==='mouse'){try{cvs.setPointerCapture(e.pointerId)}catch(_){}host.classList.add('down')}}
    else if(ids.length===2){var a=PT[ids[0]],b=PT[ids[1]];pinch={d0:Math.hypot(a.x-b.x,a.y-b.y)||1,z0:zf};if(drag)drag.moved=true}});
  L(cvs,'pointermove',function(e){var p=PT[e.pointerId];
    if(!p){if(e.pointerType==='mouse'&&!RM&&o.ok()&&!(o.hold&&o.hold())){var r=cvs.getBoundingClientRect();ptg.th=-((e.clientX-r.left)/r.width-.5)*.07;ptg.ph=-((e.clientY-r.top)/r.height-.5)*.045;kick()}return}
    p.x=e.clientX;p.y=e.clientY;var ids=Object.keys(PT);
    if(pinch&&ids.length>=2){var a=PT[ids[0]],b=PT[ids[1]];setZoom(pinch.z0*pinch.d0/(Math.hypot(a.x-b.x,a.y-b.y)||1),true);return}
    if(!drag||e.pointerId!==drag.id)return;var dx=e.clientX-drag.x0,dy=e.clientY-drag.y0;
    if(!drag.moved){if(Math.abs(dx)+Math.abs(dy)<7)return;drag.moved=true;host.classList.add('orbiting');if(o.orbit)o.orbit()}
    var now=performance.now(),dtt=Math.max(8,now-drag.lt);drag.vx=(e.clientX-drag.lx)/dtt;drag.vy=(e.clientY-drag.ly)/dtt;drag.lx=e.clientX;drag.ly=e.clientY;drag.lt=now;
    mode='drag';tgt.th=rub(drag.th0-dx/W*2.6,LIM.th);if(!drag.touch||o.full())tgt.ph=rub(drag.ph0-dy/H*1.5,LIM.ph);kick()});
  function up(e,cancel){var d=drag;delete PT[e.pointerId];host.classList.remove('down');if(pinch&&Object.keys(PT).length<2){pinch=null;mode='soft';kick()}
    if(!d||e.pointerId!==d.id)return;drag=null;host.classList.remove('orbiting');
    if(!d.moved){if(!cancel&&performance.now()-d.t0<700&&o.tap)o.tap(pick(e.clientX,e.clientY));return}
    var fresh=performance.now()-d.lt<90;mode='soft';tgt.th=cl(tgt.th-(fresh&&!RM?d.vx*2.6/W*170:0),LIM.th[0],LIM.th[1]);if(!d.touch||o.full())tgt.ph=cl(tgt.ph-(fresh&&!RM?d.vy*1.5/H*170:0),LIM.ph[0],LIM.ph[1]);kick()}
  L(cvs,'pointerup',function(e){up(e,false)});L(cvs,'pointercancel',function(e){up(e,true)});
  L(cvs,'pointerleave',function(e){if(e.pointerType==='mouse'&&!(o.hold&&o.hold())){ptg.th=ptg.ph=0;kick()}});
  L(cvs,'wheel',function(e){if(!e.ctrlKey)return;e.preventDefault();setZoom(zf*Math.exp(e.deltaY*.012),true);mode='soft'},{passive:false});
  var ro=null;if(window.ResizeObserver){ro=new ResizeObserver(function(){size()});ro.observe(host)}
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){if(!alive)return;TEXT.forEach(function(x){x.g.clearRect(0,0,x.w,x.h);x.d(x.g,x.w,x.h);x.t.needsUpdate=true});kick()});
  size();kick();
  function destroy(){alive=false;if(raf)cancelAnimationFrame(raf);if(ro)ro.disconnect();
    scene.traverse(function(x){if(x.geometry)x.geometry.dispose();if(x.material)[].concat(x.material).forEach(function(m){if(m.map)m.map.dispose();m.dispose()})});
    KEEP.forEach(function(k){if(k&&k.dispose)k.dispose()});if(env)env.dispose();R.dispose();try{R.forceContextLoss()}catch(e){}cvs.remove()}
  return {pin:pin,setPin:setPin,unpin:unpin,bump:bump,ripple:ripple,reveal:reveal,size:size,kick:kick,wake:wake,destroy:destroy,
    anchor:function(id){return ANC[id].clone()},
    screen:function(P){return proj(new T.Vector3(P.base.x,P.base.y+.58*P.k,P.base.z))},
    snap:function(p,w,h,ring){return snapAt(p,w,h,ring)},
    snapPin:function(P,w,h){return snapAt(new T.Vector3(P.base.x,P.base.y+.32*P.k,P.base.z),w,h)},
    zoom:function(d){if(d===0){reset();return}setZoom(zf*(d>0?.78:1.28))},
    reset:function(){reset()},
    orbitBy:function(a,b){tgt.th=cl(tgt.th+a,LIM.th[0],LIM.th[1]);tgt.ph=cl(tgt.ph+b,LIM.ph[0],LIM.ph[1]);mode='soft';if(RM)snap0();kick()},
    focus:function(p){tgt.x=cl(p.x,-5.5,5.5);tgt.y=cl(p.y+.3,.7,2.6);tgt.z=cl(p.z,-3.2,2.2);if(zf>.75){zf=.75;tgt.r=fitR*zf}mode='soft';if(RM)snap0();kick();if(o.zoomed)o.zoomed(Math.round(100/zf))},
    intro:function(){if(RM)return;reset(true)},
    pct:function(){return Math.round(100/zf)}}
}

function slide(){
  var tri='<svg viewBox="0 0 120 106" aria-hidden="true"><defs><linearGradient id="hz-tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE65C"/><stop offset="1" stop-color="#F0B400"/></linearGradient></defs><path d="M60 7 113 99H7z" fill="url(#hz-tg)" stroke="#1E1E1E" stroke-width="7" stroke-linejoin="round"/><path d="M60 22 100 92" stroke="#fff" stroke-opacity=".55" stroke-width="3" fill="none"/><rect x="54.5" y="36" width="11" height="36" rx="4" fill="#1E1E1E"/><circle cx="60" cy="84" r="6.4" fill="#1E1E1E"/></svg>';
  return '<div class="lms-top"><span class="lms-ti"><span>Workplace Health &amp; Safety Induction</span></span><span class="lms-no"><span class="hl" data-n="3">Slide 18 of 52</span></span></div>'+
  '<div class="lms-mid"><div class="hz-l"><div class="lms-h"><span class="hl" data-n="0">Hazard Identification and Risk Control</span></div>'+
   '<p class="hz-nar"><span class="hl" data-n="2">[Narration: Please read the table below.]</span></p>'+
   '<table class="hz-tb"><colgroup><col style="width:23%"><col style="width:31%"><col></colgroup><thead><tr><th>Hazard</th><th>Risk</th><th>Control</th></tr></thead><tbody>'+
   '<tr><td>Slips, trips and falls</td><td>Injury from wet or obstructed floors</td><td>Keep walkways clear. <span class="hl" data-n="1" data-mk="r">Clean up spills immediately.</span></td></tr>'+
   '<tr><td>Manual handling</td><td>Back and muscle strain</td><td>Use correct lifting technique. Ask for help with heavy loads.</td></tr>'+
   '<tr><td>Fire</td><td>Burns, smoke inhalation</td><td>Keep fire exits clear at all times.</td></tr>'+
   '<tr><td>Working at height</td><td>Falls, falling objects</td><td>Use approved access equipment only.</td></tr>'+
   '<tr><td>Electrical</td><td>Electric shock, fire</td><td>Inspect leads before use. Report damage.</td></tr>'+
   '<tr><td>Moving vehicles</td><td>Collisions, crush injuries</td><td>Follow site traffic rules at all times.</td></tr></tbody></table></div>'+
   '<div class="lms-art hz-tri" data-ps>'+tri+'<b>CAUTION</b></div></div>'+
  '<div class="lms-prog"><i style="width:34.6%"></i></div><div class="lms-bot"><span class="lms-hint">Click NEXT to continue.</span><span class="lms-btns"><span class="lms-btn">&#9664; BACK</span><span class="lms-btn"><span class="hl inv" data-n="3" data-mk="r">NEXT &#9654;</span></span></span></div>'}

function app(){
  var hits=OBJ.map(function(o){var area=0;o.r.forEach(function(q){area+=q[2]*q[3]});o.z=area;return o}).slice().sort(function(a,b){return b.z-a.z}),zi={};
  hits.forEach(function(o,i){zi[o.id]=i+1});
  var hb='';OBJ.forEach(function(o){o.r.forEach(function(q,j){
    hb+='<button class="hz-hit" type="button" data-id="'+o.id+'"'+(j?' tabindex="-1" aria-hidden="true"':' aria-label="'+o.lb+'"')+' style="left:'+(q[0]/10)+'%;top:'+(q[1]/5.6).toFixed(3)+'%;width:'+(q[2]/10)+'%;height:'+(q[3]/5.6).toFixed(3)+'%;z-index:'+zi[o.id]+'"></button>'})});
  var seg='';for(var i=0;i<6;i++)seg+='<i></i>';
  var hb3=OBJ.map(function(o){return '<button class="hz-hit3" type="button" data-id="'+o.id+'" aria-label="'+o.lb+'"></button>'}).join('');
  return '<div class="hz" id="hz">'+
  '<div class="hz-nav"><div class="hz-brand"><span class="hz-logo" data-pt="b">'+I.logo+'</span><b data-pt="t">SiteCheck</b></div>'+
   '<div class="hz-tabs"><span class="on">Inspections</span><span>Actions</span><span>Assets</span><span>Schedule</span></div>'+
   '<div class="hz-srch" data-pt="e">'+I.search+'<span>Search inspections</span><kbd>/</kbd></div>'+
   '<div class="hz-tools"><span class="hz-ic">'+I.bell+'</span><span class="hz-me">SO</span></div></div>'+
  '<div class="hz-hd"><span class="hz-logo hz-logo2">'+I.logo+'</span><div class="hz-ttl"><div class="hz-crumb">Inspections<i>/</i>Northwind DC2<i>/</i>Warehouse</div>'+
   '<h2 data-pt="t">Bay 4 · pre-shift walkthrough</h2><span class="hz-pill"><i></i>In progress</span>'+
   '<div class="hz-meta" data-pt="t"><span>'+I.pin+'Northwind DC2</span><span>'+I.user+'Sam Okoro</span><span class="m3">'+I.doc+'Warehouse daily check</span><span class="m4">'+I.clock+'Started 05:44</span></div></div>'+
   '<button class="hz-sub" type="button" data-pt="b">'+I.check+'<span class="lg">Submit inspection</span><span class="sm">Submit</span></button></div>'+
  '<div class="hz-main" id="hz-main">'+
   '<section class="hz-stage" id="hz-stage" tabindex="-1" aria-label="Bay 4 site scan. Tab through what’s in it, Enter to flag.">'+
    '<div class="hz-pan" id="hz-pan" data-lenis-prevent><div class="hz-cv" id="hz-cv" data-pt="e">'+scene()+hb+'<div class="hz-outs" id="hz-outs"></div><div class="hz-pins" id="hz-pins"></div><span class="hz-ret" aria-hidden="true"></span></div></div>'+
    '<div class="hz-3d" id="hz-3d" data-pt="e" data-lenis-prevent><div class="hz-h3" id="hz-h3">'+hb3+'</div><div class="hz-l3" id="hz-l3" aria-hidden="true"></div><span class="hz-ret" aria-hidden="true"></span></div>'+
    '<div class="hz-hint" data-pt="e">'+I.target+'<span><b id="hz-hint">Tap to flag a hazard</b><em id="hz-hint2">Drag to look around</em></span></div>'+
    '<div class="hz-tr"><span class="hz-cap" id="hz-cap">'+I.cube+'<span>Scan · LiDAR · 14 Oct 05:31</span></span><div class="hz-vt" role="group" aria-label="View"><button type="button" data-v="3d" aria-pressed="true">'+I.cube+'<span>3D scan</span></button><button type="button" data-v="photo" aria-pressed="false">'+I.img+'<span>Photo</span></button></div></div>'+
    '<div class="hz-zm" data-pt="e"><button type="button" data-z="-1" aria-label="Zoom out" title="Zoom out (−)">'+I.minus+'</button><span id="hz-zl">100%</span><button type="button" data-z="1" aria-label="Zoom in" title="Zoom in (+)">'+I.plus+'</button><i></i><button type="button" data-z="0" aria-label="Reset view" title="Reset view (0)">'+I.reset+'</button></div>'+
    '<button class="hz-zt" type="button" aria-pressed="false">'+I.expand+'<span>Expand</span></button>'+
   '</section>'+
   '<aside class="hz-side" id="hz-side" aria-label="Findings">'+
    '<button class="hz-sh" type="button" aria-expanded="false" aria-controls="hz-list"><span class="hz-grab"></span><span class="hz-sh-t"><b data-pt="t">Findings</b><span class="hz-cnt"><b id="hz-n">0</b> of 6</span><span class="hz-chv">'+I.chev+'</span></span><span class="hz-seg" data-pt="f">'+seg+'</span></button>'+
    '<div class="hz-list" id="hz-list" data-lenis-prevent><div class="hz-empty"><span class="hz-eic">'+I.target+'</span><b data-pt="t">No findings yet</b><span data-pt="t">Tap anything in the photo that could hurt someone before the shift starts.</span></div></div>'+
    '<div class="hz-sf">'+I.cloud+'<span id="hz-saved">Saved 05:44</span><span class="r">Shift starts 06:00</span></div>'+
   '</aside>'+
   '<div class="hz-pop" id="hz-pop" role="dialog" aria-label="What’s the hazard?"></div>'+
  '</div></div>'}

function init(api){
  var root=api.$('#hz'),main=api.$('#hz-main'),stage=api.$('#hz-stage'),pan=api.$('#hz-pan'),cv=api.$('#hz-cv'),pins=api.$('#hz-pins'),outs=api.$('#hz-outs'),pop=api.$('#hz-pop'),
    list=api.$('#hz-list'),shBtn=api.$('.hz-sh'),ret=api.$('#hz-cv .hz-ret'),hint=api.$('#hz-hint'),hint2=api.$('#hz-hint2'),zl=api.$('#hz-zl'),zt=api.$('.hz-zt'),sub=api.$('.hz-sub'),nEl=api.$('#hz-n'),saved=api.$('#hz-saved'),
    w3=api.$('#hz-3d'),ret3=api.$('#hz-3d .hz-ret'),cap=api.$('#hz-cap');
  var st={},ctl={},found=0,pend=null,ended=false,tm=null,z=1,ZL=[1,1.5,2,3],missT=0,misses=0,drag=null,lastHit=null,view='photo',scan=null;
  function cl(v,a,b){return Math.max(a,Math.min(b,v))}
  try{scan=Scan({host:w3,narrow:api.narrow,rm:api.rm,listen:api.listen,paused:api.paused,hits:api.$$('.hz-hit3'),labels:api.$('#hz-l3'),
    ok:function(){return (api.live()||ended)&&view==='3d'},tap:tap3,after:after3,full:function(){return root.classList.contains('zm')},
    zoomed:function(p){if(view==='3d')zl.textContent=p+'%'},orbit:function(){ret3.classList.remove('on')},hold:function(){return !!pend}})}catch(e){if(window.console)console.error(e);scan=null}
  if(scan)view='3d';root.classList.toggle('v3',view==='3d');root.classList.toggle('no3',!scan);
  function v3(){return view==='3d'}
  /* inspection clock: 05:44:12 plus time spent in the bay */
  function clock(){var e=tm?75-tm.left():0,s=Math.floor(5*3600+44*60+12+e);return ('0'+Math.floor(s/3600)).slice(-2)+':'+('0'+Math.floor(s/60)%60).slice(-2)+':'+('0'+s%60).slice(-2)}
  function pct(x,y){return 'left:'+(x/10).toFixed(2)+'%;top:'+(y/5.6).toFixed(2)+'%'}
  function point(e){var r=cv.getBoundingClientRect();if(!r.width)return null;return [cl((e.clientX-r.left)/r.width*1000,0,1000),cl((e.clientY-r.top)/r.height*560,0,560)]}
  /* photo pins (DOM) */
  function pin2(p,cls,n,quiet){var el=document.createElement('span');el.className='hz-pin '+cls+(quiet?' q':'');el.setAttribute('style',pct(p[0],p[1]));el.innerHTML='<b>'+(n==null?(cls.indexOf('no')>=0?I.x:''):n)+'</b>';pins.appendChild(el);return el}
  function setPin2(el,cls,n){el.className='hz-pin set '+cls;el.querySelector('b').innerHTML=n==null?I.x:n}
  function bump2(el){if(!el)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump')}
  function ripple2(p){var el=document.createElement('span');el.className='hz-rip';el.setAttribute('style',pct(p[0],p[1]));pins.appendChild(el);api.after(650,function(){el.remove()})}
  function sevHTML(n){return n===4?'<span class="hz-sv crit"><i>!</i>Critical</span>':'<span class="hz-sv l'+n+'"><span class="b"><i></i><i></i><i></i></span>'+SEV[n]+'</span>'}
  function chip(c,cls){return '<span class="hz-chip'+(cls?' '+cls:'')+'" style="--c:'+CAT[c].c+'">'+I[c]+CAT[c].n+'</span>'}
  function count(){nEl.textContent=found;api.round(found+' of 6 found');var segs=api.$$('.hz-seg i'),k=0;
    HZ_ORDER.forEach(function(id){if(st[id]){var s=segs[k++];s.className=st[id].c===HZ[id].cat?'on':'wr'}})}

  /* ---------- the category popover: anchored to the pin, a bottom sheet on phones ---------- */
  function openPop(){var o=pend,h=HZ[o.id]||CT[o.id],th=o.img?'<img src="'+o.img+'" alt="">':crop(o.p2[0],o.p2[1],200,128,'#D9480F');
    pop.innerHTML='<div class="hz-pop-h"><span class="hz-pop-th">'+th+'</span><div><b>What’s the hazard?</b><span>New finding · '+clock()+'</span></div><button class="hz-x" type="button" data-a="cancel" aria-label="Cancel">'+I.x+'</button></div>'+
      '<div class="hz-opts">'+h.opts.map(function(c,i){return '<button class="hz-opt" type="button" data-c="'+c+'" style="--c:'+CAT[c].c+'"><span class="ci">'+I[c]+'</span><span>'+CAT[c].n+'</span><kbd>'+(i+1)+'</kbd></button>'}).join('')+'</div>'+
      '<div class="hz-pop-f"><span><kbd>1</kbd>–<kbd>3</kbd> choose</span><span><kbd>Esc</kbd> cancel</span></div>';
    place();pop.classList.add('on');stage.classList.add('picking');hint.textContent='Pick a category';
    if(o.kb)api.after(60,function(){var b=pop.querySelector('.hz-opt');if(b)b.focus({preventScroll:true})})}
  function pinXY(){var m=main.getBoundingClientRect();if(pend.view==='3d'){var s=scan.screen(pend.pin),h=w3.getBoundingClientRect();return {x:h.left-m.left+s.x,y:h.top-m.top+s.y+14}}
    var r=pend.pin.getBoundingClientRect();return {x:r.left+r.width/2-m.left,y:r.bottom-m.top}}
  function place(){if(!pend)return;var nar=api.narrow();pop.classList.toggle('sheet',nar);if(nar){pop.style.left=pop.style.top='';return}
    var m=main.getBoundingClientRect(),sr=stage.getBoundingClientRect(),q=pinXY(),pw=pop.offsetWidth,ph=pop.offsetHeight,R0=sr.right-m.left-8,L0=sr.left-m.left+8;
    if(!pend.side||(pend.side==='r'&&q.x+26+pw>R0+40)||(pend.side==='l'&&q.x-26-pw<L0-40))pend.side=q.x+26+pw<=R0?'r':'l';var px=pend.side==='r'?q.x+26:q.x-26-pw;px=cl(px,L0,R0-pw);
    pop.style.left=px.toFixed(1)+'px';pop.style.top=cl(q.y-ph*.55,8,m.height-ph-8).toFixed(1)+'px'}
  function closePop(){pop.classList.remove('on');stage.classList.remove('picking');hint.textContent=ended?'Missed hazards outlined':'Tap to flag a hazard'}
  function cancel(quiet){if(!pend)return;var o=pend;pend=null;closePop();if(o.view==='3d')scan.unpin(o.pin);else{o.pin.classList.add('gone');api.after(260,function(){o.pin.remove()})}
    if(!quiet)api.sfx('click');if(o.kb&&o.btn)o.btn.focus({preventScroll:true})}

  /* ---------- flagging, in either view ---------- */
  function flag(id,s){var a=st[id]||ctl[id];if(a){bumpF(a);return}
    var img=null,pin;if(s.view==='3d'){img=scan.snap(s.p3,180,116,'#D9480F');pin=scan.pin(s.p3,'pend')}else pin=pin2(s.p2,'pend');
    api.sfx('pin');pend={id:id,view:s.view,p2:s.p2,p3:s.p3,pin:pin,kb:s.kb,btn:s.btn,img:img};openPop()}
  function bumpF(a){if(v3()&&a.pin3)scan.bump(a.pin3);else bump2(a.pin2);api.sfx('tap')}
  function miss(s){if(s.view==='3d')scan.ripple(s.p3,s.n);else ripple2(s.p2);api.sfx('tap');misses++;var n=performance.now();if(n-missT<2600)return;missT=n;
    api.toast({tone:'info',title:'Nothing wrong there',text:misses>=3&&misses<6?'Look where people walk, reach and leave things.':null,silent:true,ms:2000})}
  function choose(c){var o=pend;if(!o||ended)return;pend=null;closePop();var id=o.id,h=HZ[id],t=clock(),ob=obj(id);saved.textContent='Saved just now';
    var a={c:c,t:t,p2:o.p2||ob.a,p3:o.p3||(scan?scan.anchor(id):null)};if(h){a.pts=c===h.cat?100:50;found++;a.n=found;st[id]=a}else{a.pts=-20;ctl[id]=a}
    var s3=h?'ok':'no',n=h?a.n:null,c2=h?(a.pts<100?'ok wr':'ok'):'no';
    if(o.view==='3d'){a.pin3=o.pin;scan.setPin(o.pin,s3,n);a.pin2=pin2(a.p2,'set '+c2,n,true);a.img=scan.snapPin(a.pin3,180,116)}
    else{a.pin2=o.pin;setPin2(o.pin,c2,n);if(scan)a.pin3=scan.pin(a.p3,s3,n,true)}
    if(h){count();api.score(a.pts);api.toast(a.pts===100?{tone:'good',title:h.ok[0],text:h.ok[1],pts:100,big:id==='exit'}:{tone:'warn',title:'Right spot, wrong category',text:h.wr[c],pts:50});
      if(found===6)api.after(1500,function(){finish('all')})}
    else{api.score(-20);api.toast({tone:'bad',title:'That’s a control, not a hazard',text:id==='sign'&&st.exit?CT[id].why2:CT[id].why,pts:-20})}
    row(id,c,h||CT[id],t,!h);if(o.kb&&o.btn)o.btn.focus({preventScroll:true})}
  function row(id,c,h,t,isCt){var e=list.querySelector('.hz-empty');if(e)e.remove();var a=(isCt?ctl:st)[id],b=document.createElement('button');
    b.type='button';b.className='hz-row'+(isCt?' ct':a.pts<100?' wr':'');b.setAttribute('data-id',id);
    b.innerHTML='<span class="hz-th">'+(a.img?'<img src="'+a.img+'" alt="">':crop(a.p2[0],a.p2[1],190,122,isCt?'#6E6E78':'#D9480F'))+'<i>'+(isCt?I.x:a.n)+'</i></span>'+
      '<span class="hz-rt"><b>'+h.t+'</b><span class="hz-pt">'+(isCt?'−20':'+'+a.pts)+'</span></span><span class="hz-loc">'+h.loc+'<span class="hz-tm">'+t.slice(0,5)+'<em>'+t.slice(5)+'</em></span></span>'+
      '<span class="hz-tags">'+(isCt?'<span class="hz-chip ctl">'+I.check+'Control, not a hazard</span>':chip(c,a.pts<100?'wr':'')+sevHTML(h.sev))+'</span>';
    list.insertBefore(b,list.firstChild);list.scrollTop=0;requestAnimationFrame(function(){requestAnimationFrame(function(){b.classList.add('in')})});
    b.setAttribute('aria-label',h.t+(isCt?', not a hazard':', '+CAT[c].n+', '+SEV[h.sev]+' severity'))}

  /* ---------- the end: outline what was missed (in 3D, fly to the first one), then the report ---------- */
  function finish(why){if(ended)return;ended=true;if(tm)tm.stop();var pl=api.$('.hz-pill');pl.innerHTML='<i></i>'+(why==='time'?'Auto-submitted':'Submitted');pl.classList.add('sub');cancel(true);
    root.classList.add('done');root.classList.remove('sh-open','zm');syncZt();shBtn.setAttribute('aria-expanded','false');if(z!==1)setZ(1);hint.textContent='Missed hazards outlined';
    api.$$('.hz-hit,.hz-hit3').forEach(function(b){b.tabIndex=-1});
    var k=0;HZ_ORDER.forEach(function(id){var o=obj(id),q=o.o,f=!!st[id],el=document.createElement('div');
      el.className='hz-out '+(f?'got':'miss')+(o.lp?' l'+o.lp:'');el.setAttribute('style','left:'+(q[0]/10)+'%;top:'+(q[1]/5.6).toFixed(2)+'%;width:'+(q[2]/10)+'%;height:'+(q[3]/5.6).toFixed(2)+'%');
      el.innerHTML='<span>'+(f?I.check+st[id].n+' · ':'Missed · ')+HZ[id].t+'</span>';outs.appendChild(el);
      api.after(api.rm?0:120+k*150,function(){el.classList.add('on');if(!f&&!v3())api.sfx('marker')});k++});
    if(scan){scan.reveal(HZ_ORDER.map(function(id){var f=!!st[id];return {id:id,found:f,label:f?I.check+st[id].n+' · '+HZ[id].t:'<b>Missed</b> · '+HZ[id].t}}));
      if(v3())HZ_ORDER.filter(function(id){return !st[id]}).slice(0,3).forEach(function(id,i){api.after(api.rm?0:160+i*170,function(){api.sfx('marker')})})}
    var rows=HZ_ORDER.map(function(id){var h=HZ[id],a=st[id];if(!a)return {s:'n',label:'Missed: '+h.t.toLowerCase(),detail:h.rule,pts:0};
      return a.c===h.cat?{s:'y',label:h.t+' · '+CAT[a.c].n,pts:100}:{s:'m',label:h.t+' · logged as '+CAT[a.c].n.toLowerCase(),detail:'It’s '+CAT[h.cat].a+'. '+h.rule,pts:50}});
    var cs=Object.keys(ctl);
    rows.push(cs.length?{s:'n',label:'Flagged '+(cs.length===1?'a control':cs.length+' controls')+': '+cs.map(function(id){return CT[id].t.toLowerCase()}).join(', '),detail:'Controls doing their job aren’t findings.',pts:-20*cs.length}
      :{s:'y',label:'No false alarms',detail:'You left all five controls alone.',pts:null});
    var t=api.total();
    api.end({max:600,rows:rows,delay:api.rm?600:v3()?2900:2400,
      title:t>=540?'Bay 4 is safe to open.':t>=380?'Good walk. Something’s still out there.':t>=200?'The shift would start with hazards live.':'Bay 4 would have opened like this.',
      line:'Slide 18 listed all six. Finding them yourself is what sticks.'})}

  /* ---------- views and zoom: orbit the scan, or step-zoom the photo ---------- */
  function setView(v){if(v===view||!scan)return;if(pend)cancel(true);view=v;root.classList.toggle('v3',v==='3d');
    api.$$('.hz-vt button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-v')===v?'true':'false')});
    cap.innerHTML=v==='3d'?I.cube+'<span>Scan · LiDAR · 14 Oct 05:31</span>':I.cam+'<span>Photo · 14 Oct 05:44</span>';
    zl.textContent=v==='3d'?scan.pct()+'%':Math.round(z*100)+'%';hint2.textContent=v==='3d'?'Drag to look around':'Zoom in to look closer';
    if(v==='3d'){scan.size();scan.kick()}if(api.url)api.url('app.sitecheck.io/inspections/bay-4-walkthrough'+(v==='3d'?'':'?view=photo'));api.sfx('click');syncZt()}
  function setZ(nz){var cx=(pan.scrollLeft+pan.clientWidth/2)/(pan.scrollWidth||1),cy=(pan.scrollTop+pan.clientHeight/2)/(pan.scrollHeight||1);
    z=nz;stage.style.setProperty('--z',z);stage.classList.toggle('zd',z>1);if(!v3())zl.textContent=Math.round(z*100)+'%';
    pan.scrollLeft=cx*pan.scrollWidth-pan.clientWidth/2;pan.scrollTop=cy*pan.scrollHeight-pan.clientHeight/2;place()}
  function zStep(d){if(v3()){scan.zoom(d);api.sfx('click');return}if(api.narrow()){phoneZoom(d>0);return}var i=ZL.indexOf(z);if(d===0){if(z!==1){setZ(1);api.sfx('click')}return}var n=ZL[cl(i+d,0,ZL.length-1)];if(n!==z){setZ(n);api.sfx('click')}}
  function syncZt(){var on=root.classList.contains('zm');zt.setAttribute('aria-pressed',on?'true':'false');
    if(v3()){zt.innerHTML=(on?I.collapse+'<span>Collapse</span>':I.expand+'<span>Expand</span>');zt.setAttribute('aria-label',on?'Collapse the scan':'Expand the scan')}
    else{zt.innerHTML=(on?I.zout+'<span>Fit</span>':I.zin+'<span>Zoom</span>');zt.setAttribute('aria-label',on?'Fit photo':'Zoom in')}}
  function phoneZoom(on){if(on===root.classList.contains('zm'))return;root.classList.toggle('zm',on);root.classList.remove('sh-open');shBtn.setAttribute('aria-expanded','false');syncZt();api.sfx('click');
    if(v3())return;var f=pend?pend.p2:lastHit;api.after(api.rm?0:460,function(){var r=cv.getBoundingClientRect(),px=f?f[0]/1000*r.width:r.width*.42;pan.scrollLeft=px-pan.clientWidth/2;place()})}

  /* ---------- input ---------- */
  function tap3(h){if(ended||!api.live())return;if(pend)cancel(true);if(!h)return;if(h.id)flag(h.id,{view:'3d',p3:h.point});else miss({view:'3d',p3:h.point,n:h.normal})}
  function after3(){if(pend&&pend.view==='3d'&&!api.narrow())place()}
  api.listen(pan,'click',function(e){if(ended||!api.live())return;if(drag&&drag.moved)return;
    var hit=e.target.closest&&e.target.closest('.hz-hit'),kb=e.detail===0&&!!hit,p=kb?obj(hit.getAttribute('data-id')).a:point(e);if(!p)return;
    if(pend)cancel(true);lastHit=p;if(hit)flag(hit.getAttribute('data-id'),{view:'photo',p2:p,kb:kb,btn:kb?hit:null});else miss({view:'photo',p2:p})});
  api.listen(api.$('#hz-h3'),'click',function(e){var b=e.target.closest('.hz-hit3');if(!b||ended||!api.live()||!scan)return;var id=b.getAttribute('data-id');if(pend)cancel(true);flag(id,{view:'3d',p3:scan.anchor(id),kb:true,btn:b})});
  api.listen(pop,'click',function(e){var b=e.target.closest('button');if(!b)return;if(b.getAttribute('data-a')==='cancel'){cancel();return}var c=b.getAttribute('data-c');if(c)choose(c)});
  api.listen(root,'pointerdown',function(e){if(pend&&!pop.contains(e.target)&&!pan.contains(e.target)&&!w3.contains(e.target))cancel(true)});
  api.listen(sub,'click',function(){if(ended||!api.live())return;api.sfx('send');var nc=Object.keys(ctl).length;
    api.toast({tone:'info',title:'Inspection submitted',text:found+' of 6 hazards flagged'+(nc?', '+nc+' false alarm'+(nc>1?'s':''):'')+'.',silent:true,ms:2600});finish('submit')});
  api.listen(api.$('.hz-zm'),'click',function(e){var b=e.target.closest('button');if(b)zStep(+b.getAttribute('data-z'))});
  api.listen(api.$('.hz-vt'),'click',function(e){var b=e.target.closest('button');if(b)setView(b.getAttribute('data-v'))});
  api.listen(zt,'click',function(){phoneZoom(!root.classList.contains('zm'))});
  api.listen(shBtn,'click',function(){if(!api.narrow())return;var o=!root.classList.contains('sh-open');root.classList.toggle('sh-open',o);shBtn.setAttribute('aria-expanded',o?'true':'false');api.sfx('click')});
  api.listen(list,'click',function(e){var b=e.target.closest('.hz-row');if(!b)return;var id=b.getAttribute('data-id'),a=st[id]||ctl[id];if(!a)return;
    if(api.narrow()&&root.classList.contains('sh-open')){root.classList.remove('sh-open');shBtn.setAttribute('aria-expanded','false')}
    if(v3()){scan.focus(a.p3);api.after(api.narrow()?420:240,function(){scan.bump(a.pin3)});api.sfx('tap');return}
    if(z>1||root.classList.contains('zm')){var r=cv.getBoundingClientRect();pan.scrollLeft=a.p2[0]/1000*r.width-pan.clientWidth/2;pan.scrollTop=a.p2[1]/560*r.height-pan.clientHeight/2}
    api.after(api.narrow()?380:0,function(){bump2(a.pin2);api.sfx('tap')})});
  /* a reticle under the mouse, and drag-to-pan when the photo is zoomed */
  function reticle(el,box,e){if(e.pointerType!=='mouse'){el.classList.remove('on');return}var r=box.getBoundingClientRect();el.style.left=(e.clientX-r.left)+'px';el.style.top=(e.clientY-r.top)+'px';el.classList.add('on')}
  api.listen(cv,'pointermove',function(e){reticle(ret,cv,e)});api.listen(cv,'pointerleave',function(){ret.classList.remove('on','dn')});
  api.listen(w3,'pointermove',function(e){if(w3.classList.contains('orbiting'))return;reticle(ret3,w3,e)});api.listen(w3,'pointerleave',function(){ret3.classList.remove('on','dn')});
  api.listen(w3,'pointerdown',function(e){if(e.pointerType==='mouse')ret3.classList.add('dn')});
  api.listen(pan,'pointerdown',function(e){if(e.pointerType!=='mouse'||e.button!==0)return;ret.classList.add('dn');if(z>1)drag={x:e.clientX,y:e.clientY,sl:pan.scrollLeft,st:pan.scrollTop,moved:false}});
  api.listen(window,'pointermove',function(e){if(!drag)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(!drag.moved&&Math.abs(dx)+Math.abs(dy)<5)return;
    drag.moved=true;stage.classList.add('drag');pan.scrollLeft=drag.sl-dx;pan.scrollTop=drag.st-dy});
  api.listen(window,'pointerup',function(){ret.classList.remove('dn');ret3.classList.remove('dn');if(!drag)return;stage.classList.remove('drag');var d=drag;api.after(0,function(){if(drag===d)drag=null})});
  api.listen(pan,'scroll',function(){if(pend&&!api.narrow())place()},{passive:true});
  api.key(function(e){if(ended)return;var k=e.key;
    if(pend){if(k==='1'||k==='2'||k==='3'){e.preventDefault();var h=HZ[pend.id]||CT[pend.id];choose(h.opts[+k-1]);return}if(k==='Escape'){e.preventDefault();cancel();return}}
    if(k==='+'||k==='='){e.preventDefault();zStep(1)}else if(k==='-'||k==='_'){e.preventDefault();zStep(-1)}else if(k==='0'){e.preventDefault();zStep(0)}
    else if(v3()&&!pend&&/^Arrow/.test(k)){var ae=document.activeElement;if(ae&&(ae===stage||stage.contains(ae))){e.preventDefault();scan.orbitBy(k==='ArrowLeft'?.14:k==='ArrowRight'?-.14:0,k==='ArrowUp'?.08:k==='ArrowDown'?-.08:0)}}});
  function sync(){var nar=api.narrow();shBtn.disabled=!nar;if(!nar){root.classList.remove('sh-open','zm');syncZt()}else if(z!==1)setZ(1);if(scan)scan.size();place()}
  sync();api.every(400,function(){if(scan)scan.wake()});
  return {start:function(){api.round('0 of 6 found');if(scan)scan.intro();
      tm=api.timer(75,function(){api.toast({tone:'warn',title:'Time’s up',text:'The shift is starting. Whatever you didn’t flag is still out there.',silent:true});api.after(700,function(){finish('time')})});
      if(!api.narrow())stage.focus({preventScroll:true})},
    resize:sync,destroy:function(){if(scan){scan.destroy();scan=null}}}
}

(window.HM_T=window.HM_T||[]).push({id:'hazard',topic:'Hazard spotting',music:'hazard',
  app:{name:'SiteCheck',url:'app.sitecheck.io/inspections/bay-4-walkthrough',color:'#D9480F',icon:I.logo},
  lms:{url:'learn.northwind.co/whs-induction/module-2/slide-18',color:'#4D6559',bg:'#E7EAE7'},
  slide:slide(),
  notes:['A table of hazards isn’t a warehouse.','Nobody has ever spotted a spill in a table.','The narration reads the slide aloud. Word for word.','Slide 18 of 52. The only thing spotted so far is NEXT.'],
  intro:{title:'Hazard walkthrough',lede:'Bay 4 opens at 06:00. Walk it before the shift does, and flag anything that could hurt someone.',
    rules:['Tap a hazard to pin it, then say what kind it is.','Some things are controls doing their job. Flagging those costs points.','Six hazards, 75 seconds. Submit when you’re done.'],meta:'6 hazards · 75 seconds',cta:'Start walkthrough'},
  html:app(),init:init});
})();

/* training: code */
/* Secure code review drill in a working code host. Three pull requests to payments-api, four vulnerabilities. */
(function(){
var S='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',E='</svg>';
var I={
  anvil:'<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4.6 3.3h10.1v3H11.4c-.8.9-1.1 2-1.1 3.3l1.9 1.4v1.9H3.8V11l1.9-1.4c0-1.3-.3-2.4-1-3.3-1.4-.2-2.7-1-3.5-2.4 1.1-.5 2.2-.6 3.4-.6z"/></svg>',
  pr:S+'<circle cx="4.5" cy="3.9" r="1.6"/><circle cx="4.5" cy="12.1" r="1.6"/><circle cx="11.5" cy="12.1" r="1.6"/><path d="M4.5 5.5v5M11.5 10.5V6.6a1.9 1.9 0 0 0-1.9-1.9H7.4"/><path d="m8.9 3.2-1.5 1.5 1.5 1.5"/>'+E,
  merge:S+'<circle cx="4.5" cy="3.9" r="1.6"/><circle cx="4.5" cy="12.1" r="1.6"/><circle cx="11.5" cy="8.4" r="1.6"/><path d="M4.5 5.5v5M4.9 5.4c.7 1.9 2.6 3 5 3"/>'+E,
  block:S+'<path d="M5.6 2h4.8L14 5.6v4.8L10.4 14H5.6L2 10.4V5.6z"/><path d="M8 5.2v3.4M8 10.8v.1"/>'+E,
  conv:S+'<path d="M2.5 3.3h11v7.4H7.8l-3.1 2.4v-2.4H2.5z"/>'+E,
  commit:S+'<circle cx="8" cy="8" r="2.4"/><path d="M1.5 8h4.1M10.4 8h4.1"/>'+E,
  check:S+'<path d="m3.2 8.4 3 3 6.6-6.8"/>'+E,
  diff:S+'<path d="M9.4 2H4.6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.8a1 1 0 0 0 1-1V5z"/><path d="M9.4 2v3h3M8 6.4v3.4M6.3 8.1h3.4M6.3 11.4h3.4"/>'+E,
  file:S+'<path d="M9.4 2H4.6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.8a1 1 0 0 0 1-1V5z"/><path d="M9.4 2v3h3"/>'+E,
  folder:S+'<path d="M2 4.4a1 1 0 0 1 1-1h3.1l1.4 1.6H13a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>'+E,
  chev:S+'<path d="m4.5 6.2 3.5 3.5 3.5-3.5"/>'+E,
  plus:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 3.8v8.4M3.8 8h8.4"/></svg>',
  x:S+'<path d="m4.2 4.2 7.6 7.6M11.8 4.2l-7.6 7.6"/>'+E,
  search:S+'<circle cx="7" cy="7" r="4.3"/><path d="m10.3 10.3 3.2 3.2"/>'+E,
  bell:S+'<path d="M4 11V7.3a4 4 0 0 1 8 0V11l1.2 1.3H2.8z"/><path d="M6.7 13.9h2.6"/>'+E,
  menu:S+'<path d="M2.5 4.2h11M2.5 8h11M2.5 11.8h11"/>'+E,
  trash:S+'<path d="M2.8 4.5h10.4M6.4 4.5V3h3.2v1.5M4.2 4.5l.6 8.5a1 1 0 0 0 1 .9h4.4a1 1 0 0 0 1-.9l.6-8.5"/>'+E,
  alert:S+'<path d="M8 2.2 14.2 13H1.8z"/><path d="M8 6.4v3M8 11.2v.1"/>'+E,
  side:S+'<rect x="2" y="2.8" width="12" height="10.4" rx="1.6"/><path d="M6.2 2.8v10.4"/>'+E,
  unfold:S+'<path d="M8 2.2v4.2M5.9 4.3 8 2.2l2.1 2.1M8 13.8V9.6M5.9 11.7 8 13.8l2.1-2.1"/>'+E,
  arrow:S+'<path d="M3 8h10M9.6 4.6 13 8l-3.4 3.4"/>'+E,
  clock:S+'<circle cx="8" cy="8" r="6"/><path d="M8 4.8V8l2.2 1.4"/>'+E,
  eye:S+'<path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8s-2.4 4.4-6.4 4.4S1.6 8 1.6 8z"/><circle cx="8" cy="8" r="1.9"/>'+E,
  globe:S+'<circle cx="8" cy="8" r="6"/><path d="M2 8h12M8 2c1.7 1.8 2.5 3.8 2.5 6s-.8 4.2-2.5 6M8 2C6.3 3.8 5.5 5.8 5.5 8s.8 4.2 2.5 6"/>'+E,
  branch:S+'<circle cx="4.5" cy="3.8" r="1.6"/><circle cx="4.5" cy="12.2" r="1.6"/><circle cx="11.5" cy="5.4" r="1.6"/><path d="M4.5 5.4v5.2M11.5 7c0 2.6-2.8 3.1-6.6 3.8"/>'+E,
  md:S+'<rect x="1.5" y="3.5" width="13" height="9" rx="1.5"/><path d="M4 10.2V5.8l2 2.4 2-2.4v4.4M11 5.8v4.2M9.5 8.7l1.5 1.5 1.5-1.5"/>'+E
};

/* findings the reviewer can pick, in chip order (keys 1-5) */
var TY=[
 {l:'SQL injection',cwe:'CWE-89',c:'User input is formatted straight into this SQL. Pass it as a bound parameter so the database never reads it as code.'},
 {l:'Hard-coded secret',cwe:'CWE-798',c:'Live credential committed to the repo. Read it from the environment, and rotate this key: it’s in git history now.'},
 {l:'Missing authorisation',cwe:'CWE-862',c:'Nothing checks the caller’s role here any more. Signed in isn’t the same as allowed.'},
 {l:'Sensitive data in logs',cwe:'CWE-532',c:'This writes full customer records into the logs. Log who ran it and how many rows, never the rows.'},
 {l:'Looks fine',cwe:'',c:'Checked this one. Looks fine to me.'}
];

/* three pull requests. Lines start with ' ', '+' or '-'. at: 'file|sign|fragment', the first one is where a miss gets annotated */
var PRS=[
 {n:482,title:'Add order search endpoint',au:'jlin',av:'JL',ac:'#2F7A68',from:'feat/search-orders',commits:3,conv:2,
  desc:'Adds GET /orders/search so support can find orders by customer email.',
  win:['Caught before main.','get_order binds :id. search_orders pasted q into the SQL. Same file, two habits.'],
  files:[
   {p:'app/api/orders.py',hunks:[
    {o:3,n:3,fn:'from sqlalchemy import text',l:[
     ' ',
     ' from app.auth import login_required',
     ' from app.extensions import db',
     '+from app.serializers import order_summary',
     ' ',
     ' bp = Blueprint("orders", __name__, url_prefix="/orders")']},
    {o:16,n:17,fn:'bp = Blueprint("orders", __name__, url_prefix="/orders")',l:[
     ' def get_order(order_id: int):',
     '     sql = text("SELECT * FROM orders WHERE id = :id")',
     '     row = db.session.execute(sql, {"id": order_id}).mappings().first()',
     '     if row is None:',
     '         abort(404)',
     '-    return jsonify(dict(row))',
     '+    return jsonify(order_summary(row))',
     '+',
     '+',
     '+@bp.get("/search")',
     '+@login_required',
     '+def search_orders():',
     '+    q = request.args["q"].strip()',
     '+    limit = min(request.args.get("limit", 20, type=int), 100)',
     '+    sql = text(',
     '+        "SELECT id, customer_email, status, total_cents FROM orders "',
     '+        f"WHERE customer_email ILIKE \'%{q}%\' "',
     '+        "ORDER BY created_at DESC LIMIT :limit"',
     '+    )',
     '+    rows = db.session.execute(sql, {"limit": limit}).mappings().all()',
     '+    return jsonify([order_summary(r) for r in rows])']}]},
   {p:'app/serializers.py',hunks:[
    {o:9,n:9,fn:'def money(cents: int) -> str:',l:[
     '     return f"{cents / 100:.2f}"',
     '+',
     '+',
     '+def order_summary(row) -> dict:',
     '+    return {k: row[k] for k in ("id", "customer_email", "status", "total_cents")}']}]}],
  issues:[
   {t:0,at:['0|+|f"WHERE customer_email','0|+|    sql = text(','0|+|rows = db.session.execute(sql'],
    found:'get_order binds :id. search_orders formatted q into the SQL. Same file, two habits.',
    why:'It’s SQL injection: q from the URL is formatted into the query.',
    miss:'search_orders formats q straight into the SQL. One quote in the search box rewrites the query.'}]},
 {n:483,title:'Integrate payouts provider',au:'amaya-r',av:'AR',ac:'#9A5B2E',from:'feat/payouts-client',commits:4,conv:1,
  desc:'Payouts client for Penrill, plus config. Tested against their sandbox.',
  win:['Caught. Now rotate it.','Deleting the line won’t help. The key lives in git history, so it has to be rotated.'],
  files:[
   {p:'app/config.py',hunks:[
    {o:14,n:14,fn:'class Config:',l:[
     '     SQLALCHEMY_DATABASE_URI = os.environ["DATABASE_URL"]',
     '     SESSION_COOKIE_SECURE = True',
     '     SESSION_COOKIE_SAMESITE = "Lax"',
     '+',
     '+    # Payouts provider',
     '+    PAYOUTS_BASE_URL = "https://api.penrill.com/v2"',
     '+    PAYOUTS_API_KEY = "pk_live_7Hq2mX9vR4tK8sW1nB6cY3dF"',
     '+    PAYOUTS_WEBHOOK_SECRET = os.environ["PAYOUTS_WEBHOOK_SECRET"]',
     '+    PAYOUTS_TIMEOUT_S = 10']}]},
   {p:'app/payouts/client.py',nw:1,hunks:[
    {o:0,n:1,l:[
     '+import requests',
     '+from flask import current_app',
     '+',
     '+',
     '+def create_payout(account_id: str, amount_cents: int, currency: str) -> dict:',
     '+    cfg = current_app.config',
     '+    resp = requests.post(',
     '+        f"{cfg[\'PAYOUTS_BASE_URL\']}/payouts",',
     '+        json={"account": account_id, "amount": amount_cents, "currency": currency},',
     '+        headers={"Authorization": f"Bearer {cfg[\'PAYOUTS_API_KEY\']}"},',
     '+        timeout=cfg["PAYOUTS_TIMEOUT_S"],',
     '+    )',
     '+    resp.raise_for_status()',
     '+    return resp.json()']}]},
   {p:'tests/test_payouts.py',nw:1,hunks:[
    {o:0,n:1,l:[
     '+from app.payouts.client import create_payout',
     '+',
     '+',
     '+def test_create_payout(app, requests_mock):',
     '+    app.config["PAYOUTS_API_KEY"] = "test-key"',
     '+    requests_mock.post("https://api.penrill.com/v2/payouts", json={"id": "po_123"})',
     '+    with app.app_context():',
     '+        assert create_payout("acct_9", 1250, "eur")["id"] == "po_123"']}]}],
  issues:[
   {t:1,at:['0|+|PAYOUTS_API_KEY = "pk_live'],
    found:'A live key in config.py. Removing it isn’t enough: it’s in git history, so it has to be rotated.',
    why:'It’s a hard-coded secret: a live key committed in config.py.',
    miss:'config.py commits a live payouts key. Everyone with repo access has it now, and git history keeps it.'}]},
 {n:484,title:'Simplify admin export',au:'tkowalski',av:'TK',ac:'#5A5FC4',from:'chore/admin-export',commits:2,conv:0,
  desc:'The role check is redundant now that /admin sits behind SSO. Also logs exports for the audit trail.',
  win:['Both. Most stop at one.','One bug was a red line. Read what a pull request removes as closely as what it adds.'],
  part:'Found one. Stopped looking.',
  files:[
   {p:'app/admin/export.py',hunks:[
    {o:4,n:4,fn:'import logging',l:[
     ' ',
     ' from flask import Blueprint, Response',
     ' ',
     '-from app.auth import login_required, requires_role',
     '+from app.auth import login_required',
     ' from app.models import Customer',
     ' ',
     ' bp = Blueprint("admin_export", __name__, url_prefix="/admin")']},
    {o:13,n:13,fn:'logger = logging.getLogger(__name__)',l:[
     ' ',
     ' @bp.get("/export/customers.csv")',
     ' @login_required',
     '-@requires_role("admin")',
     ' def export_customers():',
     '     rows = [c.to_row() for c in Customer.query.order_by(Customer.id)]',
     '+    logger.info(f"exported {rows}")',
     '     buf = io.StringIO()',
     '     csv.writer(buf).writerows(rows)',
     '     return Response(buf.getvalue(), mimetype="text/csv")']}]},
   {p:'tests/admin/test_export.py',hunks:[
    {o:9,n:9,fn:'def test_export_returns_csv(admin_client):',l:[
     '     resp = admin_client.get("/admin/export/customers.csv")',
     '     assert resp.status_code == 200',
     '     assert resp.mimetype == "text/csv"',
     '-',
     '-',
     '-def test_export_forbidden_for_non_admin(client, login):',
     '-    login("support@northwind.dev")',
     '-    resp = client.get("/admin/export/customers.csv")',
     '-    assert resp.status_code == 403']}]}],
  issues:[
   {t:2,at:['0|-|@requires_role("admin")','0|-|from app.auth import login_required, requires_role','0|+|from app.auth import login_required','1|-|def test_export_forbidden_for_non_admin','1|-|    assert resp.status_code == 403'],
    found:'The fix was a deleted line. SSO says who someone is, not what they’re allowed to export.',
    why:'It’s missing authorisation: the admin role check was deleted.',
    miss:'The diff deleted @requires_role("admin"), and the test that checked it. Any signed-in user can now download every customer.'},
   {t:3,at:['0|+|logger.info(f"exported'],
    found:'Audit the event, not the data. Log who exported and how many rows.',
    why:'It’s sensitive data in logs: every exported row goes into the log.',
    miss:'logger.info(f"exported {rows}") copies every customer’s details into the logs, where far more people can read them.'}]}
];

/* ---------- a small Python highlighter: keywords, strings, f-strings, comments, decorators, numbers, names ---------- */
var KW=' and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield ';
var CON=' None True False ';
var BI=' abs all any bool dict enumerate float int len list max min object open print range repr round set sorted str sum super tuple zip isinstance ';
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function sp(c,s){return '<span class="cr-y'+c+'">'+esc(s)+'</span>'}
function colon(s){var d=0,q=null;for(var i=0;i<s.length;i++){var c=s[i];if(q){if(c===q)q=null;continue}if(c==='"'||c==="'"){q=c;continue}if('([{'.indexOf(c)>=0)d++;else if(')]}'.indexOf(c)>=0)d--;else if(c===':'&&!d)return i}return -1}
function fstr(s,pl){var q=s[pl-1],body=s.slice(pl),end='',o='<span class="cr-ys">'+esc(s.slice(0,pl)),k=0;
  if(body.length&&body[body.length-1]===q){end=q;body=body.slice(0,-1)}
  while(k<body.length){var ch=body[k];
    if(ch==='{'&&body[k+1]==='{'){o+='{{';k+=2;continue}
    if(ch==='{'){var d=1,j=k+1;while(j<body.length){if(body[j]==='{')d++;else if(body[j]==='}'){d--;if(!d)break}j++}
      var inner=body.slice(k+1,j),fmt='',ci=colon(inner);if(ci>=0){fmt=inner.slice(ci);inner=inner.slice(0,ci)}
      o+='</span><span class="cr-yi">{</span>'+py(inner)+(fmt?'<span class="cr-ys">'+esc(fmt)+'</span>':'')+'<span class="cr-yi">}</span><span class="cr-ys">';k=j+1;continue}
    o+=esc(ch);k++}
  return o+esc(end)+'</span>'}
function py(src){var o='',i=0,n=src.length,prev='',lead=true,m;
  while(i<n){var r=src.slice(i),c=src[i];
    if(c===' '||c==='\t'){m=r.match(/^[ \t]+/)[0];o+=m;i+=m.length;continue}
    if(c==='#'){o+=sp('c',r);break}
    m=r.match(/^([rRbBuUfF]{1,2})?("|')/);
    if(m&&(!m[1]||i===0||!/\w/.test(src[i-1]))){var pre=m[1]||'',q=m[2],j=i+m[0].length;
      while(j<n&&src[j]!==q){if(src[j]==='\\')j++;j++}
      j=Math.min(n,j+1);var s=src.slice(i,j);o+=/f/i.test(pre)?fstr(s,pre.length+1):sp('s',s);i=j;prev='';lead=false;continue}
    if(lead&&c==='@'&&(m=r.match(/^@[\w.]+/))){o+=sp('d',m[0]);i+=m[0].length;lead=false;continue}
    if((m=r.match(/^\d[\d_]*(\.\d+)?/))&&!(i>0&&/\w/.test(src[i-1]))){o+=sp('n',m[0]);i+=m[0].length;lead=false;continue}
    if(m=r.match(/^[A-Za-z_]\w*/)){var w=m[0],call=src[i+w.length]==='(',cl='';
      if(prev==='def')cl='f';else if(prev==='class')cl='t';
      else if(KW.indexOf(' '+w+' ')>=0)cl='k';
      else if(CON.indexOf(' '+w+' ')>=0)cl='n';
      else if(BI.indexOf(' '+w+' ')>=0||/^__\w+__$/.test(w))cl='b';
      else if(call)cl='f';
      else if(w.length>1&&/^[A-Z][A-Z0-9_]+$/.test(w))cl='n';
      else if(/^[A-Z]/.test(w))cl='t';
      o+=cl?sp(cl,w):esc(w);prev=w;i+=w.length;lead=false;continue}
    o+=esc(c);i++;lead=false;if(c!=='.')prev=''}
  return o}

/* ---------- the "before": slide 9 of 31 ---------- */
function slide(){return '<div class="lms-top"><span class="lms-ti"><span class="hl" data-n="0">Secure Coding Standard v3.2 · 7.4 Input Validation</span></span><span class="lms-no">Slide 9 of 31</span></div>'+
  '<div class="lms-mid"><div class="cr-lm"><p class="cr-lp"><b>7.4.1</b> All data received from users, files and external systems shall be treated as untrusted. Developers <span class="hl" data-n="1">shall ensure that untrusted data is not used in a manner that could result in an injection vulnerability</span>.<span class="cr-lpx"> Approved validation routines are listed in Appendix C.</span></p>'+
  '<div class="cr-kc"><div class="cr-kch">Knowledge Check</div><p class="cr-kcq"><span class="hl" data-n="2">Which of the following is a type of injection attack?</span></p>'+
  '<ul class="cr-kco"><li><i></i>A) SQL injection</li><li><i></i>B) Cross-site scripting</li><li><i></i><span class="hl" data-n="3" data-mk="r">C) Both of the above</span></li><li><i></i>D) None of the above</li></ul><span class="cr-kcb">Submit</span></div></div>'+
  '<div class="lms-art cr-shield" data-ps><i></i></div></div>'+
  '<div class="lms-prog"><i style="width:29%"></i></div><div class="lms-bot"><span class="lms-hint">Click NEXT to continue.</span><span class="lms-btns"><span class="lms-btn">&#9664; BACK</span><span class="lms-btn">NEXT &#9654;</span></span></div>'}

/* ---------- the app shell ---------- */
function tab(k,ic,l,id,on){return '<button class="cr-tab'+(on?' on':'')+'" type="button" data-a="tab" data-tab="'+k+'"'+(on?' aria-current="page"':'')+'>'+ic+'<span'+(on?' data-pt="t"':'')+'>'+l+'</span><em id="'+id+'"></em></button>'}
function app(){
  return '<div class="cr" id="cr">'+
  '<header class="cr-top"><span class="cr-ic cr-burger">'+I.menu+'</span><span class="cr-logo" data-pt="b">'+I.anvil+'</span>'+
   '<span class="cr-crumb"><span class="cr-org">northwind</span><i>/</i><b data-pt="t">payments-api</b><span class="cr-priv">Private</span></span>'+
   '<nav class="cr-rnav" aria-label="Repository"><span>Code</span><span class="on">Pull requests<em>12</em></span><span>Pipelines</span><span>Security</span><span>Insights</span></nav>'+
   '<span class="cr-search" data-pt="e">'+I.search+'<span>Search or jump to…</span><kbd>/</kbd></span><span class="cr-ic cr-bell">'+I.bell+'</span><span class="cr-me">AK</span></header>'+
  '<div class="cr-stage" id="cr-stage"><section class="cr-prh" id="cr-prh" aria-label="Pull request"></section>'+
   '<div class="cr-tabs"><div class="cr-tsc" id="cr-tsc" data-lenis-prevent>'+tab('conv',I.conv,'Conversation','cr-nc')+tab('commits',I.commit,'Commits','cr-nm')+tab('checks','<span class="cr-ok">'+I.check+'</span>','Checks','cr-nk')+tab('files',I.diff,'Files changed','cr-nf',1)+'</div>'+
    '<span class="cr-stat" id="cr-stat"></span><button class="cr-sub" id="cr-sub" type="button" data-a="sub" aria-haspopup="dialog" aria-expanded="false" data-pt="b"><span>Submit review</span><em id="cr-cnt"></em>'+I.chev+'</button></div>'+
   '<div class="cr-main"><aside class="cr-tree" aria-label="Changed files"><div class="cr-fil">'+I.search+'<span>Filter changed files</span></div><div class="cr-tl" id="cr-tl" data-lenis-prevent></div></aside>'+
    '<section class="cr-dw" aria-label="Diff"><div class="cr-ftb"><button class="cr-tg" type="button" data-a="tree" aria-label="Toggle file tree">'+I.side+'</button>'+
     '<button class="cr-files" type="button" data-a="files">'+I.file+'<span>Files</span><em id="cr-nf2"></em>'+I.chev+'</button><span class="cr-stat cr-stat2" id="cr-stat2"></span>'+
     '<span class="cr-all">Changes from <b>all commits</b></span><span class="cr-sp"></span><span class="cr-keys" aria-hidden="true"><kbd>j</kbd><kbd>k</kbd>line<kbd>c</kbd>comment<kbd>&#8629;</kbd>review</span><span class="cr-vwd" id="cr-vwd"></span></div>'+
     '<div class="cr-res" id="cr-res" aria-live="polite"><div></div></div><div class="cr-diff" id="cr-diff" data-lenis-prevent></div></section></div></div>'+
  '<div class="cr-scrim" id="cr-scrim" data-a="scrim"></div>'+
  '<div class="cr-pop" id="cr-pop" role="dialog" aria-label="Finish your review"></div>'+
  '<div class="cr-sheet cr-fsh" id="cr-fsh" role="dialog" aria-label="Changed files"></div>'+
  '<div class="cr-sheet cr-csh" id="cr-csh" role="dialog" aria-label="Review comment"></div></div>'}

function init(api){
  function $$x(q){return api.$$(q).filter(function(e){return !e.closest('.cr-turn')})}
  function $x(q){return $$x(q)[0]||null}
  var D=document,root=$x('#cr'),stage=$x('#cr-stage'),prh=$x('#cr-prh'),tl=$x('#cr-tl'),diff=$x('#cr-diff'),res=$x('#cr-res'),pop=$x('#cr-pop'),
    scrim=$x('#cr-scrim'),fsh=$x('#cr-fsh'),csh=$x('#cr-csh'),sub=$x('#cr-sub'),tsc=$x('#cr-tsc');
  var pi=0,P=null,LN=[],KM={},cm={},box=null,boxEl=null,sel=-1,cur=-1,phase='idle',dec='comment',typ=null,tm=null,cd=null,R=[],ended=false,fold={},nar=api.narrow(),told={},riding=false,dead=false;
  root.classList.toggle('nar',nar);
  function rnd(){return 'PR '+(pi+1)+' of '+PRS.length+' · #'+P.n}
  function lab(L){return L.g==='-'?'L'+L.on:'R'+L.nn}
  function focusIn(el){if(el&&!api.paused())try{el.focus({preventScroll:true})}catch(e){}}
  function smooth(y){diff.scrollTo({top:Math.max(0,y),behavior:api.rm?'auto':'smooth'})}
  function hdrH(){var h=$x('.cr-fh');return h?h.offsetHeight:0}
  function onOff(el){return el.classList.contains('on')}
  function unfocus(el){var a=D.activeElement;if(a&&el&&el.contains(a)&&a.blur)a.blur()}
  function syncScrim(){scrim.classList.toggle('on',onOff(fsh)||(nar&&(onOff(pop)||onOff(csh))))}
  function setUrl(){if(api.url)api.url('forge.northwind.dev/payments-api/pulls/'+P.n+'/files')}

  /* ---------- rendering one pull request ---------- */
  function fileHTML(f,fi){var a=0,d=0,rows='';
    f.hunks.forEach(function(h){var o=h.o,n=h.n,oc=0,nc=0;h.l.forEach(function(s){if(s[0]!=='+')oc++;if(s[0]!=='-')nc++});
      rows+='<div class="cr-hk"><span class="cr-g">'+I.unfold+'</span><span class="cr-m"></span><span class="cr-c">@@ -'+o+','+oc+' +'+n+','+nc+' @@'+(h.fn?' '+esc(h.fn):'')+'</span></div>';
      h.l.forEach(function(s){var g=s[0],code=s.slice(1),k='L'+LN.length,L={k:k,fi:fi,g:g,code:code,on:g!=='+'?o:0,nn:g!=='-'?n:0};
        if(g!=='+')o++;if(g!=='-')n++;if(g==='+')a++;if(g==='-')d++;LN.push(L);KM[k]=L;
        rows+='<div class="cr-l '+(g==='+'?'add':g==='-'?'del':'ctx')+'" data-k="'+k+'"><span class="cr-g"><button class="cr-n" type="button" tabindex="-1" data-a="line" aria-label="Comment on line '+lab(L)+'"><span class="o">'+(L.on||'')+'</span><span class="n">'+(L.nn||'')+'</span></button>'+
          '<button class="cr-plus" type="button" tabindex="-1" data-a="line" aria-label="Add a comment on line '+lab(L)+'">'+I.plus+'</button></span><span class="cr-m">'+(g==='+'?'+':g==='-'?'−':'')+'</span>'+
          '<code class="cr-c"'+(pi===0&&LN.length<=14&&code.trim()?' data-pt="t"':'')+'>'+py(code)+'</code></div>'})});
    f.a=a;f.d=d;var parts=f.p.split('/'),name=parts.pop(),dir=parts.length?parts.join('/')+'/':'';
    return '<article class="cr-file" id="cr-f'+fi+'"><header class="cr-fh"'+(pi===0?' data-pt="e"':'')+'><button class="cr-fc" type="button" data-a="fold" aria-expanded="true" aria-label="Collapse '+name+'">'+I.chev+'</button>'+
      '<span class="cr-fp"><span>'+dir+'</span><b>'+name+'</b></span>'+(f.nw?'<span class="cr-new">New file</span>':'')+'<span class="cr-fs"><b class="a">+'+a+'</b><b class="d">−'+d+'</b></span><span class="cr-sp"></span>'+
      '<button class="cr-vw" type="button" role="checkbox" aria-checked="false" data-a="viewed"><i>'+I.check+'</i>Viewed</button></header><div class="cr-fb"><div class="cr-tb">'+rows+'</div></div></article>'}
  function tree(){var h='',last=[];
    P.files.forEach(function(f,fi){var parts=f.p.split('/'),name=parts.pop(),s=0;while(s<parts.length&&s<last.length&&parts[s]===last[s])s++;
      for(var d=s;d<parts.length;d++)h+='<div class="cr-td" style="--d:'+d+'">'+I.chev+I.folder+'<span>'+parts[d]+'</span></div>';last=parts;
      h+='<button class="cr-tf'+(fi===0?' on':'')+'" type="button" data-a="file" data-f="'+fi+'" style="--d:'+parts.length+'">'+I.file+'<span'+(pi===0?' data-pt="t"':'')+'>'+name+'</span><em class="cr-tcm" data-f="'+fi+'"></em><i class="'+(f.nw?'a':'m')+'">'+(f.nw?'A':'M')+'</i></button>'});
    tl.innerHTML=h;
    fsh.innerHTML='<div class="cr-shh"><b>Files changed</b><span>'+P.files.length+'</span><button class="cr-shx" type="button" data-a="scrim" aria-label="Close">'+I.x+'</button></div><div class="cr-shl" data-lenis-prevent>'+
      P.files.map(function(f,fi){var parts=f.p.split('/'),name=parts.pop();return '<button class="cr-sf" type="button" data-a="file" data-f="'+fi+'">'+I.file+'<span><b>'+name+'</b><small>'+(parts.join('/')||'/')+'</small></span><em class="cr-tcm" data-f="'+fi+'"></em><code><b class="a">+'+f.a+'</b><b class="d">−'+f.d+'</b></code></button>'}).join('')+'</div>'}
  function render(){P=PRS[pi];cm={};box=null;boxEl=null;sel=-1;cur=-1;dec='comment';fold={};LN=[];KM={};
    root.classList.remove('kb','done');sub.disabled=false;
    prh.innerHTML='<h1 class="cr-h1"><span data-pt="t">'+P.title+'</span> <span class="cr-num">#'+P.n+'</span></h1>'+
      '<div class="cr-meta"><span class="cr-pill" id="cr-pill" data-pt="f">'+I.pr+'<span>Open</span></span>'+
      '<span class="cr-by"><span class="cr-av" style="background:'+P.ac+'">'+P.av+'</span><b>'+P.au+'</b><span class="cr-wm">wants to merge '+P.commits+' commits</span></span>'+
      '<span class="cr-br"><code>'+P.from+'</code>'+I.arrow+'<code>main</code></span><span class="cr-rv" id="cr-rv"></span></div>'+
      '<p class="cr-desc">'+I.conv+'<span>'+P.desc+'</span></p>'+zHTML();
    var h='';P.files.forEach(function(f,fi){h+=fileHTML(f,fi)});diff.innerHTML=h;diff.scrollTop=0;
    [].forEach.call(diff.querySelectorAll('.cr-l'),function(el,i){LN[i].el=el});
    P.issues.forEach(function(is){is.keys=[];is.at.forEach(function(a){var p=a.split('|'),fi=+p[0],g=p[1],x=p.slice(2).join('|');
      for(var i=0;i<LN.length;i++){var L=LN[i];if(L.fi===fi&&L.g===g&&L.code.indexOf(x)>=0){is.keys.push(L.k);break}}})});
    var A=0,Dl=0;P.files.forEach(function(f){A+=f.a;Dl+=f.d});
    $x('#cr-stat').innerHTML=$x('#cr-stat2').innerHTML='<b class="a">+'+A+'</b><b class="d">−'+Dl+'</b>';
    $x('#cr-nc').textContent=P.conv;$x('#cr-nm').textContent=P.commits;$x('#cr-nk').textContent='4';$x('#cr-nf').textContent=$x('#cr-nf2').textContent=P.files.length;
    tree();viewed();count();res.classList.remove('on');res.innerHTML='<div></div>';setUrl();
    var t=$x('.cr-tab.on');if(t)tsc.scrollLeft=Math.max(0,t.offsetLeft+t.offsetWidth-tsc.clientWidth+6)}

  /* ---------- the release path: a small physical model of where this pull request goes ---------- */
  var ZN=['Branch','Checks','Review','main','production'],ZS=['','4 passed','Waiting on you','Protected','Live'];
  function zHTML(){var ic=[I.branch,I.check,I.eye,I.merge,I.globe],b='',lb='';
    for(var i=0;i<5;i++){
      b+='<div class="cr-zb s'+i+(i===1?' ok':i===2?' pend':'')+'" role="button" tabindex="0" data-a="stage" data-s="'+i+'" style="--i:'+i+'" aria-label="'+(i===0?'Branch '+P.from:ZN[i])+'">'+
        '<i class="cr-zt'+(i===4?' full':'')+'"></i>'+(i===4?'<i class="cr-zt h1"></i><i class="cr-zt h2"></i>':'')+'<i class="cr-zt cr-zi'+(i===4?' crk':'')+'">'+ic[i]+(i===4?'<svg class="cr-zcr" viewBox="0 0 40 24" aria-hidden="true"><path d="M21 0 18 7 23 12 19 18 21 24"/></svg>':'')+'</i>'+
        '<i class="cr-zn"></i><i class="cr-zs l"></i><i class="cr-zs r"></i></div><i class="cr-zo" style="--i:'+i+'"></i>';
      lb+='<span class="cr-zy s'+i+'" id="cr-zy'+i+'" style="--i:'+i+'"><b>'+(i===0?P.from:ZN[i])+'</b><span>'+(i===0?P.commits+' commits':ZS[i])+'</span></span>'}
    return '<div class="cr-zl" id="cr-zl" role="group" aria-label="Release path"><div class="cr-zc"><div class="cr-zv"><div class="cr-zw"><div class="cr-zf" data-pt="e"></div><i class="cr-zr"></i>'+b+
      '<div class="cr-zk" id="cr-zk"><i class="cr-zd"></i><div class="cr-zh"><span class="cr-zp" data-pt="b">'+I.pr+'<b>#'+P.n+'</b></span></div></div></div></div><div class="cr-zx">'+lb+'</div></div></div>'}
  /* one small animation loop: pointer springs plus tweens, only while something moves */
  var BAX=46,SP={x:{ax:BAX,az:0,lx:50},v:{ax:0,az:0,lx:0},t:{ax:BAX,az:0,lx:50}},anims=[],raf=0,hov=false;
  function kick(){if(!raf&&!dead)raf=requestAnimationFrame(loop)}
  function loop(now){raf=0;if(dead)return;var live=false;
    ['ax','az','lx'].forEach(function(k){var x=SP.x[k],v=SP.v[k],t=SP.t[k];v=(v+(t-x)*.085)*.8;x+=v;if(Math.abs(t-x)<.01&&Math.abs(v)<.01){x=t;v=0}else live=true;SP.x[k]=x;SP.v[k]=v});
    tilt();
    for(var i=0;i<anims.length;i++){var a=anims[i],k=a.d?Math.min(1,(now-a.t0)/a.d):1;a.f(k);if(k>=1){anims.splice(i,1);i--;if(a.done)a.done()}else live=true}
    if(anims.length)live=true;
    if(live){if(api.paused())api.after(200,kick);else raf=requestAnimationFrame(loop)}}
  function tween(d,f,done){anims.push({t0:performance.now(),d:api.rm?0:d,f:f,done:done});kick()}
  function tilt(){var z=$x('#cr-zl');if(!z)return;z.style.setProperty('--ax',SP.x.ax.toFixed(2)+'deg');z.style.setProperty('--az',SP.x.az.toFixed(2)+'deg');z.style.setProperty('--lx',SP.x.lx.toFixed(1)+'%')}
  function onMove(e){if(e.pointerType!=='mouse'||api.rm)return;var z=e.target.closest&&e.target.closest('#cr-zl');
    if(z){var r=z.getBoundingClientRect(),px=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),py=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height)),hb=e.target.closest('.cr-zb');
      SP.t.ax=BAX-(hb?9:4)-(py-.5)*5;SP.t.az=(px-.5)*7;SP.t.lx=px*100;hov=true;hover(hb);kick()}
    else if(hov)rest()}
  function hover(b){$$x('#cr-zl .cr-zb').forEach(function(x){x.classList.toggle('hv',x===b)});$$x('#cr-zl .cr-zy').forEach(function(y,i){y.classList.toggle('hv',!!b&&+b.getAttribute('data-s')===i)})}
  function rest(){hov=false;hover(null);SP.t.ax=BAX;SP.t.az=0;SP.t.lx=50;kick()}
  function zb(i){return $x('#cr-zl .cr-zb.s'+i)}
  function zsub(i,t,c){var y=$x('#cr-zy'+i);if(!y)return;y.querySelector('span').textContent=t;y.className='cr-zy s'+i+(c?' '+c:'')}
  function zst(i,c){var b=zb(i);if(!b)return;b.classList.remove('pend','ok','pass','wait','rej','back','merged');if(c)b.classList.add(c)}
  function setTok(s,z){var k=$x('#cr-zk'),l=$x('#cr-zl');if(!k)return;k.style.setProperty('--kx',(s*6).toFixed(3)+'em');k.style.setProperty('--kz',z.toFixed(3)+'em');
    k.style.setProperty('--ks',Math.max(.4,1-z*.16).toFixed(3));k.style.setProperty('--ko',Math.max(.25,1-z*.22).toFixed(3));if(l)l.style.setProperty('--rw',(s*6).toFixed(3)+'em');follow(s)}
  function follow(s){var l=$x('#cr-zl');if(!l||l.scrollWidth<=l.clientWidth+2)return;var y=$x('#cr-zy0'),w=y?y.parentNode.offsetWidth:l.scrollWidth,x=w/2+(s-2)*6.22*parseFloat(getComputedStyle(l).fontSize);l.scrollLeft=x-l.clientWidth/2}
  function squash(){var k=$x('#cr-zk');if(!k||api.rm)return;tween(380,function(t){var e=Math.exp(-5*t)*Math.cos(13*t),x=$x('#cr-zk');if(!x)return;x.style.setProperty('--sy',(1-.16*e).toFixed(3));x.style.setProperty('--sx',(1+.1*e).toFixed(3))})}
  function land(i,quiet){var b=zb(i);if(b&&!api.rm){b.classList.remove('hit');void b.offsetWidth;b.classList.add('hit')}squash();if(!quiet)api.sfx('tap')}
  function hop(a,b,cb){var n=Math.abs(b-a),h=(.85+.5*n)*(nar?.6:1);tween(300+150*n,function(k){var e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;setTok(a+(b-a)*e,Math.sin(Math.PI*k)*h)},function(){setTok(b,0);land(b);if(cb)cb()})}
  function seq(p,onLand,done){var i=0;(function go(){if(i>=p.length-1){if(done)done();return}var b=p[i+1];hop(p[i++],b,function(){if(onLand)onLand(b);go()})})()}
  function drop(){if(dead)return;setTok(0,api.rm?0:2.6);if(api.rm)return;var hit=false;
    tween(640,function(k){var z;if(k<.62)z=2.6*(1-Math.pow(k/.62,2));else{if(!hit){hit=true;land(0,true);api.sfx('drop')}z=.32*Math.sin((k-.62)/.38*Math.PI)}setTok(0,Math.max(0,z))},function(){setTok(0,0)})}
  function ride(r,done){riding=true;var d=r.dec,tk=$x('#cr-zk');function end(){riding=false;done()}
    if(d==='changes')seq([0,1,2],null,function(){zst(2,'rej');zsub(2,'Blocked','x');api.after(api.rm?0:280,function(){seq([2,0],null,function(){zst(0,'back');zsub(0,'Back to '+P.au,'m');end()})})});
    else if(d==='approve'&&r.open)seq([0,1,2,3,4],function(i){if(i===2){zst(2,'pass');zsub(2,'Approved')}if(i===3){zst(3,'merged');zsub(3,'Merged','v');if(tk)tk.classList.add('m')}},function(){crack();end()});
    else if(d==='approve')seq([0,1,2,3],function(i){if(i===2){zst(2,'pass');zsub(2,'Approved')}},function(){zst(3,'merged');zsub(3,'Merged','v');zsub(4,'Deploy queued');if(tk)tk.classList.add('m');end()});
    else seq([0,1,2],null,function(){zst(2,'wait');zsub(2,r.auto?'Timed out':'Commented','m');end()})}
  function crack(){var b=zb(4),tk=$x('#cr-zk'),l=$x('#cr-zl');if(b){b.classList.add('crack');if(!api.rm){b.classList.remove('hit','shk');void b.offsetWidth;b.classList.add('shk')}}
    if(tk){tk.classList.remove('m');tk.classList.add('bad')}if(l)l.classList.add('cracked');zsub(4,'Bug is live','x');api.sfx('stamp')}
  var ZT=[null,['All 4 checks passed','Tests prove it works. They don’t prove it’s safe.'],['Review is you','The last gate a person controls before main.'],['main deploys itself','Anything merged here ships to production on its own.'],['Production','What customers run. Whatever you approve ends up here.']];
  /* a real page turn between pull requests: the old page is cloned and turned away over the new one */
  function turn(cb){if(api.rm){cb();return}
    var cl=stage.cloneNode(true),sy=diff.scrollTop,ty=tl.scrollTop;cl.removeAttribute('id');
    [].forEach.call(cl.querySelectorAll('[id]'),function(e){e.removeAttribute('id')});[].forEach.call(cl.querySelectorAll('[data-pt]'),function(e){e.removeAttribute('data-pt')});
    cl.className='cr-stage cr-turn';cl.setAttribute('aria-hidden','true');cl.inert=true;cl.style.top=stage.offsetTop+'px';cl.style.height=stage.offsetHeight+'px';
    root.appendChild(cl);var a=cl.querySelector('.cr-diff'),b=cl.querySelector('.cr-tl');if(a)a.scrollTop=sy;if(b)b.scrollTop=ty;
    cb();stage.classList.add('dim');void cl.offsetWidth;
    requestAnimationFrame(function(){requestAnimationFrame(function(){cl.classList.add('go');stage.classList.remove('dim')})});
    api.after(900,function(){if(cl.parentNode)cl.remove()})}

  /* ---------- counts, viewed, folding, tree ---------- */
  function count(){var n=Object.keys(cm).length,per={};$x('#cr-cnt').textContent=n||'';
    Object.keys(cm).forEach(function(k){var f=KM[k].fi;per[f]=(per[f]||0)+1});
    $$x('.cr-tcm').forEach(function(e){var c=per[e.getAttribute('data-f')];e.innerHTML=c?I.conv+c:''})}
  function viewed(){var n=$$x('.cr-vw[aria-checked="true"]').length;$x('#cr-vwd').innerHTML='<i>'+I.check+'</i>'+n+' / '+P.files.length+'<span> files</span> viewed'}
  function setFold(fi,on){var f=$x('#cr-f'+fi);if(!f)return;f.classList.toggle('fold',on);fold[fi]=on;f.querySelector('.cr-fc').setAttribute('aria-expanded',String(!on));
    if(on&&box!=null&&KM[box].fi===fi)closeBox(true)}
  function spy(){var y=diff.scrollTop+24,on=0;$$x('.cr-file').forEach(function(f,i){if(f.offsetTop<=y)on=i});$$x('.cr-tf').forEach(function(t){t.classList.toggle('on',+t.getAttribute('data-f')===on)})}
  function goFile(fi){closeFiles();var f=$x('#cr-f'+fi);if(!f)return;if(fold[fi])setFold(fi,false);smooth(f.offsetTop-10);api.sfx('click')}

  /* ---------- the line cursor (j/k) ---------- */
  function setCur(i,kb){if(cur>=0&&LN[cur])LN[cur].el.classList.remove('cur');cur=i;if(i<0)return;var L=LN[i];L.el.classList.add('cur');
    if(kb){root.classList.add('kb');keep(L.el)}}
  function keep(el){var d=diff.getBoundingClientRect(),r=el.getBoundingClientRect(),hh=hdrH()+6;
    if(r.top<d.top+hh)diff.scrollTop-=d.top+hh-r.top;else if(r.bottom>d.bottom-10)diff.scrollTop+=r.bottom-d.bottom+10}
  function move(dir){var i=cur<0?(dir>0?-1:LN.length):cur;do{i+=dir}while(i>=0&&i<LN.length&&fold[LN[i].fi]);if(i<0||i>=LN.length)return;setCur(i,true)}
  function reveal(el,pad,top){pad=pad||12;var d=diff.getBoundingClientRect(),r=el.getBoundingClientRect(),t=top?Math.min(top.getBoundingClientRect().top,r.top):r.top,hh=hdrH(),y=diff.scrollTop;
    if(r.bottom>d.bottom-pad)y+=Math.min(r.bottom-d.bottom+pad,t-d.top-hh-pad);else if(t<d.top+hh+pad)y-=d.top+hh+pad-t;else return;smooth(y)}

  /* ---------- the inline review comment ---------- */
  function boxHTML(L){var ex=cm[L.k];
    return '<div class="cr-bw"><div class="cr-bh"><b>Comment on line '+lab(L)+'</b><span class="cr-bfn">'+P.files[L.fi].p+'</span><button class="cr-bx" type="button" data-a="cancel" aria-label="Close">'+I.x+'</button></div>'+
      '<div class="cr-bl '+(L.g==='+'?'add':L.g==='-'?'del':'')+'"><span>'+(L.on||L.nn)+'</span><code>'+(py(L.code)||'&nbsp;')+'</code></div>'+
      '<div class="cr-ch" role="radiogroup" aria-label="Finding"><span class="cr-bk">Finding</span>'+TY.map(function(t,i){return '<button class="cr-chip'+(i===4?' ok':'')+'" type="button" role="radio" aria-checked="'+(sel===i)+'" data-a="chip" data-c="'+i+'"><kbd>'+(i+1)+'</kbd>'+t.l+'</button>'}).join('')+'</div>'+
      '<div class="cr-ed"><div class="cr-tx"></div><div class="cr-edf">'+I.md+'<span>Markdown is supported</span></div></div>'+
      '<div class="cr-bb"><span class="cr-need">Pick a finding first</span><button class="cr-cancel" type="button" data-a="cancel">Cancel</button><button class="cr-add" type="button" data-a="add"'+(sel<0?' disabled':'')+'>'+(ex?'Update comment':'Add review comment')+'</button></div></div>'}
  function openBox(k){if(phase!=='review')return;closePop(true);closeFiles();if(box===k&&boxEl)return;closeBox(true);
    var L=KM[k];box=k;sel=cm[k]?cm[k].t:-1;setCur(LN.indexOf(L));L.el.classList.add('on');
    var el=D.createElement('div');el.className='cr-box';el.innerHTML=boxHTML(L);boxEl=el;
    if(nar){csh.innerHTML='';csh.appendChild(el);csh.classList.add('on');syncScrim();var d=diff.getBoundingClientRect(),r=L.el.getBoundingClientRect();smooth(diff.scrollTop+r.top-d.top-hdrH()-10)}
    else{var th=thr(k);if(th)th.classList.add('hid');(th||L.el).after(el);api.after(40,function(){if(boxEl===el)reveal(el,12,L.el)})}
    if(sel>=0){var tx=el.querySelector('.cr-tx');tx.textContent=TY[sel].c;tx.classList.add('done')}
    api.sfx('open');focusIn(el.querySelector(sel>=0?'.cr-chip[data-c="'+sel+'"]':'.cr-chip'))}
  function clearType(){if(typ){clearInterval(typ);typ=null}}
  function closeBox(quiet){clearType();if(box==null)return;var L=KM[box];if(L&&L.el)L.el.classList.remove('on');var th=thr(box);if(th)th.classList.remove('hid');
    var e=boxEl;unfocus(e);box=null;boxEl=null;sel=-1;
    if(e){if(e.parentNode===csh){csh.classList.remove('on');syncScrim();api.after(450,function(){if(e!==boxEl&&e.parentNode)e.remove()})}else e.remove()}
    if(!quiet)api.sfx('click')}
  function pick(i){if(!boxEl)return;sel=i;$$x('.cr-box .cr-chip').forEach(function(c){c.setAttribute('aria-checked',String(+c.getAttribute('data-c')===i))});
    var a=boxEl.querySelector('.cr-add');a.disabled=false;boxEl.classList.remove('need');api.sfx('tap');type(i);focusIn(a)}
  function type(i){var tx=boxEl.querySelector('.cr-tx'),s=TY[i].c,n=0;clearType();tx.classList.remove('done');
    if(api.rm){tx.textContent=s;tx.classList.add('done');return}
    typ=api.every(16,function(){n=Math.min(s.length,n+2);tx.textContent=s.slice(0,n);if(n%10===0)api.sfx('key');if(n>=s.length){clearType();tx.classList.add('done')}})}
  function add(){if(box==null)return;if(sel<0){boxEl.classList.remove('need');void boxEl.offsetWidth;boxEl.classList.add('need');return}
    var k=box;cm[k]={t:sel};closeBox(true);var th=thread(k,true);count();api.sfx('pin');if(!nar)api.after(40,function(){reveal(th,12,KM[k].el)})}
  function thr(k){return diff.querySelector('.cr-th[data-k="'+k+'"]')}
  function thread(k,fresh){var old=thr(k);if(old)old.remove();var L=KM[k],c=cm[k],t=TY[c.t],el=D.createElement('div');el.className='cr-th'+(fresh&&!api.rm?' new':'');el.setAttribute('data-k',k);
    el.innerHTML='<div class="cr-tc"><span class="cr-av me">AK</span><div class="cr-tm"><div class="cr-tmh"><b>akim</b><span class="cr-lab'+(c.t===4?' ok':'')+'">'+t.l+'</span><span class="cr-pend">Pending</span><span class="cr-vd"></span>'+
      '<button class="cr-del" type="button" data-a="del" aria-label="Delete comment">'+I.trash+'</button></div><p>'+t.c+'</p></div></div>';
    L.el.after(el);L.el.classList.add('has');if(fresh&&!api.rm)api.after(30,function(){el.classList.remove('new')});return el}
  function del(k){delete cm[k];var th=thr(k);if(th)th.remove();if(KM[k])KM[k].el.classList.remove('has');count();api.sfx('click')}

  /* ---------- submit review ---------- */
  function opt(v,l,d){return '<button class="cr-op" type="button" role="radio" aria-checked="'+(dec===v)+'" data-a="dec" data-v="'+v+'"><i></i><span><b>'+l+'</b><small>'+d+'</small></span></button>'}
  function popHTML(){var n=Object.keys(cm).length;
    return '<div class="cr-ph"><b>Finish your review</b><button class="cr-px" type="button" data-a="popx" aria-label="Close">'+I.x+'</button></div><div class="cr-sum" id="cr-sum"></div>'+
      '<div class="cr-opts" role="radiogroup" aria-label="Review type">'+opt('comment','Comment','Feedback only. Doesn’t approve or block.')+opt('approve','Approve','Looks good. The author can merge.')+opt('changes','Request changes','Blocks merging until your comments are addressed.')+'</div>'+
      '<div class="cr-pf"><span>'+(n?n+' pending comment'+(n>1?'s':''):'No pending comments')+'</span><button class="cr-go" type="button" data-a="go">Submit review<kbd>&#8629;</kbd></button></div>'}
  function setSum(){var s=$x('#cr-sum');if(s)s.textContent={comment:'',approve:'Looks good to me.',changes:'Blocking until the flagged lines are fixed.'}[dec]}
  function placePop(){if(nar)return;var r=root.getBoundingClientRect(),b=sub.getBoundingClientRect();root.style.setProperty('--cr-pt',(b.bottom-r.top+6)+'px');root.style.setProperty('--cr-pr',(r.right-b.right)+'px')}
  function openPop(){if(phase!=='review')return;closeBox(true);closeFiles();pop.innerHTML=popHTML();setSum();placePop();pop.classList.add('on');sub.setAttribute('aria-expanded','true');syncScrim();api.sfx('open');
    focusIn(pop.querySelector('.cr-op[aria-checked="true"]'))}
  function closePop(quiet){if(!onOff(pop))return;unfocus(pop);pop.classList.remove('on');sub.setAttribute('aria-expanded','false');syncScrim();if(!quiet)api.sfx('click')}
  function setDec(v){dec=v;$$x('.cr-op').forEach(function(o){o.setAttribute('aria-checked',String(o.getAttribute('data-v')===v))});setSum();api.sfx('click')}
  function openFiles(){if(phase==='flip')return;closeBox(true);closePop(true);fsh.classList.add('on');syncScrim();api.sfx('open');focusIn(fsh.querySelector('.cr-sf'))}
  function closeFiles(){if(!onOff(fsh))return;unfocus(fsh);fsh.classList.remove('on');syncScrim()}

  /* ---------- scoring a pull request ---------- */
  var RK={found:3,typed:2,passed:1};
  function evaluate(d){var used={},iss=P.issues.map(function(is){var best=null;
      is.keys.forEach(function(k){var c=cm[k];if(!c)return;used[k]=1;var s=c.t===is.t?'found':c.t===4?'passed':'typed';if(!best||RK[s]>RK[best.s])best={s:s,k:k,t:c.t}});
      var s=best?best.s:'missed';return {is:is,s:s,k:best&&best.k,t:best&&best.t,pts:s==='found'?100:s==='typed'?40:0}});
    var falses=Object.keys(cm).filter(function(k){return !used[k]&&cm[k].t!==4});
    var open=iss.some(function(x){return x.s==='missed'||x.s==='passed'}),dp=d==='approve'?(open?-100:-50):0,total=dp-20*falses.length;
    iss.forEach(function(x){total+=x.pts});return {iss:iss,falses:falses,dec:d,dp:dp,open:open,total:total}}
  function toastFor(r){var miss=r.iss.filter(function(x){return x.s==='missed'||x.s==='passed'}),typed=r.iss.filter(function(x){return x.s==='typed'}),o={pts:r.total};
    if(r.auto){o.tone=miss.length?'bad':'warn';o.title='Time’s up.';o.text=miss.length?miss[0].is.miss:'Submitted as a comment. Merges don’t wait for reviews.';o.silent=true}
    else if(r.dec==='approve'&&miss.length){o.tone='bad';o.title='Merged to main.';o.text=miss[0].is.miss}
    else if(r.dec==='approve'){o.tone='bad';o.title='Flagged it, then approved it.';o.text='Approve ships it, findings and all. Request changes is what blocks.'}
    else if(miss.length===r.iss.length){o.tone='bad';o.title=miss[0].s==='passed'?'You looked right at it.':r.dec==='changes'?(Object.keys(cm).length?'Blocked, for the wrong reasons.':'Blocked, with no reason given.'):'It’s still in there.';o.text=miss[0].is.miss}
    else if(miss.length){o.tone='warn';o.title=P.part||'One got through.';o.text=miss[0].is.miss}
    else if(typed.length){o.tone='warn';o.title='Right line, wrong finding.';o.text=typed[0].is.why}
    else if(r.dec==='comment'){o.tone='warn';o.title='Found it. Didn’t block it.';o.text='A comment doesn’t stop a merge. Request changes does.'}
    else{o.tone='good';o.title=P.win[0];o.text=P.win[1];o.big=r.iss.length>1}
    return o}
  function verdicts(r){var best={},inIs={};r.iss.forEach(function(x){x.is.keys.forEach(function(k){inIs[k]=1});if(x.k)best[x.k]=x});
    Object.keys(cm).forEach(function(k){var th=thr(k);if(!th)return;var v;
      if(best[k]){var x=best[k];v=x.s==='found'?['y','Confirmed · '+TY[x.is.t].cwe,'+100']:x.s==='typed'?['m','Real issue: '+TY[x.is.t].l,'+40']:['n','Missed: '+TY[x.is.t].l,'0']}
      else if(inIs[k])v=['i','Duplicate','']; else if(cm[k].t===4)v=['i','Noted','']; else v=['n','False positive','−20'];
      th.classList.add('v-'+v[0]);th.querySelector('.cr-vd').innerHTML=v[1]+(v[2]?'<b>'+v[2]+'</b>':'')});
    var first=null;
    r.iss.forEach(function(x){if(x.s==='found'||x.s==='typed')return;var k=x.is.keys[0],L=KM[k];if(!L)return;if(fold[L.fi])setFold(L.fi,false);
      var el=D.createElement('div');el.className='cr-th cr-miss'+(api.rm?'':' new');el.innerHTML='<div class="cr-an">'+I.alert+'<div><b>Missed: '+TY[x.is.t].l+'</b><code>'+TY[x.is.t].cwe+'</code><p>'+x.is.miss+'</p></div></div>';
      (thr(k)||L.el).after(el);L.el.classList.add('miss');if(!api.rm)api.after(30,function(){el.classList.remove('new')});if(!first)first=[el,L.el]});
    if(first)api.after(520,function(){reveal(first[0],16,first[1])})}
  function setPill(d){var p=$x('#cr-pill');if(!p)return;
    if(d==='approve'){p.className='cr-pill m';p.innerHTML=I.merge+'<span>Merged</span>';var w=$x('.cr-wm');if(w)w.textContent='merged '+P.commits+' commits'}
    else if(d==='changes'){p.className='cr-pill x';p.innerHTML=I.block+'<span>Changes requested</span>'}
    else $x('#cr-rv').innerHTML='<span class="cr-rvt">'+I.conv+'Reviewed</span>';
    if(!api.rm){p.classList.add('pop')}}
  function banner(r){var last=pi===PRS.length-1,d=r.dec,ic,cls='',h,s,f=r.iss.filter(function(x){return x.s==='found'}).length;
    if(r.auto){ic=I.clock;h='Time’s up. Submitted as a comment';s='A comment doesn’t block. '+P.au+' can merge whenever they like.'}
    else if(d==='approve'){cls='m';ic=I.merge;h='Approved and merged into main';s=P.au+' merged it a few seconds after your approval.'}
    else if(d==='changes'){cls='x';ic=I.block;h='Changes requested';s=P.au+' can’t merge until your comments are resolved.'}
    else{ic=I.conv;h='Review submitted';s='Comments only. Nothing stops '+P.au+' from merging.'}
    res.innerHTML='<div><div class="cr-rb '+cls+'"><span class="cr-ri">'+ic+'</span><div class="cr-rt"><b>'+h+'</b><span>'+s+'</span></div><span class="cr-rs"><b>'+f+' of '+r.iss.length+'</b> found</span>'+
      '<button class="cr-nx" type="button" data-a="next"><span>'+(last?'See report':'Next pull request')+'</span>'+I.arrow+'<i></i></button></div></div>';
    api.after(30,function(){res.classList.add('on')});
    var T=7500,left=T,bar=res.querySelector('.cr-nx i');if(cd)clearInterval(cd);
    cd=api.every(100,function(){if(api.paused()||phase!=='resolved')return;left-=100;bar.style.transform='scaleX('+Math.min(1,1-left/T).toFixed(3)+')';if(left<=0){clearInterval(cd);cd=null;next()}});
    api.after(450,function(){if(phase==='resolved'&&!nar)focusIn(res.querySelector('.cr-nx'))})}
  function resolve(d,auto){if(phase!=='review'||ended)return;phase='resolved';if(tm){tm.stop();tm=null}closeBox(true);closePop(true);closeFiles();
    var r=evaluate(d);r.auto=!!auto;R[pi]=r;root.classList.add('done');sub.disabled=true;if(!auto)api.sfx('send');
    api.after(api.rm?0:420,function(){if(ended)return;setPill(d);verdicts(r)});
    api.after(api.rm?0:160,function(){if(ended)return;ride(r,function(){if(ended)return;api.score(r.total);api.toast(toastFor(r));banner(r)})})}
  function expire(){resolve('comment',true)}
  function next(){if(phase!=='resolved'||riding)return;if(cd){clearInterval(cd);cd=null}
    if(pi>=PRS.length-1){phase='done';finish();return}
    phase='flip';api.sfx('flip');
    turn(function(){pi++;render();phase='review';api.round(rnd());tm=api.timer(50,expire)});
    api.after(api.rm?0:380,drop)}
  function finish(){if(ended)return;ended=true;if(tm)tm.stop();var rows=[],fc=0;
    R.forEach(function(r,i){r.iss.forEach(function(x){var t=TY[x.is.t];rows.push({s:x.s==='found'?'y':x.s==='typed'?'m':'n',label:t.l+' · #'+PRS[i].n,
      detail:x.s==='found'?'Found. '+x.is.found:x.s==='typed'?'Flagged as “'+TY[x.t].l+'”. '+x.is.why:x.s==='passed'?'Marked as fine. '+x.is.miss:'Missed. '+x.is.miss,pts:x.pts})})});
    R.forEach(function(r,i){if(r.dp)rows.push({s:'n',label:'Approved #'+PRS[i].n+(r.open?' with a live vulnerability':' over your own findings'),detail:r.open?'It merged to main. An approval is a signature, not a formality.':'Approve ships it, findings and all. Request changes is what blocks.',pts:r.dp});fc+=r.falses.length});
    if(fc)rows.push({s:'m',label:fc+' flag'+(fc>1?'s':'')+' on clean code',detail:'False alarms cost a reviewer trust. Flag what you can explain.',pts:-20*fc});
    var t=api.total();
    api.end({max:400,rows:rows,title:t>=360?'Nothing unsafe reached main.':t>=240?'Good eye. Not quite everything.':t>=100?'Some of it shipped.':'Main had a rough afternoon.',
      line:'Slide 9 asked you to name an injection. This asked you to find one, in a real diff, against the clock.',delay:500})}

  /* ---------- input ---------- */
  var TABS={conv:['Stay on the diff','The description says what they meant. The diff says what they did.'],commits:['Stay on the diff','Commit messages are intent. The code is what ships.'],checks:['All 4 checks passed','Tests prove it works. They don’t prove it’s safe.']};
  api.listen(root,'click',function(ev){var t=ev.target;
    if(onOff(pop)&&!t.closest('#cr-pop')&&!t.closest('#cr-sub')){closePop();if(!nar)return}
    var b=t.closest('[data-a]');if(!b||!root.contains(b))return;var a=b.getAttribute('data-a');
    if(ev.detail&&b.tagName==='BUTTON'&&!b.closest('.cr-box,#cr-pop,.cr-sheet'))b.blur();
    if(a==='line'){var row=b.closest('.cr-l');if(row)openBox(row.getAttribute('data-k'));return}
    if(a==='chip'){pick(+b.getAttribute('data-c'));return}
    if(a==='add'){add();return}
    if(a==='cancel'){closeBox();return}
    if(a==='del'){if(phase==='review')del(b.closest('.cr-th').getAttribute('data-k'));return}
    if(a==='sub'){if(onOff(pop))closePop();else openPop();return}
    if(a==='dec'){setDec(b.getAttribute('data-v'));return}
    if(a==='go'){if(phase==='review'){closePop(true);resolve(dec,false)}return}
    if(a==='popx'){closePop();return}
    if(a==='scrim'){if(box!=null)closeBox();closePop(true);closeFiles();return}
    if(a==='file'){goFile(+b.getAttribute('data-f'));return}
    if(a==='files'){openFiles();return}
    if(a==='tree'){root.classList.toggle('notree');api.sfx('click');return}
    if(a==='fold'){var fi=+b.closest('.cr-file').id.slice(4);setFold(fi,!fold[fi]);api.sfx('click');return}
    if(a==='viewed'){var f=b.closest('.cr-file'),v=b.getAttribute('aria-checked')!=='true';b.setAttribute('aria-checked',String(v));setFold(+f.id.slice(4),v);viewed();api.sfx('click');return}
    if(a==='next'){next();return}
    if(a==='stage'){var si=+b.getAttribute('data-s'),k2='z'+si;api.sfx('tap');if(si===0||(told[k2]&&told[k2]>Date.now()-4000))return;told[k2]=Date.now();api.toast({tone:'info',title:ZT[si][0],text:ZT[si][1]});return}
    if(a==='tab'){var k=b.getAttribute('data-tab');if(k==='files'){api.sfx('click');return}if(told[k]&&told[k]>Date.now()-4000)return;told[k]=Date.now();api.toast({tone:'info',title:TABS[k][0],text:TABS[k][1]});return}});
  api.listen(diff,'scroll',spy,{passive:true});
  api.listen(root,'keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('cr-zb')){e.preventDefault();e.target.click()}});
  api.listen(root,'pointermove',onMove,{passive:true});api.listen(root,'pointerleave',function(){if(hov)rest()});
  api.key(function(ev){if(ended)return;var k=ev.key,tg=ev.target,onBtn=!!(tg&&tg.closest&&tg.closest('button,[role="button"]')&&root.contains(tg)&&tg.offsetParent!==null);
    if(phase==='resolved'){if(k==='Enter'||k==='ArrowRight'||k==='n'){if(k==='Enter'&&onBtn&&tg.closest('.cr-nx'))return;ev.preventDefault();next()}return}
    if(phase!=='review')return;
    if(onOff(pop)){
      if(k>='1'&&k<='3'){ev.preventDefault();setDec(['comment','approve','changes'][+k-1]);focusIn(pop.querySelector('.cr-op[aria-checked="true"]'));return}
      if(k==='ArrowDown'||k==='ArrowUp'){ev.preventDefault();var vs=['comment','approve','changes'],j=(vs.indexOf(dec)+(k==='ArrowDown'?1:2))%3;setDec(vs[j]);focusIn(pop.querySelector('.cr-op[aria-checked="true"]'));return}
      if(k==='Enter'){if(onBtn&&tg.closest('[data-a="popx"]'))return;ev.preventDefault();closePop(true);resolve(dec,false);return}
      if(k==='Escape'){closePop();return}return}
    if(box!=null){
      if(k>='1'&&k<='5'){ev.preventDefault();pick(+k-1);return}
      if(k==='Enter'){if(onBtn&&tg.closest('[data-a="cancel"]'))return;ev.preventDefault();add();return}
      if(k==='Escape'){closeBox();return}return}
    if(onOff(fsh)){if(k==='Escape')closeFiles();return}
    if(k==='j'||k==='ArrowDown'){ev.preventDefault();move(1);return}
    if(k==='k'||k==='ArrowUp'){ev.preventDefault();move(-1);return}
    if(k==='c'){ev.preventDefault();if(cur<0)move(1);if(cur>=0)openBox(LN[cur].k);return}
    if(k==='Enter'||k==='r'){if(onBtn&&k==='Enter')return;ev.preventDefault();openPop();return}});

  render();
  return {start:function(){phase='review';api.round(rnd());tm=api.timer(50,expire);api.after(api.rm?0:450,drop)},
    resize:function(){var n=api.narrow();if(n!==nar){if(box!=null)closeBox(true);closePop(true);closeFiles();nar=n;root.classList.toggle('nar',n)}else if(onOff(pop))placePop()},
    destroy:function(){dead=true;clearType();if(cd)clearInterval(cd);if(raf)cancelAnimationFrame(raf);anims=[]}}
}

(window.HM_T=window.HM_T||[]).push({id:'code',topic:'Secure code review',music:'code',
  app:{name:'Forge',url:'forge.northwind.dev/payments-api/pulls/482/files',color:'#1F6FEB',icon:I.anvil},
  lms:{url:'learn.northwind.co/secure-coding/7-4-input-validation/slide-9',color:'#17485A',bg:'#E7ECEE'},
  slide:slide(),
  notes:['A coding standard, and not one line of code on it.','“Shall ensure… could result in…” Which line? Show me.','Naming an attack isn’t spotting one.','“Both of the above” is always right. It teaches nothing.'],
  intro:{title:'Code review drill',lede:'Three pull requests to payments-api are waiting on your security review. Find what shouldn’t ship, before it merges.',
    rules:['Hover a line and click <b>+</b>, or tap its number. Pick the finding, add the comment.','Then <b>Submit review</b>. Request changes blocks the merge. Approve ships it.','50 seconds per pull request. Merges don’t wait for reviewers.'],meta:'3 pull requests · 2½ min',cta:'Start review'},
  html:app(),init:init});
})();

/* training: ai */
/* AI coach drill in Calibrate, an AI training-data workspace. One story: teaching Northwind's AI sales coach what good
   feedback looks like on a pricing objection. Task 1 maps 600 learner replies in 3D (three.js, global THREE) and labels
   what each cluster gets wrong; task 2 ranks two coach replies against a gold label; task 3 tunes the coach's voice
   against the house-style rubric. Three tasks, three rounds of one drill. */
(function(){
'use strict';
var SV='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',E='</svg>';
var I={
  logo:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.6 5.6v-3h3M10.4 2.6h3v3M13.4 10.4v3h-3M5.6 13.4h-3v-3"/><circle cx="8" cy="8" r="1.7" fill="currentColor" stroke="none"/></svg>',
  chev:SV+'<path d="m4.8 6.6 3.2 3.2 3.2-3.2"/>'+E,
  db:SV+'<ellipse cx="8" cy="4" rx="5" ry="1.8"/><path d="M3 4v8c0 1 2.2 1.8 5 1.8s5-.8 5-1.8V4M3 8c0 1 2.2 1.8 5 1.8s5-.8 5-1.8"/>'+E,
  cloud:SV+'<path d="M4.6 12.6h7a3 3 0 0 0 .3-6 4.2 4.2 0 0 0-8.1 1 2.5 2.5 0 0 0 .8 5z"/><path d="m6.3 9.4 1.3 1.3 2.5-2.6"/>'+E,
  check:SV+'<path d="M3.6 8.3l2.8 2.8 6-6.4"/>'+E,
  y:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 8.4l2.9 2.9 6.1-6.6"/></svg>',
  n:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" aria-hidden="true"><path d="M4.5 4.5l7 7M11.5 4.5l-7 7"/></svg>',
  m:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" aria-hidden="true"><path d="M4.6 8h6.8"/></svg>',
  dots:'<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="4.4" cy="5" r="1.5"/><circle cx="7" cy="3.4" r="1.15"/><circle cx="6.2" cy="6.9" r="1.05"/><circle cx="11" cy="10.4" r="1.5"/><circle cx="12.6" cy="8.2" r="1.05"/><circle cx="9.6" cy="12.5" r="1.1"/></svg>',
  arrow:SV+'<path d="M3 8h10M9 4l4 4-4 4"/>'+E,
  zin:SV+'<path d="M3.5 8h9M8 3.5v9"/>'+E,zout:SV+'<path d="M3.5 8h9"/>'+E,
  reset:SV+'<path d="M2.9 8a5.1 5.1 0 1 0 1.5-3.6"/><path d="M2.7 2.6v2.7h2.7"/>'+E,
  doc:SV+'<path d="M9.4 2H4.6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.8a1 1 0 0 0 1-1V5z"/><path d="M9.4 2v3h3"/>'+E
};
function cl(v,a,b){return v<a?a:v>b?b:v}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function now(){return performance.now()}
function ease(t){t=cl(t,0,1);return 1-Math.pow(1-t,3)}
function hex3(h){return [parseInt(h.slice(1,3),16)/255,parseInt(h.slice(3,5),16)/255,parseInt(h.slice(5,7),16)/255]}
function rgba(h,a){var c=hex3(h);return 'rgba('+Math.round(c[0]*255)+','+Math.round(c[1]*255)+','+Math.round(c[2]*255)+','+a+')'}

/* ================= the data: 600 replies to one objection, in six clusters ================= */
var TG=[{id:'mis',n:'Misconception',d:'A habit to train out',c:'#E5484D'},{id:'par',n:'Partial',d:'Right idea, wrong moment',c:'#E2A336'},{id:'good',n:'Good practice',d:'Reinforce it',c:'#2E9E68'}];
function tagOf(id){for(var i=0;i<TG.length;i++)if(TG[i].id===id)return TG[i];return null}
var MV=[{id:'nodisc',n:'Don’t lead with a discount'},{id:'disc',n:'Ask a discovery question first'},{id:'value',n:'Tie price to outcomes'},{id:'stay',n:'Own it, don’t escalate'},{id:'praise',n:'Name what worked'}];
function mvOf(id){for(var i=0;i<MV.length;i++)if(MV[i].id===id)return MV[i];return null}
var CL=[
 {k:1,n:'Offers a discount',kw:'discount, % off, match their price',N:168,c:[-4.0,.7,2.7],s:[.95,.62,.8],br:5,g:'mis',gm:['nodisc','disc'],note:'Discounting before discovery tells the customer the first price was padding.',
  R:['I can knock 15% off if you sign today.','Let me see what discount I can get approved for you.','We can match their price for the first year.','If price is the issue, I can do 10% off straight away.','What if I throw in the first three months free?','I’m sure we can find some room on the price.']},
 {k:2,n:'Argues features',kw:'features, integrations, better product',N:131,c:[-1.6,2.2,-2.65],s:[.9,.55,.75],br:4,g:'par',gm:['disc','value'],note:'Features matter, but only once you know what they’re comparing.',
  R:['But our platform has far more integrations than theirs.','We’re more expensive because the product is better, honestly.','You get 24/7 support with us, which they don’t offer.','Our reporting is much more advanced, so it’s worth the extra.','We have the best uptime in the industry.','Their product doesn’t have half our features.']},
 {k:3,n:'Asks what’s included',kw:'what’s included, like for like, scope',N:104,c:[4.2,.3,-3.3],s:[.75,.55,.7],br:4,g:'good',gm:['praise','disc'],note:'This is the move: find out what the 20% is made of before talking price.',
  R:['Can you walk me through what’s included in their quote?','Before we talk numbers, what are you comparing us on?','Is that like for like? Does their price include onboarding and support?','What would make the difference for you beyond price?','Which parts of their proposal matter most to your team?','Fair question. Is their quote per seat or per site?']},
 {k:4,n:'Reframes on value',kw:'switching cost, total cost, outcomes',N:92,c:[3.0,-1.0,1.3],s:[.75,.5,.7],br:3,g:'good',gm:['praise','value'],note:'Strong, as long as the outcome is the customer’s, not yours.',
  R:['Over three years, switching costs usually wipe out a 20% gap. Can I show you the numbers?','What does an hour of downtime cost you today?','If onboarding drops from twelve weeks to four, what’s that worth to your team?','Let’s look at total cost, not just the licence.','The cheaper option often costs more once you add training and migration.','You’d keep your current workflows, so there’s no retraining cost.']},
 {k:5,n:'Escalates to manager',kw:'manager, check with my boss, escalate',N:61,c:[-.5,-1.1,4.35],s:[.6,.45,.55],br:1,g:'mis',gm:['stay'],note:'Handing it off tells the customer you can’t defend your own price.',
  R:['I’ll need to check with my manager on that.','Let me escalate this and come back to you.','That’s above my pay grade, I’ll ask my boss.','I’ll get my sales director on a call with you.','I can’t do anything on price, but my manager might.']},
 {k:6,n:'Off-topic',kw:'no answer, mic test, skip',N:44,c:[0,.2,0],s:[6.6,3.4,6],noise:1,
  R:['Sorry, can you repeat the question?','idk','Is this part of the assessment?','Testing, can you hear me?','Can I skip this one?']}];
var PRE=['','','','Okay, ','Honestly, ','Right, ','Sure. '];
function genPoints(){var seed=11;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  function gs(){var u=0,v=0;while(!u)u=rnd();v=rnd();return cl(Math.sqrt(-2*Math.log(u))*Math.cos(6.2832*v),-2.6,2.6)}
  var pos=[],st=[],dl=[],cid=[],idx=[],rep=[],n=0;
  CL.forEach(function(c){var yaw=rnd()*6.28,pit=(rnd()-.5)*.9,cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pit),sp=Math.sin(pit);
    for(var i=0;i<c.N;i++){var x,y,z;
      if(c.noise){var th=rnd()*6.2832,ph=Math.acos(2*rnd()-1),rr=.62+rnd()*.38;x=Math.sin(ph)*Math.cos(th)*rr*c.s[0];y=Math.cos(ph)*rr*c.s[1];z=Math.sin(ph)*Math.sin(th)*rr*c.s[2]}
      else{x=gs()*c.s[0];y=gs()*c.s[1];z=gs()*c.s[2];var y2=y*cp-z*sp,z2=y*sp+z*cp;y=y2;z=z2;var x2=x*cy+z*sy;z=-x*sy+z*cy;x=x2;
        if(c.br&&rnd()<.07){var b=CL[c.br-1],t=.25+rnd()*.35;x+=(b.c[0]-c.c[0])*t;y+=(b.c[1]-c.c[1])*t;z+=(b.c[2]-c.c[2])*t}}
      var px=c.c[0]+x,py=c.c[1]+y,pz=c.c[2]+z;pos.push(px,py,pz);
      var r=6+rnd()*2.5,th2=rnd()*6.2832,ph2=Math.acos(2*rnd()-1);st.push(r*Math.sin(ph2)*Math.cos(th2)*.9,r*Math.cos(ph2)*.6,r*Math.sin(ph2)*Math.sin(th2)*.9);
      dl.push(cl((px+7)/14,0,1)*.9+rnd()*.06);cid.push(c.k);idx.push(n);rep.push(i);n++}});
  return {n:n,pos:new Float32Array(pos),st:new Float32Array(st),dl:new Float32Array(dl),cid:new Float32Array(cid),idx:new Float32Array(idx),rep:rep}}
function replyOf(PT,i){var c=CL[PT.cid[i]-1],j=PT.rep[i],t=c.R[j%c.R.length];if(!c.noise&&j>=c.R.length){var p=PRE[(j*7+3)%PRE.length];if(p&&!/^I[ ’']/.test(t))t=p+t.charAt(0).toLowerCase()+t.slice(1);else if(p)t=p+t}return t}
var VS=['attribute vec3 p0;attribute float dly;attribute float cid;attribute float idx;',
 'uniform float uT,uSize,uScale,uDpr,uSel,uHov,uDim;uniform vec3 uCol[7];uniform float uMix[7];uniform float uPul[7];',
 'varying vec3 vC;',
 'void main(){',
 ' float k=clamp((uT-dly)/0.5,0.0,1.0);k=1.0-pow(1.0-k,3.0);',
 ' vec3 p=mix(p0,position,k);vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;',
 ' int c=int(cid+0.5);float mx=uMix[c];vec3 col=mix(vec3(0.58,0.61,0.68),uCol[c],mx);',
 ' float sel=abs(cid-uSel)<0.5?1.0:0.0;float hov=abs(idx-uHov)<0.5?1.0:0.0;',
 ' col=mix(col,vec3(0.94,0.95,0.98),sel*(1.0-mx)*0.7);col*=1.0-uDim*(1.0-sel)*0.5;',
 ' col*=mix(1.05,0.55,smoothstep(12.0,30.0,-mv.z));col=mix(col,vec3(1.0),hov*0.6);',
 ' float nz=c==6?1.0:0.0;col*=1.0-nz*0.3;',
 ' float s=uSize*uScale/max(0.5,-mv.z)*(1.0+0.22*sel+1.1*hov+0.7*uPul[c])*(1.0-0.25*nz);',
 ' vC=col;gl_PointSize=clamp(s,2.0*uDpr,16.0*uDpr);',
 '}'].join('\n');
var FS=['varying vec3 vC;','void main(){vec2 p=gl_PointCoord-0.5;float d=dot(p,p);if(d>0.25)discard;gl_FragColor=vec4(vC*(1.0-d*0.9),1.0);}'].join('\n');

/* ---------- task 3 copy: the same feedback line, in every voice the dials allow ---------- */
var LV={w:['Reserved','Friendly','Effusive'],d:['Brief','Standard','Thorough'],f:['Casual','Neutral','Formal']},V0={w:0,d:2,f:2};
var TX={
 N:{P:{a:'You went straight to a discount.',bB:'Ask what they’re comparing before you move on price.',bS:'That tells the customer your first price wasn’t real, and it’s hard to climb back from.',c:'Before you touch price, find out what they’re comparing.',d:'Try: “What’s included in their quote?”',
      x:'Once you know, compare like for like: setup, support hours and contract length usually explain most of the gap. If you do discount later, trade it for something, such as a longer term. And never pair a discount with a sign-today deadline. It reads as pressure.'},
    I:{a:'The reply opens with a discount.',bB:'Discovery should come before any move on price.',bS:'That signals the first price wasn’t real, which is hard to recover from.',c:'Finding out what they’re comparing comes before any move on price.',d:'A good question: “What’s included in their quote?”',
      x:'Once that’s known, compare like for like: setup, support hours and contract length usually explain most of the gap. Any later discount should be traded for something, such as a longer term. A discount with a sign-today deadline reads as pressure.'}},
 C:{P:{a:'Whoa, straight to a discount!',bB:'Find out what they’re comparing first, yeah?',bS:'That basically tells them your first price was made up, and it’s tough to walk back.',c:'Dig into what they’re comparing before you touch price.',d:'Try something like “What’s in their quote?”',
      x:'Then go like for like: setup, support hours, contract length, that’s usually the gap. If you knock some off later, get something back, like a longer term. And discounts plus sign-today deadlines? Kinda pushy, tbh.'},
    I:{a:'Straight to a discount!',bB:'Gotta find out what they’re comparing first.',bS:'Kinda signals the first price was made up, and that’s tough to walk back.',c:'Digging into what they’re comparing comes before touching price.',d:'Good one to try: “What’s in their quote?”',
      x:'Then it’s like for like: setup, support hours, contract length, that’s usually the gap. Any discount later should get something back, like a longer term. Discounts plus sign-today deadlines? Kinda pushy, tbh.'}},
 F:{P:{a:'Thank you for your response. You offered a price concession at the outset.',bB:'Discovery should precede any price adjustment.',bS:'This indicates that your initial price was not firm, which undermines your subsequent negotiating position.',c:'You are advised to establish the basis of the comparison before adjusting price.',d:'A suitable question would be: “Could you outline what is included in their quotation?”',
      x:'Thereafter, a like-for-like comparison of implementation, support provision and contract duration is recommended. Any subsequent concession should be conditional upon a reciprocal commitment. A discount combined with an immediate deadline is liable to be perceived as coercive.'},
    I:{a:'The response demonstrates a premature price concession.',bB:'Discovery should precede any price adjustment.',bS:'This indicates that the initial price was not firm, which undermines the subsequent negotiating position.',c:'The basis of the comparison should be established before any adjustment to price.',d:'A suitable question would be: “Could you outline what is included in their quotation?”',
      x:'Thereafter, a like-for-like comparison of implementation, support provision and contract duration is recommended. Any subsequent concession should be conditional upon a reciprocal commitment. A discount combined with an immediate deadline is liable to be perceived as coercive.'}}};
var OPEN={C:'Ooh, love the energy here!',N:'Great effort, and I love that you kept the deal alive!',F:'Thank you so much for this thoughtful attempt!'},
  CLOSE1={C:'Nice job keeping it going though!',N:'You kept the conversation open, which is the hard part.',F:'Your composure under pressure was evident.'},
  CLOSE2={C:'You’ve totally got this!',N:'You’re going to be brilliant at this!',F:'We are confident you will excel!'};
function compose(w,d,f){var R=['C','N','F'][f],V=TX[R][w===0?'I':'P'],a=[];if(w===2)a.push(OPEN[R]);a.push(V.a);if(d===0)a.push(V.bB);else{a.push(V.bS,V.c,V.d);if(d===2)a.push(V.x)}if(w===1)a.push(CLOSE1[R]);if(w===2)a.push(CLOSE2[R]);return a.join(' ')}
var SLANG=['whoa','yeah','kinda','tbh','gotta','basically','dig into','knock some off'],EXAM=['demonstrates','the response','the reply','advised','thereafter','liable','suitable','concession','undermines','reciprocal','coercive','quotation'];
function words(t){return t.split(/\s+/).filter(Boolean).length}
/* sentences end on . ! or ? (allowing a closing bracket or quote) when the next word starts a new one */
function sents(t){var w=t.split(/\s+/).filter(Boolean),o=[],c=[];w.forEach(function(x,i){c.push(x);var nx=w[i+1];if(/[.!?][)”"’]?$/.test(x)&&(!nx||/^[A-Z$“"]/.test(nx))){o.push(c.join(' '));c=[]}});if(c.length)o.push(c.join(' '));return o}
function rubric(t){var first=sents(t)[0]||t,lo=t.toLowerCase(),n=words(t),ex=(t.match(/!/g)||[]).length,sl=SLANG.filter(function(x){return lo.indexOf(x)>=0}),xm=EXAM.filter(function(x){return lo.indexOf(x)>=0}),you=/\byou(r|’re|’ve)?\b/i.test(t),qm=t.match(/“[^”]*\?”/);
  function tr(s){return s.length>30?s.slice(0,28).replace(/\s+\S*$/,'')+'…':s}
  var h1=/discount|concession/i.test(first),cost=/first price|initial price/i.test(t);
  return [{ok:h1,t:'Names the habit first',e:h1?'Sentence one: the discount':'Opens with “'+tr(first)+'”'},
    {ok:cost,t:'Says what it costs',e:cost?'The first price looks padded':'Doesn’t say why it matters'},
    {ok:!!qm,t:'Gives one question to try',e:qm?tr(qm[0]):'No question to try'},
    {ok:n<60,t:'Under 60 words',e:n+' words'},
    {ok:you&&!xm.length,t:'Sounds like a coach, not an examiner',e:!you?'Never says “you”':xm.length?'Exam register: “'+xm[0]+'”':'Talks to Sam'},
    {ok:!ex&&!sl.length,t:'No slang or exclamation marks',e:ex?ex+' exclamation mark'+(ex>1?'s':''):sl.length?'Slang: “'+sl[0]+'”':'None found'}]}
var PL={w:['Tone: Neutral and impersonal. Assess the reply, not the learner.','Tone: Warm and direct, like a good manager.','Tone: Upbeat and encouraging. Praise effort first.'],
  f:['Register: Casual. Slang is fine.','Register: Plain English. Everyday words.','Register: Formal assessment language.'],
  d:['Length: One or two sentences. Skip the why and the example.','Length: Under 60 words. Say what it costs. Give one question to try.','Length: Complete. Cover every related technique.']};
function promptLines(o){return ['# Voice: sales coach v3.1','You give feedback on sales role-play replies.','Use the coaching map: name the habit, then one move.','',PL.w[o.w],PL.f[o.f],PL.d[o.d]]}
var P0=promptLines(V0);

/* ================= the "before": a style guide slide ================= */
function slide(){return '<div class="lms-top"><span class="lms-ti"><span class="hl" data-n="0">AI Enablement: AI Tutor Style Guide</span></span><span class="lms-no"><span class="hl" data-n="3">Slide 4 of 18</span></span></div>'+
  '<div class="lms-mid"><div class="ai-sl"><div class="lms-h">Tutor Response Standards</div><ul class="lms-ul">'+
   '<li><span class="hl" data-n="0">The AI tutor should be friendly, accurate and concise.</span></li>'+
   '<li>Avoid giving incorrect information.</li>'+
   '<li><span class="hl" data-n="1">Responses should be appropriate for the learner’s level.</span></li>'+
   '<li><span class="hl" data-n="2">Always maintain a positive, encouraging tone.</span></li>'+
   '<li>Escalate sensitive topics to a human trainer.</li></ul></div>'+
   '<div class="lms-art ai-bot" data-ps>'+botArt()+'</div></div>'+
  '<div class="lms-prog"><i style="width:22.2%"></i></div><div class="lms-bot"><span class="lms-hint">Click NEXT to continue.</span><span class="lms-btns"><span class="lms-btn">&#9664; BACK</span><span class="lms-btn"><span class="hl inv" data-n="2" data-mk="r">NEXT &#9654;</span></span></span></div>'}
/* clip art, circa 2008: a glossy robot with a speech bubble */
function botArt(){return '<svg viewBox="0 0 210 200" aria-hidden="true"><defs>'+
  '<linearGradient id="aiR1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EEF2F5"/><stop offset=".55" stop-color="#B9C4CD"/><stop offset="1" stop-color="#8794A0"/></linearGradient>'+
  '<linearGradient id="aiR2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5BC0EB"/><stop offset="1" stop-color="#1F78B4"/></linearGradient>'+
  '<radialGradient id="aiR3" cx=".35" cy=".35" r=".7"><stop offset="0" stop-color="#E7FAFF"/><stop offset=".4" stop-color="#5ED0F5"/><stop offset="1" stop-color="#0E6C9C"/></radialGradient></defs>'+
  '<ellipse cx="78" cy="190" rx="58" ry="6" fill="#000" opacity=".13"/>'+
  '<line x1="78" y1="30" x2="78" y2="14" stroke="#7D8A96" stroke-width="4"/><circle cx="78" cy="11" r="7" fill="url(#aiR3)" stroke="#0E6C9C" stroke-width="1.5"/>'+
  '<rect x="36" y="30" width="84" height="64" rx="16" fill="url(#aiR1)" stroke="#6E7B87" stroke-width="2"/>'+
  '<rect x="46" y="42" width="64" height="38" rx="10" fill="#2B3540"/>'+
  '<circle cx="64" cy="60" r="8" fill="url(#aiR3)"/><circle cx="92" cy="60" r="8" fill="url(#aiR3)"/>'+
  '<path d="M64 73q14 7 28 0" stroke="#5ED0F5" stroke-width="3" fill="none" stroke-linecap="round"/>'+
  '<rect x="28" y="52" width="9" height="22" rx="3" fill="#8794A0"/><rect x="119" y="52" width="9" height="22" rx="3" fill="#8794A0"/>'+
  '<rect x="46" y="100" width="64" height="62" rx="12" fill="url(#aiR1)" stroke="#6E7B87" stroke-width="2"/>'+
  '<rect x="62" y="114" width="32" height="20" rx="4" fill="url(#aiR2)"/><circle cx="70" cy="146" r="4" fill="#E5484D"/><circle cx="86" cy="146" r="4" fill="#F2C14E"/>'+
  '<rect x="54" y="162" width="16" height="22" rx="4" fill="#8794A0"/><rect x="86" y="162" width="16" height="22" rx="4" fill="#8794A0"/>'+
  '<path d="M138 26h56a10 10 0 0 1 10 10v28a10 10 0 0 1-10 10h-34l-14 14 2-14h-10a10 10 0 0 1-10-10V36a10 10 0 0 1 10-10z" fill="url(#aiR2)" stroke="#16588A" stroke-width="2"/>'+
  '<text x="166" y="57" text-anchor="middle" font-family="Comic Sans MS,Arial,sans-serif" font-weight="700" font-size="17" fill="#fff">Hi!</text></svg>'}

/* ================= the app ================= */
function app(){
  var steps=[['Map answers'],['Rank replies'],['Tune voice']].map(function(s,i){return '<li class="ai-step" data-s="'+(i+1)+'"'+(i?'':' aria-current="step"')+'><i>'+(i+1)+'</i><span>'+s[0]+'</span></li>'}).join('');
  return '<div class="ai-app" data-task="1">'+
  '<header class="ai-hd">'+
   '<div class="ai-brand"><span class="ai-logo" data-pt="b">'+I.logo+'</span><b data-pt="t">Calibrate</b></div>'+
   '<nav class="ai-crumb" aria-label="Project"><span class="ai-org">Northwind</span><i aria-hidden="true">/</i><span class="ai-proj" data-pt="t">Sales coach v3'+I.chev+'</span></nav>'+
   '<span class="ai-ds">'+I.db+'<span class="ai-dsn">objection-replies-oct</span></span>'+
   '<span class="ai-hsp"></span>'+
   '<ol class="ai-steps" aria-label="Tasks" data-pt="e">'+steps+'</ol>'+
   '<span class="ai-avt" title="Hadrien Lee, reviewer">HL</span>'+
  '</header>'+
  '<div class="ai-main">'+
  /* ---------- task 1: the map ---------- */
  '<section class="ai-task on" data-task="1" aria-label="Task 1: map learner answers">'+
   '<div class="ai-ws ai-ws1">'+
    '<div class="ai-tb"><div class="ai-tb-t"><b data-pt="t">“Your quote is 20% higher than the other vendor.”</b><span class="ai-tb-m">600 replies · nw-embed-2 · 3D UMAP</span></div><span class="ai-keys"><span>Drag to orbit</span><span>Click a cluster</span></span></div>'+
    '<div class="ai-view" tabindex="0" role="application" aria-roledescription="3D map" aria-label="600 learner replies to a pricing objection, shown as dots grouped by meaning into clusters. Drag or use the arrow keys to orbit, plus and minus to zoom, N for the next unlabelled cluster." data-pt="f">'+
     '<div class="ai-gl3"></div><canvas class="ai-ov" aria-hidden="true"></canvas><div class="ai-tags"></div>'+
     '<div class="ai-tip" aria-hidden="true"><q></q><span></span></div>'+
     '<div class="ai-hint" role="status"><span class="ai-hint-i" aria-hidden="true">'+I.dots+'</span><span class="ai-hint-t">These are 600 learner answers. Open the project to group them by meaning.</span></div>'+
     '<div class="ai-legend" aria-hidden="true"><span><i class="ai-lg-n"></i>Unlabelled</span><span><i style="--c:#E5484D"></i>Misconception</span><span><i style="--c:#E2A336"></i>Partial</span><span><i style="--c:#2E9E68"></i>Good practice</span></div>'+
     '<div class="ai-zoom" role="group" aria-label="View"><button type="button" data-z="out" aria-label="Zoom out">'+I.zout+'</button><span class="ai-zv">100%</span><button type="button" data-z="in" aria-label="Zoom in">'+I.zin+'</button><i aria-hidden="true"></i><button type="button" data-z="reset" aria-label="Show all clusters">'+I.reset+'</button></div>'+
     '<div class="ai-nogl" hidden><b>The 3D view needs WebGL.</b><span>Pick clusters from the list and label them in the inspector.</span></div>'+
     '<p class="ai-sr ai-live" aria-live="polite"></p>'+
    '</div>'+
   '</div>'+
   '<aside class="ai-insp ai-i1" aria-label="Cluster inspector">'+
    '<button class="ai-grab" type="button" aria-expanded="false"><i aria-hidden="true"></i><span class="ai-sr">Show details</span></button>'+
    '<div class="ai-ih"><span class="ai-sw ai-osw"></span><div class="ai-ih-t"><b class="ai-on" data-pt="t">Pick a cluster</b><span class="ai-om">600 replies in 6 clusters</span><span class="ai-okw"></span></div></div>'+
    '<p class="ai-rvw" hidden></p>'+
    '<div class="ai-det">'+
     '<div class="ai-isec ai-dist"><div class="ai-row"><span class="ai-k">Replies per cluster</span><span class="ai-k">600</span></div><div class="ai-dl"></div><p class="ai-dn">Grouped by meaning, not keywords. Pick a cluster to read its replies and label it.</p></div>'+
     '<div class="ai-isec ai-smp"><div class="ai-row"><span class="ai-k">Sample replies</span><button class="ai-more" type="button">Show more</button></div><ul class="ai-quotes" data-pt="e"></ul></div>'+
     '<div class="ai-isec ai-lab"><span class="ai-k ai-tag-l">What is it?</span><div class="ai-tagl" role="radiogroup"></div>'+
      '<span class="ai-k ai-k2 ai-mv-l">What should the coach do?</span><div class="ai-moves" role="radiogroup"></div><p class="ai-note" hidden></p></div>'+
    '</div>'+
    '<div class="ai-ifoot"><div class="ai-cov"><div class="ai-row"><span class="ai-k">Coverage</span><b class="ai-covt">0 of 5 clusters labelled</b></div><div class="ai-covb" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div></div>'+
     '<button class="ai-btn ai-pri ai-sub1" type="button" aria-disabled="true" data-pt="b">Save coaching map</button></div>'+
   '</aside>'+
  '</section>'+
  /* ---------- task 2: rank two coach replies ---------- */
  '<section class="ai-task" data-task="2" data-lenis-prevent aria-label="Task 2: rank two coach replies">'+
   '<div class="ai-ws ai-scroll" data-lenis-prevent>'+
    '<div class="ai-tb"><div class="ai-tb-t"><b>Item 0214</b><span class="ai-tb-m">Which feedback should the coach give?</span></div><span class="ai-keys"><span><kbd>A</kbd><kbd>B</kbd> pick</span><span><kbd>1</kbd>–<kbd>4</kbd> reasons</span></span></div>'+
    '<div class="ai-rk">'+
     '<div class="ai-rp"><div class="ai-rp-h"><span class="mo">Role-play</span>Pricing objection · cohort 14</div>'+
      '<div class="ai-say"><span class="ai-sav ai-cu" aria-hidden="true">DK</span><div><b>Customer</b><p>Your quote is 20% higher than the other vendor.</p></div></div>'+
      '<div class="ai-say"><span class="ai-sav ai-le" aria-hidden="true">SO</span><div><b>Sam Okafor <span>learner</span></b><p>I can knock 15% off if you sign today.</p></div></div></div>'+
     '<div class="ai-cards">'+
      '<article class="ai-card" data-c="a"><div class="ai-card-h"><span class="ai-ab">A</span><b>Coach reply A</b><span class="ai-card-m mo">sample 1</span><span class="ai-gold" aria-hidden="true">Gold</span></div>'+
       '<p class="ai-card-t">Great save! Offering 15% shows you’re flexible, and the sign-today deadline adds urgency. Customers love a deal, so this should close it. Keep it up.</p>'+
       '<div class="ai-card-f"><span class="ai-card-n"></span><button class="ai-pick" type="button" data-pick="a" aria-pressed="false"><i aria-hidden="true"></i>Prefer A</button></div></article>'+
      '<article class="ai-card" data-c="b"><div class="ai-card-h"><span class="ai-ab">B</span><b>Coach reply B</b><span class="ai-card-m mo">sample 2</span><span class="ai-gold" aria-hidden="true">Gold</span></div>'+
       '<p class="ai-card-t">You went straight to a discount, so the customer learns your first price wasn’t real. Before you move on price, find out what they’re comparing. Try: “What’s included in their quote?”</p>'+
       '<div class="ai-card-f"><span class="ai-card-n"></span><button class="ai-pick" type="button" data-pick="b" aria-pressed="false"><i aria-hidden="true"></i>Prefer B</button></div></article>'+
     '</div>'+
     '<div class="ai-why"><div class="ai-why-l"><b>Why is it better?</b><span>Pick a reply first.</span></div>'+
      '<div class="ai-chips" role="group" aria-label="Reasons">'+
       '<button class="ai-chip" type="button" data-r="acc" aria-pressed="false"><kbd>1</kbd>Accurate<i aria-hidden="true"></i></button>'+
       '<button class="ai-chip" type="button" data-r="name" aria-pressed="false"><kbd>2</kbd>Names the mistake<i aria-hidden="true"></i></button>'+
       '<button class="ai-chip" type="button" data-r="move" aria-pressed="false"><kbd>3</kbd>Gives a move to try<i aria-hidden="true"></i></button>'+
       '<button class="ai-chip" type="button" data-r="tone" aria-pressed="false"><kbd>4</kbd>Right tone<i aria-hidden="true"></i></button></div>'+
      '<button class="ai-btn ai-pri ai-sub2" type="button" aria-disabled="true">Submit ranking</button></div>'+
     '<div class="ai-gr" role="status"></div>'+
    '</div>'+
   '</div>'+
   '<aside class="ai-insp ai-i2 ai-scroll" data-lenis-prevent aria-label="Context">'+
    '<div class="ai-isec"><div class="ai-k">From the coaching map</div><div class="ai-doc"><div class="ai-doc-h"><i class="ai-sw" style="--c:#E5484D"></i><div><b>C1 · Offers a discount</b><span>168 replies · Misconception</span></div></div>'+
     '<p>Coaching move: <mark>Don’t lead with a discount.</mark> Ask what they’re comparing first.</p></div></div>'+
    '<div class="ai-isec"><div class="ai-k">Feedback rubric v2</div><ol class="ai-gl-l"><li>Name the habit, not the person.</li><li>Say what it costs the learner.</li><li>Give one move to try next time.</li><li>Kind beats harsh. Accurate beats kind.</li></ol></div>'+
    '<div class="ai-ifoot ai-f2"><button class="ai-btn ai-pri ai-nx2" type="button" hidden>Next task'+I.arrow+'</button></div>'+
   '</aside>'+
  '</section>'+
  /* ---------- task 3: the coach's voice ---------- */
  '<section class="ai-task" data-task="3" data-lenis-prevent aria-label="Task 3: tune the coach’s voice">'+
   '<div class="ai-ws ai-scroll" data-lenis-prevent>'+
    '<div class="ai-tb"><div class="ai-tb-t"><b>Voice</b><span class="ai-tb-m">Draft v3.1 · not published</span></div><span class="ai-tb-r">Preview <span class="ai-pill">Role-play</span></span></div>'+
    '<div class="ai-vg">'+
     '<div class="ai-dials">'+['w','d','f'].map(function(k){var n={w:'Warmth',d:'Detail',f:'Formality'}[k];return '<div class="ai-dial" data-d="'+k+'"><div class="ai-dial-h"><b class="ai-dl-'+k+'">'+n+'</b><span class="ai-dv-'+k+'"></span></div><div class="ai-seg" role="radiogroup" aria-label="'+n+'"><i class="ai-thumb" aria-hidden="true"></i></div></div>'}).join('')+
      '<p class="ai-dnote">Starts from v3.0, the coach that shipped. It reads like an exam report.</p></div>'+
     '<div class="ai-pv">'+
      '<div class="ai-say ai-sm2"><span class="ai-sav ai-cu" aria-hidden="true">DK</span><div><b>Customer</b><p>Your quote is 20% higher than the other vendor.</p></div></div>'+
      '<div class="ai-say ai-sm2"><span class="ai-sav ai-le" aria-hidden="true">SO</span><div><b>Sam Okafor <span>learner</span></b><p>I can knock 15% off if you sign today.</p></div></div>'+
      '<div class="ai-msg"><span class="ai-bav" aria-hidden="true">'+I.logo+'</span><div><div class="ai-mh"><b>Sales coach</b><span class="ai-app-t">AI</span><span>feedback to Sam</span></div><p class="ai-ans" aria-live="polite"></p><div class="ai-wc"></div></div></div>'+
     '</div>'+
     '<div class="ai-sp"><div class="ai-sp-h"><span class="mo">system_prompt.md</span><span class="ai-sp-d">Same as v3.0</span></div><pre class="ai-code"></pre></div>'+
    '</div>'+
   '</div>'+
   '<aside class="ai-insp ai-i3 ai-scroll" data-lenis-prevent aria-label="Rubric">'+
    '<div class="ai-isec"><div class="ai-row"><span class="ai-k">House style v3</span><b class="ai-rs">0 of 6</b></div><div class="ai-ticks" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div><ul class="ai-ck ai-rub"></ul></div>'+
    '<div class="ai-ifoot"><button class="ai-btn ai-pri ai-sub3" type="button" aria-disabled="true">Publish voice v3.1</button></div>'+
   '</aside>'+
  '</section>'+
  '</div></div>'}

/* ================= the drill ================= */
function init(api){
  var root=api.$('.ai-app'),RM=api.rm,W=window,D=document;
  function $(s,r){return (r||root).querySelector(s)}
  function $$(s,r){return [].slice.call((r||root).querySelectorAll(s))}
  var snd=api.sfx,started=false,ended=false,tm=null,cur=1,RES={1:null,2:null,3:null};
  function isPh(){return api.narrow()&&api.root.clientWidth<=api.root.clientHeight}
  var liveEl=$('.ai-live');function say(t){liveEl.textContent='';api.after(40,function(){liveEl.textContent=t})}
  function shake(el){if(!el)return;el.classList.remove('ai-shake');void el.offsetWidth;el.classList.add('ai-shake')}
  var TITLES={1:'Map learner answers',2:'Rank coach replies',3:'Tune the voice'},DSN={1:'objection-replies-oct',2:'coach-feedback-v3',3:'voice-house-style'};
  function round(){api.round('Task '+cur+' of 3 · '+TITLES[cur])}
  function go(n){if(n===cur)return;cur=n;root.setAttribute('data-task',n);
    $$('.ai-task').forEach(function(t){var on=+t.getAttribute('data-task')===n;t.classList.toggle('on',on);t.classList.remove('in');if(on&&!RM){void t.offsetWidth;t.classList.add('in')}t.inert=!on});
    steps();$('.ai-dsn').textContent=DSN[n];round();snd('whoosh');
    if(n===1)F3.show();if(n===2)deal();
    api.after(420,function(){var f=n===2?$('.ai-pick[data-pick="a"]'):n===3?$('.ai-dial .ai-sb[aria-checked="true"]'):null;if(f&&!api.narrow())f.focus({preventScroll:true})})}
  function steps(){$$('.ai-step').forEach(function(s){var k=+s.getAttribute('data-s');s.classList.toggle('done',!!RES[k]);if(k===cur)s.setAttribute('aria-current','step');else s.removeAttribute('aria-current');$('i',s).innerHTML=RES[k]?I.y:k})}
  $$('.ai-task').forEach(function(t){t.inert=!t.classList.contains('on')});

  /* ================= task 1: the map ================= */
  var LB={},selK=0;CL.forEach(function(c){LB[c.k]={tag:null,mv:null}});
  function labelled(k){var c=CL[k-1];return !c.noise&&!!LB[k].tag&&!!LB[k].mv}
  function nLab(){return CL.filter(function(c){return labelled(c.k)}).length}
  function agrees(k){var c=CL[k-1],l=LB[k];return l.tag===c.g&&c.gm.indexOf(l.mv)>=0}
  function nextOpen(after){for(var i=1;i<=6;i++){var k=((after||0)+i-1)%6+1;if(!CL[k-1].noise&&!labelled(k))return k}return 0}
  var F3=(function(){
    var T=W.THREE,view=$('.ai-view'),host=$('.ai-gl3'),ov=$('.ai-ov'),og=ov.getContext('2d'),tagsEl=$('.ai-tags'),tip=$('.ai-tip'),sheetEl=$('.ai-i1');
    var R=null,scene,cam,U,PT=null,built=false,raf=0,last=0,needGL=true,needOV=true,TK=0,KEEP=[];
    var VW=1,VH=1,DPR=1,PEEK=0,PHN=false,SX=null,SY=null,SZ=null,CEN={};
    var DEF={az:.62,po:1.12,r:15.5,tx:.1,ty:.1,tz:.1},DEFP={az:.62,po:1.12,r:28,tx:0,ty:.3,tz:.1},userCam=false,cv={},tg={},vel={az:0,po:0};
    function defs(){return PHN?DEFP:DEF}function cpy(o,s){for(var k in s)o[k]=s[k]}cpy(cv,DEF);cpy(tg,DEF);
    var IN={t0:0,v:0},MIX=[0,0,0,0,0,0,0],MIXT=[0,0,0,0,0,0,0],PUL=[0,0,0,0,0,0,0],PULT=[0,0,0,0,0,0,0],DIM={v:0,t:0},HOV=-1,PIN=-1,drag=null,TAGS={},hintK='';
    if(T){try{R=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'})}catch(e){R=null}if(R&&!R.getContext())R=null}
    if(!R){$('.ai-nogl').hidden=false}
    else{
      R.setClearColor(0x111318,1);host.appendChild(R.domElement);R.domElement.setAttribute('aria-hidden','true');
      scene=new T.Scene();cam=new T.PerspectiveCamera(40,1.6,.1,200);
      var cols=[],i;for(i=0;i<7;i++)cols.push(new T.Vector3(.58,.61,.68));
      U={uT:{value:0},uSize:{value:.112},uScale:{value:600},uDpr:{value:1},uSel:{value:0},uHov:{value:-1},uDim:{value:0},uCol:{value:cols},uMix:{value:MIX.slice()},uPul:{value:PUL.slice()}};
      var gv=[],y0=-3.6;for(var x=-8;x<=8;x++)gv.push(x,y0,-8,x,y0,8);for(var z=-8;z<=8;z++)gv.push(-8,y0,z,8,y0,z);
      var gg=new T.BufferGeometry();gg.setAttribute('position',new T.Float32BufferAttribute(gv,3));var gm=new T.LineBasicMaterial({color:0x232733,transparent:true,opacity:.7,depthWrite:false});KEEP.push(gg,gm);scene.add(new T.LineSegments(gg,gm));
      PT=genPoints();var n=PT.n,g=new T.BufferGeometry();
      g.setAttribute('position',new T.BufferAttribute(PT.pos,3));g.setAttribute('p0',new T.BufferAttribute(PT.st,3));g.setAttribute('dly',new T.BufferAttribute(PT.dl,1));g.setAttribute('cid',new T.BufferAttribute(PT.cid,1));g.setAttribute('idx',new T.BufferAttribute(PT.idx,1));
      g.boundingSphere=new T.Sphere(new T.Vector3(),40);var pm=new T.ShaderMaterial({uniforms:U,vertexShader:VS,fragmentShader:FS});KEEP.push(g,pm);var pts=new T.Points(g,pm);pts.frustumCulled=false;scene.add(pts);
      SX=new Float32Array(n);SY=new Float32Array(n);SZ=new Float32Array(n);
      CL.forEach(function(c){var sx=0,sy=0,sz=0,m=0;for(var i=0;i<n;i++)if(PT.cid[i]===c.k){sx+=PT.pos[i*3];sy+=PT.pos[i*3+1];sz+=PT.pos[i*3+2];m++}CEN[c.k]=c.noise?[c.c[0],c.c[1]+2.6,c.c[2]]:[sx/m,sy/m,sz/m]});
      built=true}
    /* the replies start scattered; opening the project runs the embedding and they sweep into clusters */
    function reveal(){if(IN.t0||!built)return;IN.t0=now()+120;if(RM){IN.v=1.6;IN.t0=1;return}cv.r=tg.r*1.3;cv.az=tg.az-.45;cv.po=tg.po-.1;snd('whoosh');kick()}
    function colours(){if(!U)return;CL.forEach(function(c){var t=tagOf(LB[c.k].tag),h=hex3(t?t.c:'#94A0B0');U.uCol.value[c.k].set(h[0],h[1],h[2]);MIXT[c.k]=t?1:0})}
    function size(){VW=view.clientWidth;VH=view.clientHeight;if(!VW||!VH)return;DPR=Math.min(2,W.devicePixelRatio||1);PHN=isPh();
      if(!sheetEl.classList.contains('open'))PEEK=PHN?sheetEl.offsetHeight:0;root.style.setProperty('--peek',PEEK+'px');
      ov.width=Math.round(VW*DPR);ov.height=Math.round(VH*DPR);
      if(R){R.setPixelRatio(DPR);R.setSize(VW,VH,false);cam.aspect=VW/Math.max(1,VH+PEEK);if(PEEK)cam.setViewOffset(VW,VH+PEEK,0,PEEK,VW,VH);else cam.clearViewOffset();cam.updateProjectionMatrix();U.uDpr.value=DPR}
      if(!userCam){var d0=defs();cpy(tg,d0);if(!IN.t0||IN.v>=1.6)cpy(cv,d0)}
      CL.forEach(function(c){if(TAGS[c.k])TAGS[c.k]._w=0});need()}
    function need(gl){if(gl!==false)needGL=true;needOV=true;kick()}
    function kick(){if(!raf&&!api.paused()&&cur===1&&!dead)raf=requestAnimationFrame(tick)}
    var dead=false;
    function tick(t){raf=0;if(dead)return;TK++;var dt=last?Math.min(.05,(t-last)/1000):.016;last=t;var mv=stepCam(dt);
      if(IN.t0&&IN.v<1.6){IN.v=t<IN.t0?0:Math.min(1.6,(t-IN.t0)/2100*1.6);mv=true}
      var k=RM?1:1-Math.exp(-dt*7);for(var i=1;i<7;i++){var d=MIXT[i]-MIX[i];if(Math.abs(d)>.002){MIX[i]+=d*k;mv=true}else MIX[i]=MIXT[i];if(PUL[i]>.002){PUL[i]*=Math.exp(-dt*5);mv=true}else PUL[i]=0;if(PULT[i]&&t>=PULT[i]){PUL[i]=1;PULT[i]=0;mv=true}else if(PULT[i])mv=true}
      var dd=DIM.t-DIM.v;if(Math.abs(dd)>.002){DIM.v+=dd*k;mv=true}else DIM.v=DIM.t;
      if(mv)needGL=needOV=true;
      if(needGL&&R&&built)gl();if(needOV)drawOV();needGL=needOV=false;
      if(mv&&!api.paused())raf=requestAnimationFrame(tick);else last=0}
    function stepCam(dt){var k=RM?1:1-Math.exp(-dt*8),mv=false;
      if(!drag&&(Math.abs(vel.az)>2e-4||Math.abs(vel.po)>2e-4)){tg.az+=vel.az*dt;tg.po=cl(tg.po+vel.po*dt,.35,1.5);var dm=Math.exp(-dt*4);vel.az*=dm;vel.po*=dm;mv=true}else{vel.az=vel.po=0}
      for(var key in tg){var d=tg[key]-cv[key];if(Math.abs(d)>6e-4){cv[key]+=d*k;mv=true}else cv[key]=tg[key]}
      if(R){var sp=Math.sin(cv.po);cam.position.set(cv.tx+cv.r*sp*Math.sin(cv.az),cv.ty+cv.r*Math.cos(cv.po),cv.tz+cv.r*sp*Math.cos(cv.az));cam.lookAt(cv.tx,cv.ty,cv.tz);cam.updateMatrixWorld()}
      return mv}
    function gl(){U.uT.value=IN.v;U.uSel.value=selK;U.uHov.value=HOV;U.uDim.value=DIM.v;for(var i=0;i<7;i++){U.uMix.value[i]=MIX[i];U.uPul.value[i]=PUL[i]}
      U.uScale.value=(VH+PEEK)*DPR/(2*Math.tan(cam.fov*Math.PI/360));R.render(scene,cam)}
    /* ---------- the annotation layer ---------- */
    var V3=T?new T.Vector3():null;
    function P(x,y,z){V3.set(x,y,z).project(cam);return {x:(V3.x+1)*.5*VW,y:(1-V3.y)*.5*VH,z:V3.z}}
    function project(){var e=cam.matrixWorldInverse.elements,pe=cam.projectionMatrix.elements,p=PT.pos,k=IN.v>=1.6;
      for(var i=0;i<PT.n;i++){var x=p[i*3],y=p[i*3+1],z=p[i*3+2];if(!k){var f=ease((IN.v-PT.dl[i])/.5);x=PT.st[i*3]+(x-PT.st[i*3])*f;y=PT.st[i*3+1]+(y-PT.st[i*3+1])*f;z=PT.st[i*3+2]+(z-PT.st[i*3+2])*f}
        var vx=e[0]*x+e[4]*y+e[8]*z+e[12],vy=e[1]*x+e[5]*y+e[9]*z+e[13],vz=e[2]*x+e[6]*y+e[10]*z+e[14],cx=pe[0]*vx+pe[8]*vz,cy=pe[5]*vy+pe[9]*vz,w=-vz;
        if(w<.1){SX[i]=-1e4;SY[i]=-1e4;SZ[i]=1e4;continue}SX[i]=(cx/w+1)*.5*VW;SY[i]=(1-cy/w)*.5*VH;SZ[i]=w}}
    function ring(k){var n=PT.n,xs=[],sx=0,sy=0,m=0;for(var i=0;i<n;i++)if(PT.cid[i]===k&&SZ[i]<1e3){sx+=SX[i];sy+=SY[i];m++}if(!m)return null;sx/=m;sy/=m;
      for(i=0;i<n;i++)if(PT.cid[i]===k&&SZ[i]<1e3)xs.push(Math.hypot(SX[i]-sx,SY[i]-sy));xs.sort(function(a,b){return a-b});return {x:sx,y:sy,r:xs[Math.floor(xs.length*.86)]+10}}
    function drawOV(){og.setTransform(DPR,0,0,DPR,0,0);og.clearRect(0,0,VW,VH);if(!built||!V3)return;project();var done=IN.v>=1.6;
      if(done&&selK&&!CL[selK-1].noise){var r=ring(selK);if(r){var t=tagOf(LB[selK].tag);og.strokeStyle=t?rgba(t.c,.9):'rgba(240,242,248,.75)';og.lineWidth=1.5;og.setLineDash([4,5]);og.beginPath();og.ellipse(r.x,r.y,r.r,r.r*.86,0,0,6.2832);og.stroke();og.setLineDash([])}}
      var hv=PIN>=0?PIN:HOV;if(done&&hv>=0&&SZ[hv]<1e3){og.strokeStyle='#fff';og.lineWidth=1.6;og.beginPath();og.arc(SX[hv],SY[hv],7.5,0,6.2832);og.stroke()}
      tags(done)}
    function tags(done){var items=[],bot=VH-PEEK,he=$('.ai-hint'),top=he?he.offsetTop+he.offsetHeight+8:46;
      CL.forEach(function(c){var el=TAGS[c.k];if(!el)return;var p=CEN[c.k]?P(CEN[c.k][0],CEN[c.k][1],CEN[c.k][2]):null,off=!done||!p||p.z>1||p.z<-1;
        var rr=!off&&!c.noise?ring(c.k):null,x=p?p.x:0,y=p?(rr?rr.y-rr.r*.86-4:p.y):0;
        if(c.noise){if(selK!==6)off=true;else{var bi=-1,bd=1e9;for(var i=0;i<PT.n;i++)if(PT.cid[i]===6&&SZ[i]<1e3&&SX[i]>80&&SX[i]<VW-80&&SY[i]>top+30&&SY[i]<bot-30){var d2=Math.abs(SX[i]-VW/2)+Math.abs(SY[i]-VH/2);if(d2<bd){bd=d2;bi=i}}if(bi<0)off=true;else{x=SX[bi];y=SY[bi]-10}}}
        if(!off&&(x<-40||x>VW+40||y<20||y>bot-6))off=true;if(!el._w)el._w=el.offsetWidth||90;var w=el._w,h=el.offsetHeight||22;
        items.push({el:el,off:off,r:{x:cl(x-w/2,6,VW-w-6),y:cl(y-h,top,bot-h-6),w:w,h:h},pr:c.k===selK?0:c.noise?3:labelled(c.k)?2:1})});
      items.sort(function(a,b){return a.pr-b.pr||a.r.y-b.r.y});var placed=[];
      items.forEach(function(it){if(it.off){it.el.classList.add('off');return}var r=it.r;
        for(var n=0;n<6;n++){var hit=null;for(var j=0;j<placed.length;j++){var q=placed[j];if(r.x<q.x+q.w+3&&r.x+r.w+3>q.x&&r.y<q.y+q.h+3&&r.y+r.h+3>q.y){hit=q;break}}if(!hit)break;r.y=hit.y-r.h-3}
        if(r.y<top-2){it.el.classList.add('off');return}placed.push(r);it.el.classList.remove('off');it.el.style.transform='translate3d('+r.x.toFixed(1)+'px,'+r.y.toFixed(1)+'px,0)'})}
    /* ---------- hover a dot to read the reply; click to pick its cluster ---------- */
    function loc(e){var r=view.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top}}
    function hit(p,rad){if(!built||IN.v<1.6||!SX)return -1;var best=-1,bd=1e9;for(var i=0;i<PT.n;i++){var dx=SX[i]-p.x,dy=SY[i]-p.y,d=dx*dx+dy*dy;if(d<rad*rad){var s=d+SZ[i]*4;if(s<bd){bd=s;best=i}}}return best}
    function showTip(i,pin){var c=CL[PT.cid[i]-1],t=tagOf(LB[c.k].tag);$('q',tip).textContent=replyOf(PT,i);
      $('span',tip).innerHTML='<i style="--c:'+(t?t.c:'#A9A9B3')+'"></i>C'+c.k+' '+esc(c.n)+' · reply '+(1000+i)+' · cohort '+(11+i%4);
      tip.classList.add('on');var w=tip.offsetWidth,h=tip.offsetHeight,x=SX[i]+14,y=SY[i]-h-12;if(x+w>VW-8)x=SX[i]-w-14;if(x<8)x=8;if(y<48)y=SY[i]+16;if(y+h>VH-PEEK-6)y=VH-PEEK-h-6;
      tip.style.transform='translate3d('+x.toFixed(0)+'px,'+y.toFixed(0)+'px,0)';if(pin){clearTimeout(tip._t);tip._t=setTimeout(function(){PIN=-1;tip.classList.remove('on');need()},4200)}}
    function hideTip(){if(PIN>=0)return;tip.classList.remove('on')}
    function hover(p){if(drag)return;var i=hit(p,9);if(i!==HOV){HOV=i;need()}if(i>=0){showTip(i);view.classList.add('pt')}else{hideTip();view.classList.remove('pt')}}
    api.listen(view,'pointerdown',function(e){if(e.button>0||!built||!started)return;if(e.target.closest('.ai-ctag,.ai-zoom,.ai-hint'))return;var p=loc(e);
      drag={x:p.x,y:p.y,sx:p.x,sy:p.y,mv:false,vx:0,vy:0,touch:e.pointerType!=='mouse'};try{view.setPointerCapture(e.pointerId)}catch(_){}if(D.activeElement!==view)view.focus({preventScroll:true})});
    api.listen(view,'pointermove',function(e){var p=loc(e);if(!drag){if(e.pointerType==='mouse'&&started)hover(p);return}var dx=p.x-drag.x,dy=p.y-drag.y;drag.x=p.x;drag.y=p.y;
      if(!drag.mv&&Math.hypot(p.x-drag.sx,p.y-drag.sy)>4){drag.mv=true;view.classList.add('grabbing');HOV=-1;PIN=-1;tip.classList.remove('on')}
      if(drag.mv){userCam=true;tg.az-=dx*.0065;if(!drag.touch||!PHN)tg.po=cl(tg.po-dy*.005,.35,1.5);drag.vx=dx;drag.vy=dy;kick()}});
    function up(e,cancel){if(!drag)return;var d=drag;drag=null;view.classList.remove('grabbing');try{view.releasePointerCapture(e.pointerId)}catch(_){}
      if(!d.mv&&!cancel){var p=loc(e),i=hit(p,d.touch?18:9);if(i>=0){select(PT.cid[i],{fly:true});if(d.touch||PHN){PIN=i;showTip(i,true)}}}
      else if(d.mv&&!RM&&!cancel){vel.az=-d.vx*.0065*36;vel.po=(d.touch&&PHN)?0:-d.vy*.005*36}need()}
    api.listen(view,'pointerup',function(e){up(e)});api.listen(view,'pointercancel',function(e){up(e,true)});
    api.listen(view,'pointerleave',function(){if(!drag&&HOV>=0){HOV=-1;hideTip();need()}});
    api.listen(view,'keydown',function(e){var k=e.key;
      if(k==='ArrowLeft'||k==='ArrowRight'){e.preventDefault();userCam=true;tg.az+=k==='ArrowLeft'?.14:-.14;kick();return}
      if(k==='ArrowUp'||k==='ArrowDown'){e.preventDefault();userCam=true;tg.po=cl(tg.po+(k==='ArrowUp'?-.08:.08),.35,1.5);kick();return}
      if(k==='+'||k==='='){e.preventDefault();zoom(.8);return}if(k==='-'||k==='_'){e.preventDefault();zoom(1.25);return}if(k==='0'){e.preventDefault();home(true);return}});
    function zoom(f){userCam=true;tg.r=cl(tg.r*f,4,40);$('.ai-zv').textContent=Math.round(defs().r/tg.r*100)+'%';snd('click');kick()}
    function home(clear){cpy(tg,defs());vel.az=vel.po=0;userCam=false;$('.ai-zv').textContent='100%';if(clear&&selK){selK=0;DIM.t=0;paint();hint()}kick()}
    function fly(k){var c=CEN[k];if(!c)return;userCam=true;var cc=CL[k-1];tg.tx=c[0];tg.ty=c[1];tg.tz=c[2];tg.r=cc.noise?defs().r*.8:cl(Math.max.apply(null,cc.s)*6.2+3.5,7,11)*(PHN?1.45:1);
      $('.ai-zv').textContent=Math.round(defs().r/tg.r*100)+'%';kick()}
    api.listen($('.ai-zoom'),'click',function(e){var b=e.target.closest('button');if(!b)return;var z=b.getAttribute('data-z');if(z==='in')zoom(.8);else if(z==='out')zoom(1.25);else{home(true);snd('click')}});
    /* ---------- tags, the inspector ---------- */
    CL.forEach(function(c){var b=D.createElement('button');b.type='button';b.className='ai-ctag off'+(c.noise?' nz':'');b.setAttribute('data-k',c.k);tagsEl.appendChild(b);TAGS[c.k]=b;api.listen(b,'click',function(){if(started)select(c.k,{fly:true})})});
    function paint(){CL.forEach(function(c){var t=tagOf(LB[c.k].tag),el=TAGS[c.k],lab=labelled(c.k);if(!el)return;
        var h='<i class="ai-dotc" style="'+(t?'--c:'+t.c+';--cb:'+t.c:'')+'"></i>C'+c.k+' '+esc(c.n)+(t?'<small style="--c:'+t.c+'">'+t.n+'</small>':'<em>'+c.N+'</em>');if(el.innerHTML!==h){el.innerHTML=h;el._w=0}
        el.classList.toggle('on',c.k===selK);el.style.setProperty('--c',t?t.c:'#fff');el.setAttribute('aria-label','Cluster '+c.k+', '+c.n+', '+c.N+' replies'+(t?', tagged '+t.n:'')+(lab?', labelled':''));el.setAttribute('aria-pressed',c.k===selK?'true':'false')});
      insp()}
    var tagL=$('.ai-tagl'),moves=$('.ai-moves'),showAll=false;
    TG.forEach(function(t){var b=D.createElement('button');b.type='button';b.className='ai-tg';b.setAttribute('role','radio');b.setAttribute('data-t',t.id);b.style.setProperty('--c',t.c);b.innerHTML='<i></i><b>'+t.n+'</b><span>'+t.d+'</span>';tagL.appendChild(b)});
    MV.forEach(function(m){var b=D.createElement('button');b.type='button';b.className='ai-mv';b.setAttribute('role','radio');b.setAttribute('data-m',m.id);b.innerHTML='<i></i>'+m.n;moves.appendChild(b)});
    function radioKeys(box,sel,fn){api.listen(box,'keydown',function(e){var k=e.key,d=k==='ArrowRight'||k==='ArrowDown'?1:k==='ArrowLeft'||k==='ArrowUp'?-1:0;if(!d)return;e.preventDefault();e.stopPropagation();var bs=$$(sel,box),i=bs.indexOf(D.activeElement);i=(i+d+bs.length)%bs.length;bs[i].focus();fn(bs[i])})}
    api.listen(tagL,'click',function(e){var b=e.target.closest('.ai-tg');if(b)setTag(b.getAttribute('data-t'))});
    api.listen(moves,'click',function(e){var b=e.target.closest('.ai-mv');if(b)setMove(b.getAttribute('data-m'))});
    radioKeys(tagL,'.ai-tg',function(b){setTag(b.getAttribute('data-t'))});radioKeys(moves,'.ai-mv',function(b){setMove(b.getAttribute('data-m'))});
    api.listen($('.ai-more'),'click',function(){showAll=!showAll;insp();snd('click')});
    api.listen($('.ai-dist'),'click',function(e){var b=e.target.closest('.ai-drow');if(b&&started)select(+b.getAttribute('data-k'),{fly:true})});
    function insp(){var c=selK?CL[selK-1]:null,l=c?LB[c.k]:null,t=l?tagOf(l.tag):null,ed=started&&!RES[1];
      $('.ai-osw').style.setProperty('--c',t?t.c:c?'#C9CCD6':'#E1E1E6');$('.ai-on').textContent=c?c.n:'Pick a cluster';
      $('.ai-om').textContent=c?c.N+' replies · '+(c.noise?'ignored':t?t.n.toLowerCase():'unlabelled'):'600 replies in 6 clusters';$('.ai-okw').textContent=c?'Keywords: '+c.kw:'';
      var dist=$('.ai-dist');dist.hidden=!!c;if(!c){var dh=CL.map(function(cc){var tt=tagOf(LB[cc.k].tag);return '<button class="ai-drow" type="button" data-k="'+cc.k+'"><span>'+esc(cc.n)+'</span><i><b style="width:'+(cc.N/168*100).toFixed(1)+'%;'+(tt?'background:'+tt.c:'')+'"></b></i><em>'+cc.N+'</em></button>'}).join('');if(dist._h!==dh){$('.ai-dl',dist).innerHTML=dh;dist._h=dh}}
      $('.ai-smp').hidden=!c;var q=$('.ai-quotes'),RR=c?c.R:null;q.classList.toggle('all',showAll);q.style.setProperty('--c',t?t.c:'#C9C9D1');
      var qh=c?RR.slice(0,showAll?RR.length:3).map(function(r){return '<li>'+esc(r)+'</li>'}).join(''):'';if(q.innerHTML!==qh)q.innerHTML=qh;
      var mb=$('.ai-more');mb.hidden=!c||RR.length<=3;if(RR)mb.textContent=showAll?'Show fewer':'Show '+(RR.length-3)+' more';
      var noise=c&&c.noise;$('.ai-lab').hidden=!c;tagL.hidden=moves.hidden=!!noise;$('.ai-tag-l').hidden=$('.ai-mv-l').hidden=!!noise;
      $$('.ai-tg',tagL).forEach(function(b,i){var on=!!l&&l.tag===b.getAttribute('data-t');b.setAttribute('aria-checked',on?'true':'false');b.tabIndex=on||(!l||!l.tag)&&i===0?0:-1;if(ed)b.removeAttribute('aria-disabled');else b.setAttribute('aria-disabled','true')});
      $$('.ai-mv',moves).forEach(function(b,i){var on=!!l&&l.mv===b.getAttribute('data-m');b.setAttribute('aria-checked',on?'true':'false');b.tabIndex=on||(!l||!l.mv)&&i===0?0:-1;if(ed)b.removeAttribute('aria-disabled');else b.setAttribute('aria-disabled','true')});
      var note=$('.ai-note'),rv=$('.ai-rvw');if(noise){note.hidden=false;note.innerHTML='Off-topic replies: mic checks, “idk”, skips. The coach ignores this cluster.'}else note.hidden=true;
      if(c&&!noise&&RES[1]&&labelled(c.k)){var ok=agrees(c.k),gt=tagOf(c.g);rv.hidden=false;rv.className='ai-rvw '+(ok?'y':'n');rv.innerHTML='<span class="ai-avt" aria-hidden="true">HL</span><span>'+(ok?'<b>Reviewer agrees.</b> ':'<b>Reviewer says '+gt.n.toLowerCase()+': '+mvOf(c.gm[0]).n.toLowerCase()+'.</b> ')+esc(c.note)+'</span>'}else rv.hidden=true;
      var n=nLab();$('.ai-covt').textContent=n+' of 5 clusters labelled';$$('.ai-covb i').forEach(function(e,i){e.classList.toggle('ok',i<n)});$('.ai-covb').classList.toggle('all',n===5);
      var sb=$('.ai-sub1');if(!RES[1])sb.setAttribute('aria-disabled',n===5?'false':'true')}
    function select(k,o){o=o||{};k=+k;if(!CL[k-1])return;var ch=k!==selK;selK=k;showAll=false;DIM.t=1;if(o.fly)fly(k);paint();hint();
      if(ch){$('.ai-det').scrollTop=0;snd('pin');say('Cluster '+k+', '+CL[k-1].n+', '+CL[k-1].N+' replies.')}
      if(isPh()&&!CL[k-1].noise&&!labelled(k)&&!RES[1])sheet(true,true);need()}
    function setTag(id){var c=CL[selK-1];if(!c||c.noise||RES[1]||!started)return;var l=LB[c.k],was=labelled(c.k);if(l.tag===id)return;l.tag=id;colours();PUL[c.k]=1;snd('tap');after(c.k,was);say(c.n+' tagged '+tagOf(id).n+'.');if(!l.mv)api.after(80,showMoves)}
    /* the moves come next: bring them into view if the inspector is short */
    function showMoves(){var det=$('.ai-det'),m=$('.ai-mv-l'),mv=$('.ai-moves');if(!det||m.hidden)return;var dr=det.getBoundingClientRect(),r=mv.getBoundingClientRect();if(r.bottom>dr.bottom-4)det.scrollTo({top:det.scrollTop+(m.getBoundingClientRect().top-dr.top)-6,behavior:RM?'auto':'smooth'})}
    function setMove(id){var c=CL[selK-1];if(!c||c.noise||RES[1]||!started)return;var l=LB[c.k],was=labelled(c.k);if(l.mv===id)return;l.mv=id;snd('tap');after(c.k,was)}
    function after(k,was){var lab=labelled(k);paint();hint();need();if(lab&&!was){var n=nLab();api.after(120,function(){snd(n===5?'great':'good')});say(n+' of 5 clusters labelled.');if(isPh())api.after(650,function(){sheet(false,true)})}}
    function hint(){var c=selK?CL[selK-1]:null,n=nLab(),key,t,tone='info',act=null,ph=isPh(),nx=nextOpen(selK);
      if(!started){key='pre';t='These are 600 learner answers. Open the project to group them by meaning.'}
      else if(RES[1]){key='z';t='Coaching map saved. The coach now knows what to look for.';tone='ok'}
      else if(n===5){key='e';t='All five clusters labelled. Save the coaching map.';tone='ok'}
      else if(!c){key='a'+n;t=n?n+' of 5 labelled. Pick the next cluster.':ph?'600 learner answers, grouped by meaning. Label each group.':'These are 600 learner answers, grouped by meaning. Label what each group gets wrong.';act=[n?'Next cluster':'Start with the biggest',nx]}
      else if(c.noise){key='nz';t='Off-topic replies. Nothing to coach here.';act=['Next cluster',nx]}
      else if(!labelled(c.k)){key='s'+c.k+(LB[c.k].tag?1:0);t=LB[c.k].tag?'Now pick what the coach should do about it.':ph?'Read the replies below, then label the group.':'Read a few replies, then say what this group shows.'}
      else{key='l'+c.k+n;t=n+' of 5 labelled. Next: '+CL[nx-1].n+'.';act=['Next cluster',nx];tone='ok'}
      if(key===hintK)return;hintK=key;var el=$('.ai-hint');
      var pt=function(){el.setAttribute('data-tone',tone);$('.ai-hint-i',el).innerHTML=tone==='ok'?I.check:I.dots;$('.ai-hint-t').textContent=t;var a=$('.ai-hint-a',el);if(a)a.remove();
        if(act&&act[1]){var b=D.createElement('button');b.type='button';b.className='ai-hint-a';b.textContent=act[0];api.listen(b,'click',function(){select(act[1],{fly:true})});el.appendChild(b)}};
      if(RM){pt();return}el.classList.add('swap');api.after(130,function(){pt();el.classList.remove('swap')})}
    function sheet(on,quiet){var g=$('.ai-grab');if(on==null)on=!sheetEl.classList.contains('open');if(on===sheetEl.classList.contains('open'))return;sheetEl.classList.toggle('open',on);g.setAttribute('aria-expanded',on?'true':'false');$('.ai-sr',g).textContent=on?'Hide details':'Show details';if(!quiet)snd('click')}
    api.listen($('.ai-grab'),'click',function(){sheet()});
    api.listen($('.ai-ih'),'click',function(){if(isPh())sheet()});
    /* save: the clusters pulse in turn and the camera pulls back */
    function save(){if(RES[1]||!started)return;if(nLab()<5){shake($('.ai-cov'));snd('warn');say('Label all five clusters first.');var nx=nextOpen(selK);if(nx)select(nx,{fly:true});return}
      var ag=0,pts=0,miss=[];CL.forEach(function(c){if(c.noise)return;var l=LB[c.k],tOk=l.tag===c.g,mOk=c.gm.indexOf(l.mv)>=0;pts+=(tOk?12:0)+(mOk?8:0);if(tOk&&mOk)ag++;else miss.push(c)});
      RES[1]={pts:pts,ag:ag,miss:miss};api.score(pts);var sb=$('.ai-sub1');sb.classList.add('sent');sb.innerHTML=I.check+'Map saved';
      home(false);if(!RM)tg.az+=.5;selK=0;DIM.t=0;var t0=now();CL.forEach(function(c,i){if(!c.noise)PULT[c.k]=t0+250+i*140});
      sheetEl.classList.add('fin');snd('send');paint();hint();steps();sheet(false,true);need();
      api.toast({tone:ag===5?'good':ag>=3?'good':'warn',big:ag===5,title:ag===5?'Five for five.':'Map saved. '+ag+' of 5 match.',text:ag===5?'The coach now knows what to look for.':esc(miss[0].n)+': '+esc(miss[0].note),pts:pts});
      say('Coaching map saved. You matched the reviewer on '+ag+' of 5 clusters.');
      var nx=$('.ai-nx1');nx.hidden=false;api.after(500,function(){if(!api.narrow())nx.focus({preventScroll:true})})}
    api.listen($('.ai-sub1'),'click',save);
    var nxb=D.createElement('button');nxb.type='button';nxb.className='ai-btn ai-pri ai-nx1';nxb.hidden=true;nxb.innerHTML='Next: rank coach replies'+I.arrow;$('.ai-i1 .ai-ifoot').appendChild(nxb);
    api.listen(nxb,'click',function(){go(2)});
    var ro=null;if('ResizeObserver' in W){ro=new ResizeObserver(function(){size()});ro.observe(view);ro.observe(sheetEl)}
    colours();paint();hint();
    return {show:function(){size();need()},size:size,need:need,reveal:reveal,select:select,setTag:setTag,setMove:setMove,save:save,sheet:sheet,hint:hint,paint:paint,
      wake:function(){if(cur===1)need()},
      dbg:function(){return {built:built,tk:TK,n:PT?PT.n:0,sel:selK,lab:nLab(),intro:IN.v}},
      pt:function(k){if(!SX)return null;var r=view.getBoundingClientRect(),cand=[];for(var i=0;i<PT.n;i++)if(PT.cid[i]===k&&SX[i]>40&&SX[i]<VW-40&&SY[i]>70&&SY[i]<VH-PEEK-40)cand.push(i);
        cand.sort(function(a,b){return SZ[a]-SZ[b]});
        for(var j=0;j<cand.length;j++){var q=cand[j],x=SX[q],y=SY[q],clash=false;for(var m=0;m<PT.n;m++){if(PT.cid[m]!==k&&SZ[m]<SZ[q]+2&&Math.abs(SX[m]-x)<11&&Math.abs(SY[m]-y)<11){clash=true;break}}
          if(clash)continue;var near=$$('.ai-ctag:not(.off),.ai-hint,.ai-tip.on').some(function(t){var b=t.getBoundingClientRect();return r.left+x>b.left-26&&r.left+x<b.right+26&&r.top+y>b.top-26&&r.top+y<b.bottom+26});if(near)continue;
          var el=D.elementFromPoint(r.left+x,r.top+y);if(!el||!el.closest('.ai-view')||el.closest('.ai-ctag,.ai-hint,.ai-zoom,.ai-tip'))continue;return {x:r.left+x,y:r.top+y,i:q}}return null},
      destroy:function(){dead=true;if(raf)cancelAnimationFrame(raf);raf=0;if(ro)ro.disconnect();clearTimeout(tip._t);
        if(R){KEEP.forEach(function(x){try{x.dispose()}catch(_){}});try{R.dispose();R.forceContextLoss()}catch(_){}if(R.domElement&&R.domElement.parentNode)R.domElement.parentNode.removeChild(R.domElement);R=null}}}
  })();

  /* ================= task 2: rank two coach replies ================= */
  var RK={pick:null,why:{},dealt:false},cards=$('.ai-cards'),sub2=$('.ai-sub2'),sec2=$('.ai-task[data-task="2"]');
  function deal(){if(RK.dealt||RM)return;RK.dealt=true;cards.classList.add('deal');api.after(1300,function(){cards.classList.remove('deal')})}
  function pickR(c){if(RES[2])return;var ch=RK.pick!==c;RK.pick=c;$$('.ai-card',cards).forEach(function(k){k.classList.toggle('on',k.getAttribute('data-c')===c)});cards.classList.add('has');
    $$('.ai-pick',cards).forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-pick')===c?'true':'false')});if(ch)snd('flip');upd2()}
  function chip(r){if(RES[2])return;RK.why[r]=!RK.why[r];$('.ai-chip[data-r="'+r+'"]').setAttribute('aria-pressed',RK.why[r]?'true':'false');snd('tap');upd2()}
  function anyWhy(){return Object.keys(RK.why).some(function(k){return RK.why[k]})}
  function upd2(){var a=anyWhy();sub2.setAttribute('aria-disabled',RK.pick&&a?'false':'true');$('.ai-why-l span').textContent=!RK.pick?'Pick a reply first.':!a?'Tick every reason that applies.':'Submit when you’re sure.'}
  api.listen(cards,'click',function(e){var b=e.target.closest('.ai-pick');if(b){pickR(b.getAttribute('data-pick'));return}var c=e.target.closest('.ai-card');if(c&&!(W.getSelection&&String(W.getSelection()).length))pickR(c.getAttribute('data-c'))});
  api.listen(cards,'pointermove',function(e){var c=e.target.closest('.ai-card');if(!c||e.pointerType!=='mouse')return;var r=c.getBoundingClientRect();c.style.setProperty('--mx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');c.style.setProperty('--my',((e.clientY-r.top)/r.height*100).toFixed(1)+'%')});
  $$('.ai-chip').forEach(function(b){api.listen(b,'click',function(){chip(b.getAttribute('data-r'))})});
  api.listen(sub2,'click',submit2);
  var GR={acc:1,name:1,move:1,tone:0},WHY={
    acc:{n:'Accurate',g:'A approves the exact habit we’re training out.',hit:'Yes. A approves the exact habit we’re training out.',miss:'The main one, and it was left out. A approves the exact habit we’re training out.'},
    name:{n:'Names the mistake',g:'B names the habit: a discount before discovery.',hit:'Yes. B names the habit: a discount before discovery.',miss:'B names the habit: a discount before discovery. A never does.'},
    move:{n:'Gives a move to try',g:'B gives Sam one question to use next time.',hit:'Yes. B gives Sam one question to use next time.',miss:'B gives Sam one question to use next time. A gives nothing to practise.'},
    tone:{n:'Right tone',extra:'Not the difference. Both are kind. A is kind and wrong.',none:'Right to leave it. Both are kind.'}};
  function submit2(){if(RES[2]||!started)return;if(sub2.getAttribute('aria-disabled')==='true'){shake($('.ai-why'));snd('warn');say(!RK.pick?'Pick a reply first.':'Tick at least one reason.');return}
    var m=RK.pick==='b',nr=0,extra=0;['acc','name','move'].forEach(function(r){if(RK.why[r])nr++});if(RK.why.tone)extra=1;
    var pts=m?60+nr*10+(extra?0:10):-20;RES[2]={pts:pts,m:m,nr:nr,extra:extra};api.score(pts);
    $$('.ai-card',cards).forEach(function(c){var g=c.getAttribute('data-c')==='b';if(g)c.classList.add('gold');if(!g&&c.classList.contains('on'))c.classList.add('miss')});
    $$('.ai-pick,.ai-chip',sec2).forEach(function(b){b.disabled=true});
    var rows='';['acc','name','move','tone'].forEach(function(r){var t=!!RK.why[r],g=!!GR[r],st=m?(g?(t?'hit':'miss'):(t?'extra':'none')):(g?'miss':'none');$('.ai-chip[data-r="'+r+'"]').setAttribute('data-g',st);
      var w=WHY[r],c2=m?(st==='hit'?'y':st==='none'?'m':'n'):(g?'y':'m'),txt=m?w[st]:(g?w.g:w.none);rows+='<li class="'+c2+'"><i>'+I[c2]+'</i><span><b>'+w.n+'.</b> '+txt+'</span></li>'});
    $('.ai-why').classList.add('fin');
    var gr=$('.ai-gr');gr.innerHTML='<div class="ai-gr-h"><span class="ai-vd '+(m?'y':'n')+'"><i>'+I[m?'y':'n']+'</i>'+(m?'Matches the gold label':'Doesn’t match the gold label')+'</span><span class="ai-by"><span class="ai-avt" aria-hidden="true">HL</span><b>Hadrien Lee</b>&nbsp;· reviewer rationale</span></div>'+
      '<p class="ai-gr-t"><b>B is better.</b> '+(m?'':'A is the trap: it sounds supportive. ')+'A praises the exact habit we’re training out: a discount before discovery tells the customer the first price was padding. B names the habit, says what it costs and gives Sam one question to try. Both are kind. Accuracy decides it.</p><ul class="ai-gr-r">'+rows+'</ul>';
    gr.classList.add('on');api.after(260,function(){snd('stamp')});sub2.classList.add('sent');steps();
    api.toast({tone:m?'good':'bad',big:m&&nr===3&&!extra,title:m?(nr===3&&!extra?'Matches the gold label.':'Right reply.'):'That’s the trap.',text:m?(nr===3&&!extra?'Accuracy beat warmth.':'Reasons partly match. The rationale says which.'):'A praises the habit we’re training out.',pts:pts});
    say((m?'Matches':'Does not match')+' the gold label. Coach reply B is better.');
    var nx=$('.ai-nx2');nx.hidden=false;
    api.after(450,function(){var sc=isPh()?sec2:$('.ai-ws',sec2),r=gr.getBoundingClientRect(),sr=sc.getBoundingClientRect();if(r.bottom>sr.bottom-40)sc.scrollTo({top:sc.scrollTop+(r.top-sr.top)-50,behavior:RM?'auto':'smooth'})})}
  api.listen($('.ai-nx2'),'click',function(){go(3)});
  $$('.ai-card').forEach(function(c){$('.ai-card-n',c).textContent=$('.ai-card-t',c).textContent.trim().split(/\s+/).length+' words'});

  /* ================= task 3: the coach's voice ================= */
  var VO={w:0,d:2,f:2,prevS:null,lines:null,ok:0};
  function paintDials(){$$('.ai-dial').forEach(function(dl){var key=dl.getAttribute('data-d'),v=VO[key];$$('.ai-sb',dl).forEach(function(b,i){b.setAttribute('aria-checked',i===v?'true':'false');b.tabIndex=i===v?0:-1;if(RES[3])b.setAttribute('aria-disabled','true');else b.removeAttribute('aria-disabled')});
    $('.ai-thumb',dl).style.setProperty('--i',v);$('.ai-dv-'+key).textContent=v===V0[key]?LV[key][v]+' · v3.0':LV[key][v];$('.ai-seg',dl).classList.toggle('lk',!!RES[3])})}
  function voice(first){var t=compose(VO.w,VO.d,VO.f),ans=$('.ai-ans'),sn=sents(t);
    if(VO.prevS&&!first){var old=VO.prevS,h='';sn.forEach(function(x){var tx=x.trim();h+=(old.indexOf(tx)<0?'<span class="ai-ins">'+esc(tx)+'</span>':esc(tx))+' '});
      ans.innerHTML=h.trim();ans.classList.remove('fade');void ans.offsetWidth;requestAnimationFrame(function(){ans.classList.add('fade')})}else ans.textContent=t;
    VO.prevS=sn.map(function(x){return x.trim()});var n=words(t);$('.ai-wc').textContent=n+' words · about '+Math.max(5,Math.round(n/3.6/5)*5)+' s to read';
    var L2=promptLines(VO),old2=VO.lines,h2='',nd=0;L2.forEach(function(s,i){var df=s!==P0[i];if(df)nd++;var fl=old2&&old2[i]!==s&&!first;var c=esc(s).replace(/^([A-Za-z]+):/,'<span class="k">$1:</span>');
      h2+='<div class="ai-ln'+(s.charAt(0)==='#'?' ai-cmt':'')+(df?' df':'')+(fl?' fl':'')+'"><span class="g">'+(df?'~':i+1)+'</span><span class="c">'+(c||' ')+'</span></div>'});VO.lines=L2;$('.ai-code').innerHTML=h2;
    $('.ai-sp-d').textContent=RES[3]?'Published to staging':nd?nd+' line'+(nd>1?'s':'')+' changed from v3.0':'Same as v3.0';
    var r=rubric(t),ok=r.filter(function(x){return x.ok}).length;$('.ai-rs').textContent=ok+' of 6';$$('.ai-ticks i').forEach(function(e,i){e.classList.toggle('ok',i<ok)});
    $('.ai-rub').innerHTML=r.map(function(x){return '<li class="'+(x.ok?'ok':'')+'"><i></i><span><b>'+x.t+'</b><small>'+esc(x.e)+'</small></span></li>'}).join('');
    if(!RES[3])$('.ai-sub3').setAttribute('aria-disabled',ok===6?'false':'true');VO.ok=ok;paintDials()}
  $$('.ai-dial').forEach(function(dl){var key=dl.getAttribute('data-d'),seg=$('.ai-seg',dl);LV[key].forEach(function(n,i){var b=D.createElement('button');b.type='button';b.className='ai-sb';b.setAttribute('role','radio');b.textContent=n;
      api.listen(b,'click',function(){setDial(key,i)});seg.appendChild(b)});
    api.listen(seg,'keydown',function(e){var k=e.key,d=k==='ArrowRight'||k==='ArrowDown'?1:k==='ArrowLeft'||k==='ArrowUp'?-1:0;if(!d)return;e.preventDefault();e.stopPropagation();var v=cl(VO[key]+d,0,2);setDial(key,v);var b=$$('.ai-sb',seg)[v];if(b)b.focus()})});
  function setDial(key,i){if(RES[3]||!started||VO[key]===i)return;var before=VO.ok;VO[key]=i;snd('swipe');voice();if(VO.ok===6&&before<6){api.after(160,function(){snd('good')});say('All six checks pass. Ready to publish.')}}
  api.listen($('.ai-sub3'),'click',function(){if(RES[3]||!started)return;if(VO.ok<6){shake($('.ai-rub'));snd('warn');say('Publishing needs all six checks.');return}
    RES[3]={pts:100,ok:6};api.score(100);var b=$('.ai-sub3');b.classList.add('sent');b.removeAttribute('aria-disabled');b.innerHTML=I.check+'Published v3.1';
    $('.ai-sp').classList.add('pub');voice(true);snd('send');steps();
    api.toast({tone:'good',big:true,title:'Six of six. Published.',text:'The coach sounds like a good manager now.',pts:100});say('Voice v3.1 published.');api.after(1700,finish)});

  /* ================= the report ================= */
  function finish(){if(ended)return;ended=true;if(tm)tm.stop();
    var r1=RES[1],r2=RES[2],r3=RES[3],rows=[];
    rows.push(r1?{s:r1.ag===5?'y':r1.ag>=3?'m':'n',label:'Coaching map · '+r1.ag+' of 5 clusters match the reviewer',detail:r1.ag===5?'Discounts and escalations flagged, discovery and value reinforced. The coach knows what to look for.':esc(r1.miss[0].n)+': '+esc(r1.miss[0].note),pts:r1.pts}
      :{s:'n',label:'Coaching map · not saved',detail:nLab()+' of 5 clusters labelled when time ran out. The coach still can’t tell a discount from discovery.',pts:0});
    rows.push(r2?{s:r2.m?(r2.nr===3&&!r2.extra?'y':'m'):'n',label:'Coach reply · picked '+(r2.m?'B':'A'),detail:r2.m?(r2.nr===3&&!r2.extra?'Gold label, for the right reasons: accurate, names the habit, gives a move.':'Gold label. Some reasons missed: accuracy, naming the habit and a move to try are what made B better.'):'A praises the discount. Trained on that, the coach would reward the habit it’s meant to fix.',pts:r2.pts}
      :{s:'n',label:'Coach reply · not ranked',detail:'Not reached in time.',pts:0});
    rows.push(r3?{s:'y',label:'Coach voice · 6 of 6 checks',detail:'Warm, plain, under 60 words, with one question to try. Published to staging.',pts:100}
      :{s:VO.ok>=4&&cur===3?'m':'n',label:'Coach voice · '+(cur===3?VO.ok+' of 6 checks':'not tuned'),detail:cur===3?'Not published. It still reads like an exam report.':'Not reached in time.',pts:0});
    var t=api.total();
    api.end({max:300,rows:rows,title:t>=270?'The coach is in good hands.':t>=180?'Mostly right. The coach would pick up one bad habit.':t>=90?'The coach would learn some bad habits.':'This coach would teach discounting.',
      line:'Same style guide as slide 4 of 18. This time the model learned from examples, not adjectives.'})}

  api.key(function(e){if(ended)return;var k=e.key;
    if(cur===2&&!RES[2]){var kk=k.toLowerCase();if(kk==='a'||kk==='b'){e.preventDefault();pickR(kk);return}if(/^[1-4]$/.test(k)){e.preventDefault();chip(['acc','name','move','tone'][+k-1]);return}
      if(k==='Enter'&&!(e.target.closest&&e.target.closest('button'))){e.preventDefault();submit2();return}}
    if(cur===1&&!RES[1]&&(k==='n'||k==='N')){e.preventDefault();var nx=nextOpen(selK);if(nx)F3.select(nx,{fly:true})}});
  /* the map keeps no loop running: it wakes when the window is back in view */
  var wasP=false;api.every(300,function(){var p=api.paused();if(wasP&&!p)F3.wake();wasP=p});
  voice(true);upd2();steps();round();
  root.__ai=F3;
  return {start:function(){started=true;round();tm=api.timer(180,function(){api.toast({tone:'warn',title:'Time’s up.',text:'What’s done is scored.',silent:true});api.after(900,finish)});
      F3.reveal();F3.hint();F3.paint();paintDials();api.after(600,function(){if(!api.narrow()){var v=$('.ai-view');if(v)v.focus({preventScroll:true})}})},
    resize:function(){F3.size()},
    destroy:function(){F3.destroy()},
    dbg:F3}
}

(window.HM_T=window.HM_T||[]).push({id:'ai',topic:'AI coaching',music:'ai',
  app:{name:'Calibrate',url:'calibrate.northwind.ai/projects/sales-coach',color:'#D6336C',icon:I.logo},
  lms:{url:'learn.northwind.co/ai-enablement/tutor-style-guide/slide-4',color:'#3E6468',bg:'#E7EAEA'},
  slide:slide(),
  notes:['Friendly, accurate, concise. By whose standard? Nobody can check an adjective.','A rule isn’t an example. The model learns from examples, not adjectives.','“Always positive” is how a coach ends up praising a bad discount.','Slide 4 of 18. The tutor ships before anyone reads slide 18.'],
  intro:{title:'AI coach drill',lede:'Northwind is training an AI sales coach on a pricing objection. Before it coaches the team, teach it what good feedback looks like.',
    rules:['<b>Map</b> 600 learner answers in 3D. Label what each cluster gets wrong, and what the coach should do.','<b>Rank</b> two coach replies against the reviewer’s gold label.','<b>Tune</b> the coach’s voice until the house style passes 6 of 6.'],
    meta:'3 tasks · about 3 minutes',cta:'Open project'},
  html:app(),init:init});
})();

/* engine */
/* Home hero engine: a dead course slide gets reviewed, dissolves into the site's dots and rebuilds as a
   real piece of software the visitor plays. One of five trainings, picked at random per visit. */
(function(){
'use strict';
var D=document,W=window;
function $(s,r){return (r||D).querySelector(s)}function $$(s,r){return [].slice.call((r||D).querySelectorAll(s))}
var root=$('.hm'),LIST=W.HM_T||[];if(!root||!LIST.length)return;
var RM=W.matchMedia('(prefers-reduced-motion: reduce)').matches||D.body.classList.contains('a11y-motion');
function cl(v,a,b){return Math.max(a,Math.min(b,v))}
function ease(t){t=cl(t,0,1);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
function out(t){t=cl(t,0,1);return 1-Math.pow(1-t,3)}
function lerp(a,b,t){return a+(b-a)*t}
var LS={get:function(k){try{return W.localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{W.localStorage.setItem(k,v)}catch(e){}}};

/* ================= sound: everything synthesized, nothing downloaded ================= */
var SND=(function(){
  var AC=W.AudioContext||W.webkitAudioContext,ac=null,master,comp,sfx,mus,musLP,rvIn,nb,on=LS.get('hm-snd')!=='0',song=null,iv=null,tension=0,held=false;
  function N(m){return 440*Math.pow(2,(m-69)/12)}
  function boot(ctx){ac=ctx;
    master=ac.createGain();master.gain.value=on?.9:0;
    comp=ac.createDynamicsCompressor();comp.threshold.value=-16;comp.knee.value=10;comp.ratio.value=3.5;comp.attack.value=.004;comp.release.value=.22;comp.connect(master);master.connect(ac.destination);
    var rv=ac.createConvolver(),n=Math.floor(ac.sampleRate*2.3),b=ac.createBuffer(2,n,ac.sampleRate);
    for(var c=0;c<2;c++){var d=b.getChannelData(c);for(var i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2.8)}
    rv.buffer=b;rvIn=ac.createGain();rvIn.gain.value=1;var rvo=ac.createGain();rvo.gain.value=.3;rvIn.connect(rv);rv.connect(rvo);rvo.connect(comp);
    sfx=ac.createGain();sfx.gain.value=.6;sfx.connect(comp);
    mus=ac.createGain();mus.gain.value=0;musLP=ac.createBiquadFilter();musLP.type='lowpass';musLP.frequency.value=4800;musLP.Q.value=.4;mus.connect(musLP);musLP.connect(comp);
    nb=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate);var nd=nb.getChannelData(0);for(var j=0;j<nd.length;j++)nd[j]=Math.random()*2-1}
  function init(){if(ac||!AC)return;try{boot(new AC())}catch(e){ac=null}}
  function unlock(){init();if(ac&&ac.state==='suspended'&&ac.resume)ac.resume()}
  function ready(){return !!ac&&ac.state==='running'}
  /* voices */
  function send(g,amt){if(!amt)return;var s=ac.createGain();s.gain.value=amt;g.connect(s);s.connect(rvIn)}
  function osc(type,f,t,dur,vol,dest,o){o=o||{};var s=ac.createOscillator(),g=ac.createGain(),node=s;s.type=type;s.frequency.setValueAtTime(f,t);
    if(o.to)s.frequency.exponentialRampToValueAtTime(o.to,t+(o.glide||dur));if(o.det)s.detune.value=o.det;
    if(o.lp){var fl=ac.createBiquadFilter();fl.type='lowpass';fl.frequency.setValueAtTime(o.lp,t);if(o.lpTo)fl.frequency.exponentialRampToValueAtTime(o.lpTo,t+(o.lpT||dur));fl.Q.value=o.q||.7;s.connect(fl);node=fl}
    node.connect(g);g.connect(dest);send(g,o.rv);var a=o.a||.004;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+a);g.gain.exponentialRampToValueAtTime(.0001,t+Math.max(dur,a+.01));s.start(t);s.stop(t+dur+.05)}
  function noise(t,dur,vol,dest,o){o=o||{};var s=ac.createBufferSource(),g=ac.createGain(),f=ac.createBiquadFilter();s.buffer=nb;f.type=o.type||'bandpass';f.frequency.setValueAtTime(o.f||1000,t);
    if(o.fTo)f.frequency.exponentialRampToValueAtTime(o.fTo,t+dur);f.Q.value=o.q||1;s.connect(f);f.connect(g);g.connect(dest);send(g,o.rv);var a=o.a||.002;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+a);g.gain.exponentialRampToValueAtTime(.0001,t+Math.max(dur,a+.01));s.start(t,Math.random()*1.2);s.stop(t+dur+.05)}
  function bell(t,f,v,dest){dest=dest||sfx;osc('sine',f,t,1.1,v,dest,{rv:.35});osc('sine',f*2.76,t,.32,v*.16,dest);osc('triangle',f*2,t,.16,v*.08,dest)}
  function pad(t,fs,dur,v,dest){fs.forEach(function(f){[-8,8].forEach(function(dt){var s=ac.createOscillator(),g=ac.createGain(),lp=ac.createBiquadFilter();s.type='sawtooth';s.frequency.value=f;s.detune.value=dt;lp.type='lowpass';lp.frequency.value=950;s.connect(lp);lp.connect(g);g.connect(dest);send(g,.55);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+Math.min(.6,dur*.3));g.gain.setValueAtTime(v,t+dur*.72);g.gain.linearRampToValueAtTime(0,t+dur);s.start(t);s.stop(t+dur+.05)})})}
  /* drums and instruments for the music bus */
  var I={
    kick:function(t,v){osc('sine',150,t,.34,v,mus,{to:46,glide:.13})},
    snare:function(t,v){noise(t,.17,v,mus,{f:1800,q:.9,rv:.25});osc('triangle',190,t,.09,v*.55,mus,{to:140})},
    rim:function(t,v){noise(t,.04,v,mus,{f:2600,q:4,rv:.2});osc('sine',820,t,.03,v*.5,mus)},
    hat:function(t,v,o){noise(t,o?.16:.035,v,mus,{type:'highpass',f:7600})},
    brush:function(t,v){noise(t,.1,v,mus,{f:5200,q:.4,a:.012})},
    pluck:function(t,f,v,dur,br){osc('triangle',f,t,dur,v,mus,{lp:br||2600,lpTo:Math.max(220,f*1.4),lpT:dur*.6,rv:.25})},
    pizz:function(t,f,v){osc('square',f,t,.17,v,mus,{lp:1700,lpTo:280,lpT:.12,rv:.18})},
    ep:function(t,f,v,dur){osc('sine',f,t,dur,v,mus,{a:.006,rv:.28});osc('sine',f*2,t,dur*.4,v*.22,mus);osc('triangle',f*3,t,.08,v*.06,mus)},
    bass:function(t,f,v,dur){osc('triangle',f,t,dur,v,mus,{lp:700,a:.008});osc('sine',f,t,dur,v*.7,mus,{a:.008})},
    pulse:function(t,f,v,dur,lp){osc('sawtooth',f,t,dur,v,mus,{lp:lp||800,lpTo:160,lpT:dur*.7,a:.006})},
    wood:function(t,f,v){osc('sine',f,t,.05,v,mus);noise(t,.018,v*.6,mus,{f:f*2,q:3})},
    metal:function(t,f,v){osc('sine',f,t,.7,v,mus,{rv:.45});osc('sine',f*2.41,t,.4,v*.5,mus);osc('sine',f*3.77,t,.22,v*.3,mus);noise(t,.03,v*.8,mus,{f:3200,q:2})},
    vib:function(t,f,v){bell(t,f,v,mus)},
    pad:function(t,fs,dur,v){pad(t,fs,dur,v,mus)}
  };
  /* five loops, one per training. Each bar is a chord: r = bass root, n = voicing (MIDI) */
  var SONGS={
    phish:{bpm:100,vol:.5,bars:[{r:38,n:[62,65,69,72,76]},{r:34,n:[58,62,65,69,74]},{r:31,n:[55,58,62,65,69]},{r:33,n:[57,61,64,67,69]}],
      tick:function(t,s,b,c,T,u){
        if(s===0)I.pad(t,c.n.slice(0,4).map(N),u*16*.98,.015);
        if(s===0||s===6||s===10)I.bass(t,N(c.r+(s===10?12:0)),.2,u*(s===0?5:3));
        if(s===0||s===8)I.kick(t,.42);
        if(s===4||s===12)I.rim(t,.07);
        if(s%4===2||(T&&s%2===1))I.hat(t,T?.05:.04);
        var arp=[0,2,1,3,2,4,3,1];if(s%2===0||T){var i=arp[(T?s:s>>1)%8];I.pluck(t,N(c.n[i%c.n.length]+12),.042,u*2.4,2800)}}},
    redact:{bpm:112,vol:.5,bars:[{r:36,n:[60,63,67]},{r:32,n:[56,60,63]},{r:29,n:[53,56,60]},{r:31,n:[55,59,62]}],
      tick:function(t,s,b,c,T,u){
        if(s===0)I.pad(t,[N(c.r+12)].concat(c.n.map(N)),u*16,.012);
        if(s%4===0)I.wood(t,s%8===0?1250:880,.085);
        if(T&&s%2===1)I.hat(t,.035);
        var o=[0,1,2,1];if(s%2===0)I.pizz(t,N(c.n[o[(s>>1)%4]]),.048);
        if(s===0||s===8||(T&&s%4===0))I.bass(t,N(c.r),.22,u*3);
        if(s===14&&b===3)I.pizz(t,N(c.n[2]+12),.04)}},
    gift:{bpm:108,vol:.5,sw:function(s){return s%4===2?.667:0},bars:[{r:41,n:[57,60,64,65]},{r:38,n:[57,60,62,65]},{r:43,n:[58,62,65,67]},{r:36,n:[58,62,64,67]}],
      walk:[[0,4,7,9],[0,3,7,6],[0,3,7,-6],[0,4,7,4]],
      tick:function(t,s,b,c,T,u){
        if(s%4===0)I.bass(t,N(c.r+this.walk[b][s>>2]),.2,u*3.2);
        if(s===0||s===6||(s===10&&b%2))c.n.forEach(function(m,i){I.ep(t+i*.008,N(m),.026,u*(s===0?5:3))});
        if(s%2===0)I.brush(t,s%8===4?.05:.028);
        if(s===4||s===12)I.rim(t,.05);
        if(s===0&&b%2===0)I.kick(t,.3);
        if(T&&s%2===0)I.hat(t,.03);
        if(b===3&&(s===8||s===10||s===12))I.vib(t,N([72,74,76][(s-8)/2]),.045)}},
    hazard:{bpm:92,vol:.5,bars:[{r:40,n:[52,55,59,62]},{r:36,n:[52,55,59,60]},{r:45,n:[57,60,64,67]},{r:47,n:[59,64,66,69]}],
      tick:function(t,s,b,c,T,u){
        if(s===0)I.pad(t,c.n.map(N),u*16,.011);
        if(s%2===0)I.pulse(t,N(c.r),.085,u*1.6,s%4===0?950:620);
        if(s===0||s===7||s===10)I.kick(t,.45);
        if(s===4||s===12)I.metal(t,N(76),.04);
        if(s%2===0||T)I.hat(t,s%4===2?.045:.025);
        if(T&&s%4===0)I.metal(t,N(83),.02)}},
    code:{bpm:84,vol:.55,sw:function(s){return s%2===1?.22:0},bars:[{r:45,n:[55,59,60,64]},{r:41,n:[52,57,60,64]},{r:38,n:[53,57,60,64]},{r:40,n:[56,59,62,65]}],
      tick:function(t,s,b,c,T,u){
        if(s===0||s===7)c.n.forEach(function(m,i){I.ep(t+i*.018,N(m),.025,u*(s===0?6:5))});
        if(s===0||s===10)I.kick(t,.5);
        if(s===4||s===12)I.snare(t,.11);
        if(s%2===0)I.hat(t,s%4===0?.034:.022);
        if(s===7||s===15||(T&&s%2===1))I.hat(t,T?.03:.015);
        if(s===0)I.bass(t,N(c.r),.24,u*6);
        if(s===10)I.bass(t,N(c.r+7),.18,u*3)}},
    ai:{bpm:88,vol:.5,sw:function(s){return s%2===1?.14:0},bars:[{r:41,n:[57,60,64,67,71]},{r:45,n:[57,60,64,67,72]},{r:38,n:[57,62,65,69,72]},{r:43,n:[55,59,62,66,71]}],
      tick:function(t,s,b,c,T,u){
        if(s===0)I.pad(t,c.n.slice(0,4).map(N),u*16,.012);
        if(s===0||s===11)I.bass(t,N(c.r),.2,u*(s===0?7:4));
        if(s===0||s===9)I.kick(t,.3);
        if(s===4||s===12)I.rim(t,.045);
        if(s%2===0)I.brush(t,s%4===0?.034:.02);
        if(T&&s%2===1)I.hat(t,.026);
        var q=[0,2,4,1,3,4,2,1];if(s%4===0||s===6||s===14)I.vib(t,N(c.n[q[(s>>1)%8]]+12),.032);
        if(s===2||s===10)c.n.slice(1,4).forEach(function(m,i){I.ep(t+i*.012,N(m),.016,u*3)})}}
  };
  /* sound effects */
  var FX={
    click:function(t){osc('sine',1500,t,.035,.1,sfx,{to:950})},
    tap:function(t){noise(t,.025,.22,sfx,{f:3200,q:1.2})},
    open:function(t){osc('sine',540,t,.09,.11,sfx,{to:820,glide:.06});osc('triangle',1080,t+.01,.06,.035,sfx)},
    good:function(t){bell(t,N(84),.15);bell(t+.085,N(91),.17)},
    great:function(t){[79,84,88,91].forEach(function(m,i){bell(t+i*.07,N(m),.13+i*.01)})},
    bad:function(t){osc('square',196,t,.26,.06,sfx,{to:131,glide:.22,lp:900});osc('sine',98,t,.3,.17,sfx,{to:70})},
    warn:function(t){osc('triangle',N(76),t,.16,.11,sfx,{rv:.15});osc('triangle',N(74),t+.09,.18,.09,sfx,{rv:.15})},
    stamp:function(t){noise(t,.07,.5,sfx,{type:'lowpass',f:1400});osc('sine',110,t,.22,.5,sfx,{to:48,glide:.18})},
    swipe:function(t){noise(t,.22,.2,sfx,{f:700,fTo:3200,q:.8,a:.04})},
    send:function(t){noise(t,.42,.18,sfx,{f:500,fTo:4200,q:.7,a:.08,rv:.3});osc('sine',N(81),t+.3,.25,.05,sfx,{rv:.4})},
    tick:function(t){osc('sine',1900,t,.025,.13,sfx);noise(t,.012,.1,sfx,{type:'highpass',f:5000})},
    alarm:function(t){for(var i=0;i<3;i++){osc('square',N(81),t+i*.22,.1,.045,sfx,{lp:2400});osc('square',N(76),t+i*.22+.11,.1,.045,sfx,{lp:2400})}},
    pin:function(t){osc('sine',640,t,.11,.15,sfx,{to:1180,glide:.05,rv:.12})},
    marker:function(t){noise(t,.13,.15,sfx,{f:1500,fTo:2400,q:2.2,a:.02})},
    key:function(t){noise(t,.018,.16,sfx,{type:'highpass',f:2600})},
    whoosh:function(t){noise(t,.9,.16,sfx,{f:300,fTo:2600,q:.6,a:.35,rv:.4})},
    land:function(t){[60,67,72,76].forEach(function(m,i){osc('sine',N(m),t+i*.012,1.4,.035,sfx,{a:.03,rv:.5})})},
    start:function(t){[72,76,79,84].forEach(function(m,i){bell(t+i*.06,N(m),.11)})},
    fanfare:function(t){[72,76,79,84,88].forEach(function(m,i){bell(t+i*.08,N(m),.12)});pad(t+.35,[N(60),N(67),N(72),N(76)],1.8,.045,sfx)},
    flip:function(t){noise(t,.06,.18,sfx,{f:2200,q:.8})},
    drop:function(t){osc('sine',300,t,.14,.18,sfx,{to:160})},
    tally:function(t,i){osc('sine',900+(i||0)*28,t,.03,.05,sfx)}
  };
  function play(name,arg){if(!on||!ready())return;var f=FX[name];if(f)f(ac.currentTime+.005,arg)}
  function sched(){if(!song||held)return;var S=song.S,u=60/S.bpm/4,now=ac.currentTime;if(song.next<now-.05)song.next=now+.05;
    while(song.next<now+.14){var st=song.step,s=st%16,b=Math.floor(st/16)%S.bars.length,t=song.next+(S.sw?S.sw(s)*u:0);try{S.tick(t,s,b,S.bars[b],tension,u)}catch(e){}song.step++;song.next+=u}}
  function fade(v,sec){if(!ac)return;var g=mus.gain,n=ac.currentTime;g.cancelScheduledValues(n);g.setValueAtTime(g.value,n);g.linearRampToValueAtTime(v,n+sec)}
  function music(id){init();if(!ac)return;stop(true);var S=SONGS[id]||SONGS.phish;song={S:S,step:0,next:ac.currentTime+.1};held=false;fade(S.vol,1.4);iv=setInterval(sched,25);sched()}
  function stop(now){if(iv){clearInterval(iv);iv=null}song=null;if(ac)fade(0,now?.05:.8)}
  function hold(h){if(!song||held===h)return;held=h;if(h)fade(0,.35);else{song.next=ac.currentTime+.08;fade(song.S.vol,.8)}}
  function setT(v){if(v===tension)return;tension=v;if(ac)musLP.frequency.setTargetAtTime(v?9500:4800,ac.currentTime,.25)}
  function setOn(v){on=v;LS.set('hm-snd',v?'1':'0');if(ac){var g=master.gain,n=ac.currentTime;g.cancelScheduledValues(n);g.setValueAtTime(g.value,n);g.linearRampToValueAtTime(v?.9:0,n+.25)}}
  /* offline render, for testing levels without speakers */
  function render(id,sec){var C=W.OfflineAudioContext||W.webkitOfflineAudioContext,ctx=new C(2,44100*sec,44100),keep=ac;boot(ctx);master.gain.value=.9;var S=SONGS[id],u=60/S.bpm/4,st=0,t0=.05;mus.gain.value=S.vol;
    for(var t=t0;t<sec-.5;t+=u){var s=st%16,b=Math.floor(st/16)%S.bars.length;S.tick(t+(S.sw?S.sw(s)*u:0),s,b,S.bars[b],st>=64?1:0,u);st++}
    var r=ctx.startRendering();ac=keep;return r}
  return {unlock:unlock,ready:ready,play:play,music:music,stop:stop,hold:hold,tension:setT,setOn:setOn,isOn:function(){return on},playing:function(){return !!song},render:render,songs:SONGS,fx:FX};
})();
W.__SND=SND;

/* ================= icons ================= */
var IC={
  y:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.4l2.9 2.9 6.1-6.6"/></svg>',
  n:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><path d="M4.5 4.5l7 7M11.5 4.5l-7 7"/></svg>',
  m:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><path d="M8 4v5"/><circle cx="8" cy="12" r=".6" fill="currentColor"/></svg>',
  i:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><path d="M8 7.5V12"/><circle cx="8" cy="4.6" r=".6" fill="currentColor"/></svg>',
  clock:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="6.2"/><path d="M8 4.6V8l2.3 1.5"/></svg>',
  lock:'<svg viewBox="0 0 12 12" fill="currentColor"><path d="M3.2 5V3.8a2.8 2.8 0 015.6 0V5h.4c.5 0 .8.3.8.8v4.4c0 .5-.3.8-.8.8H2.8c-.5 0-.8-.3-.8-.8V5.8c0-.5.3-.8.8-.8h.4zm1.3 0h3V3.8a1.5 1.5 0 00-3 0V5z"/></svg>'
};
var TONE={good:'y',bad:'n',warn:'m',info:'i'};

/* ================= the hero shell: words on the left, the demo window on the right ================= */
/* what each demo trains and what it replaces, shown beside the window (kept here, not in the trainings) */
var SPEC={
  phish:{trains:'Spotting lookalike senders, links and attachments',replaces:'Information Security Awareness, slide 3 of 47'},
  redact:{trains:'Sharing only the personal data a supplier needs',replaces:'GDPR Overview, page 12 of 64'},
  gift:{trains:'Telling a gift from a bribe under time pressure',replaces:'Code of Conduct, slide 7 of 22'},
  hazard:{trains:'Spotting hazards the way an inspector walks a site',replaces:'Health &amp; Safety Induction, slide 18 of 52'},
  code:{trains:'Catching security bugs before they merge',replaces:'Secure Coding Standard, slide 9 of 31'},
  ai:{trains:'Teaching an AI sales coach what good feedback looks like',replaces:'AI Tutor Style Guide, slide 4 of 18'}};
var hero=$('#hm-hero'),body=$('#hm-body'),stage=$('#stage'),win=$('#win'),vp=$('#vp'),urlH=$('#w-h'),load=$('#hw-load'),sndB=$('#hw-snd'),again=$('#hm-again'),wurl=$('#win .hw-url'),wst=$('#hw-st');
/* the window: the right-hand column, landscape on desktop (width/height >= 1.12, so no training flips to its phone
   layout), at most 760px tall or the viewport less the header; a portrait window on phones */
function size(){var bw=body.clientWidth,h;
  if(innerWidth<768)h=Math.min(640,Math.max(460,innerHeight*.74));else h=Math.min(780,innerHeight-130,bw/1.22);/* v7: v5's height, a touch wider */
  stage.style.width=bw+'px';stage.style.height=Math.round(Math.max(320,h))+'px'}
size();

/* ================= state ================= */
var T=null,inst=null,api=null,ap,apBody,lms,rv,rvh,cms,mks,hls,cv,ctx,drR,drT,drS,cts,mdIn,mdEnd;
var live=false,started=false,ended=false,score=0,shown=0,last=-1,lastP=0,urlApp=false,AUTO=null,visible=true,paused=false,keyFn=null,seen=[];
var subs=[],tids=[],TM=null,appUrl='';

function find(id){for(var i=0;i<LIST.length;i++)if(LIST[i].id===id)return LIST[i];return null}
function pick(){var q=(location.search.match(/[?&]t=([a-z]+)/)||[])[1];if(q&&find(q))return q;
  var lastId=LS.get('hm-t'),pool=LIST.filter(function(t){return t.id!==lastId});if(!pool.length)pool=LIST;return pool[Math.floor(Math.random()*pool.length)].id}
function nextId(){var pool=LIST.filter(function(t){return seen.indexOf(t.id)<0});if(!pool.length){seen=[T.id];pool=LIST.filter(function(t){return t.id!==T.id})}return pool[Math.floor(Math.random()*pool.length)].id}
function setUrl(u){var i=u.indexOf('/');urlH.innerHTML=i<0?u:u.slice(0,i)+'<i>'+u.slice(i)+'</i>'}
function rgb(h){h=h.replace('#','');return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]}
/* ================= the colour world: the page takes its colours from the demo, as a case study takes its image's ================= */
function hsl(c){var r=c[0]/255,g=c[1]/255,b=c[2]/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,h=0,s=0,d=mx-mn;if(d){s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?((g-b)/d+(g<b?6:0)):mx===g?(b-r)/d+2:(r-g)/d+4;h*=60}return [h,s,l]}
function fromHsl(h,s,l){h=((h%360)+360)%360/360;function f(p,q,t){if(t<0)t+=1;if(t>1)t-=1;return t<1/6?p+(q-p)*6*t:t<1/2?q:t<2/3?p+(q-p)*(2/3-t)*6:p}if(!s)return [l*255,l*255,l*255];var q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;return [f(p,q,h+1/3)*255,f(p,q,h)*255,f(p,q,h-1/3)*255]}
function hex(c){return '#'+c.map(function(v){return ('0'+Math.round(cl(v,0,255)).toString(16)).slice(-2)}).join('')}
/* the brand hue and two neighbours, one each side */
function paletteOf(brand){var x=hsl(rgb(brand)),h=x[0],s=Math.max(.45,Math.min(.82,x[1]));return [fromHsl(h,s,.55),fromHsl(h+34,s*.92,.64),fromHsl(h-40,s*.86,.7)].map(hex)}
function setPalette(){var p=paletteOf(T.app.color);p.forEach(function(c,i){root.style.setProperty('--t'+(i+1),c)});root.style.setProperty('--tb',T.app.color);root.setAttribute('data-palette',p.join(' '));
  try{D.dispatchEvent(new CustomEvent('hm:palette',{detail:{palette:p,brand:T.app.color,id:T.id}}))}catch(e){}}
function shortTime(m){var seg=String(m).split('·').map(function(x){return x.trim()}).filter(function(x){return /\d.*(min|sec|hour)/i.test(x)}).pop()||'';return seg.replace(/minutes?/i,'min').replace(/seconds?/i,'sec')}
function fillSpec(){var sp=SPEC[T.id]||{};function put(id,h){var el=D.getElementById(id);if(el)el.innerHTML=h}
  put('hm-demo',T.app.name+' <i aria-hidden="true">&middot;</i> '+T.intro.title);put('hm-trains',sp.trains||T.topic);put('hm-replaces',sp.replaces||'');put('hm-time',T.intro.meta);
  put('hm-label',T.intro.title+' <i aria-hidden="true">&middot;</i> '+shortTime(T.intro.meta));
  [].forEach.call(D.querySelectorAll('[data-hm-swap]'),function(e){e.classList.remove('in');void e.offsetWidth;e.classList.add('in')})}

/* ================= mounting a training ================= */
function teardown(){stopTimer();SND.stop();SND.tension(0);if(inst&&inst.destroy)try{inst.destroy()}catch(e){}
  subs.forEach(function(s){s[0].removeEventListener(s[1],s[2],s[3])});subs=[];tids.forEach(function(t){clearTimeout(t);clearInterval(t)});tids=[];keyFn=null;inst=null}
function mount(id,opts){opts=opts||{};teardown();T=find(id);LS.set('hm-t',id);if(seen.indexOf(id)<0)seen.push(id);
  started=false;ended=false;score=0;shown=0;
  vp.innerHTML='<div class="lms" data-t="'+T.id+'" style="--lms:'+(T.lms.color||'#1F3A63')+';--lms-bg:'+(T.lms.bg||'#E9EBEE')+'" aria-hidden="true">'+T.slide+'</div>'+
    '<div class="rv" aria-hidden="true" hidden></div>'+
    '<canvas class="cv" aria-hidden="true"></canvas>'+
    '<div class="ap" data-t="'+T.id+'" role="application" aria-label="'+T.app.name+' training">'+
      '<div class="dr"><span class="dr-tag"><i></i>Training<span>&nbsp;mode</span></span><span class="dr-t">'+T.intro.title+'</span><span class="dr-r" id="dr-r"></span><span class="dr-sp"></span>'+
      '<span class="dr-tm" id="dr-t">'+IC.clock+'<b>--:--</b></span><span class="dr-sc">Score <b id="dr-s">0</b></span></div>'+
      '<div class="ap-body">'+T.html+'</div><div class="cts" aria-live="polite"></div>'+
      '<div class="md md-in" role="dialog" aria-modal="true" aria-label="'+T.intro.title+'"></div><div class="md md-end" role="dialog" aria-modal="true" aria-label="Drill report"></div></div>';
  lms=$('.lms',vp);rv=$('.rv',vp);rvh=$('.rv-h',vp);cms=$$('.cm',vp);hls=$$('.hl',lms);cv=$('.cv',vp);ctx=cv.getContext('2d');ap=$('.ap',vp);apBody=$('.ap-body',ap);
  drR=$('#dr-r',ap);drT=$('#dr-t',ap);drS=$('#dr-s',ap);cts=$('.cts',ap);mdIn=$('.md-in',ap);mdEnd=$('.md-end',ap);
  ap.inert=!live;ap.style.setProperty('--brand',T.app.color);win.style.setProperty('--brand',T.app.color);
  mks=[];root.classList.remove('playing');setPalette();fillSpec();
  urlApp=false;appUrl=T.app.url;setUrl(T.lms.url);built=false;last=-1;if(wst)wst.textContent='Loading '+appUrl.split('/')[0]+'\u2026';
  mdIn.innerHTML=introHTML();$('.md-go',mdIn).addEventListener('click',begin);
  api=makeApi();try{inst=T.init(api)||{}}catch(e){inst={};if(W.console)console.error(e)}
  placeMarks();
  if(opts.instant){AUTO=null;render(Math.max(PLAY,last));}
}
function introHTML(){var I=T.intro;
  return '<div class="md-c" tabindex="-1"><div class="md-app"><span class="md-ic">'+T.app.icon+'</span><b>'+T.app.name+'</b><span class="md-pill">Training mode</span></div>'+
    '<h3>'+I.title+'</h3><p class="md-lede">'+I.lede+'</p><ul class="md-rules">'+I.rules.map(function(r,i){return '<li><i>'+(i+1)+'</i><span>'+r+'</span></li>'}).join('')+'</ul>'+
    '<div class="md-row"><span class="md-meta">'+I.meta+'</span><button class="md-go" type="button">'+(I.cta||'Start')+' <kbd>&#8629;</kbd></button></div></div>'}
function showIntro(){if(started)return;mdIn.classList.add('on');setTimeout(function(){if(live&&!started&&inView())$('.md-c',mdIn).focus({preventScroll:true})},450)}
function begin(){if(started)return;started=true;root.classList.add('playing');SND.unlock();mdIn.classList.remove('on');
  setTimeout(function(){SND.play('start');if(SND.isOn())SND.music(T.music||T.id);if(paused)SND.hold(true)},60);
  if(inst&&inst.start)try{inst.start()}catch(e){if(W.console)console.error(e)}}

/* ================= the api each training gets ================= */
function makeApi(){var A={rm:RM,root:ap,body:apBody,
  $:function(s){return $(s,ap)},$$:function(s){return $$(s,ap)},
  sfx:function(n,a){SND.play(n,a)},
  round:function(s){drR.textContent=s},
  url:function(u){appUrl=u;if(urlApp)setUrl(u)},
  timer:function(sec,fn){return timer(sec,fn)},
  score:function(d){score+=d;bump();return score},
  total:function(){return score},
  toast:toast,end:end,
  listen:function(t,ty,fn,o){t.addEventListener(ty,fn,o);subs.push([t,ty,fn,o])},
  after:function(ms,fn){var id=setTimeout(fn,ms);tids.push(id);return id},
  every:function(ms,fn){var id=setInterval(fn,ms);tids.push(id);return id},
  key:function(fn){keyFn=fn},
  narrow:function(){return vp.clientWidth<vp.clientHeight||vp.clientWidth<640},
  paused:function(){return paused},
  live:function(){return live&&started&&!ended}};return A}
function bump(){var from=shown,to=score,t0=performance.now();drS.classList.remove('up');void drS.offsetWidth;drS.classList.add('up');
  (function f(now){var k=cl((now-t0)/450,0,1);shown=Math.round(from+(to-from)*out(k));drS.textContent=shown;if(k<1)requestAnimationFrame(f)})(t0)}
function fmt(ms){var s=Math.max(0,Math.ceil(ms/1000));return ('0'+Math.floor(s/60)).slice(-2)+':'+('0'+s%60).slice(-2)}
function timer(sec,fn){stopTimer();TM={left:sec*1000,last:performance.now(),fn:fn,ls:-1};drT.classList.remove('low');$('b',drT).textContent=fmt(TM.left);
  return {stop:stopTimer,add:function(s){if(TM){TM.left=Math.max(0,TM.left+s*1000);$('b',drT).textContent=fmt(TM.left)}},left:function(){return TM?TM.left/1000:0}}}
function stopTimer(){TM=null;SND.tension(0);if(drT)drT.classList.remove('low')}
setInterval(function(){if(!TM)return;var n=performance.now(),dt=n-TM.last;TM.last=n;if(paused||!started||ended)return;TM.left-=dt;
  $('b',drT).textContent=fmt(TM.left);var s=Math.ceil(TM.left/1000);
  if(s!==TM.ls){TM.ls=s;drT.classList.toggle('low',s<=10);SND.tension(s<=10?1:0);if(s<=5&&s>0)SND.play('tick')}
  if(TM.left<=0){var f=TM.fn;TM=null;SND.tension(0);SND.play('alarm');if(f)try{f()}catch(e){}}},100);
function toast(o){var el=D.createElement('div'),tone=o.tone||'info';el.className='ct ct-'+tone;
  el.innerHTML='<span class="ct-i">'+IC[TONE[tone]]+'</span><div><b>'+o.title+'</b>'+(o.text?'<p>'+o.text+'</p>':'')+'</div>'+(o.pts!=null?'<span class="ct-p">'+(o.pts>0?'+':'')+o.pts+'</span>':'<span></span>');
  cts.appendChild(el);var all=$$('.ct:not(.out)',cts);if(all.length>2)kill(all[0]);
  requestAnimationFrame(function(){requestAnimationFrame(function(){el.classList.add('on')})});
  if(!o.silent)SND.play(tone==='good'?(o.big?'great':'good'):tone==='bad'?'bad':tone==='warn'?'warn':'open');
  var id=setTimeout(function(){kill(el)},o.ms||5200);tids.push(id);return el}
function kill(el){if(!el||el.classList.contains('out'))return;el.classList.add('out');setTimeout(function(){el.remove()},300)}
function end(o){if(ended)return;ended=true;root.classList.remove('playing');stopTimer();SND.stop();
  var rows=(o.rows||[]).map(function(r){return '<li class="'+r.s+'"><span class="ic">'+IC[r.s]+'</span><div><b>'+r.label+'</b>'+(r.detail?'<p>'+r.detail+'</p>':'')+'</div><span class="pt">'+(r.pts>0?'+':'')+(r.pts==null?'':r.pts)+'</span></li>'}).join('');
  mdEnd.innerHTML='<div class="md-c" tabindex="-1"><div class="md-app"><span class="md-ic">'+T.app.icon+'</span><b>'+T.app.name+'</b><span class="md-pill">Drill report</span></div>'+
    '<div class="md-score"><b id="md-n">0</b><span>/ '+o.max+'</span></div><h3>'+o.title+'</h3><p class="md-lede">'+(o.line||'')+'</p><ol class="md-list">'+rows+'</ol>'+
    '<div class="md-act"><button class="md-go md-next" type="button">Try another training</button><button class="md-2 md-again" type="button">Replay</button></div>'+
    '<p class="md-by">Built by Hadrien Lee. Want one like this for your team? <a href="'+(W.HM_SITE||'')+'/contact">Book a consultation</a></p></div>';
  $('.md-next',mdEnd).addEventListener('click',function(){another()});
  $('.md-again',mdEnd).addEventListener('click',function(){SND.play('click');mount(T.id,{instant:true});showIntro()});
  $$('.ct',cts).forEach(kill);
  setTimeout(function(){mdEnd.classList.add('on');SND.play('fanfare');var n=$('#md-n',mdEnd),to=Math.max(0,score),t0=performance.now(),lk=-1;
    (function f(now){var k=cl((now-t0)/1100,0,1),v=Math.round(to*out(k));n.textContent=v;var q=Math.floor(k*14);if(q!==lk&&k<1){lk=q;SND.play('tally',q)}if(k<1)requestAnimationFrame(f)})(t0);
    setTimeout(function(){var b=$('.md-c',mdEnd);if(b&&inView())b.focus({preventScroll:true})},500)},o.delay==null?900:o.delay)}
function another(){SND.unlock();SND.play('flip');mount(nextId());if(RM){rmShow();return}armed=true;play(HOLD*.6)}

/* ================= the makeover ================= */
/* The makeover timeline, p = 0..1, driven by the clock below (no scrolling):
   P0       the slide everyone has sat through, holding for a beat
   R0       the slide breaks apart, left to right. A loading front sweeps the app's page in; each dot lifts off the
            text or block it came from the moment the front reaches it, and flies (in 3D) to its place in the app's
            skeleton, which firms up as its dots arrive. The browser chrome loads: new URL, spinner, load bar, status.
   A0-A1    the real app fades up over its finished skeleton        LIVE  playable
   PLAY     where the clock comes to rest */
var R0=.29,TD=.22,A0=.47,A1=.555,LIVE=.565,PLAY=.62,RS=.3,RJ=.02,FD=.6,SOFT=.09;
var P=[],SK=[],ORD=[],S={w:0,h:0},dpr=Math.min(2,W.devicePixelRatio||1),built=false;
function isNarrow(){return vp.clientWidth<vp.clientHeight}
function rel(r){var s=vp.getBoundingClientRect();return {x:r.left-s.left,y:r.top-s.top,w:r.width,h:r.height}}
function lineRects(el,map){map=map||rel;var o=[],w=D.createTreeWalker(el,NodeFilter.SHOW_TEXT,null),n;while(n=w.nextNode()){if(!n.textContent.trim())continue;var p=n.parentElement;if(p&&p.closest('.mk'))continue;var rg=D.createRange();rg.selectNodeContents(n);
  [].forEach.call(rg.getClientRects(),function(r){if(r.width>2&&r.height>2)o.push(map(r))})}return o}
function fillR(r,pt,arr,k,e){for(var y=r.y+pt/2;y<r.y+r.h;y+=pt)for(var x=r.x+pt/2;x<r.x+r.w;x+=pt)arr.push({x:x,y:y,k:k,e:e})}
function edgeR(r,pt,arr,k,e){for(var x=r.x;x<=r.x+r.w;x+=pt){arr.push({x:x,y:r.y,k:k,e:e});arr.push({x:x,y:r.y+r.h,k:k,e:e})}for(var y=r.y+pt;y<r.y+r.h;y+=pt){arr.push({x:r.x,y:y,k:k,e:e});arr.push({x:r.x+r.w,y:y,k:k,e:e})}}
function visibleEl(el){var r=el.getBoundingClientRect(),s=vp.getBoundingClientRect();return r.width>1&&r.height>1&&r.right>s.left&&r.left<s.right&&r.bottom>s.top&&r.top<s.bottom&&getComputedStyle(el).visibility!=='hidden'}
function isShown(el){var cs=getComputedStyle(el);return cs.display!=='none'&&cs.visibility!=='hidden'&&el.offsetWidth>1&&el.offsetHeight>1}
function rad(el){var v=parseFloat(getComputedStyle(el).borderTopLeftRadius);return isNaN(v)?0:v}
/* the skeleton: what a real app paints while it loads. Bars where its text will be, outlines and blocks for its
   tagged pieces, the dark training bar, and the rules and fills of its actual panels */
function bar(x,y,w,h,k,r,c){SK.push({x:x,y:y,w:Math.max(1,w),h:Math.max(1,h),k:k,r:Math.max(0,Math.min(r||0,h/2,w/2)),c:c,n:0,f:0});return SK.length-1}
function panels(){var all=apBody.querySelectorAll('*'),lim=Math.min(all.length,1200),A=S.w*S.h,cnt=0,skip=[];
  for(var i=0;i<lim&&cnt<90;i++){var el=all[i];if(el.closest('.md,.cts')||el.tagName==='CANVAS'||el.closest('svg'))continue;
    if(skip.length&&skip.some(function(o){return o.contains(el)}))continue;var cs=getComputedStyle(el);
    if(cs.transform!=='none'||cs.transformStyle==='preserve-3d'){skip.push(el);continue}/* 3D objects are the app's own business, not its layout */
    var r0=el.getBoundingClientRect();if(r0.width<S.w*.08||r0.height<12)continue;
    if(cs.visibility==='hidden'||cs.display==='none'||+cs.opacity<.3)continue;var r=rel(r0);if(r.x>S.w||r.y>S.h||r.x+r.w<0||r.y+r.h<0)continue;
    var m=(cs.backgroundColor.match(/[\d.]+/g)||[]).map(Number);
    if(m.length>=3&&(m.length<4||m[3]>.6)&&(m[0]+m[1]+m[2]<738)&&r.w*r.h>A*.015){var L=.3*m[0]+.59*m[1]+.11*m[2],g=L<120?229:Math.max(226,255-(255-L)*.5);bar(r.x,r.y,r.w,r.h,'P',rad(el),[g,g,g+2]);cnt++}
    var bt=parseFloat(cs.borderTopWidth),bb=parseFloat(cs.borderBottomWidth),bl=parseFloat(cs.borderLeftWidth),br=parseFloat(cs.borderRightWidth);
    if(bt>0&&r.w>S.w*.14){bar(r.x,r.y,r.w,1,'L');cnt++}if(bb>0&&r.w>S.w*.14){bar(r.x,r.y+r.h-1,r.w,1,'L');cnt++}
    if(bl>0&&r.h>S.h*.14){bar(r.x,r.y,1,r.h,'L');cnt++}if(br>0&&r.h>S.h*.14){bar(r.x+r.w-1,r.y,1,r.h,'L');cnt++}}}
var PRI={P:0,L:1,f:2,b:2,e:3,D:4,t:5,d:5};
function build(){var tf=stage.style.transform;if(tf)stage.style.transform='';/* measure the flat window, never the tilted one */
  var s=vp.getBoundingClientRect();S.w=s.width;S.h=s.height;cv.width=Math.round(S.w*dpr);cv.height=Math.round(S.h*dpr);
  var pt=S.w<600?5:Math.max(5,Math.round(S.w/185)),src=[],dst=[];SK=[];
  /* sources: measured in the slide's own unscaled box, then placed where the slide sits once it has stepped aside,
     so this can run at any scroll position */
  var lr=lms.getBoundingClientRect(),lk=lr.width/(lms.offsetWidth||1)||1,sl=1,ox=0,
      loc=function(r){var x=(r.left-lr.left)/lk,y=(r.top-lr.top)/lk;return {x:ox+x*sl,y:S.h/2+(y-S.h/2)*sl,w:r.width/lk*sl,h:r.height/lk*sl}};
  lineRects(lms,loc).forEach(function(r){fillR({x:r.x,y:r.y+r.h*.22,w:r.w,h:r.h*.56},pt,src,'t')});
  $$('.lms-btn,[data-ps]',lms).forEach(function(el){if(isShown(el))fillR(loc(el.getBoundingClientRect()),pt,src,'b')});
  cms.forEach(function(c){if(isShown(c))fillR({x:rv.offsetLeft+c.offsetLeft,y:rv.offsetTop+c.offsetTop,w:c.offsetWidth,h:c.offsetHeight},pt*1.8,src,'c')})/* the notes are solid black; sample them lightly */;
  /* destinations, each tied to the skeleton bar it lands in */
  panels();
  var dr=$('.dr',ap);if(dr&&visibleEl(dr)){var q0=rel(dr.getBoundingClientRect());bar(q0.x,q0.y,q0.w,q0.h,'D')}
  $$('[data-pt]',ap).forEach(function(el){if(el.closest('.md')||!visibleEl(el))return;var k=el.getAttribute('data-pt'),r=rel(el.getBoundingClientRect()),e;
    if(k==='t')lineRects(el).forEach(function(q){e=bar(q.x,q.y+q.h*.24,q.w,q.h*.52,'t',q.h*.26);fillR({x:q.x,y:q.y+q.h*.28,w:q.w,h:q.h*.44},pt,dst,'t',e)});
    else if(k==='e'){e=bar(r.x,r.y,r.w,r.h,'e',rad(el));edgeR(r,pt,dst,'e',e)}else{e=bar(r.x,r.y,r.w,r.h,k==='b'?'b':'f',rad(el));fillR(r,pt,dst,k,e)}});
  if(dr)lineRects(dr).forEach(function(q){var e=bar(q.x,q.y+q.h*.24,q.w,q.h*.52,'d',q.h*.26);fillR({x:q.x,y:q.y+q.h*.28,w:q.w,h:q.h*.44},pt,dst,'d',e)});
  ORD=SK.map(function(b,i){return i}).sort(function(a,b){return PRI[SK[a].k]-PRI[SK[b].k]||a-b});
  if(!src.length)src.push({x:S.w/2,y:S.h/2,k:'t'});if(!dst.length)dst.push({x:S.w/2,y:S.h/2,k:'t',e:-1});
  var COLS=Math.max(18,Math.round(S.w/34)),key=function(q){return Math.floor(q.x/S.w*COLS)*1e5+q.y};src.sort(function(a,b){return key(a)-key(b)});dst.sort(function(a,b){return key(a)-key(b)});
  var n=Math.min(2400,Math.max(src.length,dst.length));P=[];
  /* every dot also gets a depth it arcs through on the way, read off a smooth field so neighbours move as one
     surface: part of the cloud swings toward the viewer, part falls back into the fog. Dots that travel further
     go deeper. Depth and turn are 0 at both ends of each flight, so every dot leaves and lands exactly. */
  var ph=Math.random()*6.283;
  for(var i=0;i<n;i++){var a=src[Math.floor(i*src.length/n)],b=dst[Math.floor(i*dst.length/n)],far=Math.min(1.2,Math.sqrt((b.x-a.x)*(b.x-a.x)+(b.y-a.y)*(b.y-a.y))/S.w),
      wv=Math.sin(a.x/S.w*4.2+a.y/S.h*2.6+ph)*.6+Math.sin(b.x/S.w*3.1-b.y/S.h*3.7+ph*1.7)*.4,e=b.e==null?-1:b.e;
    if(e>=0)SK[e].n++;
    P.push({ax:a.x,ay:a.y,bx:b.x,by:b.y,k:b.k,ak:a.k,e:e,rl:Math.max(0,RS*(a.x/S.w+SOFT)/(1+2*SOFT)+Math.random()*RJ),arc:(Math.random()-.5)*S.h*.035,
      z:(wv*.8+(Math.random()*2-1)*.2)*(.5+far)*S.w*.26})}
  ZX=new Float32Array(n);ZY=new Float32Array(n);ZR=new Float32Array(n);ZK=new Float64Array(n);
  if(tf)stage.style.transform=tf;built=true}
/* ---- drawing. Perspective projection (scale = f/(f+z)), depth fog, far dots first; dots batched by depth band and
   quantised colour, so ~2,400 arcs cost a few dozen fills a frame. ---- */
var ZX,ZY,ZR,ZK,YAW=.5,TILT=0;
var SRC={t:[51,51,51],b:[132,142,156],c:[58,58,64]},DST={t:[22,22,26],e:[150,150,160],f:[170,170,178],d:[190,190,200]},FOG=[238,238,241],NEAR=[8,8,12];
/* skeleton colours, waiting -> filled */
var SKC={t:[[240,240,243],[223,223,228]],d:[[60,60,68],[88,88,98]],e:[[230,230,235],[206,206,213]],f:[[246,246,248],[235,235,239]],L:[[232,232,236]],D:[[27,27,32]]};
function front(t){return (-SOFT+(1+2*SOFT)*cl(t/RS,0,1))*S.w}
function sm(a,b,v){v=cl((v-a)/(b-a),0,1);return v*v*(3-2*v)}
function mixc(c0,c1,m){return [c0[0]+(c1[0]-c0[0])*m,c0[1]+(c1[1]-c0[1])*m,c0[2]+(c1[2]-c0[2])*m]}
function css(c){return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')'}
function rr(x,y,w,h,r){if(r<.5){ctx.rect(x,y,w,h);return}ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function skCol(b,br){var f=b.n?b.f/b.n:1,c=SKC[b.k];
  if(b.k==='b')return mixc(br,[255,255,255],.86-.14*f);if(b.k==='P')return b.c;return c.length>1?mixc(c[0],c[1],f):c[0]}
function draw(p){var t=(p-R0)/TD,a=ease((p-A0)/(A1-A0));ctx.setTransform(dpr,0,0,dpr,0,0);ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;ctx.clearRect(0,0,S.w,S.h);if(t<=0||a>=1)return;if(!built)build();
  var r=Math.max(1.35,S.w/720),br=rgb(T.app.color),n=P.length,cx=S.w/2,cy=S.h/2,F=S.w*1.1,zf=S.w*.3,E=front(t),W2=SOFT*S.w,i,j,q,k,lt,x,y,z,X,Z,s,c,ab,th,cs,sn,fg,nr,db,b;
  for(i=0;i<SK.length;i++)SK[i].f=0;
  /* pass 1: where every released dot is, and how far into its bar it has settled */
  for(i=0;i<n;i++){q=P[i];if(t<q.rl){ZK[i]=-1;continue}k=cl((t-q.rl)/FD,0,1);lt=out(k);ab=sm(.72,1,k);if(q.e>=0)SK[q.e].f+=ab;
    x=lerp(q.ax,q.bx,lt)-cx;y=lerp(q.ay,q.by,lt)+Math.sin(lt*Math.PI)*q.arc-cy;z=Math.sin(k*Math.PI)*q.z;th=YAW*Math.sin(k*Math.PI);cs=Math.cos(th);sn=Math.sin(th);
    X=x*cs+z*sn;Z=z*cs-x*sn;s=F/(F+Z);
    c=mixc(SRC[q.ak]||SRC.t,q.k==='b'?br:(DST[q.k]||DST.t),lt);
    fg=Z>0?Math.min(1,Z/zf)*.8:0;nr=Z<0?Math.min(1,-Z/zf)*.35:0;c=mixc(mixc(c,FOG,fg),NEAR,nr);
    if(ab>0&&q.e>=0)c=mixc(c,skCol(SK[q.e],br),ab*.85);
    ZX[i]=cx+X*s;ZY[i]=cy+y*s;ZR[i]=r*s*(1-.35*ab);db=cl(Math.floor(Z/zf*3+4),0,7);
    ZK[i]=((db<<15)|((cl(c[0],0,255)>>3)<<10)|((cl(c[1],0,255)>>3)<<5)|(cl(c[2],0,255)>>3))*4096+i}
  /* pass 2: the skeleton, cut off softly at the front, with the app's page painted underneath it */
  ctx.globalAlpha=1-a;
  for(j=0;j<ORD.length;j++){b=SK[ORD[j]];if(b.x>E+W2)continue;c=skCol(b,br);ctx.beginPath();rr(b.x,b.y,b.w,b.h,b.r);
    if(b.k==='e'){ctx.strokeStyle=css(c);ctx.lineWidth=1;ctx.stroke()}else{ctx.fillStyle=css(c);ctx.fill()}}
  ctx.globalAlpha=1;
  if(E+W2<S.w){var g=ctx.createLinearGradient(E-W2,0,E+W2,0);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,1)');
    ctx.globalCompositeOperation='destination-out';ctx.fillStyle=g;ctx.fillRect(Math.max(0,E-W2),0,S.w,S.h)}
  var g2=ctx.createLinearGradient(E-W2,0,E+W2,0);g2.addColorStop(0,'#fff');g2.addColorStop(1,'rgba(255,255,255,0)');
  ctx.globalCompositeOperation='destination-over';ctx.fillStyle=g2;ctx.fillRect(0,0,Math.min(S.w,E+W2),S.h);
  /* pass 3: the dots, far ones first */
  ctx.globalCompositeOperation='source-over';ZK.sort();ctx.globalAlpha=1-a;var cur=-1,ck;
  for(j=n-1;j>=0;j--){k=ZK[j];if(k<0)break;ck=Math.floor(k/4096);i=k-ck*4096;
    if(ck!==cur){if(cur>=0)ctx.fill();cur=ck;ctx.fillStyle='rgb('+(((ck>>10)&31)<<3|4)+','+(((ck>>5)&31)<<3|4)+','+((ck&31)<<3|4)+')';ctx.beginPath()}
    ctx.moveTo(ZX[i]+ZR[i],ZY[i]);ctx.arc(ZX[i],ZY[i],ZR[i],0,6.2832)}
  if(cur>=0)ctx.fill();ctx.globalAlpha=1}
/* the window leans back and turns a few degrees while it rebuilds, peaking mid-flight, dead flat again before live */
function tilt(p){var u=cl((p-R0)/(A1+.008-R0),0,1),w=u>0&&u<1?Math.sin(Math.PI*ease(u)):0;
  if(w<.002){if(TILT){TILT=0;stage.style.transform='';stage.style.willChange='';stage.parentNode.classList.remove('tilt')}return}
  if(!TILT){stage.style.willChange='transform';stage.parentNode.classList.add('tilt')}TILT=w;
  stage.style.transform='rotateX('+(4.5*w).toFixed(3)+'deg) rotateY('+(-6.5*w).toFixed(3)+'deg) scale('+(1-.045*w).toFixed(4)+')'}
function placeMarks(){if(!lms)return;var s=lms.getBoundingClientRect(),k=s.width/(lms.offsetWidth||1);
  mks.forEach(function(m,i){var h=$('.hl[data-n="'+i+'"]',lms);if(!h){m.style.display='none';return}var r=h.getBoundingClientRect(),w=m.offsetWidth||22,side=h.getAttribute('data-mk')||'l',
    x=(r.left-s.left)/k,y=(r.top-s.top)/k,rw=r.width/k,rh=r.height/k,X,Y;
    if(side==='r'){X=x+rw+6;Y=y+rh/2-w/2}else if(side==='t'){X=x-w*.35;Y=y-w*.7}else{X=x-w-6;Y=y+rh/2-w/2}
    var nar=isNarrow(),lo=nar?4:-w-14,hi=nar?lms.offsetWidth-w-4:lms.offsetWidth+14;m.style.left=cl(X,lo,hi)+'px';m.style.top=cl(Y,4,lms.offsetHeight-w-4)+'px'})}
var loading=false;
function render(p){
  phase(p);var t=(p-R0)/TD;
  lms.style.visibility=rv.style.visibility=t>=RS?'hidden':'';
  var a=ease((p-A0)/(A1-A0));ap.style.opacity=a;
  var u=t>0;if(u!==urlApp){urlApp=u;setUrl(u?appUrl:T.lms.url)}
  var lb=cl((p-R0)/(A1-R0),0,1),ld=!RM&&lb>0&&lb<1;load.style.opacity=ld?1:0;load.style.transform='scaleX('+out(lb).toFixed(3)+')';
  if(ld!==loading){loading=ld;if(wurl)wurl.classList.toggle('ld',ld);if(wst)wst.classList.toggle('on',ld)}
  if(lastP<R0&&p>=R0)SND.play('whoosh');if(lastP<A0&&p>=A0)SND.play('land');lastP=p;
  var nl=p>LIVE;if(nl!==live){live=nl;root.classList.toggle('live',live);ap.inert=!live;if(live){if(!started)showIntro()}else{mdIn.classList.remove('on')}}
  if(!RM){if(!built&&p>R0-.06)build();draw(p);tilt(p)}}
/* ================= the clock: the makeover plays once, on its own, when the window comes into view =================
   The slide holds for a beat (HOLD), then the same p pipeline runs from R0 to PLAY in DUR: dissolve, flight,
   skeleton, app, then the briefing. "Try another" replays it with a shorter hold. */
var HOLD=2600,DUR=2300,P0=.12,armed=false;
function play(hold){hold=hold==null?HOLD:hold;AUTO={t0:performance.now(),hold:hold};phase(P0);cursor(hold)}
/* the before/after tag on the window, and a bored cursor clicking NEXT while the slide holds */
var wtag=$('#hw-tag'),wcur=$('#hw-cur'),PH='',tagT=0,curT=[];
var TAG={before:['Before','The course everyone clicks through'],build:['Rebuilding','Same lesson, new format'],after:['After','Now you play it']};
function phase(p){var ph=p<R0-.001?'before':(p<LIVE?'build':'after');if(ph===PH)return;PH=ph;stage.setAttribute('data-ph',ph);if(!wtag)return;
  clearTimeout(tagT);wtag.classList.remove('gone');$('b',wtag).textContent=TAG[ph][0];$('span',wtag).textContent=TAG[ph][1];wtag.setAttribute('data-ph',ph);
  if(ph==='after')tagT=setTimeout(function(){wtag.classList.add('gone')},3200);if(ph!=='before'&&wcur){wcur.classList.remove('go');curT.forEach(clearTimeout);curT=[]}}
function cursor(hold){if(!wcur||RM||hold<1200||!lms)return;var nx=$$('.lms-btn',lms),btn=nx[nx.length-1];if(!btn)return;
  var w=win.getBoundingClientRect(),b=btn.getBoundingClientRect(),x1=b.left-w.left+b.width*.55,y1=b.top-w.top+b.height*.55;
  wcur.style.setProperty('--x0',(w.width*.52)+'px');wcur.style.setProperty('--y0',(w.height*.58)+'px');wcur.style.setProperty('--x1',x1+'px');wcur.style.setProperty('--y1',y1+'px');wcur.style.setProperty('--d',hold+'ms');
  wcur.classList.remove('go');void wcur.offsetWidth;wcur.classList.add('go');curT.forEach(clearTimeout);
  curT=[.6,.8].map(function(f){return setTimeout(function(){btn.classList.add('press');SND.play('click');setTimeout(function(){btn.classList.remove('press')},160)},hold*f)})}
function clockP(){if(!AUTO)return last<0?P0:last;var el=performance.now()-AUTO.t0;if(el<AUTO.hold)return P0;var k=cl((el-AUTO.hold)/DUR,0,1);if(k>=1){AUTO=null;return PLAY}return lerp(R0-.005,PLAY,k)}
function frame(){var p=clockP();if(Math.abs(p-last)<.0004)return;last=p;render(p)}
function loop(){frame();requestAnimationFrame(loop)}

/* ================= visibility, keys, sound toggle, resize ================= */
function inView(){var r=stage.getBoundingClientRect();return r.bottom>innerHeight*.35&&r.top<innerHeight*.65}
function setPaused(){var p=!visible||D.hidden;if(p===paused)return;paused=p;SND.hold(p)}
if('IntersectionObserver' in W)new IntersectionObserver(function(es){es.forEach(function(e){visible=e.intersectionRatio>=.35;setPaused();if(e.intersectionRatio>=.5&&!armed&&!RM){armed=true;play()}})},{threshold:[0,.35,.5,.7]}).observe(stage);
else{armed=true;play()}
D.addEventListener('visibilitychange',setPaused);
D.addEventListener('keydown',function(e){if(!live||!inView()||e.metaKey||e.ctrlKey||e.altKey)return;
  if(mdIn.classList.contains('on')){if(e.key==='Enter'&&(D.activeElement===D.body||D.activeElement.classList.contains('md-c'))){e.preventDefault();begin()}return}
  if(mdEnd.classList.contains('on')||!started||ended)return;var tg=e.target;if(tg&&(tg.tagName==='INPUT'||tg.tagName==='TEXTAREA'||tg.isContentEditable)&&!(keyFn&&keyFn.inputs))return;
  if(keyFn)keyFn(e)});
function syncSnd(){sndB.setAttribute('aria-pressed',SND.isOn()?'true':'false');sndB.setAttribute('aria-label',SND.isOn()?'Sound on. Turn off':'Sound off. Turn on');$('span',sndB).textContent=SND.isOn()?'Sound':'Muted'}
sndB.addEventListener('click',function(){SND.unlock();SND.setOn(!SND.isOn());syncSnd();if(SND.isOn()){SND.play('click');if(started&&!ended&&!SND.playing())SND.music(T.music||T.id)}});syncSnd();
/* the first touch anywhere on the game wakes the audio, as browsers require */
['pointerdown','keydown'].forEach(function(ev){D.addEventListener(ev,function(e){if(e.target&&e.target.closest&&e.target.closest('#stage'))SND.unlock()},{passive:true})});
if(again)again.addEventListener('click',function(e){if(e&&e.preventDefault)e.preventDefault();another()});
var rt,lw=innerWidth;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){size();built=false;var p=last;last=-1;render(p<0?P0:p);if(inst&&inst.resize)try{inst.resize()}catch(e){}},120)});

/* ================= go ================= */
mount(pick());
/* reduced motion: no flight; the app crossfades in over the slide */
function rmShow(){render(PLAY);try{lms.style.visibility='';ap.animate([{opacity:0},{opacity:1}],{duration:650,easing:'ease-out'}).onfinish=function(){lms.style.visibility='hidden'}}catch(e){}}
/* test hooks for the harness: show any moment of the makeover, or play it now */
W.__HM={seek:function(p){AUTO=null;armed=true;last=p;render(p);return p},play:function(){armed=true;play(0)},another:function(){another()},
  show:function(id){if(!find(id)||(T&&T.id===id&&live))return false;SND.unlock();mount(id);if(RM)rmShow();else{armed=true;play(HOLD*.6)}return true},has:function(id){return !!find(id)},
  state:function(){return {id:T&&T.id,p:last,live:live,started:started,auto:!!AUTO,palette:root.getAttribute('data-palette')}}};
if(RM){armed=true;rmShow()}else setTimeout(loop,40);
if(D.fonts)D.fonts.ready.then(function(){size();built=false;if(last>=0&&!RM){var p=last;last=-1;render(p)}});
})();

/* page */
/* Home v7, the page around the demo. GSAP 3.13 + ScrollTrigger + Lenis 1.3 drive the motion; four React Bits
   effects are ported to plain JS: Dot Grid (the hero and the practice map), Count Up (the stats, in the dot face),
   Decrypted Text (practice names, the doors) and Magnet (arrows, Play). Shared helpers go out on window.HL for
   play.js. The engine publishes the demo's palette on .hm and fires "hm:palette" when the demo changes.
   Motion stands down for prefers-reduced-motion and for the site's own Reduce motion switch (body.a11y-motion). */
(function(){
'use strict';
var D=document,W=window,OPT=D.body.getAttribute('data-opt')||'a',root=D.querySelector('.hm');
var MQ=W.matchMedia('(prefers-reduced-motion: reduce)');
function still(){return MQ.matches||D.body.classList.contains('a11y-motion')}
var FINE=W.matchMedia('(hover:hover) and (pointer:fine)').matches;
var G=W.gsap,ST=W.ScrollTrigger;if(G&&ST)G.registerPlugin(ST);
function $(s,r){return (r||D).querySelector(s)}function $$(s,r){return [].slice.call((r||D).querySelectorAll(s))}
function cl(v,a,b){return Math.max(a,Math.min(b,v))}
function hx(h){h=String(h).replace('#','');return [parseInt(h.substr(0,2),16),parseInt(h.substr(2,2),16),parseInt(h.substr(4,2),16)]}
function hsl(c){var r=c[0]/255,g=c[1]/255,b=c[2]/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,h=0,s=0,d=mx-mn;if(d){s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?((g-b)/d+(g<b?6:0)):mx===g?(b-r)/d+2:(r-g)/d+4;h*=60}return [h,s,l]}
function rgbOf(h,s,l){h=((h%360)+360)%360/360;function f(p,q,t){if(t<0)t+=1;if(t>1)t-=1;return t<1/6?p+(q-p)*6*t:t<1/2?q:t<2/3?p+(q-p)*(2/3-t)*6:p}if(!s)return [l*255,l*255,l*255];var q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;return [f(p,q,h+1/3)*255,f(p,q,h)*255,f(p,q,h-1/3)*255]}
function soft(c){var x=hsl(c);return rgbOf(x[0],Math.min(.72,x[1]*1.3),.64+x[2]*.2)}
function glow(c){var x=hsl(c);return rgbOf(x[0],Math.min(1,Math.max(.55,x[1]*1.15)),Math.max(.6,x[2]))}
function pal(){return String(root&&root.getAttribute('data-palette')||'#7F8FE0 #B49BE8 #8FC8E0').split(/\s+/).filter(Boolean).map(hx)}
var HL=W.HL={still:still,fine:FINE,cl:cl,hx:hx};

/* ================= smooth scroll: Lenis on GSAP's clock, ScrollTrigger listening ================= */
var lenis=null;
function lenisOn(){if(lenis||W.HM_LIVE||still()||!W.Lenis||!G)return;/* on the live site the header's embed owns window.__lenis */
  try{lenis=new W.Lenis({autoRaf:false,duration:1.15,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t))},smoothWheel:true,allowNestedScroll:true,
    prevent:function(n){return !!(n&&n.closest&&n.closest('#vp,[data-lenis-prevent],.a11y-panel'))}});
    if(ST)lenis.on('scroll',ST.update);W.__lenis=lenis}catch(e){lenis=null}}
function lenisOff(){if(!lenis)return;try{lenis.destroy()}catch(e){}lenis=null;W.__lenis=null}
if(G){G.ticker.add(function(t){if(lenis)lenis.raf(t*1000)});G.ticker.lagSmoothing(0)}
lenisOn();
/* hidden tabs freeze the ticker; when the page comes back, re-measure (the live site learned this the hard way) */
function wake(){if(ST){ST.refresh();setTimeout(function(){ST.refresh()},400)}}
D.addEventListener('visibilitychange',function(){if(!D.hidden)wake()});addEventListener('pageshow',wake);
var motionSubs=[];HL.onMotion=function(f){motionSubs.push(f)};
D.addEventListener('hl-a11y',function(){if(still())lenisOff();else lenisOn();motionSubs.forEach(function(f){try{f(still())}catch(e){}})});

/* ---------- back to top ---------- */
var top=$('.hf-top');if(top)top.addEventListener('click',function(e){e.preventDefault();var lg=$('.hd-logo');
  if(W.__lenis)W.__lenis.scrollTo(0,{duration:2.2});else W.scrollTo({top:0,behavior:still()?'auto':'smooth'});
  if(lg)setTimeout(function(){lg.focus({preventScroll:true})},still()?0:900);if(history.replaceState)history.replaceState(null,'',location.pathname+location.search)});
HL.scrollTo=function(el,off){if(W.__lenis)W.__lenis.scrollTo(el,{offset:off||0,duration:1.2});else{var y=el.getBoundingClientRect().top+scrollY+(off||0);W.scrollTo({top:y,behavior:still()?'auto':'smooth'})}};

/* ================= Dot Grid (React Bits): a lattice that lights up near the pointer, gives way when the
   pointer moves fast, rings out on a click, and springs back. Breathes slowly while idle. ================= */
HL.dotGrid=function(cv,o){
  if(!cv)return null;var ctx=cv.getContext('2d'),host=o.host||cv.parentNode,dpr=1,Wc=0,Hc=0,dots=[],act=o.act||[58,231,58],base=o.base||[242,240,243],
    P={x:-1e4,y:-1e4,sx:-1e4,sy:-1e4,lx:0,ly:0,lt:0,on:false},raf=0,last=0,vis=true,busy=0,t0=performance.now();
  var K=.075,DAMP=.84;
  function gap(){return innerWidth<768?(o.gapS||15):(o.gap||19)}
  function lay(){var r=cv.getBoundingClientRect();if(!r.width)return;dpr=Math.min(2,W.devicePixelRatio||1);Wc=r.width;Hc=r.height;cv.width=Math.round(Wc*dpr);cv.height=Math.round(Hc*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    var g=gap(),cols=Math.floor(Wc/g)+1,rows=Math.floor(Hc/g)+1,ox=(Wc-(cols-1)*g)/2,oy=(Hc-(rows-1)*g)/2;dots=[];
    for(var y=0;y<rows;y++)for(var x=0;x<cols;x++)dots.push({x:ox+x*g,y:oy+y*g,dx:0,dy:0,vx:0,vy:0});draw(performance.now())}
  var BANDS=5,paths=[];
  function draw(now){ctx.clearRect(0,0,Wc,Hc);var R=innerWidth<768?(o.rS||1.05):(o.r||1.3),prox=innerWidth<768?(o.proxS||110):(o.prox||170),t=(now-t0)/1000,breathe=!still()&&o.breathe!==false,
      px=P.sx,py=P.sy,hot=[],i,d,a,b;
    for(b=0;b<BANDS;b++)paths[b]=new Path2D();
    for(i=0;i<dots.length;i++){d=dots[i];var x=d.x+d.dx,y=d.y+d.dy,ddx=x-px,ddy=y-py,dist2=ddx*ddx+ddy*ddy;
      if(P.on&&dist2<prox*prox){hot.push([x,y,1-Math.sqrt(dist2)/prox]);continue}
      b=breathe?Math.round((Math.sin(t*.9+d.x*.011+d.y*.0072)*.5+.5)*(BANDS-1)):1;paths[b].moveTo(x+R,y);paths[b].arc(x,y,R,0,6.2832)}
    var ba=o.alpha||.13;
    for(b=0;b<BANDS;b++){ctx.fillStyle='rgba('+base[0]+','+base[1]+','+base[2]+','+(ba*(.55+b*.22)).toFixed(3)+')';ctx.fill(paths[b])}
    for(i=0;i<hot.length;i++){var h=hot[i],k=h[2]*h[2],c0=Math.round(base[0]+(act[0]-base[0])*k),c1=Math.round(base[1]+(act[1]-base[1])*k),c2=Math.round(base[2]+(act[2]-base[2])*k);
      ctx.fillStyle='rgba('+c0+','+c1+','+c2+','+(ba+(.95-ba)*k).toFixed(3)+')';ctx.beginPath();ctx.arc(h[0],h[1],R*(1+k*.7),0,6.2832);ctx.fill()}}
  function physics(){var moving=0;for(var i=0;i<dots.length;i++){var d=dots[i];if(d.dx||d.dy||d.vx||d.vy){d.vx=(d.vx-d.dx*K)*DAMP;d.vy=(d.vy-d.dy*K)*DAMP;d.dx+=d.vx;d.dy+=d.vy;
      if(Math.abs(d.dx)<.02&&Math.abs(d.dy)<.02&&Math.abs(d.vx)<.02&&Math.abs(d.vy)<.02){d.dx=d.dy=d.vx=d.vy=0}else moving=1}}return moving}
  function push(cx,cy,R,str,dirx,diry){for(var i=0;i<dots.length;i++){var d=dots[i],x=d.x+d.dx-cx,y=d.y+d.dy-cy,dist=Math.sqrt(x*x+y*y);if(dist>R||dist<.01)continue;
      var f=(1-dist/R)*str,nx=x/dist,ny=y/dist;d.vx+=(nx*.65+(dirx||0)*.35)*f;d.vy+=(ny*.65+(diry||0)*.35)*f}busy=performance.now()+1600;kick()}
  function loop(now){raf=0;if(!vis||D.hidden||still())return;var active=P.on||now<busy;
    if(active||now-last>66){last=now;P.sx+=(P.x-P.sx)*.22;P.sy+=(P.y-P.sy)*.22;if(physics())busy=Math.max(busy,now+100);draw(now)}
    raf=requestAnimationFrame(loop)}
  function kick(){if(!raf&&vis&&!still())raf=requestAnimationFrame(loop)}
  function rel(e){var r=cv.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top,r]}
  if(FINE)host.addEventListener('pointermove',function(e){if(still())return;var p=rel(e),now=performance.now(),dt=Math.max(8,now-P.lt);
      var vx=(p[0]-P.lx)/dt,vy=(p[1]-P.ly)/dt,sp=Math.sqrt(vx*vx+vy*vy);P.lx=p[0];P.ly=p[1];P.lt=now;P.x=p[0];P.y=p[1];if(!P.on){P.sx=P.x;P.sy=P.y}P.on=true;
      if(sp>.9)push(p[0],p[1],innerWidth<768?90:130,Math.min(sp,4)*1.6,vx/sp,vy/sp);kick()},{passive:true});
  host.addEventListener('pointerleave',function(){P.on=false;busy=performance.now()+300;kick()});
  host.addEventListener('pointerdown',function(e){if(still()||(o.noClick&&o.noClick(e)))return;var p=rel(e);push(p[0],p[1],innerWidth<768?170:250,9)});
  if('IntersectionObserver' in W)new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis){draw(performance.now());kick()}}).observe(host);
  var rt=0;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(lay,120)});
  lay();kick();HL.onMotion&&HL.onMotion(function(s){if(s)draw(performance.now());else kick()});
  return {shock:function(x,y,str,R){push(x,y,R||260,str||10)},color:function(c){act=c;kick();draw(performance.now())},redraw:function(){lay()}}};

/* ================= the dot face on canvas: count-ups, scores, the XP bar ================= */
var GL=W.HP_GLYPHS||{};
HL.dm=function(cv,cells){var ctx=cv.getContext('2d'),cols=cells*6-1,pitch=8,dpr=1;
  function size(p){pitch=p;dpr=Math.min(2,W.devicePixelRatio||1);cv.style.width=(cols*p)+'px';cv.style.height=(7*p)+'px';cv.width=Math.round(cols*p*dpr);cv.height=Math.round(7*p*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)}
  /* str is right-aligned in the cells; lit and dim are css colours */
  function draw(str,lit,dim){str=String(str);while(str.length<cells)str=' '+str;ctx.clearRect(0,0,cols*pitch,7*pitch);var r=pitch*.35,on=new Path2D(),off=new Path2D();
    for(var i=0;i<cells;i++){var g=GL[str[i]];for(var y=0;y<7;y++)for(var x=0;x<5;x++){var cx=(i*6+x)*pitch+pitch/2,cy=y*pitch+pitch/2,p=g&&g[y][x]==='#'?on:off;p.moveTo(cx+r,cy);p.arc(cx,cy,r,0,6.2832)}}
    ctx.fillStyle=dim;ctx.fill(off);ctx.fillStyle=lit;ctx.fill(on)}
  return {size:size,draw:draw,cols:cols}};
HL.mix=function(a,b,t){return 'rgb('+Math.round(a[0]+(b[0]-a[0])*t)+','+Math.round(a[1]+(b[1]-a[1])*t)+','+Math.round(a[2]+(b[2]-a[2])*t)+')'};

/* ================= Decrypted Text (React Bits): letters scramble, then resolve left to right. Each letter keeps
   its resting width, so nothing beside it moves. ================= */
var CH='ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&*+=<>/';
HL.scramble=function(el,o){o=o||{};if(!el||el.__sc)return el&&el.__sc;var txt=el.getAttribute('data-word')||el.textContent,cells=[],busy=0,tid=0;
  el.textContent='';for(var i=0;i<txt.length;i++){var s=D.createElement('span');s.className='sc-c';s.textContent=txt[i];if(txt[i]===' ')s.style.whiteSpace='pre';el.appendChild(s);cells.push(s)}
  function measure(){cells.forEach(function(c){c.style.width='';c.textContent=txt[cells.indexOf(c)]});cells.forEach(function(c){c.style.width=c.getBoundingClientRect().width+'px'})}
  if(D.fonts&&D.fonts.ready)D.fonts.ready.then(measure);else measure();var rt=0;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(measure,150)});
  function run(){if(still()||busy)return;busy=1;var step=0,n=txt.length,per=o.per||2;clearInterval(tid);
    tid=setInterval(function(){step++;var done=Math.floor(step/per);for(var i=0;i<n;i++){if(txt[i]===' ')continue;cells[i].textContent=i<done?txt[i]:CH[(Math.random()*CH.length)|0];cells[i].classList.toggle('sc-x',i>=done)}
      if(done>=n){clearInterval(tid);busy=0}},o.speed||34)}
  el.__sc={run:run};return el.__sc};

/* ================= Magnet (React Bits): the element leans toward the pointer inside its zone ================= */
HL.magnet=function(el,zone,o){if(!el||!G||!FINE)return;o=o||{};zone=zone||el;var xTo=G.quickTo(el,'x',{duration:.55,ease:'power3'}),yTo=G.quickTo(el,'y',{duration:.55,ease:'power3'}),mx=o.max||22,k=o.k||.32;
  zone.addEventListener('pointermove',function(e){if(still())return;var r=el.getBoundingClientRect(),cx=r.left+r.width/2-(G.getProperty(el,'x')||0),cy=r.top+r.height/2-(G.getProperty(el,'y')||0);
    xTo(cl((e.clientX-cx)*k,-mx,mx));yTo(cl((e.clientY-cy)*k,-mx,mx))},{passive:true});
  zone.addEventListener('pointerleave',function(){G.to(el,{x:0,y:0,duration:.9,ease:'elastic.out(1,.45)',overwrite:true})})};

/* ================= reveal, the site's way: a plain box test on scroll, never IntersectionObserver, and a
   re-check whenever the tab comes back. Items rise 44px over 1.15s, one after the next, 260ms apart. ================= */
var queue=[];HL.whenSeen=function(el,fn,frac){if(!el)return;if(still()){fn(true);return}queue.push({el:el,fn:fn,f:frac||.88});sweep()};
function sweep(){if(!queue.length)return;var vh=innerHeight,end=scrollY+vh>=D.documentElement.scrollHeight-4;queue=queue.filter(function(q){var r=q.el.getBoundingClientRect();
  if(r.width&&r.top<(end?vh:vh*q.f)&&r.bottom>0){q.fn(false);return false}return true})}
addEventListener('scroll',sweep,{passive:true});addEventListener('resize',sweep);D.addEventListener('visibilitychange',sweep);addEventListener('pageshow',sweep);addEventListener('focus',sweep);
HL.rise=function(els,step){if(!els.length)return;if(still()||!G){els.forEach(function(e){e.style.opacity='';e.style.transform=''});return}
  G.fromTo(els,{y:44,opacity:0},{y:0,opacity:1,duration:1.15,ease:'expo.out',stagger:step==null?.26:step,delay:els.length>1?.35:0,clearProps:'transform,opacity'})};
/* hide what will rise before the first paint it would be seen in */
function prep(els){if(still()||!G)return;els.forEach(function(e){e.style.opacity='0'})}

/* ---------- lane links: "the AI coach demo above" loads that demo into the window ---------- */
$$('[data-demo]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('data-demo'),hm=W.__HM;if(!hm)return;e.preventDefault();
  var st=$('#stage');if(st)HL.scrollTo(st,-120);if(hm.show)setTimeout(function(){hm.show(id)},still()?0:500)})});

/* ================= A: the wash (unchanged from v5) ================= */
if(OPT==='a'){(function(){
  var RM=still(),host=D.createElement('div');host.className='hm-wash';host.setAttribute('aria-hidden','true');var cv=D.createElement('canvas');host.appendChild(cv);D.body.insertBefore(host,D.body.firstChild);
  var ctx=cv.getContext('2d'),Wd=96,Ht=60,paper=[251,247,249],N=4,cur=[],tgt=[],k=0,fast=0,t0=performance.now(),shift=t0,
    orb=[[.14,.18,.18,.14,19,0],[.86,.24,.16,.18,23,1.7],[.3,.84,.2,.14,27,3.1],[.8,.78,.18,.16,31,4.4]];
  cv.width=Wd;cv.height=Ht;
  function targets(){var p=pal();for(var j=0;j<N;j++)tgt[j]=soft(p[(j+k)%p.length])}
  targets();for(var j=0;j<N;j++)cur[j]=tgt[j].slice();
  function paint(now){var t=RM?0:(now-t0)/1000;ctx.fillStyle='rgb('+paper+')';ctx.fillRect(0,0,Wd,Ht);
    for(var j=0;j<N;j++){var o=orb[j],x=Wd*(o[0]+o[2]*Math.sin(t*6.2832/o[4]+o[5])),y=Ht*(o[1]+o[3]*Math.cos(t*6.2832/(o[4]*1.3)+o[5])),R=Math.max(Wd,Ht)*.54,g=ctx.createRadialGradient(x,y,0,x,y,R),c=cur[j];
      g.addColorStop(0,'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+',.9)');g.addColorStop(1,'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+',0)');ctx.fillStyle=g;ctx.fillRect(0,0,Wd,Ht)}}
  function step(now){if(!RM&&now-shift>12000){shift=now;k++;targets()}var rate=RM?1:(now<fast?.09:.025);for(var i=0;i<N;i++){var c=cur[i],g=tgt[i];for(var q=0;q<3;q++)c[q]+=(g[q]-c[q])*rate}paint(now)}
  D.addEventListener('hm:palette',function(){fast=performance.now()+1300;targets()});
  if(RM){step(performance.now());return}
  var last=0;(function loop(now){requestAnimationFrame(loop);if(D.hidden||now-last<33)return;last=now;step(now)})(t0)})()}

/* ================= B: the hero's Dot Grid, in the demo's colours ================= */
if(OPT==='b'){
  var hg=HL.dotGrid($('#hm-grid'),{host:$('#hm-hero'),gap:19,gapS:15,prox:170,alpha:.12,act:glow(pal()[0]),
    noClick:function(e){return !!(e.target.closest&&e.target.closest('#stage,button,a'))}});
  D.addEventListener('hm:palette',function(){if(hg)hg.color(glow(pal()[0]))});
}

/* ================= v9, the ground: the site-wide sky from HL Kit. Ink under the hero, glowing in the demo's colours;
   through deep colour behind the bridge; light by the practice, where the visit's random mix drifts as you scroll. ================= */
var SKY=null;
if(OPT==='b'&&W.HLKit)SKY=W.HLKit.sky({dark:'#hm-hero',light:'#practice',bridge:'#pg-bridge',sample:'[data-hl-sample]',heroPalette:function(){return pal()}});
HL.sky=SKY;
/* the header's links decrypt on hover, as on every page */
$$('.hd-nav a').forEach(function(a){a.setAttribute('data-hl-scramble','hover')});

/* ================= the chapter rail: 1 See it, 2 Play it, 3 Start a project ================= */
(function(){var rail=$('.ch-rail');if(!rail)return;var links=$$('a',rail),secs=links.map(function(a){return $(a.getAttribute('href'))}),cur=0;
  function upd(){var vh=innerHeight,c=1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<vh*.55)c=i+1});if(scrollY+vh>=D.documentElement.scrollHeight-6)c=secs.length;
    if(c!==cur){cur=c;links.forEach(function(a,i){var on=i+1===c;a.classList.toggle('on',on);a.classList.toggle('past',i+1<c);if(on)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current')})}
    var hd=$('.hd-in');if(hd&&innerWidth<768)rail.style.top=(hd.getBoundingClientRect().bottom+8)+'px';else rail.style.top=''}
  links.forEach(function(a,i){a.addEventListener('click',function(e){var t=secs[i];if(!t)return;e.preventDefault();HL.scrollTo(t,i===0?0:-90)})});
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();setTimeout(upd,600)})();

/* ================= the bridge: the demo window leaves the hero and lands as practice 01 ================= */
(function(){var ghost=$('#pg-ghost'),img=$('#pg-ghost-img'),win=$('#win'),n1=$('.pg-node[data-g="sim"]'),br=$('#pg-bridge'),words=[];if(!br)return;
  $$('.pg-bl>span',br).forEach(function(sp){var t=sp.textContent;sp.textContent='';t.split(' ').forEach(function(w,i){var e=D.createElement('span');e.className='pg-bw';e.textContent=w;sp.appendChild(e);if(i<t.split(' ').length-1)sp.appendChild(D.createTextNode(' '));words.push(e)})});
  HL.morphOn=false;if(!ghost||!win||!n1||OPT!=='b')return;
  var TH=W.HM_THUMBS||{};function pic(){var st=W.__HM&&W.__HM.state(),id=st&&st.id;if(id&&TH[id]&&img.getAttribute('data-id')!==id){img.src=TH[id];img.setAttribute('data-id',id)}}
  pic();D.addEventListener('hm:palette',function(){setTimeout(pic,50)});
  var s0=0,s1=1,PH=W.matchMedia('(max-width:767px)'),live=!still()&&!PH.matches;HL.morphOn=live;if(live)n1.classList.add('pg-landing');
  function measure(){var y=scrollY,w=win.getBoundingClientRect(),n=n1.getBoundingClientRect();s0=Math.max(40,w.bottom+y-innerHeight*.55);s1=Math.max(s0+200,n.top+y-innerHeight*.34)}
  function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
  function upd(){if(still()){ghost.style.visibility='hidden';win.style.opacity='';n1.style.opacity='';n1.classList.remove('pg-landing');words.forEach(function(w){w.style.opacity='';w.style.transform=''});return}
    var phone=PH.matches;
    var p=cl((scrollY-s0)/(s1-s0),0,1),a=win.getBoundingClientRect(),b=n1.getBoundingClientRect(),e=ease(cl((p-.04)/.9,0,1));
    /* the words arrive with the window's flight */
    words.forEach(function(w,i){var q=cl((p-.08-i*.045)/.16,0,1);w.style.opacity=(.12+.88*q).toFixed(3);w.style.transform='translateY('+((1-q)*14).toFixed(1)+'px)'});
    if(phone||p<=0||p>=1){ghost.style.visibility='hidden';win.style.opacity='';n1.style.opacity=(phone||p>=1)?'':'0';return}
    var x=a.left+(b.left-a.left)*e,y=a.top+(b.top-a.top)*e,ww=a.width+(b.width-a.width)*e,hh=a.height+(b.height-a.height)*e,fin=cl((p-.07)/.06,0,1),fout=cl((p-.9)/.1,0,1);
    ghost.style.visibility='visible';ghost.style.transform='translate('+x.toFixed(1)+'px,'+y.toFixed(1)+'px)';ghost.style.width=ww.toFixed(1)+'px';ghost.style.height=hh.toFixed(1)+'px';
    ghost.style.opacity=(fin*(1-fout)).toFixed(3);ghost.style.setProperty('--r',(12-2*e).toFixed(1)+'px');ghost.style.setProperty('--lift',(Math.sin(e*Math.PI)).toFixed(3));
    win.style.opacity=(1-fin*.92).toFixed(3);n1.style.opacity=fout.toFixed(3)}
  measure();upd();addEventListener('scroll',upd,{passive:true});addEventListener('resize',function(){measure();upd()});addEventListener('load',function(){measure();upd()});
  if(D.fonts&&D.fonts.ready)D.fonts.ready.then(function(){measure();upd()});setTimeout(function(){measure();upd()},1200);
  HL.onMotion&&HL.onMotion(function(){upd()})})();

/* ================= the doors under the practice: Decrypted Text, Magnet arrows, a page preview on the pointer ================= */
(function(){var nav=$('.pg-doors');if(!nav)return;var doors=$$('.pg-door',nav),prev=$('.pg-prev',nav),imgs=$$('img',prev),cur=-1;
  doors.forEach(function(d){var w=$('.pg-dw',d),sc=HL.scramble(w);d.addEventListener('pointerenter',function(){sc&&sc.run()});d.addEventListener('focus',function(){sc&&sc.run()});HL.magnet($('.pg-arm',d),d,{max:18,k:.3})});
  prep([nav]);HL.whenSeen(nav,function(){HL.rise([nav],0);if(!FINE)doors.forEach(function(d,i){setTimeout(function(){var s=$('.pg-dw',d).__sc;s&&s.run()},500+i*300)})});
  if(!FINE||!G||!prev)return;
  var xTo=G.quickTo(prev,'x',{duration:.5,ease:'power3'}),yTo=G.quickTo(prev,'y',{duration:.5,ease:'power3'}),rTo=G.quickTo(prev,'rotation',{duration:.6,ease:'power3'}),lx=0,shown=false;
  nav.addEventListener('pointermove',function(e){var d=e.target.closest&&e.target.closest('.pg-door');if(!d){hide();return}
    var i=+d.getAttribute('data-prev'),r=nav.getBoundingClientRect(),pw=prev.offsetWidth,ph=prev.offsetHeight,x=e.clientX-r.left,y=e.clientY-r.top,tx=x+34+pw>r.width?x-pw-34:x+34;
    if(i!==cur){cur=i;imgs.forEach(function(m){m.classList.toggle('on',+m.getAttribute('data-i')===i)})}
    if(!shown){shown=true;G.set(prev,{x:tx,y:y-ph/2});G.fromTo(prev,{clipPath:'inset(50% 50% 50% 50%)',autoAlpha:1},{clipPath:'inset(0% 0% 0% 0%)',duration:still()?0:.42,ease:'steps(7)'})}
    xTo(tx);yTo(y-ph/2);rTo(cl((e.clientX-lx)*.35,-6,6));lx=e.clientX},{passive:true});
  function hide(){if(!shown)return;shown=false;cur=-1;G.to(prev,{clipPath:'inset(50% 50% 50% 50%)',duration:still()?0:.28,ease:'steps(5)',onComplete:function(){G.set(prev,{autoAlpha:0})}})}
  nav.addEventListener('pointerleave',hide)})();

/* ---------- the footer's ask rises in like everything else ---------- */
(function(){var els=$$('.hf-hook .hf-l, .hf-act');if(!els.length)return;prep(els);HL.whenSeen($('.hf-cta'),function(){HL.rise(els)},.92)})();
})();

/* faces */
/* Halftone portraits in the site's dot face. A face is drawn in greyscale offscreen (shapes only, no imagery), then
   sampled into a grid where each dot's size follows the light. Expressions are numbers, so they tween:
   brow -1 (annoyed) .. 1 (raised), smile -1 (frown) .. 1 (smile), open 0..1 (talking), blink 0..1.
   W.HFace(canvas,{cols,hair:'bob'|'short',dot:'#E9E4FF',bg:[top,bottom]}) -> {set(expr,ms), talk(on), draw()} */
(function(){
'use strict';
var W=window,D=document;
function cl(v,a,b){return Math.max(a,Math.min(b,v))}
W.HFace=function(cv,o){o=o||{};var S=120,off=D.createElement('canvas');off.width=off.height=S;var g=off.getContext('2d',{willReadFrequently:true}),ctx=cv.getContext('2d');
  var E={brow:0,smile:0,open:0,blink:0},T={brow:0,smile:0},talking=false,raf=0,tm=0,dead=false,t0=performance.now(),nextBlink=t0+1800,still=o.still||function(){return false};
  var cols=o.cols||44,dpr=Math.min(2,W.devicePixelRatio||1),Wd=0,Ht=0;
  function lum(v){v=cl(v,0,1)*255|0;return 'rgb('+v+','+v+','+v+')'}
  function paint(){var s=S/96;g.setTransform(s,0,0,s,0,0);g.fillStyle=o.print?lum(.9):'#000';g.fillRect(0,0,96,96);if(o.print){var vg=g.createRadialGradient(48,44,20,48,48,70);vg.addColorStop(0,'rgba(255,255,255,.08)');vg.addColorStop(1,'rgba(0,0,0,.22)');g.fillStyle=vg;g.fillRect(0,0,96,96)}
    var rg=g.createRadialGradient(48,40,4,48,40,52);rg.addColorStop(0,'rgba(255,255,255,.1)');rg.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=rg;g.fillRect(0,0,96,96);
    /* shoulders and neck */
    var sg=g.createLinearGradient(0,74,0,96);sg.addColorStop(0,lum(.42));sg.addColorStop(1,lum(.2));g.fillStyle=sg;
    g.beginPath();g.moveTo(4,96);g.bezierCurveTo(8,82,22,77,36,75);g.lineTo(60,75);g.bezierCurveTo(74,77,88,82,92,96);g.closePath();g.fill();
    g.fillStyle=lum(o.top||.62);g.beginPath();g.moveTo(38,75);g.lineTo(48,86);g.lineTo(58,75);g.closePath();g.fill();
    var ng=g.createLinearGradient(40,0,56,0);ng.addColorStop(0,lum(.58));ng.addColorStop(.6,lum(.78));ng.addColorStop(1,lum(.66));g.fillStyle=ng;g.fillRect(41,58,14,19);
    g.fillStyle=lum(.5);g.beginPath();g.ellipse(48,62,8,3,0,0,Math.PI*2);g.fill();
    /* hair behind */
    if(o.hair!=='short'){g.fillStyle=lum(.14);g.beginPath();g.moveTo(25,40);g.bezierCurveTo(23,18,36,10,48,10);g.bezierCurveTo(62,10,74,18,72,42);g.bezierCurveTo(73,56,75,64,70,68);
      g.lineTo(62,66);g.lineTo(58,52);g.lineTo(38,52);g.lineTo(34,66);g.lineTo(26,68);g.bezierCurveTo(22,62,24,54,25,40);g.fill()}
    /* face, lit from the upper left */
    var fg=g.createRadialGradient(43,36,2,48,44,27);fg.addColorStop(0,lum(1));fg.addColorStop(.5,lum(.84));fg.addColorStop(1,lum(.5));g.fillStyle=fg;
    g.beginPath();g.moveTo(30,38);g.bezierCurveTo(30,22,39,16,48,16);g.bezierCurveTo(58,16,66,22,66,38);g.bezierCurveTo(66,52,58,64,48,64);g.bezierCurveTo(38,64,30,52,30,38);g.fill();
    if(o.hair==='short'){g.fillStyle=lum(.5);g.beginPath();g.ellipse(30.5,42,2.4,4.2,0,0,Math.PI*2);g.ellipse(65.5,42,2.4,4.2,0,0,Math.PI*2);g.fill()}
    /* cheeks lift with a smile */
    if(E.smile>0){g.fillStyle='rgba(255,255,255,'+(.22*E.smile)+')';g.beginPath();g.ellipse(39,50-E.smile,5,3,0,0,Math.PI*2);g.ellipse(57,50-E.smile,5,3,0,0,Math.PI*2);g.fill()}
    /* hair in front */
    g.fillStyle=lum(.15);
    if(o.hair==='short'){g.beginPath();g.moveTo(29,37);g.bezierCurveTo(27,20,38,12,49,12);g.bezierCurveTo(61,12,70,20,67,37);g.bezierCurveTo(64,28,60,25,52,26);g.bezierCurveTo(44,24,36,26,32,31);g.closePath();g.fill()}
    else{g.beginPath();g.moveTo(29,44);g.bezierCurveTo(26,22,38,13,50,14);g.bezierCurveTo(62,14,70,24,67,42);g.bezierCurveTo(63,30,58,25,50,24);g.bezierCurveTo(44,28,36,30,31,44);g.closePath();g.fill()}
    g.strokeStyle='rgba(255,255,255,.18)';g.lineWidth=1.2;g.beginPath();g.moveTo(38,19);g.quadraticCurveTo(46,15,55,18);g.stroke();
    /* brows: inner ends drop when annoyed, both lift when surprised */
    var b=E.brow,inr=b<0?3.6*-b:-1.6*b;g.strokeStyle=lum(.1);g.lineWidth=2.6;g.lineCap='round';
    g.beginPath();g.moveTo(35,35-b*1.6);g.quadraticCurveTo(39.5,32.6-b*2.2,45.5,34.6+inr);g.stroke();
    g.beginPath();g.moveTo(61,35-b*1.6);g.quadraticCurveTo(56.5,32.6-b*2.2,50.5,34.6+inr);g.stroke();
    /* eyes */
    var eh=Math.max(.3,1.8*(1-E.blink)*(1-Math.max(0,E.smile)*.3)*(1-Math.max(0,-E.brow)*.2));g.fillStyle=lum(.62);g.beginPath();g.ellipse(40.5,40.2,4.2,2.2,0,0,Math.PI*2);g.ellipse(55.5,40.2,4.2,2.2,0,0,Math.PI*2);g.fill();
    g.fillStyle=lum(.06);g.beginPath();g.ellipse(40.5,41.2,2.9,eh,0,0,Math.PI*2);g.ellipse(55.5,41.2,2.9,eh,0,0,Math.PI*2);g.fill();
    /* nose */
    g.strokeStyle=lum(.42);g.lineWidth=1.8;g.beginPath();g.moveTo(49,42);g.quadraticCurveTo(47.2,48,46.2,50.2);g.quadraticCurveTo(48,51.8,50.8,50.6);g.stroke();
    /* mouth */
    var sm=E.smile,op=E.open,mw=7+sm*1.8,my=56.4;
    if(op>.05){g.fillStyle=lum(0);g.beginPath();g.ellipse(48,my+.4-sm*.6,mw*.66,.9+op*3,0,0,Math.PI*2);g.fill();
      if(sm>.2){g.fillStyle=lum(.9);g.fillRect(48-mw*.42,my-sm*.9,mw*.84,Math.min(1.2,op*1.5))}}
    else{g.strokeStyle=lum(.22);g.lineWidth=2.2;g.beginPath();g.moveTo(48-mw,my-sm*3.4);g.quadraticCurveTo(48,my+sm*3.8,48+mw,my-sm*3.4);g.stroke()}
    g.fillStyle='rgba(255,255,255,.12)';g.beginPath();g.ellipse(48,my+4.2,3.4,1,0,0,Math.PI*2);g.fill()}
  function size(){var r=cv.getBoundingClientRect();if(!r.width)return false;Wd=r.width;Ht=r.height;cv.width=Math.round(Wd*dpr);cv.height=Math.round(Ht*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);return true}
  function draw(){if(!Wd&&!size())return;paint();var px=g.getImageData(0,0,S,S).data,side=Math.min(Wd,Ht*1.02),pitch=side/cols,ox=(Wd-pitch*cols)/2,rows=Math.ceil(Ht/pitch),oy=Ht-rows*pitch;
    ctx.clearRect(0,0,Wd,Ht);if(o.bg){var bg=ctx.createLinearGradient(0,0,0,Ht);bg.addColorStop(0,o.bg[0]);bg.addColorStop(1,o.bg[1]);ctx.fillStyle=bg;ctx.fillRect(0,0,Wd,Ht)}
    var path=new Path2D(),R=pitch*.52;
    for(var y=0;y<rows;y++)for(var x=0;x<cols;x++){var sx=((x+.5)/cols*S)|0,sy=(((y+.5)*pitch+oy)/(pitch*cols)*S)|0;if(sy<0||sy>=S)continue;var v=px[(sy*S+sx)*4]/255;if(!o.print&&v<.06)continue;
      var r=o.print?R*Math.pow(1-v,1.05):R*Math.pow(v,.95);if(r<.38)continue;var cx=ox+(x+.5)*pitch,cy=oy+(y+.5)*pitch;path.moveTo(cx+r,cy);path.arc(cx,cy,r,0,6.2832)}
    ctx.fillStyle=o.dot||'#E9E4FF';ctx.fill(path)}
  function loop(now){raf=0;if(dead)return;var moving=false;
    for(var k in T){var d=T[k]-E[k];if(Math.abs(d)>.004){E[k]+=d*.16;moving=true}else E[k]=T[k]}
    if(talking&&!still()){E.open=Math.max(0,Math.sin(now/72)*.5+Math.sin(now/131)*.4+.15);moving=true}else if(E.open>.01){E.open*=.7;moving=true}else E.open=0;
    if(!still()&&now>nextBlink){E.blink=Math.min(1,E.blink+.34);moving=true;if(E.blink>=1)nextBlink=-now}
    else if(nextBlink<0){E.blink=Math.max(0,E.blink-.25);moving=true;if(!E.blink)nextBlink=now+2200+Math.random()*2600}
    draw();if(moving||talking)raf=requestAnimationFrame(loop);else{clearTimeout(tm);tm=setTimeout(kick,450)}}
  function kick(){if(dead)return;clearTimeout(tm);if(!raf)raf=requestAnimationFrame(loop)}
  size();draw();kick();
  var rt=0;W.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){size();draw()},120)});
  return {set:function(x){if(x.brow!=null)T.brow=x.brow;if(x.smile!=null)T.smile=x.smile;if(still()){E.brow=T.brow;E.smile=T.smile}kick()},talk:function(on){talking=!!on;kick()},draw:draw,stop:function(){dead=true;clearTimeout(tm);cancelAnimationFrame(raf)},resize:function(){size();draw()}}};
})();

/* practice */
/* Home v8, the practice: chapter 2, "Play it". A stats window (count-ups in the dot face, the clients, the visitor's
   XP) beside a map of three practices, all in the site's glass. Each practice opens a 15-second game: it starts as
   the generic training everyone has sat through, breaks, and comes back as a real piece of software.
     01 sim  a 112-slide deck becomes a Huddle call: Dana (a halftone portrait) reacts, captions, a deal-health gauge
     02 ai   HelpBot 3000 becomes Coachbench: grade four coach replies; accuracy climbs, a 3D cloud of replies sorts itself
     03 sys  a 98% completion dashboard becomes Pulse: pick the number that matters, sort three courses, the line bends
   Clear all three and Result.txt unlocks: XP, a rank, what I'd build, Book a consultation.
   Everything stays readable without playing. Sound shares the hero's toggle. Green is for actions and wins only. */
(function(){
'use strict';
var D=document,W=window,HL=W.HL||{},G=W.gsap,sec=D.querySelector('.pg');if(!sec||!HL.dm)return;
function $(s,r){return (r||D).querySelector(s)}function $$(s,r){return [].slice.call((r||D).querySelectorAll(s))}
var still=HL.still,FINE=HL.fine,SITE=W.HM_SITE||'',cl=HL.cl;
var S=W.__SND;function snd(n,a){try{if(S){S.unlock();S.play(n,a)}}catch(e){}}
var map=$('#pg-map'),win=$('#pg-game'),gb=$('#pg-gb'),gt=$('#pg-gt'),ck=$('#pg-clock'),live=$('#pg-live'),pauseB=$('.pg-pause',win),xB=$('.pg-x',win);
var INK=[13,13,13],GREEN=[58,231,58],DIM='rgba(13,13,13,.07)',INKC='rgb(13,13,13)',GC='rgb(58,231,58)';
var ORDER=['sim','ai','sys'],NAME={sim:'Simulations',ai:'AI coaches',sys:'Strategy'},NUM={sim:'01',ai:'02',sys:'03'};
var st={best:{},chain:false,cur:null,opener:null,ms:{},info:{}};
function say(t){live.textContent='';setTimeout(function(){live.textContent=t},40)}
function el(tag,cls,html){var e=D.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e}
function total(){var s=0;ORDER.forEach(function(g){s+=st.best[g]||0});return s}
function cleared(){return ORDER.filter(function(g){return st.best[g]!=null}).length}
function wait(ms,f){return setTimeout(f,still()?Math.min(ms,120):ms)}
var cleanups=[];function onLeave(f){cleanups.push(f)}function leave(){cleanups.splice(0).forEach(function(f){try{f()}catch(e){}})}

/* ================= the stats window: four numbers count up in the dot face ================= */
var dms=$$('.pg-dm').map(function(cv){var to=cv.getAttribute('data-to'),suf=cv.getAttribute('data-suf')||'',m=HL.dm(cv,(to+suf).length);m.to=to;m.suf=suf;cv.parentNode.classList.add('on');return m});
function numPitch(){var li=$('.pg-n');return Math.max(5,Math.min(innerWidth<768?8:10,Math.floor((li?li.clientWidth:180)/17.6)))}
function numsSize(){var p=numPitch();dms.forEach(function(m){m.size(p);m.draw(m.shown==null?'':m.shown,INKC,DIM)})}
numsSize();
function countUp(){dms.forEach(function(m,i){var o={p:0},num=/^\d+$/.test(m.to),N=+m.to,L='ABCDEFGHJKLMNPRSTUVWXYZ';
  function frame(){var t=o.p,lit=HL.mix([20,150,20],INK,Math.max(0,(t-.55)/.45));
    if(num){m.shown=Math.round(N*t)+m.suf}else{m.shown=m.to.split('').map(function(c,k){return t>.5+k*.22?c:L[(Math.random()*L.length)|0]}).join('')}
    m.draw(m.shown,t>=1?INKC:lit,DIM)}
  if(still()||!G){o.p=1;frame();return}
  G.to(o,{p:1,duration:num?1.7:1.3,ease:num?'power3.out':'none',delay:.15+i*.2,onUpdate:frame,onComplete:frame})})}

/* the XP bar: three rows of dots, filling in green */
var bar=$('#pg-bar'),bctx=bar.getContext('2d'),BP=6,bw=0,bf={f:0},xpEl=$('#pg-xp');
function barSize(){var d=Math.min(2,W.devicePixelRatio||1);bw=bar.parentNode.clientWidth;bar.style.width=bw+'px';bar.style.height=(3*BP)+'px';bar.width=Math.round(bw*d);bar.height=Math.round(3*BP*d);bctx.setTransform(d,0,0,d,0,0);barDraw()}
function barDraw(){var cols=Math.floor(bw/BP),n=Math.round(cols*bf.f),r=BP*.34,on=new Path2D(),off=new Path2D(),hot=new Path2D();bctx.clearRect(0,0,bw,3*BP);
  for(var x=0;x<cols;x++)for(var y=0;y<3;y++){var p=x<n?(x>=n-2&&bf.f<1?hot:on):off,cx=x*BP+BP/2,cy=y*BP+BP/2;p.moveTo(cx+r,cy);p.arc(cx,cy,r,0,6.2832)}
  bctx.fillStyle=DIM;bctx.fill(off);bctx.fillStyle='#22C55E';bctx.fill(on);bctx.fillStyle=GC;bctx.fill(hot)}
barSize();
function xpTo(v){var f=v/300,o={x:+xpEl.textContent||0};if(still()||!G){bf.f=f;barDraw();xpEl.textContent=v;return}
  G.to(bf,{f:f,duration:1.1,ease:'power2.out',onUpdate:barDraw});var lastT=-1;
  G.to(o,{x:v,duration:1.1,ease:'power2.out',onUpdate:function(){var n=Math.round(o.x);xpEl.textContent=n;var q=Math.floor(n/12);if(q!==lastT){lastT=q;snd('tally',q%12)}}})}
var rt=0;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){numsSize();barSize();wires()},140)});
if(D.fonts&&D.fonts.ready)D.fonts.ready.then(function(){numsSize();barSize();wires()});

/* ================= the map: wires between the practices, windows that open like a desktop ================= */
var nodes={};$$('.pg-node').forEach(function(n){nodes[n.getAttribute('data-g')]=n});
var svg=$('#pg-wires'),NS='http://www.w3.org/2000/svg',wl=[];
function wires(){if(!svg)return;var mr=map.getBoundingClientRect(),stack=innerWidth<768;svg.innerHTML='';wl=[];
  svg.setAttribute('viewBox','0 0 '+mr.width+' '+mr.height);
  for(var i=0;i<ORDER.length-1;i++){var a=nodes[ORDER[i]].getBoundingClientRect(),b=nodes[ORDER[i+1]].getBoundingClientRect(),d,
      al=a.left-mr.left,at=a.top-mr.top,ar=a.right-mr.left,bl=b.left-mr.left,bt=b.top-mr.top;
    if(stack){var x=7,y1=at+20,y2=bt+20;d='M'+al+' '+y1+'H'+(x+8)+'Q'+x+' '+y1+' '+x+' '+(y1+8)+'V'+(y2-8)+'Q'+x+' '+y2+' '+(x+8)+' '+y2+'H'+bl}
    else{var X=ar+30,Y=at+22;d='M'+ar+' '+Y+'H'+(X-12)+'Q'+X+' '+Y+' '+X+' '+(Y+12)+'V'+bt}
    var base=D.createElementNS(NS,'path');base.setAttribute('d',d);base.setAttribute('class','pg-wb');svg.appendChild(base);
    var lit=D.createElementNS(NS,'path');lit.setAttribute('d',d);lit.setAttribute('class','pg-wl');svg.appendChild(lit);
    var len=lit.getTotalLength(),done=st.best[ORDER[i]]!=null;lit.style.strokeDasharray=len;lit.style.strokeDashoffset=done?0:len;
    var end=D.createElementNS(NS,'circle'),pt=lit.getPointAtLength(len);end.setAttribute('cx',pt.x);end.setAttribute('cy',pt.y);end.setAttribute('r',4);end.setAttribute('class','pg-we'+(done?' on':''));svg.appendChild(end);
    wl.push({base:base,lit:lit,len:len,end:end})}
  if(!svg.__drawn){svg.__drawn=1;if(!still()&&G)wl.forEach(function(w,i){G.from(w.base,{opacity:0,duration:.6,delay:.9+i*.25})})}}
function lightWire(g){var i=ORDER.indexOf(g);if(i<0||i>=wl.length)return;var w=wl[i];
  if(still()||!G){w.lit.style.strokeDashoffset=0;w.end.classList.add('on');return}
  var dot=D.createElementNS(NS,'circle');dot.setAttribute('r',5);dot.setAttribute('class','pg-wd');svg.appendChild(dot);var o={p:0};
  G.to(o,{p:1,duration:1.2,ease:'power2.inOut',delay:.3,onUpdate:function(){w.lit.style.strokeDashoffset=w.len*(1-o.p);var pt=w.lit.getPointAtLength(w.len*o.p);dot.setAttribute('cx',pt.x);dot.setAttribute('cy',pt.y)},
    onComplete:function(){dot.remove();w.end.classList.add('on');snd('pin');burst(w.end,18)}})}

/* the windows open like a classic desktop: a stepped clip from the centre (the Signal Field moment) */
function openStep(w,cb){if(still()){w.classList.remove('pre');cb&&cb();return}w.classList.add('pre');w.classList.remove('in','out');void w.offsetWidth;w.classList.add('in');w.classList.remove('pre');setTimeout(function(){w.classList.remove('in');cb&&cb()},460)}
function closeStep(w,cb){if(still()){cb&&cb();return}w.classList.add('out');setTimeout(function(){w.classList.remove('out');cb&&cb()},300)}
(function(){var ws=$$('.pw[data-open]',sec).filter(function(w){return !(HL.morphOn&&w===nodes.sim)}),lbl=$('.pg-lbl',sec),head=$('.pg-head',sec),intro=$('.pg-intro',sec);
  if(!still()){ws.forEach(function(w){w.classList.add('pre')});[lbl,head,intro].forEach(function(e){if(e)e.style.opacity='0'})}
  HL.whenSeen(lbl||sec,function(){HL.rise([lbl,head].filter(Boolean))});
  HL.whenSeen($('.pg-stats'),function(){ws.forEach(function(w){wait(+w.getAttribute('data-open')||0,function(){openStep(w);if(w.classList.contains('pg-stats'))wait(260,countUp)})});
    wait(380,function(){if(intro)HL.rise([intro],0)});wait(900,wires)},.84)})();

/* node titles decrypt on hover; Play buttons lean toward the pointer */
$$('.pg-node').forEach(function(n){var t=$('.pg-nt',n),sc=HL.scramble(t,{per:1,speed:30});n.addEventListener('pointerenter',function(){sc&&sc.run()});HL.magnet($('.pg-play',n),n,{max:10,k:.18})});
HL.magnet($('.pg-all'),$('.pg-intro'),{max:10,k:.2});

/* ================= feedback: particles, shake, streaks ================= */
var fx=el('canvas','pg-fx');fx.setAttribute('aria-hidden','true');D.body.appendChild(fx);var fctx=fx.getContext('2d'),parts=[],fxRaf=0;
function fxSize(){var d=Math.min(2,W.devicePixelRatio||1);fx.width=innerWidth*d;fx.height=innerHeight*d;fctx.setTransform(d,0,0,d,0,0)}fxSize();addEventListener('resize',fxSize);
function burst(target,n,cols){if(still()||!target)return;var r=target.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;cols=cols||['#3AE73A','#22C55E','#B7F7B7','#0D0D0D'];
  for(var i=0;i<(n||26);i++){var a=Math.random()*6.2832,s=2+Math.random()*5.5;parts.push({x:cx,y:cy,vx:Math.cos(a)*s,vy:Math.sin(a)*s-2.4,life:1,size:2+Math.random()*3.4,c:cols[i%cols.length],sq:i%3===0})}
  if(!fxRaf)fxRaf=requestAnimationFrame(fxLoop)}
function fxLoop(){fxRaf=0;fctx.clearRect(0,0,innerWidth,innerHeight);parts=parts.filter(function(p){p.x+=p.vx;p.y+=p.vy;p.vy+=.16;p.vx*=.985;p.life-=.018;if(p.life<=0)return false;
    fctx.globalAlpha=Math.min(1,p.life*1.6);fctx.fillStyle=p.c;if(p.sq)fctx.fillRect(p.x-p.size/2,p.y-p.size/2,p.size,p.size);else{fctx.beginPath();fctx.arc(p.x,p.y,p.size/2,0,6.2832);fctx.fill()}return true});
  fctx.globalAlpha=1;if(parts.length)fxRaf=requestAnimationFrame(fxLoop)}
function shake(e){if(!e||still())return;e.classList.remove('pg-shake');void e.offsetWidth;e.classList.add('pg-shake');setTimeout(function(){e.classList.remove('pg-shake')},520)}
function pulse(e,k){if(!e||still())return;var c='pg-pulse-'+(k||'g');e.classList.remove(c);void e.offsetWidth;e.classList.add(c);setTimeout(function(){e.classList.remove(c)},900)}
var streak=0;function hit(ok,root){streak=ok?streak+1:0;var chip=root&&$('.app-streak',root);if(!chip)return;if(streak>=2){chip.textContent=streak+' in a row';chip.classList.add('on');
    if(!still()&&G)G.fromTo(chip,{scale:.6},{scale:1,duration:.5,ease:'back.out(3)'});snd(streak>=3?'great':'good')}else chip.classList.remove('on')}

/* ================= the game window ================= */
var dim=el('div','pg-dim');dim.setAttribute('aria-hidden','true');D.body.appendChild(dim);
var GAMES={};
function open(g,opener){if(opener)st.opener=opener;st.cur=g;showWin();if(g){leave();streak=0;GAMES[g]()}}
var home=win.parentNode,homeNext=win.nextSibling;
function showWin(){var first=win.hidden;
  if(first){if(innerWidth<768&&win.parentNode!==D.body)D.body.appendChild(win);win.hidden=false;map.classList.add('playing');sec.classList.add('playing');D.body.classList.add('pg-on');if(S&&S.hold)S.hold(true);
    var r=map.getBoundingClientRect();if(innerWidth>=768&&Math.abs(r.top-104)>24)HL.scrollTo(map,-104);
    if(innerWidth<768&&W.__lenis)W.__lenis.stop();snd('open');openStep(win)}}
function close(){clockStop();leave();if(win.hidden)return;closeStep(win,function(){win.hidden=true;gb.innerHTML='';if(win.parentNode!==home)home.insertBefore(win,homeNext);map.classList.remove('playing');sec.classList.remove('playing');D.body.classList.remove('pg-on')});
  if(S&&S.hold)S.hold(false);if(W.__lenis)W.__lenis.start();st.cur=null;st.chain=false;var o=st.opener;st.opener=null;if(o&&o.focus)setTimeout(function(){o.focus({preventScroll:true})},still()?0:320)}
xB.addEventListener('click',close);dim.addEventListener('click',close);
win.addEventListener('keydown',function(e){if(e.key==='Escape'){e.stopPropagation();close()}});
$$('.pg-play').forEach(function(b){b.addEventListener('click',function(){st.chain=false;open(b.getAttribute('data-g'),b)})});
$('.pg-all').addEventListener('click',function(e){st.chain=true;open(next()||'sim',e.currentTarget)});
function next(){for(var i=0;i<ORDER.length;i++)if(st.best[ORDER[i]]==null)return ORDER[i];return null}

/* a scene replaces the last one with a short cut */
function scene(html,cb){var nu=el('div','pg-sc',html),old=gb.firstElementChild;
  function put(){gb.innerHTML='';gb.appendChild(nu);gb.scrollTop=0;if(!still()&&G)G.from(nu.children,{y:16,opacity:0,duration:.6,ease:'expo.out',stagger:.06,clearProps:'transform,opacity'});cb&&cb(nu);
    var f=nu.querySelector('[data-focus]')||nu.querySelector('button');if(f)f.focus({preventScroll:true})}
  if(old&&!still()){old.classList.add('pg-cut');setTimeout(put,200)}else put();return nu}
/* the generic training breaks apart before the real thing arrives */
function glitch(node,cb){if(still()){cb();return}snd('swipe');node.classList.add('pg-glitch');setTimeout(cb,640)}
function title(t){gt.textContent=t}
function type(node,text,cb,rate){if(still()||!text){node.textContent=text;cb&&cb();return 0}node.textContent='';var i=0,seen=false,id=setInterval(function(){if(node.isConnected)seen=true;else if(seen){clearInterval(id);return}i+=2;node.textContent=text.slice(0,i);if(i%6===0)snd('key');if(i>=text.length){clearInterval(id);node.textContent=text;cb&&cb()}},rate||26);return id}
function tag(kind,b,t){return '<div class="pz-tag" data-k="'+kind+'"><i></i><b>'+b+'</b><span>'+t+'</span></div>'}
function app(cls,brand,ac,ctx,right,body){return '<div class="app '+cls+'" style="--ac:'+ac+'"><div class="app-bar"><span class="app-logo"><i aria-hidden="true"></i>'+brand+'</span><span class="app-ctx">'+ctx+'</span>'+
  '<span class="app-r"><span class="app-streak" aria-live="polite"></span>'+right+'</span></div><div class="app-body">'+body+'</div></div>'}

/* ---------- the clock: 15 seconds a game, running only while you decide ---------- */
var CK={left:0,run:false,go:false,last:0,raf:0,end:null,sec:-1},paused=false;
function clockSet(s){win.classList.remove('noclock');CK.left=s*1000;CK.run=true;CK.go=false;CK.sec=-1;ck.classList.remove('low','out');show();loop()}
function clockGo(cb){CK.end=cb;CK.go=true;CK.last=performance.now();loop()}
function clockHold(){CK.go=false}
function clockStop(){win.classList.add('noclock');CK.run=false;CK.go=false;CK.end=null;cancelAnimationFrame(CK.raf)}
function show(){var s=Math.max(0,Math.ceil(CK.left/1000));ck.textContent='0:'+(s<10?'0':'')+s;if(s!==CK.sec){CK.sec=s;if(CK.go&&s<=5&&s>0){ck.classList.add('low');snd('tick')}}}
function loop(){cancelAnimationFrame(CK.raf);CK.raf=requestAnimationFrame(function f(now){if(!CK.run)return;if(CK.go&&!paused){CK.left-=Math.min(100,now-CK.last)}CK.last=now;show();
  if(CK.go&&CK.left<=0){CK.go=false;CK.left=0;ck.classList.add('out');snd('alarm');var cb=CK.end;CK.end=null;cb&&cb();}CK.raf=requestAnimationFrame(f)})}
pauseB.addEventListener('click',function(){paused=!paused;pauseB.setAttribute('aria-pressed',paused?'true':'false');pauseB.textContent=paused?'Resume':'Pause';win.classList.toggle('paused',paused);say(paused?'Clock paused.':'Clock running.')});

/* ================= 01 · Huddle: the price objection ================= */
var SIM={
  d1:{q:'Honestly? Your competitor quoted us 20% less.',o:[
    {t:'We can match that.',h:35,r:'So you were overcharging us before?',n:'d2b'},
    {t:'What would you lose by switching?',h:80,r:'Hm. The onboarding, mainly. Our team actually uses yours.',n:'d2a'},
    {t:'Let me send you our brochure.',h:20,r:'…Sure. Send it over.',n:'d2b',aside:'She won’t read it.'}]},
  d2a:{q:'But finance only sees the number.',o:[
    {t:'Then let’s give finance one: cost per fully ramped rep.',h:95,r:'Okay. Send me that and I’ll take it upstairs.'},
    {t:'I’ll ask my manager about a discount.',h:60,r:'Fine. That’s what the other guys said too.'},
    {t:'Finance doesn’t really get training.',h:40,r:'Finance signs the cheque.'}]},
  d2b:{q:'Give me one reason not to switch.',o:[
    {t:'Ask what her team would have to relearn.',h:58,r:'…A lot, actually. Fine. Let’s talk.'},
    {t:'Offer another 5% off.',h:15,r:'Now I’m definitely shopping around.'},
    {t:'Tell her you’re industry-leading.',h:25,r:'That’s what the other guys said.'}]}};
var GAUGE='<svg class="hu-g" viewBox="0 0 200 112" aria-hidden="true"><path class="hu-gt" d="M20 100 A80 80 0 0 1 180 100"/>'+
  '<path class="hu-gz z1" d="M20 100 A80 80 0 0 1 75.3 23.9"/><path class="hu-gz z2" d="M75.3 23.9 A80 80 0 0 1 147 35.3"/><path class="hu-gz z3" d="M147 35.3 A80 80 0 0 1 180 100"/>'+
  '<path class="hu-gv" d="M20 100 A80 80 0 0 1 180 100"/><g class="hu-n"><line x1="100" y1="100" x2="100" y2="34"/><circle cx="100" cy="100" r="6"/></g></svg>';
GAMES.sim=function(){title('Objections_Module_FINAL_v7.ppt');clockSet(15);var t0=0;
  scene(tag('before','Before','The course everyone clicks through')+
    '<div class="pz pz-ppt"><div class="ppt-h">Module 4 of 12 &nbsp;&middot;&nbsp; Handling objections</div><div class="ppt-b"><h3>Objections are opportunities!</h3>'+
    '<div class="ppt-c"><ul><li>Always remain positive</li><li>Listen actively</li><li>Refer to the Objection Matrix (Appendix&nbsp;C)</li><li>Overcome the objection</li></ul><div class="ppt-img"><span>[ handshake.jpg ]</span></div></div></div>'+
    '<div class="ppt-f"><span>Slide 37 of 112</span><span>&copy; 2014 Corporate Learning</span><button class="ppt-next" type="button" data-focus>Next &#9654;</button></div></div>'+
    '<p class="pz-hint">Click <b>Next</b> to continue.</p>',function(n){
    $('.ppt-next',n).addEventListener('click',function(){snd('click');glitch($('.pz',n),call)})});
  var health=60,timedOut=false,face=null,n=null,gv={v:60},goods=0;
  function call(){title('Live call · Northwind renewal');t0=performance.now();
    n=scene(tag('after','After','Now you play it')+app('huddle','Huddle','#5B5BD6','Northwind renewal','<b class="hu-rec"><i></i>Rec</b><span class="hu-t">04:12</span>',
      '<div class="hu-main"><div class="hu-tile hu-dana"><canvas class="hu-face" aria-hidden="true"></canvas><span class="hu-name">Dana Kim &middot; Head of Ops, Northwind</span>'+
      '<span class="hu-mic" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span><p class="hu-cap"><b></b><span></span></p></div>'+
      '<div class="hu-side"><div class="hu-tile hu-you"><span class="hu-av" aria-hidden="true">You</span><span class="hu-name">You</span><span class="hu-mic me" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>'+
      '<div class="hu-gauge">'+GAUGE+'<p class="hu-gl"><b class="hu-pct">60</b><span>Deal health</span></p><em class="hu-dl"></em></div></div></div>'+
      '<div class="hu-say"><p class="pg-k">Your reply</p><div class="hu-o" role="group" aria-label="Your reply"></div></div>'));
    var cv=$('.hu-face',n);if(W.HFace){face=W.HFace(cv,{print:true,bg:['#F3F0FF','#E2DCFA'],dot:'#2B2266',cols:innerWidth<768?42:54,still:still});onLeave(function(){face.stop()})}
    var tm=$('.hu-t',n),sec0=252,clk=setInterval(function(){sec0++;tm.textContent='0'+Math.floor(sec0/60)+':'+(sec0%60<10?'0':'')+sec0%60},1000);onLeave(function(){clearInterval(clk)});
    gauge(60,true);ask('d1')}
  function gauge(h,now){var path=$('.hu-gv',n),nd=$('.hu-n',n),pc=$('.hu-pct',n),L=251.3;
    function paint(){var v=gv.v;path.style.strokeDasharray=(L*v/100).toFixed(1)+' 999';nd.style.transform='rotate('+(-90+180*v/100).toFixed(2)+'deg)';pc.textContent=Math.round(v);
      var z=v>=70?'hi':v>=40?'mid':'lo';n.querySelector('.hu-gauge').setAttribute('data-l',z)}
    if(now||still()||!G){gv.v=h;paint();return}G.to(gv,{v:h,duration:1.1,ease:'elastic.out(1,.55)',onUpdate:paint})}
  function caption(who,text,cb){var cap=$('.hu-cap',n),mic=$(who==='Dana'?'.hu-dana .hu-mic':'.hu-you .hu-mic',n);$('b',cap).textContent=who+':';cap.classList.add('on');mic.classList.add('on');
    if(who==='Dana'&&face)face.talk(true);type($('span',cap),text,function(){mic.classList.remove('on');if(who==='Dana'&&face)face.talk(false);cb&&cb()},who==='Dana'?30:18)}
  function ask(k){var node=SIM[k],o=$('.hu-o',n);o.innerHTML='';
    caption('Dana',node.q,function(){say('Dana: '+node.q);
      node.o.forEach(function(op,i){var b=el('button','hu-b','<span class="k">'+(i+1)+'</span><span>'+op.t+'</span>');b.type='button';b.addEventListener('click',function(){pick(k,i)});o.appendChild(b)});
      if(!still()&&G)G.from(o.children,{y:12,opacity:0,duration:.45,stagger:.07,ease:'power3.out',clearProps:'transform,opacity'});o.firstChild.focus({preventScroll:true});
      clockGo(function(){timeout(k)})})}
  function lock(i){$$('.hu-b',n).forEach(function(b,j){b.disabled=true;b.classList.toggle('chosen',j===i);b.classList.toggle('faded',j!==i)})}
  function react(d){var dana=$('.hu-dana',n),gz=$('.hu-gauge',n),dl=$('.hu-dl',n);
    if(face)face.set(d>=15?{brow:.35,smile:.95}:d>0?{brow:.15,smile:.4}:d>-20?{brow:-.6,smile:-.4}:{brow:-1,smile:-.85});
    dl.textContent=(d>0?'+':'−')+Math.abs(d);dl.className='hu-dl '+(d>0?'up':'dn');if(!still()&&G)G.fromTo(dl,{y:10,opacity:0},{y:0,opacity:1,duration:.5,ease:'back.out(2)'});
    if(d>0){pulse(dana,'g');burst(gz,d>=15?30:14);hit(d>=15,n)}else{shake(dana);pulse(gz,'r');hit(false,n)}}
  function pick(k,i){clockHold();var op=SIM[k].o[i],d=op.h-health;health=op.h;lock(i);snd(d>=15?'good':d>0?'click':'bad');if(d>=15)goods++;
    caption('You',op.t,function(){gauge(health);react(d);wait(500,function(){caption('Dana',op.r,function(){say('Dana: '+op.r);
      if(op.aside){var a=el('p','hu-aside',op.aside);$('.hu-say',n).prepend(a)}
      wait(1300,function(){var as=$('.hu-aside',n);if(as)as.remove();if(op.n&&!timedOut)ask(op.n);else end()})})})})}
  function timeout(k){timedOut=true;var d=-15;health=Math.max(5,health+d);lock(-1);snd('bad');gauge(health);react(d);
    caption('Dana','…Hello? I’ll take that as a no.',function(){wait(1200,end)})}
  function end(){st.ms.sim=performance.now()-t0;if(face)face.set(health>=90?{brow:.4,smile:1}:health>=55?{brow:.1,smile:.3}:{brow:-.7,smile:-.6});
    wait(500,function(){done('sim',health,{timedOut:timedOut,best:health>=90})})}};

/* ================= 02 · Coachbench: train the AI coach ================= */
var CARDS=[
  {t:'Great question! Stay positive. The customer is always right! 😊',ok:false,why:'Cheerful and empty. It teaches nothing.'},
  {t:'What did they say right before you froze?',ok:true,why:'It asks for the moment. Coaching starts with specifics.'},
  {t:'Per Policy 4.2.1, escalate all angry customers to a manager.',ok:false,why:'A policy recital. The rep needs a move, not a rule.'},
  {t:'Next time, name what they’re feeling, then ask one question. Want to practise it now?',ok:true,why:'A move, then practice. That’s a coach.'}];
GAMES.ai=function(){title('HelpBot 3000 · Customer Success Academy');clockSet(15);var t0=0;
  scene(tag('before','Before','The chatbot everyone ignores')+
    '<div class="pz pz-bot"><div class="bot-h"><span class="bot-av" aria-hidden="true">HB</span><b>HelpBot 3000</b><i>Online</i></div><div class="bot-c">'+
    '<p class="bot-m me">I froze when a client got angry on a call. What should I do?</p>'+
    '<p class="bot-m it">Great question! 😊 Communication is key. Remember to always stay positive, and the customer is always right!</p>'+
    '<div class="bot-r"><span>Was this helpful?</span><button type="button" class="bot-y" aria-label="Helpful">👍</button><button type="button" class="bot-n" aria-label="Not helpful" data-focus>👎</button></div></div></div>'+
    '<p class="pz-hint">Rate the answer.</p>',function(nn){
    $('.bot-n',nn).addEventListener('click',function(){snd('click');glitch($('.pz',nn),real)});
    $('.bot-y',nn).addEventListener('click',function(){snd('warn');var h=$('.pz-hint',nn);h.innerHTML='Really? <b>Let’s fix that.</b>';wait(900,function(){glitch($('.pz',nn),real)})})});
  var idx=0,right=0,busy=false,n=null,fin=false,acc=41,accs=[41],cloud=null;
  function real(){title('Coach training · Batch 1 of 1');t0=performance.now();
    n=scene(tag('after','After','Now you train it')+app('coach','Coachbench','#0F766E','Sales coach v0.3 &middot; training','<span class="cb-batch">Batch 1 &middot; 4 replies</span>',
      '<div class="cb-l"><div class="cb-th"><canvas class="cb-av" aria-hidden="true"></canvas><div class="cb-msg"><p class="pg-k">Sam &middot; SDR, week 3</p><p>I froze when the client got angry on the call.</p></div></div>'+
      '<p class="pg-k cb-lb">Coach draft <span class="pc-n">1 / 4</span> &middot; ship it or send it back</p><div class="pc-deck" aria-live="polite"></div><p class="pc-why" aria-live="polite"></p>'+
      '<div class="pc-act"><button type="button" class="pc-b no" data-focus><span aria-hidden="true">&larr;</span> Retrain</button><button type="button" class="pc-b yes">Ship it <span aria-hidden="true">&rarr;</span></button></div></div>'+
      '<div class="cb-r"><div class="cb-card cb-acc"><div class="cb-ch"><p class="pg-k">Coach accuracy</p><b class="cb-av2">41%</b></div><svg class="cb-line" viewBox="0 0 240 80" preserveAspectRatio="none" aria-hidden="true"><path class="cb-grid" d="M0 20H240M0 40H240M0 60H240"/><path class="cb-p" d=""/><g class="cb-pts"></g></svg></div>'+
      '<div class="cb-card cb-3d"><div class="cb-ch"><p class="pg-k">Reply space</p><span class="cb-lg"><i class="s"></i>Ship <i class="r"></i>Retrain <i class="u"></i>Unlabelled</span></div><div class="cb-cv" aria-hidden="true"></div></div></div>'));
    var av=$('.cb-av',n);if(W.HFace){var f2=W.HFace(av,{print:true,bg:['#E8FBF6','#CDEFE7'],dot:'#0B3D38',cols:24,hair:'short',still:still});f2.set({brow:-.3,smile:-.2});onLeave(function(){f2.stop()})}
    var deck=$('.pc-deck',n);CARDS.forEach(function(c,i){var e=el('div','pc-card','<p class="pg-k">Draft reply '+(i+1)+'</p><p class="pc-t">'+c.t+'</p><span class="pc-stamp"></span>');e.style.zIndex=10-i;e.setAttribute('data-i',i);if(i)e.classList.add('under');deck.appendChild(e)});
    $('.pc-b.no',n).addEventListener('click',function(){grade(false)});$('.pc-b.yes',n).addEventListener('click',function(){grade(true)});
    n.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){e.preventDefault();grade(false)}else if(e.key==='ArrowRight'){e.preventDefault();grade(true)}});
    if(FINE)drag(deck);chart();cloud=space($('.cb-cv',n));onLeave(function(){if(cloud)cloud.stop()});
    say('Draft reply 1: '+CARDS[0].t);clockGo(function(){finish(true)})}
  function chart(){var p=$('.cb-p',n),g=$('.cb-pts',n),pts=accs.map(function(v,i){return [10+i*55,76-(v-30)*.95]});
    p.setAttribute('d','M'+pts.map(function(q){return q[0].toFixed(1)+' '+q[1].toFixed(1)}).join('L'));g.innerHTML=pts.map(function(q){return '<circle cx="'+q[0]+'" cy="'+q[1]+'" r="3.2"/>'}).join('');
    if(!still()&&G&&accs.length>1){var L=p.getTotalLength();G.fromTo(p,{strokeDasharray:L,strokeDashoffset:Math.min(L,62)},{strokeDashoffset:0,duration:.8,ease:'power2.out'})}
    var big=$('.cb-av2',n),o={v:+big.textContent.replace('%','')};if(still()||!G)big.textContent=acc+'%';else G.to(o,{v:acc,duration:.8,onUpdate:function(){big.textContent=Math.round(o.v)+'%'}})}
  function top(){return $('.pc-card[data-i="'+idx+'"]',n)}
  function grade(ship){if(busy||idx>=CARDS.length||!n)return;busy=true;var c=CARDS[idx],card=top(),ok=ship===c.ok,s=$('.pc-stamp',card),why=$('.pc-why',n);
    if(ok)right++;acc=Math.max(20,Math.min(97,acc+(ok?13:-4)));accs.push(acc);chart();if(cloud)cloud.label(idx,ship);
    s.textContent=ship?'Shipped':'Retrain';card.classList.add(ship?'ship':'back');snd(ok?'good':'bad');if(ok){burst($('.cb-av2',n),16);pulse($('.cb-acc',n),'g')}else shake(card);hit(ok,n);
    why.innerHTML='<b class="'+(ok?'ok':'no')+'">'+(ok?'Right.':'Not quite.')+'</b> '+c.why;say((ok?'Right. ':'Not quite. ')+c.why);
    var go=function(){idx++;var nx=top();if(nx)nx.classList.remove('under');$('.pc-n',n).textContent=Math.min(idx+1,4)+' / 4';busy=false;if(idx>=CARDS.length)finish(false);else say('Draft reply '+(idx+1)+': '+CARDS[idx].t)};
    if(still()||!G){card.style.display='none';wait(700,go);return}
    G.to(card,{x:(ship?1:-1)*(innerWidth<768?420:560),rotation:(ship?1:-1)*14,opacity:0,duration:.7,delay:.5,ease:'power2.in',onComplete:function(){card.style.display='none';go()}})}
  function drag(deck){var sx=0,cur=null,dx=0;
    deck.addEventListener('pointerdown',function(e){var c=e.target.closest('.pc-card');if(!c||busy||+c.getAttribute('data-i')!==idx)return;cur=c;sx=e.clientX;dx=0;c.setPointerCapture(e.pointerId);c.classList.add('drag')});
    deck.addEventListener('pointermove',function(e){if(!cur)return;dx=e.clientX-sx;G.set(cur,{x:dx,rotation:dx*.05});cur.setAttribute('data-lean',dx>40?'yes':dx<-40?'no':'')});
    function up(){if(!cur)return;var c=cur;cur=null;c.classList.remove('drag');c.setAttribute('data-lean','');if(Math.abs(dx)>100)grade(dx>0);else G.to(c,{x:0,rotation:0,duration:.6,ease:'elastic.out(1,.5)'})}
    deck.addEventListener('pointerup',up);deck.addEventListener('pointercancel',up)}
  function finish(out){if(fin)return;fin=true;clockHold();st.ms.ai=performance.now()-t0;wait(out?400:1100,function(){done('ai',right*25,{timedOut:out&&idx<CARDS.length,right:right})})}};

/* the reply space: 120 replies in 3D; each graded draft pulls its neighbours into the ship or retrain cluster */
function space(host){var N=120,T=W.THREE,pos=[],tgt=[],col=[],raf=0,dead=false,ang=0,w=host.clientWidth||260,h=host.clientHeight||150;
  var U=[.62,.66,.72],SH=[.06,.46,.43],RE=[.85,.52,.05];
  for(var i=0;i<N;i++){var u=Math.random()*2-1,a=Math.random()*6.2832,r=Math.cbrt(Math.random())*1.15,s=Math.sqrt(1-u*u);pos.push([r*s*Math.cos(a),r*u*.8,r*s*Math.sin(a)]);tgt.push(pos[i].slice());col.push(U.slice())}
  function label(k,ship){var c=ship?[-1,0,0]:[1,0,0];for(var i=k*30;i<k*30+30&&i<N;i++){var u=Math.random()*2-1,a=Math.random()*6.2832,r=Math.cbrt(Math.random())*.5,s=Math.sqrt(1-u*u);
    tgt[i]=[c[0]+r*s*Math.cos(a),r*u,c[2]+r*s*Math.sin(a)];col[i]=ship?SH.slice():RE.slice()}}
  if(T){try{var ren=new T.WebGLRenderer({antialias:true,alpha:true});ren.setPixelRatio(Math.min(2,W.devicePixelRatio||1));ren.setSize(w,h);host.appendChild(ren.domElement);
      var sc=new T.Scene(),cam=new T.PerspectiveCamera(42,w/h,.1,20);cam.position.set(0,.6,3.6);cam.lookAt(0,0,0);
      var geo=new T.BufferGeometry(),pa=new Float32Array(N*3),ca=new Float32Array(N*3);geo.setAttribute('position',new T.BufferAttribute(pa,3));geo.setAttribute('color',new T.BufferAttribute(ca,3));
      var dc=D.createElement('canvas');dc.width=dc.height=32;var dx=dc.getContext('2d'),rg=dx.createRadialGradient(16,16,0,16,16,16);rg.addColorStop(0,'#fff');rg.addColorStop(.55,'#fff');rg.addColorStop(1,'rgba(255,255,255,0)');dx.fillStyle=rg;dx.fillRect(0,0,32,32);
      var mat=new T.PointsMaterial({size:.13,vertexColors:true,map:new T.CanvasTexture(dc),transparent:true,depthWrite:false}),pts=new T.Points(geo,mat);sc.add(pts);
      var ax=new T.LineBasicMaterial({color:0x0D0D0D,transparent:true,opacity:.12}),lg=new T.BufferGeometry().setFromPoints([new T.Vector3(-1.8,-.95,0),new T.Vector3(1.8,-.95,0)]);sc.add(new T.Line(lg,ax));
      var f=function(){raf=0;if(dead)return;for(var i=0;i<N;i++){for(var k=0;k<3;k++){pos[i][k]+=(tgt[i][k]-pos[i][k])*.06;pa[i*3+k]=pos[i][k];ca[i*3+k]+=(col[i][k]-ca[i*3+k])*.08}}
        geo.attributes.position.needsUpdate=true;geo.attributes.color.needsUpdate=true;if(!still())ang+=.0045;pts.rotation.y=Math.sin(ang)*.7;ren.render(sc,cam);raf=requestAnimationFrame(f)};
      for(var i=0;i<N;i++)for(var k=0;k<3;k++)ca[i*3+k]=U[k];f();
      return {label:label,stop:function(){dead=true;cancelAnimationFrame(raf);geo.dispose();mat.dispose();ren.dispose();if(ren.forceContextLoss)ren.forceContextLoss()}}}catch(e){}}
  /* no WebGL: the same idea, flat */
  var cv=D.createElement('canvas'),d=Math.min(2,W.devicePixelRatio||1);cv.width=w*d;cv.height=h*d;cv.style.width=w+'px';cv.style.height=h+'px';host.appendChild(cv);var c2=cv.getContext('2d');c2.setTransform(d,0,0,d,0,0);
  var g=function(){raf=0;if(dead)return;c2.clearRect(0,0,w,h);for(var i=0;i<N;i++){for(var k=0;k<3;k++)pos[i][k]+=(tgt[i][k]-pos[i][k])*.06;var c=col[i];
      c2.fillStyle='rgb('+(c[0]*255|0)+','+(c[1]*255|0)+','+(c[2]*255|0)+')';c2.beginPath();c2.arc(w/2+pos[i][0]*w*.26,h/2+pos[i][1]*h*.4,2.6,0,6.2832);c2.fill()}raf=requestAnimationFrame(g)};g();
  return {label:label,stop:function(){dead=true;cancelAnimationFrame(raf)}}}

/* ================= 03 · Pulse: fix a 98% completion rate ================= */
var METRICS=[{t:'Completion rate',v:'98%',ok:false,why:'That proves they clicked through.'},{t:'Course rating',v:'4.8 / 5',ok:false,why:'That proves they liked it.'},
  {t:'First-call resolution',v:'61%',ok:true,why:'That one moves when people actually get better.'}];
var COURSES=[{t:'Handling Complaints',m:'38-minute slide deck',a:'rebuild',why:'It’s the problem area. Make it a simulation.',c:'#F2C14E'},
  {t:'Welcome Video (2019)',m:'22 minutes, nobody finishes',a:'retire',why:'Nobody needs 22 minutes of 2019.',c:'#9AA3AD'},
  {t:'Fire Safety',m:'Required by law',a:'keep',why:'Required. Keep it, keep it short.',c:'#E5484D'}];
var MON=['Apr','May','Jun','Jul','Aug','Sep'],COMP=[22,26,31,38,44,52],FCR=[66,64,63,62,61,61],CMPL=[91,94,96,97,98,98];
function chartSVG(){var x=function(i){return 40+i*84},y=function(v){return 150-v*1.3},bars='',cl='',fl='',lbl='';
  for(var i=0;i<6;i++){bars+='<rect class="pu-bar" x="'+(x(i)-15)+'" y="'+y(CMPL[i])+'" width="30" height="'+(150-y(CMPL[i]))+'" rx="4"/>';lbl+='<text x="'+x(i)+'" y="168">'+MON[i]+'</text>'}
  cl='M'+COMP.map(function(v,i){return x(i)+' '+y(v*1.6)}).join('L');fl='M'+FCR.map(function(v,i){return x(i)+' '+y(v)}).join('L');
  return '<svg class="pu-svg" viewBox="0 0 560 176" aria-hidden="true"><path class="pu-ax" d="M20 150H540"/>'+bars+'<path class="pu-c" d="'+cl+'"/><path class="pu-f" d="'+fl+'"/>'+
    '<path class="pu-proj pu-pc" d="M'+x(5)+' '+y(COMP[5]*1.6)+'C'+(x(5)+30)+' '+y(COMP[5]*1.6)+' '+(x(5)+50)+' '+y(30)+' 540 '+y(24)+'"/><path class="pu-proj pu-pf" d="M'+x(5)+' '+y(FCR[5])+'C'+(x(5)+30)+' '+y(FCR[5])+' '+(x(5)+50)+' '+y(78)+' 540 '+y(84)+'"/>'+
    '<g class="pu-lbl">'+lbl+'</g><text class="pu-pt" x="536" y="'+(y(84)-10)+'" text-anchor="end">Projected after rebuild</text></svg>'}
GAMES.sys=function(){title('LearnHub™ Admin · Q3 report');clockSet(15);var t0=0,xp=0,picked=null,timedOut=false,n=null,finished=false;
  scene(tag('before','Before','The dashboard everyone celebrates')+
    '<div class="pz pz-lms"><div class="lh-h"><b>LearnHub™</b><span>Admin &middot; Q3</span></div><div class="lh-big"><span class="lh-n">98%</span><span class="lh-l">Completion rate 🎉 Great job, team!</span></div>'+
    '<div class="lh-row"><div><b>4.8 / 5</b><span>Course rating</span></div><div><b>41</b><span>Courses live</span></div><div class="lh-sm"><b>&#9650; 31%</b><span>Customer complaints</span></div></div></div>'+
    '<p class="pz-hint">Looks great. <button type="button" class="pz-look" data-focus>Look closer</button></p>',function(nn){
    $('.pz-look',nn).addEventListener('click',function(){snd('click');glitch($('.pz',nn),dash)})});
  function dash(){title('Diagnosis · Customer Support');t0=performance.now();
    n=scene(tag('after','After','Now you fix it')+app('pulse','Pulse','#2563EB','Customer Support &middot; last 6 months','<span class="pu-q">Q3</span>',
      '<div class="pu-card"><div class="pu-ch"><p class="pg-k">Training vs outcomes</p><span class="pu-lg"><i class="b"></i>Completion <i class="c"></i>Complaints <i class="f"></i>First-call resolution</span></div>'+chartSVG()+'</div>'+
      '<div class="pu-step"></div>'));
    var svgE=$('.pu-svg',n);if(!still()&&G){G.from($$('.pu-bar',svgE),{scaleY:0,transformOrigin:'50% 100%',duration:.8,stagger:.06,ease:'power3.out'});var c=$('.pu-c',svgE),L=c.getTotalLength();G.fromTo(c,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,duration:1.2,delay:.3,ease:'power2.out'})}
    step1()}
  function step1(){var s=$('.pu-step',n);s.innerHTML='<p class="pu-qq">Complaints are up 31%. <span>Which number tells you if the training worked?</span></p><div class="pu-m" role="group" aria-label="Pick one number"></div><p class="pu-why" aria-live="polite"></p>';
    var box=$('.pu-m',s);METRICS.forEach(function(m,i){var b=el('button','pu-t','<span class="pg-k">'+m.t+'</span><b>'+m.v+'</b>');b.type='button';b.addEventListener('click',function(){pick(i,b)});box.appendChild(b)});
    box.firstChild.focus({preventScroll:true});clockGo(function(){timedOut=true;fin()})}
  function pick(i,b){if(picked!=null)return;picked=i;clockHold();var m=METRICS[i],svgE=$('.pu-svg',n);if(m.ok)xp+=40;snd(m.ok?'good':'bad');hit(m.ok,n);
    $$('.pu-t',n).forEach(function(x,j){x.disabled=true;x.classList.toggle('chosen',j===i);x.classList.toggle('right',METRICS[j].ok&&j!==i);x.classList.toggle('faded',j!==i&&!METRICS[j].ok)});
    if(m.ok)burst(b,26);else shake(b);
    /* the chart redraws around the number that matters */
    svgE.classList.add('fcr');var f=$('.pu-f',svgE);if(!still()&&G){var L=f.getTotalLength();G.fromTo(f,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,duration:1,ease:'power2.out'})}
    $('.pu-why',n).innerHTML='<b class="'+(m.ok?'ok':'no')+'">'+(m.ok?'Right.':'Not quite.')+'</b> '+m.why+(m.ok?'':' First-call resolution moves when people get better.');say(m.why);wait(1700,step2)}
  function step2(){var s=$('.pu-step',n),sel={},left=COURSES.length;s.innerHTML='<p class="pu-qq">41 courses. <span>Sort three of them.</span></p><div class="pu-c3"></div><p class="pu-why" aria-live="polite"></p>';
    var box=$('.pu-c3',s);if(!still()&&G)G.from(s.children,{y:12,opacity:0,duration:.5,stagger:.06,ease:'power3.out',clearProps:'transform,opacity'});
    COURSES.forEach(function(c,i){var tile=el('div','pu-co','<span class="pu-th" style="--c:'+c.c+'" aria-hidden="true"><i></i><i></i><i></i></span><div class="pu-ct"><b>'+c.t+'</b><span>'+c.m+'</span></div><div class="pu-seg" role="radiogroup" aria-label="'+c.t+'"></div><span class="pu-st"></span>'),seg=$('.pu-seg',tile);
      ['retire','rebuild','keep'].forEach(function(a){var b=el('button','pu-s',a.charAt(0).toUpperCase()+a.slice(1));b.type='button';b.setAttribute('role','radio');b.setAttribute('aria-checked','false');
        b.addEventListener('click',function(){if(sel[i])return;sel[i]=a;left--;var ok=a===c.a;if(ok)xp+=20;snd(ok?'good':'bad');hit(ok,n);
          $$('.pu-s',seg).forEach(function(x){x.disabled=true;var me=x===b;x.setAttribute('aria-checked',me?'true':'false');x.classList.toggle('chosen',me);x.classList.toggle('right',!ok&&x.textContent.toLowerCase()===c.a)});
          tile.classList.add('as-'+a,ok?'ok':'no');$('.pu-st',tile).textContent=a==='rebuild'?'Rebuild as a simulation':a==='retire'?'Retired':'Kept';if(ok)burst(tile,14);else shake(tile);
          $('.pu-why',n).innerHTML='<b class="'+(ok?'ok':'no')+'">'+(ok?'Right.':'Not quite.')+'</b> '+c.why;say(c.why);if(!left){clockHold();project();wait(2300,fin)}});seg.appendChild(b)});box.appendChild(tile)});
    $('.pu-s',box).focus({preventScroll:true});clockGo(function(){timedOut=true;fin()})}
  /* the line bends: complaints come down, first-call resolution climbs */
  function project(){var svgE=$('.pu-svg',n);svgE.classList.add('proj');snd('land');if(!still()&&G)$$('.pu-proj',svgE).forEach(function(p){var L=p.getTotalLength();G.fromTo(p,{strokeDashoffset:L,strokeDasharray:'5 5'},{strokeDashoffset:0,duration:1.4,ease:'power2.out'})})}
  function fin(){if(finished)return;finished=true;clockHold();st.ms.sys=performance.now()-t0;done('sys',xp,{timedOut:timedOut,metric:picked!=null&&METRICS[picked].ok})}};

/* ================= cleared: the debrief, XP flying to the stats window, the wire lighting up ================= */
var DEB={
  sim:{p:'That was a branching simulation. People practise the moment before it counts, and every choice shows its consequence. A slide can’t do that.',out:'Out of time. Real calls don’t wait either.',
    tags:['Branching simulations','Sales roleplay','Compliance drills']},
  ai:{p:'You just labelled training data. That’s how an AI coach learns what good sounds like: real replies, graded by people who know the job. I’ve set the ground truth AI models train on, and I build the coach on top.',
    out:'Clock ran out. Ungraded replies are how bad coaches happen.',tags:['AI tutors','Evaluation &amp; labelling','Synthetic voice']},
  sys:{p:'That’s learning strategy. Measure what changes on the job, rebuild what matters, retire what nobody needs. Then the platform underneath, and the analytics that prove it.',
    out:'Out of time. That’s how a library gets to 41 courses.',tags:['Learning strategy','LMS &amp; SCORM','Analytics']}};
function done(g,xp,info){clockStop();leave();xp=Math.round(xp);var prev=st.best[g],gain=Math.max(0,xp-(prev||0));st.best[g]=Math.max(prev||0,xp);st.info[g]=info;
  var nx=next(),all=!nx,d=DEB[g];title('Cleared · '+NUM[g]+' '+NAME[g]);snd(xp>=80?'great':'land');
  var n=scene('<div class="db"><div class="db-top"><canvas class="db-xp" aria-hidden="true"></canvas><div><p class="pg-k">'+NUM[g]+' '+NAME[g]+' &middot; cleared</p><p class="db-h">+'+xp+' XP'+(prev!=null?'<span> &middot; best '+st.best[g]+'</span>':'')+'</p></div></div>'+
    (info&&info.timedOut?'<p class="db-n">'+d.out+'</p>':'')+'<p class="db-p">'+d.p+'</p><div class="db-b"><p class="pg-k">What I build here</p><ul class="pg-tags">'+d.tags.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ul></div>'+
    '<div class="db-act"><button type="button" class="pg-play db-go" data-focus><span>'+(all?'See your result':'Next: '+NAME[nx])+'</span> <span aria-hidden="true">&#9654;</span></button><button type="button" class="db-map">Back to the map</button></div></div>');
  say(NAME[g]+' cleared. Plus '+xp+' XP.');
  var cv=$('.db-xp',n),m=HL.dm(cv,3);m.size(innerWidth<768?6:8);var o={v:0};
  if(still()||!G)m.draw(String(xp),'#16A34A',DIM);else G.to(o,{v:xp,duration:1,ease:'power2.out',onUpdate:function(){m.draw(String(Math.round(o.v)),'#16A34A',DIM)},onComplete:function(){if(xp>=80)burst(cv,30)}});
  var to=xpEl.getBoundingClientRect(),from=cv.getBoundingClientRect(),vis=to.top>0&&to.bottom<innerHeight;
  if(gain&&vis&&!still()&&G){var f=el('span','pg-fly','+'+gain);D.body.appendChild(f);G.fromTo(f,{x:from.left,y:from.top,opacity:0,scale:.8},{x:to.left,y:to.top-6,opacity:1,scale:1,duration:.9,delay:.9,ease:'power2.inOut',
    onComplete:function(){G.to(f,{opacity:0,duration:.25,onComplete:function(){f.remove()}});xpTo(total());pulse($('.pg-xp'),'g')}})}else xpTo(total());
  markNode(g);lightWire(g);
  $('.db-go',n).addEventListener('click',function(){if(all)result();else{st.chain=true;open(nx)}});
  $('.db-map',n).addEventListener('click',close)}
function markNode(g){var nd=nodes[g];if(!nd)return;nd.classList.add('done');$('.pg-st',nd).textContent='+'+st.best[g]+' XP';var b=$('.pg-play span',nd);if(b)b.textContent='Replay';
  var li=$('.pg-chk li[data-g="'+g+'"]');if(li){li.classList.add('done');$('b',li).textContent='+'+st.best[g]}
  var cn=$('#pg-cnt');if(cn)cn.textContent=cleared();var sc=$('.pg-nt',nd).__sc;if(sc)sc.run();pulse(nd,'g');
  if(cleared()===3)unlock()}

/* ================= Result.txt ================= */
function rank(x){return x>=250?['Not a click-through person','You went for the moment, the coach and the number that matters.']:x>=170?['Promising. Retake Module 4.','Close. A real programme would let you practise until it sticks.']:['Certificate of completion','You finished. That’s what most training measures.']}
function fmt(ms){var s=Math.round(ms/1000);return Math.floor(s/60)+':'+(s%60<10?'0':'')+s%60}
function unlock(){var lk=$('.pg-lock');if(!lk||lk.classList.contains('open'))return;var r=rank(total());lk.classList.add('open');$('.pg-lk',lk).textContent='Unlocked';
  $('.pw-b',lk).innerHTML='<p class="pg-k">Rank</p><p class="pg-lr">'+r[0]+'</p><button type="button" class="pg-play pg-lo"><span>Open result</span></button>';$('.pg-lo',lk).addEventListener('click',function(e){open(null,e.currentTarget);result()});
  closeStep(lk,function(){openStep(lk)})}
function result(){var x=total(),r=rank(x),ms=(st.ms.sim||0)+(st.ms.ai||0)+(st.ms.sys||0),metric=st.info.sys&&st.info.sys.metric;
  title('Result.txt · your build');snd('fanfare');
  var n=scene('<div class="rs"><div class="rs-top"><div class="rs-x"><canvas class="rs-xp" aria-hidden="true"></canvas><p class="pg-k"><span class="hm-sr">'+x+' </span>XP of 300 &middot; played in '+fmt(ms)+'</p></div>'+
    '<div class="rs-r"><p class="pg-k">Rank</p><p class="rs-rt">'+r[0]+'</p><p class="rs-rs">'+r[1]+'</p></div></div>'+
    '<div class="rs-b"><p class="pg-k">What I&rsquo;d build for a team like yours</p><ol class="rs-l">'+
    '<li><span><b>A branching simulation</b> for the moment your people dread, where every reply has a consequence.</span></li>'+
    '<li><span><b>An AI coach</b> trained on replies your best people would ship.</span></li>'+
    '<li><span><b>One number that matters</b>'+(metric?', the one you picked: first-call resolution, not completion.':': first-call resolution, not completion. (Hint for next time.)')+'</span></li></ol></div>'+
    '<div class="rs-act"><a class="btn-v5" href="'+SITE+'/contact" data-focus><p class="btn-v5-label">Book a consultation</p></a><a class="rs-u" href="'+SITE+'/work">See the work <span aria-hidden="true">&rarr;</span></a><a class="rs-u" href="'+SITE+'/services">See the services <span aria-hidden="true">&rarr;</span></a>'+
    '<button type="button" class="rs-again">Play again <span aria-hidden="true">&#8635;</span></button></div></div>');
  var m=HL.dm($('.rs-xp',n),3);m.size(innerWidth<768?8:11);var o={v:0};
  if(still()||!G)m.draw(String(x),INKC,DIM);else G.to(o,{v:x,duration:1.6,ease:'power3.out',onUpdate:function(){m.draw(String(Math.round(o.v)),HL.mix([22,163,74],INK,o.v/Math.max(1,x)),DIM)},onComplete:function(){burst($('.rs-xp',n),44)}});
  say('Result. '+x+' XP of 300. Rank: '+r[0]+'.');
  $('.rs-again',n).addEventListener('click',function(){st.chain=true;open('sim')})}

win.addEventListener('wheel',function(e){e.stopPropagation()},{passive:true});
})();
