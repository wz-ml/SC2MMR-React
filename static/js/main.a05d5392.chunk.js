(this["webpackJsonpmmr-calculator"]=this["webpackJsonpmmr-calculator"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(2),c=a.n(n),o=(a(12),a(3)),i=a(4),u=a(6),m=a(5),s=(a(13),a(14),a(15).spawn,function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).winpercentagestate={value:""},r}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container p-3 bg-dark text-white border"},l.a.createElement("h1",null,"MMR Calculator"),l.a.createElement("h5",null,"Calculate win rates, best-of-ns, and more!")),l.a.createElement("div",{className:"container p-3 border"},l.a.createElement("h5",null,"Win percentage prediction:"),l.a.createElement("form",null,l.a.createElement("div",{class:"row pl-3"},l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("input",{type:"text",id:"p1mmr",placeholder:"Player 1 MMR"})),l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("input",{type:"text",id:"p2mmr",placeholder:"Player 2 MMR"}))),l.a.createElement("br",null),l.a.createElement("div",{class:"container pl-1"},l.a.createElement("p",null,"Result:")),l.a.createElement("div",{class:"row pl-3"},l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("input",{type:"textfield",id:"result1",readOnly:!0})),l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("input",{type:"textfield",id:"result2",readOnly:!0}))),l.a.createElement("div",{class:"container p-1"},l.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.querySelector("#p1mmr").value,a=document.querySelector("#p2mmr").value,r=1/(1+Math.pow(10,(a-t)/894.5134726042004))*100;document.querySelector("#result1").value=String(r.toFixed(3))+"%",document.querySelector("#result2").value=String((100-r).toFixed(3))+"%"}},"Calculate")))),l.a.createElement("div",{className:"container p-3 border"},l.a.createElement("h5",null,"Best of..."),l.a.createElement("form",null,l.a.createElement("div",{class:"row pl-3"},l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("input",{type:"text",id:"p1mmr_2",placeholder:"Player 1 MMR"})),l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("input",{type:"text",id:"p2mmr_2",placeholder:"Player 2 MMR"})),l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("input",{type:"text",id:"bestof",placeholder:"Best of ..."}))),l.a.createElement("br",null),l.a.createElement("div",{class:"container p-1 color-white"},l.a.createElement("p",null,"Result:"),l.a.createElement("textarea",{class:"form-control",rows:"11",cols:"50",id:"result-bestof"})),l.a.createElement("div",{class:"container p-1"},l.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.querySelector("#p1mmr_2").value,a=document.querySelector("#p2mmr_2").value,r=document.querySelector("#bestof").value;if(r<1);else{for(var l=1/(1+Math.pow(10,(a-t)/894.5134726042004)),n={},c=0;c<1e5;c++){for(var o=0,i=0;;){var u=Number(Math.random()<l);if(o+=u,i+=1-u,Math.max(o,i)>r/2)break}var m=String(o)+"-"+String(i);n.hasOwnProperty(m)?n[m]=n[m]+.001:n[m]=.001}var s=Object.keys(n).map((function(e){return[e,n[e].toFixed(2)]}));s.sort((function(e,t){return t[1]-e[1]}));var d="Format: Player 1 - Player 2\n";for(var p in s)s.hasOwnProperty(p)&&(d=d+s[p][0]+": "+s[p][1]+"%\n");document.querySelector("#result-bestof").value=String(d)}}},"Calculate")))),l.a.createElement("div",{className:"container p-3 border"},l.a.createElement("h5",null,"Find MMR difference based on win %:"),l.a.createElement("form",null,l.a.createElement("div",{class:"row pl-3"},l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("input",{type:"text",id:"p1win",onChange:function(e){e.preventDefault();var t=document.querySelector("#p1win").value;document.querySelector("#p2win").value=0==t?"":""+String((100-t).toFixed(3))},ref:function(t){return e.myinput=t},placeholder:"Player 1 Win %"})),l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("input",{type:"text",id:"p2win",onChange:function(e){e.preventDefault();var t=document.querySelector("#p2win").value;document.querySelector("#p1win").value=0==t?"":""+String((100-t).toFixed(3))},ref:function(t){return e.myinput=t},placeholder:"Player 2 Win %"}))),l.a.createElement("br",null),l.a.createElement("div",{class:"container pl-1"},l.a.createElement("p",null,"Result:")),l.a.createElement("div",{class:"row pl-3"},l.a.createElement("div",{class:"col-*-* p-1"},l.a.createElement("textarea",{class:"form-control",rows:"3",cols:"50",id:"result_3"}))),l.a.createElement("div",{class:"container p-1"},l.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.querySelector("#p1win").value/100;if(t>.998||t<.002)document.querySelector("#result_3").value="MMR difference too large to be calculated.";else{var a=-Math.log((1-t)/t)/Math.log(10)*894.5134726042004;document.querySelector("#result_3").value="MMR difference (P1 - P2): \n"+String(a.toFixed(3))}}},"Calculate")))),l.a.createElement("div",{className:"container p-3 border bg-dark text-white"},l.a.createElement("p",null,"Made by Will Z. Check out this project on ",l.a.createElement("a",{href:"https://github.com/wz-ml/MMR-Calculator-Sc2"},"Github"),".")))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.a05d5392.chunk.js.map