"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},swfobject=function(){function e(){if(!O){try{var e=I.getElementsByTagName("body")[0].appendChild(I.createElement("span"));e.parentNode.removeChild(e)}catch(e){return}O=!0;for(var e=j.length,t=0;t<e;t++)j[t]()}}function t(e){O?e():j[j.length]=e}function n(e){if(void 0!==A.addEventListener)A.addEventListener("load",e,!1);else if(void 0!==I.addEventListener)I.addEventListener("load",e,!1);else if(void 0!==A.attachEvent)v(A,"onload",e);else if("function"==typeof A.onload){var t=A.onload;A.onload=function(){t(),e()}}else A.onload=e}function i(){var e=I.getElementsByTagName("body")[0],t=I.createElement("object");t.setAttribute("type","application/x-shockwave-flash");var n=e.appendChild(t);if(n){var i=0;!function(){if(void 0!==n.GetVariable){var o=n.GetVariable("$version");o&&(o=o.split(" ")[1].split(","),$.pv=[parseInt(o[0],10),parseInt(o[1],10),parseInt(o[2],10)])}else if(10>i)return i++,void setTimeout(arguments.callee,10);e.removeChild(t),n=null,a()}()}else a()}function a(){var e=k.length;if(0<e)for(var t=0;t<e;t++){var n=k[t].id,i=k[t].callbackFn,a={success:!1,id:n};if(0<$.pv[0]){var c=u(n);if(c)if(!p(k[t].swfVersion)||$.wk&&312>$.wk)if(k[t].expressInstall&&r()){a={},a.data=k[t].expressInstall,a.width=c.getAttribute("width")||"0",a.height=c.getAttribute("height")||"0",c.getAttribute("class")&&(a.styleclass=c.getAttribute("class")),c.getAttribute("align")&&(a.align=c.getAttribute("align"));for(var d={},c=c.getElementsByTagName("param"),f=c.length,v=0;v<f;v++)"movie"!=c[v].getAttribute("name").toLowerCase()&&(d[c[v].getAttribute("name")]=c[v].getAttribute("value"));l(a,d,n,i)}else s(c),i&&i(a);else y(n,!0),i&&(a.success=!0,a.ref=o(n),i(a))}else y(n,!0),i&&((n=o(n))&&void 0!==n.SetVariable&&(a.success=!0,a.ref=n),i(a))}}function o(e){var t=null;return(e=u(e))&&"OBJECT"==e.nodeName&&(void 0!==e.SetVariable?t=e:(e=e.getElementsByTagName("object")[0])&&(t=e)),t}function r(){return!x&&p("6.0.65")&&($.win||$.mac)&&!($.wk&&312>$.wk)}function l(e,t,n,i){x=!0,g=i||null,E={success:!1,id:n};var a=u(n);a&&("OBJECT"==a.nodeName?(w=c(a),b=null):(w=a,b=n),e.id="SWFObjectExprInst",(void 0===e.width||!/%$/.test(e.width)&&310>parseInt(e.width,10))&&(e.width="310"),(void 0===e.height||!/%$/.test(e.height)&&137>parseInt(e.height,10))&&(e.height="137"),I.title=I.title.slice(0,47)+" - Flash Player Installation",i=$.ie&&$.win?"ActiveX":"PlugIn",i="MMredirectURL="+A.location.toString().replace(/&/g,"%26")+"&MMplayerType="+i+"&MMdoctitle="+I.title,t.flashvars=void 0!==t.flashvars?t.flashvars+"&"+i:i,$.ie&&$.win&&4!=a.readyState&&(i=I.createElement("div"),n+="SWFObjectNew",i.setAttribute("id",n),a.parentNode.insertBefore(i,a),a.style.display="none",function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)}()),d(e,t,n))}function s(e){if($.ie&&$.win&&4!=e.readyState){var t=I.createElement("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(c(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(c(e),e)}function c(e){var t=I.createElement("div");if($.win&&$.ie)t.innerHTML=e.innerHTML;else if((e=e.getElementsByTagName("object")[0])&&(e=e.childNodes))for(var n=e.length,i=0;i<n;i++)1==e[i].nodeType&&"PARAM"==e[i].nodeName||8==e[i].nodeType||t.appendChild(e[i].cloneNode(!0));return t}function d(e,t,n){var i,a=u(n);if($.wk&&312>$.wk)return i;if(a)if(void 0===e.id&&(e.id=n),$.ie&&$.win){var o,r="";for(o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));o="";for(var l in t)t[l]!=Object.prototype[l]&&(o+='<param name="'+l+'" value="'+t[l]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+o+"</object>",L[L.length]=e.id,i=u(e.id)}else{l=I.createElement("object"),l.setAttribute("type","application/x-shockwave-flash");for(var s in e)e[s]!=Object.prototype[s]&&("styleclass"==s.toLowerCase()?l.setAttribute("class",e[s]):"classid"!=s.toLowerCase()&&l.setAttribute(s,e[s]));for(r in t)t[r]!=Object.prototype[r]&&"movie"!=r.toLowerCase()&&(e=l,o=r,s=t[r],n=I.createElement("param"),n.setAttribute("name",o),n.setAttribute("value",s),e.appendChild(n));a.parentNode.replaceChild(l,a),i=l}return i}function f(e){var t=u(e);t&&"OBJECT"==t.nodeName&&($.ie&&$.win?(t.style.display="none",function(){if(4==t.readyState){var n=u(e);if(n){for(var i in n)"function"==typeof n[i]&&(n[i]=null);n.parentNode.removeChild(n)}}else setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function u(e){var t=null;try{t=I.getElementById(e)}catch(e){}return t}function v(e,t,n){e.attachEvent(t,n),B[B.length]=[e,t,n]}function p(e){var t=$.pv;return e=e.split("."),e[0]=parseInt(e[0],10),e[1]=parseInt(e[1],10)||0,e[2]=parseInt(e[2],10)||0,t[0]>e[0]||t[0]==e[0]&&t[1]>e[1]||t[0]==e[0]&&t[1]==e[1]&&t[2]>=e[2]}function h(e,t,n,i){if(!$.ie||!$.mac){var a=I.getElementsByTagName("head")[0];a&&(n=n&&"string"==typeof n?n:"screen",i&&(C=S=null),S&&C==n||(i=I.createElement("style"),i.setAttribute("type","text/css"),i.setAttribute("media",n),S=a.appendChild(i),$.ie&&$.win&&void 0!==I.styleSheets&&0<I.styleSheets.length&&(S=I.styleSheets[I.styleSheets.length-1]),C=n),$.ie&&$.win?S&&"object"==_typeof(S.addRule)&&S.addRule(e,t):S&&void 0!==I.createTextNode&&S.appendChild(I.createTextNode(e+" {"+t+"}")))}}function y(e,t){if(F){var n=t?"visible":"hidden";O&&u(e)?u(e).style.visibility=n:h("#"+e,"visibility:"+n)}}function m(e){return null!=/[\\\"<>\.;]/.exec(e)&&"undefined"!=typeof encodeURIComponent?encodeURIComponent(e):e}var w,b,g,E,S,C,A=window,I=document,N=navigator,T=!1,j=[function(){T?i():a()}],k=[],L=[],B=[],O=!1,x=!1,F=!0,$=function(){var e=void 0!==I.getElementById&&void 0!==I.getElementsByTagName&&void 0!==I.createElement,t=N.userAgent.toLowerCase(),n=N.platform.toLowerCase(),i=/win/.test(n?n:t),n=/mac/.test(n?n:t),t=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),a=!1,o=[0,0,0],r=null;if(void 0!==N.plugins&&"object"==_typeof(N.plugins["Shockwave Flash"]))!(r=N.plugins["Shockwave Flash"].description)||void 0!==N.mimeTypes&&N.mimeTypes["application/x-shockwave-flash"]&&!N.mimeTypes["application/x-shockwave-flash"].enabledPlugin||(T=!0,a=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),o[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),o[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),o[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(void 0!==A.ActiveXObject)try{var l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");l&&(r=l.GetVariable("$version"))&&(a=!0,r=r.split(" ")[1].split(","),o=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)])}catch(e){}return{w3:e,pv:o,wk:t,ie:a,win:i,mac:n}}();return function(){$.w3&&((void 0!==I.readyState&&"complete"==I.readyState||void 0===I.readyState&&(I.getElementsByTagName("body")[0]||I.body))&&e(),O||(void 0!==I.addEventListener&&I.addEventListener("DOMContentLoaded",e,!1),$.ie&&$.win&&(I.attachEvent("onreadystatechange",function(){"complete"==I.readyState&&(I.detachEvent("onreadystatechange",arguments.callee),e())}),A==top&&function(){if(!O){try{I.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,0)}e()}}()),$.wk&&function(){O||(/loaded|complete/.test(I.readyState)?e():setTimeout(arguments.callee,0))}(),n(e)))}(),function(){$.ie&&$.win&&window.attachEvent("onunload",function(){for(var e=B.length,t=0;t<e;t++)B[t][0].detachEvent(B[t][1],B[t][2]);for(e=L.length,t=0;t<e;t++)f(L[t]);for(var n in $)$[n]=null;$=null;for(var i in swfobject)swfobject[i]=null;swfobject=null})}(),{registerObject:function(e,t,n,i){if($.w3&&e&&t){var a={};a.id=e,a.swfVersion=t,a.expressInstall=n,a.callbackFn=i,k[k.length]=a,y(e,!1)}else i&&i({success:!1,id:e})},getObjectById:function(e){if($.w3)return o(e)},embedSWF:function(e,n,i,a,o,s,c,f,u,v){var h={success:!1,id:n};$.w3&&!($.wk&&312>$.wk)&&e&&n&&i&&a&&o?(y(n,!1),t(function(){i+="",a+="";var t={};if(u&&"object"===(void 0===u?"undefined":_typeof(u)))for(var m in u)t[m]=u[m];if(t.data=e,t.width=i,t.height=a,m={},f&&"object"===(void 0===f?"undefined":_typeof(f)))for(var w in f)m[w]=f[w];if(c&&"object"===(void 0===c?"undefined":_typeof(c)))for(var b in c)m.flashvars=void 0!==m.flashvars?m.flashvars+"&"+b+"="+c[b]:b+"="+c[b];if(p(o))w=d(t,m,n),t.id==n&&y(n,!0),h.success=!0,h.ref=w;else{if(s&&r())return t.data=s,void l(t,m,n,v);y(n,!0)}v&&v(h)})):v&&v(h)},switchOffAutoHideShow:function(){F=!1},ua:$,getFlashPlayerVersion:function(){return{major:$.pv[0],minor:$.pv[1],release:$.pv[2]}},hasFlashPlayerVersion:p,createSWF:function(e,t,n){if($.w3)return d(e,t,n)},showExpressInstall:function(e,t,n,i){$.w3&&r()&&l(e,t,n,i)},removeSWF:function(e){$.w3&&f(e)},createCSS:function(e,t,n,i){$.w3&&h(e,t,n,i)},addDomLoadEvent:t,addLoadEvent:n,getQueryParamValue:function(e){var t=I.location.search||I.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return m(t);for(var t=t.split("&"),n=0;n<t.length;n++)if(t[n].substring(0,t[n].indexOf("="))==e)return m(t[n].substring(t[n].indexOf("=")+1))}return""},expressInstallCallback:function(){if(x){var e=u("SWFObjectExprInst");e&&w&&(e.parentNode.replaceChild(w,e),b&&(y(b,!0),$.ie&&$.win&&(w.style.display="block")),g&&g(E)),x=!1}}}}();