(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f68b535c"],{"7c67":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("1da1"),r=n("d4ec"),i=n("bee2"),s=(n("96cf"),n("c030")),u=n("8659"),p=function(){function e(t,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u;Object(r["a"])(this,e),this.provider=t;var p=t.getSigner(n).connectUnchecked();this.contract=new s["a"].Contract(a,i,p),console.log("pool log contract:",a)}return Object(i["a"])(e,[{key:"minerRebateInfo",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.contract.minerRebateInfo(t,n,a,r));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n,a,r){return e.apply(this,arguments)}return t}()},{key:"getSellRecord",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.contract.getSellRecord(t,n,a));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"getUserTransferRecord",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.contract.getUserTransferRecord(t,n,a,r));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n,a,r){return e.apply(this,arguments)}return t}()},{key:"getTransferRecordValues",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.contract.getTransferRecordValues(t,n));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}()},8659:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousDev","type":"address"},{"indexed":true,"internalType":"address","name":"newDev","type":"address"}],"name":"DevTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"newDev","type":"address"}],"name":"addDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"toAmount","type":"uint256"},{"internalType":"uint256","name":"feeRate","type":"uint256"}],"name":"addTransferLog","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devs","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getSellRecord","outputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"bzAmounts","type":"uint256[]"},{"internalType":"uint256[]","name":"usdtAmounts","type":"uint256[]"},{"internalType":"uint256[]","name":"bzPrices","type":"uint256[]"},{"internalType":"uint256[]","name":"feeRates","type":"uint256[]"},{"internalType":"uint256[]","name":"timestamps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getSellRecordValues","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"tType","type":"uint256"}],"name":"getTransferRecordValues","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tType","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getUserTransferRecord","outputs":[{"internalType":"uint256[]","name":"tTypes","type":"uint256[]"},{"internalType":"address[]","name":"froms","type":"address[]"},{"internalType":"address[]","name":"tos","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"feeRates","type":"uint256[]"},{"internalType":"uint256[]","name":"timestamps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dev","type":"address"}],"name":"isDev","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"skip","type":"uint256"},{"internalType":"uint256","name":"num","type":"uint256"}],"name":"minerRebateInfo","outputs":[{"components":[{"internalType":"address","name":"rebateUser","type":"address"},{"internalType":"uint256","name":"rebateTime","type":"uint256"},{"internalType":"uint256","name":"rebateAmount","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"rebateRate","type":"uint256"}],"internalType":"struct BzPoolLog.RebateInfo[]","name":"logs","type":"tuple[]"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"commission","type":"uint256"},{"internalType":"address","name":"referee","type":"address"},{"internalType":"uint256","name":"rebateRate","type":"uint256"}],"name":"rebateRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rmAllDevs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"oldDev","type":"address"}],"name":"rmDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"bzAmount","type":"uint256"},{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"uint256","name":"bzPrice","type":"uint256"},{"internalType":"uint256","name":"feeRate","type":"uint256"}],"name":"sellLog","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"address","name":"addr_","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},"869b":function(e,t,n){"use strict";n.r(t);var a=n("1da1"),r=(n("96cf"),n("99af"),n("7a23")),i=n("2704"),s=n.n(i),u=n("6c02"),p=n("0437"),c=n("6be8"),o=n("6779"),l=n("3de1"),d=n("7c67"),y=n("bae1"),m={class:"container max-w-26rem px-15px mx-auto pb-2rem record"},b=Object(r["j"])("img",{class:"w-1.2rem",src:s.a,alt:""},null,-1),f={class:"text-primaryColor pr-0.5rem"},T={class:"flex justify-between items-center w-full text-center bg-primaryColor text-white p-1rem rounded-10px"},j={class:"text-0.8rem"},O={class:"font-bold text-1.2rem"},v={class:"grid grid-cols-8 text-white/80 font-bold mt-1rem text-0.7rem"},g={class:"col-span-2 text-left"},h={class:"col-span-2 text-center"},w={class:"col-span-1 text-center"},x={class:"col-span-3 text-right"},R=["data-clipboard-text"],M={class:"col-span-2 text-center text-primaryColor font-bold"},k={class:"col-span-1 text-center"},L={class:"col-span-3 text-right whitespace-nowrap"},S={setup:function(e){var t=Object(u["c"])(),n=Object(p["a"])(),i=n.poolContract,s=n.getPoolContract,S=Object(r["p"])("chainInfo"),D=Object(r["H"])(null),C=Object(r["H"])("USDT"),I=Object(r["G"])({loading:!1,finished:!1,pageSize:40,startIndex:0,list:[],totalRebate:"--"}),U=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!I.finished&&!I.loading){e.next=3;break}return e.abrupt("return");case 3:return I.loading=!0,console.log("load..."),e.next=7,D.value.minerRebateInfo(S.account,y["b"].USDT,I.startIndex,I.pageSize);case 7:t=e.sent,I.loading=!1,I.finished=t.logs.length<I.pageSize,0===I.startIndex&&(I.list=[]),I.list=I.list.concat(t.logs),I.totalRebate=o["utils"].formatUnits(t.total,18),I.startIndex=I.list.length,e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](0),I.finished=!0,I.loading=!1;case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return e.next=4,i.value.log();case 4:return t=e.sent,D.value=new d["a"](S.provider,S.account,t),e.next=8,U();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["P"])([function(){return S.isActive}],(function(){S.isActive&&A()}),{immediate:!0}),Object(r["z"])((function(){C.value=t.query.token||"USDT"})),function(e,t){var n=Object(r["J"])("van-list");return Object(r["C"])(),Object(r["i"])("div",m,[Object(r["l"])(n,{loading:Object(r["M"])(I).loading,finished:Object(r["M"])(I).finished,"immediate-check":!1,"finished-text":e.$t("noMore"),onLoad:U},{default:Object(r["R"])((function(){return[Object(r["j"])("button",{class:"flex items-center h-2rem -ml-0.5rem",onClick:t[0]||(t[0]=function(t){return e.$router.back()})},[b,Object(r["j"])("span",f,Object(r["L"])(e.$t("back")),1)]),Object(r["j"])("div",T,[Object(r["j"])("div",j,Object(r["L"])(C.value)+" "+Object(r["L"])(e.$t("idoView.rebate")),1),Object(r["j"])("div",O,Object(r["L"])(Object(r["M"])(c["a"])(Object(r["M"])(I).totalRebate)),1)]),Object(r["j"])("div",v,[Object(r["j"])("span",g,Object(r["L"])(e.$t("address")),1),Object(r["j"])("span",h,Object(r["L"])(e.$t("amount")),1),Object(r["j"])("span",w,Object(r["L"])(e.$t("level")),1),Object(r["j"])("span",x,Object(r["L"])(e.$t("time")),1)]),(Object(r["C"])(!0),Object(r["i"])(r["a"],null,Object(r["I"])(Object(r["M"])(I).list,(function(n,a){return Object(r["C"])(),Object(r["i"])("div",{class:"grid grid-cols-8 py-0.8rem text-0.6rem",key:a},[Object(r["j"])("span",{class:"col-span-2 text-left copy-address","data-clipboard-text":n["rebateUser"],onClick:t[1]||(t[1]=function(t){return Object(r["M"])(l["b"])(".copy-address",e.$t("copySuccess"))})},Object(r["L"])(Object(r["M"])(c["b"])(n["rebateUser"],4,4)),9,R),Object(r["j"])("span",M,Object(r["L"])(Object(r["M"])(c["a"])(Object(r["M"])(c["c"])(n["rebateAmount"]))),1),Object(r["j"])("span",k,Object(r["L"])(n["level"]),1),Object(r["j"])("span",L,Object(r["L"])(Object(r["M"])(c["d"])(1e3*n["rebateTime"])),1)])})),128))]})),_:1},8,["loading","finished","finished-text"])])}}};const D=S;t["default"]=D}}]);