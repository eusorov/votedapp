<template>
  <div>

    <button
      class="btn btn-outline-primary"
      type="button"
      v-on:click="toggleModal()"
    >
      <span v-if="!web3defined">
        Connect your wallet
      </span>  
      
      <span v-if="web3defined">
        Connected successfully
      </span>        
    </button>

  </div>
</template>
<script>

export default {
  name: "Web3Connect",
  data: () => {
    return {};
  },
  created: function () {

  },
  computed: {
   web3defined () {
      if (this.$store.state.web3){
        return true;
      }else{
        return false;
      }
    },
  },
  methods: {
    toggleModal: function () {
      if (this.web3defined && this.$store.state.provider){
        this.$store.commit('updateWeb3', undefined)
      }else{
        this.web3Connect.toggleModal();
      }
    },
  },
};
</script>