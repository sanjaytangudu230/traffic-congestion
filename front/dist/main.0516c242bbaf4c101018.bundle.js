webpackJsonp([1],{1e3:function(t,e){t.exports='<mat-sidenav-container>\n    <mat-sidenav #start>\n        <span class="logo"><img [src]="inputLogo" height="70px" width="75px"></span>\n        <ul class="places-list" style="list-style: none; padding:0%">\n            <li class="place-name" *ngFor="let place of places; let idx = index">\n                <span (click)="changeLocation(idx)"><b>{{places[idx]}}</b></span>\n            </li>\n        </ul>\n    </mat-sidenav>\n    <mat-sidenav-content>\n    <div class="page-heading">\n        <i class="material-icons menu" (click)="start.toggle(undefined, \'mouse\')">menu</i>   \n        <span>Traffic Congestion Predictions</span> \n        <div class="right-heading">\n            <a (click)="logout()"><b>Logout</b></a>\n        </div>  \n    </div>\n    <navbar [index]="locationIndex"></navbar>\n    </mat-sidenav-content>\n</mat-sidenav-container>'},1001:function(t,e){t.exports='<div class="container" *ngIf="!forgotPassword">\n    <div class="row">\n      <h1 class="text-center">Traffic Congestion Prediction</h1>\n      <div class="col-sm-6 col-md-4 col-md-offset-4">\n        <h1 class="text-center login-title" [ngStyle]="{\'color\': color}">{{logintext}}</h1>\n        <div class="account-wall">\n        <img class="profile-img" [src]="inputLogo" alt="">\n        <form #registrationForm="ngForm" (ngSubmit)="loginUser()" [formGroup]="myForm" class="form-signin">\n          <div class="form-group">\n            <input id="username" type="text" required autofocus placeholder="Username" class="form-control" formControlName="username">\n            <div class="errorMessage" *ngIf="myForm.controls[\'username\'].touched && !myForm.controls[\'username\'].valid">Username is required</div>\n          </div>\n          <div class="form-group">\n            <input id="name" type="text" required autofocus placeholder="Name" class="form-control" formControlName="name">\n            <div class="errorMessage" *ngIf="myForm.controls[\'name\'].touched && !myForm.controls[\'name\'].valid">Name is required</div>\n          </div>\n          <div class="form-group">\n            <input id="password" type="password" required autofocus placeholder="Password" class="form-control" formControlName="password">\n            <div class="errorMessage" *ngIf="myForm.controls[\'password\'].touched && !myForm.controls[\'password\'].valid">Password is required</div>\n          </div>\n          <div class="form-group">\n            <input id="cnfmpassword" type="password" required autofocus placeholder="Confirm Password" class="form-control" formControlName="cnfmpassword">\n            <div class="errorMessage" *ngIf="myForm.controls[\'cnfmpassword\'].touched && !myForm.controls[\'cnfmpassword\'].valid">Confirm Password is required</div>\n          </div>\n          <div class="form-group">\n            <input id="dob" type="text" required autofocus placeholder="Date of Birth (MMM dd, yyyy)" class="form-control" formControlName="dob">\n            <div class="errorMessage" *ngIf="myForm.controls[\'dob\'].touched && !myForm.controls[\'dob\'].valid">Date of Birth is required</div>\n          </div>\n          <div class="form-group">\n            <input id="phone" type="text" required autofocus placeholder="Phone No" class="form-control" formControlName="phone">\n            <div class="errorMessage" *ngIf="myForm.controls[\'phone\'].touched && !myForm.controls[\'phone\'].valid">Phone No is required</div>\n          </div>\n          <div class="form-group">\n            <input id="email" type="email" required autofocus placeholder="Email" class="form-control" formControlName="email">\n            <div class="errorMessage" *ngIf="myForm.controls[\'email\'].touched && !myForm.controls[\'email\'].valid">Email is required</div>\n          </div>\n          <div class="form-group" *ngIf="!logging">\n              <button type="submit" class="btn btn-lg btn-primary btn-block" [disabled]="!registrationForm.valid">Sign Up</button>\n          </div>\n          <div *ngIf="logging" class="login-text">\n            <spinner [size]="25" [tickness]="4"></spinner>\n            Signing Up. Please wait...\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n'},1261:function(t,e,n){var o=n(720);t.exports="string"==typeof o?o:o.toString()},1262:function(t,e,n){var o=n(721);t.exports="string"==typeof o?o:o.toString()},1263:function(t,e,n){var o=n(722);t.exports="string"==typeof o?o:o.toString()},1264:function(t,e,n){var o=n(723);t.exports="string"==typeof o?o:o.toString()},1265:function(t,e,n){var o=n(724);t.exports="string"==typeof o?o:o.toString()},1266:function(t,e,n){var o=n(725);t.exports="string"==typeof o?o:o.toString()},1267:function(t,e,n){var o=n(726);t.exports="string"==typeof o?o:o.toString()},1268:function(t,e,n){var o=n(727);t.exports="string"==typeof o?o:o.toString()},127:function(t,e,n){"use strict";var o=n(172);n.d(e,"a",(function(){return o.a}))},172:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(3),r=n(1),i=n(233),s=(n.n(i),n(58)),a=n(65),c=n(274),l=(function(){function t(t,e){this.http=t,this.router=e,this.loginSuccessful=!0}return t.prototype.isAuthenticated=function(){return!this.checkTokenExpired()},t.prototype.clearUserDataAndRedirect=function(){localStorage.clear(),this.router.navigate(["/sessionexpired"])},t.prototype.login=function(t){return this.http.post("/api/login",t,n.i(c.c)()).map(this.extractToken).catch(this.handleError)},t.prototype.signup=function(t){return this.http.post("/api/signup",t,n.i(c.c)()).catch(this.handleError)},t.prototype.logout=function(){var t=this;this.isAuthenticated()?this.getResource("/api/logout").subscribe((function(e){return t.handleLogout(e)}),(function(e){401===e.status&&t.router.navigate(["/sessionexpired"])}),(function(){return console.log("got data")})):this.clearUserDataAndRedirect()},t.prototype.postResource=function(t,e){var n=localStorage.getItem("token"),o=new s.d({Authorization:"Bearer "+n});o.append("Content-Type","application/json");var r=new s.c({headers:o});return this.http.post(e,t,r).map((function(t){return t.json()}))},t.prototype.getResource=function(t){var e=localStorage.getItem("token"),n=new s.d({Authorization:"Bearer "+e}),o=new s.c({headers:n});return this.http.get(t,o)},t.prototype.extractToken=function(t){var e=t.json();if(200===t.status){var n=e.jwt,o=new Date(e.exp),r=o.getTime();localStorage.setItem("token",n),localStorage.setItem("exp",String(r))}},t.prototype.checkTokenExpired=function(){var t=Number(localStorage.getItem("exp"));return Math.floor((new Date).getTime()/1e3)>t&&(console.log("Session expired."),!0)},t.prototype.handleError=function(t){var e=t.message?t.message:t.status?t.status+" - "+t.statusText:"Server error";return console.error(e),i.Observable.throw(e)},t.prototype.handleLogout=function(t){200===t.status&&(localStorage.clear(),this.router.navigate(["/login"]))},t=o.b([n.i(r.Injectable)(),o.c("design:paramtypes",[s.e,a.c])],t)})()},173:function(t,e,n){"use strict";var o=n(568);n.d(e,"a",(function(){return o.a}))},262:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var o=n(22),r=n(1),i=[],s=function(t){return t};n.i(r.enableProdMode)(),s=function(t){return n.i(o.disableDebugTools)(),t},i=i.slice();var a=s,c=i.slice()},270:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(3),r=n(1),i=(function(){function t(){this._state={}}return Object.defineProperty(t.prototype,"state",{get:function(){return this._state=this._clone(this._state)},set:function(t){throw new Error("do not mutate the `.state` directly")},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=this.state;return e.hasOwnProperty(t)?e[t]:e},t.prototype.set=function(t,e){return this._state[t]=e},t.prototype._clone=function(t){return JSON.parse(JSON.stringify(t))},t=o.b([n.i(r.Injectable)()],t)})()},271:function(t,e,n){"use strict";var o=n(553);n.d(e,"a",(function(){return o.a}))},272:function(t,e,n){"use strict";var o=n(556);n.d(e,"a",(function(){return o.a}))},273:function(t,e,n){"use strict";var o=n(561);n.d(e,"a",(function(){return o.a}))},274:function(t,e,n){"use strict";var o=(n(173),n(562));n.d(e,"c",(function(){return o.a}));var r=n(566);n.d(e,"a",(function(){return r.a}));var i=n(564);n.d(e,"b",(function(){return i.a}))},498:function(t,e){function n(t){return new Promise(function(e,n){n(new Error("Cannot find module '"+t+"'."))})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=498},500:function(t,e,n){"use strict";var o=n(548);n.d(e,"a",(function(){return o.a}))},547:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(3),r=n(1),i=n(270),s=(function(){function t(t){this.appState=t,this.angularclassLogo="assets/img/angularclass-avatar.png",this.name="Angular 2 Webpack Starter",this.url="https://twitter.com/AngularClass"}return t.prototype.ngOnInit=function(){console.log("Initial App State",this.appState.state)},t=o.b([n.i(r.Component)({selector:"app",encapsulation:r.ViewEncapsulation.None,template:"<main>\n                 <router-outlet></router-outlet>\n             </main>",styles:[n(1261)]}),o.c("design:paramtypes",[i.a])],t)})()},548:function(t,e,n){"use strict";n.d(e,"a",(function(){return M}));var o=n(3),r=n(22),i=n(13),s=n(58),a=n(986),c=n(575),l=(n.n(c),n(546)),u=n(574),d=(n.n(u),n(267)),p=n(268),g=n(1),m=n(263),f=(n.n(m),n(65)),h=n(533),b=n(262),v=n(550),x=n(547),y=n(272),w=n(557),k=n(559),S=n(274),I=n(552),T=n(549),L=n(270),A=n(271),F=n(554),C=n(273),D=n(949),z=(n.n(D),T.a.concat([L.a])),M=(function(){function t(t,e){this.appRef=t,this.appState=e}return t.prototype.hmrOnInit=function(t){if(t&&t.state){if(this.appState._state=t.state,"restoreInputValues"in t){var e=t.restoreInputValues;setTimeout(e)}this.appRef.tick(),delete t.state,delete t.restoreInputValues}},t.prototype.hmrOnDestroy=function(t){var e=this.appRef.components.map((function(t){return t.location.nativeElement})),o=this.appState._state;t.state=o,t.disposeOldHosts=n.i(m.createNewHosts)(e),t.restoreInputValues=n.i(m.createInputTransfer)(),n.i(m.removeNgStyles)()},t.prototype.hmrAfterDestroy=function(t){t.disposeOldHosts(),delete t.disposeOldHosts},t=o.b([n.i(g.NgModule)({bootstrap:[x.a],declarations:[x.a,A.a,F.a,w.a,y.a,S.a,k.a,I.a,S.b,C.a],imports:[r.BrowserModule,i.a,i.b,l.a,h.a,c.SpinnerModule,s.a,a.a,d.a,p.a,u.NgxChartsModule,f.a.forRoot(v.a,{useHash:!0,preloadingStrategy:f.b})],providers:[b.b,z]}),o.c("design:paramtypes",[g.ApplicationRef,L.a])],t)})()},549:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(3),r=n(1),i=n(0),s=(n.n(i),n(381)),a=(n.n(s),(function(){function t(){}return t.prototype.resolve=function(t,e){return i.Observable.of({res:"I am data"})},t=o.b([n.i(r.Injectable)()],t)})()),c=[a]},550:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(271),r=n(272),i=n(273),s=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:r.a},{path:"home",component:o.a},{path:"signup",component:i.a}]},551:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(3),r=n(1),i=n(65),s=n(13),a=(function(){function t(t){this.emailAddress=t}return t})(),c=(function(){function t(t){this.router=t,this.inputLogo="assets/img/angularclass-logo.png",this.textmessage="Forgot your password ?",this.emailModel=new a("");var e={};e.email=new s.e("",s.j.required),e.type=new s.e("forgotpass"),this.form=new s.l(e)}return t.prototype.resetPassword=function(){console.log("Reset email is ",this.form.value.email),this.textmessage="Reset successful, redirecting !"},t=o.b([n.i(r.Component)({selector:"app-error-message",template:n(995),styles:[n(1262)]}),o.c("design:paramtypes",[i.c])],t)})()},552:function(t,e,n){"use strict";var o=n(551);n.d(e,"a",(function(){return o.a}))},553:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(3),r=n(1),i=(function(){function t(){}return t.prototype.ngOnInit=function(){},t.prototype.ngOnDestroy=function(){console.log("destroyed")},t=o.b([n.i(r.Component)({selector:"home",template:n(996),styles:[n(1263)]})],t)})()},554:function(t,e,n){"use strict";var o=n(555);n.d(e,"a",(function(){return o.a}))},555:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(3),r=n(1),i=n(58),s=n(127),a=n(65),c=n(569),l=(function(){function t(t,e,n){this.http=t,this.router=e,this.webservice=n,this.current=!1,this.dispMessage=!1,this.dispError=!1,this.dispTable=!1,this.congResults=[],this.speedResults=[],this.places=[{value:"Hauz Khas",latitude:28.5494459,longitude:77.2001368},{value:"Model Town",latitude:28.7158727,longitude:77.1910738},{value:"Civil Lines",latitude:28.6814284,longitude:77.2226866},{value:"Punjabi Bagh",latitude:28.6619753,longitude:77.1241557},{value:"Najafgarh",latitude:28.6090126,longitude:76.9854526},{value:"Saraswati Vihar",latitude:28.6964967,longitude:77.1250482},{value:"Mukarba Chowk",latitude:28.7372,longitude:77.1603},{value:"Seelampur",latitude:28.6640177,longitude:77.2711557},{value:"Gurugram",latitude:28.4595,longitude:77.0266},{value:"Noida",latitude:28.5355,longitude:77.391}],this.view=[600,400],this.showXAxis=!0,this.showYAxis=!0,this.gradient=!1,this.showLegend=!1,this.showXAxisLabel=!0,this.xAxisLabel="Time of Day",this.showYAxisLabel=!0,this.yAxisLabel1="Congestion Percentage",this.yAxisLabel2="Average Speed (kmph)"}return t.prototype.ngOnInit=function(){this.webservice.isAuthenticated()},t.prototype.ngOnChanges=function(){if(this.graphType=this.type,"overview"===this.type)this.graphType="Overview";else if("monthly"===this.type){var t=new Date,e=t.toLocaleDateString(),n=new Date;n.setDate(t.getDate()-30);var o=n.toLocaleDateString();this.graphType=o+" to "+e}else if("weekly"===this.type){var t=new Date,e=t.toLocaleDateString(),n=new Date;n.setDate(t.getDate()-7);var o=n.toLocaleDateString();this.graphType=o+" to "+e}else if("daily"===this.type){var t=new Date,r=t.toLocaleDateString();this.graphType=r}else this.graphType="Current Traffic Status",this.current=!0;console.log(this.graphType),this.selectedValue=this.places[this.index].value,this.getData()},t.prototype.ngOnDestroy=function(){console.log("destroyed")},t.prototype.getData=function(){var t=this;if(""!=this.selectedValue){this.msg="Loading Data...",this.dispMessage=!0,this.dispError=!1,this.dispTable=!1;var e={location:this.selectedValue,type:this.type};this.webservice.getDataFromBackend(e).subscribe((function(e){t.congResults=[],t.speedResults=[],t.dispMessage=!1,t.dispError=!1,t.dispTable=!0,t.handleData(e)}),(function(e){t.error="Server Error: Unable to fetch data",t.dispMessage=!1,t.dispError=!0,t.dispTable=!1}))}else this.error="Please select a Location",this.dispMessage=!1,this.dispError=!0,this.dispTable=!1},t.prototype.handleData=function(t){if(console.log(t),this.current)this.freeflow_speed=t.normSpeed,this.current_speed=t.currSpeed,this.congestion_value=t.congestion,this.congType=t.congType;else{this.cong_threshold=t[0].Threshold,this.freeflow_speed=t[0].NormSpeed,console.log(this.freeflow_speed);for(var e=0,n=Object.keys(t);e<n.length;e++){var o=n[e],r={name:t[o].Hour,value:t[o].Congestion},i={name:t[o].Hour,value:t[o].CurrSpeed};this.congResults.push(r),this.speedResults.push(i)}}},o.b([n.i(r.Input)("index"),o.c("design:type",Number)],t.prototype,"index",void 0),o.b([n.i(r.Input)("type"),o.c("design:type",String)],t.prototype,"type",void 0),t=o.b([n.i(r.Component)({selector:"location",template:n(997),styles:[n(1264)],providers:[c.a,s.a]}),o.c("design:paramtypes",[i.e,a.c,c.a])],t)})()},556:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(3),r=n(1),i=n(13),s=n(172),a=n(173),c=n(65),l=n(233),u=(n.n(l),n(1260)),d=(n.n(u),(function(){function t(t,e){this._service=t,this.router=e,this.inputLogo="assets/img/traffic1.png",this.model=new a.a(1,"",""),this.logintext="Sign in to continue",this.color="black",this.forgotPassword=!1,this.logging=!1,this.loginMsg="Validating...";var n={};n.username=new i.e("",i.j.required),n.password=new i.e("",i.j.required),n.type=new i.e("login"),this.myForm=new i.l(n)}return t.prototype.ngOnInit=function(){console.log("Inside the login page"),this._service.isAuthenticated()&&(console.log("We are authenticated, why go to login page again"),this.router.navigate(["/home"]))},t.prototype.loginUser=function(){var t=this;this.logging=!0,n.i(u.setTimeout)((function(){t.loginMsg="Logging...",n.i(u.setTimeout)((function(){return t.loginMsg="Fetching Data..."}),3e3)}),3e3);var e={username:this.myForm.controls.username.value,password:this.myForm.controls.password.value};this._service.login(e).subscribe((function(e){t.logging=!1,t.router.navigate(["/home"])}),(function(e){t.handleError(e)}))},t.prototype.handleError=function(t){var e;return this.logging=!1,e="401 - UNAUTHORIZED"===t?"Incorrect Username or Password or User not Validated Yet":"403 - FORBIDDEN"===t?"User has not been verified":"400 - BAD REQUEST"===t?"Bad Request":"Server Error",console.error(e),this.color="red",this.logintext=e,l.Observable.throw(e)},t=o.b([n.i(r.Component)({selector:"login",template:n(998),styles:[n(1265)],providers:[s.a]}),o.c("design:paramtypes",[s.a,c.c])],t)})())},557:function(t,e,n){"use strict";var o=n(558);n.d(e,"a",(function(){return o.a}))},558:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(3),r=n(1),i=n(127),s=(function(){function t(t){this.authService=t}return t.prototype.ngOnInit=function(){this.locationIndex=this.index,console.log(this.locationIndex)},t.prototype.ngOnChanges=function(){this.locationIndex=this.index,console.log(this.locationIndex)},o.b([n.i(r.Input)("index"),o.c("design:type",Number)],t.prototype,"index",void 0),t=o.b([n.i(r.Component)({selector:"navbar",template:n(999),styles:[n(1266)]}),o.c("design:paramtypes",[i.a])],t)})()},559:function(t,e,n){"use strict";var o=n(560);n.d(e,"a",(function(){return o.a}))},560:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(3),r=n(1),i=n(127),s=(function(){function t(t){this.authService=t,this.locationIndex=0,this.inputLogo="assets/img/traffic.png",this.places=["Hauz Khas","Model Town","Civil Lines","Punjabi Bagh","Najafgarh","Saraswati Vihar","Mukarba Chowk","Seelampur","Gurugram","Noida"]}return t.prototype.logout=function(){this.authService.logout()},t.prototype.ngOnInit=function(){},t.prototype.ngOnDestroy=function(){console.log("destroyed")},t.prototype.changeLocation=function(t){this.locationIndex=t},t=o.b([n.i(r.Component)({selector:"sidebar",template:n(1e3),styles:[n(1267)],providers:[i.a]}),o.c("design:paramtypes",[i.a])],t)})()},561:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n(3),r=n(1),i=n(13),s=n(172),a=n(173),c=n(65),l=n(233),u=(n.n(l),(function(){function t(t,e){this._service=t,this.router=e,this.inputLogo="assets/img/traffic1.png",this.model=new a.a(1,"",""),this.logintext="Sign Up",this.color="black",this.forgotPassword=!1,this.logging=!1;var n={};n.username=new i.e("",i.j.required),n.password=new i.e("",i.j.required),n.cnfmpassword=new i.e("",i.j.required),n.name=new i.e("",i.j.required),n.phone=new i.e("",i.j.required),n.dob=new i.e("",i.j.required),n.email=new i.e("",i.j.required),this.myForm=new i.l(n)}return t.prototype.ngOnInit=function(){console.log("Inside the signup page"),this._service.isAuthenticated()&&(console.log("We are authenticated, why go to login page again"),this.router.navigate(["/login"]))},t.prototype.loginUser=function(){var t=this,e=this.myForm.controls.password.value,n=this.myForm.controls.cnfmpassword.value,o=this.myForm.controls.phone.value,r=(this.myForm.controls.email.value,new RegExp("^[0-9]{10,10}$"));if(e!=n)alert("Password and Confirm Password Do Not Match");else if(10!=o.length)alert("Enter a valid phone number");else if(e.length<9||e.length>15)alert("Password Length should be between 9 and 15");else if(0==r.test(o))alert("Invalid Phone Number");else{this.logging=!0;var i={username:this.myForm.controls.username.value,password:this.myForm.controls.password.value,name:this.myForm.controls.name.value,date:this.myForm.controls.dob.value,phone:this.myForm.controls.phone.value,email:this.myForm.controls.email.value};this._service.signup(i).subscribe((function(e){t.logging=!1,t.router.navigate(["/login"])}),(function(e){t.handleError(e)}))}},t.prototype.handleError=function(t){var e;return this.logging=!1,e="401 - UNAUTHORIZED"===t?"Incorrect Username or Password":"400 - BAD REQUEST"===t?"Bad Request":"Server Error",console.error(e),this.color="red",this.logintext=e,l.Observable.throw(e)},t=o.b([n.i(r.Component)({selector:"signup",template:n(1001),styles:[n(1268)],providers:[s.a]}),o.c("design:paramtypes",[s.a,c.c])],t)})())},562:function(t,e,n){"use strict";var o=n(563);n.d(e,"a",(function(){return o.a}))},563:function(t,e,n){"use strict";function o(){var t=new r.d({"Content-Type":"application/json"});return new r.c({headers:t})}e.a=o;var r=n(58)},564:function(t,e,n){"use strict";var o=n(565);n.d(e,"a",(function(){return o.a}))},565:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(3),r=n(1),i=n(65),s=(function(){function t(t){this.router=t}return t.prototype.redirectToLogin=function(){this.router.navigate(["/login"])},t=o.b([n.i(r.Component)({template:'\n  <div class="container">\n    <div class="row">\n      <div class="span12">\n        <div class="hero-unit center">\n            <h1>Page Not Found <small><font face="Tahoma" color="red">Error 404</font></small></h1>\n            <br />\n            <p>The page you requested could not be found, either contact your webmaster</p>\n            <p> Use your browsers <b>Back</b> button to go back</p>\n            <p><b>Or you could just press this neat little button:</b></p>\n            <a (click)="redirectToLogin()" class="btn btn-large btn-info"> Take me to login page</a>\n          </div>\n          <br />\n          \x3c!-- By ConnerT HTML & CSS Enthusiast --\x3e\n      </div>\n    </div>\n  </div>\n    ',styles:[".center {text-align: center; margin-left: auto;      margin-right: auto; margin-bottom: auto; margin-top: auto;}"]}),o.c("design:paramtypes",[i.c])],t)})()},566:function(t,e,n){"use strict";var o=n(567);n.d(e,"a",(function(){return o.a}))},567:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(3),r=n(1),i=n(65),s=(function(){function t(t){this.router=t}return t.prototype.redirectToLogin=function(){this.router.navigate(["/login"])},t=o.b([n.i(r.Component)({selector:"session-expired",template:'<div class="well center-block" style="width:300px;">\n                  <div class="panel panel-danger">\n                  <div class="panel-heading text-center center-block">\n                  Sorry your session has expired !</div>\n                  <div class="panel-body">\n                    <a class="btn btn-large btn-info center-block"\n                        (click)="redirectToLogin()" >\n                        Login\n                    </a>\n                  </div>\n            </div>\n            </div>'}),o.c("design:paramtypes",[i.c])],t)})()},568:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=(function(){function t(t,e,n){this.id=t,this.username=e,this.password=n}return t})()},569:function(t,e,n){"use strict";var o=n(570);n.d(e,"a",(function(){return o.a}))},570:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(3),r=n(1),i=n(127),s=(function(){function t(t){this.authService=t}return t.prototype.getDataFromBackend=function(t){return this.authService.postResource(t,"/api/getLocationOverview")},t.prototype.isAuthenticated=function(){this.authService.isAuthenticated()||this.authService.clearUserDataAndRedirect()},t=o.b([n.i(r.Injectable)(),o.c("design:paramtypes",[i.a])],t)})()},571:function(t,e,n){"use strict";function o(){return n.i(r.a)().bootstrapModule(a.a).then(i.a).catch((function(t){return console.error(t)}))}Object.defineProperty(e,"__esModule",{value:!0}),e.main=o;var r=n(499),i=n(262),s=n(263),a=(n.n(s),n(500));n.i(s.bootloader)(o)},720:function(t,e,n){e=t.exports=n(63)(void 0),e.push([t.i,"body,html{font-family:Arial,Helvetica,sans-serif}span.active{background-color:gray}",""])},721:function(t,e,n){e=t.exports=n(63)(void 0),e.push([t.i,".form-signin{max-width:330px;padding:15px;margin:0 auto}.form-signin .checkbox,.form-signin .form-signin-heading{margin-bottom:10px}.form-signin .checkbox{font-weight:400}.form-signin .form-control{position:relative;font-size:16px;height:auto;padding:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.form-signin .form-control:focus{z-index:2}.form-signin input[type=text]{margin-bottom:-1px;border-bottom-left-radius:0;border-bottom-right-radius:0}.form-signin input[type=password]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}.account-wall{margin-top:20px;padding:40px 0 20px;background-color:#f7f7f7;-moz-box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-box-shadow:0 2px 2px rgba(0,0,0,.3);box-shadow:0 2px 2px rgba(0,0,0,.3)}.login-title{color:#555;font-size:18px;font-weight:400;display:block}.profile-img{width:auto;height:80px;margin:auto;display:block;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:30px}.need-help,.new-account{margin-top:10px}.new-account{display:block}.modal-footer{border-top:0}",""])},722:function(t,e,n){e=t.exports=n(63)(void 0),e.push([t.i,"",""])},723:function(t,e,n){e=t.exports=n(63)(void 0),e.push([t.i,".homeBody{margin-top:1em!important;text-align:center!important;align-content:center!important;position:relative;height:530px!important}.error{font-size:2em;color:red}.message{color:#fc0;font-size:2em}.getdata{width:6em}.datatable{margin:1em;text-align:center!important;align-content:center!important}td{padding:1em}spinner{border-color:#fc0 rgba(79,106,167,.1) rgba(79,106,167,.1)!important}.low{color:green}.medium{color:#ff0}.high{color:red}.currentTable{text-align:center;width:100%}.currentTable table{margin:0 auto}.refresh{background-color:#4932b3;color:#fff;padding:1em 2em}",""])},724:function(t,e,n){e=t.exports=n(63)(void 0),e.push([t.i,".form-signin{max-width:330px;padding:15px;margin:0 auto}.form-signin .checkbox,.form-signin .form-signin-heading{margin-bottom:10px}.form-signin .checkbox{font-weight:400}.form-signin .form-control{position:relative;font-size:16px;height:auto;padding:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.form-signin .form-control:focus{z-index:2}.form-signin input[type=text]{margin-bottom:-1px;border-bottom-left-radius:0;border-bottom-right-radius:0}.form-signin input[type=password]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}.account-wall{margin-top:20px;padding:40px 0 20px;background-color:#f7f7f7;-moz-box-shadow:0 2px 2px rgba(0,0,0,.6);-webkit-box-shadow:0 2px 2px rgba(0,0,0,.6);box-shadow:0 2px 2px rgba(0,0,0,.6)}.login-title{color:#555;font-size:18px;font-weight:400;display:block}.profile-img{width:auto;height:80px;margin:auto;display:block;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:30px}.need-help,.new-account{margin-top:10px}.new-account{display:block}.modal-footer{border-top:0}.login-text{font-size:2em}",""])},725:function(t,e,n){e=t.exports=n(63)(void 0),e.push([t.i,"",""])},726:function(t,e,n){e=t.exports=n(63)(void 0),e.push([t.i,".page-heading{font-size:2.5em;color:#fff;background-color:#4932b3;padding:.5em}.menu{cursor:pointer}.right-heading{float:right;color:#fff;border:2px solid #fff;font-size:.6em;padding:.3em;border-radius:.5em}a{color:#fff}.place-name{height:auto;padding:1.2em 2em;color:#fff;border-bottom:1px solid #fff;font-size:1.2 em;cursor:pointer}.mat-sidenav{background-color:#4932b3;text-align:center}img{margin:1.2em 0}",""])},727:function(t,e,n){e=t.exports=n(63)(void 0),e.push([t.i,".form-signin{max-width:330px;padding:15px;margin:0 auto}.form-signin .checkbox,.form-signin .form-signin-heading{margin-bottom:10px}.form-signin .checkbox{font-weight:400}.form-signin .form-control{position:relative;font-size:16px;height:auto;padding:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.form-signin .form-control:focus{z-index:2}.form-signin input[type=text]{margin-bottom:-1px;border-bottom-left-radius:0;border-bottom-right-radius:0}.form-signin input[type=password]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}.account-wall{margin-top:20px;padding:40px 0 20px;background-color:#f7f7f7;-moz-box-shadow:0 2px 2px rgba(0,0,0,.6);-webkit-box-shadow:0 2px 2px rgba(0,0,0,.6);box-shadow:0 2px 2px rgba(0,0,0,.6)}.login-title{color:#555;font-size:18px;font-weight:400;display:block}.profile-img{width:auto;height:80px;margin:auto;display:block;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:30px}.need-help,.new-account{margin-top:10px}.new-account{display:block}.modal-footer{border-top:0}.login-text{font-size:2em}",""])},949:function(t,e){},995:function(t,e){t.exports='<div class="container">\n  <div class="row">\n    <div class="col-sm-6 col-md-4 col-md-offset-4">\n      <h1 class="text-center login-title" style="color: red;">{{textmessage}}</h1>\n      <div class="account-wall">\n        <img class="profile-img" [src]="inputLogo" alt="">\n        <form #passwordResetForm="ngForm" (ngSubmit)="resetPassword()" [formGroup]="form" class="form-signin">\n          <div class="form-group text-center">\n            <p>If you have forgotten your password you can reset it here.</p>\n          </div>\n          <div class="form-group">\n            <input id="emailAddress" type="text" required autofocus placeholder="email address" class="form-control" formControlName="email">\n          </div>\n          <div class="form-group">\n            <button type="submit" class="btn btn-lg btn-primary btn-block" [disabled]="!passwordResetForm.valid">Send My Password</button>\n          </div>\n          <label class="checkbox text-center">\n            <a [routerLink]=" [\'/login\'] " class="glyphicon-triangle-left need-help">Back to login</a><span class="clearfix"> </span>\n          </label>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n'},996:function(t,e){t.exports="<sidebar></sidebar>"},997:function(t,e){t.exports='<div class="homeBody">\n    <h4>\n        {{selectedValue}} - {{graphType}}\n    </h4>\n      <br/>\n      <span class=\'message\' *ngIf="dispMessage">\n        <spinner [size]="25" [tickness]="4"></spinner>\n        {{msg}}\n      </span>     \n      <span class=\'error\'  *ngIf="dispError">\n        {{error}}\n        <button class="refresh" (click)="getData()">Refresh</button>\n      </span>   \n      <div class=\'datatable\'  *ngIf="dispTable && !current">\n        <table>\n          <tr>\n            <td>\n              Congestion Threshold = {{cong_threshold}}\n              <ngx-charts-bar-vertical\n                [view]="view"\n                [results]="congResults"\n                [gradient]="gradient"\n                [xAxis]="showXAxis"\n                [yAxis]="showYAxis"\n                [legend]="showLegend"\n                [showXAxisLabel]="showXAxisLabel"\n                [showYAxisLabel]="showYAxisLabel"\n                [xAxisLabel]="xAxisLabel"\n                [yAxisLabel]="yAxisLabel1">\n              </ngx-charts-bar-vertical>\n            </td>\n            <td>\n              Free Flow Speed = {{freeflow_speed}}\n              <ngx-charts-bar-vertical\n                [view]="view"\n                [results]="speedResults"\n                [gradient]="gradient"\n                [xAxis]="showXAxis"\n                [yAxis]="showYAxis"\n                [legend]="showLegend"\n                [showXAxisLabel]="showXAxisLabel"\n                [showYAxisLabel]="showYAxisLabel"\n                [xAxisLabel]="xAxisLabel"\n                [yAxisLabel]="yAxisLabel2">\n              </ngx-charts-bar-vertical>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class="currentTable" *ngIf="dispTable && current">\n        <table>\n          <tr>\n            <td>Current Speed</td>\n            <td>{{current_speed}}</td>\n          </tr>\n          <tr>\n            <td>Free Flow Speed</td>\n            <td>{{freeflow_speed}}</td>\n          </tr>\n          <tr>\n            <td>Congestion Percentage</td>\n            <td>{{congestion_value}}</td>\n          </tr>\n          <tr>\n            <td>Traffic Condition</td>\n            <td>\n              <span *ngIf=\'congType == "Low"\' class="low">{{congType}}</span>\n              <span *ngIf=\'congType == "Medium"\' class="medium">{{congType}}</span>\n              <span *ngIf=\'congType == "High"\' class="high">{{congType}}</span>\n            </td>\n          </tr>\n        </table>\n        <button class="refresh" (click)="getData()">Refresh</button>\n      </div>\n</div>\n\n'},998:function(t,e){t.exports='<div class="container" *ngIf="!forgotPassword">\n  <div class="row">\n    <h1 class="text-center">Traffic Congestion Prediction</h1>\n    <div class="col-sm-6 col-md-4 col-md-offset-4">\n      <h1 class="text-center login-title" [ngStyle]="{\'color\': color}">{{logintext}}</h1>\n      <div class="account-wall">\n        <img class="profile-img" [src]="inputLogo" alt="">\n        <form #registrationForm="ngForm" (ngSubmit)="loginUser()" [formGroup]="myForm" class="form-signin">\n          <div class="form-group">\n            <input id="username" type="text" required autofocus placeholder="Username" class="form-control" formControlName="username">\n            <div class="errorMessage" *ngIf="myForm.controls[\'username\'].touched && !myForm.controls[\'username\'].valid">Username is required</div>\n          </div>\n          <div class="form-group">\n            <input id="password" type="password" required class="form-control" placeholder="Password" formControlName="password">\n            <div class="errorMessage" *ngIf="myForm.controls[\'password\'].touched && !myForm.controls[\'password\'].valid">Password is required</div>\n          </div>\n          <div class="form-group" *ngIf="!logging">\n            <button type="submit" class="btn btn-lg btn-primary btn-block" [disabled]="!registrationForm.valid">Sign in</button>\n          </div>\n          <div *ngIf="logging" class="login-text">\n            <spinner [size]="25" [tickness]="4"></spinner>\n            {{loginMsg}}\n          </div>\n        </form>\n      </div>\n      <br>\n      <a routerLink="/signup" routerLinkActive="active">Sign Up, if already not a member</a>      \n    </div>\n  </div>\n</div>\n'},999:function(t,e){t.exports='<mat-tab-group>\n  <mat-tab label="Overview">\n    <location \n      [index]="locationIndex"\n      type="overview">\n    </location>\n  </mat-tab>\n  <mat-tab label="Monthly Summary">\n    <location \n      [index]="locationIndex"\n      type="monthly">\n    </location>\n  </mat-tab>\n  <mat-tab label="Weekly Summary">\n    <location \n      [index]="locationIndex"\n      type="weekly">\n    </location>\n  </mat-tab>\n  <mat-tab label="Daily Summary">\n    <location \n      [index]="locationIndex"\n      type="daily">\n    </location>\n  </mat-tab>\n  <mat-tab label="Current Status">\n    <location \n      [index]="locationIndex"\n      type="current">\n    </location>\n  </mat-tab>\n</mat-tab-group>'}},[571]);