import Vue from 'vue'
import App from './App.vue'

import Web3Connect from "web3connect";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';

const web3Connect = new Web3Connect.Core({
  network: "mainnet", // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "6b498bac2bd34f2ca11905148c9a144a" // required
      }
    },
  }
});


Vue.config.productionTip = false

Vue.mixin({
  data: function () {
    return {
      web3Connect,
      web3
    }
  }
})

let web3;
// subscribe to connect
web3Connect.on("connect", (provider) => {
  const web3Global = new Web3(provider); // add provider to web3
  // TODO find better solution to make it global
  // MetaMask Legacy Web3
  window.web3 = web3Global;  
});


// subscribe to close
web3Connect.on("close", () => {
  //console.log("Web3Connect Modal Closed"); // modal has closed
});

new Vue({
  render: h => h(App),
}).$mount('#app')
