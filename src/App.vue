<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

*{
  font-size: 12px;
}
span{
  color: rgb(0 0 0 / 70%);
}
body {
  font-family: 'Roboto', sans-serif !important;
}
</style>
