<template>
<div id="app">
  <div class="cookiesPerHour">
    <button>test</button>
    <h2>About Our stores</h2>
    <form>
      <input v-model="location" placeholder="store Location" />
      <input v-model="minCust" placeholder="Min customers" />
      <input v-model="maxCust" placeholder="Max customers" />
      <input v-model="avgSales" placeholder="Average cookie sales" />

        <button> submit</button>
        </form>

    <p>DATA SHOULD BE DISPLAYED HERE</p>
    </div>
  <div class="container">
    <h1 class="mt-4 text-center">Cookie Sales</h1>
    <form>
      <div class="form-group">
        <label for="name">Hours</label>
        <input
          type="text"
          placeholder="store name"
          v-model="hours"
          class="form-control"
        />
      <button type="button" @click="onSubmit" class="btn btn-dark">
        Submit
      </button>
    </div>
    </form>
    <table class="table mt-5">
      <thead>
        
         <tr v-for="(hours, i) in storehours" :key="i" scope="col">
           <th scope="col">Hours</th>
          <td>{{ hours }}</td> 
         </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, i) in sortedList" :key="i">
          <th scope="row">{{ ++i }}</th>
          <td>{{ entry.name }}</td>
          <td>{{ entry.cookies }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>

import Store from './constructor.vue'
export default {


name: "CookiesPerHour",
  props: {
    store: Store,
    storehours:() => { return ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']}

  },
  data: () => ({ name: "", cookies: "", Total: [], storehours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'] }),
  computed: {
    sortedList: function() {
      return this.Total.slice().sort(function(a, b) {
        return b.cookies - a.cookies;
      });
    },
  },
  methods: {
    onSubmit() {
      this.Total.push({ name: this.name, cookies: this.cookies });
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.cookies = "";
    },

    log: function(e) {
      console.log(e.currentTarget);
      console.log(e);
    }

      

    
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

    log: function(e) {
      console.log(e.currentTarget);
      console.log(e);
    }
  }
}


</script>
<script>
// var seattle = new Vue({
//   el: 'seattle',
//   data: {
//     item: [
//       { message: 'Foo' },
//       { message: 'Bar' }
//     ]
//   }
// })

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.container {
    margin: auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

