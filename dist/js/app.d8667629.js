(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"055e":function(e,t,n){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},21:function(e,t){},22:function(e,t){},23:function(e,t){},24:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("2f62"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("h1",[e._v("Lition voting for further development")]),n("h2",[e._v("there are several projects, which are: ")]),n("Proposals"),n("p"),n("Web3Connect"),n("p"),n("ProposalSelect")],1)])},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"accordion"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[n("h5",{staticClass:"mb-0"},[n("button",{staticClass:"btn btn-link uppercase",attrs:{"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[e._v(" "+e._s(e.proposals[1].id)+" - "+e._s(e.proposals[1].name)+" ")])])]),n("div",{staticClass:"collapse show",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},[n("div",{staticClass:"card-body"},[n("span",{domProps:{innerHTML:e._s(e.proposals[1].description)}})])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header",attrs:{id:"headingTwo"}},[n("h5",{staticClass:"mb-0"},[n("button",{staticClass:"btn btn-link collapsed uppercase",attrs:{"data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[e._v(" "+e._s(e.proposals[2].id)+" - "+e._s(e.proposals[2].name)+" ")])])]),n("div",{staticClass:"collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordion"}},[n("div",{staticClass:"card-body"},[n("span",{domProps:{innerHTML:e._s(e.proposals[2].description)}})])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header",attrs:{id:"headingThree"}},[n("h5",{staticClass:"mb-0"},[n("button",{staticClass:"btn btn-link collapsed uppercase",attrs:{"data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[e._v(" "+e._s(e.proposals[3].id)+" - "+e._s(e.proposals[3].name)+" ")])])]),n("div",{staticClass:"collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-parent":"#accordion"}},[n("div",{staticClass:"card-body"},[n("span",{domProps:{innerHTML:e._s(e.proposals[3].description)}})])])])])},c=[],l=[{id:0,name:"Choose proposal ..."},{id:1,name:"Capital X Fund",description:"Transfer the Lition ownership to the nodes including the treasury through a multisignature wallet and create the lition dao.   Also transfer the energy contract with lition energie. Redeploy the nodes on a cosmos sdk based sidechain (support for >hundred nodes through delegated pos and used by binance chain, luna, etc) Develop an additional defi usecase \n    where tokens locked in nodes can be used as collateral for loans/synths while \n    earning stable rewards due to energy as a fairly consistent segment."},{id:2,name:"NFTstreamz.tv",description:"\n    NFTstreamz.tv is a new project based in Manchester, UK. The concept is to give new avenue streams to streamers and viewers. <p/>\n    Users can stake their Lition/NFTS tokens to obtain NFT's that are used to post EMOJI/MEMES into chat channels. \n    These are the only images users can post into the channel. Users can freely trade these NFT's on the market with a % of the sales going to the dev team. \n    <p/>Side chains will be utilised to enable streamers to create their own NFT's and profit from the resale value on them. \n    \n    <p/>The team consists of 4 people. Myself, a CTO, Head of Design & Head of Marketing. The funding will be used obtain more developers to steam roll the project forward and a portion to add liquidity to Uniswap. Locked and unlocked tokens will be portioned out into different pools should this idea gain traction. The project is fairly new and is in early stages. This transition will enable us to speed up the pipelines and enable the community too have a new lease of life on their investment. \n    \n    <p/>We recognise the strong community here and will build a new, more rewarding brand.\n    "},{id:3,name:"DEFI + Contract NFT",description:"Our team suggests using our developments to create a new product\n    together with the Lition community.<br />\n    The main features of the project are: multi-blockchain DeFi, using the\n    advantages of scaling, speed and low cost of transactions of the new\n    blockchains, while maintaining the popularity of Ethereum.<br />\n    <p />\n    We will also build a new direction of using validated contracts of\n    real entities in NFT for trading them as collateral in DeFi, where\n    companies like Lition can wrap their energy contracts as NFT and make\n    them tradeable.\n    <p />\n    The members of the project are Anton Erashov, an economist currently\n    defending Ph.D in cryptocurrencies, previously taking part in various\n    crypto projects (https://www.linkedin.com/in/antonio-erashow/), Evgeny\n    Usorov, Software Engineer with many years of experience in Java /\n    JavaScript technologies and with experience in crypto and blockchain.\n    (https://www.linkedin.com/in/evgeny-usorov-344698199/) and other\n    developers.\n    <p />\n    After the launch of the project, which we are planning about 6 months,\n    Lition tokens will be exchanged for new DeFiCo tokens with 1 : 1. At\n    the same time, the initial fixed price of tokens is planned to be $ 1\n    with a restriction on price changes until the project reaches the 2.0\n    working stage and with a gradual transition to floating pricing. In\n    our version, for LIT holders, it will be important to support us in\n    voting and then track the news of the project's implementation. Later\n    through a smart contract you will be able to automatically replace\n    your LITs with DeFiCo tokens on the announced date (closer to the\n    public launch of the project).\n\n    <p />\n    It’s planned to open the office in Berlin closer to the technical\n    launch of the project and having a legal status: Limited company\n    (GmbH). There will be also first planned validations of NFT contracts\n    for launching in DeFi trading, with the subsequent development of a\n    network of offices throughout Europe and the world."}],d={name:"Proposals",data:function(){return{proposals:l}}},u=d,p=(n("ced9"),n("2877")),h=Object(p["a"])(u,i,c,!1,null,"a1790682",null),f=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[e._v(" The voting smartcontract address: "),n("a",{attrs:{href:e.neturl+"address/"+e.voteAdress}},[e._v(e._s(e.voteAdress))])])]),n("p"),n("label",{attrs:{for:"voteSelect"}},[e._v(" You can vote only once, choose the proposal which you want to support ")]),n("div",{staticClass:"input-group",attrs:{id:"voteSelect"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"custom-select",attrs:{id:"inputGroupSelect05"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.proposals,(function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(" "+e._s(t.name)+" ")])})),0),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",disabled:0===e.selected.id||!this.$store.state.web3},on:{click:function(t){return e.vote(e.selected)}}},[e._v(" Vote ")])])]),n("p"),e.hash?n("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[n("div",[e._v("You voted for "+e._s(e.voted.name)+",")]),n("small",[n("a",{attrs:{href:e.neturl+"tx/"+e.hash}},[e._v("tx:"+e._s(e.hash))])])]):e._e()])},m=[],b=n("1da1"),g=(n("96cf"),[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"voter",type:"address"},{indexed:!1,internalType:"uint8",name:"choice",type:"uint8"}],name:"voteDone",type:"event"},{inputs:[{internalType:"uint8",name:"choice",type:"uint8"}],name:"doVote",outputs:[],stateMutability:"nonpayable",type:"function"}]),w="0x91DdD2fd5A92C4cf647268F77C639C30E9F3569D",y={id:0,name:"Choose proposal ..."},_={name:"ProposalSelect",data:function(){return{selected:y,voted:void 0,hash:void 0,neturl:void 0,voteAdress:w,proposals:l}},created:function(){this.neturl="https://kovan.etherscan.io/"},methods:{vote:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n,a,o,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$store.state.web3){e.next=2;break}return e.abrupt("return");case 2:return n=this.$store.state.web3,console.log("id : "+t.id),e.next=6,n.eth.getAccounts();case 6:a=e.sent,o=w,r=new n.eth.Contract(g,o),null!==a&&void 0!==a&&a.length&&(this.voted=t,r.methods.doVote(t.id).send({from:a[0]}).on("transactionHash",(function(e){console.log(e),s.hash=e,s.hashurl+=e})).on("error",console.error));case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},C=_,T=Object(p["a"])(C,v,m,!1,null,null,null),k=T.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(t){return e.toggleModal()}}},[e.web3defined?e._e():n("span",[e._v(" Connect your wallet ")]),e.web3defined?n("span",[e._v(" Connected successfully ")]):e._e()])])},j=[],O={name:"Web3Connect",data:function(){return{}},created:function(){},computed:{web3defined:function(){return!!this.$store.state.web3}},methods:{toggleModal:function(){this.web3defined&&this.$store.state.provider?this.$store.commit("updateWeb3",void 0):this.web3Connect.toggleModal()}}},P=O,F=Object(p["a"])(P,x,j,!1,null,null,null),M=F.exports,S={name:"App",components:{Proposals:f,ProposalSelect:k,Web3Connect:M}},E=S,L=Object(p["a"])(E,r,s,!1,null,null,null),D=L.exports,$=n("93a9"),A=n.n($),N=n("307c"),W=n.n(N),H=n("99e5"),I=n.n(H);a["a"].use(o["a"]);var J=new o["a"].Store({state:{web3:void 0,provider:void 0},mutations:{updateWeb3:function(e,t){e.web3=t},updateProvider:function(e,t){e.provider=t}}}),U=new A.a.Core({network:"mainnet",providerOptions:{walletconnect:{package:W.a,options:{infuraId:"af21c18e4bcc4513885d4361399d7e27"}}}});a["a"].config.productionTip=!1,a["a"].mixin({data:function(){return{web3Connect:U}}}),U.on("connect",(function(e){var t=new I.a(e);J.commit("updateWeb3",t),J.commit("updateProvider",e)})),U.on("close",(function(){})),new a["a"]({render:function(e){return e(D)},store:J}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},ced9:function(e,t,n){"use strict";n("055e")}});
//# sourceMappingURL=app.d8667629.js.map