(this["webpackJsonpmatelialize-react-template"]=this["webpackJsonpmatelialize-react-template"]||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),r=n(30),a=n.n(r),i=(n(63),n(5)),o=n(18),l=n(20),j=n(19),d=n(1),h=n(11),u=n(6),b=n(9),x=n.n(b),O=n(0),f=function(e){return x.a.Modal.getInstance(document.querySelector(e))},g=Object(u.f)((function(e){return Object(O.jsx)("nav",{className:"light-blue lighten-1",role:"navigation",children:Object(O.jsxs)("div",{className:"nav-wrapper container",children:[Object(O.jsx)(h.b,{id:"logo-container",className:"brand-logo",children:"ARAI"}),Object(O.jsx)("ul",{className:"right hide-on-med-and-down",children:Object(O.jsx)("li",{children:Object(O.jsx)(d.Button,{waves:"light",flat:!0,className:"white-text",onClick:function(){return f("#questions").open()},children:"\u554f\u984c\u96c6"})})}),Object(O.jsx)("ul",{id:"nav-mobile",className:"sidenav",children:Object(O.jsx)("li",{children:Object(O.jsx)(d.Button,{waves:"light",flat:!0,className:"white-text",onClick:function(){return f("#questions").open()},children:"\u554f\u984c\u96c6"})})}),Object(O.jsx)(h.b,{onClick:function(){return f("#questions").open()},flat:!0,"data-target":"nav-mobile",className:"sidenav-trigger white-text",children:Object(O.jsx)("i",{className:"material-icons",children:"menu"})})]})})})),m=n(54),p=n(33),w=n(34),v=n.n(w),y=n(55),C=n(23),S=n(35),k=n.p+"static/media/sample.a15d77bc.yml",I=n(56),N=n.n(I),A=n(10),M=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{className:"header center",children:"\u554f\u984c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f"}),Object(O.jsxs)(d.Row,{className:"center",children:[Object(O.jsxs)(d.Button,{waves:"light",className:"orange",onClick:function(){return(e="#questions",x.a.Modal.getInstance(document.querySelector(e))).open();var e},children:[Object(O.jsx)(d.Icon,{left:!0,children:"edit"}),"\u5225\u306e\u554f\u984c\u3092\u958b\u304f"]}),","]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})},B=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).componentDidMount=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==s.props.state){e.next=2;break}return e.abrupt("return");case 2:if(s.generateJson(),!(s.props.state.questions.length<=0)){e.next=13;break}return e.t0=s,e.next=7,N()(k);case 7:return e.next=9,e.sent.text();case 9:e.t1=e.sent,e.t0.tryEditYaml.call(e.t0,e.t1,!0,!0),e.next=14;break;case 13:s.generateYaml();case 14:x.a.textareaAutoResize(document.querySelector("textarea"));case 15:case"end":return e.stop()}}),e)}))),s.handleChange=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=Object(i.a)({},t,e.target.value);n?s.setState(c):s.props.accessor(c),s.generateJson(Object(i.a)({},t,e.target.value))},s.handleChangeBool=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=Object(i.a)({},t,e.target.checked);console.log(c),n?s.setState(c):s.props.accessor(c),s.generateJson(Object(i.a)({},t,e.target.checked))},s.handleChangeToggle=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.a)({},e,!(t?s.state:s.props.state)[e]);console.log(n),t?s.setState(n):s.props.accessor(n),x.a.textareaAutoResize(document.querySelector("textarea"))},s.handleKeyDown=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("Tab"===e.key&&229!==e.keyCode){e.preventDefault();var c=e.target,r=c.value,a=c.selectionStart,o=c.selectionEnd,l=4,j=Array(l+1).join(" "),d=r.substring(0,a)+j+r.substring(o,r.length);n?s.setState(Object(i.a)({},t,d),(function(){c.setSelectionRange(a+l,a+l)})):s.props.accessor(Object(i.a)({},t,d),(function(){c.setSelectionRange(a+l,a+l)}))}},s.tryEditJson=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(s.setState({jsonBuffer:e.target.value}),t){var n;try{n=JSON.parse(e.target.value)}catch(c){return void s.setState({isJsonValid:!1})}s.deleteOptions(n),s.setState({isJsonValid:!0}),s.setState({json:n}),s.props.accessor(n);try{s.generateYaml(n.questions)}catch(c){console.error("Failed to generateYaml",c)}}},s.tryEditYaml=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=n?e:e.target.value;if(s.setState({yamlBuffer:c}),t){var r;x.a.textareaAutoResize(document.querySelector("textarea")),console.log("TRY");try{if("object"!==typeof(r=S.a.load(c))||null===r||Array.isArray(r))throw new Error("Incorrect Type")}catch(a){return void s.setState({isYamlValid:!1})}console.log("TRY2"),s.setState({isYamlValid:!0,yaml:r}),s.props.accessor({questions:s.generateQuestions(r)}),s.generateJson({isYamlValid:!0,yaml:r,questions:s.generateQuestions(r)})}},s.generateQuestions=function(e){return Object.keys(e).map((function(t){var n=e[t];return null===n?n:{title:t,answers:Array.isArray(n)?n.map((function(e){return"string"===typeof e||"number"===typeof e?{title:String(e),answer:n.length<=1}:"object"===typeof e&&!Array.isArray(e)&&null!==e&&{title:Object.keys(e)[0],answer:["a","answer","ans"].includes(e[Object.keys(e)[0]])}})):[{title:n,answer:!0}]}}))},s.generateJson=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(p.a)({},s.props.state);s.deleteOptions(e),s.deleteOptions(t),s.setState({json:JSON.stringify(Object.assign(t,e),null,4),jsonBuffer:JSON.stringify(Object.assign(t,e),null,4),jsonRaw:JSON.stringify(Object.assign(t,e))}),x.a.textareaAutoResize(document.querySelector("textarea"))},s.generateYaml=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.props.state.questions,n={},c=Object(m.a)(t);try{for(c.s();!(e=c.n()).done;){var r=e.value;n[r.title]=r.answers.length<=1?r.answers[0].title:r.answers.map((function(e){return e.answer?Object(i.a)({},e.title,"answer"):e.title}))}}catch(o){c.e(o)}finally{c.f()}var a=S.a.dump(n).replace(/\n[^\s]+(.*):(.*)$/gm,(function(e){return"\n"+e}));s.setState({yaml:a,yamlBuffer:a})},s.deleteOptions=function(e){delete e.json,delete e.yaml,delete e.isJsonValid,delete e.isYamlValid,delete e.jsonBuffer,delete e.yamlBuffer,delete e.jsonRaw,delete e.jsonMinify,delete e.jsonEditable,delete e.showMore,delete e.id},s.state={json:"",yaml:{},jsonBuffer:"",yamlBuffer:"",jsonRaw:"",isJsonValid:!0,isYamlValid:!0,jsonMinify:!1,jsonEditable:!1,showMore:!1},s}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=function(e){return Object(O.jsx)(d.Col,{s:12,m:4,children:Object(O.jsxs)(d.Row,{children:[Object(O.jsx)(d.Col,{s:4,children:Object(O.jsx)(d.Switch,Object(p.a)({},e))}),Object(O.jsx)(d.Col,{s:8,children:e.title})]})})};return Object(O.jsx)(d.Section,{className:"no-pad-bot",id:"index-banner",children:void 0===this.props.state?Object(O.jsx)(M,{}):Object(O.jsxs)(d.Container,{children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(d.Row,{className:"center",children:[Object(O.jsxs)(d.Col,{s:12,m:6,children:[Object(O.jsx)(d.TextInput,{s:12,label:"Title",validate:!0,id:"title",value:this.props.state.title,onChange:function(t){return e.handleChange(t,"title")}}),Object(O.jsx)(d.TextInput,{s:12,label:"Description",validate:!0,id:"description",value:this.props.state.description,onChange:function(t){return e.handleChange(t,"description")}})]}),Object(O.jsx)(d.Col,{s:12,m:6,children:Object(O.jsxs)(d.Button,{large:!0,waves:"light",onClick:function(){return e.props.history.push("/q/".concat(e.props.state.id,"/play"))},children:[Object(O.jsx)(d.Icon,{left:!0,children:"play_arrow"}),"\u958b\u59cb"]})})]}),Object(O.jsxs)(d.Button,{flat:!0,waves:"light",onClick:function(){return e.handleChangeToggle("showMore",!0)},children:[Object(O.jsx)(d.Icon,{left:!0,children:this.state.showMore?"expand_less":"expand_more"}),"\u8a73\u7d30\u8a2d\u5b9a"]}),this.state.showMore?Object(O.jsxs)(d.Row,{children:[Object(O.jsx)("br",{}),Object(O.jsx)(t,{id:"soptions-switch",offLabel:"",checked:this.props.state.shuffleOptions,onChange:function(t){return e.handleChangeBool(t,"shuffleOptions")},onLabel:"",title:"\u9078\u629e\u80a2\u306e\u9806\u756a\u3092\u5165\u308c\u66ff\u3048\u308b"}),Object(O.jsx)(t,{id:"squestions-switch",offLabel:"",checked:this.props.state.shuffleQuestions,onChange:function(t){return e.handleChangeBool(t,"shuffleQuestions")},onLabel:"",title:"\u51fa\u984c\u9806\u3092\u5165\u308c\u66ff\u3048\u308b"}),Object(O.jsx)(t,{id:"hardmode-switch",offLabel:"",checked:this.props.state.hardMode,onChange:function(t){return e.handleChangeBool(t,"hardMode")},onLabel:"",title:"\u30cf\u30fc\u30c9\u30e2\u30fc\u30c9"}),Object(O.jsx)(t,{id:"manual-scoring-switch",offLabel:"",checked:this.props.state.manualScoring,onChange:function(t){return e.handleChangeBool(t,"manualScoring")},onLabel:"",title:"\u8a18\u8ff0\u5f0f\u306f\u81ea\u5df1\u63a1\u70b9\u3059\u308b"})]}):null,Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(d.Tabs,{className:"tab-demo z-depth-1 light-blue-text lighten-1",children:[Object(O.jsx)(d.Tab,{title:"\u554f\u984c\u7de8\u96c6(yaml)",children:Object(O.jsx)(d.Textarea,{s:12,id:"yaml-editor",label:this.state.isYamlValid?"":"YAML\u69cb\u6587\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059",value:this.state.yamlBuffer,onChange:this.tryEditYaml,onBlur:function(t){return e.tryEditYaml(t,!0)},onKeyDown:function(t){return e.handleKeyDown(t,"yamlBuffer",!0)}})}),Object(O.jsxs)(d.Tab,{title:"\u69cb\u6210\u30d5\u30a1\u30a4\u30eb(JSON)",children:[Object(O.jsx)("br",{}),Object(O.jsx)(d.Switch,{id:"minify-switch",offLabel:"",checked:this.state.jsonMinify,onChange:function(t){return e.handleChangeBool(t,"jsonMinify",!0)},onLabel:"Minify"}),this.state.jsonMinify?null:Object(O.jsx)(d.Switch,{id:"edit-switch",offLabel:"",checked:this.state.jsonEditable,onChange:function(t){return e.handleChangeBool(t,"jsonEditable",!0)},onLabel:"\u7de8\u96c6\u3059\u308b"}),Object(O.jsx)(d.Textarea,{s:12,value:this.state.jsonMinify?this.state.jsonRaw:this.state.jsonBuffer,label:this.state.isJsonValid?"":"JSON\u69cb\u6587\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059",validate:!0,disabled:this.state.jsonMinify||!this.state.jsonEditable,onChange:this.tryEditJson,onBlur:function(t){return e.tryEditJson(t,!0)},onKeyDown:function(t){return e.handleKeyDown(t,"jsonBuffer",!0)}})]}),Object(O.jsx)(d.Tab,{title:"GUI\u7de8\u96c6(\u958b\u767a\u4e2d)",disabled:!0,children:"Test 2"})]})]})})}}]),n}(c.a.Component),R=Object(u.f)(B),q=n.p+"static/media/2.2b34912e.png",T=n.p+"static/media/1.0a828dac.png",E=n.p+"static/media/0.47afa453.png",J=function(e){return Object(O.jsx)(d.Section,{children:Object(O.jsxs)(d.Container,{children:[Object(O.jsx)("h1",{className:"header center orange-text",children:"ARAI"}),Object(O.jsxs)(d.Row,{className:"center",children:[Object(O.jsx)("h5",{className:"header col s12 light",children:"Artificially Randomized Arrangements of Issues"}),Object(O.jsx)("h6",{className:"header col s12 light",children:"\u53cd\u5fa9\u5b66\u7fd2\u3067\u5727\u5012\u7684\u6210\u9577\ud83d\udcaa"})]}),Object(O.jsx)(d.Row,{className:"center",children:Object(O.jsxs)(d.Button,{onClick:function(){return x.a.Modal.getInstance(document.querySelector("#questions")).open()},large:!0,waves:"light",className:"orange",children:[Object(O.jsx)(d.Icon,{left:!0,children:"edit"}),"\u554f\u984c\u3092\u9078\u3076"]})}),Object(O.jsxs)("h6",{className:"center",children:[Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",style:{height:"16px"}}),Object(O.jsx)("a",{href:"https://github.com/BonyChops/arai",target:"_blank",rel:"noopener noreferrer",children:"BonyChops/arai"})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(d.Row,{children:[Object(O.jsx)(d.Col,{s:4,className:"center",children:Object(O.jsx)("img",{src:q,style:{width:"80%"}})}),Object(O.jsx)(d.Col,{s:4,className:"center",children:Object(O.jsx)("img",{src:T,style:{width:"80%"}})}),Object(O.jsx)(d.Col,{s:4,className:"center",children:Object(O.jsx)("img",{src:E,style:{width:"80%"}})})]})]})})},Y=n(24),W=Object(u.f)((function(e){var t,n=function(e){return x.a.Modal.getInstance(document.querySelector(e))},c=function(e,t){n("#questions").close(),0==t.length&&n("#dataWarn").open();var s=e.generateQuestion();console.log(e.history),e.history.push("/q/".concat(s))},r=Object(s.useState)(!1),a=Object(Y.a)(r,2),o=a[0],l=a[1];console.log(e.state);var j=Object.keys(e.state).filter((function(t){return/^question_(.*)$/.test(t)&&void 0!==e.state[t]})).map((function(t){return e.state[t]}));return Object(O.jsxs)("div",{children:[Object(O.jsx)(d.Modal,{id:"questions",header:"\u554f\u984c\u3092\u9078\u629e...",fixedFooter:A.isMobile,actions:[Object(O.jsxs)(d.Button,{flat:!0,waves:"light",className:"orange-text",onClick:function(){c(e,j)},children:[Object(O.jsx)(d.Icon,{left:!0,children:"edit"}),"\u65b0\u898f\u4f5c\u6210"]}),Object(O.jsx)(d.Button,{flat:!0,waves:"light",onClick:function(){return n("#questions").close()},children:"CLOSE"})],bottomSheet:A.isMobile,children:Object(O.jsxs)(d.Row,{children:[j.map((function(e,t){return Object(O.jsx)(d.Col,{m:4,s:12,children:Object(O.jsx)(d.Card,{actions:[Object(O.jsx)(h.b,{to:"/q/".concat(e.id,"/play"),onClick:function(){return n("#questions").close()},children:Object(O.jsx)(d.Icon,{children:"play_arrow"})},"play"),Object(O.jsx)(h.b,{to:"/q/".concat(e.id),onClick:function(){return n("#questions").close()},children:Object(O.jsx)(d.Icon,{children:"edit"})},"edit"),Object(O.jsx)(h.b,{onClick:function(){l(e),n("#deleteWarn").open()},children:Object(O.jsx)(d.Icon,{children:"delete"})},"delete")],className:"",closeIcon:Object(O.jsx)(d.Icon,{children:"close"}),revealIcon:Object(O.jsx)(d.Icon,{children:"more_vert"}),title:e.title,children:e.description})},t)})),0===j.length?Object(O.jsx)(d.Section,{children:Object(O.jsxs)(d.Container,{children:[Object(O.jsx)("h4",{className:"header center",children:"\u554f\u984c\u304c\u307e\u3060\u3042\u308a\u307e\u305b\u3093"}),Object(O.jsxs)(d.Row,{className:"center",children:[Object(O.jsxs)(d.Button,{waves:"light",className:"orange",onClick:function(){c(e,j)},children:[Object(O.jsx)(d.Icon,{left:!0,children:"edit"}),"\u65b0\u898f\u4f5c\u6210"]}),","]})]})}):null]})}),Object(O.jsx)(d.Modal,(t={id:"deleteWarn",header:"\u554f\u984c\u3092\u6d88\u3057\u307e\u3059",bottomSheet:A.isMobile,actions:[Object(O.jsx)(d.Button,{flat:!0,waves:"light",onClick:function(){return n("#deleteWarn").close()},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(O.jsxs)(d.Button,{flat:!0,waves:"light",className:"red-text",onClick:function(){e.baseAccessor(Object(i.a)({},"question_".concat(o.id),void 0)),n("#deleteWarn").close()},children:[Object(O.jsx)(d.Icon,{left:!0,children:"delete"}),"\u5b8c\u5168\u306b\u6d88\u3059"]})]},Object(i.a)(t,"bottomSheet",A.isMobile),Object(i.a)(t,"children",Object(O.jsxs)(d.Row,{children:["\u4ee5\u4e0b\u306e\u554f\u984c\u3092\u6d88\u3057\u307e\u3059\uff0e\u672c\u5f53\u306b\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f",Object(O.jsx)("br",{}),Object(O.jsx)(d.Col,{m:6,s:12,children:Object(O.jsx)(d.Card,{title:o.title,children:o.description})})]})),t)),Object(O.jsxs)(d.Modal,{id:"dataWarn",header:"\u30c7\u30fc\u30bf\u306e\u53d6\u6271\u306b\u95a2\u3059\u308b\u6ce8\u610f",bottomSheet:A.isMobile,children:["\u3053\u306eWeb\u30a2\u30d7\u30ea\u3067\u306f\uff0c\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3057\u305f\u554f\u984c\u3092\u30af\u30e9\u30a6\u30c9\u3067\u306f\u306a\u304f\u30d6\u30e9\u30a6\u30b6\u306b\u4fdd\u5b58\u3057\u307e\u3059(localStorage)\uff0e\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3057\u305f\u30af\u30a4\u30ba\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u3089\u308c\u308b\u3053\u3068\u306f(\u73fe\u6642\u70b9\u3067\u306f)\u3042\u308a\u307e\u305b\u3093\uff0e",Object(O.jsx)("br",{}),Object(O.jsx)("span",{className:"red-text",children:"\u3053\u306eWeb\u30a2\u30d7\u30ea\u306f\u307e\u3060\u30d9\u30fc\u30bf\u7248\u3067\u3059\uff0e"}),"\u30c7\u30fc\u30bf\u304c\u98db\u3073\u3084\u3059\u3044\u306e\u3067\u5fc5\u305a\u81ea\u8eab\u3067\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3092\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\uff0e",Object(O.jsx)("br",{}),"\u5f53Web App\u3067\u306fGoogle Analytics\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\uff0e"]})]})})),Q=n(57),D=(n(115),n(26)),Z=["Well done!","Nailed it!","You got it!","Nice work!","Fantastic!","Excellent!","Brilliant!","Amazing!","Superb!","Cool!","Good job!","You\u2019re getting better!","You\u2019re improving!","\u3088\u304f\u3067\u304d\u307e\u3057\u305f\uff01","\u3055\u3059\u304c\uff01","\u8d85\u4e16\u7d00\u8a95\u751f \u3071\u3093\u3071\u304b\u3071\u30fc\u3093","\u266a\u301c(\u3053\u3053\u3067\u3058\u3087\u3044\u3075\u308b\u304c\u6d41\u308c\u308b)","Happy hacking!","\u8133\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u6b63\u5e38\u306b\u9032\u884c\u3057\u3066\u3044\u307e\u3059...","\u3082\u3057\u304b\u3057\u3066: \u5929\u624d","\u3042\u306a\u305f\u300c\u5b8c\u5168\u306b\u7406\u89e3\u3057\u305f\u300d","\u3042\u306a\u305f\u306b\u306f\u697d\u52dd\u904e\u304e\u307e\u3057\u305f\u306d\uff01","Awesome!"],L=["\u3088\u304f\u78ba\u8a8d\u3057\u3066\u307f\u3088\u3046","\u304a\u3063\u3068\uff1f","\u60dc\u3057\u3044\uff01","\u3080\u3080\uff1f","...\uff01"],G=function(e){return e[Math.floor(Math.random()*e.length)]},z=function(e){return x.a.Modal.getInstance(document.querySelector(e))},U=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(o.a)(this,n),(s=t.call(this,e)).shuffle=function(e){for(var t,n,s=e.length;0!==s;)n=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[n],e[n]=t;return e},s.regenerateQuiz=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=JSON.parse(JSON.stringify(s.state.questions.filter((function(t){return!e||!t.correct}))));console.log("answer: ",s.props.state.hardMode),s.setState({questions:(s.props.state.shuffleQuestions?s.shuffle(t):t).map((function(e){return{answers:(s.props.state.shuffleOptions?s.shuffle(e.answers):e.answers).map((function(e,t){return e.selected=!1,e.key=t,e.insert="",e})).filter((function(e){return!s.props.state.hardMode||e.answer})),title:e.title,answered:!1,correct:!1,checkCorrect:!1}})),currentIndex:0,disabledNext:!1,emptyWarn:!1})},s.checkAnswer=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(s.setState({emptyWarn:!1}),!e.answered||e.checkCorrect){var n=s.state.questions,c=n[s.state.currentIndex];if(e.answers.length<=1){if(console.log(s.props.state.manualScoring),!c.checkCorrect&&s.props.state.manualScoring&&s.state["answer_".concat(0)]!==e.answers[0].title)return c.checkCorrect=!0,c.answered=!0,console.log(s.state["answer_".concat(0)]),void(void 0!==s.state["answer_".concat(0)]&&""!==s.state["answer_".concat(0)]||s.setState({answer_0:"(\u81ea\u5df1\u63a1\u70b9)"}));if(c.checkCorrect=!1,""===s.state["answer_".concat(0)]||void 0===s.state["answer_".concat(0)])return console.log(""),void s.setState({emptyWarn:!0});var r=c.answers[0];t||s.state["answer_".concat(0)]===e.answers[0].title?(r.selected=!0,r.insert=s.state["answer_".concat(0)],c.answered=!0,c.correct=!0):(r.insert=s.state["answer_".concat(0)],c.answered=!0,c.correct=!1)}else if(e.answers.filter((function(e){return e.answer})).length<=1){if(console.log(s.state["answer_".concat(0)]),""===s.state["answer_".concat(0)]||void 0===s.state["answer_".concat(0)])return void s.setState({emptyWarn:!0});var a=c.answers.find((function(e){return e.answer}));c.answers.find((function(e){return e.title===s.state["answer_".concat(0)]})).selected=!0,String(s.state["answer_".concat(0)])===a.title?(console.log(String(s.state["answer_".concat(0)])),console.log(a.title),a.selected=!0,c.answered=!0,c.correct=!0):(c.answered=!0,c.correct=!1)}else{for(var i=0,o=Object.entries(c.answers);i<o.length;i++){var l=Object(Y.a)(o[i],2),j=l[0],d=l[1];d.selected=!0===s.state["answer_".concat(j)],console.log(d)}console.log(c.answers[1]),c.correct=c.answers.every((function(e){return e.answer===e.selected})),c.answered=!0}for(var h={},u=0;u<e.answers.length;u++)h["answer_".concat(u)]="";h.questions=n,s.setState(h)}else s.setState({currentIndex:s.state.currentIndex+1,emptyWarn:!1})},s.goBack=function(){s.setState({currentIndex:s.state.currentIndex-1,emptyWarn:!1})},console.log(e),void 0!==s.props.state&&s.props.state.questions.length<=0&&(console.log(s.props.history),setTimeout((function(){s.props.history.replace("/q/".concat(s.props.state.id)),z("#noQuestions").open()}),1));var c=e.state.questions.slice();return s.state={questions:(e.state.shuffleQuestions?s.shuffle(c):c).map((function(t){return{answers:(e.state.shuffleOptions?s.shuffle(t.answers):t.answers).map((function(e,t){return e.selected=!1,e.key=t,e})).filter((function(e){return!s.props.state.hardMode||e.answer})),title:t.title,answered:!1,correct:!1}})),currentIndex:0,disabledNext:!1,emptyWarn:!1},console.log(s.state.questions),s}return Object(C.a)(n,[{key:"render",value:function(){var e,t,n,s=this;if(void 0===this.props.state)return Object(O.jsx)(M,{});var c=this.state.questions[this.state.currentIndex];return Object(O.jsxs)(d.Section,{children:[Object(O.jsx)(d.Container,{children:Object(O.jsx)(d.Row,{children:Object(O.jsxs)(d.Col,{offset:"m2",m:8,s:12,children:[Object(O.jsxs)(d.Row,{children:[Object(O.jsx)(d.Col,{s:6,children:Object(O.jsxs)("h6",{children:[this.props.state.title," (",Object(O.jsx)(h.b,{onClick:function(){return z("#backToEdit").open()},children:"\u7de8\u96c6"}),")"]})}),this.state.currentIndex<this.state.questions.length?Object(O.jsx)(d.Col,{s:6,children:Object(O.jsxs)("h6",{className:"right-align",children:[this.state.currentIndex+1," / ",this.state.questions.length," \u554f\u76ee"]})}):null]}),Object(O.jsxs)(d.Row,{children:[Object(O.jsx)(d.Col,{s:2,children:this.state.currentIndex>0?Object(O.jsx)(d.Button,{className:"light-blue",onClick:function(){return s.goBack()},children:Object(O.jsx)(d.Icon,{children:"arrow_back"})}):null}),Object(O.jsx)(d.Col,{s:8,className:"right-align",children:Object(O.jsx)(d.ProgressBar,{progress:100*this.state.currentIndex/this.state.questions.length})}),Object(O.jsx)(d.Col,{s:2,className:"right-align",children:this.state.currentIndex<this.state.questions.length?Object(O.jsx)(d.Button,{onClick:function(){return s.checkAnswer(c)},disabled:c.checkCorrect,className:(c.answered?"light-blue":"orange")+" right-align "+(this.state.currentIndex<=0?"pulse":""),children:Object(O.jsx)(d.Icon,{children:c.answered?"arrow_forward":"check"})}):null})]}),this.state.currentIndex<this.state.questions.length?Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:Object(O.jsx)(D.InlineTex,{texContent:c.title})}),c.correct?Object(O.jsxs)("h5",{className:"light-green-text",children:[Object(O.jsx)(d.Icon,{left:!0,children:"check"}),G(Z)]}):null,c.checkCorrect||!c.answered||c.correct?null:Object(O.jsxs)("h5",{className:"red-text",children:[Object(O.jsx)(d.Icon,{left:!0,children:"close"}),G(L)]}),this.state.emptyWarn?Object(O.jsx)("h6",{className:"red-text",children:"\u767d\u7d19\u3067\u63d0\u51fa\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff01"}):null,c.answers.length<=1?c.answers.map((function(e,t){return Object(O.jsxs)(d.Row,{className:c.checkCorrect?"":e.answer&&e.selected?"green lighten-4":e.selected||c.answers.length<=1&&c.answered?"red lighten-4":"",children:[Object(O.jsxs)(d.Col,{s:12,children:[s.props.state.manualScoring?Object(O.jsx)("p",{children:"(\u81ea\u5df1\u63a1\u70b9\u30e2\u30fc\u30c9\u306e\u305f\u3081\u767d\u7d19\u3067\u3082OK\u3067\u3059)"}):null,Object(O.jsx)(d.TextInput,{id:"answer_".concat(t),label:"\u56de\u7b54\u3092\u3053\u3053\u306b\u66f8\u3044\u3066\u304f\u3060\u3055\u3044",className:"black-text",disabled:c.answered,onChange:function(e){return s.setState(Object(i.a)({},"answer_".concat(t),e.target.value))},value:!c.answered||c.checkCorrect?s.state["answer_".concat(t)]:e.insert})]}),c.answered?Object(O.jsx)(d.Col,{s:12,className:e.answer&&e.selected?"green-text":e.selected||c.answers.length<=1&&c.answered?"red-text":"",children:Object(O.jsx)(d.Row,{children:Object(O.jsxs)(d.Col,{s:12,children:["\u7b54: ",Object(O.jsx)(D.InlineTex,{texContent:e.title})]})})}):null,c.checkCorrect?Object(O.jsxs)(d.Col,{s:12,children:[Object(O.jsx)("h6",{children:"\u7b54\u3048\u306f\u3042\u3063\u3066\u3044\u307e\u3057\u305f\u304b\uff1f"}),Object(O.jsx)("br",{}),Object(O.jsxs)(d.Row,{children:[Object(O.jsx)(d.Col,{s:6,m:4,offset:"m2",className:"align-center",children:Object(O.jsxs)(d.Button,{className:"white green-text",onClick:function(){return s.checkAnswer(c,!0)},children:[Object(O.jsx)(d.Icon,{left:!0,children:"check"}),"\u6b63\u89e3"]})}),Object(O.jsx)(d.Col,{s:6,m:4,className:"align-center",children:Object(O.jsxs)(d.Button,{className:"white red-text",onClick:function(){return s.checkAnswer(c,!1)},children:[Object(O.jsx)(d.Icon,{left:!0,children:"close"}),"\u4e0d\u6b63\u89e3"]})}),Object(O.jsx)(d.Col,{s:12,m:4,offset:"m2"})]})]}):null]})})):c.answers.filter((function(e){return e.answer})).length<=1?Object(O.jsx)(d.Row,{children:c.answers.map((function(e,t){return[Object(O.jsx)("p",{className:e.answer&&e.selected?"green lighten-4":e.selected||c.answers.length<=1&&c.answered?"red lighten-4":"",children:Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{name:"answer-group",className:"with-gap",onChange:function(e){return s.setState(Object(i.a)({},"answer_".concat(0),e.target.value))},type:"radio",id:"answer_".concat(t),disabled:c.answered,value:e.title,checked:c.answered?e.selected:s.state["answer_".concat(0)]===e.title}),Object(O.jsxs)("span",{children:[Object(O.jsx)(D.InlineTex,{texContent:e.title}),e.answer&&c.answered?Object(O.jsx)(d.Icon,{children:"check"}):null]})]})},t)]}))}):Object(O.jsx)(d.Row,{children:c.answers.map((function(e,t){return[Object(O.jsx)("p",{className:c.correct&&e.answer?"green lighten-4":c.answered&&!c.correct&&e.answer!==e.selected?"red lighten-4":"",children:Object(O.jsxs)("label",{children:[Object(O.jsx)(d.Checkbox,{checked:c.answered?e.selected:s.state["answer_".concat(t)],onChange:function(e){return s.setState(Object(i.a)({},"answer_".concat(t),e.target.checked))},filledIn:!0,id:"answer_".concat(t),value:e.title,label:e.title,disabled:c.answered}),c.answered&&e.answer?Object(O.jsx)(d.Icon,{children:"check"}):null]})},t)]}))})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)(d.Row,{children:[Object(O.jsx)(d.Col,{s:8,children:Object(O.jsxs)("h2",{className:"green-text",children:[Object(O.jsx)(d.Icon,{medium:!0,left:!0,children:"check"}),"\u304a\u75b2\u308c\u69d8\uff01"]})}),Object(O.jsxs)(d.Col,{s:4,children:[Object(O.jsx)(Q.a,{value:100*this.state.questions.filter((function(e){return e.correct})).length/this.state.questions.length,text:"".concat(100*this.state.questions.filter((function(e){return e.correct})).length/this.state.questions.length,"%")}),Object(O.jsxs)("h5",{className:"center",children:[this.state.questions.filter((function(e){return e.correct})).length," / ",this.state.questions.length]})]})]}),Object(O.jsxs)(d.Table,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{"data-field":"question",children:"\u554f\u984c"}),Object(O.jsx)("th",{"data-field":"your-answer",children:"\u3042\u306a\u305f\u306e\u56de\u7b54"}),Object(O.jsx)("th",{"data-field":"right-answer",children:"\u6b63\u89e3"})]})}),Object(O.jsx)("tbody",{children:this.state.questions.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{className:e.correct?"green-text":"red-text",children:[Object(O.jsx)(d.Icon,{left:!0,children:e.correct?"check":"close"})," ",Object(O.jsxs)(h.b,{onClick:function(){return s.setState({currentIndex:t})},children:["\u7b2c",t+1,"\u554f "]})]}),Object(O.jsx)("td",{className:"truncate "+(e.correct?"green-text":"red-text"),children:e.answers.length<=1?e.answers[0].insert:e.answers.filter((function(e){return e.selected})).map((function(e){return e.title})).join(", ")}),Object(O.jsx)("td",{className:"truncate",children:e.answers.length<=1?e.answers[0].title:e.answers.filter((function(e){return e.answer})).map((function(e){return e.title})).join(", ")})]},t)}))})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(d.Row,{className:"right-align",children:[Object(O.jsx)(d.Button,{className:"light-blue",onClick:function(){s.state.questions.filter((function(e){return e.correct})).length===s.state.questions.length?x.a.toast({html:"1\u3064\u3082\u9593\u9055\u3048\u3066\u306a\u3044\u3067\u3057\u3087w"}):z("#retryFailedQuiz").open()},style:{marginRight:"25px"},children:"\u9593\u9055\u3048\u305f\u554f\u984c\u3060\u3051\u3084\u308a\u76f4\u3059"}),Object(O.jsx)(d.Button,{className:"light-blue",onClick:function(){return z("#retryQuiz").open()},children:"\u5168\u90e8\u3084\u308a\u76f4\u3059"})]})]})]})})}),Object(O.jsx)(d.Modal,(e={id:"backToEdit",header:"\u30da\u30fc\u30b8\u3092\u79fb\u52d5\u3057\u307e\u3059",bottomSheet:A.isMobile,actions:[Object(O.jsx)(d.Button,{flat:!0,waves:"light",onClick:function(){return z("#backToEdit").close()},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(O.jsx)(d.Button,{flat:!0,waves:"light",className:"orange-text",onClick:function(){s.props.history.push("/q/".concat(s.props.state.id)),z("#backToEdit").close()},children:"\u7de8\u96c6\u3078\u79fb\u52d5"})]},Object(i.a)(e,"bottomSheet",A.isMobile),Object(i.a)(e,"children",Object(O.jsx)(d.Row,{children:"\u73fe\u5728\u306e\u9032\u6357\u306f\u5931\u308f\u308c\u307e\u3059\u304c\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"})),e)),Object(O.jsx)(d.Modal,(t={id:"retryQuiz",header:"\u554f\u984c\u3092\u3084\u308a\u76f4\u3059",bottomSheet:A.isMobile,actions:[Object(O.jsx)(d.Button,{flat:!0,waves:"light",onClick:function(){return z("#backToEdit").close()},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(O.jsx)(d.Button,{flat:!0,waves:"light",className:"orange-text",onClick:function(){s.regenerateQuiz(!1),z("#retryQuiz").close()},children:"LET'S GO"})]},Object(i.a)(t,"bottomSheet",A.isMobile),Object(i.a)(t,"children",Object(O.jsx)(d.Row,{children:"\u73fe\u5728\u306e\u9032\u6357\u306f\u5931\u308f\u308c\u307e\u3059\u304c\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"})),t)),Object(O.jsx)(d.Modal,(n={id:"retryFailedQuiz",header:"\u9593\u9055\u3048\u305f\u554f\u984c\u3092\u3084\u308a\u76f4\u3059",bottomSheet:A.isMobile,actions:[Object(O.jsx)(d.Button,{flat:!0,waves:"light",onClick:function(){return z("#backToEdit").close()},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(O.jsx)(d.Button,{flat:!0,waves:"light",className:"orange-text",onClick:function(){s.regenerateQuiz(!0),z("#retryFailedQuiz").close()},children:"LET'S GO"})]},Object(i.a)(n,"bottomSheet",A.isMobile),Object(i.a)(n,"children",Object(O.jsx)(d.Row,{children:"\u73fe\u5728\u306e\u9032\u6357\u306f\u5931\u308f\u308c\u307e\u3059\u304c\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"})),n))]})}}]),n}(c.a.Component),_=Object(u.f)(U),F=n(58),V=n.n(F),P=function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(d.Modal,{id:"noQuestions",header:"\u554f\u984c\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u307e\u305b\u3093",bottomSheet:A.isMobile,children:"\u554f\u984c\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044"})})},H=n(119),X=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(o.a)(this,n),(s=t.call(this,e)).accessor=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.props.currentId,n="question_".concat(t);console.log(e);var c=s.state[n];if(void 0===c)return!1;s.setState(Object(i.a)({},n,H(void 0===s.state[n]?{}:s.state[n],e,{arrayMerge:function(e,t,n){return t}})))},s.generateQuestion=function(){var e=function(){var e=Math.random();return e.toString(36),e.toString(36).substr(2,5)}();return s.setState(Object(i.a)({},"question_".concat(e),{title:"\u7121\u984c\u306e\u30af\u30a4\u30ba",description:V()().format("YYYY/MM/DD HH:mm:ss\u306e\u30af\u30a4\u30ba"),id:e,questions:[],shuffleOptions:!1,shuffleQuestions:!1,hardMode:!1,manualScoring:!1})),e},s.render=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)(h.a,{basename:"/arai",children:[Object(O.jsx)(g,{}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(J,{})}}),Object(O.jsx)(u.a,{exact:!0,path:"/q/:id/play",render:function(e){return Object(O.jsx)(_,{state:s.state["question_".concat(e.match.params.id)],accessor:function(t){return s.accessor(t,e.match.params.id)},baseAccessor:s.setState},e.match.params.id)}}),Object(O.jsx)(u.a,{exact:!0,path:"/q/:id",render:function(e){return Object(O.jsx)(R,{state:s.state["question_".concat(e.match.params.id)],accessor:function(t){return s.accessor(t,e.match.params.id)},baseAccessor:s.setState},e.match.params.id)}}),Object(O.jsx)(u.a,{render:function(){return Object(O.jsx)(M,{})}})]}),Object(O.jsx)(W,{generateQuestion:s.generateQuestion,state:s.state,baseAccessor:function(e){return s.setState(e)}})]}),Object(O.jsx)(P,{})]})};var c=JSON.parse(window.localStorage.getItem("data"));return s.state=null!==c?c:{},setInterval((function(){window.localStorage.setItem("data",JSON.stringify(s.state)),console.log("saved"),console.log(s.state)}),5e3),s}return n}(c.a.Component),K=Object(u.f)(X),$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(K,{})})}),document.getElementById("root")),$()},63:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.8cfc4bec.chunk.js.map