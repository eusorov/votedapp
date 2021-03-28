<template>
  <div id="app">  
    <div class="container">
     <!-- Content here -->
    <h1>Lition voting for further development</h1>
    <h2>there are several projects, which are: </h2>

    <Proposals/>
    <p/>
    <Web3Connect/>
    <p/>
    <ProposalSelect/>
    </div>


    
    
  </div>
</template>

<script>

import Proposals from './components/Proposals.vue'
import ProposalSelect from './components/ProposalSelect.vue'
import Web3Connect from './components/Web3Connect'

export default {
  name: 'App',
  components: {
    Proposals,
    ProposalSelect,
    Web3Connect
  }
}
</script>

<style>

</style>
