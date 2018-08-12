Vue.Component(`JsonGrid`, {
  template: `
<div>
    <table>
        <thead>
            <tr>
                <th v-for="(name,i) in dispData.columns" :key="i" @click="titleClicked(name)">{{name}}</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td v-for="(name,i) in dispData.columns" :key="i">{{name}}</td>
            </tr>
        </tfoot>
        <tbody>
            <tr v-for="(row,i) in dispData.rows" :key="i">
                <td v-for="(data,i) in row" :key="i">{{data}}</td>
            </tr>
        </tbody>
    </table>
</div>`,
  props: ["data", "search"],
  data: () => {
    return {
      sortcolumn: "datetime",
      sorttype: -1
    };
  },
  methods: {
    titleClicked(name) {
      if (this.sortcolumn == name) {
        this.sorttype *= -1;
      } else {
        this.sortcolumn = name;
      }
    }
  },
  computed: {
    dispData() {
      let columns = [];
      this.data.forEach(el => {
        for (const key in el) {
          if (el.hasOwnProperty(key)) {
            if (columns.indexOf(key) < 0) columns.push(key);
          }
        }
      });
      let rows = [];
      this.data.forEach(el => {
        let row = columns.map((val, ind) => {
          if (el[val]) {
            return JSON.stringify(el[val], "", "\t");
          } else {
            return "-";
          }
        });
        if (this.search.length > 0) {
          let rowStr = row.join(" ").toLowerCase();
          if (rowStr.indexOf(this.search.toLowerCase()) >= 0) rows.push(row);
        } else {
          rows.push(row);
        }
      });
      if (this.sortcolumn) {
        //[WIP] Make this more sophisticated with data type discovery
        let ind = columns.indexOf(this.sortcolumn);
        rows.sort((a, b) => {
          if (a[ind] > b[ind]) {
            return 1 * this.sorttype;
          } else {
            return -1 * this.sorttype;
          }
        });
      }
      return { columns: columns, rows: rows };
    }
  }
});
