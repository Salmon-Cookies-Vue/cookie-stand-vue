<script>
import R from "ramda"

export default class Store {
  constructor(store = {}) {
    this.location = R.is(string, store.location) ? location : "";
    this.MinCust = R.is(number, store.MinCust) ? MinCust : 0;
    this.MaxCust = R.is(number, store.MaxCust) ? MaxCust : 0;
    this.AvgSales = R.is(number, store.AvgSales) ? AvgSales : 0;
  }

  getName() {
    return this.location;
  }

  createStore() {
    return {
      location: this.location,
      MinCust: this.MinCust,
      MaxCust: this.MaxCust,
      AvgSales: this.AvgSales,
    }
  }

}

</script>