import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    web3: undefined,
    provider: undefined
  },

  mutations: {
    updateWeb3 (state, web3) {
      state.web3 = web3;
    },
    updateProvider (state, provider) {
      state.provider = provider;
    }
  }
})

import Web3Connect from "web3connect";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';

const web3Connect = new Web3Connect.Core({
  network: "mainnet", // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: process.env.VUE_APP_INFURA // required
      }
    },
  }
});


Vue.config.productionTip = false

Vue.mixin({
  data: function () {
    return {
      web3Connect,
    }
  }
})

// subscribe to connect
web3Connect.on("connect", (provider) => {
  const web3 = new Web3(provider); // add provider to web3
  store.commit('updateWeb3', web3)
  store.commit('updateProvider', provider)

});


// subscribe to close
web3Connect.on("close", () => {

});

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
