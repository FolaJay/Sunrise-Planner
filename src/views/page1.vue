<template>
  <v-app>
    <v-app-bar app color="white">
            <div class="d-flex align-center">
                <v-toolbar-title>
                <v-img
                alt="SUSSHEALTH LOGO"
                class="logo mr-5"
                contain
                src="../assets/logo1.png"
                transition="scale-transition"
                width="200"
                />
                </v-toolbar-title>
                <router-link class="mr-3 navbar-link" to="page2">COVID-19</router-link>
                <router-link class="mr-3 navbar-link" to="#">SOLUTIONS</router-link>
                <router-link class="mr-3 navbar-link" to="#">OUR TECHNOLOGY</router-link>
                <router-link class="mr-3 navbar-link" to="#">WHO WE HELP</router-link>
                <router-link class="mr-3 navbar-link" to="#">RESOURCES</router-link>
            </div>
            <v-spacer></v-spacer>
            <span class="mr-3">1-777-414-3343</span>
            <router-link class="mr-3 navbar-link" to="page1">ABOUT US</router-link>
            <v-btn class="mr-3 navbar-link" to="#">LOGIN</v-btn>
        </v-app-bar>
        <v-main>
          <v-img
              alt="SUSSHEALTH Banner"
              src="../assets/banner.png"
            />
        </v-main>
  </v-app>
</template>
<script>

export default {
  name:"page1",
  components: {
    
    },
}
</script>
<style scoped>
.logo{
margin-left:15px;
}
.navbar-link {
  color: #000;
  text-decoration: none;
}
.navbar-link:hover {
  color: #28334aff;
}
</style>
