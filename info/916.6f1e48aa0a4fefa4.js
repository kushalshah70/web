"use strict";(self.webpackChunkng_get_info=self.webpackChunkng_get_info||[]).push([[916],{7960:(m,h,s)=>{s.d(h,{Y:()=>a});var e=s(5879);let a=(()=>{class l{constructor(){this.buttonClasses="btn",this.buttonText="Submit",this.isActive=!1,this.disabled=!1,this.onClick=new e.vpe}static#t=this.\u0275fac=function(o){return new(o||l)};static#e=this.\u0275cmp=e.Xpm({type:l,selectors:[["ku-btn"]],inputs:{buttonClasses:"buttonClasses",buttonText:"buttonText",isActive:"isActive",disabled:"disabled"},outputs:{onClick:"onClick"},decls:2,vars:6,consts:[[3,"disabled","click"]],template:function(o,i){1&o&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.onClick.emit()}),e._uU(1),e.qZA()),2&o&&(e.Tol(i.buttonClasses),e.ekj("activeBtn",i.isActive),e.Q6J("disabled",i.disabled),e.xp6(1),e.hij(" ",i.buttonText,"\n"))},styles:[".brn[_ngcontent-%COMP%]{transition:all ease-in-out .4s}.btn[_ngcontent-%COMP%]:hover{background:#1a1c24;color:#28e755;text-shadow:0px 0px 34px #26e852}.activeBtn[_ngcontent-%COMP%]{background:darkgreen}.btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.5;pointer-events:none}"]})}return l})()},3311:(m,h,s)=>{s.d(h,{T:()=>c});var e=s(5879),a=s(6814),l=s(7960);function f(o,i){if(1&o){const n=e.EpF();e.TgZ(0,"div",1),e._uU(1," Something went wrong, please try after sometime. "),e._UZ(2,"br")(3,"br"),e.TgZ(4,"ku-btn",2),e.NdJ("onClick",function(){e.CHM(n);const p=e.oxw();return e.KtG(p.refresh())}),e.qZA()()}2&o&&(e.xp6(4),e.Q6J("buttonClasses","btn refresh-btn")("buttonText","Refresh"))}let c=(()=>{class o{constructor(){this.isLoading=!1,this.listApiError=!1,this.refreshClicked=new e.vpe}refresh(){this.refreshClicked.emit()}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=e.Xpm({type:o,selectors:[["ku-err-info-box"]],inputs:{isLoading:"isLoading",listApiError:"listApiError"},outputs:{refreshClicked:"refreshClicked"},decls:1,vars:1,consts:[["class","cmn-info-box api-error-div",4,"ngIf"],[1,"cmn-info-box","api-error-div"],[3,"buttonClasses","buttonText","onClick"]],template:function(r,p){1&r&&e.YNc(0,f,5,2,"div",0),2&r&&e.Q6J("ngIf",!p.isLoading&&p.listApiError)},dependencies:[a.O5,l.Y],styles:[".api-error-div[_ngcontent-%COMP%]{background:#ececec;box-shadow:1px 1px 5px #ccc;box-sizing:border-box;color:red;font-weight:700;letter-spacing:.5px;margin-top:20px;padding:20px 10px;text-align:center}"]})}return o})()},1628:(m,h,s)=>{s.d(h,{v:()=>D});var e=s(8645),a=s(6306),l=s(9773),f=s(2096),c=s(6321),o=s(93),i=s(9360),n=s(4829),r=s(2306),p=s(8251),b=s(7103);const B=(0,r.d)(d=>function(t=null){d(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=t});function C(d,g){const{first:t,each:u,with:R=I,scheduler:x=g??c.z,meta:W=null}=(0,o.q)(d)?{first:d}:"number"==typeof d?{each:d}:d;if(null==t&&null==u)throw new TypeError("No timeout provided.");return(0,i.e)((S,y)=>{let E,v,w=null,L=0;const A=_=>{v=(0,b.f)(y,x,()=>{try{E.unsubscribe(),(0,n.Xf)(R({meta:W,lastValue:w,seen:L})).subscribe(y)}catch(P){y.error(P)}},_)};E=S.subscribe((0,p.x)(y,_=>{v?.unsubscribe(),L++,y.next(w=_),u>0&&A(u)},void 0,void 0,()=>{v?.closed||v?.unsubscribe(),w=null})),!L&&A(null!=t?"number"==typeof t?t:+t-x.now():u)})}function I(d){throw new B(d)}var U=s(5879),M=s(9862),k=s(6814);let D=(()=>{class d{constructor(t,u){this.http=t,this.datePipe=u,this.ytsURLFunc="",this.topMovies=!1,this.apiURLCRS="https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json",this.apiURLCRSwithV="https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json"+this.buildApiUrl(),this.apiURLIPInfoURL="https://ipinfo.io/?token=030401ea54de06",this.apiURLMoviesYts="https://yts.mx/api/v2/list_movies.json"+this.buildApiUrl()+"&limit=8&page=1",this.apiURLMoviesYtsLikeWise="https://yts.mx/api/v2/list_movies.json"+this.buildApiUrl()+"&limit=8&page=1&sort_by=like_count",this.apiURLMoviesYtsYearWise="https://yts.mx/api/v2/list_movies.json"+this.buildApiUrl()+"&limit=8&page=1&sort_by=year",this.apiURLMoviesYtsRatingWise="https://yts.mx/api/v2/list_movies.json"+this.buildApiUrl()+"&limit=8&page=1&sort_by=rating",this.apiURLMoviesYtsSeedsWise="https://yts.mx/api/v2/list_movies.json"+this.buildApiUrl()+"&limit=8&page=1&sort_by=seeds&order_by=asc",this.apiURLMoviesYtsDownloadWise="https://yts.mx/api/v2/list_movies.json"+this.buildApiUrl()+"&limit=8&page=1&sort_by=download_count",this.apiURLMoviesYts3d="https://yts.mx/api/v2/list_movies.json"+this.buildApiUrl()+"&limit=8&page=1&sort_by=year&minimum_rating=7",this.apiURLMoviesYtsMinRatingSeven="https://yts.mx/api/v2/list_movies.json"+this.buildApiUrl()+"&limit=8&page=1&sort_by=year&quality=3D",this.apiURLWeatherBit="https://api.weatherbit.io/v2.0/current?key=6d27b5796f404bc2b7d2d94f3d9ab148&postal_code=400601",this.apiURLWeatherBitBvi="https://api.weatherbit.io/v2.0/current?key=6d27b5796f404bc2b7d2d94f3d9ab148&postal_code=400066",this.apiURLWeatherBitGda="https://api.weatherbit.io/v2.0/current?key=6d27b5796f404bc2b7d2d94f3d9ab148&postal_code=389001",this.apiURLWeatherBitYyz="https://api.weatherbit.io/v2.0/current?key=6d27b5796f404bc2b7d2d94f3d9ab148&postal_code=L6R",this.apiURLWeatherBitDombi="https://api.weatherbit.io/v2.0/current?key=6d27b5796f404bc2b7d2d94f3d9ab148&postal_code=421201",this.apiURLWeatherBitWithPC="https://api.weatherbit.io/v2.0/current?key=6d27b5796f404bc2b7d2d94f3d9ab148",this.apiURLWeatherBitAPICount="https://api.weatherbit.io/v2.0/subscription/usage?key=6d27b5796f404bc2b7d2d94f3d9ab148",this.destroy=new e.x}getCRSData(){return this.http.get(this.apiURLCRSwithV).pipe((0,a.K)(t=>{throw console.log("Service Error => "+t),t}),(0,l.R)(this.destroy))}getIPInfoData(){return this.http.get(this.apiURLIPInfoURL).pipe((0,a.K)(t=>{throw console.log("Service Error => "+t),t}),(0,l.R)(this.destroy))}getDummyIPInfoData(){return(0,f.of)({ip:"103.69.113.51",city:"Th\u0101ne",region:"Maharashtra",country:"IN",loc:"19.1970,72.9635",org:"AS132996 Threesa Infoway Pvt.Ltd.",postal:"400601",timezone:"Asia/Kolkata"})}getYtsMoviesData(){return this.ytsURLFunc=!1===this.topMovies?this.apiURLMoviesYts:this.apiURLMoviesYtsLikeWise,this.http.get(this.ytsURLFunc).pipe(C(1e4),(0,a.K)(t=>{throw console.log("Service Error => "+t),t}),(0,l.R)(this.destroy))}getYtsMoviesmoreAPIData(t){return console.log("Service btnData => ",t),"linkOne"===t?(this.ytsURLFunc=this.apiURLMoviesYtsYearWise,console.log("Condition 1 is true")):"linkTwo"===t?(this.ytsURLFunc=this.apiURLMoviesYtsRatingWise,console.log("Condition 2 is true")):"linkThree"===t?(this.ytsURLFunc=this.apiURLMoviesYtsSeedsWise,console.log("Condition 3 is true")):"linkFour"===t?(this.ytsURLFunc=this.apiURLMoviesYtsDownloadWise,console.log("Condition 4 is true")):"linkFive"===t?(this.ytsURLFunc=this.apiURLMoviesYts3d,console.log("Condition 5 is true")):"linkSix"===t?(this.ytsURLFunc=this.apiURLMoviesYtsMinRatingSeven,console.log("Condition 6 is true")):(this.ytsURLFunc="",console.log("Both conditions are false")),this.http.get(this.ytsURLFunc).pipe(C(1e4),(0,a.K)(u=>{throw console.log("Service Error => "+u),u}),(0,l.R)(this.destroy))}getDummyWeatherBitData(){return(0,f.of)({count:1,data:[{app_temp:28.1,aqi:193,city_name:"Borivli",clouds:0,country_code:"IN",datetime:"2024-02-17:20",dewpt:15,dhi:0,dni:0,elev_angle:-78.52,ghi:0,gust:null,h_angle:-90,lat:19.1699,lon:72.8504,ob_time:"2024-02-17 20:30",pod:"n",precip:0,pres:1010.1,rh:45,slp:1011,snow:0,solar_rad:0,sources:["VABB","radar","satellite"],state_code:"16",station:"VABB",sunrise:"01:35",sunset:"13:09",temp:28,timezone:"Asia/Kolkata",ts:1708201800,uv:0,vis:16,weather:{description:"Smoke",code:711,icon:"a02n"},wind_cdir:"SSE",wind_cdir_full:"south-southeast",wind_dir:150,wind_spd:2.1}]})}getWeatherBitData(){return this.http.get(this.apiURLWeatherBit).pipe((0,a.K)(t=>{throw console.log("Service Error => "+t),t}),(0,l.R)(this.destroy))}getWeatherBitDataBvi(){return this.http.get(this.apiURLWeatherBitBvi).pipe((0,a.K)(t=>{throw console.log("Service Error => "+t),t}),(0,l.R)(this.destroy))}getWeatherBitDataGda(){return this.http.get(this.apiURLWeatherBitGda).pipe((0,a.K)(t=>{throw console.log("Service Error => "+t),t}),(0,l.R)(this.destroy))}getWeatherBitDataYyz(){return this.http.get(this.apiURLWeatherBitYyz).pipe((0,a.K)(t=>{throw console.log("Service Error => "+t),t}),(0,l.R)(this.destroy))}getWeatherBitDataDombi(){return this.http.get(this.apiURLWeatherBitDombi).pipe((0,a.K)(t=>{throw console.log("Service Error => "+t),t}),(0,l.R)(this.destroy))}getWeatherBitDatabyPC(t){return this.http.get(`${this.apiURLWeatherBitWithPC}&postal_code=${t}`).pipe((0,a.K)(R=>{throw console.log("Service Error => "+R),R}),(0,l.R)(this.destroy))}getWeatherBitDataCount(){return this.http.get(this.apiURLWeatherBitAPICount).pipe((0,a.K)(t=>{throw console.log("Service Error => "+t),t}),(0,l.R)(this.destroy))}formatDateForUrl(t){return`?v=${this.datePipe.transform(t,"ddMMyyyyHH")}`}buildApiUrl(){return this.formatDateForUrl(new Date)}static#t=this.\u0275fac=function(u){return new(u||d)(U.LFG(M.eN),U.LFG(k.uU))};static#e=this.\u0275prov=U.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},1954:(m,h,s)=>{s.d(h,{o:()=>c});var e=s(7394);class a extends e.w0{constructor(i,n){super()}schedule(i,n=0){return this}}const l={setInterval(o,i,...n){const{delegate:r}=l;return r?.setInterval?r.setInterval(o,i,...n):setInterval(o,i,...n)},clearInterval(o){const{delegate:i}=l;return(i?.clearInterval||clearInterval)(o)},delegate:void 0};var f=s(9039);class c extends a{constructor(i,n){super(i,n),this.scheduler=i,this.work=n,this.pending=!1}schedule(i,n=0){var r;if(this.closed)return this;this.state=i;const p=this.id,b=this.scheduler;return null!=p&&(this.id=this.recycleAsyncId(b,p,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(b,this.id,n),this}requestAsyncId(i,n,r=0){return l.setInterval(i.flush.bind(i,this),r)}recycleAsyncId(i,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&l.clearInterval(n)}execute(i,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(i,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,n){let p,r=!1;try{this.work(i)}catch(b){r=!0,p=b||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),p}unsubscribe(){if(!this.closed){const{id:i,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,(0,f.P)(r,this),null!=i&&(this.id=this.recycleAsyncId(n,i,null)),this.delay=null,super.unsubscribe()}}}},2631:(m,h,s)=>{s.d(h,{v:()=>l});var e=s(4552);class a{constructor(c,o=a.now){this.schedulerActionCtor=c,this.now=o}schedule(c,o=0,i){return new this.schedulerActionCtor(this,c).schedule(i,o)}}a.now=e.l.now;class l extends a{constructor(c,o=a.now){super(c,o),this.actions=[],this._active=!1}flush(c){const{actions:o}=this;if(this._active)return void o.push(c);let i;this._active=!0;do{if(i=c.execute(c.state,c.delay))break}while(c=o.shift());if(this._active=!1,i){for(;c=o.shift();)c.unsubscribe();throw i}}}},6321:(m,h,s)=>{s.d(h,{P:()=>f,z:()=>l});var e=s(1954);const l=new(s(2631).v)(e.o),f=l},4552:(m,h,s)=>{s.d(h,{l:()=>e});const e={now:()=>(e.delegate||Date).now(),delegate:void 0}},93:(m,h,s)=>{function e(a){return a instanceof Date&&!isNaN(a)}s.d(h,{q:()=>e})}}]);