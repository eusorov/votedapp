<template>
  <div>
    <div class="card">
      <div class="card-body">
        The voting smartcontract address:
        <a v-bind:href="neturl + 'address/' + voteAdress">{{ voteAdress }}</a>
      </div>
    </div>
    <p />
    <label for="voteSelect">
      You can vote only once, choose the proposal which you want to support
    </label>

    <div id="voteSelect" class="input-group">
      <select v-model="selected" class="custom-select" id="inputGroupSelect05">
        <option
          :value="proposal"
          v-for="proposal in proposals"
          v-bind:key="proposal.id"
        >
          {{ proposal.name }}
        </option>
      </select>
      <div class="input-group-append">
        <button
          class="btn btn-outline-primary"
          type="button"
          :disabled="selected.id === 0 || !this.$store.state.web3"
          v-on:click="vote(selected)"
        >
          Vote
        </button>
      </div>
    </div>

    <p />
    <div v-if="hash" class="alert alert-success" role="alert">
      <div>You voted for {{ voted.name }},</div>
      <small>
        <a v-bind:href="neturl + 'tx/' + hash">tx:{{ hash }}</a>
      </small>
    </div>
  </div>
</template>

<script>
import { ballotAbi, ballotAdressKoven, ballotAdressMainnet } from "../smartcontractAbi";
import proposals from "../proposals";

const defaultSelect = { id: 0, name: "Choose proposal ..." };
export default {
  name: "ProposalSelect",
  data: () => {
    return {
      selected: defaultSelect,
      voted: undefined,
      hash: undefined,
      neturl: undefined,
      voteAdress: ballotAdressKoven,
      proposals,
    };
  },
  created() {
    if ('kovan'===process.env.VUE_APP_USENET){
      this.neturl = "https://kovan.etherscan.io/";
    }else{
      this.neturl = "https://etherscan.io/";
    }
  },
  methods: {
    vote: async function (userVote) {
      if (!this.$store.state.web3) {
        return;
      }

      const web3 = this.$store.state.web3;

      console.log("id : " + userVote.id);

      const accounts = await web3.eth.getAccounts();
      
      const ballotAdress = process.env.VUE_APP_USENET === 'kovan' ? ballotAdressKoven : ballotAdressMainnet
      const ballot = new web3.eth.Contract(ballotAbi, ballotAdress);

      if (accounts?.length) {
        this.voted = userVote;
        ballot.methods
          .doVote(userVote.id)
          .send({ from: accounts[0] })
          .on("transactionHash", (hash) => {
            console.log(hash);
            this.hash = hash;
            this.hashurl += hash;
          })
          .on("error", console.error);
      }
    },
  },
};
</script>
