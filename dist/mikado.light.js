/**
 * Mikado.js v0.2.4 (Light)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var k;var l={store:!1,loose:!0,cache:!0,async:!1,reuse:!0},v={},z={};function A(a,b,d){a.nodeType||(d=b,b=a,a=null);b||(d=a);a?this.mount(a):(this.f=this.b=null,this.length=0);this.init(b,d)}var B=A.register=function(a,b){b||(b=a,a=b.n);z[a]=b;return A},C=A.new=function(a,b,d){return new A(a,b,d)};k=A.prototype;k.mount=function(a){this.f!==a&&(this.f=a,D(this),this.b=a._d||(a._d=E(a.children)),this.length=this.b.length);return this};
k.sync=function(){this.f._d=this.b=E(this.f.children);this.length=this.b.length;return this};k.index=function(a){return a._i};k.node=function(a){return this.b[a]};k.item=function(a){return this.A?this.b[a]._m:this.store[a]};k.init=function(a,b){this.w=b=b?Object.assign({},this.w||l,b):l;"string"===typeof a?a=z[a]:B(a);this.cache=b.cache;this.v=b.reuse;this.state=b.state||v;this.m!==a&&(this.m=a.n,this.o=this.g=null,this.l=!0,this.u=F(this,a),D(this));return this};
A.once=function(a,b,d,c,g){C(a,b).render(d,c,g).destroy(!0);return A};function D(a){if(a.f){var b=a.f._t;b!==a.m&&(a.f._t=a.m,b&&a.clear())}}function E(a){for(var b=a.length,d=Array(b),c=0,g;c<b;c++)g=a[c],g._i=c,d[c]=g;return d}k=A.prototype;k.create=function(a,b,d){var c=this.u;this.l||this.o(c._p,c._cache,a,d,b);return c.cloneNode(!0)};
k.render=function(a,b){"function"===typeof b&&(b=null);if(this.l)this.b[0]||this.add();else if(a||this.A){a&&"undefined"===typeof a.length&&(a=[a]);var d=a?a.length:this.length;if(!d)return this.clear();this.v||this.clear(d);for(var c=0;c<d;c++)c<this.length?this.update(this.b[c],a[c],b,c):this.add(a[c],b,this.f);if(d<this.length)for(a=this.b.splice(d),this.length=d,d=a.length,b=0;b<d;b++)this.f.removeChild(a[b])}return this};
k.add=function(a,b,d){var c=this.length;a=this.create(a,b,c);a._i=c;(d||this.f).appendChild(a);this.b[c]=a;this.length++;return this};k.clear=function(a){this.f._d=this.b=a?Array(a):[];this.f.textContent="";this.length=0;return this};k.destroy=function(a){a&&this.unload();this.u=this.o=this.g=this.f=this.b=null};k.append=function(a,b){for(var d=a.length,c=0;c<d;c++)this.add(a[c],b);return this};
k.remove=function(a){if("number"===typeof a){var b=a;a=this.b[b]}else b=a._i;this.b.splice(b,1);this.f.removeChild(a);this.length--;for(a=b;a<this.length;a++)this.b[a]._i=a;return this};k.replace=function(a,b,d,c){"undefined"===typeof c&&(c=a._i);b=this.create(b,d,c);b._i=c;this.f.replaceChild(b,a);this.b[c]=b;return this};k.update=function(a,b,d,c){this.o(a._p||G(this,a),a._cache,b,c,d);return this};
function G(a,b){for(var d=a.g.length,c={},g=Array(d),e=0;e<d;e++){var n=a.g[e],u=e,f;if(!(f=c[n])){f=b;for(var m="",t=0;t<n.length;t++){var h=n[t];m+=h;c[m]?f=c[m]:(">"===h?f=f.firstElementChild:"+"===h?f=f.nextElementSibling:"|"===h&&(f=f.firstChild),c[m]=f)}}g[u]=f}b._p=g;b._cache={};return g}var H;
function F(a,b,d,c,g){var e=document.createElement(b.t||"div");d||(d=0,c="&",H="",a.g=[],e._p=g=[],e._cache={});var n=b.s,u=b.i,f=b.x,m=b.h,t=b.a,h=b.c,q=b.j;b=a.g.length;var p=0,r="";q&&(r+=";"+q,-1<r.indexOf("self")&&(a.g[b]=c,g[b]=e,p=2));h&&("object"===typeof h?(r+=a.cache?";v="+h[0]+";if(s._c"+b+"!==v){s._c"+b+"=v;self.className=v}":";self.className="+h[0],a.g[b]=c,g[b]=e,p++):e.className=h);if(t){h=Object.keys(t);for(q=0;q<h.length;q++){var w=h[q],y=t[w];if("object"===typeof y){r+=a.cache?";v="+
y[0]+";if(s['_a_"+w+b+"']!==v){s['_a_"+w+b+"']=v;self.setAttribute('"+w+"',v)}":";self.setAttribute('"+w+"',"+y[0]+")";var x=!0;p++}else e.setAttribute(w,y)}x&&(a.g[b]=c,g[b]=e)}if(n)if("string"===typeof n)e.style.cssText=n;else if(n.length)r+=a.cache?";v="+n[0]+";if(s._cs"+b+"!==v){s._cs"+b+"=v;(self._s||(self._s=self.style)).cssText=v}":";self.style.cssText="+n[0],a.g[b]=c,g[b]=e,p++;else{t=Object.keys(n);for(x=0;x<t.length;x++)if(h=t[x],q=n[h],"object"===typeof q){r+=a.cache?";v="+q[0]+";if(s['_s_"+
h+b+"']!==v){s['_s_"+h+b+"']=v;(self._s||(self._s=self.style)).setProperty('"+h+"',v)}":";self.style.setProperty('"+h+"',"+q[0]+")";var J=!0;p++}else e.style.setProperty(h,q);J&&(a.g[b]=c,g[b]=e)}u||(f?(c+="|",(n="object"===typeof f)&&(f=f[0]),m=document.createTextNode(f),n&&(p&&(I(p,r,b,a.cache),r="",b++),r+=a.cache?";v="+f+";if(s._x"+b+"!==v){s._x"+b+"=v;self.nodeValue=v}":";self.nodeValue="+f,a.g[b]=c,g[b]=m,p++),e.appendChild(m)):m&&("object"===typeof m?(m=m[0],r+=a.cache?";v="+m+";if(s._h"+b+
"!==v){s._h"+b+"=v;self.innerHTML=v}":";self.innerHTML="+m,a.g[b]=c,g[b]=e,p++):e.innerHTML=m));p&&(a.l=!1,I(p,r,b,a.cache));if(u)if(u.length)for(f=">",b=0;b<u.length;b++)b&&(f+="+"),p=u[b],e.appendChild(F(a,p,d+b+1,c+f,g));else e.appendChild(F(a,u,d+1,c+">",g));d||a.l||!H||(a.o=Function("p","s","item","index","view",'"use strict";var self,v'+H));return e}function I(a,b,d,c){H=c||1<a?H+(";self=p["+d+"]"+b):H+b.replace(/self/g,"p["+d+"]")}A.prototype.unload=function(a){a||(a=this.m);a&&(z[a]=null)};
A.unload=A.prototype.unload;(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return A}):(b=a.modules)?b.mikado=A:"object"===typeof a.exports?a.module.exports=A:a.Mikado=A})();}).call(this);
