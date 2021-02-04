<template>
<div>
  <div class="storeData">
        <h2>About Our stores</h2>
        <form>
        <input v-model="location" placeholder="store Location">
        <input v-model="MinCust" placeholder="Min customers">
        <input v-model="MaxCust" placeholder="Max customers">
        <input v-model="AvgSales" placeholder="Average cookie sales">

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
        <tr v-for="(storehours, i)": key="i" scope="col">
          <th scope="col">Hours</th>
          <td>{{ storehours[i] }}</td>
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
export default {
storehours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
name: "CookiesPerHour",
  data: () => ({ name: "", cookies: "", Total: [] }),
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
  },
};
</script>
  name: 'StoreData',
  props: {
    
  }
}


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
  display: inl/ine-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

