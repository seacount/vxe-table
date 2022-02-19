(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213ce8"],{adf5:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"tip"},a=Object(r["createTextVNode"])(" 表单-项渲染 "),d=Object(r["createTextVNode"])("，查看 "),l=Object(r["createElementVNode"])("a",{class:"link",href:"https://github.com/x-extends/vxe-table-docs/tree/main/v4/src/plugins/table/renderer",target:"_blank"},"示例的源码",-1),s=Object(r["createElementVNode"])("span",{class:"red"},"（具体请自行实现，该示例仅供参考）",-1),c=Object(r["createElementVNode"])("br",null,null,-1),i=Object(r["createTextVNode"])(" 配置参数："),m=Object(r["createElementVNode"])("br",null,null,-1),b=Object(r["createTextVNode"])(" renderItemTitle (renderOpts: any, params: { data, item, property, $form }) 表单项标题"),p=Object(r["createElementVNode"])("br",null,null,-1),u=Object(r["createTextVNode"])(" renderItemContent (renderOpts: any, params: { data, item, property, $form }) 表单项内容"),x=Object(r["createElementVNode"])("br",null,null,-1),f=Object(r["createTextVNode"])(" itemVisibleMethod (params: { data, property }) 表单项可视函数"),g=Object(r["createElementVNode"])("br",null,null,-1),h=Object(r["createTextVNode"])(" itemResetMethod (params: { data, property }) 表单项重置函数"),O=Object(r["createElementVNode"])("br",null,null,-1),j={class:"demo-code"},T=Object(r["createTextVNode"])("      "),V=Object(r["createTextVNode"])("\r\n      "),v=Object(r["createTextVNode"])("\r\n      "),N=Object(r["createTextVNode"])("\r\n    ");function y(e,t,n,y,C,S){var w=Object(r["resolveComponent"])("grid-api-link"),z=Object(r["resolveComponent"])("vxe-button"),D=Object(r["resolveComponent"])("vxe-grid"),E=Object(r["resolveComponent"])("pre-code");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("p",o,[a,Object(r["createVNode"])(w,{prop:"itemRender"}),d,l,s,c,i,m,b,p,u,x,f,g,h,O]),Object(r["createVNode"])(D,{border:"",resizable:"",height:"400","export-config":{},"toolbar-config":{export:!0,custom:!0},"form-config":e.demo1.tableForm,"proxy-config":e.demo1.tableProxy,columns:e.demo1.tableColumn},{btns:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(z,{type:"submit",content:"查询"}),Object(r["createVNode"])(z,{type:"reset",content:"重置"})]})),_:1},8,["form-config","proxy-config","columns"]),Object(r["createElementVNode"])("p",j,Object(r["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(r["createElementVNode"])("pre",null,[T,Object(r["createVNode"])(E,{class:"typescript"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),V,Object(r["createVNode"])(E,{class:"xml"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),v,Object(r["createVNode"])(E,{class:"typescript"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.demoCodes[2]),1)]})),_:1}),N])])}n("d3b7");var C=Object(r["defineComponent"])({setup:function(){var e=function(){return new Promise((function(e){setTimeout((function(){var t=[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"Shenzhen"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"}];e(t)}),200)}))},t=Object(r["reactive"])({tableColumn:[{type:"seq",width:50},{field:"name",title:"Name"},{field:"age",title:"Age"},{field:"sex",title:"Sex"},{field:"role",title:"Role"}],tableForm:{items:[{field:"name",title:"名称",itemRender:{name:"FormItemInput",props:{clearable:!0,placeholder:"请输入名称"}}},{field:"age",title:"年龄",itemRender:{name:"FormItemInput",props:{type:"number",clearable:!0,placeholder:"请输入年龄"}}},{slots:{default:"btns"}}]},tableProxy:{form:!0,ajax:{query:function(){return e()}}}});return{demo1:t,demoCodes:["\n        import VXETable from 'vxe-table'\n\n        // 创建一个简单的表单-输入框渲染\n        VXETable.renderer.add('FormItemInput', {\n          // 项显示模板\n          renderItemContent (renderOpts, params) {\n            const { data, property } = params\n            return [\n              <input v-model={ data[property] } text=\"text\"></input>\n            ]\n          }\n        })\n        ",'\n        <vxe-grid\n          border\n          resizable\n          height="400"\n          :export-config="{}"\n          :toolbar-config="{export: true, custom: true}"\n          :form-config="demo1.tableForm"\n          :proxy-config="demo1.tableProxy"\n          :columns="demo1.tableColumn">\n          <template #btns>\n            <vxe-button type="submit" content="查询"></vxe-button>\n            <vxe-button type="reset" content="重置"></vxe-button>\n          </template>\n        </vxe-grid>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const findList = () => {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  const rest = [\n                    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },\n                    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },\n                    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }\n                  ]\n                  resolve(rest)\n                }, 200)\n              })\n            }\n            const demo1 = reactive({\n              tableColumn: [\n                { type: 'seq', width: 50 },\n                { field: 'name', title: 'Name' },\n                { field: 'age', title: 'Age' },\n                { field: 'sex', title: 'Sex' },\n                { field: 'role', title: 'Role' }\n              ],\n              tableForm: {\n                items: [\n                  { field: 'name', title: '名称', itemRender: { name: 'FormItemInput', props: { clearable: true, placeholder: '请输入名称' } } },\n                  { field: 'age', title: '年龄', itemRender: { name: 'FormItemInput', props: { type: 'number', clearable: true, placeholder: '请输入年龄' } } },\n                  { slots: { default: 'btns' } }\n                ]\n              },\n              tableProxy: {\n                form: true,\n                ajax: {\n                  query: () => findList()\n                }\n              }\n            })\n            return {\n              demo1\n            }\n          }\n        })\n        "]}}}),S=n("6b0d"),w=n.n(S);const z=w()(C,[["render",y]]);t["default"]=z}}]);