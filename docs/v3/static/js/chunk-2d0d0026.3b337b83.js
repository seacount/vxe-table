(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0026"],{"65c4":function(e,t,n){"use strict";n.r(t);var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("懒加载树表格、数据代理、右键菜单")]),n("vxe-grid",e._b({ref:"xGrid",on:{"menu-click":e.contextMenuClickEvent},scopedSlots:e._u([{key:"toolbar_buttons",fn:function(){return[n("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")])]},proxy:!0},{key:"name_edit",fn:function(t){var d=t.row;return[n("vxe-input",{attrs:{type:"text"},model:{value:d.name,callback:function(t){e.$set(d,"name",t)},expression:"row.name"}})]}},{key:"size_edit",fn:function(t){var d=t.row;return[n("vxe-input",{attrs:{type:"text"},model:{value:d.size,callback:function(t){e.$set(d,"size",t)},expression:"row.size"}})]}},{key:"type_edit",fn:function(t){var d=t.row;return[n("vxe-input",{attrs:{type:"text"},model:{value:d.type,callback:function(t){e.$set(d,"type",t)},expression:"row.type"}})]}}])},"vxe-grid",e.gridOptions,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},i=[],a=(n("d3b7"),n("159b"),n("caad"),n("a388")),o=n.n(a),s={data:function(){var e=1;return{gridOptions:{border:!0,showOverflow:!0,resizable:!0,keepSource:!0,toolbarConfig:{slots:{buttons:"toolbar_buttons"}},menuConfig:{body:{options:[[{code:"clearLoaded",name:"清除加载状态",disabled:!1},{code:"reloadNodes",name:"重新加载子节点",disabled:!1},{code:"expand",name:"展开节点",disabled:!1},{code:"contract",name:"收起节点",disabled:!1}]]},visibleMethod:this.visibleMethod},editConfig:{trigger:"click",mode:"row",showStatus:!0},treeConfig:{lazy:!0,children:"children",hasChild:"hasChild",loadMethod:function(t){var n=t.row;return new Promise((function(t){setTimeout((function(){e++;var d=[{id:n.id+e+1,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:n.id+e+2,name:"Test2",type:"mp4",size:null,date:"2021-04-01",hasChild:!0}];t(d)}),500)}))}},proxyConfig:{ajax:{query:function(){return new Promise((function(e){setTimeout((function(){var t=[{id:1e7,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:2e7,name:"Test2",type:"mp4",size:null,date:"2021-04-01",hasChild:!0},{id:3e7,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01",hasChild:!0},{id:4e7,name:"test abc9",type:"avi",size:224,date:"2020-10-01"}];e(t)}),500)}))}}},columns:[{field:"id",title:"ID",treeNode:!0},{field:"name",title:"名称",width:300,editRender:{},slots:{edit:"name_edit"}},{field:"size",title:"大小",width:100,editRender:{},slots:{edit:"size_edit"}},{field:"type",title:"类型",width:100,editRender:{},slots:{edit:"type_edit"}},{field:"date",title:"时间",width:200}]},demoCodes:['\n        <vxe-grid ref="xGrid" v-bind="gridOptions" @menu-click="contextMenuClickEvent">\n          <template #toolbar_buttons>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n          </template>\n\n          <template #name_edit="{ row }">\n            <vxe-input v-model="row.name" type="text"></vxe-input>\n          </template>\n          <template #size_edit="{ row }">\n            <vxe-input v-model="row.size" type="text"></vxe-input>\n          </template>\n          <template #type_edit="{ row }">\n            <vxe-input v-model="row.type" type="text"></vxe-input>\n          </template>\n        </vxe-grid>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            let dataId = 1\n            return {\n              gridOptions: {\n                border: true,\n                showOverflow: true,\n                resizable: true,\n                keepSource: true,\n                toolbarConfig: {\n                  slots: {\n                    buttons: 'toolbar_buttons'\n                  }\n                },\n                menuConfig: {\n                  body: {\n                    options: [\n                      [\n                        { code: 'clearLoaded', name: '清除加载状态', disabled: false },\n                        { code: 'reloadNodes', name: '重新加载子节点', disabled: false },\n                        { code: 'expand', name: '展开节点', disabled: false },\n                        { code: 'contract', name: '收起节点', disabled: false }\n                      ]\n                    ]\n                  },\n                  visibleMethod: this.visibleMethod\n                },\n                editConfig: {\n                  trigger: 'click',\n                  mode: 'row',\n                  showStatus: true\n                },\n                treeConfig: {\n                  lazy: true,\n                  children: 'children',\n                  hasChild: 'hasChild', // 设置是否有子节点标识\n                  loadMethod ({ row }) {\n                    // 模拟后台接口\n                    return new Promise(resolve => {\n                      setTimeout(() => {\n                        dataId++\n                        const list = [\n                          { id: row.id + dataId + 1, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                          { id: row.id + dataId + 2, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01', hasChild: true }\n                        ]\n                        resolve(list)\n                      }, 500)\n                    })\n                  }\n                },\n                proxyConfig: {\n                  ajax: {\n                    query: () => {\n                      // 模拟后台接口\n                      return new Promise(resolve => {\n                        setTimeout(() => {\n                          const list = [\n                            { id: 10000000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                            { id: 20000000, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01', hasChild: true },\n                            { id: 30000000, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01', hasChild: true },\n                            { id: 40000000, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }\n                          ]\n                          resolve(list)\n                        }, 500)\n                      })\n                    }\n                  }\n                },\n                columns: [\n                  { field: 'id', title: 'ID', treeNode: true },\n                  { field: 'name', title: '名称', width: 300, editRender: {}, slots: { edit: 'name_edit' } },\n                  { field: 'size', title: '大小', width: 100, editRender: {}, slots: { edit: 'size_edit' } },\n                  { field: 'type', title: '类型', width: 100, editRender: {}, slots: { edit: 'type_edit' } },\n                  { field: 'date', title: '时间', width: 200 }\n                ]\n              }\n            }\n          },\n          methods: {\n            getUpdateEvent () {\n              const $grid = this.$refs.xGrid\n              const updateRecords = $grid.getUpdateRecords()\n              VXETable.modal.alert(updateRecords.length)\n            },\n            visibleMethod  ({ row, type }) {\n              const $grid = this.$refs.xGrid\n              if (type === 'body') {\n                this.bodyMenus.forEach(list => {\n                  list.forEach(item => {\n                    if (['clearLoaded', 'reloadNodes'].includes(item.code)) {\n                      item.disabled = !row.hasChild || !$grid.isTreeExpandLoaded(row)\n                    } else if (['expand', 'contract'].includes(item.code)) {\n                      if (row.hasChild) {\n                        const isExpand = $grid.isTreeExpandByRow(row)\n                        item.disabled = ['expand'].includes(item.code) ? isExpand : !isExpand\n                      } else {\n                        item.disabled = true\n                      }\n                    }\n                  })\n                })\n              }\n              return true\n            },\n            contextMenuClickEvent ({ menu, row }) {\n              const $grid = this.$refs.xGrid\n              switch (menu.code) {\n                case 'clearLoaded':\n                  $grid.clearTreeExpandLoaded(row)\n                  break\n                case 'reloadNodes':\n                  $grid.reloadTreeExpand(row)\n                  break\n                case 'expand':\n                  $grid.setTreeExpand(row, true)\n                  break\n                case 'contract':\n                  $grid.setTreeExpand(row, false)\n                  break\n              }\n            }\n          }\n        }\n        "]}},methods:{getUpdateEvent:function(){var e=this.$refs.xGrid,t=e.getUpdateRecords();o.a.modal.alert(t.length)},visibleMethod:function(e){var t=e.row,n=e.type,d=this.$refs.xGrid;return"body"===n&&this.bodyMenus.forEach((function(e){e.forEach((function(e){if(["clearLoaded","reloadNodes"].includes(e.code))e.disabled=!t.hasChild||!d.isTreeExpandLoaded(t);else if(["expand","contract"].includes(e.code))if(t.hasChild){var n=d.isTreeExpandByRow(t);e.disabled=["expand"].includes(e.code)?n:!n}else e.disabled=!0}))})),!0},contextMenuClickEvent:function(e){var t=e.menu,n=e.row,d=this.$refs.xGrid;switch(t.code){case"clearLoaded":d.clearTreeExpandLoaded(n);break;case"reloadNodes":d.reloadTreeExpand(n);break;case"expand":d.setTreeExpand(n,!0);break;case"contract":d.setTreeExpand(n,!1);break}}}},r=s,l=n("2877"),c=Object(l["a"])(r,d,i,!1,null,null,null);t["default"]=c.exports}}]);