(this.webpackJsonprequestbinfront=this.webpackJsonprequestbinfront||[]).push([[0],{29:function(e,t,c){},55:function(e,t,c){},62:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(19),r=c.n(s),a=c(18),i=(c(55),c(6)),l=c(91),j=c(92),d=c(25),o=c.p+"static/media/binme2.dcf75a6c.png",b=(c(62),c(1)),h=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(l.a,{className:"p-2",bg:"dark",expand:"lg",variant:"dark",children:[Object(b.jsx)(l.a.Brand,{href:"#home",children:Object(b.jsx)("img",{className:"mainLogo",src:o,alt:"BinMe!"})}),Object(b.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(j.a,{className:"mr-auto",children:[Object(b.jsx)(d.LinkContainer,{to:"/",children:Object(b.jsx)(j.a.Link,{children:"Home"})}),Object(b.jsx)(d.LinkContainer,{to:"/viewbin",children:Object(b.jsx)(j.a.Link,{children:"View Bin"})}),Object(b.jsx)(d.LinkContainer,{to:"/createbin",children:Object(b.jsx)(j.a.Link,{children:"Create Bin"})})]})})]})})},u=function(){return Object(b.jsx)("div",{className:"container mt-5",children:Object(b.jsxs)("div",{className:"jumbotron text-center bg-light pb-5 pt-5 rounded",children:[Object(b.jsx)("img",{className:"logo",src:o,alt:"BinMe!"}),Object(b.jsx)("h1",{className:"display-4 text-primary fw-bold mt-4",children:"Gather Your HTTP Requests"}),Object(b.jsxs)("p",{className:"p-2",children:["BinMe! gives you a URL that will collect requests made to it and let you inspect them."," "]}),Object(b.jsx)("p",{children:"Use BinMe! to see what your HTTP client is sending or to inspect and debug webhook requests. BinMe now!"})]})})},x=c(11),O=c.n(x),m=c(16),p=c(17),v=function(e){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{onSubmit:e.formSubmit,children:[Object(b.jsx)("input",{type:"text",placeholder:"g87yhtdf56",name:"binId",className:"form-control",onChange:e.binIdHandler,value:e.binId}),Object(b.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary mt-3"})]})})},g=(c(29),c(33)),y=c.n(g),f=function(){var e=Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://binme.jtwgus.com:3010/create").then((function(e){return e.data}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://binme.jtwgus.com:3010/inspect/".concat(t)).then((function(e){return e})).catch((function(e){console.log(e)}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=c(34),k=c(49),C=c(21),S=c(26),q=function(e){var t=e.subject,c=e.value;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{fontWeight:"bold"},children:t}),Object(b.jsx)("td",{children:c})]})},B=c(22),P=function(e){var t=e.request,c=e.binId;return Object(b.jsxs)(k.a,{className:"mt-5 p-3 bg-light text-white rounded border border-primary",children:[Object(b.jsxs)(C.a,{className:"bg-dark p-3",children:[Object(b.jsx)(S.a,{lg:5,children:Object(b.jsxs)("h4",{className:"text-primary",children:[Object(b.jsx)("strong",{children:"Request Bin Id:"})," ",c]})}),Object(b.jsx)(S.a,{className:"text-primary",children:Object(b.jsxs)("h4",{children:[Object(b.jsx)("strong",{children:"Method: "}),t.method]})}),Object(b.jsx)(S.a,{className:"text-primary",children:Object(b.jsxs)("h4",{children:[Object(b.jsx)("strong",{children:"Received:"})," ",t.received_at]})})]}),Object(b.jsxs)(C.a,{children:[Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsxs)(B.a,{striped:!0,bordered:!0,hover:!0,style:{tableLayout:"fixed"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"subject",children:"Subject"}),Object(b.jsx)("th",{children:"Data"})]})}),Object(b.jsx)("tbody",{children:Object.keys(t.payload).map((function(e,c){return Object(b.jsx)(q,{subject:e,value:JSON.stringify(t.payload[e])},c)}))})]})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsxs)(B.a,{striped:!0,bordered:!0,hover:!0,style:{tableLayout:"fixed"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"subject",children:"Subject"}),Object(b.jsx)("th",{className:"data",children:"Data"})]})}),Object(b.jsx)("tbody",{children:Object.keys(t.headers).map((function(e,c){return Object(b.jsx)(q,{subject:e,value:t.headers[e]},c)}))})]})})]})]})},I=function(e){var t;return Object(b.jsx)("div",(t={className:"container"},Object(N.a)(t,"className","mt-5"),Object(N.a)(t,"children",e.requests.map((function(t,c){return Object(b.jsx)(P,{request:t,binId:e.binId},c)}))),t))},L=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(p.a)(r,2),i=a[0],l=a[1],j=function(){var e=Object(m.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),""===i&&alert("Please input your Bin Id"),e.next=4,w(i);case 4:c=e.sent,console.log(c),s(c.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h1",{className:"mt-3 text-primary",children:Object(b.jsx)("strong",{children:"Enter bin id:"})}),Object(b.jsx)(v,{formSubmit:j,binId:i,binIdHandler:function(e){l(e.target.value)}})]}),Object(b.jsx)("div",{className:"row",children:c.length>0?Object(b.jsx)(I,{requests:c,binId:i}):""})]})},R=c(50),M=function(e){var t=e.binId,c=Object(n.useState)(""),s=Object(p.a)(c,2),r=s[0],a=s[1],i=function(e){a(e.target.textContent)};return Object(b.jsxs)("div",{className:"col-md-6 offset-md-3 mt-5 text-center",children:[Object(b.jsx)("h3",{children:"Choose your language to get started."}),Object(b.jsxs)("ul",{class:"nav justify-content-center",children:[Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{class:"nav-link",href:"#",onClick:i,children:"cURL"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{class:"nav-link",href:"#",onClick:i,children:"Node.js"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{class:"nav-link",href:"#",onClick:i,children:"Python"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{class:"nav-link ",href:"#",onClick:i,children:"C#/.Net"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{class:"nav-link ",href:"#",onClick:i,children:"Java"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{class:"nav-link ",href:"#",onClick:i,children:"PHP"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{class:"nav-link ",href:"#",onClick:i,children:"PowerShell"})})]}),Object(b.jsxs)("div",{id:"languageDisplay",children:[Object(b.jsxs)("div",{className:"card",style:{display:"cURL"===r?"block":"none"},children:[" ",Object(b.jsxs)("div",{class:"card-body bg-light",children:[Object(b.jsx)("h5",{class:"card-title",children:"cURL"}),Object(b.jsx)("p",{className:"card-text",children:'curl -X POST -d "fizz=buzz" https://binme.jtwgus.com/'.concat(t)})]})]}),Object(b.jsx)("div",{class:"card",style:{display:"Node.js"===r?"block":"none"},children:Object(b.jsxs)("div",{class:"card-body bg-light",children:[Object(b.jsx)("h5",{class:"card-title",children:"Node.js"}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("pre",{children:Object(b.jsx)("code",{children:"var request = require('request');\n  var url ='https://binme.jtwgus.com/".concat(t,"'\n  request(url, function (error, response, body) {\n\u2003 if (!error) {\n\u2003\u2003  console.log(body);\n\u2003 }\n  });")})})})]})}),Object(b.jsx)("div",{class:"card",style:{display:"Python"===r?"block":"none"},children:Object(b.jsxs)("div",{class:"card-body bg-light",children:[Object(b.jsx)("h5",{class:"card-title",children:"Python"}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("pre",{children:Object(b.jsx)("code",{children:"import requests, time\nr = requests.post('https://binme.jtwgus.com/".concat(t,'\', \ndata={"ts":time.time()})\nprint r.status_code\nprint r.content')})})})]})}),Object(b.jsx)("div",{class:"card",style:{display:"C#/.Net"===r?"block":"none"},children:Object(b.jsxs)("div",{class:"card-body bg-light",children:[Object(b.jsx)("h5",{class:"card-title",children:"C#/.Net"}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("pre",{children:Object(b.jsx)("code",{children:'using System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nnamespace RequestBinExample\n{\n\u2003class Program\n\u2003{\n\u2003\u2003static void Main(string[] args)\n\u2003\u2003{\n\u2003\u2003\u2003MakeRequest();\n\u2003\u2003}\n\n\u2003\u2003private static async Task MakeRequest()\n\u2003\u2003{\n\u2003\u2003\u2003var httpClient = new HttpClient();\n\u2003\u2003\u2003var response = await httpClient.GetAsync(new Uri("https://binme.jtwgus.com/'.concat(t,'"));\n\u2003\u2003\u2003var body = await response.Content.ReadAsStringAsync();\n\u2003\u2003\u2003Console.WriteLine(body);\n\u2003\u2003}\n\u2003}\n}')})})})]})}),Object(b.jsx)("div",{class:"card",style:{display:"Java"===r?"block":"none"},children:Object(b.jsxs)("div",{class:"card-body bg-light",children:[Object(b.jsx)("h5",{class:"card-title",children:"Java"}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("pre",{children:Object(b.jsx)("code",{children:'import org.apache.commons.httpclient.*;\nimport org.apache.commons.httpclient.methods.*;\nimport org.apache.commons.httpclient.params.HttpMethodParams;\n\nimport java.io.*;\n\npublic class RequestBinTutorial {\n\u2003public static void main(String[] args) {\n\u2003\u2003HttpClient client = new HttpClient();\n\u2003\u2003GetMethod method = new GetMethod("https://binme.jtwgus.com/'.concat(t,'");\n\u2003\u2003try {\n\u2003\u2003\u2003int statusCode = client.executeMethod(method);\n\u2003\u2003\u2003byte[] responseBody = method.getResponseBody();\n\u2003\u2003\u2003System.out.println(new String(responseBody));\n\u2003\u2003} catch (Exception e) {\n\u2003\u2003\u2003System.err.println("Fatal error: " + e.getMessage());\n\u2003\u2003\u2003e.printStackTrace();\n\u2003\u2003} finally {\n\u2003\u2003\u2003method.releaseConnection();\n\u2003\u2003}\n\u2003}\n}')})})})]})}),Object(b.jsx)("div",{class:"card",style:{display:"PHP"===r?"block":"none"},children:Object(b.jsxs)("div",{class:"card-body bg-light",children:[Object(b.jsx)("h5",{class:"card-title",children:"PHP"}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("pre",{children:Object(b.jsx)("code",{children:"<?php\n    $result = file_get_contents('https://binme.jtwgus.com/".concat(t,"');\n    echo $result;\n?>")})})})]})}),Object(b.jsx)("div",{class:"card",style:{display:"PowerShell"===r?"block":"none"},children:Object(b.jsxs)("div",{class:"card-body bg-light",children:[Object(b.jsx)("h5",{class:"card-title",children:"PowerShell"}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("pre",{children:Object(b.jsx)("code",{children:"powershell -NoLogo -Command \"(New-Object System.Net.WebClient).DownloadFile('https://binme.jtwgus.com/".concat(t,"', 'C:\\Windows\\Temp\\0qn20ix.txt')\"")})})})]})})]})]})},H=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container mt-5 text-center",children:[Object(b.jsx)("h3",{className:"mb-5 display-8",children:"Click the button below to create a new bin:"}),Object(b.jsx)(R.a,{onClick:r,className:"mb-5",children:"Create New Bin"}),c?Object(b.jsxs)("div",{className:"mb-5",children:[Object(b.jsx)("h3",{children:"Your Bin ID is:"}),Object(b.jsx)("p",{class:"display-6 text-primary fw-bold",children:c}),Object(b.jsx)("h3",{children:"Give this link to your webhook provider:"}),Object(b.jsxs)("p",{class:"display-6 text-primary fw-bold",children:["https://binme.jtwgus.net/",c]}),Object(b.jsx)(M,{binId:c})]}):Object(b.jsx)("p",{})]})};c(87);var T=function(){return Object(b.jsxs)(a.BrowserRouter,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(i.g,{children:[Object(b.jsx)(i.d,{path:"/",exact:!0,component:u}),Object(b.jsx)(i.d,{path:"/viewbin",component:L}),Object(b.jsx)(i.d,{path:"/createbin",component:H})]})]})};r.a.render(Object(b.jsx)(a.BrowserRouter,{children:Object(b.jsx)(T,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.97f0cba0.chunk.js.map