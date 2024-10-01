<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- css  -->

<style scoped>
h3 {
  margin: 40px 0 0;
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

<!-- web code  -->

<template>
  <div class="hello">
    <h1>{{ hocVue }}</h1>
    <h1>{{ chaoBuoiSang }}</h1>
    <h1 style="color: burlywood">{{ lamMotLyCaPhe }}</h1>
    <h1>{{ lamMotOBanhMy }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    hocVue: String,
    chaoBuoiSang: String,
    lamMotLyCaPhe: String,
    lamMotOBanhMy: String,
  },
};
</script>
