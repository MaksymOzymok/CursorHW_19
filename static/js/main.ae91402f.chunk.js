(this.webpackJsonpsignform=this.webpackJsonpsignform||[]).push([[0],{18:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBAoVOB9bRmUFAAABAUlEQVQ4y63TvU4CQRQF4C9GbEloSTCa0EJvjI3Q6xvY6OOIj6D4AMZSKy0klGgHxtJOKuk0jsUuuIuZlU28t5pzz5n7M3dYtooTAzMzD46t+8Oq7oWM36kWC64FH3q6us58Cq6K6HuC4GBxPhQEu3FBT3CTQ24Fp1lgLRfewjCHDLEdF2xglkPeUzQiKGFdk9w4l32ik6VXTAvpQTBVQfqSDTUceY3krztX0/AyFySdDDxHBM0fVummY4K2dhnBpZGRfjxPUxDSSmkvJtP6Hf+XHh7TYi48rVYStBblLMVjXzB6d+kekgxfYMdmhFXPsLDa8r0lyze3jnEhfWw/IX4DyF2AtGFyw0UAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMTBUMjE6NTY6MzErMDA6MDAKG20pAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTEwVDIxOjU2OjMxKzAwOjAwe0bVlQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},30:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),i=t(14),s=t(15),o=t(20),c=t(19),d=t(3),m=t(4),h=t(9),u=t(16),p=t(18),A=t.n(p);function f(){var e=Object(d.a)(["\nmargin: 0 auto;\nwidth: 405px;\ntransform: scale(0.9);\n"]);return f=function(){return e},e}function g(){var e=Object(d.a)(["\ndisplay: flex;\nwidth: 350px;\nmargin: 0 auto;\nflex-direction: row;\njustify-content: space-between;\n"]);return g=function(){return e},e}var w=m.a.div(g()),x=m.a.div(f()),b=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:"",checked:!0,emailValid:!1,passwordValid:!1,firstNameValid:!1,lastNameValid:!1,formValid:!1},e.handleCheckboxChange=function(a){e.setState((function(e){return{checked:!e.checked}}))},e.handleInputChange=function(a){var t=a.target.name,n=a.target.value;e.setState(Object(l.a)({},t,n),(function(){return e.validateField(t,n)}))},e.validateField=function(a,t){var n=e.state,r=n.emailValid,l=n.passwordValid,i=n.firstNameValid,s=n.lastNameValid;switch(a){case"email":r=null!=t.match(/^...+@..+\...+$/);break;case"password":l=null!=t.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);break;case"firstName":i=null!=t.match(/^...+$/);break;case"lastName":s=null!=t.match(/^...+$/)}e.setState({emailValid:r,passwordValid:l,firstNameValid:i,lastNameValid:s})},e.sentData=function(){if(e.state.emailValid&&e.state.passwordValid&&e.state.lastNameValid&&e.state.firstNameValid){var a={firstName:e.state.firstName,lastName:e.state.lastName,email:e.state.email,password:e.state.password,wantToReceive:e.state.checked};e.setState({firstName:"",lastName:"",email:"",password:"",checked:!1,firstNameValid:!1,lastNameValid:!1,emailValid:!1,passwordValid:!1,formValid:!1}),console.log(a)}else alert("Please write right data")},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(O,{style:{height:"540px"}},r.a.createElement(I,null,r.a.createElement("img",{src:A.a,alt:""})),r.a.createElement(S,null,"Sign Up"),r.a.createElement(w,null,r.a.createElement(D,{placeholder:"First Name *",style:{width:"150px"},name:"firstName",empty:""===this.state.firstName,hasError:this.state.firstNameValid,value:this.state.firstName,onChange:this.handleInputChange}),r.a.createElement(D,{placeholder:"Last Name *",style:{width:"150px"},name:"lastName",empty:""===this.state.lastName,hasError:this.state.lastNameValid,value:this.state.lastName,onChange:this.handleInputChange})),r.a.createElement(D,{placeholder:"Email Address *",style:{width:"325px"},name:"email",empty:""===this.state.email,hasError:this.state.emailValid,value:this.state.email,onChange:this.handleInputChange}),r.a.createElement(D,{type:"password",placeholder:"Password *",style:{width:"325px"},name:"password",empty:""===this.state.password,hasError:this.state.passwordValid,value:this.state.password,onChange:this.handleInputChange}),r.a.createElement(x,null,r.a.createElement(u.a,{checked:!this.state.checked,label:"I want to receive inspiration, marketing promoting  and updates via email.",onChange:this.handleCheckboxChange})),r.a.createElement(B,{type:"button",style:{width:"325px"},onClick:this.sentData},"Sign Up"),r.a.createElement(h.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(F,{style:{marginLeft:"240px"}},"Already have an account? Sign In")),r.a.createElement(z,null,"Copyright \xa9 Your website 2020"))}}]),t}(r.a.Component);function E(){var e=Object(d.a)(["\ncolor: #474747;\ntext-align: center;\nfont-size: 12px;\nmargin: 40px auto;\n"]);return E=function(){return e},e}function v(){var e=Object(d.a)(["\nfont-family: 'Roboto', sans-serif;\ncolor: #90caf9;\nfont-size: 10px;\ncursor: pointer;\nmargin-top: 0;\ntransition : .3s;\n:hover{\ncolor: white;\n}\n"]);return v=function(){return e},e}function V(){var e=Object(d.a)(["\n\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nwidth: 300px;\nmargin: 10px auto ;\n"]);return V=function(){return e},e}function y(){var e=Object(d.a)(["\ndisplay: block;\n    width: 300px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: bold;\n    background: #90caf9;\n    border-radius: 3px;\n    height: 35px;\n    margin: 20px auto 0;\n    color: #121212;\n\n    cursor: pointer;\n    transition : .5s;\n   \n:hover{\nbackground-color: aqua;\n\n}\n   \n"]);return y=function(){return e},e}function k(){var e=Object(d.a)(["\n  display: flex;\n  height: 40px;\n  border-radius: 3px;\n  width: 300px;\n  border: ",";\n  background: transparent;\n  color : #6a6a6a;\n  padding-left: 5px;\n  margin: 0 auto 20px;\n"]);return k=function(){return e},e}function C(){var e=Object(d.a)(["\nmargin-top: 20px;\n text-align: center;\n margin-bottom: 20px;\n"]);return C=function(){return e},e}function N(){var e=Object(d.a)(["\ntext-align: center;\nwidth: 60px;\nheight: 40px;\nmargin: 0 auto;\npadding-top: 20px;\nbackground-color: #f08daf;\nborder-radius: 100%;\n"]);return N=function(){return e},e}function j(){var e=Object(d.a)(["\n  font-size: 1.5em;\n  font-family: 'Roboto', sans-serif;\n  background-color: #121212;\n  color: #e5e5e5;\n  width: 450px;\n  height: 450px;\n  margin: 0 auto;\n  padding-top: 40px;\n"]);return j=function(){return e},e}var O=m.a.form(j()),I=m.a.div(N()),S=m.a.h5(C()),D=m.a.input(k(),(function(e){return e.hasError?"2px solid green":e.empty?"2px solid #6a6a6a":"2px solid red"})),B=m.a.button(y()),U=m.a.div(V()),F=m.a.span(v()),z=m.a.p(E()),Q=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",checked:!1,emailValid:!1,passwordValid:!1,formValid:!1},e.handleCheckboxChange=function(a){e.setState((function(e){return{checked:!e.checked}}))},e.handleInputChange=function(a){var t=a.target.name,n=a.target.value;e.setState(Object(l.a)({},t,n),(function(){return e.validateField(t,n)}))},e.validateField=function(a,t){var n=e.state,r=n.emailValid,l=n.passwordValid;switch(a){case"email":r=null!=t.match(/^...+@..+\...+$/);break;case"password":l=null!=t.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)}e.setState({emailValid:r,passwordValid:l})},e.sentData=function(){if(e.state.emailValid&&e.state.passwordValid){var a={email:e.state.email,password:e.state.password,remember:e.state.checked};e.state.checked&&localStorage.setItem("user",JSON.stringify(a)),e.setState({email:"",password:"",checked:!1,emailValid:!1,passwordValid:!1,formValid:!1}),console.log(a)}else alert("Please write right data")},e}return Object(s.a)(t,[{key:"render",value:function(){JSON.parse(localStorage.getItem("user"));return r.a.createElement(O,null,r.a.createElement(I,null,r.a.createElement("img",{src:A.a,alt:""})),r.a.createElement(S,null,"Sign In"),r.a.createElement(D,{name:"email",empty:""===this.state.email,hasError:this.state.emailValid,value:this.state.email,placeholder:"Email Address *",onChange:this.handleInputChange}),r.a.createElement(D,{name:"password",empty:""===this.state.password,hasError:this.state.passwordValid,value:this.state.password,placeholder:"Password *",type:"password",onChange:this.handleInputChange}),r.a.createElement(x,null,r.a.createElement(u.a,{style:{marginLeft:"15px"},checked:!this.state.checked,label:"Remember me",onChange:this.handleCheckboxChange})),r.a.createElement(B,{type:"button",onClick:this.sentData},"SIGN IN"),r.a.createElement(U,null,r.a.createElement(F,{style:{paddingTop:"12px"}},"Forgot password"),r.a.createElement(h.b,{to:"/register",style:{textDecoration:"none"}}," ",r.a.createElement(F,null," Don't have an account? Sign Up"))),r.a.createElement(z,null,"Copyright \xa9 Your website 2020"))}}]),t}(r.a.Component),R=t(17),T=t.n(R),Y=t(7);T.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(Y.c,null,r.a.createElement(Y.a,{exact:!0,path:"/",component:Q}),r.a.createElement(Y.a,{path:"/register",component:b})))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ae91402f.chunk.js.map