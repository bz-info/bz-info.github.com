(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-330f3730"],{"50df":function(e,t,n){"use strict";n.r(t);var a=n("1da1"),r=(n("96cf"),n("99af"),n("a9e3"),n("7a23")),i=n("2704"),s=n.n(i),u=n("6be8"),c=n("bae1"),p=n("3de1"),o=n("0437"),l=n("7c67"),d={class:"container max-w-26rem px-15px mx-auto pb-2rem record"},y={class:"relative flex items-center justify-center mt-0.5rem mb-1rem"},m=Object(r["j"])("img",{class:"w-1.2rem",src:s.a,alt:""},null,-1),b={class:"text-primaryColor pr-0.5rem"},f={class:"font-bold text-0.9rem"},j={class:"absolute right-0"},O=["onClick"],T={class:"flex justify-between items-center"},v={class:"font-bold text-primaryColor"},h={class:"w-3/8 text-white/70 text-12px text-right"},g={class:"flex justify-between items-center text-white"},w={class:"font-bold text-white"},x={class:"text-white"},R={class:""},k=["data-clipboard-text"],M={setup:function(e){var t=Object(r["p"])("chainInfo"),n=Object(o["a"])(),i=n.poolContract,s=n.getPoolContract,M=Object(r["H"])(null),L=Object(r["H"])(2),C=["txIn","txOut","txAll"],D=Object(r["G"])({loading:!1,finished:!1,pageSize:40,skip:0,fromList:[],toList:[],amounts:[],types:[],timestamps:[]}),S=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!D.finished&&!D.loading){e.next=3;break}return e.abrupt("return");case 3:return D.loading=!0,console.log("load..."),e.next=7,M.value.getUserTransferRecord(L.value+1,t.account,D.skip,D.pageSize);case 7:n=e.sent,console.log(n),0===D.skip&&(D.fromList=[],D.toList=[],D.amounts=[],D.timestamps=[],D.types=[]),D.loading=!1,D.finished=n.froms.length<D.pageSize,D.fromList=D.fromList.concat(n.froms),D.toList=D.toList.concat(n.tos),D.amounts=D.amounts.concat(n.amounts),D.types=D.types.concat(n.tTypes),D.timestamps=D.timestamps.concat(n.timestamps),D.skip=D.fromList.length,e.next=25;break;case 20:e.prev=20,e.t0=e["catch"](0),console.log(e.t0),D.finished=!0,D.loading=!1;case 25:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}(),A=Object(r["H"])(),z=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(A.value.toggle(),n!==L.value){e.next=3;break}return e.abrupt("return");case 3:return L.value=n,D.skip=0,D.finished=!1,e.next=8,M.value.getTransferRecordValues(t.account,L.value+1);case 8:if(a=e.sent,!a.isZero()){e.next=17;break}return D.fromList=[],D.toList=[],D.amounts=[],D.timestamps=[],D.types=[],D.finished=!0,e.abrupt("return");case 17:return e.next=19,S();case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return e.next=4,i.value.log();case 4:return n=e.sent,M.value=new l["a"](t.provider,t.account,n),e.next=8,M.value.getTransferRecordValues(t.account,L.value+1);case 8:if(a=e.sent,console.log(a),!a.isZero()){e.next=13;break}return D.finished=!0,e.abrupt("return");case 13:return e.next=15,S();case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["P"])([function(){return t.isActive},function(){return t.isLogin}],(function(){t.isActive&&t.isLogin&&I()}),{immediate:!0}),function(e,t){var n=Object(r["J"])("van-dropdown-item"),a=Object(r["J"])("van-dropdown-menu"),i=Object(r["J"])("van-list");return Object(r["C"])(),Object(r["i"])("div",d,[Object(r["l"])(i,{loading:Object(r["M"])(D).loading,finished:Object(r["M"])(D).finished,"immediate-check":!1,"finished-text":e.$t("noMore"),onLoad:S},{default:Object(r["R"])((function(){return[Object(r["j"])("div",y,[Object(r["j"])("button",{class:"absolute left-0 flex items-center h-2rem -ml-0.5rem",onClick:t[0]||(t[0]=function(t){return e.$router.back()})},[m,Object(r["j"])("span",b,Object(r["L"])(e.$t("back")),1)]),Object(r["j"])("span",f,Object(r["L"])(e.$t("miningView.transferRecord")),1),Object(r["j"])("div",j,[Object(r["l"])(a,null,{default:Object(r["R"])((function(){return[Object(r["l"])(n,{ref_key:"menuRef",ref:A},{title:Object(r["R"])((function(){return[Object(r["k"])(Object(r["L"])(e.$t(C[L.value])),1)]})),default:Object(r["R"])((function(){return[(Object(r["C"])(),Object(r["i"])(r["a"],null,Object(r["I"])(C,(function(t,n){return Object(r["j"])("div",{key:t,class:Object(r["v"])(["px-1rem py-8px text-center font-bold mx-1rem",[L.value===n?"text-primaryColor":"",n<2?"border-b-1 border-white/10":""]]),onClick:function(e){return z(n)}},Object(r["L"])(e.$t(t)),11,O)})),64))]})),_:1},512)]})),_:1})])]),(Object(r["C"])(!0),Object(r["i"])(r["a"],null,Object(r["I"])(Object(r["M"])(D).fromList,(function(n,a){return Object(r["C"])(),Object(r["i"])("div",{class:"py-0.5rem border-b-1 border-white/20 bg-black/80 px-10px rounded-5px",key:a},[Object(r["j"])("div",T,[Object(r["j"])("span",v,Object(r["L"])(Object(r["M"])(u["a"])(Object(r["M"])(u["c"])(Object(r["M"])(D).amounts[a],Object(r["M"])(c["b"]).USDTDecimals))),1),Object(r["j"])("span",h,Object(r["L"])(Object(r["M"])(u["d"])(1e3*Object(r["M"])(D).timestamps[a])),1)]),Object(r["j"])("div",g,[Object(r["j"])("span",w,Object(r["L"])(e.$t(C[Object(r["M"])(D).types[a]-1])),1),Object(r["j"])("div",x,[Object(r["j"])("span",R,Object(r["L"])(1===Number(Object(r["M"])(D).types[a])?"From":"To")+": ",1),Object(r["j"])("span",{class:"copy-address","data-clipboard-text":n["rebateUser"],onClick:t[1]||(t[1]=function(t){return Object(r["M"])(p["b"])(".copy-address",e.$t("copySuccess"))})},Object(r["L"])(1===Number(Object(r["M"])(D).types[a])?Object(r["M"])(u["b"])(n):Object(r["M"])(u["b"])(Object(r["M"])(D).toList[a])),9,k)])])])})),128))]})),_:1},8,["loading","finished","finished-text"])])}}};const L=M;t["default"]=L},"7c67":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("1da1"),r=n("d4ec"),i=n("bee2"),s=(n("96cf"),n("c030")),u=n("8659"),c=function(){function e(t,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u;Object(r["a"])(this,e),this.provider=t;var c=t.getSigner(n).connectUnchecked();this.contract=new s["a"].Contract(a,i,c),console.log("pool log contract:",a)}return Object(i["a"])(e,[{key:"minerRebateInfo",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.contract.minerRebateInfo(t,n,a,r));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n,a,r){return e.apply(this,arguments)}return t}()},{key:"getSellRecord",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.contract.getSellRecord(t,n,a));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"getUserTransferRecord",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.contract.getUserTransferRecord(t,n,a,r));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n,a,r){return e.apply(this,arguments)}return t}()},{key:"getTransferRecordValues",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.contract.getTransferRecordValues(t,n));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}()},8659:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousDev","type":"address"},{"indexed":true,"internalType":"address","name":"newDev","type":"address"}],"name":"DevTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"newDev","type":"address"}],"name":"addDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"toAmount","type":"uint256"},{"internalType":"uint256","name":"feeRate","type":"uint256"}],"name":"addTransferLog","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devs","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getSellRecord","outputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"bzAmounts","type":"uint256[]"},{"internalType":"uint256[]","name":"usdtAmounts","type":"uint256[]"},{"internalType":"uint256[]","name":"bzPrices","type":"uint256[]"},{"internalType":"uint256[]","name":"feeRates","type":"uint256[]"},{"internalType":"uint256[]","name":"timestamps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getSellRecordValues","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"tType","type":"uint256"}],"name":"getTransferRecordValues","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tType","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getUserTransferRecord","outputs":[{"internalType":"uint256[]","name":"tTypes","type":"uint256[]"},{"internalType":"address[]","name":"froms","type":"address[]"},{"internalType":"address[]","name":"tos","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"feeRates","type":"uint256[]"},{"internalType":"uint256[]","name":"timestamps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dev","type":"address"}],"name":"isDev","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"skip","type":"uint256"},{"internalType":"uint256","name":"num","type":"uint256"}],"name":"minerRebateInfo","outputs":[{"components":[{"internalType":"address","name":"rebateUser","type":"address"},{"internalType":"uint256","name":"rebateTime","type":"uint256"},{"internalType":"uint256","name":"rebateAmount","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"rebateRate","type":"uint256"}],"internalType":"struct BzPoolLog.RebateInfo[]","name":"logs","type":"tuple[]"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"commission","type":"uint256"},{"internalType":"address","name":"referee","type":"address"},{"internalType":"uint256","name":"rebateRate","type":"uint256"}],"name":"rebateRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rmAllDevs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"oldDev","type":"address"}],"name":"rmDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"bzAmount","type":"uint256"},{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"uint256","name":"bzPrice","type":"uint256"},{"internalType":"uint256","name":"feeRate","type":"uint256"}],"name":"sellLog","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"address","name":"addr_","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}}]);