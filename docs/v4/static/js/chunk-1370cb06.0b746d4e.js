(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1370cb06"],{"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("d3b7");function c(e,t,n,c,a,l,i){try{var o=e[l](i),r=o.value}catch(s){return void n(s)}o.done?t(r):Promise.resolve(r).then(c,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,l){var i=e.apply(t,n);function o(e){c(i,a,l,o,r,"next",e)}function r(e){c(i,a,l,o,r,"throw",e)}o(void 0)}))}}},"26d4":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=function(e){return Object(c["pushScopeId"])("data-v-7f93885a"),e=e(),Object(c["popScopeId"])(),e},l={class:"tip"},i=Object(c["createTextVNode"])(" 高性能的虚拟列表"),o=a((function(){return Object(c["createElementVNode"])("span",{class:"orange"},"（最大可以支撑 80w 行）",-1)})),r=Object(c["createTextVNode"])("，用于处理将大数组按需切割成可视区 items 条数，使渲染性能大幅提升，查看 "),s=Object(c["createTextVNode"])("API"),d=a((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),m=a((function(){return Object(c["createElementVNode"])("span",{class:"red"},"（注：必须固定容器高度和行高）",-1)})),u=Object(c["createTextVNode"])("加载10条"),b=Object(c["createTextVNode"])("加载500条"),O=Object(c["createTextVNode"])("加载1w条"),j=Object(c["createTextVNode"])("加载10w条"),f=Object(c["createTextVNode"])("加载30w条"),p=Object(c["createTextVNode"])("加载50w条"),x={class:"vxe-row"},v={class:"vxe-col--4"},g={class:"vxe-col--4"},h=a((function(){return Object(c["createElementVNode"])("img",{src:"https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif",height:"28"},null,-1)})),y={class:"vxe-col--4"},V=a((function(){return Object(c["createElementVNode"])("img",{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"28"},null,-1)})),w={class:"vxe-col--12"},k=Object(c["createTextVNode"])("      "),N=Object(c["createTextVNode"])("\r\n        | Arrow Up ↑ | 匀速向上滚动数据 |\r\n        | Arrow Down ↓ | 匀速向下滚动数据 |\r\n        | Arrow Left ← | 匀速向左滚动数据 |\r\n        | Arrow Right → | 匀速向右滚动数据 |\r\n        | Page Up | 向上翻页滚动 |\r\n        | Page Down | 向下翻页滚动 |\r\n        | Spacebar | 翻页滚动 |\r\n        | Home | 滚动到顶部 |\r\n        | End | 滚动到底部 |\r\n      "),E=Object(c["createTextVNode"])("\r\n    "),C={class:"demo-code"},D=Object(c["createTextVNode"])("      "),T=Object(c["createTextVNode"])("\r\n      "),B=Object(c["createTextVNode"])("\r\n      "),_=Object(c["createTextVNode"])("\r\n    ");function L(e,t,n,a,L,I){var S=Object(c["resolveComponent"])("router-link"),z=Object(c["resolveComponent"])("vxe-button"),P=Object(c["resolveComponent"])("vxe-list"),A=Object(c["resolveComponent"])("pre-code");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createElementVNode"])("h2",null,Object(c["toDisplayString"])(e.$t("app.aside.nav.list")),1),Object(c["createElementVNode"])("p",l,[i,o,r,Object(c["createVNode"])(S,{class:"link",to:{name:"VXEAPI",params:{name:"list"}}},{default:Object(c["withCtx"])((function(){return[s]})),_:1}),d,m]),Object(c["createElementVNode"])("p",null,[Object(c["createVNode"])(z,{onClick:t[0]||(t[0]=function(t){return e.loadData(10)})},{default:Object(c["withCtx"])((function(){return[u]})),_:1}),Object(c["createVNode"])(z,{onClick:t[1]||(t[1]=function(t){return e.loadData(500)})},{default:Object(c["withCtx"])((function(){return[b]})),_:1}),Object(c["createVNode"])(z,{onClick:t[2]||(t[2]=function(t){return e.loadData(1e4)})},{default:Object(c["withCtx"])((function(){return[O]})),_:1}),Object(c["createVNode"])(z,{onClick:t[3]||(t[3]=function(t){return e.loadData(1e5)})},{default:Object(c["withCtx"])((function(){return[j]})),_:1}),Object(c["createVNode"])(z,{onClick:t[4]||(t[4]=function(t){return e.loadData(3e5)})},{default:Object(c["withCtx"])((function(){return[f]})),_:1}),Object(c["createVNode"])(z,{onClick:t[5]||(t[5]=function(t){return e.loadData(5e5)})},{default:Object(c["withCtx"])((function(){return[p]})),_:1})]),Object(c["createElementVNode"])("p",null,[Object(c["createVNode"])(P,{height:"240",class:"my-list",loading:e.demo1.loading,data:e.demo1.list1},{default:Object(c["withCtx"])((function(e){var t=e.items;return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"my-list-item",key:t},Object(c["toDisplayString"])(e.label),1)})),128))]})),_:1},8,["loading","data"])]),Object(c["createElementVNode"])("div",x,[Object(c["createElementVNode"])("div",v,[Object(c["createVNode"])(P,{class:"my-list",height:"200",data:e.demo1.list2},{default:Object(c["withCtx"])((function(e){var t=e.items;return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"my-list-item",key:t},Object(c["toDisplayString"])(e.label),1)})),128))]})),_:1},8,["data"])]),Object(c["createElementVNode"])("div",g,[Object(c["createVNode"])(P,{class:"my-list",height:"200",data:e.demo1.list3},{default:Object(c["withCtx"])((function(e){var t=e.items;return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"my-list-item",key:t},[h,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.label),1)])})),128))]})),_:1},8,["data"])]),Object(c["createElementVNode"])("div",y,[Object(c["createVNode"])(P,{class:"my-ul-list",height:"200",data:e.demo1.list4,"scroll-y":{sItem:"li"}},{default:Object(c["withCtx"])((function(e){var t=e.items;return[Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:t},[V,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.label),1)])})),128))])]})),_:1},8,["data"])]),Object(c["createElementVNode"])("div",w,[Object(c["createVNode"])(P,{class:"my-table-list",height:"200",data:e.demo1.list5,"scroll-y":{gt:60,sItem:".my-tr"}},{default:Object(c["withCtx"])((function(e){var t=e.items;return[Object(c["createElementVNode"])("table",null,[Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{class:"my-tr",key:e.id},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.label)+" - 列1",1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.label)+" - 列2",1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.label)+" - 列3",1)])})),128))])])]})),_:1},8,["data","scroll-y"])])]),Object(c["createElementVNode"])("pre",null,[k,Object(c["createVNode"])(A,null,{default:Object(c["withCtx"])((function(){return[N]})),_:1}),E]),Object(c["createElementVNode"])("p",C,Object(c["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(c["createElementVNode"])("pre",null,[D,Object(c["createVNode"])(A,{class:"html"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),T,Object(c["createVNode"])(A,{class:"typescript"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),B,Object(c["createVNode"])(A,{class:"css"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.demoCodes[2]),1)]})),_:1}),_])])}var I=n("1da1"),S=(n("96cf"),n("d3b7"),n("fb6a"),n("99af"),n("55db")),z=Object(c["defineComponent"])({setup:function(){var e=[],t=Object(c["reactive"])({loading:!1,list1:[],list2:[],list3:[],list4:[],list5:[]}),n=function(t){return new Promise((function(n){setTimeout((function(){if(t>e.length)for(var c=e.length;c<t;c++)e.push({id:c,label:"row_".concat(c)});n(e.slice(0,t))}),100)}))},a=function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(a){var l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,n(a);case 3:return t.list1=e.sent,t.loading=!1,l=Date.now(),e.next=8,Object(c["nextTick"])();case 8:return e.next=10,S["a"].modal.message({content:"渲染 ".concat(a," 行，用时 ").concat(Date.now()-l,"毫秒"),status:"info"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c["onMounted"])(Object(I["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n(200);case 2:return t.list1=e.sent,e.next=5,n(200);case 5:return t.list2=e.sent,e.next=8,n(500);case 8:return t.list3=e.sent,e.next=11,n(2e3);case 11:return t.list4=e.sent,e.next=14,n(4e3);case 14:t.list5=e.sent;case 15:case"end":return e.stop()}}),e)})))),{demo1:t,loadData:a,demoCodes:['\n        <p>\n          <vxe-button @click="loadData(10)">加载10条</vxe-button>\n          <vxe-button @click="loadData(500)">加载500条</vxe-button>\n          <vxe-button @click="loadData(10000)">加载1w条</vxe-button>\n          <vxe-button @click="loadData(100000)">加载10w条</vxe-button>\n          <vxe-button @click="loadData(300000)">加载30w条</vxe-button>\n          <vxe-button @click="loadData(500000)">加载50w条</vxe-button>\n        </p>\n\n        <p>\n          <vxe-list height="240" class="my-list" :loading="demo1.loading" :data="demo1.list1">\n            <template #default="{ items }">\n              <div class="my-list-item" v-for="(item, index) in items" :key="index">{{ item.label }}</div>\n            </template>\n          </vxe-list>\n        </p>\n\n        <div class="vxe-row">\n          <div class="vxe-col--4">\n            <vxe-list class="my-list" height="200" :data="demo1.list2">\n              <template #default="{ items }">\n                <div class="my-list-item" v-for="(item, index) in items" :key="index">{{ item.label }}</div>\n              </template>\n            </vxe-list>\n          </div>\n          <div class="vxe-col--4">\n            <vxe-list class="my-list" height="200" :data="demo1.list3">\n              <template #default="{ items }">\n                <div class="my-list-item" v-for="(item, index) in items" :key="index">\n                  <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" height="28">\n                  <span>{{ item.label }}</span>\n                </div>\n              </template>\n            </vxe-list>\n          </div>\n          <div class="vxe-col--4">\n            <vxe-list class="my-ul-list" height="200" :data="demo1.list4" :scroll-y="{sItem: \'li\'}">\n              <template #default="{ items }">\n                <ul>\n                  <li v-for="(item, index) in items" :key="index">\n                    <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="28">\n                    <span>{{ item.label }}</span>\n                  </li>\n                </ul>\n              </template>\n            </vxe-list>\n          </div>\n          <div class="vxe-col--12">\n            <vxe-list class="my-table-list" height="200" :data="demo1.list5" :scroll-y="{gt: 60, sItem: \'.my-tr\'}">\n              <template #default="{ items }">\n                <table>\n                  <tbody>\n                    <tr class="my-tr" v-for="item in items" :key="item.id">\n                      <td>{{ item.label }} - 列1</td>\n                      <td>{{ item.label }} - 列2</td>\n                      <td>{{ item.label }} - 列3</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </template>\n            </vxe-list>\n          </div>\n        </div>\n        ',"\n        import { defineComponent, reactive, nextTick, onMounted } from 'vue'\n        import { VXETable } from 'vxe-table'\n\n        interface ItemVO {\n          [key: string]: any;\n        }\n\n        export default defineComponent({\n          setup () {\n            const mockList: ItemVO[] = []\n\n            const demo1 = reactive({\n              loading: false,\n              list1: [] as ItemVO[],\n              list2: [] as ItemVO[],\n              list3: [] as ItemVO[],\n              list4: [] as ItemVO[],\n              list5: [] as ItemVO[]\n            })\n\n            // 模拟后台\n            const getList = (size: number): Promise<ItemVO[]> => {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  if (size > mockList.length) {\n                    for (let index = mockList.length; index < size; index++) {\n                      mockList.push({\n                        id: index,\n                        label: `row_${index}`\n                      })\n                    }\n                  }\n                  resolve(mockList.slice(0, size))\n                }, 100)\n              })\n            }\n\n            const loadData = async (size: number) => {\n              demo1.loading = true\n              demo1.list1 = await getList(size)\n              demo1.loading = false\n              const startTime = Date.now()\n              await nextTick()\n              await VXETable.modal.message({ content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })\n            }\n\n            // 初始化\n            onMounted(async () => {\n              demo1.list1 = await getList(200)\n              demo1.list2 = await getList(200)\n              demo1.list3 = await getList(500)\n              demo1.list4 = await getList(2000)\n              demo1.list5 = await getList(4000)\n            })\n\n            return {\n              demo1,\n              loadData\n            }\n          }\n        }\n        ","\n        .my-list {\n          border: 1px solid #e8eaec;\n        }\n        .my-list .my-list-item {\n          height: 28px;\n          padding-left: 15px;\n        }\n        .my-ul-list {\n          border: 1px solid #e8eaec;\n        }\n        .my-ul-list li {\n          height: 40px;\n        }\n        .my-table-list {\n          border: 1px solid #e8eaec;\n        }\n        .my-table-list table {\n          width: 100%;\n          text-align: center;\n        }\n        .my-table-list .my-tr {\n          height: 32px;\n        }\n        .my-table-list .my-tr:hover {\n          background-color: #f5f7fa;\n        }\n        .my-table-list td {\n          border-right: 1px solid #e8eaec;\n        }\n        "]}}}),P=(n("5a29"),n("6b0d")),A=n.n(P);const F=A()(z,[["render",L],["__scopeId","data-v-7f93885a"]]);t["default"]=F},"5a29":function(e,t,n){"use strict";n("b94f")},b94f:function(e,t,n){}}]);