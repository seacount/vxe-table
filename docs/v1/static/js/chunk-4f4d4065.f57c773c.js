(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f4d4065"],{"0ffb":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"tip"},[t._v("表单，可以通过设置 "),n("grid-api-link",{attrs:{prop:"form-config"}}),t._v("={data, items} 渲染表单")],1),n("vxe-grid",{attrs:{resizable:"","export-config":"",border:"",height:"400",loading:t.loading,"form-config":t.tableForm,toolbar:t.tableToolbar,data:t.tableData,columns:t.tableColumn},on:{"form-submit":t.findList}}),n("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),n("pre",[t._v("    "),n("code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[0]))]),t._v("\n    "),n("code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[1]))]),t._v("\n  ")])],1)},o=[],i=n("1da1"),a=(n("96cf"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("628a")),c=n.n(a),s=n("1487"),l=n.n(s),u={data:function(){return{loading:!1,tableData:[],tableForm:{data:{name:"",sex:""},items:[{field:"name",title:"app.body.label.name",itemRender:{name:"$input",props:{placeholder:"请输入名称"}}},{field:"sex",title:"性别",titlePrefix:{message:"帮助信息！！！",icon:"fa fa-info-circle"},itemRender:{name:"$select",options:[]}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},tableToolbar:{export:!0,custom:!0},tableColumn:[{type:"seq",width:60},{type:"checkbox",width:60},{field:"name",title:"Name"},{field:"nickname",title:"Nickname"},{field:"age",title:"Age"},{field:"sex",title:"Sex"},{field:"describe",title:"Describe",showOverflow:!0}],demoCodes:['\n        <vxe-grid\n          resizable\n          export-config\n          border\n          height="400"\n          :loading="loading"\n          :form-config="tableForm"\n          :toolbar="tableToolbar"\n          :data="tableData"\n          :columns="tableColumn"\n          @form-submit="findList">\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              tableForm: {\n                data: {\n                  name: '',\n                  sex: ''\n                },\n                items: [\n                  { field: 'name', title: 'app.body.label.name', itemRender: { name: '$input', props: { placeholder: '请输入名称' } } },\n                  { field: 'sex', title: '性别', titlePrefix: { message: '帮助信息！！！', icon: 'fa fa-info-circle' }, itemRender: { name: '$select', options: [] } },\n                  { itemRender: { name: '$buttons', children: [{ props: { type: 'submit', content: '查询', status: 'primary' } }, { props: { type: 'reset', content: '重置' } }] } }\n                ]\n              },\n              tableToolbar: {\n                export: true,\n                custom: true\n              },\n              tableColumn: [\n                { type: 'seq', width: 60 },\n                { type: 'checkbox', width: 60 },\n                { field: 'name', title: 'Name' },\n                { field: 'nickname', title: 'Nickname' },\n                { field: 'age', title: 'Age' },\n                { field: 'sex', title: 'Sex' },\n                { field: 'describe', title: 'Describe', showOverflow: true }\n              ]\n            }\n          },\n          created () {\n            this.findList()\n            this.findSexList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              XEAjax.get('/api/user/list', this.tableForm.data).then(data => {\n                this.tableData = data\n                this.loading = false\n              })\n            },\n            async findSexList () {\n              const sexList = await XEAjax.get('/api/conf/sex/list')\n              // 异步更新下拉选项\n              this.tableForm.items[1].itemRender.options = sexList\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(t){l.a.highlightBlock(t)}))},created:function(){this.findList(),this.findSexList()},methods:{findList:function(){var t=this;this.loading=!0,c.a.get("/api/user/list",this.tableForm.data).then((function(e){t.tableData=e,t.loading=!1}))},findSexList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/api/conf/sex/list");case 2:n=e.sent,t.tableForm.items[1].itemRender.options=n;case 4:case"end":return e.stop()}}),e)})))()}}},f=u,h=n("2877"),d=Object(h["a"])(f,r,o,!1,null,null,null);e["default"]=d.exports},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7");function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new R(r||[]);return i._invoke=k(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function y(){}function v(){}function g(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==n&&r.call(x,i)&&(b=x);var L=g.prototype=y.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function k(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return C()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return v.prototype=g,s(L,"constructor",g),s(g,"constructor",v),v.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),s(L,c,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;F(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);