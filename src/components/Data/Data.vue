<template>
  <div class="storeData">
    <h1>{{ $log(seattle) }}</h1>
    <h2>About Our stores</h2>
    <form>
      <input v-model="location" placeholder="store Location" />
      <input v-model="MinCust" placeholder="Min customers" />
      <input v-model="MaxCust" placeholder="Max customers" />
      <input v-model="AvgSales" placeholder="Average cookie sales" />

      <button>submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "StoreData",
  props: {
    location: String,
    MinCust: Number,
    MaxCust: Number,
    AvgSales: Number,
  },
};
</script>

<script>
import Store from './constructor.vue'

export const storeMaker = {
  
  data: () => ({
    store: new Store()
  }),

  methods: {
    async createStore() {
      Object.assign(this.store, new Store())
    },

    log() {
      console.log()
    }
  }
}
  
  
 

</script>

<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inl/ine-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
