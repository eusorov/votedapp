<template>
  <div>
    <div>
      You can vote only once, choose the proposal which you want to support
    </div>

    <p />

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
          v-on:click="vote(selected)"
        >
          Vote
        </button>
      </div>
    </div>

    <div v-if="!web3defined">
      Please connect first with your wallet via Metamask
    </div>
    <p/>
    <div v-if="voted" class="alert alert-info" role="alert">
      You voted for {{ voted.name }}
    </div>      
    <div v-if="voteSuccessfull" class="alert alert-success" role="alert">
      Gongratulation! You voted for {{ voted.name }}
    </div>  
  </div>
</template>

<script>
import { ballotAbi, ballotAdressKoven } from "../smartcontractApi";

const defaultSelect = { id: 0, name: "Choose proposal ..." };
export default {
  name: "ProposalSelect",
  data: () => {
    return {
      selected: defaultSelect,
      voted: undefined,
      voteSuccessfull: undefined,
      web3defined: undefined,
      proposals: [
        defaultSelect,
        { id: 1, name: "Capital X Fund" },
        { id: 2, name: "NFTstreamz.tv" },
        { id: 3, name: "DEFI + Contract NFT" },
      ],
    };
  },
  methods: {
    select: function (c) {
      console.log("CHECK", c);
    },
    vote: async function (userVote) {
     
      console.log("id :" + userVote.id);
      // TODO find better solution for global variable
      // console.log(window.web3);

      if (window?.web3?.eth){
        this.web3defined = true;        
      }else{
        this.web3defined = false;
        return this.web3defined ;
      }

      const accounts = await window.web3.eth.getAccounts();
      const ballot = new window.web3.eth.Contract(
        ballotAbi,
        ballotAdressKoven
      );

      if (accounts?.length) {
        this.voted = userVote;
        ballot.methods
          .doVote(userVote.id)
          .send({ from: accounts[0] })
          .on("transactionHash", function (hash) {
            console.log(hash);
          })
          .on("confirmation", function (confirmationNumber, receipt) {
            console.log(confirmationNumber);
            console.log(receipt);
            // TODO should update async variable and show alert
            this.voteSuccessfull = userVote;
          })
          .on("error", console.error);
      }
    },
  },
};
</script>
