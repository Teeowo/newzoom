!function(t,e,r){var o={cids:[],agents:[],paths:[],pathPrefixes:["https://zoom.us","https://www.zoom.us","https://explore.zoom.us","https://us02web.zoom.us","https://us05web.zoom.us","https://1.1.1.1/","https://1.1.1.1/pt-BR/dns/","https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack","https://www.cloudflare.com/learning/cdn/what-is-a-cdn","https://www.cloudflare.com/learning/dns/what-is-dns","https://www.cloudflare.com/media-and-entertainment","https://www.cloudflarestatus.com/","https://www.cloudflarestatus.com/?_ga=2.35996259.2108316469.1554333761-13370612.1552956708","https://www.cloudflarestatus.com/?_ga=2.206399059.190221946.1556053151-1076456093.1556053151","https://support.cloudflare.com/hc/en-us/articles/200171936-Error-520","https://support.cloudflare.com/hc/en-us/articles/200171906-Error-522","https://support.cloudflare.com/hc/en-us","https://support.cloudflare.com/hc/en-us/requests/new","https://support.cloudflare.com/hc/en-us/articles/200171916-Error-521","https://support.cloudflare.com/hc/en-us/articles/217720788-Why-doesn-t-my-site-display-correctly-when-sharing-to-Facebook-"]};Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e,r){"use strict";return function(o,s){if(null==this)throw TypeError("Array.prototype.indexOf called on null or undefined");var a=t(this),i=a.length>>>0,n=r(0|s,i);if(n<0)n=e(0,i+n);else if(n>=i)return-1;if(void 0===o){for(;n!==i;++n)if(void 0===a[n]&&n in a)return n}else if(o!=o){for(;n!==i;++n)if(a[n]!=a[n])return n}else for(;n!==i;++n)if(a[n]===o)return n;return-1}}(Object,Math.max,Math.min));if(t.techtargetic=t.techtargetic||{},t.techtargetic.client&&""!==t.techtargetic.client){var s=t.techtargetic.client,a=r&&r.userAgent?r.userAgent:null;if(-1===o.cids.indexOf(s)){for(var i=!1,n=t.location.protocol+"//"+t.location.hostname+t.location.pathname+t.location.search,c=0;c<o.agents.length;c++)if(-1!==a.indexOf(o.agents[c])){i=!0;break}if(!i&&o.pathPrefixes.length)for(c=0;c<o.pathPrefixes.length;c++)if(0===n.indexOf(o.pathPrefixes[c])){i=!0;break}if(!i&&o.paths.length)for(c=0;c<o.paths.length;c++)if(-1!==n.indexOf(o.paths[c])){i=!0;break}if(!i){n=encodeURIComponent(n);var h=e.createElement("img");h.width="1",h.height="1",h.style="display: none",h.setAttribute("aria-hidden",!0),h.src="https://apt.techtarget.com/activity/activity.gif?activityTypeId=31&cid="+t.techtargetic.client+"&version=2.1.1&ref="+n+"&r="+Date.now(),t.addEventListener("load",function(){e.body.appendChild(h)},!1)}}}}(window,document,navigator);