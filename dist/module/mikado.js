import"./event.js";import"./helper.js";import"./cache.js";import"./store.js";import"./polyfill.js";import Observer from"./array.js";import create_proxy from"./proxy.js";const{requestAnimationFrame,cancelAnimationFrame}=window;let state={};const templates={};let factory_pool={};const template_pool={},keyed_pool={};export default function Mikado(a,b,c){return this instanceof Mikado?void(!a.nodeType&&(c=b,b=a,a=null),a?this.mount(a):(this.dom=null,this.root=null,this.length=0),this.init(b,c)):new Mikado(a,b,c)}Mikado.register=Mikado.register=function(a,b){return b||(b=a,a=b.n),templates[a]=b,Mikado},Mikado.prototype.mount=function(a){return this.root!==a&&(this.key&&this.root&&(this.root._pool=this.live,this.live=a._pool||{}),this.root=a,this.check(),this.dom=a._dom||(a._dom=collection_to_array(a.children)),this.length=this.dom.length),this},Mikado.prototype.sync=function(a){if(this.root._dom=this.dom=collection_to_array(this.root.children),this.length=this.dom.length,a&&this.cache)for(let a=0;a<this.length;a++){const b=this.dom[a]._path;if(b)for(let a,c=0;c<b.length;c++)a=b[c],a._class=a._html=a._text=a._css=a._attr=null}return this},Mikado.prototype.purge=function(){if(factory_pool[this.template+(this.cache?"_cache":"")]=null,this.key)if(this.length){const a=Object.keys(this.live);for(let b,c=0,d=a.length;c<d;c++)this.key[b=a[c]]||delete this.key[b]}else this.live={};return this.tpl_pool&&(this.tpl_pool=template_pool[this.template]=[]),this.key_pool&&(this.key_pool=keyed_pool[this.template]={}),this},Mikado.prototype.index=function(a){return a._idx},Mikado.prototype.node=function(a){return this.dom[a]},Mikado.prototype.data=function(a){const b="object"==typeof a;return this.store?this.store[b?a._idx:a]:(b?a:this.dom[a])._data},Mikado.prototype.find=function(a){if(this.key){const b="object"==typeof a?a[this.key]:a;return this.live[b]}for(let b=0;b<this.length;b++)if(this.data(b)===a)return this.dom[b]},Mikado.prototype.search=function(a){const b=Object.values(a).join("^");for(let c=0;c<this.length;c++)if(Object.values(this.data(c)).join("^")===b)return this.dom[c]},Mikado.prototype.where=function(a){const b=Object.keys(a),c=b.length,d=[];for(let e,f,g=0;g<this.length;g++){e=this.data(g),f=!0;for(let d,g=0;g<c;g++)if(d=b[g],e[d]!==a[d]){f=!1;break}f&&(d[d.length]=this.dom[g])}return d},Mikado.prototype.init=function(a,b){!1,"string"==typeof a?a=templates[a]:(!b&&a&&!a.n&&(b=a,a=null),a?a.n&&Mikado.register(a):a=templates[this.template]),b||(b=this.config||{}),this.reuse=!1!==b.reuse,this.state=b.state||state,this.cache=!1!==b.cache,this.async=b.async,this.timer=0,this.on=b.on;{let a=b.store||!1!==b.store;(this.extern="object"==typeof a)?b.store=!0:a&&(a=[]),(this.observe=a instanceof Observer)&&(a.mikado=this),this.skip=!1,this.loose=!this.extern&&!1!==b.loose,this.store=!this.loose&&a}this.config=b;const c=a.n;return this.template!==c&&(this.template=c,this.static=a.d,this.vpath=null,this.update_path=null,this.stealth=!1,this.proxy=!1,this.include=null,this.factory=!1!==b.prefetch&&this.parse(a),this.check(),this.key=a.k,this.live=this.key&&{},this.tpl_pool=this.reuse&&!1!==b.pool&&(template_pool[c]||(template_pool[c]=[])),this.key_pool=this.key&&(b.keep||this.tpl_pool)&&(keyed_pool[c]||(keyed_pool[c]={})),this.size=this.tpl_pool&&b.size),this},Mikado.once=Mikado.once=function(a,b,c,d,e){const f=new Mikado(a,b);if("function"==typeof d&&(e=d,d=null),e){const a=e;e=function(){f.destroy(!0),a()}}return f.render(c,d,e),e||f.destroy(!0),Mikado},Mikado.prototype.check=function(){if(this.root){const a=this.root._tpl;a!==this.template&&(this.root._tpl=this.template,a&&(this.key&&(this.live={}),this.length=0,this.remove(0,this.length)))}return this};function collection_to_array(a){let b=a.length;const c=Array(b);for(let d,e=0;e<b;e++)d=a[e],d._idx=e,c[e]=d;return c}Mikado.prototype.create=function(a,b,c){let d=this.key;const e=d&&a[d];let f,g,h,i;if(!(d&&((g=this.key_pool)&&(f=g[e])||(f=this.live[e]))))(f=this.tpl_pool)&&f.length?(f=f.pop(),g&&(f._index=null,g[f._key]=null)):(h=1,f=this.factory);else if(i=!0,!g)d=!1;else if(g[e]=null,g=this.tpl_pool){const a=f._index;f._index=null;const b=g.pop();b!==f&&(b._index=a,g[a]=b)}if(i&&this.stealth&&!this.observe||this.apply(f,a,b,c),h){f=this.factory.cloneNode(!0);let a;(a=this.on)&&(a=a.create)&&a(f)}return d&&(f._key=e,this.live[e]=f),f},Mikado.prototype.apply=function(a,b,c,d){if(this.factory||(this.factory=a=this.parse(templates[this.template])),this.static);else{b||(b=this.store?this.store[d]:a._data),c&&this.observe&&(this.store.view=c),this.update_path(a._path||this.create_path(a),!1,b,d,c);let e;return(e=this.on)&&(e=e.change)&&a!==this.factory&&e(a),this}},Mikado.prototype.refresh=function(a,b){if(!1,this.stealth)return this;let c,d;if("number"==typeof a?d=this.dom[a]:a&&"number"==typeof(c=a._idx)?(d=a,a=c):b=a,d)return this.apply(d,null,b,a);let e=this.length;const f=this.store;if(f&&this.loose)return this.store=null,this.render(f,b);const g=f?f.length:e,h=e<g?e:g;for(let c=0;c<h;c++)this.apply(this.dom[c],null,b,c);return this},Mikado.prototype.render=function(a,b,c,d){if(!1,!d){if(b&&"object"!=typeof b&&(c=b,b=null),this.timer&&this.cancel(),c){const d=this;return this.timer=requestAnimationFrame(function(){d.timer=0,d.render(a,b,null,!0),"function"==typeof c&&c()}),this}if(this.async){const c=this;return new Promise(function(d){c.timer=requestAnimationFrame(function(){c.timer=0,c.render(a,b,null,!0),d()})})}}let e=this.length;if(!a){if(this.static)return this.dom[0]||this.add(),this;if(e)return this.refresh();if(!(a=this.store))return this}let f=a.length;if("undefined"==typeof f)a=[a],f=1;else if(!f)return this.remove(0,e);const g=(this.key_pool||!this.reuse)&&this.key;g||this.reuse||(this.remove(0,e,f),e=0);let h=e<f?e:f,i=0;if(i<h)for(;i<h;i++){const c=this.dom[i],d=a[i];if(g&&c._key!==d[g])return this.reconcile(a,b,i);this.update(c,d,b,i)}if(i<f)for(;i<f;i++)this.add(a[i],b);else f<e&&this.remove(f,e-f);return this},Mikado.prototype.reconcile=function(c,b,d){const e=this.dom,a=this.live;let f=c.length,g=e.length,h=g>f?g:f,i=0;const j=this.key;for(d||(d=0);d<h;d++){let k=!1;if(d<f){const l=c[d],m=l[j];if(!a[m]||d>=g){g++,h=g>f?g:f,this.add(l,b,d,null,!0);continue}const n=e[d],o=n._key;if(o===m){n._idx=d,this.update(n,l,b,d);continue}let p,q;for(let a=d+1;a<h;a++)if(!p&&a<g&&e[a]._key===m&&(p=a+1),!q&&a<f&&c[a][j]===o&&(q=a+1),p&&q){if(p>=q){const a=e[p-1];this.root.insertBefore(a,n),splice(e,p-1,d),a._idx=d,this.update(a,l,b,d),i++}else{const a=q-1+i;this.root.insertBefore(n,e[a]),splice(e,d,(a>g?g:a)-1),i--,d--}k=!0;break}}k||(this.remove(d,1,0,!0),g--,h=g>f?g:f,d--)}return this};function splice(a,b,c,d,e){const f=d||a[b];d&&b++;let g=b;if(b<c)for(;g<c;g++)a[g]=a[g+1];else for(;g>c;g--)a[g]=a[g-1];return e?(a.pop(),[f]):void(a[c]=f)}Mikado.prototype.add=function(a,b,c,d,e){let f;d||("number"==typeof b?(c=b,b=null,f=!0):(c||0===c)&&(f=!0));let g=d||f?c:this.length;const h=this.create(a,b,g);{let b;this.proxy&&(this.stealth&&this.loose&&h._data===a?b=!0:a._proxy||(a=create_proxy(a,h._path||this.create_path(h),this.proxy))),b||(this.store?f&&!this.extern?splice(this.store,this.length-1,g,a):(this.skip=!0,this.store[g]=a,this.skip=!1):this.loose&&(h._data=a))}if(h._idx=g,!f)d?this.root.replaceChild(h,d):(this.root.appendChild(h),this.length++),this.dom[g]=h;else if(this.root.insertBefore(h,this.dom[g]||null),splice(this.dom,this.length-1,g,h),this.length++,!e)for(;++g<this.length;)this.dom[g]._idx=g;let i;return(i=this.on)&&(i=i.insert)&&i(h),this},Mikado.prototype.clear=function(a){return this.remove(0,this.length),a&&this.purge(),this},Mikado.prototype.destroy=function(a){a&&this.unload(),this.dom=null,this.root=null,this.template=null,this.vpath=null,this.update_path=null,this.factory=null,this.length=0,this.live={},this.include=null,this.store=null},Mikado.prototype.cancel=function(){return this.timer&&(cancelAnimationFrame(this.timer),this.timer=null),this},Mikado.prototype.append=function(a,b,c){let d;"number"==typeof b?(c=b,b=null,d=!0):d=c||0===c;const e=a.length;for(let f=0;f<e;f++)this.add(a[f],b,d?c++:null);return this},Mikado.prototype.remove=function(a,b,c,d){let e=this.length;if(a&&("object"==typeof a?a=a._idx:0>a&&(a=e+a-1)),!e||a>=e)return this;0>b?(a-=b+1,0>a&&(a=0),b*=-1):b||(b=1);let f;if(!a&&b>=e){if(this.store&&!this.observe&&(this.extern?this.store.splice(0):this.store=c?Array(c):[]),this.include&&(this.key_pool||this.tpl_pool))for(let a=0;a<this.include.length;a++)this.include[a].clear();f=this.dom,b=f.length,this.root.textContent="",this.root._dom=this.dom=c?Array(c):[],e=0}else this.store&&!this.observe&&(1===b?splice(this.store,a,e-1,null,!0):this.store.splice(a,b)),f=1===b?splice(this.dom,a,e-1,null,!0):this.dom.splice(a,b),e-=b;let g;if((g=this.on)&&(g=g.remove))for(let a=0;a<b;a++)g(f[a]);if(this.length=e,!d&&a<e)for(;a<e;a++)this.dom[a]._idx=a;this.tpl_pool&&!this.key_pool&&this.cache&&1<b&&reverse(f);for(let g,h=0;h<b;h++)g=f[h],e&&this.root.removeChild(g),this.checkout(g);return this},Mikado.prototype.checkout=function(a){if(this.key){const b=a._key;this.live[b]=null,this.key_pool&&(this.key_pool[b]=a)}if(this.tpl_pool){const b=this.tpl_pool.length;(!this.size||b<this.size)&&(this.key_pool&&(a._index=b),this.tpl_pool[b]=a)}},Mikado.prototype.replace=function(a,b,c,d){"undefined"==typeof d&&("number"==typeof a?(d=a,a=this.dom[d]):d=a._idx),this.add(b,c,d,a),this.checkout(a);let e;return(e=this.on)&&(e=e.remove)&&e(a),this},Mikado.prototype.update=function(a,b,c,d){if(!1,"undefined"==typeof d&&("number"==typeof a?(d=a,a=this.dom[a]):d=a._idx),this.proxy){if(this.stealth&&(this.store?this.store[d]:a._data)===b)return this;b._proxy||(b=create_proxy(b,a._path||this.create_path(a),this.proxy))}if(this.store?(this.skip=!0,this.store[d]=b,this.skip=!1):this.loose&&(a._data=b),this.key){const c=a._key,d=b[this.key];c!==d&&(this.live[c]=null,this.live[d]=a,a._key=d)}let e;return(e=this.on)&&(e=e.update)&&e(a),this.apply(a,b,c,d)},Mikado.prototype.create_path=function(a){const b=this.vpath.length,c={},d=Array(b);for(let e,f=0;f<b;f++)e=this.vpath[f],d[f]=c[e]||resolve(a,e,c);return this.cache&&(a._cache={}),a._path=d,d};function resolve(a,b,c){for(let d=0,e=b.length,f="";d<e;d++){const e=b[d];f+=e,c[f]?a=c[f]:(">"===e?a=a.firstElementChild:"+"===e?a=a.nextElementSibling:"|"===e&&(a=a.firstChild),c[f]=a)}return a}let tmp_fn,last_conditional,root_node;Mikado.prototype.parse=function(a,b,c,d){if(!b){const b=factory_pool[a.n+(this.cache?"_cache":"")];if(b)return this.update_path=b.update_path,this.static=b.static,this.stealth=b.stealth,this.proxy=b.proxy,this.include=b.include,this.vpath=b.vpath,b.node}const e=document.createElement(a.t||"div");b||(b=0,c="&",tmp_fn="",this.vpath=[],e._path=d=[],this.cache&&(e._cache={}),root_node=e);let f=a.s,g=a.i,h=a.x,i=a.h;const j=a.a,k=a.e;let l=a.c;const m=a.j;let n=this.vpath.length,o=0,p=0,q="";if(m&&(q+=";"+m,-1<q.indexOf("self")&&(o=2)),a.f&&(tmp_fn+=";if("+a.f+"){self.hidden=false",o=2),l)if("object"==typeof l){let a=l[1];l=l[0],q+=this.cache?";v="+l+";if(self._class!==v){self._class=v;self.className=v}":";self.className="+l,a&&(init_proxy(this,l,["_class",n]),p++),o++}else e.className=l;if(j||k){let a;if(j&&(a=Object.keys(j)),k){const b=Object.keys(k);a=a?a.concat(b):b}for(let b=0;b<a.length;b++){const c=a[b];let d;if((!j||"undefined"==typeof(d=j[c]))&&(d=k[c],this.listen(c)),"object"==typeof d){let a=d[1];d=d[0],q+=this.cache?";v="+d+";var _a=self._attr||(self._attr={});if(_a['"+c+"']!==v){_a['"+c+"']=v;self.setAttribute('"+c+"',v)}":";self.setAttribute('"+c+"',"+d+")",a&&(init_proxy(this,d,["_attr",n,c]),p++),o++}else e.setAttribute(c,d)}}if(f)if("string"==typeof f)e.style.cssText=f;else if(f.length){let a=f[1];f=f[0],q+=this.cache?";v="+f+";if(self._css!==v){self._css=v;(self._style||(self._style=self.style)).cssText=v}":";self.style.cssText="+f,a&&(init_proxy(this,f,["_css",n]),p++),o++}if(a["@"]||a.r){this.include||(this.include=[]);let b=a["@"]||a.i;a["@"]||(b.n=a["@"]=this.template+"@"+this.include.length,a.i=null),g=null,q+=";this.include["+this.include.length+"].mount(self).render("+a.r+(a.m?".slice("+(0<=a.m?"0,"+a.m:a.m)+")":"")+",view)";const c=tmp_fn;tmp_fn="",this.include.push(new Mikado(e,b,Object.assign({},this.config,{store:!1,async:!1}))),tmp_fn=c,o++}else if(!g)if(a["+"])g=templates[a["+"]];else if(h){let a;const b="object"==typeof h;b&&(a=h[1],h=h[0]);let f=document.createTextNode(h);if(b){o&&n++,this.vpath[n]=c+"|",d[n]=f;const b=this.cache?";v="+h+";if(self._text!==v){self._text=v;self.nodeValue=v}":";self.nodeValue="+h;concat_path(o,b,n,this.cache),a&&(init_proxy(this,h,["_text",n]),p++),o&&n--}e.appendChild(f)}else if(i)if("object"==typeof i){let a=i[1];i=i[0],q+=this.cache?";v="+i+";if(self._html!==v){self._html=v;self.innerHTML=v}":";self.innerHTML="+i,a&&(init_proxy(this,i,["_html",n]),p++),o++}else e.innerHTML=i;if(o?(this.vpath[n]=c,d[n]=e,this.static=!1,o==p&&(this.stealth=!0),concat_path(o,q,n,this.cache)):q&&(tmp_fn+=q),tmp_fn+="",g){let a;if(g.length){let f=">";for(let h,j=0;j<g.length;j++)j&&(f+="+"),h=g[j],(a=h["+"])&&(h=templates[a]),e.appendChild(this.parse(h,b+j+1,c+f,d))}else(a=g["+"])&&(g=templates[a]),e.appendChild(this.parse(g,b+1,c+">",d))}if(a.f&&(tmp_fn+="}else "+(1<o?"self":"p["+n+"]")+".hidden=true"),!b){!this.static&&tmp_fn&&(this.update_path=Function("p","s","data","index","view","\"use strict\";var self,v"+tmp_fn));{const b={update_path:this.update_path,static:this.static,vpath:this.vpath,node:e};b.include=this.include,b.proxy=this.proxy,b.stealth=this.stealth,factory_pool[a.n+(this.cache?"_cache":"")]=b}}return e};function init_proxy(a,b,c){a.proxy||(a.proxy={}),(a.proxy[b]||(a.proxy[b]=[])).push(c)}function concat_path(a,b,c,d){tmp_fn+=d||1<a?";self=p["+c+"]"+b:b.replace(/self/g,"p["+c+"]")}Mikado.prototype.load=function(a,b){const c=this,d=new XMLHttpRequest;return d.overrideMimeType("application/json"),d.open("GET",a,!1!==b),d.onload=function(){let a=this.responseText;if(a){let d;try{const b=JSON.parse(a);Mikado.register(b),c instanceof Mikado&&c.init(b)}catch(a){d=a}"function"==typeof b&&b(d)}},d.send(),this},Mikado.load=Mikado.prototype.load,Mikado.prototype.unload=function(a){return a?"object"==typeof a&&(a=a.n):a=this.template,a&&(templates[a]=null,template_pool[a]=keyed_pool[a]=factory_pool[a]=null,factory_pool[a+"_cache"]=null),this},Mikado.unregister=Mikado.prototype.unregister=Mikado.unload=Mikado.prototype.unload;function reverse(a){const b=a.length;for(let c,d=0;d<(0|b/2);d++)c=a[d],a[d]=a[b-d-1],a[b-d-1]=c;return a}