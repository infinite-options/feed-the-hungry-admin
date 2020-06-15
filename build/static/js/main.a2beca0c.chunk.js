(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),s=a.n(c),o=(a(84),a(12)),i=a(13),l=a(15),u=a(14),d=a(31),p=a(9),h=a(128),m=a(127),f=a(68),b=a(43),x=a(129),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"dark",variant:"dark",className:"d-flex p-2 bd-highlight"},r.a.createElement(h.a,null,r.a.createElement(h.a.Brand,{href:"/"},"Feed the Hungry")),r.a.createElement(m.a,{inline:!0,style:{width:"45%"}},r.a.createElement(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(b.a,{variant:"outline-light"},"Search")),r.a.createElement(x.a,{className:"mr-auto"},r.a.createElement(x.a,null,r.a.createElement(d.b,{to:"/donors",className:"nav-link"},"Donors")),r.a.createElement(x.a,null,r.a.createElement(d.b,{to:"/orders",className:"nav-link"},"Orders")),r.a.createElement(x.a,null,r.a.createElement(d.b,{to:"/inventory",className:"nav-link"},"Inventory")),r.a.createElement(x.a,null,r.a.createElement(d.b,{to:"/customers",className:"nav-link"},"Customers")))))}}]),a}(n.Component),v=Object(p.e)(g),y=a(30),O=a(7),E=a(6),j=a.n(E),_=a(8),w=a(130),k=a(125),S=a(69),D=a(131),C=a(75),N=a(51),M=a.n(N),z=a(71),A=a.n(z),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e={};switch(this.props.graph){case"bar":e={chart:{type:"column"},title:{text:this.props.title},xAxis:{categories:this.props.xaxis},yAxis:{min:0,title:{text:this.props.yaxis}},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Share",showInLegend:!1,data:this.props.data}]};break;case"pie":e={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},yAxis:{min:0,title:{text:""}},title:{text:this.props.title},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.y}"}}},series:[{name:"Share",colorByPoint:!0,data:this.props.data}]};break;case"line":e={title:{text:"Solar Employment Growth by Sector, 2010-2016"},subtitle:{text:"Source: thesolarfoundation.com"},yAxis:{title:{text:"Number of Employees"}},xAxis:{accessibility:{rangeDescription:"Range: 2010 to 2017"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:[{name:"Installation",data:[43934,52503,57177,69658,97031,119931,137133,154175]},{name:"Manufacturing",data:[24916,24064,29742,29851,32490,30282,38121,40434]},{name:"Sales & Distribution",data:[11744,17722,16005,19771,20185,24377,32147,39387]},{name:"Project Development",data:[null,null,7988,12169,15112,22452,34400,34227]},{name:"Other",data:[12908,5948,8105,11248,8989,11816,18274,18111]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}};default:e={}}return r.a.createElement("div",null,r.a.createElement(A.a,{highcharts:M.a,options:e}))}}]),a}(n.Component),T=a(38),B=a(126),L=a(47),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateSearch=function(){var e=Object(_.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState(Object(T.a)({},t.target.name,t.target.value));case 2:console.log(n.state),n.props.update(n.state);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={search_c:"",search_d:"",search_f:"",search_st:new Date("2016-01-01"),search_et:new Date},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.data),r.a.createElement(w.a,{style:{margin:"15px"}},r.a.createElement(h.a,{style:{width:"100%"}},r.a.createElement(m.a,null,r.a.createElement(k.a,null,r.a.createElement(S.a,{xs:2},r.a.createElement(m.a.Label,null,"Name"),r.a.createElement(B.a,Object(T.a)({id:"dropdown-basic-button",title:this.state.search_d||"All Banks",size:"sm",variant:"outline-secondary"},"size","md"),r.a.createElement(L.a.Item,{onClick:Object(_.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState(Object(O.a)(Object(O.a)({},e.state),{},{search_d:""}));case 2:e.props.update(e.state);case 3:case"end":return t.stop()}}),t)})))},"All"),this.props.ddlist.map((function(t){return r.a.createElement(L.a.Item,{onClick:Object(_.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState(Object(O.a)(Object(O.a)({},e.state),{},{search_d:t}));case 2:e.props.update(e.state);case 3:case"end":return a.stop()}}),a)})))},t)})))),r.a.createElement(S.a,{xs:3},r.a.createElement(m.a.Label,null,"Start Date & Time"),r.a.createElement(f.a,{type:"datetime-local",value:this.state.search_st,onChange:this.updateSearch,name:"search_st"})),r.a.createElement(S.a,{xs:3},r.a.createElement(m.a.Label,null,"End Date & Time"),r.a.createElement(f.a,{type:"datetime-local",value:this.state.search_et,onChange:this.updateSearch,name:"search_et"})),r.a.createElement(S.a,{xs:2},r.a.createElement(m.a.Label,null,"Search Category"),r.a.createElement(f.a,{type:"text",placeholder:"Filter Category",value:this.state.search_f,onChange:this.updateSearch,name:"search_f"})),r.a.createElement(S.a,{xs:2},r.a.createElement(m.a.Label,null,"Search Code"),r.a.createElement(f.a,{type:"text",placeholder:"Filter Code",value:this.state.search_c,onChange:this.updateSearch,name:"search_c"}))))))}}]),a}(n.Component),F=a(20),V=a.n(F),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(_.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.donordonationbyname();case 2:case"end":return e.stop()}}),e)}))),n.updateDate=function(){var e=Object(_.a)(j.a.mark((function e(t){var a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date(n.state.search_st),r=new Date(n.state.search_et),c=t.filter((function(e){var t=new Date(e.donation_date);return t>=a&&t<=r})),e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.donordonationbyname=Object(_.a)(j.a.mark((function e(){var t,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],r=[],e.next=5,V.a.get("".concat(n.state.base,"donordonation")).then((function(e){t=e.data.result.result,console.log(t)})).catch((function(e){return console.log(e)}));case 5:return e.next=7,n.updateDate(t);case 7:(t=e.sent).sort((function(e,t){return e.totalDonation<t.totalDonation?1:-1})),t.map((function(e){a.push(e.donor_first_name),r.push(e.totalDonation)})),n.setState(Object(O.a)(Object(O.a)({},n.state),{},{data:r,xaxis:a,yaxis:"Donation in Rupees",title:"Total Donations",graph:"bar",mode:"1",dd:"byname"}));case 11:case"end":return e.stop()}}),e)}))),n.donordonationbydate=Object(_.a)(j.a.mark((function e(){var t,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],r=[],e.next=5,V.a.get("".concat(n.state.base,"donordonation")).then((function(e){t=e.data.result.result,console.log(t)})).catch((function(e){return console.log(e)}));case 5:return e.next=7,n.updateDate(t);case 7:(t=e.sent).sort((function(e,t){return new Date(e.donation_date)>new Date(t.donation_date)?1:-1})),t.map((function(e){a.push(e.donation_date.split(" ")[0]),r.push(e.totalDonation)})),n.setState(Object(O.a)(Object(O.a)({},n.state),{},{data:r,xaxis:a,yaxis:"Donation in Rupees",title:"Total Donations",graph:"bar",mode:"1",dd:"bydate"}));case 11:case"end":return e.stop()}}),e)}))),n.foodtypes=Object(_.a)(j.a.mark((function e(){var t,a,r,c,s,o,i,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],r={},e.next=5,V.a.get("".concat(n.state.base,"foodtypes")).then((function(e){t=e.data.result.result,console.log(t)})).catch((function(e){return console.log(e)}));case 5:for(t.map((function(e){e.fl_type in r?r[e.fl_type]+=e.total:r[e.fl_type]=e.total})),c=0,s=Object.entries(r);c<s.length;c++)o=Object(y.a)(s[c],2),i=o[0],l=o[1],a.push({name:i,y:l});n.setState(Object(O.a)(Object(O.a)({},n.state),{},{data:a,title:"Total Donations by Type",xaxis:"",yaxis:"",graph:"pie",mode:"3"}));case 8:case"end":return e.stop()}}),e)}))),n.itemdonations=Object(_.a)(j.a.mark((function e(){var t,a,r,c,s,o,i,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],r={},e.next=5,V.a.get("".concat(n.state.base,"itemdonations")).then((function(e){t=e.data.result.result,console.log(t)})).catch((function(e){return console.log(e)}));case 5:for(t.map((function(e){e.fl_name in r?r[e.fl_name]+=e.TotalDonation:r[e.fl_name]=e.TotalDonation})),c=0,s=Object.entries(r);c<s.length;c++)o=Object(y.a)(s[c],2),i=o[0],l=o[1],a.push({name:i,y:l});n.setState(Object(O.a)(Object(O.a)({},n.state),{},{data:a,title:"Total Donations by Number of Items",graph:"pie",mode:"2"}));case 8:case"end":return e.stop()}}),e)}))),n.changeMode=function(){var e=Object(_.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="1"===e.t0?3:"2"===e.t0?11:"3"===e.t0?14:"11"===e.t0?17:"12"===e.t0?20:23;break;case 3:if("byname"!==a){e.next=8;break}return e.next=6,n.donordonationbyname();case 6:e.next=10;break;case 8:return e.next=10,n.donordonationbydate();case 10:return e.abrupt("break",23);case 11:return e.next=13,n.itemdonations();case 13:return e.abrupt("break",23);case 14:return e.next=16,n.foodtypes();case 16:return e.abrupt("break",23);case 17:return e.next=19,n.donordonationbyname();case 19:return e.abrupt("break",23);case 20:return e.next=22,n.donordonationbydate();case 22:return e.abrupt("break",23);case 23:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.updateSearch=function(){var e=Object(_.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState(Object(O.a)(Object(O.a)({},n.state),{},{search_c:t.search_c,search_d:t.search_d,search_f:t.search_f,search_st:t.search_st,search_et:t.search_et})),e.next=3,n.changeMode(n.state.mode,n.state.dd);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={base:"https://dc3so1gav1.execute-api.us-west-1.amazonaws.com/dev/api/v2/",data:"",search_c:"",search_d:"",search_f:"",title:"",xaxis:"",yaxis:"",graph:"",search_st:new Date("2016-01-01"),search_et:new Date,mode:"1",dd:"byname"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(w.a,{style:{backgroundColor:"rgb(226, 226, 226)",padding:"10px"}},r.a.createElement(k.a,null,r.a.createElement(S.a,{xs:"5"},r.a.createElement(D.a,{type:"radio",name:"options",defaultValue:1},r.a.createElement(C.a,{value:1,style:{fontSize:15},onClick:function(t){return e.changeMode(t.target.value)}},"Donor Donations"),r.a.createElement(C.a,{value:2,style:{fontSize:15},onClick:function(t){return e.changeMode(t.target.value)}},"Item Donations"),r.a.createElement(C.a,{value:3,style:{fontSize:15},onClick:function(t){return e.changeMode(t.target.value)}},"Food Types")))),r.a.createElement(k.a,null,r.a.createElement(q,{update:this.updateSearch})),r.a.createElement(w.a,{style:{padding:"10px"}},r.a.createElement(w.a,null,"1"===this.state.mode?r.a.createElement(k.a,null,r.a.createElement(S.a,{xs:"12"},r.a.createElement(D.a,{style:{margin:"5px"},className:"float-right",type:"radio",name:"options",defaultValue:11},r.a.createElement(C.a,{value:11,style:{fontSize:10},onClick:function(t){return e.changeMode(t.target.value)}},"By Name"),r.a.createElement(C.a,{value:12,style:{fontSize:10},onClick:function(t){return e.changeMode(t.target.value)}},"By Date")))):r.a.createElement("div",null),r.a.createElement(I,{data:this.state.data,title:this.state.title,xaxis:this.state.xaxis,yaxis:this.state.yaxis,graph:this.state.graph}))))}}]),a}(n.Component),P=a(76),W=(a(117),a(118),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"370px",width:"100%"},className:"ag-theme-balham"},r.a.createElement(P.AgGridReact,{columnDefs:this.props.columns,rowData:this.props.data,pagination:!0,suppressSizeToFit:!0,defaultColDef:{resizable:!0},paginationPageSize:10}))}}]),a}(n.Component)),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.deliveries()},n.deliveries=Object(_.a)(j.a.mark((function e(){var t,a,r,c,s,o,i,l,u,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],r=[],c={},e.next=6,V.a.get("".concat(n.state.base,"deliveries")).then((function(e){t=e.data.result.result,console.log(t)})).catch((function(e){return console.log(e)}));case 6:for(t.map((function(e){var t=new Date(e.delivery_date);console.log(t.getMonth()),t.getMonth()in c?c[t.getMonth()]+=1:c[t.getMonth()]=1})),s={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"June",7:"July",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},o=0,i=Object.entries(c);o<i.length;o++)l=Object(y.a)(i[o],2),u=l[0],d=l[1],a.push(s[u]),r.push(d);n.setState(Object(O.a)(Object(O.a)({},n.state),{},{data:r,xaxis:a,yaxis:"No of Orders",title:"Total Orders",graph:"bar"}));case 10:case"end":return e.stop()}}),e)}))),n.updateSearch=function(e){n.setState(Object(O.a)(Object(O.a)({},n.state),{},{search_c:e.search_c,search_d:e.search_d,search_f:e.search_f}))},n.state={base:"https://dc3so1gav1.execute-api.us-west-1.amazonaws.com/dev/api/v2/",data:"",search_c:"",search_d:"",search_f:"",title:"",xaxis:"",yaxis:"",graph:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{style:{backgroundColor:"rgb(226, 226, 226)",padding:"10px"}},r.a.createElement(k.a,null,r.a.createElement(q,{update:this.updateSearch})),r.a.createElement(w.a,{style:{padding:"10px"}},r.a.createElement(w.a,null,r.a.createElement(I,{data:this.state.data,title:this.state.title,xaxis:this.state.xaxis,yaxis:this.state.yaxis,graph:this.state.graph}))))}}]),a}(n.Component),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.excess()},n.updateData=function(){var e=Object(_.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.filter((function(e){return-1!==e.fb_name.indexOf(n.state.search_d)})),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.excess=Object(_.a)(j.a.mark((function e(){var t,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],e.next=4,V.a.get("".concat(n.state.base,"excess")).then((function(e){t=e.data.result.result,console.log(t)})).catch((function(e){return console.log(e)}));case 4:return e.next=6,n.updateData(t);case 6:t=e.sent,r=[],t.map((function(e){r.includes(e.fb_name)||r.push(e.fb_name),a.push({name:e.fl_name,excess:e.inv_qty-e.excess,quantity:e.inv_qty})})),c=[{field:"name",headerName:"Name",sortable:!0,unSortIcon:!0,filter:!0,width:450},{field:"excess",headerName:"Anticipated Usage",sortable:!0,unSortIcon:!0,filter:!0,width:300},{field:"quantity",headerName:"Quantity",sortable:!0,unSortIcon:!0,filter:!0,width:300}],n.setState(Object(O.a)(Object(O.a)({},n.state),{},{columns:c,data:a,mode:"1",ddlist:r}));case 11:case"end":return e.stop()}}),e)}))),n.low=Object(_.a)(j.a.mark((function e(){var t,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],e.next=4,V.a.get("".concat(n.state.base,"low")).then((function(e){t=e.data.result.result,console.log(t)})).catch((function(e){return console.log(e)}));case 4:return e.next=6,n.updateData(t);case 6:(t=e.sent).map((function(e){a.push({name:e.fl_name,excess:e.excess,quantity:e.inv_qty})})),r=[{field:"name",headerName:"Name",sortable:!0,unSortIcon:!0,filter:!0,width:450},{field:"excess",headerName:"Low",sortable:!0,unSortIcon:!0,filter:!0,width:300},{field:"quantity",headerName:"Quantity",sortable:!0,unSortIcon:!0,filter:!0,width:300}],n.setState(Object(O.a)(Object(O.a)({},n.state),{},{columns:r,data:a,mode:"2"}));case 10:case"end":return e.stop()}}),e)}))),n.zero=Object(_.a)(j.a.mark((function e(){var t,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],e.next=4,V.a.get("".concat(n.state.base,"zero")).then((function(e){t=e.data.result.result,console.log(t)})).catch((function(e){return console.log(e)}));case 4:return e.next=6,n.updateData(t);case 6:(t=e.sent).map((function(e){a.push({name:e.fl_name})})),r=[{field:"name",headerName:"Name",sortable:!0,unSortIcon:!0,filter:!0,width:1050}],n.setState(Object(O.a)(Object(O.a)({},n.state),{},{columns:r,data:a,mode:"3"}));case 10:case"end":return e.stop()}}),e)}))),n.changeMode=function(){var e=Object(_.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="1"===e.t0?3:"2"===e.t0?6:"3"===e.t0?9:12;break;case 3:return e.next=5,n.excess();case 5:return e.abrupt("break",12);case 6:return e.next=8,n.low();case 8:return e.abrupt("break",12);case 9:return e.next=11,n.zero();case 11:return e.abrupt("break",12);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.updateSearch=function(e){n.setState(Object(O.a)(Object(O.a)({},n.state),{},{search_c:e.search_c,search_d:e.search_d,search_f:e.search_f})),n.changeMode(n.state.mode)},n.state={base:"https://dc3so1gav1.execute-api.us-west-1.amazonaws.com/dev/api/v2/",columns:[],search_c:"",search_d:"",search_f:"",data:[],ddlist:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(w.a,{style:{backgroundColor:"rgb(226, 226, 226)",padding:"10px"}},r.a.createElement(k.a,null,r.a.createElement(S.a,{xs:"5"},r.a.createElement(D.a,{type:"radio",name:"options",defaultValue:1},r.a.createElement(C.a,{value:1,style:{fontSize:15},onClick:function(t){return e.changeMode(t.target.value)}},"Excess"),r.a.createElement(C.a,{value:2,style:{fontSize:15},onClick:function(t){return e.changeMode(t.target.value)}},"Low"),r.a.createElement(C.a,{value:3,style:{fontSize:15},onClick:function(t){return e.changeMode(t.target.value)}},"Zero")))),r.a.createElement(k.a,null,r.a.createElement(q,{update:this.updateSearch,ddlist:this.state.ddlist})),r.a.createElement(w.a,{style:{padding:"10px"}},r.a.createElement(w.a,null,r.a.createElement(W,{columns:this.state.columns,data:this.state.data}))))}}]),a}(n.Component),Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.customervalue()},n.customervalue=Object(_.a)(j.a.mark((function e(){var t,a,r,c,s,o,i,l,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],r=[],c={},e.next=6,V.a.get("".concat(n.state.base,"customervalue")).then((function(e){t=e.data.result.result,console.log(t)})).catch((function(e){return console.log(e)}));case 6:for(t.map((function(e){e.ctm_id in c?c[e.ctm_id]+=e.Total_Value:c[e.ctm_id]=e.Total_Value})),s=0,o=Object.entries(c);s<o.length;s++)i=Object(y.a)(o[s],2),l=i[0],u=i[1],a.push(l),r.push(u);n.setState(Object(O.a)(Object(O.a)({},n.state),{},{data:r,xaxis:a,yaxis:"Value",title:"Total Orders",graph:"bar"}));case 9:case"end":return e.stop()}}),e)}))),n.updateSearch=function(e){n.setState(Object(O.a)(Object(O.a)({},n.state),{},{search_c:e.search_c,search_d:e.search_d,search_f:e.search_f}))},n.state={base:"https://dc3so1gav1.execute-api.us-west-1.amazonaws.com/dev/api/v2/",data:"",search_c:"",search_d:"",search_f:"",title:"",xaxis:"",yaxis:"",graph:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{style:{backgroundColor:"rgb(226, 226, 226)",padding:"10px"}},r.a.createElement(w.a,{style:{padding:"10px"}},r.a.createElement(w.a,null,r.a.createElement(I,{data:this.state.data,title:this.state.title,xaxis:this.state.xaxis,yaxis:this.state.yaxis,graph:this.state.graph}))))}}]),a}(n.Component),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{exact:!0,path:"/",component:J}),r.a.createElement(p.a,{exact:!0,path:"/donors",component:J}),r.a.createElement(p.a,{exact:!0,path:"/orders",component:R}),r.a.createElement(p.a,{exact:!0,path:"/inventory",component:G}),r.a.createElement(p.a,{exact:!0,path:"/customers",component:Q}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(119);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(120)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.a2beca0c.chunk.js.map