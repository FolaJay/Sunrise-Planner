<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
          <v-toolbar-title>
          <v-img
          alt="SUSSHEALTH LOGO"
          class="logo mr-5"
          to="/home"
          contain
          src="../assets/logo1.png"
          transition="scale-transition"
          width="200"
          />
          </v-toolbar-title>
          <router-link class="mr-3 navbar-link" to="/home">HOME</router-link>
          <router-link class="mr-3 navbar-link" to="/covid-19">COVID-19 AND SOLUTIONS</router-link>
          <router-link class="mr-3 navbar-link" to="#">OUR TECHNOLOGY</router-link>
          <router-link class="mr-3 navbar-link" to="#">WHO WE HELP</router-link>
          <router-link class="mr-3 navbar-link" to="#">RESOURCES</router-link>
      </div>
      <v-spacer></v-spacer>
      <span class="mr-3">1-777-414-3343</span>
      <router-link class="mr-3 navbar-link" to="#">ABOUT US</router-link>
      <router-link class="mr-3 navbar-link" to="/store">STORE</router-link>
      <v-btn class="mr-3 navbar-link" to="#">LOGIN</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <h1>Apps and Solutions</h1>
        <v-row>
          <v-col cols="4">
            <div class="cards">
              <v-card hover
                outlined >
                <v-img
                alt="#"
                class="card-text-img"
                contain
                src="../assets/employee.jpg"
                transition="scale-transition"
                width="200"
                />
                <div>
                  <v-card-title class="card-text-title">Cask HealthBook</v-card-title>
                  <v-card-text class="card-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis tellus...</v-card-text>
                  <v-card-text>Lorem ipsum.</v-card-text>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col  cols="4">
            <div class="cards">
              <v-card hover
                outlined >
                <v-img
                alt="#"
                class="card-text-img"
                contain
                src="../assets/employee.jpg"
                transition="scale-transition"
                width="200"
                />
                <div>
                  <v-card-title class="card-text-title">Cask HealthBook</v-card-title>
                  <v-card-text class="card-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis tellus...</v-card-text>
                  <v-card-text>Lorem ipsum.</v-card-text>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="cards">
              <v-card hover
                outlined >
                <v-img
                alt="#"
                class="card-text-img"
                contain
                src="../assets/employee.jpg"
                transition="scale-transition"
                width="200"
                />
                <div>
                  <v-card-title class="card-text-title">Cask HealthBook</v-card-title>
                  <v-card-text class="card-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis tellus...</v-card-text>
                  <v-card-text>Lorem ipsum.</v-card-text>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <div class="cards">
              <v-card hover
                outlined >
                <v-img
                alt="#"
                class="card-text-img"
                contain
                src="../assets/employee.jpg"
                transition="scale-transition"
                width="200"
                />
                <div>
                  <v-card-title class="card-text-title">Cask HealthBook</v-card-title>
                  <v-card-text class="card-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis tellus...</v-card-text>
                  <v-card-text>Lorem ipsum.</v-card-text>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col  cols="4">
            <div class="cards">
              <v-card hover
                outlined >
                <v-img
                alt="#"
                class="card-text-img"
                contain
                src="../assets/employee.jpg"
                transition="scale-transition"
                width="200"
                />
                <div>
                  <v-card-title class="card-text-title">Cask HealthBook</v-card-title>
                  <v-card-text class="card-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis tellus...</v-card-text>
                  <v-card-text>Lorem ipsum.</v-card-text>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="cards">
              <v-card hover
                outlined >
                <v-img
                alt="#"
                class="card-text-img"
                contain
                src="../assets/employee.jpg"
                transition="scale-transition"
                width="200"
                />
                <div>
                  <v-card-title class="card-text-title">Cask HealthBook</v-card-title>
                  <v-card-text class="card-text-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis tellus...</v-card-text>
                  <v-card-text>Lorem ipsum.</v-card-text>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer absolute class= "teal lighten-1">
      <v-card-text class="py-2 text-center">
        {{ new Date().getFullYear() }} — <strong>Digital Solutions for covid-19</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>
<script>

export default {
  name:"store",
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
.card-text-title{
    font-weight: 300;
    overflow: hidden;
    position: absolute; 
    top: 35px;
    left: 80px;  
     
  
}
.card-text-text{
  font-weight: 300;
    margin-bottom: 5px;
    padding-top: 30px;
}
.card-text-img{
  height: 72px !important;
    width: 72px !important;
    position: relative;
    top: 10px;
    left: 10px;
}
h1{
  font-size: 25px;
  font-weight: 400;
  color: #293E40;
  padding-bottom: 15px;
}
.cards{
  padding-bottom: 50px;
}
</style>