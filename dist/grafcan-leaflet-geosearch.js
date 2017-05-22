!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.GeoSearch=t():e.GeoSearch=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.createElement=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=document.createElement(e);return r.className=t,n&&n.appendChild(r),r};t.createScriptElement=function(e,t){var n=r("script",null,document.body);return n.setAttribute("type","text/javascript"),new Promise(function(r){window[t]=function(e){n.remove(),delete window[t],r(e)},n.setAttribute("src",e)})},t.addClassName=function(e,t){e&&!e.classList.contains(t)&&e.classList.add(t)},t.removeClassName=function(e,t){e&&e.classList.contains(t)&&e.classList.remove(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.ENTER_KEY=13,o=t.ESCAPE_KEY=27,i=t.ARROW_DOWN_KEY=40,a=t.ARROW_UP_KEY=38,s=t.ARROW_LEFT_KEY=37,u=t.ARROW_RIGHT_KEY=39;t.SPECIAL_KEYS=[r,o,i,a,s,u]},function(e,t,n){"use strict";function r(e,t){if(Function.prototype.$asyncspawn||Object.defineProperty(Function.prototype,"$asyncspawn",{value:r,enumerable:!1,configurable:!0,writable:!0}),this instanceof Function){var n=this;return new e(function(e,r){function o(t,n){var a;try{if(a=t.call(i,n),a.done){if(a.value!==e){if(a.value&&a.value===a.value.then)return a.value(e,r);e&&e(a.value),e=null}return}a.value.then?a.value.then(function(e){o(i.next,e)},function(e){o(i.throw,e)}):o(i.next,a.value)}catch(e){return r&&r(e),void(r=null)}}var i=n.call(t,e,r);o(i.next)})}}var o=function(e,t){for(var n=t.toString(),r="return "+n,o=n.match(/.*\(([^)]*)\)/)[1],i=/['"]!!!([^'"]*)['"]/g,a=[];;){var s=i.exec(r);if(!s)break;a.push(s)}return a.reverse().forEach(function(t){r=r.slice(0,t.index)+e[t[1]]+r.substr(t.index+t[0].length)}),r=r.replace(/\/\*[^*]*\*\//g," ").replace(/\s+/g," "),new Function(o,r)()}({zousan:n(15).toString(),thenable:n(14).toString()},function e(t,n){function r(){return o.apply(t,arguments)}Function.prototype.$asyncbind||Object.defineProperty(Function.prototype,"$asyncbind",{value:e,enumerable:!1,configurable:!0,writable:!0}),e.trampoline||(e.trampoline=function(e,t,n,r,o){return function i(a){for(;a;){if(a.then)return a=a.then(i,r),o?void 0:a;try{if(a.pop){if(a.length)return a.pop()?t.call(e):a;a=n}else a=a.call(e)}catch(e){return r(e)}}}}),e.LazyThenable||(e.LazyThenable="!!!thenable"(),e.EagerThenable=e.Thenable=(e.EagerThenableFactory="!!!zousan")());var o=this;switch(n){case!0:return new e.Thenable(r);case 0:return new e.LazyThenable(r);case void 0:return r.then=r,r;default:return function(){try{return o.apply(t,arguments)}catch(e){return n(e)}}}});o(),r(),e.exports={$asyncbind:o,$asyncspawn:r}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join(" ").trim()},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.handleClick,o=void 0===n?function(){}:n,s=t.classNames,c=void 0===s?{}:s;r(this,e),u.call(this),this.props={handleClick:o,classNames:c},this.selected=-1;var l=(0,i.createElement)("div",a("results",c.container)),f=(0,i.createElement)("div",a(c.item));l.addEventListener("click",this.onClick,!0),this.elements={container:l,resultItem:f}}return o(e,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this.elements,n=t.container,r=t.resultItem;this.clear(),e.forEach(function(e,t){var o=r.cloneNode(!0);o.setAttribute("data-key",t),o.innerHTML=e.label,n.appendChild(o)}),e.length>0&&(0,i.addClassName)(n,"active"),this.results=e}},{key:"select",value:function(e){var t=this.elements.container;return Array.from(t.children).forEach(function(t,n){return n===e?(0,i.addClassName)(t,"active"):(0,i.removeClassName)(t,"active")}),this.selected=e,this.results[e]}},{key:"count",value:function(){return this.results?this.results.length:0}},{key:"clear",value:function(){var e=this.elements.container;for(this.selected=-1;e.lastChild;)e.removeChild(e.lastChild);(0,i.removeClassName)(e,"active")}}]),e}(),u=function(){var e=this;this.onClick=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.target,r=e.props.handleClick,o=e.elements.container;if(n.parentNode===o&&n.hasAttribute("data-key")){var i=n.getAttribute("data-key");r({result:e.results[i]})}}};t.default=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=(function(e){e&&e.__esModule}(o),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),a=n(0),s=n(1),u=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=n.handleSubmit,i=void 0===o?function(){}:o,s=n.searchLabel,u=void 0===s?"search":s,c=n.classNames,l=void 0===c?{}:c;r(this,e);var f=(0,a.createElement)("div",["geosearch",l.container].join(" ")),d=(0,a.createElement)("form",["",l.form].join(" "),f),h=(0,a.createElement)("input",["glass",l.input].join(" "),d);h.type="text",h.placeholder=u,h.addEventListener("input",function(e){t.onInput(e)},!1),h.addEventListener("keyup",function(e){t.onKeyUp(e)},!1),h.addEventListener("keypress",function(e){t.onKeyPress(e)},!1),h.addEventListener("focus",function(e){t.onFocus(e)},!1),h.addEventListener("blur",function(e){t.onBlur(e)},!1),this.elements={container:f,form:d,input:h},this.handleSubmit=i}return i(e,[{key:"onFocus",value:function(){(0,a.addClassName)(this.elements.form,"active")}},{key:"onBlur",value:function(){(0,a.removeClassName)(this.elements.form,"active")}},{key:"onSubmit",value:function(e){return new Promise(function(t,n){var r,o,i;return e.preventDefault(),e.stopPropagation(),r=this.elements,o=r.input,i=r.container,(0,a.removeClassName)(i,"error"),(0,a.addClassName)(i,"pending"),this.handleSubmit({query:o.value}).then(function(e){return(0,a.removeClassName)(i,"pending"),t()}.$asyncbind(this,n),n)}.$asyncbind(this))}},{key:"onInput",value:function(){var e=this.elements.container;this.hasError&&((0,a.removeClassName)(e,"error"),this.hasError=!1)}},{key:"onKeyUp",value:function(e){var t=this.elements,n=t.container,r=t.input;e.keyCode===s.ESCAPE_KEY&&((0,a.removeClassName)(n,"pending"),(0,a.removeClassName)(n,"active"),r.value="",document.body.focus(),document.body.blur())}},{key:"onKeyPress",value:function(e){e.keyCode===s.ENTER_KEY&&this.onSubmit(e)}},{key:"setQuery",value:function(e){this.elements.input.value=e}}]),e}();t.default=u},function(e,t,n){(function(t){function n(e,t,n){function o(t){var n=v,r=m;return v=m=void 0,k=t,b=e.apply(r,n)}function i(e){return k=e,g=setTimeout(l,t),j?o(e):b}function u(e){var n=e-C,r=e-k,o=t-n;return _?E(o,y-r):o}function c(e){var n=e-C,r=e-k;return void 0===C||n>=t||n<0||_&&r>=y}function l(){var e=T();if(c(e))return f(e);g=setTimeout(l,u(e))}function f(e){return g=void 0,L&&v?o(e):(v=m=void 0,b)}function d(){void 0!==g&&clearTimeout(g),k=0,v=C=m=g=void 0}function h(){return void 0===g?b:f(T())}function p(){var e=T(),n=c(e);if(v=arguments,m=this,C=e,n){if(void 0===g)return i(C);if(_)return g=setTimeout(l,t),o(C)}return void 0===g&&(g=setTimeout(l,t)),b}var v,m,y,b,g,C,k=0,j=!1,_=!1,L=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,r(n)&&(j=!!n.leading,_="maxWait"in n,y=_?w(a(n.maxWait)||0,t):y,L="trailing"in n?!!n.trailing:L),p.cancel=d,p.flush=h,p}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==typeof e}function i(e){return"symbol"==typeof e||o(e)&&g.call(e)==c}function a(e){if("number"==typeof e)return e;if(i(e))return u;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=d.test(e);return n||h.test(e)?p(e.slice(2),n?2:8):f.test(e)?u:+e}var s="Expected a function",u=NaN,c="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,y=v||m||Function("return this")(),b=Object.prototype,g=b.toString,w=Math.max,E=Math.min,T=function(){return y.Date.now()};e.exports=n}).call(t,n(7))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){v&&h&&(v=!1,h.length?p=h.concat(p):m=-1,p.length&&s())}function s(){if(!v){var e=o(a);v=!0;for(var t=p.length;t;){for(h=p,p=[];++m<t;)h&&h[m].run();m=-1,t=p.length}h=null,v=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var h,p=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new u(e,t)),1!==p.length||v||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){if(!L||!L.Control||!L.Control.extend)throw new Error("Leaflet must be loaded before instantiating the GeoSearch control");for(var e=L.Control.extend(m),t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return new(Function.prototype.bind.apply(e,[null].concat(n)))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),a=r(i),s=n(4),u=r(s),c=n(0),l=n(3),f=r(l),d=n(5),h=r(d),p=n(1),v=function(){return{position:"topleft",style:"button",showMarker:!0,showPopup:!1,marker:{icon:new L.Icon.Default,draggable:!1},maxMarkers:1,retainZoomLevel:!1,animateZoom:!0,searchLabel:"Enter address",notFoundMessage:"Sorry, that address could not be found.",messageHideDelay:3e3,zoomLevel:18,classNames:{container:"leaflet-bar leaflet-control leaflet-control-geosearch",button:"leaflet-bar-part leaflet-bar-part-single",msgbox:"leaflet-bar message",form:"",input:""},autoComplete:!0,autoCompleteDelay:250,autoClose:!1}},m=Object.assign(Object.create((0,a.default)()),{initialize:function(e){var t=this;this.markers=new L.FeatureGroup,this.options=Object.assign({},v(),e);var n=this.options,r=n.style,o=n.classNames,i=n.searchLabel,a=n.autoComplete,s=n.autoCompleteDelay;"button"!==r&&(this.options.classNames.container+=" "+e.style),this.searchElement=new u.default(Object.assign({},this.options,{handleSubmit:function(e){return t.onSubmit(e)}}));var l=this.searchElement.elements,d=l.container,p=l.form,m=l.input;d.addEventListener("dblclick",function(e){e.stopPropagation()});var y=(0,c.createElement)("a",o.button,d);y.title=i,y.href="#",y.addEventListener("click",function(e){t.onClick(e)},!1),a&&(this.resultList=new f.default({handleClick:function(e){var n=e.result;m.value=n.label,t.showResult(n)}}),p.appendChild(this.resultList.elements.container),m.addEventListener("keyup",(0,h.default)(function(e){return t.autoSearch(e)},s),!0),m.addEventListener("keydown",function(e){return t.selectResult(e)},!0),m.addEventListener("keydown",function(e){return t.clearResults(e)},!0)),this.elements={button:y}},selectResult:function(e){if([p.ARROW_DOWN_KEY,p.ARROW_UP_KEY,p.ENTER_KEY].includes(e.keyCode)){e.preventDefault();var t=this.searchElement.elements.input,n=this.resultList,r=this.resultList.count()-1,o="ArrowDown"===e.code?1+~~n.selected:"ArrowUp"===e.code?~~n.selected-1:~~n.selected,i=o<0?r:o>r?0:o,a=n.select(i);t.value=a.label,e.keyCode===p.ENTER_KEY&&this.showResult(a)}}});t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(13),f=r(l),d=n(10),h=r(d),p=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"endpoint",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,n=e.protocol,r=this.options.params;return n+"//visor.grafcan.es/busquedas/toponimo/?"+this.getParamString(Object.assign({},r,{start:0,limit:20,texto:t}))}},{key:"search",value:function(e){return new Promise(function(t,n){var r,o,i,a,s;return r=e.query,o=~location.protocol.indexOf("http")?location.protocol:"https:",i=this.endpoint({query:r,protocol:o}),fetch(i).then(function(e){return a=e,a.text().then(function(e){return h.default.read(e).rows}).then(function(e){return s=e,t(this.parse({data:s}))}.$asyncbind(this,n),n)}.$asyncbind(this,n),n)}.$asyncbind(this))}},{key:"parse",value:function(e){var t=e.data;return("row"in t?[].concat(i(t.row)):[]).map(this.removeCDATA).map(function(e){return{x:parseFloat(e.x),y:parseFloat(e.y),label:e.nombre,bounds:[[parseFloat(e.y),parseFloat(e.x)],[parseFloat(e.y),parseFloat(e.x)]],raw:e}})}},{key:"removeCDATA",value:function(e){return Object.assign.apply(Object,[{}].concat(i(Object.keys(e).map(function(t){return o({},t,"#cdata"in e[t]?e[t]["#cdata"]:e[t])}))))}}]),t}(f.default);t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default={read:function(e,t){var n={at:t?"":"@",toObj:function(e){var r={};if(1==e.nodeType){if(e.attributes.length)for(var o=0;o<e.attributes.length;o++){var i=e.attributes[o].name,a=e.attributes[o].value,s=0===i.lastIndexOf("xmlns:",0);t&&s||(r[n.at+i]=(a||"").toString())}if(e.firstChild){for(var u=0,c=0,l=!1,f=e.firstChild;f;f=f.nextSibling)1==f.nodeType?l=!0:3==f.nodeType&&f.nodeValue.match(/[^ \f\n\r\t\v]/)?u++:4==f.nodeType&&c++;if(l)if(u<2&&c<2){n.removeWhite(e);for(var f=e.firstChild;f;f=f.nextSibling)3==f.nodeType?r["#text"]=n.escape(f.nodeValue):4==f.nodeType?r["#cdata"]=n.escape(f.nodeValue):r[f.nodeName]?r[f.nodeName]instanceof Array?r[f.nodeName][r[f.nodeName].length]=n.toObj(f):r[f.nodeName]=[r[f.nodeName],n.toObj(f)]:r[f.nodeName]=n.toObj(f)}else e.attributes.length?r["#text"]=n.escape(n.innerXml(e)):r=n.escape(n.innerXml(e));else if(u)e.attributes.length?r["#text"]=n.escape(n.innerXml(e)):r=n.escape(n.innerXml(e));else if(c)if(c>1)r=n.escape(n.innerXml(e));else for(var f=e.firstChild;f;f=f.nextSibling)r["#cdata"]=n.escape(f.nodeValue)}e.attributes.length||e.firstChild||(r=null)}else if(9==e.nodeType)r=n.toObj(e.documentElement);else{if(8==e.nodeType)return e.data;alert("unhandled node type: "+e.nodeType)}return r},innerXml:function(e){var t="";if("innerHTML"in e)t=e.innerHTML;else for(var n=e.firstChild;n;n=n.nextSibling)t+=function e(t){var n="";if(1==t.nodeType){n+="<"+t.nodeName;for(var r=0;r<t.attributes.length;r++){n+=" "+t.attributes[r].name+'="'+(t.attributes[r].value||"").toString()+'"'}if(t.firstChild){n+=">";for(var o=t.firstChild;o;o=o.nextSibling)n+=e(o);n+="</"+t.nodeName+">"}else n+="/>"}else 3==t.nodeType?n+=t.nodeValue:4==t.nodeType&&(n+="<![CDATA["+t.nodeValue+"]]>");return n}(n);return t},escape:function(e){return e.replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r")},removeWhite:function(e){e.normalize();for(var t=e.firstChild;t;)if(3==t.nodeType)if(t.nodeValue.match(/[^ \f\n\r\t\v]/))t=t.nextSibling;else{var r=t.nextSibling;e.removeChild(t),t=r}else 1==t.nodeType?(n.removeWhite(t),t=t.nextSibling):t=t.nextSibling;return e}};t&&(e instanceof Document&&(e=(new XMLSerializer).serializeToString(e)),e=e.replace(/<(\/?)([^:>\s]*:)?([^>]+)>/g,"<$1$3>")),e=(new DOMParser).parseFromString(e,"text/xml"),9==e.nodeType&&(e=e.documentElement);var r={};return r[e.nodeName]=n.toObj(n.removeWhite(e)),r},write:function(e){var t="";for(var n in e)t+=function e(t,n,o){var i="";if(t instanceof Array)for(var a=0,s=t.length;a<s;a++)i+=o+e(t[a],n,o+"\t")+"\n";else if("object"==(void 0===t?"undefined":r(t))){var u=!1;i+=o+"<"+n;for(var c in t)"@"==c.charAt(0)?i+=" "+c.substr(1)+'="'+t[c].toString()+'"':u=!0;if(i+=u?">":"/>",u){for(var c in t)"#text"==c?i+=t[c]:"#cdata"==c?i+="<![CDATA["+t[c]+"]]>":"@"!=c.charAt(0)&&(i+=e(t[c],c,o+"\t"));i+=("\n"==i.charAt(i.length-1)?o:"")+"</"+n+">"}}else i+=o+"<"+n+">"+t.toString()+"</"+n+">";return i}(e[n],n,"");return t}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8);Object.defineProperty(t,"GeoSearchControl",{enumerable:!0,get:function(){return r(o).default}});var i=n(9);Object.defineProperty(t,"GrafcanProvider",{enumerable:!0,get:function(){return r(i).default}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){if(!L||!L.Control||!L.Control.extend)throw new Error("Leaflet must be loaded before instantiating the GeoSearch control");for(var e=L.Control.extend(m),t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return new(Function.prototype.bind.apply(e,[null].concat(n)))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=(r(i),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});t.default=o;var s=n(5),u=r(s),c=n(4),l=r(c),f=n(3),d=r(f),h=n(0),p=n(1),v=function(){return{position:"topleft",style:"button",showMarker:!0,showPopup:!1,marker:{icon:new L.Icon.Default,draggable:!1},maxMarkers:1,retainZoomLevel:!1,animateZoom:!0,searchLabel:"Enter address",notFoundMessage:"Sorry, that address could not be found.",messageHideDelay:3e3,zoomLevel:18,classNames:{container:"leaflet-bar leaflet-control leaflet-control-geosearch",button:"leaflet-bar-part leaflet-bar-part-single",msgbox:"leaflet-bar message",form:"",input:""},autoComplete:!0,autoCompleteDelay:250,autoClose:!1}},m={initialize:function(e){var t=this;this.markers=new L.FeatureGroup,this.options=a({},v(),e);var n=this.options,r=n.style,o=n.classNames,i=n.searchLabel,s=n.autoComplete,c=n.autoCompleteDelay;"button"!==r&&(this.options.classNames.container+=" "+e.style),this.searchElement=new l.default(a({},this.options,{handleSubmit:function(e){return t.onSubmit(e)}}));var f=this.searchElement.elements,p=f.container,m=f.form,y=f.input;p.addEventListener("dblclick",function(e){e.stopPropagation()});var b=(0,h.createElement)("a",o.button,p);b.title=i,b.href="#",b.addEventListener("click",function(e){t.onClick(e)},!1),s&&(this.resultList=new d.default({handleClick:function(e){var n=e.result;y.value=n.label,t.showResult(n)}}),m.appendChild(this.resultList.elements.container),y.addEventListener("keyup",(0,u.default)(function(e){return t.autoSearch(e)},c),!0),y.addEventListener("keydown",function(e){return t.selectResult(e)},!0),y.addEventListener("keydown",function(e){return t.clearResults(e)},!0)),this.elements={button:b}},onAdd:function(e){var t=this.options,n=t.showMarker,r=t.style;if(this.map=e,n&&this.markers.addTo(e),"bar"===r){var o=this.searchElement.elements.form,i=e.getContainer().querySelector(".leaflet-control-container"),a=(0,h.createElement)("div","leaflet-control-geosearch bar");a.appendChild(o),i.appendChild(a),this.elements.container=a}return this.searchElement.elements.container},onRemove:function(){var e=this.elements.container;return e&&e.remove(),this},onClick:function(e){e.preventDefault();var t=this.searchElement.elements,n=t.container,r=t.input;n.classList.contains("active")?(0,h.removeClassName)(n,"active"):((0,h.addClassName)(n,"active"),r.focus())},selectResult:function(e){if([p.ENTER_KEY,p.ARROW_DOWN_KEY,p.ARROW_UP_KEY].includes(e.keyCode)){e.preventDefault();var t=this.searchElement.elements.input,n=this.resultList,r=this.resultList.count()-1;if(!(r<0)){var o="ArrowDown"===e.code?1+~~n.selected:"ArrowUp"===e.code?~~n.selected-1:~~n.selected,i=o<0?r:o>r?0:o,a=n.select(i);t.value=a.label,e.keyCode===p.ENTER_KEY&&this.showResult(a)}}},clearResults:function(e){e.keyCode===p.ESCAPE_KEY&&this.resultList.clear()},autoSearch:function(e){return new Promise(function(t,n){var r,o,i;return p.SPECIAL_KEYS.includes(e.keyCode)?t():(r=e.target.value,o=this.options.provider,o.search({query:r}).then(function(e){return i=e,this.resultList.render(i),t()}.$asyncbind(this,n),n))}.$asyncbind(this))},onSubmit:function(e){return new Promise(function(t,n){var r,o;return r=this.options.provider,r.search(e).then(function(e){return o=e,o&&o.length>0&&this.showResult(o[0]),t()}.$asyncbind(this,n),n)}.$asyncbind(this))},showResult:function(e){var t=this.options.autoClose,n=Object.keys(this.markers._layers);n.length>=this.options.maxMarkers&&this.markers.removeLayer(n[0]);var r=this.addMarker(e);this.centerMap(e),this.map.fireEvent("geosearch/showlocation",{location:e,marker:r}),t&&this.closeResults()},closeResults:function(){var e=this.searchElement.elements,t=e.container,n=e.input;t.classList.contains("active")&&(0,h.removeClassName)(t,"active"),n.value="",this.resultList.clear()},addMarker:function(e){var t=this.options,n=t.marker,r=t.showPopup,o=new L.Marker([e.y,e.x],n);return o.bindPopup(e.label),this.markers.addLayer(o),r&&o.openPopup(),o},centerMap:function(e){var t=this.options,n=t.retainZoomLevel,r=t.animateZoom,o=new L.LatLngBounds(e.bounds),i=o.isValid()?o:this.markers.getBounds();!n&&o.isValid()?this.map.fitBounds(i,{animate:r}):this.map.setView(i.getCenter(),this.getZoom(),{animate:r})},getZoom:function(){var e=this.options,t=e.retainZoomLevel,n=e.zoomLevel;return t?this.map.getZoom():n}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=(function(e){e&&e.__esModule}(o),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.options=t}return i(e,[{key:"getParamString",value:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}},{key:"search",value:function(e){return new Promise(function(t,n){var r,o,i,a,s;return r=e.query,o=~location.protocol.indexOf("http")?location.protocol:"https:",i=this.endpoint({query:r,protocol:o}),fetch(i).then(function(e){return a=e,a.json().then(function(e){return s=e,t(this.parse({data:s}))}.$asyncbind(this,n),n)}.$asyncbind(this,n),n)}.$asyncbind(this))}}]),e}();t.default=a},function(e,t){e.exports=function(){function e(e){return e&&e instanceof Object&&"function"==typeof e.then}function t(n,r,o){try{var i=o?o(r):r;if(n===i)return n.reject(new TypeError("Promise resolution loop"));e(i)?i.then(function(e){t(n,e)},function(e){n.reject(e)}):n.resolve(i)}catch(e){n.reject(e)}}function n(){}function r(e){}function o(e,t){this.resolve=e,this.reject=t}function i(r,o){var i=new n;try{this._resolver(function(n){return e(n)?n.then(r,o):t(i,n,r)},function(e){t(i,e,o)})}catch(e){t(i,e,o)}return i}function a(e){this._resolver=e,this.then=i}return n.prototype={resolve:r,reject:r,then:o},a.resolve=function(e){return a.isThenable(e)?e:{then:function(t){return t(e)}}},a.isThenable=e,a}},function(e,t,n){"use strict";(function(t,n){e.exports=function(e){function r(e){if(e){var t=this;e(function(e){t.resolve(e)},function(e){t.reject(e)})}}function o(e,t){if("function"==typeof e.y)try{var n=e.y.call(void 0,t);e.p.resolve(n)}catch(t){e.p.reject(t)}else e.p.resolve(t)}function i(e,t){if("function"==typeof e.n)try{var n=e.n.call(void 0,t);e.p.resolve(n)}catch(t){e.p.reject(t)}else e.p.reject(t)}e=e||"object"==typeof t&&t.nextTick||"function"==typeof n&&n||function(e){setTimeout(e,0)};var a=function(){function t(){for(;n.length-r;){try{n[r]()}catch(e){}n[r++]=void 0,r===o&&(n.splice(0,o),r=0)}}var n=[],r=0,o=1024;return function(o){n.push(o),n.length-r==1&&e(t)}}();return r.prototype={resolve:function(e){if(void 0===this.state){if(e===this)return this.reject(new TypeError("Attempt to resolve promise with self"));var t=this;if(e&&("function"==typeof e||"object"==typeof e))try{var n=0,r=e.then;if("function"==typeof r)return void r.call(e,function(e){n++||t.resolve(e)},function(e){n++||t.reject(e)})}catch(e){return void(n||this.reject(e))}this.state=o,this.v=e,t.c&&a(function(){for(var n=0,r=t.c.length;n<r;n++)o(t.c[n],e)})}},reject:function(e){if(void 0===this.state){this.state=i,this.v=e;var t=this.c;t&&a(function(){for(var n=0,r=t.length;n<r;n++)i(t[n],e)})}},then:function(e,t){var n=new r,o={y:e,n:t,p:n};if(void 0===this.state)this.c?this.c.push(o):this.c=[o];else{var i=this.state,s=this.v;a(function(){i(o,s)})}return n}},r.resolve=function(e){if(e&&e instanceof r)return e;var t=new r;return t.resolve(e),t},r.reject=function(e){if(e&&e instanceof r)return e;var t=new r;return t.reject(e),t},r.version="2.3.3-nodent",r}}).call(t,n(6),n(17).setImmediate)},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[u]=r,s(u),u++}function o(e){delete c[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(l)setTimeout(a,0,e);else{var t=c[e];if(t){l=!0;try{i(t)}finally{o(e),l=!1}}}}if(!e.setImmediate){var s,u=1,c={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),s=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},s=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;s=function(t){var n=f.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){s=function(e){setTimeout(a,0,e)}}(),d.setImmediate=r,d.clearImmediate=o}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(7),n(6))},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var o=Function.prototype.apply;t.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(16),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate}])});