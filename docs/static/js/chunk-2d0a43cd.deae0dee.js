(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a43cd"],{"061b":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"tip"},r=Object(a["createTextVNode"])(" 空内容渲染 "),o=Object(a["createTextVNode"])("，查看 "),l=Object(a["createElementVNode"])("a",{class:"link",href:"https://github.com/x-extends/vxe-table-docs/tree/main/v4/src/plugins/table/renderer",target:"_blank"},"示例的源码",-1),d=Object(a["createElementVNode"])("span",{class:"red"},"（具体请自行实现，该示例仅供参考）",-1),b=Object(a["createElementVNode"])("br",null,null,-1),s=Object(a["createTextVNode"])(" 配置参数："),i=Object(a["createElementVNode"])("br",null,null,-1),p=Object(a["createTextVNode"])(" renderEmpty (renderOpts, params: { $table }) 空值时显示的内容"),m=Object(a["createElementVNode"])("br",null,null,-1),u={class:"demo-code"},O=Object(a["createTextVNode"])("      "),j=Object(a["createTextVNode"])("\r\n      "),x=Object(a["createTextVNode"])("\r\n      "),f=Object(a["createTextVNode"])("\r\n    ");function N(e,t,n,N,V,v){var h=Object(a["resolveComponent"])("table-api-link"),g=Object(a["resolveComponent"])("vxe-column"),C=Object(a["resolveComponent"])("vxe-table"),y=Object(a["resolveComponent"])("pre-code");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createElementVNode"])("p",c,[r,Object(a["createVNode"])(h,{prop:"empty-render"}),o,l,d,b,s,i,p,m]),Object(a["createVNode"])(C,{border:"",resizable:"",height:"400","empty-render":{name:"NotData"},data:e.tableData},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{type:"seq",width:"60"}),Object(a["createVNode"])(g,{field:"name",title:"Name"}),Object(a["createVNode"])(g,{field:"sex",title:"sex"}),Object(a["createVNode"])(g,{field:"age",title:"Age"})]})),_:1},8,["data"]),Object(a["createElementVNode"])("p",u,Object(a["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(a["createElementVNode"])("pre",null,[O,Object(a["createVNode"])(y,{class:"typescript"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),j,Object(a["createVNode"])(y,{class:"xml"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),x,Object(a["createVNode"])(y,{class:"typescript"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[2]),1)]})),_:1}),f])])}var V=Object(a["defineComponent"])({setup:function(){var e=Object(a["ref"])([]);return{tableData:e,demoCodes:["\n        import VXETable from 'vxe-table'\n\n        // 创建一个空内容渲染\n        VXETable.renderer.add('NotData', {\n          // 空内容模板\n          renderEmpty (renderOpts, params) {\n            return [\n              <span>\n                <img src=\"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif\"/>\n                <p>亲，没有更多数据了！</p>\n              </span>\n            ]\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          resizable\n          height="400"\n          :empty-render="{name: \'NotData\'}"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, ref } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const tableData = ref([])\n\n            return {\n              tableData\n            }\n          }\n        })\n        "]}}}),v=n("6b0d"),h=n.n(v);const g=h()(V,[["render",N]]);t["default"]=g}}]);