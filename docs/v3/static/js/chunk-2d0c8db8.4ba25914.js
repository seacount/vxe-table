(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8db8"],{5755:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-input",{attrs:{type:"search",placeholder:"试试全表搜索"},on:{keyup:e.searchEvent1},model:{value:e.filterName1,callback:function(t){e.filterName1=t},expression:"filterName1"}})]},proxy:!0}])}),n("vxe-table",{attrs:{border:"",height:"300",data:e.list1},scopedSlots:e._u([{key:"empty",fn:function(){return[n("span",{staticStyle:{color:"red"}},[n("img",{attrs:{src:"https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif"}}),n("p",[e._v("没有更多数据了！")])])]},proxy:!0}])},[n("vxe-column",{attrs:{type:"seq",width:"80"}}),n("vxe-column",{attrs:{field:"name",title:"Name",type:"html"}}),n("vxe-column",{attrs:{field:"role",title:"Role",type:"html"}}),n("vxe-column",{attrs:{field:"age",title:"Age",type:"html"}}),n("vxe-column",{attrs:{field:"address",title:"Address",type:"html"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("pre-code",{staticClass:"scss"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1),e._m(1),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-input",{attrs:{type:"search",placeholder:"试试全表搜索"},on:{keyup:e.searchEvent2},model:{value:e.filterName2,callback:function(t){e.filterName2=t},expression:"filterName2"}})]},proxy:!0}])}),n("vxe-table",{ref:"xTree",attrs:{"max-height":"400","tree-config":{},data:e.list2},scopedSlots:e._u([{key:"empty",fn:function(){return[n("span",{staticStyle:{color:"red"}},[n("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"}}),n("p",[e._v("搜索不到数据，可能输入的关键字姿势不对！")])])]},proxy:!0}])},[n("vxe-column",{attrs:{type:"seq",width:"220",title:"序号","tree-node":""}}),n("vxe-column",{attrs:{field:"name",title:"Name",type:"html"}}),n("vxe-column",{attrs:{field:"size",title:"Size",type:"html"}}),n("vxe-column",{attrs:{field:"type",title:"Type",type:"html"}}),n("vxe-column",{attrs:{field:"date",title:"Date",type:"html"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),n("pre-code",{staticClass:"scss"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")],1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v("表格搜索功能，非常简单就可以实现表格内容搜索"),n("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v("树表格搜索功能，非常简单就可以实现树表格内容搜索"),n("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")])])}],i=(n("498a"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("4de4"),n("d3b7"),n("d81d"),n("5319"),n("c695")),l=n.n(i),r={data:function(){return{list1:[],filterName1:"",tableData1:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,amount:888,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"1",age:32,amount:89,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"0",age:23,amount:1e3,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"0",age:30,amount:999,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"0",age:21,amount:998,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"1",age:29,amount:2e3,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"1",age:35,amount:999,address:"test abc"},{id:10009,name:"Test9",role:"Test",sex:"1",age:26,amount:2e3,address:"test abc"},{id:100010,name:"Test10",role:"Develop",sex:"1",age:21,amount:666,address:"test abc"}],list2:[],filterName2:"",tableData2:[{id:1e3,name:"Test1",type:"mp3",size:1024,date:"2020-08-01"},{id:1005,name:"Test2",type:"mp4",size:null,date:"2021-04-01",children:[{id:24300,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,name:"Test4",type:"html",size:600,date:"2021-04-01"},{id:10053,name:"Test96",type:"avi",size:null,date:"2021-04-01",children:[{id:24330,name:"Test5",type:"txt",size:25,date:"2021-10-01"},{id:21011,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,name:"Test7",type:"js",size:1024,date:"2021-06-01"}]}]},{id:23666,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:24555,name:"Test9",type:"avi",size:224,date:"2020-10-01"}],demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-input v-model="filterName1" type="search" placeholder="试试全表搜索" @keyup="searchEvent1"></vxe-input>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          height="300"\n          :data="list1">\n          <vxe-column type="seq" width="80"></vxe-column>\n          <vxe-column field="name" title="Name" type="html"></vxe-column>\n          <vxe-column field="role" title="Role" type="html"></vxe-column>\n          <vxe-column field="age" title="Age" type="html"></vxe-column>\n          <vxe-column field="address" title="Address" type="html"></vxe-column>\n          <template #empty>\n            <span style="color: red;">\n              <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">\n              <p>没有更多数据了！</p>\n            </span>\n          </template>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n\n        export default {\n          data () {\n            return {\n              list1: [],\n              filterName: '',\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },\n                { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },\n                { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }\n              ]\n            }\n          },\n          created () {\n            this.searchEvent1()\n          },\n          methods: {\n            searchEvent1 () {\n              const filterName = XEUtils.toValueString(this.filterName1).trim().toLowerCase()\n              if (filterName) {\n                const filterRE = new RegExp(filterName, 'gi')\n                const searchProps = ['name', 'role', 'age', 'address']\n                const rest = this.tableData1.filter(item => searchProps.some(key => XEUtils.toValueString(item[key]).toLowerCase().indexOf(filterName) > -1))\n                this.list1 = rest.map(row => {\n                  const item = Object.assign({}, row)\n                  searchProps.forEach(key => {\n                    item[key] = XEUtils.toValueString(item[key]).replace(filterRE, match => `<span class=\"keyword-lighten\">${match}</span>`)\n                  })\n                  return item\n                })\n              } else {\n                this.list1 = this.tableData1\n              }\n            }\n          }\n        }\n        ","\n        .keyword-lighten {\n          color: #000;\n          background-color: #FFFF00;\n        }\n        ",'\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-input v-model="filterName2" type="search" placeholder="试试全表搜索" @keyup="searchEvent2"></vxe-input>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          ref="xTree"\n          max-height="400"\n          :tree-config="{}"\n          :data="list2">\n          <vxe-column type="seq" width="220" title="序号" tree-node></vxe-column>\n          <vxe-column field="name" title="Name" type="html"></vxe-column>\n          <vxe-column field="size" title="Size" type="html"></vxe-column>\n          <vxe-column field="type" title="Type" type="html"></vxe-column>\n          <vxe-column field="date" title="Date" type="html"></vxe-column>\n          <template #empty>\n            <span style="color: red;">\n              <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">\n              <p>搜索不到数据，可能输入的关键字姿势不对！</p>\n            </span>\n          </template>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {\n              list2: [],\n              filterName: '',\n              tableData: [\n                { id: 1000, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                {\n                  id: 1005,\n                  name: 'Test2',\n                  type: 'mp4',\n                  size: null,\n                  date: '2021-04-01',\n                  children: [\n                    { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                    { id: 20045, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },\n                    {\n                      id: 10053,\n                      name: 'Test96',\n                      type: 'avi',\n                      size: null,\n                      date: '2021-04-01',\n                      children: [\n                        { id: 24330, name: 'Test5', type: 'txt', size: 25, date: '2021-10-01' },\n                        { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                        { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n                      ]\n                    }\n                  ]\n                },\n                { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 24555, name: 'Test9', type: 'avi', size: 224, date: '2020-10-01' }\n              ]\n            }\n          },\n          created () {\n            this.searchEvent2()\n          },\n          methods: {\n            searchEvent2 () {\n              const filterName = XEUtils.toValueString(this.filterName2).trim().toLowerCase()\n              if (filterName) {\n                const filterRE = new RegExp(filterName, 'gi')\n                const options = { children: 'children' }\n                const searchProps = ['name', 'size', 'type', 'date']\n                const rest = XEUtils.searchTree(this.tableData2, item => searchProps.some(key => XEUtils.toValueString(item[key]).toLowerCase().indexOf(filterName) > -1), options)\n                XEUtils.eachTree(rest, item => {\n                  searchProps.forEach(key => {\n                    item[key] = XEUtils.toValueString(item[key]).replace(filterRE, match => `<span class=\"keyword-lighten\">${match}</span>`)\n                  })\n                }, options)\n                this.list2 = rest\n                // 搜索之后默认展开所有子节点\n                this.$nextTick(() => {\n                  this.$refs.xTree.setAllTreeExpand(true)\n                })\n              } else {\n                this.list2 = this.tableData2\n              }\n            }\n          }\n        }\n        ","\n        .keyword-lighten {\n          color: #000;\n          background-color: #FFFF00;\n        }\n        "]}},created:function(){this.searchEvent1(),this.searchEvent2()},methods:{searchEvent1:function(){var e=l.a.toValueString(this.filterName1).trim().toLowerCase();if(e){var t=new RegExp(e,"gi"),n=["name","role","age","address"],a=this.tableData1.filter((function(t){return n.some((function(n){return l.a.toValueString(t[n]).toLowerCase().indexOf(e)>-1}))}));this.list1=a.map((function(e){var a=Object.assign({},e);return n.forEach((function(e){a[e]=l.a.toValueString(a[e]).replace(t,(function(e){return'<span class="keyword-lighten">'.concat(e,"</span>")}))})),a}))}else this.list1=this.tableData1},searchEvent2:function(){var e=this,t=l.a.toValueString(this.filterName2).trim().toLowerCase();if(t){var n=new RegExp(t,"gi"),a={children:"children"},s=["name","size","type","date"],i=l.a.searchTree(this.tableData2,(function(e){return s.some((function(n){return l.a.toValueString(e[n]).toLowerCase().indexOf(t)>-1}))}),a);l.a.eachTree(i,(function(e){s.forEach((function(t){e[t]=l.a.toValueString(e[t]).replace(n,(function(e){return'<span class="keyword-lighten">'.concat(e,"</span>")}))}))}),a),this.list2=i,this.$nextTick((function(){e.$refs.xTree.setAllTreeExpand(!0)}))}else this.list2=this.tableData2}}},o=r,d=n("2877"),m=Object(d["a"])(o,a,s,!1,null,null,null);t["default"]=m.exports}}]);