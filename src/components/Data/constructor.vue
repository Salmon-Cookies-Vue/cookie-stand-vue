<script>
import * as R from "ramda"

export default class Store {
  constructor(store = {}) {
    this.location = R.is(String, store.location) ? location : "";
    this.minCust = R.is(Number, store.minCust) ? minCust : 0;
    this.maxCust = R.is(Number, store.maxCust) ? maxCust : 0;
    this.avgSales = R.is(Number, store.avgSales) ? avgSales : 0;
  }

  getName() {
    return this.location;
  }

  

  createStore() {
    return {
      location: this.location,
      minCust: this.minCust,
      maxCust: this.maxCust,
      avgSales: this.avgSales,
    }
  }

}

</script>