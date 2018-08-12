# JsonGrid

Vue Component that takes your JSON and displays as a HTML Table with superpowers

## Usage

### Using Bundlers

When using bundlers like ParcelJS copy the JsonGrid.vue file to your components folder. Then in your script import and then use like any other component

```html
<template>
  <div>
...
      <JsonGrid :data="dataJSON" :search="searchQuery"></JsonGrid>
...
  </div>
</template>

<script>
import Vue from 'vue'
import JsonGrid from "./components/JsonGrid";

export default {
    components: {JsonGrid},
    data:()=>{return {
        dataJSON:{"a","A","b":"B"},
        searchQuery:"a"
    }}
}
</script>
```

### Directly using VanillaJS

For direct JS useage ensure that VueJS is loaded and then followed by the JsonGrid.js file. Then in your script use like any other component. Use the JsonGrid Tag in HTML

```html
<html>
  <div>
...
      <JsonGrid :data="dataJSON" :search="searchQuery"></JsonGrid>
...
  </div>
</html>

import Vue from 'vue'
import JsonGrid from "./components/JsonGrid";

new Vue({
    el: '#myApp',
    components: {JsonGrid},
    data:()=>{return {
        dataJSON:{"a","A","b":"B"},
        searchQuery:"a"
    }}
})
```

## Features

1. Automatically detects the column heads from the Keys in the JSON provided
1. Column Sorting on clicking the Column headings
1. Search Data used to filter the rows with the search term used

## Future Features

1. Sorting using more smart detection of data of the column selected
1. Table Format and Styling Capability
