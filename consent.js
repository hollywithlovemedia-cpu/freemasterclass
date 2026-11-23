/* Cookie consent for hollywithlove.com: the Meta Pixel only loads after Accept */
(function(){
  var KEY='hwl_cookie_consent', PIXEL='1692054382334637';
  function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  function loadPixel(){
    if(window.fbq)return;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init',PIXEL);fbq('track','PageView');
  }
  var css='#hwl-cc{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;background:#f5efe6;color:#151313;border-radius:18px;padding:20px 22px;box-shadow:0 20px 50px rgba(0,0,0,.5);font-family:Inter,system-ui,sans-serif;font-size:14px;line-height:1.55}'+
  '#hwl-cc p{margin:0 0 14px}#hwl-cc a{color:#151313;font-weight:600}#hwl-cc .row{display:flex;gap:10px;flex-wrap:wrap}'+
  '#hwl-cc button{flex:1 1 120px;min-height:46px;border-radius:999px;border:1.5px solid #151313;font-family:"Inter Tight",sans-serif;font-weight:800;letter-spacing:.12em;font-size:12px;cursor:pointer}'+
  '#hwl-cc .yes{background:#151313;color:#f5efe6}#hwl-cc .no{background:transparent;color:#151313}';
  function banner(){
    if(document.getElementById('hwl-cc'))return;
    var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
    var d=document.createElement('div');d.id='hwl-cc';d.setAttribute('role','dialog');d.setAttribute('aria-label','Cookie choices');
    d.innerHTML='<p><strong>Can I use cookies?</strong> I use the Meta Pixel to see which parts of this page you find useful and to show my ads to the right people. It only switches on if you say yes. <a href="/privacy/">Privacy and cookie policy</a></p><div class="row"><button class="yes" type="button">ACCEPT</button><button class="no" type="button">DECLINE</button></div>';
    document.body.appendChild(d);
    d.querySelector('.yes').onclick=function(){set('yes');d.remove();loadPixel();};
    d.querySelector('.no').onclick=function(){set('no');d.remove();};
  }
  window.hwlCookieSettings=function(e){if(e)e.preventDefault();banner();};
  function init(){var c=get();if(c==='yes')loadPixel();else if(c!=='no')banner();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
