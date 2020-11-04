<template>
  <v-app>
    <v-app-bar app color="white">
      <v-toolbar-title>
        <v-img
          alt="SUNRISE LOGO"
          class="logo mr-5"
          to="/"
          contain
          src="./assets/sunset.png"
          transition="scale-transition"
          width="60"
        />
      </v-toolbar-title>
      <h3 class="logo-text">SUNRISE PARTIES PLANNER</h3>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <router-link class="mr-3 navbar-link" to="/">HOME</router-link>
        <!-- <router-link class="mr-3 navbar-link" to="#About"></router-link> -->
        <router-link class="mr-3 navbar-link" to="/training"
          >OUR TRAINING</router-link
        >
        <router-link class="mr-3 navbar-link" to="/gallery"
          >GALLERY</router-link
        >
      </div>
    </v-app-bar>
    <router-view/>
    <v-footer absolute class="red lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Sunrise Parties Planner. Made with <v-icon>mdi-heart</v-icon> By 
          <a href="www.linkedin.com/in/jegede-bukola-b49272199" class="footer-link">Jegede Bukola</a></strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    links: [
        "Telephone: 08038294825 ",
        "Location: Address..no 1, bibilari street off oke omiru str, osogbo road ilesa,osun, Nigeria"
      ]
  }),
  
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
.logo {
  margin-left: 15px;
}
.logo-text {
  color: #505152;
  text-decoration: none;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 100;
}
.navbar-link {
  color: #fd6750 !important;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  
}
.navbar-link:hover {
  color: #505152 !important;
}
.footer-link{
  text-decoration: none;
  color: #fff !important;
}
</style>
