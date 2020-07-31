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
      <div>
        <v-img
            alt="SUSSHEALTH Banner"
            src="../assets/img5.jpg"
        />
        <!-- <v-container>
          <v-row>
            <h1>COVID-19 RESPONSES</h1>
          </v-row>
        </v-container> -->
      </div>
      <div>
        <div class="section1">
          <v-container>
            <div class="section1-content"> 
              <h2>Helping you  respond to COVID-19</h2>
              <h3>
                Suspendisse vitae eros in mi pretium congue a
                quis lorem. Donec scelerisque sit amet ex id sollicitudin.
                Curabitur ullamcorper a odio in posuere.Quisque laoreet consequat 
                quam eget interdum. Suspendisse tincidunt nulla sed velit pharetra,
                non hendrerit nulla commodo.
              </h3>
            </div>
          </v-container>
        </div>
        <v-container>
          <div class="section2">
            <h2>Emergency Response Management App</h2>
            <p>euismod at dolor. Aenean porta semper lectus, 
              sed maximus lacus mollis eu. Quisque porta ornare sapien,
              non blandit risus faucibus et. Mauris gravida tempus mauris,
              eget sagittis diam scelerisque sit amet
            </p>
            <a>
              <div class="custom-btn">
                Get Apps
              </div>
            </a>
            <div class="bottom-border"></div>
          </div>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="6">
              <div class="section3-img">
                <img src="../assets/img.png"/>
              </div>
              <div class="section3">
                <h3>Emergency Response Operations</h3>
                <p>Fusce quam risus, gravida quis pellentesque ac, 
                  euismod at dolor. Aenean porta semper lectus, 
                  sed maximus lacus mollis eu. Quisque porta ornare sapien.
                </p>
                <a href="/page3">
                  <div class="custom-btn">
                    View Demo
                  </div>
                </a>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="section3-img">
                <img src="../assets/img.png"/>
              </div>
              <div class="section3">
                <h3>Emergency Response Operations</h3>
                <p>Fusce quam risus, gravida quis pellentesque ac, 
                  euismod at dolor. Aenean porta semper lectus, 
                  sed maximus lacus mollis eu. Quisque porta ornare sapien.
                </p>
                <a href="/page3">
                  <div class="custom-btn">
                    View Demo
                  </div>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row  style="margin-bottom:100px !important">
            <v-col cols="6">
              <div class="section3-img">
                <img src="../assets/img.png"/>
              </div>
              <div class="section3">
                <h3>Emergency Response Operations</h3>
                <p>Fusce quam risus, gravida quis pellentesque ac, 
                  euismod at dolor. Aenean porta semper lectus, 
                  sed maximus lacus mollis eu. Quisque porta ornare sapien.
                </p>
                <a href="/page3">
                  <div class="custom-btn">
                    View Demo
                  </div>
                </a>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="section3-img">
                <img src="../assets/img.png"/>
              </div>
              <div class="section3">
                <h3>Emergency Response Operations</h3>
                <p>Fusce quam risus, gravida quis pellentesque ac, 
                  euismod at dolor. Aenean porta semper lectus, 
                  sed maximus lacus mollis eu. Quisque porta ornare sapien.
                </p>
                <a href="/page3">
                  <div class="custom-btn">
                    View Demo
                  </div>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
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
  name:"home",
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
.section1{
  background-color: #A0DDAD;
}
.section1-content{
  padding-top:40px;
  padding-bottom: 50px;
  padding-right: 150px;
}
.section1-content h2{
  color: #293e40;
  font-size:35px ;
  font-weight: 600;
  padding-top: 30px;
  padding-bottom: 10px;
}
.section1-content h3{
  color: #ffffff;
  font-size:32px ;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 30px;
}
.section2{
  padding-top: 60px;
}
.bottom-border{
  position: relative;
  margin: 0 auto;
  width: 97.4%;
  border-bottom: #293e40 solid .3rem;
  opacity: .1;
}
.section2 h2{
  color: #293e40;
  font-size:27px ;
  font-weight: 600;
  padding-bottom: 15px;
}
.section2 p{
  font-size: 20px; 
  margin: 10px 0;
}
.section2 a{
  text-decoration: none;
  color: #293d40;
}
.section3 h3{
  color: #293e40;
  font-size:27px ;
  font-weight: 600;
  padding-bottom: 15px;
  padding-top:20px;
}
.section3 p{
  font-size: 20px; 
  margin: 10px 0;
  padding-top:10px;
}
.custom-btn{ 
  border: .2rem solid #293d40;
  width: 150px;
  text-align: center;
  padding: 10px 0;
  margin: 30px 0  60px 10px;
  font-size: 16px;
}
.custom-btn:hover{
background-color:#293d40;
color: #fff ;
}
.section3 a{
  text-decoration: none;
  color: #293d40;
}
.section3-img{
  padding-top:60px;
}
</style>
