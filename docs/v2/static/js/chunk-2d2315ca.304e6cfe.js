(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2315ca"],{efe8:function(e,n,a){"use strict";a.r(n);var d=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("p",{staticClass:"tip"},[e._v(" 树表格的懒加载和右键菜单，通过调用 "),a("table-api-link",{attrs:{prop:"clearTreeExpandLoaded"}}),e._v(" 方法清除加载完成状态，通过调用 "),a("table-api-link",{attrs:{prop:"reloadTreeChilds"}}),e._v(" 方法重新加载子节点 ")],1),a("vxe-table",{ref:"xTree",attrs:{border:"",resizable:"","row-id":"id",loading:e.loading,"menu-config":{body:{options:e.bodyMenus},visibleMethod:e.visibleMethod},"tree-config":{lazy:!0,children:"children",hasChild:"hasChild",loadMethod:e.loadChildrenMethod},data:e.tableData},on:{"menu-click":e.contextMenuClickEvent}},[a("vxe-table-column",{attrs:{field:"name",title:"Name",width:"400","tree-node":""}}),a("vxe-table-column",{attrs:{field:"size",title:"Size"}}),a("vxe-table-column",{attrs:{field:"type",title:"Type"}}),a("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},t=[],l=(a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("caad"),a("628a")),i=a.n(l),o=a("1487"),r=a.n(o),s={data:function(){return{loading:!1,tableData:[],bodyMenus:[[{code:"clearLoaded",name:"清除加载状态",disabled:!1},{code:"reloadNodes",name:"重新加载子节点",disabled:!1},{code:"expand",name:"展开节点",disabled:!1},{code:"contract",name:"收起节点",disabled:!1}]],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          ref="xTree"\n          row-id="id"\n          :loading="loading"\n          :menu-config="{body: {options: bodyMenus}, visibleMethod}"\n          :tree-config="{lazy: true, children: \'children\', hasChild: \'hasChild\', loadMethod: loadChildrenMethod}"\n          :data="tableData"\n          @menu-click="contextMenuClickEvent">\n          <vxe-table-column field="name" title="Name" width="400" tree-node></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              bodyMenus: [\n                [\n                  {\n                    code: 'clearLoaded',\n                    name: '清除加载状态',\n                    disabled: false\n                  },\n                  {\n                    code: 'reloadNodes',\n                    name: '重新加载子节点',\n                    disabled: false\n                  },\n                  {\n                    code: 'expand',\n                    name: '展开节点',\n                    disabled: false\n                  },\n                  {\n                    code: 'contract',\n                    name: '收起节点',\n                    disabled: false\n                  }\n                ]\n              ]\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              XEAjax.get('/api/file/node/list', { parentId: null }).then(data => {\n                this.tableData = data\n                this.loading = false\n              })\n            },\n            loadChildrenMethod ({ row }) {\n              // 异步加载子节点\n              return XEAjax.get('/api/file/node/list', { parentId: row.id })\n            },\n            visibleMethod  ({ row, type }) {\n              let xTree = this.$refs.xTree\n              if (type === 'body') {\n                this.bodyMenus.forEach(list => {\n                  list.forEach(item => {\n                    if (['clearLoaded', 'reloadNodes'].includes(item.code)) {\n                      item.disabled = !row.hasChild || !xTree.isTreeExpandLoaded(row)\n                    } else if (['expand', 'contract'].includes(item.code)) {\n                      if (row.hasChild) {\n                        let isExpand = xTree.isTreeExpandByRow(row)\n                        item.disabled = ['expand'].includes(item.code) ? isExpand : !isExpand\n                      } else {\n                        item.disabled = true\n                      }\n                    }\n                  })\n                })\n              }\n              return true\n            },\n            contextMenuClickEvent ({ menu, row, column }) {\n              let xTree = this.$refs.xTree\n              switch (menu.code) {\n                case 'clearLoaded':\n                  xTree.clearTreeExpandLoaded(row)\n                  break\n                case 'reloadNodes':\n                  xTree.reloadTreeChilds(row)\n                  break\n                case 'expand':\n                  xTree.setTreeExpand(row, true)\n                  break\n                case 'contract':\n                  xTree.setTreeExpand(row, false)\n                  break\n              }\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){r.a.highlightBlock(e)}))},methods:{findList:function(){var e=this;this.loading=!0,i.a.get("/api/file/node/list",{parentId:null}).then((function(n){e.tableData=n,e.loading=!1}))},loadChildrenMethod:function(e){var n=e.row;return i.a.get("/api/file/node/list",{parentId:n.id})},visibleMethod:function(e){var n=e.row,a=e.type,d=this.$refs.xTree;return"body"===a&&this.bodyMenus.forEach((function(e){e.forEach((function(e){if(["clearLoaded","reloadNodes"].includes(e.code))e.disabled=!n.hasChild||!d.isTreeExpandLoaded(n);else if(["expand","contract"].includes(e.code))if(n.hasChild){var a=d.isTreeExpandByRow(n);e.disabled=["expand"].includes(e.code)?a:!a}else e.disabled=!0}))})),!0},contextMenuClickEvent:function(e){var n=e.menu,a=e.row,d=this.$refs.xTree;switch(n.code){case"clearLoaded":d.clearTreeExpandLoaded(a);break;case"reloadNodes":d.reloadTreeChilds(a);break;case"expand":d.setTreeExpand(a,!0);break;case"contract":d.setTreeExpand(a,!1);break}}}},c=s,u=a("2877"),h=Object(u["a"])(c,d,t,!1,null,null,null);n["default"]=h.exports}}]);