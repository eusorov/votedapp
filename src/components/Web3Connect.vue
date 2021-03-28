<template>
  <div>
    <button
      class="btn btn-outline-primary"
      type="button"
      v-on:click="toggleModal()"
    >
      Connect your wallet
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
  methods: {
    toggleModal: function () {
      this.web3Connect.toggleModal();
    },
  },
};
</script>