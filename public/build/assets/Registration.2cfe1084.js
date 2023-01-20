import{_ as m,a as d,o as n,c as i,b as e,d as c,f as _,t as r,e as h,l as g,F as b,r as v}from"./app.07cafa55.js";const w={data(){return{user:{user_name:"",login_id:"",login_password:"",type:"normal",id:0},errors:[],list:[]}},created(){this.getList()},methods:{editUser(l){this.user.id=l.id,this.user.login_id=l.login_id,this.user.type=l.type,this.user.user_name=l.user_name},handleRegister(){Swal.fire({text:"Please Wait...",didOpen:()=>{Swal.showLoading()}}),d.post("/api/user/register",this.user).then(l=>{l.data.success==!1?(Swal.close(),this.errors=l.data.errors):(Swal.close(),this.clear(),this.errors=[],Swal.fire({icon:"success",title:"User has been registered successfully."}),this.getList())})},handleUpdate(){Swal.fire({text:"Please Wait...",didOpen:()=>{Swal.showLoading()}}),d.post("/api/user/update",this.user).then(l=>{l.data.success==!1?(Swal.close(),this.errors=l.data.errors):(Swal.close(),this.clear(),this.errors=[],Swal.fire({icon:"success",title:"User has been updated successfully..."}),this.getList())})},clear(){this.user={user_name:"",id:0,login_id:"",login_password:"",type:"normal"},this.errors=[]},getList(){d.get("/api/user/list").then(l=>{this.list=l.data})},deleteUser(l){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&d.get("/api/user/delete/"+l).then(u=>{u.data.success==!0?(Swal.fire("Deleted!","Your data has been deleted.","success"),this.getList()):u.data.message=="inUse"?(Swal.close(),Swal.fire({icon:"info",title:"User can't delete because User has some orders."})):(Swal.close(),Swal.fire("Error!","User not found. Please reload the page and try agian. Thanks","error"))})})}}},y={class:"container-fluid p-0"},k={class:"main-content main-content-bg"},S=e("h1",{class:"content-h1"},"\u30A2\u30AB\u30A6\u30F3\u30C8\u767B\u9332",-1),U={class:"gmaccount-reg-content"},x={class:"container-fluid p-0"},C={class:"master-reg-row"},L={class:"master-reg-form"},B={class:"registration-left-content"},V={class:"account-input-content"},D=e("div",{class:"account-reg-lablel"},[e("label",{for:""},"\u30A2\u30AB\u30A6\u30F3\u30C8\u540D")],-1),j={class:"account-reg-input"},R={key:0,class:"text-danger float-left"},P={class:"account-input-content"},T=e("div",{class:"account-reg-lablel"},[e("label",{for:""},"\u30A2\u30AB\u30A6\u30F3\u30C8ID")],-1),Y={class:"account-reg-input"},E={key:0,class:"text-danger float-left"},F={class:"account-input-content"},I=e("div",{class:"account-reg-lablel"},[e("label",{for:""},"\u30D1\u30B9\u30EF\u30FC\u30C9")],-1),M={class:"account-reg-input"},N={key:0,class:"text-danger float-left"},O={class:"account-input-content"},W=e("div",{class:"account-reg-lablel"},[e("label",{for:""},"\u30BF\u30A4\u30D7")],-1),q={class:"switch-div"},A={class:"switch-btns-registration"},z={class:"mr-1"},G=e("label",{class:"on-radio-btn-reg",for:"job-on"},"\u7BA1\u7406\u8005",-1),H={class:"mr-1"},J=e("label",{class:"off-radio-btn-reg",for:"job-off"},"\u4E00\u822C",-1),K={class:"account-reg-buttons"},Q={key:0},X={key:1},Z={class:"table-col"},$={class:"registration-table"},ee=e("tr",{class:"f-12-regular"},[e("th",null,"#"),e("th",null,"\u30A2\u30AB\u30A6\u30F3\u30C8\u540D"),e("th",null,"\u30A2\u30AB\u30A6\u30F3\u30C8ID"),e("th",null,"\u6A29\u9650")],-1),se={class:"btn-grouped"},te=["onClick"],oe=e("i",{class:"fa-solid fa-trash-can delete-icon"},null,-1),le=[oe],ne=["onClick"],ie=e("i",{class:"fa-solid fa-pen-to-square edit-icon"},null,-1),re=[ie];function ae(l,s,u,ce,t,a){return n(),i("div",y,[e("div",k,[S,e("div",U,[e("div",x,[e("div",C,[e("div",L,[e("div",B,[e("div",V,[D,e("div",j,[c(e("input",{type:"text",name:"user_name","onUpdate:modelValue":s[0]||(s[0]=o=>t.user.user_name=o),placeholder:"\u30C6\u30AD\u30B9\u30C8"},null,512),[[_,t.user.user_name]]),e("small",null,[t.errors.user_name!=null?(n(),i("span",R,r(t.errors.user_name[0]),1)):h("",!0)])])]),e("div",P,[T,e("div",Y,[c(e("input",{type:"number",name:"login_id","onUpdate:modelValue":s[1]||(s[1]=o=>t.user.login_id=o),placeholder:"123",min:"0"},null,512),[[_,t.user.login_id]]),e("small",null,[t.errors.login_id!=null?(n(),i("span",E,r(t.errors.login_id[0]),1)):h("",!0)])])]),e("div",F,[I,e("div",M,[c(e("input",{type:"password",name:"password","onUpdate:modelValue":s[2]||(s[2]=o=>t.user.login_password=o),placeholder:"\u30C6\u30AD\u30B9\u30C8"},null,512),[[_,t.user.login_password]]),e("small",null,[t.errors.login_password!=null?(n(),i("span",N,r(t.errors.login_password[0]),1)):h("",!0)])])]),e("div",O,[W,e("ul",q,[e("li",A,[e("div",z,[c(e("input",{type:"radio",class:"btn-check",value:"manager","onUpdate:modelValue":s[3]||(s[3]=o=>t.user.type=o),name:"type",id:"job-on",autocomplete:"on"},null,512),[[g,t.user.type]]),G]),e("div",H,[c(e("input",{type:"radio",class:"btn-check",value:"normal","onUpdate:modelValue":s[4]||(s[4]=o=>t.user.type=o),name:"type",id:"job-off",autocomplete:"off"},null,512),[[g,t.user.type]]),J])])])]),e("div",K,[t.user.id==0?(n(),i("div",Q,[e("a",{class:"register-btn",onClick:s[5]||(s[5]=o=>a.handleRegister())},"\u767B\u9332")])):(n(),i("div",X,[e("a",{class:"update-btn",onClick:s[6]||(s[6]=o=>a.handleUpdate())},"\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8")])),e("div",null,[e("a",{class:"clear-btn",onClick:s[7]||(s[7]=o=>a.clear())},"\u524A\u9664")])])])]),e("div",Z,[e("table",$,[ee,(n(!0),i(b,null,v(t.list,(o,p)=>(n(),i("tr",{class:"f-12-regular td-color",key:p},[e("td",null,r(p+1),1),e("td",null,r(o.user_name),1),e("td",null,r(o.login_id),1),e("td",null,[e("div",se,[e("a",{class:"btn",onClick:f=>a.deleteUser(o.id)},le,8,te),e("a",{class:"btn",onClick:f=>a.editUser(o)},re,8,ne)])])]))),128))])])])])])])])}const ue=m(w,[["render",ae]]);export{ue as default};
