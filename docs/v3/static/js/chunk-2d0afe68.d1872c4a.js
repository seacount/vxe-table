(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afe68"],{"0ffb":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("表单，可以通过设置 "),n("grid-api-link",{attrs:{prop:"form-config"}}),e._v("={data, items} 渲染表单")],1),n("vxe-grid",e._b({on:{"form-submit":e.findList},scopedSlots:e._u([{key:"name_item",fn:function(t){var a=t.data;return[n("vxe-input",{attrs:{type:"text",placeholder:"请输入名称"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"data.name"}})]}},{key:"sex_item",fn:function(t){var a=t.data;return[n("vxe-select",{attrs:{transfer:""},model:{value:a.sex,callback:function(t){e.$set(a,"sex",t)},expression:"data.sex"}},e._l(e.sexList1,(function(e){return n("vxe-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)]}},{key:"operate_item",fn:function(){return[n("vxe-button",{attrs:{type:"submit",status:"primary",content:"查询"}}),n("vxe-button",{attrs:{type:"reset",content:"重置"}})]},proxy:!0}])},"vxe-grid",e.gridOptions,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},i=[],s={data:function(){return{gridOptions:{resizable:!0,border:!0,showOverflow:!0,loading:!1,height:400,exportConfig:{},formConfig:{data:{name:"",sex:""},items:[{field:"name",title:"Name",slots:{default:"name_item"}},{field:"sex",title:"性别",titlePrefix:{message:"帮助信息！！！",icon:"fa fa-info-circle"},slots:{default:"sex_item"}},{slots:{default:"operate_item"}}]},toolbarConfig:{export:!0,custom:!0},columns:[{type:"seq",width:60},{type:"checkbox",width:60},{field:"name",title:"Name"},{field:"nickname",title:"Nickname"},{field:"age",title:"Age"},{field:"sex",title:"Sex"},{field:"address",title:"Address",showOverflow:!0}],data:[]},sexList1:[{value:"1",label:"男"},{value:"0",label:"女"}],demoCodes:['\n        <vxe-grid v-bind="gridOptions" @form-submit="findList">\n          <template #name_item="{ data }">\n            <vxe-input v-model="data.name" type="text" placeholder="请输入名称"></vxe-input>\n          </template>\n          <template #sex_item="{ data }">\n            <vxe-select v-model="data.sex" transfer>\n              <vxe-option v-for="item in sexList1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>\n            </vxe-select>\n          </template>\n          <template #operate_item>\n            <vxe-button type="submit" status="primary" content="查询"></vxe-button>\n            <vxe-button type="reset" content="重置"></vxe-button>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions: {\n                resizable: true,\n                border: true,\n                showOverflow: true,\n                loading: false,\n                height: 400,\n                exportConfig: {},\n                formConfig: {\n                  data: {\n                    name: '',\n                    sex: ''\n                  },\n                  items: [\n                    { field: 'name', title: 'Name', slots: { default: 'name_item' } },\n                    { field: 'sex', title: '性别', titlePrefix: { message: '帮助信息！！！', icon: 'fa fa-info-circle' }, slots: { default: 'sex_item' } },\n                    { slots: { default: 'operate_item' } }\n                  ]\n                },\n                toolbarConfig: {\n                  export: true,\n                  custom: true\n                },\n                columns: [\n                  { type: 'seq', width: 60 },\n                  { type: 'checkbox', width: 60 },\n                  { field: 'name', title: 'Name' },\n                  { field: 'nickname', title: 'Nickname' },\n                  { field: 'age', title: 'Age' },\n                  { field: 'sex', title: 'Sex' },\n                  { field: 'address', title: 'Address', showOverflow: true }\n                ],\n                data: []\n              },\n              sexList1: [\n                { value: '1', label: '男' },\n                { value: '0', label: '女' }\n              ]\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              const { gridOptions } = this\n              gridOptions.loading = true\n              setTimeout(() => {\n                gridOptions.data = [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' }\n                ]\n                gridOptions.loading = false\n              }, 500)\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},methods:{findList:function(){var e=this.gridOptions;e.loading=!0,setTimeout((function(){e.data=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"1",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"0",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"1",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",age:30,address:"Shanghai"}],e.loading=!1}),500)}}},o=s,l=n("2877"),d=Object(l["a"])(o,a,i,!1,null,null,null);t["default"]=d.exports}}]);