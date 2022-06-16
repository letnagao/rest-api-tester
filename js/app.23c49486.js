(function(t){function e(e){for(var n,a,s=e[0],l=e[1],u=e[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var l=o[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("8179")},"34fb":function(t,e,o){},"50cd":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"grid"},[o("div",{staticClass:"controls"},[o("h1",[t._v("Rest (axios / jwt)")]),o("div",{staticClass:"actions"},[o("button",{on:{click:t.GET}},[t._v("GET")]),o("button",{on:{click:t.POST}},[t._v("POST")]),o("button",{on:{click:t.PUT}},[t._v("PUT")]),o("button",{on:{click:t.DELETE}},[t._v("DELETE")])]),o("div",{staticClass:"form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",placeholder:"url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],staticClass:"token",attrs:{type:"text",placeholder:"jwt token"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}}),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.fileID,expression:"fileID"}],attrs:{type:"text",placeholder:"file id"},domProps:{value:t.fileID},on:{input:function(e){e.target.composing||(t.fileID=e.target.value)}}}),o("input",{attrs:{type:"file"},on:{change:t.previewFile}})]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],attrs:{rows:"10",placeholder:"key: value"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),o("pre",[t._v(t._s(t.jsonPreview?t.jsonPreview:"JSON Mal Formatado"))])])]),o("div",{staticClass:"response"},[o("transition",{attrs:{mode:"out-in"}},[t.data?o("div",{staticClass:"result"},[o("h3",[t._v("Status")]),t.status?o("pre",{domProps:{innerHTML:t._s(t.status)}}):t._e(),o("h3",[t._v("Data")]),t.data?o("pre",{domProps:{innerHTML:t._s(t.data)}}):t._e(),o("h3",[t._v("Headers")]),t.headers?o("pre",{domProps:{innerHTML:t._s(t.headers)}}):t._e(),o("h3",[t._v("Request")]),t.request?o("pre",{domProps:{innerHTML:t._s(t.request)}}):t._e(),o("h3",[t._v("Config")]),t.config?o("pre",{domProps:{innerHTML:t._s(t.config)}}):t._e()]):t._e()])],1),o("footer",[t._v("🐺")])])},r=[],i=(o("4284"),o("e486"),o("b5bc"),o("728c"),o("bc3a")),a=o.n(i);function s(t){return t=JSON.stringify(t,null,1),t=t.replace(/["][-\w]+["]\:/g,"<span>$&</span>"),t}var l={data:function(){return{url:"",body:"",token:"",fileID:"",file:"",data:null,headers:null,request:null,status:null,config:null}},computed:{jsonPreview:function(){try{return JSON.parse(this.body)}catch(t){console.error("Erro na chave",t)}},jsonBody:function(){if(this.body)try{var t=new FormData,e=JSON.parse(this.body),o=Object.keys(e);return o.forEach((function(o){t.append(o,e[o])})),this.file&&this.fileID&&t.append(this.fileID,this.file),t}catch(n){console.error("Erro na chave",n)}}},methods:{previewFile:function(t){this.file=t.target.files[0]},resetData:function(){this.data=null,this.headers=null,this.request=null,this.status=null,this.config=null},formatResponse:function(t){return console.log(t),this.data=s(t.data),this.headers=s(t.headers),this.status=s(t.status),this.config=s(t.config),t},formatError:function(t){return console.log(t),this.data=s(t),this.status=t.response.status,t},GET:function(){this.resetData(),this.jwt(),a.a.get(this.url).then(this.formatResponse).catch(this.formatError)},POST:function(){this.resetData(),this.jwt(),a.a.post(this.url,this.jsonBody).then(this.formatResponse).catch(this.formatError)},PUT:function(){this.resetData(),this.jwt(),a.a.put(this.url,this.jsonBody).then(this.formatResponse).catch(this.formatError)},DELETE:function(){this.resetData(),this.jwt(),a.a.delete(this.url,this.jsonBody).then(this.formatResponse).catch(this.formatError)},jwt:function(){this.token&&(a.a.defaults.headers.common["Authorization"]="Bearer "+this.token)}},watch:{url:function(){window.localStorage.url=this.url},body:function(){window.localStorage.body=this.body},fileID:function(){window.localStorage.fileID=this.fileID},token:function(){this.token||delete a.a.defaults.headers.common["Authorization"],window.localStorage.token=this.token}},created:function(){this.url="undefined"!==window.localStorage.url?window.localStorage.url:"",this.body="undefined"!==window.localStorage.body?window.localStorage.body:"",this.fileID="undefined"!==window.localStorage.fileID?window.localStorage.fileID:"",this.token="undefined"!==window.localStorage.token?window.localStorage.token:""}},u=l,c=(o("de39"),o("fb12")),d=Object(c["a"])(u,n,r,!1,null,null,null);e["a"]=d.exports},de39:function(t,e,o){"use strict";var n=o("34fb"),r=o.n(n);r.a}});
//# sourceMappingURL=app.23c49486.js.map