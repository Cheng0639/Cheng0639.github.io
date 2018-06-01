webpackJsonp([1],{"6Q6a":function(e,t){},"8AJG":function(e,t){},GfR7:function(e,t){},K44X:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Employee Manager")])],1)])},staticRenderFns:[]},i={name:"App",components:{Navbar:o("VU/8")(null,a,!1,null,null,null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("navbar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=o("VU/8")(i,l,!1,function(e){o("GfR7")},null,null).exports,p=o("/ocq"),r=o("kxiW"),m=o.n(r),d=(o("881v"),m.a.initializeApp({apiKey:"AIzaSyAUa1ps8oVy90tL11l5Vui8nxgTUdLqYok",authDomain:"vuefs-prod-d2024.firebaseapp.com",databaseURL:"https://vuefs-prod-d2024.firebaseio.com",projectId:"vuefs-prod-d2024",storageBucket:"vuefs-prod-d2024.appspot.com",messagingSenderId:"690273894665"}).firestore());d.settings({timestampsInSnapshots:!0});var c=d,u={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;c.collection("employee").orderBy("dept").get().then(function(t){t.forEach(function(t){var o=t.data(),n={id:t.id,employee_id:o.employee_id,name:o.name,dept:o.dept,position:o.position};e.employees.push(n)})})}},y={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"dashboard"}},[o("h3",[e._v("Dashboard")]),e._v(" "),o("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return o("li",{key:t.id,staticClass:"collection-item"},[o("div",{staticClass:"chip"},[e._v("\n          "+e._s(t.dept)+"\n        ")]),e._v("\n          "+e._s(t.employee_id)+" : "+e._s(t.name)+"              \n          "),o("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[o("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),o("div",{staticClass:"fixed-action-btn"},[o("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[o("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection header"},[t("h4",[this._v("Employees")])])}]};var v=o("VU/8")(u,y,!1,function(e){o("8AJG")},"data-v-465d3fe4",null).exports,f={name:"new-employee",data:function(){return{newEmployee:{employee_id:null,name:null,dept:null,position:null}}},methods:{saveEmployee:function(){var e=this;c.collection("employee").add(this.newEmployee).then(function(t){console.log(t),console.log(e.newEmployee),e.$router.push("/"+e.newEmployee.employee_id)}).catch(function(e){console.log(e)})}}},_={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"new-employee"}},[o("h3",[e._v("New Employee")]),e._v(" "),o("div",{staticClass:"row"},[o("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.newEmployee.employee_id,expression:"newEmployee.employee_id",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:e.newEmployee.employee_id},on:{change:function(t){e.$set(e.newEmployee,"employee_id",t.target.value)}}}),e._v(" "),o("label",[e._v("Employee ID#")])]),e._v(" "),o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.newEmployee.name,expression:"newEmployee.name",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:e.newEmployee.name},on:{change:function(t){e.$set(e.newEmployee,"name",t.target.value)}}}),e._v(" "),o("label",[e._v("Name")])]),e._v(" "),o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.newEmployee.dept,expression:"newEmployee.dept",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:e.newEmployee.dept},on:{change:function(t){e.$set(e.newEmployee,"dept",t.target.value)}}}),e._v(" "),o("label",[e._v("Dept")])]),e._v(" "),o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.newEmployee.position,expression:"newEmployee.position",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:e.newEmployee.position},on:{change:function(t){e.$set(e.newEmployee,"position",t.target.value)}}}),e._v(" "),o("label",[e._v("Position")])]),e._v(" "),o("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),o("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])},staticRenderFns:[]};var h=o("VU/8")(f,_,!1,function(e){o("K44X")},"data-v-5392b5b4",null).exports,w={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,o){c.collection("employee").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){o(function(t){var o=e.data();t.employee_id=o.employee_id,t.name=o.name,t.dept=o.dept,t.position=o.position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you srue?")&&c.collection("employee").where("employee_id","==",this.employee_id).get().then(function(t){t.forEach(function(e){return e.ref.delete()}),e.$router.push("/")})}},filters:{padLeft:function(e,t,o){}}},E={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"view-employee"}},[o("ul",{staticClass:"collection with-header"},[o("li",{staticClass:"collection-header"},[o("h4",[e._v(e._s(e.name))])]),e._v(" "),o("li",{staticClass:"collection-item"},[e._v("Employee Id#: "+e._s(e.employee_id))]),e._v(" "),o("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),o("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),o("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),o("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),o("div",{staticClass:"fixed-action-btn"},[o("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[o("i",{staticClass:"fa fa-pencil-alt"})])],1)],1)},staticRenderFns:[]};var g=o("VU/8")(w,E,!1,function(e){o("h64B")},"data-v-600e91e3",null).exports,b={name:"edit-employee",data:function(){return{employee:{employee_id:null,name:null,dept:null,position:null}}},beforeRouteEnter:function(e,t,o){c.collection("employee").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){o(function(t){var o=e.data();t.employee.employee_id=o.employee_id,t.employee.name=o.name,t.employee.dept=o.dept,t.employee.position=o.position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee.employee_id=t.data().employee_id,e.employee.name=t.data().name,e.employee.dept=t.data().dept,e.employee.position=t.data().position})})},updateEmployee:function(){var e=this;c.collection("employee").where("employee_id","==",this.employee.employee_id).get().then(function(t){t.forEach(function(t){return t.ref.update(e.employee)}),console.log(e.employee.employee_id),e.$router.push({name:"view-employee",params:{employee_id:e.employee.employee_id}})})}}},C={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"edit-employee"}},[o("h3",[e._v("Edit Employee")]),e._v(" "),o("div",{staticClass:"row"},[o("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.employee.employee_id,expression:"employee.employee_id",modifiers:{lazy:!0}}],attrs:{type:"text",required:"",disabled:""},domProps:{value:e.employee.employee_id},on:{change:function(t){e.$set(e.employee,"employee_id",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.employee.name,expression:"employee.name",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:e.employee.name},on:{change:function(t){e.$set(e.employee,"name",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.employee.dept,expression:"employee.dept",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:e.employee.dept},on:{change:function(t){e.$set(e.employee,"dept",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"input-field col s12"},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.employee.position,expression:"employee.position",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:e.employee.position},on:{change:function(t){e.$set(e.employee,"position",t.target.value)}}})]),e._v(" "),o("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),o("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])},staticRenderFns:[]};var x=o("VU/8")(b,C,!1,function(e){o("6Q6a")},"data-v-65ae4cdd",null).exports;n.a.use(p.a);var $=new p.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/new",name:"new-employee",component:h},{path:"/edit/:employee_id",name:"edit-employee",component:x},{path:"/:employee_id",name:"view-employee",component:g}]});o("0lrd");n.a.config.productionTip=!1,new n.a({el:"#app",router:$,components:{App:s},template:"<App/>"})},h64B:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b2ecb464a986c0dd8370.js.map