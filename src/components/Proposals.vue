<template>
  <div id="accordion">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button
            class="btn btn-link uppercase"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {{ proposals[1].id }} - {{ proposals[1].name }}
          </button>
        </h5>
      </div>

      <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div class="card-body">
          <span v-html="proposals[1].description" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h5 class="mb-0">
          <button
            class="btn btn-link collapsed uppercase"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            {{ proposals[2].id }} - {{ proposals[2].name }}
          </button>
        </h5>
      </div>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <div class="card-body">
          <span v-html="proposals[2].description" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <h5 class="mb-0">
          <button
            class="btn btn-link collapsed uppercase"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
           {{ proposals[3].id }} - {{ proposals[3].name }}
          </button>
        </h5>
      </div>
      <div
        id="collapseThree"
        class="collapse"
        aria-labelledby="headingThree"
        data-parent="#accordion"
      >
        <div class="card-body">
           <span v-html="proposals[3].description" />          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import proposals from "../proposals";

export default {
  name: "Proposals",
  data: () => {
    return {
      proposals,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}

.uppercase {
  text-transform: uppercase;
}
</style>
