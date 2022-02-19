(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225b8b"],{e637:function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("p",{staticClass:"tip"},[e._v(" 行的动态样色、单元格动态样式，表头的动态样式、表尾的动态样式、全部都可以完全自定义，通过设置 "),l("table-api-link",{attrs:{prop:"cell-style"}}),e._v("、"),l("table-api-link",{attrs:{prop:"header-cell-style"}}),e._v("、"),l("table-api-link",{attrs:{prop:"row-style"}}),e._v(" ...等参数"),l("br"),l("span",{staticClass:"red"},[e._v("（注：当自定义样式之后可能会覆盖表格的样式，比如选中行..等，记得自行处理好相关样式）")])],1),l("vxe-table",{attrs:{border:"","header-cell-style":e.headerCellStyle,"row-style":e.rowStyle,"cell-style":e.cellStyle,data:e.tableData}},[l("vxe-table-column",{attrs:{type:"seq",width:"60"}}),l("vxe-table-column",{attrs:{field:"name",title:"Name"}}),l("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),l("vxe-table-column",{attrs:{field:"age",title:"Age"}}),l("vxe-table-column",{attrs:{field:"attr1",title:"Attr1"}}),l("vxe-table-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),l("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),l("pre",[e._v("    "),l("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),l("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),l("code",{staticClass:"scss"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")])],1)},a=[],o=(l("d3b7"),l("159b"),l("a630"),l("3ca3"),l("caad"),l("1487")),r=l.n(o),s={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women ",age:24,address:"Shanghai"}],demoCodes:['\n        <vxe-table\n          border\n          :header-cell-style="headerCellStyle"\n          :row-style="rowStyle"\n          :cell-style="cellStyle"\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="attr1" title="Attr1"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }\n              ]\n            }\n          },\n          methods: {\n            headerCellStyle ({ column, columnIndex }) {\n              if (column.property === 'name') {\n                return {\n                  backgroundColor: '#f60',\n                  color: '#ffffff'\n                }\n              }\n            },\n            rowStyle ({ row, rowIndex }) {\n              if ([2, 3, 5].includes(rowIndex)) {\n                return {\n                  backgroundColor: 'red',\n                  color: '#ffffff'\n                }\n              }\n            },\n            cellStyle ({ row, rowIndex, column, columnIndex }) {\n              if (column.property === 'sex') {\n                if (row.sex >= '1') {\n                  return {\n                    backgroundColor: '#187'\n                  }\n                } else if (row.age === 26) {\n                  return {\n                    backgroundColor: '#2db7f5'\n                  }\n                }\n              }\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){r.a.highlightBlock(e)}))},methods:{headerCellStyle:function(e){var t=e.column;if("name"===t.property)return{backgroundColor:"#f60",color:"#ffffff"}},rowStyle:function(e){var t=e.rowIndex;if([2,3,5].includes(t))return{backgroundColor:"red",color:"#ffffff"}},cellStyle:function(e){var t=e.row,l=e.column;if("sex"===l.property){if(t.sex>="1")return{backgroundColor:"#187"};if(26===t.age)return{backgroundColor:"#2db7f5"}}}}},d=s,c=l("2877"),i=Object(c["a"])(d,n,a,!1,null,null,null);t["default"]=i.exports}}]);