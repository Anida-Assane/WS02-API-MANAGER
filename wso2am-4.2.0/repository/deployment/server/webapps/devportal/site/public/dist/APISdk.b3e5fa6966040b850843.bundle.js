(this.webpackJsonp=this.webpackJsonp||[]).push([[27],{1555:function(e,t){e.exports=function(e,t,a,n){var i=new Blob(void 0!==n?[n,e]:[e],{type:a||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(i,t);else{var s=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i),r=document.createElement("a");r.style.display="none",r.href=s,r.setAttribute("download",t),void 0===r.download&&r.setAttribute("target","_blank"),document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(s)}),200)}}},5033:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),s=a(1678),r=a(2741),l=a(7),o=a(75),c=a(1212),d=a(1213),g=n.forwardRef((function(e,t){var a=e.disableSpacing,i=void 0!==a&&a,s=e.classes,r=e.className,d=Object(o.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(l.a)({className:Object(c.default)(s.root,r,!i&&s.spacing),ref:t},d))})),m=Object(d.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(g),p=a(5002),h=a(4991),u=a(4986),b=a(1679),f=a(1555),k=a.n(f),w=a(1656),S=a(1655),v=a(22),E=a.n(v),y=a(1653),C=a(361),D=a(1225),L=a(1294),j=a(48),x=a(25),R=a(352);function A(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class O extends i.a.Component{constructor(e){super(e),A(this,"handleClick",(e,t)=>{const a=this.api_uuid,n=t;this.getSdkForApi(a,n)}),A(this,"handleChange",e=>{const{sdkLanguages:t}=this.state;let a=t;a=a.filter(t=>-1!==t.toLowerCase().search(e.target.value.toLowerCase())),this.setState({items:a})}),A(this,"addDefaultSrc",e=>{e.target.src=x.app.context+"/site/public/images/sdks/default.svg"}),this.state={sdkLanguages:null,items:null};const{match:t,apiId:a}=this.props;this.api_uuid=t?t.params.apiUuid:a,this.filter_threshold=5,this.getSdkForApi=this.getSdkForApi.bind(this),this.handleClick=this.handleClick.bind(this),this.handleChange=this.handleChange.bind(this),this.addDefaultSrc=this.addDefaultSrc.bind(this)}componentDidMount(){const e=new R.a;if(null!=j.a.getUser()){e.getSdkLanguages().then(e=>{0!==e.obj.length?(this.setState({sdkLanguages:e.obj}),this.setState({items:e.obj})):this.setState({sdkLanguages:!1})}).catch(e=>{console.log(e),D.a.error(e)})}}getSdkForApi(e,t){(new R.a).getSdk(e,t).then(e=>{const t=e.headers["content-disposition"].match(/filename="(.+)"/)[1],a=e.data;k()(a,t)}).catch(e=>{console.log(e),D.a.error(e)})}render(){const e=this.state.items,{onlyIcons:t,intl:a,classes:n,theme:l}=this.props,{custom:{apiDetailPages:{onlyShowSdks:o}}}=l,c=e&&e.length>0&&o&&o.length>0?e.filter(e=>o.includes(e.toLowerCase())):e;return t?c&&i.a.createElement(i.a.Fragment,null,c.map((e,t)=>t<3&&i.a.createElement(b.a,{item:!0,xs:4,key:e},i.a.createElement(s.a,{onClick:t=>this.handleClick(t,e),onKeyDown:t=>this.handleClick(t,e),style:{cursor:"pointer"},"aria-label":"Download "+e+" SDK",id:"download-sdk-btn"},i.a.createElement("img",{alt:e,src:x.app.context+"/site/public/images/sdks/"+String(e)+".svg",style:{width:80,height:80,margin:10}}))))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:n.titleWrappper},i.a.createElement(S.a,{variant:"h4",component:"h2",className:n.titleSub},i.a.createElement(y.a,{id:"Apis.Details.Sdk.title",defaultMessage:"Software Development Kits (SDKs)"})),c&&this.state.sdkLanguages.length>=this.filter_threshold&&i.a.createElement(w.a,{variant:"outlined",id:"search",label:a.formatMessage({defaultMessage:"Search SDK",id:"Apis.Details.Sdk.search.sdk"}),type:"text",margin:"normal",name:"searchSdk",onChange:this.handleChange})),c?i.a.createElement(b.a,{container:!0,spacing:0,className:n.gridRoot},i.a.createElement(b.a,{item:!0,xs:12,sm:6,md:9,lg:9,xl:10},i.a.createElement(b.a,{container:!0,justify:"flex-start",spacing:4},c.map(e=>i.a.createElement(b.a,{key:e,item:!0},i.a.createElement("div",{style:{width:"auto",textAlign:"center",margin:"10px"}},i.a.createElement(r.a,{className:n.cardRoot},i.a.createElement("div",null,e.toString().toUpperCase()),i.a.createElement(u.a,null),i.a.createElement(p.a,{title:e.toString().toUpperCase(),src:x.app.context+"/site/public/images/sdks/"+String(e)+".svg",classes:{root:n.cardTitle}},i.a.createElement("img",{alt:e,onError:this.addDefaultSrc,src:`${x.app.context}/site/public/images/sdks/${e}.svg`,style:{width:"100px",height:"100px",margin:"30px"}})),i.a.createElement(m,null,i.a.createElement(b.a,{container:!0,justify:"center"},i.a.createElement(s.a,{color:"secondary",onClick:t=>this.handleClick(t,e),"aria-label":"Download "+e+" SDK",id:"download-sdk-btn"},i.a.createElement(h.a,null,"arrow_downward"),i.a.createElement(y.a,{id:"Apis.Details.Sdk.download.btn",defaultMessage:"Download"}))))))))))):i.a.createElement("div",{className:n.genericMessageWrapper},i.a.createElement(L.a,{type:"info",className:n.dialogContainer},i.a.createElement(S.a,{variant:"h5",component:"h3"},i.a.createElement(y.a,{id:"Apis.Details.Sdk.no.sdks",defaultMessage:"No SDKs"})),i.a.createElement(S.a,{component:"p"},i.a.createElement(y.a,{id:"Apis.Details.Sdk.no.sdks.content",defaultMessage:"No SDKs available for this API"})))))}}O.propTypes={classes:E.a.instanceOf(Object).isRequired};t.default=Object(C.c)(Object(d.a)(e=>({genericMessageWrapper:{margin:e.spacing(2)},titleSub:{marginLeft:e.spacing(3),paddingTop:e.spacing(2),paddingBottom:e.spacing(2),color:e.palette.getContrastText(e.palette.background.default)},gridRoot:{marginLeft:e.spacing(2)},titleWrappper:{display:"flex",alignItems:"center","& h4":{marginRight:e.spacing(1)}},cardTitle:{background:e.palette.grey[50]},cardRoot:{background:e.custom.apiDetailPages.sdkBackground}}),{withTheme:!0})(O))}}]);
//# sourceMappingURL=APISdk.b3e5fa6966040b850843.bundle.js.map