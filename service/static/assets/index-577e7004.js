(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var $e,v,ii,le,hn,ri,Pt,si,tt={},oi=[],Sr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,pt=Array.isArray;function V(t,e){for(var n in e)t[n]=e[n];return t}function ai(t){var e=t.parentNode;e&&e.removeChild(t)}function ci(t,e,n){var i,r,s,o={};for(s in e)s=="key"?i=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?$e.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)o[s]===void 0&&(o[s]=t.defaultProps[s]);return Ce(t,o,i,r,null)}function Ce(t,e,n,i,r){var s={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++ii};return r==null&&v.vnode!=null&&v.vnode(s),s}function L(t){return t.children}function ge(t,e){this.props=t,this.context=e}function Ne(t,e){if(e==null)return t.__?Ne(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?Ne(t):null}function li(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return li(t)}}function Ot(t){(!t.__d&&(t.__d=!0)&&le.push(t)&&!nt.__r++||hn!==v.debounceRendering)&&((hn=v.debounceRendering)||ri)(nt)}function nt(){var t,e,n,i,r,s,o,a;for(le.sort(Pt);t=le.shift();)t.__d&&(e=le.length,i=void 0,r=void 0,o=(s=(n=t).__v).__e,(a=n.__P)&&(i=[],(r=V({},s)).__v=s.__v+1,jt(a,s,r,n.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,i,o??Ne(s),s.__h),pi(i,s),s.__e!=o&&li(s)),le.length>e&&le.sort(Pt));nt.__r=0}function ui(t,e,n,i,r,s,o,a,l,d){var c,p,f,h,g,R,b,w=i&&i.__k||oi,S=w.length;for(n.__k=[],c=0;c<e.length;c++)if((h=n.__k[c]=(h=e[c])==null||typeof h=="boolean"||typeof h=="function"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?Ce(null,h,null,null,h):pt(h)?Ce(L,{children:h},null,null,null):h.__b>0?Ce(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(f=w[c])===null||f&&h.key==f.key&&h.type===f.type)w[c]=void 0;else for(p=0;p<S;p++){if((f=w[p])&&h.key==f.key&&h.type===f.type){w[p]=void 0;break}f=null}jt(t,h,f=f||tt,r,s,o,a,l,d),g=h.__e,(p=h.ref)&&f.ref!=p&&(b||(b=[]),f.ref&&b.push(f.ref,null,h),b.push(p,h.__c||g,h)),g!=null?(R==null&&(R=g),typeof h.type=="function"&&h.__k===f.__k?h.__d=l=di(h,l,t):l=hi(t,h,f,w,g,l),typeof n.type=="function"&&(n.__d=l)):l&&f.__e==l&&l.parentNode!=t&&(l=Ne(f))}for(n.__e=R,c=S;c--;)w[c]!=null&&(typeof n.type=="function"&&w[c].__e!=null&&w[c].__e==n.__d&&(n.__d=fi(i).nextSibling),mi(w[c],w[c]));if(b)for(c=0;c<b.length;c++)_i(b[c],b[++c],b[++c])}function di(t,e,n){for(var i,r=t.__k,s=0;r&&s<r.length;s++)(i=r[s])&&(i.__=t,e=typeof i.type=="function"?di(i,e,n):hi(n,i,i,r,i.__e,e));return e}function Nt(t,e){return e=e||[],t==null||typeof t=="boolean"||(pt(t)?t.some(function(n){Nt(n,e)}):e.push(t)),e}function hi(t,e,n,i,r,s){var o,a,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==t)t.appendChild(r),o=null;else{for(a=s,l=0;(a=a.nextSibling)&&l<i.length;l+=1)if(a==r)break e;t.insertBefore(r,s),o=s}return o!==void 0?o:r.nextSibling}function fi(t){var e,n,i;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(i=fi(n)))return i}return null}function kr(t,e,n,i,r){var s;for(s in n)s==="children"||s==="key"||s in e||it(t,s,null,n[s],i);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||n[s]===e[s]||it(t,s,e[s],n[s],i)}function fn(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Sr.test(e)?n:n+"px"}function it(t,e,n,i,r){var s;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||fn(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||fn(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=n,n?i||t.addEventListener(e,s?_n:pn,s):t.removeEventListener(e,s?_n:pn,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function pn(t){return this.l[t.type+!1](v.event?v.event(t):t)}function _n(t){return this.l[t.type+!0](v.event?v.event(t):t)}function jt(t,e,n,i,r,s,o,a,l){var d,c,p,f,h,g,R,b,w,S,D,M,Y,P,X,_=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=e.__e=n.__e,e.__h=null,s=[a]),(d=v.__b)&&d(e);try{e:if(typeof _=="function"){if(b=e.props,w=(d=_.contextType)&&i[d.__c],S=d?w?w.props.value:d.__:i,n.__c?R=(c=e.__c=n.__c).__=c.__E:("prototype"in _&&_.prototype.render?e.__c=c=new _(b,S):(e.__c=c=new ge(b,S),c.constructor=_,c.render=Rr),w&&w.sub(c),c.props=b,c.state||(c.state={}),c.context=S,c.__n=i,p=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),_.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=V({},c.__s)),V(c.__s,_.getDerivedStateFromProps(b,c.__s))),f=c.props,h=c.state,c.__v=e,p)_.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(_.getDerivedStateFromProps==null&&b!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(b,S),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(b,c.__s,S)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(c.props=b,c.state=c.__s,c.__d=!1),c.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(y){y&&(y.__=e)}),D=0;D<c._sb.length;D++)c.__h.push(c._sb[D]);c._sb=[],c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(b,c.__s,S),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,h,g)})}if(c.context=S,c.props=b,c.__P=t,M=v.__r,Y=0,"prototype"in _&&_.prototype.render){for(c.state=c.__s,c.__d=!1,M&&M(e),d=c.render(c.props,c.state,c.context),P=0;P<c._sb.length;P++)c.__h.push(c._sb[P]);c._sb=[]}else do c.__d=!1,M&&M(e),d=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++Y<25);c.state=c.__s,c.getChildContext!=null&&(i=V(V({},i),c.getChildContext())),p||c.getSnapshotBeforeUpdate==null||(g=c.getSnapshotBeforeUpdate(f,h)),ui(t,pt(X=d!=null&&d.type===L&&d.key==null?d.props.children:d)?X:[X],e,n,i,r,s,o,a,l),c.base=e.__e,e.__h=null,c.__h.length&&o.push(c),R&&(c.__E=c.__=null),c.__e=!1}else s==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Cr(n.__e,e,n,i,r,s,o,l);(d=v.diffed)&&d(e)}catch(y){e.__v=null,(l||s!=null)&&(e.__e=a,e.__h=!!l,s[s.indexOf(a)]=null),v.__e(y,e,n)}}function pi(t,e){v.__c&&v.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){v.__e(i,n.__v)}})}function Cr(t,e,n,i,r,s,o,a){var l,d,c,p=n.props,f=e.props,h=e.type,g=0;if(h==="svg"&&(r=!0),s!=null){for(;g<s.length;g++)if((l=s[g])&&"setAttribute"in l==!!h&&(h?l.localName===h:l.nodeType===3)){t=l,s[g]=null;break}}if(t==null){if(h===null)return document.createTextNode(f);t=r?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,f.is&&f),s=null,a=!1}if(h===null)p===f||a&&t.data===f||(t.data=f);else{if(s=s&&$e.call(t.childNodes),d=(p=n.props||tt).dangerouslySetInnerHTML,c=f.dangerouslySetInnerHTML,!a){if(s!=null)for(p={},g=0;g<t.attributes.length;g++)p[t.attributes[g].name]=t.attributes[g].value;(c||d)&&(c&&(d&&c.__html==d.__html||c.__html===t.innerHTML)||(t.innerHTML=c&&c.__html||""))}if(kr(t,f,p,r,a),c)e.__k=[];else if(ui(t,pt(g=e.props.children)?g:[g],e,n,i,r&&h!=="foreignObject",s,o,s?s[0]:n.__k&&Ne(n,0),a),s!=null)for(g=s.length;g--;)s[g]!=null&&ai(s[g]);a||("value"in f&&(g=f.value)!==void 0&&(g!==t.value||h==="progress"&&!g||h==="option"&&g!==p.value)&&it(t,"value",g,p.value,!1),"checked"in f&&(g=f.checked)!==void 0&&g!==t.checked&&it(t,"checked",g,p.checked,!1))}return t}function _i(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){v.__e(i,n)}}function mi(t,e,n){var i,r;if(v.unmount&&v.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||_i(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(s){v.__e(s,e)}i.base=i.__P=null,t.__c=void 0}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&mi(i[r],e,n||typeof t.type!="function");n||t.__e==null||ai(t.__e),t.__=t.__e=t.__d=void 0}function Rr(t,e,n){return this.constructor(t,n)}function Pr(t,e,n){var i,r,s;v.__&&v.__(t,e),r=(i=typeof n=="function")?null:n&&n.__k||e.__k,s=[],jt(e,t=(!i&&n||e).__k=ci(L,null,[t]),r||tt,tt,e.ownerSVGElement!==void 0,!i&&n?[n]:r?null:e.firstChild?$e.call(e.childNodes):null,s,!i&&n?n:r?r.__e:e.firstChild,i),pi(s,t)}function Or(t,e,n){var i,r,s,o,a=V({},t.props);for(s in t.type&&t.type.defaultProps&&(o=t.type.defaultProps),e)s=="key"?i=e[s]:s=="ref"?r=e[s]:a[s]=e[s]===void 0&&o!==void 0?o[s]:e[s];return arguments.length>2&&(a.children=arguments.length>3?$e.call(arguments,2):n),Ce(t.type,a,i||t.key,r||t.ref,null)}function Nr(t,e){var n={__c:e="__cC"+si++,__:t,Consumer:function(i,r){return i.children(r)},Provider:function(i){var r,s;return this.getChildContext||(r=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some(function(a){a.__e=!0,Ot(a)})},this.sub=function(o){r.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),a&&a.call(o)}}),i.children}};return n.Provider.__=n.Consumer.contextType=n}$e=oi.slice,v={__e:function(t,e,n,i){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(t)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,i||{}),o=r.__d),o)return r.__E=r}catch(a){t=a}throw t}},ii=0,ge.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=V({},this.state),typeof t=="function"&&(t=t(V({},n),this.props)),t&&V(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ot(this))},ge.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ot(this))},ge.prototype.render=L,le=[],ri=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Pt=function(t,e){return t.__v.__b-e.__v.__b},nt.__r=0,si=0;var De,T,yt,mn,Dt=0,gi=[],Je=[],gn=v.__b,vn=v.__r,yn=v.diffed,bn=v.__c,In=v.unmount;function zt(t,e){v.__h&&v.__h(T,t,Dt||e),Dt=0;var n=T.__H||(T.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:Je}),n.__[t]}function z(t){return Dt=1,Dr(bi,t)}function Dr(t,e,n){var i=zt(De++,2);if(i.t=t,!i.__c&&(i.__=[n?n(e):bi(void 0,e),function(a){var l=i.__N?i.__N[0]:i.__[0],d=i.t(l,a);l!==d&&(i.__N=[d,i.__[1]],i.__c.setState({}))}],i.__c=T,!T.u)){var r=function(a,l,d){if(!i.__c.__H)return!0;var c=i.__c.__H.__.filter(function(f){return f.__c});if(c.every(function(f){return!f.__N}))return!s||s.call(this,a,l,d);var p=!1;return c.forEach(function(f){if(f.__N){var h=f.__[0];f.__=f.__N,f.__N=void 0,h!==f.__[0]&&(p=!0)}}),!(!p&&i.__c.props===a)&&(!s||s.call(this,a,l,d))};T.u=!0;var s=T.shouldComponentUpdate,o=T.componentWillUpdate;T.componentWillUpdate=function(a,l,d){if(this.__e){var c=s;s=void 0,r(a,l,d),s=c}o&&o.call(this,a,l,d)},T.shouldComponentUpdate=r}return i.__N||i.__}function Mr(t,e){var n=zt(De++,3);!v.__s&&yi(n.__H,e)&&(n.__=t,n.i=e,T.__H.__h.push(n))}function vi(t,e){var n=zt(De++,7);return yi(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Lr(){for(var t;t=gi.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Ye),t.__H.__h.forEach(Mt),t.__H.__h=[]}catch(e){t.__H.__h=[],v.__e(e,t.__v)}}v.__b=function(t){T=null,gn&&gn(t)},v.__r=function(t){vn&&vn(t),De=0;var e=(T=t.__c).__H;e&&(yt===T?(e.__h=[],T.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Je,n.__N=n.i=void 0})):(e.__h.forEach(Ye),e.__h.forEach(Mt),e.__h=[],De=0)),yt=T},v.diffed=function(t){yn&&yn(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(gi.push(e)!==1&&mn===v.requestAnimationFrame||((mn=v.requestAnimationFrame)||Ur)(Lr)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Je&&(n.__=n.__V),n.i=void 0,n.__V=Je})),yt=T=null},v.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Ye),n.__h=n.__h.filter(function(i){return!i.__||Mt(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],v.__e(i,n.__v)}}),bn&&bn(t,e)},v.unmount=function(t){In&&In(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ye(i)}catch(r){e=r}}),n.__H=void 0,e&&v.__e(e,n.__v))};var wn=typeof requestAnimationFrame=="function";function Ur(t){var e,n=function(){clearTimeout(i),wn&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(n,100);wn&&(e=requestAnimationFrame(n))}function Ye(t){var e=T,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),T=e}function Mt(t){var e=T;t.__c=t.__(),T=e}function yi(t,e){return!t||t.length!==e.length||e.some(function(n,i){return n!==t[i]})}function bi(t,e){return typeof e=="function"?e(t):e}var xr={};function Ge(t,e){for(var n in e)t[n]=e[n];return t}function $r(t,e,n){var i,r=/(?:\?([^#]*))?(#.*)?$/,s=t.match(r),o={};if(s&&s[1])for(var a=s[1].split("&"),l=0;l<a.length;l++){var d=a[l].split("=");o[decodeURIComponent(d[0])]=decodeURIComponent(d.slice(1).join("="))}t=Lt(t.replace(r,"")),e=Lt(e||"");for(var c=Math.max(t.length,e.length),p=0;p<c;p++)if(e[p]&&e[p].charAt(0)===":"){var f=e[p].replace(/(^:|[+*?]+$)/g,""),h=(e[p].match(/[+*?]+$/)||xr)[0]||"",g=~h.indexOf("+"),R=~h.indexOf("*"),b=t[p]||"";if(!b&&!R&&(h.indexOf("?")<0||g)){i=!1;break}if(o[f]=decodeURIComponent(b),g||R){o[f]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){i=!1;break}return(n.default===!0||i!==!1)&&o}function Br(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function Fr(t,e){return t.index=e,t.rank=function(n){return n.props.default?0:Lt(n.props.path).map(Hr).join("")}(t),t.props}function Lt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function Hr(t){return t.charAt(0)==":"?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var Vr={},he=[],En=[],N=null,Ii={url:Kt()},Wr=Nr(Ii);function Kt(){var t;return""+((t=N&&N.location?N.location:N&&N.getCurrentLocation?N.getCurrentLocation():typeof location<"u"?location:Vr).pathname||"")+(t.search||"")}function G(t,e){return e===void 0&&(e=!1),typeof t!="string"&&t.url&&(e=t.replace,t=t.url),function(n){for(var i=he.length;i--;)if(he[i].canRoute(n))return!0;return!1}(t)&&function(n,i){i===void 0&&(i="push"),N&&N[i]?N[i](n):typeof history<"u"&&history[i+"State"]&&history[i+"State"](null,null,n)}(t,e?"replace":"push"),wi(t)}function wi(t){for(var e=!1,n=0;n<he.length;n++)he[n].routeTo(t)&&(e=!0);return e}function jr(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return G(e)}}function zr(t){return t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault(),!1}function Kr(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button)){var e=t.target;do if(e.localName==="a"&&e.getAttribute("href")){if(e.hasAttribute("data-native")||e.hasAttribute("native"))return;if(jr(e))return zr(t)}while(e=e.parentNode)}}var Tn=!1;function Ei(t){t.history&&(N=t.history),this.state={url:t.url||Kt()}}Ge(Ei.prototype=new ge,{shouldComponentUpdate:function(t){return t.static!==!0||t.url!==this.props.url||t.onChange!==this.props.onChange},canRoute:function(t){var e=Nt(this.props.children);return this.g(e,t)!==void 0},routeTo:function(t){this.setState({url:t});var e=this.canRoute(t);return this.p||this.forceUpdate(),e},componentWillMount:function(){this.p=!0},componentDidMount:function(){var t=this;Tn||(Tn=!0,N||addEventListener("popstate",function(){wi(Kt())}),addEventListener("click",Kr)),he.push(this),N&&(this.u=N.listen(function(e){var n=e.location||e;t.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),he.splice(he.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(t,e){t=t.filter(Fr).sort(Br);for(var n=0;n<t.length;n++){var i=t[n],r=$r(e,i.props.path,i.props);if(r)return[i,r]}},render:function(t,e){var n,i,r=t.onChange,s=e.url,o=this.c,a=this.g(Nt(t.children),s);if(a&&(i=Or(a[0],Ge(Ge({url:s,matches:n=a[1]},n),{key:void 0,ref:void 0}))),s!==(o&&o.url)){Ge(Ii,o=this.c={url:s,previous:o&&o.url,current:i,path:i?i.props.path:null,matches:n}),o.router=this,o.active=i?[i]:[];for(var l=En.length;l--;)En[l]({});typeof r=="function"&&r(o)}return ci(Wr.Provider,{value:o},i)}});function rt(){return rt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},rt.apply(this,arguments)}var _e;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(_e||(_e={}));var An=function(t){return t},Sn="beforeunload",Gr="hashchange",qr="popstate";function Jr(t){t===void 0&&(t={});var e=t,n=e.window,i=n===void 0?document.defaultView:n,r=i.history;function s(){var _=Rn(i.location.hash.substr(1)),y=_.pathname,A=y===void 0?"/":y,O=_.search,B=O===void 0?"":O,F=_.hash,ke=F===void 0?"":F,Q=r.state||{};return[Q.idx,An({pathname:A,search:B,hash:ke,state:Q.usr||null,key:Q.key||"default"})]}var o=null;function a(){if(o)h.call(o),o=null;else{var _=_e.Pop,y=s(),A=y[0],O=y[1];if(h.length){if(A!=null){var B=c-A;B&&(o={action:_,location:O,retry:function(){P(B*-1)}},P(B))}}else D(_)}}i.addEventListener(qr,a),i.addEventListener(Gr,function(){var _=s(),y=_[1];bt(y)!==bt(p)&&a()});var l=_e.Pop,d=s(),c=d[0],p=d[1],f=Cn(),h=Cn();c==null&&(c=0,r.replaceState(rt({},r.state,{idx:c}),""));function g(){var _=document.querySelector("base"),y="";if(_&&_.getAttribute("href")){var A=i.location.href,O=A.indexOf("#");y=O===-1?A:A.slice(0,O)}return y}function R(_){return g()+"#"+(typeof _=="string"?_:bt(_))}function b(_,y){return y===void 0&&(y=null),An(rt({pathname:p.pathname,hash:"",search:""},typeof _=="string"?Rn(_):_,{state:y,key:Yr()}))}function w(_,y){return[{usr:_.state,key:_.key,idx:y},R(_)]}function S(_,y,A){return!h.length||(h.call({action:_,location:y,retry:A}),!1)}function D(_){l=_;var y=s();c=y[0],p=y[1],f.call({action:l,location:p})}function M(_,y){var A=_e.Push,O=b(_,y);function B(){M(_,y)}if(S(A,O,B)){var F=w(O,c+1),ke=F[0],Q=F[1];try{r.pushState(ke,"",Q)}catch{i.location.assign(Q)}D(A)}}function Y(_,y){var A=_e.Replace,O=b(_,y);function B(){Y(_,y)}if(S(A,O,B)){var F=w(O,c),ke=F[0],Q=F[1];r.replaceState(ke,"",Q),D(A)}}function P(_){r.go(_)}var X={get action(){return l},get location(){return p},createHref:R,push:M,replace:Y,go:P,back:function(){P(-1)},forward:function(){P(1)},listen:function(y){return f.push(y)},block:function(y){var A=h.push(y);return h.length===1&&i.addEventListener(Sn,kn),function(){A(),h.length||i.removeEventListener(Sn,kn)}}};return X}function kn(t){t.preventDefault(),t.returnValue=""}function Cn(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(i){return i!==n})}},call:function(n){t.forEach(function(i){return i&&i(n)})}}}function Yr(){return Math.random().toString(36).substr(2,8)}function bt(t){var e=t.pathname,n=e===void 0?"/":e,i=t.search,r=i===void 0?"":i,s=t.hash,o=s===void 0?"":s;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Rn(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function _t(){throw new Error("Cycle detected")}function Gt(){if(ve>1)ve--;else{for(var t,e=!1;Re!==void 0;){var n=Re;for(Re=void 0,Ut++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Ai(n))try{n.c()}catch(r){e||(t=r,e=!0)}n=i}}if(Ut=0,ve--,e)throw t}}var E=void 0,Re=void 0,ve=0,Ut=0,st=0;function Ti(t){if(E!==void 0){var e=t.n;if(e===void 0||e.t!==E)return e={i:0,S:t,p:E.s,n:void 0,t:E,e:void 0,x:void 0,r:e},E.s!==void 0&&(E.s.n=e),E.s=e,t.n=e,32&E.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=E.s,e.n=void 0,E.s.n=e,E.s=e),e}}function C(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}C.prototype.h=function(){return!0};C.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};C.prototype.U=function(t){if(this.t!==void 0){var e=t.e,n=t.x;e!==void 0&&(e.x=n,t.e=void 0),n!==void 0&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}};C.prototype.subscribe=function(t){var e=this;return Yt(function(){var n=e.value,i=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=i}})};C.prototype.valueOf=function(){return this.value};C.prototype.toString=function(){return this.value+""};C.prototype.toJSON=function(){return this.value};C.prototype.peek=function(){return this.v};Object.defineProperty(C.prototype,"value",{get:function(){var t=Ti(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(E instanceof se&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){Ut>100&&_t(),this.v=t,this.i++,st++,ve++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Gt()}}}});function qt(t){return new C(t)}function Ai(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Si(t){for(var e=t.s;e!==void 0;e=e.n){var n=e.S.n;if(n!==void 0&&(e.r=n),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function ki(t){for(var e=t.s,n=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):n=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}t.s=n}function se(t){C.call(this,void 0),this.x=t,this.s=void 0,this.g=st-1,this.f=4}(se.prototype=new C).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===st))return!0;if(this.g=st,this.f|=1,this.i>0&&!Ai(this))return this.f&=-2,!0;var t=E;try{Si(this),E=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return E=t,ki(this),this.f&=-2,!0};se.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}C.prototype.S.call(this,t)};se.prototype.U=function(t){if(this.t!==void 0&&(C.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};se.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};se.prototype.peek=function(){if(this.h()||_t(),16&this.f)throw this.v;return this.v};Object.defineProperty(se.prototype,"value",{get:function(){1&this.f&&_t();var t=Ti(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Xr(t){return new se(t)}function Ci(t){var e=t.u;if(t.u=void 0,typeof e=="function"){ve++;var n=E;E=void 0;try{e()}catch(i){throw t.f&=-2,t.f|=8,Jt(t),i}finally{E=n,Gt()}}}function Jt(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Ci(t)}function Qr(t){if(E!==this)throw new Error("Out-of-order effect");ki(this),E=t,this.f&=-2,8&this.f&&Jt(this),Gt()}function Be(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Be.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};Be.prototype.S=function(){1&this.f&&_t(),this.f|=1,this.f&=-9,Ci(this),Si(this),ve++;var t=E;return E=this,Qr.bind(this,t)};Be.prototype.N=function(){2&this.f||(this.f|=2,this.o=Re,Re=this)};Be.prototype.d=function(){this.f|=8,1&this.f||Jt(this)};function Yt(t){var e=new Be(t);try{e.c()}catch(n){throw e.d(),n}return e.d.bind(e)}var It;function Te(t,e){v[t]=e.bind(null,v[t]||function(){})}function ot(t){It&&It(),It=t&&t.S()}function Ri(t){var e=this,n=t.data,i=es(n);i.value=n;var r=vi(function(){for(var s=e.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return e.__$u.c=function(){e.base.data=r.peek()},Xr(function(){var o=i.value.value;return o===0?0:o===!0?"":o||""})},[]);return r.value}Ri.displayName="_st";Object.defineProperties(C.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ri},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Te("__b",function(t,e){if(typeof e.type=="string"){var n,i=e.props;for(var r in i)if(r!=="children"){var s=i[r];s instanceof C&&(n||(e.__np=n={}),n[r]=s,i[r]=s.peek())}}t(e)});Te("__r",function(t,e){ot();var n,i=e.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(r){var s;return Yt(function(){s=this}),s.c=function(){i.__$f|=1,i.setState({})},s}())),ot(n),t(e)});Te("__e",function(t,e,n,i){ot(),t(e,n,i)});Te("diffed",function(t,e){ot();var n;if(typeof e.type=="string"&&(n=e.__e)){var i=e.__np,r=e.props;if(i){var s=n.U;if(s)for(var o in s){var a=s[o];a!==void 0&&!(o in i)&&(a.d(),s[o]=void 0)}else n.U=s={};for(var l in i){var d=s[l],c=i[l];d===void 0?(d=Zr(n,l,c,r),s[l]=d):d.o(c,r)}}}t(e)});function Zr(t,e,n,i){var r=e in t&&t.ownerSVGElement===void 0,s=qt(n);return{o:function(o,a){s.value=o,i=a},d:Yt(function(){var o=s.value.value;i[e]!==o&&(i[e]=o,r?t[e]=o:o?t.setAttribute(e,o):t.removeAttribute(e))})}}Te("unmount",function(t,e){if(typeof e.type=="string"){var n=e.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var r in i){var s=i[r];s&&s.d()}}}}else{var o=e.__c;if(o){var a=o.__$u;a&&(o.__$u=void 0,a.d())}}t(e)});Te("__h",function(t,e,n,i){i<3&&(e.__$f|=2),t(e,n,i)});ge.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in e)return!0;for(var r in t)if(r!=="__source"&&t[r]!==this.props[r])return!0;for(var s in this.props)if(!(s in t))return!0;return!1};function es(t){return vi(function(){return qt(t)},[])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ts=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,d=l?t[r+2]:0,c=s>>2,p=(s&3)<<4|a>>4;let f=(a&15)<<2|d>>6,h=d&63;l||(h=64,o||(f=64)),i.push(n[c],n[p],n[f],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ts(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||d==null||p==null)throw new ns;const f=s<<2|a>>4;if(i.push(f),d!==64){const h=a<<4&240|d>>2;if(i.push(h),p!==64){const g=d<<6&192|p;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ns extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const is=function(t){const e=Pi(t);return Oi.encodeByteArray(e,!0)},Ni=function(t){return is(t).replace(/\./g,"")},Di=function(t){try{return Oi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=()=>rs().__FIREBASE_DEFAULTS__,os=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},as=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Di(t[1]);return e&&JSON.parse(e)},Xt=()=>{try{return ss()||os()||as()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cs=t=>{var e,n;return(n=(e=Xt())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Mi=()=>{var t;return(t=Xt())===null||t===void 0?void 0:t.config},Li=t=>{var e;return(e=Xt())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function us(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function ds(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fs(){const t=k();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ps(){try{return typeof indexedDB=="object"}catch{return!1}}function _s(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="FirebaseError";class oe extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ms,Object.setPrototypeOf(this,oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fe.prototype.create)}}class Fe{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?gs(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new oe(r,a,i)}}function gs(t,e){return t.replace(vs,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const vs=/\{\$([^}]+)}/g;function ys(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function at(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Pn(s)&&Pn(o)){if(!at(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Pn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function bs(t,e){const n=new Is(t,e);return n.subscribe.bind(n)}class Is{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ws(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=wt),r.error===void 0&&(r.error=wt),r.complete===void 0&&(r.complete=wt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ws(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return t&&t._delegate?t._delegate:t}class we{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ls;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(As(e))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ce){return this.instances.has(e)}getOptions(e=ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ts(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ce){return this.component?this.component.multipleInstances?e:ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ts(t){return t===ce?void 0:t}function As(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Es(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(I||(I={}));const ks={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},Cs=I.INFO,Rs={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},Ps=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Rs[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ui{constructor(e){this.name=e,this._logLevel=Cs,this._logHandler=Ps,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ks[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const Os=(t,e)=>e.some(n=>t instanceof n);let On,Nn;function Ns(){return On||(On=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ds(){return Nn||(Nn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xi=new WeakMap,xt=new WeakMap,$i=new WeakMap,Et=new WeakMap,Qt=new WeakMap;function Ms(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ie(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xi.set(n,t)}).catch(()=>{}),Qt.set(e,t),e}function Ls(t){if(xt.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xt.set(t,e)}let $t={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$i.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Us(t){$t=t($t)}function xs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Tt(this),e,...n);return $i.set(i,e.sort?e.sort():[e]),ie(i)}:Ds().includes(t)?function(...e){return t.apply(Tt(this),e),ie(xi.get(this))}:function(...e){return ie(t.apply(Tt(this),e))}}function $s(t){return typeof t=="function"?xs(t):(t instanceof IDBTransaction&&Ls(t),Os(t,Ns())?new Proxy(t,$t):t)}function ie(t){if(t instanceof IDBRequest)return Ms(t);if(Et.has(t))return Et.get(t);const e=$s(t);return e!==t&&(Et.set(t,e),Qt.set(e,t)),e}const Tt=t=>Qt.get(t);function Bs(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=ie(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ie(o.result),l.oldVersion,l.newVersion,ie(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const Fs=["get","getKey","getAll","getAllKeys","count"],Hs=["put","add","delete","clear"],At=new Map;function Dn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(At.get(e))return At.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Hs.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Fs.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let d=l.store;return i&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),r&&l.done]))[0]};return At.set(e,s),s}Us(t=>({...t,get:(e,n,i)=>Dn(e,n)||t.get(e,n,i),has:(e,n)=>!!Dn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ws(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ws(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bt="@firebase/app",Mn="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Ui("@firebase/app"),js="@firebase/app-compat",zs="@firebase/analytics-compat",Ks="@firebase/analytics",Gs="@firebase/app-check-compat",qs="@firebase/app-check",Js="@firebase/auth",Ys="@firebase/auth-compat",Xs="@firebase/database",Qs="@firebase/database-compat",Zs="@firebase/functions",eo="@firebase/functions-compat",to="@firebase/installations",no="@firebase/installations-compat",io="@firebase/messaging",ro="@firebase/messaging-compat",so="@firebase/performance",oo="@firebase/performance-compat",ao="@firebase/remote-config",co="@firebase/remote-config-compat",lo="@firebase/storage",uo="@firebase/storage-compat",ho="@firebase/firestore",fo="@firebase/firestore-compat",po="firebase",_o="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="[DEFAULT]",mo={[Bt]:"fire-core",[js]:"fire-core-compat",[Ks]:"fire-analytics",[zs]:"fire-analytics-compat",[qs]:"fire-app-check",[Gs]:"fire-app-check-compat",[Js]:"fire-auth",[Ys]:"fire-auth-compat",[Xs]:"fire-rtdb",[Qs]:"fire-rtdb-compat",[Zs]:"fire-fn",[eo]:"fire-fn-compat",[to]:"fire-iid",[no]:"fire-iid-compat",[io]:"fire-fcm",[ro]:"fire-fcm-compat",[so]:"fire-perf",[oo]:"fire-perf-compat",[ao]:"fire-rc",[co]:"fire-rc-compat",[lo]:"fire-gcs",[uo]:"fire-gcs-compat",[ho]:"fire-fst",[fo]:"fire-fst-compat","fire-js":"fire-js",[po]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Map,Ht=new Map;function go(t,e){try{t.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Me(t){const e=t.name;if(Ht.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;Ht.set(e,t);for(const n of ct.values())go(n,t);return!0}function Bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},re=new Fe("app","Firebase",vo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw re.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=_o;function Fi(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ft,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw re.create("bad-app-name",{appName:String(r)});if(n||(n=Mi()),!n)throw re.create("no-options");const s=ct.get(r);if(s){if(at(n,s.options)&&at(i,s.config))return s;throw re.create("duplicate-app",{appName:r})}const o=new Ss(r);for(const l of Ht.values())o.addComponent(l);const a=new yo(n,i,o);return ct.set(r,a),a}function bo(t=Ft){const e=ct.get(t);if(!e&&t===Ft&&Mi())return Fi();if(!e)throw re.create("no-app",{appName:t});return e}function ye(t,e,n){var i;let r=(i=mo[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(a.join(" "));return}Me(new we(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="firebase-heartbeat-database",wo=1,Le="firebase-heartbeat-store";let St=null;function Hi(){return St||(St=Bs(Io,wo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Le)}}}).catch(t=>{throw re.create("idb-open",{originalErrorMessage:t.message})})),St}async function Eo(t){try{return await(await Hi()).transaction(Le).objectStore(Le).get(Vi(t))}catch(e){if(e instanceof oe)pe.warn(e.message);else{const n=re.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pe.warn(n.message)}}}async function Ln(t,e){try{const i=(await Hi()).transaction(Le,"readwrite");await i.objectStore(Le).put(e,Vi(t)),await i.done}catch(n){if(n instanceof oe)pe.warn(n.message);else{const i=re.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pe.warn(i.message)}}}function Vi(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=1024,Ao=30*24*60*60*1e3;class So{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Co(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Un();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Ao}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Un(),{heartbeatsToSend:n,unsentEntries:i}=ko(this._heartbeatsCache.heartbeats),r=Ni(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Un(){return new Date().toISOString().substring(0,10)}function ko(t,e=To){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),xn(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),xn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Co{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ps()?_s().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Eo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ln(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ln(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xn(t){return Ni(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){Me(new we("platform-logger",e=>new Vs(e),"PRIVATE")),Me(new we("heartbeat",e=>new So(e),"PRIVATE")),ye(Bt,Mn,t),ye(Bt,Mn,"esm2017"),ye("fire-js","")}Ro("");var Po="firebase",Oo="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye(Po,Oo,"app");function Zt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Wi(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const No=Wi,ji=new Fe("auth","Firebase",Wi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Ui("@firebase/auth");function Do(t,...e){lt.logLevel<=I.WARN&&lt.warn(`Auth (${Ve}): ${t}`,...e)}function Xe(t,...e){lt.logLevel<=I.ERROR&&lt.error(`Auth (${Ve}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,...e){throw en(t,...e)}function U(t,...e){return en(t,...e)}function zi(t,e,n){const i=Object.assign(Object.assign({},No()),{[e]:n});return new Fe("auth","Firebase",i).create(e,{appName:t.name})}function Mo(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&$(t,"argument-error"),zi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function en(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ji.create(t,...e)}function m(t,e,...n){if(!t)throw en(e,...n)}function W(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xe(e),new Error(e)}function q(t,e){t||W(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lo(){return $n()==="http:"||$n()==="https:"}function $n(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lo()||ds()||"connection"in navigator)?navigator.onLine:!0}function xo(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.shortDelay=e,this.longDelay=n,q(n>e,"Short delay should be less than long delay!"),this.isMobile=us()||hs()}get(){return Uo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){q(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;W("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;W("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;W("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new We(3e4,6e4);function Gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function je(t,e,n,i,r={}){return qi(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=He(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ki.fetch()(Ji(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function qi(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},$o),e);try{const r=new Ho(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qe(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qe(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qe(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw qe(t,"user-disabled",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw zi(t,c,d);$(t,c)}}catch(r){if(r instanceof oe)throw r;$(t,"network-request-failed",{message:String(r)})}}async function Fo(t,e,n,i,r={}){const s=await je(t,e,n,i,r);return"mfaPendingCredential"in s&&$(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ji(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?tn(t.config,r):`${t.config.apiScheme}://${r}`}class Ho{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(U(this.auth,"network-request-failed")),Bo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qe(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=U(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t,e){return je(t,"POST","/v1/accounts:delete",e)}async function Wo(t,e){return je(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jo(t,e=!1){const n=ae(t),i=await n.getIdToken(e),r=nn(i);m(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Pe(kt(r.auth_time)),issuedAtTime:Pe(kt(r.iat)),expirationTime:Pe(kt(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kt(t){return Number(t)*1e3}function nn(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Xe("JWT malformed, contained fewer than 3 sections"),null;try{const r=Di(n);return r?JSON.parse(r):(Xe("Failed to decode base64 JWT payload"),null)}catch(r){return Xe("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function zo(t){const e=nn(t);return m(e,"internal-error"),m(typeof e.exp<"u","internal-error"),m(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof oe&&Ko(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Ko({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pe(this.lastLoginAt),this.creationTime=Pe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ue(t,Wo(n,{idToken:i}));m(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Yo(s.providerUserInfo):[],a=Jo(t.providerData,o),l=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yi(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function qo(t){const e=ae(t);await ut(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jo(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Yo(t){return t.map(e=>{var{providerId:n}=e,i=Zt(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e){const n=await qi(t,{},async()=>{const i=He({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Ji(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ki.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(typeof e.idToken<"u","internal-error"),m(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return m(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Xo(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new xe;return i&&(m(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(m(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(m(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xe,this.toJSON())}_performRefresh(){return W("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e){m(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fe{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Zt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Go(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ue(this,this.stsTokenManager.getToken(this.auth,e));return m(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jo(this,e)}reload(){return qo(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ut(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ue(this,Vo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,d,c;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(d=n.createdAt)!==null&&d!==void 0?d:void 0,S=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:D,emailVerified:M,isAnonymous:Y,providerData:P,stsTokenManager:X}=n;m(D&&X,e,"internal-error");const _=xe.fromJSON(this.name,X);m(typeof D=="string",e,"internal-error"),Z(p,e.name),Z(f,e.name),m(typeof M=="boolean",e,"internal-error"),m(typeof Y=="boolean",e,"internal-error"),Z(h,e.name),Z(g,e.name),Z(R,e.name),Z(b,e.name),Z(w,e.name),Z(S,e.name);const y=new fe({uid:D,auth:e,email:f,emailVerified:M,displayName:p,isAnonymous:Y,photoURL:g,phoneNumber:h,tenantId:R,stsTokenManager:_,createdAt:w,lastLoginAt:S});return P&&Array.isArray(P)&&(y.providerData=P.map(A=>Object.assign({},A))),b&&(y._redirectEventId=b),y}static async _fromIdTokenResponse(e,n,i=!1){const r=new xe;r.updateFromServerResponse(n);const s=new fe({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ut(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map;function j(t){q(t instanceof Function,"Expected a class definition");let e=Bn.get(t);return e?(q(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bn.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xi.type="NONE";const Fn=Xi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e,n){return`firebase:${t}:${e}:${n}`}class be{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Qe(this.userKey,r.apiKey,s),this.fullPersistenceKey=Qe("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new be(j(Fn),e,i);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=r[0]||j(Fn);const o=Qe(i,e.config.apiKey,e.name);let a=null;for(const d of n)try{const c=await d._get(o);if(c){const p=fe._fromJSON(e,c);d!==s&&(a=p),s=d;break}}catch{}const l=r.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new be(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new be(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(er(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nr(e))return"Blackberry";if(ir(e))return"Webos";if(rn(e))return"Safari";if((e.includes("chrome/")||Zi(e))&&!e.includes("edge/"))return"Chrome";if(tr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Qi(t=k()){return/firefox\//i.test(t)}function rn(t=k()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zi(t=k()){return/crios\//i.test(t)}function er(t=k()){return/iemobile/i.test(t)}function tr(t=k()){return/android/i.test(t)}function nr(t=k()){return/blackberry/i.test(t)}function ir(t=k()){return/webos/i.test(t)}function mt(t=k()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qo(t=k()){var e;return mt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zo(){return fs()&&document.documentMode===10}function rr(t=k()){return mt(t)||tr(t)||ir(t)||nr(t)||/windows phone/i.test(t)||er(t)}function ea(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e=[]){let n;switch(t){case"Browser":n=Hn(k());break;case"Worker":n=`${Hn(k())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ve}/${i}`}async function or(t,e){return je(t,"GET","/v2/recaptchaConfig",Gi(t,e))}function Vn(t){return t!==void 0&&t.enterprise!==void 0}class ar{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function cr(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=U("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",ta().appendChild(i)})}function na(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ia="https://www.google.com/recaptcha/enterprise.js?render=",ra="recaptcha-enterprise",sa="NO_RECAPTCHA";class oa{constructor(e){this.type=ra,this.auth=Ae(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{or(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new ar(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;Vn(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(sa)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Vn(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}cr(ia+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wn(this),this.idTokenSubscription=new Wn(this),this.beforeStateQueue=new aa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ji,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=j(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await be.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ut(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ae(e):null;return n&&m(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(j(e))})}async initializeRecaptchaConfig(){const e=await or(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ar(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new oa(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fe("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&j(e)||this._popupRedirectResolver;m(n,this,"argument-error"),this.redirectPersistenceManager=await be.create(this,[j(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return m(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Do(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ae(t){return ae(t)}class Wn{constructor(e){this.auth=e,this.observer=null,this.addObserver=bs(n=>this.observer=n)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t,e){const n=Bi(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(at(s,e??{}))return r;$(r,"already-initialized")}return n.initialize({options:e})}function ua(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(j);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function da(t,e,n){const i=Ae(t);m(i._canInitEmulator,i,"emulator-config-failed"),m(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=lr(e),{host:o,port:a}=ha(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||fa()}function lr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ha(t){const e=lr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:jn(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:jn(o)}}}function jn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fa(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return W("not implemented")}_getIdTokenResponse(e){return W("not implemented")}_linkToIdToken(e,n){return W("not implemented")}_getReauthenticationResolver(e){return W("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(t,e){return Fo(t,"POST","/v1/accounts:signInWithIdp",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="http://localhost";class J extends ur{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new J(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Zt(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new J(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ie(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ie(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ie(e,n)}buildRequest(){const e={requestUri:pa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=He(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends sn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Oe extends Se{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return m("providerId"in n&&"signInMethod"in n,"argument-error"),J._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return m(e.idToken||e.accessToken,"argument-error"),J._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Oe.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Oe.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!n&&!s||!a)return null;try{return new Oe(a)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends Se{constructor(){super("facebook.com")}static credential(e){return J._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ee.credential(e.oauthAccessToken)}catch{return null}}}ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";ee.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H extends Se{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return J._fromParams({providerId:H.PROVIDER_ID,signInMethod:H.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return H.credentialFromTaggedObject(e)}static credentialFromError(e){return H.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return H.credential(n,i)}catch{return null}}}H.GOOGLE_SIGN_IN_METHOD="google.com";H.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends Se{constructor(){super("github.com")}static credential(e){return J._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return te.credential(e.oauthAccessToken)}catch{return null}}}te.GITHUB_SIGN_IN_METHOD="github.com";te.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends Se{constructor(){super("twitter.com")}static credential(e,n){return J._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ne.credential(n,i)}catch{return null}}}ne.TWITTER_SIGN_IN_METHOD="twitter.com";ne.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await fe._fromIdTokenResponse(e,i,r),o=zn(i);return new Ee({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=zn(i);return new Ee({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function zn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends oe{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,dt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new dt(e,n,i,r)}}function dr(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dt._fromErrorAndOperation(t,s,e,i):s})}async function _a(t,e,n=!1){const i=await Ue(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ee._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Ue(t,dr(i,r,e,t),n);m(s.idToken,i,"internal-error");const o=nn(s.idToken);m(o,i,"internal-error");const{sub:a}=o;return m(t.uid===a,i,"user-mismatch"),Ee._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t,e,n=!1){const i="signIn",r=await dr(t,i,e),s=await Ee._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function va(t,e,n,i){return ae(t).onIdTokenChanged(e,n,i)}function ya(t,e,n){return ae(t).beforeAuthStateChanged(e,n)}function ba(t,e,n,i){return ae(t).onAuthStateChanged(e,n,i)}function Ia(t){return ae(t).signOut()}const ht="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ht,"1"),this.storage.removeItem(ht),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){const t=k();return rn(t)||mt(t)}const Ea=1e3,Ta=10;class fr extends hr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wa()&&ea(),this.fallbackToPolling=rr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Zo()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ta):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Ea)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fr.type="LOCAL";const Aa=fr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends hr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pr.type="SESSION";const _r=pr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new gt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async d=>d(n.origin,s)),l=await Sa(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const d=on("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(p){const f=p;if(f.data.eventId===d)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return window}function Ca(t){x().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return typeof x().WorkerGlobalScope<"u"&&typeof x().importScripts=="function"}async function Ra(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pa(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Oa(){return mr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="firebaseLocalStorageDb",Na=1,ft="firebaseLocalStorage",vr="fbase_key";class ze{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vt(t,e){return t.transaction([ft],e?"readwrite":"readonly").objectStore(ft)}function Da(){const t=indexedDB.deleteDatabase(gr);return new ze(t).toPromise()}function Wt(){const t=indexedDB.open(gr,Na);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ft,{keyPath:vr})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ft)?e(i):(i.close(),await Da(),e(await Wt()))})})}async function Kn(t,e,n){const i=vt(t,!0).put({[vr]:e,value:n});return new ze(i).toPromise()}async function Ma(t,e){const n=vt(t,!1).get(e),i=await new ze(n).toPromise();return i===void 0?null:i.value}function Gn(t,e){const n=vt(t,!0).delete(e);return new ze(n).toPromise()}const La=800,Ua=3;class yr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Ua)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gt._getInstance(Oa()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ra(),!this.activeServiceWorker)return;this.sender=new ka(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pa()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wt();return await Kn(e,ht,"1"),await Gn(e,ht),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Kn(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Ma(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=vt(r,!1).getAll();return new ze(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),La)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yr.type="LOCAL";const xa=yr;new We(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){return e?j(e):(m(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends ur{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ie(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ie(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ie(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $a(t){return ga(t.auth,new an(t),t.bypassAuthState)}function Ba(t){const{auth:e,user:n}=t;return m(n,e,"internal-error"),ma(n,new an(t),t.bypassAuthState)}async function Fa(t){const{auth:e,user:n}=t;return m(n,e,"internal-error"),_a(n,new an(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $a;case"linkViaPopup":case"linkViaRedirect":return Fa;case"reauthViaPopup":case"reauthViaRedirect":return Ba;default:$(this.auth,"internal-error")}}resolve(e){q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new We(2e3,1e4);class me extends Ir{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,me.currentPopupAction&&me.currentPopupAction.cancel(),me.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){q(this.filter.length===1,"Popup operations only handle one event");const e=on();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(U(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(U(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,me.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(U(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ha.get())};e()}}me.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="pendingRedirect",Ze=new Map;class Wa extends Ir{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Ze.get(this.auth._key());if(!e){try{const i=await ja(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Ze.set(this.auth._key(),e)}return this.bypassAuthState||Ze.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ja(t,e){const n=Er(e),i=wr(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function za(t,e){return wr(t)._set(Er(e),"true")}function Ka(t,e){Ze.set(t._key(),e)}function wr(t){return j(t._redirectPersistence)}function Er(t){return Qe(Va,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e,n){return Ga(t,e,n)}async function Ga(t,e,n){const i=Ae(t);Mo(t,e,sn),await i._initializationPromise;const r=br(i,n);return await za(r,i),r._openRedirect(i,e,"signInViaRedirect")}async function qa(t,e){return await Ae(t)._initializationPromise,Tr(t,e,!1)}async function Tr(t,e,n=!1){const i=Ae(t),r=br(i,e),o=await new Wa(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=10*60*1e3;class Ya{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xa(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ar(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(U(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ja&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jn(e))}saveEventToCache(e){this.cachedEventUids.add(Jn(e)),this.lastProcessedEventTime=Date.now()}}function Jn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ar({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xa(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ar(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(t,e={}){return je(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ec=/^https?/;async function tc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qa(t);for(const n of e)try{if(nc(n))return}catch{}$(t,"unauthorized-domain")}function nc(t){const e=Vt(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!ec.test(n))return!1;if(Za.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new We(3e4,6e4);function Yn(){const t=x().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rc(t){return new Promise((e,n)=>{var i,r,s;function o(){Yn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yn(),n(U(t,"network-request-failed"))},timeout:ic.get()})}if(!((r=(i=x().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=x().gapi)===null||s===void 0)&&s.load)o();else{const a=na("iframefcb");return x()[a]=()=>{gapi.load?o():n(U(t,"network-request-failed"))},cr(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw et=null,e})}let et=null;function sc(t){return et=et||rc(t),et}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new We(5e3,15e3),ac="__/auth/iframe",cc="emulator/auth/iframe",lc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dc(t){const e=t.config;m(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tn(e,cc):`https://${t.config.authDomain}/${ac}`,i={apiKey:e.apiKey,appName:t.name,v:Ve},r=uc.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${He(i).slice(1)}`}async function hc(t){const e=await sc(t),n=x().gapi;return m(n,t,"internal-error"),e.open({where:document.body,url:dc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lc,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=U(t,"network-request-failed"),a=x().setTimeout(()=>{s(o)},oc.get());function l(){x().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pc=500,_c=600,mc="_blank",gc="http://localhost";class Xn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vc(t,e,n,i=pc,r=_c){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fc),{width:i.toString(),height:r.toString(),top:s,left:o}),d=k().toLowerCase();n&&(a=Zi(d)?mc:n),Qi(d)&&(e=e||gc,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[h,g])=>`${f}${h}=${g},`,"");if(Qo(d)&&a!=="_self")return yc(e||"",a),new Xn(null);const p=window.open(e||"",a,c);m(p,t,"popup-blocked");try{p.focus()}catch{}return new Xn(p)}function yc(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="__/auth/handler",Ic="emulator/auth/handler",wc=encodeURIComponent("fac");async function Qn(t,e,n,i,r,s){m(t.config.authDomain,t,"auth-domain-config-required"),m(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ve,eventId:r};if(e instanceof sn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ys(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,p]of Object.entries(s||{}))o[c]=p}if(e instanceof Se){const c=e.getScopes().filter(p=>p!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),d=l?`#${wc}=${encodeURIComponent(l)}`:"";return`${Ec(t)}?${He(a).slice(1)}${d}`}function Ec({config:t}){return t.emulator?tn(t,Ic):`https://${t.authDomain}/${bc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="webStorageSupport";class Tc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_r,this._completeRedirectFn=Tr,this._overrideRedirectResult=Ka}async _openPopup(e,n,i,r){var s;q((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qn(e,n,i,Vt(),r);return vc(e,o,on())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Qn(e,n,i,Vt(),r);return Ca(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(q(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await hc(e),i=new Ya(e);return n.register("authEvent",r=>(m(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ct,{type:Ct},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Ct];o!==void 0&&n(!!o),$(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rr()||rn()||mt()}}const Ac=Tc;var Zn="@firebase/auth",ei="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cc(t){Me(new we("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;m(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sr(t)},d=new ca(i,r,s,l);return ua(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Me(new we("auth-internal",e=>{const n=Ae(e.getProvider("auth").getImmediate());return(i=>new Sc(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ye(Zn,ei,kc(t)),ye(Zn,ei,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=5*60,Pc=Li("authIdTokenMaxAge")||Rc;let ti=null;const Oc=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Pc)return;const r=n==null?void 0:n.token;ti!==r&&(ti=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Nc(t=bo()){const e=Bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=la(t,{popupRedirectResolver:Ac,persistence:[xa,Aa,_r]}),i=Li("authTokenSyncURL");if(i){const s=Oc(i);ya(n,s,()=>s(n.currentUser)),va(n,o=>s(o))}const r=cs("auth");return r&&da(n,`http://${r}`),n}Cc("Browser");const Dc="/static/assets/cool-fairy-39cd6739.gif";var Mc=0;function u(t,e,n,i,r,s){var o,a,l={};for(a in e)a=="ref"?o=e[a]:l[a]=e[a];var d={type:t,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Mc,__source:r,__self:s};if(typeof t=="function"&&(o=t.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return v.vnode&&v.vnode(d),d}function Lc(){const[t,e]=z([""]),[n,i]=z(""),[r,s]=z(!1);document.addEventListener("dialogCancel",()=>{e([]),i(""),s(!1)});function o(l){console.log(l.keyCode),l.keyCode===27?(e([]),i(""),s(!1)):l.keyCode===13?(i(""),s(!0),fetch("/assistant/chat",{body:JSON.stringify({question:n}),method:"POST",headers:{Accept:"application/json"}}).then(d=>d.json()).then(d=>{s(!1),e([d.answer.replace(/\n/g,"<br />")])})):(i(l.currentTarget.value),e([]))}function a(){for(var l="",d=0;d<t.length;d++)l+=t[d]+`
`;return l}return u("div",{class:"assistant_panel",children:[u("div",{class:"assistant_search",children:[u("svg",{class:"input_assistant_icon",fill:"#646464",width:"28px",height:"28px",viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:u("path",{d:"M9.5 9.625l-0.906 2.906-0.875-2.906-2.906-0.906 2.906-0.875 0.875-2.938 0.906 2.938 2.906 0.875zM14.563 8.031l-0.438 1.469-0.5-1.469-1.438-0.469 1.438-0.438 0.5-1.438 0.438 1.438 1.438 0.438zM0.281 24l17.906-17.375c0.125-0.156 0.313-0.25 0.531-0.25 0.281-0.031 0.563 0.063 0.781 0.281 0.094 0.063 0.219 0.188 0.406 0.344 0.344 0.313 0.719 0.688 1 1.063 0.125 0.188 0.188 0.344 0.188 0.5 0.031 0.313-0.063 0.594-0.25 0.781l-17.906 17.438c-0.156 0.156-0.344 0.219-0.563 0.25-0.281 0.031-0.563-0.063-0.781-0.281-0.094-0.094-0.219-0.188-0.406-0.375-0.344-0.281-0.719-0.656-0.969-1.063-0.125-0.188-0.188-0.375-0.219-0.531-0.031-0.313 0.063-0.563 0.281-0.781zM14.656 11.375l1.313 1.344 4.156-4.031-1.313-1.375zM5.938 13.156l-0.406 1.438-0.438-1.438-1.438-0.469 1.438-0.438 0.438-1.469 0.406 1.469 1.5 0.438zM20.5 12.063l0.469 1.469 1.438 0.438-1.438 0.469-0.469 1.438-0.469-1.438-1.438-0.469 1.438-0.438z"})}),u("input",{class:"input_assistant",value:n,onKeyUp:l=>o(l),onClick:l=>l.stopPropagation()})]}),r&&u("div",{class:"answers_panel",onClick:l=>l.stopPropagation(),children:u("img",{class:"answers_panel_thinking",src:Dc})}),t.length>0&&t[0]!=""&&u("div",{class:"answers_panel",onClick:l=>l.stopPropagation(),dangerouslySetInnerHTML:{__html:a()}})]})}const Uc="/static/assets/profile-9c208971.png";function Ke(t){var d;const[e,n]=z(!1),[i,r]=z(Uc),s="Health.io";t.user&&t.user.photoURL&&r(t.user.photoURL),document.addEventListener("dialogCancel",()=>{n(!1)});function o(){G("/sign-in")}function a(){Ia(t.auth).then(()=>{G("/")})}function l(c){c.stopPropagation(),n(!e)}return u("div",{class:"header",children:[u("span",{class:"header_left_panel1",children:s}),u("span",{class:"header_center_panel1",children:u(Lc,{})}),u("span",{class:"header_right_panel1",children:[!t.user&&u("button",{onClick:()=>o(),children:"Sign In"}),t.user&&u("img",{onClick:c=>l(c),src:i,alt:"The user.",class:"profile_button",referrerpolicy:"no-referrer"}),e&&u("div",{class:"user_menu",children:[u("div",{class:"arrow"}),u("div",{class:"menu",children:u("div",{class:"panel",children:[u("div",{class:"user_menu_panel",children:[u("div",{class:"result",children:"Admin"}),u("div",{class:"result",onClick:()=>{a()},children:"Sign out"})]}),u("div",{class:"user_email_panel",children:(d=t.user)==null?void 0:d.email})]})})]})]})]})}function xc(t){return u(L,{children:u(Ke,{user:t.user,auth:t.auth})})}function $c(t){const e=new H,n=new Oe("microsoft.com");function i(){qn(t.auth,e)}function r(){qn(t.auth,n)}return u(L,{children:[u(Ke,{user:t.user,auth:t.auth}),u("div",{class:"background",onClick:()=>history.back(),children:u("div",{class:"provider_panel",onClick:s=>s.stopPropagation(),children:["Welcome",u("div",{class:"providers",children:[u("button",{class:"provider_button",onClick:()=>i(),children:u("div",{class:"provider_button_panel",children:[u("svg",{width:"25",height:"25",children:u("g",{fill:"none","fill-rule":"evenodd",children:[u("path",{d:"M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z",fill:"#4285F4"}),u("path",{d:"M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z",fill:"#34A853"}),u("path",{d:"M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z",fill:"#FBBC05"}),u("path",{d:"M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z",fill:"#EA4335"})]})}),u("span",{class:"provider_label",children:"Sign in with Google"})]})}),u("button",{class:"provider_button",onClick:()=>r(),children:u("div",{class:"provider_button_panel",children:[u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",children:[u("path",{fill:"#f3f3f3",d:"M0 0h23v23H0z"}),u("path",{fill:"#f35325",d:"M1 1h10v10H1z"}),u("path",{fill:"#81bc06",d:"M12 1h10v10H12z"}),u("path",{fill:"#05a6f0",d:"M1 12h10v10H1z"}),u("path",{fill:"#ffba08",d:"M12 12h10v10H12z"})]}),u("span",{class:"provider_label",style:"padding-left: 8px",children:"Sign in with Microsoft"})]})}),u("button",{class:"provider_button",children:u("div",{class:"provider_button_panel",children:[u("svg",{width:"25",height:"25",class:"pl gs ah",children:u("path",{d:"M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"})}),u("span",{class:"provider_label",style:"padding-left: 6px",children:"Sign in with Email"})]})})]})]})})]})}const Bc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZShDYBADEV7BFbA3w6wAIyAwcEyhFUQxwYQBoBJMAyAOFIFuJaE5MT/qk3a/9KKb0iovcz9s0/n1Uj2IvpZAAAAAFF8TomXDB79XTvbUNEtoj31BWzubCueVwG05irAF3OWKBFZ2VC9fr7VI9IUAABCAVxeUhcea3YoUAAAAABJRU5ErkJggg==";function cn(t){return u("div",{class:"main_menu",children:[u("div",{class:"main_menu_create_button",children:[u("img",{class:"main_menu_create_icon",src:Bc}),u("span",{class:"main_menu_create_text",children:"Create Environment"})]}),u("div",{class:"main_menu_panel",children:t.children})]})}function K(t){return u(L,{children:t.item.selected?u("div",{class:"main_menu_panel_item main_menu_panel_item_selected",onClick:()=>G(t.item.route),children:[u("img",{class:"main_menu_panel_item_icon",src:t.item.icon}),u("span",{class:"main_menu_panel_item_text",children:t.item.text})]}):u("div",{class:"main_menu_panel_item",onClick:()=>G(t.item.route),children:[u("img",{class:"main_menu_panel_item_icon",src:t.item.icon}),u("span",{class:"main_menu_panel_item_text",children:t.item.text})]})})}const ln="/static/assets/box-6105aeee.svg",un="/static/assets/flask-22a94eb1.svg",dn="/static/assets/wand-878b15f8.svg";function Fc(t){return u(L,{children:[u(Ke,{user:t.user,auth:t.auth}),u(cn,{children:[u(K,{item:{id:"environments",text:"My Environments",icon:ln,route:"/home",selected:!0}}),u(K,{item:{id:"experiments",text:"My Experiments",icon:un,route:"/experiments",selected:!1}}),u(K,{item:{id:"assistant",text:"AI Assistant",icon:dn,route:"/assistant",selected:!1}})]}),u("div",{class:"main_panel",children:[u("div",{class:"main_panel_header",children:"Environments"}),u("div",{class:"main_panel_item",children:[u("div",{class:"main_panel_item_header1",children:"Team1"}),u("div",{class:"main_panel_item_header2",children:"Location: GCP Public | eu-west3"}),u("div",{class:"main_panel_item_header2",children:"CPU Cores: 120"}),u("div",{class:"main_panel_item_header2",children:"RAM: 148 GB"}),u("div",{class:"main_panel_item_header2",children:"GPUs: 4 A100"}),u("div",{class:"main_panel_item_header2",children:"TPUs: 2 v3, 8 v2"}),u("div",{class:"main_panel_item_header2",children:"Users: 84"})]}),u("div",{class:"main_panel_item",children:[u("div",{class:"main_panel_item_header1",children:"ABC Team"}),u("div",{class:"main_panel_item_header2",children:"Location: GCP Sovereign | Germany"}),u("div",{class:"main_panel_item_header2",children:"CPU Cores: 120"}),u("div",{class:"main_panel_item_header2",children:"RAM: 148 GB"}),u("div",{class:"main_panel_item_header2",children:"GPUs: 5 A100"}),u("div",{class:"main_panel_item_header2",children:"TPUs: 7 v3, 8 v2"}),u("div",{class:"main_panel_item_header2",children:"Users: 121"})]})]})]})}function Hc(t){return u(L,{children:[u(Ke,{user:t.user,auth:t.auth}),u(cn,{children:[u(K,{item:{id:"environments",text:"My Environments",icon:ln,route:"/home",selected:!1}}),u(K,{item:{id:"experiments",text:"My Experiments",icon:un,route:"/experiments",selected:!0}}),u(K,{item:{id:"assistant",text:"AI Assistant",icon:dn,route:"/assistant",selected:!1}})]}),u("div",{class:"main_panel",children:[u("div",{class:"main_panel_header",children:["Experiments ",u("span",{class:"main_panel_header_top_button",onClick:()=>G("/new-experiment"),children:"+ Create"})]}),u("table",{class:"styled-table",children:[u("thead",{children:u("tr",{children:[u("th",{children:"Name"}),u("th",{children:"Organs"}),u("th",{children:"Status"}),u("th",{children:"Last Updated"})]})}),u("tbody",{children:t.experiments.map(e=>u("tr",{children:[u("td",{children:e.Name}),u("td",{children:e.Organs}),u("td",{children:e.Status}),u("td",{children:e.LastUpdated})]}))})]})]})]})}function Rt(t){Mr(()=>{var n;t.focus&&((n=document.getElementById(t.id))==null||n.focus())},[]);function e(n){t.setValue(n)}return u("div",{class:"input_field_panel",children:[t.type=="multiline"?u("textarea",{class:"input_field",id:t.id,required:!0,rows:t.rows,value:t.value,onKeyUp:n=>{e(n.currentTarget.value)}}):u("input",{class:"input_field",type:"text",id:t.id,required:!0,value:t.value,onKeyUp:n=>{e(n.currentTarget.value)}}),u("label",{for:t.id,class:"input_field_placeholder",children:t.placeholder})]})}function ni(t){return u(L,{children:t.type=="primary"?u("button",{class:"input_button",onClick:()=>t.action(),children:t.text}):u("button",{class:"input_button input_button_secondary",onClick:()=>t.action(),children:t.text})})}function Vc(t){const[e,n]=z(""),[i,r]=z(""),[s,o]=z("");function a(){var l={Name:e,Organs:s,Status:"Created",LastUpdated:new Date().toString()};t.addExperiment(l),G("/experiments")}return u(L,{children:[u(Ke,{user:t.user,auth:t.auth}),u(cn,{children:[u(K,{item:{id:"environments",text:"My Environments",icon:ln,route:"/home",selected:!1}}),u(K,{item:{id:"experiments",text:"My Experiments",icon:un,route:"/experiments",selected:!0}}),u(K,{item:{id:"assistant",text:"AI Assistant",icon:dn,route:"/assistant",selected:!1}})]}),u("div",{class:"main_panel",children:[u("div",{class:"main_panel_header",children:"New Experiment"}),u("div",{class:"input_form",children:u("form",{id:"newExperimentForm",autocomplete:"off",children:[u(Rt,{id:"experiment_name",placeholder:"Name",focus:!0,type:"singleline",rows:1,value:e,setValue:n}),u(Rt,{id:"experiment_description",placeholder:"Description",focus:!1,type:"multiline",rows:4,value:i,setValue:r}),u(Rt,{id:"experiment_organs",placeholder:"Organs",focus:!1,type:"multiline",rows:2,value:s,setValue:o})]})}),u("div",{class:"bottom_buttons_panel",children:[u(ni,{text:"Submit",type:"primary",action:()=>a()}),u(ni,{text:"Cancel",type:"secondary",action:()=>history.back()})]})]})]})}var Wc={apiKey:"AIzaSyDWh5sExqNSMsT8Jj6-0q01j6KWL_UmX48",authDomain:"cloud32x.firebaseapp.com"};const jc=Fi(Wc),ue=Nc(jc);var de=qt(void 0);ba(ue,t=>{t?(console.log("Found user, going to home page."),de.value=t,G("/home")):(console.log("No user found."),de.value=void 0,G("/"))});qa(ue).then(t=>{console.log(t)}).catch(t=>{console.error(t)});function zc(){const t=new Event("dialogCancel");document.dispatchEvent(t)}function Kc(){const[t,e]=z([{Name:"Liver lesion test 1",Organs:"Liver",Status:"Completed",LastUpdated:"Tue Jun 13 2023 09:41:32 GMT+0200 (Central European Summer Time)"}]);function n(i){var r=t;r.push(i),e(r)}return u("div",{onClick:()=>{zc()},children:u(Ei,{history:Jr(),children:[u(xc,{path:"/",user:de.value,auth:ue}),u($c,{path:"/sign-in",user:de.value,auth:ue}),u(Fc,{path:"/home",user:de.value,auth:ue}),u(Hc,{path:"/experiments",user:de.value,auth:ue,experiments:t}),u(Vc,{path:"/new-experiment",user:de.value,auth:ue,addExperiment:n})]})})}Pr(u(Kc,{}),document.getElementById("app"));
