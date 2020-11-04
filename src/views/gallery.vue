<template>
    <v-app>
        <v-container class="section5">
          <h2>PHOTO SPEAK</h2>
          <v-row>
              <v-col cols="12" class="text-center">
              <v-btn class="red lighten-1" >
              <router-link to="/" class="custom-btn">
                Back
              </router-link>
              </v-btn>
            </v-col>
            <v-col v-for="n in 30" :key="n" class="d-flex child-flex" cols="4">
              <v-img
                :src="require(`../assets/${n}.jpg`)"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-container>
    </v-app>
</template>
<script>
export default {
  name: 'gallery',
  data() {
      return{
      }
  }
}
</script>
<style scoped>
.section5 h2 {
  color: #293e40;
  font-size: 45px;
  font-weight: 550;
  padding-top: 60px;
  padding-bottom: 10px;
  text-align: center;
}
.section5 {
  margin-bottom: 50px;
}
.custom-btn {
    text-align: center;
  padding: 10px 0;
  font-size: 16px;
  text-decoration: none;
  color:#ffffff;
  
}
</style>