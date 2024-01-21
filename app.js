!function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);u.length;)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},s=[];var a={};var i={1670:function(){return{"./brotli_wasm_bg.js":{__wbindgen_is_undefined:function(e){return r[1561].exports.e(e)},__wbindgen_is_object:function(e){return r[1561].exports.d(e)},__wbindgen_string_new:function(e,t){return r[1561].exports.i(e,t)},__wbindgen_json_serialize:function(e,t){return r[1561].exports.f(e,t)},__wbg_new_59cb74e423758ede:function(){return r[1561].exports.b()},__wbg_stack_558ba5917b466edd:function(e,t){return r[1561].exports.c(e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return r[1561].exports.a(e,t)},__wbindgen_object_drop_ref:function(e){return r[1561].exports.g(e)},__wbindgen_rethrow:function(e){return r[1561].exports.h(e)}}}}};function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=function(e){return c.p+""+({1:"react-monaco-editor",3:"zstd"}[e]||e)+".bundle.js"}(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}o[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return({4:[1670]}[e]||[]).forEach((function(e){var n=a[e];if(n)t.push(n);else{var r,o=i[e](),s=fetch(c.p+""+{1670:"79cebba2bf1d37e07303"}[e]+".module.wasm");if(o instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(s),o]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(s,o);else{r=s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,o)}))}t.push(a[e]=r.then((function(t){return c.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e},c.w={};var l=this.webpackJsonp=this.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;s.push([1484,2]),n()}({100:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var r=n(2),o=n(20);const s=Object(r.j)(o.b)`
    border-radius: 0;
    margin-bottom: 0;

    flex-basis: auto;
    flex-shrink: 1;
    flex-grow: 0; /* Overridden below, so only the bodies expand */
    min-height: 0;

    box-shadow: 0 -2px 5px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,a=Object(r.j)(s)`
    /* This is required to force the editor to shrink to fit, instead of going
       beyond the limits of the column when other item is expanded and pushes it down */
    overflow-y: hidden;

    flex-grow: ${e=>e.collapsed?"0":"1"};

    ${e=>!e.collapsed&&"\n        /* When we're open, we want space more than any siblings */\n        flex-grow: 9999999;\n\n        /* If we're open, never let us get squeezed to nothing: */\n        min-height: 25vh;\n\n        /* Fixed size required to avoid editor resize thrashing */\n        flex-basis: 50%;\n    "}
`},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r extends Error{constructor(e,t,n){super(`API error during ${t}: ${e}`),this.operationName=t,this.errorCode=n}}},1022:function(e,t){},1024:function(e,t){},1052:function(e,t){},1054:function(e,t){},1055:function(e,t){},1060:function(e,t){},1062:function(e,t){},1069:function(e,t){},1088:function(e,t){},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n(4),s=n(1),a=n(5),i=n(73),c=n(2),l=n(36),d=n(24),u=n(21),p=n(131),h=n(127),m=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const g=c.j.div`
    overflow-y: auto;
    max-height: ${e=>e.expanded?"100%":"560px"}
`,f=c.j.div`
    display: flex;
    justify-content: center;

    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            align-items: stretch;\n        ":"\n            height: 100%;\n            align-items: center;\n        "}
`;let b=class extends r.Component{constructor(e){super(e),this.editorOptions={readOnly:!0},Object(s.reaction)(()=>{try{return this.renderedContent}catch(e){}},e=>{e&&!Object(l.b)(e)&&requestAnimationFrame(()=>{var e,t;null===(t=(e=this.props).onContentRendered)||void 0===t||t.call(e)})},{fireImmediately:!0})}get formatter(){return p.a[this.props.contentType]||p.a.text}get contentBuffer(){return o.isString(this.props.children)?Object(u.l)(this.props.children):this.props.children}get renderedContent(){if(!Object(p.b)(this.formatter))return;const{cache:e}=this.props,t=this.formatter.cacheKey,n=e.get(t),r=n||this.formatter.render(this.contentBuffer);if(n||e.set(t,r),"string"==typeof r)return r;if("fulfilled"===r.state)return r.value;if("rejected"===r.state)throw r.value;return r}render(){if(!Object(p.b)(this.formatter)){const e=this.formatter,t="scrollable"===e.layout?g:"centered"===e.layout?f:Object(d.d)(e.layout);return r.createElement(t,{expanded:this.props.expanded},r.createElement(e.Component,{content:this.contentBuffer,rawContentType:this.props.rawContentType}))}try{const e=this.renderedContent;return Object(l.b)(e)?r.createElement(h.b,{height:"500px"}):r.createElement(i.b,{contentId:this.props.contentId,node:this.props.editorNode,options:this.editorOptions,language:this.formatter.language,value:e,schema:this.props.schema,expanded:this.props.expanded})}catch(e){return r.createElement("div",null,"Failed to render ",this.props.contentType," content:",r.createElement("br",null),Object(d.b)(e).toString())}}};m([s.computed],b.prototype,"formatter",null),m([s.computed],b.prototype,"contentBuffer",null),m([s.computed],b.prototype,"renderedContent",null),b=m([a.e],b)},1100:function(e,t){},1103:function(e,t){},111:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g}));var r=n(4),o=n(0),s=n(1),a=n(5),i=n(2),c=n(13),l=n(7),d=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const u=i.j.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 2fr;
`,p=Object(i.j)(u)`
    grid-template-columns: 1fr 2fr min-content;

    > :last-child {
        grid-column: 2 / span 2;
    }
`,h=Object(i.j)(c.a)`
    font-size: ${e=>e.theme.textSize};
    padding: 3px 10px 5px;
`;let m=class extends o.Component{render(){const{pairs:e,className:t}=this.props;return o.createElement(u,{className:t},r.flatMap(e,({key:e,value:t},n)=>[o.createElement(c.e,{value:e,readOnly:!0,spellCheck:!1,key:n+"-key"}),o.createElement(c.e,{value:t,readOnly:!0,spellCheck:!1,key:n+"-val"})]))}};m=d([a.e],m);let g=class extends o.Component{constructor(){super(...arguments),this.containerRef=o.createRef(),this.values=r.cloneDeep(this.props.pairs),this.lastValuesLength=this.values.length,this.convert=e=>this.props.convertResult?this.props.convertResult(e):e,this.onChangeValues=e=>{const{props:{transformInput:t,onChange:n},convert:r}=this;this.values=t?t(e):e;const o=this.values.length===this.lastValuesLength+1;this.lastValuesLength=this.values.length,o&&requestAnimationFrame(()=>{const e=this.containerRef.current,t=null==e?void 0:e.querySelector("input:last-child");null==t||t.scrollIntoView({block:"nearest",behavior:"smooth"})}),n(r(this.values))}}componentDidMount(){Object(a.c)(this,Object(s.reaction)(()=>this.props.pairs,e=>{r.isEqual(this.convert(e),this.convert(this.values))||(this.values=r.cloneDeep(e),this.lastValuesLength=this.values.length)}))}render(){const{keyTitle:e,keyPattern:t,keyPlaceholder:n,valuePlaceholder:a,allowEmptyValues:i}=this.props,{values:d,onChangeValues:u,containerRef:m}=this;return o.createElement(p,{ref:m},r.flatMap(d,({key:n,value:r,disabled:a},p)=>[o.createElement(c.e,{value:n,required:!0,pattern:t,title:e,disabled:a,spellCheck:!1,key:p+"-key",onChange:Object(s.action)(e=>{e.target.reportValidity(),d[p].key=e.target.value,u(d)})}),o.createElement(c.e,{value:r,required:!i,disabled:a,spellCheck:!1,key:p+"-val",onChange:Object(s.action)(e=>{e.target.reportValidity(),d[p].value=e.target.value,u(d)})}),o.createElement(h,{key:p+"-del",disabled:a,onClick:Object(s.action)(()=>{d.splice(p,1),u(d)})},o.createElement(l.b,{icon:["far","trash-alt"]}))]).concat([o.createElement(c.e,{value:"",pattern:t,placeholder:n,spellCheck:!1,key:d.length+"-key",onChange:Object(s.action)(e=>{let t=e.target.value;t&&d.push({key:t,value:""}),u(d)})}),o.createElement(c.e,{value:"",placeholder:a,spellCheck:!1,key:d.length+"-val",onChange:Object(s.action)(e=>{e.target.value&&d.push({key:"",value:e.target.value}),u(d)})})]))}};d([s.observable],g.prototype,"values",void 0),g=d([a.e],g)},1167:function(e,t){},118:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var r,o=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function s(e){return o(this,void 0,void 0,(function*(){return"undefined"==typeof window?"service-worker":e in window?window[e]:new Promise(t=>{window.addEventListener("message",n=>{n.data[e]&&t(n.data[e])})})}))}const a=null!==(r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:{}).desktopApi)&&void 0!==r?r:{}},119:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return f}));var r=n(4),o=n(575),s=n(69),a=n(2),i=n(7);function c(e){return e?" "+e.split(".").slice(0,2).join(".").replace(/\.0$/,""):""}const l=e=>{const t=r(e.os).values().some(),n=r(e.browser).values().some(),o=r.upperFirst(e.ua.split(" ")[0]);if(t||n){const s=t?` (${r.upperFirst(e.os.name)}${c(e.os.version)})`:"";return(n?(e.browser.name||"")+c(e.browser.version):o)+s}return o};function d(e){const t=e[0].toLowerCase();return"a"===t||"e"===t||"i"===t||"o"===t||"u"===t?"an ":"a "}const u=e=>{if(!e.browser.name&&!e.os.name&&!e.device.type)return;const t=e.browser.name?e.browser.name+c(e.browser.version)+(e.engine.name?`, based on the ${e.engine.name}${"Blink"!==e.engine.name?c(e.engine.version):""} engine`:""):e.engine.name?`a browser built on the ${e.engine.name}${c(e.engine.version)} engine`:"",n=(e.device.vendor?e.device.vendor+" ":"")+(e.device.model?e.device.model+" ":"")+(e.device.type?"mobile"===e.device.type?"mobile phone":e.device.type+" ":""),r=e.os.name?`running ${e.os.name}${c(e.os.version)}`:"",o=e.cpu.architecture?`${d(e.cpu.architecture)}${e.cpu.architecture} CPU`:"",s=(n?`${d(n)}${n}`:"")+(n&&r?", ":"")+r+(o?(n||r?", with ":" using ")+o:"");return`This request came from ${t?t+(s?". The device is "+s:""):n?s:"a device "+s}.`},p=e=>!(!e||!r.has(i.c,e)),h=e=>{const t=Object(s.get)(e,"browser","name");if(p(t))return i.c[t];const n=e.ua.match(/[A-Za-z]+/g)||[],o=r.find(n.map(e=>r.upperFirst(e.toLowerCase())),e=>p(e));return o?i.c[o]:i.c.Unknown};const m={ua:"",summary:"Unknown client",icon:i.c.Unknown},g={ua:"",summary:"HTTP Toolkit",description:"Sent manually from HTTP Toolkit",icon:{icon:["far","paper-plane"],color:a.i}},f=e=>{if(!e)return m;const t=new o.UAParser(e).getResult();return function(e){const t=e.ua.match(/Electron\/(\S+)/);t&&(e.engine=e.browser||e.engine,e.browser={name:"Electron",version:t[1],major:t[1].split(".")[0]})}(t),{ua:t.ua,summary:l(t),description:u(t),icon:h(t)}}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(0),o=n(2),s=n(7),a=n(20);const i=Object(o.j)(e=>r.createElement("div",{className:e.className},r.createElement(s.b,{spin:!0,icon:["fac","spinner-arc"],size:"8x"})))`
    ${e=>e.height&&o.f`
        height: ${e.height};
    `}

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,c=e=>r.createElement(a.b,Object.assign({},e),e.children,r.createElement(i,{height:e.height?e.height:e.expanded?"auto":"550px"}))},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return y}));var r=n(4),o=n(1),s=n(12),a=n(15),i=n(55),c=n(29),l=n(18),d=n(255);const u=(e,t,n)=>{const o=Object(c.h)(e),s=t[o];if(!s)throw new Error("Can't load unrecognized rule type: "+o);return Object(i.a)(s)?a.e(s,e,()=>{},n):r.create(s.prototype,e)},p=a.d(e=>{const t=r.cloneDeep(Object(o.toJS)(e));return t.matchers=t.matchers.map(e=>Object(i.a)(e)?a.n(e):e),"steps"in t?t.steps=t.steps.map(e=>Object(i.a)(e)?a.n(e):e):(Object(i.a)(t.handler)&&(t.handler=a.n(t.handler)),"completionChecker"in t&&Object(i.a)(t.completionChecker)&&(t.completionChecker=a.n(t.completionChecker))),t},(e,t)=>Object.assign(Object.assign({id:e.id,type:e.type,title:e.title,activated:e.activated,matchers:e.matchers.map(e=>u(e,c.d,t.args))},"steps"in e?{steps:e.steps.map(e=>u(e,c.b,t.args))}:{handler:u(e.handler,c.b,t.args)}),{completionChecker:"completionChecker"in e&&u(e.completionChecker,s.completionCheckers.CompletionCheckerLookup,t.args)})),h=a.d(e=>Object(l.k)(e)?a.n(m,e):p.serializer(e),(e,t,n,r)=>{if(Object(l.k)(e)){const n=a.e(m,e,r,t.args);return n.collapsed=!0,n}return p.deserializer(e,r,t,n)}),m=a.c({id:a.k(),title:a.k(),items:a.g(h)}),g=a.c({id:a.k(),title:a.k(),version:Object(i.b)(()=>{}),isRoot:a.j(a.k()),items:a.g(h)}),f=e=>a.n(g,e),b=(e,t)=>a.e(g,Object(d.a)(e),void 0,t),y="application/htkrules+json;charset=utf-8"},13:function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return h}));var r=n(2);const o=r.f`
    &[disabled] {
        cursor: default;
    }

    &:not([disabled]) {
        cursor: pointer;
        &:hover {
            background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
        }

        &:active {
            background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.05) 40%, transparent);
        }
    }
`,s=r.j.button.attrs(()=>({type:"button"}))`
    /* Reset styles that get broken because <button> overrides them: */
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    &[disabled] {
        cursor: default;
    }

    &:not([disabled]) {
        cursor: pointer;
    }
`,a=s.withComponent("a"),i=r.f`
    -webkit-appearance: none;
    cursor: pointer;
    padding: 15px 36px;
    border-radius: 4px;
    border: none;

    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.headingSize};

    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: inherit;
    line-height: normal;

    ${o}
`,c=r.j.button`
    ${i}

    /*
     * Need both to ensure link button colours have higher
     * specificity than the a:visited default.
     */
    &, &:visited {
        color: ${e=>e.theme.primaryInputColor};
    }

    &[disabled] {
        background-color: ${e=>e.theme.containerWatermark};
    }

    &:not([disabled]) {
        background-color: ${e=>e.theme.primaryInputBackground};
    }
`;c.defaultProps={type:"button"};const l=c.withComponent("a"),d=r.j.button.attrs(()=>({type:"button"}))`
    ${i}

    background-color: transparent;

    &, &:visited {
        color: ${e=>e.theme.secondaryInputColor};
    }

    border-width: 2px;
    border-style: solid;

    &[disabled] {
        color: ${e=>e.theme.containerWatermark};
        border-color: ${e=>e.theme.containerWatermark};
    }

    &:not([disabled]) {
        border-color: ${e=>e.theme.secondaryInputBorder};
    }
`,u=r.f`
    border-color: ${e=>e.theme.warningColor};
    background-color: ${e=>e.theme.warningBackground};
    color: ${e=>e.theme.mainColor};
`,p=r.j.input.attrs(e=>({type:e.type||"text"}))`
    font-size: ${e=>e.theme.textInputFontSize};
    padding: 5px 10px;
    border-radius: 4px;
    border: solid 1px ${e=>e.theme.inputBorder};

    min-width: 20px; /* Without this, editable headers especially refuse to shrink */

    background-color: ${e=>e.theme.inputBackground};
    &:hover:not(:disabled) {
        background-color: ${e=>e.theme.inputHoverBackground};
    }

    color: ${e=>e.theme.inputColor};

    &:disabled {
        opacity: 0.6;
    }

    &:invalid {
        ${u}
    }

    &:read-only {
        cursor: default;
        outline: none;
    }

    ${e=>e.invalid&&u}
`,h=r.j.select`
    ${o}

    font-size: ${e=>e.theme.headingSize};
    font-family: ${e=>e.theme.fontFamily};

    width: 100%;
    border-radius: 4px;
`},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n(131),s=n(51),a=n(44),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const c=e=>{const{format:t,content:n,onFormatted:c}=e,l=o.a[t],d=!!l&&Object(o.b)(l)&&["json","html","xml","javascript","css"].includes(t);return r.createElement(a.a,{className:e.className,title:d?"Format as "+Object(s.d)(e.format):"",disabled:!d,icon:["fas","align-left"],onClick:()=>i(void 0,void 0,void 0,(function*(){c(yield l.render(n))}))})}},131:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(2),o=n(36),s=n(21),a=n(61),i=n(0),c=n(111);const l=Object(r.j)(e=>i.createElement("img",{className:e.className,src:`data:${e.rawContentType||""};base64,${e.content.toString("base64")}`}))`
    display: block;
    max-width: 100%;
    margin: 0 auto;
    object-fit: scale-down;
`;function d(e){return!!e.language}const u=e=>t=>Object(o.d)(Object(a.d)(t,e)),p={raw:{language:"text",cacheKey:Symbol("raw"),render:e=>{if(!(e.byteLength<2e3))return Object(o.d)(Object(a.d)(e,"raw"));try{return e.toString("hex").replace(/(\w\w)/g,"$1 ").trimRight()}catch(e){return Object(o.d)(Promise.reject(e))}}},text:{language:"text",cacheKey:Symbol("text"),render:e=>Object(s.c)(e)},base64:{language:"text",cacheKey:Symbol("base64"),render:u("base64")},markdown:{language:"markdown",cacheKey:Symbol("markdown"),render:u("markdown")},yaml:{language:"yaml",cacheKey:Symbol("yaml"),render:u("yaml")},html:{language:"html",cacheKey:Symbol("html"),render:u("html")},xml:{language:"xml",cacheKey:Symbol("xml"),render:u("xml")},json:{language:"json",cacheKey:Symbol("json"),render:e=>{if(!(e.byteLength<1e4))return Object(o.d)(Object(a.d)(e,"json"));{const t=Object(s.c)(e);try{return JSON.stringify(JSON.parse(t),null,2)}catch(e){return t}}}},javascript:{language:"javascript",cacheKey:Symbol("javascript"),render:u("javascript")},css:{language:"css",cacheKey:Symbol("css"),render:u("css")},"url-encoded":{layout:"scrollable",Component:Object(r.j)(e=>{const t=[...new URLSearchParams(e.content)].map(([e,t])=>({key:e,value:t}));return i.createElement(c.b,{className:e.className,pairs:t})}).attrs(e=>({content:Object(s.c)(e.content)}))`
            padding: 5px;
        `},image:{layout:"centered",Component:l}}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"h",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"i",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"j",(function(){return b}));var r=n(4),o=n(0),s=n(2),a=n(7),i=n(84);const c=s.j.h2`
    text-transform: uppercase;
    opacity: ${e=>e.theme.lowlightTextOpacity};

    display: inline-block;
    margin-right: 5px;
`,l=s.j.div`
    display: inline-block;
`,d=Object(s.j)(c)`
    padding: 3px 0 0;
    margin: 0 0 5px 0;
    min-height: 26px;
    display: block;
    box-sizing: border-box;
`,u=s.j.div`
    padding: 3px 0 11px;
    width: 100%;

    &:last-child {
        padding-bottom: 0;
    }

    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    line-height: 1.1;
`,p=Object(s.j)(u)`
    display: inline;
`,h=s.j.span`
    font-family: ${e=>e.theme.monoFontFamily};
    font-size: 90%;
    user-select: all;
    font-weight: bold;

    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
`,m=s.j.div`
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-style: italic;
    display: inline-block;
`,g=e=>o.createElement(f,Object.assign({},r.omit(e,"content"),{dangerouslySetInnerHTML:e.content})),f=s.j.div`
    line-height: 1.3;

    p, li, ul, ol, table, h1, h2, h3, h4, h5, h6, pre {
        margin-bottom: 10px;
    }

    p::first-letter,
    li::first-letter,
    h1::first-letter,
    h2::first-letter,
    h3::first-letter,
    h4::first-letter,
    h5::first-letter,
    h6::first-letter {
        text-transform: capitalize;
    }

    ol, ul {
        padding-left: 20px;
    }

    ol {
        list-style: decimal;
    }

    ul {
        list-style: circle;
    }

    table {
        border-collapse: unset;
        border-spacing: 5px;
        margin-left: -5px;
    }

    th {
        min-width: 80px;
    }

    code {
        word-break: break-all; /* Fallback for anybody without break-word */
        word-break: break-word;
        font-family: ${e=>e.theme.monoFontFamily};
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
        margin-bottom: 10px;
    }

    pre {
        white-space: pre-wrap;
        display: block;
        border-left: 3px solid ${e=>e.theme.containerWatermark};
        padding-left: 8px;
    }

    img {
        max-width: 100%;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }

    :last-child :last-child {
        margin-bottom: 0;
    }
`,b=e=>e.content?o.createElement(g,{content:Object(i.a)(e.content.replace(/:suggestion:/g,a.f).replace(/:warning:/g,a.g))}):null},144:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return E}));var r=n(4),o=n(43),s=n(652),a=n(89),i=n(21),c=n(16),l=n(24),d=n(9),u=n(50),p=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const h=new TextDecoder("utf8",{fatal:!0});function m(e,t={bodySizeLimit:5e5}){return p(this,void 0,void 0,(function*(){const[n,s]=r.partition(e,e=>e.isHttp()),a=s.filter(e=>e.isTlsFailure()),i=function(e){const t=r.groupBy(e,e=>e.request.source.summary);return r.map(t,(e,t)=>{const n=Math.min(...e.map(e=>{var t;return null!==(t=e.timingEvents.startTime)&&void 0!==t?t:Date.now()}),Date.now());return{id:t,title:t,startedDateTime:o.format(n),pageTimings:{}}})}(n),c=yield Promise.all(n.map(e=>function(e,t){var n,r,s;return p(this,void 0,void 0,(function*(){const{timingEvents:a}=e,i=null!==(n=a.startTime)&&void 0!==n?n:Date.now(),c=a.bodyReceivedTimestamp?a.bodyReceivedTimestamp-a.startTimestamp:0,d=a.bodyReceivedTimestamp&&a.headersSentTimestamp?a.headersSentTimestamp-a.bodyReceivedTimestamp:0,u=a.responseSentTimestamp?a.responseSentTimestamp-a.headersSentTimestamp:0,p=null!==(s=null!==(r=a.wsClosedTimestamp)&&void 0!==r?r:a.responseSentTimestamp)&&void 0!==s?s:a.abortedTimestamp,h=p?p-a.startTimestamp:-1;return Object.assign({pageref:e.request.source.summary,startedDateTime:o.format(i),time:h,request:yield b(e.request,!0,t),response:yield v(e,t),cache:{},timings:{blocked:-1,dns:-1,connect:-1,ssl:-1,send:Math.max(c,0),wait:Math.max(d,0),receive:Math.max(u,0)},_pinned:e.pinned||void 0},e.isWebSocket()?{_resourceType:"websocket",_webSocketMessages:e.messages.map(e=>function(e,t){return{type:"sent"===e.direction?"receive":"received"===e.direction?"send":Object(l.d)(e.direction),opcode:e.isBinary?2:1,data:e.isBinary?e.content.toString("base64"):e.content.toString("utf8"),time:(t.startTime+(e.timestamp-t.startTimestamp))/1e3}}(e,a)),_webSocketClose:e.closeState&&"aborted"!==e.closeState?{code:e.closeState.closeCode,reason:e.closeState.closeReason,timestamp:a.wsClosedTimestamp?a.wsClosedTimestamp/1e3:void 0}:e.closeState}:{})}))}(e,t))),u=a.map(x);return{log:{version:"1.2",creator:{name:"HTTP Toolkit",version:d.y},pages:i,entries:c,_tlsErrors:u}}}))}function g(e){return r.map(e,(e,t)=>({name:t,value:r.isArray(e)?e.join(","):e}))}function f(e){return r(e).keyBy(e=>e.name).mapKeys((e,t)=>t.toLowerCase()).mapValues(e=>e.value).value()}function b(e,t,n){if(t&&(!e.body.decodedPromise.state||"pending"===e.body.decodedPromise.state))return e.body.decodedPromise.then(()=>b(e,!1,n));const r={method:e.method,url:e.parsedUrl.toString(),httpVersion:"HTTP/"+(e.httpVersion||"1.1"),cookies:[],headers:g(e.headers),queryString:Array.from(e.parsedUrl.searchParams.entries()).map(([e,t])=>({name:e,value:t})),headersSize:-1,bodySize:e.body.encoded.byteLength};if(e.body.decoded)if(e.body.decoded.byteLength>n.bodySizeLimit)r._requestBodyStatus="discarded:too-large",r.comment=`Body discarded during HAR generation: longer than limit of ${n.bodySizeLimit} bytes`;else try{r.postData=function(e,t){if(!e)return;if("application/x-www-form-urlencoded"===t){let n;try{n=a.parse(e)}catch(t){console.log("Failed to parse url encoded body",e)}return n?{mimeType:t,params:y(n),text:e}:{mimeType:t,text:e}}return{mimeType:t,text:e}}(h.decode(e.body.decoded),Object(c.h)(e.headers["content-type"])||"application/octet-stream")}catch(t){if(!(t instanceof TypeError))throw t;r._requestBodyStatus="discarded:not-representable",r._content={text:e.body.decoded.toString("base64"),size:e.body.decoded.byteLength,encoding:"base64"}}else r._requestBodyStatus="discarded:not-decodable";return r}function y(e){return r.flatMap(Object.entries(e),([e,t])=>r.isString(t)?[[e,t]]:t.map(t=>[e,t])).map(([e,t])=>({name:e,value:t}))}function v(e,t){var n;return p(this,void 0,void 0,(function*(){const{request:r,response:o}=e;if(!o||"aborted"===o)return{status:0,statusText:"",httpVersion:"",headers:[],cookies:[],content:{size:0,mimeType:"application/x-unknown"},redirectURL:"",headersSize:-1,bodySize:-1};const s=yield o.body.decodedPromise;let a;try{a=!s||s.byteLength>t.bodySizeLimit?{comment:`Body discarded during HAR generation: longer than limit of ${t.bodySizeLimit} bytes`}:{text:h.decode(s)}}catch(e){a={text:s.toString("base64"),encoding:"base64"}}return{status:o.statusCode,statusText:o.statusMessage,httpVersion:"HTTP/"+(r.httpVersion||"1.1"),cookies:[],headers:g(o.headers),content:Object.assign({mimeType:Object(c.h)(o.headers["content-type"])||"application/octet-stream",size:(null===(n=o.body.decoded)||void 0===n?void 0:n.byteLength)||0},a),redirectURL:"",headersSize:-1,bodySize:o.body.encoded.byteLength||0}}))}function x(e){var t;const n=null!==(t=e.timingEvents)&&void 0!==t?t:{},r="startTime"in n?n.startTime:new Date,s="failureTimestamp"in n?n.failureTimestamp-n.connectTimestamp:0;return{startedDateTime:o.format(r),time:s,cause:e.failureCause,hostname:e.upstreamHostname,clientIPAddress:e.remoteIpAddress,clientPort:e.remotePort}}const w=(e,...t)=>r.sumBy(t,t=>{const n=Number(e[t]);return!n||n<0?0:n});function E(t){return p(this,void 0,void 0,(function*(){const n=yield s.har(function(e){var t,n,o,s;(null!==(n=null===(t=null==e?void 0:e.log)||void 0===t?void 0:t.entries)&&void 0!==n?n:[]).forEach(e=>{var t,n,o,s,a,i,c,l,d,p,h,m,g,f,b,y,v,x;if(delete e.serverIPAddress,e.request&&(null!==(t=(p=e.request).headersSize)&&void 0!==t||(p.headersSize=-1),e.request.postData&&(null!==(n=(h=e.request.postData).mimeType)&&void 0!==n||(h.mimeType="application/octet-stream")),e.request.cookies=[]),e.timings&&(null!==(o=(m=e.timings).send)&&void 0!==o||(m.send=-1),null!==(s=(g=e.timings).wait)&&void 0!==s||(g.wait=-1),null!==(a=(f=e.timings).receive)&&void 0!==a||(f.receive=-1)),e.response){if(null!==(i=(b=e.response).redirectURL)&&void 0!==i||(b.redirectURL=""),null!==(c=(y=e.response).headersSize)&&void 0!==c||(y.headersSize=-1),null==e.response.statusText&&(e.response.statusText=Object(u.d)(e.response.status)),null===e.response.bodySize){const t=r.find(e.response.headers||[],({name:e})=>"content-length"===e.toLowerCase());e.response.bodySize=t?parseInt(t.value,10):-1}e.response.content&&(null!==(l=(v=e.response.content).size)&&void 0!==l||(v.size=-1),null!==(d=(x=e.response.content).mimeType)&&void 0!==d||(x.mimeType="application/octet-stream")),e.response.cookies=[]}e.cache={}});return((s=(o=e===null||e===void 0?void 0:e.log)===null||o===void 0?void 0:o.pages)!==null&&s!==void 0?s:[]).forEach(e=>{void 0===e.title&&(e.title=e.id),e.pageTimings={}}),e}(t)),a=r.random(1e6)+"-",i=[],c=[];return n.log.entries.forEach((t,n)=>{var r,s,l;const d=a+n,u="websocket"===t._resourceType,p={startTime:o.parse(t.startedDateTime).getTime(),startTimestamp:0,bodyReceivedTimestamp:w(t.timings,"blocked","dns","connect","send"),headersSentTimestamp:w(t.timings,"blocked","dns","connect","send","wait")};Object.assign(p,0!==t.response.status?{responseSentTimestamp:t.time}:{abortedTimestamp:t.time},u?{wsAcceptedTimestamp:p.headersSentTimestamp,wsClosedTimestamp:t.time}:{});const h=function(e,t,n){const r=new URL(t.url);return{id:e,timingEvents:n,tags:[],matchedRuleId:!1,protocol:t.url.split(":")[0],method:t.method,url:t.url,path:r.pathname,hostname:r.hostname,headers:f(t.headers),rawHeaders:t.headers.map(e=>[e.name,e.value]),body:{decoded:t._content?C(t._content):T(t.postData),encodedLength:t.bodySize}}}(d,t.request,p);if(i.push({type:u?"websocket-request":"request",event:h}),0!==t.response.status?i.push({type:u&&101===t.response.status?"websocket-accepted":"response",event:j(d,t.response,p)}):i.push({type:"abort",event:h}),u){i.push(...null!==(s=null===(r=t._webSocketMessages)||void 0===r?void 0:r.map(t=>({type:"websocket-message-"+("send"===t.type?"received":"sent"),event:{streamId:h.id,direction:"send"===t.type?"received":"sent",isBinary:2===t.opcode,content:e.from(t.data,2===t.opcode?"base64":"utf8"),eventTimestamp:1e3*t.time-p.startTime,timingEvents:p,tags:[]}})))&&void 0!==s?s:[]);const n=t._webSocketClose;n&&"aborted"!==n?i.push({type:"websocket-close",event:{streamId:h.id,closeCode:n.code,closeReason:null!==(l=n.reason)&&void 0!==l?l:"",timingEvents:p,tags:[]}}):i.push({type:"abort",event:h})}t._pinned&&c.push(d)}),n.log._tlsErrors&&i.push(...n.log._tlsErrors.map(e=>({type:"tls-client-error",event:{failureCause:e.cause,hostname:e.hostname,remoteIpAddress:e.clientIPAddress,remotePort:e.clientPort,tags:[],timingEvents:{startTime:o.parse(e.startedDateTime).getTime(),connectTimestamp:0,failureTimestamp:e.time}}}))),{events:i,pinnedIds:c}}))}function C(t){if(t.encoding&&e.isEncoding(t.encoding))return e.from(t.text,t.encoding);throw TypeError("Invalid encoding")}function T(e){return(null==e?void 0:e.text)?Object(i.l)(e.text,"utf8"):(null==e?void 0:e.params)?Object(i.l)(a.stringify(r(e.params).groupBy(({name:e})=>e).mapValues(e=>e.map(e=>e.value||"")).valueOf())):Object(i.l)("")}function j(t,n,r){return{id:t,timingEvents:r,tags:[],statusCode:n.status,statusMessage:n.statusText,headers:f(n.headers),rawHeaders:n.headers.map(e=>[e.name,e.value]),body:{decoded:e.from(n.content.text||"",n.content.encoding||"utf8"),encodedLength:n.bodySize&&-1!==n.bodySize?n.bodySize:0}}}}).call(this,n(25).Buffer)},145:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return C}));var r=n(4),o=n(1),s=n(21),a=n(24),i=n(36),c=n(16),l=n(26),d=n(119),u=n(51),p=n(90),h=n(29),m=n(252),g=n(650),f=n(61),b=n(260),y=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},v=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function x(e){try{return Object.assign(new URL(e.url,`${e.protocol}://${e.hostname||"unknown.invalid"}`),{parseable:!0})}catch(t){console.log("Unparseable URL:",e.url)}}function w(e){try{return Object.assign(new URL("/[unparseable]",`${e.protocol}://${e.hostname||"unknown.invalid"}`),{parseable:!1})}catch(e){return Object.assign(new URL("http://unparseable.invalid/"),{parseable:!1})}}class E{constructor(e,t){this.decodedPromise=Object(i.c)(()=>v(this,void 0,void 0,(function*(){if(this._decoded)return this._decoded;const e=this.encoded,t=e.byteLength;this._encoded=Object(s.f)(t);try{const{decoded:t,encoded:n}=yield Object(f.b)(e,this._contentEncoding);return this._encoded=n,t}catch(e){return Object(l.c)(e),e.inputBuffer&&(this._encoded=e.inputBuffer),void Object(o.runInAction)(()=>{this.decodingError=e})}}))),"body"in e&&e.body?"buffer"in e.body?this._encoded=e.body.buffer:(this._encoded=Object(s.f)(e.body.encodedLength),this._decoded=e.body.decoded):this._encoded=Object(s.l)(""),this._contentEncoding=Object(c.c)(t["content-encoding"])}get encoded(){return this._encoded}get decoded(){return this.decodedPromise.value}cleanup(){const t=e.from([]);this._decoded=void 0,this._encoded=t,this.decodingError=void 0,this.decodedPromise=Object(i.d)(Promise.resolve(t))}}y([o.observable],E.prototype,"decodingError",void 0);class C extends p.a{constructor(e,t){super(),this._apiPromise=Object(i.c)(()=>v(this,void 0,void 0,(function*(){const e=yield this._apiMetadataPromise;if(e){yield Object(o.when)(()=>this.isCompletedRequest());try{if("openapi"===e.type)return new m.a(e,this);if("openrpc"===e.type)return yield Object(g.a)(e,this);throw console.log("Unknown API metadata type for host",this.request.parsedUrl.hostname),console.log(e),new a.a(e,e=>e.type)}catch(e){throw Object(l.c)(e),e}}}))),this.request=function(e){try{return Object.assign(e,{parsedUrl:x(e)||w(e),source:e.tags.includes("httptoolkit:manually-sent-request")?d.a:Object(d.c)(e.headers["user-agent"]),body:new E(e,e.headers),contentType:Object(u.e)(Object(c.h)(e.headers["content-type"]))||"text",cache:o.observable.map(new Map,{deep:!1})})}catch(t){throw console.log(`Failed to parse request for ${e.url} (${e.protocol}://${e.hostname})`),t}}(t),this.timingEvents=t.timingEvents,this.tags=this.request.tags,this.id=this.request.id,this.searchIndex=[this.request.url,this.request.parsedUrl.protocol+"//"+this.request.parsedUrl.hostname+this.request.parsedUrl.pathname+this.request.parsedUrl.search].concat(...r.map(this.request.headers,(e,t)=>`${t}: ${e}`)).concat(this.request.method).join("\n").toLowerCase(),this._apiMetadataPromise=e.getApi(this.request)}get httpVersion(){return"2.0"===this.request.httpVersion?2:1}isHttp(){return!0}isCompletedRequest(){return void 0!==this.matchedRule}isCompletedExchange(){return!!this.response}isSuccessfulExchange(){return this.isCompletedExchange()&&"aborted"!==this.response}hasRequestBody(){return this.isCompletedRequest()&&this.request.body.encoded.byteLength>0}hasResponseBody(){return this.isSuccessfulExchange()&&this.response.body.encoded.byteLength>0}updateFromCompletedRequest(e,t){if(e.body instanceof E)throw new Error("Can't update from already-processed request");this.request.body=new E(e,e.headers),this.matchedRule=!!t&&("handler"in t?{id:t.id,handlerStepTypes:[Object(h.h)(t.handler)]}:{id:t.id,handlerStepTypes:t.steps.map(h.h)}),Object.assign(this.timingEvents,e.timingEvents),this.tags=r.union(this.tags,e.tags)}markAborted(e){var t;this.response="aborted",this.searchIndex+="\naborted",Object.assign(this.timingEvents,e.timingEvents),this.tags=r.union(this.tags,e.tags),"error"in e&&(null===(t=e.error)||void 0===t?void 0:t.message)&&(this.abortMessage=e.error.message),this.requestBreakpoint&&(this.requestBreakpoint.reject(new Error("Request aborted whilst breakpointed at request")),this._requestBreakpoint=void 0),this.responseBreakpoint&&(this.responseBreakpoint.reject(new Error("Request aborted whilst breakpointed at response")),this._responseBreakpoint=void 0)}setResponse(e){this.response=function(e){return Object.assign(e,{body:new E(e,e.headers),contentType:Object(u.e)(Object(c.h)(e.headers["content-type"]))||"text",cache:o.observable.map(new Map,{deep:!1})})}(e),Object.assign(this.timingEvents,e.timingEvents),this.tags=r.union(this.tags,e.tags),this.searchIndex=[this.searchIndex,e.statusCode.toString(),e.statusMessage.toString(),...r.map(e.headers,(e,t)=>`${t}: ${e}`)].join("\n").toLowerCase();const t=this._apiPromise;this._apiPromise=Object(i.c)(()=>t.then(e=>(e&&e.updateWithResponse(this.response),e)))}cleanup(){this.cache.clear(),this.request.cache.clear(),this.request.body.cleanup(),this.isSuccessfulExchange()&&(this.response.cache.clear(),this.response.body.cleanup())}get api(){if("fulfilled"===this._apiPromise.state)return this._apiPromise.value}get requestBreakpoint(){return this._requestBreakpoint}get responseBreakpoint(){return this._responseBreakpoint}get isBreakpointed(){return this.requestBreakpoint||this.responseBreakpoint}triggerRequestBreakpoint(e){return v(this,void 0,void 0,(function*(){const t=yield Object(b.b)(e);Object(o.runInAction)(()=>{this._requestBreakpoint=t});const n=yield t.waitForCompletedResult();return this._requestBreakpoint===t&&Object(o.runInAction)(()=>{this._requestBreakpoint=void 0}),n}))}triggerResponseBreakpoint(e){return v(this,void 0,void 0,(function*(){const t=yield Object(b.c)(e);Object(o.runInAction)(()=>{this._responseBreakpoint=t});const n=yield t.waitForCompletedResult();return this._responseBreakpoint===t&&Object(o.runInAction)(()=>{this._responseBreakpoint=void 0}),n}))}respondToBreakpointedRequest(){this._responseBreakpoint=Object(b.a)(this.httpVersion);const e=this.requestBreakpoint;this._requestBreakpoint=void 0,this._responseBreakpoint.waitForCompletedResult().then(Object(o.action)(t=>{e.respondDirectly(t),this._responseBreakpoint=void 0}))}}y([o.observable],C.prototype,"matchedRule",void 0),y([o.observable],C.prototype,"tags",void 0),y([o.computed],C.prototype,"httpVersion",null),y([o.observable],C.prototype,"timingEvents",void 0),y([o.observable.ref],C.prototype,"response",void 0),y([o.observable],C.prototype,"abortMessage",void 0),y([o.observable.ref],C.prototype,"_apiPromise",void 0),y([o.observable.ref],C.prototype,"_requestBreakpoint",void 0),y([o.observable.ref],C.prototype,"_responseBreakpoint",void 0),y([o.computed],C.prototype,"isBreakpointed",null),y([o.action.bound],C.prototype,"respondToBreakpointedRequest",null)}).call(this,n(25).Buffer)},1484:function(e,t,n){"use strict";n.r(t);var r=n(108),o=n(26),s=n(4),a=n.n(s),i=n(0),c=n.n(i),l=n(54),d=n(1),u=n(5),p=n(2),h=n(60),m=(n(258),n(43)),g=n(9);const f=Object(m.format)(new Date,"YYYY-MM-DD"),b=(null===localStorage.getItem("first-run-date")&&localStorage.getItem("theme-background-color"),localStorage.getItem("first-run-date")),y=null!=b?b:f;b||localStorage.setItem("first-run-date",y);const v=localStorage.getItem("last-run-date")!==f;v&&localStorage.setItem("last-run-date",f);var x=n(89),w=n(120);const E=x.parse(window.location.search.replace(/^\?/,"")),C=Object(w.f)((()=>{let e=window.history.state,t=window.location;window.addEventListener("popstate",()=>{e=window.history.state,t=window.location});const n=s.throttle((...e)=>window.history.pushState.apply(window.history,e),250,{leading:!0,trailing:!0}),r=s.throttle((...e)=>window.history.replaceState.apply(window.history,e),250,{leading:!0,trailing:!0});return{get location(){return t},addEventListener:window.addEventListener.bind(window),removeEventListener:window.removeEventListener.bind(window),history:{get state(){return e},pushState(e,r,o){n(e,r,o);let[s,a=""]=o.split("?");t=Object.assign({},window.location,{pathname:s,search:a})},replaceState(e,n,o){r(e,n,o);let[s,a=""]=o.split("?");t=Object.assign({},window.location,{pathname:s,search:a})}}}})()),T=C.navigate.bind(C);C.navigate=function(e,t={}){const[n,r]=e.split("?"),o=x.parse(r);return T(n+"?"+x.stringify(Object.assign(Object.assign({},o),E)),t)};var j=n(36),O=n(47),S=n(24),k=n(67),P=n(21),R=n(50),H=n(56),q=n(31),A=n(248),I=n(145),D=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class $ extends I.a{constructor(e,t){super(e,t),this.accepted=!1,this.messages=[],this.searchIndex+="\nwebsocket"}isWebSocket(){return!0}setAccepted(e){const t=e.headers["sec-websocket-protocol"];s.isString(t)&&(this.subprotocol=t),this.accepted=!0,Object.assign(this.timingEvents,e.timingEvents)}wasAccepted(){return this.accepted}get selectedSubprotocol(){return this.subprotocol}addMessage(e){this.messages.push(new A.a(e,this.messages.length))}markClosed(e){this.closeData=e,Object.assign(this.timingEvents,e.timingEvents)}get closeState(){return this.closeData}markAborted(e){if(!this.wasAccepted())return super.markAborted(e);this.closeData="aborted",this.searchIndex+="\naborted",Object.assign(this.timingEvents,e.timingEvents),this.tags=s.union(this.tags,e.tags)}cleanup(){super.cleanup(),this.messages.forEach(e=>e.cleanup()),this.messages.length=0}}function M(e,t,n){let r,o=n,s=0,a=!0,i=0,c=n;for(r=0;r<e.length&&o<=t.length&&a;r++){const n=e[r].match(t,o);if(!n)return;a="full"===n.type,n.consumed>0&&(i=r,c=o),o+=n.consumed,s+=a?n.consumed:0}return{type:r===e.length&&a?"full":"partial",fullyConsumed:s,partiallyConsumed:o-n,partsMatched:r,lastConsumingPartSyntaxIndex:i,lastConsumingPartStringIndex:c}}function F(e,t,n,r){const o=e.map(({key:e,syntax:r})=>({key:e,syntax:r,match:M(r,t,n)})).filter(({match:e})=>!!e&&n+e.partiallyConsumed===t.length),[a,i]=s.partition(o,({match:e})=>"full"===e.type);if(a.length)return s.flatMap(a,({key:e,syntax:n,match:o})=>{const s=n.length-1,a=s===o.lastConsumingPartSyntaxIndex?o.lastConsumingPartStringIndex:t.length;return n[s].getSuggestions(t,a,r.context).map(t=>({key:e,suggestion:t}))});const c=s.max(i.map(({match:e})=>e.partsMatched)),l=i.filter(e=>e.match.partsMatched===c),d=s.flatMap(l,({key:e,syntax:n,match:o})=>{const s=o.lastConsumingPartSyntaxIndex,a=o.lastConsumingPartStringIndex,i=n[s],c=s===n.length-1;return i.getSuggestions(t,a,r.context).map(t=>({key:e,syntax:n,syntaxPartIndex:s,suggestion:Object.assign(Object.assign({},t),{matchType:"full"===t.matchType?c?"full":"partial":t.matchType})}))});if(1!==d.length||!1===r.canExtend)return d.map(({key:e,suggestion:t})=>({key:e,suggestion:t}));const{key:u,syntax:p,suggestion:h}=d[0];let m,g=d[0].syntaxPartIndex+1,f=[h];for(;1===f.length&&g<p.length;){const e=f[0];m||(m="template"===e.matchType?e:void 0);const n=B(t,e),o=p[g].getSuggestions(n,n.length,r.context);if(m&&o.length>1)break;if(f=o.map(t=>({value:e.value+t.value,showAs:e.showAs+t.showAs,index:e.index,matchType:t.matchType})),f.some(e=>"partial"===e.matchType))break;g+=1}const b=g===p.length;return m?[{key:u,suggestion:Object.assign(Object.assign({},m),{showAs:f[0].showAs})}]:f.map(e=>({key:u,suggestion:Object.assign(Object.assign({},e),{matchType:"full"!==e.matchType||b?e.matchType:"partial"})}))}function B(e,t){return e.slice(0,t.index)+t.value}function N(e,t){return t?[e.charCodeAt(0),t.charCodeAt(0)]:[e.charCodeAt(0),e.charCodeAt(0)]}D([d.observable],$.prototype,"accepted",void 0),D([d.observable],$.prototype,"subprotocol",void 0),D([d.action],$.prototype,"setAccepted",null),D([d.observable],$.prototype,"messages",void 0),D([d.action],$.prototype,"addMessage",null),D([d.observable],$.prototype,"closeData",void 0),D([d.action],$.prototype,"markClosed",null);const L=[N("a","z"),N("A","Z")],U=N("0","9"),W=[...L,U];function z(e,t){return e>=t[0]&&e<=t[1]}const _=(e,t)=>V(e,t,[G]);function V(e,t,n){let r;for(r=t;r<e.length;r++){const t=e.charCodeAt(r);if(!s.some(n,e=>z(t,e)))break}return r!==t?e.substring(t,r):r===e.length?"":void 0}const G=[48,57];function J(e,t,n){const r=e.match(t,n);if(!r||"full"!==r.type)throw console.log("Unparseable expected-parseable input",t),new Error("Can't parse expected-parseable value");return t.slice(n,n+r.consumed)}function K(e,t,n,r,o,s){if(!n||!o)return[];const a=(r||"").toLowerCase();return o(e,t,n).filter(e=>(!a||e.toLowerCase().startsWith(a))&&s).slice(0,10).map(e=>({showAs:e,index:t,value:e,matchType:"full"}))}class Y{constructor(e){this.matcher=e}match(e,t){const n=this.matcher.toLowerCase();let r;for(r=t;r-t<this.matcher.length&&r<e.length;r++)if(n[r-t]!==e[r].toLowerCase())return;const o=r-t;return{type:o===this.matcher.length?"full":"partial",consumed:o}}getSuggestions(e,t){return[{showAs:this.matcher,index:t,value:this.matcher,matchType:"full"}]}parse(e,t){return J(this,e,t),this.matcher}}class Q{constructor(e,t={}){this.templateText=e,this.options=t,this.allowedCharRanges=t.allowedChars||Q.AnyAsciiExceptSpaces,this.allowEmpty=t.allowEmpty||(()=>!1)}match(e,t){const n=V(e,t,this.allowedCharRanges);if(void 0===n)return;const r=n.length;return{type:r>0||this.allowEmpty(e,t)?"full":"partial",consumed:r}}getSuggestions(e,t,n){const r=V(e,t,this.allowedCharRanges),o=K(e,t,n,r,this.options.suggestionGenerator,e=>![...e].map(e=>e.charCodeAt(0)).some(e=>!this.allowedCharRanges.some(t=>z(e,t))));return r?[{showAs:r,index:t,value:r,matchType:"full"},...o.filter(e=>e.value!==r)]:[{showAs:`{${this.templateText}}`,index:t,value:"",matchType:"template"},...this.allowEmpty(e,t)&&""===r?[{showAs:"",index:t,value:"",matchType:"full"}]:[],...o]}parse(e,t){return J(this,e,t)}}Q.AnyAsciiExceptSpaces=[N("!","~")];class X{constructor(e,t,n={}){this.wrapper=e,this.wrappedSyntax=t,this.optional=!!n.optional}match(e,t){let n,r=t;if(void 0===e[r])return{type:"partial",consumed:0};if(e[r]===this.wrapper[0])r+=1,n=!0;else{if(!this.optional)return;n=!1}const o=n?this.wrapper[1]:" ",s=e.slice(r).indexOf(o),a=-1!==s?e.slice(0,r+s):e,i=this.wrappedSyntax.match(a,r);if(i){if(r+=i.consumed,"full"!==i.type)return{type:"partial",consumed:r-t};if(n){if(void 0===e[r])return{type:"partial",consumed:r-t};if(e[r]!==this.wrapper[1])return;r+=1}return{type:"full",consumed:r-t}}}getSuggestions(e,t,n){const r=e[t]===this.wrapper[0],o=!this.optional||r?this.wrapper[1]:" ",s=e.slice(t).indexOf(o),a=-1!==s?e.slice(0,t+s):e,i=r?t+1:t;return this.wrappedSyntax.getSuggestions(a,i,n).map(t=>{const n=!this.optional||t.value.includes(" "),o=n&&!r,s=(n||r)&&"full"===t.matchType?this.wrapper[1]:"",a=(n||r)&&("full"===t.matchType||"template"===t.matchType)?this.wrapper[1]:"";if(o){const n=this.wrapper[0]+e.slice(i,t.index)+t.value+s,r=this.wrapper[0]+e.slice(i,t.index)+t.showAs+a;return Object.assign(Object.assign({},t),{showAs:r,value:n,index:i})}return Object.assign(Object.assign({},t),{showAs:t.showAs+a,value:t.value+s})})}parse(e,t){const n=e[t]===this.wrapper[0],r=-1!==e.slice(t).indexOf(this.wrapper[1]),o=!this.optional||n&&r,s=o?this.wrapper[1]:" ",a=e.slice(t).indexOf(s),i=-1!==a?e.slice(0,t+a):e;return this.wrappedSyntax.parse(i,o?t+1:t)}}class Z{constructor(e="number"){this.stringSyntax=new Q(e,{allowedChars:[G]})}match(e,t){return this.stringSyntax.match(e,t)}getSuggestions(e,t){return this.stringSyntax.getSuggestions(e,t)}parse(e,t){const n=this.stringSyntax.parse(e,t);return parseInt(n,10)}}class ee{constructor(e){this.options=e}match(e,t){const n=this.options.map(n=>n.match(e,t)).filter(e=>!!e),[r,o]=s.partition(n,{type:"full"}),a=r.length?r:o;return s.maxBy(a,e=>e.consumed)}getSuggestions(e,t,n){const r=this.options.map(n=>({option:n,match:n.match(e,t)})).filter(({match:e})=>!!e);if(r.some(({match:e})=>"full"===e.type)){const o=r.filter(({match:e})=>"full"===e.type);return s.maxBy(o,({match:e})=>e.consumed).option.getSuggestions(e,t,n)}return s.flatMap(r,({option:o})=>r.length>1&&o instanceof ne?o.getSuggestions(e,t,Object.assign({},n,{canExtend:!1})):o.getSuggestions(e,t,n))}parse(e,t){const n=this.options.map(n=>({option:n,match:n.match(e,t)})).filter(({match:e})=>"full"===(null==e?void 0:e.type));return s.maxBy(n,({match:e})=>e.consumed).option.parse(e,t)}}class te extends ee{constructor(e){super(e.map(e=>new Y(e)))}}class ne{constructor(...e){this.subParts=e}match(e,t){const n=M(this.subParts,e,t);return n?{type:null==n?void 0:n.type,consumed:null==n?void 0:n.partiallyConsumed}:void 0}getSuggestions(e,t,n){return F([{key:null,syntax:this.subParts}],e,t,{context:n,canExtend:null==n?void 0:n.canExtend}).map(({suggestion:e})=>e)}parse(e,t){return s.reduce(this.subParts,(n,r)=>{const o=r.parse(e,t);return t+=o.toString().length,n.push(o),n},[])}}class re{constructor(e){this.filterString=e}serialize(){return this.filterString}get filterDescription(){return this.constructor.filterDescription(this.filterString,!1)}}const oe=()=>[new se("")];class se extends re{constructor(e=""){super(e),this.filter=e}matches(e){if(""===this.filter)return!0;const t=this.filter.toLocaleLowerCase();return e.searchIndex.includes(t)}toString(){return`"${this.filter}"`}}const ae={"=":(e,t)=>e===t,"!=":(e,t)=>e!==t},ie=Object.assign(Object.assign({},ae),{">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t}),ce=Object.assign(Object.assign({},ae),{"*=":(e,t)=>e.includes(t),"^=":(e,t)=>e.startsWith(t),"$=":(e,t)=>e.endsWith(t)}),le={"=":(e,t)=>e.equals(t),"!=":(e,t)=>!e.equals(t),"*=":(e,t)=>e.includes(t),"^=":(e,t)=>e.slice(0,t.length).equals(t),"$=":(e,t)=>e.slice(-t.length).equals(t)},de={"=":"equal to","!=":"not equal to",">":"greater than",">=":"greater than or equal to","<":"less than","<=":"less than or equal to","*=":"containing","^=":"starting with","$=":"ending with"},ue=Object.assign(Object.assign({},de),{">":"larger than",">=":"larger than or equal to","<":"smaller than","<=":"smaller than or equal to"});function pe(e,t){let n=0;const r=[];for(let o of e.filterSyntax)r.push(o.parse(t,n)),n+=o.match(t,n).consumed;return r}function he(e,t){return me(t,...e.filterSyntax)}function me(e,...t){let n=0;const r=[];for(let o of t){const t=o.match(e,n);if(!t||"full"!==t.type)break;r.push(o.parse(e,n)),n+=t.consumed}return r}class ge extends re{static filterDescription(e){var t;const[,n,r]=he(ge,e);if(!n||"="==n&&!r)return"responses with a given status code";if(r){const e=null===(t=Object(R.c)(r))||void 0===t?void 0:t.message,o="="!==n&&"!="!==n||!e?"":` (${e})`;return"="===n?`responses with status ${r}${o}`:`responses with a status ${de[n]} ${r}${o}`}return`responses with a status ${de[n]} a given value`}constructor(e){super(e),[,this.op,this.status]=pe(ge,e),this.predicate=ie[this.op]}matches(e){return e.isHttp()&&e.isSuccessfulExchange()&&this.predicate(e.response.statusCode,this.status)}toString(){return`Status ${this.op} ${this.status}`}}ge.filterSyntax=[new Y("status"),new te(["=","!=",">=",">","<=","<"]),new class{constructor(e,t={}){this.requiredLength=e,this.options=t}match(e,t){const n=_(e,t);if(void 0===n)return;const r=n.length;return r===this.requiredLength?{type:"full",consumed:r}:r<this.requiredLength?{type:"partial",consumed:r}:void 0}getSuggestions(e,t,n){const r=_(e,t),o=K(e,t,n,r,this.options.suggestionGenerator,e=>e.length===this.requiredLength&&![...e].map(e=>e.charCodeAt(0)).some(e=>!z(e,G)));if(r){if(o.length)return o;{const e=r+s.repeat("0",this.requiredLength-r.length);return[{showAs:e,index:t,value:e,matchType:"full"}]}}return[{showAs:`{${this.requiredLength}-digit number}`,index:t,value:"",matchType:"template"},...o]}parse(e,t){const n=J(this,e,t);return parseInt(n,10)}}(3,{suggestionGenerator:(e,t,n)=>s(n).map(e=>"response"in e&&e.isSuccessfulExchange()&&e.response.statusCode.toString()).uniq().filter(Boolean).sort().valueOf()})],ge.filterName="status";class fe extends re{static filterDescription(e){return"requests that have received a response"}matches(e){return e.isHttp()&&e.isSuccessfulExchange()}toString(){return"Completed"}}fe.filterSyntax=[new Y("completed")],fe.filterName="completed";class be extends re{static filterDescription(e){return"requests that are still waiting for a response"}matches(e){return e.isHttp()&&!e.isCompletedExchange()}toString(){return"Pending"}}be.filterSyntax=[new Y("pending")],be.filterName="pending";class ye extends re{static filterDescription(e){return"requests whose connection failed before receiving a response"}matches(e){return e.isHttp()&&"aborted"===e.response}toString(){return"Aborted"}}ye.filterSyntax=[new Y("aborted")],ye.filterName="aborted";class ve extends re{static filterDescription(e){return"requests that weren't transmitted successfully"}matches(e){return!e.isHttp()||e.tags.some(e=>e.startsWith("client-error")||e.startsWith("passthrough-error"))}toString(){return"Error"}}ve.filterSyntax=[new Y("errored")],ve.filterName="error";class xe extends re{static filterDescription(e){return"exchanges that are pinned"}matches(e){return e.pinned}toString(){return"Pinned"}}xe.filterSyntax=[new Y("pinned")],xe.filterName="pinned";class we extends re{static filterDescription(e){const[,,t]=he(we,e);return t?`all ${t} exchanges`:"exchanges by their general category"}constructor(e){super(e);const[,,t]=pe(we,e);this.expectedCategory=t}matches(e){return e.isHttp()&&e.category===this.expectedCategory}toString(){return s.startCase(this.expectedCategory)}}we.filterSyntax=[new Y("category"),new Y("="),new te(q.a)],we.filterName="category";class Ee extends re{static filterDescription(e){const[,t,n]=he(Ee,e);return t?"="===t?n?n.toUpperCase()+" requests":"requests with a given method":n?`non-${n.toUpperCase()} requests`:"requests not sent with a given method":"requests with a given method"}constructor(e){super(e);const[,t,n]=pe(Ee,e);this.op=t,this.predicate=ae[this.op],this.expectedMethod=n.toUpperCase()}matches(e){return e.isHttp()&&this.predicate(e.request.method.toUpperCase(),this.expectedMethod)}toString(){return`Method ${this.op} ${this.expectedMethod}`}}Ee.filterSyntax=[new Y("method"),new te(["=","!="]),new Q("method",{allowedChars:L,suggestionGenerator:(e,t,n)=>s(n).map(e=>e.isHttp()&&e.request.method).uniq().filter(Boolean).valueOf()})],Ee.filterName="method";class Ce extends re{static filterDescription(e){const[,,t]=he(Ce,e);return t?"exchanges using HTTP/"+t:"exchanges using a given version of HTTP"}constructor(e){super(e);const[,,t]=pe(Ce,e);this.expectedVersion=parseInt(t,10)}matches(e){return e.isHttp()&&e.httpVersion===this.expectedVersion}toString(){return"HTTP "+this.expectedVersion}}Ce.filterSyntax=[new Y("httpVersion"),new Y("="),new te(["1","2"])],Ce.filterName="httpVersion";class Te extends re{static filterDescription(){return"websocket streams"}constructor(e){super(e)}matches(e){return e instanceof $}toString(){return"WebSocket"}}Te.filterSyntax=[new Y("websocket")],Te.filterName="websocket";class je extends re{static filterDescription(e){const[,,t]=he(je,e);return t?"exchanges using "+t.toUpperCase():"exchanges using HTTP, HTTPS, WS or WSS"}constructor(e){super(e);const[,,t]=pe(je,e);this.expectedProtocol=t.toLowerCase()}matches(e){if(!e.isHttp())return!1;return e.request.parsedUrl.protocol.toLowerCase().slice(0,-1)===this.expectedProtocol}toString(){return""+this.expectedProtocol.toUpperCase()}}je.filterSyntax=[new Y("protocol"),new Y("="),new te(["http","https","ws","wss"])],je.filterName="protocol";class Oe extends re{static filterDescription(e){const[,t,n]=he(Oe,e);return!t||!n&&"="===t?"requests sent to a given hostname":"="===t?"requests to "+n:`requests to a hostname ${de[t]} ${n||"a given value"}`}constructor(e){super(e);const[,t,n]=pe(Oe,e);this.op=t,this.predicate=ce[t],this.expectedHostname=n.toLowerCase()}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.hostname.toLowerCase(),this.expectedHostname)}toString(){return`Hostname ${this.op} ${this.expectedHostname}`}}Oe.filterSyntax=[new Y("hostname"),new te(["=","!=","*=","^=","$="]),new Q("hostname",{allowedChars:[...W,N("-"),N(".")],suggestionGenerator:(e,t,n)=>s(n).map(e=>e.isHttp()&&e.request.parsedUrl.hostname.toLowerCase()).uniq().filter(Boolean).valueOf()})],Oe.filterName="hostname";const Se={"http:":80,"https:":443};class ke extends re{static filterDescription(e){const[,t,n]=he(ke,e);return!t||!n&&"="===t?"requests sent to a given port":"="===t?"requests to port "+n:`requests to a port ${de[t]} ${n||"a given port"}`}constructor(e){super(e),[,this.op,this.expectedPort]=pe(ke,e),this.predicate=ie[this.op]}matches(e){if(!e.isHttp())return!1;const{protocol:t,port:n}=e.request.parsedUrl,r=parseInt((n||Se[t]||0).toString(),10);return e.isHttp()&&this.predicate(r,this.expectedPort)}toString(){return`Port ${this.op} ${this.expectedPort}`}}ke.filterSyntax=[new Y("port"),new te(["=","!=",">=",">","<=","<"]),new Z("port")],ke.filterName="port";class Pe extends re{static filterDescription(e){const[,t,n]=he(Pe,e);return!t||!n&&"="===t?"requests sent to a given path":"="===t?"requests to "+n:`requests to a path ${de[t]} ${n||"a given path"}`}constructor(e){super(e),[,this.op,this.expectedPath]=pe(Pe,e),this.predicate=ce[this.op]}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.pathname,this.expectedPath)}toString(){return`Path ${this.op} ${this.expectedPath}`}}Pe.filterSyntax=[new Y("path"),new te(["=","!=","*=","^=","$="]),new Q("path",{suggestionGenerator:(e,t,n)=>s(n).map(e=>e.isHttp()&&e.request.parsedUrl.pathname).uniq().filter(Boolean).valueOf()})],Pe.filterName="path";class Re extends re{static filterDescription(e,t){const[,n,r]=he(Re,e);return n?void 0===r||t?"="===n?"requests with a given query string":`requests with a query string ${de[n]} a given query string`:""===r?"="===n?"requests with an empty query string":"requests with a non-empty query string":`requests with a query string ${de[n]} ${r}`:"requests with a given query string"}constructor(e){super(e),[,this.op,this.expectedQuery]=pe(Re,e),this.predicate=ce[this.op]}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.search,this.expectedQuery)}toString(){return`Query ${this.op} ${this.expectedQuery}`}}Re.filterSyntax=[new Y("query"),new te(["=","!=","*=","^=","$="]),new Q("query",{allowEmpty:(e,t)=>{const n=e.slice(0,t).lastIndexOf("query")+"query".length,r=Re.filterSyntax[1].parse(e,n);return"="===r||"!="===r},suggestionGenerator:(e,t,n)=>s(n).map(e=>e.isHttp()&&e.request.parsedUrl.search).uniq().filter(Boolean).valueOf()})],Re.filterName="query";const He=e=>e.isHttp()?[...Object.entries(e.request.headers),...e.isSuccessfulExchange()?Object.entries(e.response.headers):[]]:[];class qe extends re{static filterDescription(e){const[,t,n]=he(qe,e);return t?`exchanges with any header value ${de[t]} ${n?`'${n}'`:"a given string"}`:"exchanges by all header values"}constructor(e){super(e);const[,t,n]=pe(qe,e);this.op=t,this.predicate=ce[t],this.expectedHeaderValue=n.toLowerCase()}matches(e){if(!e.isHttp())return!1;const t=He(e),{predicate:n,expectedHeaderValue:r}=this;return s(t).flatMap(([e,t])=>null!=t?t:[]).some(e=>n(e.toLowerCase(),r))}toString(){return`Any header ${this.op} ${this.expectedHeaderValue}`}}qe.filterSyntax=[new Y("headers"),new te(["=","*=","^=","$="]),new X(["[","]"],new Q("header value",{allowedChars:[[0,255]],suggestionGenerator:(e,t,n)=>s(n).map(e=>s(He(e)).map(([e,t])=>Array.isArray(t)?t:[t]).flatten().valueOf()).flatten().uniq().valueOf()}),{optional:!0})],qe.filterName="headers";class Ae extends re{static filterDescription(e){const[,t]=he(Ae,e),[n,r]=me(e.slice("header[]".length+(t||"").length),...Ae.valueMatchSyntax);return t?n?`exchanges with a '${t}' header ${de[n]} ${r?`'${r}'`:"a given value"}`:`exchanges with a '${t}' header`:"exchanges by a specific header"}constructor(e){super(e);const[,t,[n,r]]=pe(Ae,e);this.expectedHeaderName=t.toLowerCase(),n&&r&&(this.op=n,this.predicate=ce[n],this.expectedHeaderValue=r.toLowerCase())}matches(e){if(!e.isHttp())return!1;const t=He(e),{predicate:n,expectedHeaderValue:r}=this;return n&&r?s(t).filter(([e])=>e.toLowerCase()===this.expectedHeaderName).flatMap(([e,t])=>null!=t?t:[]).some(e=>n(e.toLowerCase(),r)):t.some(([e])=>e.toLowerCase()===this.expectedHeaderName)}toString(){return this.op?`${this.expectedHeaderName} ${this.op} ${this.expectedHeaderValue}`:`Has ${this.expectedHeaderName} header`}}Ae.valueMatchSyntax=[new te(["=","!=","*=","^=","$="]),new X(["[","]"],new Q("header value",{allowedChars:[[0,255]],suggestionGenerator:(e,t,n)=>{const r=e.slice(0,t-1).lastIndexOf("["),o=Ae.filterSyntax[1].parse(e,r).toLowerCase();return s(n).map(e=>s(He(e)).filter(([e])=>e.toLowerCase()===o).map(([e,t])=>Array.isArray(t)?t:[t]).flatten().valueOf()).flatten().uniq().valueOf()}}),{optional:!0})],Ae.filterSyntax=[new Y("header"),new X(["[","]"],new Q("header name",{suggestionGenerator:(e,t,n)=>s(n).map(e=>He(e).map(([e])=>e.toLowerCase())).flatten().uniq().valueOf()})),new class{constructor(...e){this.subParts=e}match(e,t){if(t>=e.length)return{type:"full",consumed:0};const n=M(this.subParts,e,t);return n?"full"===n.type?{type:"full",consumed:n.fullyConsumed}:t+n.partiallyConsumed===e.length?{type:"partial",consumed:n.partiallyConsumed}:{type:"full",consumed:0}:{type:"full",consumed:0}}getSuggestions(e,t,n){const r=this.match(e,t),o=F([{key:null,syntax:this.subParts}],e,t,{context:n}).map(({suggestion:e})=>e);return e.length===t?[{showAs:"",index:t,value:"",matchType:"full"},...o]:"full"===(null==r?void 0:r.type)&&0===(null==r?void 0:r.consumed)?[{showAs:"",index:t,value:"",matchType:"full"}]:o}parse(e,t){const n=this.match(e,t);return n&&0!==n.consumed?s.reduce(this.subParts,(n,r)=>{const o=r.parse(e,t);return t+=o.toString().length,n.push(o),n},[]):[]}}(...Ae.valueMatchSyntax)],Ae.filterName="header";class Ie extends re{static filterDescription(e){const[,t,n]=he(Ie,e);return t?`exchanges with a body ${ue[t]} ${void 0!==n?Object(H.a)(n):"a given size"}`:"exchanges by body size"}constructor(e){super(e),[,this.op,this.expectedSize]=pe(Ie,e),this.predicate=ie[this.op]}matches(e){if(!e.isHttp())return!1;const t=e.request.body,n=e.isSuccessfulExchange()?e.response.body:void 0,r=t.encoded.byteLength+((null==n?void 0:n.encoded.byteLength)||0);return e.isHttp()&&this.predicate(r,this.expectedSize)}toString(){return`Size ${this.op} ${this.expectedSize}`}}Ie.filterSyntax=[new Y("bodySize"),new te(["=","!=",">=",">","<=","<"]),new Z("size")],Ie.filterName="bodySize";class De extends re{static filterDescription(e){const[,t,n]=he(De,e);return t?`exchanges with a body ${de[t]} ${n||"a given value"}`:"exchanges by body content"}constructor(e){super(e);const[,t,n]=pe(De,e);this.op=t,this.expectedBody=Object(P.l)(n),this.predicate=le[this.op]}matches(e){if(!e.isHttp())return!1;if(!e.hasRequestBody()&&!e.hasResponseBody())return!1;const t=e.request.body.decoded,n=e.isSuccessfulExchange()?e.response.body.decoded:void 0,r=!!t&&t.byteLength>0&&this.predicate(t,this.expectedBody),o=!!n&&n.byteLength>0&&this.predicate(n,this.expectedBody);return r||o}toString(){return`Body ${this.op} ${this.expectedBody}`}}De.filterSyntax=[new Y("body"),new te(["=","!=","*=","^=","$="]),new X(["[","]"],new Q("body content",{allowedChars:[[0,1/0]]}),{optional:!0})],De.filterName="body";class $e extends re{static filterDescription(e){const[,t]=he($e,e);return`exchanges that contain ${t?`'${t.toLowerCase()}'`:"a given value"} anywhere`}constructor(e){super(e);const[,t]=pe($e,e);this.expectedContent=t.toLowerCase()}matches(e){let t;return t=e.isHttp()?[e.request.method,e.request.url,...Object.entries(e.request.rawHeaders).map(([e,t])=>`${e}: ${t}`),e.request.body.decoded,...e.isSuccessfulExchange()?[e.response.statusCode,e.response.statusMessage,...Object.entries(e.response.rawHeaders).map(([e,t])=>`${e}: ${t}`),e.response.body.decoded]:[],...e.isWebSocket()?e.messages.map(e=>e.content):[]]:e.isRTCConnection()?[e.clientURL,e.remoteURL]:e.isRTCDataChannel()?[...e.messages.map(e=>e.content),e.label,e.protocol]:e.isTlsTunnel()?[e.upstreamHostname,e.upstreamPort]:e.isTlsFailure()?[e.upstreamHostname]:[],t.some(e=>!!e&&(0!==e.length&&e.toString().toLowerCase().includes(this.expectedContent)))}toString(){return`Contains(${this.expectedContent})`}}$e.filterSyntax=[new Y("contains"),new X(["(",")"],new Q("content",{allowedChars:[[0,1/0]]}))],$e.filterName="contains";const Me=[Ee,Oe,Pe,Re,ge,qe,Ae,De,Ie,$e,fe,be,ye,ve,xe,we,ke,je,Ce,Te];class Fe extends re{static filterDescription(e,t){const n=e.slice(4,-1);if(0===n.length)return"exchanges that do not match a given condition";{const e=Me.map(e=>({filter:e,match:M(e.filterSyntax,n,0)})).filter(({match:e})=>((null==e?void 0:e.partiallyConsumed)||0)>0),r=s.maxBy(e,e=>e.match.partiallyConsumed);return"excluding "+(r?r.filter.filterDescription(n,t):"...")}}constructor(e){super(e),this.filterValue=e;const t=e.slice(4,-1),n=s.find(Me,e=>{var n;return"full"===(null===(n=M(e.filterSyntax,t,0))||void 0===n?void 0:n.type)});this.innerFilter=new n(t)}matches(e){return!this.innerFilter.matches(e)}toString(){return`not(${this.innerFilter.toString()})`}}Fe.innerFilterSyntax=new ee(Me.map(e=>new ne(...e.filterSyntax))),Fe.filterSyntax=[new Y("not"),new X(["(",")"],Fe.innerFilterSyntax)],Fe.filterName="not";class Be extends re{static filterDescription(e,t){")"===e[e.length-1]&&(e=e.slice(0,-1));const n=e.slice(3).split(",").map(e=>e.trim());if(1===n.length&&0===n[0].length)return"exchanges that match any one of multiple conditions";{const e=n.map((e,r)=>{const o=r===n.length-1,a=t&&o,i=Me.map(t=>({filter:t,match:M(t.filterSyntax,e,0)})).filter(({match:e})=>((null==e?void 0:e.partiallyConsumed)||0)>0),c=s.maxBy(i,e=>e.match.partiallyConsumed);return c?c.filter.filterDescription(e,a):"..."});return e.length<2&&e.push("..."),Object(k.b)(e,", ",", or ")}}constructor(e){super(e),this.filterValue=e,this.innerFilters=e.slice(3,-1).split(",").map(e=>e.trim()).map(e=>new(s.find(Me,t=>{var n;return"full"===(null===(n=M(t.filterSyntax,e,0))||void 0===n?void 0:n.type)}))(e))}matches(e){return this.innerFilters.some(t=>t.matches(e))}toString(){return Object(k.b)(this.innerFilters.map(e=>e.toString()),", "," or ")}}Be.innerFilterSyntax=new class{constructor(e,t,n={}){var r,o;this.delimiterString=e,this.wrappedSyntax=t,this.minimumRepetitions=null!==(r=n.minimumRepetitions)&&void 0!==r?r:2,this.placeholderName=null!==(o=n.placeholderName)&&void 0!==o?o:"value",this.delimiterSyntax=new Y(this.delimiterString)}matchSyntaxOnly(e,t){const{wrappedSyntax:n,delimiterString:r,delimiterSyntax:o}=this;let s=t,a=0,i=0;for(;;){const c=e.slice(s).indexOf(r),l=e.slice(0,-1!==c?s+c:void 0),d=n.match(l,s);if(!d)return{matchCount:a,type:"full",consumed:i-t};if(s+=d.consumed,i=s,"partial"===d.type)return{matchCount:a,type:"partial",consumed:s-t};a+=1;const u=o.match(e,s);if(!u||0===u.consumed)return{matchCount:a,type:"full",consumed:s-t};if("partial"===u.type)return{matchCount:a,type:"partial",consumed:u.consumed+(s-t)};for(s+=u.consumed;" "===e[s];)s+=1}}match(e,t){const{minimumRepetitions:n}=this,{matchCount:r,type:o,consumed:s}=this.matchSyntaxOnly(e,t);return 0===s?n<=0?{type:"full",consumed:s}:{type:"partial",consumed:s}:"full"===o?r>=n?{type:"full",consumed:s}:t+s===e.length?{type:"partial",consumed:s}:void 0:{type:o,consumed:s}}getSuggestions(e,t,n){const{wrappedSyntax:r,delimiterSyntax:o,delimiterString:s,minimumRepetitions:a}=this;let i=t,c=0;for(;;){const t=e.slice(i).indexOf(s),l=e.slice(0,-1!==t?i+t:void 0),d=r.match(l,i);if(!d)return[{matchType:"full",index:c>0?i-s.length:i,showAs:"",value:""}];if("partial"===d.type){const t=r.getSuggestions(e,i,n);return c+1<a?t.map(e=>Object.assign(Object.assign({},e),{matchType:"full"===e.matchType?"partial":e.matchType})):t}i+=d.consumed,c+=1;const u=o.match(e,i);if(!u)return[{matchType:"full",index:i,showAs:"",value:""}];if("partial"===u.type||void 0===e[i+u.consumed]){const e=[{showAs:`${s} {another ${this.placeholderName}}`,index:i,value:s+" ",matchType:"template"}];return 0===u.consumed&&c>=a&&e.unshift({showAs:"",index:i,value:"",matchType:"full"}),e}for(i+=u.consumed;" "===e[i];)i+=1}}parse(e,t){const n=this.match(e,t);if("full"===n.type&&0===n.consumed)return[];return e.slice(t,t+n.consumed).split(this.delimiterString).map(e=>this.wrappedSyntax.parse(e.trim(),0))}}(",",new ee(Me.map(e=>new ne(...e.filterSyntax))),{placeholderName:"condition"}),Be.filterSyntax=[new Y("or"),new X(["(",")"],Be.innerFilterSyntax)],Be.filterName="or";const Ne=[...Me,Fe,Be];var Le=n(118);function Ue(e,t=[]){return e.map((e,n)=>{if("separator"===e.type)return e;if("submenu"===e.type)return Object.assign(Object.assign({},e),{items:Ue(e.items,t.concat(n+".items"))});if("option"===e.type)return Object.assign(Object.assign({},e),{callback:void 0,id:t.concat(n).join(".")});throw new S.a(e,e=>e.type)})}var We=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},ze=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const _e=["requestBody","responseBody","webSocketMessages"],Ve=e=>_e.includes(e),Ge=e=>e.startsWith("request"),Je=e=>e.startsWith("response"),Ke=["requestHeaders","requestBody"],Ye=["responseHeaders","responseBody"],Qe=e=>Ke.includes(e)||Ye.includes(e);class Xe{constructor(e){this.accountStore=e,this.initialized=Object(j.c)(()=>ze(this,void 0,void 0,(function*(){yield this.accountStore.initialized,Object(d.autorun)(()=>{document.querySelector("html").style.backgroundColor=this.theme.containerBackground,localStorage.setItem("theme-background-color",this.theme.containerBackground)}),Object(d.observe)(this.accountStore,"accountDataLastUpdated",()=>{this.accountStore.isPaidUser||this.setTheme("light")}),yield Object(O.a)({key:"ui-store",store:this});const e=window.matchMedia("(prefers-color-scheme: dark)");this._setPrefersDarkTheme(e.matches),e.addEventListener("change",e=>{this._setPrefersDarkTheme(e.matches)}),console.log("UI store initialized")}))),this._themeName="light",this._prefersDarkTheme=!1,this.customTheme=void 0,this.viewCardStates={api:{collapsed:!0},request:{collapsed:!1},requestBody:{collapsed:!1},response:{collapsed:!1},responseBody:{collapsed:!1},webSocketMessages:{collapsed:!1},webSocketClose:{collapsed:!1},rtcConnection:{collapsed:!1},rtcSessionOffer:{collapsed:!1},rtcSessionAnswer:{collapsed:!1},performance:{collapsed:!0},export:{collapsed:!0}},this.sendCardStates={requestHeaders:{collapsed:!1},requestBody:{collapsed:!1},responseHeaders:{collapsed:!1},responseBody:{collapsed:!1}},this.settingsCardStates={account:{collapsed:!1},proxy:{collapsed:!1},connection:{collapsed:!1},api:{collapsed:!1},themes:{collapsed:!1}},this.previousElectronAppPaths=[],this.activeFilterSet=oe(),this._customFilters={},this.preferredShell="Bash"}setTheme(e){"string"==typeof e?(this._themeName=e,this.customTheme=void 0):(this._themeName="custom",this.customTheme=e)}get themeName(){return this._themeName}_setPrefersDarkTheme(e){this._prefersDarkTheme=e}get theme(){switch(this.themeName){case"automatic":return Object.assign({},p.e[this._prefersDarkTheme?"dark":"light"]);case"custom":return this.customTheme;default:return p.e[this.themeName]}}get viewCardProps(){return s.mapValues(this.viewCardStates,(e,t)=>({key:t,expanded:t===this.animatedExpansionCard?"starting":t===this.expandedViewCard,collapsed:e.collapsed&&t!==this.expandedViewCard,onCollapseToggled:this.toggleViewCardCollapsed.bind(this,t),onExpandToggled:Ve(t)?this.toggleViewCardExpanded.bind(this,t):s.noop}))}toggleViewCardCollapsed(e){const t=this.viewCardStates[e];t.collapsed=!t.collapsed,this.expandedViewCard=void 0}toggleViewCardExpanded(e){this.expandedViewCard===e?this.expandedViewCard=void 0:Ve(e)&&(this.viewCardStates[e].collapsed=!1,this.expandedViewCard=e,this.animatedExpansionCard=e,requestAnimationFrame(Object(d.action)(()=>{this.animatedExpansionCard=void 0})))}get sendCardProps(){return s.mapValues(this.sendCardStates,(e,t)=>{const n=t===this.animatedExpansionCard?"starting":t===this.expandedSendRequestCard||t===this.expandedSentResponseCard;return{key:t,expanded:n,collapsed:e.collapsed&&!n,onCollapseToggled:this.toggleSendCardCollapsed.bind(this,t),onExpandToggled:Qe(t)?this.toggleSendCardExpanded.bind(this,t):s.noop}})}toggleSendCardCollapsed(e){const t=this.sendCardStates[e];if(t.collapsed=!t.collapsed,Ge(e))this.expandedSendRequestCard=void 0;else{if(!Je(e))throw new S.a(e);this.expandedSentResponseCard=void 0}}toggleSendCardExpanded(e){const t=Ge(e)?"expandedSendRequestCard":Je(e)?"expandedSentResponseCard":Object(S.d)(e);this[t]===e?this[t]=void 0:Qe(e)&&(this.sendCardStates[e].collapsed=!1,this[t]=e,this.animatedExpansionCard=e,requestAnimationFrame(Object(d.action)(()=>{this.animatedExpansionCard=void 0})))}get settingsCardProps(){return s.mapValues(this.settingsCardStates,(e,t)=>({key:t,collapsed:e.collapsed,onCollapseToggled:this.toggleSettingsCardCollapsed.bind(this,t)}))}toggleSettingsCardCollapsed(e){const t=this.settingsCardStates[e];t.collapsed=!t.collapsed,this.expandedViewCard=void 0}rememberElectronPath(e){this.previousElectronAppPaths.includes(e)||this.previousElectronAppPaths.unshift(e),this.previousElectronAppPaths=this.previousElectronAppPaths.slice(0,3)}forgetElectronPath(e){this.previousElectronAppPaths=this.previousElectronAppPaths.filter(t=>t!=e)}get customFilters(){return this.accountStore.isPaidUser?this._customFilters:{}}handleContextMenuEvent(e,t,n){if(t.length)if(e.preventDefault(),Le.a.openContextMenu){const r={x:e.pageX,y:e.pageY};this.contextMenuState=void 0,Le.a.openContextMenu({position:r,items:Ue(t)}).then(e=>{if(e){s.get(t,e).callback(n)}}).catch(e=>{throw console.log(e),new Error("Error opening context menu")})}else e.persist(),this.contextMenuState={data:n,event:e,items:t}}clearHtmlContextMenu(){this.contextMenuState=void 0}}We([d.action.bound],Xe.prototype,"setTheme",null),We([O.b,d.observable],Xe.prototype,"_themeName",void 0),We([d.observable],Xe.prototype,"_prefersDarkTheme",void 0),We([d.action.bound],Xe.prototype,"_setPrefersDarkTheme",null),We([Object(O.b)("object"),d.observable],Xe.prototype,"customTheme",void 0),We([d.computed],Xe.prototype,"theme",null),We([d.observable],Xe.prototype,"animatedExpansionCard",void 0),We([d.observable],Xe.prototype,"viewCardStates",void 0),We([d.observable],Xe.prototype,"expandedViewCard",void 0),We([d.computed],Xe.prototype,"viewCardProps",null),We([d.action],Xe.prototype,"toggleViewCardCollapsed",null),We([d.action],Xe.prototype,"toggleViewCardExpanded",null),We([d.observable],Xe.prototype,"sendCardStates",void 0),We([d.observable],Xe.prototype,"expandedSendRequestCard",void 0),We([d.observable],Xe.prototype,"expandedSentResponseCard",void 0),We([d.computed],Xe.prototype,"sendCardProps",null),We([d.action],Xe.prototype,"toggleSendCardCollapsed",null),We([d.action],Xe.prototype,"toggleSendCardExpanded",null),We([d.observable],Xe.prototype,"settingsCardStates",void 0),We([d.computed],Xe.prototype,"settingsCardProps",null),We([d.action],Xe.prototype,"toggleSettingsCardCollapsed",null),We([d.action.bound],Xe.prototype,"rememberElectronPath",null),We([d.action.bound],Xe.prototype,"forgetElectronPath",null),We([Object(O.b)("list"),d.observable],Xe.prototype,"previousElectronAppPaths",void 0),We([d.observable],Xe.prototype,"activeFilterSet",void 0),We([Object(O.b)("object"),d.observable],Xe.prototype,"_customFilters",void 0),We([d.computed],Xe.prototype,"customFilters",null),We([O.b,d.observable],Xe.prototype,"preferredShell",void 0),We([O.b,d.observable],Xe.prototype,"exportSnippetFormat",void 0),We([d.observable.ref],Xe.prototype,"contextMenuState",void 0),We([d.action.bound],Xe.prototype,"handleContextMenuEvent",null),We([d.action.bound],Xe.prototype,"clearHtmlContextMenu",null);var Ze=n(64),et=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},tt=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class nt{constructor(e){this.goToSettings=e,this.initialized=Object(j.c)(()=>tt(this,void 0,void 0,(function*(){Ze.loginEvents.on("app_error",o.c),Object(Ze.initializeAuthUi)({refreshToken:!0,rememberLastLogin:!1}),this.subscriptionPlans=Object(j.d)(Object(Ze.loadPlanPricesUntilSuccess)()),Ze.loginEvents.on("authenticated",e=>tt(this,void 0,void 0,(function*(){var t;const n=null===(t=null==e?void 0:e.idTokenPayload)||void 0===t?void 0:t.email;n&&this.selectedPlan&&Object(Ze.prepareCheckout)(n,this.selectedPlan,"app"),yield this.updateUser(),Ze.loginEvents.emit("user_data_loaded")}))),Ze.loginEvents.on("authorization_error",e=>{e instanceof Ze.RefreshRejectedError&&(Object(Ze.logOut)(),this.logIn())}),this.updateUser(),setInterval(this.updateUser,6e5),Ze.loginEvents.on("logout",this.updateUser),console.log("Account store initialized")}))),this.user=Object(Ze.getLastUserData)(),this.accountDataLastUpdated=0,this.isAccountUpdateInProcess=!1,this.updateUser=Object(d.flow)(function*(){this.user=yield Object(Ze.getLatestUserData)(),this.accountDataLastUpdated=Date.now(),Object(o.d)(this.user.email),this.user.banned&&(alert("Your account has been blocked for abuse. Please contact help@httptoolkit.com."),window.close())}.bind(this)),this.getPro=Object(d.flow)(function*(e){try{const e=yield this.pickPlan();if(!e)return;if(this.isLoggedIn||(yield this.logIn()),!this.isLoggedIn||this.userHasSubscription)return void(this.isPastDueUser&&this.goToSettings());yield this.purchasePlan(this.user.email,e)}catch(e){Object(o.c)(e),alert((e.message||e.code||"Error")+"\n\nPlease check your email for details.\nIf you need help, get in touch at billing@httptoolkit.com."),this.modal=void 0}finally{this.selectedPlan=void 0}}.bind(this)),this.logIn=Object(d.flow)(function*(){let e=this.modal;this.modal="login";const t=yield Object(Ze.showLoginDialog)();return t?this.userHasSubscription?(this.modal=void 0,this.isPastDueUser&&this.goToSettings()):this.modal=e:this.modal=void 0,t}.bind(this)),this.pickPlan=Object(d.flow)((function*(){return this.selectedPlan=void 0,this.modal="pick-a-plan",yield Object(d.when)(()=>void 0===this.modal||!!this.selectedPlan),this.modal=void 0,this.selectedPlan?this.selectedPlan:this.isPaidUser,this.selectedPlan})),this.purchasePlan=Object(d.flow)((function*(e,t){Object(Ze.openNewCheckoutWindow)(e,t,"app"),this.modal="post-checkout",this.isAccountUpdateInProcess=!0,yield this.waitForUserUpdate(()=>this.isPaidUser||!this.modal),this.isAccountUpdateInProcess=!1,this.modal=void 0,this.isPaidUser})),this.waitForUserUpdate=Object(d.flow)((function*(e){let t=!0;const n=()=>{t=!0,this.updateUser()},r=()=>{t=!1};window.addEventListener("focus",n),window.addEventListener("blur",r),yield this.updateUser();let o=0;for(;!e();)yield Object(h.b)(1e3),o+=1,(t||o>10)&&(o=0,yield this.updateUser());e()&&!t&&window.focus(),window.removeEventListener("focus",n),window.removeEventListener("blur",r)})),this.cancelSubscription=Object(d.flow)((function*(){try{this.isAccountUpdateInProcess=!0,yield Object(Ze.cancelSubscription)(),yield this.waitForUserUpdate(()=>!this.user.subscription||"deleted"===this.user.subscription.status),console.log("Subscription cancellation confirmed")}catch(e){throw console.log(e),Object(o.c)("Subscription cancellation failed: "+(e.message||e)),e}finally{this.isAccountUpdateInProcess=!1}}))}get userEmail(){return this.user.email}get userSubscription(){return this.isPaidUser||this.isPastDueUser?this.user.subscription:void 0}get isLoggedIn(){return!!this.user.email}get featureFlags(){return s.clone(this.user.featureFlags)}get isStatusUnexpired(){var e,t;const n=null===(e=this.user.subscription)||void 0===e?void 0:e.expiry,r="active"===(null===(t=this.user.subscription)||void 0===t?void 0:t.status)?6048e5:0;return!!n&&n.valueOf()+r>Date.now()}get isPaidUser(){return!0}get isPastDueUser(){var e;return"past_due"===(null===(e=this.user.subscription)||void 0===e?void 0:e.status)&&this.isStatusUnexpired}get userHasSubscription(){return this.isPaidUser||this.isPastDueUser}get mightBePaidUser(){var e,t;return(null===(e=this.user.subscription)||void 0===e?void 0:e.status)&&"past_due"!==(null===(t=this.user.subscription)||void 0===t?void 0:t.status)&&(this.isStatusUnexpired||0===this.accountDataLastUpdated)}logOut(){Object(Ze.logOut)()}setSelectedPlan(e){this.selectedPlan=e||(this.modal=void 0)}cancelCheckout(){this.modal=this.selectedPlan=void 0}get canManageSubscription(){var e;return!!(null===(e=this.userSubscription)||void 0===e?void 0:e.canManageSubscription)}}et([d.observable],nt.prototype,"user",void 0),et([d.observable],nt.prototype,"accountDataLastUpdated",void 0),et([d.observable],nt.prototype,"isAccountUpdateInProcess",void 0),et([d.computed],nt.prototype,"userEmail",null),et([d.computed],nt.prototype,"userSubscription",null),et([d.observable],nt.prototype,"modal",void 0),et([d.observable],nt.prototype,"selectedPlan",void 0),et([d.computed],nt.prototype,"isLoggedIn",null),et([d.computed],nt.prototype,"featureFlags",null),et([d.computed],nt.prototype,"isStatusUnexpired",null),et([d.computed],nt.prototype,"isPaidUser",null),et([d.computed],nt.prototype,"isPastDueUser",null),et([d.computed],nt.prototype,"userHasSubscription",null),et([d.computed],nt.prototype,"mightBePaidUser",null),et([d.action.bound],nt.prototype,"logOut",null),et([d.action.bound],nt.prototype,"setSelectedPlan",null),et([d.action.bound],nt.prototype,"cancelCheckout",null);var rt=n(12),ot=n(146),st=n(66),at=n(651);function it(e){return e>0&&e<=65535}function ct(e){return!!(null==e?void 0:e.match(/^[A-Za-z0-9\-.]+(:\d+)?$/))}const lt={unspecified:"unknown",loopback:"this machine",private:"a local network device",uniqueLocal:"a local network device",unicast:""};function dt(e){let t;try{t=at.parse(e)}catch(t){return Object(o.c)("Failed to parse IP",{ip:e}),e}(function(e){return"ipv6"===e.kind()})(t)&&t.isIPv4MappedAddress()&&(t=t.toIPv4Address());const n=t.range(),r=(n in lt?lt[n]:n).replace(/([A-Z])/g," $1").toLowerCase().replace(/^rfc/,"see RFC ");return t.toNormalizedString()+(r?` (${r})`:"")}var ut=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},pt=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function ht(e){return void 0===e||e.endPort>=e.startPort&&it(e.startPort)&&it(e.endPort)}class mt{constructor(e){this.accountStore=e,this.mockRTCRequestBuilder=new ot.MockRTCAdminRequestBuilder,this.externalNetworkAddresses=[],this.dnsServers=[],this.ruleParameterKeys=[],this.initialized=Object(j.c)(()=>pt(this,void 0,void 0,(function*(){yield this.accountStore.initialized,yield this.loadSettings(),yield this.startIntercepting(),this.serverVersion=yield g.E,console.log(`Proxy store initialized (server version ${this.serverVersion})`)}))),this.startIntercepting=Object(d.flow)((function*(){this.adminClient=new rt.PluggableAdmin.AdminClient({adminServerUrl:"http://127.0.0.1:45456"}),this._http2CurrentlyEnabled=this.http2Enabled,this._currentTlsPassthroughConfig=s.cloneDeep(this.tlsPassthroughConfig),this.monitorRemoteClientConnection(this.adminClient),yield function e(t,n,r=500,o=200){return t.start(n).catch(s=>{var a;return console.log("Server initialization failed",s),s.response?(n=(null===(a=s.message)||void 0===a?void 0:a.includes("unrecognized plugin: webrtc"))?Object.assign(Object.assign({},n),{webrtc:void 0}):Object.assign(Object.assign({},n),{http:Object.assign(Object.assign({},n.http),{port:void 0})}),Object(h.b)(100).then(()=>e(t,n,r,o))):Object(h.b)(Math.min(o,r)).then(()=>e(t,n,r,1.2*o))})}(this.adminClient,{http:{options:{cors:!1,suggestChanges:!1,http2:this._http2CurrentlyEnabled,https:{tlsPassthrough:this._currentTlsPassthroughConfig}},port:this.portConfig},webrtc:{}}),this.mockttpRequestBuilder=new rt.MockttpPluggableAdmin.MockttpAdminRequestBuilder(this.adminClient.schema),Object(st.b)(),console.log("Server started"),yield Object(st.c)(this.httpProxyPort).then(e=>{this.certPath=e.certificatePath,this.certContent=e.certificateContent,this.certFingerprint=e.certificateFingerprint,this.setNetworkAddresses(e.networkInterfaces),this.systemProxyConfig=e.systemProxy,this.dnsServers=e.dnsServers,this.ruleParameterKeys=e.ruleParameterKeys,console.log("Config loaded")}),console.log("Server started on port "+this.httpProxyPort),window.addEventListener("beforeunload",()=>{this.adminClient.stop().catch(()=>{})})})),this.http2Enabled="fallback",this._http2CurrentlyEnabled=this.http2Enabled,this.tlsPassthroughConfig=[],this._currentTlsPassthroughConfig=[],this.setRequestRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockttpRequestBuilder.buildAddRequestRulesQuery(e,!0,t))},this.setWebSocketRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockttpRequestBuilder.buildAddWebSocketRulesQuery(e,!0,t))},this.setRTCRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockRTCRequestBuilder.buildSetRulesQuery(e,t))},this.onMockttpEvent=(e,t)=>{const n=this.mockttpRequestBuilder.buildSubscriptionRequest(e);return n?this.adminClient.subscribe(n,t):(console.warn("Ignoring subscription for event unrecognized by Mockttp client: "+e),Promise.resolve())},this.onMockRTCEvent=(e,t)=>{const n=this.mockRTCRequestBuilder.buildSubscriptionRequest(e);return n?this.adminClient.subscribe(n,t):(console.warn("Ignoring subscription for event unrecognized by MockRTC client: "+e),Promise.resolve())},this.refreshNetworkAddresses=Object(d.flow)((function*(){this.setNetworkAddresses(yield Object(st.f)())}))}loadSettings(){return pt(this,void 0,void 0,(function*(){const{accountStore:e}=this;Object(d.observe)(e,"accountDataLastUpdated",()=>{e.isPaidUser||(this.setPortConfig(void 0),this.http2Enabled="fallback",this.tlsPassthroughConfig=[])}),yield Object(O.a)({key:"server-store",store:this}),console.log("Proxy settings loaded")}))}monitorRemoteClientConnection(e){e.on("admin-client:stream-error",e=>{console.log("Admin client stream error"),Object(o.c)(e.message?e:new Error("Client stream error"),{cause:e})}),e.on("admin-client:subscription-error",e=>{console.log("Admin client subscription error"),Object(o.c)(e.message?e:new Error("Client subscription error"),{cause:e})}),e.on("admin-client:stream-reconnect-failed",e=>{Object(o.c)(e.message?e:new Error("Client reconnect error"),{cause:e})})}get portConfig(){return this._portConfig}setPortConfig(e){if(!ht(e))throw new TypeError("Invalid port config: "+JSON.stringify(e));!e||8e3===e.startPort&&65535===e.endPort?this._portConfig=void 0:this._portConfig=e}get httpProxyPort(){return this.adminClient.metadata.http.port}get http2CurrentlyEnabled(){return this._http2CurrentlyEnabled}get currentTlsPassthroughConfig(){return this._currentTlsPassthroughConfig}setNetworkAddresses(e){this.externalNetworkAddresses=s.flatMap(e,(e,t)=>e.filter(e=>!e.internal&&"IPv4"===e.family&&"docker0"!==t&&!t.startsWith("br-")&&!t.startsWith("veth")).map(e=>e.address))}}ut([d.observable.ref],mt.prototype,"adminClient",void 0),ut([d.observable],mt.prototype,"certPath",void 0),ut([d.observable],mt.prototype,"certContent",void 0),ut([d.observable],mt.prototype,"certFingerprint",void 0),ut([d.observable],mt.prototype,"externalNetworkAddresses",void 0),ut([d.observable],mt.prototype,"systemProxyConfig",void 0),ut([d.observable],mt.prototype,"dnsServers",void 0),ut([d.observable],mt.prototype,"ruleParameterKeys",void 0),ut([d.observable],mt.prototype,"serverVersion",void 0),ut([Object(O.b)("object"),d.observable],mt.prototype,"_portConfig",void 0),ut([d.computed],mt.prototype,"portConfig",null),ut([d.action],mt.prototype,"setPortConfig",null),ut([d.computed],mt.prototype,"httpProxyPort",null),ut([O.b,d.observable],mt.prototype,"http2Enabled",void 0),ut([Object(O.b)("list"),d.observable],mt.prototype,"tlsPassthroughConfig",void 0);var gt=n(18),ft=n(144),bt=n(79),yt=n(90);class vt extends yt.a{constructor(e){super(),this.failureEvent=e,this.id=bt(),this.upstreamHostname=this.failureEvent.hostname,this.remoteIpAddress=this.failureEvent.remoteIpAddress,this.remotePort=this.failureEvent.remotePort,this.failureCause=this.failureEvent.failureCause,this.tags=this.failureEvent.tags,this.timingEvents=this.failureEvent.timingEvents,this.searchIndex=[e.hostname,e.remoteIpAddress].filter(e=>!!e).join("\n")}isTlsFailure(){return!0}}var xt=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class wt extends yt.a{constructor(e){super(),this.openEvent=e,this.id=this.openEvent.id,this.remoteIpAddress=this.openEvent.remoteIpAddress,this.remotePort=this.openEvent.remotePort,this.upstreamHostname=this.openEvent.hostname,this.upstreamPort=this.openEvent.upstreamPort,this.tags=this.openEvent.tags,this.timingEvents=this.openEvent.timingEvents,this.open=!0,this.searchIndex=[e.hostname,e.remoteIpAddress].filter(e=>!!e).join("\n")}isTlsTunnel(){return!0}markClosed(e){this.timingEvents.disconnectTimestamp=e.timingEvents.disconnectTimestamp,this.open=!1}isOpen(){return this.open}}xt([d.observable],wt.prototype,"open",void 0);var Et=n(119),Ct=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Tt=e=>`${e.protocol}://${e.address}:${e.port}`;class jt extends yt.a{constructor(e){super(),this.connectionEvent=e,this.id=this.connectionEvent.sessionId,this.streams=d.observable.array([],{deep:!1})}isRTCConnection(){return!0}get peerId(){return this.connectionEvent.peerId}get localSessionDescription(){return this.connectionEvent.localSessionDescription}get remoteSessionDescription(){return this.connectionEvent.remoteSessionDescription}get source(){return Object(Et.c)(this.connectionEvent.metadata.userAgent)}get sourceURL(){if(this.connectionEvent.metadata.sourceURL)try{return new URL(this.connectionEvent.metadata.sourceURL)}catch(e){return}}get clientURL(){return Tt(this.connectionEvent.selectedRemoteCandidate)}attachExternalPeer(e,t){this.attachedConnection={externalConnection:e.externalConnection,otherHalf:t}}isOtherHalfOf(e){if(!this.attachedConnection)return!1;const{externalConnection:t}=this.attachedConnection,{externalConnection:n}=e,r=Tt(t.selectedLocalCandidate),o=Tt(t.selectedRemoteCandidate),s=Tt(n.selectedLocalCandidate);return r===Tt(n.selectedRemoteCandidate)&&s===o}connectOtherHalf(e){this.attachedConnection.otherHalf=e}get remoteCandidate(){if(!this.attachedConnection)return this.connectionEvent.selectedLocalCandidate;const{externalConnection:e,otherHalf:t}=this.attachedConnection;return t?t.connectionEvent.selectedRemoteCandidate:e.selectedRemoteCandidate}get remoteURL(){return Tt(this.remoteCandidate)}addStream(e){this.streams.push(e)}removeStream(e){this.streams.remove(e)}markClosed(e){this.closeData=e}get closeState(){return this.closeData}}Ct([d.computed],jt.prototype,"source",null),Ct([d.computed],jt.prototype,"sourceURL",null),Ct([d.computed],jt.prototype,"clientURL",null),Ct([d.observable],jt.prototype,"attachedConnection",void 0),Ct([d.action],jt.prototype,"attachExternalPeer",null),Ct([d.action],jt.prototype,"connectOtherHalf",null),Ct([d.computed],jt.prototype,"remoteCandidate",null),Ct([d.computed],jt.prototype,"remoteURL",null),Ct([d.action],jt.prototype,"addStream",null),Ct([d.action],jt.prototype,"removeStream",null),Ct([d.observable],jt.prototype,"closeData",void 0),Ct([d.action],jt.prototype,"markClosed",null);var Ot=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class St extends yt.a{constructor(e,t){super(),this.openEvent=e,this.connection=t,this.id=this.sessionId+":data:"+this.channelId,this.messages=[],this.pinned=!1}isRTCDataChannel(){return!0}get rtcConnection(){return this.connection}get sessionId(){return this.rtcConnection.id}get channelId(){return this.openEvent.channelId}get label(){return this.openEvent.channelLabel}get protocol(){return this.openEvent.channelProtocol}addMessage(e){this.messages.push(new A.a(e,this.messages.length))}markClosed(e){this.closeData=e}get closeState(){return this.closeData}cleanup(){this.messages.forEach(e=>e.cleanup()),this.messages.length=0}}Ot([d.observable],St.prototype,"messages",void 0),Ot([d.action],St.prototype,"addMessage",null),Ot([d.observable],St.prototype,"closeData",void 0),Ot([d.action],St.prototype,"markClosed",null),Ot([d.observable],St.prototype,"pinned",void 0);var kt=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Pt extends yt.a{constructor(e,t){super(),this.openEvent=e,this.connection=t,this.id=this.sessionId+":media:"+this.mid,this.stats=[],this._totalBytesSent=0,this._totalBytesReceived=0,this.pinned=!1}isRTCMediaTrack(){return!0}get rtcConnection(){return this.connection}get sessionId(){return this.rtcConnection.id}get mid(){return this.openEvent.trackMid}get direction(){return this.openEvent.trackDirection}get type(){return this.openEvent.trackType}addStats(e){const t=this.stats[this.stats.length-1];if((null==t?void 0:t.timestamp)<e.eventTimestamp-1500){Math.round((e.eventTimestamp-t.timestamp)/1e3)-1>0&&this.stats.push(...a.a.range(t.timestamp+1e3,e.eventTimestamp-500,1e3).map(e=>({timestamp:e,sentDelta:0,receivedDelta:0})))}this.stats.push({timestamp:e.eventTimestamp,sentDelta:e.totalBytesSent-this.totalBytesSent,receivedDelta:e.totalBytesReceived-this.totalBytesReceived}),this._totalBytesSent=e.totalBytesSent,this._totalBytesReceived=e.totalBytesReceived}get totalBytesSent(){return this._totalBytesSent}get totalBytesReceived(){return this._totalBytesReceived}markClosed(e){this.closeData=e}get closeState(){return this.closeData}cleanup(){this.stats.length=0}}kt([d.observable],Pt.prototype,"stats",void 0),kt([d.action],Pt.prototype,"addStats",null),kt([d.observable],Pt.prototype,"_totalBytesSent",void 0),kt([d.observable],Pt.prototype,"_totalBytesReceived",void 0),kt([d.observable],Pt.prototype,"closeData",void 0),kt([d.action],Pt.prototype,"markClosed",null),kt([d.observable],Pt.prototype,"pinned",void 0);var Rt=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Ht=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const qt=["request-initiated","request","response","websocket-request","websocket-accepted","websocket-message-received","websocket-message-sent","websocket-close","abort","tls-client-error","tls-passthrough-opened","tls-passthrough-closed","client-error"],At=["peer-connected","peer-disconnected","external-peer-attached","data-channel-opened","data-channel-message-sent","data-channel-message-received","data-channel-closed","media-track-opened","media-track-stats","media-track-closed"];class It{constructor(e,t,n){this.proxyStore=e,this.apiStore=t,this.rulesStore=n,this.initialized=Object(j.c)(()=>Ht(this,void 0,void 0,(function*(){yield Promise.all([this.proxyStore.initialized,this.apiStore.initialized,this.rulesStore.initialized]),qt.forEach(e=>{this.proxyStore.onMockttpEvent(e,t=>{this.isPaused||(this.eventQueue.push({type:e,event:t}),this.queueEventFlush())})}),At.forEach(e=>{this.proxyStore.onMockRTCEvent(e,t=>{this.isPaused||(this.eventQueue.push({type:e,event:t}),this.queueEventFlush())})}),console.log("Events store initialized")}))),this.isPaused=!1,this.eventQueue=[],this.orphanedEvents={},this.isFlushQueued=!1,this.events=d.observable.array([],{deep:!1}),this.updateFromQueuedEvent=e=>{try{switch(e.type){case"request-initiated":return this.addInitiatedRequest(e.event),this.checkForOrphan(e.event.id);case"request":return this.addCompletedRequest(e.event),this.checkForOrphan(e.event.id);case"response":return this.setResponse(e.event);case"websocket-request":return this.addWebSocketRequest(e.event),this.checkForOrphan(e.event.id);case"websocket-accepted":return this.addAcceptedWebSocketResponse(e.event);case"websocket-message-received":case"websocket-message-sent":return this.addWebSocketMessage(e.event);case"websocket-close":return this.markWebSocketClosed(e.event);case"abort":return this.markRequestAborted(e.event);case"tls-passthrough-opened":return this.addTlsTunnel(e.event),this.checkForOrphan(e.event.id);case"tls-passthrough-closed":return this.markTlsTunnelClosed(e.event);case"tls-client-error":return this.addFailedTlsRequest(e.event);case"client-error":return this.addClientError(e.event);case"peer-connected":return this.addRTCPeerConnection(e.event);case"external-peer-attached":return this.attachExternalRTCPeer(e.event);case"peer-disconnected":return this.markRTCPeerDisconnected(e.event);case"data-channel-opened":return this.addRTCDataChannel(e.event);case"data-channel-message-sent":case"data-channel-message-received":return this.addRTCDataChannelMessage(e.event);case"data-channel-closed":return this.markRTCDataChannelClosed(e.event);case"media-track-opened":return this.addRTCMediaTrack(e.event);case"media-track-stats":return this.addRTCMediaTrackStats(e.event);case"media-track-closed":return this.markRTCMediaTrackClosed(e.event)}}catch(e){Object(o.c)(e)}}}queueEventFlush(){this.isFlushQueued||(this.isFlushQueued=!0,requestAnimationFrame(this.flushQueuedUpdates))}get exchanges(){return this.events.filter(e=>e.isHttp())}get websockets(){return this.exchanges.filter(e=>e.isWebSocket())}get rtcConnections(){return this.events.filter(e=>e.isRTCConnection())}get rtcDataChannels(){return this.events.filter(e=>e.isRTCDataChannel())}get rtcMediaTracks(){return this.events.filter(e=>e.isRTCMediaTrack())}get activeSources(){return s(this.exchanges).map(e=>e.request.source).uniqBy(e=>e.summary).value()}flushQueuedUpdates(){this.isFlushQueued=!1,this.eventQueue.forEach(this.updateFromQueuedEvent),this.eventQueue=[]}checkForOrphan(e){const t=this.orphanedEvents[e];t&&(delete this.orphanedEvents[e],this.updateFromQueuedEvent(t))}togglePause(){this.isPaused=!this.isPaused}addInitiatedRequest(e){if(-1===s.findIndex(this.events,{id:e.id})){const t=new I.a(this.apiStore,e);this.events.push(t)}}getMatchedRule(e){if(!e.matchedRuleId)return!1;const t=Object(gt.f)(this.rulesStore.rules,{id:e.matchedRuleId});if(!t)return!1;if(Object(gt.k)(t))throw new Error("Request event unexpectedly matched rule group");return t}addCompletedRequest(e){const t=s.findIndex(this.events,{id:e.id});let n;t>=0?n=this.events[t]:(n=new I.a(this.apiStore,Object.assign({},e)),this.events.push(n)),n.updateFromCompletedRequest(e,this.getMatchedRule(e))}markRequestAborted(e){const t=s.find(this.exchanges,{id:e.id});t?t.markAborted(e):this.orphanedEvents[e.id]={type:"abort",event:e}}setResponse(e){const t=s.find(this.exchanges,{id:e.id});t?t.setResponse(e):this.orphanedEvents[e.id]={type:"response",event:e}}addWebSocketRequest(e){const t=new $(this.apiStore,Object.assign({},e));t.updateFromCompletedRequest(e,this.getMatchedRule(e)),this.events.push(t)}addAcceptedWebSocketResponse(e){const t=s.find(this.websockets,{id:e.id});t?(t.setResponse(e),t.setAccepted(e)):this.orphanedEvents[e.id]={type:"websocket-accepted",event:e}}addWebSocketMessage(e){const t=s.find(this.websockets,{id:e.streamId});t?t.addMessage(e):this.orphanedEvents[e.streamId]={type:"websocket-message-"+e.direction,event:e}}markWebSocketClosed(e){const t=s.find(this.websockets,{id:e.streamId});t?t.markClosed(e):this.orphanedEvents[e.streamId]={type:"websocket-close",event:e}}addTlsTunnel(e){this.events.push(new wt(e))}markTlsTunnelClosed(e){const t=s.find(this.events,{id:e.id});t?t.markClosed(e):this.orphanedEvents[e.id]={type:"tls-passthrough-closed",event:close}}addFailedTlsRequest(e){s.some(this.events,t=>t.isTlsFailure()&&t.upstreamHostname===e.hostname&&t.remoteIpAddress===e.remoteIpAddress)||this.events.push(new vt(e))}addClientError(e){if("ECONNRESET"===e.errorCode&&!e.request.method&&!e.request.url)return;if("ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"===e.errorCode)return;const t=new I.a(this.apiStore,Object.assign(Object.assign({},e.request),{protocol:e.request.protocol||"",method:e.request.method||"",url:e.request.url||(e.request.protocol||"http")+"://",path:e.request.path||"/",headers:e.request.headers}));"aborted"===e.response?t.markAborted(e.request):t.setResponse(e.response),this.events.push(t)}addRTCPeerConnection(e){this.events.push(new jt(e))}attachExternalRTCPeer(e){const t=this.rtcConnections.find(t=>t.id===e.sessionId),n=this.rtcConnections.find(t=>t.isOtherHalfOf(e));t?(t.attachExternalPeer(e,n),n&&n.connectOtherHalf(t)):this.orphanedEvents[e.sessionId]={type:"external-peer-attached",event:e}}markRTCPeerDisconnected(e){const t=this.rtcConnections.find(t=>t.id===e.sessionId);t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"peer-disconnected",event:e}}addRTCDataChannel(e){const t=this.rtcConnections.find(t=>t.id===e.sessionId);if(t){const n=new St(e,t);this.events.push(n),t.addStream(n)}else this.orphanedEvents[e.sessionId]={type:"data-channel-opened",event:e}}addRTCDataChannelMessage(e){const t=this.rtcDataChannels.find(t=>t.sessionId===e.sessionId&&t.channelId===e.channelId);t?t.addMessage(e):this.orphanedEvents[e.sessionId]={type:"data-channel-message-"+e.direction,event:e}}markRTCDataChannelClosed(e){const t=this.rtcDataChannels.find(t=>t.sessionId===e.sessionId&&t.channelId===e.channelId);t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"data-channel-closed",event:e}}addRTCMediaTrack(e){const t=this.rtcConnections.find(t=>t.id===e.sessionId);if(t){const n=new Pt(e,t);this.events.push(n),t.addStream(n)}else this.orphanedEvents[e.sessionId]={type:"media-track-opened",event:e}}addRTCMediaTrackStats(e){const t=this.rtcMediaTracks.find(t=>t.sessionId===e.sessionId&&t.mid===e.trackMid);t?t.addStats(e):this.orphanedEvents[e.sessionId]={type:"media-track-stats",event:e}}markRTCMediaTrackClosed(e){const t=this.rtcMediaTracks.find(t=>t.sessionId===e.sessionId&&t.mid===e.trackMid);t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"media-track-closed",event:e}}deleteEvent(e){if(this.events.remove(e),e.isRTCDataChannel()||e.isRTCMediaTrack())e.rtcConnection.removeStream(e);else if(e.isRTCConnection()){[...e.streams].forEach(e=>this.deleteEvent(e))}"cleanup"in e&&e.cleanup()}clearInterceptedData(e){const[t,n]=s.partition(this.events,e?()=>!1:e=>e.pinned);this.events.clear(),n.forEach(e=>{"cleanup"in e&&e.cleanup()}),this.events.push(...t),this.orphanedEvents={},"gc"in window&&window.gc()}loadFromHar(e){return Ht(this,void 0,void 0,(function*(){const{events:t,pinnedIds:n}=yield Object(ft.c)(e).catch(e=>{throw e.errors.forEach(e=>{console.log(e)}),e}),[r,o]=s.partition(t,({type:e})=>"request"===e||"websocket-request"===e||"tls-client-error"===e);this.eventQueue.push(...s.sortBy(r,e=>e.event.timingEvents.startTime)),this.eventQueue.push(...o),this.queueEventFlush(),n.length&&requestAnimationFrame(Object(d.action)(()=>n.forEach(e=>{this.events.find(t=>t.id===e).pinned=!0})))}))}recordSentRequest(e){const t=new I.a(this.apiStore,Object.assign({},e));return t.updateFromCompletedRequest(e,!1),this.events.push(t),t}}Rt([d.observable],It.prototype,"isPaused",void 0),Rt([d.computed.struct],It.prototype,"exchanges",null),Rt([d.computed.struct],It.prototype,"websockets",null),Rt([d.computed.struct],It.prototype,"rtcConnections",null),Rt([d.computed.struct],It.prototype,"rtcDataChannels",null),Rt([d.computed.struct],It.prototype,"rtcMediaTracks",null),Rt([d.computed.struct],It.prototype,"activeSources",null),Rt([d.action.bound],It.prototype,"flushQueuedUpdates",null),Rt([d.action.bound],It.prototype,"togglePause",null),Rt([d.action],It.prototype,"addInitiatedRequest",null),Rt([d.action],It.prototype,"addCompletedRequest",null),Rt([d.action],It.prototype,"markRequestAborted",null),Rt([d.action],It.prototype,"setResponse",null),Rt([d.action],It.prototype,"addWebSocketRequest",null),Rt([d.action],It.prototype,"addAcceptedWebSocketResponse",null),Rt([d.action],It.prototype,"addWebSocketMessage",null),Rt([d.action],It.prototype,"markWebSocketClosed",null),Rt([d.action],It.prototype,"addTlsTunnel",null),Rt([d.action],It.prototype,"markTlsTunnelClosed",null),Rt([d.action],It.prototype,"addFailedTlsRequest",null),Rt([d.action],It.prototype,"addClientError",null),Rt([d.action],It.prototype,"addRTCPeerConnection",null),Rt([d.action],It.prototype,"attachExternalRTCPeer",null),Rt([d.action],It.prototype,"markRTCPeerDisconnected",null),Rt([d.action],It.prototype,"addRTCDataChannel",null),Rt([d.action],It.prototype,"addRTCDataChannelMessage",null),Rt([d.action],It.prototype,"markRTCDataChannelClosed",null),Rt([d.action],It.prototype,"addRTCMediaTrack",null),Rt([d.action],It.prototype,"addRTCMediaTrackStats",null),Rt([d.action],It.prototype,"markRTCMediaTrackClosed",null),Rt([d.action.bound],It.prototype,"deleteEvent",null),Rt([d.action.bound],It.prototype,"clearInterceptedData",null),Rt([d.action],It.prototype,"recordSentRequest",null);var Dt=n(653),$t=n(7),Mt=n(23);function Ft(e,...t){return n=>i.createElement(e,Object.assign({},s.omit(n,t)))}function Bt(e){e.target===e.currentTarget&&"Enter"===e.key&&e.currentTarget.dispatchEvent(new MouseEvent("click",{bubbles:!0}))}const Nt=e=>t=>{t.stopPropagation(),e(t)},Lt=(e,t)=>n=>{const r=n.value;return!r||e(r)?n.setCustomValidity(""):n.setCustomValidity(t),n.reportValidity(),n.validity.valid};var Ut=n(20),Wt=n(27);const zt=Object(p.j)(Ft($t.b,"inverted")).attrs(e=>({icon:["fas","times"],size:"2x",tabIndex:0,onClick:e.onClose,onKeyPress:Bt}))`
    position: absolute;
    z-index: 1;
    cursor: pointer;

    color: ${e=>e.inverted?e.theme.mainBackground:e.theme.mainColor};

    top: ${e=>e.top||"10px"};
    right: ${e=>e.right||"15px"};

    &:hover {
        opacity: 0.6;
    }
`,_t=Object(p.j)($t.b).attrs(()=>({icon:["fas","external-link-alt"]}))`
    opacity: 0.5;
    margin-left: 5px;

    &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }
`,Vt=p.j.a`
    &[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Gt=e=>e.href?i.createElement(Vt,Object.assign({},e,{target:"_blank",rel:"noreferrer noopener"}),e.children?i.createElement(i.Fragment,null,e.children," "):null,i.createElement(_t,null)):null;var Jt=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Kt=p.j.div`
    z-index: 0;

    position: absolute;
    bottom: -10px;
    right: -10px;
    z-index: 0;
    opacity: 0.2;

    > svg {
        &:not(:first-child) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`,Yt=Object(p.j)(Ut.d)`
    height: 100%;
    width: 100%;
    overflow: hidden;

    ${e=>{if(!e.expanded||!e.uiConfig)return`order: ${e.index};`;const t=Math.min(e.uiConfig.columnWidth,e.gridWidth),n=e.uiConfig.rowHeight;return`\n            order: ${Math.max(-1,e.index-t)};\n            grid-row: span ${n};\n            grid-column: span ${t};\n        `}}

    user-select: none;

    > :not(${Kt}) {
        z-index: 1;
    }

    > h1:not(:last-child) {
        margin-bottom: 10px;
    }

    > p {
        color: ${e=>e.theme.mainColor};
        line-height: 1.2;

        &:not(:first-of-type) {
            margin-top: 10px;
        }
    }

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,Qt=p.j.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0,0,0,0.2);
    box-shadow: inset 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    display: flex;
    align-items: center;
    justify-content: center;
`,Xt=Object(p.j)(Wt.a)`
    white-space: normal; /* Useful for layout in tiny screens, e.g. the 'proxy port' badge */

    margin-top: auto;
`;let Zt=class extends i.Component{constructor(e){super(e),this.expanded=!1,this.cardRef=i.createRef(),this.onActivationStarted=()=>{this.props.interceptor.id},this.activateInterceptor=(e={})=>{const{interceptor:t,interceptorStore:n}=this.props;return n.activateInterceptor(t.id,e)},this.onActivationSuccessful=(e={})=>{this.props.interceptor.id,!1!==e.showRequests&&this.props.showRequests()}}render(){const{expanded:e,onActivationStarted:t,activateInterceptor:n,onActivationSuccessful:r}=this,{interceptor:o,index:a}=this.props,c=!o.isActivable,{uiConfig:l}=o,d=null==l?void 0:l.configComponent,u=s.isArray(o.iconProps)?o.iconProps:[o.iconProps],h=Mt.j.width>=p.b?4:3;return i.createElement(Yt,{ref:this.cardRef,index:a,expanded:e,uiConfig:l,gridWidth:h,disabled:c,onKeyDown:Bt,onClick:this.expanded?void 0:this.onClick,tabIndex:c||this.expanded?void 0:0},i.createElement(Kt,null,u.map((e,t)=>i.createElement($t.b,Object.assign({key:t,size:"8x"},e)))),i.createElement("h1",null,o.name),d&&e?i.createElement(i.Fragment,null,i.createElement(zt,{onClose:this.onClose}),i.createElement(d,{interceptor:o,activateInterceptor:n,reportStarted:t,reportSuccess:r,closeSelf:this.onClose})):i.createElement(i.Fragment,null,o.description.map((e,t)=>i.createElement("p",{key:t},e)),function(e){var t,n;if(null===(t=e.uiConfig)||void 0===t?void 0:t.customPill){const t=null===(n=e.uiConfig)||void 0===n?void 0:n.customPill;return i.createElement(t,null)}return e.isActive?i.createElement(Xt,{color:"#4caf7d"},"Activated"):e.isActivable?null:e.isSupported?i.createElement(Xt,null,"Not available",e.notAvailableHelpUrl?i.createElement(Gt,{href:e.notAvailableHelpUrl}):null):i.createElement(Xt,{color:p.i},"Coming soon")}(o),o.inProgress&&i.createElement(Qt,null,i.createElement($t.b,{icon:["fac","spinner-arc"],size:"4x",spin:!0}))))}onClick(){const{onActivationStarted:e,activateInterceptor:t,onActivationSuccessful:n}=this,{interceptor:r}=this.props;r.inProgress||(r.isActivable?r.uiConfig?(this.expanded=!0,requestAnimationFrame(()=>{var e;null===(e=this.cardRef.current)||void 0===e||e.scrollIntoView({block:"nearest",behavior:"smooth"})})):(e(),t(r.activationOptions).then(()=>n()).catch(e=>Object(o.c)(e))):e())}onClose(){this.expanded=!1}};Jt([d.observable],Zt.prototype,"expanded",void 0),Jt([d.action.bound],Zt.prototype,"onClick",null),Jt([d.action.bound],Zt.prototype,"onClose",null),Zt=Jt([Object(u.d)("interceptorStore"),u.e],Zt);var en=n(14);const tn=p.j.div`
    display: flex;
    flex-direction: row;
    user-select: text;
    margin-top: 5px;
`,nn=p.j.div`
    flex: 1 1 0;

    &:not(:last-child) {
        margin-right: 40px;
    }

    > h2 {
        font-size: ${e=>e.theme.headingSize};
        margin-bottom: 10px;
    }

    > ol {
        list-style: decimal;

        > li {
            margin-left: 20px;
            margin-bottom: 10px;
        }
    }

    > p {
        line-height: 1.3;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    strong {
        font-weight: bold;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,rn=p.j.span`
    white-space: nowrap;
`,on=Object(u.d)("proxyStore")(Object(u.e)(e=>i.createElement(Xt,{color:"#4caf7d"},"Proxy port: ",e.proxyStore.httpProxyPort))),sn=Object(p.j)(e=>i.createElement(Wt.b,{className:e.className,onClick:()=>Object(Mt.f)("http-toolkit-ca-certificate.crt","application/x-x509-ca-cert",e.certContent)},i.createElement($t.b,{icon:["fas","download"]})," Export CA certificate"))`
    margin: 0 0 10px 0;
`,an={rowHeight:1,columnWidth:4,configComponent:Object(u.d)("proxyStore")(e=>{i.useEffect(()=>e.reportStarted(),[]);const{httpProxyPort:t,certPath:n,certContent:r}=e.proxyStore;return i.createElement(u.a,null,()=>i.createElement(tn,null,i.createElement(nn,null,i.createElement("p",null,"To intercept traffic you need to:"),i.createElement("ol",null,i.createElement("li",null,i.createElement("strong",null,"send your traffic via the HTTP Toolkit proxy")),i.createElement("li",null,i.createElement("strong",null,"trust the certificate authority")," (if using HTTPS) ")),i.createElement("p",null,"The steps to do this manually depend on the client, but all the details you'll need are shown here."),i.createElement("p",null,"Want your client to be supported automatically? ",i.createElement(rn,null,i.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"Send some feedback")),".")),i.createElement(nn,null,i.createElement("h2",null,"1. Send traffic via HTTP Toolkit"),i.createElement("p",null,"To intercept an HTTP client on this machine, configure it to send traffic via"," ",i.createElement(en.h,null,"http://localhost:",t),"."),i.createElement("p",null,"Most tools can be configured to do so by using the above address as an HTTP or HTTPS proxy."),i.createElement("p",null,"In other cases, it's also possible to forcibly reroute traffic using networking tools like iptables."),i.createElement("p",null,"Remote clients (e.g. phones) will need to use the IP address of this machine, not localhost.")),i.createElement(nn,null,i.createElement("h2",null,"2. Trust the certificate authority"),i.createElement("p",null,i.createElement("em",null,"Only required to intercept traffic that uses HTTPS")),i.createElement("p",null,"HTTP Toolkit has generated a certificate authority (CA) on your machine. All intercepted HTTPS uses certificates from this CA."),r?i.createElement(sn,{certContent:r}):i.createElement("p",null,"The certificate is stored on your machine at ",i.createElement(en.h,null,n),"."),i.createElement("p",null,"To intercept HTTPS traffic you need to configure your HTTP client to trust this certificate as a certificate authority, or to temporarily disable certificate checks entirely."))))}),customPill:on};var cn=n(44);const ln=Object(p.j)(cn.a)`
    color: ${e=>e.theme.mainColor};

    &:hover, &:focus {
        color: ${e=>e.theme.popColor};
        outline: none;
    }

    &:active {
        color: ${e=>e.theme.mainColor};
    }
`,dn=()=>{const[e,t]=i.useState(),[n,r]=i.useState();return[n,()=>{r(!0),e&&(clearTimeout(e),t(void 0)),t(setTimeout(()=>r(void 0),2e3))}]},un=e=>{const[t,n]=dn();return i.createElement(ln,{title:"Copy this to your clipboard",className:e.className,icon:t?["fas","check"]:["far","copy"],fixedWidth:!0,onClick:()=>{Object(Mt.b)(e.content),n(),e.onClick()}})},pn=e=>{const[t,n]=dn();return i.createElement(Wt.b,{tabIndex:0,onClick:()=>{Object(Mt.b)(e.content),n()}},i.createElement($t.b,{icon:t?["fas","check"]:["far","copy"],fixedWidth:!0}),e.children)};var hn=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},mn=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const gn=Object(p.j)(e=>i.createElement("div",{className:e.className},i.createElement("code",{onCopy:e.onCopy},e.children),i.createElement(un,{onClick:e.onCopy,content:e.children})))`
    display: inline-block;
    margin-top: 20px;

    ${e=>e.disabled&&p.f`
        opacity: 0.5;
        pointer-events: none;
    `}

    background-color: ${e=>e.theme.inputBackground};
    &:hover {
        background-color: ${e=>e.theme.inputHoverBackground};
    }
    border: solid 1px ${e=>e.theme.inputBorder};
    color: ${e=>e.theme.inputColor};

    padding: 10px 75px 10px 20px;
    border-radius: 4px;

    > code {
        font-family: ${e=>e.theme.monoFontFamily};
        user-select: all;
    }

    position: relative;
    > button {
        padding: 10px 20px 10px 20px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;

        border-radius: 0 4px 4px 0;
        border-left: solid 1px ${e=>e.theme.containerBorder};

        background-color: ${e=>e.theme.mainLowlightBackground};

        &:active {
            background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
        }
    }

    > svg {
        margin: 1px 0 2px;
    }
`,fn=p.j.div`
    user-select: text;

    > select {
        display: block;
        margin-top: 20px;
        margin-left: 0;
    }
`;let bn=class extends i.Component{constructor(){super(...arguments),this.reportedActivated=!1,this.shellCommands={"...":{command:'eval "$(curl -sS localhost:..../setup)"',description:""}},this.selectedShell="..."}get interceptCommand(){return this.shellCommands[this.selectedShell].command}get shellDescription(){return this.shellCommands[this.selectedShell].description}get shouldShowDropdown(){const e="fulfilled"!==g.E.state||Object(g.F)(g.E.value,g.p),t="..."===this.selectedShell||Object.keys(this.shellCommands).length>1;return e&&t}selectShell(e){this.selectedShell=e,this.props.uiStore.preferredShell=e}reportActivated(){this.reportedActivated||(this.reportedActivated=!0,this.props.reportStarted())}componentDidMount(){return mn(this,void 0,void 0,(function*(){const{port:e,commands:t}=yield this.props.activateInterceptor();if(Object(d.runInAction)(()=>{this.shellCommands=t||{Bash:{command:`eval "$(curl -sS localhost:${e}/setup)"`,description:"Bash-compatible"}};const{preferredShell:n}=this.props.uiStore;n&&n in this.shellCommands&&(this.selectedShell=n),this.shellCommands[this.selectedShell]||(this.selectedShell=Object.keys(this.shellCommands)[0])}),this.props.interceptor.isActive)this.reportedActivated=!0;else{const e=setInterval(()=>{this.props.interceptorStore.refreshInterceptors()},2e3);Object(u.c)(this,()=>clearInterval(e)),Object(d.when)(()=>this.props.interceptor.isActive,()=>{this.reportActivated(),this.props.reportSuccess(),clearInterval(e)})}}))}render(){return i.createElement(fn,null,i.createElement("p",null,"Run the command below in any ",this.shellDescription," terminal on this machine, to immediately enable interception for all new processes started there."),this.shouldShowDropdown?i.createElement(Wt.c,{onChange:this.selectShell,value:this.selectedShell,options:Object.keys(this.shellCommands)}):null,i.createElement(gn,{onCopy:this.reportActivated,disabled:"..."===this.selectedShell},this.interceptCommand))}};hn([d.observable],bn.prototype,"reportedActivated",void 0),hn([d.observable],bn.prototype,"shellCommands",void 0),hn([d.observable],bn.prototype,"selectedShell",void 0),hn([d.computed],bn.prototype,"interceptCommand",null),hn([d.computed],bn.prototype,"shellDescription",null),hn([d.computed],bn.prototype,"shouldShowDropdown",null),hn([d.action.bound],bn.prototype,"selectShell",null),hn([d.action.bound],bn.prototype,"reportActivated",null),bn=hn([Object(u.d)("interceptorStore"),Object(u.d)("accountStore"),Object(u.d)("uiStore"),u.e],bn);const yn={columnWidth:2,rowHeight:1,configComponent:bn};var vn=n(13),xn=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},wn=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const En=p.j.div`
    user-select: text;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`,Cn=p.j.div`
    flex: 1 1 100%;
`,Tn=p.j.hr`
    width: 100%;
    margin: 0 0 10px 0;
    border-top: solid 1px ${e=>e.theme.containerBorder};
`,jn=Object(p.j)(vn.a)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;

    width: 100%;
    flex-shrink: 0;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,On=p.j.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    flex-shrink: 0;
`,Sn=Object(p.j)(vn.c)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;

    width: 100%;
    word-break: break-word;
`,kn=Object(p.j)(vn.f)`
    &:hover {
        opacity: 0.6;
    }
`,Pn=navigator.platform.startsWith("Mac")?"mac":navigator.platform.startsWith("Win")?"win":navigator.platform.includes("Linux")?"linux":"unknown";let Rn=class extends i.Component{constructor(){super(...arguments),this.selectApplication=()=>wn(this,void 0,void 0,(function*(){var e;const t=null!==(e=Le.a.selectApplication)&&void 0!==e?e:()=>Object(Mt.g)("path"),n=yield t();n?this.runApplication(n).then(()=>{this.props.uiStore.rememberElectronPath(n)}):this.props.closeSelf()}))}componentDidMount(){return wn(this,void 0,void 0,(function*(){const{previousElectronAppPaths:e}=this.props.uiStore;0===e.length&&(this.selectApplication(),"mac"!==Pn&&this.props.closeSelf())}))}runApplication(e){return wn(this,void 0,void 0,(function*(){const{activateInterceptor:t,reportStarted:n,reportSuccess:r}=this.props;n(),t({pathToApplication:e}).then(()=>{r()}).catch(t=>{this.props.uiStore.forgetElectronPath(e),Object(o.c)(t)})}))}render(){const e=this.props.uiStore,{previousElectronAppPaths:t,forgetElectronPath:n}=e,r="mac"===Pn?"application":"win"===Pn?"exe":"linux"===Pn?"binary":"application",o="a"===(a=r)[0]||"e"===a[0]?"an":"a";var a;return i.createElement(En,null,i.createElement("p",null,"Start an Electron ",r," with HTTP Toolkit's settings injected, to intercept all its HTTP & HTTPS traffic."),"mac"===Pn&&t.length<2&&i.createElement("p",null,"For .app bundles, you can intercept either the bundle (the .app directory) or the executable itself, typically stored in Contents/MacOS inside the bundle."),i.createElement("p",null,t.length?`You can also rerun a previously started ${r}, using the buttons below`:`Once you've run ${o} ${r}, it'll be saved and shown here so you can rerun it later`,"."),i.createElement(Cn,null),i.createElement(jn,{onClick:this.selectApplication},"Select ",o," ",r),t.length>0&&i.createElement(Tn,null),t.map(e=>i.createElement(On,{key:e},i.createElement(Sn,{title:e,onClick:()=>this.runApplication(e)},"Start ",function(e){if("win"===Pn)return s.last(e.split("\\"));{const t=e.split("/").filter(e=>"bin"!==e&&"run"!==e),n=s.find(t,e=>e.endsWith(".app"));return n?n.slice(0,-4):t[t.length-1]}}(e)),i.createElement(kn,{onClick:()=>n(e)},i.createElement($t.b,{icon:["fas","times"]})))))}};Rn=xn([Object(u.d)("uiStore"),u.e],Rn);const Hn={columnWidth:1,rowHeight:2,configComponent:Rn};var qn=n(654),An=n(19),In=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Dn=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const $n=p.j.div`
    user-select: text;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    > canvas {
        margin: 0 auto;
        /* Without white padding, the QR code sometimes isn't scannable */
        padding: 5px;
        background-color: #fff;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Mn=p.j.div`
    flex: 1 1 100%;
`;function Fn(e){return e.exchanges.filter(e=>"http://android.httptoolkit.tech/config"===e.request.url).map(e=>e.id)}function Bn(e,t,n,r){t.ensureRuleExists({id:"default-android-certificate",type:"http",activated:!0,matchers:[new An.i.GET,new rt.matchers.SimplePathMatcher("http://android.httptoolkit.tech/config")],completionChecker:new rt.completionCheckers.Always,handler:new An.o(200,void 0,JSON.stringify({certificate:e}),{"content-type":"application/json"})});const o=Fn(n);Object(d.when)(()=>s.difference(Fn(n),o).length>0).then(()=>{r()})}let Nn=class extends i.Component{componentDidMount(){return Dn(this,void 0,void 0,(function*(){const e=this.props.rulesStore,t=this.props.eventsStore,n=this.props.proxyStore,{reportStarted:r,reportSuccess:s}=this.props;n.refreshNetworkAddresses().then(()=>{0===n.externalNetworkAddresses.length&&(alert("Cannot activate Android interception as no network addresses could be detected.\n\nPlease open an issue at github.com/httptoolkit/httptoolkit"),Object(o.c)("Android QR activation failed - no network addresses"),this.props.closeSelf())}),Bn(n.certContent,e,t,0===Fn(t).length?s:()=>s({showRequests:!1})),r()}))}render(){const{certFingerprint:e,httpProxyPort:t,externalNetworkAddresses:n}=this.props.proxyStore,r={addresses:n,port:t,certFingerprint:e},o=(s=JSON.stringify(r),Object(P.l)(s).toString("base64").replace(/\+/g,"-").replace(/\//g,"_"));var s;return i.createElement($n,null,i.createElement("p",null,"Scan the QR code below on your device to install the HTTP Toolkit app, and start intercepting HTTP & HTTPS traffic."),i.createElement("p",null,"Don't have a barcode scanner? Install the ",i.createElement("a",{href:"https://play.google.com/store/apps/details?id=tech.httptoolkit.android.v1&referrer="+o,target:"_blank",rel:"noreferrer noopener"},"HTTP Toolkit app")," manually instead."),i.createElement(Mn,null),i.createElement(qn,{size:160,value:"https://android.httptoolkit.tech/connect/?data="+o}),i.createElement(Mn,null),i.createElement("p",null,"Once activated, this will send all HTTP & HTTPS traffic to HTTP Toolkit, and configure the device to trust its HTTPS certificate by default."),i.createElement("p",null,i.createElement("strong",null,"This won't work immediately for all apps.")," Some may need changes to trust HTTP Toolkit for HTTPS traffic. ",i.createElement("a",{href:"https://httptoolkit.com/docs/guides/android",target:"_blank",rel:"noreferrer noopener"},"See the docs")," for more details."))}};Nn=In([Object(u.d)("proxyStore"),Object(u.d)("rulesStore"),Object(u.d)("eventsStore"),u.e],Nn);const Ln={columnWidth:2,rowHeight:2,configComponent:Nn};var Un=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Wn=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const zn=p.j.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,_n=p.j.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    height: 100%;
`,Vn=p.j.li`
    margin: 0 -15px -15px;
    padding: 15px;
`,Gn=Object(p.j)(vn.a)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;
    width: 100%;

    > svg {
        margin-right: 10px;
    }
`;let Jn=class extends i.Component{constructor(){super(...arguments),this.inProgressIds=[],this.onSuccess=()=>{this.props.reportSuccess({showRequests:this.deviceIds.length<=1})}}get deviceIds(){var e;return(null===(e=this.props.interceptor.metadata)||void 0===e?void 0:e.deviceIds)||[]}componentDidMount(){return Wn(this,void 0,void 0,(function*(){1===this.deviceIds.length&&(this.interceptDevice(this.deviceIds[0]),this.props.closeSelf())}))}render(){return i.createElement(zn,null,i.createElement("p",null,"There are multiple ADB devices connected."),i.createElement("p",null,"Pick which device you'd like to intercept:"),i.createElement(_n,null,this.deviceIds.map(e=>{const t=this.inProgressIds.includes(e);return i.createElement(Vn,{key:e},i.createElement(Gn,{disabled:t,onClick:t?s.noop:()=>this.interceptDevice(e)},t?i.createElement($t.b,{icon:["fas","spinner"],spin:!0}):e.includes("emulator-")?i.createElement($t.b,{icon:["far","window-maximize"]}):e.match(/\d+\.\d+\.\d+\.\d+:\d+/)?i.createElement($t.b,{icon:["fas","network-wired"]}):i.createElement($t.b,{icon:["fas","mobile-alt"]}),e))})))}interceptDevice(e){const{inProgressIds:t,onSuccess:n,props:{proxyStore:r,rulesStore:o,eventsStore:a,reportStarted:i,activateInterceptor:c}}=this;Bn(r.certContent,o,a,n),i();const l=c({deviceId:e});t.push(e),l.finally(Object(d.action)(()=>{s.pull(t,e)}))}};Un([d.computed],Jn.prototype,"deviceIds",null),Un([d.observable],Jn.prototype,"inProgressIds",void 0),Un([d.action.bound],Jn.prototype,"interceptDevice",null),Jn=Un([Object(u.d)("proxyStore"),Object(u.d)("rulesStore"),Object(u.d)("eventsStore"),Object(u.d)("accountStore"),u.e],Jn);const Kn={columnWidth:1,rowHeight:2,configComponent:Jn};var Yn=n(22),Qn=n.n(Yn),Xn=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Zn=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};let er=class extends i.Component{componentDidMount(){return Zn(this,void 0,void 0,(function*(){const{activateInterceptor:e,reportStarted:t,reportSuccess:n,closeSelf:r}=this.props;r();try{yield e({},!1),t()}catch(n){if(!n.metadata||!0!==n.metadata.closeConfirmRequired)throw t(),n;if(!confirm(Qn.a`
                Your browser is currently open, and needs to be
                restarted to enable interception. Restart it now?
            `.replace("\n"," ")))return;t(),yield e({closeConfirmed:!0})}n()}))}render(){return null}};er=Xn([u.e],er);const tr={columnWidth:1,rowHeight:1,configComponent:er};var nr=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const rr=p.j.div`
    text-align: center;
`,or=Object(p.j)($t.b).attrs(()=>({icon:["fas","spinner"],spin:!0,size:"2x"}))`
    display: block;
    margin: 0 auto 10px;
`,sr=p.j.div`
    max-height: 279px;
    overflow-y: auto;
    margin: 10px -15px;
`,ar=p.j.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
`,ir=p.j.li`
    margin-bottom: -10px;
    padding: 10px;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
        margin-bottom: 0;
    }
`,cr=Object(p.j)(vn.a)`
    font-size: ${e=>e.theme.textSize};
    padding: 10px;
    width: 100%;

    display: flex;
    align-items: center;

    ${e=>"active"===e.state&&"&& { background-color: #4caf7d; }"}
`,lr=Object(p.j)($t.b)`
    margin-right: 10px;
`,dr=p.j.span`
    flex-grow: 1;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;

    ${e=>"left"===e.ellipseDirection?"direction: rtl;":""}
`;let ur=class extends i.Component{render(){const{targetName:e,targets:t,interceptTarget:n,ellipseDirection:r}=this.props;return 0===t.length?i.createElement(rr,null,i.createElement(or,null),"Looking for running ",e," to intercept..."):i.createElement(sr,null,i.createElement(ar,null,s.map(t,e=>i.createElement(ir,{key:e.id},i.createElement(cr,{title:e.title,state:e.status,disabled:"available"!==e.status,onClick:"available"===e.status?()=>n(e.id):s.noop},"activating"===e.status?i.createElement(lr,{icon:["fas","spinner"],spin:!0}):"active"===e.status?i.createElement(lr,{icon:["fas","check"]}):null,i.createElement(dr,{ellipseDirection:r},e.content))))))}};ur=nr([u.e],ur);var pr=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let hr=class extends i.Component{constructor(){super(...arguments),this.jvmTargets={},this.updateTargets=Object(d.flow)(function*(){var e;const t=yield Object(st.d)("attach-jvm");this.jvmTargets=null!==(e=null==t?void 0:t.jvmTargets)&&void 0!==e?e:{}}.bind(this)),this.inProgressPids=[]}componentDidMount(){this.updateTargets();const e=setInterval(this.updateTargets,2e3);Object(u.c)(this,()=>clearInterval(e))}render(){const e=Object.values(this.jvmTargets).filter(e=>!e.name.startsWith("org.apache.maven.wrapper.MavenWrapperMain ")),t=this.props.proxyStore.httpProxyPort;return i.createElement(mr,null,i.createElement("p",null,"Pick which JVM process you'd like to intercept:"),i.createElement(ur,{targetName:"JVM processes",interceptTarget:this.interceptTarget,ellipseDirection:"left",targets:e.map(e=>{const n=this.inProgressPids.includes(e.pid),r=void 0!==e.interceptedByProxy,o=e.interceptedByProxy===t,s=e.name.split(" ")[0];let a,c;if(!s.includes("/")&&!s.includes("\\")){const[e,...t]=s.split(".").reverse(),n=t.reverse().join(".");a=n?n+".":"",c=e}else{const[e,...t]=s.split(/\/|\\/).reverse(),n=t.reverse().join("/");a=n?n+"/":"",c=e}return{id:e.pid,title:e.name,status:n?"activating":o?"active":r?"unavailable":"available",content:i.createElement(i.Fragment,null,i.createElement(fr,null,a),i.createElement(br,null,c))}})}),i.createElement(gr,null,"You can also launch JVM processes from an intercepted terminal, where they'll be intercepted automatically."))}interceptTarget(e){const{inProgressPids:t,props:{reportStarted:n,activateInterceptor:r,proxyStore:o}}=this;n();const a=r({targetPid:e});a.then(()=>{const t=this.jvmTargets[e];t&&(t.interceptedByProxy=o.httpProxyPort),this.props.reportSuccess({showRequests:!1})}),t.push(e),a.finally(Object(d.action)(()=>{s.pull(t,e)}))}};pr([d.observable.shallow],hr.prototype,"jvmTargets",void 0),pr([d.observable],hr.prototype,"inProgressPids",void 0),pr([d.action.bound],hr.prototype,"interceptTarget",null),hr=pr([Object(u.d)("proxyStore"),u.e],hr);const mr=p.j.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,gr=p.j.p`
    font-size: 85%;
    font-style: italic;
`,fr=p.j.span`
    opacity: 0.6;
`,br=p.j.span`
    font-weight: bold;
`,yr={columnWidth:1,rowHeight:2,configComponent:hr};var vr=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const xr=p.j.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,wr=p.j.p`
    font-size: 85%;
    font-style: italic;
`;let Er=class extends i.Component{constructor(){super(...arguments),this.targets={},this.updateTargets=Object(d.flow)(function*(){var e;const t=yield Object(st.d)("docker-attach");this.targets=null!==(e=null==t?void 0:t.targets)&&void 0!==e?e:{}}.bind(this)),this.inProgressIds=[]}componentDidMount(){this.updateTargets();const e=setInterval(this.updateTargets,2e3);Object(u.c)(this,()=>clearInterval(e))}render(){const e=this.props.proxyStore.httpProxyPort,t=Object.values(this.targets).filter(e=>!e.image.startsWith("httptoolkit/docker-socks-tunnel"));return i.createElement(xr,null,i.createElement("p",null,"Pick a container to restart it with all traffic intercepted:"),i.createElement(ur,{targetName:"Docker containers",interceptTarget:this.interceptTarget,ellipseDirection:"right",targets:t.map(t=>{var n;const r=this.inProgressIds.includes(t.id),o=t.labels["tech.httptoolkit.docker.proxy"]===e.toString(),s=(null===(n=t.names[0])||void 0===n?void 0:n.replace(/^\//,""))||t.id.slice(0,8),a=t.id.startsWith(s)?`'${s}'`:`'${s}' (${t.id.slice(0,8)})`;return{id:t.id,title:`Container ${a}, from image '${t.image}'`,status:r?"activating":o?"active":"available",content:i.createElement(i.Fragment,null,i.createElement(Cr,null,s),i.createElement(Tr,null,t.image))}})}),i.createElement(wr,null,"You can also create Docker containers from an intercepted terminal, where they'll be intercepted automatically."))}interceptTarget(e){const{inProgressIds:t,props:{reportStarted:n,activateInterceptor:r,proxyStore:o}}=this;n();const a=r({containerId:e});a.then(()=>{const t=this.targets[e];t&&(t.labels["tech.httptoolkit.docker.proxy"]=o.httpProxyPort.toString()),this.props.reportSuccess({showRequests:!1})}),t.push(e),a.finally(Object(d.action)(()=>{s.pull(t,e)}))}};vr([d.observable.shallow],Er.prototype,"targets",void 0),vr([d.observable],Er.prototype,"inProgressIds",void 0),vr([d.action.bound],Er.prototype,"interceptTarget",null),Er=vr([Object(u.d)("proxyStore"),u.e],Er);const Cr=p.j.div`
    font-weight: bold;
`,Tr=p.j.div`
    opacity: 0.6;
`,jr={columnWidth:1,rowHeight:2,configComponent:Er};var Or=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Sr=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};let kr=class extends i.Component{componentDidMount(){return Sr(this,void 0,void 0,(function*(){const{eventsStore:e,reportStarted:t,reportSuccess:n,closeSelf:r}=this.props;r(),window.open("https://httptoolkit.com/docs/guides/ios/","_blank","noreferrer noopener"),t();const o=Pr(e);Object(d.when)(()=>s.difference(Pr(e),o).length>0).then(()=>{n()})}))}render(){return null}};function Pr(e){return e.exchanges.filter(e=>s.isEqual(e.request.source.icon,$t.c.iOS)).map(e=>e.id)}kr=Or([Object(u.d)("eventsStore"),u.e],kr);const Rr={columnWidth:1,rowHeight:1,configComponent:kr},Hr=["browsers","web","pwa"],qr=["jvm","java","scala","kotlin","clojure","groovy"],Ar=["mobile","phone","app"],Ir=["samsung","galaxy","nokia","lg","android","google","motorola",...qr],Dr=["apple","ios","iphone","ipad"],$r=["command line","cli","docker","bash","cmd","shell","php","ruby","node","js",...qr],Mr=s.assign({style:{transform:"translateY(32px)"}},$t.c.Android),Fr=(e,t)=>Object.assign(Object.assign({},e),{color:t}),Br=({accountStore:e,serverVersion:t})=>({webExtensionEnabled:e.featureFlags.includes("webrtc")||Object(g.F)(t||"",g.z)}),Nr={"docker-attach":{name:"Attach to Docker Container",description:["Intercept all traffic from running Docker containers"],uiConfig:jr,iconProps:$t.c.Docker,tags:["bridge","services","images"]},"fresh-chrome":{name:"Chrome",description:["Intercept a fresh independent Chrome window"],iconProps:$t.c.Chrome,tags:Hr,getActivationOptions:Br},"existing-chrome":{name:"Global Chrome",description:["Intercept your main Chrome profile globally","This captures all default Chrome traffic, so may interfere with normal usage"],uiConfig:tr,iconProps:[$t.c.Chrome,{icon:["fas","globe"],color:"#fafafa",size:"2x"}],tags:Hr,getActivationOptions:Br},"fresh-chrome-beta":{name:"Chrome (Beta)",description:["Intercept a fresh independent Chrome window"],iconProps:Fr($t.c.Chrome,"#DB4437"),tags:Hr,getActivationOptions:Br},"fresh-chrome-dev":{name:"Chrome (Dev)",description:["Intercept a fresh independent Chrome window"],iconProps:Fr($t.c.Chrome,"#74929f"),tags:Hr,getActivationOptions:Br},"fresh-chrome-canary":{name:"Chrome (Canary)",description:["Intercept a fresh independent Chrome window"],iconProps:Fr($t.c.Chrome,"#e8ab01"),tags:Hr,getActivationOptions:Br},"fresh-chromium":{name:"Chromium",description:["Intercept a fresh independent Chromium window"],iconProps:$t.c.Chromium,tags:Hr,getActivationOptions:Br},"fresh-chromium-dev":{name:"Chromium (Dev)",description:["Intercept a fresh independent Chromium window"],iconProps:Fr($t.c.Chromium,"#74929f"),tags:Hr,getActivationOptions:Br},"fresh-brave":{name:"Brave",description:["Intercept a fresh independent Brave window"],iconProps:$t.c.Brave,tags:Hr,getActivationOptions:Br},"fresh-firefox":{name:"Firefox",description:["Intercept a fresh independent Firefox window"],iconProps:$t.c.Firefox,tags:Hr,checkRequirements:({interceptorVersion:e})=>Object(g.F)(e,"^1.1.0")},"existing-arc":{name:"Global Arc Browser",description:["Intercept Arc Browser globally on this machine","This captures all Arc traffic, so may interfere with normal usage"],iconProps:$t.c.Arc,tags:Hr,getActivationOptions:Br,checkRequirements:({accountStore:e})=>e.featureFlags.includes("arc-browser")},"fresh-safari":{name:"Safari",description:["Intercept a fresh independent Safari window"],iconProps:$t.c.Safari,tags:Hr},"fresh-edge":{name:"Edge",description:["Intercept a fresh independent Edge window"],iconProps:$t.c.Edge,tags:Hr,getActivationOptions:Br},"fresh-edge-beta":{name:"Edge (Beta)",description:["Intercept a fresh independent Edge window"],iconProps:Fr($t.c.Edge,"#50e6ff"),tags:Hr,getActivationOptions:Br},"fresh-edge-dev":{name:"Edge (Dev)",description:["Intercept a fresh independent Edge window"],iconProps:Fr($t.c.Edge,"#74929f"),tags:Hr,getActivationOptions:Br},"fresh-edge-canary":{name:"Edge (Canary)",description:["Intercept a fresh independent Edge window"],iconProps:Fr($t.c.Edge,"#ffc225"),tags:Hr,getActivationOptions:Br},"fresh-opera":{name:"Opera",description:["Intercept a fresh independent Opera window"],iconProps:$t.c.Opera,tags:Hr,checkRequirements:({interceptorVersion:e})=>Object(g.F)(e,"^1.0.3"),getActivationOptions:Br},"attach-jvm":{name:"Attach to JVM",description:["Attach to any local running JVM process, including Java, Kotlin & Clojure"],iconProps:$t.c.Java,uiConfig:yr,tags:qr},"fresh-terminal":{name:"Fresh Terminal",description:["Open a new terminal that intercepts all processes & Docker containers"],iconProps:$t.c.Terminal,tags:$r},"existing-terminal":{name:"Existing Terminal",description:["Intercept all launched processes & Docker containers from an existing terminal window"],iconProps:Fr($t.c.Terminal,"#dd44dd"),uiConfig:yn,tags:$r},"android-adb":{name:"Android Device via ADB",description:["Intercept an Android device or emulator connected to ADB","Automatically injects system HTTPS certificates into rooted devices & most emulators"],notAvailableHelpUrl:"https://httptoolkit.com/docs/guides/android/#android-device-via-adb-interception-option-is-not-available",iconProps:Mr,checkRequirements:({serverVersion:e})=>Object(g.F)(e||"",g.g),uiConfig:Kn,tags:[...Ar,...Ir,"emulator","root","adb"]},"android-device":{name:"Android Device via QR code",description:["Intercept any Android device on your network","Manual setup required for HTTPS in some apps"],iconProps:Fr(Mr,"#4285F4"),checkRequirements:({serverVersion:e})=>Object(g.F)(e||"",g.g),clientOnly:!0,uiConfig:Ln,tags:[...Ar,...Ir]},"manual-ios-device":{name:"iOS via Manual Setup",description:["Manually intercept all HTTP and HTTPS traffic from any iPhone or iPad"],iconProps:$t.c.iOS,clientOnly:!0,uiConfig:Rr,tags:[...Ar,...Dr]},"ios-device":{name:"Automatic iOS Device Setup",description:["Intercept all HTTP traffic from an iOS device on your network"],iconProps:$t.c.iOS,tags:[...Ar,...Dr]},"network-device":{name:"A Device on Your Network",description:["Intercept all HTTP traffic from another device on your network"],iconProps:$t.c.Network,tags:[...Ar,...Dr,...Ir,"lan","arp","wifi"]},"virtualbox-machine":{name:"A Virtualbox VM",description:["Intercept all traffic from a Virtualbox VM"],iconProps:$t.c.Desktop,tags:["virtual machine","vagrant"]},"system-proxy":{name:"Everything",description:["Intercept all HTTP traffic on this machine"],iconProps:$t.c.Desktop,tags:["local","machine","system","me"]},electron:{name:"Electron Application",description:["Launch an Electron application with all its traffic intercepted"],iconProps:$t.c.Electron,uiConfig:Hn,tags:["electron","desktop","postman"]},"manual-setup":{name:"Anything",description:["Manually configure any source using the proxy settings and CA certificate"],iconProps:$t.c.Unknown,clientOnly:!0,uiConfig:an,tags:[]}};function Lr(e,t,n){const r=s.keyBy(e,"id");return s.mapValues(Nr,(e,o)=>{if(!e.clientOnly&&!r[o]||e.checkRequirements&&!e.checkRequirements({interceptorVersion:(r[o]||{}).version,accountStore:t,serverVersion:n}))return s.assign({},e,{id:o,isSupported:!1,isActive:!1,isActivable:!1,activationOptions:void 0});if(e.clientOnly)return s.assign({},e,{id:o,isSupported:!0,isActive:!1,isActivable:!0,activationOptions:e.getActivationOptions?e.getActivationOptions({accountStore:t,serverVersion:n}):void 0});{const a=r[o];return s.assign({},e,a,{id:o,isSupported:!0,activationOptions:e.getActivationOptions?e.getActivationOptions({accountStore:t,serverVersion:n}):void 0})}})}var Ur=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Wr=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class zr{constructor(e,t){this.proxyStore=e,this.accountStore=t,this.initialized=Object(j.c)(()=>Wr(this,void 0,void 0,(function*(){yield Promise.all([this.proxyStore.initialized,this.accountStore.initialized]),yield this.refreshInterceptors();const e=setInterval(()=>this.refreshInterceptors(),1e4);window.addEventListener("beforeunload",()=>{clearInterval(e)}),console.log("Interceptor store initialized")}))),this.activateInterceptor=(e,t)=>(this.interceptors[e].inProgress=!0,Object(st.a)(e,this.proxyStore.httpProxyPort,t).then(e=>e||!0).finally(Object(d.action)(()=>{this.interceptors[e].inProgress=!1,this.refreshInterceptors()}))),this.interceptors=Lr([],t)}refreshInterceptors(){return Wr(this,void 0,void 0,(function*(){const e=yield Object(st.e)(this.proxyStore.httpProxyPort),t=yield g.E;Object(d.runInAction)(()=>{const n=Lr(e,this.accountStore,t);!n["fresh-chrome"].isActivable&&n["existing-chrome"].isActivable&&(n["existing-chrome"].isActivable=!1),this.interceptors=n})}))}}Ur([d.observable],zr.prototype,"interceptors",void 0),Ur([d.action.bound],zr.prototype,"activateInterceptor",void 0);var _r=n(15),Vr=n(655),Gr=n(61),Jr=n(252),Kr=n(55),Yr=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Qr=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const Xr=_r.c({spec:_r.l(),serverMatcher:Kr.e,requestMatchers:Object(Kr.d)(_r.i(_r.c({pathMatcher:Kr.e,queryMatcher:_r.l()})),_r.d(({path:e})=>e,(e,t)=>({path:e,pathSpec:t.json.spec.paths[e]})))}),Zr={"localhost:5001/api/v0":"ipfs","127.0.0.1:5001/api/v0":"ipfs","localhost:5002/api/v0":"ipfs","127.0.0.1:5002/api/v0":"ipfs","ipfs.infura.io:5001/api/v0":"ipfs","localhost:8545/":"ethereum","127.0.0.1:8545/":"ethereum","mainnet.":"ethereum","ropsten.":"ethereum","rinkeby.":"ethereum","kovan.":"ethereum","goerli.":"ethereum","mainnet-":"ethereum","web3.ens.domains/v1/mainnet":"ethereum"};class eo{constructor(e){this.accountStore=e,this.initialized=Object(j.c)(()=>Qr(this,void 0,void 0,(function*(){yield this.accountStore.initialized,Object(d.observe)(this.accountStore,"accountDataLastUpdated",()=>{this.accountStore.isPaidUser||(this.customOpenApiSpecs={})}),yield Object(O.a)({storage:r,jsonify:!1,key:"api-store",store:this}),console.log("API store initialized")}))),this.customOpenApiSpecs={},this.publicApiCache={}}addCustomApi(e,t){this.customOpenApiSpecs[e]=t}deleteCustomApi(e){delete this.customOpenApiSpecs[e]}get customOpenApiInfo(){return s.mapValues(this.customOpenApiSpecs,e=>({info:s.cloneDeep(e.spec.info)}))}get customOpenApiSpecsByUrl(){return new Map(Object.entries(this.customOpenApiSpecs).map(([e,t])=>[new URL("https://"+e.replace(/\/$/,"")),t]).sort(([e,t],[n,r])=>e.port&&!n.port?-1:n.port&&!e.port?1:n.pathname.length-e.pathname.length))}getPrivateApi(e){const t=s.find([...this.customOpenApiSpecsByUrl.keys()],t=>t.hostname===e.hostname&&(!t.port||t.port===e.port||"443"===t.port&&"https"===e.protocol||"80"===t.port&&"http"===e.protocol)&&e.pathname.startsWith(t.pathname));return t?this.customOpenApiSpecsByUrl.get(t):void 0}getPublicApi(e){const{publicApiCache:t}=this;return t[e]||(t[e]=function(e){return Qr(this,void 0,void 0,(function*(){return(yield fetch(`/api/${e}.json`)).json()}))}(e).then(Gr.a).catch(t=>{throw console.log("Failed to build API "+e),Object(o.c)(t,{apiSpecId:e}),t})),t[e]}getApi(e){return Qr(this,void 0,void 0,(function*(){const{parsedUrl:t}=e;let n=this.getPrivateApi(t);if(n)return Promise.resolve(n);let r=function(e){const t=Object(Vr.findApi)(e);if(t)return t;const n=Object.keys(Zr).find(t=>e.startsWith(t));return n?Zr[n]:void 0}(`${t.host}${t.pathname}`);if(!r)return;Array.isArray(r)||(r=[r]),r=r.filter(e=>"microsoft.com/graph"!==e);const a=yield Promise.all(r.map(e=>this.getPublicApi(e)));return 1===a.length?a[0]:function(e,t){const n=e.filter(e=>"openrpc"==e.type||Object(Jr.b)(e,t).matched);return 1===n.length?n[0]:0===n.length?s.maxBy(e,e=>e.spec.paths.length):(Object(o.c)("Overlapping APIs",n),s.maxBy(n,e=>Object.keys(e.spec.paths).length))}(a,e)}))}}Yr([Object(O.b)("map",Xr),d.observable.shallow],eo.prototype,"customOpenApiSpecs",void 0),Yr([d.computed],eo.prototype,"customOpenApiInfo",null),Yr([d.computed],eo.prototype,"customOpenApiSpecsByUrl",null);var to=n(656),no=function(){function e(){var t=Error.call(this,"ServiceWorker is not supported.");return Object.setPrototypeOf(t,e.prototype),t}return e.prototype=Object.create(Error.prototype),e}();var ro=n(657),oo=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const so=()=>Object(st.i)().catch(console.warn);function ao(){alert("This HTTP Toolkit installation is now very outdated, and this version is no longer supported.\n\nYou can continue to use HTTP Toolkit, but you may experience issues & instability.\n\nPlease update to the latest version from httptoolkit.com when you can, to access the many new features, bug fixes & performance improvements available there.")}var io=n(658);const co=p.j.nav`
    width: ${"80px"};
    flex-shrink: 0;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    z-index: 5;

    border-right: 1px solid rgba(0,0,0,0.12);
    box-sizing: border-box;
    box-shadow: 0 0 30px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    font-size: ${e=>e.theme.textSize};

    display: flex;
    flex-direction: column;
`,lo=p.f`
    width: 70px;
    height: 70px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    box-sizing: border-box;
`,uo=p.j.img.attrs(()=>({src:io,alt:"HTTP Toolkit logo"}))`
    ${lo}
    padding: 8px;
`,po=Object(p.j)(w.a)`
    ${lo}

    color: ${e=>e.theme.mainColor};
    text-decoration: none;
    line-height: normal;

    width: calc(100% + 2px);
    margin: 0 -1px;

    cursor: pointer;
    user-select: none;
    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }

    border-width: 0 5px;
    border-style: solid;
    border-color: transparent;

    opacity: 0.6;

    ${e=>e.selected&&p.f`{
        opacity: 1;
        border-right-color: ${e=>e.theme.popColor};
    }`}

    > svg {
        margin-bottom: 5px;
    }
`,ho=p.j.div`
    margin-top: auto;
`,mo=p.j.a`
    ${lo}

    ${e=>e.highlight&&p.f`
        color:  ${e.theme.popColor};
        font-weight: bold;
    `};

    &:hover, &:focus {
        outline: none;
        color: ${e=>e.highlight?e.theme.mainColor:e.theme.popColor};
    }

    text-decoration: none;

    margin-bottom: 5px;

    > svg {
        margin-bottom: 5px;
    }
`,go=Object(p.j)(vn.f)`
    ${lo}

    opacity: 0.6;

    ${e=>e.highlight&&p.f`
        color:  ${e.theme.popColor};
        font-weight: bold;
    `};

    > svg {
        margin-bottom: 5px;
    }
`,fo=Object(u.e)(e=>{const t=e.items.map((e,t)=>{const n=i.createElement(i.Fragment,null,i.createElement($t.b,{size:"2x",icon:e.icon}),e.name);return"web"===e.type?{position:e.position,component:i.createElement(mo,{key:e.name,title:e.title,highlight:e.highlight,href:e.url,target:"_blank"},n)}:"router"===e.type?{position:e.position,component:i.createElement(w.c,{key:e.name,path:e.url+"/*"},({match:t})=>i.createElement(po,{to:e.url,title:e.title,selected:!!t},n))}:{position:e.position,component:i.createElement(go,{key:e.name,title:e.title,highlight:e.highlight,onClick:e.onClick},n)}});return i.createElement(co,null,i.createElement(uo,{title:Yn`
                UI version: ${g.y.slice(0,8)}
                Desktop version: ${"fulfilled"===g.C.state?g.C.value:"Unknown"}
                Server version: ${"fulfilled"===g.E.state?g.E.value:"Unknown"}
            `}),t.filter(e=>"top"===e.position).map(e=>e.component),i.createElement(ho,null),t.filter(e=>"bottom"===e.position).map(e=>e.component))}),bo=p.j.div`
    &:not(:last-child) {
        margin-bottom: 30px;
    }

    font-size: ${e=>e.theme.headingSize};

    > svg {
        margin-right: 30px;
    }
`,yo=Object(p.j)(e=>i.createElement(Ut.a,{className:e.className},i.createElement("h1",null,"Connected Sources"),e.activeSources.length?e.activeSources.map(e=>i.createElement(bo,{key:e.ua,title:e.ua},i.createElement($t.b,Object.assign({},e.icon,{fixedWidth:!0})),e.summary)):null))``,vo=Object(p.j)(vn.e)`
    width: 100%;
    padding: 15px;
    box-sizing: border-box;

    box-shadow: inset 0 2px 4px 1px rgba(0, 0, 0, ${e=>e.theme.boxShadowAlpha/2});

    font-size: ${e=>e.theme.headingSize};
`,xo=Object(p.j)(Ft($t.b,"visible"))`
    position: absolute;

    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    display: ${e=>e.visible?"block":"none"};
`,wo=Object(p.j)(e=>i.createElement("div",{className:e.className},i.createElement(vo,{autoFocus:e.autoFocus,value:e.value,placeholder:e.placeholder,onChange:t=>e.onSearch(t.currentTarget.value)}),i.createElement(xo,{icon:["fas","times"],size:e.iconSize,onClick:()=>e.onSearch(""),visible:!!e.value})))`
    position: relative;
`;var Eo=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Co=p.j.section`
    display: grid;

    @media (min-width: ${p.b}px) {
        grid-gap: 40px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 320px;
        padding: 60px 40px;
    }

    @media not (min-width: ${p.b}px) {
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 40px;
    }

    grid-auto-rows: minmax(200px, auto);
    grid-auto-flow: row dense;

    max-width: 1200px;
    margin: 0 auto 20px;

    > ${yo} {
        @media not (min-width: ${p.b}px) {
            display: none;
        }

        order: -1;
        grid-column: 3 / span 2;
        overflow-y: auto;
        margin-bottom: 0;
    }
`,To=p.j.div`
    order: -1;

    @media (min-width: ${p.b}px) {
        grid-column: 1 / span 2;
    }

    @media not (min-width: ${p.b}px) {
        grid-column: 1 / -1;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    > h1 {
        font-size: ${e=>e.theme.loudHeadingSize};
        font-weight: bold;
        margin-bottom: 40px;
    }

    > p {
        font-size: ${e=>e.theme.headingSize};

        margin-bottom: 20px;
        text-align: left;
        line-height: 1.2;
    }
`,jo=Object(p.j)(wo).attrs(()=>({autoFocus:!0,placeholder:"Browsers, mobile, docker...",iconSize:"2x"}))`
    @media (min-width: ${p.b}px) {
        margin: 20px 0 0;
    }
`;let Oo=class extends i.Component{constructor(){super(...arguments),this.filter=!1,this.gridRef=i.createRef()}render(){const{interceptors:e}=this.props.interceptorStore,{activeSources:t}=this.props.eventsStore,n=!!this.filter&&this.filter.toLocaleLowerCase(),r=s.pickBy(e,e=>!n||s.includes(e.name.toLocaleLowerCase(),n)||s.includes(e.description.join(" ").toLocaleLowerCase(),n)||s.some(e.tags,e=>s.includes(e.toLocaleLowerCase(),n)));return s.some(r,e=>e.isActivable)||(r["manual-setup"]=e["manual-setup"]),i.createElement("div",{className:this.props.className},i.createElement(Co,{ref:this.gridRef},i.createElement(To,null,i.createElement("h1",null,"Intercept HTTP"),i.createElement("p",null,"To collect & view HTTP traffic, you need to connect a source of traffic, like a browser, mobile device, or docker container."),i.createElement("p",null,"Click an option below to connect a traffic source, or search for connectors that could work for you:"),i.createElement(jo,{value:this.filter||"",onSearch:this.onSearchInput})),i.createElement(yo,{activeSources:t}),s(r).sortBy(e=>-1*(0+(n&&(e.tags.includes(n)||e.name.toLocaleLowerCase().split(" ").includes(n))?100:0)+(e.isActive||e.isActivable?50:0)+(e.isSupported?25:0))).map((e,t)=>i.createElement(Zt,{key:e.id,index:t,interceptor:e,showRequests:this.showRequests})).value()))}showRequests(){this.props.navigate("/view")}onSearchInput(e){this.filter=e||!1}};Eo([d.observable],Oo.prototype,"filter",void 0),Eo([d.action.bound],Oo.prototype,"showRequests",null),Eo([d.action.bound],Oo.prototype,"onSearchInput",null),Oo=Eo([Object(u.d)("interceptorStore"),Object(u.d)("eventsStore"),u.e],Oo);const So=Object(p.j)(Oo)`
    height: 100%;
    overflow-y: auto;
    position: relative;
`;var ko=n(73),Po=n(68),Ro=n(659);const Ho=Object(p.j)(Ro.a)`
    .Resizer {
        background: #000;
        opacity: .3;
        z-index: 1;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -moz-background-clip: padding;
        -webkit-background-clip: padding;
        background-clip: padding-box;
    }

    .Resizer:hover {
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0.9;
    }

    .Resizer.horizontal {
        height: 11px;
        margin: -5px 0;
        border-top: 5px solid rgba(255, 255, 255, 0);
        border-bottom: 5px solid rgba(255, 255, 255, 0);
        cursor: row-resize;
        width: 100%;
    }

    .Resizer.horizontal:hover {
        border-top: 5px solid rgba(0, 0, 0, 0.2);
        border-bottom: 5px solid rgba(0, 0, 0, 0.2);
    }

    .Resizer.vertical {
        width: 11px;
        margin: 0 -5px;
        border-left: 5px solid rgba(255, 255, 255, 0);
        border-right: 5px solid rgba(255, 255, 255, 0);
        cursor: col-resize;
    }

    .Resizer.vertical:hover {
        border-left: 5px solid rgba(0, 0, 0, 0.2);
        border-right: 5px solid rgba(0, 0, 0, 0.2);
    }

    .Resizer.disabled {
        cursor: not-allowed;
    }

    .Resizer.disabled:hover {
        border-color: transparent;
    }

    .Pane {
        min-width: 0; /* Don't let flexbox force panes to expand */
    }

    ${({hiddenPane:e})=>e?`\n            .Resizer {\n                display: none !important;\n            }\n\n            .Pane${e} {\n                display: none !important;\n            }\n        `:""}
`,qo=Object(p.j)(e=>i.createElement("div",Object.assign({},s.omit(e,["message","icon","spin"])),i.createElement($t.b,{icon:e.icon,spin:!0===e.spin,className:"slow"===e.spin?"slow-spin":void 0}),e.children&&i.createElement(i.Fragment,null,i.createElement("br",null),e.children)))`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${e=>e.theme.containerWatermark};
    font-size: 40px;
    text-align: center;

    box-sizing: border-box;
    padding: 20px;
    height: 100%;
    width: 100%;

    margin: auto 0;

    > svg {
        font-size: 150px;
    }
`,Ao=["a:not([disabled])","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");function Io(e){return s.filter(e.querySelectorAll(Ao),e=>null!==e.offsetParent)}var Do=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function $o(e,t,n){return r=>{var o;const s=null===(o=n.current)||void 0===o?void 0:o.editor;if(!s)return;const a=s.getSelection(),i=[];t||i.push({type:"option",label:"Cut",enabled:!!a&&!a.isEmpty(),callback:()=>Do(this,void 0,void 0,(function*(){var e;const t=s.getSelection();if(!t)return;const n=null===(e=s.getModel())||void 0===e?void 0:e.getValueInRange(t);n&&(yield Object(Mt.b)(n),s.executeEdits("clipboard",[{range:t,text:"",forceMoveMarkers:!0}]))}))}),a&&!a.isEmpty()&&i.push({type:"option",label:"Copy",enabled:!!a&&!a.isEmpty(),callback:()=>{var e;const t=s.getSelection();if(!t)return;const n=null===(e=s.getModel())||void 0===e?void 0:e.getValueInRange(t);n&&Object(Mt.b)(n)}}),a&&navigator.clipboard&&i.push({type:"option",label:"Paste",enabled:!t,callback:()=>Do(this,void 0,void 0,(function*(){const e=s.getSelection();if(!e)return;const t=yield navigator.clipboard.readText();s.executeEdits("clipboard",[{range:e,text:t,forceMoveMarkers:!0}])}))}),e.handleContextMenuEvent(r,i)}}var Mo=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Fo=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};let Bo,No=Object(h.b)(100).then(()=>Lo());function Lo(e=5){return Fo(this,void 0,void 0,(function*(){try{const e=yield n.e(1).then(n.bind(null,1864)),t=yield n.e(1).then(n.t.bind(null,1541,7));Object(p.g)(t),t.editor.onDidChangeMarkers(e=>{const n=t.editor.getModelMarkers({});Object(d.runInAction)(()=>{Uo.clear(),n.forEach(e=>{var t;const n=e.resource,r=null!==(t=Uo.get(n))&&void 0!==t?t:[];r.push(e),Uo.set(n,r)})})}),Bo=e.default}catch(t){if(console.log("Monaco load failed",Object(S.b)(t).message),e<=0)throw console.warn("Repeatedly failed to load monaco editor, giving up"),t;return Lo(e-1)}}))}const Uo=d.observable.map(),Wo=p.j.div`
    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            height: auto !important;\n        ":"\n            max-height: 560px;\n        "}
`;let zo=class extends i.Component{constructor(){super(...arguments),this.container=i.createRef(),this.editor=i.createRef(),this.onResize=s.throttle(()=>{this.editor.current&&this.editor.current.relayout()},50,{leading:!0,trailing:!0}),this.resizeObserver=new ResizeObserver(this.onResize),this.contentHeight=0}onContentSizeChange(e){this.contentHeight=Math.min(e.contentHeight,560)}componentDidUpdate(){this.editor.current&&this.editor.current.relayout()}componentDidMount(){this.container.current&&this.resizeObserver.observe(this.container.current)}componentWillUnmount(){this.resizeObserver.disconnect()}render(){var e;return i.createElement(Wo,{ref:this.container,expanded:!!this.props.expanded,style:{height:this.contentHeight+"px"},onContextMenu:$o(this.props.uiStore,!!(null===(e=this.props.options)||void 0===e?void 0:e.readOnly),this.editor)},i.createElement(Jo,Object.assign({theme:this.props.uiStore.theme.monacoTheme},this.props,{ref:this.editor,onContentSizeChange:this.onContentSizeChange})))}};Mo([d.action.bound],zo.prototype,"onContentSizeChange",null),Mo([d.observable],zo.prototype,"contentHeight",void 0),zo=Mo([Object(u.d)("uiStore"),u.e],zo);const _o=p.j.div`
    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            height: auto !important;\n        ":"\n            height: 100%;\n        "}
`;let Vo=class extends i.Component{constructor(){super(...arguments),this.container=i.createRef(),this.editor=i.createRef(),this.onResize=s.throttle(()=>{this.editor.current&&this.editor.current.relayout()},25,{leading:!0,trailing:!0}),this.resizeObserver=new ResizeObserver(this.onResize)}componentDidUpdate(){this.editor.current&&this.editor.current.relayout()}componentDidMount(){this.container.current&&this.resizeObserver.observe(this.container.current)}componentWillUnmount(){this.resizeObserver.disconnect()}render(){var e;return i.createElement(_o,{ref:this.container,expanded:!!this.props.expanded,onContextMenu:$o(this.props.uiStore,!!(null===(e=this.props.options)||void 0===e?void 0:e.readOnly),this.editor)},i.createElement(Jo,Object.assign({theme:this.props.uiStore.theme.monacoTheme},this.props,{ref:this.editor})))}};Vo=Mo([Object(u.d)("uiStore"),u.e],Vo);const Go=Object(p.j)(e=>i.createElement("div",{className:e.className,"aria-label":"Press enter to focus this editor, and use escape to unfocus it later",tabIndex:0,onKeyDown:e=>{const t=e.currentTarget;if(e.target===t){if("Tab"===e.key){if(e.shiftKey)return;{const n=Io(document.body),r=s.last(t.children),o=n.indexOf(r),a=n[o+1];return a?(a.focus(),void e.preventDefault()):(n[0].focus(),void e.preventDefault())}}if("Enter"===e.key){const n=Io(t)[0];return void(n&&(n.focus(),e.preventDefault()))}}else if(t.contains(document.activeElement)&&"Escape"===e.key)return void t.focus()}},e.children,i.createElement("div",{tabIndex:0,onFocus:e=>{e.target===e.currentTarget&&e.currentTarget.parentElement.focus()}})))`
    height: 100%;
    width: 100%;
`;let Jo=class extends i.Component{constructor(e){super(e),this.monacoEditorLoaded=!!Bo,this.modelUri=void 0,this.registeredSchemaUri=void 0,this.monacoEditorLoaded||No.catch(()=>(No=Lo(0),No)).then(Object(d.action)(()=>this.monacoEditorLoaded=!0)),Object(d.reaction)(()=>this.props.contentId,()=>this.resetUIState())}relayout(){if(this.editor)try{this.editor.layout()}catch(e){return void console.log("Monaco layout error:",e)}}getMarkerController(){var e;return null===(e=this.editor)||void 0===e?void 0:e.getContribution("editor.contrib.markerController")}withoutFocusingEditor(e){if(!this.editor)return;const t=this.editor.focus;this.editor.focus=()=>{},e(),this.editor.focus=t}resetUIState(){return Fo(this,void 0,void 0,(function*(){this.editor&&this.monaco&&(this.editor.setSelection(new this.monaco.Selection(0,0,0,0)),this.relayout(),requestAnimationFrame(()=>{var e;this.editor&&this.monaco&&this.editor.setSelection(new this.monaco.Selection(0,0,0,0)),null===(e=this.getMarkerController())||void 0===e||e.close(!1)}))}))}onEditorDidMount(e,t){this.editor=e,this.monaco=t;const n=e.getModel();this.modelUri=null==n?void 0:n.uri,this.editor.onDidChangeModel(Object(d.action)(e=>{var t;this.modelUri=null!==(t=e.newModelUrl)&&void 0!==t?t:void 0})),this.props.onContentSizeChange&&this.editor.onDidContentSizeChange(this.props.onContentSizeChange),Object(u.c)(this,Object(d.reaction)(()=>{var e;return{markers:null!==(e=this.modelUri&&Uo.get(this.modelUri))&&void 0!==e?e:[]}},({markers:e})=>{var t;e.length&&(null===(t=this.props.options)||void 0===t?void 0:t.readOnly)&&requestAnimationFrame(()=>{this.withoutFocusingEditor(()=>{this.getMarkerController().showAtMarker(e[0])})})},{equals:d.comparer.structural}))}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e;if(!this.editor||!this.monaco)return;const t=this.monaco.languages.json.jsonDefaults.diagnosticsOptions;let n=t.schemas||[];const r=null===(e=this.modelUri)||void 0===e?void 0:e.toString();if(r){const e=this.props.schema,o=s.find(t.schemas||[],e=>e.uri===r);!e||o&&o.schema===e?e||(n=n.filter(e=>e!==o)):n=n.filter(e=>e!==o).concat({uri:r,fileMatch:[r],schema:e})}this.registeredSchemaUri&&r!=this.registeredSchemaUri&&(n=n.filter(e=>e.uri!==this.registeredSchemaUri));const o=Object.assign({},t,{validate:!0,schemas:n});s.isEqual(t,o)||this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(o),this.registeredSchemaUri=r}))}componentWillUnmount(){if(this.editor&&this.monaco&&this.registeredSchemaUri){const e=this.monaco.languages.json.jsonDefaults.diagnosticsOptions,t=(e.schemas||[]).filter(e=>e.uri!==this.registeredSchemaUri),n=Object.assign({},e,{schemas:t});s.isMatch(e,n)||this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(n),this.registeredSchemaUri=void 0}}render(){if(!this.monacoEditorLoaded||!Bo)return Object(o.c)("Monaco editor failed to load"),null;const e=Object.assign({showFoldingControls:"always",scrollbar:{alwaysConsumeMouseWheel:!1},quickSuggestions:!1,parameterHints:{enabled:!1},codeLens:!1,minimap:{enabled:!1},contextmenu:!1,scrollBeyondLastLine:!1,colorDecorators:!1,renderValidationDecorations:"on",fontSize:16,wordWrap:"on"},this.props.options);return e.readOnly?i.createElement(Bo,Object.assign({},this.props,{options:e,editorDidMount:this.onEditorDidMount})):i.createElement(Go,null,i.createElement(Bo,Object.assign({},this.props,{options:e,editorDidMount:this.onEditorDidMount})))}};Mo([d.observable],Jo.prototype,"monacoEditorLoaded",void 0),Mo([d.observable],Jo.prototype,"modelUri",void 0),Mo([d.action.bound],Jo.prototype,"onEditorDidMount",null),Jo=Mo([u.e],Jo);var Ko=n(660),Yo=n(661);function Qo(e){return e[0].toUpperCase()+e.slice(1)}function Xo(e){if((e=>e in An.i)(e))return e+" requests";switch(e){case"wildcard":case"default-wildcard":return"Any requests";case"ws-wildcard":case"default-ws-wildcard":return"Any WebSocket";case"rtc-wildcard":return"Any WebRTC connection";case"method":return"Sent with HTTP method";case"host":return"For a host";case"simple-path":return"For a URL";case"regex-path":return"For URLs matching";case"query":return"With query parameters including";case"exact-query-string":return"With exact query string";case"header":return"Including headers";case"cookie":return"With cookie";case"raw-body":return"With exact body";case"raw-body-includes":return"With body including";case"form-data":return"With form data";case"json-body":return"With JSON body";case"json-body-matching":return"With JSON body including";case"protocol":return"With protocol";case"port":return"For port";case"hostname":return"For hostname";case"eth-method":return"An Ethereum interaction";case"eth-params":return"With Ethereum parameters matching";case"ipfs-interaction":return"An IPFS interaction";case"ipfs-arg":return"With IPFS argument";case"has-rtc-data-channel":return"Including a data channel";case"has-rtc-video-track":return"Including a video track";case"has-rtc-audio-track":return"Including an audio track";case"has-rtc-media-track":return"Including any media track";case"rtc-page-hostname":return"Sent from a web page on a specific hostname";case"rtc-page-regex":return"Sent from a web page matching a URL regex";case"rtc-user-agent-regex":return"Sent by a user agent matching a regex";case"am-i-using":case"callback":case"multipart-form-data":case"raw-body-regexp":throw new Error(e+" handler should not be used directly");default:throw new S.a(e)}}function Zo(e){switch(e){case"simple":return"fixed response";case"file":return"file response";case"forward-to-host":case"ws-forward-to-host":return"forwarding";case"passthrough":case"ws-passthrough":return"passthrough";case"req-res-transformer":return"transform";case"request-breakpoint":case"response-breakpoint":case"request-and-response-breakpoint":return"breakpoint";case"timeout":return"timeout";case"close-connection":return"connection close";case"reset-connection":return"connection reset";case"ws-reject":return"reject";case"ws-listen":return"listen";case"ws-echo":return"echo";case"eth-call-result":case"eth-number-result":case"eth-hash-result":case"eth-receipt-result":case"eth-block-result":return"fixed result";case"eth-error":return"error";case"ipfs-cat-text":case"ipfs-add-result":case"ipns-resolve-result":case"ipns-publish-result":case"ipfs-pins-result":case"ipfs-pin-ls-result":return"fixed result";case"ipfs-cat-file":return"file";case"wait-for-duration":case"wait-for-rtc-data-channel":case"wait-for-rtc-track":case"wait-for-rtc-media":case"wait-for-rtc-message":case"create-rtc-data-channel":case"send-rtc-data-message":case"close-rtc-connection":case"echo-rtc":case"rtc-dynamic-proxy":return"WebRTC";case"json-rpc-response":case"rtc-peer-proxy":case"callback":case"stream":throw new Error(e+" handler should not be used directly");default:throw new S.a(e)}}function es(e){const{matchers:t}=e;return 0===t.length?"Never":1===t.length?t[0].explain():2===t.length?`${t[0].explain()} ${t[1].explain()}`:t[0].explain()+" "+t.slice(1,-1).map(e=>e.explain()).join(", ")+(t.length>3?", and ":", ")+t.slice(-1)[0].explain()}function ts(e){if("steps"in e){const t=e.steps.map(e=>e.explain());return Qo(t.length>1?t.slice(0,-1).join(", ")+" then "+t.slice(-1)[0]:t[0])}return Qo(e.handler.explain())}const ns=Object(p.j)(e=>i.createElement("div",{className:e.className,title:e.status?e.message||void 0:"Waiting for response..."},"aborted"===e.status?i.createElement($t.b,{icon:["fas","ban"]}):"WS:open"===e.status?i.createElement(i.Fragment,null,"WS ",i.createElement($t.b,{icon:["fas","spinner"],spin:!0})):"WS:closed"===e.status?"WS":e.status||i.createElement($t.b,{icon:["fas","spinner"],spin:!0})))`
    font-weight: bold;

    display: flex;
    align-items: center;

    .fa-spinner {
        padding: 6px;
    }

    .fa-ban {
        padding: 5px;
    }

    color: ${e=>Object(q.e)("WS:open"===e.status||"WS:closed"===e.status?void 0:e.status,e.theme)};
`;var rs=n(253),os=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const ss=Object(u.e)(e=>i.createElement(cn.a,{icon:["far","trash-alt"],title:`Clear all (${Mt.a}+Shift+Delete)`,disabled:e.disabled,onClick:e.onClear})),as=Object(u.d)("accountStore")(Object(u.e)(e=>{const{isPaidUser:t}=e.accountStore;return i.createElement(cn.a,{icon:["fas","save"],title:t?"Export these exchanges as a HAR file":"With Pro: Export requests & responses as a HAR file, to save for later or share with others",disabled:!t||0===e.events.length,onClick:()=>os(void 0,void 0,void 0,(function*(){const t=JSON.stringify(yield Object(ft.a)(e.events)),n=`HTTPToolkit_${m.format(Date.now(),"YYYY-MM-DD_HH-mm")}.har`;Object(Mt.f)(n,"application/har+json;charset=utf-8",t)}))})})),is=Object(u.d)("eventsStore","accountStore")(Object(u.e)(e=>{const{isPaidUser:t}=e.accountStore;return i.createElement(cn.a,{icon:["fas","folder-open"],title:t?"Import exchanges from a HAR file":"With Pro: Import requests & responses from HAR files, to examine past recordings or data from other tools",disabled:!t,onClick:()=>os(void 0,void 0,void 0,(function*(){const t=yield Object(Mt.g)("text",[".har","application/har","application/har+json"]);if(t){let n;try{n=JSON.parse(t),yield e.eventsStore.loadFromHar(n)}catch(e){Object(o.c)(e),"HARError"===e.name&&e.errors?alert(Yn`
                                HAR file is not valid.

                                ${e.errors.map(e=>Object(rs.a)(n,e)).join("\n")}
                            `):alert(Yn`
                                Could not parse HAR file.

                                ${e.message||e}
                            `)}}}))})})),cs=Object(u.d)("eventsStore")(Object(u.e)(e=>{const{isPaused:t,togglePause:n}=e.eventsStore;return i.createElement(cn.a,{icon:["fas",t?"play":"pause"],title:(t?"Resume":"Pause")+" collecting intercepted exchanges",onClick:n})})),ls=e=>i.createElement(cn.a,{icon:["fas","level-down-alt"],title:"Scroll to the bottom of the list",onClick:e.onScrollToEnd});var ds=n(662),us=n(62);function ps(e,t){let n=t.trim(),r=[];for(;n.length>0;){const t=e.map(e=>({filterClass:e,match:M(e.filterSyntax,n,0)})).filter(e=>!!e.match&&"full"===e.match.type)[0];if(!t)break;const o=t.match.fullyConsumed,s=n.slice(0,o);n=n.slice(o).trimLeft(),r.unshift(new t.filterClass(s))}return[new se(n),...s.flatten(r)]}function hs(e,t){const n=B(e[0].filter,t);return"full"===t.matchType?[new se(""),...s.flatten([new t.filterClass(n.trim())]),...e.slice(1)]:[new se(n),...e.slice(1)]}const ms=Object(p.j)($t.b).attrs(()=>({icon:["fas","times"]}))`
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    transition: right 0.1s;
    cursor: pointer;

    padding: 6px;
    background-image: radial-gradient(
        ${e=>us.f(e.theme.mainBackground,.9)} 50%,
        transparent 100%
    );

    &:hover {
        color: ${e=>e.theme.popColor};
    }
`,gs=p.j.span`
    white-space: pre; /* Nowrap + show spaces accurately */
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px;
`,fs=p.j.div`
    flex-shrink: 0;

    display: flex;
    align-items: center;

    position: relative;
    overflow: hidden;

    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;

    margin-right: 5px;

    background-color: ${e=>e.theme.mainBackground};
    border: 1px solid ${e=>e.theme.containerWatermark};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
    border-radius: 3px;

    cursor: pointer;

    &:hover, &:focus-within {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
    }

    &:hover {
        > ${ms} {
            right: 0;
        }
    }

    &:focus-within {
        outline: none;
        border-color: ${e=>e.theme.popColor};
    }

    &.is-selected {
        background-color: ${e=>e.theme.mainLowlightBackground};
        box-shadow: inset 0 0 12px -8px #000;
    }

    & ::selection {
        background-color: transparent;
    }
`;function bs(e){3===e.detail&&e.preventDefault()}const ys=i.forwardRef((e,t)=>i.createElement(fs,{ref:t,className:"filter-tag"+(e.isSelected?" is-selected":""),tabIndex:-1,onKeyDown:e.onKeyDown,onMouseDown:bs,title:"Match "+e.filter.filterDescription},i.createElement(gs,null,e.filter.toString()),i.createElement(ms,{onClick:e.onDelete})));var vs=n(663);const xs=p.j.span`
    font-weight: bold;
`,ws=p.j.span`
    opacity: 0.7;
`,Es=p.j.div`
    background-color: ${e=>e.isHighlighted?e.theme.highlightBackground:e.theme.mainBackground};

    ${e=>e.isHighlighted&&p.f`
        ${ws} {
            opacity: 1;
        }
    `}

    width: 100%;
    cursor: pointer;

    font-size: ${e=>e.theme.textSize};
`,Cs=p.j.p`
    padding: 8px;
`,Ts=Object(p.j)(Cs)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre; /* Nowrap + show spaces accurately */

    ${e=>e.isHighlighted&&p.f`
        box-shadow: 0px -8px 10px -10px rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
    `}

    svg {
        margin-left: auto;
    }
`,js=Object(p.j)(cn.a).attrs(()=>({icon:["far","trash-alt"]}))`
    float: right;
    padding: 4px;
    margin: -4px -4px;
`,Os=Object(p.j)(Cs)`
    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha}),
        inset 0px -8px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    white-space: pre; /* Nowrap + show spaces accurately */
    overflow: hidden;
    text-overflow: ellipsis;
`,Ss=e=>{const{suggestion:t,query:n,isHighlighted:r,onDelete:o}=e,s=Object(P.j)(n.slice(t.index),t.value,t.showAs).length,a=n.slice(0,t.index+s),c=t.showAs.slice(s),l="Match "+t.filterClass.filterDescription(B(n,t),"template"===t.matchType);return i.createElement(Es,{isHighlighted:r},i.createElement(Ts,{isHighlighted:r},i.createElement(xs,null,a),i.createElement(ws,null,c),o&&i.createElement(js,{title:"Delete this custom filter shortcut",onClick:e=>{o(),e.preventDefault(),e.stopPropagation()}})),r&&i.createElement(Os,{title:l},l))},ks=e=>"saveFilters"in e&&!0===e.saveFilters,Ps=p.j.div`
    background-color: ${e=>e.isHighlighted?e.theme.highlightBackground:e.theme.mainBackground};

    :not(:first-child) {
        border-top: 1px solid ${e=>e.theme.containerBorder};
    }

    ${e=>e.isHighlighted&&p.f`
        box-shadow: 0px -8px 10px -10px rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
        font-weight: bold;
    `}

    width: 100%;
    cursor: pointer;

    padding: 8px;
    box-sizing: border-box;

    font-size: ${e=>e.theme.textSize};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    svg {
        margin-right: 5px;
    }
`,Rs=e=>i.createElement(Ps,{isHighlighted:e.isHighlighted},e.isPaidUser?i.createElement(i.Fragment,null,i.createElement($t.b,{icon:["fas","save"]}),"Save ",e.filterCount>1?`these ${e.filterCount} filters`:"this filter"," as ",`'${e.query}'`||"..."):i.createElement(i.Fragment,null,i.createElement($t.b,{icon:["far","star"]}),"Get Pro to save ",e.filterCount>1?`these ${e.filterCount} filters`:"this filter"," as ",`'${e.query}'`||"...")),Hs=p.j.input`
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    padding: 3px 0 4px 1px;
    border: none;
    outline: none;

    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};
    font-size: ${e=>e.theme.textSize};

    ::placeholder {
        /*
        For some reason, I think related to react-split-pane setting 'user-select: text',
        the placeholder gets selected by selection.selectAllChildren. This stops that:
        */
        user-select: none;
    }
`,qs=p.j.div`
    position: absolute;
    bottom: calc(100% + 10px);
    left: 0;
    right: 0;
    z-index: 1;

    background-color: ${e=>e.theme.mainBackground};
    border: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    border-radius: 4px;
    .react-autosuggest__suggestion:first-child > * {
        border-radius: 4px 4px 0 0;
    }
    .react-autosuggest__suggestion:last-child > *, .react-autosuggest__suggestion:last-child > * > * {
        border-radius: 0 0 4px 4px;
    }
    .react-autosuggest__suggestion:first-child:last-child > * {
        border-radius: 4px;
    }

    color: ${e=>e.theme.highlightColor};
    font-size: ${e=>e.theme.textSize};

    &:empty {
        display: none;
    }
`,As=e=>i.createElement(Hs,Object.assign({},e)),Is=e=>i.createElement(qs,Object.assign({},e.containerProps),e.children),Ds=e=>{var t,n;const r=null===(n=null===(t=e.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.parentElement,o=null==r?void 0:r.querySelector("[role='listbox']");return((null==o?void 0:o.children.length)||0)>0},$s=e=>{const t=i.useRef(null),n=i.useMemo(()=>{return t=e.availableFilters,n=e.value,r=e.suggestionContext,F(t.map(e=>({key:e,syntax:e.filterSyntax})),n,0,{context:r}).map(({key:e,suggestion:t})=>Object.assign({filterClass:e},t));var t,n,r},[e.availableFilters,e.value,e.suggestionContext]),r=i.useCallback(n=>{n.suggestion&&!ks(n.suggestion)&&Ds(t)?"full"===n.suggestion.matchType?e.onFiltersConsidered(hs(e.activeFilters,n.suggestion)):e.onFiltersConsidered([new se(""),...e.activeFilters.slice(1)]):e.onFiltersConsidered(void 0)},[e.onFiltersConsidered,e.activeFilters,t]);let o=void 0;const a=i.useCallback((n,r)=>{if(Ds(t))if(ks(r.suggestion)){if(!e.value)return;e.isPaidUser?e.onFiltersSaved(e.activeFilters.slice(1),e.value):e.getPro("save-filter")}else o=hs(e.activeFilters,r.suggestion),o.length!==e.activeFilters.length&&r.suggestion.filterClass.filterName,e.onFiltersChanged(o)},[o,e.value,e.isPaidUser,e.getPro,e.activeFilters,e.onFiltersChanged]),c=i.useCallback(()=>{const n=t.current;o&&o.length===e.activeFilters.length&&(n.justSelectedSuggestion=!1,n.revealSuggestions(),o=void 0),n.resetHighlightedSuggestion(),r({suggestion:null})},[o,a,e.activeFilters.length,t]),l=i.useCallback((e,t)=>e.trim().length>0||!["input-focused","input-changed","escape-pressed"].includes(t),[]),d=i.useCallback(t=>ks(t)?"":B(e.value,t),[e.value]),u=i.useCallback(t=>{t.target.value!==e.value&&e.onChange(t)},[e.onChange,e.value]),p=i.useMemo(()=>({type:"text",value:e.value,onChange:u,placeholder:e.placeholder,ref:e.searchInputRef}),[e.value,u,e.placeholder,e.searchInputRef]),h=e.activeFilters.length>1&&e.value.length>=1&&!e.value.includes(" ")&&1!==s.uniq(n.map(e=>e.filterClass)).length,m=!(h&&0===n.length),g=i.useMemo(()=>h?n.concat({saveFilters:!0,isPaidUser:e.isPaidUser,filterCount:e.activeFilters.length-1}):n,[h,e.isPaidUser,n,e.activeFilters]),f=i.useMemo(()=>{return t=e.onCustomFilterDeleted,n=e.value,(e,r)=>{if(ks(e))return i.createElement(Rs,Object.assign({},e,r,{query:n}));const{filterClass:o}=e,s=o.isCustomFilter?()=>t(o):void 0;return i.createElement(Ss,Object.assign({suggestion:e},r,{query:n,onDelete:s}))};var t,n},[e.onCustomFilterDeleted,e.value]);return i.createElement(vs,{ref:t,multiSection:!1,suggestions:g,highlightFirstSuggestion:m,shouldRenderSuggestions:l,onSuggestionsFetchRequested:s.noop,onSuggestionsClearRequested:c,onSuggestionHighlighted:r,onSuggestionSelected:a,getSuggestionValue:d,renderSuggestion:f,renderInputComponent:As,renderSuggestionsContainer:Is,inputProps:p})};var Ms=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Fs=p.j.div`
    position: relative;

    &:focus-within {
        border-color: ${e=>e.theme.highlightColor};
    }

    flex-grow: 1;
    min-width: 0; /* Don't let flexbox force this to expand given long tags */
    padding-right: ${e=>e.hasContents?"30px":"0"};

    border-radius: 4px;

    border: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: inset 0 2px 4px 1px rgba(0, 0, 0, ${e=>e.theme.boxShadowAlpha/2});
    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};

    font-size: ${e=>e.theme.textSize};

    display: flex;

    &:hover, &:focus-within {
        flex-wrap: wrap;
    }
    &:not(:hover):not(:focus-within) {
        overflow: hidden;
    }

    /* Add a layer to act as a button background over non-wrapping content */
    &:after {
        content: "";
        position: absolute;
        display: block;

        z-index: 5;

        top: 4px;
        bottom: 4px;

        right: 0px;
        width: 36px;
        background: linear-gradient(
            to right,
            transparent 0%,
            ${e=>us.f(e.theme.highlightBackground,.9)} 25%
        );
    }

    .react-autosuggest__container {
        flex-grow: 1;
        flex-basis: 100px; /* Shrink down to this, then wrap */
    }

    padding-bottom: 4px;
    > div {
        margin: 4px 0 0 4px;
    }
`,Bs=p.f`
    width: ${"30px"};
    padding: 4px 10px;
    box-sizing: border-box;

    /* This isn't needed for button, but is for buttonlink - unclear why but it works */
    display: flex;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    /* Appears in front of the :after background layer */
    z-index: 10;
`,Ns=Object(p.j)(cn.a)`${Bs}`,Ls=Object(p.j)(cn.b)`
    ${Bs}
    opacity: 0.8;
`;let Us=class extends i.Component{constructor(){super(...arguments),this.boxRef=i.createRef(),this.tagRefs=new Map,this.selectedFilters=[],this.undoer=Object(ds.trackUndo)(()=>this.activeFilters,e=>this.onFiltersChanged(e)),this.updateSelectedTags=Object(d.action)(()=>{this.selectedFilters=this.getSelectedFilters()}),this.onKeyDown=e=>{var t;const n=this.boxRef.current;if(!n)return;const{onFiltersChanged:r,activeFilters:o}=this,s=(e=>{const t=document.getSelection();return!t||t.isCollapsed?[]:[...Array.from(e.querySelectorAll(".filter-tag")),e.querySelector("input")].filter(e=>t.containsNode(e,!0))})(n);if(!n.contains(document.activeElement))return void(s&&document.getSelection().removeAllRanges());if("a"===e.key&&Object(Mt.c)(e))return this.selectAllFilterTags(),void e.preventDefault();if("z"===e.key.toLowerCase()&&Object(Mt.c)(e))return e.shiftKey?this.undoer.redo():this.undoer.undo(),void e.preventDefault();const a=Array.from(n.querySelectorAll(".filter-tag")),i=n.querySelector("input"),c=[...a,i],l=document.activeElement,d=c.indexOf(l);if(l!==i&&"v"===e.key&&Object(Mt.c)(e)){i.focus();const e=i.value.length;i.setSelectionRange(e,e)}else{var u,p;if(-1!==d)if(s.length>0){if("ArrowLeft"===e.key||"ArrowRight"===e.key){const t=s["ArrowLeft"===e.key?0:s.length-1];if(document.getSelection().removeAllRanges(),t.focus(),t===i){const t="ArrowLeft"===e.key?0:i.value.length;i.setSelectionRange(t,t)}e.preventDefault()}else if("Delete"===e.key||"Backspace"===e.key){const t=c.indexOf(s[s.length-1]);this.deleteSelectedFilters(),document.getSelection().removeAllRanges(),c.length-t<3&&(i.focus(),i.setSelectionRange(0,0)),e.preventDefault()}else if("Escape"===e.key){document.getSelection().removeAllRanges(),i.focus();const t=i.value.length;i.setSelectionRange(t,t),e.preventDefault()}else if(1===[...e.key].length&&!e.ctrlKey&&!e.altKey&&!e.metaKey){const e=i.selectionStart||i.value.length;this.deleteSelectedFilters(),document.getSelection().removeAllRanges(),i.setSelectionRange(e,e),i.focus()}}else if(i.selectionStart===i.selectionEnd){const n=null!==(t=i.selectionStart)&&void 0!==t?t:-1,s=l===i;if("Backspace"===e.key||"Delete"===e.key){let t=s?n<=0&&"Backspace"===e.key?1:null:c.length-1-d;t&&(r((u=o,0===(p=t)||0===u.length?u:[u[0],...u.slice(1,p),...u.slice(p+1)])),1===t&&i.focus(),e.preventDefault())}else if("ArrowLeft"===e.key&&d>0&&n<=0)c[d-1].focus(),e.preventDefault();else if("ArrowRight"===e.key&&d<c.length-1){const t=c[d+1];t.focus(),t===i&&i.setSelectionRange(0,0),e.preventDefault()}}}},this.onCopy=e=>{const{activeFilters:t}=this,n=s.orderBy(this.getSelectedFilters(),e=>t.indexOf(e),["desc"]);if(n.length>0){const t=n.map(e=>e.serialize()).join(" ");Object(Mt.b)(t),e.preventDefault()}},this.onCut=e=>{this.onCopy(e),this.deleteSelectedFilters()},this.onPaste=e=>{var t,n;const r=this.boxRef.current,o=null==r?void 0:r.querySelector("input");if(!r||!o)return;e.preventDefault();const{selectedFilters:s,activeFilters:a,onFiltersChanged:i,props:{availableFilters:c}}=this,l=ps(c,e.clipboardData.getData("text")),d=l[0].filter,u=null!==(t=o.selectionStart)&&void 0!==t?t:0,p=null!==(n=o.selectionEnd)&&void 0!==n?n:0,h=a[0].filter,m=s.includes(a[0])?d:h.slice(0,u)+d+h.slice(p);i([new se(m),...l.slice(1),...a.slice(1).filter(e=>!s.includes(e))]),requestAnimationFrame(()=>{const e=u+d.length;o.setSelectionRange(e,e),o.focus()})},this.onInputChanged=e=>{const{onFiltersChanged:t,activeFilters:n}=this;t([new se(e.target.value),...n.slice(1)])},this.onFiltersCleared=()=>{var e;this.onFiltersChanged(oe());const t=null===(e=this.boxRef.current)||void 0===e?void 0:e.querySelector("input[type=text]");null==t||t.focus()}}get activeFilters(){return this.props.uiStore.activeFilterSet}onFiltersChanged(e){this.props.uiStore.activeFilterSet=e}get availableFilters(){const e=this.props.availableFilters,t=Object.entries(this.props.uiStore.customFilters).map(([t,n])=>function(e,t,n){const r=ps(n,t),o=""===r[0].filter?r.slice(1):r;return Object.assign((function(){return o}),{filterSyntax:[new Y(e)],filterDescription:()=>t,filterName:e,isCustomFilter:!0})}(t,n,e));return e.concat(t)}getSelectedFilters(){const e=document.getSelection();if(!e||e.isCollapsed)return[];const{boxRef:t,tagRefs:n,activeFilters:r}=this,o=t.current;o&&n.set(o.querySelector("input"),r[0]);const s=[];return Array.from(n.entries()).forEach(([t,r])=>{document.contains(t)?e.containsNode(t,!0)&&s.push(r):n.delete(t)}),s}componentDidMount(){this.updateSelectedTags(),document.addEventListener("selectionchange",this.updateSelectedTags),Object(u.c)(this,()=>{document.removeEventListener("selectionchange",this.updateSelectedTags)})}selectAllFilterTags(){const e=this.boxRef.current;e&&window.getSelection().setBaseAndExtent(e,0,e.querySelector("[role=listbox]"),0)}deleteSelectedFilters(){const{selectedFilters:e,onFiltersChanged:t,activeFilters:n}=this,r=e.includes(n[0])?"":n[0].filter||"";t([new se(r),...n.filter((t,n)=>n>0&&!e.includes(t))])}onFiltersSaved(e,t){const n=this.props.uiStore;n.customFilters[t]=e.map(e=>e.serialize()).reverse().join(" "),n.activeFilterSet=[new se(""),...n.activeFilterSet.slice(1)]}onCustomFilterDeleted(e){delete this.props.uiStore.customFilters[e.filterName]}render(){var e;const{boxRef:t,onCopy:n,onCut:r,onPaste:o,onKeyDown:s,onInputChanged:a,onFiltersCleared:c,onFiltersChanged:l,onFiltersSaved:d,onCustomFilterDeleted:u,tagRefs:p,selectedFilters:h,activeFilters:m,availableFilters:g,props:{accountStore:f,placeholder:b,searchInputRef:y,filterSuggestionContext:v,onFiltersConsidered:x}}=this,[w,...E]=m,C=null!==(e=null==w?void 0:w.filter)&&void 0!==e?e:"",T=!!C||!!E.length;return i.createElement(Fs,{ref:t,hasContents:T,onCopy:n,onCut:r,onPaste:o,onKeyDown:s},E.reverse().map((e,t)=>i.createElement(ys,{key:t,filter:e,isSelected:h.includes(e),onDelete:()=>{return l((n=e,[(t=m)[0],...t.slice(1).filter((e,t)=>e!==n)]));var t,n},ref:t=>{t&&p.set(t,e)}})),i.createElement($s,{value:C,onChange:a,placeholder:0===E.length?b:"...",searchInputRef:y,onFiltersConsidered:x,onFiltersChanged:l,onFiltersSaved:d,onCustomFilterDeleted:u,activeFilters:m,availableFilters:g,suggestionContext:v,isPaidUser:f.isPaidUser,getPro:f.getPro}),T?i.createElement(Ns,{title:"Clear all search filters",icon:["fas","times"],onClick:c}):i.createElement(Ls,{icon:["fas","question"],title:"Open filtering docs",href:"https://httptoolkit.com/docs/reference/view-page/#filtering-intercepted-traffic",target:"_blank",rel:"noreferrer noopener"}))}};Ms([d.observable.struct],Us.prototype,"selectedFilters",void 0),Ms([d.computed],Us.prototype,"activeFilters",null),Ms([d.action.bound],Us.prototype,"onFiltersChanged",null),Ms([d.computed],Us.prototype,"availableFilters",null),Ms([d.action.bound],Us.prototype,"onFiltersSaved",null),Ms([d.action.bound],Us.prototype,"onCustomFilterDeleted",null),Us=Ms([Object(u.d)("uiStore"),Object(u.d)("accountStore"),u.e],Us);const Ws=Object(p.j)(Object(u.e)(e=>i.createElement("div",{className:e.className},i.createElement("span",{className:"count"},e.filteredEventCount,e.eventCount!==e.filteredEventCount&&" / "+e.eventCount),i.createElement("span",{className:"label"},"requests"))))`
    margin-left: auto;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .count {
        font-size: 20px;
        font-weight: bold;
        white-space: nowrap;
    }

    .label {
        margin-top: -4px;
        font-size: ${e=>e.theme.textSize};
        opacity: 0.8;
        font-weight: lighter;
    }
`,zs=p.j.div`
    display: flex;
`,_s=Object(p.j)(Object(u.e)(e=>i.createElement("div",{className:e.className},i.createElement(Us,{onFiltersConsidered:e.onFiltersConsidered,availableFilters:Ne,filterSuggestionContext:e.allEvents,placeholder:"Filter by method, host, headers, status...",searchInputRef:e.searchInputRef}),i.createElement(Ws,{filteredEventCount:e.filteredCount[0],eventCount:e.filteredCount[1]}),i.createElement(zs,null,i.createElement(cs,null),i.createElement(ls,{onScrollToEnd:e.onScrollToEnd}),i.createElement(as,{events:e.filteredEvents}),i.createElement(is,null),i.createElement(ss,{disabled:0===e.allEvents.length,onClear:e.onClear})))))`
    order: 1;

    min-height: ${38}px;
    width: 100%;
    padding-left: 2px;
    box-sizing: border-box;

    background-color: ${e=>e.theme.mainBackground};

    display: flex;
    align-items: center;
    justify-content: space-between;
`;var Vs=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Gs=Object(p.j)(qo)`
    position: absolute;
    top: ${38}px;
    bottom: 0;
    height: auto;

    line-height: 1.3;
`,Js=p.j.div`
    flex-grow: 1;
    position: relative;
    width: 100%;
    box-sizing: border-box;

    font-size: ${e=>e.theme.textSize};

    &::after { /* Insert shadow over table contents */
        content: '';
        position: absolute;
        top: ${38}px;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 30px inset;
        pointer-events: none;
    }
`,Ks=p.j.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 3px 0;
`,Ys=Object(p.j)(Ft($t.b,"pinned")).attrs(e=>({icon:["fas","thumbtack"],title:e.pinned?"This exchange is pinned, and won't be deleted by default":""}))`
    font-size: 90%;
    background-color: ${e=>e.theme.containerBackground};

    /* Without this, 0 width pins create a large & invisible but still clickable icon */
    overflow: hidden;

    transition: width 0.1s, padding 0.1s, margin 0.1s;

    ${e=>e.pinned?"\n            width: auto;\n            padding: 8px 7px;\n            && { margin-right: -3px; }\n        ":"\n            padding: 8px 0;\n            width: 0 !important;\n            margin: 0 !important;\n\n            > path {\n                display: none;\n            }\n        "}
`,Qs=Object(p.j)(Ks)`
    transition: color 0.2s;
    color: ${e=>Object(q.f)(e.category)};

    background-color: currentColor;

    flex-basis: 5px;
    flex-shrink: 0;
    flex-grow: 0;
    height: 100%;
    padding: 0;

    border-left: 5px solid ${e=>e.theme.containerBackground};
`,Xs=p.j.div`
    flex-basis: 10px;
    flex-shrink: 0;
`,Zs=Object(p.j)(Ks)`
    transition: flex-basis 0.1s;
    ${e=>e.pinned?"flex-basis: 50px;":"flex-basis: 71px;"}

    flex-shrink: 0;
    flex-grow: 0;
`,ea=Object(p.j)(Ks)`
    flex-basis: 45px;
    flex-shrink: 0;
    flex-grow: 0;
`,ta=Object(p.j)(Ks)`
    flex-basis: 49px;
    flex-shrink: 0;
    flex-grow: 0;
    text-align: center;
`,na=Object(p.j)(Ks)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 500px;
`,ra=Object(p.j)(Ks)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,oa=Object(p.j)(Ks)`
    transition: flex-basis 0.1s;
    ${e=>e.pinned?"flex-basis: 109px;":"flex-basis: 130px;"}

    margin-right: 6px !important;

    flex-shrink: 0;
    flex-grow: 0;
`,sa=Object(p.j)(Ks)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 500px;

    > svg {
        padding-right: 0; /* Right, not left - it's rotated */
    }
`,aa=Object(p.j)(Ks)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,ia=Object(p.j)(aa)`
    text-align: center;
`,ca=Object(p.j)(Ks)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,la=p.j.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    user-select: none;
    cursor: pointer;

    &.selected {
        background-color: ${e=>e.theme.highlightBackground};
        color: ${e=>e.theme.highlightColor};
        font-weight: bold;

        ${e=>e.theme===p.h&&p.f`
                ${ns} {
                    color: ${e=>e.theme.highlightColor};
                }
            `}
    }

    &:focus {
        outline: thin dotted ${e=>e.theme.popColor};
    }
`,da=Object(p.j)(la)`
    background-color: ${e=>e.theme.mainBackground};

    border-width: 2px 0;
    border-style: solid;
    border-color: transparent;
    background-clip: padding-box;
    box-sizing: border-box;

    &:hover ${Qs}, &.selected ${Qs} {
        border-color: currentColor;
    }

    > * {
        margin-right: 10px;
    }
`,ua=Object(p.j)(la)`
    height: 28px !important; /* Important required to override react-window's style attr */
    margin: 2px 0;

    font-style: italic;
    justify-content: center;
    text-align: center;

    opacity: 0.7;

    &:hover {
        opacity: 1;
    }

    &.selected {
        opacity: 1;
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.mainBackground};
    }
`,pa=p.j.header`
    height: 38px;
    overflow: hidden;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    font-weight: bold;

    border-bottom: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: 0 0 30px rgba(0,0,0,0.2);

    padding-right: 18px;
    box-sizing: border-box;

    > div {
        padding: 5px 0;
        margin-right: 10px;
        min-width: 0px;

        &:first-of-type {
            margin-left: 0;
        }
    }
`,ha=Object(u.e)(e=>{var t;const{index:n,style:r}=e,{events:o,selectedEvent:s,contextMenuBuilder:a}=e.data,c=o[n],l=s===c;if(c.isTlsFailure()||c.isTlsTunnel())return i.createElement(va,{index:n,isSelected:l,style:r,tlsEvent:c});if(c.isHttp())return(null===(t=c.api)||void 0===t?void 0:t.isBuiltInApi)&&c.api.matchedOperation()?i.createElement(ya,{index:n,isSelected:l,style:r,exchange:c,contextMenuBuilder:a}):i.createElement(ma,{index:n,isSelected:l,style:r,exchange:c,contextMenuBuilder:a});if(c.isRTCConnection())return i.createElement(fa,{index:n,isSelected:l,style:r,event:c});if(c.isRTCDataChannel()||c.isRTCMediaTrack())return i.createElement(ba,{index:n,isSelected:l,style:r,event:c});throw new S.a(c)}),ma=Object(u.d)("uiStore")(Object(u.e)(({index:e,isSelected:t,style:n,exchange:r,contextMenuBuilder:o})=>{const{request:s,response:a,pinned:c,category:l}=r;return i.createElement(da,{role:"row","aria-label":"row","aria-rowindex":e+1,"data-event-id":r.id,tabIndex:t?0:-1,onContextMenu:o.getContextMenuCallback(r),className:t?"selected":"",style:n},i.createElement(Ys,{pinned:c}),i.createElement(Qs,{category:l,title:Object(q.b)(l)}),i.createElement(Zs,{pinned:c},s.method),i.createElement(ea,null,"aborted"===a?i.createElement(ns,{status:"aborted"}):r.isBreakpointed?i.createElement($t.e,{title:"Breakpointed, waiting to be resumed"}):r.isWebSocket()&&101===(null==a?void 0:a.statusCode)?i.createElement(ns,{status:r.closeState?"WS:closed":"WS:open",message:(r.closeState?"A closed":"An open")+" WebSocket connection"}):i.createElement(ns,{status:null==a?void 0:a.statusCode,message:null==a?void 0:a.statusMessage})),i.createElement(ta,null,i.createElement($t.b,Object.assign({title:s.source.summary},s.source.icon,{fixedWidth:!0})),r.matchedRule&&r.matchedRule.handlerStepTypes.some(e=>"passthrough"!==e&&"ws-passthrough"!==e&&"rtc-dynamic-proxy"!==e)&&i.createElement($t.b,{title:`Handled by ${1===r.matchedRule.handlerStepTypes.length?Zo(r.matchedRule.handlerStepTypes[0]):"multi-step"} rule`,icon:["fas","theater-masks"],color:Object(q.f)("mutative"),fixedWidth:!0})),i.createElement(na,{title:s.parsedUrl.host},s.parsedUrl.host),i.createElement(ra,{title:s.parsedUrl.pathname+s.parsedUrl.search},s.parsedUrl.pathname+s.parsedUrl.search))})),ga=Object(p.j)($t.b).attrs(()=>({icon:["fas","spinner"],spin:!0,title:"Connected"}))`
    margin: 0 5px 0 0;
`,fa=Object(u.e)(({index:e,isSelected:t,style:n,event:r})=>{const{category:o,pinned:s}=r;return i.createElement(da,{role:"row","aria-label":"row","aria-rowindex":e+1,"data-event-id":r.id,tabIndex:t?0:-1,className:t?"selected":"",style:n},i.createElement(Ys,{pinned:s}),i.createElement(Qs,{category:o,title:Object(q.b)(o)}),i.createElement(oa,null,!r.closeState&&i.createElement(ga,null)," WebRTC"),i.createElement(ta,{title:r.source.summary},i.createElement($t.b,Object.assign({},r.source.icon,{fixedWidth:!0}))),i.createElement(ia,null,r.clientURL," ",i.createElement($t.a,{direction:"right"})," ",r.remoteURL||"?"))}),ba=Object(u.e)(({index:e,isSelected:t,style:n,event:r})=>{const{category:o,pinned:s}=r;return i.createElement(da,{role:"row","aria-label":"row","aria-rowindex":e+1,"data-event-id":r.id,tabIndex:t?0:-1,className:t?"selected":"",style:n},i.createElement(Ys,{pinned:s}),i.createElement(Qs,{category:o,title:Object(q.b)(o)}),i.createElement(oa,null,!r.closeState&&i.createElement(ga,null)," WebRTC ",r.isRTCDataChannel()?"Data":"Media"),i.createElement(ta,{title:r.rtcConnection.source.summary},i.createElement($t.b,Object.assign({},r.rtcConnection.source.icon,{fixedWidth:!0}))),i.createElement(sa,null,i.createElement($t.a,{direction:"right"})," ",r.rtcConnection.remoteURL),i.createElement(aa,null,r.isRTCDataChannel()?i.createElement(i.Fragment,null,r.label," ",i.createElement("em",null,"(",r.protocol?r.protocol+" - ":"",r.messages.length," message",1!==r.messages.length?"s":"",")")):i.createElement(i.Fragment,null,r.direction," ",r.type," ",i.createElement("em",null,Object(H.a)(r.totalBytesSent)," sent, ",Object(H.a)(r.totalBytesReceived)," received"))))}),ya=Object(u.e)(e=>{const{request:t,pinned:n,category:r}=e.exchange,o=e.exchange.api;return i.createElement(da,{role:"row","aria-label":"row","aria-rowindex":e.index+1,"data-event-id":e.exchange.id,tabIndex:e.isSelected?0:-1,onContextMenu:e.contextMenuBuilder.getContextMenuCallback(e.exchange),className:e.isSelected?"selected":"",style:e.style},i.createElement(Ys,{pinned:n}),i.createElement(Qs,{category:r,title:Object(q.b)(r)}),i.createElement(oa,null,o.service.shortName,": ",s.startCase(o.operation.name.replace("eth_",""))),i.createElement(ta,{title:t.source.summary},i.createElement($t.b,Object.assign({},t.source.icon,{fixedWidth:!0}))),i.createElement(ca,null,o.request.parameters.filter(e=>void 0!==e.value).map(e=>`${e.name}=${JSON.stringify(e.value)}`).join(", ")))}),va=Object(u.e)(e=>{const{tlsEvent:t}=e,n=t.isTlsTunnel()?"Tunnelled TLS ":{closed:"Aborted ",reset:"Aborted ",unknown:"Aborted ","cert-rejected":"Certificate rejected for ","no-shared-cipher":"HTTPS setup failed for "}[t.failureCause];return i.createElement(ua,{role:"row","aria-label":"row","aria-rowindex":e.index+1,"data-event-id":t.id,tabIndex:e.isSelected?0:-1,className:e.isSelected?"selected":"",style:e.style},t.isTlsTunnel()&&t.isOpen()&&i.createElement(ga,null)," ",n," connection to ",t.upstreamHostname||"unknown domain")});let xa=class extends i.Component{constructor(){super(...arguments),this.listBodyRef=i.createRef(),this.listRef=i.createRef(),this.KeyBoundListWindow=Object(u.e)(i.forwardRef((e,t)=>i.createElement("section",Object.assign({},e,{style:Object.assign({},e.style,{overflowY:"scroll"}),ref:t,onFocus:this.focusSelectedEvent,onKeyDown:this.onKeyDown,onMouseDown:this.onListMouseDown,tabIndex:this.isSelectedEventVisible()?-1:0})))),this.isSelectedEventVisible=()=>{if(!this.selectedEventId)return!1;const e=this.listBodyRef.current;return!!e&&!!e.querySelector(`[data-event-id='${this.selectedEventId}']`)},this.focusSelectedEvent=()=>{this.focusEvent(this.props.selectedEvent)},this.wasListAtBottom=!0,this.updateScrolledState=()=>{requestAnimationFrame(()=>{this.wasListAtBottom=this.isListAtBottom()})},this.onListMouseDown=e=>{if(0!==e.button)return;let t=e.target,n=null;for(;null===n&&t&&t!==this.listBodyRef.current;)n=t.getAttribute&&t.getAttribute("aria-rowindex"),t=t.parentElement;if(!n)return;const r=parseInt(n,10)-1;this.props.filteredEvents[r]!==this.props.selectedEvent?this.onEventSelected(r):this.onEventDeselected()}}get selectedEventId(){return this.props.selectedEvent?this.props.selectedEvent.id:void 0}get listItemData(){return{selectedEvent:this.props.selectedEvent,events:this.props.filteredEvents,contextMenuBuilder:this.props.contextMenuBuilder}}render(){const{events:e,filteredEvents:t,isPaused:n}=this.props;return i.createElement(Js,null,i.createElement(pa,null,i.createElement(Xs,null),i.createElement(Zs,null,"Method"),i.createElement(ea,null,"Status"),i.createElement(ta,null,"Source"),i.createElement(na,null,"Host"),i.createElement(ra,null,"Path and query")),0===e.length?n?i.createElement(Gs,{icon:["fas","pause"]},"Interception is paused, resume it to collect intercepted requests"):i.createElement(Gs,{icon:["fas","plug"]},"Connect a client and intercept some requests, and they'll appear here"):0===t.length?i.createElement(Gs,{icon:["fas","question"]},"No requests match this search filter",n?" and interception is paused":""):i.createElement(Ko.a,null,({height:e,width:n})=>i.createElement(u.a,null,()=>i.createElement(Yo.a,{innerRef:this.listBodyRef,outerElementType:this.KeyBoundListWindow,ref:this.listRef,height:e-38,width:n,itemCount:t.length,itemSize:32,itemData:this.listItemData,onScroll:this.updateScrolledState},ha))))}focusEvent(e){const t=this.listBodyRef.current;if(t)if(e){const n=t.querySelector(`[data-event-id='${e.id}']`);null==n||n.focus()}else{t.parentElement.focus()}}isListAtBottom(){var e;const t=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement;return!t||t.scrollTop+5>=t.scrollHeight-t.offsetHeight}componentDidMount(){this.updateScrolledState()}componentDidUpdate(){var e,t,n;(null===(t=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement)||void 0===t?void 0:t.contains(document.activeElement))&&this.focusSelectedEvent(),this.wasListAtBottom&&!this.isListAtBottom()&&(null===(n=this.listRef.current)||void 0===n||n.scrollToItem(this.props.events.length-1))}scrollToEvent(e){var t;const n=this.props.filteredEvents.indexOf(e);-1!==n&&(null===(t=this.listRef.current)||void 0===t||t.scrollToItem(n),requestAnimationFrame(()=>this.focusEvent(e)))}scrollToCenterEvent(e){const t=this.listRef.current,n=this.listBodyRef.current;if(!t||!n)return;const r=n.parentElement,o=this.props.filteredEvents.indexOf(e);if(-1===o)return;const a=this.props.filteredEvents.length,i=r.clientHeight,c=i/2,l=32*o,d=Math.max(0,32*a-i),u=l-c+16;t.scrollTo(s.clamp(u,0,d)),requestAnimationFrame(()=>this.focusEvent(e))}scrollToEnd(){var e;null===(e=this.listRef.current)||void 0===e||e.scrollToItem(this.props.filteredEvents.length,"start")}onEventSelected(e){this.props.onSelected(this.props.filteredEvents[e])}onEventDeselected(){this.props.onSelected(void 0)}onKeyDown(e){const{moveSelection:t}=this.props;switch(e.key){case"ArrowDown":t(1);break;case"ArrowUp":t(-1);break;case"PageUp":t(-10);break;case"PageDown":t(10);break;case"Home":t(-1/0);break;case"End":t(1/0);break;default:return}e.preventDefault()}};Vs([d.computed],xa.prototype,"selectedEventId",null),Vs([d.computed],xa.prototype,"listItemData",null),Vs([d.action.bound],xa.prototype,"onEventSelected",null),Vs([d.action.bound],xa.prototype,"onEventDeselected",null),Vs([d.action.bound],xa.prototype,"onKeyDown",null),xa=Vs([u.e],xa);var wa=n(346),Ea=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const Ca=e=>Ea(void 0,void 0,void 0,(function*(){const t=JSON.stringify(yield Object(ft.a)([e],{bodySizeLimit:1/0})),n=`${e.request.method} ${e.request.parsedUrl.hostname}.har`;Object(Mt.f)(n,"application/har+json;charset=utf-8",t)}));function Ta(e,t,n={}){if(n.waitForBodyDecoding&&("pending"===e.request.body.decodedPromise.state||void 0===e.request.body.decodedPromise.state))return e.request.body.decodedPromise.catch(()=>{}).then(()=>Ta(e,t,n));const r=Object(ft.b)(e.request,!1,{bodySizeLimit:1/0}),o=ja(r);return new wa(o).convert(t.target,t.client)}const ja=e=>{const t=e.postData?e.postData:"discarded:not-representable"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! UNREPRESENTABLE BINARY REQUEST BODY - BODY MUST BE EXPORTED SEPARATELY !!!"}:"discarded:too-large"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! VERY LARGE REQUEST BODY - BODY MUST BE EXPORTED & INCLUDED SEPARATELY !!!"}:"discarded:not-decodable"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! REQUEST BODY COULD NOT BE DECODED !!!"}:void 0;return Object.assign(Object.assign({},e),{postData:t,headers:e.headers.filter(e=>"content-length"!==e.name.toLowerCase()&&!e.name.startsWith(":"))})},Oa=s(wa.availableTargets()).keyBy(e=>e.title).mapValues(e=>e.clients.map(t=>({target:e.key,client:t.key,name:t.title,description:t.description,link:t.link}))).value(),Sa=e=>e.target+"~~"+e.client,ka=e=>{const[t,n]=e.split("~~");return s(Oa).values().flatten().find({target:t,client:n})},Pa=e=>({"php~~curl":"PHP ext-cURL","php~~http1":"PHP HTTP v1","php~~http2":"PHP HTTP v2","node~~native":"Node.js HTTP"}[Sa(e)]||e.name);var Ra=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class Ha{constructor(e,t,n,r,o){this.accountStore=e,this.uiStore=t,this.onPin=n,this.onDelete=r,this.onBuildRuleFromExchange=o,this.BaseOptions={Pin:{type:"option",label:"Toggle Pinning",callback:this.onPin},Delete:{type:"option",label:"Delete",callback:this.onDelete}}}getContextMenuCallback(e){return t=>{const{isPaidUser:n}=this.accountStore,r=this.uiStore.exportSnippetFormat?ka(this.uiStore.exportSnippetFormat):void 0;e.isHttp()?this.uiStore.handleContextMenuEvent(t,[this.BaseOptions.Pin,{type:"option",label:"Copy Request URL",callback:e=>Object(Mt.b)(e.request.url)},this.BaseOptions.Delete,...n?[]:[{type:"separator"},{type:"option",label:"With Pro:",enabled:!1,callback:()=>{}}],{type:"option",enabled:n,label:"Create Matching Mock Rule",callback:this.onBuildRuleFromExchange},{type:"option",enabled:n,label:"Export Exchange as HAR",callback:Ca},...r&&n?[{type:"option",label:`Copy as ${Pa(r)} Snippet`,callback:e=>Ra(this,void 0,void 0,(function*(){Object(Mt.b)(yield Ta(e,r,{waitForBodyDecoding:!0}))}))}]:[],{type:"submenu",enabled:n,label:"Copy as Code Snippet",items:Object.keys(Oa).map(e=>({type:"submenu",label:e,items:Oa[e].map(e=>({type:"option",label:Pa(e),callback:t=>Ra(this,void 0,void 0,(function*(){Object(d.runInAction)(()=>{this.uiStore.exportSnippetFormat=Sa(e)}),Object(Mt.b)(yield Ta(t,e,{waitForBodyDecoding:!0}))}))}))}))}],e):this.uiStore.handleContextMenuEvent(t,[this.BaseOptions.Pin,this.BaseOptions.Delete],e)}}}var qa=n(29);const Aa=p.j.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ia=p.j.div`
    position: relative;
    overflow-y: scroll;

    flex-grow: 1;
    padding: 0 20px 0 20px;

    background-color: ${e=>e.theme.containerBackground};
`,Da=p.j.div`
    min-height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    /*
    * This padding could be padding on the scroll container, but doing so causes odd
    * behaviour where position: sticky headers don't take it into account, on OSX only.
    * Moving to the direct parent of the header makes that consistent, for some reason. Ew.
    */
    padding-top: 20px;
`,$a=e=>i.createElement(Ia,null,i.createElement(Da,null,e.children));var Ma=n(98),Fa=n(99),Ba=n(51),Na=n(110),La=n(49),Ua=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Wa=e=>"sent"===e.direction?"left":"right",za=i.memo(e=>i.createElement(Va,{messageDirection:Wa(e.message),onClick:()=>e.onClick(e.index),tabIndex:0,onKeyDown:t=>{var n,r,o,s;"Enter"===t.key&&e.onClick(e.index),"ArrowDown"===t.key&&(t.preventDefault(),null===(r=null===(n=t.currentTarget.nextElementSibling)||void 0===n?void 0:n.focus)||void 0===r||r.call(n)),"ArrowUp"===t.key&&(t.preventDefault(),null===(s=null===(o=t.currentTarget.previousElementSibling)||void 0===o?void 0:o.focus)||void 0===s||s.call(o))}},i.createElement(_a,{selected:!1,messageDirection:Wa(e.message)}),i.createElement(Ga,null,Object(P.c)(e.message.content.slice(0,200))),e.message.isBinary&&i.createElement(Wt.a,{color:p.k},"Binary"),i.createElement(Wt.a,null,Object(H.a)(e.message.content.byteLength)))),_a=Object(p.j)(i.memo(e=>i.createElement("div",{className:e.className},i.createElement($t.a,{direction:e.messageDirection}))))`
    width: 25px;
    flex-grow: 0;
    flex-shrink: 0;

    padding-right: 1px;
    box-sizing: border-box;
    margin: -4px 0;

    > svg {
        padding: 0;
        color: ${e=>e.selected?e.theme.popColor:e.theme.containerBorder};
    }

    text-align: center;
`,Va=p.j.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    border-style: solid;
    border-width: 0 5px 1px;

    border-color: transparent;
    border-${e=>e.messageDirection}-color: ${e=>e.theme.containerBorder};
    border-bottom-color: ${e=>e.theme.containerWatermark};

    cursor: pointer;
    &:hover, &:focus {
        outline: none;
        border-${e=>e.messageDirection}-color: ${e=>e.theme.popColor};
        background-color: ${e=>e.theme.mainBackground};
    }

    padding: 4px 15px 4px 0;

    ${Wt.a} {
        flex-shrink: 0;
        &:last-of-type {
            margin-right: 0;
        }
    }
`,Ga=Object(p.j)(en.e)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-grow: 1;
    width: auto;
    padding: 3px 0 4px;
`;let Ja=class extends i.Component{constructor(){super(...arguments),this.containerRef=i.createRef(),this.onEditorContentRendered=()=>{var e;if(this.containerRef.current===document.activeElement){const t=null===(e=this.containerRef.current)||void 0===e?void 0:e.querySelector(".monaco-editor textarea");null==t||t.focus()}}}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{this.props.message||this.setContentType(void 0)})),this.onMessageChanged()}componentDidUpdate(e){(null==e?void 0:e.message.messageIndex)!==this.props.message.messageIndex&&this.onMessageChanged()}onMessageChanged(){const e=this.containerRef.current;e.scrollIntoView({behavior:"smooth"});const t=e.querySelector(".monaco-editor textarea");t?t.focus():e.focus()}setContentType(e){e===this.props.message.contentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{message:e,isPaidUser:t,onExportMessage:n,editorNode:r,streamId:o}=this.props,a=Object(Ba.c)(e.contentType,void 0,Object(P.b)(e.content)),c=s.includes(a,this.selectedContentType)?this.selectedContentType:e.contentType,l="sent"===e.direction?"left":"right";return i.createElement(Ka,{ref:this.containerRef,tabIndex:-1,onKeyDown:e=>{var t,n,r,o;if(e.target===e.currentTarget)if(e.target===e.currentTarget&&"Enter"===e.key){const t=e.target.querySelector(".monaco-editor textarea");null==t||t.focus()}else"ArrowDown"===e.key?(e.preventDefault(),null===(n=null===(t=e.currentTarget.nextElementSibling)||void 0===t?void 0:t.focus)||void 0===n||n.call(t)):"ArrowUp"===e.key&&(e.preventDefault(),null===(o=null===(r=e.currentTarget.previousElementSibling)||void 0===r?void 0:r.focus)||void 0===o||o.call(r))}},i.createElement(Ya,{messageDirection:l},i.createElement(_a,{selected:!0,messageDirection:l}),i.createElement(en.c,null,"sent"===e.direction?"Received from server":"Sent by client",":"),i.createElement(cn.a,{icon:["fas","download"],title:t?"Save this message as a file":"With Pro: Save this message as a file",disabled:!t,onClick:()=>n(e)}),i.createElement(Wt.c,{onChange:this.setContentType,value:c,options:a,nameFormatter:Ba.d}),i.createElement(Wt.a,null,Object(H.a)(e.content.byteLength))),i.createElement(Qa,null,i.createElement(Na.a,{contentId:`ws-${o}-${e.messageIndex}`,editorNode:r,contentType:c,cache:e.cache,expanded:!1,onContentRendered:this.onEditorContentRendered},e.content)))}};Ua([d.observable],Ja.prototype,"selectedContentType",void 0),Ua([d.action.bound],Ja.prototype,"setContentType",null),Ja=Ua([u.e],Ja);const Ka=p.j.div`
    background-color: ${e=>e.theme.mainBackground};
    border-bottom: 1px solid ${e=>e.theme.containerWatermark};

    display: flex;
    flex-direction: column;
`,Ya=p.j.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    padding: 4px 15px 4px 0;

    cursor: pointer;

    border-style: solid;
    border-width: 0 5px 1px;

    border-color: transparent;
    border-${e=>e.messageDirection}-color: ${e=>e.theme.popColor};
    border-bottom-color: ${e=>e.theme.containerWatermark};

    > ${en.c} {
        flex-grow: 1;
        text-overflow: ellipsis;
        overflow: hidden;

        margin-left: -8px;
    }

    > ${cn.a} {
        margin: -5px 0;
    }

    ${Wt.a}, select {
        &:last-of-type {
            margin-right: 0;
        }
    }
`,Qa=Object(p.j)(La.d)`
    /* Undo the whole-card specific bits of styling */
    border-top: none;
    margin: 0;
`;var Xa=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};function Za(e,t,n){return`${e} ${n?"message "+n:"messages"}.${t?"bin":"txt"}`}let ei=class extends i.Component{constructor(){super(...arguments),this.expandedRow=void 0,this.exportMessages=()=>{Object(Mt.f)(Za(this.props.filenamePrefix,this.someBinaryMessages),this.someBinaryMessages?"application/octet-stream":"text/plain",this.props.messages.map(e=>e.content).join("\n\n---\n\n"))},this.exportMessage=e=>{const t=Za(this.props.filenamePrefix,e.isBinary,this.props.messages.indexOf(e));Object(Mt.f)(t,e.isBinary?"application/octet-stream":"text/plain",e.content)}}get someBinaryMessages(){return this.props.messages.some(e=>e.isBinary)}render(){const{streamId:e,streamType:t,streamLabel:n,messages:r,isPaidUser:o,editorNode:s,collapsed:a,expanded:c,onCollapseToggled:l,onExpandToggled:d}=this.props;return i.createElement(Ut.b,{collapsed:a,onCollapseToggled:l,expanded:c},i.createElement("header",null,i.createElement(Ma.a,null,d&&i.createElement(Fa.a,{expanded:c,onClick:d}),i.createElement(cn.a,{icon:["fas","download"],title:o?"Save these message as a file":"With Pro: Save these messages as a file",disabled:!o,onClick:this.exportMessages})),n&&i.createElement(Wt.a,{color:Object(q.f)("data"),title:n},n),i.createElement(Wt.a,null,r.length," message",1!==r.length?"s":""),i.createElement(Ut.c,{onCollapseToggled:l},t," messages")),i.createElement(ti,{expanded:!!c},r.map((t,n)=>this.expandedRow===n?i.createElement(Ja,{key:"expanded",message:t,streamId:e,isPaidUser:o,onExportMessage:this.exportMessage,editorNode:s}):i.createElement(za,{key:n,message:t,index:n,onClick:this.expandRow}))))}expandRow(e){this.expandedRow=e}};Xa([d.observable],ei.prototype,"expandedRow",void 0),Xa([d.computed],ei.prototype,"someBinaryMessages",null),Xa([d.action.bound],ei.prototype,"expandRow",null),ei=Xa([u.e],ei);const ti=p.j.div`
    width: calc(100% + 40px);
    margin: 0 -20px -20px -20px;

    border-top: solid 1px ${e=>e.theme.containerWatermark};
    background-color: ${e=>e.theme.mainLowlightBackground};

    display: flex;
    flex-direction: column;
    white-space: nowrap;

    position: relative;
    ${e=>e.expanded&&"\n        height: auto !important;\n        overflow-y: auto;\n    "}
`;var ni=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const ri=p.j.section`
    ${e=>e.withinGrid&&p.f`
        display: contents;
    `}
`,oi=p.j.span`
    margin-right: 10px;

    ${e=>e.withinGrid&&p.f`
        display: contents;
    `}
`,si=p.j.div`
    visibility: hidden;
    margin-top: -2px;
    margin-bottom: 6px;
    display: inline-block;

    max-height: 31px;
    overflow: hidden;
`;let ai=class extends i.Component{constructor(){super(...arguments),this.open=!1}render(){const{children:e,withinGrid:t=!1}=this.props,n=t||this.props.prefixTrigger,[r,o,...s]=i.Children.toArray(e);if(s.length)throw new Error("Collapsible section has extra children: "+s);if(!Object(Mt.e)(r))throw new Error("Collapsible section 1st child must be a summary element");const a=!!o;if(a&&!Object(Mt.e)(o))throw new Error("Collapsible section 2nd child must be a body element");const c=o,l=i.createElement(li,{open:this.open,canOpen:a,withinGrid:t,onClick:this.toggleOpen}),d=i.cloneElement(r,{open:this.open,withinGrid:t},n?i.createElement(i.Fragment,null,l,i.createElement(oi,{withinGrid:t},r.props.children)):i.createElement(i.Fragment,null,i.createElement(oi,{withinGrid:t},r.props.children),a&&l)),u=a&&this.open?i.cloneElement(c,{withinGrid:t},t?c.props.children:i.createElement(i.Fragment,null,i.createElement(si,null,d),c.props.children)):null;return i.createElement(ri,{withinGrid:t},d,u)}toggleOpen(e){e.preventDefault(),this.open=!this.open}};ni([d.observable],ai.prototype,"open",void 0),ni([d.action.bound],ai.prototype,"toggleOpen",null),ai=ni([u.e],ai);const ii=["fas","minus"],ci=["fas","plus"],li=Object(p.j)(e=>i.createElement("button",Object.assign({},s.omit(e,["open","canOpen","withinGrid"])),i.createElement($t.b,{icon:e.open?ii:ci})))`
    border: none;
    background: none;

    position: relative;
    top: -1px;

    cursor: pointer;
    user-select: none;

    outline: none;
    &:focus {
        color: ${e=>e.theme.popColor};
    }
    &:hover {
        color: ${e=>e.theme.mainColor};
    }

    padding: 5px 10px;

    ${e=>e.withinGrid?p.f`
        margin: -3px 0 -5px -10px;
        align-self: baseline;
    `:p.f`
        margin: -5px 0 -5px -10px;
        vertical-align: baseline;
    `}

    scale: 0.7;
    color: ${e=>e.theme.containerWatermark};

    ${e=>!e.canOpen&&p.f`
        visibility: hidden;
    `}
`,di=p.j.header`
    ${e=>e.withinGrid?p.f`
        display: contents;
    `:p.f`
        display: inline-block;
    `}

    margin: -6px 0 0 -20px;
    padding: 9px 0 12px 20px;

    box-sizing: border-box;

    ${e=>e.open&&!e.withinGrid&&p.f`
        z-index: 1;
        position: relative;

        background-color: ${e=>e.theme.mainBackground};

        &:before {
            content: '';
            position: absolute;
            right: -1px;
            bottom: 0;
            height: 35px;
            width: 1px;
            background-color: rgba(0,0,0,0.1);
            box-shadow: 1px 1px 5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
        }

        &:after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
            background-color: rgba(0,0,0,0.1);
            box-shadow: 1px 1px 5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
        }
    `}
`,ui=p.j.div`
    ${e=>e.withinGrid?p.f`
        grid-column: 1 / -1; /* Full width grid row */
    `:p.f`
        margin-top: -37px; /* Pull up behind the summary section */
        margin-bottom: 10px; /* Spacing below (grid uses grid-gap) */
    `}

    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha}),
        inset 0px -8px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    padding: 8px 10px 10px 10px;

    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;

    line-height: 1.3;

    position: relative;

    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
`,pi=Object(u.e)(e=>{const{closeState:t,theme:n}=e,r="aborted"!==e.closeState?Object(R.e)(e.closeState.closeCode):void 0,o=r&&[i.createElement(en.j,{key:"code-docs",content:r.summary}),i.createElement("p",{key:"docs-link"},i.createElement(Gt,{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1"},"Find out more"))];if("aborted"===t)return i.createElement(Ut.b,Object.assign({},e),i.createElement("header",null,i.createElement(Wt.a,{color:Object(q.g)("aborted",n)},"Aborted"),i.createElement(Ut.c,{onCollapseToggled:e.onCollapseToggled},"Connection closed")),i.createElement("div",null,"The connection was closed abruptly, without a clean close message."));{const{closeCode:r,closeReason:s}=t;return i.createElement(Ut.b,Object.assign({},e),i.createElement("header",null,i.createElement(Wt.a,{color:Object(q.g)(r,n)},null!=r?r:"No close code"),i.createElement(Ut.c,{onCollapseToggled:e.onCollapseToggled},"Connection closed")),i.createElement(ai,null,i.createElement(di,null,i.createElement(en.c,null,"Close code: "),r?i.createElement(en.g,null,r):i.createElement(en.a,null,"(No close code)")),o&&i.createElement(ui,null,o)),i.createElement("div",null,i.createElement(en.c,null,"Close reason: "),s?i.createElement(en.g,null,s):i.createElement(en.a,null,"(No reason provided)")))}});var hi=n(347);function mi(e){e.target.style.display="initial"}var gi=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const fi=Object(p.j)(Object(u.d)("uiStore")(e=>c.a.createElement(Wt.a,{className:e.className,color:e.uiStore.theme.popColor},"PRO")))`
    font-size: ${e=>e.theme.textSize};

    color: ${p.i};
    background-color: rgba(225,66,31,0.2);
`,bi=Object(p.j)(fi)`
    margin-right: auto;
`,yi=Object(p.j)(vn.f)`
    box-sizing: border-box;
    padding: 20px;

    margin: 0 auto;

    user-select: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-weight: bold;
    color: ${e=>e.theme.primaryInputColor};
    background-color: ${e=>e.theme.primaryInputBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha/2});

    > svg {
        margin-bottom: 5px;
    }

    &:hover {
        background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
    }

    &:active {
        background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.05) 40%, transparent);
    }
`,vi=Object(u.d)("accountStore")(Object(u.e)(e=>c.a.createElement(xi,null,e.children,c.a.createElement(yi,{onClick:()=>e.accountStore.getPro(e.source)},c.a.createElement($t.b,{icon:["far","star"],size:"2x"}),"Get HTTP Toolkit Pro")))),xi=p.j.div`
    padding: 20px 25%;
    margin: 0 -20px -20px -20px;
    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow: inset 0px 12px 8px -10px rgba(0,0,0,0.15);

    p {
        color: ${e=>e.theme.mainColor};
        line-height: 1.2;
        font-weight: bold;
        margin-bottom: 10px;
    }

    ${yi} {
        width: 100%;
    }
`,wi=p.j.div`
    filter: blur(1px);
    opacity: 0.6;

    pointer-events: none;
    user-select: none;
`,Ei=p.j.div`
    position: relative;
    min-height: 140px;
`,Ci=Object(p.j)(yi)`
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;let Ti=class extends c.a.Component{constructor(){super(...arguments),this.buttonRef=c.a.createRef()}render(){return c.a.createElement(Ei,null,c.a.createElement(Ci,{ref:this.buttonRef,onClick:()=>this.props.getPro(this.props.source)},c.a.createElement($t.b,{icon:["far","star"],size:"2x"}),"Get Pro"),c.a.createElement(wi,{inert:!0,ref:e=>e&&e.setAttribute("inert",""),onFocus:()=>this.buttonRef.current&&this.buttonRef.current.focus()},this.props.children))}};Ti=gi([u.e],Ti);const ji=Object(p.j)(e=>i.createElement("img",Object.assign({},e,{onLoad:mi,style:{display:"none"}})))`
    float: right;
    height: 26px;

    border: 4px solid #ffffff;
    border-radius: 2px;
`,Oi=p.j.section`
    display: grid;
    grid-template-columns: 20px fit-content(40%) 1fr min-content;

    grid-gap: 5px 0;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,Si=Object(p.j)(di)`
    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
    font-family: ${e=>e.theme.monoFontFamily};
    line-height: 1.1;
`,ki=p.j.span`
    margin-right: 10px;
`,Pi=p.j.span`
    font-style: italic;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    margin-right: 5px;
`,Ri=Object(p.j)(e=>i.createElement("div",{className:e.className},[e.param.required?"Required":"Optional",e.param.type,e.param.in].filter(e=>!!e).join(" ")," parameter",void 0!==e.param.defaultValue?". Defaults to "+e.param.defaultValue:"",void 0!==e.param.enum&&e.param.enum.length>0?i.createElement(i.Fragment,null,".",i.createElement("br",null),"Valid values: ",Object(k.b)(e.param.enum.map(e=>JSON.stringify(e)))):"","."))`
    font-style: italic;
`,Hi=Object(p.j)($t.b).attrs(()=>({icon:["fas","exclamation-triangle"]}))`
    color: ${e=>e.theme.warningColor};
    line-height: 1.2;

    &:not(:first-child) {
        margin-left: 9px;
    }

    &:not(:last-child) {
        margin-right: 9px;
    }
`,qi=Object(p.j)(e=>i.createElement("div",Object.assign({},e),i.createElement(Hi,null),i.createElement("span",null,e.children)))`
    color: ${e=>e.theme.popColor};

    :not(:last-child) {
        margin-bottom: 10px;
    }
`;function Ai(e){return"string"==typeof e?e:"number"==typeof e?e.toString(10):"boolean"==typeof e?e.toString():null==e?void 0:JSON.stringify(e)}const Ii=(e,t)=>[t.length&&t.map((e,t)=>i.createElement(qi,{key:e},e)),e&&i.createElement(en.i,{key:"details",content:e})].filter(e=>!!e),Di=p.j.div`
    display: grid;
    grid-template-columns: fit-content(30%) auto;
    grid-gap: 5px;
    margin-bottom: 10px;
`,$i=p.j.div`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    text-align: right;
`,Mi=p.j.pre`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    white-space: pre-wrap;
`,Fi=e=>i.createElement(Di,null,Object.entries(e.value).map(([e,t],n)=>[i.createElement($i,{key:n+"-key"},e,":"),i.createElement(Mi,{key:n+"-value"},t)])),Bi=e=>{const{api:t}=e,n=t.request.parameters.filter(e=>!!e.value||e.required||e.defaultValue),r=n.length>5?n.filter(e=>!!e.value||e.required):n,o=Ii(t.operation.description,t.operation.warnings),s=!!o.length;return i.createElement(i.Fragment,null,i.createElement(ai,null,i.createElement(di,null,i.createElement(en.c,null,"Service:")," ",t.service.name,!t.service.description&&i.createElement(Gt,{href:t.service.docsUrl})),t.service.description&&i.createElement(ui,null,i.createElement(ji,{src:t.service.logoUrl,alt:""}),i.createElement(en.i,{content:t.service.description}),i.createElement(Gt,{href:t.service.docsUrl},"Find out more"))),i.createElement(ai,null,i.createElement(di,null,i.createElement(en.c,null,"Operation:")," ",t.operation.name,!s&&i.createElement(Gt,{href:t.operation.docsUrl}),t.operation.warnings.length?i.createElement(Hi,null):null),s&&i.createElement(ui,null,o,i.createElement(Gt,{href:t.operation.docsUrl},"Find out more"))),r.length>=1&&i.createElement(i.Fragment,null,i.createElement(en.d,null,"Parameters"),i.createElement(Oi,null,r.map(e=>i.createElement(ai,{withinGrid:!0,key:e.name},i.createElement(Si,null,i.createElement(ki,null,e.name,": "),i.createElement("span",null,Ai(e.value)||i.createElement(Pi,null,e.defaultValue?Ai(e.defaultValue)+" [default]":"[not set]")),e.warnings.length?i.createElement(Hi,null):i.createElement("div",null)),i.createElement(ui,null,Ii(e.description,e.warnings),"object"===e.type&&Object.keys(e).length>1?i.createElement(Fi,{value:e.value}):null,i.createElement(Ri,{param:e})))))))},Ni=Object(u.e)(e=>{const{apiName:t,apiExchange:n}=e;return i.createElement(Ut.b,Object.assign({},e),i.createElement("header",null,i.createElement(Ut.c,{onCollapseToggled:e.onCollapseToggled},t)),i.createElement(Bi,{api:n}))}),Li=Object(u.e)(e=>{const{apiName:t}=e;return i.createElement(Ut.b,Object.assign({},e),i.createElement("header",null,i.createElement(bi,null),i.createElement(Ut.c,{onCollapseToggled:e.onCollapseToggled},t)),i.createElement(vi,{source:"api"},i.createElement("p",null,"HTTP Toolkit Pro can show you more information about this API."),i.createElement("p",null,"Instantly understand this request with inline documentation for the endpoint, parameters, and responses."),i.createElement("p",null,"Automatically validate that this request & its body match the API schema. See all the parameters that you're ",i.createElement("em",null,"not")," sending too, and their default values, and get warned about deprecated or invalid endpoints and parameters.")))}),Ui=Object(p.j)(({source:e,className:t})=>e.icon!==$t.c.Unknown?i.createElement($t.b,Object.assign({className:t,title:e.summary},e.icon)):null)`
    margin-left: 8px;
`,Wi=Object(p.j)(({request:e,className:t})=>e.httpVersion?i.createElement(Wt.a,{title:"The client sent this request using HTTP "+e.httpVersion},"HTTP/","2.0"===e.httpVersion?"2":e.httpVersion):null)``;var zi=n(664);function _i(e){const t=Object(m.format)(e,"YYYY-MM-DD [at] HH:mm:ss"),n=Object(m.distanceInWordsToNow)(e);return Object(m.isFuture)(e)?i.createElement(i.Fragment,null,"will expire ",i.createElement("span",{title:t},"in ",n)):i.createElement(i.Fragment,null,"expired ",i.createElement("span",{title:t},n," ago"))}const Vi=e=>{const t=Object(zi.parse)(e.value),n=e.requestUrl.pathname.replace(/\/[^\/]*$/,"")||"/";return i.createElement(i.Fragment,null,t.map(t=>{var r;return"none"!==(null===(r=t.sameSite)||void 0===r?void 0:r.toLowerCase())||t.secure?i.createElement(en.b,{key:t.name},i.createElement("p",null,"Set cookie '",i.createElement("code",null,t.name),"' to '",i.createElement("code",null,t.value),"'"),i.createElement("p",null,"This cookie will be sent in future",t.secure?" secure ":" secure and insecure ","requests to"," ",t.domain?i.createElement(i.Fragment,null,t.domain.replace(/^\./,"")," and subdomains"):i.createElement(i.Fragment,null,e.requestUrl.hostname,", but not its subdomains"),"/"===t.path||"/"===n?i.createElement(i.Fragment,null,"."):void 0!==t.path?i.createElement(i.Fragment,null,", for paths within '",t.path,"'."):i.createElement(i.Fragment,null,", for paths within '",n,"'.")),i.createElement("p",null,"The cookie is ",t.httpOnly?"not accessible from client-side scripts":"accessible from client-side scripts running on matching pages",void 0===t.sameSite||"lax"===t.sameSite.toLowerCase()?i.createElement(i.Fragment,null,". Matching requests triggered from other origins will ",t.httpOnly?"however":"also"," include this cookie, if they are top-level navigations (not subresources)."):"strict"===t.sameSite.toLowerCase()&&t.httpOnly?i.createElement(i.Fragment,null,", or sent in requests triggered from other origins."):"strict"!==t.sameSite.toLowerCase()||t.httpOnly?"none"===t.sameSite.toLowerCase()&&t.secure?i.createElement(i.Fragment,null,". Matching requests triggered from other origins will ",t.httpOnly?"however":"also"," include this cookie."):i.createElement(i.Fragment,null,". This cookie uses an unrecognized SameSite property, which may cause issues."):i.createElement(i.Fragment,null,", but will not be sent in requests triggered from other origins.")),i.createElement("p",null,"The cookie ",t.maxAge?i.createElement(i.Fragment,null,_i(Object(m.addSeconds)(new Date,t.maxAge)),t.expires&&" ('max-age' overrides 'expires')"):t.expires?_i(t.expires):"expires at the end of the current session",".")):i.createElement(en.b,{key:t.name},i.createElement("p",null,"This attempts to set cookie '",i.createElement("code",null,t.name),"' to '",i.createElement("code",null,t.value),"'"),i.createElement("p",null,i.createElement("strong",null,"This will fail so this cookie will not be set"),", because ",i.createElement("code",null,"SameSite=None")," can only be used for cookies with the ",i.createElement("code",null,"Secure")," flag."))}))},Gi=e=>{const{description:t}=Object(Et.c)(e.value);return t?i.createElement(en.b,null,i.createElement("p",null,t)):i.createElement("p",null,Object(R.a)("user-agent").summary)},Ji=p.j.section`
    display: grid;
    grid-template-columns: 20px fit-content(30%) 1fr;

    grid-gap: 5px 0;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,Ki=Object(p.j)(di)`
    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
    font-family: ${e=>e.theme.monoFontFamily};
    line-height: 1.1;
`,Yi=p.j.span`
    margin-right: 10px;
`,Qi=Object(p.j)(ui)`
    line-height: 1.3;
`,Xi=Object(p.j)(Gt)`
    display: block;
    margin-top: 10px;
`,Zi=Object(u.d)("accountStore")(Object(u.e)(e=>{const t=s.sortBy(e.headers,([e])=>e.toLowerCase());return 0===t.length?i.createElement(en.a,null,"(None)"):i.createElement(Ji,null,s.flatMap(t,([t,n],r)=>{const o=Object(R.a)(t),s=((e,t,n,r)=>{var o;if(e=e.toLowerCase(),r){if("set-cookie"===e)return i.createElement(Vi,{value:t,requestUrl:n});if("user-agent"===e)return i.createElement(Gi,{value:t})}const s=null===(o=Object(R.a)(e))||void 0===o?void 0:o.summary;return s&&i.createElement("p",null,s)})(t,n,e.requestUrl,e.accountStore.isPaidUser);return i.createElement(ai,{withinGrid:!0,key:`${t}-${r}`},i.createElement(Ki,null,i.createElement(Yi,null,t,": "),i.createElement("span",null,n)),s&&i.createElement(Qi,null,s,o&&i.createElement(Xi,{href:o.url},"Find out more")))}))})),ec=p.j.div`
    display: grid;
    grid-template-columns: fit-content(50%) auto;
    grid-gap: 5px;
`,tc=p.j.div`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    text-align: right;
`,nc=p.j.pre`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    white-space: pre-wrap;
`,rc=Object(p.j)(en.c)`
    margin-top: 10px;
    grid-column: 1 / span 2;
`,oc=e=>{const t=[...e.url.searchParams];let n;try{n=decodeURIComponent(e.url.pathname)}catch(t){n=e.url.pathname}return i.createElement(ec,null,i.createElement(tc,null,"Protocol:")," ",i.createElement(nc,null,e.url.protocol.slice(0,-1)),(e.url.username||e.url.password)&&i.createElement(i.Fragment,null,i.createElement(tc,null,"Username:")," ",i.createElement(nc,null,e.url.username),i.createElement(tc,null,"Password:")," ",i.createElement(nc,null,e.url.password)),i.createElement(tc,null,"Host:")," ",i.createElement(nc,null,e.url.host),i.createElement(tc,null,"Path:")," ",i.createElement(nc,null,n),t.length?i.createElement(rc,null,"Parameters"):null,t.map(([e,t],n)=>[i.createElement(tc,{key:n+"-key"},e,":"),i.createElement(nc,{key:n+"-value"},t)]))},sc=Object(p.j)(Object(u.d)("uiStore")(e=>{const{stepTypes:t}=e.ruleData,n=1!==t.length?"multi-step":Zo(t[0]);return i.createElement(Wt.b,{color:Object(q.f)("mutative"),className:e.className,disabled:"deleted"===e.ruleData.status,onClick:"deleted"!==e.ruleData.status?e.onClick:void 0,title:`This request was handled by ${Object(k.a)(n)} ${n} rule${"deleted"===e.ruleData.status?" which has since been deleted":"modified-types"===e.ruleData.status?" (which has since been modified)":""}.${"deleted"!==e.ruleData.status?"\nClick here to jump to the rule on the Mock page.":""}`},i.createElement($t.b,{icon:["fas","theater-masks"]}),Object(k.d)(n))}))`
    margin-right: auto;

    text-decoration: none;
    word-spacing: 0;

    > svg {
        margin-right: 5px;
    }
`,ac=e=>{const t=Object(R.b)(e.request.method),n=[t&&i.createElement(en.j,{key:"method-docs",content:t.summary}),t&&i.createElement("p",{key:"method-link"},i.createElement(Gt,{href:t.url},"Find out more"))].filter(e=>!!e);return i.createElement("div",null,i.createElement(ai,null,i.createElement(di,null,i.createElement(en.c,null,"Method:")," ",e.request.method),n.length?i.createElement(ui,null,n):null),i.createElement(en.d,null,"URL"),i.createElement(ai,{prefixTrigger:!0},i.createElement(di,null,i.createElement(en.f,null,e.request.parsedUrl.parseable?e.request.parsedUrl.toString():e.request.url)),i.createElement(ui,null,i.createElement(oc,{url:e.request.parsedUrl}))),i.createElement(en.d,null,"Headers"),i.createElement(Zi,{headers:e.request.rawHeaders,requestUrl:e.request.parsedUrl}))},ic=Object(u.e)(e=>{const{exchange:t,matchedRuleData:n,onRuleClicked:r}=e,{request:o}=t,s=null==n?void 0:n.stepTypes.every(e=>"passthrough"===e||"ws-passthrough"===e);return i.createElement(Ut.b,Object.assign({},e,{direction:"right"}),i.createElement("header",null,n&&!s&&i.createElement(sc,{ruleData:n,onClick:r}),i.createElement(Ui,{source:o.source}),i.createElement(Wi,{request:o}),i.createElement(Wt.a,{color:Object(q.f)(t)},t.isWebSocket()?"WebSocket ":"",o.method," ",(o.hostname||"").replace(/\./g," . ")),i.createElement(Ut.c,{onCollapseToggled:e.onCollapseToggled},"Request")),i.createElement(ac,{request:o}))});var cc=n(69);const lc=Object(u.e)(e=>{const{response:t,requestUrl:n,theme:r,apiExchange:o}=e,s=Object(cc.get)(o,"response","description"),a=Object(R.c)(t.statusCode),c=[s&&i.createElement(en.i,{key:"api-response-docs",content:s}),a&&i.createElement(en.j,{key:"status-docs",content:a.summary}),a&&i.createElement("p",{key:"status-link"},i.createElement(Gt,{href:a.url},"Find out more"))].filter(e=>!!e);return i.createElement(Ut.b,Object.assign({},e,{direction:"left"}),i.createElement("header",null,i.createElement(Wt.a,{color:Object(q.e)(t.statusCode,r)},t.statusCode),i.createElement(Ut.c,{onCollapseToggled:e.onCollapseToggled},"Response")),i.createElement("div",null,i.createElement(ai,null,i.createElement(di,null,i.createElement(en.c,null,"Status:")," ",t.statusCode," ",t.statusMessage||Object(R.d)(t.statusCode)),c.length?i.createElement(ui,null,c):null),i.createElement(en.d,null,"Headers"),i.createElement(Zi,{headers:t.rawHeaders,requestUrl:n})))}),dc=Object(p.j)(en.e)`
    margin-top: 10px;
`,uc=Object(u.d)("uiStore")(Object(u.e)(e=>i.createElement(Ut.b,Object.assign({},e.cardProps,{direction:"left"}),i.createElement("header",null,i.createElement(Wt.a,{color:Object(q.e)("aborted",e.uiStore.theme)},"Aborted"),i.createElement(Ut.c,{onCollapseToggled:e.cardProps.onCollapseToggled},"Response")),i.createElement("div",null,"The connection failed before a response could be completed",e.exchange.abortMessage?i.createElement(i.Fragment,null," with error:",i.createElement(dc,null,e.exchange.abortMessage)):"."))));var pc=n(16);const hc=["GET","HEAD","POST"],mc=[200,203,204,206,300,301,404,405,410,414,501],gc=[300,301,308,410],fc=["GET","HEAD","POST"],bc=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"];function yc(e){return e.toLowerCase().replace(/(\b\w)/g,e=>e.toUpperCase())}const vc=Object(m.parse)(0);function xc(e){return Object(m.distanceInWordsStrict)(vc,Object(m.parse)(1e3*e))}function wc(e){return Object(pc.c)(e.headers["cache-control"]).reduce((e,t)=>{const[n,r]=t.split("=");return e[n.trim()]=void 0===r||parseInt(r),e},{})}const Ec="May be cached in both private and shared caches",Cc="May only be cached in private caches";function Tc(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if("OPTIONS"===t.method&&t.headers.origin)return{summary:Cc,explanation:Yn`
                OPTIONS responses are not cached through the normal HTTP response caching mechanisms.
                Only the CORS metadata for the resource is cached, and only by HTTP clients that
                implement CORS checks, such as browsers, not by intermediate caches.
            `};const r=wc(n);return void 0!==r.private?{summary:Cc,explanation:Yn`
                This response may only be cached by private caches, such as your browser cache,
                because it includes an explicit \`private\` Cache-Control directive.
            `}:void 0!==r.public?{summary:Ec,explanation:Yn`
                This response may be cached by both private HTTP client caches and shared caches
                such as CDNs and proxies, because it includes an explicit \`public\` Cache-Control
                directive.
            `}:void 0!==t.headers.authorization&&void 0===r["s-maxage"]&&void 0===r["must-revalidate"]&&void 0===r.public?{summary:Cc,explanation:Yn`
                This response may only be cached by private caches, such as your browser cache,
                because it includes an Authorization header, and doesn't include the explicit
                directives that would allow it to be stored by shared caches.

                Shared caches, such as CDNs and proxies, would only be allowed to store this
                response if it contained \`s-maxage\`, \`must-revalidate\` or \`public\`
                Cache-Control directives.
            `}:void 0===r["s-maxage"]||void 0!==r["max-age"]||void 0!==n.headers.expires||void 0!==r.public||mc.includes(n.statusCode)?{summary:Ec,explanation:Yn`
            This response may be cached by both private client caches & shared
            CDN or proxy caches, because it is cacheable and does not include
            either a \`private\` Cache-Control directive or an Authorization header.
        `}:{summary:"May only be cached in shared caches",explanation:Yn`
                This response may only be cached by shared caches, such as proxies & CDNs,
                not by private client caches, because it includes an \`s-maxage\` Cache-Control
                directive but is otherwise not cacheable by default, and does not include
                any other explicit caching directives.
            `}}function jc(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if("OPTIONS"===t.method&&t.headers.origin){const e=s.union(fc,Object(pc.c)(n.headers["access-control-allow-methods"]).map(e=>e.toUpperCase())),r=s.union(bc,Object(pc.c)(n.headers["access-control-allow-headers"]).map(yc)),o="true"===n.headers["Access-Control-Allow-Credentials"];return{summary:"Will match corresponding future CORS requests for this URL",explanation:Yn`
                The CORS configuration returned here may be used to avoid a preflight
                request for future CORS requests, when:

                * The CORS request would be sent to the same URL
                * The origin is \`${t.headers.origin}\`
                ${o?"":"* No credentials are being sent\n"}* The request method would be ${Object(k.b)(e,", "," or ")}
                * There are no extra request headers other than ${Object(k.b)(r)}
            `}}const r=Object(pc.c)(n.headers.vary).map(yc),o=r.length>0,a=o?` that have the same ${Object(k.b)(r)} header${r.length>1?"s":""}`:"",i=o?Yn`
        , as long as those requests have ${Object(k.b)(r.map(e=>{const n=t.headers[e.toLowerCase()];return void 0===n?`no ${e} header`:`a ${e} header set to \`${n}\``}))}.

        ${r.length>1?"These headers are":"This header is"}
        required because ${r.length>1?"they're":"it's"} listed in
        the Vary header of the response.
    `:Yn`
        , regardless of header values or other factors.

        If this response is only valid for certain header configurations (e.g.
        Accept-Encoding or Accept-Language headers), it should include a Vary header.
    `;return"POST"===t.method?{summary:"Will match future GET & HEAD requests to this URL"+a,explanation:Yn`
                The response content & headers returned here may be used for future safe requests
                for the resource updated by this POST${i}
            `}:{summary:"Will match future GET & HEAD requests to this URL"+a,explanation:Yn`
            The response content & headers returned here may be used for future safe requests
            for the same resource${i}
        `}}function Oc(e){var t;const{request:n,response:r}=e;if("object"!=typeof r)return;const o=wc(r);if("OPTIONS"===n.method){const e=Object(pc.h)(r.headers["access-control-max-age"]);if(e){const t=parseInt(e,10);return{summary:"Expires after "+xc(t),explanation:Yn`
                    This CORS response includes an Access-Control-Max-Age header explicitly
                    set to ${t} seconds, which defines the valid lifetime for the
                    cached response. Once this expires it will immediately cease to be used.
                `}}return{summary:"Expires unpredictably, around 5 seconds",explanation:Yn`
                This CORS response does not include an Access-Control-Max-Age header, so
                does not explicitly specify when it should expire. That means the
                exact expiry is left up to the client implementation. This may be a
                small number of seconds, or it may be considered expired immediately.
            `}}if(o["no-cache"])return{summary:"Must be revalidated every time it's used",explanation:Yn`
                This response includes an explicit \`no-cache\` directive. This means that
                before the cached content can be used, the matching requests must always be
                forwarded to the origin server, and the response content must be revalidated.

                This requires a request to the origin server for every client request, but
                does still offer performance benefits compared to not caching at all,
                because conditional requests can be used to avoid redownloading the
                full response from scratch if it hasn't changed.
            `};const s=Object(pc.h)(r.headers.date),a=Object(pc.h)(r.headers.expires),i=o["max-age"],c=void 0!==o["s-maxage"]?o["s-maxage"]:i,l=void 0!==i||void 0!==a,d=void 0!==i?i:void 0!==a?Object(m.differenceInSeconds)(a,s?Object(m.parse)(s):Object(m.parse)(null!==(t=e.timingEvents.startTime)&&void 0!==t?t:Date.now())):void 0,u=void 0!==d&&d<=0;if(!l&&gc.includes(r.statusCode))return{summary:"Never expires"+(c!==i?" from private caches, expires from shared caches after "+xc(c):""),explanation:Yn`
                This ${r.statusCode} response is intended to describe a permanent state,
                and has no explicitly defined expiry time, so by default most clients will
                cache it forever.

                ${c!==i?Yn`
                    The response does include a \`s-maxage\` directive however, set to ${c} seconds, which overrides this for shared caches such as CDNs and
                    proxies. In that specific case, the response will be considered stale
                    after ${xc(c)}. As there is no \`proxy-revalidate\`
                    directive, it may still be used whilst stale if necessary or explicitly
                    allowed by a client.

                    If the response included a specific expiry time for private caches, e.g.
                    with a \`max-age\` Cache-Control directive, that typically would limit the
                    lifetime of this response in those caches too. In general though in that
                    case it would be better to use a more accurate status code.
                `:Yn`
                    If this response did include a specific expiry time, e.g. with a max-age
                    Cache-Control directive, that would typically override this. In general
                    though in that case it would be better to use a more accurate status code.
                `}
            `};const p=c!==i?Yn`
        .

        This response also includes a \`s-maxage\` directive, set to ${xc(c)} seconds which overrides this expiry for shared caches such as CDNs or proxies.
        This means in that case, the response will become stale in ${xc(c)}
    `:"",h=l?u?Yn`
            This response expires immediately because it has ${i<=0?Yn`
                    a \`max-age\` directive set to ${i} seconds
                `:s?Yn`
                    an Expires header set to ${a}, which is
                    not after its Date header value (${s})
                `:Yn`
                    an Expires header set to ${a}, which is
                    before the response was received
                `}${p}
        `:void 0!==i?Yn`
            This response expires after ${i} seconds (${xc(i)}),
            as specified by its \`max-age\` directive${p}
        `:Yn`
            This response expires at ${a} (after ${xc(d)}),
            as specified by its Expires header${p}
        `:Yn`
            ${c===i?Yn`
                This response does not explicitly declare its expiry time. Caches
            `:Yn`
                This response only declares an explicit expiry time for shared caches, such
                as proxies or CDNs, not for private caches. Content in shared caches will
                expire after ${xc(c)}, as declared by the \`s-maxage\`
                Cache-Control directive, whilst content in private caches may expire
                unpredictably.

                Private caches
            `} may
            use a heuristic to decide when this response is considered stale, typically
            some percentage of the time since the content was last modified, often using
            the Last-Modified header value${r.headers["last-modified"]?` (${r.headers["last-modified"]})`:", although that is not explicitly defined in this response either"}
        `;if(u&&o["must-revalidate"])return{summary:"Must be revalidated every time it's used"+(c!==i?` (or after ${xc(c)} for shared caches)`:""),explanation:Yn`
                ${h}.

                In addition, it includes a \`must-revalidate\` directive.

                Together, these mean that before the cached content can be used${c!==i&&c>0?" by private caches":""} the matching requests must always be forwarded to the origin server,
                and the response content must be revalidated.

                This requires a request to the origin server for every client request, but
                does still offer performance benefits compared to not caching at all,
                because conditional requests can be used to avoid redownloading the
                full response from scratch if it hasn't changed.
            `};const g=void 0!==o["stale-while-revalidate"]&&void 0!==o["stale-if-error"]?"can be served stale temporarily whilst revalidating or if receiving errors":void 0!==o["stale-while-revalidate"]?"can be served stale whilst revalidating for "+xc(o["stale-while-revalidate"]):void 0!==o["stale-if-error"]?"can be served stale if errors are received for "+xc(o["stale-if-error"]):"",f=o["must-revalidate"]?", then must always be revalidated":o["proxy-revalidate"]&&g?`, then ${g} (but must be revalidated by shared caches)`:o["proxy-revalidate"]?", then must always be revalidated by shared caches, but may be used privately":g?", then "+g:"",b=void 0!==o["stale-while-revalidate"]&&void 0!==o["stale-if-error"]?Yn`
            The response includes both \`stale-while-revalidate\` and \`stale-if-error\`
            directives, set to ${o["stale-while-revalidate"]} seconds and ${o["stale-if-error"]} seconds respectively.

            \`stale-while-revalidate\` means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be served
            in the meantime, for ${xc(o["stale-while-revalidate"])} extra.

            \`stale-if-error\` means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be served
            in the meantime if any errors are encountered, for ${xc(o["stale-if-error"])} after the response expires.
        `:void 0!==o["stale-while-revalidate"]?Yn`
            The response includes a \`stale-while-revalidate\` directive set to ${o["stale-while-revalidate"]} seconds. This means that after the response has expired new requests
            should trigger revalidation, but the stale content can still be served in
            the meantime for ${xc(o["stale-while-revalidate"])} extra.
        `:void 0!==o["stale-if-error"]?Yn`
            The response includes a \`stale-if-error\` directive set to ${o["stale-if-error"]} seconds. This means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be
            served in the meantime if any errors are encountered, for ${xc(o["stale-if-error"])} after the response expires.
        `:"",y=o["must-revalidate"]?Yn`
            This response includes a \`must-revalidate\` directive, which means caches must
            ensure expired content is _always_ forwarded to & revalidated by the origin server,
            and expired content must never be used, even if the server is unavailable, if
            requested explicitly, or if serving stale content has been enabled elsewhere.
        `:o["proxy-revalidate"]?Yn`
            This response includes a \`proxy-revalidate\` directive, which means shared
            caches (e.g. CDNs or proxies) must ensure expired content is always forwarded
            to & revalidated by the origin server, and expired content must never be used,
            even if the server is unavailable, if requested explicitly, or if serving
            stale content has been enabled elsewhere.

            ${b||Yn`
                It does not include a \`must-revalidate\` directive, so private client caches
                are still allowed to use stale responses if necessary.
            `}
        `:Yn`
            ${b}

            As the response does not include a \`must-revalidate\` directive,
            expired responses may be used if explicitly requested or necessary, for
            example if the origin server is not responding.
        `;if(u)return{summary:`Expires immediately${c!==i?` (or after ${xc(c)} for shared caches)`:""}${f}`,explanation:Yn`
                ${h}.

                ${y}
            `};const v=!o.immutable&&d&&d>=31536e3;return{summary:void 0!==d?`Expires after ${xc(d)}${c!==i?` (${xc(c)} for shared caches)`:""}${f}`:`Expires unpredictably${c!==i?` for private caches, or after ${xc(c)} for shared caches`:""}${f}`,type:v?"suggestion":void 0,explanation:Yn`
            ${h}.

            ${y}

            ${v?Yn`
                :suggestion: This expiry time is more than a year away, which suggests that the
                content never changes. This could be more effective with the \`immutable\`
                Cache-Control directive, which completely avoids revalidation
                requests for this content in extra cases, such as explicit page refreshes,
                saving validation time.
            `:""}
        `}}function Sc(e,t){return parseFloat(e.toFixed(t))}const kc=Object(u.e)(e=>{var t;let n;if("durationMs"in e)n=e.durationMs;else{const r=e.timingEvents,o=null!==(t=r.responseSentTimestamp)&&void 0!==t?t:r.abortedTimestamp;n=void 0!==o&&void 0!==r.startTimestamp?o-r.startTimestamp:void 0}return void 0===n?null:i.createElement(Wt.a,{className:e.className},n<100?Sc(n,2)+"ms":n<1e3?Sc(n,1)+"ms":n<1e4?Sc(n/1e3,3)+" seconds":Sc(n/1e3,1)+" seconds")}),Pc=Object(u.d)("accountStore")(Object(u.e)(e=>{const{exchange:t,accountStore:n}=e,{isPaidUser:r}=n;return i.createElement(Ut.b,Object.assign({},e),i.createElement("header",null,r?i.createElement(kc,{timingEvents:t.timingEvents}):i.createElement(bi,null),i.createElement(Ut.c,{onCollapseToggled:e.onCollapseToggled},"Performance")),r?i.createElement("div",null,i.createElement(Fc,{exchange:t}),i.createElement(Bc,{exchange:t})):i.createElement(vi,{source:"performance"},i.createElement("p",null,"See timing info, dive into the real and potential compression of every exchange, and understand how & where this response could be cached, for a full performance overview.")))}));function Rc(e){return"br"===e?"brotli":"zstd"===e?"zstandard":"gzip"===e||"x-gzip"===e?"gzip":"deflate"===e||"x-deflate"===e?"zlib":s.upperFirst(e)}const Hc=Object(u.e)(e=>{const{encodings:t,encodedBodyLength:n,decodedBodyLength:r}=e,o=r?Math.round(100*(1-n/r)):void 0;return i.createElement(i.Fragment,null,t.length?i.createElement(i.Fragment,null,"compressed with ",i.createElement("strong",null,Object(k.b)(t,", "," and then ")),", making it ",void 0!==o&&r?i.createElement(i.Fragment,null,i.createElement("strong",null,o>=0?o+"% smaller":-o+"% bigger")," (",Object(H.a)(r)," to ",Object(H.a)(n),")"):i.createElement($t.b,{icon:["fas","spinner"],spin:!0})):i.createElement("strong",null,"not compressed"))}),qc=p.j.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-right: 10px;
`,Ac=Object(p.j)(Wt.a)`
    flex-shrink: 0;
`,Ic=Object(u.e)(e=>{const{encodings:t,encodedBodyLength:n,decodedBodyLength:r,encodingTestResults:o}=e;if(!s.isEmpty(o)&&r){const e=Math.round(100*(1-n/r));return i.createElement(qc,null,s(o).omitBy((e,n)=>1===t.length&&n===t[0]).map((t,n)=>{const o=Math.round(100*(1-t/r));return i.createElement(Ac,{key:n,title:`${Object(H.a)(r)} would compress to ${Object(H.a)(t)} using ${n}`,color:o>e&&o>0?"#4caf7d":"#888"},s.upperFirst(n),": ",o,"%")}).valueOf())}return i.createElement($t.b,{icon:["fas","spinner"],spin:!0})}),Dc=p.j.div`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`,$c=p.j.p`
    margin-bottom: 10px;
    line-height: 1.3;

    &:last-child {
        margin-bottom: 0;
    }
`,Mc=Object(p.j)($c)`
    font-style: italic;
`,Fc=Object(u.e)(e=>{const t=Object(pc.c)(e.exchange.request.headers["accept-encoding"]).map(Rc);return i.createElement(i.Fragment,null,["request","response"].map(n=>{const r=e.exchange[n],o=function(e){return e&&"aborted"!==e?Object(pc.c)(e.headers["content-encoding"]).filter(e=>!!e&&"identity"!==e).map(Rc):[]}(r);if("object"!=typeof r||!r.body.encoded.byteLength)return null;const a=r.body.encoded,c=r.body.decoded,l=c?c.byteLength:0,d=a.byteLength,u=s.mapKeys(Object(H.b)(r),(e,t)=>Rc(t));let p=s.minBy(Object.keys(u),e=>u[e]);const h=l&&p&&!(1===o.length&&p===o[0])&&u[p]<Math.min(d,l);return i.createElement(i.Fragment,{key:n},i.createElement(en.d,null,s.upperFirst(n)," Compression"),i.createElement($c,null,"The ",n," body was ",i.createElement(Hc,{encodings:o,encodedBodyLength:d,decodedBodyLength:Object(cc.get)(c,"byteLength")}),"."),i.createElement(Dc,null,i.createElement(Ic,{encodings:o,encodedBodyLength:d,decodedBodyLength:Object(cc.get)(c,"byteLength"),encodingTestResults:u}),i.createElement(Mc,null,!!h&&i.createElement(i.Fragment,null,i.createElement($t.d,null),"This would be ",Math.round(100*(1-u[p]/d)),"% smaller ",l!==d&&`(${Math.round(100*(1-u[p]/l))}% total compression)`," with ",p,"response"===n&&t&&!s.includes(t,p)&&" (not supported by this client)","."),!!l&&!h&&l<d&&i.createElement(i.Fragment,null,i.createElement($t.e,null),"This ",n," would be smaller without compression."))))}))}),Bc=Object(u.e)(e=>{if("object"!=typeof e.exchange.response)return null;const t=function(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if(!hc.includes(t.method)){if("OPTIONS"===t.method&&t.headers.origin){const e=Object(pc.h)(n.headers["access-control-max-age"]),t=e?parseInt(e,10):void 0;return void 0!==t&&t>=1?{cacheable:!0,summary:"Cacheable",explanation:Yn`
                        OPTIONS preflight requests are not normally cacheable, and don't observe
                        standard Cache-Control mechanisms, but the CORS result itself will be
                        cached if a Access-Control-Max-Age header is provided, as here.

                        This only affects CORS behaviour for cross-origin requests, and should be
                        ignored (so not cached at all) by all other clients and proxies.
                    `}:void 0!==t&&t<=0?{cacheable:!1,summary:"Not cacheable",explanation:Yn`
                        OPTIONS preflight requests don't observe standard Cache-Control
                        mechanisms, but the CORS result itself can be cached if a
                        Access-Control-Max-Age header is provided.

                        In this case that header is set to ${e}, explicitly
                        requesting that this result should not be cached, and that clients
                        should not reuse this CORS response in future.
                    `}:{cacheable:!0,summary:"Very briefly cacheable",explanation:Yn`
                    OPTIONS preflight requests are not cacheable, unless an Access-Control-Max-Age
                    header is provided. Many clients will very briefly cache the CORS response
                    though, for example Chrome will cache this for 5 seconds.
                `}}return{cacheable:!1,summary:"Not cacheable",explanation:t.method+" requests are never cacheable."}}const r=wc(n),o=n.headers.etag||n.headers["last-modified"],s=o||!n.body.encoded.byteLength||r.immutable?"":Yn`
            :suggestion: This response doesn't however include any validation headers. That
            means that once it expires, the content must be requested again from scratch. If
            a Last-Modified or ETag header were included then these could be used to make
            conditional HTTP requests and revalidate cached content without re-requesting
            it, saving time and bandwidth.
        `;if(r["no-store"])return{cacheable:!1,summary:"Not cacheable",explanation:Yn`
                This response includes a \`no-store\` directive in its Cache-Control
                header. This explicitly tells all caches that this response should
                never be cached. It should never be persistently stored, should
                be removed from any volatile/temporary storage as soon as possible,
                and should be requested fresh from the network in future.
            `};if(Object(pc.c)(n.headers.pragma).includes("no-store"))return{cacheable:!1,summary:"Not cacheable",type:"suggestion",explanation:Yn`
                This response includes a \`no-store\` directive in its Pragma
                header. This explicitly tells all caches that this response should
                never be cached. It should never be persistently stored, should
                be removed from any volatile/temporary storage as soon as possible,
                and should be requested fresh from the network in future.

                :suggestion: This Pragma header is commonly supported, but officially
                deprecated. It's typically better to use \`Cache-Control: no-store\` instead.
            `};if(Object(pc.c)(n.headers.vary).includes("*"))return{cacheable:!1,summary:"Not cacheable",explanation:Yn`
                This response includes a \`*\` value in its Vary header. This tells caches
                that the response content may vary unpredictably, possibly including factors
                outside the request's content (e.g. the client's network address),
                and so must never be cached.
            `};if("POST"===t.method){const e=Yn`
            POST responses are not typically cacheable, but can be used in some
            specific circumstances to prepopulate GET & HEAD caches for the same URI.
            This is allowed by the spec, but not supported by many clients.

            A POST response may be cached and used by for future GET/HEAD requests only if:

            * Explicit freshness information is included (e.g. a \`max-age\` Cache-Control
                directive), and
            * a Content-Location header is included, set to the same
                URI as this request
        `,o=n.headers["content-location"]?new URL(Object(pc.h)(n.headers["content-location"]),t.url):void 0,a=!!r["max-age"]||void 0!==n.headers.expires,i=o&&o.toString().split("#")[0]===t.parsedUrl.toString().split("#")[0];return a&&i?{cacheable:!0,summary:"May be cacheable for future GET/HEAD requests",type:s?"suggestion":void 0,explanation:[e,"This response fulfills those conditions, so may be cacheable by some clients.",s].join("\n\n")}:{cacheable:!1,summary:"Not cacheable",explanation:e+"\n\nThis response does not fulfill those conditions, so is not cacheable by anybody."}}if(void 0!==r["max-age"]){let e;const t=n.headers.date?Object(m.parse)(Object(pc.h)(n.headers.date)):void 0;return t?n.headers.expires&&Math.abs(Object(m.differenceInSeconds)(Object(m.parse)(Object(pc.h)(n.headers.expires)),Object(m.addSeconds)(t,r["max-age"])))>60&&(e=Yn`
                :warning: This response also includes an Expires header, which appears to disagree
                with the expiry time calculated from the \`max-age\` directive. The Cache-Control
                headers take precedence, so this will only be used by clients that don't
                support that, but this could cause unpredictable behaviour. It's typically
                better to ensure these values agree on a single expiry time.
            `):e=Yn`
                :warning: However, this response does not include a Date header. That value
                would be used in combination with the \`max-age\` value to calculate
                the exact time to expire this content.

                Clients may infer their own expiry start time, potentially using the time they
                received this response, but it's strongly recommended to explicitly specify
                one in the response instead, to ensure this content expires reliably and
                predictably.
            `,{cacheable:!0,summary:"Cacheable",type:e?"warning":s?"suggestion":void 0,explanation:Yn`
                This response is cacheable because it specifies an explicit expiry time,
                using a \`max-age\` directive in its Cache-Control header.
                ${e?"\n"+e:s?"\n"+s:""}
            `}}if(void 0!==Object(pc.h)(n.headers.expires))return{cacheable:!0,summary:"Cacheable",type:"suggestion",explanation:Yn`
                This response is cacheable because it specifies an explicit expiry time,
                using an Expires header.

                :suggestion: The Expires header is commonly supported, but officially deprecated.
                It's typically better to use \`Cache-Control: max-age=<seconds>\` instead,
                or in addition.
            `};const a=mc.includes(n.statusCode);if(a||r.public){if(gc.includes(n.statusCode))return{cacheable:!0,summary:"Cacheable",explanation:Yn`
                    ${n.statusCode} responses are cacheable by default. The lifetime of the
                    cached response isn't strictly specified, but since this status code is
                    intended to indicate a permanent change the overwhelming majority of clients
                    will cache it forever.
                `};const e=a?n.statusCode+" responses are cacheable by default":"This response includes a `public` Cache-Control directive, explicitly marking it cacheable";return o?r["no-cache"]?{cacheable:!0,summary:"Cacheable",explanation:Yn`
                    ${e}.

                    The response does not include any explicit expiry information,
                    but does include a \`no-cache\` directive, meaning the cached content will
                    be revalidated with the origin server on every request, making
                    expiry irrelevant.
                `}:{cacheable:!0,summary:"Probably cacheable",type:"warning",explanation:Yn`
                    ${e}. However this response does not explicitly
                    specify when it expires (e.g. with a \`max-age\` Cache-Control
                    directive), so its expiry behaviour is not well defined. Caches
                    may use a heuristic to decide when this response is no longer
                    considered fresh, and some clients may refuse to cache the response
                    entirely.

                    :warning: It's typically better to be explicit about how responses should
                    be cached and expired, rather than depending on this unpredictable behaviour.

                    If an explicit expiry time was set (e.g. using a \`max-age\` Cache-Control
                    directive), this would take precedence over any heuristics, and provide
                    reliable cache expiry. Alternatively this content would be reliably
                    excluded from caching if a \`no-store\` Cache-Control directive was present.
                `}:{cacheable:!1,summary:"Typically not cacheable",type:"warning",explanation:Yn`
                    ${e}. However most caches will not store a response
                    like this, which has no explicit expiry time and no way to revalidate
                    the content in future.

                    :warning: It's typically better to be explicit about if and how responses
                    should be cached, rather than depending on the unpredictable behaviour this
                    can cause.

                    This request would be reliably cached if an explicit expiry was set (e.g.
                    with a \`max-age\` Cache-Control directive). Alternatively this would be
                    reliably excluded from caching if a \`no-store\` Cache-Control directive
                    was present.
                `}}return void 0!==r["s-maxage"]?{cacheable:!0,summary:"Not cacheable by private (HTTP client) caches",explanation:Yn`
                This response is cacheable because it specifies an explicit expiry time,
                using an \`s-maxage\` Cache-Control directive. This only applies to shared
                caches (e.g. proxies and CDNs), and this response would otherwise not be
                cacheable, so it won't be cached by any HTTP user agents (e.g. browsers).
            `}:{cacheable:!1,summary:"Not cacheable",explanation:Yn`
            ${n.statusCode} responses are not cacheable by default.
            This could become cacheable if explicit caching headers were added,
            such as a \`max-age\` Cache-Control directive.
        `}}(e.exchange);if(!t)return null;const n=t.cacheable?[t,jc(e.exchange),Tc(e.exchange),Oc(e.exchange)]:[t];return i.createElement(i.Fragment,null,i.createElement(en.d,null,"Caching"),n.map((e,t)=>i.createElement(ai,{prefixTrigger:!0,key:t},i.createElement(di,null,e.summary," ","warning"===e.type&&i.createElement($t.e,null),"suggestion"===e.type&&i.createElement($t.d,null)),i.createElement(ui,null,i.createElement(en.j,{content:e.explanation})))))});var Nc=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Lc=p.j.div`
    p {
        margin-bottom: 10px;
    }
`,Uc=p.j.div`
    display: flex;
    align-items: center;

    gap: 10px;
    margin-bottom: 10px;
`,Wc=p.j.div`
    margin: 0 -20px -20px -20px;
    border-top: solid 1px ${e=>e.theme.containerBorder};
    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};
`,zc={readOnly:!0,hover:{enabled:!1}},_c=Object(u.e)(e=>{const{target:t,client:n,link:r,description:s}=e.exportOption;let a;try{a=Ta(e.exchange,e.exportOption)}catch(e){console.log(`Failed to export request for ${t}--${n}`),Object(o.c)(e),a=Qn.a`
            Could not generate a snippet for this request

            Is this unexpected? Please file a bug at github.com/httptoolkit/httptoolkit.
        `}return c.a.createElement(c.a.Fragment,null,c.a.createElement(Lc,null,c.a.createElement("p",null,c.a.createElement("strong",null,Pa(e.exportOption)),": ",s),c.a.createElement(Uc,null,c.a.createElement(Gt,{href:r},"Find out more"),c.a.createElement(pn,{content:a}," ","Copy snippet"))),c.a.createElement(Wc,null,c.a.createElement(zo,{contentId:null,value:a,language:{javascript:"javascript",node:"javascript",shell:"shell"}[t]||"text",options:zc})))}),Vc=Object(p.j)(Object(u.e)(e=>c.a.createElement(Wt.b,{className:e.className,onClick:()=>Ca(e.exchange),disabled:!e.exchange.response||"aborted"===e.exchange.response},c.a.createElement($t.b,{icon:["fas","download"]})," Save as HAR")))`
    margin-right: auto;
`;let Gc=class extends c.a.Component{render(){const{exchange:e,accountStore:t}=this.props,{isPaidUser:n}=t;return c.a.createElement(Ut.b,Object.assign({},this.props),c.a.createElement("header",null,n?c.a.createElement(Vc,{exchange:e}):c.a.createElement(bi,null),c.a.createElement(Wt.c,{onChange:this.setSnippetOption,value:this.snippetOption,optGroups:Oa,keyFormatter:Sa,nameFormatter:Pa}),c.a.createElement(Ut.c,{onCollapseToggled:this.props.onCollapseToggled},"Export")),n?c.a.createElement("div",null,c.a.createElement(_c,{exchange:e,exportOption:this.snippetOption})):c.a.createElement(vi,{source:"export"},c.a.createElement("p",null,"Instantly export requests as code, for languages and tools including cURL, wget, JS (XHR, Node HTTP, Request, ...), Python (native or Requests), Ruby, Java (OkHttp or Unirest), Go, PHP, Swift, HTTPie, and a whole lot more."),c.a.createElement("p",null,"Want to save the exchange itself? Export one or all requests as HAR (the"," ",c.a.createElement("a",{href:"https://en.wikipedia.org/wiki/.har"},"HTTP Archive Format"),"), to import and examine elsewhere, share with your team, or store for future reference.")))}get snippetOption(){let e=this.props.uiStore.exportSnippetFormat||"shell~~curl";return ka(e)}setSnippetOption(e){this.props.uiStore.exportSnippetFormat=e}};Nc([d.computed],Gc.prototype,"snippetOption",null),Nc([d.action.bound],Gc.prototype,"setSnippetOption",null),Gc=Nc([Object(u.d)("accountStore"),Object(u.d)("uiStore"),u.e],Gc);var Jc=n(117);const Kc=Object(p.j)(Ut.e)`
    position: sticky;
    top: -10px;
    z-index: 2;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    flex-shrink: 0;
`,Yc=p.f`
    padding: 10px 15px;
    font-weight: bold;
    font-size: ${e=>e.theme.textSize};

    margin: 10px 0 0 10px;
    align-self: stretch;
`,Qc=p.j.p`
    width: 100%;
    margin-bottom: 10px;
    line-height: 1.3;

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Xc=Object(p.j)(vn.a)`${Yc}`,Zc=Object(p.j)(vn.c)`${Yc}`;function el(e){return t=>e.includes(t)}const tl=el(["invalid-http-version","invalid-method","client-unparseable","client-unparseable-url","header-overflow","invalid-headers"]),nl=el(["client-unparseable","client-unparseable-url","invalid-headers"]),rl=el(["untrusted","expired","not-yet-valid","wrong-host","tls-error","host-not-found","host-unreachable","dns-error","connection-refused"]),ol=el(["server-unparseable","connection-reset"]),sl=el(["client-timeout","server-timeout"]),al=el(["untrusted","expired","not-yet-valid","wrong-host","tls-error"]),il=el(["host-not-found","host-unreachable","dns-error","connection-refused","connection-reset","server-timeout"]),cl=e=>{const t="fulfilled"===g.C.state&&Jc.valid(g.C.value)&&Object(g.F)(g.C.value,g.f);return i.createElement(Kc,null,i.createElement(Qc,null,i.createElement($t.e,null)," ",tl(e.type)?i.createElement("strong",null,"This request could not be handled"):rl(e.type)?i.createElement("strong",null,"This request was not forwarded successfully"):i.createElement("strong",null,"This exchange was not completed successfully")),i.createElement(Qc,null,tl(e.type)?i.createElement(i.Fragment,null,"The client's request ","invalid-method"===e.type?"used an unsupported HTTP method":"invalid-http-version"===e.type?"used an unsupported HTTP version":"invalid-headers"===e.type?"included an invalid or unparseable header":"client-unparseable-url"===e.type?"included an unparseable URL":"header-overflow"===e.type?"headers were too large to be processed":"client-unparseable"===e.type?"could not be parsed":Object(S.d)(e.type),", so HTTP Toolkit did not handle this request."):rl(e.type)?i.createElement(i.Fragment,null,"The upstream server ","wrong-host"===e.type?"responded with an HTTPS certificate for the wrong hostname":"expired"===e.type?"has an expired HTTPS certificate":"not-yet-valid"===e.type?"has an HTTPS certificate with a start date in the future":"untrusted"===e.type?"has an untrusted HTTPS certificate":"tls-error"===e.type?"failed to complete a TLS handshake":"host-unreachable"===e.type?"was not reachable on your network connection":"host-not-found"===e.type||"dns-error"===e.type?"hostname could be not found":"connection-refused"===e.type?"refused the connection":Object(S.d)(e.type),", so HTTP Toolkit did not forward the request."):sl(e.type)?i.createElement(i.Fragment,null,"The request timed out ","client-timeout"===e.type?"waiting for the client to send the complete request":"server-timeout"===e.type?"waiting for a response from the server":Object(S.d)(e.type)):"client-abort"===e.type?i.createElement(i.Fragment,null,"The client unexpectedly disconnected during the request, so the response could not be completed."):ol(e.type)?i.createElement(i.Fragment,null,"The upstream request failed because ","connection-reset"===e.type?"the connection to the server was reset":"server-unparseable"===e.type?"the response from the server was unparseable":Object(S.d)(e.type),", so HTTP Toolkit could not return a response to the client."):"unknown"===e.type?i.createElement(i.Fragment,null,"The request failed because of an unknown error, so HTTP Toolkit could not return a response."):Object(S.d)(e.type)),"tls-error"===e.type?i.createElement(i.Fragment,null,i.createElement(Qc,null,"This could be caused by the server not supporting modern cipher standards or TLS versions, requiring a client certificate that hasn't been provided, or other TLS configuration issues."),i.createElement(Qc,null,e.isPaidUser?i.createElement(i.Fragment,null,"From the Settings page you can configure client certificates, or whitelist this host to relax HTTPS requirements and allow self-signed certificates, which may resolve some TLS issues."):i.createElement(i.Fragment,null,"Pro users can relax HTTPS requirements for configured hosts to accept older TLS configurations and self-signed/invalid certificates, and configure per-host client certificates for authentication."))):"host-not-found"===e.type?i.createElement(i.Fragment,null,i.createElement(Qc,null,"This typically means the host doesn't exist, although it could be an issue with your DNS or network configuration."),i.createElement(Qc,null,"You can define mock responses for requests like this from the Mock page, to return fake data even for servers and hostnames that don't exist.")):"host-unreachable"===e.type?i.createElement(i.Fragment,null,i.createElement(Qc,null,"This is typically an issue with your network connection or the host's DNS records."),i.createElement(Qc,null,"You can define mock responses for requests like this from the Mock page, to return fake data even for servers and hostnames that aren't accessible.")):"dns-error"===e.type?i.createElement(i.Fragment,null,i.createElement(Qc,null,"The DNS server hit an unknown error looking up this hostname. This is likely due to a issue in your DNS configuration or network connectivity, and may just be a temporary issue."),i.createElement(Qc,null,"You can define mock responses for requests like this from the Mock page, to return fake data even for servers and hostnames that don't exist or aren't accessible.")):"untrusted"===e.type?i.createElement(Qc,null,"By default unrecognized certificate authorities (CAs) are only accepted for localhost servers, but ",e.isPaidUser?"additional CAs can be trusted from the Settings page.":"Pro users can trust additional CAs or disable HTTPS validation for a host entirely."):al(e.type)?i.createElement(Qc,null,"By default this is only allowed for localhost servers, but ",e.isPaidUser?"other hosts can be added to the whitelist from the Settings page.":"Pro users can whitelist other custom hosts."):"connection-refused"===e.type?i.createElement(Qc,null,"This typically means the server isn't running on the port you're using, though it is possible this is an intermittent connection issue. You can either try again, or mock requests like this to avoid sending them upstream at all."):"connection-reset"===e.type?i.createElement(Qc,null,"This could be due to a connection issue, or an issue with the server. This may be an intermittent issue that will be solved by retrying the request, or you can mock requests like this to avoid sending them upstream at all."):"client-abort"===e.type?i.createElement(Qc,null,"This could be due to connection issues, problems within the client, or that the client simply no longer wanted to receive the response and closed the connection intentionally."):"client-timeout"===e.type?i.createElement(Qc,null,"This could be due to connection issues, problems within the client, or delays generating the complete body of the request. This might be resolved by retrying the request, or sending a simpler request with a smaller or easier to generate body."):"server-timeout"===e.type?i.createElement(Qc,null,"This could be due to connection issues, problems within the server, or issues with handling this request specifically. This might be resolved by retrying the request, or you can mock requests like this to avoid sending them upstream at all."):nl(e.type)?i.createElement(Qc,null,"This means the client sent HTTP Toolkit some fundamentally invalid data that does not follow the HTTP spec. That suggests either a major bug in the client, or that they're not sending HTTP at all."):"server-unparseable"===e.type?i.createElement(Qc,null,"This means the server sent HTTP Toolkit some fundamentally invalid data that does not follow the HTTP spec. That suggests either a major bug in the server, or that they're not sending HTTP at all."):"header-overflow"===e.type?i.createElement(Qc,null,g.C.value&&t?i.createElement(i.Fragment,null,"This means the request included more than 100KB of headers. The HTTP specification doesn't set a max length, but most servers will refuse to process anything longer than 8KB. This is likely an issue with your client, but if necessary you can increase the HTTP Toolkit limit by setting ",i.createElement("code",null,"max-http-header-size")," using the ",i.createElement("code",null,"HTTPTOOLKIT_NODE_OPTIONS")," environment variable."):g.C.value?i.createElement(i.Fragment,null,"In more recent HTTP Toolkit versions the built-in limit has been increased, so please update HTTP Toolkit to handle requests like these."):i.createElement(i.Fragment,null,"The HTTP specification doesn't set a max length for HTTP headers, but most servers will refuse to process anything longer than 8KB.")):"invalid-method"===e.type?i.createElement(Qc,null,"Because this method is unrecognized, HTTP Toolkit doesn't know how it should be handled, and cannot safely forward it on elsewhere. If you think this method should be supported, please ",i.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"get in touch"),"."):"invalid-http-version"===e.type?i.createElement(Qc,null,"The client may be using a newer or experimental HTTP version that HTTP Toolkit doesn't yet support. If you think this version should be supported, please ",i.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"get in touch"),"."):"unknown"===e.type?i.createElement(Qc,null,"It's not clear what's gone wrong here, but for some reason HTTP Toolkit couldn't successfully and/or securely complete this request. This might be an intermittent issue, and may be resolved by retrying the request."):Object(S.d)(e.type),tl(e.type)&&i.createElement(Qc,null,"The data shown below is a best guess from the data that was available and parseable, and may be incomplete or inaccurate."),i.createElement(Xc,{onClick:e.ignoreError,onKeyPress:Bt},"Ignore"),il(e.type)?i.createElement(Xc,{onClick:e.mockRequest,onKeyPress:Bt},"Mock requests like this"):al(e.type)?e.isPaidUser?i.createElement(Xc,{onClick:()=>e.navigate("/settings"),onKeyPress:Bt},"Go to Settings"):i.createElement(Xc,{onClick:()=>e.getPro("error-header-"+e.type),onKeyPress:Bt},"Get Pro"):null)},ll=p.j.div`
    height: ${38}px;
    flex-shrink: 0;
    width: 100%;
    padding-left: 5px;
    box-sizing: border-box;

    background-color: ${e=>e.theme.mainBackground};

    display: flex;

    align-items: center;
    justify-content: center;

    z-index: 1;
    box-shadow: 0 -10px 30px -5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,dl=Object(u.e)(e=>i.createElement(cn.a,{icon:["fas","eye"],title:"Scroll the list to show this exchange",onClick:e.onClick})),ul=Object(p.j)(Object(u.e)(e=>i.createElement(cn.a,{className:e.className,icon:["fas","thumbtack"],title:(e.pinned?"Unpin this exchange so it can be deleted":"Pin this exchange, so it can't be deleted")+` (${Mt.a}+P)`,onClick:e.onClick})))`
    transition: transform 0.1s;

    ${e=>!e.pinned&&p.f`
        transform: rotate(45deg);
    `}
`,pl=Object(u.e)(e=>i.createElement(cn.a,{icon:["far","trash-alt"],title:`Delete this exchange (${Mt.a}+Delete)`,onClick:e.onClick})),hl=Object(u.e)(e=>i.createElement(cn.a,{icon:["fas","theater-masks"],onClick:e.onClick,title:e.isPaidUser?"Create a mock rule from this exchange":"With Pro: create a mock rule from this exchange",disabled:!e.isExchange||!e.isPaidUser})),ml=Object(u.d)("rulesStore")(Object(u.e)(e=>{const{event:t}=e,{pinned:n}=t;return i.createElement(ll,null,i.createElement(dl,{onClick:()=>e.onScrollToEvent(e.event)}),i.createElement(ul,{pinned:n,onClick:Object(d.action)(()=>{t.pinned=!t.pinned})}),i.createElement(pl,{pinned:n,onClick:()=>e.onDelete(t)}),i.createElement(hl,{isExchange:t.isHttp(),isPaidUser:e.isPaidUser,onClick:()=>e.onBuildRuleFromExchange(e.event)}))})),gl=e=>i.createElement(Kc,null,i.createElement(Qc,null,i.createElement($t.e,null)," ",i.createElement("strong",null,"This request is paused at a breakpoint")),i.createElement(Qc,null,Object(g.F)(g.E.value,g.c)?i.createElement(i.Fragment,null,"Edit the request and then resume to let your edited request continue to the target URL, respond directly to provide a response yourself, or close to immediately end the connection."):i.createElement(i.Fragment,null,"Respond directly to provide a response yourself, or edit the request as you'd like and then resume to let your edited request continue to the target URL.")),i.createElement(Zc,{onClick:e.onCreateResponse,onKeyPress:Bt},"Respond directly"),Object(g.F)(g.E.value,g.c)?i.createElement(Zc,{onClick:e.onClose,onKeyPress:Bt},"Close"):null,i.createElement(Xc,{onClick:e.onResume,onKeyPress:Bt},"Resume")),fl=e=>i.createElement(Kc,null,i.createElement(Qc,null,i.createElement($t.e,null)," ",i.createElement("strong",null,"This response is paused at a breakpoint")),i.createElement(Qc,null,Object(g.F)(g.E.value,g.c)?i.createElement(i.Fragment,null,"Edit it as you'd like and resume to let the edited response continue back to the client, or close to immediately end the connection."):i.createElement(i.Fragment,null,"Edit it as you'd like, then resume to let the edited response continue back to the client.")),Object(g.F)(g.E.value,g.c)?i.createElement(Zc,{onClick:e.onClose,onKeyPress:Bt},"Close"):null,i.createElement(Xc,{onClick:e.onResume,onKeyPress:Bt},"Resume"));var bl=n(111),yl=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const vl=e=>e.map(({key:e,value:t})=>[e,t]),xl=e=>e.map(({key:e,value:t,disabled:n})=>({key:!n&&e.startsWith(":")?e.slice(1):e,value:t,disabled:n})),wl=e=>e.map(({key:e,value:t,disabled:n})=>({key:!n&&e.startsWith(":")?e.slice(1).toLowerCase():e.toLowerCase(),value:t,disabled:n})),El=Object(u.e)(e=>{const{headers:t,onChange:n,allowEmptyValues:r,preserveKeyCase:o}=e;return i.createElement(bl.a,{pairs:(s=t,(e=>e.map(({key:e,value:t})=>e.startsWith(":")?{key:e,value:t,disabled:!0}:{key:e,value:t}))(s.map(([e,t])=>({key:e,value:t})))),onChange:n,transformInput:o?xl:wl,convertResult:vl,allowEmptyValues:r,keyPattern:pc.a,keyTitle:"Header names must contain only alphanumeric characters and !#$%&'*+-.^_`|~ symbols",keyPlaceholder:"Header name",valuePlaceholder:"Header value"});var s});let Cl=class extends i.Component{constructor(){super(...arguments),this.rawHeaders=this.props.convertToRawHeaders(this.props.headers),this.output=this.props.headers}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>this.props.headers,e=>{if(!s.isEqual(e,this.output)){const t=this.props.convertToRawHeaders(e);Object(d.runInAction)(()=>{this.rawHeaders=t})}}))}onChangeRawHeaders(e){this.rawHeaders=e;const{allowEmptyValues:t,convertFromRawHeaders:n,onChange:r,onInvalidState:o}=this.props;if(t)this.output=n(e),r(this.output);else{if(e.some(([e,t])=>!t))return null==o?void 0:o();if(e.some(([e])=>!e))return null==o?void 0:o();this.output=n(e),r(this.output)}}render(){const{allowEmptyValues:e}=this.props,{rawHeaders:t,onChangeRawHeaders:n}=this;return i.createElement(El,{headers:t,onChange:n,allowEmptyValues:e})}};yl([d.observable],Cl.prototype,"rawHeaders",void 0),yl([d.action.bound],Cl.prototype,"onChangeRawHeaders",null),Cl=yl([u.e],Cl);var Tl=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},jl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Ol=Object(p.j)(vn.e)`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
`,Sl=Object.values(rt.Method).filter(e=>"string"==typeof e),kl=Object(p.j)(vn.d)`
    font-size: ${e=>e.theme.textSize};
    display: inline-block;

    width: auto;
    margin-left: 8px;
    margin-bottom: 5px;
`;let Pl=class extends i.Component{render(){const e=this.props,{exchange:t,onChange:n}=e,r=jl(e,["exchange","onChange"]),{request:o}=t,{inProgressResult:s}=this.props.exchange.requestBreakpoint,a=s.rawHeaders||[],{method:c,url:l}=s;return i.createElement(Ut.b,Object.assign({},r,{direction:"right"}),i.createElement("header",null,i.createElement(Ui,{source:o.source}),i.createElement(Wt.a,{color:Object(q.f)(t)},c," ",(o.hostname||"").replace(/\./g," . ")),i.createElement(Ut.c,{onCollapseToggled:r.onCollapseToggled},"Request")),i.createElement("div",null,i.createElement(en.c,null,"Method:"),i.createElement(kl,{value:c,onChange:this.onMethodChanged},!Sl.includes(c)&&i.createElement("option",{key:c,value:void 0},c),Sl.map(e=>i.createElement("option",{key:e,value:e},e)))),i.createElement(en.d,null,"URL"),i.createElement(Ol,{value:l,onChange:this.onUrlChanged}),i.createElement(en.d,null,"Headers"),i.createElement(El,{headers:a,onChange:this.onHeadersChanged,preserveKeyCase:!0}))}get isHttp2(){return 2===this.props.exchange.httpVersion}onMethodChanged(e){const t=e.target.value,{inProgressResult:n}=this.props.exchange.requestBreakpoint;t!==n.method&&(this.isHttp2?this.props.onChange({method:t,rawHeaders:Object(pc.l)(n.rawHeaders,{":method":t})}):this.props.onChange({method:t}))}onUrlChanged(e){const t=e.target.value,{inProgressResult:n}=this.props.exchange.requestBreakpoint;let r=n.rawHeaders;try{const e=new URL(t);r=this.isHttp2?Object(pc.l)(r,{":authority":e.host,":path":e.pathname+e.search,":scheme":e.protocol.slice(0,-1)}):Object(pc.l)(r,{host:e.host})}catch(e){}this.props.onChange({url:e.target.value,rawHeaders:r})}onHeadersChanged(e){this.props.onChange({rawHeaders:e})}};Tl([d.computed],Pl.prototype,"isHttp2",null),Tl([d.action.bound],Pl.prototype,"onMethodChanged",null),Tl([d.action.bound],Pl.prototype,"onUrlChanged",null),Tl([d.action.bound],Pl.prototype,"onHeadersChanged",null),Pl=Tl([u.e],Pl);const Rl=p.j.div`
    margin-top: 5px;

    display: flex;
    flex-direction: row;
    align-items: stretch;

    > :not(:last-child) {
        margin-right: 5px;
    }

    > :last-child {
        flex-grow: 1;
    }
`;function Hl(e,t){return e.toLowerCase()===Object(R.d)(t).toLowerCase()}const ql=e=>{const{statusCode:t}=e,n=void 0===e.statusMessage||2===e.httpVersion?Object(R.d)(t):e.statusMessage;return i.createElement(Rl,{className:e.className},i.createElement(vn.e,{type:"number",min:"100",max:"999",invalid:!t,value:t,onChange:r=>{let o=""!==r.target.value?parseInt(r.target.value,10):void 0;if(s.isNaN(o))return;const a=Hl(n,t)?void 0:e.statusMessage;e.onChange(o,a)}}),i.createElement(vn.e,{disabled:2===e.httpVersion,value:n,onChange:n=>{let r=n.target.value;Hl(r,t)&&(r=void 0),e.onChange(t,r)}}))};var Al=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Il=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Dl=p.j.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`,$l=Object(p.j)(ql)`
    margin-left: 10px;
    margin-bottom: 5px;
    flex-basis: 100%;
`;let Ml=class extends i.Component{render(){const e=this.props,{exchange:t,onChange:n,theme:r}=e,o=Il(e,["exchange","onChange","theme"]),{inProgressResult:s}=t.responseBreakpoint,a=s.rawHeaders||[],{statusCode:c,statusMessage:l}=s;return i.createElement(Ut.b,Object.assign({},o,{direction:"left"}),i.createElement("header",null,i.createElement(Wt.a,{color:Object(q.e)(s.statusCode,r)},c),i.createElement(Ut.c,{onCollapseToggled:o.onCollapseToggled},"Response")),i.createElement(Dl,null,i.createElement(en.c,null,"Status:"),i.createElement($l,{httpVersion:t.httpVersion,statusCode:c,statusMessage:l,onChange:this.onStatusChange})),i.createElement(en.d,null,"Headers"),i.createElement(El,{headers:a,onChange:this.onHeadersChanged,preserveKeyCase:!0}))}onHeadersChanged(e){this.props.onChange({rawHeaders:e})}onStatusChange(e,t){var n;if(2===this.props.exchange.httpVersion){const{rawHeaders:r}=this.props.exchange.responseBreakpoint.inProgressResult;this.props.onChange({statusCode:e||NaN,statusMessage:t,rawHeaders:Object(pc.l)(r,{":status":null!==(n=null==e?void 0:e.toString())&&void 0!==n?n:""})})}else this.props.onChange({statusCode:e||NaN,statusMessage:t})}};Al([d.action.bound],Ml.prototype,"onHeadersChanged",null),Al([d.action.bound],Ml.prototype,"onStatusChange",null),Ml=Al([u.e],Ml);var Fl=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Bl=class extends i.Component{constructor(){super(...arguments),this.contentType="text",this.onBodyChange=e=>{this.props.onChange(Object(P.l)(e,this.textEncoding))}}onChangeContentType(e){this.contentType=e}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>Object(pc.d)(this.props.rawHeaders,"content-type"),e=>{this.contentType=Object(Ba.g)(e)||"text"},{fireImmediately:!0}))}get textEncoding(){return Object(P.h)(this.props.body)?"utf8":"binary"}render(){const{body:e,title:t,exchangeId:n,direction:r,collapsed:o,expanded:s,onCollapseToggled:a,onExpandToggled:c}=this.props,l=Object(P.c)(e,this.textEncoding);return i.createElement(Ut.b,{direction:r,collapsed:o,onCollapseToggled:a,expanded:s},i.createElement("header",null,i.createElement(La.c,{body:e,onBodyFormatted:this.onBodyChange,title:t,expanded:s,onExpandToggled:c,onCollapseToggled:a,selectedContentType:this.contentType,contentTypeOptions:Ba.a,onChangeContentType:this.onChangeContentType})),i.createElement(La.d,null,i.createElement(ko.b,{contentId:`bp-${n}-${r}`,node:this.props.editorNode,language:this.contentType,value:l,onChange:this.onBodyChange,expanded:!!s})))}};Fl([d.observable],Bl.prototype,"contentType",void 0),Fl([d.action.bound],Bl.prototype,"onChangeContentType",null),Fl([d.computed],Bl.prototype,"textEncoding",null),Bl=Fl([u.e],Bl);var Nl=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Ll=p.j.div`
    margin-top: auto;
`;let Ul=class extends i.Component{get cardProps(){return this.props.uiStore.viewCardProps}render(){var e,t;const{exchange:n,onDelete:r,onScrollToEvent:o,onBuildRuleFromExchange:a,uiStore:c,accountStore:l,navigate:d}=this.props,{isPaidUser:u}=l,{expandedViewCard:p}=c,{requestBreakpoint:h,responseBreakpoint:m}=n,g=u||(null===(e=n.api)||void 0===e?void 0:e.isBuiltInApi)?n.api:void 0,f=(null===(t=n.api)||void 0===t?void 0:t.matchedOperation())?(e=>{const t=!e.includes(" ")&&e.length>6?s.startCase(e):e;return t.length>75?t.slice(0,72).trimRight()+"…":t})(n.api.service.name):void 0,b=this.renderHeaderCard(n);if(p)return i.createElement(Aa,null,b,this.renderExpandedCard(p,n,g));const y=h||m?this.renderBreakpointCards(n,f,g):this.renderNormalCards(n,f,g);return i.createElement(Aa,null,i.createElement($a,null,b,y),i.createElement(ml,{event:n,onDelete:r,onScrollToEvent:o,onBuildRuleFromExchange:a,navigate:d,isPaidUser:u}))}renderHeaderCard(e){const{accountStore:t,navigate:n}=this.props,{isPaidUser:r,getPro:s}=t,{requestBreakpoint:a,respondToBreakpointedRequest:c,responseBreakpoint:l,tags:d}=e;if(a)return i.createElement(gl,{key:"breakpoint-header",onCreateResponse:c,onResume:a.resume,onClose:a.close});if(l)return i.createElement(fl,{key:"breakpoint-header",onResume:l.resume,onClose:l.close});const u={key:"error-header",isPaidUser:r,getPro:s,navigate:n,mockRequest:this.mockRequest,ignoreError:this.ignoreError},p=function(e){return e.includes("passthrough-error:SELF_SIGNED_CERT_IN_CHAIN")||e.includes("passthrough-error:DEPTH_ZERO_SELF_SIGNED_CERT")||e.includes("passthrough-error:UNABLE_TO_VERIFY_LEAF_SIGNATURE")||e.includes("passthrough-error:UNABLE_TO_GET_ISSUER_CERT_LOCALLY")?"untrusted":e.includes("passthrough-error:CERT_HAS_EXPIRED")?"expired":e.includes("passthrough-error:CERT_NOT_YET_VALID")?"not-yet-valid":e.includes("passthrough-error:ERR_TLS_CERT_ALTNAME_INVALID")?"wrong-host":e.filter(e=>e.startsWith("passthrough-tls-error:")).length>0||e.includes("passthrough-error:EPROTO")||e.includes("passthrough-error:ERR_SSL_WRONG_VERSION_NUMBER")||e.includes("passthrough-error:ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC")||e.includes("passthrough-error:ERR_SSL_CIPHER_OPERATION_FAILED")||e.includes("passthrough-error:ERR_SSL_BAD_RECORD_TYPE")||e.includes("passthrough-error:ERR_SSL_INTERNAL_ERROR")?"tls-error":e.includes("passthrough-error:ENOTFOUND")?"host-not-found":e.includes("passthrough-error:EHOSTUNREACH")||e.includes("passthrough-error:ENETUNREACH")?"host-unreachable":e.includes("passthrough-error:EAI_AGAIN")?"dns-error":e.includes("passthrough-error:ECONNREFUSED")?"connection-refused":e.includes("passthrough-error:ECONNRESET")?"connection-reset":e.includes("passthrough-error:ETIMEDOUT")?"server-timeout":e.includes("passthrough-error:HPE_INVALID_CONSTANT")||e.includes("passthrough-error:ERR_INVALID_HTTP_TOKEN")||e.includes("passthrough-error:ERR_HTTP_INVALID_STATUS_CODE")||e.includes("passthrough-error:ERR_INVALID_CHAR")?"server-unparseable":e.includes("http-2")||e.includes("client-error:HPE_INVALID_VERSION")?"invalid-http-version":e.includes("client-error:HPE_INVALID_METHOD")?"invalid-method":e.includes("client-error:HPE_INVALID_URL")?"client-unparseable-url":e.includes("client-error:HPE_INVALID_CONSTANT")||e.includes("client-error:HPE_INVALID_EOF_STATE")?"client-unparseable":e.includes("client-error:HPE_HEADER_OVERFLOW")?"header-overflow":e.includes("client-error:HPE_INVALID_CONTENT_LENGTH")||e.includes("client-error:HPE_INVALID_TRANSFER_ENCODING")||e.includes("client-error:HPE_INVALID_HEADER_TOKEN")||e.includes("client-error:HPE_UNEXPECTED_CONTENT_LENGTH")||e.includes("passthrough-error:HPE_INVALID_HEADER_TOKEN")?"invalid-headers":e.includes("client-error:ERR_HTTP_REQUEST_TIMEOUT")?"client-timeout":e.includes("client-error:ECONNABORTED")||e.includes("client-error:EPIPE")?"client-abort":e.filter(e=>e.startsWith("passthrough-error:")).length>0||e.filter(e=>e.startsWith("client-error:")).length>0?(Object(o.c)("Unrecognized error tag "+JSON.stringify(e)),"unknown"):void 0}(d);return p?i.createElement(cl,Object.assign({type:p},u)):null}renderApiCard(e,t){return e?t?i.createElement(Ni,Object.assign({},this.cardProps.api,{apiName:e,apiExchange:t})):i.createElement(Li,Object.assign({},this.cardProps.api,{apiName:e})):null}renderExpandedCard(e,t,n){return"requestBody"===e?this.renderRequestBody(t,n):"responseBody"===e&&(t.isSuccessfulExchange()||t.responseBreakpoint)?this.renderResponseBody(t,n):"webSocketMessages"===e&&t.isWebSocket()&&t.wasAccepted()?this.renderWebSocketMessages(t):(Object(o.c)(`Expanded ${e}, but can't show anything`),null)}renderBreakpointCards(e,t,n){const{uiStore:r}=this.props,{requestBreakpoint:o}=e,s=[];if(o)s.push(i.createElement(Pl,Object.assign({},this.cardProps.request,{exchange:e,onChange:o.updateMetadata}))),s.push(this.renderRequestBody(e,n));else{const o=e.responseBreakpoint;s.push(this.renderApiCard(t,n)),s.push(i.createElement(ic,Object.assign({},this.cardProps.request,{matchedRuleData:this.matchedRuleData,onRuleClicked:this.jumpToRule,exchange:e}))),e.hasRequestBody()&&s.push(this.renderRequestBody(e,n)),s.push(i.createElement(Ml,Object.assign({},this.cardProps.response,{exchange:e,onChange:o.updateMetadata,theme:r.theme}))),s.push(this.renderResponseBody(e,n))}return s}renderNormalCards(e,t,n){const{uiStore:r}=this.props,{response:o}=e,s=[];return s.push(this.renderApiCard(t,n)),s.push(i.createElement(ic,Object.assign({},this.cardProps.request,{matchedRuleData:this.matchedRuleData,onRuleClicked:this.jumpToRule,exchange:e}))),e.hasRequestBody()&&s.push(this.renderRequestBody(e,n)),"aborted"===o?s.push(i.createElement(uc,{key:this.cardProps.response.key,cardProps:this.cardProps.response,exchange:e})):o&&(s.push(i.createElement(lc,Object.assign({},this.cardProps.response,{response:o,requestUrl:e.request.parsedUrl,apiExchange:n,theme:r.theme}))),e.hasResponseBody()&&s.push(this.renderResponseBody(e,n))),e.isWebSocket()&&e.wasAccepted()?(s.push(this.renderWebSocketMessages(e)),e.closeState&&s.push(i.createElement(pi,Object.assign({},this.cardProps.webSocketClose,{theme:r.theme,closeState:e.closeState})))):(s.push(i.createElement(Ll,{key:"divider"})),s.push(i.createElement(Pc,Object.assign({exchange:e},this.cardProps.performance))),s.push(i.createElement(Gc,Object.assign({exchange:e},this.cardProps.export)))),s}renderRequestBody(e,t){var n;const{request:r,requestBreakpoint:o}=e;return o?i.createElement(Bl,Object.assign({},this.requestBodyParams(),{exchangeId:e.id,body:o.inProgressResult.body.decoded,rawHeaders:o.inProgressResult.rawHeaders,onChange:o.updateBody})):i.createElement(hi.a,Object.assign({},this.requestBodyParams(),{isPaidUser:this.props.accountStore.isPaidUser,url:e.request.url,message:r,apiBodySchema:null===(n=null==t?void 0:t.request)||void 0===n?void 0:n.bodySchema}))}renderResponseBody(e,t){var n;const{response:r,responseBreakpoint:o}=e;return o?i.createElement(Bl,Object.assign({},this.responseBodyParams(),{exchangeId:e.id,body:o.inProgressResult.body.decoded,rawHeaders:o.inProgressResult.rawHeaders,onChange:o.updateBody})):i.createElement(hi.a,Object.assign({},this.responseBodyParams(),{isPaidUser:this.props.accountStore.isPaidUser,url:e.request.url,message:r,apiBodySchema:null===(n=null==t?void 0:t.response)||void 0===n?void 0:n.bodySchema}))}renderWebSocketMessages(e){const t=e.request.url.split("/"),n=t[2].split(":")[0],r=t.length>=2?t[t.length-1]:void 0,o=`${n}${r?"- "+r:""} - websocket`;return i.createElement(ei,Object.assign({},this.cardProps.webSocketMessages,{key:`${this.cardProps.webSocketMessages.key}-${this.props.exchange.id}`,streamId:this.props.exchange.id,streamType:"WebSocket",editorNode:this.props.streamMessageEditor,isPaidUser:this.props.accountStore.isPaidUser,filenamePrefix:o,messages:e.messages}))}requestBodyParams(){return Object.assign(Object.assign({},this.cardProps.requestBody),{title:"Request Body",direction:"right",editorNode:this.props.requestEditor})}responseBodyParams(){return Object.assign(Object.assign({},this.cardProps.responseBody),{title:"Response Body",direction:"left",editorNode:this.props.responseEditor})}mockRequest(){const{exchange:e,rulesStore:t,navigate:n}=this.props,r=Object(Po.f)(t,e.request);t.draftRules.items.unshift(r),n("/mock/"+r.id)}get matchedRuleData(){const{exchange:e,rulesStore:t}=this.props,{matchedRule:n}=e;if(!n)return;const r=Object(gt.f)(t.draftRules,{id:n.id});if(!r)return{stepTypes:n.handlerStepTypes,status:"deleted"};const o=("handler"in r?[r.handler]:r.steps).map(e=>Object(qa.h)(e));return s.isEqual(o,n.handlerStepTypes)?{stepTypes:n.handlerStepTypes,status:"unchanged"}:{stepTypes:n.handlerStepTypes,status:"modified-types"}}jumpToRule(){const{navigate:e,exchange:t}=this.props,{matchedRule:n}=t;n&&e("/mock/"+n.id)}ignoreError(){const{exchange:e}=this.props;e.tags=e.tags.filter(e=>!(e.startsWith("passthrough-error:")||e.startsWith("passthrough-tls-error:")||e.startsWith("client-error:")||["header-overflow","http-2"].includes(e)))}};Nl([d.action.bound],Ul.prototype,"mockRequest",null),Nl([d.computed],Ul.prototype,"matchedRuleData",null),Nl([d.action.bound],Ul.prototype,"jumpToRule",null),Nl([d.action.bound],Ul.prototype,"ignoreError",null),Ul=Nl([Object(u.d)("uiStore"),Object(u.d)("accountStore"),Object(u.d)("rulesStore"),u.e],Ul);const Wl=Object(p.j)($t.b).attrs({icon:$t.c.Android.icon})`
    float: left;
    margin-right: 10px;
    margin-top: 3px;
    color: ${$t.c.Android.color};
`;class zl extends i.Component{render(){const{failure:e,certPath:t}=this.props,n=dt(e.remoteIpAddress).split(" "),r=n[0],o=n.slice(1).join(" ");return i.createElement(Aa,null,i.createElement($a,null,i.createElement(Ut.e,null,i.createElement("header",null,i.createElement("h1",null,"Failed HTTPS Request")),i.createElement(en.d,null,"Details"),i.createElement(en.b,null,i.createElement("p",null,{closed:i.createElement(i.Fragment,null,"This connection was aborted and closed before any HTTP request was sent."),reset:i.createElement(i.Fragment,null,"This connection was aborted and reset before any HTTP request was sent."),"cert-rejected":i.createElement(i.Fragment,null,"This connection was aborted, before any HTTP request was sent, because the client did not trust the HTTP Toolkit certificate."),"no-shared-cipher":i.createElement(i.Fragment,null,"This connection was aborted, before any HTTP request was sent, because the client failed to agree on a TLS configuration."),unknown:i.createElement(i.Fragment,null,"This connection was aborted, before any HTTP request was sent, due to a TLS error.")}[e.failureCause]),i.createElement("p",null,"The request was sent by ",i.createElement(en.h,null,r)," ",o,".")),i.createElement(en.d,null,"Cause"),i.createElement(en.b,null,"cert-rejected"===e.failureCause?i.createElement("p",null,"This means that the client hasn't yet been fully configured to work with HTTP Toolkit. It has the proxy settings, but it doesn't trust our certificate authority (CA), so we can't we can't intercept its HTTPS traffic."):"no-shared-cipher"===e.failureCause?i.createElement(i.Fragment,null,i.createElement("p",null,"This usually means that the client hasn't yet been 100% configured to work with HTTP Toolkit, although it's also possible that it has an unusual TLS setup."),i.createElement("p",null,"The former case is much more likely. That would mean that the client has the right proxy settings, but doesn't trust our certificate authority (CA), so we can't imitate HTTPS sites and we can't collect or see its HTTPS traffic.")):i.createElement(i.Fragment,null,i.createElement("p",null,"This could be caused by a few things:"),i.createElement("ul",null,i.createElement("li",null,"The client might no longer want to make the request"),i.createElement("li",null,"The client might have connection issues"),i.createElement("li",null,"The client might not trust our HTTPS certificate")))),i.createElement(en.d,null,"Solutions"),i.createElement(en.b,null,i.createElement("p",null,"cert-rejected"===e.failureCause?i.createElement(i.Fragment,null,"To resolve this, you need to configure the client to trust your HTTP Toolkit CA."):"no-shared-cipher"===e.failureCause?i.createElement(i.Fragment,null,"You probably need to ensure the client is configured to trust the HTTP Toolkit CA."):i.createElement(i.Fragment,null,"In the first two cases, this is not related to HTTP Toolkit. In the third case, you need to configure the client to trust your HTTP Toolkit CA.")),i.createElement("p",null,"How you do this depends on the specific client. Opening the certificate file on the device may prompt you to trust it device-wide, or you may need a specific option for the HTTP library or tool that's being used."),i.createElement("p",null,"Your HTTP Toolkit certificate is stored on your machine at ",i.createElement(en.h,null,t)),i.createElement(Wl,null),i.createElement("p",null,i.createElement("strong",null,"For Android devices"),", modern apps will not trust your installed CA certificates by default. For apps targeting API level 24+, the app must opt in to trusting user CA certificates, or you need to inject a system certificate (only possible on rooted devices and emulators)."),i.createElement("p",null,"Trusting user CA certificates in your own app is a small & simple configuration change, see ",i.createElement("a",{href:"https://httptoolkit.com/docs/guides/android#intercepting-traffic-from-your-own-android-app"},"the HTTP Toolkit docs"),' for more details. Alternatively HTTP Toolkit can inject the system certificate for you automatically, on devices that support this, by connecting the device with ADB and using the "Android device via ADB" interception option.'),i.createElement("p",null,"Take a look at the ",i.createElement("a",{href:"https://httptoolkit.com/docs/guides/android/"},"Android interception guide")," for more information.")))))}}class _l extends i.Component{render(){const{tunnel:e}=this.props,t=dt(e.remoteIpAddress).split(" "),n=t[0],r=t.slice(1).join(" ");return i.createElement(Aa,null,i.createElement($a,null,i.createElement(Ut.e,null,i.createElement("header",null,i.createElement("h1",null,"TLS Tunnel")),i.createElement(en.d,null,"Details"),i.createElement(en.b,null,i.createElement("p",null,"This TLS connection was not intercepted by HTTP Toolkit, as it matched a hostname that is configured for TLS passthrough in your settings.")),i.createElement(en.b,null,i.createElement("p",null,"The connection was made from ",i.createElement(en.h,null,n,":",e.remotePort)," ",r," to ",i.createElement(en.h,null,e.upstreamHostname,":",e.upstreamPort),".")))))}}var Vl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Gl=Object(u.e)(e=>{var{dataChannel:t,isPaidUser:n,streamMessageEditor:r}=e,o=Vl(e,["dataChannel","isPaidUser","streamMessageEditor"]);return i.createElement(ei,Object.assign({},o,{key:t.id,streamId:t.id,streamType:"DataChannel",streamLabel:t.label,editorNode:r,isPaidUser:n,filenamePrefix:"DataChannel "+(t.label||t.channelId),messages:t.messages}))}),Jl=Object(u.e)(e=>i.createElement(Kc,null,i.createElement(Qc,null,"Part of a WebRTC Connection from ",i.createElement(en.h,null,e.connection.clientURL)," to ",i.createElement(en.h,null,e.connection.remoteURL)),i.createElement(Zc,{onClick:e.hideConnection,onKeyPress:Bt},"Hide"),i.createElement(Xc,{onClick:e.jumpToConnection,onKeyPress:Bt},"Jump to connection")));var Kl=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Yl=class extends i.Component{constructor(){super(...arguments),this.isConnectionHidden=!1,this.jumpToConnection=()=>{const{rtcConnection:e}=this.props.dataChannel;this.props.navigate("/view/"+e.id)}}hideConnection(){this.isConnectionHidden=!0}render(){const{dataChannel:e,streamMessageEditor:t,accountStore:n}=this.props;return i.createElement(Aa,null,!this.isConnectionHidden&&i.createElement(Jl,{connection:e.rtcConnection,hideConnection:this.hideConnection,jumpToConnection:this.jumpToConnection}),i.createElement(Gl,{dataChannel:e,isPaidUser:n.isPaidUser,streamMessageEditor:t,collapsed:!1,expanded:!0,onExpandToggled:this.jumpToConnection,onCollapseToggled:void 0}))}};Kl([d.observable],Yl.prototype,"isConnectionHidden",void 0),Kl([d.action.bound],Yl.prototype,"hideConnection",null),Yl=Kl([Object(u.d)("accountStore"),u.e],Yl);var Ql=n(1512),Xl=n(1513),Zl=n(1509),ed=n(1511),td=n(1510),nd=n(1508),rd=n(1514);const od=Object(q.f)("data"),sd=Object(q.f)("rtc-media"),ad=p.j.svg`
    background-color: ${e=>e.theme.mainLowlightBackground};
    color: ${e=>e.theme.mainColor};

    .axis-label {
        font-size: 15px;
    }

    .axis-tick text {
        font-size: 12px;
    }
`,id=({width:e,height:t,graphPaddingPx:n,data:r})=>{var o;const s=n,i=t-n,l=i-s,d=85+n,u=e-d,p=Object(Xl.a)().domain([0,r.length-1]).range([0,u]),h=null!==(o=a.a.max(r.map(e=>Math.max(e.sent,e.received))))&&void 0!==o?o:0,m=Object(Xl.a)().domain([0,h]).range([l/2,s]),g=Object(Xl.a)().domain([0,h]).range([l/2,i]),f=r.map(e=>e.sent),b=r.map(e=>e.received);return c.a.createElement(ad,{width:e,height:t},c.a.createElement(nd.a,{left:d},c.a.createElement(cd,{label:"Received",data:b,xScale:p,yScale:g,fill:sd}),c.a.createElement(cd,{label:"Sent",data:f,xScale:p,yScale:m,fill:od})))},cd=e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(rd.a,{scale:e.yScale,label:e.label,labelOffset:55,labelClassName:"axis-label",tickFormat:e=>Object(H.a)(e.valueOf()),tickClassName:"axis-tick",numTicks:6}),c.a.createElement(Zl.a,{data:e.data,x:(t,n)=>e.xScale(n),y:t=>{var n;return null!==(n=e.yScale(t))&&void 0!==n?n:0},yScale:e.yScale,fill:e.fill,curve:td.a}),c.a.createElement(ed.a,{data:e.data,x:(t,n)=>e.xScale(n),y:t=>{var n;return null!==(n=e.yScale(t))&&void 0!==n?n:0},stroke:"#222",strokeWidth:1.5,curve:td.a}));var ld=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},dd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const ud=Object(u.e)(e=>{const{mediaTrack:t}=e,n=dd(e,["mediaTrack"]);return i.createElement(Ut.b,Object.assign({},n),i.createElement("header",null,i.createElement(Ma.a,null,i.createElement(Fa.a,{expanded:n.expanded,onClick:n.onExpandToggled})),i.createElement(Wt.a,{color:od},Object(H.a)(t.totalBytesSent)," sent"),i.createElement(Wt.a,{color:sd},Object(H.a)(t.totalBytesReceived)," received"),i.createElement(Ut.c,{onCollapseToggled:n.onCollapseToggled},"RTC ",t.type)),i.createElement(pd,null,i.createElement(hd,{mediaTrack:t})))}),pd=p.j.div`
    margin: 0 -20px -20px -20px;
    border-top: solid 1px ${e=>e.theme.containerBorder};
    background-color: ${e=>e.theme.highlightBackground};

    position: relative;
    flex-grow: 1;

    min-height: 400px;

    /* Fix the ParentSize measuring div to match our size exactly. */
    > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;let hd=class extends i.Component{get graphData(){const{stats:e}=this.props.mediaTrack;return s.map(e,e=>({sent:e.sentDelta,received:e.receivedDelta}))}render(){return i.createElement(Ql.a,null,e=>i.createElement(u.a,null,()=>i.createElement(id,{width:e.width,height:e.height,graphPaddingPx:10,data:this.graphData})))}};ld([d.computed],hd.prototype,"graphData",null),hd=ld([u.e],hd);var md=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let gd=class extends i.Component{constructor(){super(...arguments),this.isConnectionHidden=!1,this.jumpToConnection=()=>{const{rtcConnection:e}=this.props.mediaTrack;this.props.navigate("/view/"+e.id)}}hideConnection(){this.isConnectionHidden=!0}render(){const{mediaTrack:e}=this.props;return i.createElement(Aa,null,!this.isConnectionHidden&&i.createElement(Jl,{connection:e.rtcConnection,hideConnection:this.hideConnection,jumpToConnection:this.jumpToConnection}),i.createElement(ud,{collapsed:!1,expanded:!0,onExpandToggled:this.jumpToConnection,onCollapseToggled:void 0,key:e.id,mediaTrack:e}))}};md([d.observable],gd.prototype,"isConnectionHidden",void 0),md([d.action.bound],gd.prototype,"hideConnection",null),gd=md([u.e],gd);var fd=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},bd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};let yd=class extends i.Component{get hasData(){const{streams:e}=this.props.connection;return e.some(e=>e.isRTCDataChannel())}get hasAudio(){const{streams:e}=this.props.connection;return e.some(e=>e.isRTCMediaTrack()&&"audio"===e.type)}get hasVideo(){const{streams:e}=this.props.connection;return e.some(e=>e.isRTCMediaTrack()&&"video"===e.type)}render(){const e=this.props,{connection:t}=e,n=bd(e,["connection"]);return i.createElement(Ut.b,Object.assign({},n),i.createElement("header",null,i.createElement(Ui,{source:t.source}),this.hasData&&i.createElement(Wt.a,{color:Object(q.f)("data")},"Data"),this.hasVideo&&i.createElement(Wt.a,{color:Object(q.f)("image")},"Video"),this.hasAudio&&i.createElement(Wt.a,{color:Object(q.f)("css")},"Audio"),i.createElement(Ut.c,{onCollapseToggled:n.onCollapseToggled},"WebRTC Connection")),i.createElement(ai,null,i.createElement(di,null,i.createElement(en.c,null,"Connection type: "),i.createElement(en.g,null,"host"===t.remoteCandidate.type?"Direct":"relay"===t.remoteCandidate.type?"TURN-relayed":"srflx"===t.remoteCandidate.type?"STUN-directed":"Peer-reflexive"," ",t.remoteCandidate.protocol.toUpperCase()))),i.createElement(ai,null,i.createElement(di,null,i.createElement(en.c,null,"From: "),i.createElement(en.f,null,t.clientURL))),i.createElement(ai,null,i.createElement(di,null,i.createElement(en.c,null,"To: "),i.createElement(en.f,null,t.remoteURL))),t.sourceURL&&i.createElement(i.Fragment,null,i.createElement(en.d,null,"Source page: "),i.createElement(ai,{prefixTrigger:!0},i.createElement(di,null,i.createElement(en.f,null,t.sourceURL.toString())),i.createElement(ui,null,i.createElement(oc,{url:t.sourceURL})))),t.source!==Et.b&&i.createElement(i.Fragment,null,i.createElement(en.d,null,"Client: "),i.createElement(ai,{prefixTrigger:!0},i.createElement(di,null,i.createElement(en.f,null,t.source.ua)),i.createElement(ui,null,i.createElement("p",null,t.source.description)))))}};fd([d.computed],yd.prototype,"hasData",null),fd([d.computed],yd.prototype,"hasAudio",null),fd([d.computed],yd.prototype,"hasVideo",null),yd=fd([u.e],yd);var vd=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},xd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};let wd=class extends i.Component{render(){const e=this.props,{connection:t,type:n,sessionDescription:r,editorNode:o}=e,a=xd(e,["connection","type","sessionDescription","editorNode"]);return i.createElement(Ut.b,Object.assign({},a),i.createElement("header",null,i.createElement(Ut.c,{onCollapseToggled:a.onCollapseToggled},"local"===n?"Sent":"Received"," Session ",s.capitalize(r.type))),i.createElement(La.d,null,i.createElement(Na.a,{contentId:`${t.id}:${n}:${r.type}:sdp`,editorNode:this.props.editorNode,contentType:"text",expanded:!1,cache:t.cache},r.sdp)))}};wd=vd([u.e],wd);var Ed=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Cd=class extends i.Component{constructor(){super(...arguments),this.dataChannelEditors=this.dataChannels.map(()=>ko.c()),this.streamCardState={}}get mediaTracks(){const{streams:e}=this.props.connection;return e.filter(e=>e.isRTCMediaTrack())}get dataChannels(){const{streams:e}=this.props.connection;return e.filter(e=>e.isRTCDataChannel())}toggleCollapse(e){var t,n;this.streamCardState[e]={collapsed:null===(n=!(null===(t=this.streamCardState[e])||void 0===t?void 0:t.collapsed))||void 0===n||n}}expandStream(e){this.props.navigate("/view/"+e)}render(){const{connection:e,uiStore:t,offerEditor:n,answerEditor:r,accountStore:o}=this.props,{localSessionDescription:s,remoteSessionDescription:a}=e,c="offer"===s.type,l=c?s:a,d=c?a:s,u=Object.assign(Object.assign({},t.viewCardProps.rtcSessionOffer),{direction:c?"right":"left"}),p=Object.assign(Object.assign({},t.viewCardProps.rtcSessionAnswer),{direction:c?"left":"right"});return i.createElement(Aa,null,i.createElement($a,null,i.createElement(yd,Object.assign({},t.viewCardProps.rtcConnection,{connection:e})),i.createElement(wd,Object.assign({},u,{connection:e,type:c?"local":"remote",sessionDescription:l,editorNode:n})),i.createElement(wd,Object.assign({},p,{connection:e,type:c?"remote":"local",sessionDescription:d,editorNode:r})),this.mediaTracks.map(e=>{var t;return i.createElement(ud,{key:e.id,mediaTrack:e,expanded:!1,collapsed:!!(null===(t=this.streamCardState[e.id])||void 0===t?void 0:t.collapsed),onCollapseToggled:this.toggleCollapse.bind(this,e.id),onExpandToggled:this.expandStream.bind(this,e.id)})}),this.dataChannels.map((e,t)=>{var n;return i.createElement(Gl,{key:e.id,dataChannel:e,isPaidUser:o.isPaidUser,streamMessageEditor:this.dataChannelEditors[t],expanded:!1,collapsed:!!(null===(n=this.streamCardState[e.id])||void 0===n?void 0:n.collapsed),onCollapseToggled:this.toggleCollapse.bind(this,e.id),onExpandToggled:this.expandStream.bind(this,e.id)})}),this.dataChannelEditors.map((e,t)=>i.createElement(ko.a,{key:t,node:e},i.createElement(zo,{contentId:null})))))}};Ed([d.computed.struct],Cd.prototype,"mediaTracks",null),Ed([d.computed.struct],Cd.prototype,"dataChannels",null),Ed([d.observable],Cd.prototype,"streamCardState",void 0),Ed([d.action.bound],Cd.prototype,"toggleCollapse",null),Cd=Ed([Object(u.d)("uiStore"),Object(u.d)("accountStore"),u.e],Cd);var Td=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const jd=e=>(Object(Mt.h)("j",t=>{Object(Mt.d)(t.target)||e.moveSelection(1)},[e.moveSelection]),Object(Mt.h)("k",t=>{Object(Mt.d)(t.target)||e.moveSelection(-1)},[e.moveSelection]),Object(Mt.h)("Ctrl+p, Cmd+p",t=>{var n;(null===(n=e.selectedEvent)||void 0===n?void 0:n.isHttp())&&(e.onPin(e.selectedEvent),t.preventDefault())},[e.selectedEvent,e.onPin]),Object(Mt.h)("Ctrl+Delete, Cmd+Delete",t=>{Object(Mt.d)(t.target)||e.selectedEvent&&e.onDelete(e.selectedEvent)},[e.selectedEvent,e.onDelete]),Object(Mt.h)("Ctrl+Shift+Delete, Cmd+Shift+Delete",t=>{e.onClear(),t.preventDefault()},[e.onClear]),Object(Mt.h)("Ctrl+f, Cmd+f",t=>{e.onStartSearch(),t.preventDefault()},[e.onStartSearch]),null),Od=["request","response","streamMessage"];let Sd=class extends i.Component{constructor(){super(...arguments),this.editors=Od.reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:ko.c()}),{}),this.searchInputRef=i.createRef(),this.listRef=i.createRef(),this.contextMenuBuilder=new Ha(this.props.accountStore,this.props.uiStore,this.onPin,this.onDelete,this.onBuildRuleFromExchange)}get splitDirection(){return Mt.j.width>=p.b?"vertical":"horizontal"}get confirmedSearchFilters(){return this.props.uiStore.activeFilterSet}get currentSearchFilters(){var e;return null!==(e=this.searchFiltersUnderConsideration)&&void 0!==e?e:this.confirmedSearchFilters}get filteredEventState(){const{events:e}=this.props.eventsStore,t=0===this.currentSearchFilters.length?e:e.filter(e=>this.currentSearchFilters.every(t=>t.matches(e)));return{filteredEvents:t,filteredEventCount:[t.length,e.length]}}get selectedEvent(){return s.find(this.props.eventsStore.events,{id:this.props.eventId})}componentDidMount(){Object(u.c)(this,Object(d.observe)(this,"selectedEvent",({oldValue:e,newValue:t})=>{"horizontal"===this.splitDirection&&!e&&t&&setTimeout(()=>{var e;this.selectedEvent&&(null===(e=this.listRef.current)||void 0===e||e.scrollToEvent(this.selectedEvent))},50)})),Object(u.c)(this,Object(d.autorun)(()=>{if(!this.props.eventId)return;const e=this.selectedEvent;if(!e)return void this.onSelected(void 0);const{expandedViewCard:t}=this.props.uiStore;t&&(e.isHttp()&&("requestBody"!==t||e.hasRequestBody()||e.requestBreakpoint)&&("responseBody"!==t||e.hasResponseBody()||e.responseBreakpoint)&&("webSocketMessages"!==t||e.isWebSocket())||Object(d.runInAction)(()=>{this.props.uiStore.expandedViewCard=void 0}))})),Object(u.c)(this,Object(d.observe)(this,"filteredEventState",({newValue:e,oldValue:t})=>{const n=e.filteredEvents,r=null==t?void 0:t.filteredEvents;r&&r!==n&&r!==this.props.eventsStore.events&&(r.length=0)}))}render(){const{isPaused:e,events:t}=this.props.eventsStore,{certPath:n}=this.props.proxyStore,{filteredEvents:r,filteredEventCount:o}=this.filteredEventState;let s;if(this.selectedEvent)if(this.selectedEvent.isHttp())s=i.createElement(Ul,{exchange:this.selectedEvent,requestEditor:this.editors.request,responseEditor:this.editors.response,streamMessageEditor:this.editors.streamMessage,navigate:this.props.navigate,onDelete:this.onDelete,onScrollToEvent:this.onScrollToCenterEvent,onBuildRuleFromExchange:this.onBuildRuleFromExchange});else if(this.selectedEvent.isTlsFailure())s=i.createElement(zl,{failure:this.selectedEvent,certPath:n});else if(this.selectedEvent.isTlsTunnel())s=i.createElement(_l,{tunnel:this.selectedEvent});else if(this.selectedEvent.isRTCDataChannel())s=i.createElement(Yl,{dataChannel:this.selectedEvent,streamMessageEditor:this.editors.streamMessage,navigate:this.props.navigate});else if(this.selectedEvent.isRTCMediaTrack())s=i.createElement(gd,{mediaTrack:this.selectedEvent,navigate:this.props.navigate});else{if(!this.selectedEvent.isRTCConnection())throw new S.a(this.selectedEvent);s=i.createElement(Cd,{connection:this.selectedEvent,offerEditor:this.editors.request,answerEditor:this.editors.response,navigate:this.props.navigate})}else s="vertical"===this.splitDirection?i.createElement(qo,{key:"details",icon:["fas","arrow-left"]},"Select an exchange to see the full details."):null;const a="vertical"===this.splitDirection?300:200;return i.createElement("div",{className:this.props.className},i.createElement(jd,{selectedEvent:this.selectedEvent,moveSelection:this.moveSelection,onPin:this.onPin,onDelete:this.onDelete,onClear:this.onForceClear,onStartSearch:this.onStartSearch}),i.createElement(Ho,{split:this.splitDirection,primary:"second",defaultSize:"50%",minSize:a,maxSize:-a,hiddenPane:null===s?"2":void 0},i.createElement(kd,null,i.createElement(_s,{searchInputRef:this.searchInputRef,allEvents:t,filteredEvents:r,filteredCount:o,onFiltersConsidered:this.onSearchFiltersConsidered,onClear:this.onClear,onScrollToEnd:this.onScrollToEnd}),i.createElement(xa,{events:t,filteredEvents:r,selectedEvent:this.selectedEvent,isPaused:e,moveSelection:this.moveSelection,onSelected:this.onSelected,contextMenuBuilder:this.contextMenuBuilder,ref:this.listRef})),null!=s?s:i.createElement("div",null)),Object.values(this.editors).map((e,t)=>i.createElement(ko.a,{key:t,node:e},i.createElement(zo,{contentId:null}))))}onSearchFiltersConsidered(e){this.searchFiltersUnderConsideration=e}onSelected(e){this.props.navigate(e?"/view/"+e.id:"/view")}moveSelection(e){const{filteredEvents:t}=this.filteredEventState;if(0===t.length)return;const n=this.selectedEvent?s.findIndex(t,{id:this.selectedEvent.id}):-1,r=t[-1===n?e>=0?0:t.length-1:s.clamp(n+e,0,t.length-1)];this.onSelected(r),this.onScrollToEvent(r)}onPin(e){e.pinned=!e.pinned}onBuildRuleFromExchange(e){const{rulesStore:t,navigate:n}=this.props,r=Object(Po.e)(e);t.draftRules.items.unshift(r),n("/mock/"+r.id)}onDelete(e){const{filteredEvents:t}=this.filteredEventState;if(e.pinned&&!confirm("Delete this pinned exchange?"))return;const n=t.indexOf(e),r=e===this.selectedEvent;if(-1!==n&&r&&t.length>0){const r=t[Math.min(n+1,t.length-1)];this.onSelected(r),Object(d.when)(()=>this.selectedEvent===r,()=>{this.props.eventsStore.deleteEvent(e)})}else this.props.eventsStore.deleteEvent(e)}onForceClear(){this.onClear(!1)}onClear(e=!0){const{events:t}=this.props.eventsStore,n=s.some(t,{pinned:!0}),r=t.length>0&&s.every(t,{pinned:!0});if(r){if(!confirm("Delete pinned traffic?"))return}else if(e&&t.length>0){if(!confirm(n?"Delete all non-pinned traffic?":"Delete all collected traffic?"))return}this.props.eventsStore.clearInterceptedData(r)}onStartSearch(){var e;null===(e=this.searchInputRef.current)||void 0===e||e.focus()}onScrollToEvent(e){var t;null===(t=this.listRef.current)||void 0===t||t.scrollToEvent(e)}onScrollToCenterEvent(e){var t;null===(t=this.listRef.current)||void 0===t||t.scrollToCenterEvent(e)}onScrollToEnd(){var e;null===(e=this.listRef.current)||void 0===e||e.scrollToEnd()}};Td([d.computed],Sd.prototype,"splitDirection",null),Td([d.observable],Sd.prototype,"searchFiltersUnderConsideration",void 0),Td([Object(j.a)(250,{equals:d.comparer.structural})],Sd.prototype,"currentSearchFilters",null),Td([Object(j.a)(10)],Sd.prototype,"filteredEventState",null),Td([d.computed],Sd.prototype,"selectedEvent",null),Td([d.action.bound],Sd.prototype,"onSearchFiltersConsidered",null),Td([d.action.bound],Sd.prototype,"onSelected",null),Td([d.action.bound],Sd.prototype,"moveSelection",null),Td([d.action.bound],Sd.prototype,"onPin",null),Td([d.action.bound],Sd.prototype,"onBuildRuleFromExchange",null),Td([d.action.bound],Sd.prototype,"onDelete",null),Td([d.action.bound],Sd.prototype,"onForceClear",null),Td([d.action.bound],Sd.prototype,"onClear",null),Td([d.action.bound],Sd.prototype,"onStartSearch",null),Td([d.action.bound],Sd.prototype,"onScrollToEvent",null),Td([d.action.bound],Sd.prototype,"onScrollToCenterEvent",null),Td([d.action.bound],Sd.prototype,"onScrollToEnd",null),Sd=Td([Object(u.d)("eventsStore"),Object(u.d)("proxyStore"),Object(u.d)("uiStore"),Object(u.d)("accountStore"),Object(u.d)("rulesStore"),u.e],Sd);const kd=p.j.div`
    position: relative;

    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
`,Pd=Object(p.j)(Sd)`
    height: 100vh;
    position: relative;
`;var Rd=n(129),Hd=n(128),qd=n(349);const Ad=p.j.div`
    position: absolute;
    left: -31px;
    top: calc(50% - 1px);
    transform: translateY(-50%);

    cursor: row-resize;

    opacity: 0;

    :focus, :active {
        outline: none;
        opacity: 0.5;
        color: ${e=>e.theme.popColor};
    }

    && svg {
        margin: 0;
    }
`,Id=Object(p.j)(e=>i.createElement(Ad,Object.assign({},e),i.createElement($t.b,{icon:["fas","grip-vertical"]})))``,Dd=p.j.div`
    position: absolute;
    top: ${e=>e.topOffset}px;
    right: 10px;

    display: none; /* Made flex by container, on hover/expand */
    flex-direction: row-reverse;
    align-items: center;
`,$d=Object(p.j)(i.memo(e=>i.createElement(cn.a,{className:e.className,icon:e.icon,title:e.title,disabled:e.disabled,onClick:e.onClick})))`
    padding: 5px;
    margin: 0 5px;

    z-index: 10;

    font-size: 1.2em;

    > svg {
        display: block;
    }

    :disabled {
        opacity: 1;
        color: ${e=>e.theme.containerWatermark};
    }

    :not(:disabled) {
        cursor: pointer;
        color: ${e=>e.theme.primaryInputBackground};

        &:hover, &:focus {
            outline: none;
            color: ${e=>e.theme.popColor};
        }
    }
`,Md=p.j.div`
    position: absolute;
    top: calc(50% - ${e=>3*e.index}px);
    transform: translateY(-50%);
    height: 150%;

    left: calc(-5px + ${e=>10*e.index}px);
    right: ${e=>10*e.index}px;

    background-color: ${e=>e.theme.mainBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    opacity: ${e=>(e.activated?1:.6)-.2*e.index};
    z-index: ${e=>9-e.index};

    border-left: 5px solid ${e=>e.borderColor};
`,Fd=p.j.div`
    display: none; /* Made flex by container, on hover/expand */
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
`,Bd=Object(p.j)($d)`
    font-size: 1em;
    padding: 0;
`,Nd=e=>i.createElement(Dd,{topOffset:-2},i.createElement($d,{title:"Delete these rules",icon:["far","trash-alt"],onClick:e.onDelete}),i.createElement($d,{title:"Clone this rule",icon:["far","clone"],onClick:e.onClone}),i.createElement($d,{title:e.toggleState?"Deactivate these rules":"Activate these rules",icon:["fas",e.toggleState?"toggle-on":"toggle-off"],onClick:e.onToggleActivation})),Ld=p.j.header`
    ${e=>e.collapsed?"\n            margin-top: 22px;\n            margin-bottom: 17px;\n        ":"\n            margin-top: 10px;\n        "}

    width: calc(100% - 5px - ${e=>40*e.depth}px);
    margin-left: calc(5px + ${e=>40*e.depth}px);

    transition: padding 0.1s ease-out;
    padding: ${e=>e.collapsed?"5px 20px 5px 15px":"5px 20px 5px 0px"};
    box-sizing: border-box;

    display: flex;
    align-items: center;

    position: relative;

    cursor: pointer;
    &:focus {
        outline: none;
        > h2 > svg {
            color: ${e=>e.theme.popColor};
        }
    }
    &:hover {
        ${Id} {
            opacity: 0.5;
        }

        ${Fd}, ${Dd} {
            display: flex;
        }

        ${e=>e.collapsed?p.f`
                > ${Md} {
                    box-shadow: 0 2px 20px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
                }
            `:"text-shadow: 0 0 5px rgba(0,0,0,0.2);"}
    }

    ${e=>e.editingTitle&&p.f`
        ${Fd} {
            display: flex;
        }
    `}

    font-size: ${e=>e.theme.headingSize};

    > h2 {
        user-select: none;
        z-index: 10;

        > svg {
            margin-right: 10px;
        }
    }

    input[type=text] {
        margin: -7px 0;
        position: relative;
        top: -3px;
    }
`,Ud=(e,t)=>{const n={};return e&&e.transition&&(n.transition=e.transition.replace(/transform [\d.]+s/,"transform 100ms")),t.combineWith&&t.combineWith.endsWith("-tail")&&(n.opacity="1"),Object.assign(Object.assign({},e),n)},Wd=e=>Object(gt.h)(e).every(e=>e.activated),zd=Object(qd.b)(e=>{const[t,n]=i.useState(!1),[r,o]=i.useState(e.group.title),s=Object(d.action)(()=>{e.group.collapsed=!e.group.collapsed}),a=()=>{n(!0),o(e.group.title)},c=e=>{o(e.target.value)},l=()=>{n(!1)},u=()=>{n(!1),e.updateGroupTitle(e.group.id,r)},p=Wd(e.group),h=Nt(Object(d.action)(()=>{Object(gt.m)(e.group,e=>{e.activated=!p})})),m=Nt(()=>e.deleteGroup(e.path)),g=Nt(()=>e.cloneGroup(e.path));return i.createElement(Hd.b,{draggableId:e.group.id,index:e.index},(n,o)=>i.createElement(qd.a,null,()=>i.createElement(Ld,Object.assign({depth:e.path.length-1,collapsed:e.collapsed,editingTitle:t},n.draggableProps,{style:Ud(n.draggableProps.style,o),ref:n.innerRef,onClick:s,onKeyPress:Bt,tabIndex:0}),i.createElement(Id,Object.assign({},n.dragHandleProps)),i.createElement("h2",null,i.createElement($t.b,{icon:["fas",e.group.collapsed?"chevron-down":"chevron-up"]}),t?i.createElement(vn.e,{autoFocus:!0,value:r,onChange:c,onClick:e=>e.stopPropagation(),onKeyPress:e=>{"Enter"===e.key&&u()}}):e.group.title),i.createElement(Fd,null,t?i.createElement(i.Fragment,null,i.createElement(Bd,{title:"Save group name",icon:["fas","save"],onClick:Nt(u)}),i.createElement(Bd,{title:"Reset group name",icon:["fas","undo"],onClick:Nt(l)})):i.createElement(Bd,{title:"Edit group name",icon:["fas","edit"],onClick:Nt(a)})),i.createElement(Nd,{toggleState:p,onToggleActivation:h,onClone:g,onDelete:m}),e.collapsed&&e.group.items.slice(0,5).map((e,t)=>{const n=Object(gt.k)(e)?void 0:e.matchers[0],r=void 0===n?void 0:n instanceof rt.matchers.MethodMatcher?rt.Method[n.method]:"unknown",o=void 0===r?"transparent":Object(q.d)(r),s=Object(gt.k)(e)?Wd(e):e.activated;return i.createElement(Md,{key:t,index:t,borderColor:o,activated:s})}))))}),_d=p.j.div`
    width: 100%;
    height: 30px;
    margin-bottom: -20px;
`,Vd=e=>i.createElement(Hd.b,{draggableId:e.group.id+"-tail",index:e.index,isDragDisabled:!0},e=>i.createElement(_d,Object.assign({},e.draggableProps,{ref:e.innerRef})));var Gd=n(671),Jd=n(57),Kd=n(46),Yd=n(38),Qd=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Xd extends i.Component{}function Zd(e){const{matcher:t}=e;if(!t)return null;const n=Object(qa.h)(t),r={matcher:t,matcherIndex:0,onChange:e.onChange,onInvalidState:s.noop};switch(n){case"eth-method":return i.createElement(ou,Object.assign({},r));case"ipfs-interaction":return i.createElement(su,Object.assign({},r));case"wildcard":case"ws-wildcard":case"default-wildcard":case"default-ws-wildcard":case"rtc-wildcard":case"GET":case"POST":case"PUT":case"PATCH":case"DELETE":case"HEAD":case"OPTIONS":return null;default:throw new S.a(n)}}function eu(e){const{matcher:t}=e,{matcherClass:n}=e;let r="matcher"in e?Object(qa.h)(e.matcher):qa.c.get(e.matcherClass);if(!r)return null;if(Object(qa.m)(r)){if(!t||Object(qa.m)(t.type))throw new Error("Cannot configure hidden matcher type "+r);r=t.type}const o={matcher:t,matcherIndex:e.matcherIndex,onChange:e.onChange,onInvalidState:e.onInvalidState||s.noop};switch(r){case"method":return i.createElement(ru,Object.assign({},o));case"host":return i.createElement(au,Object.assign({},o));case"simple-path":return i.createElement(iu,Object.assign({},o));case"regex-path":return i.createElement(du,Object.assign({},o));case"query":return i.createElement(pu,Object.assign({},o));case"exact-query-string":return i.createElement(hu,Object.assign({},o));case"header":return i.createElement(mu,Object.assign({},o));case"raw-body":return i.createElement(fu,Object.assign({},o));case"raw-body-includes":return i.createElement(bu,Object.assign({},o));case"json-body":return i.createElement(vu,Object.assign({},o));case"json-body-matching":return i.createElement(xu,Object.assign({},o));case"eth-params":return i.createElement(Cu,Object.assign({},o));case"ipfs-arg":return i.createElement(Eu,Object.assign({},o));case"has-rtc-data-channel":case"has-rtc-video-track":case"has-rtc-audio-track":case"has-rtc-media-track":return i.createElement(Tu,Object.assign({matcherKey:r,matcherClass:n},o));default:throw new S.a(r)}}const tu=p.j.label`
    margin: 5px 0;

    text-transform: uppercase;
    font-size: ${e=>e.theme.textSize};
    opacity: ${e=>e.theme.lowlightTextOpacity};
`,nu=p.j.div`
    display: flex;
    flex-direction: column;
`;let ru=class extends Xd{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.method=rt.Method.GET}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.method)&&void 0!==t?t:rt.Method.GET;Object(d.runInAction)(()=>{this.method=n})})),this.props.matcher||this.props.onChange(new Jd.i(this.method))}render(){const{method:e}=this,{matcherIndex:t}=this.props,n=rt.Method[e],r=Object.values(rt.Method).filter(e=>!isNaN(Number(e)));return i.createElement(nu,{title:n?`Matches all ${n} requests`:void 0},void 0!==t&&i.createElement(tu,{htmlFor:this.fieldId},0!==t&&"and "," with method"),i.createElement(vn.d,{id:this.fieldId,value:e,onChange:this.onChange},r.map(e=>i.createElement("option",{value:e,key:e},rt.Method[e]))))}onChange(e){this.method=parseInt(e.currentTarget.value,10),this.props.onChange(new Jd.i(this.method))}};Qd([d.observable],ru.prototype,"method",void 0),Qd([d.action.bound],ru.prototype,"onChange",null),ru=Qd([u.e],ru);let ou=class extends i.Component{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.method="eth_call"}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.methodName)&&void 0!==t?t:"eth_call";Object(d.runInAction)(()=>{this.method=n})})),this.props.matcher||this.props.onChange(new Kd.h(this.method))}render(){const{method:e}=this;return i.createElement(nu,{title:`Match ${e} requests to Ethereum nodes`},i.createElement(tu,{htmlFor:this.fieldId},"Requesting a node to"),i.createElement(vn.d,{id:this.fieldId,value:e,onChange:this.onChange},Object.keys(Kd.i).map(e=>i.createElement("option",{value:e,key:e},Kd.i[e]))))}onChange(e){this.method=e.currentTarget.value,this.props.onChange(new Kd.h(this.method))}};Qd([d.observable],ou.prototype,"method",void 0),Qd([d.action.bound],ou.prototype,"onChange",null),ou=Qd([u.e],ou);let su=class extends i.Component{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.interaction="cat"}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.interactionName)&&void 0!==t?t:"cat";Object(d.runInAction)(()=>{this.interaction=n})})),this.props.matcher||this.props.onChange(new Yd.h(this.interaction))}render(){const{interaction:e}=this;return i.createElement(nu,{title:`Match ${e} IPFS interactions`},i.createElement(tu,{htmlFor:this.fieldId},"Requesting an IPFS node to"),i.createElement(vn.d,{id:this.fieldId,value:e,onChange:this.onChange},Object.keys(Yd.i).map(e=>i.createElement("option",{value:e,key:e},Yd.i[e]))))}onChange(e){this.interaction=e.currentTarget.value,this.props.onChange(new Yd.h(this.interaction))}};Qd([d.observable],su.prototype,"interaction",void 0),Qd([d.action.bound],su.prototype,"onChange",null),su=Qd([u.e],su);let au=class extends Xd{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.host=""}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.host:"";Object(d.runInAction)(()=>{this.host=e})}))}render(){const{host:e}=this,{matcherIndex:t}=this.props;return i.createElement(nu,{title:e?`Matches all requests to ${e}, regardless of their path or protocol`:void 0},void 0!==t&&i.createElement(tu,{htmlFor:this.fieldId},0!==t&&"and "," for host"),i.createElement(vn.e,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:e,onChange:this.onChange,placeholder:"A specific host to match: example.com"}))}onChange(e){this.host=e.target.value;try{this.props.onChange(new rt.matchers.HostMatcher(this.host)),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Object(S.b)(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};Qd([d.observable],au.prototype,"error",void 0),Qd([d.observable],au.prototype,"host",void 0),Qd([d.action.bound],au.prototype,"onChange",null),au=Qd([u.e],au);let iu=class extends Xd{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.url=""}componentDidMount(){void 0!==this.props.matcherIndex&&Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.path:"";Object(d.runInAction)(()=>{this.url=e})}))}render(){const{url:e}=this,{matcherIndex:t}=this.props,n=/(\w+:\/\/)?([^/?#]+)?(\/[^?#]*)?/.exec(e)||[],[r,o,s,a]=n;return i.createElement(nu,{title:s||a?`Matches ${o?o.slice(0,-3):"any"} requests to ${s?"host "+s:"any host"} at ${a?"path "+a:"path /"}`:void 0},void 0!==t&&i.createElement(tu,{htmlFor:this.fieldId},0!==t&&"and "," for URL"),i.createElement(vn.e,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:e,onChange:this.onChange,placeholder:"A specific URL to match: http://example.com/abc"}))}ensurePathIsValid(){if(!this.url)throw new Error("The URL must not be empty");this.url.match(/\w+:\//)&&new URL(this.url)}onChange(e){this.url=e.target.value.split("#")[0];try{this.ensurePathIsValid();const[t,n]=this.url.split("?");void 0===n?this.props.onChange(new rt.matchers.SimplePathMatcher(t)):(void 0!==this.props.matcherIndex&&(this.url=t),this.props.onChange(new rt.matchers.SimplePathMatcher(t),new rt.matchers.ExactQueryMatcher("?"+n))),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Object(S.b)(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};Qd([d.observable],iu.prototype,"error",void 0),Qd([d.observable],iu.prototype,"url",void 0),Qd([d.action.bound],iu.prototype,"onChange",null),iu=Qd([u.e],iu);const cu=Object(p.j)(vn.e)`
    font-family: ${e=>e.theme.monoFontFamily};
`,lu=/([^\\]|^)\\(\?|u003F|x3F)|([^\\]|^)\[[^\]]*(\?|u003F|x3F)/;let du=class extends Xd{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.pattern=""}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.regexSource.replace(/\\\//g,"/"):"";Object(d.runInAction)(()=>{this.pattern=e})}))}render(){const{matcherIndex:e}=this.props;let t=[],n="like";if(!this.error&&this.props.matcher){const{regexSource:e}=this.props.matcher,r=new RegExp(e),o=new Gd(r);o.defaultRange.subtract(32,47),o.defaultRange.subtract(58,64),o.defaultRange.subtract(123,126),o.max=10,t=s.uniq([o.gen(),o.gen(),o.gen()]).filter(e=>e.length&&e.match(r)).sort(),n=e.startsWith("^")&&e.endsWith("$")?"like":e.startsWith("^")?"that start with":e.endsWith("$")?"that end with":"including"}return i.createElement(nu,{title:0===t.length?void 0:1===t.length?`Would match absolute URLs ${n} ${t[0]}`:`Would match absolute URLs ${n}:\n\n${t.join("\n")}`},void 0!==e&&i.createElement(tu,{htmlFor:this.fieldId},0!==e&&"and "," for URLs matching"),i.createElement(cu,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:this.pattern,onChange:this.onChange,placeholder:"Any regular expression: https?://abc.com/.*"}))}onChange(e){this.pattern=e.target.value;try{if(!this.pattern)throw new Error("A pattern to match is required");if(this.pattern.match(lu))throw new Error("Query strings are matched separately, so a literal ? character will never match");this.props.onChange(new rt.matchers.RegexPathMatcher(new RegExp(this.pattern))),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Object(S.b)(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};Qd([d.observable],du.prototype,"error",void 0),Qd([d.observable],du.prototype,"pattern",void 0),Qd([d.action.bound],du.prototype,"onChange",null),du=Qd([u.e],du);const uu=e=>s.mapValues(s.groupBy(e,({key:e})=>e),e=>1===e.length?e[0].value:e.map(e=>e.value));let pu=class extends Xd{render(){const{matcherIndex:e,matcher:t}=this.props,n=(r=(null==t?void 0:t.queryObject)||{},s.flatMap(Object.entries(r),([e,t])=>s.isArray(t)?t.map(t=>({key:e,value:t})):{key:e,value:t}));var r;return i.createElement(nu,null,void 0!==e&&i.createElement(tu,null,0!==e&&"and "," with query parameters including"),i.createElement(bl.a,{pairs:n,convertResult:uu,onChange:this.onChange,keyPlaceholder:"Query parameter name",valuePlaceholder:"Query parameter value",allowEmptyValues:!0}))}onChange(e){try{if(Object.keys(e).some(e=>!e))throw new Error("Invalid query parameter; query parameter names can't be empty");0===Object.keys(e).length?this.props.onChange():this.props.onChange(new rt.matchers.QueryMatcher(e))}catch(e){console.log(e),this.props.onInvalidState()}}};Qd([d.action.bound],pu.prototype,"onChange",null),pu=Qd([u.e],pu);let hu=class extends Xd{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.query=""}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.query:"";Object(d.runInAction)(()=>{this.query=e})}))}render(){const{matcherIndex:e}=this.props;return i.createElement(nu,null,void 0!==e&&i.createElement(tu,{htmlFor:this.fieldId},0!==e&&"and "," with query"),i.createElement(vn.e,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:this.query,onChange:this.onChange,placeholder:"An exact query string to match, e.g. ?a=b"}))}onChange(e){this.query=e.target.value;try{this.props.onChange(new rt.matchers.ExactQueryMatcher(this.query)),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Object(S.b)(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};Qd([d.observable],hu.prototype,"error",void 0),Qd([d.observable],hu.prototype,"query",void 0),Qd([d.action.bound],hu.prototype,"onChange",null),hu=Qd([u.e],hu);let mu=class extends Xd{render(){var e;const{matcherIndex:t}=this.props,n=(null===(e=this.props.matcher)||void 0===e?void 0:e.headers)||{};return i.createElement(nu,null,void 0!==t&&i.createElement(tu,null,0!==t&&"and "," with headers including"),i.createElement(Cl,{headers:n,convertToRawHeaders:this.convertInput,convertFromRawHeaders:this.convertResult,onChange:this.onChange,onInvalidState:this.props.onInvalidState}))}convertInput(e){return Object(pc.g)(e)}convertResult(e){return Object(pc.f)(Object(pc.i)(e))}onChange(e){0===Object.keys(e).length?this.props.onChange():this.props.onChange(new rt.matchers.HeaderMatcher(e))}};Qd([d.action.bound],mu.prototype,"onChange",null),mu=Qd([u.e],mu);const gu=p.j.div`
    > div {
        border-radius: 4px;
        border: solid 1px ${e=>e.theme.containerBorder};
        padding: 1px;

        ${e=>e.error&&p.f`
            border-color: ${e=>e.theme.warningColor};
        `}
    }
`;class fu extends Xd{render(){return i.createElement(yu,Object.assign({},this.props,{matcherClass:rt.matchers.RawBodyMatcher,description:"with a decoded body exactly matching"}))}}class bu extends Xd{render(){return i.createElement(yu,Object.assign({},this.props,{matcherClass:rt.matchers.RawBodyIncludesMatcher,description:"with a decoded body including"}))}}let yu=class extends Xd{constructor(){super(...arguments),this.content=""}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.content:"";Object(d.runInAction)(()=>{this.content=e})})),this.onBodyChange(this.content)}render(){const{content:e}=this,{matcherIndex:t}=this.props;return i.createElement(nu,null,void 0!==t&&i.createElement(tu,null,0!==t&&"and "," ",this.props.description),i.createElement(gu,null,i.createElement(zo,{contentId:null,value:e,onChange:this.onBodyChange,language:"text"})))}onBodyChange(e){this.content=e,this.props.onChange(new this.props.matcherClass(e))}};Qd([d.observable],yu.prototype,"content",void 0),Qd([d.action.bound],yu.prototype,"onBodyChange",null),yu=Qd([u.e],yu);class vu extends Xd{render(){return i.createElement(wu,Object.assign({},this.props,{matcherClass:rt.matchers.JsonBodyMatcher,description:"with a JSON body equivalent to"}))}}class xu extends Xd{render(){return i.createElement(wu,Object.assign({},this.props,{matcherClass:rt.matchers.JsonBodyFlexibleMatcher,description:"with a JSON body including"}))}}let wu=class extends Xd{constructor(){var e,t;super(...arguments),this.content=(null===(e=this.props.matcher)||void 0===e?void 0:e.body)?JSON.stringify(null===(t=this.props.matcher)||void 0===t?void 0:t.body,null,2):"{\n    \n}"}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>{var e,t;return null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.body)&&void 0!==t?t:{}},e=>{const t=Object(P.m)(this.content);void 0!==t&&s.isEqual(t,e)||Object(d.runInAction)(()=>{this.content=JSON.stringify(e,null,2)})})),this.onBodyChange(this.content)}render(){const{content:e,error:t}=this,{matcherIndex:n}=this.props;return i.createElement(nu,null,void 0!==n&&i.createElement(tu,null,0!==n&&"and "," ",this.props.description),i.createElement(gu,{error:!!t},i.createElement(zo,{contentId:null,value:e,onChange:this.onBodyChange,language:"json"})))}onBodyChange(e){this.content=e;try{const t=JSON.parse(e);this.props.onChange(new this.props.matcherClass(t)),this.error=void 0}catch(e){console.log(e),this.error=Object(S.b)(e),this.props.onInvalidState()}}};Qd([d.observable],wu.prototype,"content",void 0),Qd([d.observable],wu.prototype,"error",void 0),Qd([d.action.bound],wu.prototype,"onBodyChange",null),wu=Qd([u.e],wu);let Eu=class extends Xd{constructor(){super(...arguments),this.fieldId=s.uniqueId()}get interaction(){var e;return(null===(e=this.props.matcher)||void 0===e?void 0:e.interaction)||"cat"}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e;const t=(null===(e=this.props.matcher)||void 0===e?void 0:e.argValue)||void 0;Object(d.runInAction)(()=>{this.arg=t})}))}render(){var e;const{matcherIndex:t}=this.props,{placeholder:n,argType:r}=null!==(e=Yd.b[this.interaction])&&void 0!==e?e:{placeholder:"",argType:"IPFS argument"};return i.createElement(nu,null,void 0!==t&&i.createElement(tu,{htmlFor:this.fieldId},0!==t&&"and "," for ",r),i.createElement(vn.e,{id:this.fieldId,spellCheck:!1,value:this.arg||"",onChange:this.onChange,placeholder:n}))}onChange(e){this.arg=e.target.value,this.props.onChange(new Yd.c(this.interaction,this.arg))}};Qd([d.observable],Eu.prototype,"arg",void 0),Qd([d.computed],Eu.prototype,"interaction",null),Qd([d.action.bound],Eu.prototype,"onChange",null),Eu=Qd([u.e],Eu);let Cu=class extends Xd{constructor(){var e,t;super(...arguments),this.content=(null===(e=this.props.matcher)||void 0===e?void 0:e.params)?JSON.stringify(null===(t=this.props.matcher)||void 0===t?void 0:t.params,null,2):"[\n    \n]"}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>{var e,t;return null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.params)&&void 0!==t?t:{}},e=>{const t=Object(P.m)(this.content);void 0!==t&&s.isEqual(t,e)||Object(d.runInAction)(()=>{this.content=JSON.stringify(e,null,2)})})),this.onJsonChange(this.content)}render(){const{content:e,error:t}=this,{matcherIndex:n}=this.props;return i.createElement(nu,null,void 0!==n&&i.createElement(tu,null,0!==n&&"and "," with Ethereum parameters matching"),i.createElement(gu,{error:!!t},i.createElement(zo,{contentId:null,value:e,onChange:this.onJsonChange,language:"json"})))}onJsonChange(e){this.content=e;try{const t=JSON.parse(e);this.props.onChange(new Kd.k(t)),this.error=void 0}catch(e){console.log(e),this.error=Object(S.b)(e),this.props.onInvalidState()}}};Qd([d.observable],Cu.prototype,"content",void 0),Qd([d.observable],Cu.prototype,"error",void 0),Qd([d.action.bound],Cu.prototype,"onJsonChange",null),Cu=Qd([u.e],Cu);let Tu=class extends Xd{componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{matcher:e,matcherClass:t,onChange:n}=this.props;!e&&t&&n(new t)}))}render(){const{matcherIndex:e,matcherKey:t}=this.props;return i.createElement(nu,null,void 0!==e&&i.createElement(tu,null,0!==e&&"and "," ",Xo(t)))}};Tu=Qd([u.e],Tu);var ju=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Ou=e=>qa.c.get(e)||qa.c.get(null==e?void 0:e.constructor),Su=p.j.li`
    display: flex;
    flex-direction: row;
    margin: 5px 0;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
`,ku=p.j.div`
    flex-grow: 1;
    flex-shrink: 1;
    width: 0; /* Required to keep body editors resizing properly */
`,Pu=Object(p.j)(vn.a)`
    font-size: ${e=>e.theme.textSize};
    padding: 6px 10px;
    display: inline-block;
    margin-left: 5px;

    flex-grow: 0;
    flex-shrink: 0;
`,Ru=p.j.div`
    &:not(:empty) {
        margin-top: 5px;
    }
`,Hu=i.forwardRef((e,t)=>{const n=Object(qa.g)(),[r,o]=s.partition(n,e=>"http"===Object(qa.i)(Ou(e)));return i.createElement(Su,null,i.createElement(ku,null,i.createElement(vn.d,{ref:t,value:Ou(e.matcher),onChange:t=>{const n=t.currentTarget.value;if(n){const t=(r=n,qa.d[r]);e.onChange(new t)}var r}},void 0===e.matcher&&i.createElement("option",{value:""},"Never"),i.createElement(Au,{matchers:r}),o.length>0&&i.createElement("optgroup",{label:"Experimental"},i.createElement(Au,{matchers:o}))),i.createElement(Ru,null,i.createElement(Zd,{matcher:e.matcher,onChange:e.onChange}))))});let qu=class extends i.Component{render(){const{matcher:e,onChange:t,onDelete:n,matcherIndex:r}=this.props;return i.createElement(Su,null,i.createElement(ku,null,i.createElement(eu,{matcherIndex:r,matcher:e,onChange:t})),i.createElement(Pu,{onClick:n},i.createElement($t.b,{icon:["far","trash-alt"]})))}};qu=ju([u.e],qu);const Au=e=>i.createElement(i.Fragment,null,e.matchers.map(e=>{const t=Ou(e),n=Xo(t);return i.createElement("option",{key:t,value:t},n)})),Iu=p.j.form`
    :not(:empty) {
        margin-top: 5px;
    }
`,Du=p.j.option`
    color: ${e=>e.theme.containerWatermark};
`;let $u=class extends i.Component{constructor(){super(...arguments),this.draftMatchers=[],this.invalidMatcherState=!1,this.dropdownRef=i.createRef()}selectMatcher(e){const t=e.target.value;this.matcherClass=qa.d[t],this.updateDraftMatcher()}updateDraftMatcher(...e){this.draftMatchers=e,this.invalidMatcherState=!1}markMatcherInvalid(){this.invalidMatcherState=!0}saveMatcher(e){if(e&&e.preventDefault(),!this.draftMatchers.length)return;this.draftMatchers.forEach(e=>this.props.onAdd(e)),this.matcherClass=void 0,this.draftMatchers=[],this.invalidMatcherState=!1;const t=this.dropdownRef.current;t&&t.focus()}render(){var e;const{availableMatchers:t}=this.props,{matcherClass:n,draftMatchers:r,updateDraftMatcher:o,invalidMatcherState:s,markMatcherInvalid:a,saveMatcher:c}=this;return i.createElement(Su,null,i.createElement(ku,null,i.createElement(vn.d,{onChange:this.selectMatcher,value:null!==(e=Ou(n))&&void 0!==e?e:"",ref:this.dropdownRef},i.createElement(Du,{value:""},"Add another matcher:"),i.createElement(Du,{disabled:!0},"─────────────"),i.createElement(Au,{matchers:t})),i.createElement(Iu,{onSubmit:!s&&r.length?c:e=>e.preventDefault()},r.length>=1?i.createElement(eu,{matcherIndex:void 0,matcher:r[0],onChange:o,onInvalidState:a}):i.createElement(eu,{matcherIndex:void 0,matcherClass:n,onChange:o,onInvalidState:a}))),i.createElement(Pu,{disabled:!r.length||s,onClick:c},i.createElement($t.b,{icon:["fas","plus"]})))}};ju([d.observable],$u.prototype,"matcherClass",void 0),ju([d.observable],$u.prototype,"draftMatchers",void 0),ju([d.observable],$u.prototype,"invalidMatcherState",void 0),ju([d.action.bound],$u.prototype,"selectMatcher",null),ju([d.action.bound],$u.prototype,"updateDraftMatcher",null),ju([d.action.bound],$u.prototype,"markMatcherInvalid",null),ju([d.action.bound],$u.prototype,"saveMatcher",null),$u=ju([u.e],$u);var Mu=n(58);const Fu=e=>qa.a.get(e)||qa.a.get(e.constructor),Bu=e=>i.createElement(i.Fragment,null,e.handlers.map(e=>{const t=Fu(e),n=function(e){switch(e){case"simple":return"Return a fixed response";case"file":return"Return a response from a file";case"forward-to-host":return"Forward the request to a different host";case"passthrough":return"Pass the request on to its destination";case"req-res-transformer":return"Transform the real request or response automatically";case"request-breakpoint":return"Pause the request to manually edit it";case"response-breakpoint":return"Pause the response to manually edit it";case"request-and-response-breakpoint":return"Pause the request & response to manually edit them";case"timeout":return"Time out with no response";case"close-connection":return"Close the connection";case"reset-connection":return"Forcibly reset the connection";case"ws-passthrough":return"Pass the WebSocket through to its destination";case"ws-forward-to-host":return"Forward the WebSocket to a different host";case"ws-reject":return"Reject the WebSocket setup request";case"ws-listen":return"Accept the WebSocket but send no messages";case"ws-echo":return"Echo all messages";case"eth-call-result":return"Return a fixed eth_call result";case"eth-number-result":case"eth-hash-result":return"Return a fixed value";case"eth-receipt-result":return"Return a fixed transaction receipt";case"eth-block-result":return"Return fixed Ethereum block data";case"eth-error":return"Return an Ethereum error response";case"ipfs-cat-text":return"Return fixed IPFS content";case"ipfs-cat-file":return"Return IPFS content from a file";case"ipfs-add-result":return"Return a fixed IPFS add result";case"ipns-resolve-result":return"Return a fixed IPNS resolved address";case"ipns-publish-result":return"Return a fixed succesful IPNS result";case"ipfs-pins-result":return"Return a fixed IPFS pinning result";case"ipfs-pin-ls-result":return"Return a fixed list of IPFS pins";case"wait-for-duration":return"Sleep for a given duration";case"wait-for-rtc-data-channel":return"Wait for a data channel to be opened";case"wait-for-rtc-track":return"Wait for a media track to be opened";case"wait-for-rtc-media":return"Wait for any media to be received";case"wait-for-rtc-message":return"Wait for a data message to be received";case"create-rtc-data-channel":return"Create a data channel";case"send-rtc-data-message":return"Send a data message";case"close-rtc-connection":return"Close the WebRTC connection";case"echo-rtc":return"Echo all messages and media";case"rtc-dynamic-proxy":return"Proxy all traffic to the real remote peer";case"json-rpc-response":case"rtc-peer-proxy":case"callback":case"stream":throw new Error(e+" handler should not be used directly");default:throw new S.a(e)}}(t);return i.createElement("option",{key:t,value:t},n)})),Nu=Object(p.j)(vn.d)`
    &:not(:first-of-type) {
        margin-top: 10px;
    }
`,Lu=Object(u.d)("rulesStore","accountStore")(Object(u.e)(e=>{let[t,n]=s.partition(e.availableHandlers,t=>e.accountStore.isPaidUser||!Object(qa.q)(e.ruleType,t));return t=s.sortBy(t,e=>Fu(e).includes("breakpoint")?0:1),i.createElement(Nu,{value:Fu(e.value),onChange:t=>{const n=((e,t)=>{switch(e){case"simple":return new An.o(200);case"file":return new An.e(200,void 0,"");case"passthrough":return new An.j(t);case"forward-to-host":return new An.d("",!0,t);case"req-res-transformer":return new An.q(t,{},{});case"request-breakpoint":return new An.l(t);case"response-breakpoint":return new An.n(t);case"request-and-response-breakpoint":return new An.k(t);case"timeout":return new An.p;case"close-connection":return new An.b;case"reset-connection":return new An.m;case"ws-passthrough":return new Jd.j(t);case"ws-forward-to-host":return new Jd.e("",!0,t);case"ws-echo":return new Jd.b;case"ws-reject":return new Jd.d(400);case"ws-listen":return new Jd.c;case"eth-call-result":return new Kd.b([],[]);case"eth-number-result":return new Kd.j(0);case"eth-hash-result":return new Kd.e("0x0");case"eth-receipt-result":return new Kd.l(void 0);case"eth-block-result":return new Kd.a(void 0);case"eth-error":return new Kd.c("Unknown Error");case"ipfs-cat-text":return new Yd.e("");case"ipfs-cat-file":return new Yd.d("");case"ipfs-add-result":return new Yd.a;case"ipns-resolve-result":return new Yd.n;case"ipns-publish-result":return new Yd.m;case"ipfs-pins-result":return new Yd.l;case"ipfs-pin-ls-result":return new Yd.k;case"rtc-dynamic-proxy":return new Mu.c;case"echo-rtc":return new Mu.d;case"close-rtc-connection":return new Mu.a;case"wait-for-rtc-media":return new Mu.k;case"wait-for-duration":return new Mu.j(0);case"wait-for-rtc-data-channel":return new Mu.i;case"wait-for-rtc-message":return new Mu.l;case"create-rtc-data-channel":return new Mu.b("mock-channel");case"send-rtc-data-message":return new Mu.h(void 0,"");default:throw new S.a(e)}})(t.target.value,e.rulesStore);e.onChange(n)}},i.createElement(Bu,{handlers:t}),n.length&&i.createElement("optgroup",{label:"With HTTP Toolkit Pro:"},i.createElement(Bu,{handlers:n})))}));var Uu,Wu,zu=n(165),_u=n(251),Vu=n(130),Gu=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Ju=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class Ku extends i.Component{}const Yu=p.j.div`
    margin-top: 10px;
    font-size: ${e=>e.theme.textSize};
`,Qu=p.j.p`
    font-size: ${e=>e.theme.textSize};
    line-height: 1.3;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-style: italic;
    overflow-wrap: break-word;

    &:not(:first-child) {
        margin-top: 10px;
    }
`;function Xu(e){const{handler:t,onChange:n,onInvalidState:r}=e,o={ruleType:e.ruleType,handler:t,onChange:n,onInvalidState:r||s.noop},a=Object(qa.h)(t);switch(a){case"simple":return i.createElement(op,Object.assign({},o));case"file":return i.createElement(cp,Object.assign({},o));case"forward-to-host":case"ws-forward-to-host":return i.createElement(dp,Object.assign({},o,{handlerKey:a}));case"passthrough":case"ws-passthrough":return i.createElement(Tp,Object.assign({},o));case"req-res-transformer":return i.createElement(fp,Object.assign({},o));case"request-breakpoint":return i.createElement(jp,Object.assign({},o));case"response-breakpoint":return i.createElement(Op,Object.assign({},o));case"request-and-response-breakpoint":return i.createElement(Sp,Object.assign({},o));case"timeout":return i.createElement(kp,Object.assign({},o));case"close-connection":return i.createElement(Pp,Object.assign({},o));case"reset-connection":return i.createElement(Rp,Object.assign({},o));case"ws-echo":return i.createElement(Hp,Object.assign({},o));case"ws-reject":return i.createElement(op,Object.assign({},o));case"ws-listen":return i.createElement(qp,Object.assign({},o));case"eth-call-result":return i.createElement(Ip,Object.assign({},o));case"eth-number-result":return i.createElement(Dp,Object.assign({},o));case"eth-hash-result":return i.createElement($p,Object.assign({},o));case"eth-receipt-result":return i.createElement(Fp,Object.assign({},o));case"eth-block-result":return i.createElement(Bp,Object.assign({},o));case"eth-error":return i.createElement(Np,Object.assign({},o));case"ipfs-cat-text":return i.createElement(Lp,Object.assign({},o));case"ipfs-cat-file":return i.createElement(Up,Object.assign({},o));case"ipfs-add-result":return i.createElement(Wp,Object.assign({},o));case"ipns-resolve-result":return i.createElement(zp,Object.assign({},o));case"ipns-publish-result":return i.createElement(_p,Object.assign({},o));case"ipfs-pins-result":return i.createElement(Vp,Object.assign({},o));case"ipfs-pin-ls-result":return i.createElement(Gp,Object.assign({},o));case"rtc-dynamic-proxy":return i.createElement(Tp,Object.assign({},o));case"echo-rtc":return i.createElement(Jp,Object.assign({},o));case"close-rtc-connection":return i.createElement(Kp,Object.assign({},o));case"wait-for-rtc-media":return i.createElement(Yp,Object.assign({},o));case"wait-for-duration":return i.createElement(Qp,Object.assign({},o));case"wait-for-rtc-data-channel":return i.createElement(Xp,Object.assign({},o));case"wait-for-rtc-message":return i.createElement(Zp,Object.assign({},o));case"create-rtc-data-channel":return i.createElement(eh,Object.assign({},o));case"send-rtc-data-message":return i.createElement(th,Object.assign({},o));default:throw new S.a(a)}}const Zu=p.j.h2`
    margin-bottom: 5px;
    &:not(:first-child) {
        margin-top: 10px;
    }

    text-transform: uppercase;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    width: 100%;
`,ep=Object(p.j)(vn.d)`
    font-size: ${e=>e.theme.textSize};
    width: auto;
`,tp=Object(p.j)(vn.e)`
    width: 100%;
    box-sizing: border-box;
`,np=p.j.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 5px 0;

    > ${Zu} {
        align-self: flex-end;
        flex-grow: 1;
        margin-bottom: 0;
        margin: 0;
    }

    > button {
        padding-top: 0;
        padding-bottom: 0;
    }
`,rp=p.j.div`
    margin-top: 5px;

    > div {
        margin-top: 5px;
        border-radius: 4px;
        border: solid 1px ${e=>e.theme.containerBorder};
        padding: 1px;
    }
`;let op=class extends Ku{constructor(){super(...arguments),this.statusCode=this.props.handler instanceof An.o?this.props.handler.status:this.props.handler.statusCode,this.statusMessage=this.props.handler.statusMessage,this.rawHeaders=Object(pc.g)(this.props.handler.headers||{}),this.contentType="text",this.body=Object(P.b)(this.props.handler instanceof An.o?this.props.handler.data:this.props.handler.body)}get headers(){return Object(pc.i)(this.rawHeaders)}set headers(e){s.isEqual(e,this.headers)||void 0===e&&0===Object.keys(this.headers).length||(this.rawHeaders=Object(pc.g)(e||{}))}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>JSON.stringify(s.pick(this,["statusCode","statusMessage","headers","body"])),()=>this.updateHandler())),Object(u.c)(this,Object(d.autorun)(()=>{const{status:e,statusMessage:t}=this.props.handler instanceof An.o?this.props.handler:Object.assign(Object.assign({},this.props.handler),{status:this.props.handler.statusCode});Object(d.runInAction)(()=>{this.statusCode=e,this.statusMessage=t})})),Object(u.c)(this,Object(d.autorun)(()=>{const{data:e}=this.props.handler instanceof An.o?this.props.handler:{data:this.props.handler.body};Object(d.runInAction)(()=>{this.body=Object(P.b)(e)})})),Object(u.c)(this,Object(d.autorun)(()=>{const{headers:e}=this.props.handler;Object(d.runInAction)(()=>{this.headers=e})})),Object(u.c)(this,Object(d.autorun)(()=>{const e=Object(Ba.g)(Object(pc.d)(this.rawHeaders,"content-type"));e&&Object(d.runInAction)(()=>{this.contentType=e})})),Object(u.c)(this,Object(d.observe)(this,"contentType",({oldValue:e,newValue:t})=>{const n=Object(pc.d)(this.rawHeaders,"content-type"),r=Object(Ba.f)(t);if(n){e===Object(Ba.g)(n)&&Object(d.runInAction)(()=>{Object(pc.k)(this.rawHeaders,"content-type",r)})}else Object(d.runInAction)(()=>{this.rawHeaders.push(["content-type",r])})})),Object(u.c)(this,Object(d.observe)(this,"body",({oldValue:e,newValue:t})=>{const n=Object(pc.d)(this.rawHeaders,"content-length");n&&parseInt(n||"",10)===Object(P.d)(e)&&Object(d.runInAction)(()=>{Object(d.runInAction)(()=>{Object(pc.k)(this.rawHeaders,"content-length",Object(P.d)(t).toString())})})}))}get textEncoding(){return Object(P.h)(this.body)?"utf8":"binary"}render(){const{statusCode:e,statusMessage:t,rawHeaders:n,body:r}=this,o=r.toString(this.textEncoding);return i.createElement(Yu,null,i.createElement(Zu,null,"Status"),i.createElement(ql,{httpVersion:1,statusCode:e,statusMessage:t,onChange:this.setStatus}),i.createElement(Zu,null,"Headers"),i.createElement(El,{headers:n,onChange:this.onHeadersChanged}),i.createElement(np,null,i.createElement(Zu,null,"Response body"),i.createElement(Vu.a,{format:this.contentType,content:r,onFormatted:this.setBody}),i.createElement(ep,{value:this.contentType,onChange:this.setContentType},i.createElement("option",{value:"text"},"Plain text"),i.createElement("option",{value:"json"},"JSON"),i.createElement("option",{value:"xml"},"XML"),i.createElement("option",{value:"html"},"HTML"),i.createElement("option",{value:"css"},"CSS"),i.createElement("option",{value:"javascript"},"JavaScript"))),i.createElement(rp,null,i.createElement(zo,{contentId:null,language:this.contentType,value:o,onChange:this.setBody})))}setStatus(e,t){this.statusCode=e,this.statusMessage=t}onHeadersChanged(e){this.rawHeaders=e}setContentType(e){const t=e.target.value;this.contentType=t}setBody(e){this.body=Object(P.l)(e,this.textEncoding)}updateHandler(){var e;if(!this.statusCode||this.statusCode<100||this.statusCode>=1e3||this.rawHeaders.some(([e])=>!e.match(pc.b))||this.rawHeaders.some(([e,t])=>!t))return this.props.onInvalidState();this.props.onChange("http"===this.props.ruleType?new An.o(this.statusCode,this.statusMessage,this.body,this.headers):new Jd.d(this.statusCode,null!==(e=this.statusMessage)&&void 0!==e?e:Object(R.d)(this.statusCode),this.headers,this.body))}};Gu([d.observable],op.prototype,"statusCode",void 0),Gu([d.observable],op.prototype,"statusMessage",void 0),Gu([d.observable],op.prototype,"rawHeaders",void 0),Gu([d.computed],op.prototype,"headers",null),Gu([d.observable],op.prototype,"contentType",void 0),Gu([d.observable],op.prototype,"body",void 0),Gu([d.computed],op.prototype,"textEncoding",null),Gu([d.action.bound],op.prototype,"setStatus",null),Gu([d.action.bound],op.prototype,"onHeadersChanged",null),Gu([d.action.bound],op.prototype,"setContentType",null),Gu([d.action.bound],op.prototype,"setBody",null),op=Gu([u.e],op);const sp=p.j.div`
    margin-top: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
`,ap=Object(p.j)(vn.a)`
    font-size: ${e=>e.theme.textSize};
    padding: 10px 24px;

    flex-grow: 1;
    white-space: nowrap;
`,ip=p.j.div`
    margin-left: 15px;
    flex-shrink: 1;

    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-word;
`;let cp=class extends Ku{constructor(){super(...arguments),this.statusCode=this.props.handler.status,this.statusMessage=this.props.handler.statusMessage,this.headers=this.props.handler.headers||{},this.filePath=(this.props.handler.filePath||"").toString(),this.selectFile=()=>Ju(this,void 0,void 0,(function*(){const e=yield Object(Mt.g)("path",[]);e&&Object(d.runInAction)(()=>{this.filePath=e})}))}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>JSON.stringify(s.pick(this,["statusCode","statusMessage","headers","filePath"])),()=>this.updateHandler())),Object(u.c)(this,Object(d.autorun)(()=>{const{status:e,statusMessage:t,headers:n,filePath:r}=this.props.handler;Object(d.runInAction)(()=>{this.statusCode=e,this.statusMessage=t,this.headers=n||{},this.filePath=r})}))}render(){const{statusCode:e,statusMessage:t,headers:n}=this;return i.createElement(Yu,null,i.createElement(Zu,null,"Status"),i.createElement(ql,{httpVersion:1,statusCode:e,statusMessage:t,onChange:this.setStatus}),i.createElement(Zu,null,"Headers"),i.createElement(Cl,{headers:n,convertToRawHeaders:pc.g,convertFromRawHeaders:pc.i,onChange:this.onHeadersChanged}),i.createElement(Zu,null,"Response body"),i.createElement(sp,null,i.createElement(ap,{onClick:this.selectFile},this.filePath?"Change file":i.createElement(i.Fragment,null,"Select file ",i.createElement($t.e,null))),this.filePath&&i.createElement(ip,null,this.filePath)),i.createElement(Qu,null,"All matching requests will receive a ",this.statusCode," response, with the response body containing the contents of the selected file."),i.createElement(Qu,null,"This file will be read fresh for each request, so future changes to the file will immediately affect matching requests."))}setStatus(e,t){this.statusCode=e,this.statusMessage=t}onHeadersChanged(e){this.headers=e}updateHandler(){if(!this.statusCode||this.statusCode<100||this.statusCode>=1e3||s.some(Object.keys(this.headers),e=>!e.match(pc.b)))return this.props.onInvalidState();this.props.onChange(new An.e(this.statusCode,this.statusMessage,this.filePath,this.headers))}};Gu([d.observable],cp.prototype,"statusCode",void 0),Gu([d.observable],cp.prototype,"statusMessage",void 0),Gu([d.observable],cp.prototype,"headers",void 0),Gu([d.observable],cp.prototype,"filePath",void 0),Gu([d.action.bound],cp.prototype,"setStatus",null),Gu([d.action.bound],cp.prototype,"onHeadersChanged",null),cp=Gu([u.e],cp);const lp=Object(p.j)(vn.e)`
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
`;let dp=class extends Ku{constructor(){super(...arguments),this.updateHostHeader=!0}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.handler?this.props.handler.forwarding.targetHost:"",t=!this.props.handler||this.props.handler.forwarding.updateHostHeader;Object(d.runInAction)(()=>{this.targetHost=e,this.updateHostHeader=!!t})}))}render(){const{targetHost:e,updateHostHeader:t,error:n,onTargetChange:r,onUpdateHeaderChange:o}=this,{targetHost:s}=this.props.handler.forwarding,a="ws-forward-to-host"===this.props.handlerKey?"WebSocket":"request";return i.createElement(Yu,null,i.createElement(Zu,null,"Replacement host"),i.createElement(lp,{value:e||"",invalid:!!n,spellCheck:!1,onChange:r}),i.createElement(Zu,null,"Host header"),i.createElement(ep,{value:t.toString(),onChange:o,title:Yn`
                    Most servers will not accept ${a}s that arrive
                    with the wrong host header, so it's typically useful
                    to automatically change it to match the new host
                `},i.createElement("option",{value:"true"},"Update the host header automatically (recommended)"),i.createElement("option",{value:"false"},"Leave the host header untouched")),s&&i.createElement(Qu,null,"All matching ",a,"s will be forwarded to ",s,", keeping their existing path",s.includes("://")?"":", protocol,"," and query string.",t?" Their host header will be automatically updated to match.":""))}updateHandler(){try{if(!this.targetHost)throw new Error("A target host is required");let e;const t=this.targetHost.match(/^(\w+):\/\//);if(t){const n="ws-forward-to-host"===this.props.handlerKey?["ws","wss"]:["http","https"];if(!n.includes(t[1].toLowerCase()))throw new Error(`The protocol must be either ${n[0]} or ${n[1]}`);e=this.targetHost.slice(t[0].length)}else e=this.targetHost;if(e.includes("/"))throw new Error("The replacement host shouldn't include a path, since it won't be used");if(e.includes("?"))throw new Error("The replacement host shouldn't include a query string, since it won't be used");const n="ws-forward-to-host"===this.props.handlerKey?Jd.e:An.d;this.props.onChange(new n(this.targetHost,this.updateHostHeader,this.props.rulesStore)),this.error=void 0}catch(e){throw console.log(e),this.error=Object(S.b)(e),this.props.onInvalidState&&this.props.onInvalidState(),e}}onTargetChange(e){this.targetHost=e.target.value;try{this.updateHandler(),e.target.setCustomValidity("")}catch(t){e.target.setCustomValidity(Object(S.b)(t).message)}e.target.reportValidity()}onUpdateHeaderChange(e){this.updateHostHeader="true"===e.target.value;try{this.updateHandler()}catch(e){}}};Gu([d.observable],dp.prototype,"error",void 0),Gu([d.observable],dp.prototype,"targetHost",void 0),Gu([d.observable],dp.prototype,"updateHostHeader",void 0),Gu([d.action.bound],dp.prototype,"onTargetChange",null),Gu([d.action.bound],dp.prototype,"onUpdateHeaderChange",null),dp=Gu([Object(u.d)("rulesStore"),u.e],dp);const up=Object(p.j)(Zu)`
    margin-top: 10px;
`,pp=p.j.hr`
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0;
    border: solid 1px ${e=>e.theme.containerWatermark};
`,hp=p.j.div`
    margin: 0 0 5px;

    ${e=>e.active&&p.f`
        border-left: solid 5px ${e=>e.theme.containerWatermark};

        &:focus-within {
            border-left: solid 5px ${e=>e.theme.primaryInputBackground};
        }

        padding-left: 5px;
        margin: 10px 0 15px;
    `}
`,mp=p.j.div`
    > :first-child {
        margin-top: 0;
    }

    padding-top: 5px;
`,gp=Object(p.j)(vn.d)`
    margin: 0;

    ${e=>"none"===e.value&&p.f`
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.mainBackground};
    `}
`;let fp=class extends Ku{constructor(){super(...arguments),this.transformRequest=this.props.handler.transformRequest||{},this.transformResponse=this.props.handler.transformResponse||{},this.transformField=e=>t=>Object(d.action)(n=>{this[e]=Object.assign(Object.assign({},this[e]),{[t]:n}),this.updateHandler()})}render(){var e,t;return i.createElement(Yu,null,i.createElement(up,null,"Request Transforms:"),i.createElement(bp,{replacementMethod:null===(e=this.transformRequest)||void 0===e?void 0:e.replaceMethod,onChange:this.transformField("transformRequest")("replaceMethod")}),i.createElement(vp,{type:"request",transform:this.transformRequest,onChange:this.transformField("transformRequest")}),i.createElement(xp,{type:"request",transform:this.transformRequest,onChange:this.transformField("transformRequest")}),i.createElement(pp,null),i.createElement(up,null,"Response Transforms:"),i.createElement(yp,{replacementStatus:null===(t=this.transformResponse)||void 0===t?void 0:t.replaceStatus,onChange:this.transformField("transformResponse")("replaceStatus")}),i.createElement(vp,{type:"response",transform:this.transformResponse,onChange:this.transformField("transformResponse")}),i.createElement(xp,{type:"response",transform:this.transformResponse,onChange:this.transformField("transformResponse")}))}updateHandler(){this.props.onChange(new An.q(this.props.rulesStore,this.transformRequest,this.transformResponse))}};Gu([d.observable],fp.prototype,"transformRequest",void 0),Gu([d.observable],fp.prototype,"transformResponse",void 0),fp=Gu([Object(u.d)("rulesStore"),u.e],fp);const bp=e=>{var t;return i.createElement(hp,{active:!!e.replacementMethod},i.createElement(gp,{value:null!==(t=e.replacementMethod)&&void 0!==t?t:"none",onChange:t=>{const n=t.target.value;"none"===n?e.onChange(void 0):e.onChange(n)}},i.createElement("option",{value:"none"},"Pass through the real request method"),zu.a.map(e=>i.createElement("option",{key:e,value:e},"Replace the request method with ",e))))},yp=e=>{const t=void 0!==e.replacementStatus?"replace":"none";return i.createElement(hp,{active:"none"!==t},i.createElement(gp,{value:null!=t?t:"none",onChange:t=>{"none"===t.target.value?e.onChange(void 0):e.onChange(200)}},i.createElement("option",{value:"none"},"Pass through the real response status"),i.createElement("option",{value:"replace"},"Replace the response status")),"replace"===t&&i.createElement(mp,null,i.createElement(ql,{statusCode:e.replacementStatus,onChange:e.onChange,httpVersion:2,statusMessage:void 0})))};let vp=Uu=class extends i.Component{constructor(){super(...arguments),this.convertResultFromRawHeaders=e=>"updateHeaders"===this.selected?Object(pc.i)(e.map(([e,t])=>[e,""===t?void 0:t])):Object(pc.i)(e),this.onTransformTypeChange=e=>{const t=e.currentTarget.value;this.clearValues(),"none"!==t&&this.props.onChange(t)({})}}get selected(){var e;return null!==(e=s.find(Uu.FIELDS,e=>void 0!==this.props.transform[e]))&&void 0!==e?e:"none"}get headers(){return"none"===this.selected?{}:this.props.transform[this.selected]||{}}render(){const{type:e}=this.props,{selected:t,convertResultFromRawHeaders:n,onTransformTypeChange:r,setHeadersValue:o}=this;return i.createElement(hp,{active:"none"!==t},i.createElement(gp,{value:t,onChange:r},i.createElement("option",{value:"none"},"Pass through the real ",e," headers"),i.createElement("option",{value:"updateHeaders"},"Update the ",e," headers"),i.createElement("option",{value:"replaceHeaders"},"Replace the ",e," headers")),"none"!==t&&i.createElement(mp,null,i.createElement(Cl,{headers:this.headers,convertToRawHeaders:pc.g,convertFromRawHeaders:n,onChange:o,allowEmptyValues:"updateHeaders"===t})))}setHeadersValue(e){this.clearValues(),"none"!==this.selected&&this.props.onChange(this.selected)(e)}clearValues(){Uu.FIELDS.forEach(e=>this.props.onChange(e)(void 0))}};vp.FIELDS=["replaceHeaders","updateHeaders"],Gu([d.computed],vp.prototype,"selected",null),Gu([d.computed],vp.prototype,"headers",null),Gu([d.action.bound],vp.prototype,"setHeadersValue",null),Gu([d.action.bound],vp.prototype,"onTransformTypeChange",void 0),Gu([d.action.bound],vp.prototype,"clearValues",null),vp=Uu=Gu([u.e],vp);let xp=Wu=class extends i.Component{constructor(){super(...arguments),this.onTransformTypeChange=e=>{const t=e.currentTarget.value;this.clearValues(),"updateJsonBody"===t?this.props.onChange("updateJsonBody")({}):"replaceBody"===t?this.props.onChange("replaceBody")(""):"replaceBodyFromFile"===t&&this.props.onChange("replaceBodyFromFile")("")},this.selectBodyReplacementFile=()=>Ju(this,void 0,void 0,(function*(){const e=yield Object(Mt.g)("path",[]);e&&Object(d.runInAction)(()=>{this.clearValues(),this.props.onChange("replaceBodyFromFile")(e)})}))}get bodyReplacementBuffer(){return Object(P.b)(this.props.transform.replaceBody)}render(){var e;const{type:t,transform:n}=this.props,{bodyReplacementBuffer:r,onTransformTypeChange:o,setBodyReplacement:a,selectBodyReplacementFile:c,setJsonBodyUpdate:l}=this,d=null!==(e=s.find(Wu.FIELDS,e=>void 0!==n[e]))&&void 0!==e?e:"none";return i.createElement(hp,{active:"none"!==d},i.createElement(gp,{value:d,onChange:o},i.createElement("option",{value:"none"},"Pass through the real ",t," body"),i.createElement("option",{value:"replaceBody"},"Replace the ",t," body with a fixed value"),i.createElement("option",{value:"replaceBodyFromFile"},"Replace the ",t," body with a file"),i.createElement("option",{value:"updateJsonBody"},"Update values within a JSON ",t," body")),"replaceBody"===d?i.createElement(wp,{type:t,body:r,updateBody:a}):"replaceBodyFromFile"===d?i.createElement(mp,null,i.createElement(sp,null,i.createElement(ap,{onClick:c},n.replaceBodyFromFile?"Change file":i.createElement(i.Fragment,null,"Select file ",i.createElement($t.e,null))),n.replaceBodyFromFile&&i.createElement(ip,null,n.replaceBodyFromFile))):"updateJsonBody"===d?i.createElement(Cp,{type:t,body:n.updateJsonBody,updateBody:l}):null)}clearValues(){Wu.FIELDS.forEach(e=>this.props.onChange(e)(void 0))}setBodyReplacement(e){this.clearValues(),this.props.onChange("replaceBody")(e)}setJsonBodyUpdate(e){this.clearValues(),this.props.onChange("updateJsonBody")(e)}};xp.FIELDS=["replaceBody","replaceBodyFromFile","updateJsonBody"],Gu([d.computed],xp.prototype,"bodyReplacementBuffer",null),Gu([d.action.bound],xp.prototype,"clearValues",null),Gu([d.action.bound],xp.prototype,"setBodyReplacement",null),Gu([d.action.bound],xp.prototype,"setJsonBodyUpdate",null),xp=Wu=Gu([u.e],xp);const wp=e=>{const[t,n]=i.useState("text");return i.createElement(mp,null,i.createElement(np,null,i.createElement(Zu,null,"Replacement ",e.type," body"),i.createElement(Vu.a,{format:t,content:e.body,onFormatted:e.updateBody}),i.createElement(ep,{value:t,onChange:e=>n(e.target.value)},i.createElement("option",{value:"text"},"Plain text"),i.createElement("option",{value:"json"},"JSON"),i.createElement("option",{value:"xml"},"XML"),i.createElement("option",{value:"html"},"HTML"),i.createElement("option",{value:"css"},"CSS"),i.createElement("option",{value:"javascript"},"JavaScript"))),i.createElement(rp,null,i.createElement(zo,{contentId:null,language:t,value:Object(P.c)(e.body),onChange:e.updateBody})))},Ep=Object(p.j)(Vu.a)`
    padding-right: 0;
`,Cp=e=>{const[t,n]=i.useState(),[r,o]=i.useState(JSON.stringify(e.body,null,2));return i.useEffect(()=>{try{e.updateBody(JSON.parse(r)),n(void 0)}catch(e){n(Object(S.b)(e))}},[r]),i.createElement(mp,null,i.createElement(np,null,i.createElement(Zu,null,"JSON ",e.type," body patch"),t&&i.createElement($t.e,{title:t.message}),i.createElement(Ep,{format:"json",content:Object(P.b)(r),onFormatted:o})),i.createElement(rp,null,i.createElement(zo,{contentId:null,language:"json",value:r,onChange:e=>o(e)})))};let Tp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"All matching ",Object(qa.o)(this.props.ruleType)?"requests":"websocket"===this.props.ruleType?"WebSockets":"webrtc"===this.props.ruleType?"data and media":Object(S.d)(this.props.ruleType)," will be transparently passed through to the upstream ","webrtc"===this.props.ruleType?"RTC peer, once one is connected":"target host","."))}};Tp=Gu([u.e],Tp);let jp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"All matching traffic will breakpoint when a request is sent."),i.createElement(Qu,null,"Once a request is breakpointed, you can edit the request URL to redirect the request elsewhere, edit the method, headers, or body before they are sent upstream, or provide your own response manually so the request is never sent onwards at all."))}};jp=Gu([u.e],jp);let Op=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"All matching traffic will breakpoint when a response is received from the upstream server."),i.createElement(Qu,null,"Once a response is breakpointed, you can rewrite the received message, to edit the status code, headers or body before they're returned to the downstream HTTP client."))}};Op=Gu([u.e],Op);let Sp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"All matching traffic will breakpoint when a request is sent, and when a response is received."),i.createElement(Qu,null,"From a request breakpoint, you can edit the request URL to redirect the request elsewhere, edit the method, headers, or body before they are sent upstream, or provide your own response manually so the request is never sent onwards at all."),i.createElement(Qu,null,"From a response breakpoint, you can rewrite a received response, to edit the status code, headers or body before they're returned to the downstream HTTP client."))}};Sp=Gu([u.e],Sp);let kp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"When a matching ",Object(qa.o)(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?()=>{throw new Error("Not compatible with WebRTC rules")}:Object(S.d)(this.props.ruleType)," is received, the server will keep the connection open but do nothing. With no data or response, most clients will time out and abort the request after sufficient time has passed."))}};kp=Gu([u.e],kp);let Pp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"As soon as a matching ",Object(qa.o)(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?()=>{throw new Error("Not compatible with WebRTC rules")}:Object(S.d)(this.props.ruleType)," is received, the connection will be cleanly closed, with no response."))}};Pp=Gu([u.e],Pp);let Rp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"As soon as a matching ",Object(qa.o)(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?()=>{throw new Error("Not compatible with WebRTC rules")}:Object(S.d)(this.props.ruleType)," is received, the connection will be killed with a TCP RST packet (or a RST_STREAM frame, for HTTP/2 requests)."))}};Rp=Gu([u.e],Rp);let Hp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"The WebSocket will be opened successfully, but not forwarded upstream, and every message that's sent will be echoed back to the client until the client closes the connection."))}};Hp=Gu([u.e],Hp);let qp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"The WebSocket will be opened successfully, but not forwarded upstream. All messages from the client will be accepted, but no responses will be sent."))}};qp=Gu([u.e],qp);const Ap=`(${_u.a.join("|")})(\\[\\])?`;let Ip=class extends Ku{constructor(){super(...arguments),this.typeValuePairs=[]}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{outputTypes:e,values:t}=this.props.handler,n=t.map(e=>Array.isArray(e)?e.join(", "):null==e?void 0:e.toString());Object(d.runInAction)(()=>{this.typeValuePairs=s.zip(e,n).map(([e,t])=>({key:e,value:t}))})}))}render(){const{typeValuePairs:e}=this,t=this.props.handler.result.result;return i.createElement(Yu,null,i.createElement(Zu,null,"Eth_Call return values"),i.createElement(bl.a,{pairs:e,onChange:this.onChange,keyPlaceholder:"Return value type (e.g. string, int256, etc)",keyPattern:Ap,valuePlaceholder:"Return value",allowEmptyValues:!0}),this.error?i.createElement(i.Fragment,null,i.createElement(Qu,null,i.createElement($t.e,null)," Could not encode data. ",this.error.message)):i.createElement(i.Fragment,null,i.createElement(Qu,null,"Encoded return value:"),i.createElement(en.e,null,t)),i.createElement(Qu,null,"All matching Ethereum JSON-RPC calls will be intercepted, and the encoded output above returned directly, without forwarding the call to the real Ethereum node."))}onChange(e){this.typeValuePairs=e;const t=this.typeValuePairs.map(({key:e,value:t})=>"string[]"===e?{key:e,value:t.split(/,\s?/g)}:e.startsWith("bytes")||e.endsWith("[]")?{key:e,value:t.split(/,\s?/g).map(e=>parseInt(e,10))}:{key:e,value:t});try{this.props.onChange(new Kd.b(t.map(({key:e})=>e),t.map(({value:e})=>e))),this.error=void 0}catch(e){if(!Object(S.c)(e))throw e;if("INVALID_ARGUMENT"===e.code){const{argument:t,value:n,reason:r}=e;this.error="type"===t||"param"===t?new Error("Invalid type: "+n):"value"===t?new Error(`Invalid value: '${n}' (${r})`):e}else this.error=e;this.props.onInvalidState()}}};Gu([d.observable],Ip.prototype,"typeValuePairs",void 0),Gu([d.observable],Ip.prototype,"error",void 0),Gu([d.action.bound],Ip.prototype,"onChange",null),Ip=Gu([u.e],Ip);let Dp=class extends Ku{constructor(){super(...arguments),this.value=this.props.handler.value}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{value:e}=this.props.handler;Object(d.runInAction)(()=>{0===e&&""===this.value||(this.value=e)})}))}render(){const{value:e}=this;return i.createElement(Yu,null,i.createElement(Zu,null,"Return value"),i.createElement(tp,{type:"number",min:0,value:e,onChange:this.onChange}),i.createElement(Qu,null,"All matching Ethereum JSON-RPC requests will be intercepted, and ",this.value," will be returned directly, without forwarding the call to the real Ethereum node."))}onChange(e){const t=e.target.value,n=""!==t?parseInt(t,10):"";s.isNaN(n)||(this.value=n,this.props.onChange(new Kd.j(n||0)))}};Gu([d.observable],Dp.prototype,"value",void 0),Gu([d.action.bound],Dp.prototype,"onChange",null),Dp=Gu([u.e],Dp);let $p=class extends Ku{constructor(){super(...arguments),this.value=this.props.handler.value}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{value:e}=this.props.handler;Object(d.runInAction)(()=>{this.value=e})}))}render(){const{value:e}=this;return i.createElement(Yu,null,i.createElement(Zu,null,"Return hash value"),i.createElement(tp,{type:"text",value:e,onChange:this.onChange}),i.createElement(Qu,null,"All matching Ethereum JSON-RPC requests will be intercepted, and ",this.value," will be returned directly, without forwarding the call to the real Ethereum node."),i.createElement(Qu,null,i.createElement($t.e,null)," In most cases, you will also want to add a rule for transaction receipts matching this value, to mock subsequent queries for the transaction's result."))}onChange(e){const t=e.target.value;/^0x[0-9a-fA-F]*$/.test(t)&&this.props.onChange(new Kd.e(e.target.value))}};Gu([d.observable],$p.prototype,"value",void 0),Gu([d.action.bound],$p.prototype,"onChange",null),$p=Gu([u.e],$p);let Mp=class extends Ku{constructor(){super(...arguments),this.valueString=JSON.stringify(this.props.valueGetter(this.props.handler),null,2)}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>JSON.stringify(this.props.valueGetter(this.props.handler),null,2),e=>{let t;try{t=JSON.stringify(JSON.parse(this.valueString),null,2)}catch(e){}e!==t&&Object(d.runInAction)(()=>{this.valueString=e,this.error=void 0})}))}render(){const{valueString:e,error:t}=this,{name:n,explanation:r}=this.props;return i.createElement(Yu,null,i.createElement(np,null,i.createElement(Zu,null,n),t&&i.createElement($t.e,{title:t.message}),i.createElement(Ep,{format:"json",content:Object(P.b)(e),onFormatted:this.onChange})),i.createElement(rp,null,i.createElement(zo,{contentId:null,language:"json",value:e,onChange:this.onChange})),r.map((e,t)=>i.createElement(Qu,{key:t},e)))}onChange(e){this.valueString=e;try{const t=JSON.parse(e);this.props.onChange(this.props.handlerFactory(t)),this.error=void 0}catch(e){if(!Object(S.c)(e))throw e;this.error=e,this.props.onInvalidState()}}};Gu([d.observable],Mp.prototype,"valueString",void 0),Gu([d.observable],Mp.prototype,"error",void 0),Gu([d.action.bound],Mp.prototype,"onChange",null),Mp=Gu([u.e],Mp);let Fp=class extends Ku{render(){return i.createElement(Mp,Object.assign({name:"Ethereum Transaction Receipt",explanation:["All matching Ethereum JSON-RPC requests will be intercepted, and this transaction receipt will returned directly, without forwarding the call to the real Ethereum node."],handlerFactory:e=>new Kd.l(e),valueGetter:e=>e.receiptValue},this.props))}};Fp=Gu([u.e],Fp);let Bp=class extends Ku{render(){return i.createElement(Mp,Object.assign({name:"Ethereum Block Data",explanation:["All matching Ethereum JSON-RPC requests will be intercepted, and this fixed block data will returned directly, without forwarding the call to the real Ethereum node."],handlerFactory:e=>new Kd.a(e),valueGetter:e=>e.blockValue},this.props))}};Bp=Gu([u.e],Bp);let Np=class extends Ku{constructor(){super(...arguments),this.errorMessage=this.props.handler.message,this.errorCode=this.props.handler.code||"",this.errorData=this.props.handler.data,this.errorName=this.props.handler.name}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>JSON.stringify(s.pick(this,["errorMessage","errorCode","errorData","errorName"])),()=>this.updateHandler())),Object(u.c)(this,Object(d.autorun)(()=>{const{message:e,code:t,data:n,name:r}=this.props.handler;Object(d.runInAction)(()=>{this.errorMessage=e,this.errorData=n,this.errorName=r,""===this.errorCode&&0===t||(this.errorCode=t)})}))}render(){const{errorMessage:e,errorCode:t,errorData:n,errorName:r}=this;return i.createElement(Yu,null,i.createElement(Zu,null,"Error Message"),i.createElement(tp,{type:"text",value:e,onChange:this.onChangeMessage}),i.createElement(Zu,null,"Error Code"),i.createElement(tp,{type:"number",value:t,onChange:this.onChangeCode}),i.createElement(Zu,null,"Error Data"),i.createElement(tp,{type:"text",value:n,onChange:this.onChangeData}),i.createElement(Zu,null,"Error Name"),i.createElement(tp,{type:"text",value:r||"",onChange:this.onChangeName}),i.createElement(Qu,null,"All matching Ethereum JSON-RPC requests will be intercepted, and this error response will returned directly, without forwarding the call to the real Ethereum node."))}onChangeMessage(e){this.errorMessage=e.target.value}onChangeCode(e){const t=e.target.value;if(!t)return void(this.errorCode="");const n=parseInt(t,10);s.isNaN(n)||(this.errorCode=n)}onChangeData(e){this.errorData=e.target.value}onChangeName(e){this.errorName=e.target.value}updateHandler(){this.props.onChange(new Kd.c(this.errorMessage,this.errorData,this.errorCode||0,this.errorName))}};Gu([d.observable],Np.prototype,"inputError",void 0),Gu([d.observable],Np.prototype,"errorMessage",void 0),Gu([d.observable],Np.prototype,"errorCode",void 0),Gu([d.observable],Np.prototype,"errorData",void 0),Gu([d.observable],Np.prototype,"errorName",void 0),Gu([d.action.bound],Np.prototype,"onChangeMessage",null),Gu([d.action.bound],Np.prototype,"onChangeCode",null),Gu([d.action.bound],Np.prototype,"onChangeData",null),Gu([d.action.bound],Np.prototype,"onChangeName",null),Np=Gu([u.e],Np);let Lp=class extends Ku{constructor(){super(...arguments),this.contentType="text",this.body=Object(P.b)(this.props.handler.data)}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{data:e}=this.props.handler;Object(d.runInAction)(()=>{this.body=Object(P.b)(e)})}))}get textEncoding(){return Object(P.h)(this.body)?"utf8":"binary"}render(){const{body:e}=this,t=e.toString(this.textEncoding);return i.createElement(Yu,null,i.createElement(np,null,i.createElement(Zu,null,"IPFS content"),i.createElement(Vu.a,{format:this.contentType,content:e,onFormatted:this.setBody}),i.createElement(ep,{value:this.contentType,onChange:this.setContentType},i.createElement("option",{value:"text"},"Plain text"),i.createElement("option",{value:"json"},"JSON"),i.createElement("option",{value:"xml"},"XML"),i.createElement("option",{value:"html"},"HTML"),i.createElement("option",{value:"css"},"CSS"),i.createElement("option",{value:"javascript"},"JavaScript"))),i.createElement(rp,null,i.createElement(zo,{contentId:null,language:this.contentType,value:t,onChange:this.setBody})))}setContentType(e){const t=e.target.value;this.contentType=t}setBody(e){this.body=Object(P.l)(e,this.textEncoding),this.props.onChange(new Yd.e(this.body))}};Gu([d.observable],Lp.prototype,"contentType",void 0),Gu([d.observable],Lp.prototype,"body",void 0),Gu([d.computed],Lp.prototype,"textEncoding",null),Gu([d.action.bound],Lp.prototype,"setContentType",null),Gu([d.action.bound],Lp.prototype,"setBody",null),Lp=Gu([u.e],Lp);let Up=class extends Ku{constructor(){super(...arguments),this.filePath=(this.props.handler.filePath||"").toString(),this.selectFile=()=>Ju(this,void 0,void 0,(function*(){const e=yield Object(Mt.g)("path",[]);e&&(Object(d.runInAction)(()=>{this.filePath=e}),this.props.onChange(new Yd.d(this.filePath)))}))}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{filePath:e}=this.props.handler;Object(d.runInAction)(()=>{this.filePath=e})}))}render(){return i.createElement(Yu,null,i.createElement(Zu,null,"IPFS content"),i.createElement(sp,null,i.createElement(ap,{onClick:this.selectFile},this.filePath?"Change file":i.createElement(i.Fragment,null,"Select file ",i.createElement($t.e,null))),this.filePath&&i.createElement(ip,null,this.filePath)),i.createElement(Qu,null,"All matching requests will receive a successful response containing the contents of the selected file."),i.createElement(Qu,null,"This file will be read fresh for each request, so future changes to the file will immediately affect matching requests."))}};Gu([d.observable],Up.prototype,"filePath",void 0),Up=Gu([u.e],Up);let Wp=class extends Ku{constructor(){super(...arguments),this.resultPairs=[]}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{result:e}=this.props.handler;Object(d.runInAction)(()=>{this.resultPairs=e.map(({Name:e,Hash:t})=>({key:e,value:t}))})}))}render(){const{resultPairs:e}=this;return i.createElement(Yu,null,i.createElement(Zu,null,"IPFS Add Results"),i.createElement(bl.a,{pairs:e,onChange:this.onChange,keyPlaceholder:"Name of the added file",valuePlaceholder:"Hash of the added file"}),i.createElement(Qu,null,"All matching IPFS Add calls will be intercepted, and the above results will always be returned directly, without forwarding the call to the real IPFS node."))}onChange(e){this.resultPairs=e,this.props.onChange(new Yd.a(this.resultPairs.map(({key:e,value:t})=>({Name:e,Hash:t}))))}};Gu([d.observable],Wp.prototype,"resultPairs",void 0),Gu([d.action.bound],Wp.prototype,"onChange",null),Wp=Gu([u.e],Wp);let zp=class extends Ku{render(){return i.createElement(Mp,Object.assign({name:"IPNS Resolve Result",explanation:["All matching requests will be receive this data as a successful IPNS resolution."],handlerFactory:e=>new Yd.n(e),valueGetter:e=>e.result},this.props))}};zp=Gu([u.e],zp);let _p=class extends Ku{render(){return i.createElement(Mp,Object.assign({name:"IPNS Publish Result",explanation:["All matching requests will be receive this data as a successful IPNS publish result."],handlerFactory:e=>new Yd.m(e),valueGetter:e=>e.result},this.props))}};_p=Gu([u.e],_p);let Vp=class extends Ku{render(){return i.createElement(Mp,Object.assign({name:"IPFS Pinning Result",explanation:["All matching requests will be receive this data as a successful response."],handlerFactory:e=>new Yd.l(e),valueGetter:e=>e.result},this.props))}};Vp=Gu([u.e],Vp);let Gp=class extends Ku{constructor(){super(...arguments),this.resultPairs=[]}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{result:e}=this.props.handler;Object(d.runInAction)(()=>{this.resultPairs=e.map(({Type:e,Cid:t})=>({key:e,value:t}))})}))}render(){const{resultPairs:e}=this;return i.createElement(Yu,null,i.createElement(Zu,null,"IPFS Pin Ls Results"),i.createElement(bl.a,{pairs:e,onChange:this.onChange,keyPlaceholder:"Type of pin (recursive, direct, indirect)",valuePlaceholder:"CID of the pinned content"}),i.createElement(Qu,null,"All matching IPFS Pin Ls calls will be intercepted, and the above results will always be returned directly, without forwarding the call to the real IPFS node."))}onChange(e){this.resultPairs=e,this.props.onChange(new Yd.k(this.resultPairs.map(({key:e,value:t})=>({Type:e,Cid:t}))))}};Gu([d.observable],Gp.prototype,"resultPairs",void 0),Gu([d.action.bound],Gp.prototype,"onChange",null),Gp=Gu([u.e],Gp);let Jp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"Echo all sent data messages and all streamed video and audio media back to the intercepted peer wherever possible, until the connection is closed. No data will be forwarded to any connected remote peer."),i.createElement(Qu,null,"Note that in some cases echoing isn't possible - e.g. if the client opens a one-way video stream - in which case that data will simply be dropped."))}};Jp=Gu([u.e],Jp);let Kp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"Immediately close the WebRTC connection, with no further response and no data forwarded to any connected remote peer."))}};Kp=Gu([u.e],Kp);let Yp=class extends Ku{render(){return i.createElement(Yu,null,i.createElement(Qu,null,"Wait until the next WebRTC media data is sent by the client."))}};Yp=Gu([u.e],Yp);let Qp=class extends Ku{constructor(){super(...arguments),this.duration=this.props.handler.durationMs}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{durationMs:e}=this.props.handler;Object(d.runInAction)(()=>{0===e&&""===this.duration||(this.duration=e)})}))}render(){const{duration:e}=this;return i.createElement(Yu,null,"Wait for ",i.createElement(vn.e,{type:"number",min:"0",placeholder:"Duration (ms)",value:e,onChange:this.onChange})," milliseconds.")}onChange(e){const t=e.target.value,n=""===t?"":parseInt(t,10);s.isNaN(n)||(this.duration=n,this.props.onChange(new Mu.j(n||0)))}};Gu([d.observable],Qp.prototype,"duration",void 0),Gu([d.action.bound],Qp.prototype,"onChange",null),Qp=Gu([u.e],Qp);let Xp=class extends Ku{render(){const{channelLabel:e}=this.props.handler;return i.createElement(Yu,null,i.createElement(Zu,null,"Channel Label"),i.createElement(tp,{placeholder:"The channel to wait for, or nothing to wait for any channel",value:null!=e?e:"",onChange:this.onChange}),i.createElement(Qu,null,"Wait until the client opens a WebRTC data channel ",e?`with the label "${e}"`:"with any label","."))}onChange(e){const t=e.target.value;this.props.onChange(new Mu.i(t||""))}};Gu([d.action.bound],Xp.prototype,"onChange",null),Xp=Gu([u.e],Xp);let Zp=class extends Ku{render(){const{channelLabel:e}=this.props.handler;return i.createElement(Yu,null,i.createElement(Zu,null,"Channel Label"),i.createElement(tp,{placeholder:"The channel to watch for messages, or nothing to watch every channel",value:null!=e?e:"",onChange:this.onChange}),i.createElement(Qu,null,"Wait until the client sends a WebRTC data message ",e?`on a channel with the label "${e}"`:"on any data channel","."))}onChange(e){const t=e.target.value;this.props.onChange(new Mu.l(t||""))}};Gu([d.action.bound],Zp.prototype,"onChange",null),Zp=Gu([u.e],Zp);let eh=class extends Ku{render(){const{channelLabel:e}=this.props.handler;return i.createElement(Yu,null,i.createElement(Zu,null,"Channel Label"),i.createElement(tp,{placeholder:"A label for the channel that will be created",value:e,onChange:this.onChange}),i.createElement(Qu,null,'Create a data channel on the WebRTC connection labelled "',e,'".'))}onChange(e){const t=e.target.value;this.props.onChange(new Mu.b(t))}};Gu([d.action.bound],eh.prototype,"onChange",null),eh=Gu([u.e],eh);let th=class extends Ku{constructor(){super(...arguments),this.channelLabel=this.props.handler.channelLabel,this.contentType="text",this.message=Object(P.b)(this.props.handler.message)}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{channelLabel:e,message:t}=this.props.handler;Object(d.runInAction)(()=>{this.channelLabel=e,this.message=Object(P.b)(t)})}))}get textEncoding(){return Object(P.h)(this.message)?"utf8":"binary"}render(){const{channelLabel:e,message:t}=this,n=t.toString(this.textEncoding);return i.createElement(Yu,null,i.createElement(Zu,null,"Channel Label"),i.createElement(tp,{placeholder:"The channel to send the message to, or nothing to send on all open channels",value:null!=e?e:"",onChange:this.setChannelLabel}),i.createElement(np,null,i.createElement(Zu,null,"Message content"),i.createElement(Vu.a,{format:this.contentType,content:t,onFormatted:this.setMessage}),i.createElement(ep,{value:this.contentType,onChange:this.setContentType},i.createElement("option",{value:"text"},"Plain text"),i.createElement("option",{value:"json"},"JSON"),i.createElement("option",{value:"xml"},"XML"))),i.createElement(rp,null,i.createElement(zo,{contentId:null,language:this.contentType,value:n,onChange:this.setMessage})),i.createElement(Qu,null,"Send ",0===t.length?"an empty":"the above"," message on ",e?`any open channel with the label "${e}"`:"every open data channel","."))}setContentType(e){const t=e.target.value;this.contentType=t}setChannelLabel(e){const t=e.target.value;this.channelLabel=t||void 0,this.updateHandler()}setMessage(e){this.message=Object(P.l)(e,this.textEncoding),this.updateHandler()}updateHandler(){this.props.onChange(new Mu.h(this.channelLabel,this.message.toString(this.textEncoding)))}};Gu([d.observable],th.prototype,"channelLabel",void 0),Gu([d.observable],th.prototype,"contentType",void 0),Gu([d.observable],th.prototype,"message",void 0),Gu([d.computed],th.prototype,"textEncoding",null),Gu([d.action.bound],th.prototype,"setContentType",null),Gu([d.action.bound],th.prototype,"setChannelLabel",null),Gu([d.action.bound],th.prototype,"setMessage",null),th=Gu([u.e],th);const nh=p.j.h2`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    flex-basis: 100%;
    width: 100%;
    box-sizing: border-box;

    /* Required to avoid overflow trimming hanging chars */
    padding: 5px;
    margin: -5px;

    font-style: italic;
`,rh=p.j.div`
    flex-basis: 100%;
    margin: -4px;
`,oh=Object(p.j)(vn.e)`
    width: 30%;
    margin-right: 5px;
    margin-bottom: 10px;
`,sh=Object(p.j)($d)`
    font-size: 1em;
    padding: 0;
    vertical-align: middle;
`,ah=e=>{var t;return i.createElement(rh,null,i.createElement(oh,{autoFocus:!0,value:e.value,placeholder:"A custom name for this rule",onChange:t=>{e.onEditTitle(t.target.value)},onClick:e=>e.stopPropagation(),onKeyPress:t=>{"Enter"===t.key&&e.onSave(t)}}),i.createElement(sh,{title:"Reset changes to rule name",icon:["fas","undo"],disabled:!e.onCancel,onClick:Nt(null!==(t=e.onCancel)&&void 0!==t?t:()=>{})}))};var ih=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const ch=Object(p.j)(Ut.d)`
    margin-top: 10px;

    width: calc(100% - ${e=>40*e.depth}px);
    margin-left: ${e=>40*e.depth}px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: ${e=>e.theme.headingSize};

    overflow: initial;

    ${e=>e.collapsed&&!e.disabled?p.f`
            user-select: none;

            &:hover {
                ${Dd} {
                    display: flex;
                }

                ${Id} {
                    opacity: 0.5;
                }

                box-shadow: 0 2px 15px 0 rgba(0,0,0,${e=>1.5*e.theme.boxShadowAlpha});
            }

            ${e.deactivated&&"opacity: 0.6;"}
        `:e.collapsed?"":p.f`
                ${Dd} {
                    display: flex;
                }
            `}

    border-left: 5px solid ${e=>e.borderColor};

    &:focus {
        outline: none;
        box-shadow: 0 0 1px 2px ${e=>us.f(e.theme.popColor,.5)};
        background-color: ${e=>e.theme.mainBackground};
    }
`,lh=Object(p.j)(e=>i.createElement(ch,Object.assign({collapsed:!0,borderColor:"transparent"},s.omit(e,"onAdd"),{tabIndex:0,depth:0,onClick:e.onAdd,onKeyPress:Bt}),i.createElement($t.b,{icon:["fas","plus"]}),"Add a new rule to rewrite requests or responses"))`
    > svg {
        margin: 0 5px;
    }

    margin-top: 20px;

    justify-content: center;
    background-color: ${e=>us.f(e.theme.mainBackground,.4)};
    box-shadow: 0 0 4px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,dh=p.j.section`
    align-self: stretch;
    flex-grow: 1;
    flex-basis: 0;
    max-width: calc(50% - 30px);
`,uh=p.j.h1`
    ${e=>!e.collapsed&&p.f`
        opacity: 0.3;
    `}

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    /* Required to avoid overflow trimming hanging chars */
    padding: 5px;
    margin: -5px;
`,ph=Object(p.j)($t.b).attrs(()=>({icon:["fas","arrow-left"]}))`
    transform: rotate(180deg);
    padding: 0 15px;
`,hh=p.j.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`,mh=p.j.div`
    margin-top: 20px;
    margin-bottom: 20px;
`,gh=Object(p.j)(Dd)`
    background-image: radial-gradient(
        ${e=>us.f(e.theme.mainBackground,.9)} 50%,
        transparent 100%
    );
    z-index: 1;
`,fh=e=>i.createElement(gh,{topOffset:7},i.createElement($d,{title:"Delete this rule",icon:["far","trash-alt"],onClick:e.onDelete}),i.createElement($d,{title:"Clone this rule",icon:["far","clone"],onClick:e.onClone}),i.createElement($d,{title:e.toggleState?"Deactivate this rule":"Activate this rule",icon:["fas",e.toggleState?"toggle-on":"toggle-off"],onClick:e.onToggleActivation}),i.createElement($d,{title:"Give this rule a custom name",icon:["fas","edit"],disabled:e.isEditingTitle,onClick:e.onSetCustomTitle}),i.createElement($d,{title:"Revert this rule to the last saved version",icon:["fas","undo"],disabled:!e.hasUnsavedChanges||e.isNewRule,onClick:e.onReset}),i.createElement($d,{icon:["fas",e.hasUnsavedChanges?"save":e.isCollapsed?"chevron-down":"chevron-up"],title:e.hasUnsavedChanges?"Save changes to this rule":e.isCollapsed?"Show rule details":"Hide rule details",onClick:e.hasUnsavedChanges?e.onSave:e.onToggleCollapse})),bh=(e,t)=>{const n={};return e&&e.transition&&(n.transition=e.transition.replace(/transform [\d.]+s/,"transform 100ms")),t.combineWith&&t.combineWith.endsWith("-tail")&&(n.opacity="1"),Object.assign(Object.assign({},e),n)};let yh=class extends i.Component{constructor(){super(...arguments),this.initialMatcherSelect=i.createRef(),this.containerRef=null,this.saveRule=Nt(()=>{this.stopEditingTitle(),this.props.saveRule(this.props.path)}),this.resetRule=Nt(()=>{this.stopEditingTitle(),this.props.resetRule(this.props.path)}),this.deleteRule=Nt(()=>this.props.deleteRule(this.props.path)),this.cloneRule=Nt(()=>this.props.cloneRule(this.props.path)),this.toggleCollapse=Nt(()=>{requestAnimationFrame(()=>{var e;this.containerRef&&this.containerRef.scrollIntoView({block:"nearest",behavior:"smooth"}),this.initialMatcherSelect.current&&(this.initialMatcherSelect.current.focus(),null===(e=getSelection())||void 0===e||e.empty())}),this.props.toggleRuleCollapsed(this.props.rule.id),this.stopEditingTitle()})}render(){const{index:e,rule:t,path:n,isNewRule:r,hasUnsavedChanges:o,collapsed:s,disabled:a}=this.props,{isPaidUser:c,getPro:l}=this.props.accountStore,d=t.type,p=t.matchers.length?t.matchers[0]:void 0;let h;if("http"===d)h=p instanceof rt.matchers.MethodMatcher?Object(q.d)(rt.Method[p.method]):void 0!==p?Object(q.d)("unknown"):"transparent";else if("websocket"===d)h=Object(q.f)("websocket");else if("ethereum"===d)h=Object(q.f)("mutative");else if("ipfs"===d)h=Object(q.f)("html");else{if("webrtc"!==d)throw new S.a(d);h=Object(q.f)("rtc-data")}const m=Object(qa.e)(d),g=Object(qa.f)(d,p),f="handler"in t?[t.handler]:t.steps,b=!s||!t.title&&!this.titleEditState,y=!!this.titleEditState&&!s;return i.createElement(Hd.b,{draggableId:t.id,index:e,isDragDisabled:!s},(e,v)=>i.createElement(u.a,null,()=>i.createElement(ch,Object.assign({},e.draggableProps,{borderColor:h,ref:t=>{e.innerRef(t),this.containerRef=t},collapsed:s,deactivated:!t.activated,disabled:a,tabIndex:s?0:void 0,onClick:s?this.toggleCollapse:void 0,onKeyPress:Bt,depth:n.length-1,style:bh(e.draggableProps.style,v)}),i.createElement(fh,{isCollapsed:s,isNewRule:r,hasUnsavedChanges:o,onToggleCollapse:this.toggleCollapse,onSave:this.saveRule,onReset:this.resetRule,toggleState:t.activated,onToggleActivation:this.toggleActivation,onClone:this.cloneRule,onDelete:this.deleteRule,isEditingTitle:y,onSetCustomTitle:this.startEnteringCustomTitle}),i.createElement(Id,Object.assign({},e.dragHandleProps)),t.title&&!y&&i.createElement(nh,null,t.title),y&&i.createElement(ah,{value:t.title||"",onEditTitle:this.editTitle,onSave:this.saveRule,onCancel:this.titleEditState.originalTitle!==this.props.rule.title?this.cancelEditingTitle:void 0}),i.createElement(dh,null,b&&i.createElement(uh,{collapsed:s,title:es(t)},es(t)),!s&&i.createElement(hh,null,i.createElement(mh,null,"Match:"),i.createElement("ul",null,i.createElement(Hu,{ref:this.initialMatcherSelect,matcher:p,onChange:this.setInitialMatcher}),t.matchers.slice(1).map((e,n)=>i.createElement(qu,{key:`${n}/${t.matchers.length}`,matcher:e,matcherIndex:n,onChange:(...e)=>this.updateMatcher(n+1,...e),onDelete:()=>this.deleteMatcher(e)})),t.matchers.length>0&&i.createElement($u,{key:t.type,availableMatchers:m,existingMatchers:t.matchers,onAdd:this.addMatcher})))),b&&i.createElement(ph,null),i.createElement(dh,null,b&&i.createElement(uh,{collapsed:s,title:ts(t)},ts(t)),!s&&i.createElement(hh,null,i.createElement(mh,null,"Then:"),f.map((e,t)=>i.createElement(vh,{key:t,handler:e,handlerIndex:t,isPaidUser:c,getPro:l,ruleType:d,availableHandlers:g,updateHandler:this.updateHandler})))))))}toggleActivation(e){const{rule:t}=this.props;t.activated=!t.activated,e.stopPropagation()}setInitialMatcher(e){const t=this.props.rule.type,n=Object(qa.i)(e);t===n?this.props.rule.matchers[0]=e:(this.props.rule.type=n,this.props.rule.matchers=Object(Po.i)(n,e,this.props.rule.matchers));if("handler"in this.props.rule?!Object(qa.j)(this.props.rule.handler,e):!this.props.rule.steps.every(t=>Object(qa.j)(t,e))){const e=this.props.getRuleDefaultHandler(n);Object(qa.s)(this.props.rule)?(this.props.rule.steps=[e],delete this.props.rule.handler):(this.props.rule.handler=e,delete this.props.rule.steps)}Object(Po.j)(this.props.rule)}addMatcher(e){this.props.rule.matchers.push(e)}updateMatcher(e,...t){this.props.rule.matchers.splice(e,1,...t)}deleteMatcher(e){const t=this.props.rule;t.matchers=t.matchers.filter(t=>t!==e)}updateHandler(e,t){const n=this.props.rule;if("handler"in n){if(0!==e)throw new Error("Single-handler rules cannot have additional steps");n.handler=t}else n.steps[e]=t,Object(qa.l)(t)?n.steps=n.steps.slice(0,e+1):e===n.steps.length-1&&n.steps.push(this.props.getRuleDefaultHandler(this.props.rule.type))}startEnteringCustomTitle(e){this.titleEditState={originalTitle:this.props.rule.title},this.props.collapsed&&this.props.toggleRuleCollapsed(this.props.rule.id),e.stopPropagation()}editTitle(e){this.props.rule.title=e||void 0}cancelEditingTitle(){this.titleEditState&&(this.editTitle(this.titleEditState.originalTitle),this.titleEditState=void 0)}stopEditingTitle(){var e;this.titleEditState&&(this.props.rule.title!==this.titleEditState.originalTitle&&(this.props.rule.title=(null===(e=this.props.rule.title)||void 0===e?void 0:e.trim())||void 0),this.titleEditState=void 0)}};ih([d.observable],yh.prototype,"titleEditState",void 0),ih([d.action.bound],yh.prototype,"toggleActivation",null),ih([d.action.bound],yh.prototype,"setInitialMatcher",null),ih([d.action.bound],yh.prototype,"addMatcher",null),ih([d.action.bound],yh.prototype,"updateMatcher",null),ih([d.action.bound],yh.prototype,"deleteMatcher",null),ih([d.action.bound],yh.prototype,"updateHandler",null),ih([d.action.bound],yh.prototype,"startEnteringCustomTitle",null),ih([d.action.bound],yh.prototype,"editTitle",null),ih([d.action.bound],yh.prototype,"cancelEditingTitle",null),ih([d.action.bound],yh.prototype,"stopEditingTitle",null),yh=ih([Object(u.d)("accountStore"),u.e],yh);let vh=class extends i.Component{componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>this.props.handler,()=>{this.demoHandler=void 0}))}render(){var e;const{isPaidUser:t,getPro:n,ruleType:r,availableHandlers:o,handler:a}=this.props,c=null!==(e=this.demoHandler)&&void 0!==e?e:a,l=!t&&c&&Object(qa.p)(r,c);return i.createElement(i.Fragment,null,i.createElement(Lu,{value:c,ruleType:r,onChange:this.updateHandler,availableHandlers:o}),l?i.createElement(Ti,{getPro:n,source:"rule-"+a.type},i.createElement(Xu,{ruleType:r,handler:c,onChange:s.noop})):i.createElement(Xu,{ruleType:r,handler:c,onChange:this.updateHandler}))}updateHandler(e){const{isPaidUser:t,handlerIndex:n,ruleType:r,updateHandler:o}=this.props;!t&&Object(qa.p)(r,e)?this.demoHandler=e:o(n,e)}};ih([d.observable],vh.prototype,"demoHandler",void 0),ih([d.action.bound],vh.prototype,"updateHandler",null),vh=ih([u.e],vh);var xh=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const wh=p.j.ol`
    padding: 0 40px 20px;
    min-height: calc(100% - 40px);
`;let Eh=class extends i.Component{constructor(){super(...arguments),this.buildDragEndListener=(e,t)=>Object(d.action)(({source:n,destination:r,combine:o})=>{this.currentlyDraggingRuleId=void 0;const{draftRules:a}=this.props;if(o){const t=e[n.index],r=o.draggableId.endsWith("-tail"),s=r?o.draggableId.slice(0,-5):o.draggableId,i=Object(gt.g)(a,{id:s}),c=Object(gt.i)(a,i);return void(Object(gt.k)(c)?this.props.moveRule(t,i.concat(r?c.items.length:0)):this.props.combineRulesAsGroup(t,i))}if(!r){if(this.wasGroupOpenBeforeDrag){const t=e[n.index];Object(gt.i)(a,t).collapsed=!1}return}const{sourcePath:i,targetPath:c}=function(e,t,n,r){const o=e[n],a=e[r],i=Object(gt.d)(o,a),c=Object(gt.j)(t,a),l=s.last(a),d=c.items.length>l?Object(gt.i)(t,a):void 0,u=o.slice(0,-1),p=a.slice(0,-1);if(d&&Object(gt.k)(d)&&!d.collapsed&&i>0)return{sourcePath:o,targetPath:a.concat(0)};if(void 0===d&&i>0){const e=p.slice(0,-1),t=s.isEqual(u,e)?0:1;return{sourcePath:o,targetPath:a.slice(0,-2).concat(a[a.length-2]+t)}}if(!s.isEqual(u,p)){const e=s.last(a);return{sourcePath:o,targetPath:i<0?p.concat(e):p.concat(e+1)}}return{sourcePath:o,targetPath:a}}(e,t,n.index,r.index);if(this.props.moveRule(i,c),this.wasGroupOpenBeforeDrag){Object(gt.i)(a,c).collapsed=!1}})}beforeDrag({draggableId:e}){this.currentlyDraggingRuleId=e;const t=Object(gt.f)(this.props.draftRules,{id:e});t&&Object(gt.k)(t)?(this.wasGroupOpenBeforeDrag=!t.collapsed,t.collapsed=!0):this.wasGroupOpenBeforeDrag=void 0}render(){const{draftRules:e,activeRules:t,addRule:n,saveRule:r,resetRule:o,deleteItem:a,cloneItem:c,toggleRuleCollapsed:l,updateGroupTitle:d,getRuleDefaultHandler:p,collapsedRulesMap:h}=this.props,{beforeDrag:m,buildDragEndListener:g,currentlyDraggingRuleId:f}=this,{ruleRows:b,indexMapping:y}=function e(t,n,r,o,a,c,l,d,u,p,h,m=t,g=[],f=0){const b={toggleRuleCollapsed:a,saveRule:c,resetRule:l,cloneRule:d,deleteRule:u,getRuleDefaultHandler:h};return m.items.reduce((m,y,v)=>{const x=g.concat(v);if(Object(gt.k)(y)){if(m.ruleRows.push(i.createElement(zd,{key:y.id,group:y,path:x,index:f+m.indexMapping.length,collapsed:!!y.collapsed,updateGroupTitle:p,cloneGroup:d,deleteGroup:u})),m.indexMapping.push(x),y.collapsed)return m;const s=e(t,n,r,o,a,c,l,d,u,p,h,y,x,f+m.indexMapping.length);m.ruleRows.push(...s.ruleRows),m.indexMapping.push(...s.indexMapping),m.ruleRows.push(i.createElement(Vd,{key:y.id+"-tail",group:y,index:f+m.indexMapping.length})),m.indexMapping.push(x.concat(y.items.length))}else{const e=r[y.id],a=function(e,t,n,r){const o=Object(gt.g)(r,{id:e.id});if(!o)return"new";const a=Object(gt.j)(n,t),i=Object(gt.j)(r,o),c=i.items[s.last(o)];if(i.id!==a.id)return"changed";const l=s.intersectionBy(i.items,a.items,"id"),d=s.intersectionBy(a.items,i.items,"id");if(l.indexOf(c)!==d.indexOf(e))return"changed";if(!s.isEqualWith(c,e,gt.b))return"changed";return!1}(y,x,t,n);m.ruleRows.push(i.createElement(yh,Object.assign({key:y.id,index:f+m.indexMapping.length,path:x,rule:y,isNewRule:"new"===a,hasUnsavedChanges:!!a,collapsed:e,disabled:void 0!==o&&o!==y.id},b))),m.indexMapping.push(x)}return m},{indexMapping:[],ruleRows:[]})}(e,t,h,f,l,r,o,c,a,d,p);return i.createElement(Hd.a,{onBeforeCapture:m,onDragEnd:g(y,e)},i.createElement(Hd.c,{isCombineEnabled:!0,droppableId:"mock-rule-list"},e=>i.createElement(u.a,null,()=>i.createElement(wh,Object.assign({ref:e.innerRef},e.droppableProps),i.createElement(lh,{onAdd:n,disabled:void 0!==f}),b,e.placeholder))))}};xh([d.observable],Eh.prototype,"currentlyDraggingRuleId",void 0),xh([d.action.bound],Eh.prototype,"beforeDrag",null),Eh=xh([u.e],Eh);var Ch=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Th=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const jh=p.j.section`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: stretch;
`,Oh=p.j.div`
    overflow-y: scroll;
    flex-grow: 1;
`,Sh=p.j.header`
    box-sizing: border-box;
    width: 100%;
    padding: 20px calc(40px + 16px) 20px 40px; /* ~16px to match scrollbar below */
    background-color: ${e=>e.theme.containerBackground};
    border-bottom: 1px solid rgba(0,0,0,0.12);
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
`,kh=p.j.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    flex-grow: 1;
`,Ph=Object(p.j)(vn.a)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;
    margin-left: 20px;

    svg {
        margin-right: 5px;
    }
`,Rh=Object(p.j)(vn.c)`
    border: none;
    font-size: 1.2em;
    padding: 5px 10px;
    margin-left: 10px;
`;let Hh=class extends i.Component{constructor(){super(...arguments),this.containerRef=i.createRef(),this.collapsedRulesMap=s.fromPairs(Object(gt.m)(this.props.rulesStore.draftRules,e=>[e.id,e.id!==this.props.initialRuleId])),this.getRuleDefaultHandler=e=>Object(Po.h)(e,this.props.rulesStore),this.importRules=()=>Th(this,void 0,void 0,(function*(){const e=yield Object(Mt.g)("text",[".htkrules","application/json","application/htkrules+json"]);if(e)try{this.props.rulesStore.loadSavedRules(JSON.parse(e))}catch(e){Object(o.c)(e),alert("Rules could not be imported: "+e)}})),this.exportRules=()=>Th(this,void 0,void 0,(function*(){const e=JSON.stringify(Object(Rd.d)(this.props.rulesStore.draftRules)),t=`HTTPToolkit_${m.format(Date.now(),"YYYY-MM-DD_HH-mm")}.htkrules`;Object(Mt.f)(t,Rd.b,e)}))}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=Object(gt.m)(this.props.rulesStore.draftRules,e=>e.id),t=s.keys(this.collapsedRulesMap),n=s.difference(t,e),r=s.difference(e,t);Object(d.runInAction)(()=>{n.forEach(e=>{delete this.collapsedRulesMap[e]}),r.forEach(e=>{this.collapsedRulesMap[e]=!0})})}));const{initialRuleId:e}=this.props,t=this.containerRef.current;if(e&&t){const n=t.querySelector(`[data-rbd-draggable-id="${e}"]`);requestAnimationFrame(()=>null==n?void 0:n.scrollIntoView())}}render(){const{rules:e,draftRules:t,areSomeRulesUnsaved:n,areSomeRulesNonDefault:r,deleteDraftItem:o,moveDraftRule:s,updateGroupTitle:a,combineDraftRulesAsGroup:c}=this.props.rulesStore,{isPaidUser:l}=this.props.accountStore;return i.createElement(jh,{ref:this.containerRef},i.createElement(Sh,null,i.createElement(kh,null,"Mock & Rewrite HTTP"),i.createElement(Rh,{disabled:!r,onClick:this.resetToDefaults,onKeyPress:Bt,title:"Reset rules to default"},i.createElement($t.b,{icon:["far","trash-alt"]})),i.createElement(Rh,{disabled:!l,onClick:this.importRules,onKeyPress:Bt,title:l?"Import a saved set of rules":"With Pro: Import a set of saved rules, so you can build your own ready-to-use collections of predefined rules"},i.createElement($t.b,{icon:["fas","folder-open"]})),i.createElement(Rh,{disabled:!l||!r||0===t.items.length,onClick:this.exportRules,onKeyPress:Bt,title:l?"Export these rules":"With Pro: Export these rules, to save them for quick reuse later"},i.createElement($t.b,{icon:["fas","download"]})),i.createElement(Rh,{disabled:!n,onClick:this.resetRuleDrafts,onKeyPress:Bt,title:"Revert changes since the last save"},i.createElement($t.b,{icon:["fas","undo"]})),i.createElement(Ph,{disabled:!n,onClick:this.saveAll,onKeyPress:Bt,title:"Save all rule changes"},i.createElement($t.b,{icon:["fas","save"]})," Save changes")),i.createElement(Oh,null,i.createElement(Eh,{activeRules:e,draftRules:t,collapsedRulesMap:this.collapsedRulesMap,addRule:this.addRule,saveRule:this.saveRule,resetRule:this.resetRule,cloneItem:this.cloneItem,deleteItem:o,toggleRuleCollapsed:this.toggleRuleCollapsed,updateGroupTitle:a,getRuleDefaultHandler:this.getRuleDefaultHandler,moveRule:s,combineRulesAsGroup:c})))}collapseAll(){Object.keys(this.collapsedRulesMap).forEach(e=>{this.collapsedRulesMap[e]=!0})}saveRule(e){const t=this.props.rulesStore.saveItem(e);this.collapsedRulesMap[t.id]=!0}resetRule(e){this.props.rulesStore.resetRule(e)}cloneItem(e){const t=this.props.rulesStore.draftRules,n=Object(gt.c)(Object(gt.i)(t,e));Object(gt.k)(n)?n.collapsed=!0:this.collapsedRulesMap[n.id]=!0;const r=s.last(e);this.props.rulesStore.addDraftItem(n,[...e.slice(0,-1),r+1])}saveAll(){this.props.rulesStore.saveRules(),this.collapseAll()}resetToDefaults(){confirm("Reset all rules?")&&(this.props.rulesStore.resetRulesToDefault(),this.collapseAll())}resetRuleDrafts(){this.props.rulesStore.resetRuleDrafts(),this.collapseAll()}addRule(){const e=Object(Po.g)(this.props.rulesStore);this.collapsedRulesMap[e.id]=!1,this.props.rulesStore.addDraftItem(e),setTimeout(()=>{const e=this.containerRef.current;if(!e)return;const t=e.querySelector("ol > section:nth-child(2) select");t&&t.focus()},100)}toggleRuleCollapsed(e){this.collapsedRulesMap[e]=!this.collapsedRulesMap[e]}};Ch([d.observable],Hh.prototype,"collapsedRulesMap",void 0),Ch([d.action.bound],Hh.prototype,"collapseAll",null),Ch([d.action.bound],Hh.prototype,"saveRule",null),Ch([d.action.bound],Hh.prototype,"resetRule",null),Ch([d.action.bound],Hh.prototype,"cloneItem",null),Ch([d.action.bound],Hh.prototype,"saveAll",null),Ch([d.action.bound],Hh.prototype,"resetToDefaults",null),Ch([d.action.bound],Hh.prototype,"resetRuleDrafts",null),Ch([d.action.bound],Hh.prototype,"addRule",null),Ch([d.action.bound],Hh.prototype,"toggleRuleCollapsed",null),Hh=Ch([Object(u.d)("rulesStore"),Object(u.d)("accountStore"),u.e],Hh);const qh=Hh;function Ah(e){try{return new URL(e).host}catch(e){return}}const Ih=Object.values(rt.Method).filter(e=>"string"==typeof e),Dh=p.j.form`
    background-color: ${e=>e.theme.mainBackground};
    flex-grow: 0;
    display: flex;
`,$h=Object(p.j)($t.b).attrs(()=>({icon:["fas","chevron-down"]}))`
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);

    color: ${e=>e.theme.mainColor};
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-size: ${e=>e.theme.textInputFontSize};

    pointer-events: none;
`,Mh=Object(p.j)(vn.d)`
    border-radius: 0;
    border: none;
    outline: none;
    appearance: none;

    border-left: 5px solid ${e=>e.borderColor};

    padding: 5px 0 5px 15px;
    font-size: ${e=>e.theme.textInputFontSize};

    height: 100%;
    width: 100%;

    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.mainLowlightBackground};
`,Fh=p.j.div`
    position: relative;
    font-size: ${e=>e.theme.textSize};

    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 105px;

    &:focus-within > svg {
        color: ${e=>e.theme.popColor};
        opacity: 1;
    }
`,Bh=Object(p.j)(vn.e)`
    flex-basis: 100%;
    flex-grow: 1;

    border-radius: 0;
    border: none;

    padding: 10px 10px 10px;

    font-size: ${e=>e.theme.textSize};

    &:focus {
        outline: none;
    }
`,Nh=Object(p.j)(vn.a)`
    padding: 4px 18px 5px;
    border-radius: 0;

    font-size: ${e=>e.theme.textSize};

    > svg {
        padding: 0;
    }
`,Lh=e=>{const t=i.useCallback(t=>{e.updateMethod(t.target.value)},[e.updateMethod]),n=i.useCallback(t=>{e.updateUrl(t.target.value)},[e.updateUrl]),r=i.useCallback(e=>{const t=e.target;t.value||(t.value="https://")},[]),o=i.useCallback(t=>(t.preventDefault(),e.sendRequest(),!1),[e.sendRequest]),s=Object(q.d)(e.method);return i.createElement(Dh,{onSubmit:o},i.createElement(Fh,null,i.createElement(Mh,{value:e.method,onChange:t,borderColor:s},Ih.map(e=>i.createElement("option",{key:e,value:e},e))),i.createElement($h,null)),i.createElement(Bh,{type:"url",spellCheck:"false",placeholder:"https://example.com/hello?name=world",value:e.url,onFocus:r,onChange:n}),i.createElement(Nh,{type:"submit",disabled:e.isSending,title:"Send this request"},e.isSending?i.createElement($t.b,{spin:!0,fixedWidth:!0,icon:["fas","spinner"]}):i.createElement($t.a,{direction:"right"})))};var Uh=n(100),Wh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const zh=p.j.div`
    overflow-y: auto;

    flex-grow: 1;
    flex-shrink: 1;

    margin: 0 -20px -20px -20px;
    padding: 0 20px 20px 20px;
`,_h=Object(u.e)(e=>{var{headers:t,updateHeaders:n}=e,r=Wh(e,["headers","updateHeaders"]);return i.createElement(Uh.b,Object.assign({},r,{headerAlignment:"left"}),i.createElement("header",null,i.createElement(Ma.a,null,i.createElement(Fa.a,{expanded:r.expanded,onClick:r.onExpandToggled})),i.createElement(Ut.c,{onCollapseToggled:r.onCollapseToggled},"Request Headers")),i.createElement(zh,null,i.createElement(El,{headers:t,onChange:n})))});var Vh=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Gh=class extends i.Component{constructor(){super(...arguments),this.contentType="text",this.updateBody=e=>{this.props.onBodyUpdated(Object(P.l)(e,this.textEncoding))}}onChangeContentType(e){this.contentType=e}get textEncoding(){return Object(P.h)(this.props.body)?"utf8":"binary"}render(){const{editorNode:e,expanded:t,onExpandToggled:n,onCollapseToggled:r,body:o}=this.props,s=Object(P.c)(o,this.textEncoding);return i.createElement(Uh.a,Object.assign({},this.props,{headerAlignment:"left"}),i.createElement("header",null,i.createElement(La.c,{body:o,onBodyFormatted:this.updateBody,title:"Request body",expanded:t,onExpandToggled:n,onCollapseToggled:r,selectedContentType:this.contentType,contentTypeOptions:Ba.a,onChangeContentType:this.onChangeContentType})),i.createElement(La.b,null,i.createElement(ko.b,{node:e,contentId:"request",language:this.contentType,value:s,onChange:this.updateBody})))}};Vh([d.observable],Gh.prototype,"contentType",void 0),Vh([d.action.bound],Gh.prototype,"onChangeContentType",null),Vh([d.computed],Gh.prototype,"textEncoding",null),Gh=Vh([u.e],Gh);var Jh=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Kh=p.j.section`
    display: flex;
    flex-direction: column;
    height: 100%;

    ${e=>e.hasExpandedChild&&p.f`
        > * {
            /* CollapsibleCard applies its own display property to override this for the expanded card */
            display: none;
        }
    `}
`;let Yh=class extends i.Component{constructor(){super(...arguments),this.isSending=!1,this.sendRequest=Object(d.flow)((function*(){if(!this.isSending){this.isSending=!0;try{yield this.props.sendRequest(this.props.requestInput)}catch(e){console.warn("Sending request failed",e)}finally{this.isSending=!1}}})).bind(this)}get cardProps(){return this.props.uiStore.sendCardProps}componentDidMount(){Object(u.c)(this,function(e,t){let n;const r=e();return r||(n=""),n=Ah(r),Object(d.reaction)(()=>e(),e=>{var r;const o=t(),s=null!==(r=Object(pc.d)(o,"host"))&&void 0!==r?r:"",a=Ah(e);s!==n&&void 0!==n||(a?Object(pc.k)(o,"host",a,{prepend:!0}):Object(pc.j)(o,"host")),n=a})}(()=>this.props.requestInput.url,()=>this.props.requestInput.headers))}render(){const{requestInput:e,editorNode:t,uiStore:n}=this.props;return i.createElement(Kh,{hasExpandedChild:!!(null==n?void 0:n.expandedSendRequestCard)},i.createElement(Lh,{method:e.method,updateMethod:this.updateMethod,url:e.url,updateUrl:this.updateUrl,isSending:this.isSending,sendRequest:this.sendRequest}),i.createElement(_h,Object.assign({},this.cardProps.requestHeaders,{headers:e.headers,updateHeaders:this.updateHeaders})),i.createElement(Gh,Object.assign({},this.cardProps.requestBody,{body:e.rawBody.decoded,onBodyUpdated:this.updateBody,editorNode:t})))}updateMethod(e){this.props.requestInput.method=e}updateUrl(e){this.props.requestInput.url=e}updateHeaders(e){const{requestInput:t}=this.props;t.headers=e}updateBody(e){const{requestInput:t}=this.props;t.rawBody.updateDecodedBody(e)}};Jh([d.action.bound],Yh.prototype,"updateMethod",null),Jh([d.action.bound],Yh.prototype,"updateUrl",null),Jh([d.action.bound],Yh.prototype,"updateHeaders",null),Jh([d.action.bound],Yh.prototype,"updateBody",null),Jh([d.observable],Yh.prototype,"isSending",void 0),Yh=Jh([Object(u.d)("rulesStore"),Object(u.d)("uiStore"),u.e],Yh);var Qh=n(127);const Xh=Object(p.j)(Uh.b)`
    padding-top: 7px;
    padding-bottom: 7px;
    flex-shrink: 0;

    > header {
        flex-direction: row;
        justify-content: flex-start;
    }
`,Zh=e=>{const t=e.exchange.response;return i.createElement(Xh,{collapsed:!1,headerAlignment:"left"},i.createElement("header",null,i.createElement(Wt.a,{color:Object(q.e)(t.statusCode,e.theme)},t.statusCode,": ",t.statusMessage||Object(R.d)(t.statusCode)),i.createElement(kc,{timingEvents:e.exchange.timingEvents}),i.createElement(Wt.a,{title:"The size of the raw encoded response body"},Object(H.a)(t.body.encoded.byteLength))))};var em=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const tm=e=>{var{requestUrl:t,headers:n}=e,r=em(e,["requestUrl","headers"]);return i.createElement(Uh.b,Object.assign({},r),i.createElement("header",null,i.createElement(Ma.a,null,i.createElement(Fa.a,{expanded:r.expanded,onClick:r.onExpandToggled})),i.createElement(Ut.c,{onCollapseToggled:r.onCollapseToggled},"Response Headers")),i.createElement(Zi,{requestUrl:t,headers:n}))};var nm=n(672),rm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const om=p.j.section`
    display: flex;
    flex-direction: column;
    height: 100%;

    ${e=>e.hasExpandedChild&&p.f`
        > * {
            /* CollapsibleCard applies its own display property to override this for the expanded card */
            display: none;
        }
    `}
`;let sm=class extends i.Component{get cardProps(){return this.props.uiStore.sendCardProps}render(){const{exchange:e,uiStore:t}=this.props;return e?i.createElement(om,{hasExpandedChild:!!(null==t?void 0:t.expandedSentResponseCard)},e.isSuccessfulExchange()?this.renderSuccessfulResponse(e):e.isCompletedExchange()?this.renderAbortedResponse(e):this.renderInProgressResponse()):null}renderSuccessfulResponse(e){const{uiStore:t,editorNode:n}=this.props,r=e.response;return i.createElement(i.Fragment,null,i.createElement(Zh,{exchange:e,theme:t.theme}),i.createElement(tm,Object.assign({},this.cardProps.responseHeaders,{requestUrl:e.request.parsedUrl,headers:r.rawHeaders})),i.createElement(nm.a,Object.assign({},this.cardProps.responseBody,{isPaidUser:this.props.accountStore.isPaidUser,url:e.request.url,message:r,editorNode:n})))}renderAbortedResponse(e){return i.createElement(uc,{cardProps:this.cardProps.responseHeaders,exchange:e})}renderInProgressResponse(){return i.createElement(Qh.a,Object.assign({},this.cardProps.responseHeaders),i.createElement("header",null,i.createElement("h1",null,"Response...")))}};sm=rm([Object(u.d)("uiStore"),Object(u.d)("accountStore"),u.e],sm);var am=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const im=p.j.div`
    height: 100vh;
    position: relative;
`;let cm=class extends i.Component{constructor(){super(...arguments),this.requestEditorNode=ko.c({attributes:{style:"height: 100%"}}),this.responseEditorNode=ko.c({attributes:{style:"height: 100%"}})}render(){const{requestInputs:e,sendRequest:t,sentExchange:n}=this.props.sendStore;return i.createElement(im,null,i.createElement(Ho,{split:"vertical",primary:"second",defaultSize:"50%",minSize:300,maxSize:-300},i.createElement(Yh,{requestInput:e[0],sendRequest:t,editorNode:this.requestEditorNode}),i.createElement(sm,{exchange:n,editorNode:this.responseEditorNode})),i.createElement(ko.a,{node:this.requestEditorNode},i.createElement(Vo,{contentId:null})),i.createElement(ko.a,{node:this.responseEditorNode},i.createElement(Vo,{contentId:null})))}};cm=am([Object(u.d)("sendStore"),u.e],cm);const lm=p.j.div`
    display: flex;
    flex-direction: row;
`,dm=Object(p.j)(e=>i.createElement("nav",Object.assign({},Object(s.omit)(e,"isSelected"),{onClick:t=>{t.tabValue&&e.onClick(t.tabValue)}}),e.children.map(t=>i.cloneElement(t,{key:t.props.value,selected:e.isSelected(t.props.value)}))))`
    width: 80px;
    border-right: solid 2px ${e=>e.theme.containerBackground};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`,um=Object(p.j)(e=>i.createElement(vn.f,{className:e.className,onClick:t=>{t.tabValue=e.value}},i.createElement($t.b,{icon:e.icon,size:"2x"}),e.children))`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    width: 100%;
    font-size: ${e=>e.theme.textSize};
    box-sizing: border-box;

    padding: 10px 20px 10px 0;

    user-select: none;
    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }

    opacity: 0.6;
    ${e=>e.selected&&p.f`
        opacity: 1;
        font-weight: bold;
        border-right: solid 3px ${e.theme.popColor};
        padding-right: 22px;
        position: relative;
        right: -2px;
    `}

    > svg {
        margin-bottom: 10px;
    }
`;var pm=n(254);const hm=p.f`
    font-size: ${e=>e.theme.textSize};
    padding: 6px 16px;

    ${e=>e.highlight&&p.f`
        &:not(:disabled) {
            background-color: ${e=>e.theme.popColor};
        }
    `}
`,mm=Object(p.j)(vn.a)`${hm}`,gm=Object(p.j)(vn.b)`${hm}`,fm=p.j.p`
    font-style: italic;
    line-height: 1.3;
`,bm=Object(p.j)(en.c)`
    &:not(header + &) {
        margin-top: 40px;
    }
`;var ym=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const vm=p.j.div`
    width: 100%;

    display: grid;
    grid-template-columns: auto min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    ${vn.e} {
        align-self: stretch;
    }
`,xm=p.j.div`
    min-width: 300px;
    font-family: ${e=>e.theme.monoFontFamily};
`;let wm=class extends i.Component{constructor(){super(...arguments),this.inputValue=""}render(){const{values:e,onDelete:t,placeholder:n}=this.props;return i.createElement(vm,null,e.map(e=>[i.createElement(xm,{key:"value-"+e},e),i.createElement(mm,{key:"delete-"+e,onClick:()=>t(e)},i.createElement($t.b,{icon:["far","trash-alt"]}))]),i.createElement(vn.e,{placeholder:n,value:this.inputValue,onChange:this.changeInput}),i.createElement(mm,{disabled:!ct(this.inputValue)||e.includes(this.inputValue),onClick:this.addHost},i.createElement($t.b,{icon:["fas","plus"]})))}addHost(e){this.props.onAdd(this.inputValue),this.inputValue=""}changeInput(e){this.inputValue=e.target.value,this.props.validationFn(e.target)}};ym([d.observable],wm.prototype,"inputValue",void 0),ym([d.action.bound],wm.prototype,"addHost",null),ym([d.action.bound],wm.prototype,"changeInput",null),wm=ym([u.e],wm);var Em=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Cm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Tm=Object(p.j)(mm).attrs(()=>({children:"Restart app to activate",onClick:()=>window.location.reload()}))`
    position: absolute;
    top: 18px;
    left: 20px;
    font-weight: bold;

    &:not(:disabled) {
        background-color: ${e=>e.theme.popColor};
    }

    ${e=>!e.visible&&"display: none;"}
`,jm=Object(p.j)($t.b).attrs(()=>({icon:["fas","save"]}))`
    margin-left: 10px;
    color: ${e=>e.theme.warningColor};
`,Om=p.j.div`
    display: grid;
    grid-template-columns: fit-content(45%) fit-content(45%) fit-content(10%);
    align-items: baseline;

    grid-gap: 10px;
    margin-bottom: 10px;

    input {
        & + ${$t.e} {
            visibility: hidden;
            align-self: center;
        }

        &:invalid + ${$t.e} {
            visibility: visible;
        }
    }
`,Sm=p.j.p`
    margin-bottom: 10px;
`,km=Object(p.j)(vn.d)`
    display: inline-block;
    margin-top: 10px;
    width: auto;
    font-size: ${e=>e.theme.textSize};
    padding: 3px;
`,Pm=Lt((function(e){return!!(null==e?void 0:e.match(/^[A-Za-z0-9\-.]+$/))}),"Should be a valid hostname");let Rm=class extends i.Component{constructor(){var e,t;super(...arguments),this.minPortValue=((null===(e=this.props.proxyStore.portConfig)||void 0===e?void 0:e.startPort)||8e3).toString(),this.maxPortValue=((null===(t=this.props.proxyStore.portConfig)||void 0===t?void 0:t.endPort)||65535).toString()}onMinPortChange({target:{value:e}}){this.minPortValue=e,this.updatePortConfig()}onMaxPortChange({target:{value:e}}){this.maxPortValue=e,this.updatePortConfig()}get isCurrentPortInRange(){const{httpProxyPort:e,portConfig:t}=this.props.proxyStore;return t?e>=t.startPort&&e<=t.endPort:e>=8e3}get portConfig(){return{startPort:parseInt(this.minPortValue,10),endPort:parseInt(this.maxPortValue,10)}}get isCurrentPortConfigValid(){return ht(this.portConfig)}updatePortConfig(){this.isCurrentPortConfigValid&&this.props.proxyStore.setPortConfig(this.portConfig)}addTlsPassthroughHostname(e){const{tlsPassthroughConfig:t}=this.props.proxyStore;t.push({hostname:e})}removeTlsPassthroughHostname(e){const{tlsPassthroughConfig:t}=this.props.proxyStore,n=s.findIndex(t,t=>t.hostname===e);-1!==n&&t.splice(n,1)}render(){const e=this.props,{proxyStore:t}=e,n=Cm(e,["proxyStore"]),{httpProxyPort:r,http2Enabled:o,http2CurrentlyEnabled:a,tlsPassthroughConfig:c,currentTlsPassthroughConfig:l}=t;return i.createElement(Ut.b,Object.assign({},n),i.createElement("header",null,i.createElement(Ut.c,{onCollapseToggled:n.onCollapseToggled},"Proxy Settings")),i.createElement(Tm,{visible:this.isCurrentPortConfigValid&&!this.isCurrentPortInRange||o!==a||!s.isEqual(c,l)}),i.createElement(Om,null,i.createElement(en.c,null,"Minimum port"),i.createElement(vn.e,{type:"number",required:!0,min:"1",max:"65535",value:this.minPortValue,onChange:this.onMinPortChange}),i.createElement($t.e,null),i.createElement(en.c,null,"Maximum port"),i.createElement(vn.e,{type:"number",required:!0,min:this.minPortValue,max:"65535",value:this.maxPortValue,onChange:this.onMaxPortChange}),i.createElement($t.e,null)),i.createElement(Sm,null,"The proxy is currently using port ",i.createElement("strong",null,r),this.isCurrentPortConfigValid&&!this.isCurrentPortInRange?", outside this range. Restart the app now to use this configuration.":"."),i.createElement(fm,null,"When opening HTTP Toolkit, it will start the proxy on the first port in this range that is available. If all ports in the range are in use, the first free port above 8000 will be used instead."),Object(g.F)(g.E.value,g.x)&&i.createElement(i.Fragment,null,i.createElement(bm,null,"TLS Passthrough ",!s.isEqual(c,l)&&i.createElement(jm,null)),i.createElement(wm,{values:c.map(e=>e.hostname),onAdd:this.addTlsPassthroughHostname,onDelete:this.removeTlsPassthroughHostname,placeholder:"A hostname whose TLS connections should not be intercepted",validationFn:Pm}),i.createElement(fm,null,"Incoming TLS connections to these hostnames will bypass HTTP Toolkit, and will be forwarded upstream untouched instead of being intercepted. Clients will not see HTTP Toolkit's certificate, which may solve some connection issues, but traffic within these TLS connections will not be accessible.")),Object(g.F)(g.E.value,g.l)&&i.createElement(i.Fragment,null,i.createElement(bm,null,"HTTP/2 Support ",o!==a&&i.createElement(jm,null)),i.createElement(km,{value:JSON.stringify(o),onChange:Object(d.action)(e=>{const n=e.currentTarget.value;n&&(t.http2Enabled=JSON.parse(n))})},i.createElement("option",{value:"true"},"Enabled for all clients"),i.createElement("option",{value:'"fallback"'},"Enabled only for HTTP/2-only clients"),i.createElement("option",{value:"false"},"Disabled for all clients"))))}};Em([d.observable],Rm.prototype,"minPortValue",void 0),Em([d.observable],Rm.prototype,"maxPortValue",void 0),Em([d.action.bound],Rm.prototype,"onMinPortChange",null),Em([d.action.bound],Rm.prototype,"onMaxPortChange",null),Em([d.computed],Rm.prototype,"isCurrentPortInRange",null),Em([d.computed],Rm.prototype,"portConfig",null),Em([d.computed],Rm.prototype,"isCurrentPortConfigValid",null),Em([d.action.bound],Rm.prototype,"addTlsPassthroughHostname",null),Em([d.action.bound],Rm.prototype,"removeTlsPassthroughHostname",null),Rm=Em([Object(u.d)("proxyStore"),u.e],Rm);var Hm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},qm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Am=p.j.div`
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > ${bm}, > ${fm} {
        flex-basis: 100%;
    }

    > ${$t.e} {
        align-self: center;
    }

    > ${vn.e} {
        flex-grow: 1;
    }

    > ${mm} {
        margin-left: 10px;
    }
`,Im=Object(p.j)(vn.d)`
    width: auto;
    font-size: ${e=>e.theme.textSize};
    padding: 3px;

    margin-right: 10px;
`,Dm=Lt(ct,"Should be a plain hostname, optionally with a specific port"),$m=e=>!!(null==e?void 0:e.match(/^([^/@]*@)?[A-Za-z0-9\-.]+(:\d+)?$/)),Mm=Lt($m,"Should be a plain hostname, optionally with a specific port and/or username:password");let Fm=class extends i.Component{constructor(){super(...arguments),this.proxyType=this.props.rulesStore.upstreamProxyType,this.proxyHostInput=this.props.rulesStore.upstreamProxyHost||""}setProxyType(e){const t=e.currentTarget.value;if(this.proxyType=t,this.proxyType,"direct"===t||"system"===t){this.props.rulesStore.upstreamProxyType=this.proxyType}}setProxyHostInput(e){Mm(e.target),this.proxyHostInput=e.target.value}saveProxyHost(){if("direct"===this.proxyType||"system"===this.proxyType)throw new Error(`Can't save proxy host for ${this.proxyType} proxy`);const e=this.props.rulesStore;e.upstreamProxyType=this.proxyType,e.upstreamProxyHost=this.proxyHostInput}addNoProxyHost(e){const{rulesStore:t}=this.props;t.upstreamNoProxyHosts=[...t.upstreamNoProxyHosts,e]}removeNoProxyHost(e){const{rulesStore:t}=this.props;t.upstreamNoProxyHosts=s.without(t.upstreamNoProxyHosts,e)}render(){const{effectiveSystemProxyConfig:e,upstreamProxyType:t,upstreamProxyHost:n,upstreamNoProxyHosts:r}=this.props.rulesStore,{proxyType:o,proxyHostInput:s,setProxyType:a,setProxyHostInput:c,saveProxyHost:l,addNoProxyHost:d,removeNoProxyHost:u}=this;return i.createElement(i.Fragment,null,i.createElement(bm,null,"Upstream Proxy"),i.createElement(Am,null,i.createElement(Im,{value:o,onChange:a},i.createElement("option",{value:"system"},"Use system settings"),i.createElement("option",{value:"direct"},"Connect directly"),i.createElement("option",{value:"http"},"Use an HTTP proxy"),i.createElement("option",{value:"https"},"Use an HTTPS proxy"),i.createElement("option",{value:"socks4"},"Use a SOCKS 4 proxy"),i.createElement("option",{value:"socks4a"},"Use a SOCKS 4a proxy"),i.createElement("option",{value:"socks5"},"Use a SOCKS 5 proxy"),i.createElement("option",{value:"socks5h"},"Use a SOCKS 5h proxy")),"system"===o&&("ignored"===e||"unparseable"===e)&&i.createElement($t.e,null),"system"===o&&e&&i.createElement(fm,null,"ignored"===e?i.createElement(i.Fragment,null,"The system is configured with a localhost proxy. To avoid issues with recursive proxy loops, this will be ignored and requests will be sent directly. Localhost proxies must be manually configured."):"unparseable"===e?i.createElement(i.Fragment,null,"The system proxy settings could not be parsed, so requests will be sent directly."):i.createElement(i.Fragment,null,"The configured system proxy is ",e.proxyUrl,".")),"direct"!==o&&"system"!==o&&i.createElement(i.Fragment,null,i.createElement(vn.e,{placeholder:`The ${o} proxy host details, e.g. example.com or user:pwd@example.com:8080`,value:s,onChange:c}),i.createElement(mm,{disabled:!$m(s)||s===n&&o===t,onClick:l},i.createElement($t.b,{icon:["fas","save"]})))),"direct"!==o&&"system"!==o&&i.createElement(i.Fragment,null,i.createElement(bm,null,"Non-proxied hosts"),i.createElement(wm,{placeholder:"A host whose traffic should not be sent via the proxy",onAdd:d,onDelete:u,values:r,validationFn:Dm}),i.createElement(fm,null,"Requests to these hosts will always be sent directly, not via the configured proxy.")))}};Hm([d.observable],Fm.prototype,"proxyType",void 0),Hm([d.action.bound],Fm.prototype,"setProxyType",null),Hm([d.observable],Fm.prototype,"proxyHostInput",void 0),Hm([d.action.bound],Fm.prototype,"setProxyHostInput",null),Hm([d.action.bound],Fm.prototype,"saveProxyHost",null),Hm([d.action.bound],Fm.prototype,"addNoProxyHost",null),Hm([d.action.bound],Fm.prototype,"removeNoProxyHost",null),Fm=Hm([u.e],Fm);const Bm=p.j.div`
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    ${vn.e} {
        align-self: stretch;
    }

    input[type=file] {
        display: none;
    }
`,Nm=p.j.div`
    font-style: italic;
`,Lm=p.j.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    > :first-child {
        flex: 1 1;
    }

    > button {
        margin-left: 10px;
    }

    > svg {
        flex: 1 1 100%;
        text-align: center;
    }
`,Um=Object(p.j)($t.b).attrs(()=>({icon:["fas","spinner"],spin:!0}))`
    margin: 0 auto;
`;let Wm=class extends i.Component{constructor(){super(...arguments),this.clientCertHostInput="",this.certFileInputRef=i.createRef(),this.decryptClientCertData=Object(d.flow)((function*(){const{pfx:e,passphrase:t}=this.clientCertData;this.clientCertState="processing",this.clientCertError=void 0;const n=yield Object(Gr.g)(e,t);this.handleClientCertValidationResult(n)}))}removeClientCertificate(e){const{clientCertificateHostMap:t}=this.props.rulesStore;delete t[e]}addClientCertificate(){const{clientCertificateHostMap:e}=this.props.rulesStore;e[this.clientCertHostInput]=this.clientCertData,this.clientCertHostInput="",this.clientCertData=void 0,this.clientCertState=void 0}onClientCertSelected(e){const t=e.target;if(!t.files||!t.files.length)return;const n=t.files[0],r=new FileReader;r.readAsArrayBuffer(n),this.clientCertState="processing",this.clientCertError=void 0;const o=this;r.addEventListener("load",Object(d.flow)((function*(){let e;o.clientCertData={pfx:r.result,filename:n.name},e=yield Object(Gr.g)(o.clientCertData.pfx,void 0),"invalid-passphrase"===e?(e=yield Object(Gr.g)(o.clientCertData.pfx,""),"valid"===e&&(o.clientCertData.passphrase=""),o.handleClientCertValidationResult(e)):o.handleClientCertValidationResult(e)}))),r.addEventListener("error",()=>{o.clientCertState="error"})}handleClientCertValidationResult(e){this.clientCertError=void 0,"valid"===e?this.clientCertState="decrypted":"invalid-passphrase"===e?this.clientCertState="encrypted":"invalid-format"===e?(this.clientCertState="error",this.clientCertError="Parsing failed"):"missing-key"===e?(this.clientCertState="error",this.clientCertError="No private key found"):"missing-cert"===e?(this.clientCertState="error",this.clientCertError="No certificate found"):Object(S.d)(e)}dropClientCertData(){this.clientCertData=void 0,this.clientCertState=void 0}render(){const{clientCertificateHostMap:e}=this.props.rulesStore;return i.createElement(i.Fragment,null,i.createElement(bm,null,"Client Certificates"),i.createElement(Bm,null,Object.entries(e).map(([e,t])=>[i.createElement(xm,{key:"host-"+e},e),i.createElement(Nm,{key:"filename-"+e},t.filename),i.createElement(mm,{key:"delete-"+e,onClick:()=>this.removeClientCertificate(e)},i.createElement($t.b,{icon:["far","trash-alt"]}))]),i.createElement(vn.e,{placeholder:"A host where the certificate should be used",value:this.clientCertHostInput,onChange:Object(d.action)(e=>{this.clientCertHostInput=e.target.value,Dm(e.target)})}),void 0===this.clientCertState?i.createElement(i.Fragment,null,i.createElement(mm,{onClick:()=>this.certFileInputRef.current.click()},"Load a client certificate"),i.createElement("input",{ref:this.certFileInputRef,type:"file",accept:".pfx,.p12,application/x-pkcs12",onChange:this.onClientCertSelected})):"processing"===this.clientCertState?i.createElement(Um,null):"decrypted"===this.clientCertState?i.createElement(Lm,null,i.createElement(Nm,null,this.clientCertData.filename),i.createElement(mm,{onClick:this.dropClientCertData},i.createElement($t.b,{icon:["fas","undo"],title:"Deselect this certificate"}))):"encrypted"===this.clientCertState?i.createElement(Lm,null,i.createElement(vn.e,{placeholder:"The passphrase for "+this.clientCertData.filename,value:this.clientCertData.passphrase||"",onChange:Object(d.action)(e=>{this.clientCertData.passphrase=e.target.value})}),i.createElement(mm,{onClick:()=>this.decryptClientCertData()},i.createElement($t.b,{icon:["fas","unlock"],title:"Decrypt with this passphrase"})),i.createElement(mm,{onClick:this.dropClientCertData},i.createElement($t.b,{icon:["fas","undo"],title:"Deselect this certificate"}))):"error"===this.clientCertState?i.createElement(Lm,null,i.createElement("p",null,i.createElement($t.e,null)," ",this.clientCertError||"Invalid certificate"),i.createElement(mm,{onClick:this.dropClientCertData},i.createElement($t.b,{icon:["fas","undo"],title:"Deselect this certificate"}))):Object(S.d)(this.clientCertState),i.createElement(mm,{disabled:!ct(this.clientCertHostInput)||"decrypted"!==this.clientCertState||!!e[this.clientCertHostInput],onClick:this.addClientCertificate},i.createElement($t.b,{icon:["fas","plus"]}))),i.createElement(fm,null,"These certificates will be used for client TLS authentication, if requested by the server, when connecting to their corresponding hostname."))}};Hm([d.observable],Wm.prototype,"clientCertHostInput",void 0),Hm([d.action.bound],Wm.prototype,"removeClientCertificate",null),Hm([d.action.bound],Wm.prototype,"addClientCertificate",null),Hm([d.observable],Wm.prototype,"clientCertData",void 0),Hm([d.observable],Wm.prototype,"clientCertState",void 0),Hm([d.observable],Wm.prototype,"clientCertError",void 0),Hm([d.action.bound],Wm.prototype,"onClientCertSelected",null),Hm([d.action.bound],Wm.prototype,"dropClientCertData",null),Wm=Hm([u.e],Wm);const zm=p.j.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    input[type=file] {
        display: none;
    }
`,_m=p.j.div`
    font-style: italic;
`,Vm=Object(p.j)(mm)`
    grid-column: 1 / span 2;
`;let Gm=class extends i.Component{constructor(){super(...arguments),this.certFileButtonRef=i.createRef(),this.addCertificate=Object(d.flow)(function*(){const{rulesStore:e}=this.props,t=this.certFileButtonRef.current;try{const n=yield Object(Mt.g)("arraybuffer",[".pem",".crt",".cert",".der","application/x-pem-file","application/x-x509-ca-cert"]),r=yield Object(Gr.e)(n);if(e.additionalCaCertificates.some(({rawPEM:e})=>e===r.rawPEM))return t.setCustomValidity("This CA is already trusted."),void t.reportValidity();e.additionalCaCertificates.push(r)}catch(e){console.warn(e);const n=Object(S.b)(e).message;t.setCustomValidity(`Could not load certificate: ${n}${n.endsWith(".")?"":"."} File must be a PEM or DER-formatted CA certificate.`),t.reportValidity()}}.bind(this))}removeCertificate(e){const{rulesStore:t}=this.props;s.pull(t.additionalCaCertificates,e)}render(){const{additionalCaCertificates:e}=this.props.rulesStore;return i.createElement(i.Fragment,null,i.createElement(bm,null,"Trusted CA Certificates"),i.createElement(zm,null,e.map(e=>{const{subject:{org:t,name:n},serial:r}=e;return[i.createElement(_m,{key:r},[t&&(!n||n.length<=5)?t:void 0,n,r?`(serial ${r})`:void 0].filter(e=>!!e).join(" ")),i.createElement(mm,{key:"delete-"+r,onClick:()=>this.removeCertificate(e)},i.createElement($t.b,{icon:["far","trash-alt"]}))]}),i.createElement(Vm,{onClick:this.addCertificate,type:"submit",ref:this.certFileButtonRef},"Load a CA certificate")),i.createElement(fm,null,"These Certificate Authority (CA) certificates will be considered as trusted certificate roots for all HTTPS requests, in addition to the existing set of built-in trusted CAs."))}};Hm([d.action.bound],Gm.prototype,"removeCertificate",null),Gm=Hm([u.e],Gm);let Jm=class extends i.Component{unwhitelistHost(e){const{whitelistedCertificateHosts:t}=this.props.rulesStore,n=t.indexOf(e);n>-1&&t.splice(n,1)}addHostToWhitelist(e){this.props.rulesStore.whitelistedCertificateHosts.push(e)}render(){const e=this.props,{rulesStore:t}=e,n=qm(e,["rulesStore"]),{whitelistedCertificateHosts:r}=t;return i.createElement(Ut.b,Object.assign({},n),i.createElement("header",null,i.createElement(Ut.c,{onCollapseToggled:n.onCollapseToggled},"Connection Settings")),s.isString(g.E.value)&&Object(g.F)(g.E.value,g.s)&&i.createElement(Fm,{rulesStore:t}),s.isString(g.E.value)&&Object(g.F)(g.E.value,g.e)&&i.createElement(Gm,{rulesStore:t}),s.isString(g.E.value)&&Object(g.F)(g.E.value,g.b)&&i.createElement(i.Fragment,null,i.createElement(Wm,{rulesStore:t})),i.createElement(bm,null,"Host HTTPS Whitelist"),i.createElement(wm,{placeholder:"A host to exclude from strict HTTPS checks",onAdd:this.addHostToWhitelist,onDelete:this.unwhitelistHost,values:r,validationFn:Dm}),i.createElement(fm,null,"Requests to these hosts will skip certificate validation and accept some older TLS configurations. These requests will be successful regardless of any self-signed, expired or otherwise invalid HTTPS configurations."))}};Hm([d.action.bound],Jm.prototype,"unwhitelistHost",null),Hm([d.action.bound],Jm.prototype,"addHostToWhitelist",null),Jm=Hm([Object(u.d)("rulesStore"),u.e],Jm);var Km=n(246),Ym=n(673),Qm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Xm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Zm=Object(p.j)(mm).attrs(()=>({type:"submit"}))`
    grid-column: 1 / span 3;
`,eg=Object(p.j)(vn.e)`
    align-self: stretch;
`,tg=p.j.div`
    font-family: ${e=>e.theme.monoFontFamily};
`,ng=p.j.div`
    grid-column: 2;
    font-style: italic;

    display: flex;
    align-items: baseline;
`,rg=Object(p.j)(mm)`
    margin-left: auto;
`,og=Object(p.j)(mm)``,sg=Object(p.j)(mm)``,ag=p.j.div`
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;
    align-items: baseline;
`;function ig(e,t){e.setCustomValidity(t||""),e.reportValidity()}let cg=class extends i.Component{constructor(){super(...arguments),this.uploadSpecButtonRef=i.createRef(),this.specProcessingInProgress=!1,this.enteredBaseUrl="",this.baseUrlInputRef=i.createRef(),this.uploadSpec=Object(d.flow)((function*(){ig(this.uploadSpecButtonRef.current);try{const e=yield Object(Mt.g)("text",[".json",".yaml"]);if(!e)return;this.specProcessingInProgress=!0;let t,n=yield Object(h.a)(()=>JSON.parse(e)).catch(()=>Km.parse(e)).catch(e=>{throw console.warn("OpenAPI spec parsing error:",e),new Error("File could not be parsed as either YAML or JSON")});if("2.0"===n.swagger)t=yield new Promise((e,t)=>{Ym.convertObj(n,{patch:!0,resolve:!1},(n,r)=>{if(n)return t(n);r.warnings&&r.warnings.length&&(console.warn("Some issues found whilst parsing spec:"),r.warnings.forEach(e=>console.warn(e))),e(r.openapi)})});else{if(!n.openapi||!Jc.satisfies(n.openapi,"^3"))throw new Error("This file doesn't contain an OpenAPI v3 or Swagger v2 specification");t=n}yield Object(Gr.a)(t,["api.build.example"]),this.selectedSpec=t;const{servers:r}=t;if(r&&r.length>=1){let{url:e,variables:t}=r[0];t&&Object.entries(t).forEach(([t,n])=>{e=e.replace(`{${t}}`,n.default.toString())}),requestAnimationFrame(()=>this.onBaseUrl(e))}}catch(e){console.log(e),ig(this.uploadSpecButtonRef.current,Object(S.b)(e).message)}finally{this.specProcessingInProgress=!1}})).bind(this),this.saveApi=Object(d.flow)((function*(){const e=this.enteredBaseUrl.replace(/https?:\/\//,""),t=yield Object(Gr.a)(this.selectedSpec,["http://"+e,"https://"+e]);this.props.apiStore.addCustomApi(e,t),this.enteredBaseUrl="",this.selectedSpec=void 0})).bind(this)}render(){const e=this.props,{apiStore:t}=e,n=Xm(e,["apiStore"]);return i.createElement(Ut.b,Object.assign({},n),i.createElement("header",null,i.createElement(Ut.c,{onCollapseToggled:n.onCollapseToggled},"API Settings")),i.createElement(en.c,null,"OpenAPI specifications"),i.createElement(ag,null,s.map(t.customOpenApiInfo,(e,t)=>i.createElement(i.Fragment,{key:t},i.createElement(tg,null,t),i.createElement(ng,null,e.info.title),i.createElement(sg,{onClick:()=>this.deleteApi(t)},i.createElement($t.b,{icon:["far","trash-alt"]})))),this.selectedSpec?i.createElement(i.Fragment,null,i.createElement(eg,{placeholder:"Base URL for requests to match against this spec",value:this.enteredBaseUrl,onChange:e=>this.onBaseUrl(e.target.value),ref:this.baseUrlInputRef}),i.createElement(ng,null,this.selectedSpec.info.title,i.createElement(rg,{onClick:this.resetApiInputs},i.createElement($t.b,{icon:["fas","undo"]}))),i.createElement(og,{disabled:!this.selectedSpec||!this.enteredBaseUrl||!!this.baseUrlError,onClick:this.saveApi},i.createElement($t.b,{icon:["fas","save"]}))):i.createElement(Zm,{type:"submit",onClick:this.specProcessingInProgress?void 0:this.uploadSpec,ref:this.uploadSpecButtonRef},this.specProcessingInProgress?i.createElement($t.b,{icon:["fas","spinner"],spin:!0}):"Load an OpenAPI or Swagger spec")),i.createElement(fm,null,"APIs added here will provide documentation and validation for all matching requests within their base URL."),i.createElement(fm,null,"HTTP Toolkit also includes built-in specifications for 2600+ popular public APIs."))}validateBaseUrl(e){if(e.startsWith("/"))throw new Error("Base URLs must specify a host");e.startsWith("http://")||e.startsWith("https://")||(e="https://"+e);const t=new URL(e);if(!["http:","https:"].includes(t.protocol))throw new Error("Base URLs must be HTTP or HTTPS");if(t.search)throw new Error("Base URLs can't contain query parameters");if(t.hash)throw new Error("Base URLs can't contain hash fragments");const n=Object.keys(this.props.apiStore.customOpenApiInfo),r=e.replace(/^https?:\/\//,"");if(n.includes(r))throw new Error("This URL is already mapped to an API")}onBaseUrl(e){this.enteredBaseUrl=e;const t=this.baseUrlInputRef.current;try{this.validateBaseUrl(e),this.baseUrlError=void 0,ig(t)}catch(e){this.baseUrlError=Object(S.b)(e),ig(t,e instanceof TypeError?"Not a valid URL":Object(S.b)(e).message)}}resetApiInputs(){this.enteredBaseUrl="",this.baseUrlError=void 0,this.selectedSpec=void 0}deleteApi(e){this.props.apiStore.deleteCustomApi(e)}};Qm([d.observable.ref],cg.prototype,"selectedSpec",void 0),Qm([d.observable],cg.prototype,"specProcessingInProgress",void 0),Qm([d.observable],cg.prototype,"enteredBaseUrl",void 0),Qm([d.observable],cg.prototype,"baseUrlError",void 0),Qm([d.action.bound],cg.prototype,"onBaseUrl",null),Qm([d.action.bound],cg.prototype,"resetApiInputs",null),Qm([d.action.bound],cg.prototype,"deleteApi",null),cg=Qm([Object(u.d)("apiStore"),u.e],cg);var lg=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const dg=p.j.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`,ug=p.j.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,pg=p.j.section`
    margin: 0px auto 20px;
    padding: 40px;
    max-width: 800px;
    position: relative;

    * {
        transition: background-color 0.3s, margin-bottom 0.1s;
    }
`,hg=p.j.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    margin-bottom: 40px;
`,mg=p.j.div`
    display: grid;
    grid-template-columns: fit-content(40%) 1fr;
    grid-gap: 10px;
`,gg=p.j.div`
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`,fg=p.j.div`
    margin-top: 30px;

    strong {
        user-select: all;
    }
`,bg=p.j.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 3px solid #999;
    margin: auto 20px;
`,yg=p.j.div`
    width: 60px;
    height: 60px;
    background-color: ${e=>e.theme[e.themeColor]};
`,vg=p.j.div`
    border: 3px solid #999;
    height: 300px;
    flex-grow: 1;
    margin: auto 0;
`,xg=Object(p.j)($t.b).attrs(()=>({icon:["fas","spinner"],spin:!0}))`
    margin: 0 0 0 10px;
`;let wg=class extends i.Component{constructor(){super(...arguments),this.confirmSubscriptionCancellation=()=>{const e=this.props.accountStore.userSubscription;if(!e)throw new Error("Can't cancel without a subscription");const t=Ze.SubscriptionPlans[e.plan].name;let n;if("active"===e.status)n=`It will remain usable until it expires in ${Object(m.distanceInWordsToNow)(e.expiry)} but will not renew.`;else{if("past_due"!==e.status)throw new Error("Cannot cancel subscription with status "+e.status);n="No more renewals will be attempted and it will deactivate immediately."}confirm([`This will cancel your HTTP Toolkit ${t} subscription.`,n,"Are you sure?"].join("\n\n"))&&this.props.accountStore.cancelSubscription().catch(e=>{alert(e.message)})}}render(){var e;const{uiStore:t}=this.props,{isPaidUser:n,isPastDueUser:r,userEmail:o,userSubscription:a,subscriptionPlans:c,isAccountUpdateInProcess:l,getPro:d,canManageSubscription:u,logOut:p}=this.props.accountStore,h=t.settingsCardProps;if(!n&&!r)return i.createElement(dg,null,i.createElement(vn.a,{onClick:()=>d("settings-page")},"Get Pro"));const f=a;return i.createElement(ug,null,i.createElement(pg,null,i.createElement(hg,null,"Settings"),i.createElement(Ut.b,Object.assign({},h.account),i.createElement("header",null,i.createElement(Ut.c,{onCollapseToggled:h.account.onCollapseToggled},"Account")),i.createElement(mg,null,i.createElement(en.c,null,"Account email"),i.createElement(en.g,null,o),i.createElement(en.c,null,"Subscription status"),i.createElement(en.g,null,{active:"Active",trialing:"Active (trial)",past_due:i.createElement("strong",{title:Yn`
                                            Your subscription payment failed, and will be reattempted.
                                            If retried payments fail your subscription will be cancelled.
                                        `},"Past due ",i.createElement($t.e,null)),deleted:"Cancelled"}[f.status]||"Unknown",l&&i.createElement(xg,null)),i.createElement(en.c,null,"Subscription plan"),i.createElement(en.g,null,"fulfilled"===c.state?null===(e=c.value[f.plan])||void 0===e?void 0:e.name:s.startCase(f.plan)),i.createElement(en.c,null,{active:"Next renews",trialing:"Renews",past_due:"Next payment attempt",deleted:"Ends"}[f.status]||"Current period ends"),i.createElement(en.g,null,Object(m.distanceInWordsStrict)(new Date,f.expiry,{addSuffix:!0,partialMethod:"round"})," (",Object(m.format)(f.expiry.toString(),"Do [of] MMMM YYYY"),")")),i.createElement(gg,null,f.lastReceiptUrl&&i.createElement(gm,{href:f.lastReceiptUrl,target:"_blank",rel:"noreferrer noopener"},"View latest invoice"),u&&i.createElement(i.Fragment,null,f.updateBillingDetailsUrl&&i.createElement(gm,{href:f.updateBillingDetailsUrl,target:"_blank",rel:"noreferrer noopener",highlight:"past_due"===f.status},"Update billing details"),i.createElement(mm,{onClick:this.confirmSubscriptionCancellation,disabled:l},"Cancel subscription",l&&i.createElement(xg,null))),i.createElement(mm,{onClick:p},"Log out")),i.createElement(fg,null,"Questions? Email ",i.createElement("strong",null,"billing@httptoolkit.com"))),n&&i.createElement(i.Fragment,null,s.isString(g.E.value)&&Object(g.F)(g.E.value,g.r)&&i.createElement(i.Fragment,null,i.createElement(Rm,Object.assign({},h.proxy)),i.createElement(Jm,Object.assign({},h.connection))),i.createElement(cg,Object.assign({},h.api)),i.createElement(Ut.b,Object.assign({},h.themes),i.createElement("header",null,i.createElement(Ut.c,{onCollapseToggled:h.themes.onCollapseToggled},"Themes")),i.createElement(lm,null,i.createElement(dm,{onClick:e=>t.setTheme(e),isSelected:e=>"string"==typeof e?t.themeName===e:s.isEqual(e,t.theme)},i.createElement(um,{icon:["fas","magic"],value:"automatic"},"Automatic"),i.createElement(um,{icon:["fas","sun"],value:"light"},"Light"),i.createElement(um,{icon:["fas","moon"],value:"dark"},"Dark"),i.createElement(um,{icon:["fas","adjust"],value:"high-contrast"},"High Contrast")),i.createElement(bg,null,i.createElement(yg,{themeColor:"mainColor"}),i.createElement(yg,{themeColor:"mainBackground"}),i.createElement(yg,{themeColor:"highlightColor"}),i.createElement(yg,{themeColor:"highlightBackground"}),i.createElement(yg,{themeColor:"primaryInputColor"}),i.createElement(yg,{themeColor:"primaryInputBackground"}),i.createElement(yg,{themeColor:"containerWatermark"}),i.createElement(yg,{themeColor:"containerBorder"}),i.createElement(yg,{themeColor:"mainLowlightBackground"}),i.createElement(yg,{themeColor:"containerBackground"})),i.createElement(vg,null,i.createElement(Vo,{contentId:null,language:"html",defaultValue:pm})))))))}};wg=lg([Object(u.d)("accountStore"),Object(u.d)("uiStore"),u.e],wg);const Eg=wg;var Cg=n(249);const Tg=p.j.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: ${e=>e.theme.modalGradient};

    z-index: 10;
    opacity: ${e=>e.opacity||.9};
`,jg=Object(p.j)(vn.c)`
    padding: 5px 20px;
    margin: 20px auto;

    &:not([disabled]) {
        color: ${e=>e.theme.mainBackground};
        border-color: ${e=>e.theme.mainBackground};
    }

    border-color: rgba(255, 255, 255, 0.6);
    font-size: ${e=>e.theme.textSize};
`;var Og=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Sg=p.j.dialog`
    position: absolute;

    top: 50%;
    left: 50%;

    /* There's default styling for dialog, so undo it: */
    bottom: auto;
    right: auto;

    transform: translate(-50%, -50%);
    z-index: 99;

    display: flex;
    flex-direction: row;
    color: ${e=>e.theme.mainBackground};

    background-color: transparent;
    border: none;

    min-width: 850px;
    max-width: 980px;
    width: 90%;
`,kg=p.j.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-right: 20px;
    max-width: 400px;
`,Pg=p.j.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    letter-spacing: -1px;
    text-align: center;
`,Rg=Object(p.j)(vn.f)`
    background: none;
    border: none;

    margin: 10px auto;
    padding: 10px 10px;

    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.headingSize};
    color: ${e=>e.theme.mainColor};

    display: flex;
    align-items: center;
    flex-direction: row;

    > svg {
        margin: 0 10px;
        z-index: 1;
    }
`,Hg=p.j.span`
    padding: 10px 15px;
    border-radius: 8px;

    &:first-child {
        padding-right: 40px;
        margin-right: -40px;
    }

    &:last-child {
        padding-left: 40px;
        margin-left: -40px;
    }

    ${e=>e.selected&&p.f`
        background-color: ${e=>e.theme.mainBackground};
        border-bottom: 3px solid ${e=>e.theme.containerBorder};
        box-shadow: 0 4px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha/2});
    `}

    ${e=>!e.selected&&p.f`
        color: ${e=>e.theme.mainBackground};
        opacity: 0.7;
    `}
`,qg=p.j.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 300px;
    margin: 50px auto 0;

    > p {
        margin-bottom: 10px;
        text-align: center;
        word-break: break-word;
    }
`,Ag=Object(p.j)(vn.c)`
    &:not(:last-child) {
        margin-bottom: 10px;
    }

    &:not([disabled]) {
        color: ${e=>e.theme.mainBackground};
        border-color: ${e=>e.theme.mainBackground};
    }
`,Ig=p.j.span`
    white-space: nowrap;
`,Dg=p.j.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${e=>e.theme.mainColor};
    max-width: 830px;
`,$g=p.j.section`
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha/2});
    border-radius: 4px;
    border: 1px solid ${e=>e.theme.containerBorder};

    > * {
        padding: 0 20px;
    }

    flex: 1 1;

    ${e=>e.highlighted?p.f`
        background-color: ${e=>e.theme.mainBackground};
        color: ${e=>e.theme.mainColor};

        z-index: 1;
        margin: -15px -5px -15px 0;

        flex-basis: 1%;

        > ${Mg} {
            padding: 37.5px 0;
        }
    `:p.f`
        background-color: ${e=>e.theme.mainLowlightBackground};
        opacity: 0.9;
    `}
`,Mg=p.j.div`
    width: 100%;
    padding: 30px 0;
    color: ${e=>e.theme.popColor};
    text-align: center;
    font-weight: bold;
    font-size: ${e=>e.theme.loudHeadingSize};
`,Fg=p.j.div`
    text-align: center;
    color: ${e=>e.theme.mainColor};
    margin: 0 20px;
`,Bg=p.j.div`
    font-size: ${e=>e.theme.largeHeadingSize};
    color: ${e=>e.theme.mainColor};
    font-weight: bold;
`,Ng=p.j.small`
    display: block;
    font-size: 80%;
    opacity: 0.8;
`,Lg=p.j.div`
    display: block;
    margin-top: 10px;
    font-size: ${e=>e.theme.headingSize};
`,Ug=p.j.ul`
    padding: 40px 20px 30px;
    font-size: ${e=>e.theme.textSize};
    line-height: 1.2;
`,Wg=p.j.li`
    margin-top: 20px;
    margin-left: 0;
    list-style-type: none;

    &:first-child {
        margin-top: 0;
    }
`,zg=p.j.li`
    &:not(:first-child) {
        margin-top: 20px;
    }

    strong {
        color: ${e=>e.theme.popColor};
    }
`,_g=Object(p.j)(zg)`
    list-style: circle;
    margin-left: 20px;
`,Vg=p.j.ul`
    margin-top: 15px;

    > ${_g} {
        margin-top: 4px;
    }
`,Gg=p.j.div`
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: bold;

    > ${vn.a} {
        text-align: center;
        width: 100%
    }
`,Jg=p.j.div`
    color: ${e=>e.theme.mainBackground};
    font-size: ${e=>e.theme.textSize};

    margin-top: 10px;
    text-align: center;
    line-height: 1.2;

    strong {
        font-weight: bold;
    }

    a {
        color: ${e=>e.theme.mainBackground};
    }

    p {
        margin-top: 10px;
    }
`,Kg=p.j.div`
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%) scale(2);
    z-index: 99;

    display: flex;
    flex-direction: column;
    text-align: center;

    > p {
        max-width: 500px;
        line-height: 1.2;
    }

    > p, > svg {
        color: #fff;
        margin: 20px auto;
    }

    a[href] {
        color: #6e8ff4;
    }
`;let Yg=class extends i.Component{constructor(){super(...arguments),this.planCycle="monthly",this.getPlanMonthlyPrice=e=>{if(!this.isPricingAvailable)throw new Error("Can't query prices if pricing is not available");const t=this.props.plans.value[this.getSKU(e)];if("priceless"===t.prices)throw new Error("Can't show price for non-priced plan");return t.prices.monthly},this.getSKU=e=>`${e}-${this.planCycle}`,this.buyPlan=e=>{this.props.onPlanPicked(this.getSKU(e))},this.closePicker=()=>{this.props.onPlanPicked(void 0)}}render(){const{isPricingAvailable:e,planCycle:t,toggleCycle:n,buyPlan:r,closePicker:o,getPlanMonthlyPrice:s}=this,{email:a,logOut:c,logIn:l}=this.props;return e?i.createElement(Sg,{open:!0},i.createElement(kg,null,i.createElement(Pg,null,"Choose your Plan"),i.createElement(Rg,{onClick:n},i.createElement(Hg,{selected:"monthly"===t},"Monthly"),i.createElement(Cg.a,{icon:["fas","annual"===t?"toggle-on":"toggle-off"]}),i.createElement(Hg,{selected:"annual"===t},"Annual")),i.createElement(Jg,null,i.createElement("p",null,i.createElement("strong",null,"Cancel in two clicks, anytime"),". ",i.createElement("br",null),"Have questions? ",i.createElement("strong",null,i.createElement("a",{href:"https://httptoolkit.com/docs/guides/subscription-faq"},"Read the FAQ"))," or email billing@httptoolkit.com."),i.createElement("p",null,"By subscribing to a paid plan, you accept ",i.createElement(Ig,null,i.createElement("a",{href:"https://httptoolkit.com/terms-of-service"},"the HTTP Toolkit Terms of Service")),".")),i.createElement(qg,null,a&&i.createElement("p",null,"Logged in as ",i.createElement(Ig,null,a),"."),a?i.createElement(Ag,{onClick:c},"Log out"):i.createElement(Ag,{onClick:l},"Log into existing account"),i.createElement(Ag,{onClick:o},"Cancel"))),i.createElement(Dg,null,i.createElement($g,{highlighted:!0},i.createElement(Mg,null,"Professional"),i.createElement(Fg,null,i.createElement(Bg,null,s("pro")," / month"),i.createElement(Ng,null,"plus local tax, paid ","annual"===this.planCycle?"annually":"monthly"),i.createElement(Lg,{title:"Licensed for a specific individual. See the terms of service for full details."},"Personal user account")),i.createElement(Ug,null,i.createElement(zg,null,i.createElement("strong",null,"Automated HTTP mocking & rewriting"),", including traffic redirection, mock responses, and errors & timeouts."),i.createElement(zg,null,i.createElement("strong",null,"Reusable mock rules"),". Persistent by default, plus import/export so you can store, reuse & share them later."),i.createElement(zg,null,i.createElement("strong",null,"Import/export for collected traffic"),", as either ",i.createElement("a",{href:"https://en.wikipedia.org/wiki/HAR_(file_format)",target:"_blank",rel:"noopener noreferrer"},"HARs")," or ready-to-use code for 20+ tools."),i.createElement(zg,null,i.createElement("strong",null,"Advanced HTTP debugging & inspection tools"),", including compression & caching performance analysis."),i.createElement(zg,null,i.createElement("strong",null,"Validation & API documentation for 2600+ built-in APIs"),", from AWS to GitHub to Stripe, plus your own custom ",i.createElement("a",{href:"https://swagger.io/docs/specification/about/",target:"_blank",rel:"noopener noreferrer"},"OpenAPI")," specs."),i.createElement(zg,null,i.createElement("strong",null,"Advanced customization"),", including UI themes, whitelisted & client certificates, ports, and upstream proxies."),i.createElement(zg,null,i.createElement("strong",null,"Support ongoing development!"))),i.createElement(Gg,null,i.createElement(vn.a,{onClick:()=>r("pro")},"Get Pro Now"))),i.createElement($g,null,i.createElement(Mg,null,"Team"),i.createElement(Fg,null,i.createElement(Bg,null,s("team")," / user / month"),i.createElement(Ng,null,"plus local tax, paid ","annual"===this.planCycle?"annually":"monthly"),i.createElement(Lg,{title:"One team license, linked to many individuals, who can be added and removed. See the terms of service for details."},"Team account")),i.createElement(Ug,null,i.createElement(Wg,null,i.createElement("em",null,"All Professional features, and:")),i.createElement(zg,null,i.createElement("strong",null,"Centralized billing")," to simplify payment for your team"),i.createElement(zg,null,"Licensed to your team, rather than individuals"),i.createElement(zg,null,i.createElement("strong",null,"Centralized control")," to easily manage your team members and subscription"),i.createElement(zg,null,i.createElement("strong",null,"Team workspaces")," for low-friction collaboration ",i.createElement(Ig,null,"(",i.createElement("em",null,"coming soon"),")")),i.createElement(Wg,null,"Options available on request:"),i.createElement(Vg,null,i.createElement(_g,null,"Self-hosted infrastructure"),i.createElement(_g,null,"Private support"),i.createElement(_g,null,"Training & consultancy"),i.createElement(_g,null,"Bulk discounts"))),i.createElement(Gg,null,i.createElement(vn.b,{href:"https://httptoolkit.com/contact"},"Get in touch"))))):i.createElement(Kg,null,i.createElement("p",null,"Unable to connect to HTTP Toolkit account servers..."),i.createElement("p",null,"Having problems? Open an issue ",i.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new/choose"},"on GitHub")," or email ",i.createElement("strong",null,"billing@httptoolkit.com")," to ask for help."),i.createElement($t.b,{icon:["fac","spinner-arc"],spin:!0,size:"10x"}),i.createElement(jg,{onClick:o},"Cancel"))}toggleCycle(){this.planCycle="annual"===this.planCycle?"monthly":"annual"}get isPricingAvailable(){return"fulfilled"===this.props.plans.state}};Og([d.observable],Yg.prototype,"planCycle",void 0),Og([d.action.bound],Yg.prototype,"toggleCycle",null),Og([d.computed],Yg.prototype,"isPricingAvailable",null),Yg=Og([u.e],Yg);const Qg=Object(p.j)(e=>i.createElement("div",{className:e.className},i.createElement("p",null,"The checkout has been opened in your browser.",i.createElement("br",null),"Please follow the steps there to complete your subscription."),i.createElement("p",null,"Have questions? Take a look at ",i.createElement("a",{href:"https://httptoolkit.com/docs/guides/subscription-faq"},"the FAQ")," or email ",i.createElement("strong",null,"billing@httptoolkit.com"),"."),i.createElement($t.b,{icon:["fac","spinner-arc"],spin:!0,size:"10x"}),i.createElement(jg,{onClick:e.onCancel},"Cancel checkout")))`
    > p {
        max-width: 500px;
        line-height: 1.2;
    }

    > p, > svg {
        color: #fff;
        margin: 20px auto;
    }

    a[href] {
        color: #6e8ff4;
    }

    text-align: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    z-index: 100;
`;var Xg=n(168),Zg=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let ef=class extends i.Component{constructor(){super(...arguments),this.renderItem=(e,t)=>{if("separator"===e.type)return i.createElement(Xg.c,{key:t});if("option"===e.type)return i.createElement(Xg.a,{key:t,onClick:()=>e.callback(this.props.menuState.data),disabled:!1===e.enabled},e.label);if("submenu"===e.type)return i.createElement(Xg.d,{key:t,label:e.label,disabled:!1===e.enabled},e.items.map(this.renderItem));throw new S.a(e,e=>e.type)},this.onVisibilityChange=e=>{e||this.props.onHidden()}}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.menuState;setTimeout(()=>{Xg.e.show({id:"menu",event:e.event})},10)}))}render(){return i.createElement(tf,{id:"menu",onVisibilityChange:this.onVisibilityChange},this.props.menuState.items.map(this.renderItem))}};ef=Zg([u.e],ef);const tf=Object(p.j)(Xg.b)`
    --contexify-menu-bgColor: ${e=>e.theme.mainLowlightBackground};
    --contexify-item-color: ${e=>e.theme.mainColor};
    --contexify-separator-color: ${e=>e.theme.containerBorder};

    --contexify-rightSlot-color: ${e=>e.theme.containerWatermark};
    --contexify-activeRightSlot-color: ${e=>e.theme.mainColor};

    --contexify-arrow-color: ${e=>e.theme.containerWatermark};
    --contexify-activeArrow-color: ${e=>e.theme.mainColor};

    --contexify-activeItem-color: #fff;
    --contexify-activeItem-bgColor: #3498db;
`;var nf=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},rf=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const of=p.j.div`
    display: flex;
    height: 100%;

    > :not(:first-child) {
        flex: 1 1;
        width: calc(100% - ${"80px"});
    }
`,sf=e=>{var{children:t}=e,n=rf(e,["children"]);const{pageComponent:r}=n,o=rf(n,["pageComponent"]);return i.createElement(n.pageComponent,Object.assign({},o),t)},af=e=>(Object(Mt.h)("Ctrl+1,Cmd+1",t=>{e.navigate("/intercept"),t.preventDefault()},[e.navigate]),Object(Mt.h)("Ctrl+2,Cmd+2",t=>{e.navigate("/view"),t.preventDefault()},[e.navigate]),Object(Mt.h)("Ctrl+3,Cmd+3",t=>{e.navigate("/mock"),t.preventDefault()},[e.navigate]),Object(Mt.h)("Ctrl+9,Cmd+9",t=>{e.canVisitSettings&&e.navigate("/settings"),t.preventDefault()},[e.navigate,e.canVisitSettings]),null);let cf=class extends i.Component{get canVisitSettings(){return this.props.accountStore.isPaidUser||this.props.accountStore.isPastDueUser}get canVisitSend(){return this.props.accountStore.featureFlags.includes("send")&&("fulfilled"!==g.E.state||Object(g.F)(g.E.value,g.w))}get menuItems(){return[{name:"Intercept",title:`Connect clients to HTTP Toolkit (${Mt.a}+1)`,icon:["fas","plug"],position:"top",type:"router",url:"/intercept"},{name:"View",title:`View intercepted HTTP traffic (${Mt.a}+2)`,icon:["fas","search"],position:"top",type:"router",url:"/view"},..."fulfilled"!==g.E.state||Object(g.F)(g.E.value,g.o)?[{name:"Mock",title:`Add rules to mock & rewrite HTTP traffic (${Mt.a}+3)`,icon:["fas","theater-masks"],position:"top",type:"router",url:"/mock"}]:[],...this.canVisitSend?[{name:"Send",title:`Send HTTP requests directly (${Mt.a}+4)`,icon:["far","paper-plane"],position:"top",type:"router",url:"/send"}]:[],this.canVisitSettings?{name:"Settings",title:`Reconfigure HTTP Toolkit and manage your account (${Mt.a}+9)`,icon:["fas","cog"],position:"bottom",type:"router",url:"/settings"}:{name:"Get Pro",title:"Sign up for HTTP Toolkit Pro",icon:["far","star"],position:"bottom",type:"callback",onClick:()=>this.props.accountStore.getPro("sidebar")},{name:"Give feedback",title:"Suggest features or report issues",icon:["far","comment"],position:"bottom",highlight:!0,type:"web",url:"https://github.com/httptoolkit/httptoolkit/issues/new/choose"}]}componentDidMount(){Object(u.c)(this,C.listen(({location:e})=>{}))}render(){const{modal:e,setSelectedPlan:t,subscriptionPlans:n,userEmail:r,logIn:o,logOut:s,cancelCheckout:a}=this.props.accountStore,{contextMenuState:c,clearHtmlContextMenu:l}=this.props.uiStore;return i.createElement(w.b,{history:C},i.createElement(af,{navigate:C.navigate,canVisitSettings:this.canVisitSettings}),i.createElement(of,{"aria-hidden":!!e,inert:!!e,ref:t=>t&&(e?t.setAttribute("inert",""):t.removeAttribute("inert"))},i.createElement(fo,{items:this.menuItems}),i.createElement(w.e,null,i.createElement(w.d,{noThrow:!0,from:"/",to:"/intercept"}),i.createElement(sf,{path:"/intercept",pageComponent:So}),i.createElement(sf,{path:"/view",pageComponent:Pd}),i.createElement(sf,{path:"/view/:eventId",pageComponent:Pd}),i.createElement(sf,{path:"/mock",pageComponent:qh}),i.createElement(sf,{path:"/mock/:initialRuleId",pageComponent:qh}),i.createElement(sf,{path:"/send",pageComponent:cm}),i.createElement(sf,{path:"/settings",pageComponent:Eg}))),!!e&&i.createElement(Tg,null),"pick-a-plan"===e&&i.createElement(Yg,{email:r,onPlanPicked:t,logOut:s,logIn:o,plans:n}),"post-checkout"===e&&i.createElement(Qg,{onCancel:a}),c&&i.createElement(ef,{menuState:c,onHidden:l}))}};nf([d.computed],cf.prototype,"canVisitSettings",null),nf([d.computed],cf.prototype,"canVisitSend",null),nf([d.computed],cf.prototype,"menuItems",null),cf=nf([Object(u.d)("accountStore"),Object(u.d)("uiStore"),u.e],cf);const lf=cf,df=Object(u.d)("uiStore")(Object(u.e)(e=>i.createElement(p.d,{theme:e.uiStore.theme},i.createElement(p.c,{disableVendorPrefixes:!0},e.children))));var uf=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const pf=Object(p.j)(e=>i.createElement("section",{className:e.className},e.children))`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow-y: auto;

    color: ${e=>e.theme.mainColor};

    h1 {
        font-size: ${e=>e.theme.screamingHeadingSize};
        font-weight: bold;
        margin-bottom: 50px;
    }

    h2 {
        font-size: ${e=>e.theme.loudHeadingSize};
        margin-bottom: 50px;
    }

    button, a {
        display: block;
        margin: 40px 40px 0;

        padding: 20px;

        font-size: ${e=>e.theme.loudHeadingSize};
        font-weight: bolder;
    }
`,hf=p.j.div`
    display: flex;
    flex-wrap: wrap;
`,mf=p.j.code`
    font-family: ${e=>e.theme.monoFontFamily};
    white-space: preserve;
`;let gf=class extends i.Component{componentDidCatch(e,t){this.error=e,o.a.withScope(n=>{Object.keys(t).forEach(e=>{n.setExtra(e,t[e])}),o.a.captureException(e)})}render(){var e;return this.error?i.createElement(pf,null,i.createElement("h1",null,"Oh no!"),i.createElement("h2",null,"Sorry, it's all gone wrong."),Object(S.c)(this.error)&&i.createElement(mf,null,null!==(e=this.error.stack)&&void 0!==e?e:this.error.message),i.createElement(hf,null,i.createElement(vn.b,{href:"https://github.com/httptoolkit/httptoolkit/issues/new?template=bug.yml&title=[UI Crash]%3A+"+(this.error.message||"")},"Tell us what happened"),i.createElement(vn.a,{onClick:()=>window.location.reload()},"Reload HTTP Toolkit"))):this.props.children}};uf([d.observable],gf.prototype,"error",void 0),uf([d.action],gf.prototype,"componentDidCatch",null),gf=uf([u.e],gf);var ff=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};document.dispatchEvent(new Event("load:executing")),r.config({name:"httptoolkit",version:1});const bf=new URLSearchParams(window.location.search).get("authToken");r.setItem("latest-auth-token",bf),Object(o.b)(""),console.log(`Initialising UI (version ${g.y})`);d.configure({enforceActions:"observed"}),Object(h.b)(5e3).then((function(){return oo(this,void 0,void 0,(function*(){so();try{const o=yield(e={scope:"/"},n="/ui-update-worker.js",r=t,"function"==typeof e?n=e(n):r=e,"serviceWorker"in navigator?navigator.serviceWorker.register(n,r):Promise.reject(new no));console.log("Service worker loaded"),o.update().catch(console.log),setInterval(()=>{so(),o.update().catch(console.log)},3e5)}catch(e){if(e instanceof no)return void console.warn("Service worker not supported - cached & offline startup will not be available");throw e}var e,t,n,r}))})),function(){const{runtimeDependencies:e}=ro;let t=!1;g.E.then(n=>{Object(g.F)(n,e["httptoolkit-server"])||t||(ao(),t=!0)}).catch(()=>{}),g.C.then(n=>{Object(g.F)(n,e["httptoolkit-desktop"])||t||(ao(),t=!0)}).catch(()=>{})}();const yf=new nt(()=>C.navigate("/settings")),vf=new eo(yf),xf=new Xe(yf),wf=new mt(yf),Ef=new zr(wf,yf),Cf=new Dt.a(yf,wf,(function(e){return ff(this,void 0,void 0,(function*(){let t;return yield Tf.initialized,yield d.when(()=>(t=s.find(Tf.exchanges,{id:e}),!!t&&t.isCompletedRequest())),C.navigate("/view/"+e),t}))})),Tf=new It(wf,vf,Cf),jf=new to.a(Tf,Cf),Of={accountStore:yf,apiStore:vf,uiStore:xf,proxyStore:wf,eventsStore:Tf,interceptorStore:Ef,rulesStore:Cf,sendStore:jf},Sf=Promise.all(Object.values(Of).map(e=>e.initialized));Sf.then(()=>{so(),console.log("App started, rendering"),document.dispatchEvent(new Event("load:rendering")),l.render(i.createElement(u.b,Object.assign({},Of),i.createElement(df,null,i.createElement(gf,null,i.createElement(p.a,null),i.createElement(lf,null)))),document.querySelector("#app"))});Promise.race([Sf,Object(h.b)(1e4).then(()=>ff(void 0,void 0,void 0,(function*(){throw console.log("Previous server version was",yield g.D),Object.assign(new Error("Failed to initialize application"),{isTimeout:!0})})))]).catch(e=>{const t=Object.assign(new Event("load:failed"),{error:e});document.dispatchEvent(t),Object(o.c)(e),Sf.then(()=>{g.E.then(e=>ff(void 0,void 0,void 0,(function*(){console.log("Server version was",yield g.D,"now started late with",e),Object(o.c)("Successfully initialized application, but after timeout")})))})})},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"g",(function(){return a})),n.d(t,"i",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return u})),n.d(t,"l",(function(){return p})),n.d(t,"h",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return g}));var r=n(4);const o="^[!#$%&'*+\\-.^_`\\|~A-Za-z0-9]+$",s=new RegExp(o),a=e=>Object.entries(e||{}).reduce((e,[t,n])=>(Array.isArray(n)?e=e.concat(n.map(e=>[t,e])):e.push([t,n||""]),e),[]),i=e=>e.reduce((e,[t,n])=>{const r=t.toLowerCase(),o=e[r];return void 0===o?e[r]=n:"string"==typeof o?e[r]=[o,n]:o.push(n),e},{}),c=(e,t)=>{if(Array.isArray(e)){t=t.toLowerCase();const n=r.findLast(e,([e])=>e.toLowerCase()===t);return null==n?void 0:n[1]}{const n=e[t];return Array.isArray(n)?n[n.length-1]:n}},l=(e,t)=>{if(Array.isArray(e))return t=t.toLowerCase(),e.filter(([e])=>e.toLowerCase()===t).map(([e,t])=>t);{const n=e[t];return Array.isArray(n)?n:void 0!==n?[n]:[]}},d=(e,t,n,o={})=>{const s=t.toLowerCase();if(Array.isArray(e)){const a=r.findLast(e,([e])=>e.toLowerCase()===s);a?a[1]=n:o.prepend?e.unshift([t,n]):e.push([t,n])}else{e[Object.keys(e).find(e=>e.toLowerCase()===s)||t]=n}},u=(e,t)=>{const n=t.toLowerCase();if(Array.isArray(e)){const t=r.findLastIndex(e,([e])=>e.toLowerCase()===n);-1!==t&&e.splice(t,1)}else{delete e[Object.keys(e).find(e=>e.toLowerCase()===n)||t]}},p=(e,t)=>(e=r.cloneDeep(e),Object.entries(t).forEach(([t,n])=>d(e,t,n)),e);function h(e){return Array.isArray(e)?e[e.length-1]:e}function m(e,t=","){return Array.isArray(e)?r.flatMap(e,e=>e.split(t).map(e=>e.trim())):e?e.split(t).map(e=>e.trim()):[]}function g(e){return r.mapValues(r.pickBy(e,(e,t)=>e&&t),e=>r.isArray(e)?e.join(", "):e)}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(12);const o=Object.values(r.Method).filter(e=>"string"==typeof e)},18:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"l",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"n",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return g})),n.d(t,"m",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return x}));var r=n(4),o=n(79),s=n(1);function a(e){return r.isObject(e)&&"items"in(e||{})}function i(e){return a(e)&&"isRoot"in e&&!0===e.isRoot}function c(e,t){let n=0;for(;void 0!==e[n]&&void 0!==t[n];){const r=t[n]-e[n];if(0!==r)return r;n+=1}return void 0!==e[n]?-1:void 0!==t[n]?1:0}function l(e,t){return d(e,t.slice(0,-1))}function d(e,t){return t.reduce((e,n,r)=>{if(!a(e))throw new Error(`Invalid path ${t} at step #${r}, found ${e}`);return e.items[n]},e)}function u(e,t,n){const o=t.slice(0,-1),s=r.last(t),a=o.length?d(e,o):e;return a.items[s]=n,a}function p(e,t){const n=l(e,t),o=r.last(t);n.items.splice(o,1),0!==n.items.length||i(n)||p(e,t.slice(0,-1))}function h(e,t){return r.isMatch(e,t)?e:r.reduce(e.items,(e,n)=>e||(a(n)?h(n,t):r.isMatch(n,t)?n:void 0),void 0)}function m(e,t,n=[]){return r.isMatch(e,t)?n:r.reduce(e.items,(e,o,s)=>e||(a(o)?m(o,t,n.concat(s)):r.isMatch(o,t)?n.concat(s):void 0),void 0)}const g=e=>f(e,e=>e);function f(e,t,n=[],r=0){return e.items.reduce((e,o,s)=>{const i=r+s;return a(o)?e.concat(f(o,t,n.concat(s),i)):e.concat([t(o,n.concat(s),i)])},[])}function b(e){return a(e)?(n=e,Object.assign(Object.assign({},n),{items:n.items.map(e=>b(e)),collapsed:!0,id:o()})):(t=e,Object(s.observable)(Object.assign(Object.assign({},t),{matchers:[...t.matchers],id:o()})));var t,n}const y=(e,t)=>a(e)?!!a(t)&&v(e,t):!a(t)&&w(e,t),v=(e,t)=>e.id===t.id&&e.title===t.title&&r.isEqualWith(e.items,t.items,y),x=Symbol("custom-rule-is-equals"),w=(e,t)=>{if(e&&t&&e[x]&&e[x]===t[x]){return(0,e[x])(e,t)}return r.isFunction(e)&&r.isFunction(t)?e.toString()===t.toString():r.isObject(e)&&r.isObject(t)&&(Object.values(e).includes(void 0)||Object.values(t).includes(void 0))?r.isEqualWith(r.omitBy(e,e=>void 0===e),r.omitBy(t,e=>void 0===e),w):void 0}},19:function(e,t,n){"use strict";(function(e){n.d(t,"i",(function(){return d})),n.d(t,"r",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"o",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"j",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"q",(function(){return y})),n.d(t,"l",(function(){return v})),n.d(t,"n",(function(){return x})),n.d(t,"k",(function(){return w})),n.d(t,"p",(function(){return E})),n.d(t,"b",(function(){return C})),n.d(t,"m",(function(){return T})),n.d(t,"h",(function(){return j})),n.d(t,"g",(function(){return O})),n.d(t,"f",(function(){return S}));var r=n(4),o=n(12),s=n(15),a=n(21),i=n(165),c=n(55),l=n(18);const d=r.reduce(i.a,(e,t)=>(e[t]=class extends o.matchers.MethodMatcher{constructor(){super(o.Method[t]),this.uiType=t}explain(){return o.Method[this.method]+" requests"}},e),{});class u extends o.matchers.WildcardMatcher{explain(){return"Any requests"}}class p extends o.matchers.WildcardMatcher{constructor(){super(...arguments),this.uiType="default-wildcard"}explain(){return"Any other requests"}}class h extends o.matchers.RegexPathMatcher{constructor(){super(/^https?:\/\/amiusing\.httptoolkit\.tech\/?$/),this.uiType="am-i-using"}explain(){return"for amiusing.httptoolkit.tech"}}class m extends o.requestHandlerDefinitions.SimpleHandlerDefinition{explain(){return`respond with status ${this.status}${Object(a.d)(this.data)?" and static content":""}`}}s.b(m,{data:s.d(e=>!e||"string"==typeof e||Object(a.i)(e)?e:{type:"Buffer",data:[...e]},t=>t?"string"==typeof t?t:e.from(t.data):void 0),"*":Object.assign(s.d(e=>e,e=>e),{pattern:{test:e=>"data"!==e}})},()=>new m(200));class g extends o.requestHandlerDefinitions.FileHandlerDefinition{explain(){return`respond with status ${this.status} and content from ${this.filePath||"a file"}`}}class f extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e){super(e.activePassthroughOptions)}}s.b(f,{type:s.k()},e=>new f(e.args.rulesStore));class b extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e,t,n){super(Object.assign(Object.assign({},n.activePassthroughOptions),{forwarding:{targetHost:e,updateHostHeader:t}})),this.uiType="forward-to-host"}}s.b(b,{uiType:Object(c.b)(()=>"forward-to-host"),type:s.k(),forwarding:s.h(s.k())},e=>{const t=e.json;return new b(t.forwarding.targetHost,t.forwarding.updateHostHeader,e.args.rulesStore)});class y extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e,t,n){super(Object.assign(Object.assign({},e.activePassthroughOptions),{transformRequest:t,transformResponse:n})),this.uiType="req-res-transformer"}explain(){const e=r.pickBy(this.transformRequest||{},e=>void 0!==e),t=r.pickBy(this.transformResponse||{},e=>void 0!==e);return r.isEmpty(e)&&r.isEmpty(t)?super.explain():r.isEmpty(e)||r.isEmpty(t)?r.isEmpty(e)?"automatically transform the response from the target host":"automatically transform the request then pass it through to the target host":"automatically transform the request and response"}[l.a](e,t){return r.isEqual(e.transformRequest,t.transformRequest)&&r.isEqual(e.transformResponse,t.transformResponse)}}s.b(y,{uiType:Object(c.b)(()=>"req-res-transformer"),transformRequest:s.i(s.c({updateHeaders:c.f,updateJsonBody:c.f,replaceBody:c.c,"*":Object.assign(s.l(),{pattern:{test:()=>!0}})})),transformResponse:s.i(s.c({updateHeaders:c.f,updateJsonBody:c.f,replaceBody:c.c,"*":Object.assign(s.l(),{pattern:{test:()=>!0}})}))},e=>{const t=e.json;return new y(e.args.rulesStore,t.transformRequest,t.transformResponse)});class v extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeRequest:e.triggerRequestBreakpoint})),this.uiType="request-breakpoint"}explain(){return"manually rewrite the request before it's forwarded"}}s.b(v,{uiType:Object(c.b)(()=>"request-breakpoint"),type:s.k()},e=>new v(e.args.rulesStore));class x extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeResponse:e.triggerResponseBreakpoint})),this.uiType="response-breakpoint"}explain(){return"manually rewrite the response before it's returned"}}s.b(x,{uiType:Object(c.b)(()=>"response-breakpoint"),type:s.k()},e=>new x(e.args.rulesStore));class w extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeRequest:e.triggerRequestBreakpoint,beforeResponse:e.triggerResponseBreakpoint})),this.uiType="request-and-response-breakpoint"}explain(){return"manually rewrite the request and response"}}s.b(w,{uiType:Object(c.b)(()=>"request-and-response-breakpoint"),type:s.k()},e=>new w(e.args.rulesStore));const E=o.requestHandlerDefinitions.TimeoutHandlerDefinition,C=o.requestHandlerDefinitions.CloseConnectionHandlerDefinition,T=o.requestHandlerDefinitions.ResetConnectionHandlerDefinition,j=Object.assign(Object.assign(Object.assign({},r.omit(o.matchers.MatcherLookup,["method"])),d),{wildcard:u,"default-wildcard":p,"am-i-using":h}),O=[u,...Object.values(d)],S=Object.assign(Object.assign({},o.requestHandlerDefinitions.HandlerDefinitionLookup),{passthrough:f,simple:m,file:g,"forward-to-host":b,"req-res-transformer":y,"request-breakpoint":v,"response-breakpoint":x,"request-and-response-breakpoint":w})}).call(this,n(25).Buffer)},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(4),o=n(1),s=n(26),a=n(16),i=n(36),c=n(61),l=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},d=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class u{constructor(e,t,n,a={}){var l;this.getHeaders=n,this.options=a,this.updateEncodedBody=r.throttle(Object(o.action)(()=>{const e=Object(i.d)((()=>d(this,void 0,void 0,(function*(){const t=this.contentEncodings,n=yield Object(c.c)(this._decodedBody,t).catch(e=>(Object(s.c)(e,{encodings:t}),this._decodedBody));return Object(o.runInAction)(()=>{this._encodingPromise===e&&(this._encodedBody=n)}),n})))());this._encodingPromise=e}),null!==(l=this.options.throttleDuration)&&void 0!==l?l:500,{leading:!0,trailing:!0}),this._decodedBody=e,t?(this._encodedBody=t,this._encodingPromise=Object(i.d)(Promise.resolve(t))):(this._encodedBody=void 0,this.updateEncodedBody()),Object(o.reaction)(()=>this._decodedBody,()=>this.updateEncodedBody()),Object(o.reaction)(()=>this.contentEncodings,()=>this.updateEncodedBody())}updateDecodedBody(e){this._decodedBody=e}get contentEncodings(){return Object(a.c)(Object(a.e)(this.getHeaders(),"content-encoding"))}get latestEncodedLength(){var e;return null===(e=this._encodedBody)||void 0===e?void 0:e.byteLength}get encoded(){return this._encodingPromise}get decoded(){return this._decodedBody}}l([o.observable.ref],u.prototype,"_decodedBody",void 0),l([o.observable.ref],u.prototype,"_encodedBody",void 0),l([o.observable.ref],u.prototype,"_encodingPromise",void 0),l([o.action],u.prototype,"updateDecodedBody",null),l([o.computed.struct],u.prototype,"contentEncodings",null),l([o.computed],u.prototype,"latestEncodedLength",null)},2:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"k",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"h",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"g",(function(){return b})),n.d(t,"j",(function(){return y})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return E})),n.d(t,"c",(function(){return C})),n.d(t,"a",(function(){return T}));var r=n(247),o=n(62),s=n(568),a=n.n(s);n(739);const i={textInputFontSize:"13px",textSize:"15px",subHeadingSize:"18px",headingSize:"20px",largeHeadingSize:"24px",loudHeadingSize:"38px",screamingHeadingSize:"80px"},c=1100,l="#f1971f",d="#e1421f",u=Object.assign(Object.assign({fontFamily:"Lato, Arial, sans-serif",monoFontFamily:"'Fira Mono', monospace",mainBackground:"#fafafa",mainLowlightBackground:"#eaeaea",mainColor:"#222",lowlightTextOpacity:.65,pillContrast:.8,boxShadowAlpha:.2,primaryInputBackground:"#1076b9",primaryInputColor:"#fafafa",secondaryInputBorder:"#7ab2e2",secondaryInputColor:"#1665af",inputBackground:"#fafafa",inputHoverBackground:"#eee",inputBorder:"#a0afaf",inputColor:"#222222",highlightBackground:"#ffffff",highlightColor:"#222",popColor:d,warningColor:l,warningBackground:"#f1971f40",containerBackground:"#d8e2e6",containerWatermark:"#a0afaf",containerBorder:"#888",linkColor:"#0000EE",visitedLinkColor:"#551A8B",monacoTheme:"vs-custom",modalGradient:"radial-gradient(#40404b, #111118)"},i),{globalCss:""}),p=Object.assign(Object.assign({fontFamily:"Lato, Arial, sans-serif",monoFontFamily:"'Fira Mono', monospace",mainBackground:"#222222",mainLowlightBackground:"#303030",mainColor:"#efefef",lowlightTextOpacity:.6,pillContrast:.8,boxShadowAlpha:.4,primaryInputBackground:"#0868c1",primaryInputColor:"#fafafa",secondaryInputBorder:"#1b5b96",secondaryInputColor:"#6babe6",inputBackground:"#1a1a1a",inputHoverBackground:"#333",inputBorder:"#666",inputColor:"#fafafa",highlightBackground:"#111111",highlightColor:"#efefef",popColor:d,warningColor:l,warningBackground:"#f1971f40",containerBackground:"#3c3c41",containerWatermark:"#757580",containerBorder:"#000000",linkColor:"#8699ff",visitedLinkColor:"#ac7ada",monacoTheme:"vs-dark-custom",modalGradient:"radial-gradient(#ffffff,#9c9c9c)"},i),{globalCss:r.css`
        @supports (color-scheme: dark) {
            :root {
                color-scheme: dark;
            }
        }

        @supports not (color-scheme: dark) {
            ::-webkit-scrollbar {
                background-color: ${e=>o.a(.2,e.theme.containerBackground)};
            }

            ::-webkit-scrollbar-thumb {
                background-color: ${e=>o.c(.2,e.theme.containerBackground)};
            }

            /* Standard, but poorly supported: */
            scrollbar-color: dark;
        }
    `}),h=Object.assign(Object.assign({fontFamily:"Lato, Arial, sans-serif",monoFontFamily:"'Fira Mono', monospace",mainBackground:"#000000",mainLowlightBackground:"#262626",mainColor:"#ffffff",lowlightTextOpacity:.8,pillContrast:.95,boxShadowAlpha:.1,primaryInputBackground:"#0868c1",primaryInputColor:"#ffffff",secondaryInputBorder:"#ffffff",secondaryInputColor:"#ffffff",inputBackground:"#ffffff",inputHoverBackground:"#ddd",inputBorder:"#aaa",inputColor:"#000000",highlightBackground:"#ffffff",highlightColor:"#000",popColor:d,warningColor:l,warningBackground:"#f1971f40",containerBackground:"#404045",containerWatermark:"#a0a0b0",containerBorder:"#000000",linkColor:"#8699ff",visitedLinkColor:"#ac7ada",monacoTheme:"hc-black-custom",modalGradient:"#c0c0c0"},i),{globalCss:""}),m={light:u,dark:p,"high-contrast":h},g={"editorWarning.foreground":"#ff0000"},f=["vs","vs-dark","hc-black"];function b(e){f.forEach(t=>{e.editor.defineTheme(t+"-custom",{base:t,inherit:!0,rules:[],colors:g})})}const{default:y,css:v,createGlobalStyle:x,keyframes:w,ThemeProvider:E,StyleSheetManager:C}=r,T=x`
    ${a.a};

    body {
        font-family: ${e=>e.theme.fontFamily};
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.containerBackground};
    }

    input {
        font-family: ${e=>e.theme.fontFamily};
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: bold;
    }

    :active {
        outline: none;
    }

    .slow-spin {
        animation: fa-spin 5s infinite linear;
    }

    /* Override Auth0's style choices to match the rest of the UI */
    .auth0-lock {
        font-family: ${e=>e.theme.fontFamily} !important;

        .auth0-lock-overlay {
            display: none; /* We have our own overlay we'll use instead */
        }

        .auth0-lock-widget {
            box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha}) !important;
            overflow: visible !important;
        }

        .auth0-lock-form {
            .auth0-lock-name {
                font-size: ${i.headingSize} !important;
            }

            p, .auth0-lock-social-button-text {
                font-size: ${i.textSize} !important;
            }
        }
    }

    /* Override some Monaco CSS internals */
    .monaco-editor {
        /* Our editors don't have real filenames, so hide that from error popups: */
        .zone-widget .filename {
            display: none;
        }
    }

    ${e=>e.theme.globalCss}
`},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return g}));var r=n(0),o=n(5),s=n(2),a=n(7),i=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const c=Object(s.j)(e=>r.createElement(a.b,{className:e.className,icon:["fas",e.collapsed?"chevron-down":"chevron-up"],onClick:e.onClick}))`
    cursor: pointer;
    user-select: none;

    padding: 4px 10px;

    ${e=>"right"===e.headerAlignment?"margin: 0 -10px 0 -3px;":"margin: 0 -3px 0 -10px;"}

    &:hover {
        color: ${e=>e.theme.popColor};
    }
`,l=s.j.section.attrs(e=>{var t;return{onClick:e.disabled?void 0:e.onClick,onKeyDown:e.disabled?void 0:e.onKeyDown,tabIndex:e.disabled?void 0:e.tabIndex,headerAlignment:null!==(t=e.headerAlignment)&&void 0!==t?t:"right"}})`
    box-sizing: border-box;

    ${e=>e.disabled&&"\n        opacity: 0.5;\n    "}

    ${e=>!e.disabled&&e.onClick&&s.f`
        cursor: pointer;

        &:hover {
            box-shadow: 0 2px 20px 0 rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
        }

        &:active {
            box-shadow: unset;
        }
    `}

    background-color: ${e=>e.theme.mainBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    position: relative;

    > header h1, > h1 {
        font-size: ${e=>e.theme.headingSize};
        font-weight: bold;
    }

    > header {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        ${e=>"left"===e.headerAlignment&&"\n            flex-direction: row-reverse;\n        "}

        gap: 8px;
    }
`,d=Object(s.j)(l)`
    padding: 15px;

    > header:not(:last-child), > h1:not(:last-child) {
        margin-bottom: 15px;
    }
`,u=Object(s.j)(l)`
    padding: 20px;
    margin-bottom: 20px;

    > header, > h1 {
        text-transform: uppercase;
        text-align: ${e=>e.headerAlignment};
        color: ${e=>e.theme.containerWatermark};

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
`,p=Object(s.j)(u)`
    padding: 30px;

    > header:not(:last-child), > h1:not(:last-child) {
        margin-bottom: 30px;
    }
`;let h=class extends r.Component{constructor(){super(...arguments),this.cardRef=r.createRef(),this.toggleCollapse=()=>{this.props.onCollapseToggled&&(requestAnimationFrame(()=>{this.cardRef.current&&this.cardRef.current.scrollIntoView({block:"nearest",behavior:"smooth"})}),this.props.onCollapseToggled())},this.onKeyDown=e=>{e.target===this.cardRef.current&&"Enter"===e.key&&this.toggleCollapse()}}render(){var e,t;return r.createElement(m,{className:this.props.className,collapsed:this.props.collapsed,expanded:null!==(e=this.props.expanded)&&void 0!==e&&e,direction:this.props.direction,headerAlignment:null!==(t=this.props.headerAlignment)&&void 0!==t?t:"right",tabIndex:0,ref:this.cardRef,onKeyDown:this.onKeyDown},this.renderChildren())}renderChildren(){const{children:e,collapsed:t,headerAlignment:n}=this.props,o=!!this.props.onCollapseToggled;return r.Children.map(e,(e,s)=>{if(0!==s)return t?null:e;if(!o)return e;if("header"!==e.type)throw new Error("First child of collapsible card must be a header but was "+("string"==typeof e.type?e.type:e.type.name));return r.cloneElement(e,{},r.Children.toArray(e.props.children).concat(r.createElement(c,{key:"collapse-icon",collapsed:t,onClick:this.toggleCollapse,headerAlignment:null!=n?n:"right"})))})}};h=i([o.e],h);const m=Object(s.j)(u)`
    display: flex;
    flex-direction: column;

    transition: margin-bottom 0.1s;

    ${e=>e.collapsed&&s.f`
        :not(:last-child) {
            margin-bottom: -16px;
        }
    `}

    ${e=>{return e.expanded?s.f`
            /* Override the Send container setting this to 'none', which hides non-expanded parts: */
            display: flex !important;

            height: 100%;
            width: 100%;
            border-radius: 0;
            margin: 0;

            flex-shrink: 1;
            min-height: 0;

            ${"starting"===e.expanded?"\n                    padding-top: 40px;\n                    padding-bottom: 40px;\n                ":"transition: padding 0.1s;"}
        `:"right"===(t=e.direction)?s.f`
        padding-right: 15px;
        border-right: solid 5px ${e=>e.theme.containerBorder};
    `:"left"===t?s.f`
        padding-left: 15px;
        border-left: solid 5px ${e=>e.theme.containerBorder};
    `:"";var t}}

    &:focus {
        ${c} {
            color: ${e=>e.theme.popColor};
        }
    }

    &:focus-within {
        header h1 {
            color: ${e=>e.theme.popColor};
        }

        outline: none;
        border-color: ${e=>e.theme.popColor};
    }
`,g=Object(s.j)(e=>r.createElement("h1",{className:e.className,onClick:e.onCollapseToggled},e.children))`
    cursor: pointer;
    user-select: none;
`},21:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return a})),n.d(t,"j",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"l",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"i",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return y})),n.d(t,"m",(function(){return v})),n.d(t,"k",(function(){return x}));var r=n(4);const o="undefined"==typeof window;function s(){return{}}function a(...e){for(let t of e)if(r.isArray(t)&&r.isFunction(t[0])){const[e,n]=t;if(e()&&n)return n}else if(t)return t}function i(e,...t){let n="";const r=Math.min(e.length,...t.map(e=>e.length));for(let o=0;o<r;o++){const r=e[o];if(!t.every(e=>e[o]===r))break;n+=r}return n}function c(e){return{byteLength:e}}const l=new TextEncoder,d=new TextDecoder("utf8",{fatal:!0}),u=new TextDecoder("utf8",{fatal:!1}),p=new TextDecoder("latin1",{fatal:!1});function h(e){try{const t=e.slice(0,1024);return d.decode(t),!0}catch(e){return!1}}function m(t,n="utf8"){if("utf8"===n)return e.from(l.encode(t));if("binary"===n)return e.from(t,n);throw new Error("Cannot decode string from unrecogized encoding: "+n)}function g(e,t="utf8"){if("utf8"===t)return u.decode(e);if("binary"===t)return p.decode(e);throw new Error("Cannot convert buffer to unrecogized encoding: "+t)}function f(e){return e&&"Buffer"===e.type&&!!e.data}function b(t){return t?e.isBuffer(t)?t:"string"==typeof t?m(t):f(t)?e.from(t.data):e.from(t.buffer,t.byteOffset,t.byteLength):e.from([])}function y(e){return e?"string"==typeof e?new Blob([e]).size:f(e)?e.data.length:e.length:0}function v(e){try{return JSON.parse(e)}catch(e){return}}function x(e,t,n){return r.isArray(e)?e.map(e=>x(e,t)):r.isPlainObject(e)?r.mapValues(e,(e,n)=>x(e,t,n)):t(e,n)}}).call(this,n(25).Buffer)},23:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"j",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"i",(function(){return y})),n.d(t,"b",(function(){return v}));var r=n(0),o=n(675),s=n(1),a=n(9),i=n(60),c=n(26),l=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function d(e){return e&&!!e.$$typeof}const u=Object(s.observable)({height:window.innerHeight,width:window.innerWidth});window.addEventListener("resize",Object(s.action)(()=>{u.height=window.innerHeight,u.width=window.innerWidth}));const p=navigator.platform.startsWith("Mac")?"⌘":"Ctrl";function h(e){return navigator.platform.startsWith("Mac")?e.metaKey:e.ctrlKey}const m=e=>{if(!e)return!1;const t=e,n=t.tagName;return t.isContentEditable||"TEXTAREA"===n||"INPUT"===n||"SELECT"===n},g=(e,t,n)=>Object(o.a)(e,t,{filter:()=>!0},n);function f(e,t,n){const r=document.createElement("a"),o=new Blob([n],{type:t}),s=window.URL.createObjectURL(o);r.setAttribute("href",s),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>window.URL.revokeObjectURL(s),1e4)}function b(e="arraybuffer",t=[]){var n;if("path"===e&&!a.C.value)try{const e=window.prompt("Path selection can only be used from Electron. Please enter a path manually:");return Promise.resolve(e)}catch(e){if(!(null===(n=null==e?void 0:e.message)||void 0===n?void 0:n.includes("prompt() is and will not be supported")))return Promise.reject(e);console.warn("Unexpected Electron prompt() error")}const r=document.createElement("input");r.setAttribute("type","file"),t.length>0&&r.setAttribute("accept",t.join(","));const o=Object(i.c)();return r.addEventListener("change",()=>{if(!r.files||!r.files.length)return o.resolve(null);const t=r.files[0];if("path"===e)o.resolve(t.path);else{const n=new FileReader;n.addEventListener("load",()=>{o.resolve(n.result)}),n.addEventListener("error",e=>{o.reject(e)}),"text"===e?n.readAsText(t):n.readAsArrayBuffer(t)}}),r.click(),Promise.race([o.promise,Object(i.b)(6e5)]).catch(()=>{}).then(()=>r.remove()),o.promise}function y(e,t){const[n,o]=r.useState(t);return r.useEffect(()=>{const t=new ResizeObserver(()=>{const t=e.current;t?o(t.clientWidth):Object(c.c)("Element resized, but no ref available")});return e.current?t.observe(e.current):Object(c.c)("No element to observe for resizing!"),()=>t.disconnect()},[]),n}function v(e){return l(this,void 0,void 0,(function*(){if(navigator.clipboard)try{return void(yield navigator.clipboard.writeText(e))}catch(e){console.warn("Copy to clipboard with navigator.clipboard failed",e)}const t=document.createElement("textarea");try{t.value=e,t.style.position="absolute",t.style.left="-9999px",document.body.prepend(t),t.select(),document.execCommand("copy")}catch(e){throw console.warn("Copy to clipboard fallback failed",e),e}finally{t.remove()}}))}},24:function(e,t,n){"use strict";function r(e){return"object"==typeof e&&(e instanceof Error||e.message||e.code||e.stack)}function o(e){return r(e)?e:new Error(e.message||e.toString())}n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return a}));class s extends Error{constructor(e,t=(e=>e)){super("Unhandled case value: "+t(e))}}const a=(e,t=(e=>e))=>{throw new s(e,t)}},248:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var r=n(1),o=n(21),s=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class a{constructor(e,t){this.messageIndex=t,this.cache=r.observable.map(new Map,{deep:!1}),this.inputMessage=e}get direction(){return this.inputMessage.direction}get content(){return Object(o.b)(this.inputMessage.content)}get isBinary(){return this.inputMessage.isBinary}get contentType(){if(this.inputMessage.isBinary)return"raw";const e=this.content.slice(0,10).toString("utf-8");return e.includes("{")||e.includes("[")?"json":"text"}get timestamp(){return this.inputMessage.eventTimestamp}cleanup(){this.inputMessage.content=e.from([]),this.cache.clear()}}s([r.observable],a.prototype,"inputMessage",void 0),s([r.computed],a.prototype,"content",null)}).call(this,n(25).Buffer)},251:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var r=n(4),o=n(676);const s=o.a.encode.bind(o.a),a=["bool","int","uint",...r.flatMap(r.range(8,257,8),e=>["int"+e,"uint"+e]),"address","string","bytes",...r.range(1,33).map(e=>"bytes"+e)]},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v}));var r=n(4),o=n(69),s=n(343),a=n.n(s),i=n(647),c=n.n(i),l=n(21),d=n(16),u=n(253),p=n(84);const h=new a.a({coerceTypes:"array",strict:!1,strictSchema:!1,formats:new Proxy({},{get:(e,t)=>!(t in e)||e[t]})});function m(e,t,n){if(!t||!n||"aborted"===n)return{};const o=Object(d.h)(n.headers["content-type"])||"*/*",s=t.content;if(!s)return{};const a=r.sortBy(Object.keys(s),e=>r.sumBy(e,e=>"*"===e?1:0)),i=r.find(a,e=>null!==new RegExp("^"+e.replace(/\*/g,".*").replace(/;.*/g,"")).exec(o));return i?Object.assign({description:t.description,components:e.components},s[i].schema):{}}function g(e,t){const{parsedUrl:n}=t,r=`${n.protocol}//${n.hostname}${n.pathname}`,o=e.serverMatcher.exec(r);return o?r.slice(o[0].length):n.pathname}function f(e){return e?e.replace(/(<([^>]+)>)/gi,""):e}c()(h);class b{constructor(e,t){this.isBuiltInApi=!0===e.spec.info["x-httptoolkit-builtin-api"];const{request:n}=t;this.service=new y(e.spec),this._spec=e.spec,this._opSpec=v(e,n),this.operation=new x(this._opSpec),this.request=new w(e.spec,this._opSpec,n),t.response&&this.updateWithResponse(t.response)}updateWithResponse(e){"aborted"!==e&&void 0!==e&&(this.response=new E(this._spec,this._opSpec,e))}matchedOperation(){return this._opSpec.matched}}class y{constructor(e){var t,n,r;const{info:o}=e;this.name=o.title,this.shortName=null!==(t=o["x-httptoolkit-short-name"])&&void 0!==t?t:this.name.split(" ")[0],this.logoUrl=null===(n=o["x-logo"])||void 0===n?void 0:n.url,this.description=Object(p.a)(o.description),this.docsUrl=null===(r=null==e?void 0:e.externalDocs)||void 0===r?void 0:r.url}}function v(e,t){const n=function(e,t){const{parsedUrl:n}=t,o=`${n.protocol}//${n.host}${n.pathname}`;if(e.serverMatcher.exec(o))for(let t of e.requestMatchers.keys())if(t.pathMatcher.exec(o)&&r.every(t.queryMatcher,(e,t)=>{const o=n.searchParams.getAll(t);return e?"string"==typeof e?r.includes(o,e):r.intersection(o,e).length===e.length:o.length>0}))return e.requestMatchers.get(t)}(e,t),{pathSpec:s,path:a}=n||{pathSpec:Object(l.e)(),path:g(e,t)},i=(Object(d.h)(t.headers["x-http-method-override"])||t.method).toLowerCase();let c=Object(o.get)(s,i);return c||"head"!==i||(c=Object(o.get)(s,"get")),{method:i,path:a,pathSpec:s,spec:c||Object(l.e)(),matched:void 0!==c}}class x{constructor(e){this.warnings=[],this.name=f(Object(p.a)(Object(l.g)([()=>(Object(o.get)(e.spec,"summary","length")||1/0)<40,e.spec.summary],Object(o.get)(e.spec,"operationId"),[()=>(Object(o.get)(e.spec,"description","length")||1/0)<40,e.spec.description],e.pathSpec.summary)||`${e.method.toUpperCase()} ${e.path}`).__html),this.description=Object(p.a)(Object(l.g)([()=>Object(o.get)(e.spec,"description")!==this.name,Object(o.get)(e.spec,"description")],[()=>Object(o.get)(e.spec,"summary")!==this.name,Object(o.get)(e.spec,"summary")],e.pathSpec.description)),e.matched||this.warnings.push(`Unknown operation '${this.name}'.`),e.spec.deprecated&&this.warnings.push(`The '${this.name}' operation is deprecated.`),this.docsUrl=Object(o.get)(e.spec,"externalDocs","url"),this.warnings=this.warnings.map(e=>f(e))}}class w{constructor(e,t,n){this.parameters=function(e,t,n){if(!t)return[];const o=n.parsedUrl.searchParams;return r.uniqBy(t,e=>`${e.name}::${e.in}`).map(t=>{const r=t.schema,s={specParam:t,name:t.name,in:t.in,description:Object(p.a)(t.description),required:t.required||"path"===t.in,type:r&&r.type,defaultValue:r&&r.default,enum:r&&(r.enum||r.items&&r.items.enum),deprecated:t.deprecated||!1,warnings:[]};switch(t.in){case"query":let r=o.getAll(t.name);return s.type&&"boolean"===s.type&&t.allowEmptyValue&&(r=r.map(e=>""===e||e)),Object.assign(Object.assign({},s),{value:Object(l.g)([()=>r.length>1,r],[()=>1===r.length,r[0]])});case"path":const a=new RegExp(e.replace(`{${t.name}}`,"([^/]+)").replace(/\{[^\}]+\}/g,"[^/]+")+"$","i").exec(n.parsedUrl.pathname);return Object.assign(Object.assign({},s),{value:a?a[1]:void 0});case"header":return Object.assign(Object.assign({},s),{value:n.headers[t.name.toLowerCase()]});default:return Object.assign(Object.assign({},s),{value:void 0})}}).map(e=>{const{specParam:t}=e,n=t.style||{query:"form",path:"simple",header:"simple",cookie:"form"}[t.in];if("array"===e.type&&(("simple"===n||"form"===n&&!1===t.explode)&&(e.value=r.isString(e.value)?e.value.split(","):e.value),"spaceDelimited"===n&&(e.value=r.isString(e.value)?e.value.split(" "):e.value),"pipeDelimited"===n&&(e.value=r.isString(e.value)?e.value.split("|"):e.value)),e.required&&void 0===e.value&&void 0===e.defaultValue&&e.warnings.push(`The '${e.name}' ${t.in} parameter is required.`),e.deprecated&&void 0!==e.value&&e.warnings.push(`The '${e.name}' ${t.in} parameter is deprecated.`),t.schema&&void 0!==e.value){const n={value:e.value};!h.validate({type:"object",properties:{value:t.schema}},n)&&h.errors&&e.warnings.push(...h.errors.map(t=>Object(u.a)(n,t,t=>t.replace(/^\/value/,e.name)))),e.value=n.value}return Object.assign(Object.assign({},e),{warnings:e.warnings.map(e=>f(e))})})}(t.path,(t.pathSpec.parameters||[]).concat(t.spec.parameters||[]),n),this.bodySchema=m(e,t.spec.requestBody,n)}}class E{constructor(e,t,n){const r=t.spec.responses?t.spec.responses[n.statusCode.toString()]||t.spec.responses.default:void 0;this.description=r&&r.description!==n.statusMessage?Object(p.a)(r.description):void 0,this.bodySchema=m(e,r,n)}}},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(4),o=(n(648),n(67));const s=(e,t)=>0===t.length?e:s(e[t[0]],t.slice(1));function a(e,t,n=r.identity){var a;const i=(null===(a=t.instancePath)||void 0===a?void 0:a.length)?s(e,t.instancePath.slice(1).split("/")):e;return(n(t.instancePath)||"Document")+` (${Object(o.c)(JSON.stringify(i),50)}) ${t.message}${"enum"===t.keyword?` (${Object(o.b)(t.params.allowedValues,", ",", or ")})`:""}.`}},254:function(e,t){e.exports='<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <link rel=\'shortcut icon\' type=\'image/x-icon\' href=\'/favicon.ico\' />\n  <script type="application/json" id="amiusing">\n    { "amiusing": true }\n  <\/script>\n  <title>\n    Are you using HTTP Toolkit? Yes!\n  </title>\n  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n  <style>\n    html {\n      height: 100%;\n    }\n\n    body {\n      min-height: 100%;\n      box-sizing: border-box;\n      margin: 0;\n      padding: 8px;\n\n      background-color: #d8e2e6;\n      font-family: Lato;\n      line-height: 1.3;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .content {\n      max-width: 600px;\n    }\n\n    h1 {\n      font-size: 36pt;\n    }\n\n    p {\n      font-size: 18pt;\n    }\n\n    .logo {\n      display: block;\n      margin: 40px auto;\n      height: 200px;\n      width: 200px;\n    }\n  </style>\n</head>\n<body>\n  <div class="content">\n    <h1>You\'re being intercepted by HTTP Toolkit</h1>\n    <p>\n      This response came from HTTP Toolkit, which is currently intercepting this connection.\n    </p>\n    <p>\n      All requests made by this browser will be recorded by HTTP Toolkit.\n      Take a look at the \'View\' tab there now to see the request & response\n      that brought you this page, or start browsing elsewhere to collect more data.\n    </p>\n  </div>\n  <link href="https://fonts.googleapis.com/css?family=Lato&display=block" rel="stylesheet" />\n</body>\n</html>'},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(4),o=n(22),s=n(18),a=n(68);function i(e){if(!e)return e;if(void 0!==e.version)throw new Error(o`
            Could not migrate rules from unknown format (${e.version}).
            Please restart HTTP Toolkit to update.
        `);if(e.rules){e.id="root",e.title="HTTP Toolkit Rules",e.isRoot=!0;const[t,n]=r.partition(e.rules,e=>e.id.startsWith("default-"));t.length?e.items=[...n,Object(a.b)(t)]:e.items=n,delete e.rules}return e.items=e.items.map(c),e}function c(e){return Object(s.k)(e)?e.items=e.items.map(c):e=function(e){void 0===e.type&&(e.type="http");const{handler:t}=e;"passthrough"===(null==t?void 0:t.type)&&t.forwardToLocation&&!t.forwarding&&(t.forwarding={targetHost:t.forwardToLocation,updateHostHeader:!0});return e}(e),e}},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a}));var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function o(e){const t=/\r?\n/,n=new TextDecoder;let o,s="";return new ReadableStream({start(){o=e.getReader()},pull(e){var a;return r(this,void 0,void 0,(function*(){const{done:r,value:i}=yield o.read();r&&(s.length>0&&e.enqueue(s),e.close());const c=n.decode(i,{stream:!0});s+=c;const l=s.split(t);s=null!==(a=l.pop())&&void 0!==a?a:"";for(const t of l)e.enqueue(t)}))},cancel(e){o.cancel(e)}})}function s(e){let t;return new ReadableStream({start(){t=e.getReader()},pull(e){return r(this,void 0,void 0,(function*(){const{done:n,value:r}=yield t.read();if(n)return e.close();e.enqueue(JSON.parse(r))}))},cancel(e){t.cancel(e)}})}const a=()=>new ReadableStream({start(e){e.close()}})},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return u}));var r=n(102);n.d(t,"a",(function(){return r}));var o=n(79),s=n(9),a=n(101);let i=!1;function c(e){e&&(r.init({dsn:e,release:s.y,ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:function(e,t){const n=null==t?void 0:t.originalException;return n instanceof a.a&&(e.fingerprint=["{{ default }}",n.operationName,...n.errorCode?[n.errorCode.toString()]:[]]),e}}),i=!0,s.E.then(e=>d("version:server",e)),s.C.then(e=>d("version:desktop",e)),"undefined"!=typeof window&&window.addEventListener("beforeunload",()=>{r.getCurrentHub().getClient().getOptions().enabled=!1,i=!1}),r.configureScope(e=>{const t=o();e.setUser({id:t,username:"anon-"+t})}))}function l(e){i&&r.configureScope(t=>{t.setUser({id:e,email:e})})}function d(e,t){i&&r.configureScope(n=>{n.setTag(e,t)})}function u(e,t={}){console.log("Reporting error:",e,t),i&&r.withScope(n=>{Object.entries(t).forEach(([e,t])=>{n.setExtra(e,t)}),"string"==typeof e?r.captureMessage(e):e instanceof Error?r.captureException(e):(console.warn("Reporting non-error",e),r.captureMessage("Non-error thrown: "+e))})}},260:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return x}));var r=n(4),o=n(1),s=n(22),a=n.n(s),i=n(26),c=n(21),l=n(60),d=n(16),u=n(9),p=n(61),h=n(191),m=n(50),g=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},f=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function b(e){return Object(p.b)(e.body.buffer,Object(d.c)(e.headers["content-encoding"])).catch(e=>{Object(i.c)(e);const t=a.a`
            HTTP TOOLKIT ERROR: Could not decode body, \
            check content-encoding
        `;return{encoded:Object(c.l)(t),decoded:Object(c.l)(t)}})}function y(e){var t;return f(this,void 0,void 0,(function*(){const{encoded:n,decoded:r}=yield b(e);Object(o.observable)(e.headers);return new E({method:e.method,url:e.url,rawHeaders:null!==(t=e.rawHeaders)&&void 0!==t?t:Object(d.g)(e.headers)},r,n)}))}function v(e){return new C({statusCode:200,statusMessage:void 0,rawHeaders:2===e?[[":status","200"]]:[]},Object(c.l)(""),Object(c.l)(""))}function x(e){var t;return f(this,void 0,void 0,(function*(){const n=Object(m.d)(e.statusCode)===e.statusMessage?void 0:e.statusMessage,{encoded:r,decoded:o}=yield b(e);return new C({statusCode:e.statusCode,statusMessage:n,rawHeaders:null!==(t=e.rawHeaders)&&void 0!==t?t:Object(d.g)(e.headers)},o,r)}))}class w{constructor(e,t,n){this.resume=()=>f(this,void 0,void 0,(function*(){var e;this.deferred.resolve(Object.assign(Object.assign(Object.assign({},this.resultMetadata),Object(u.F)(yield u.E,u.t)?{rawBody:yield this.editableBody.encoded}:{body:yield this.editableBody.encoded}),{headers:(e=Object(d.i)(this.resultMetadata.rawHeaders),r.omitBy(e,(e,t)=>t.startsWith(":")))}))})),this.deferred=Object(l.c)(),this.resultMetadata=e,this.editableBody=new h.a(t,n,()=>this.resultMetadata.rawHeaders),Object(o.observe)(this.editableBody,"latestEncodedLength",({oldValue:e,newValue:t})=>{var n;const{rawHeaders:r}=this.resultMetadata;parseInt(Object(d.d)(r,"Content-Length")||"",10)===e&&this.updateMetadata({rawHeaders:Object(d.l)(r,{"Content-Length":null!==(n=null==t?void 0:t.toString())&&void 0!==n?n:"0"})})});let s=Object(d.d)(this.resultMetadata.rawHeaders,"Content-Length");Object(o.reaction)(()=>Object(d.d)(this.resultMetadata.rawHeaders,"Content-Length"),e=>{var t,n;if(void 0===s&&""===e){const{rawHeaders:e}=this.resultMetadata;this.updateMetadata({rawHeaders:Object(d.l)(e,{"Content-Length":null!==(n=null===(t=this.editableBody.latestEncodedLength)||void 0===t?void 0:t.toString())&&void 0!==n?n:"0"})})}s=e})}get inProgressResult(){return Object.assign({body:this.editableBody},this.resultMetadata)}updateMetadata(e){this.resultMetadata=Object.assign(Object.assign({},this.resultMetadata),r.omit(e,"body","rawBody"))}updateBody(e){this.editableBody.updateDecodedBody(e)}waitForCompletedResult(){return this.deferred.promise}reject(e){this.deferred.reject(e)}}g([o.observable.shallow],w.prototype,"resultMetadata",void 0),g([o.action.bound],w.prototype,"updateMetadata",null),g([o.action.bound],w.prototype,"updateBody",null);class E extends w{constructor(){super(...arguments),this.close=()=>{this.deferred.resolve({response:"close"})}}respondDirectly(e){this.deferred.resolve({response:e})}}class C extends w{constructor(){super(...arguments),this.close=()=>{this.deferred.resolve("close")}}}},261:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n(15),o=n(1),s=n(191),a=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class i{constructor(){this.method="GET",this.url="",this.headers=[],this.requestContentType="text",this.rawBody=new s.a(e.from([]),void 0,()=>this.headers)}}a([o.observable],i.prototype,"method",void 0),a([o.observable],i.prototype,"url",void 0),a([o.observable],i.prototype,"headers",void 0),a([o.observable],i.prototype,"requestContentType",void 0),a([o.observable],i.prototype,"rawBody",void 0);const c=r.b(i,{method:r.k(),url:r.k(),headers:r.l(),requestContentType:r.k(),rawBody:r.d(e=>e.decoded.toString("base64"),(t,n)=>{const r=n.target;return new s.a(e.from(t,"base64"),void 0,()=>r.headers)})}),l="__rule_param_reference__"}).call(this,n(25).Buffer)},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return h}));var r=n(4),o=n(0),s=n(62),a=n(2),i=n(13);function c(e){return s.b(e.mainBackground)>.5?s.a(.4,e.mainBackground):s.c(.4,e.mainBackground)}const l=a.f`
    display: inline-block;
    border-radius: 4px;
    padding: 4px 8px;

    text-align: center;
    text-transform: none;
    font-weight: bold;
    word-spacing: 3px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${e=>function(e,t){const n=s.d(.3,e,t.mainBackground),r=s.g(t.pillContrast,e),o=s.g(1-t.pillContrast,e);return s.f(s.e(n,o,r),t.pillContrast)}(e.color||c(e.theme),e.theme)};

    background-color: ${e=>{return t=e.color||c(e.theme),s.f(t,.3);var t}};
`,d=a.j.span`
    ${l}
`,u=Object(a.j)(i.f)`
    ${l}
    ${i.h}

    line-height: 1;

    &[disabled] {
        opacity: 0.5;
    }
`,p=Object(a.j)(d.withComponent("select"))`
    text-align: left;
    border: none;

    height: 24px;
    padding: 0 4px 3px 8px;

    font-size: ${e=>e.theme.textSize};
    font-family: ${e=>e.theme.fontFamily};

    ${i.h}

    * {
        background-color: ${e=>{return t=e.color||c(e.theme),n=e.theme,s.d(.3,t,n.mainBackground);var t,n}};
    }
`,h=e=>{const t=e.keyFormatter||(e=>e.toString()),n=e.nameFormatter||(e=>e.toString());return o.createElement(p,{onChange:t=>e.onChange(t.target.value),value:t(e.value)},"options"in e?e.options.map(e=>o.createElement("option",{key:t(e),value:t(e)},n(e))):r.map(e.optGroups,(e,r)=>o.createElement("optgroup",{key:r,label:r},e.map(e=>o.createElement("option",{key:t(e),value:t(e)},n(e))))))}},29:function(e,t,n){"use strict";n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"k",(function(){return g})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return x})),n.d(t,"j",(function(){return w})),n.d(t,"g",(function(){return C})),n.d(t,"i",(function(){return T})),n.d(t,"e",(function(){return O})),n.d(t,"m",(function(){return S})),n.d(t,"f",(function(){return R})),n.d(t,"l",(function(){return q})),n.d(t,"p",(function(){return I})),n.d(t,"q",(function(){return D})),n.d(t,"o",(function(){return F})),n.d(t,"n",(function(){return B})),n.d(t,"t",(function(){return N})),n.d(t,"r",(function(){return L})),n.d(t,"s",(function(){return U}));var r=n(4),o=n(9),s=n(19),a=n(57),i=n(46),c=n(38),l=n(58);const d=e=>{var t;return null!==(t=e.uiType)&&void 0!==t?t:e.type},u={host:o.k,"raw-body":o.a,"raw-body-regexp":o.a,"raw-body-includes":o.a,"json-body":o.a,"json-body-matching":o.a,"eth-method":o.n,"rtc-wildcard":o.u,file:o.j,"req-res-transformer":o.q,"ws-echo":o.A,"ws-listen":o.A,"ws-reject":o.A,"reset-connection":o.d},p=e=>{if(!e||"*"===e)return!0;if("fulfilled"!==o.E.state)return!1;const t=o.E.value;return Object(o.F)(t,e)},h={http:s.h,websocket:a.h,ethereum:i.g,ipfs:c.j,webrtc:l.f},m=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},h.http),h.websocket),h.ethereum),h.ipfs),h.webrtc),g=(e,t)=>{const n=d(e);return!!h[t][n]},f=new Map(Object.entries(m).map(([e,t])=>[t,e])),b={http:s.f,websocket:a.f,ethereum:i.d,ipfs:c.f,webrtc:l.g},y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},b.http),b.websocket),b.ethereum),b.ipfs),b.webrtc),v=Object.assign({},l.g),x=new Map(Object.entries(y).map(([e,t])=>[t,e])),w=(e,t)=>{const n=d(e),r=T(t),o=b[r][n],s=P[n];return!(void 0!==s&&!s(t))&&void 0!==o},E=[...s.g,...a.g,...i.f,...c.g,...l.e],C=()=>E.filter(e=>{const t=f.get(e);return p(u[t])}),T=e=>{const t=r.isString(e)?m[e]:e.constructor;if(s.g.includes(t))return"http";if(a.g.includes(t))return"websocket";if(i.f.includes(t))return"ethereum";if(c.g.includes(t))return"ipfs";if(l.e.includes(t))return"webrtc";throw new Error("Unknown type for initial matcher class: "+t.name)},j=["callback","am-i-using","default-wildcard","default-ws-wildcard","multipart-form-data","raw-body-regexp","hostname","port","protocol","form-data","cookie","rtc-page-hostname","rtc-page-regex","rtc-user-agent-regex"],O=e=>Object.values(h[e]).filter(e=>{const t=f.get(e);return!j.includes(t)&&(!E.includes(e)&&p(u[t]))}),S=e=>j.includes(e),k=["json-rpc-response","rtc-peer-proxy","callback","stream","wait-for-rtc-track"],P={"eth-call-result":e=>e instanceof i.h&&"eth_call"===e.methodName,"eth-number-result":e=>e instanceof i.h&&["eth_getBalance","eth_blockNumber","eth_gasPrice"].includes(e.methodName),"eth-hash-result":e=>e instanceof i.h&&["eth_sendRawTransaction","eth_sendTransaction"].includes(e.methodName),"eth-receipt-result":e=>e instanceof i.h&&"eth_getTransactionReceipt"===e.methodName,"eth-block-result":e=>e instanceof i.h&&["eth_getBlockByHash","eth_getBlockByNumber"].includes(e.methodName),"ipfs-cat-text":e=>e instanceof c.h&&"cat"===e.interactionName,"ipfs-cat-file":e=>e instanceof c.h&&"cat"===e.interactionName,"ipfs-add-result":e=>e instanceof c.h&&"add"===e.interactionName,"ipns-resolve-result":e=>e instanceof c.h&&"name/resolve"===e.interactionName,"ipns-publish-result":e=>e instanceof c.h&&"name/publish"===e.interactionName,"ipfs-pins-result":e=>e instanceof c.h&&["pin/add","pin/rm"].includes(e.interactionName),"ipfs-pin-ls-result":e=>e instanceof c.h&&"pin/ls"===e.interactionName},R=(e,t)=>Object.values(b[e]).filter(e=>{const n=x.get(e);if(k.includes(n))return!1;const r=P[n];return!!(void 0===r||t&&r(t))&&p(u[n])}),H=["echo-rtc","rtc-peer-proxy","rtc-dynamic-proxy","close-rtc-connection"],q=e=>{const t=d(e);return!Object.keys(v).includes(t)||H.includes(t)},A=[s.o,s.e,s.d,s.q,s.p,s.b,s.m,a.b,a.d,a.c],I=(e,t)=>("http"===e||"websocket"===e)&&r.some(A,e=>t instanceof e),D=(e,t)=>("http"===e||"websocket"===e)&&A.includes(t),$=(...e)=>t=>e.includes(t),M=e=>t=>e(t.type),F=$("http","ethereum","ipfs"),B=M(F),N=M($("websocket")),L=M($("webrtc")),U=L},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return b}));var r=n(4),o=n(16),s=n(51);const a=e=>{var t;return((null===(t=Object(o.h)(e.headers.accept))||void 0===t?void 0:t.split(","))||[]).map(e=>Object(s.b)(e))},i=e=>Object(s.b)(Object(o.h)(e.headers["content-type"])),c=e=>r.includes(["POST","PATCH","PUT","DELETE"],e.request.method),l=["application/json","application/xml","application/rss","text/plain","text/xml","text/json","multipart/form-data","application/x-www-form-urlencoded","application/x-protobuf"],d=["image","js","css","html","font","data","rtc-data","rtc-media","mutative","websocket","incomplete","aborted","unknown"];function u(e){if(e.isHttp()){if(!e.isCompletedExchange())return c(e)?"mutative":"incomplete";if(!e.isSuccessfulExchange())return"aborted";if(e.isWebSocket())return"websocket";if(c(e))return"mutative";if((e=>{const t=a(e.request);return!!(t.length>0&&t.every(e=>e.startsWith("image/")))||("image"===e.request.headers["sec-fetch-dest"]||i(e.response).startsWith("image/"))})(e))return"image";if("script"===(t=e).request.headers["sec-fetch-dest"]||r.includes(["text/javascript","application/javascript","application/x-javascript","application/ecmascript"],i(t.response)))return"js";if((e=>"style"===e.request.headers["sec-fetch-dest"]||r.includes(["text/css"],i(e.response)))(e))return"css";if((e=>"document"===e.request.headers["sec-fetch-dest"]||"text/html"===i(e.response))(e))return"html";if((e=>"font"===e.request.headers["sec-fetch-dest"]||i(e.response).startsWith("font/")||r.includes(["application/font-woff","application/x-font-woff","application/font-otf","application/font","application/vnd.ms-fontobject","application/x-font-ttf","application/x-font-typetype","application/x-font-opentype"],i(e.response)))(e))return"font";if((e=>{const t=a(e.request);return!!(t.length>0&&t.every(e=>l.includes(e)))||r.includes(l,i(e.response))})(e))return"data"}else{if(e.isRTCDataChannel())return"rtc-data";if(e.isRTCMediaTrack())return"rtc-media"}var t;return"unknown"}function p(e){const t=m(e);return`${r.startCase(r.findKey(h,e=>e===t))}: ${{mutative:"a request that might affect the server state (unlike a GET request)",incomplete:"an incomplete request",aborted:"an aborted request",image:"a request for an image",js:"a request for JavaScript",css:"a request for CSS",html:"a request for HTML",font:"a request for a font file",data:"an API request",websocket:"a WebSocket stream","rtc-data":"a WebRTC data stream","rtc-media":"a WebRTC media stream",unknown:"an unknown type of request"}[e]}`}const h={black:"#000",grey:"#888",red:"#ce3939",lightGreen:"#4caf7d",brightGreen:"#409309",orange:"#ff8c38",yellow:"#e9f05b",lightBlue:"#2fb4e0",darkBlue:"#5a80cc",purple:"#6e40aa",pink:"#dd3a96"};function m(e){switch("string"==typeof e?e:e.category){case"incomplete":case"aborted":return h.black;case"mutative":return h.red;case"data":case"rtc-data":return h.purple;case"websocket":return h.lightBlue;case"image":return h.lightGreen;case"font":case"rtc-media":return h.brightGreen;case"js":return h.orange;case"css":return h.yellow;case"html":return h.darkBlue;case"unknown":return h.grey}}function g(e,t){return!e||"aborted"===e||e<100||e>=600?t.mainColor:e>=500?h.red:e>=400?h.orange:e>=300?h.darkBlue:e>=200?h.lightGreen:101===e?h.lightBlue:e>=100?h.grey:h.black}function f(e,t){return e&&"aborted"!==e?1e3===e||1001===e?h.lightGreen:e>=1002&&e<=3e3?h.red:e>=3e3?h.orange:h.black:t.mainColor}function b(e){return"GET"===e?h.lightGreen:"POST"===e?h.orange:"DELETE"===e?h.red:"PUT"===e?h.purple:"PATCH"===e?h.pink:"HEAD"===e?h.darkBlue:"OPTIONS"===e?h.lightBlue:h.grey}},344:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=n(4),o=n(257),s=n(101),a=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class i{constructor(e){this.authToken=e}apiRequest(e,t,n={},o){var i,c,l,d;return a(this,void 0,void 0,(function*(){const a=`${e} ${t}`,u=yield fetch(`http://127.0.0.1:45457${t}${Object.keys(n).length?"?"+new URLSearchParams(r.mapValues(n,e=>e.toString())).toString():""}`,{method:e,headers:Object.assign(Object.assign({},this.authToken?{Authorization:"Bearer "+this.authToken}:{}),{"content-type":"application/json"}),body:o?JSON.stringify(o):void 0}).catch(e=>{var t;throw new s.a(`fetch failed with '${null!==(t=e.message)&&void 0!==t?t:e}'`,a)});if(!u.ok){const e=yield u.json().catch(e=>null);throw console.error(u.status,e),new s.a(`unexpected ${u.status} ${u.statusText} - ${(null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.code)?(null===(c=null==e?void 0:e.error)||void 0===c?void 0:c.code)+" -":""}${null!==(d=null===(l=null==e?void 0:e.error)||void 0===l?void 0:l.message)&&void 0!==d?d:"[unknown]"}`,a,u.status)}return u}))}apiJsonRequest(e,t,n={},r){return a(this,void 0,void 0,(function*(){return yield(yield this.apiRequest(e,t,n,r)).json()}))}apiNdJsonRequest(e,t,n={},r){return a(this,void 0,void 0,(function*(){const s=yield this.apiRequest(e,t,n,r);return s.body?Object(o.c)(Object(o.a)(s.body)):Object(o.b)()}))}getServerVersion(){return a(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("get","/version")).version}))}getConfig(e){return a(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET","/config",{proxyPort:e})).config}))}getNetworkInterfaces(){return a(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET","/config/network-interfaces")).networkInterfaces}))}getInterceptors(e){return a(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET","/interceptors",{proxyPort:e})).interceptors}))}getDetailedInterceptorMetadata(e){return a(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET",`/interceptors/${e}/metadata`)).interceptorMetadata}))}activateInterceptor(e,t,n){return a(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("POST",`/interceptors/${e}/activate/${t}`,{},n)).result}))}sendRequest(t,n){var r;return a(this,void 0,void 0,(function*(){const o=Object.assign(Object.assign({},t),{rawBody:null===(r=t.rawBody)||void 0===r?void 0:r.toString("base64")}),s=Object.assign(Object.assign({},n),n.clientCertificate?{clientCertificate:Object.assign(Object.assign({},n.clientCertificate),{pfx:n.clientCertificate.pfx.toString("base64")})}:{}),i=yield this.apiNdJsonRequest("POST","/client/send",{},{request:o,options:s}),c=i.getReader();return new ReadableStream({pull(t){return a(this,void 0,void 0,(function*(){const{done:n,value:r}=yield c.read();if(n)return t.close();"response-body-part"===r.type?t.enqueue(Object.assign(Object.assign({},r),{rawBody:e.from(r.rawBody,"base64")})):t.enqueue(r)}))},cancel(e){i.cancel(e)}})}))}triggerServerUpdate(){return a(this,void 0,void 0,(function*(){yield this.apiJsonRequest("POST","/update")}))}}}).call(this,n(25).Buffer)},347:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m}));var r=n(0),o=n(1),s=n(5),a=n(16),i=n(51),c=n(20),l=n(49),d=n(127),u=n(110),p=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const h=["text","raw","base64","image"];let m=class extends r.Component{componentDidMount(){Object(s.c)(this,Object(o.autorun)(()=>{this.props.message||this.onChangeContentType(void 0)}))}onChangeContentType(e){e===this.props.message.contentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{title:t,url:n,message:o,apiBodySchema:s,direction:p,isPaidUser:m,collapsed:g,expanded:f,onCollapseToggled:b,onExpandToggled:y}=this.props,v=Object(i.c)(o.contentType,Object(a.h)(o.headers["content-type"]),o.body),x=v.includes(this.selectedContentType)?this.selectedContentType:o.contentType,w=o.body.decoded;if(w)return r.createElement(c.b,{direction:p,collapsed:g,onCollapseToggled:b,expanded:f},r.createElement("header",null,r.createElement(l.e,{body:w,mimeType:Object(a.d)(o.headers,"content-type"),downloadFilename:Object(l.f)(n,o.headers),title:t,expanded:!!f,onExpandToggled:y,onCollapseToggled:b,selectedContentType:x,contentTypeOptions:v,onChangeContentType:this.onChangeContentType,isPaidUser:m})),r.createElement(l.d,null,r.createElement(u.a,{contentId:`${o.id}-${p}`,editorNode:this.props.editorNode,rawContentType:Object(a.h)(o.headers["content-type"]),contentType:x,schema:s,expanded:!!f,cache:o.cache},w)));if(!w&&o.body.decodingError){const s=o.body.decodingError,a=e.isBuffer(o.body.encoded)?o.body.encoded:void 0,i=h.includes(this.selectedContentType)?this.selectedContentType:"text";return r.createElement(c.b,{direction:p,collapsed:g,onCollapseToggled:b,expanded:f},r.createElement("header",null,r.createElement(l.e,{body:a,mimeType:"application/octet-stream",downloadFilename:Object(l.f)(n,o.headers),title:t,expanded:f,onExpandToggled:y,onCollapseToggled:b,selectedContentType:i,contentTypeOptions:h,onChangeContentType:this.onChangeContentType,isPaidUser:m})),r.createElement(l.a,{direction:this.props.direction,error:s,headers:o.rawHeaders}),a&&r.createElement(l.d,null,r.createElement(u.a,{contentId:`${o.id}-${p}`,editorNode:this.props.editorNode,contentType:i,expanded:!!f,cache:o.cache},a)))}return r.createElement(d.a,{direction:p,collapsed:g,onCollapseToggled:b,expanded:f},r.createElement("header",null,r.createElement(l.e,{body:void 0,title:t,expanded:!!f,onExpandToggled:y,onCollapseToggled:b,selectedContentType:x,contentTypeOptions:v,onChangeContentType:this.onChangeContentType,isPaidUser:m})))}};p([o.observable],m.prototype,"selectedContentType",void 0),p([o.action.bound],m.prototype,"onChangeContentType",null),m=p([s.e],m)}).call(this,n(25).Buffer)},36:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return d}));var r=n(1),o=n(567),s=n(60);function a(e){const t=Object(o.a)(e),n=t.then;t.then=function(){const e=n.apply(this,arguments);return a(e)};const r=t.catch;return t.catch=function(){const e=r.apply(this,arguments);return a(e)},t}function i(e){return"object"==typeof e&&"then"in e&&"catch"in e&&"case"in e&&"value"in e&&"state"in e}function c(e){const{resolve:t,promise:n}=Object(s.c)(),o=a(n.then(e));["then","catch","case"].forEach(e=>{const n=o[e];o[e]=function(){return t(),n.apply(this,arguments)}});let i=r.observable.box();Object.defineProperty(o,"value",{get:()=>(t(),i.get()),set:e=>{t(),i.set(e)}});let c=r.observable.box();return Object.defineProperty(o,"state",{get:()=>(t(),c.get()),set:e=>{t(),c.set(e)}}),o}function l(e,t){let n;return function(){return n?n.atom.reportObserved():(n={value:e.apply(this),atom:Object(r.createAtom)("DebounceAtom")},setTimeout(()=>{const{atom:e}=n;n=void 0,e.reportChanged()},t)),n.value}}function d(e,t,n){var o;let s,a,i;return"number"==typeof e?(a=e,i=null!==(o=t)&&void 0!==o?o:{},(e,t,n)=>{if(!n.get)throw new Error("debounceComputed requires a getter");return Object(r.computed)(i)(e,t,Object.assign(Object.assign({},n),{get:l(n.get,a)}))}):(s=e,a=t,i=null!=n?n:{},Object(r.computed)(l(s,a),i))}},38:function(e,t,n){"use strict";n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"o",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return g})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"n",(function(){return y})),n.d(t,"m",(function(){return v})),n.d(t,"l",(function(){return x})),n.d(t,"k",(function(){return w})),n.d(t,"j",(function(){return E})),n.d(t,"g",(function(){return C})),n.d(t,"f",(function(){return T}));var r=n(12),o=n(15),s=n(21),a=n(19);const i={cat:"Read IPFS content",add:"Add a file or directory to IPFS","name/resolve":"Resolve an IPNS name","name/publish":"Publish an IPNS name","pin/add":"Pin some IPFS content","pin/rm":"Unpin some IPFS content","pin/ls":"List the pinned IPFS content"};class c extends r.matchers.SimplePathMatcher{constructor(e="cat"){super("/api/v0/"+e),this.interactionName=e,this.uiType="ipfs-interaction"}explain(){return`IPFS ${this.interactionName} requests`}}const l={cat:{argType:"IPFS path",placeholder:"The path to the IPFS object(s) to be read"},"name/resolve":{argType:"IPNS name",placeholder:"The IPNS name to resolve"},"name/publish":{argType:"IPFS path",placeholder:"The IPFS path of the object to be published"},"pin/add":{argType:"IPFS path",placeholder:"The IPFS path to the object(s) to be pinned"},"pin/rm":{argType:"IPFS path",placeholder:"The IPFS path to the object(s) to be unpinned"}},d=e=>Object.keys(l).includes(e);class u extends r.matchers.QueryMatcher{constructor(e,t){super(t?{arg:t}:{}),this.interaction=e,this.argValue=t,this.uiType="ipfs-arg"}explain(){var e,t,n;return"for "+(null!==(e=this.argValue)&&void 0!==e?e:"any "+(null!==(n=null===(t=l[this.interaction])||void 0===t?void 0:t.argType)&&void 0!==n?n:"value"))}}const p=e=>Object.assign({"cache-control":"no-cache",connection:"close",date:(new Date).toUTCString(),"content-type":"application/json; charset=utf-8"},void 0!==e?{"content-length":Object(s.d)(e).toString()}:{}),h=()=>({"cache-control":"no-cache",connection:"close",date:(new Date).toUTCString(),"content-type":"application/json; charset=utf-8","transfer-encoding":"chunked","x-chunked-output":"1"}),m=o.f(a.f.simple);class g extends a.f.simple{constructor(e){super(200,void 0,e,p(e)),this.result=e,this.uiType="ipfs-cat-text"}explain(){return"Return fixed IPFS content"}}o.b(g,m.props,()=>new g(""));class f extends a.f.file{constructor(e){super(200,void 0,e,p()),this.path=e,this.uiType="ipfs-cat-file"}explain(){return"Return IPFS content from "+(this.path||"a file")}}class b extends a.f.simple{constructor(e=[{Name:"uploaded-file.txt",Hash:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}]){super(200,void 0,e.map(e=>JSON.stringify(e)).join("\n"),h()),this.result=e,this.uiType="ipfs-add-result"}explain(){return`Return ${0===this.result.length?"an empty":"fixed"} IPFS add result${this.result.length>1?"s":""}`}}o.b(b,m.props,()=>new b);class y extends a.f.simple{constructor(e={Path:"/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}){super(200,void 0,JSON.stringify(e),p(JSON.stringify(e))),this.result=e,this.uiType="ipns-resolve-result"}explain(){return"Return a fixed IPNS resolved address"}}o.b(y,m.props,()=>new y);class v extends a.f.simple{constructor(e={Name:"QmY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",Value:"/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}){super(200,void 0,JSON.stringify(e),p(JSON.stringify(e))),this.result=e,this.uiType="ipns-publish-result"}explain(){return"Return a fixed IPNS resolve result"}}o.b(v,m.props,()=>new v);class x extends a.f.simple{constructor(e={Pins:["QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"]}){super(200,void 0,JSON.stringify(e),p(JSON.stringify(e))),this.result=e,this.uiType="ipfs-pins-result"}explain(){return"Return fixed IPFS pinning results"}}o.b(x,m.props,()=>new x);class w extends a.f.simple{constructor(e=[{Type:"direct",Cid:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}]){super(200,void 0,e.map(e=>JSON.stringify(e)).join("\n"),h()),this.result=e,this.uiType="ipfs-pin-ls-result"}explain(){return"Return fixed list of IPFS pins"}}o.b(w,m.props,()=>new w);const E={"ipfs-interaction":c,"ipfs-arg":u,query:r.matchers.QueryMatcher,"exact-query-string":r.matchers.ExactQueryMatcher,protocol:r.matchers.ProtocolMatcher,host:r.matchers.HostMatcher,hostname:r.matchers.HostnameMatcher,port:r.matchers.PortMatcher,header:r.matchers.HeaderMatcher,cookie:r.matchers.CookieMatcher},C=[c],T={"ipfs-cat-text":g,"ipfs-cat-file":f,"ipfs-add-result":b,"ipns-publish-result":v,"ipns-resolve-result":y,"ipfs-pins-result":x,"ipfs-pin-ls-result":w,passthrough:a.f.passthrough,"forward-to-host":a.f["forward-to-host"],timeout:a.f.timeout,"close-connection":a.f["close-connection"],"request-breakpoint":a.f["request-breakpoint"],"response-breakpoint":a.f["response-breakpoint"],"request-and-response-breakpoint":a.f["request-and-response-breakpoint"]}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(0),o=n(2),s=n(7),a=n(13);const i=Object(o.j)(e=>r.createElement(a.f,{className:e.className,title:e.title,tabIndex:e.disabled?-1:0,disabled:e.disabled,onClick:e.onClick},r.createElement(s.b,{icon:e.icon,fixedWidth:!!e.fixedWidth})))`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:disabled {
        opacity: 0.5;
    }

    &:not([disabled]) {
        &:hover, &:focus {
            outline: none;
            color: ${e=>e.theme.popColor};
        }
    }
`,c=Object(o.j)(e=>r.createElement(a.g,{className:e.className,title:e.title,href:e.href,target:e.target,rel:e.rel},r.createElement(s.b,{icon:e.icon,fixedWidth:!!e.fixedWidth})))`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }
`},46:function(e,t,n){"use strict";n.d(t,"i",(function(){return a})),n.d(t,"h",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"l",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return b}));var r=n(12),o=n(19),s=n(251);const a={eth_call:"Call a contract method (without a transaction)",eth_sendRawTransaction:"Submit a signed transaction",eth_sendTransaction:"Submit an unsigned transaction",eth_getTransactionReceipt:"Return the receipt of a submitted transaction",eth_getBalance:"Return the balance of an account",eth_gasPrice:"Return the current gas price",eth_blockNumber:"Return the latest block number",eth_getBlockByNumber:"Return information about a block by number",eth_getBlockByHash:"Return information about a block by hash"};class i extends r.matchers.JsonBodyFlexibleMatcher{constructor(e="eth_call"){super({jsonrpc:"2.0",method:e}),this.methodName=e,this.uiType="eth-method"}explain(){return`Ethereum ${this.methodName} requests`}}class c extends r.matchers.JsonBodyFlexibleMatcher{constructor(e){super({params:e}),this.params=e,this.uiType="eth-params"}explain(){return"matching "+JSON.stringify(this.params)}}class l extends o.f["json-rpc-response"]{constructor(e,t){super({result:Object(s.b)(e,t)}),this.outputTypes=e,this.values=t,this.uiType="eth-call-result"}explain(){return this.values.length?"Return an eth_call result of "+this.values.join(", "):"Return an empty eth_call result"}}class d extends o.f["json-rpc-response"]{constructor(e){super({result:"0x"+e.toString(16)}),this.value=e,this.uiType="eth-number-result"}explain(){return"Return "+this.value}}class u extends o.f["json-rpc-response"]{constructor(e){super({result:e}),this.value=e,this.uiType="eth-hash-result"}explain(){return"Return transaction hash "+this.value}}class p extends o.f["json-rpc-response"]{constructor(e={status:"0x1",transactionHash:"012345",blockNumber:"0x100",blockHash:"0x1",from:"0x0",to:"0x0",cumulativeGasUsed:"0x1",gasUsed:"0x1",effectiveGasPrice:"0x0",contractAddress:null,logs:[],logsBloom:"0x0",type:"0x0"}){super({result:e}),this.receiptValue=e,this.uiType="eth-receipt-result"}explain(){return"Return a fixed transaction receipt"}}class h extends o.f["json-rpc-response"]{constructor(e={difficulty:"0x1",extraData:"0x0",gasLimit:"0x1",gasUsed:"0x1",hash:"0x1234",logsBloom:"0x0",miner:"0x1",mixHash:"0x0",nonce:"0x0",number:"0x0",parentHash:"0x1",receiptsRoot:"0x1",sha3Uncles:"0x1",size:"0x1",stateRoot:"0x1",timestamp:"0x1",totalDifficulty:"0x1",transactions:["0x1234"],transactionsRoot:"0x1",uncles:[]}){super({result:e}),this.blockValue=e,this.uiType="eth-block-result"}explain(){return"Return fixed block data"}}class m extends o.f["json-rpc-response"]{constructor(e,t="0x",n=-32099,r){super({error:{message:e,data:t,code:n,name:r}}),this.message=e,this.data=t,this.code=n,this.name=r,this.uiType="eth-error"}explain(){return"Fail with "+(this.message?`"${this.message}"`:"code "+this.code)}}const g={"eth-method":i,"eth-params":c,protocol:r.matchers.ProtocolMatcher,host:r.matchers.HostMatcher,hostname:r.matchers.HostnameMatcher,port:r.matchers.PortMatcher,"simple-path":r.matchers.SimplePathMatcher,"regex-path":r.matchers.RegexPathMatcher,header:r.matchers.HeaderMatcher,query:r.matchers.QueryMatcher,"exact-query-string":r.matchers.ExactQueryMatcher,cookie:r.matchers.CookieMatcher},f=[i],b={"eth-call-result":l,"eth-number-result":d,"eth-hash-result":u,"eth-receipt-result":p,"eth-block-result":h,"eth-error":m,passthrough:o.f.passthrough,"forward-to-host":o.f["forward-to-host"],timeout:o.f.timeout,"close-connection":o.f["close-connection"],"request-breakpoint":o.f["request-breakpoint"],"response-breakpoint":o.f["response-breakpoint"],"request-and-response-breakpoint":o.f["request-and-response-breakpoint"]}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return b}));var r={};n.r(r),n.d(r,"clear",(function(){return i})),n.d(r,"getItem",(function(){return c})),n.d(r,"removeItem",(function(){return l})),n.d(r,"setItem",(function(){return d}));var o=n(4),s=n(1),a=n(15);function i(){return new Promise((e,t)=>{try{window.localStorage.clear(),e(null)}catch(e){t(e)}})}function c(e){return new Promise((t,n)=>{try{t(window.localStorage.getItem(e))}catch(e){n(e)}})}function l(e){return new Promise((t,n)=>{try{window.localStorage.removeItem(e),t(null)}catch(e){n(e)}})}function d(e,t){return new Promise((n,r)=>{try{window.localStorage.setItem(e,t),n(null)}catch(e){r(e)}})}function u(e){return"object"==typeof e&&e&&Object.keys(e).map(t=>u(e[t])),e}function p(e){return e?Object(a.i)(e):Object(a.d)(u,e=>e)}const h={object:p,list:function(e){return Object(a.g)(p(e))},map:function(e){return Object(a.h)(p(e))}};function m(e,t){const n=function e(t){const n={};return Object.keys(t).forEach(r=>{"object"==typeof t[r]?t[r].type in h&&("object"==typeof t[r].schema?n[r]=h[t[r].type](e(t[r].schema)):n[r]=h[t[r].type](t[r].schema)):!0===t[r]&&(n[r]=!0)}),Object(a.c)(n)}(t);return Object(a.o)(e,n),e}var g=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function f(...e){const[t,n]=e;return t in h?Object(a.m)(h[t](n)):1===e.length?e=>m(e,t):a.m.apply(null,e)}function b(e){return g(this,void 0,void 0,(function*(){const{key:t,store:n,storage:i,jsonify:c,dataTransform:l,customArgs:d}=o.defaults(e,{customArgs:{},storage:r,jsonify:!0,dataTransform:o.identity}),u=Object(a.f)(n),p=yield i.getItem(t);if(p){const e=c?JSON.parse(p):p;e&&"object"==typeof e&&Object(s.runInAction)(()=>{Object(a.p)(u,n,l(e),void 0,d)})}Object(s.reaction)(()=>Object(a.n)(u,n),e=>i.setItem(t,c?JSON.stringify(e):e))}))}},49:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return x})),n.d(t,"f",(function(){return w})),n.d(t,"e",(function(){return E})),n.d(t,"c",(function(){return C})),n.d(t,"a",(function(){return j}));var r=n(4),o=n(0),s=n(2),a=n(7),i=n(16),c=n(23),l=n(51),d=n(56),u=n(20),p=n(98),h=n(27),m=n(99),g=n(44),f=n(14);const b=Object(s.j)(f.b)`
    ${e=>"left"===e.direction?"margin: 0 -20px 0 -15px;":"right"===e.direction?"margin: 0 -15px 0 -20px;":"margin: 0 -20px 0 -20px;"}

    padding: 10px 30px 0;

    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.warningBackground};
    border-top: solid 1px ${e=>e.theme.containerBorder};

    svg {
        margin-left: 0;
    }
`;var y=n(130);const v=s.j.div`
    margin: 0 -20px -20px -20px;
    border-top: solid 1px ${e=>e.theme.containerBorder};
    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};

    .monaco-editor-overlaymessage {
        display: none;
    }

    position: relative;
    flex-grow: 1;

    /*
    Allows shrinking smaller than content, to allow scrolling overflow e.g. for
    scrollable URL param content
    */
    min-height: 0;
`,x=Object(s.j)(v)`
    flex-shrink: 1;
`;function w(e,t){const n=Object(i.d)(t,"content-disposition")||"",o=/ filename="([^"]+)"/.exec(n);if(o){const e=o[1];return r.last(r.last(e.split("/")).split("\\"))}const s=r.last(e.split("/"));if(null==s?void 0:s.includes("."))return s}const E=e=>{const{body:t}=e;return o.createElement(o.Fragment,null,t&&o.createElement(o.Fragment,null,o.createElement(p.a,null,o.createElement(m.a,{expanded:e.expanded,onClick:e.onExpandToggled}),o.createElement(g.a,{icon:["fas","download"],title:e.isPaidUser?"Save this body as a file":"With Pro: Save this body as a file",disabled:!e.isPaidUser,onClick:()=>Object(c.f)(e.downloadFilename||"",e.mimeType||"application/octet-stream",t)})),o.createElement(h.a,null,Object(d.a)(t.byteLength))),o.createElement(h.c,{onChange:e.onChangeContentType,value:e.selectedContentType,options:e.contentTypeOptions,nameFormatter:l.d}),o.createElement(u.c,{onCollapseToggled:e.onCollapseToggled},e.title))},C=e=>{const{body:t}=e;return o.createElement(o.Fragment,null,o.createElement(p.a,null,o.createElement(m.a,{expanded:e.expanded,onClick:e.onExpandToggled}),o.createElement(y.a,{format:e.selectedContentType,content:t,onFormatted:e.onBodyFormatted})),o.createElement(h.a,null,Object(d.a)(t)),o.createElement(h.c,{onChange:e.onChangeContentType,value:e.selectedContentType,options:e.contentTypeOptions,nameFormatter:l.d}),o.createElement(u.c,{onCollapseToggled:e.onCollapseToggled},e.title))},T=Object(s.j)(f.e)`
    padding: 0;
    margin: 10px 0;
`,j=e=>o.createElement(b,{direction:e.direction},o.createElement("p",null,o.createElement(a.e,null)," Body decoding failed for encoding '",Object(i.d)(e.headers,"content-encoding"),"' due to:"),o.createElement(T,null,e.error.code?e.error.code+": ":"",e.error.message||e.error.toString()),o.createElement("p",null,"This typically means either the ",o.createElement("code",null,"content-encoding")," header is incorrect or unsupported, or the body was corrupted. The raw content (not decoded) is shown below."))},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return p}));const r={100:{name:"100 Continue",mdnSlug:"Web/HTTP/Status/100",summary:"The HTTP 100 Continue informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished."},101:{name:"101 Switching Protocols",mdnSlug:"Web/HTTP/Status/101",summary:"The HTTP 101 Switching Protocols response code indicates the protocol the server is switching to as requested by a client which sent the message including the Upgrade request header."},103:{name:"103 Early Hints",mdnSlug:"Web/HTTP/Status/103",summary:"The HTTP 103 Early Hints information response status code is primarily intended to be used with the Link header to allow the user agent to start preloading resources while the server is still preparing a response."},200:{name:"200 OK",mdnSlug:"Web/HTTP/Status/200",summary:"The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default."},201:{name:"201 Created",mdnSlug:"Web/HTTP/Status/201",summary:"The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource. The new resource is effectively created before this response is sent back and the new resource is returned in the body of the message, its location being either the URL of the request, or the content of the Location header."},202:{name:"202 Accepted",mdnSlug:"Web/HTTP/Status/202",summary:"The HTTP 202 Accepted response status code indicates that the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place."},203:{name:"203 Non-Authoritative Information",mdnSlug:"Web/HTTP/Status/203",summary:"The HTTP 203 Non-Authoritative Information response status indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server's 200 (OK) response ."},204:{name:"204 No Content",mdnSlug:"Web/HTTP/Status/204",summary:"The HTTP 204 No Content success status response code indicates that the request has succeeded, but that the client doesn't need to go away from its current page. A 204 response is cacheable by default. An ETag header is included in such a response."},205:{name:"205 Reset Content",mdnSlug:"Web/HTTP/Status/205",summary:"The HTTP 205 Reset Content response status tells the client to reset the document view, so for example to clear the content of a form, reset a canvas state, or to refresh the UI."},206:{name:"206 Partial Content",mdnSlug:"Web/HTTP/Status/206",summary:"The HTTP 206 Partial Content success status response code indicates that the request has succeeded and has the body contains the requested ranges of data, as described in the Range header of the request."},300:{name:"300 Multiple Choices",mdnSlug:"Web/HTTP/Status/300",summary:"The HTTP 300 Multiple Choices redirect status response code indicates that the request has more than one possible responses. The user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used."},301:{name:"301 Moved Permanently",mdnSlug:"Web/HTTP/Status/301",summary:"The HTTP 301 Moved Permanently redirect status response code indicates that the resource requested has been definitively moved to the URL given by the Location headers. A browser redirects to this page and search engines update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is sent to the new URL)."},302:{name:"302 Found",mdnSlug:"Web/HTTP/Status/302",summary:"The HTTP 302 Found redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location header. A browser redirects to this page but search engines don't update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is not sent to the new URL)."},303:{name:"303 See Other",mdnSlug:"Web/HTTP/Status/303",summary:"The HTTP 303 See Other redirect status response code indicates that the redirects don't link to the newly uploaded resources, but to another page (such as a confirmation page or an upload progress page). This response code is usually sent back as a result of PUT or POST. The method used to display this redirected page is always GET."},304:{name:"304 Not Modified",mdnSlug:"Web/HTTP/Status/304",summary:"The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources. It is an implicit redirection to a cached resource. This happens when the request method is safe, like a GET or a HEAD request, or when the request is conditional and uses a If-None-Match or a If-Modified-Since header."},307:{name:"307 Temporary Redirect",mdnSlug:"Web/HTTP/Status/307",summary:'The method and the body of the original request are reused to perform the redirected request. In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give an answer to a PUT method that is not the uploaded resources, but a confirmation message (like "You successfully uploaded XYZ").'},308:{name:"308 Permanent Redirect",mdnSlug:"Web/HTTP/Status/308",summary:"The request method and the body will not be altered, whereas 301 may incorrectly sometimes be changed to a GET method."},400:{name:"400 Bad Request",mdnSlug:"Web/HTTP/Status/400",summary:"The HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{name:"401 Unauthorized",mdnSlug:"Web/HTTP/Status/401",summary:"The HTTP 401 Unauthorized client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource."},402:{name:"402 Payment Required",mdnSlug:"Web/HTTP/Status/402",summary:"The HTTP 402 Payment Required is a nonstandard client error status response code that is reserved for future use."},403:{name:"403 Forbidden",mdnSlug:"Web/HTTP/Status/403",summary:"The HTTP 403 Forbidden client error status response code indicates that the server understood the request but refuses to authorize it."},404:{name:"404 Not Found",mdnSlug:"Web/HTTP/Status/404",summary:"The HTTP 404 Not Found client error response code indicates that the server can't find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot."},405:{name:"405 Method Not Allowed",mdnSlug:"Web/HTTP/Status/405",summary:"The HTTP 405 Method Not Allowed response status code indicates that the request method is known by the server but is not supported by the target resource."},406:{name:"406 Not Acceptable",mdnSlug:"Web/HTTP/Status/406",summary:"The HTTP 406 Not Acceptable client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers, and that the server is unwilling to supply a default representation."},407:{name:"407 Proxy Authentication Required",mdnSlug:"Web/HTTP/Status/407",summary:"The HTTP 407 Proxy Authentication Required  client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server that is between the browser and the server that can access the requested resource."},408:{name:"408 Request Timeout",mdnSlug:"Web/HTTP/Status/408",summary:"The HTTP 408 Request Timeout response status code means that the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client."},409:{name:"409 Conflict",mdnSlug:"Web/HTTP/Status/409",summary:"The HTTP 409 Conflict response status code indicates a request conflict with current state of the target resource."},410:{name:"410 Gone",mdnSlug:"Web/HTTP/Status/410",summary:"The HTTP 410 Gone client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."},411:{name:"411 Length Required",mdnSlug:"Web/HTTP/Status/411",summary:"The HTTP 411 Length Required client error response code indicates that the server refuses to accept the request without a defined Content-Length header."},412:{name:"412 Precondition Failed",mdnSlug:"Web/HTTP/Status/412",summary:"The HTTP 412 Precondition Failed client error response code indicates that access to the target resource has been denied. This happens with conditional requests on methods other than GET or HEAD when the condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back."},413:{name:"413 Payload Too Large",mdnSlug:"Web/HTTP/Status/413",summary:"The HTTP 413 Payload Too Large response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a Retry-After header field."},414:{name:"414 URI Too Long",mdnSlug:"Web/HTTP/Status/414",summary:"The HTTP 414 URI Too Long response status code indicates that the URI requested by the client is longer than the server is willing to interpret."},415:{name:"415 Unsupported Media Type",mdnSlug:"Web/HTTP/Status/415",summary:"The HTTP 415 Unsupported Media Type client error response code indicates that the server refuses to accept the request because the payload format is in an unsupported format."},416:{name:"416 Range Not Satisfiable",mdnSlug:"Web/HTTP/Status/416",summary:"The HTTP 416 Range Not Satisfiable error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn't contain such ranges, or that the Range header value, though syntactically correct, doesn't make sense."},417:{name:"417 Expectation Failed",mdnSlug:"Web/HTTP/Status/417",summary:"The HTTP 417 Expectation Failed client error response code indicates that the expectation given in the request's Expect header could not be met."},418:{name:"418 I'm a teapot",mdnSlug:"Web/HTTP/Status/418",summary:"The HTTP 418 I'm a teapot client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014."},422:{name:"422 Unprocessable Entity",mdnSlug:"Web/HTTP/Status/422",summary:"The HTTP 422 Unprocessable Entity response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions."},425:{name:"425 Too Early",mdnSlug:"Web/HTTP/Status/425",summary:"The HTTP 425 Too Early response status code indicates that the server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack."},426:{name:"426 Upgrade Required",mdnSlug:"Web/HTTP/Status/426",summary:"The HTTP 426 Upgrade Required client error response code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."},428:{name:"428 Precondition Required",mdnSlug:"Web/HTTP/Status/428",summary:"The HTTP 428 Precondition Required response status code indicates that the server requires the request to be conditional."},429:{name:"429 Too Many Requests",mdnSlug:"Web/HTTP/Status/429",summary:'The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time ("rate limiting").'},431:{name:"431 Request Header Fields Too Large",mdnSlug:"Web/HTTP/Status/431",summary:"The HTTP 431 Request Header Fields Too Large response status code indicates that the server refuses to process the request because the request’s HTTP headers are too long."},451:{name:"451 Unavailable For Legal Reasons",mdnSlug:"Web/HTTP/Status/451",summary:"The HTTP 451 Unavailable For Legal Reasons client error response code indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued."},500:{name:"500 Internal Server Error",mdnSlug:"Web/HTTP/Status/500",summary:"The HTTP 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request."},501:{name:"501 Not Implemented",mdnSlug:"Web/HTTP/Status/501",summary:"The HTTP 501 Not Implemented server error response code means that the server does not support the functionality required to fulfill the request."},502:{name:"502 Bad Gateway",mdnSlug:"Web/HTTP/Status/502",summary:"The HTTP 502 Bad Gateway server error response code indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server."},503:{name:"503 Service Unavailable",mdnSlug:"Web/HTTP/Status/503",summary:"The HTTP 503 Service Unavailable server error response code indicates that the server is not ready to handle the request."},504:{name:"504 Gateway Timeout",mdnSlug:"Web/HTTP/Status/504",summary:"The HTTP 504 Gateway Timeout server error response code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request."},505:{name:"505 HTTP Version Not Supported",mdnSlug:"Web/HTTP/Status/505",summary:"The HTTP 505 HTTP Version Not Supported response status code indicates that the HTTP version used in the request is not supported by the server."},506:{name:"506 Variant Also Negotiates",mdnSlug:"Web/HTTP/Status/506",summary:"The HTTP 506 Variant Also Negotiates response status code may be given in the context of Transparent Content Negotiation (see RFC 2295). This protocol enables a client to retrieve the best variant of a given resource, where the server supports multiple variants."},507:{name:"507 Insufficient Storage",mdnSlug:"Web/HTTP/Status/507",summary:"The HTTP 507 Insufficient Storage response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol (see RFC 4918)."},508:{name:"508 Loop Detected",mdnSlug:"Web/HTTP/Status/508",summary:"The HTTP 508 Loop Detected response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol."},510:{name:"510 Not Extended",mdnSlug:"Web/HTTP/Status/510",summary:"The HTTP  510 Not Extended response status code is sent in the context of the HTTP Extension Framework, defined in RFC 2774."},511:{name:"511 Network Authentication Required",mdnSlug:"Web/HTTP/Status/511",summary:"The HTTP 511 Network Authentication Required response status code indicates that the client needs to authenticate to gain network access."}},o={1e3:{name:"Normal Closure",summary:"A normal WebSocket closure, meaning that the purpose for which the connection was established has been fulfilled."},1001:{name:"Going Away",summary:'An endpoint is "going away", such as a server going down or a browser having navigated away from a page.'},1002:{name:"Protocol Error",summary:"An endpoint terminated the connection due to a protocol error"},1003:{name:"Unsupported Data",summary:"An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message)."},1004:{name:"Reserved",summary:"This close code is not used. A specific meaning might be defined in future."},1005:{name:"No Close Code Received",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that no status code was actually present."},1006:{name:"Abnormal Closure",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that the connection was closed abnormally, e.g., without sending or receiving a Close control frame."},1007:{name:"Invalid Frame Payload Data",summary:"An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 data within a text message)."},1008:{name:"Policy Violation",summary:"An endpoint is terminating the connection because it has received a message that violates its policy. This is a generic status code that can be returned when there is no other more suitable status code (e.g., 1003 or 1009) or if there is a need to hide specific details about the policy."},1009:{name:"Message Too Large",summary:"An endpoint is terminating the connection because it has received a message that is too big for it to process."},1010:{name:"Mandatory Extension",summary:"The client is terminating the connection because it has expected the server to negotiate one or more extensions, but the server didn't return them in the response message of the WebSocket handshake.  The list of extensions that are needed SHOULD appear in the /reason/ part of the Close frame."},1011:{name:"Internal Error",summary:"The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."},1012:{name:"Service Restart",summary:"The server is terminating the connection because it is restarting."},1013:{name:"Try Again Later",summary:"The server is terminating the connection due to a temporary condition, such as being overloaded."},1014:{name:"Bad Gateway",summary:"The server was acting as a gateway or proxy, and received an invalid response from an upstream server."},1015:{name:"TLS Handshake",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."}},s={accept:{mdnSlug:"Web/HTTP/Headers/Accept",name:"Accept",summary:"The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand."},"accept-ch":{mdnSlug:"Web/HTTP/Headers/Accept-CH",name:"Accept-CH",summary:"The Accept-CH header is set by the server to specify which Client Hints headers a client should include in subsequent requests."},"accept-ch-lifetime":{mdnSlug:"Web/HTTP/Headers/Accept-CH-Lifetime",name:"Accept-CH-Lifetime",summary:"The Accept-CH-Lifetime header is set by the server to specify the persistence of Accept-CH header value that specifies for which Client Hints headers client should include in subsequent requests."},"accept-charset":{mdnSlug:"Web/HTTP/Headers/Accept-Charset",name:"Accept-Charset",summary:"The Accept-Charset request HTTP header advertises which character encodings the client understands."},"accept-encoding":{mdnSlug:"Web/HTTP/Headers/Accept-Encoding",name:"Accept-Encoding",summary:"The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand."},"accept-language":{mdnSlug:"Web/HTTP/Headers/Accept-Language",name:"Accept-Language",summary:"The Accept-Language request HTTP header advertises which languages the client is able to understand, and which locale variant is preferred."},"accept-patch":{mdnSlug:"Web/HTTP/Headers/Accept-Patch",name:"Accept-Patch",summary:"The Accept-Patch response HTTP header advertises which media-type the server is able to understand."},"accept-ranges":{mdnSlug:"Web/HTTP/Headers/Accept-Ranges",name:"Accept-Ranges",summary:"The Accept-Ranges response HTTP header is a marker used by the server to advertise its support of partial requests."},"access-control-allow-credentials":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Credentials",name:"Access-Control-Allow-Credentials",summary:"The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request's credentials mode (Request.credentials) is include."},"access-control-allow-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Headers",name:"Access-Control-Allow-Headers",summary:"The Access-Control-Allow-Headers response header is used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request."},"access-control-allow-methods":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Methods",name:"Access-Control-Allow-Methods",summary:"The Access-Control-Allow-Methods response header specifies the method or methods allowed when accessing the resource in response to a preflight request."},"access-control-allow-origin":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Origin",name:"Access-Control-Allow-Origin",summary:"The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin."},"access-control-expose-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Expose-Headers",name:"Access-Control-Expose-Headers",summary:"The Access-Control-Expose-Headers response header indicates which headers can be exposed as part of the response by listing their names."},"access-control-max-age":{mdnSlug:"Web/HTTP/Headers/Access-Control-Max-Age",name:"Access-Control-Max-Age",summary:"The Access-Control-Max-Age response header indicates how long the results of a preflight request (that is the information contained in the Access-Control-Allow-Methods and Access-Control-Allow-Headers headers) can be cached."},"access-control-request-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Request-Headers",name:"Access-Control-Request-Headers",summary:"The Access-Control-Request-Headers request header is used by browsers when issuing a preflight request, to let the server know which HTTP headers the client might send when the actual request is made."},"access-control-request-method":{mdnSlug:"Web/HTTP/Headers/Access-Control-Request-Method",name:"Access-Control-Request-Method",summary:"The Access-Control-Request-Method request header is used by browsers when issuing a preflight request, to let the server know which HTTP method will be used when the actual request is made."},age:{mdnSlug:"Web/HTTP/Headers/Age",name:"Age",summary:"The Age header contains the time in seconds the object has been in a proxy cache."},allow:{mdnSlug:"Web/HTTP/Headers/Allow",name:"Allow",summary:"The Allow header lists the set of methods supported by a resource."},"alt-svc":{mdnSlug:"Web/HTTP/Headers/Alt-Svc",name:"Alt-Svc",summary:"The Alt-Svc HTTP response header is used to advertise alternative services through which the same resource can be reached."},authorization:{mdnSlug:"Web/HTTP/Headers/Authorization",name:"Authorization",summary:"The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually, but not necessarily, after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header."},"cache-control":{mdnSlug:"Web/HTTP/Headers/Cache-Control",name:"Cache-Control",summary:"The Cache-Control HTTP header holds directives (instructions) for caching in both requests and responses."},"clear-site-data":{mdnSlug:"Web/HTTP/Headers/Clear-Site-Data",name:"Clear-Site-Data",summary:"The Clear-Site-Data header clears browsing data (cookies, storage, cache) associated with the requesting website."},connection:{mdnSlug:"Web/HTTP/Headers/Connection",name:"Connection",summary:"The Connection general header controls whether or not the network connection stays open after the current transaction finishes."},"content-disposition":{mdnSlug:"Web/HTTP/Headers/Content-Disposition",name:"Content-Disposition",summary:"In a regular HTTP response, the Content-Disposition response header is a header indicating if the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page, or as an attachment, that is downloaded and saved locally."},"content-encoding":{mdnSlug:"Web/HTTP/Headers/Content-Encoding",name:"Content-Encoding",summary:"The Content-Encoding entity header is used to compress the media-type."},"content-language":{mdnSlug:"Web/HTTP/Headers/Content-Language",name:"Content-Language",summary:"The Content-Language entity header is used to describe the language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language."},"content-length":{mdnSlug:"Web/HTTP/Headers/Content-Length",name:"Content-Length",summary:"The Content-Length entity header indicates the size of the entity-body, in bytes, sent to the recipient."},"content-location":{mdnSlug:"Web/HTTP/Headers/Content-Location",name:"Content-Location",summary:"The Content-Location header indicates an alternate location for the returned data."},"content-range":{mdnSlug:"Web/HTTP/Headers/Content-Range",name:"Content-Range",summary:"The Content-Range response HTTP header indicates where in a full body message a partial message belongs."},"content-security-policy":{mdnSlug:"Web/HTTP/Headers/Content-Security-Policy",name:"Content-Security-Policy",summary:"The HTTP Content-Security-Policy response header allows web site administrators to control resources the user agent is allowed to load for a given page."},"content-security-policy-report-only":{mdnSlug:"Web/HTTP/Headers/Content-Security-Policy-Report-Only",name:"Content-Security-Policy-Report-Only",summary:"The HTTP Content-Security-Policy-Report-Only response header allows web developers to experiment with policies by monitoring (but not enforcing) their effects."},"content-type":{mdnSlug:"Web/HTTP/Headers/Content-Type",name:"Content-Type",summary:"The Content-Type entity header is used to indicate the media type of the resource."},cookie:{mdnSlug:"Web/HTTP/Headers/Cookie",name:"Cookie",summary:"The Cookie HTTP request header contains stored HTTP cookies previously sent by the server with the Set-Cookie header."},cookie2:{mdnSlug:"Web/HTTP/Headers/Cookie2",name:"Cookie2",summary:'The obsolete Cookie2 HTTP request header used to advise the server that the user agent understands "new-style" cookies, but nowadays user agents will use the Cookie header instead, not this one.'},"cross-origin-embedder-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Embedder-Policy",name:"Cross-Origin-Embedder-Policy",summary:"The HTTP Cross-Origin-Embedder-Policy (COEP) response header prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS)."},"cross-origin-opener-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Opener-Policy",name:"Cross-Origin-Opener-Policy",summary:"The HTTP Cross-Origin-Opener-Policy (COOP) response header allows you to ensure a top-level document does not share a browsing context group with cross-origin documents."},"cross-origin-resource-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Resource-Policy",name:"Cross-Origin-Resource-Policy",summary:"The HTTP Cross-Origin-Resource-Policy response header conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the given resource."},dnt:{mdnSlug:"Web/HTTP/Headers/DNT",name:"DNT",summary:"The DNT (Do Not Track) request header indicates the user's tracking preference."},dpr:{mdnSlug:"Web/HTTP/Headers/DPR",name:"DPR",summary:"The DPR header is a Client Hints headers which represents the client device pixel ratio (DPR), which is the the number of physical device pixels corresponding to every CSS pixel."},date:{mdnSlug:"Web/HTTP/Headers/Date",name:"Date",summary:"The Date general HTTP header contains the date and time at which the message was originated."},"device-memory":{mdnSlug:"Web/HTTP/Headers/Device-Memory",name:"Device-Memory",summary:"The Device-Memory header is a Device Memory API header that works like Client Hints header which represents the approximate amount of RAM client device has."},digest:{mdnSlug:"Web/HTTP/Headers/Digest",name:"Digest",summary:"The Digest response HTTP header provides a digest of the requested resource."},etag:{mdnSlug:"Web/HTTP/Headers/ETag",name:"ETag",summary:"The ETag HTTP response header is an identifier for a specific version of a resource."},"early-data":{mdnSlug:"Web/HTTP/Headers/Early-Data",name:"Early-Data",summary:"The Early-Data header is set by an intermediary to indicate that the request has been conveyed in TLS early data, and also indicates that the intermediary understands the 425 (Too Early) status code."},expect:{mdnSlug:"Web/HTTP/Headers/Expect",name:"Expect",summary:"The Expect HTTP request header indicates expectations that need to be fulfilled by the server in order to properly handle the request."},"expect-ct":{mdnSlug:"Web/HTTP/Headers/Expect-CT",name:"Expect-CT",summary:"The Expect-CT header lets sites opt in to reporting and/or enforcement of Certificate Transparency requirements, to prevent the use of misissued certificates for that site from going unnoticed."},expires:{mdnSlug:"Web/HTTP/Headers/Expires",name:"Expires",summary:"The Expires header contains the date/time after which the response is considered stale."},"feature-policy":{mdnSlug:"Web/HTTP/Headers/Feature-Policy",name:"Feature-Policy",summary:"The HTTP Feature-Policy header provides a mechanism to allow and deny the use of browser features in its own frame, and in content within any <iframe> elements in the document."},forwarded:{mdnSlug:"Web/HTTP/Headers/Forwarded",name:"Forwarded",summary:"The Forwarded header contains information from the reverse proxy servers that is altered or lost when a proxy is involved in the path of the request."},from:{mdnSlug:"Web/HTTP/Headers/From",name:"From",summary:"The From request header contains an Internet email address for a human user who controls the requesting user agent."},host:{mdnSlug:"Web/HTTP/Headers/Host",name:"Host",summary:"The Host request header specifies the host and port number of the server to which the request is being sent."},"if-match":{mdnSlug:"Web/HTTP/Headers/If-Match",name:"If-Match",summary:"The If-Match HTTP request header makes the request conditional."},"if-modified-since":{mdnSlug:"Web/HTTP/Headers/If-Modified-Since",name:"If-Modified-Since",summary:"The If-Modified-Since request HTTP header makes the request conditional: the server will send back the requested resource, with a 200 status, only if it has been last modified after the given date."},"if-none-match":{mdnSlug:"Web/HTTP/Headers/If-None-Match",name:"If-None-Match",summary:"The If-None-Match HTTP request header makes the request conditional."},"if-range":{mdnSlug:"Web/HTTP/Headers/If-Range",name:"If-Range",summary:"The If-Range HTTP request header makes a range request conditional: if the condition is fulfilled, the range request will be issued and the server sends back a 206 Partial Content answer with the appropriate body."},"if-unmodified-since":{mdnSlug:"Web/HTTP/Headers/If-Unmodified-Since",name:"If-Unmodified-Since",summary:"The If-Unmodified-Since request HTTP header makes the request conditional: the server will send back the requested resource, or accept it in the case of a POST or another non-safe method, only if it has not been last modified after the given date."},"keep-alive":{mdnSlug:"Web/HTTP/Headers/Keep-Alive",name:"Keep-Alive",summary:"The Keep-Alive general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests."},"large-allocation":{mdnSlug:"Web/HTTP/Headers/Large-Allocation",name:"Large-Allocation",summary:"The non-standard Large-Allocation response header tells the browser that the page being loaded is going to want to perform a large allocation."},"last-modified":{mdnSlug:"Web/HTTP/Headers/Last-Modified",name:"Last-Modified",summary:"The Last-Modified response HTTP header contains the date and time at which the origin server believes the resource was last modified."},link:{mdnSlug:"Web/HTTP/Headers/Link",name:"Link",summary:"The HTTP Link entity-header field provides a means for serialising one or more links in HTTP headers."},location:{mdnSlug:"Web/HTTP/Headers/Location",name:"Location",summary:"The Location response header indicates the URL to redirect a page to."},nel:{mdnSlug:"Web/HTTP/Headers/NEL",name:"NEL",summary:"The HTTP NEL response header is used to configure network request logging."},origin:{mdnSlug:"Web/HTTP/Headers/Origin",name:"Origin",summary:"The Origin request header indicates where a fetch originates from."},pragma:{mdnSlug:"Web/HTTP/Headers/Pragma",name:"Pragma",summary:"The Pragma HTTP/1.0 general header is an implementation-specific header that may have various effects along the request-response chain."},"proxy-authenticate":{mdnSlug:"Web/HTTP/Headers/Proxy-Authenticate",name:"Proxy-Authenticate",summary:"The HTTP Proxy-Authenticate response header defines the authentication method that should be used to gain access to a resource behind a proxy server."},"proxy-authorization":{mdnSlug:"Web/HTTP/Headers/Proxy-Authorization",name:"Proxy-Authorization",summary:"The HTTP Proxy-Authorization request header contains the credentials to authenticate a user agent to a proxy server, usually after the server has responded with a 407 Proxy Authentication Required status and the Proxy-Authenticate header."},"public-key-pins":{mdnSlug:"Web/HTTP/Headers/Public-Key-Pins",name:"Public-Key-Pins",summary:"The HTTP Public-Key-Pins response header used to associate a specific cryptographic public key with a certain web server to decrease the risk of MITM attacks with forged certificates, however, it has been removed from modern browsers and is no longer supported."},"public-key-pins-report-only":{mdnSlug:"Web/HTTP/Headers/Public-Key-Pins-Report-Only",name:"Public-Key-Pins-Report-Only",summary:"The HTTP Public-Key-Pins-Report-Only response header was used to send reports of pinning violation to the report-uri specified in the header but, unlike Public-Key-Pins still allows browsers to connect to the server if the pinning is violated."},range:{mdnSlug:"Web/HTTP/Headers/Range",name:"Range",summary:"The Range HTTP request header indicates the part of a document that the server should return."},referer:{mdnSlug:"Web/HTTP/Headers/Referer",name:"Referer",summary:"The Referer request header contains the address of the page making the request."},"referrer-policy":{mdnSlug:"Web/HTTP/Headers/Referrer-Policy",name:"Referrer-Policy",summary:"The Referrer-Policy HTTP header controls how much referrer information (sent via the Referer header) should be included with requests."},"retry-after":{mdnSlug:"Web/HTTP/Headers/Retry-After",name:"Retry-After",summary:"The Retry-After response HTTP header indicates how long the user agent should wait before making a follow-up request."},"save-data":{mdnSlug:"Web/HTTP/Headers/Save-Data",name:"Save-Data",summary:"The Save-Data header field is a boolean which, in requests, indicates the client's preference for reduced data usage."},"sec-fetch-dest":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Dest",name:"Sec-Fetch-Dest",summary:"The Sec-Fetch-Dest fetch metadata header indicates the request's destination, that is how the fetched data will be used."},"sec-fetch-mode":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Mode",name:"Sec-Fetch-Mode",summary:"The Sec-Fetch-Mode fetch metadata header indicates the request's mode."},"sec-fetch-site":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Site",name:"Sec-Fetch-Site",summary:"The Sec-Fetch-Site fetch metadata header indicates the relationship between a request initiator's origin and the origin of the resource."},"sec-fetch-user":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-User",name:"Sec-Fetch-User",summary:"The Sec-Fetch-User fetch metadata header indicates whether or not a navigation request was triggered by a user activation."},"sec-websocket-accept":{mdnSlug:"Web/HTTP/Headers/Sec-WebSocket-Accept",name:"Sec-WebSocket-Accept",summary:"The Sec-WebSocket-Accept header is used in the websocket opening handshake."},server:{mdnSlug:"Web/HTTP/Headers/Server",name:"Server",summary:"The Server header describes the software used by the origin server that handled the request — that is, the server that generated the response."},"server-timing":{mdnSlug:"Web/HTTP/Headers/Server-Timing",name:"Server-Timing",summary:"The Server-Timing header communicates one or more metrics and descriptions for a given request-response cycle."},"set-cookie":{mdnSlug:"Web/HTTP/Headers/Set-Cookie",name:"Set-Cookie",summary:"The Set-Cookie HTTP response header is used to send a cookie from the server to the user agent, so the user agent can send it back to the server later."},"set-cookie2":{mdnSlug:"Web/HTTP/Headers/Set-Cookie2",name:"Set-Cookie2",summary:"The obsolete Set-Cookie2 HTTP response header used to send cookies from the server to the user agent, but has been deprecated by the specification."},sourcemap:{mdnSlug:"Web/HTTP/Headers/SourceMap",name:"SourceMap",summary:"The SourceMap HTTP response header links generated code to a source map, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger."},"strict-transport-security":{mdnSlug:"Web/HTTP/Headers/Strict-Transport-Security",name:"Strict-Transport-Security",summary:"The HTTP Strict-Transport-Security response header (often abbreviated as HSTS) lets a web site tell browsers that it should only be accessed using HTTPS, instead of using HTTP."},te:{mdnSlug:"Web/HTTP/Headers/TE",name:"TE",summary:"The TE request header specifies the transfer encodings the user agent is willing to accept."},"timing-allow-origin":{mdnSlug:"Web/HTTP/Headers/Timing-Allow-Origin",name:"Timing-Allow-Origin",summary:"The Timing-Allow-Origin response header specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions."},tk:{mdnSlug:"Web/HTTP/Headers/Tk",name:"Tk",summary:"The Tk response header indicates the tracking status that applied to the corresponding request."},trailer:{mdnSlug:"Web/HTTP/Headers/Trailer",name:"Trailer",summary:"The Trailer response header allows the sender to include additional fields at the end of chunked messages in order to supply metadata that might be dynamically generated while the message body is sent, such as a message integrity check, digital signature, or post-processing status."},"transfer-encoding":{mdnSlug:"Web/HTTP/Headers/Transfer-Encoding",name:"Transfer-Encoding",summary:"The Transfer-Encoding header specifies the form of encoding used to safely transfer the payload body to the user."},"upgrade-insecure-requests":{mdnSlug:"Web/HTTP/Headers/Upgrade-Insecure-Requests",name:"Upgrade-Insecure-Requests",summary:"The HTTP Upgrade-Insecure-Requests request header sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests CSP directive."},"user-agent":{mdnSlug:"Web/HTTP/Headers/User-Agent",name:"User-Agent",summary:"The User-Agent request header is a characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent."},vary:{mdnSlug:"Web/HTTP/Headers/Vary",name:"Vary",summary:"The Vary HTTP response header determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server."},via:{mdnSlug:"Web/HTTP/Headers/Via",name:"Via",summary:"The Via general header is added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers."},"www-authenticate":{mdnSlug:"Web/HTTP/Headers/WWW-Authenticate",name:"WWW-Authenticate",summary:"The HTTP WWW-Authenticate response header defines the authentication method that should be used to gain access to a resource."},"want-digest":{mdnSlug:"Web/HTTP/Headers/Want-Digest",name:"Want-Digest",summary:"The Want-Digest HTTP header is primarily used in a HTTP request, to ask the responder to provide a digest of the requested resource using the Digest response header."},warning:{mdnSlug:"Web/HTTP/Headers/Warning",name:"Warning",summary:"The Warning general HTTP header contains information about possible problems with the status of the message."},"x-content-type-options":{mdnSlug:"Web/HTTP/Headers/X-Content-Type-Options",name:"X-Content-Type-Options",summary:"The X-Content-Type-Options response HTTP header is a marker used by the server to indicate that the MIME types advertised in the Content-Type headers should not be changed and be followed."},"x-dns-prefetch-control":{mdnSlug:"Web/HTTP/Headers/X-DNS-Prefetch-Control",name:"X-DNS-Prefetch-Control",summary:"The X-DNS-Prefetch-Control HTTP response header controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth."},"x-forwarded-for":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-For",name:"X-Forwarded-For",summary:"The X-Forwarded-For (XFF) header is a de-facto standard header for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or a load balancer."},"x-forwarded-host":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-Host",name:"X-Forwarded-Host",summary:"The X-Forwarded-Host (XFH) header is a de-facto standard header for identifying the original host requested by the client in the Host HTTP request header."},"x-forwarded-proto":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-Proto",name:"X-Forwarded-Proto",summary:"The X-Forwarded-Proto (XFP) header is a de-facto standard header for identifying the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer."},"x-frame-options":{mdnSlug:"Web/HTTP/Headers/X-Frame-Options",name:"X-Frame-Options",summary:"The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>."},"x-xss-protection":{mdnSlug:"Web/HTTP/Headers/X-XSS-Protection",name:"X-XSS-Protection",summary:"The HTTP X-XSS-Protection response header is a feature of Internet Explorer, Chrome and Safari that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks."}},a={connect:{mdnSlug:"Web/HTTP/Methods/CONNECT",name:"CONNECT",summary:"The HTTP CONNECT method starts two-way communications with the requested resource."},delete:{mdnSlug:"Web/HTTP/Methods/DELETE",name:"DELETE",summary:"The HTTP DELETE request method deletes the specified resource."},get:{mdnSlug:"Web/HTTP/Methods/GET",name:"GET",summary:"The HTTP GET method requests a representation of the specified resource."},head:{mdnSlug:"Web/HTTP/Methods/HEAD",name:"HEAD",summary:"The HTTP HEAD method requests the headers that would be returned if the HEAD request's URL was instead requested with the HTTP GET method."},options:{mdnSlug:"Web/HTTP/Methods/OPTIONS",name:"OPTIONS",summary:"The HTTP OPTIONS method requests permitted communication options for a given URL or server."},patch:{mdnSlug:"Web/HTTP/Methods/PATCH",name:"PATCH",summary:"The HTTP PATCH request method applies partial modifications to a resource."},post:{mdnSlug:"Web/HTTP/Methods/POST",name:"POST",summary:"The HTTP POST method sends data to the server."},put:{mdnSlug:"Web/HTTP/Methods/PUT",name:"PUT",summary:"The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload."},trace:{mdnSlug:"Web/HTTP/Methods/TRACE",name:"TRACE",summary:"The HTTP TRACE method performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism."}};function i(e,t){const n=e[t];if(n)return{url:"https://developer.mozilla.org/en-US/docs/"+n.mdnSlug,name:n.name,summary:n.summary}}function c(e){return i(s,e.toLowerCase())}function l(e){const t=i(r,e.toString());if(t)return t.message=t.name.split(" ").slice(1).join(" "),t}function d(e){if(e)return o[e.toString()]}function u(e){return i(a,e.toLowerCase())}function p(e){if(!e)return"";const t=r[e.toString()];return t?t.name.slice(4):""}},51:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return p}));var r=n(4);const o=e=>{const t=(e||"").split(";")[0],[n,o]=t.split(/\/(.+)/);if(!o)return n;const s=o.split("+").map(e=>n+"/"+e);return r.find(s,e=>!!a[e])||r.last(s)},s=["text","json","xml","html","css","javascript"],a={"application/json":"json","text/json":"json","application/xml":"xml","text/xml":"xml","application/rss":"xml","application/javascript":"javascript","application/x-javascript":"javascript","application/ecmascript":"javascript","text/javascript":"javascript","text/plain":"text","text/csv":"text","application/x-www-form-urlencoded":"url-encoded","text/markdown":"markdown","text/x-markdown":"markdown","text/x-yaml":"yaml","text/yaml":"yaml","application/yaml":"yaml","image/png":"image","image/gif":"image","image/jpg":"image","image/jpeg":"image","image/svg":"image","image/tiff":"image","image/webp":"image","image/avif":"image","image/x-icon":"image","image/vnd.microsoft.icon":"image","text/css":"css","text/html":"html","application/xhtml":"html","application/octet-stream":"raw"};function i(e){const t=o(e);return a[t]}function c(e){const t=o(e),n=a[t];if(s.includes(n))return n}function l(e){return"raw"===e?"Hex":"json"===e?"JSON":"url-encoded"===e?"URL-Encoded":r.capitalize(e)}function d(e){return r.findKey(a,t=>t===e)}function u(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||43===e||47===e||61===e}function p(t,n,r){let o=new Set([t]);r&&!e.isBuffer(r)&&(r=r.decoded);const s=r&&r.slice(0,1).toString("ascii");return"{"!==s&&"["!==s||o.add("json"),"<"===s&&o.add("xml"),n&&n.startsWith("image/svg")&&o.add("xml"),r&&r.length>0&&r.length%4==0&&r.length<1e5&&r.every(u)&&o.add("base64"),o.add("text"),o.add("raw"),Array.from(o)}}).call(this,n(25).Buffer)},55:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return u}));var r=n(15),o=n(21);const s=e=>r.d(e,()=>r.a),a=r.d(e=>({source:e.source,flags:e.flags}),e=>new RegExp(e.source,e.flags)),i=r.d(e=>void 0!==e?Object(o.b)(e).toString("base64"):void 0,t=>void 0!==t?e.from(t,"base64"):void 0),c=r.d(e=>e?JSON.stringify(e,(e,t)=>void 0===t?"__http_toolkit_undefined_placeholder__":t):void 0,e=>e?Object(o.k)(JSON.parse(e),e=>"__http_toolkit_undefined_placeholder__"===e?void 0:e):void 0);function l(e,t,n){let r,o;if(e.deserializer(t,(e,t)=>{e?o=e:r=t},n,void 0),o)throw o;return r}const d=(e,t)=>r.d(n=>Array.from(n.entries()).map(n=>[e.serializer(n[0]),t.serializer(n[1])]),(n,r,o,s)=>s(null,new Map(n.map(n=>[l(e,n[0],r),l(t,n[1],r)])))),u=e=>!!r.f(e);r.c({"*":!0})}).call(this,n(25).Buffer)},56:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(1),o=n(61);function s(t,n=!0){const r=e.isBuffer(t)?t.byteLength:"string"==typeof t?t.length:t;let o=n?1e3:1024,s=n?["bytes","kB","MB","GB","TB","PB","EB","ZB","YB"]:["bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=0===r?0:Math.floor(Math.log(r)/Math.log(o)),i=1===r?"byte":s[a];return(r/Math.pow(o,a)).toFixed(1).replace(/\.0$/,"")+" "+i}const a=Symbol("encoded-body-test");function i(e){if(!e.body.decoded)return;const t=e.cache,n=t.get(a);if(n)return n.get();{const n=r.observable.box();return t.set(a,n),Object(o.f)(e.body.decoded).then(Object(r.action)(e=>{n.set(e)})).catch(()=>{}),n.get()}}}).call(this,n(25).Buffer)},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return h})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return g})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return b})),n.d(t,"g",(function(){return y})),n.d(t,"f",(function(){return v}));var r=n(4),o=n(12),s=n(15),a=n(165),i=n(55),c=n(19);const{EchoWebSocketHandlerDefinition:l,RejectWebSocketHandlerDefinition:d,ListenWebSocketHandlerDefinition:u}=o.webSocketHandlerDefinitions;class p extends c.r{constructor(){super(...arguments),this.uiType="ws-wildcard"}explain(){return"Any WebSocket"}}class h extends c.r{constructor(){super(...arguments),this.uiType="default-ws-wildcard"}explain(){return"Any other WebSockets"}}class m extends o.matchers.MethodMatcher{explain(){return"started with "+o.Method[this.method]}}class g extends o.webSocketHandlerDefinitions.PassThroughWebSocketHandlerDefinition{constructor(e){super(e.activePassthroughOptions)}}s.b(g,{type:s.k()},e=>new g(e.args.rulesStore));class f extends o.webSocketHandlerDefinitions.PassThroughWebSocketHandlerDefinition{constructor(e,t,n){super(Object.assign(Object.assign({},n.activePassthroughOptions),{forwarding:{targetHost:e,updateHostHeader:t}})),this.uiType="ws-forward-to-host"}}s.b(f,{uiType:Object(i.b)(()=>"ws-forward-to-host"),type:s.k(),forwarding:s.h(s.k())},e=>{const t=e.json;return new f(t.forwarding.targetHost,t.forwarding.updateHostHeader,e.args.rulesStore)});const b=Object.assign(Object.assign({},r.omit(c.h,a.a)),{method:m,"ws-wildcard":p,"default-ws-wildcard":h}),y=[p],v=Object.assign(Object.assign({},o.webSocketHandlerDefinitions.WsHandlerDefinitionLookup),{"ws-passthrough":g,"ws-forward-to-host":f})},574:function(e,t,n){"use strict";function r(){return new Worker(n.p+"app.worker.js")}n.d(t,"a",(function(){return r}))},58:function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"k",(function(){return f})),n.d(t,"j",(function(){return b})),n.d(t,"i",(function(){return y})),n.d(t,"l",(function(){return v})),n.d(t,"b",(function(){return x})),n.d(t,"h",(function(){return w})),n.d(t,"g",(function(){return E}));var r=n(12),o=n(146);const{Serializable:s}=r.PluggableAdmin.Serialization;class a extends s{constructor(){super(...arguments),this.type="rtc-wildcard"}explain(){return"WebRTC connections"}}const{HasDataChannelMatcherDefinition:i,HasVideoTrackMatcherDefinition:c,HasAudioTrackMatcherDefinition:l,HasMediaTrackMatcherDefinition:d}=o.MatcherDefinitions,u=Object.assign(Object.assign({},o.MatcherDefinitions.MatcherDefinitionLookup),{"rtc-wildcard":a}),p=[a],{DynamicProxyStepDefinition:h,EchoStepDefinition:m,CloseStepDefinition:g,WaitForMediaStepDefinition:f,WaitForDurationStepDefinition:b,WaitForChannelStepDefinition:y,WaitForMessageStepDefinition:v,CreateChannelStepDefinition:x,SendStepDefinition:w}=o.HandlerStepDefinitions,E=Object.assign({},o.HandlerStepDefinitions.StepDefinitionLookup)},60:function(e,t,n){"use strict";function r(e){return new Promise(t=>setTimeout(t,e))}function o(e){try{const t=e();return Promise.resolve(t)}catch(e){return Promise.reject(e)}}function s(){let e=void 0,t=void 0,n=new Promise((n,r)=>{e=n,t=r});return{resolve:e,reject:t,promise:n}}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}))},61:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return y}));var r=n(573),o=n.n(r),s=n(88),a=n(574),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const c=new a.a;let l=0;const d=new s.EventEmitter;function u(e,t=[]){const n=l++;return new Promise((r,s)=>{c.postMessage(Object.assign({id:n},e),t),d.once(n.toString(),e=>{e.error?s(o()(e.error)):r(e)})})}function p(t,n){return i(this,void 0,void 0,(function*(){if(0===n.length||1===n.length&&"identity"===n[0]||0===t.length)return{encoded:t,decoded:t};try{const r=yield u({type:"decode",buffer:t.buffer,encodings:n},[t.buffer]);return{encoded:e.from(r.inputBuffer),decoded:e.from(r.decodedBuffer)}}catch(t){throw t.inputBuffer&&(t.inputBuffer=e.from(t.inputBuffer)),t}}))}function h(t,n){return i(this,void 0,void 0,(function*(){if(0===n.length||1===n.length&&"identity"===n[0])return t;const r=yield u({type:"encode",buffer:t.buffer,encodings:n});return e.from(r.encodedBuffer)}))}function m(e){return i(this,void 0,void 0,(function*(){return(yield u({type:"test-encodings",decodedBuffer:e})).encodingSizes}))}function g(e,t){return i(this,void 0,void 0,(function*(){return(yield u({type:"build-api",spec:e,baseUrlOverrides:t})).api}))}function f(e,t){return i(this,void 0,void 0,(function*(){return(yield u({type:"validate-pkcs12",buffer:e,passphrase:t})).result}))}function b(e){return i(this,void 0,void 0,(function*(){return(yield u({type:"parse-cert",buffer:e})).result}))}function y(e,t){return i(this,void 0,void 0,(function*(){return(yield u({type:"format",buffer:e,format:t})).formatted}))}c.addEventListener("message",e=>{d.emit(e.data.id.toString(),e.data)})}).call(this,n(25).Buffer)},650:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(24),o=n(84),s=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function a(e,t){return s(this,void 0,void 0,(function*(){try{const n=yield t.request.body.decodedPromise;if(!(null==n?void 0:n.length))throw new Error("No JSON-RPC request body");let r,o;try{if(r=JSON.parse(null==n?void 0:n.toString()),"2.0"!==r.jsonrpc)throw new Error("JSON-RPC request body had bad 'jsonrpc' field: "+r.jsonrpc);o=r.method}catch(e){throw console.warn(e),new Error("Could not parse JSON-RPC request body")}const s=e.requestMatchers[o];if(!s)throw new Error("Unrecognized JSON-RPC method name: "+o);return new i(e,t,{methodSpec:s,parsedBody:r})}catch(n){return new i(e,t,n)}}))}class i{constructor(e,t,n){var o,s;this._rpcMethod=n,this.isBuiltInApi=!0===e.spec.info["x-httptoolkit-builtin-api"],this.service=new c(e),Object(r.c)(n)?(this.operation={name:"Unrecognized request to JSON-RPC API",warnings:[null!==(o=n.message)&&void 0!==o?o:n.toString()]},this.request={parameters:[]}):(this.operation=new l(n,null===(s=e.spec.externalDocs)||void 0===s?void 0:s["x-method-base-url"]),this.request=new u(n,t))}updateWithResponse(e){"aborted"===e||void 0===e||Object(r.c)(this._rpcMethod)||(this.response=new p(this._rpcMethod))}matchedOperation(){return this._rpcMethod&&!Object(r.c)(this._rpcMethod)}}class c{constructor(e){var t,n,r;this.name=e.spec.info.title,this.shortName=null!==(t=e.spec.info["x-httptoolkit-short-name"])&&void 0!==t?t:this.name.split(" ")[0],this.logoUrl=null===(n=e.spec.info["x-logo"])||void 0===n?void 0:n.url,this.description=Object(o.a)(e.spec.info.description),this.docsUrl=null===(r=e.spec.externalDocs)||void 0===r?void 0:r.url}}class l{constructor(e,t){var n,r;this.warnings=[];const{methodSpec:s}=e;this.name=s.name,this.description=Object(o.a)([s.summary,s.description].filter(e=>!!e).join("\n\n")),this.docsUrl=null!==(r=null===(n=s.externalDocs)||void 0===n?void 0:n.url)&&void 0!==r?r:t?t+s.name.toLowerCase():void 0,s.deprecated&&this.warnings.push(`The '${this.name}' method is deprecated.`)}}const d=e=>e?e.charAt(0).toUpperCase()+e.slice(1):void 0;class u{constructor(e,t){const{methodSpec:n,parsedBody:r}=e;this.parameters=n.params.map((e,t)=>{var n,s;const a=e.schema;return{name:e.name,description:Object(o.a)([e.summary,e.description,d(null==a?void 0:a.title),...(null===(n=null==a?void 0:a.oneOf)||void 0===n?void 0:n.length)?["One of:",a.oneOf.map(e=>`* ${d(e.title)}: ${e.description||e.type||"unknown"}`).join("\n")]:[]].filter(e=>!!e).join("\n\n")),in:"body",required:!!e.required,deprecated:!!e.deprecated,type:null==a?void 0:a.type,value:r.params[t],defaultValue:null==a?void 0:a.default,enum:(null==a?void 0:a.enum)||(null===(s=null==a?void 0:a.items)||void 0===s?void 0:s.enum),warnings:[...e.deprecated?[`The '${e.name}' parameter is deprecated.`]:[],...e.required&&void 0===r.params[t]&&a&&void 0===a.default?[`The '${e.name}' parameter is required.`]:[]]}})}}class p{constructor(e){const t=e.methodSpec.result;this.description=Object(o.a)(t.description),this.bodySchema={type:"object",properties:{id:{type:"number"},jsonrpc:{type:"string",enum:["2.0"]},result:t.schema,error:{type:"object",properties:{code:{type:"number"},message:{type:"string"}}}},required:["id","jsonrpc"]}}}},653:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return j}));var r=n(4),o=n(12),s=n(1),a=n(79),i=n(15),c=n(345),l=n(117),d=n(36),u=n(47),p=n(26),h=n(118),m=n(9),g=n(29),f=n(18),b=n(68),y=n(129),v=n(255),x=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},w=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const E=i.c({passphrase:i.k(),filename:i.k(),pfx:i.d(c.encode,c.decode)}),C=(e,t)=>Object(y.c)(Object(y.d)(e),{rulesStore:t}),T=e=>"docker-tunnel-proxy-"+e;class j{constructor(e,t,n){this.accountStore=e,this.proxyStore=t,this.jumpToExchange=n,this.initialized=Object(d.c)(()=>w(this,void 0,void 0,(function*(){yield Promise.all([this.accountStore.initialized,this.proxyStore.initialized]),yield this.loadSettings();const{setRequestRules:e,setWebSocketRules:t,setRTCRules:n,serverVersion:o}=this.proxyStore;Object(s.reaction)(()=>this.activePassthroughOptions,()=>{this.rules=C(this.rules,this),this.draftRules=C(this.draftRules,this)}),Object(s.reaction)(()=>this.upstreamProxyType,e=>{"direct"!==e&&"system"!==e||(this.upstreamProxyHost=void 0)}),yield new Promise(a=>{Object(s.reaction)(()=>r.cloneDeep(Object(f.h)(this.rules).filter(e=>e.activated&&e.matchers.length)),r=>w(this,void 0,void 0,(function*(){try{yield Promise.all([e(...r.filter(g.n)),...l.satisfies(o,m.B)?[t(...r.filter(g.t))]:[],...l.satisfies(o,m.u)?[n(...r.filter(g.r).map(({matchers:e,steps:t})=>({matchers:e.slice(1),steps:t})))]:[]]),a()}catch(e){console.log("Failed to activate stored rules",e,JSON.stringify(r)),Object(p.c)("Failed to activate configured ruleset"),alert("Configured rules could not be activated, so were reset to default."),this.resetRulesToDefault()}})),{fireImmediately:!0})}),console.log("Rules store initialized")}))),this.upstreamProxyType="system",this.upstreamProxyHost=void 0,this.upstreamNoProxyHosts=[],this.whitelistedCertificateHosts=["localhost"],this.clientCertificateHostMap={},this.additionalCaCertificates=[],this.triggerRequestBreakpoint=e=>this.triggerBreakpoint(e.id,t=>t.triggerRequestBreakpoint(e)),this.triggerResponseBreakpoint=e=>this.triggerBreakpoint(e.id,t=>t.triggerResponseBreakpoint(e)),this.triggerBreakpoint=Object(s.flow)((function*(e,t){const n=yield this.jumpToExchange(e);return yield t(n)}))}loadSettings(){var e;return w(this,void 0,void 0,(function*(){const{accountStore:t}=this;yield Object(u.a)({key:"rules-store",store:this,dataTransform:e=>r.omit(e,"rules")});try{const t=JSON.parse(null!==(e=localStorage.getItem("rules-store"))&&void 0!==e?e:"{}");Object(s.runInAction)(()=>{"draftWhitelistedCertificateHosts"in t&&(this.whitelistedCertificateHosts=t.draftWhitelistedCertificateHosts),"draftClientCertificateHostMap"in t&&(this.clientCertificateHostMap=t.draftClientCertificateHostMap)})}catch(e){Object(p.c)(e)}if(t.mightBePaidUser)if(yield Object(u.a)({key:"rules-store",store:this,dataTransform:e=>({rules:Object(v.a)(e.rules)}),customArgs:{rulesStore:this}}).catch(e=>{var t,n;console.log("Failed to load last-run rules",e,null===(n=JSON.parse(null!==(t=localStorage.getItem("rules-store"))&&void 0!==t?t:"{}"))||void 0===n?void 0:n.rules),Object(p.c)(e),alert("Could not load rules from last run.\n\n"+e)}),this.rules){this.resetRuleDrafts();Object(b.a)(this,this.proxyStore).forEach(e=>this.ensureRuleExists(e))}else this.resetRulesToDefault();else this.resetRulesToDefault();this.ensureRuleDoesNotExist("default-forwarding-rule"),Object(h.b)("httpToolkitForwardingDefault").then(Object(s.action)(e=>{const[t,n]=e.split("|"),r=Object(b.d)(t,n,this);this.ensureRuleExists(r)})),"socks"===this.upstreamProxyType&&Object(s.runInAction)(()=>{this.upstreamProxyType="socks5h"}),Object(s.observe)(t,"accountDataLastUpdated",()=>{t.isPaidUser||(this.whitelistedCertificateHosts=["localhost"],this.clientCertificateHostMap={},this.upstreamProxyType="system",this.upstreamNoProxyHosts=[])})}))}get activePassthroughOptions(){const t={ignoreHostHttpsErrors:this.whitelistedCertificateHosts,trustAdditionalCAs:this.additionalCaCertificates.map(e=>({cert:e.rawPEM})),clientCertificateHostMap:r.mapValues(this.clientCertificateHostMap,t=>({pfx:e.from(t.pfx),passphrase:t.passphrase})),proxyConfig:this.proxyConfig,lookupOptions:this.proxyStore.dnsServers.length?{servers:this.proxyStore.dnsServers}:void 0,simulateConnectionErrors:!0};return r.cloneDeep(t)}get effectiveSystemProxyConfig(){const{systemProxyConfig:e}=this.proxyStore;if(!e)return;const{proxyUrl:t}=e;try{const n=new URL(t),{hostname:r}=n;return"localhost"===r||r.startsWith("127.0.0")?"ignored":e}catch(e){return console.log("Could not parse proxy",t),Object(p.c)(e),"unparseable"}}get userProxyConfig(){if("direct"!==this.upstreamProxyType){if("system"===this.upstreamProxyType){const e=this.effectiveSystemProxyConfig;return!e||r.isString(e)?void 0:e}return{proxyUrl:`${this.upstreamProxyType}://${this.upstreamProxyHost}`,noProxy:this.upstreamNoProxyHosts}}}get proxyConfig(){const{userProxyConfig:e}=this,{httpProxyPort:t}=this.proxyStore;if(this.proxyStore.ruleParameterKeys.includes(T(t))){const n={[o.MOCKTTP_PARAM_REF]:T(t)};return e?[n,e]:n}return e}saveRules(){this.rules=this.draftRules,this.resetRuleDrafts()}resetRuleDrafts(){this.draftRules=r.cloneDeep(this.rules)}resetRulesToDefault(){this.rules=Object(b.c)(this,this.proxyStore),this.resetRuleDrafts()}get areSomeRulesUnsaved(){return!r.isEqualWith(this.draftRules,this.rules,f.b)}get areSomeRulesNonDefault(){const e=Object(b.c)(this,this.proxyStore);return!r.isEqualWith(this.draftRules,e,f.b)}resetRule(e){const{draftRules:t,rules:n}=this,o=Object(f.i)(t,e);if(Object(f.k)(o))throw new Error("Can't reset single rule group");const a=o.id,i=Object(f.g)(n,{id:a});if(!i)throw new Error("Can't reset a new rule");const c=Object(f.i)(n,i),l=Object(f.j)(n,i),d=Object(f.j)(t,e);let u=Object(f.f)(t,{id:l.id});if(!u){let e=[l];for(;e.length;){const o=i.slice(0,-e.length),a=Object(f.j)(n,o),c=Object(f.f)(t,{id:a.id});c?(u=e.reduce(({draftParent:e,activeParent:t},n)=>{const o=Object(s.observable)(r.clone(Object.assign(Object.assign({},n),{items:[]}))),a=r.intersectionBy(e.items,t.items,"id"),i=r.intersectionBy(t.items,e.items.concat(n),"id"),c=r.findIndex(i,{id:n.id});if(c>0){const t=a[c-1],n=r.findIndex(e.items,{id:t.id})+1;e.items.splice(n,0,o)}else e.items.unshift(o);return{draftParent:o,activeParent:n}},{draftParent:c,activeParent:a}).draftParent,e=[]):e.unshift(a)}}const p=r.cloneDeep(c);d.id===u.id?Object(f.n)(t,e,p):(r.remove(d.items,{id:p.id}),u.items.splice(0,0,p),0!==d.items.length||Object(f.l)(d)||this.deleteDraftItem(Object(f.g)(this.draftRules,{id:d.id})));const h=u.items,m=l.items,g=r.intersectionBy(h,m,"id"),b=r.intersectionBy(m,h,"id"),y=r.findIndex(b,{id:a});if(r.findIndex(g,{id:a})!==y)if(r.remove(h,{id:a}),r.remove(g,{id:a}),y>0){const e=g[y-1],t=r.findIndex(h,{id:e.id})+1;h.splice(t,0,p)}else h.unshift(p)}saveItem(e){const{draftRules:t,rules:n}=this,o=Object(f.i)(t,e),a=Object(f.j)(t,e);let i=Object(f.f)(n,{id:a.id});i||(i=this.saveItem(e.slice(0,-1)));const c=o.id,l=Object(f.g)(n,{id:c}),d=Object(s.observable)(r.cloneDeep(r.omit(o,"items")));if(Object(f.k)(o))if(l){const e=Object(f.i)(n,l);d.items=r.cloneDeep(e.items)}else d.items=[];if(l){const e=Object(f.j)(n,l);if(e===i)Object(f.n)(n,l,d);else{const t=r.last(l);if(e.items.splice(t,1),i.items.push(d),0===e.items.length&&!Object(f.l)(e)){const t=Object(f.g)(n,{id:e.id});Object(f.e)(n,t)}}}else i.items.push(d);const u=r.differenceBy(i.items,a.items,"id"),p=r.intersectionBy(i.items,a.items,"id"),h=r.intersectionBy(a.items,i.items,"id");if(r.findIndex(h,{id:c})===r.findIndex(p,{id:c}))return d;const m=r.sortBy(p,e=>r.findIndex(a.items,{id:e.id}));return u.forEach(e=>{const t=Math.min(i.items.indexOf(e),i.items.length);m.splice(t,0,e)}),i.items=m,d}addDraftItem(e,t){if(!t)return void this.draftRules.items.unshift(e);const n=Object(f.j)(this.draftRules,t),o=r.last(t);n.items.splice(o,0,e)}deleteDraftItem(e){Object(f.e)(this.draftRules,e)}moveDraftRule(e,t){const n=Object(f.j)(this.draftRules,e),o=Object(f.j)(this.draftRules,t),s=r.last(e),a=r.last(t),[i]=n.items.splice(s,1);o.items.splice(a,0,i),0!==n.items.length||Object(f.l)(n)||this.deleteDraftItem(Object(f.g)(this.draftRules,{id:n.id}))}combineDraftRulesAsGroup(e,t){const n=Object(f.i)(this.draftRules,e),o=Object(f.j)(this.draftRules,t),s=r.last(t),i=o.items[s];o.items[s]={id:a(),title:"New group",items:[i,n]},this.deleteDraftItem(e)}updateGroupTitle(e,t){const n=Object(f.f)(this.draftRules,{id:e}),r=Object(f.f)(this.rules,{id:e});n.title=t,r&&(r.title=t)}ensureRuleExists(e){const t=Object(f.g)(this.rules,{id:e.id}),n=t?Object(f.i)(this.rules,t):void 0,r=Object(f.g)(this.draftRules,{id:e.id}),o=r?Object(f.i)(this.draftRules,r):void 0;if(Object(f.b)(e,n)&&Object(f.b)(e,o))return;if(r)return Object(f.n)(this.draftRules,r,e),void this.saveItem(r);let s=Object(f.g)(this.draftRules,{id:"default-group"});if(s){Object(f.i)(this.draftRules,s).items.unshift(e)}else this.draftRules.items.push(Object(b.b)([e])),s=[this.draftRules.items.length-1];this.saveItem(s.concat(0))}ensureRuleDoesNotExist(e){const t=Object(f.g)(this.rules,{id:e});t&&Object(f.e)(this.rules,t);const n=Object(f.g)(this.draftRules,{id:e});n&&Object(f.e)(this.draftRules,n)}loadSavedRules(e){this.rules=Object(y.c)(e,{rulesStore:this}),this.resetRuleDrafts()}}x([s.computed.struct],j.prototype,"activePassthroughOptions",null),x([u.b,s.observable],j.prototype,"upstreamProxyType",void 0),x([u.b,s.observable],j.prototype,"upstreamProxyHost",void 0),x([Object(u.b)("list"),s.observable],j.prototype,"upstreamNoProxyHosts",void 0),x([s.computed],j.prototype,"effectiveSystemProxyConfig",null),x([s.computed.struct],j.prototype,"userProxyConfig",null),x([s.computed.struct],j.prototype,"proxyConfig",null),x([Object(u.b)("list"),s.observable],j.prototype,"whitelistedCertificateHosts",void 0),x([Object(u.b)("map",E),s.observable],j.prototype,"clientCertificateHostMap",void 0),x([Object(u.b)("list"),s.observable],j.prototype,"additionalCaCertificates",void 0),x([Object(u.b)("object",y.a),s.observable],j.prototype,"rules",void 0),x([s.observable],j.prototype,"draftRules",void 0),x([s.action.bound],j.prototype,"saveRules",null),x([s.action.bound],j.prototype,"resetRuleDrafts",null),x([s.action.bound],j.prototype,"resetRulesToDefault",null),x([s.computed],j.prototype,"areSomeRulesUnsaved",null),x([s.computed],j.prototype,"areSomeRulesNonDefault",null),x([s.action.bound],j.prototype,"resetRule",null),x([s.action.bound],j.prototype,"saveItem",null),x([s.action.bound],j.prototype,"addDraftItem",null),x([s.action.bound],j.prototype,"deleteDraftItem",null),x([s.action.bound],j.prototype,"moveDraftRule",null),x([s.action.bound],j.prototype,"combineDraftRulesAsGroup",null),x([s.action.bound],j.prototype,"updateGroupTitle",null),x([s.action.bound],j.prototype,"ensureRuleExists",null),x([s.action.bound],j.prototype,"ensureRuleDoesNotExist",null),x([s.action.bound],j.prototype,"loadSavedRules",null)}).call(this,n(25).Buffer)},656:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r=n(4),o=n(1),s=n(79),a=n(12),i=n(26),c=n(36),l=n(47),d=n(24),u=n(16),p=n(66),h=n(261),m=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},g=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class f{constructor(e,t){this.eventStore=e,this.rulesStore=t,this.initialized=Object(c.c)(()=>g(this,void 0,void 0,(function*(){yield Promise.all([this.eventStore.initialized,this.rulesStore.initialized]),yield Object(l.a)({key:"send-store",store:this}),Object(o.autorun)(()=>{0===this.requestInputs.length&&this.addRequestInput()}),console.log("Send store initialized")}))),this.requestInputs=[],this.sendRequest=e=>g(this,void 0,void 0,(function*(){var t,n;const r=s(),a=this.rulesStore.activePassthroughOptions,i=new URL(e.url),c=y(i),l=`${i.hostname}:${c}`,d=(null===(t=a.clientCertificateHostMap)||void 0===t?void 0:t[l])||(null===(n=a.clientCertificateHostMap)||void 0===n?void 0:n[i.hostname])||void 0,h={ignoreHostHttpsErrors:a.ignoreHostHttpsErrors,trustAdditionalCAs:this.rulesStore.additionalCaCertificates.map(e=>({cert:e.rawPEM})),clientCertificate:d,proxyConfig:v(this.rulesStore.proxyConfig),lookupOptions:a.lookupOptions},m=yield p.h({url:e.url,method:e.method,headers:e.headers,rawBody:yield e.rawBody.encoded},h),g=this.eventStore.recordSentRequest({id:r,matchedRuleId:!1,method:e.method,url:e.url,protocol:i.protocol.slice(0,-1),path:i.pathname,hostname:i.hostname,headers:Object(u.i)(e.headers),rawHeaders:e.headers,body:{buffer:yield e.rawBody.encoded},timingEvents:{},tags:["httptoolkit:manually-sent-request"]});b(m,g).catch(Object(o.action)(e=>{g.markAborted({id:g.id,error:e,timingEvents:Object.assign(Object.assign({},g.timingEvents),{abortedTimestamp:performance.now()}),tags:e.code?["passthrough-error:"+e.code]:[]})})),Object(o.runInAction)(()=>{this.sentExchange=g})}))}addRequestInput(){const e=new h.b;return this.requestInputs.push(e),e}}m([Object(l.b)("list",h.c),o.observable],f.prototype,"requestInputs",void 0),m([o.action.bound],f.prototype,"addRequestInput",null),m([o.observable],f.prototype,"sentExchange",void 0);const b=Object(o.flow)((function*(t,n){var r;const o=t.getReader(),s=Object.assign({},n.timingEvents);let a,c=[];for(;;){const{done:t,value:l}=yield o.read();if(t)return;const p=l.type;switch(p){case"request-start":s.startTime=Date.now(),s.startTimestamp=l.timestamp,s.bodyReceivedTimestamp=l.timestamp;break;case"response-head":a=l,s.headersSentTimestamp=l.timestamp;break;case"response-body-part":c.push(l.rawBody);break;case"response-end":if(!a)throw new Error("Received response-end before response-head!");s.responseSentTimestamp=l.timestamp,n.setResponse({id:n.id,statusCode:a.statusCode,statusMessage:null!==(r=a.statusMessage)&&void 0!==r?r:"",headers:Object(u.i)(a.headers),rawHeaders:a.headers,body:{buffer:e.concat(c)},tags:[],timingEvents:s});break;case"error":throw l.error.message?new Error(l.error.message+(l.error.code?` (${l.error.code})`:"")):(Object(i.c)("Unknown response error for sent request: "+JSON.stringify(l.error)),new Error("Unknown response error"));default:throw new d.a(p)}}})),y=e=>e.port?parseInt(e.port,10):"https:"===e.protocol||"wss:"===e.protocol?443:80;function v(e){if(e){if(r.isArray(e))return e.map(e=>v(e));if(a.MOCKTTP_PARAM_REF in e){const t=e[a.MOCKTTP_PARAM_REF];return{[h.a]:t}}return e}}}).call(this,n(25).Buffer)},657:function(e){e.exports=JSON.parse('{"name":"httptoolkit-ui","private":true,"description":"Beautiful, cross-platform & open-source HTTP(S) debugging proxy, analyzer & client.","main":"dist/main.js","files":["dist","src"],"scripts":{"prebuild":"rimraf dist","build":"run-script-os","build:default":"env-cmd -f ./automation/ts-node.env.js node --max_old_space_size=4096 node_modules/.bin/webpack --config ./automation/webpack.prod.ts","build:windows":"env-cmd -f ./automation/ts-node.env.js node --max_old_space_size=4096 node_modules/webpack/bin/webpack.js --config ./automation/webpack.prod.ts","bundle-stats":"npm-run-all bundle-stats:build bundle-stats:show","bundle-stats:build":"run-script-os","bundle-stats:build:default":"npm run build:default -- --no-devtool --profile --json | tail -n +14 > stats.json","bundle-stats:build:windows":"npm run build:windows -- --no-devtool --profile --json | powershell -Command \\"$input | Select -Skip 5\\" > stats.json","bundle-stats:show":"webpack-bundle-analyzer ./stats.json","server:setup":"ts-node -P ./automation/tsconfig.json ./automation/setup-server.ts","server:start":"cross-env OCLIF_TS_NODE=0 node .httptoolkit-server/httptoolkit-server/bin/run start","start":"npm-run-all --parallel --print-label start:server start:web","start:server":"npm-run-all server:setup server:start","start:web":"env-cmd -f ./automation/ts-node.env.js webpack-dev-server --config ./automation/webpack.dev.ts","start:prod":"npm-run-all build start:prod:webserver","start:prod:webserver":"static-server ./dist -o","test":"npm-run-all test:unit test:integration","test:unit":"env-cmd -f ./automation/ts-node.env.js karma start ./test/unit/karma.conf.js","test:unit:dev":"npm run test:unit -- --single-run=false --auto-watch","test:unit:debug":"npm run test:unit -- --single-run=false --browsers Chrome","test:integration":"npm-run-all server:setup build test:integration:run","test:integration:run":"env-cmd -f ./test/integration/ts-node.env mocha --exit -r ts-node/register \'test/integration/**/*.spec.ts\'"},"author":"Tim Perry <tim@httptoolkit.com>","license":"AGPL-3.0-or-later","runtimeDependencies":{"httptoolkit-server":">=1.0.0","httptoolkit-desktop":">=1.1.0"},"dependencies":{"@ethersproject/abi":"^5.7.0","@fortawesome/fontawesome-svg-core":"^1.2.27","@fortawesome/free-brands-svg-icons":"^5.12.1","@fortawesome/free-regular-svg-icons":"^5.12.1","@fortawesome/free-solid-svg-icons":"^5.12.1","@fortawesome/react-fontawesome":"^0.1.8","@httptoolkit/accounts":"^1.0.1","@httptoolkit/auth0-lock":"^11.26.3","@httptoolkit/httpsnippet":"^2.1.1","@open-rpc/meta-schema":"^1.14.2","@reach/router":"^1.2.1","@sentry/browser":"^4.2.4","@sentry/webpack-plugin":"^1.14.0","@types/auth0-js":"^8.11.8","@types/auth0-lock":"^11.4.10","@types/base64-arraybuffer":"^0.1.0","@types/dedent":"^0.7.0","@types/dompurify":"0.0.32","@types/har-format":"^1.2.5","@types/inline-style-prefixer":"^3.0.1","@types/js-beautify":"^1.8.0","@types/json-schema":"^7.0.3","@types/jsonwebtoken":"^8.3.0","@types/lodash":"^4.14.146","@types/node":"^15.3.0","@types/node-forge":"^1.3.2","@types/qrcode.react":"^1.0.0","@types/reach__router":"^1.2.4","@types/react":"^16.14.29","@types/react-autosuggest":"^10.0.1","@types/react-dom":"^16.8.25","@types/react-fontawesome":"^1.6.4","@types/react-window":"^1.8.1","@types/remarkable":"^1.7.3","@types/semver":"^7.3.1","@types/serialize-error":"^2.1.0","@types/set-cookie-parser":"0.0.3","@types/styled-components":"^5.1.4","@types/traverse":"^0.6.32","@types/ua-parser-js":"^0.7.33","@types/uuid":"^3.4.4","@types/yaml":"^1.2.0","@vx/axis":"^0.0.199","@vx/curve":"^0.0.199","@vx/group":"^0.0.199","@vx/responsive":"^0.0.199","@vx/shape":"^0.0.199","ajv":"^8.12.0","ajv-formats":"^2.1.1","auth0-js":"^9.13.2","base64-arraybuffer":"^0.2.0","d3-scale":"^4.0.2","date-fns":"^1.30.1","dedent":"^0.7.0","deserialize-error":"0.0.3","dompurify":"^2.1.1","graphql":"^14.7.0","har-validator":"^5.1.3","http-encoding":"^1.3.0","js-beautify":"^1.8.8","jsonwebtoken":"^8.4.0","localforage":"^1.7.3","lodash":"^4.17.21","mobx":"^5.15.0","mobx-persist":"^0.4.1","mobx-react":"^5.4.0","mobx-react-lite":"^2.2.2","mobx-shallow-undo":"^1.0.0","mobx-utils":"^5.1.0","mockrtc":"^0.3.1","mockttp":"^3.5.0","monaco-editor":"^0.27.0","node-forge":"^1.3.0","openapi-directory":"^1.3.0","openapi3-ts":"^1.3.0","polished":"^3.2.0","posthog-js":"^1.57.2","qrcode.react":"^1.0.0","randexp":"^0.5.3","react":"^16.14.0","react-autosuggest":"^10.0.4","react-beautiful-dnd":"^12.2.0","react-contexify":"^6.0.0","react-dom":"^16.14.0","react-hotkeys-hook":"^2.1.3","react-monaco-editor":"^0.45.0","react-reverse-portal":"^2.1.1","react-split-pane":"^0.1.84","react-virtualized-auto-sizer":"^1.0.2","react-window":"^1.8.5","remarkable":"^1.7.4","semver":"^7.5.2","serialize-error":"^3.0.0","serializr":"^1.5.4","set-cookie-parser":"^2.3.5","styled-components":"^5.0.0","styled-reset":"^1.1.2","swagger2openapi":"^5.3.2","traverse":"^0.6.6","ts-node":"^8.6.2","typed-error":"^3.2.0","typesafe-get":"^2.1.1","typescript":"^5.1.6","ua-parser-js":"^0.7.33","uuid":"^3.3.2","xml-beautifier":"^0.4.0","yaml":"^1.7.2"},"devDependencies":{"@types/chai":"^4.1.7","@types/chai-as-promised":"^7.1.0","@types/chai-enzyme":"^0.6.6","@types/copy-webpack-plugin":"^4.4.3","@types/enzyme":"^3.9.0","@types/enzyme-adapter-react-16":"^1.0.5","@types/html-webpack-plugin":"3.2.0","@types/mocha":"^7.0.1","@types/node-fetch":"^2.1.4","@types/puppeteer":"^1.11.1","@types/sinon":"^9.0.8","@types/ssri":"^7.1.0","@types/targz":"^1.0.1","@types/tmp":"^0.1.0","@types/webpack":"^4.4.17","@types/webpack-dev-server":"^3.1.1","@types/webpack-env":"^1.13.6","@types/webpack-merge":"^4.1.3","arraybuffer-loader":"^1.0.8","cache-loader":"^4.1.0","chai":"^4.2.0","chai-as-promised":"^7.1.1","chai-deep-match":"^1.2.1","chai-enzyme":"^1.0.0-beta.1","copy-webpack-plugin":"^5.0.0","cross-env":"^7.0.3","css-loader":"^1.0.0","env-cmd":"^10.1.0","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.10.0","file-loader":"^2.0.0","fork-ts-checker-notifier-webpack-plugin":"^5.0.0","fork-ts-checker-webpack-plugin":"^6.5.3","google-fonts-plugin":"^5.0.2","html-webpack-plugin":"^3.2.0","json-loader":"^0.5.7","karma":"^3.1.1","karma-chai":"^0.1.0","karma-chrome-launcher":"^3.1.0","karma-mocha":"^2.0.1","karma-mocha-reporter":"^2.2.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","mocha":"^10.2.0","monaco-editor-webpack-plugin":"^4.1.2","node-fetch":"^2.6.7","npm-run-all":"^4.1.5","puppeteer":"^1.18.1","raw-loader":"^0.5.1","rimraf":"^4.3.1","run-script-os":"^1.1.6","service-worker-loader":"^4.0.0","sinon":"^9.2.1","source-map-loader":"^0.2.4","ssri":"^8.0.1","static-server":"^2.2.1","style-loader":"^0.21.0","targz":"^1.0.1","thread-loader":"^3.0.4","tmp":"0.0.33","ts-loader":"^8.3.0","typescript-styled-plugin":"^0.15.0","umd-compat-loader":"^2.1.1","webpack":"^4.44.2","webpack-bundle-analyzer":"^4.3.0","webpack-cli":"^3.1.2","webpack-dev-server":"^3.9.0","webpack-merge":"^4.1.4","workbox-webpack-plugin":"^7.0.0","worker-loader":"^3.0.8"}}')},658:function(e,t,n){e.exports=n.p+"339233e471b772666625b377b42622f3.svg"},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"j",(function(){return f})),n.d(t,"g",(function(){return y})),n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return x})),n.d(t,"e",(function(){return w})),n.d(t,"d",(function(){return E})),n.d(t,"a",(function(){return C})),n.d(t,"h",(function(){return T})),n.d(t,"i",(function(){return j}));var r=n(108),o=n(21),s=n(60),a=n(9),i=n(101),c=n(4),l=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};class d{constructor(e){this.authToken=e}graphql(e,t,n){return l(this,void 0,void 0,(function*(){const r=yield fetch("http://127.0.0.1:45457",{method:"POST",headers:Object.assign(Object.assign({},this.authToken?{Authorization:"Bearer "+this.authToken}:{}),{"content-type":"application/json"}),body:JSON.stringify({operationName:e,query:t,variables:n})}).catch(t=>{var n;throw new i.a(`fetch failed with '${null!==(n=t.message)&&void 0!==n?n:t}'`,e)});if(!r.ok)throw console.error(r),new i.a(`unexpected status ${r.status} ${r.statusText}`,e,r.status);const{data:o,errors:s}=yield r.json();if(s&&s.length){console.error(s);const t=s.length>1?`s (${s.length})`:"";throw new i.a(`GraphQL error${t}: ${s.map(e=>`${e.message} at ${e.path.join(".")}`).join(", ")}`,e)}return o}))}getServerVersion(){return l(this,void 0,void 0,(function*(){return(yield this.graphql("getVersion","\n            query getVersion {\n                version\n            }\n        ",{})).version}))}getConfig(e){return l(this,void 0,void 0,(function*(){const t=yield this.graphql("getConfig",`\n            ${Object(a.F)(yield a.E,a.i)?"query getConfig($proxyPort: Int!) {":"query getConfig {"}\n                config {\n                    certificatePath\n                    ${Object(a.F)(yield a.E,a.g)?"\n                        certificateContent\n                        certificateFingerprint\n                    ":""}\n                }\n\n                ${Object(a.F)(yield a.E,a.g)?"networkInterfaces":""}\n\n                ${Object(a.F)(yield a.E,a.s)?"systemProxy {\n                    proxyUrl\n                    noProxy\n                }":""}\n\n                ${Object(a.F)(yield a.E,a.i)?"\n                    dnsServers(proxyPort: $proxyPort)\n                    ruleParameterKeys\n                ":""}\n            }\n        `,{proxyPort:e});return Object.assign(Object.assign({},t.config),{networkInterfaces:t.networkInterfaces||{},systemProxy:t.systemProxy,dnsServers:t.dnsServers||[],ruleParameterKeys:t.ruleParameterKeys||[]})}))}getNetworkInterfaces(){return l(this,void 0,void 0,(function*(){if(!Object(a.F)(yield a.E,a.g))return{};return(yield this.graphql("getNetworkInterfaces","\n            query getNetworkInterfaces {\n                networkInterfaces\n            }\n        ",{})).networkInterfaces}))}getInterceptors(e){return l(this,void 0,void 0,(function*(){return(yield this.graphql("getInterceptors",`\n            query getInterceptors($proxyPort: Int!) {\n                interceptors {\n                    id\n                    version\n                    isActive(proxyPort: $proxyPort)\n                    isActivable\n\n                    ${Object(a.F)(yield a.E,a.m)?"metadata":""}\n                }\n            }\n        `,{proxyPort:e})).interceptors}))}getDetailedInterceptorMetadata(e){return l(this,void 0,void 0,(function*(){if(!Object(a.F)(yield a.E,a.h))return;return(yield this.graphql("getDetailedInterceptorMetadata","\n            query getDetailedInterceptorMetadata($id: ID!) {\n                interceptor(id: $id) {\n                    metadata(type: DETAILED)\n                }\n            }\n        ",{id:e})).interceptor.metadata}))}activateInterceptor(e,t,n){return l(this,void 0,void 0,(function*(){const r=(yield this.graphql("Activate","\n            mutation Activate($id: ID!, $proxyPort: Int!, $options: Json) {\n                activateInterceptor(id: $id, proxyPort: $proxyPort, options: $options)\n            }\n        ",{id:e,proxyPort:t,options:n})).activateInterceptor;return c.isBoolean(r)?{success:r,metadata:void 0}:r}))}triggerServerUpdate(){return l(this,void 0,void 0,(function*(){yield this.graphql("TriggerUpdate","\n            mutation TriggerUpdate {\n                triggerUpdate\n            }\n        ",{})}))}}var u=n(344),p=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};function h(){var e;return p(this,void 0,void 0,(function*(){if(!o.a)return Promise.resolve(null!==(e=new URLSearchParams(window.location.search).get("authToken"))&&void 0!==e?e:void 0);const t=yield r.getItem("latest-auth-token");return t||void 0}))}const m=Object(s.c)(),g=()=>m.resolve(),f=()=>m.promise,b=p(void 0,void 0,void 0,(function*(){let e;for(o.a?yield Object(s.b)(5e3):yield f();!e;){const t=yield h(),n=new u.a(t),r=new d(t);if(e=yield n.getServerVersion().catch(()=>(console.log("Couldn't get version from REST API"),r.getServerVersion().catch(()=>{console.log("Couldn't get version from GraphQL API")}))),e)return Object(a.F)(e,a.v)?n:r;yield Object(s.b)(100)}throw new Error(`Unreachable error: got version ${e} but couldn't pick an API client`)}));function y(){return p(this,void 0,void 0,(function*(){return(yield b).getServerVersion()}))}function v(e){return p(this,void 0,void 0,(function*(){return(yield b).getConfig(e)}))}function x(){return p(this,void 0,void 0,(function*(){return(yield b).getNetworkInterfaces()}))}function w(e){return p(this,void 0,void 0,(function*(){return(yield b).getInterceptors(e)}))}function E(e){return p(this,void 0,void 0,(function*(){return(yield b).getDetailedInterceptorMetadata(e)}))}function C(e,t,n){return p(this,void 0,void 0,(function*(){const r=yield(yield b).activateInterceptor(e,t,n);if(r.success)return r.metadata;console.log("Activation result",JSON.stringify(r));throw Object.assign(new i.a("failed to activate interceptor "+e,"activate-interceptor-"+e),r)}))}function T(e,t){return p(this,void 0,void 0,(function*(){const n=yield b;if(!(n instanceof u.a))throw new Error("Requests cannot be sent via the GraphQL API client");return n.sendRequest(e,t)}))}function j(){return p(this,void 0,void 0,(function*(){return(yield b).triggerServerUpdate().catch(console.log)}))}},67:function(e,t,n){"use strict";function r(e,t){return e.length<=t?e:e.slice(0,t-3)+"..."}function o(e,t=", ",n=" and "){return 1===e.length?e[0]:e.slice(0,-1).join(t)+n+e[e.length-1]}n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i}));const s=["a","e","i","o","u","y"];function a(e){return s.includes(e[0])?"an":"a"}function i(e){return e[0].toUpperCase()+e.slice(1)}},672:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return g}));var r=n(4),o=n(0),s=n(1),a=n(5),i=n(16),c=n(51),l=n(127),d=n(49),u=n(110),p=n(100),h=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const m=["text","raw","base64","image"];let g=class extends o.Component{componentDidMount(){Object(a.c)(this,Object(s.autorun)(()=>{this.props.message||this.onChangeContentType(void 0)}))}onChangeContentType(e){e===this.props.message.contentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{url:t,message:n,isPaidUser:s,collapsed:a,expanded:h,onCollapseToggled:g,onExpandToggled:f}=this.props,b=Object(c.c)(n.contentType,Object(i.h)(n.headers["content-type"]),n.body),y=r.includes(b,this.selectedContentType)?this.selectedContentType:n.contentType,v=n.body.decoded;if(v)return o.createElement(p.a,{collapsed:a,onCollapseToggled:g,expanded:h},o.createElement("header",null,o.createElement(d.e,{body:v,mimeType:Object(i.d)(n.headers,"content-type"),downloadFilename:Object(d.f)(t,n.headers),title:"Response body",expanded:h,onExpandToggled:f,onCollapseToggled:g,selectedContentType:y,contentTypeOptions:b,onChangeContentType:this.onChangeContentType,isPaidUser:s})),o.createElement(d.b,null,o.createElement(u.a,{contentId:n.id,editorNode:this.props.editorNode,rawContentType:Object(i.h)(n.headers["content-type"]),contentType:y,expanded:!!h,cache:n.cache},v)));if(!v&&n.body.decodingError){const i=n.body.decodingError,c=e.isBuffer(n.body.encoded)?n.body.encoded:void 0,l=r.includes(m,this.selectedContentType)?this.selectedContentType:"text";return o.createElement(p.a,{collapsed:a,onCollapseToggled:g,expanded:h},o.createElement("header",null,o.createElement(d.e,{body:c,mimeType:"application/octet-stream",downloadFilename:Object(d.f)(t,n.headers),title:"Response body",expanded:h,onExpandToggled:f,onCollapseToggled:g,selectedContentType:l,contentTypeOptions:m,onChangeContentType:this.onChangeContentType,isPaidUser:s})),o.createElement(d.a,{error:i,headers:n.rawHeaders}),c&&o.createElement(d.b,null,o.createElement(u.a,{contentId:n.id,editorNode:this.props.editorNode,contentType:l,expanded:!!h,cache:n.cache},c)))}return o.createElement(l.a,{collapsed:a,onCollapseToggled:g,expanded:h},o.createElement("header",null,o.createElement(d.e,{body:void 0,title:"Response body",expanded:h,onExpandToggled:f,onCollapseToggled:g,selectedContentType:y,contentTypeOptions:b,onChangeContentType:this.onChangeContentType,isPaidUser:s})))}};h([s.observable],g.prototype,"selectedContentType",void 0),h([s.action.bound],g.prototype,"onChangeContentType",null),g=h([a.e],g)}).call(this,n(25).Buffer)},68:function(e,t,n){"use strict";n.d(t,"g",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return y})),n.d(t,"h",(function(){return v})),n.d(t,"f",(function(){return w})),n.d(t,"e",(function(){return E})),n.d(t,"b",(function(){return C})),n.d(t,"a",(function(){return T})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return O}));var r=n(79),o=n(1),s=n(12),a=n(89),i=n(21),c=n(254),l=n(9),d=n(50),u=n(29),p=n(19),h=n(57),m=n(38),g=n(58);function f(e){return Object(o.observable)({id:r(),type:"http",activated:!0,matchers:[],completionChecker:new s.completionCheckers.Always,handler:v("http",e)})}function b(e,t,n){return[t,...(n||[]).slice(1).filter(t=>Object(u.k)(t,e))]}function y(e){var t;if("ipfs"!==e.type)return;const n=null===(t=e.matchers[0])||void 0===t?void 0:t.interactionName;if(!n)return;const r=e.matchers.findIndex(e=>"ipfs-arg"===Object(u.h)(e));if(m.o(n)){const t=new m.c(n,void 0);-1===r?e.matchers.splice(1,0,t):e.matchers.splice(r,1,t)}else-1!==r&&e.matchers.splice(r,1)}function v(e,t){switch(e){case"http":return new p.j(t);case"websocket":return new h.j(t);case"ethereum":case"ipfs":return new p.j(t);case"webrtc":return new g.c}}function x(e){const t=!!e.body.decoded&&e.body.decoded.length<1e4,n=t&&"json"===e.contentType&&!!Object(i.m)(e.body.decoded.toString())?[new s.matchers.JsonBodyMatcher(Object(i.m)(e.body.decoded.toString()))]:t?[new s.matchers.RawBodyMatcher(e.body.decoded.toString())]:[],r=e.parsedUrl.toString().split("?"),o=r[0],c=r.slice(1).join("?");return[new(p.i[e.method]||p.r),new s.matchers.SimplePathMatcher(o),new s.matchers.QueryMatcher(a.parse(c)),...n]}function w(e,t){return{id:r(),type:"http",activated:!0,matchers:x(t),handler:new p.l(e),completionChecker:new s.completionCheckers.Always}}function E(e){const{statusCode:t,statusMessage:n,headers:o}=e.isSuccessfulExchange()?e.response:{statusCode:200,statusMessage:"OK",headers:{}},a=e.isSuccessfulExchange()&&e.response.body.encoded.byteLength<=1048576&&!!e.response.body.decoded?e.response.body.decoded:"A mock response",c=Object.assign({},o);return delete c.date,delete c.expires,delete c[":status"],delete c["content-encoding"],c["content-length"]&&(c["content-length"]=Object(i.d)(a).toString()),{id:r(),type:"http",activated:!0,matchers:x(e.request),handler:new p.o(t,n||Object(d.d)(t),a,c),completionChecker:new s.completionCheckers.Always}}const C=e=>({id:"default-group",title:"Default rules",collapsed:!0,items:e}),T=(e,t)=>[{id:"default-amiusing",type:"http",activated:!0,matchers:[new p.i.GET,new p.a],completionChecker:new s.completionCheckers.Always,handler:new p.o(200,void 0,c,{"content-type":"text/html","cache-control":"no-store","httptoolkit-active":"true"})},...Object(l.F)(t.serverVersion,l.j)?[{id:"default-certificate",type:"http",activated:!0,matchers:[new p.i.GET,new s.matchers.SimplePathMatcher("amiusing.httptoolkit.tech/certificate")],completionChecker:new s.completionCheckers.Always,handler:new p.e(200,void 0,t.certPath,{"content-type":"application/x-x509-ca-cert"})}]:[],{id:"default-wildcard",type:"http",activated:!0,matchers:[new p.c],completionChecker:new s.completionCheckers.Always,handler:new p.j(e)},{id:"default-ws-wildcard",type:"websocket",activated:!0,matchers:[new h.a],completionChecker:new s.completionCheckers.Always,handler:new h.j(e)}],j=(e,t)=>({id:"root",title:"HTTP Toolkit Rules",isRoot:!0,items:[C(T(e,t))]}),O=(e,t,n)=>({id:"default-forwarding-rule",type:"http",activated:!0,matchers:[new p.r,new s.matchers.HostMatcher(e)],completionChecker:new s.completionCheckers.Always,handler:new p.d(t,!0,n)})},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return Ee})),n.d(t,"b",(function(){return Ce})),n.d(t,"d",(function(){return Te})),n.d(t,"f",(function(){return je})),n.d(t,"e",(function(){return Oe})),n.d(t,"g",(function(){return Se})),n.d(t,"a",(function(){return ke}));var r=n(0),o=n(2),s=n(167),a=n(577),i=n(578),c=n(576),l=n(579),d=n(580),u=n(581),p=n(582),h=n(583),m=n(584),g=n(585),f=n(586),b=n(587),y=n(588),v=n(589),x=n(590),w=n(591),E=n(592),C=n(593),T=n(594),j=n(595),O=n(596),S=n(597),k=n(598),P=n(599),R=n(600),H=n(601),q=n(602),A=n(603),I=n(604),D=n(605),$=n(606),M=n(607),F=n(608),B=n(609),N=n(610),L=n(611),U=n(612),W=n(613),z=n(614),_=n(615),V=n(616),G=n(617),J=n(618),K=n(619),Y=n(620),Q=n(621),X=n(622),Z=n(623),ee=n(624),te=n(625),ne=n(626),re=n(627),oe=n(628),se=n(629),ae=n(630),ie=n(631),ce=n(632),le=n(633),de=n(634),ue=n(635),pe=n(636),he=n(637),me=n(638),ge=n(639),fe=n(640),be=n(641),ye=n(642),ve=n(643),xe=n(644);var we=n(249);s.b.add({prefix:"fac",iconName:"spinner-arc",icon:[50,50,[],"","M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"]},c.faArrowLeft,a.faSpinner,i.faTrashAlt,l.faSearch,d.faPlug,u.faNetworkWired,p.faDesktop,h.faTerminal,m.faQuestion,g.faTimes,f.faChevronUp,b.faChevronDown,y.faBan,v.faComment,x.faToggleOn,w.faToggleOff,E.faCopy,C.faExternalLinkAlt,T.faPlus,j.faMinus,O.faExclamationTriangle,S.faLightbulb,k.faCog,P.faStar,R.faMagic,H.faSun,q.faMoon,A.faAdjust,I.faUpload,D.faDownload,$.faPlay,M.faPause,F.faGem,B.faTheaterMasks,N.faGripVertical,L.faUndo,U.faSave,W.faFolderOpen,z.faUnlock,_.faEdit,V.faWindowMaximize,G.faMobileAlt,J.faExpand,K.faCompressArrowsAlt,Y.faThumbtack,Q.faEye,X.faCaretDown,Z.faAlignLeft,ee.faClone,te.faCheck,ne.faLevelDownAlt,re.faPaperPlane,oe.faChrome,se.faFirefox,ae.faDocker,ie.faAndroid,ce.faApple,le.faSafari,de.faEdge,ue.faInternetExplorer,pe.faOpera,{prefix:"fac",iconName:"brave-browser",icon:[11.1,13.23,[],"","m 5.53752561206,8.23273389478 c 0.07589,0 0.562136,0.174874 0.952332,0.380547 0.39017,0.205699 0.672941,0.351155 0.76334,0.408778 0.09038,0.05764 0.03526,0.166326 -0.04706,0.225614 -0.08235,0.05928 -1.188755,0.932071 -1.296127,1.028532 -0.107394,0.09649 -0.265189,0.255822 -0.372477,0.255822 -0.107288,0 -0.265105,-0.159332 -0.372478,-0.255822 -0.107393,-0.09646 -1.213784,-0.969245 -1.296127,-1.028532 -0.08235,-0.05928 -0.137439,-0.167962 -0.04706,-0.225614 0.09041,-0.05761 0.37317,-0.203079 0.763368,-0.408778 0.390141,-0.205673 0.876414,-0.380547 0.952305,-0.380547 z m 0.0059,-6.216331 c 0.03726,0.001 0.247208,0.01141 0.547814,0.113516 0.332248,0.112822 0.692182,0.253848 0.858305,0.253848 0.166126,0 1.398212,-0.239745 1.398212,-0.239745 0,0 1.460117,1.798085 1.460117,2.182382 0,0.384295 -0.183677,0.485723 -0.368352,0.6855 -0.184673,0.199778 -0.991233,1.072279 -1.094811,1.18431 -0.103578,0.112061 -0.319207,0.28194 -0.192371,0.587712 0.126834,0.305775 0.313945,0.694866 0.105872,1.089514 -0.208099,0.394647 -0.564572,0.658056 -0.792993,0.614507 -0.228419,-0.04357 -0.764862,-0.329155 -0.962134,-0.459604 -0.197272,-0.130452 -0.822508,-0.655744 -0.822508,-0.856734 0,-0.200962 0.646305,-0.561821 0.765694,-0.643814 0.119441,-0.08196 0.664051,-0.399302 0.67521,-0.523856 0.01115,-0.124579 0.0069,-0.161108 -0.153831,-0.468883 -0.160725,-0.307805 -0.450169,-0.71853 -0.401992,-0.991811 0.04818,-0.273252 0.514985,-0.415351 0.848119,-0.543515 0.333078,-0.128132 0.974454,-0.370165 1.054553,-0.407791 0.08015,-0.03766 0.05946,-0.07349 -0.183289,-0.09695 -0.24268,-0.02344 -0.93143,-0.11657 -1.241942,-0.0284 -0.310514,0.08816 -0.841003,0.222315 -0.883974,0.293448 -0.04297,0.07114 -0.08088,0.07353 -0.03675,0.318918 0.0441,0.245385 0.271308,1.422841 0.293347,1.631983 0.02206,0.209143 0.06521,0.347404 -0.156157,0.398964 -0.221387,0.05155 -0.594031,0.141082 -0.722085,0.141082 -0.128053,0 -0.500724,-0.08953 -0.722085,-0.141082 -0.221388,-0.05155 -0.178251,-0.189821 -0.156185,-0.398964 0.02207,-0.209142 0.249242,-1.386598 0.293376,-1.631983 0.0441,-0.245386 0.0061,-0.247783 -0.03675,-0.318918 -0.04297,-0.07114 -0.573487,-0.205278 -0.884001,-0.293448 -0.310513,-0.08816 -0.999234,0.005 -1.241942,0.0284 -0.242707,0.02344 -0.263418,0.05928 -0.18329,0.09695 0.08012,0.03762 0.721504,0.279654 1.054581,0.407791 0.333108,0.128171 0.799944,0.270263 0.848119,0.543515 0.04818,0.273281 -0.241294,0.684006 -0.401992,0.991811 -0.160724,0.307775 -0.164988,0.3443 -0.153829,0.468883 0.01115,0.124552 0.555766,0.441892 0.675182,0.523856 0.119415,0.08199 0.765693,0.442852 0.765693,0.643814 0,0.20099 -0.625209,0.726284 -0.822481,0.856734 -0.197272,0.130452 -0.733713,0.416028 -0.962134,0.459604 -0.22842,0.04355 -0.584894,-0.21986 -0.792992,-0.614507 -0.20807,-0.394648 -0.02096,-0.783739 0.105846,-1.089514 0.126835,-0.305772 -0.08877,-0.475652 -0.192372,-0.587712 -0.103552,-0.112035 -0.910138,-0.984532 -1.094811,-1.18431 -0.184675,-0.199777 -0.368325,-0.301205 -0.368325,-0.6855 0,-0.384297 1.460119,-2.182382 1.460119,-2.182382 0,0 1.232086,0.239745 1.39821,0.239745 0.166123,0 0.526058,-0.141026 0.858306,-0.253848 0.300606,-0.102072 0.510551,-0.112467 0.547815,-0.113516 z m 5.143909,1.157116 0.304561,-0.761542 c 0,0 -0.387622,-0.423078 -0.858308,-0.902568 -0.470683,-0.479489 -1.467428,-0.197436 -1.467428,-0.197436 l -1.135179,-1.311968 h -1.993525 -1.993488 l -1.135179,1.311968 c 0,0 -0.996745,-0.282053 -1.467428,0.197436 -0.470686,0.47949 -0.858308,0.902568 -0.858308,0.902568 l 0.304561,0.761542 -0.387622,1.128209 c 0,0 1.140025,4.398751 1.273616,4.935921 0.263029,1.057696 0.442998,1.466672 1.190555,2.002574 0.747558,0.535898 2.104237,1.466672 2.325735,1.607698 0.221498,0.141026 0.498373,0.38125 0.747558,0.38125 0.249185,0 0.52606,-0.240224 0.747558,-0.38125 0.221498,-0.141026 1.578177,-1.0718 2.325735,-1.607698 0.747557,-0.535902 0.927525,-0.944878 1.190555,-2.002574 0.133563,-0.53717 1.273616,-4.935921 1.273616,-4.935921 z"]},{prefix:"fac",iconName:"arc-browser",icon:[56.4,67.36,[],"","m 58.458706,45.75 -3.5,-7.36 -6.63,-13.95 -0.01,0.01 c 0,0 0,-0.01 0.01,-0.01 l -9.64,-20.28 a 7.292,7.292 0 0 0 -6.58,-4.16 c -2.81,0 -5.37,1.62 -6.58,4.16 l -9.83,20.68 c 2.76,3.65 7.64,6.65 12.49,7.68 l 3.18,-6.68 c 0.3,-0.63 1.2,-0.63 1.5,0 l 3.11,6.54 h 0.02 -0.02 l 6.33,13.32 3.11,6.54 a 7.28,7.28 0 0 0 6.59,4.16 c 0.65,0 1.3,-0.09 1.94,-0.27 4.39,-1.21 6.47,-6.26 4.51,-10.38 m -22.49,-13.37 c -1.42,0.34 -2.87,0.52 -4.32,0.52 -1.13,0 -2.3,-0.13 -3.47,-0.38 -4.85,-1.03 -9.73,-4.03 -12.49,-7.68 -0.69,-0.91 -1.25,-1.86 -1.64,-2.83 -1.51,-3.73 -5.7600005,-5.53 -9.4900005,-4.03 -3.73000009,1.51 -5.53000009,5.76 -4.03000009,9.49 C 2.2387054,31.71 5.2587055,35.6 9.0487055,38.8 a 37.84,37.84 0 0 0 12.7700005,7.08 c 3.21,1.03 6.54,1.6 9.82,1.6 3.64,0 7.23,-0.63 10.65,-1.78 z m 25.54,-23.1800005 a 7.29,7.29 0 0 0 -8.58,5.7200005 c -0.7,3.5 -2.34,6.759999 -4.6,9.53 l 6.63,13.96 c 6.12,-5.31 10.64,-12.54 12.26,-20.63 0.79,-3.96 -1.77,-7.8000005 -5.71,-8.5800005 M 9.0487055,38.8 l -3.32,6.98 c -1.69,3.549999 -0.42,7.92 3.06,9.769999 3.6900005,1.96 8.2300005,0.43 10.0100005,-3.299999 l 3.03,-6.37 A 37.885,37.885 0 0 1 9.0487055,38.8"]},he.faCodeBranch,me.faNpm,ge.faNodeJs,fe.faPhp,be.faPython,ye.faAtom,ve.faGlobe,xe.faJava);const Ee={Chrome:{icon:["fab","chrome"],color:"#1da462"},Chromium:{icon:["fab","chrome"],color:"#4489f4"},Firefox:{icon:["fab","firefox"],color:"#e66000"},Safari:{icon:["fab","safari"],color:"#448aff"},Edge:{icon:["fab","edge"],color:"#2c75be"},IE:{icon:["fab","internet-explorer"],color:"#00baf0"},Opera:{icon:["fab","opera"],color:"#cb0b1e"},Brave:{icon:["fac","brave-browser"],color:"#fb542b"},Arc:{icon:["fac","arc-browser"],color:"#ff536a"},Git:{icon:["fas","code-branch"],color:"#f05033"},Php:{icon:["fab","php"],color:"#8892bf"},Ruby:{icon:["fas","gem"],color:"#CC342D"},Faraday:{icon:["fas","gem"],color:"#CC342D"},Excon:{icon:["fas","gem"],color:"#CC342D"},Typhoeus:{icon:["fas","gem"],color:"#CC342D"},Rubybindings:{icon:["fas","gem"],color:"#CC342D"},Npm:{icon:["fab","npm"],color:"#cc3534"},Node:{icon:["fab","node-js"],color:"#3c873a"},Got:{icon:["fab","node-js"],color:"#3c873a"},Axios:{icon:["fab","node-js"],color:"#3c873a"},Nodebindings:{icon:["fab","node-js"],color:"#3c873a"},Pip:{icon:["fab","python"],color:"#646464"},Python:{icon:["fab","python"],color:"#4584b6"},Urlfetch:{icon:["fab","python"],color:"#4584b6"},Pycurl:{icon:["fab","python"],color:"#4584b6"},Pythonbindings:{icon:["fab","python"],color:"#4584b6"},Java:{icon:["fab","java"],color:"#007396"},Reactornetty:{icon:["fab","java"],color:"#007396"},Jetty:{icon:["fab","java"],color:"#007396"},Jakarta:{icon:["fab","java"],color:"#007396"},Akka:{icon:["fab","java"],color:"#007396"},Intellij:{icon:["fab","java"],color:"#007396"},Ktor:{icon:["fab","java"],color:"#007396"},Ahc:{icon:["fab","java"],color:"#007396"},Android:{icon:["fab","android"],color:"#78C257"},Okhttp:{icon:["fab","android"],color:"#78C257"},Fbandroidsdk:{icon:["fab","android"],color:"#78C257"},Iphone:{icon:["fab","apple"],color:"#000"},iOS:{icon:["fab","apple"],color:"#000"},Ios:{icon:["fab","apple"],color:"#000"},Ipad:{icon:["fab","apple"],color:"#000"},Darwin:{icon:["fab","apple"],color:"#000"},Docker:{icon:["fab","docker"],color:"#0db7ed"},Terminal:{icon:["fas","terminal"],color:"#20c20e"},Network:{icon:["fas","network-wired"],color:"#888"},Electron:{icon:["fas","atom"],color:"#9FEAF9"},Desktop:{icon:["fas","desktop"],color:"#888"},Unknown:{icon:["fas","question"],color:"#888"}},Ce=r.memo(we.a),Te=Object(o.j)(Ce).attrs(()=>({icon:["fas","lightbulb"]}))`
    margin: 0 6px;
    color: #2fb4e0;
`,je=Pe({prefix:"fas",iconName:"lightbulb"},{styles:{margin:"0 6px",color:"#2fb4e0"}}),Oe=Object(o.j)(Ce).attrs(()=>({icon:["fas","exclamation-triangle"]}))`
    margin: 0 6px;
    color: ${e=>e.theme.warningColor};
`,Se=Pe({prefix:"fas",iconName:"exclamation-triangle"},{styles:{margin:"0 6px",color:o.k}}),ke=Object(o.j)(Ce).attrs(()=>({fixedWidth:!0,icon:["fas","arrow-left"]}))`
    ${e=>"right"===e.direction?"transform: rotate(180deg);":""}
    padding: 0 15px;
`;function Pe(e,t){return Object(s.a)(e,t).html.join("")}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(649),o=n(259);const s=new r({html:!0,linkify:!0,linkTarget:"_blank"});function a(e){if(e){const t=s.render(e).replace(/\n$/,"");return{__html:o.sanitize(t)}}}o.addHook("afterSanitizeAttributes",(function(e){(e.hasAttribute("target")||"target"in e)&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer")),e.hasAttribute("target")||!e.hasAttribute("xlink:href")&&!e.hasAttribute("href")||e.setAttribute("xlink:show","new")})),o.addHook("afterSanitizeAttributes",(function(e){if(e.hasAttribute("href")){const t=e.getAttribute("href");(null==t?void 0:t.startsWith("/"))&&e.removeAttribute("href")}}))},860:function(e,t){},862:function(e,t){},868:function(e,t){},869:function(e,t){},870:function(e,t){},889:function(e,t){},9:function(e,t,n){"use strict";n.d(t,"y",(function(){return d})),n.d(t,"C",(function(){return u})),n.d(t,"E",(function(){return p})),n.d(t,"D",(function(){return h})),n.d(t,"F",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"r",(function(){return f})),n.d(t,"o",(function(){return b})),n.d(t,"k",(function(){return y})),n.d(t,"b",(function(){return v})),n.d(t,"j",(function(){return x})),n.d(t,"g",(function(){return w})),n.d(t,"m",(function(){return E})),n.d(t,"l",(function(){return C})),n.d(t,"a",(function(){return T})),n.d(t,"B",(function(){return j})),n.d(t,"h",(function(){return O})),n.d(t,"q",(function(){return S})),n.d(t,"s",(function(){return k})),n.d(t,"c",(function(){return P})),n.d(t,"i",(function(){return R})),n.d(t,"e",(function(){return H})),n.d(t,"p",(function(){return q})),n.d(t,"t",(function(){return A})),n.d(t,"A",(function(){return I})),n.d(t,"z",(function(){return D})),n.d(t,"n",(function(){return $})),n.d(t,"u",(function(){return M})),n.d(t,"x",(function(){return F})),n.d(t,"d",(function(){return B})),n.d(t,"v",(function(){return N})),n.d(t,"w",(function(){return L}));var r=n(108),o=n(117),s=n(21),a=n(36),i=n(66),c=n(118),l=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const d="c17a170a39683cce66180a0b131ee248754b3e9b",u=Object(a.c)(()=>l(void 0,void 0,void 0,(function*(){return Object(c.b)("httpToolkitDesktopVersion")}))),p=Object(a.c)(()=>Object(i.j)().then(i.g).then(e=>(r.setItem("last-server-version",e),e))),h=r.getItem("last-server-version").then(e=>e||s.a?e:localStorage.getItem("last-server-version"));function m(e,t){return"string"==typeof e&&o.satisfies(e,t,{includePrerelease:!0})}const g="^0.1.20 || ^1.0.0",f="^0.1.14 || ^1.0.0",b="^0.1.21 || ^1.0.0",y="^0.1.22 || ^1.0.0",v="^0.1.26 || ^1.0.0",x="^0.1.28 || ^1.0.0",w="^0.1.30 || ^1.0.0",E="^0.1.31 || ^1.0.0",C="^0.1.44 || ^1.0.0",T="^1.1.4",j="^1.1.3",O="^1.2.0",S="^1.4.0",k="^1.4.1",P="^1.4.2",R="^1.5.0",H="^1.7.0",q="^1.8.0",A="^1.9.0",I="^1.9.0",D="^1.10.3",$="^1.11.0",M="^1.11.0",F="^1.12.0",B="^1.12.0",N="^1.13.0",L="^1.13.0"},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),o=n(31),s=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class a{constructor(){this.searchIndex="",this.pinned=!1,this.cache=r.observable.map(new Map,{deep:!1})}isHttp(){return!1}isWebSocket(){return!1}isTlsFailure(){return!1}isTlsTunnel(){return!1}isRTCConnection(){return!1}isRTCDataChannel(){return!1}isRTCMediaTrack(){return!1}get category(){return Object(o.c)(this)}}s([r.computed],a.prototype,"category",null),s([r.observable],a.prototype,"searchIndex",void 0),s([r.observable],a.prototype,"pinned",void 0)},911:function(e,t){},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(4),o=n(0),s=n(2),a=n(7),i=n(23);const c=s.j.div`
    overflow: hidden;
    display: flex;
    flex-direction: inherit;
`,l=s.j.div`
    position: relative;
`,d=s.j.div`
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;

    background-color: ${e=>e.theme.mainBackground};
    padding-bottom: 2px;

    opacity: 0;
    pointer-events: none;
    &:hover, &:focus-within {
        opacity: 1;
        pointer-events: auto;
    }
`,u=s.j.div`
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;

    position: relative;
    display: flex;

    /* Try to avoid button padding expanding outer containers */
    margin: -5px -9px;

    /* Match the parent (typically card header) flex direction, but justify
       content in the opposite direction */
    flex-direction: inherit;
    justify-content: flex-start;
`,p=Object(s.j)(a.b)`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:hover + ${d} {
        opacity: 1;
        pointer-events: auto;
    }
`;function h(){"blur"in(document.activeElement||{})&&document.activeElement.blur()}const m=e=>{var t,n;const s=o.useRef(null),a=Object(i.i)(s,1/0);null===(t=s.current)||void 0===t||t.children;const m=Array.from((null===(n=s.current)||void 0===n?void 0:n.querySelectorAll("button"))||[]),g=r.max(m.map(e=>e.clientWidth)),f=g?Math.max(Math.floor(a/g),1):1/0,b=o.Children.toArray(e.children),[y,v]=f>=b.length?[b,[]]:[b.slice(0,f-1),b.slice(f-1)];return o.createElement(u,{ref:s,className:e.className},o.createElement(c,null,y),v.length>0&&o.createElement(l,null,o.createElement(p,{icon:["fas","caret-down"],title:"Show more"}),o.createElement(d,{onClick:h},v)))}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(44);const s=e=>r.createElement(o.a,{icon:["fas",e.expanded?"compress-arrows-alt":"expand"],onClick:e.onClick,title:e.expanded?"Shrink this area, so you can see other details":"Expand this area to view it in more detail, hiding other areas"})}});
//# sourceMappingURL=app.js.map