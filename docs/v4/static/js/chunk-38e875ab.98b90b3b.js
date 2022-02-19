(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38e875ab"],{1088:function(e,t,o){"use strict";o("d049")},"387b":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),a=function(e){return Object(n["pushScopeId"])("data-v-efd64680"),e=e(),Object(n["popScopeId"])(),e},r={class:"tip"},s=Object(n["createTextVNode"])(" 通过表尾来实现合计功能，设置 "),l=Object(n["createTextVNode"])(" show-footer 和 "),c=Object(n["createTextVNode"])(" 设置表尾数据，结果返回一个二维数组"),d=a((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),m=Object(n["createTextVNode"])(" 需要注意的是表尾的调用并非实时的，而是在 data 初始化时才会触发执行；如果要达到实时调用请手动调用 "),u=Object(n["createTextVNode"])(" 方法"),i=a((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),b={class:"red"},f=Object(n["createTextVNode"])("（注："),h=Object(n["createTextVNode"])(" 表尾的数据都是自行生成的，该示例仅供参考）"),x={class:"demo-code"},p=Object(n["createTextVNode"])("      "),g=Object(n["createTextVNode"])("\r\n      "),j=Object(n["createTextVNode"])("\r\n    "),O={class:"tip"},N=Object(n["createTextVNode"])("还可以配合 "),v=Object(n["createTextVNode"])(" 自定义不同列颜色"),T={class:"demo-code"},C=Object(n["createTextVNode"])("      "),V=Object(n["createTextVNode"])("\r\n      "),w=Object(n["createTextVNode"])("\r\n      "),y=Object(n["createTextVNode"])("\r\n    "),D=a((function(){return Object(n["createElementVNode"])("p",{class:"tip"},"还可以固定列",-1)})),S=Object(n["createTextVNode"])("显示/隐藏表头"),M=Object(n["createTextVNode"])("显示/隐藏表尾"),E={class:"demo-code"},k=Object(n["createTextVNode"])("      "),I=Object(n["createTextVNode"])("\r\n      "),_=Object(n["createTextVNode"])("\r\n      "),F=Object(n["createTextVNode"])("\r\n    ");function P(e,t,o,a,P,A){var $=Object(n["resolveComponent"])("table-api-link"),q=Object(n["resolveComponent"])("vxe-column"),H=Object(n["resolveComponent"])("vxe-table"),z=Object(n["resolveComponent"])("pre-code"),G=Object(n["resolveComponent"])("vxe-button"),B=Object(n["resolveComponent"])("vxe-toolbar"),J=Object(n["resolveComponent"])("vxe-colgroup");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("p",r,[s,Object(n["createVNode"])($,{prop:"show-footer"}),l,Object(n["createVNode"])($,{prop:"footer-method"}),c,d,m,Object(n["createVNode"])($,{prop:"updateFooter"}),u,i,Object(n["createElementVNode"])("span",b,[f,Object(n["createVNode"])($,{prop:"footer-method"}),h])]),Object(n["createVNode"])(H,{border:"","highlight-hover-row":"","show-footer":"",class:"mytable-footer","max-height":"400","footer-method":e.footerMethod1,data:e.demo1.tableData},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,{type:"seq",width:"60"}),Object(n["createVNode"])(q,{field:"name",title:"Name",sortable:""}),Object(n["createVNode"])(q,{field:"sex",title:"Sex"}),Object(n["createVNode"])(q,{field:"age",title:"Age"}),Object(n["createVNode"])(q,{field:"amount",title:"Amount"})]})),_:1},8,["footer-method","data"]),Object(n["createElementVNode"])("p",x,Object(n["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(n["createElementVNode"])("pre",null,[p,Object(n["createVNode"])(z,{class:"xml"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),g,Object(n["createVNode"])(z,{class:"typescript"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),j]),Object(n["createElementVNode"])("p",O,[N,Object(n["createVNode"])($,{prop:"footer-cell-class-name"}),v]),Object(n["createVNode"])(H,{border:"","show-footer":"",class:"mytable-footer",height:"400","footer-method":e.footerMethod,"footer-cell-class-name":e.footerCellClassName2,data:e.demo2.tableData},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,{type:"seq",width:"60"}),Object(n["createVNode"])(q,{field:"name",title:"Name",sortable:""}),Object(n["createVNode"])(q,{field:"sex",title:"Sex"}),Object(n["createVNode"])(q,{field:"age",title:"Age"}),Object(n["createVNode"])(q,{field:"amount",title:"Amount"})]})),_:1},8,["footer-method","footer-cell-class-name","data"]),Object(n["createElementVNode"])("p",T,Object(n["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(n["createElementVNode"])("pre",null,[C,Object(n["createVNode"])(z,{class:"xml"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[2]),1)]})),_:1}),V,Object(n["createVNode"])(z,{class:"typescript"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[3]),1)]})),_:1}),w,Object(n["createVNode"])(z,{class:"css"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[4]),1)]})),_:1}),y]),D,Object(n["createVNode"])(B,null,{buttons:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(G,{onClick:t[0]||(t[0]=function(t){return e.demo3.showHeader=!e.demo3.showHeader})},{default:Object(n["withCtx"])((function(){return[S]})),_:1}),Object(n["createVNode"])(G,{onClick:t[1]||(t[1]=function(t){return e.demo3.showFooter=!e.demo3.showFooter})},{default:Object(n["withCtx"])((function(){return[M]})),_:1})]})),_:1}),Object(n["createVNode"])(H,{border:"","show-overflow":"",class:"mytable-footer",height:"400","show-header":e.demo3.showHeader,"show-footer":e.demo3.showFooter,"footer-method":e.footerMethod,"footer-cell-class-name":e.footerCellClassName3,data:e.demo3.tableData},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,{type:"seq",width:"60",fixed:"left"}),Object(n["createVNode"])(J,{title:"基本信息"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,{field:"name",title:"Name","min-width":"600",sortable:""}),Object(n["createVNode"])(q,{field:"age",title:"Age","min-width":"600"})]})),_:1}),Object(n["createVNode"])(q,{field:"date",title:"Date","min-width":"600"}),Object(n["createVNode"])(q,{field:"amount",title:"Amount",width:"200",fixed:"right"})]})),_:1},8,["show-header","show-footer","footer-method","footer-cell-class-name","data"]),Object(n["createElementVNode"])("p",E,Object(n["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(n["createElementVNode"])("pre",null,[k,Object(n["createVNode"])(z,{class:"xml"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[5]),1)]})),_:1}),I,Object(n["createVNode"])(z,{class:"typescript"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[6]),1)]})),_:1}),_,Object(n["createVNode"])(z,{class:"typescript"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[7]),1)]})),_:1}),F])])}o("d3b7"),o("159b"),o("a9e3");var A=Object(n["defineComponent"])({setup:function(){var e=Object(n["reactive"])({tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,amount:888,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"1",age:32,amount:89,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"0",age:23,amount:1e3,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"0",age:30,amount:999,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"0",age:21,amount:998,address:"test abc"}],footerData:[["合计","2","44","67","-"]]}),t=function(){return e.footerData},o=Object(n["reactive"])({tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,amount:888,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"1",age:32,amount:89,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"0",age:23,amount:1e3,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"0",age:30,amount:999,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"0",age:21,amount:998,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"1",age:29,amount:2e3,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"1",age:35,amount:999,address:"test abc"}]}),a=function(e){var t=e.$rowIndex,o=e.columnIndex;if(0===o)return 0===t?"col-blue":"col-red"},r=Object(n["reactive"])({showHeader:!0,showFooter:!0,tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,amount:888,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"1",age:32,amount:89,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"0",age:23,amount:1e3,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"0",age:30,amount:999,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"0",age:21,amount:998,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"1",age:29,amount:2e3,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"1",age:35,amount:999,address:"test abc"}]}),s=function(e){var t=e.$rowIndex,o=e.column;return"seq"===o.type?0===t?"col-blue":"col-red":"age"===o.property&&1===t?"col-red":void 0},l=function(e,t){var o=0;return e.forEach((function(e){o+=Number(e[t])})),o/e.length},c=function(e,t){var o=0;return e.forEach((function(e){o+=Number(e[t])})),o},d=function(e){var t=e.columns,o=e.data,n=[],a=[],r=[];return t.forEach((function(e,t){if(0===t)n.push("平均"),a.push("和值"),r.push("其他");else{var s=null,d=null,m="-";switch(e.property){case"age":case"amount":s=l(o,e.property),d=c(o,e.property);break;case"sex":m="无";break}n.push(s),a.push(d),r.push(m)}})),[n,a,r]};return{demo1:e,footerMethod1:t,demo2:o,footerCellClassName2:a,demo3:r,footerCellClassName3:s,footerMethod:d,demoCodes:['\n        <vxe-table\n          border\n          highlight-hover-row\n          show-footer\n          class="mytable-footer"\n          max-height="400"\n          :footer-method="footerMethod1"\n          :data="demo1.tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="amount" title="Amount"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n        import { VxeTablePropTypes } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo1 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' }\n              ],\n              footerData: [\n                ['合计', '2', '44', '67', '-']\n              ]\n            })\n\n            const footerMethod1: VxeTablePropTypes.FooterMethod = () => {\n              // 返回一个二维数组的表尾合计\n              return demo1.footerData\n            }\n\n            return {\n              demo1,\n              footerMethod1\n            }\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          show-footer\n          class="mytable-footer"\n          height="400"\n          :footer-method="footerMethod"\n          :footer-cell-class-name="footerCellClassName2"\n          :data="demo2.tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="amount" title="Amount"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n        import { VxeTablePropTypes } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo2 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }\n              ]\n            })\n\n            const footerCellClassName2: VxeTablePropTypes.FooterCellClassName = ({ $rowIndex, columnIndex }) => {\n              if (columnIndex === 0) {\n                if ($rowIndex === 0) {\n                  return 'col-blue'\n                } else {\n                  return 'col-red'\n                }\n              }\n            }\n\n            const meanNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            }\n\n            const sumNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            }\n\n            const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {\n              const means: any[] = []\n              const sums: any[] = []\n              const others: any[] = []\n              columns.forEach((column, columnIndex) => {\n                if (columnIndex === 0) {\n                  means.push('平均')\n                  sums.push('和值')\n                  others.push('其他')\n                } else {\n                  let meanCell: any = null\n                  let sumCell: any = null\n                  let otherCell = '-'\n                  switch (column.property) {\n                    case 'age':\n                    case 'amount':\n                      meanCell = meanNum(data, column.property)\n                      sumCell = sumNum(data, column.property)\n                      break\n                    case 'sex':\n                      otherCell = '无'\n                      break\n                  }\n                  means.push(meanCell)\n                  sums.push(sumCell)\n                  others.push(otherCell)\n                }\n              })\n              // 返回一个二维数组的表尾合计\n              return [means, sums, others]\n            }\n\n            return {\n              demo2,\n              footerCellClassName2,\n              footerMethod\n            }\n          }\n        })\n        ","\n        .mytable-footer .col-blue {\n          background-color: #2db7f5;\n          color: #fff;\n        }\n        .mytable-footer .col-red {\n          background-color: red;\n          color: #fff;\n        }\n        ",'\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="demo3.showHeader = !demo3.showHeader">显示/隐藏表头</vxe-button>\n            <vxe-button @click="demo3.showFooter = !demo3.showFooter">显示/隐藏表尾</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          class="mytable-footer"\n          height="400"\n          :show-header="demo3.showHeader"\n          :show-footer="demo3.showFooter"\n          :footer-method="footerMethod"\n          :footer-cell-class-name="footerCellClassName3"\n          :data="demo3.tableData">\n          <vxe-column type="seq" width="60" fixed="left"></vxe-column>\n          <vxe-colgroup title="基本信息">\n            <vxe-column field="name" title="Name" min-width="600" sortable></vxe-column>\n            <vxe-column field="age" title="Age" min-width="600"></vxe-column>\n          </vxe-colgroup>\n          <vxe-column field="date" title="Date" min-width="600"></vxe-column>\n          <vxe-column field="amount" title="Amount" width="200" fixed="right"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n        import { VxeTablePropTypes } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo3 = reactive({\n              showHeader: true,\n              showFooter: true,\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }\n              ]\n            })\n\n            const footerCellClassName3: VxeTablePropTypes.FooterCellClassName = ({ $rowIndex, column }) => {\n              if (column.type === 'seq') {\n                if ($rowIndex === 0) {\n                  return 'col-blue'\n                } else {\n                  return 'col-red'\n                }\n              } else if (column.property === 'age') {\n                if ($rowIndex === 1) {\n                  return 'col-red'\n                }\n              }\n            }\n\n            const meanNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            }\n\n            const sumNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            }\n\n            const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {\n              const means: any[] = []\n              const sums: any[] = []\n              const others: any[] = []\n              columns.forEach((column, columnIndex) => {\n                if (columnIndex === 0) {\n                  means.push('平均')\n                  sums.push('和值')\n                  others.push('其他')\n                } else {\n                  let meanCell: any = null\n                  let sumCell: any = null\n                  let otherCell = '-'\n                  switch (column.property) {\n                    case 'age':\n                    case 'amount':\n                      meanCell = meanNum(data, column.property)\n                      sumCell = sumNum(data, column.property)\n                      break\n                    case 'sex':\n                      otherCell = '无'\n                      break\n                  }\n                  means.push(meanCell)\n                  sums.push(sumCell)\n                  others.push(otherCell)\n                }\n              })\n              // 返回一个二维数组的表尾合计\n              return [means, sums, others]\n            }\n\n            return {\n              demo3,\n              footerCellClassName3,\n              footerMethod\n            }\n          }\n        })\n        ","\n        .mytable-footer .col-blue {\n          background-color: #2db7f5;\n          color: #fff;\n        }\n        .mytable-footer .col-red {\n          background-color: red;\n          color: #fff;\n        }\n        "]}}}),$=(o("1088"),o("6b0d")),q=o.n($);const H=q()(A,[["render",P],["__scopeId","data-v-efd64680"]]);t["default"]=H},d049:function(e,t,o){}}]);