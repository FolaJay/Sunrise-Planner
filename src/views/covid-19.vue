<template>
  <v-app>
    <v-app-bar app color="white">
            <div class="d-flex align-center">
                <v-toolbar-title>
                <v-img
                alt="SUSSHEALTH LOGO"
                class="logo mr-5"
                to="/"
                contain
                src="../assets/logo1.png"
                transition="scale-transition"
                width="200"
                />
                </v-toolbar-title>
                <router-link class="mr-3 navbar-link" to="/">HOME</router-link>
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
            <v-img class="banner-img"
                alt="SUSSHEALTH Banner"
                src="../assets/img4.jpg"
            />
          </v-container>
          <v-container>
            <v-row>
              <v-col>
                <p class="text1">
                  As the COVID-19 pandemic exposes new challenges within our
                  healthcare delivery system, delivering the promise of safe,
                    patient-centric care will only be possible if healthcare organizations
                    demonstrate the same commitment to the continuous safety and protection
                    of caregivers, care settings, and communities.
                </p>
              </v-col>
            </v-row>
          </v-container>
          <div class="section3">
            <v-container>
              <v-row>
                <v-col cols="6">
                  <div>
                    <v-img
                      alt="#"
                      class="img"
                      contain
                      src="../assets/img.png"
                      transition="scale-transition" 
                      />
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="subSection3">
                    <h2>We're here help.</h2>
                    <p>
                      Etiam imperdiet quis nunc sed viverra. Suspendisse at dictum
                      nibh. Duis at ante id lorem elementum mattis id 
                      a neque.Suspendisse at dictumnibh.
                      Duis at ante id lorem elementum mattis id 
                      a neque.
                    </p>
                    <ul class="sublink-container">
                      <li class="sublink-item-container">
                        <a href="#">
                          <span class="sublink-top">
                            <v-img
                              alt="#"
                              class="sublink-item-container-img"
                              contain
                              src="../assets/patient.png"
                              transition="scale-transition" 
                              />
                          </span>
                          <span class="sublink-bottom">PATIENT</span>
                        </a>
                      </li>
                      <li class="sublink-item-container">
                        <a href="#">
                          <span class="sublink-top">
                            <v-img
                              alt="#"
                              class="sublink-item-container-img"
                              contain
                              src="../assets/employee.jpg"
                              transition="scale-transition" 
                              />
                          </span>
                          <span class="sublink-bottom">EMPLOYEE</span>
                        </a>
                      </li>
                      <li class="sublink-item-container">
                        <a href="#">
                          <span class="sublink-top">
                            <v-img
                            alt="#"
                            class="sublink-item-container-img"
                            contain
                            src="../assets/hospital.png"
                            transition="scale-transition" 
                            />
                          </span>
                          <span class="sublink-bottom">SITE</span>
                        </a>
                      </li>
                      <li class="sublink-item-container">
                        <a href="#">
                          <span class="sublink-top">
                            <v-img
                              alt="#"
                              class="sublink-item-container-img"
                              contain
                              src="../assets/group.png"
                              transition="scale-transition" 
                              />
                          </span>
                          <span class="sublink-bottom">COMMUNITY</span>
                        </a>
                      </li>
                      <li class="sublink-item-container">
                        <a href="#">
                          <span class="sublink-top">
                            <v-img
                              alt="#"
                              class="sublink-item-container-img"
                              contain
                              src="../assets/speech.png"
                              transition="scale-transition" 
                              />
                          </span>
                            <span class="sublink-bottom">GOVERNMENT</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <div  class="segment-container">
            <v-container class="section4">
              <v-row class="row-container">
                  <v-col cols="6">
                    <div>
                      <v-img
                        alt="#"
                        class="img"
                        contain
                        src="../assets/img.png"
                        transition="scale-transition" 
                        />
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="subsection4">
                      <h4>Crisis Response Solution</h4>
                      <div class="subsection4-banner">
                        <div class="subsection4-banner-img">
                          <v-img
                            alt="#"
                            class="sublink-item-container-img"
                            contain
                            src="#"
                            transition="scale-transition" 
                          />
                        </div>
                        <h2>Patient</h2>
                      </div>
                      <div class="subsection4-content">
                        <span>
                          <p>Sed egestas lobortis mi sit amet vestibulum.
                            In sapien lacus, sagittis eu laoreet placerat,
                            fringilla ac sem. Pellentesque ut dignissim metus.
                            In sollicitudin at nisl nec rhoncus. Suspendisse potenti.
                            Donec scelerisque, enim id consectetur mattis,
                          </p>
                        </span>
                        <h5>Patients Program Include:</h5>
                        <ul>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                        </ul>
                      </div>
                    </div>
                  </v-col>
              </v-row>
          </v-container>
          </div>
          <div  class="segment-container">
            <v-container class="section4">
              <v-row class="row-container">
                  <v-col cols="6">
                    <div>
                      <v-img
                        alt="#"
                        class="img"
                        contain
                        src="../assets/img.png"
                        transition="scale-transition" 
                        />
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="subsection4">
                      <h4>Crisis Response Solution</h4>
                      <div class="subsection4-banner">
                        <div class="subsection4-banner-img">
                          <v-img
                              alt="#"
                              class=""
                              contain
                              src="../assets/speech.png"
                              transition="scale-transition" 
                              />
                        </div>
                        <h2>Patient</h2>
                      </div>
                      <div class="subsection4-content">
                        <span>
                          <p>Sed egestas lobortis mi sit amet vestibulum.
                            In sapien lacus, sagittis eu laoreet placerat,
                            fringilla ac sem. Pellentesque ut dignissim metus.
                            In sollicitudin at nisl nec rhoncus. Suspendisse potenti.
                            Donec scelerisque, enim id consectetur mattis,
                          </p>
                        </span>
                        <h5>Patients Program Include:</h5>
                        <ul>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                        </ul>
                      </div>
                    </div>
                  </v-col>
              </v-row>
          </v-container>
          </div>
          <div  class="segment-container">
            <v-container class="section4">
              <v-row class="row-container">
                  <v-col cols="6">
                    <div>
                      <v-img
                        alt="#"
                        class="img"
                        contain
                        src="../assets/img.png"
                        transition="scale-transition" 
                        />
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="subsection4">
                      <h4>Crisis Response Solution</h4>
                      <div class="subsection4-banner">
                        <div class="subsection4-banner-img">
                          <v-img
                              alt="#"
                              class=""
                              contain
                              src="../assets/speech.png"
                              transition="scale-transition" 
                              />
                        </div>
                        <h2>Patient</h2>
                      </div>
                      <div class="subsection4-content">
                        <span>
                          <p>Sed egestas lobortis mi sit amet vestibulum.
                            In sapien lacus, sagittis eu laoreet placerat,
                            fringilla ac sem. Pellentesque ut dignissim metus.
                            In sollicitudin at nisl nec rhoncus. Suspendisse potenti.
                            Donec scelerisque, enim id consectetur mattis,
                          </p>
                        </span>
                        <h5>Patients Program Include:</h5>
                        <ul>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                        </ul>
                      </div>
                    </div>
                  </v-col>
              </v-row>
          </v-container>
          </div>
          <div  class="segment-container">
            <v-container class="section4">
              <v-row class="row-container">
                  <v-col cols="6">
                    <div>
                      <v-img
                        alt="#"
                        class="img"
                        contain
                        src="../assets/img.png"
                        transition="scale-transition" 
                        />
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="subsection4">
                      <h4>Crisis Response Solution</h4>
                      <div class="subsection4-banner">
                        <div class="subsection4-banner-img">
                          <v-img
                              alt="#"
                              class=""
                              contain
                              src="../assets/speech.png"
                              transition="scale-transition" 
                              />
                        </div>
                        <h2>Patient</h2>
                      </div>
                      <div class="subsection4-content">
                        <span>
                          <p>Sed egestas lobortis mi sit amet vestibulum.
                            In sapien lacus, sagittis eu laoreet placerat,
                            fringilla ac sem. Pellentesque ut dignissim metus.
                            In sollicitudin at nisl nec rhoncus. Suspendisse potenti.
                            Donec scelerisque, enim id consectetur mattis,
                          </p>
                        </span>
                        <h5>Patients Program Include:</h5>
                        <ul>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                        </ul>
                      </div>
                    </div>
                  </v-col>
              </v-row>
          </v-container>
          </div>
          <div  class="segment-container">
            <v-container class="section4">
              <v-row style="margin-bottom:100px !important">
                  <v-col cols="6">
                    <div>
                      <v-img
                        alt="#"
                        class="img"
                        contain
                        src="../assets/img.png"
                        transition="scale-transition" 
                        />
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="subsection4">
                      <h4>Crisis Response Solution</h4>
                      <div class="subsection4-banner">
                        <div class="subsection4-banner-img">
                          <v-img
                              alt="#"
                              class=""
                              contain
                              src="../assets/speech.png"
                              transition="scale-transition" 
                              />
                        </div>
                        <h2>Patient</h2>
                      </div>
                      <div class="subsection4-content">
                        <span>
                          <p>Sed egestas lobortis mi sit amet vestibulum.
                            In sapien lacus, sagittis eu laoreet placerat,
                            fringilla ac sem. Pellentesque ut dignissim metus.
                            In sollicitudin at nisl nec rhoncus. Suspendisse potenti.
                            Donec scelerisque, enim id consectetur mattis,
                          </p>
                        </span>
                        <h5>Patients Program Include:</h5>
                        <ul>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                          <li>Donec scelerisque</li>
                        </ul>
                      </div>
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
;
export default {
  name:"covid",
  components: {
    
    },
}
</script>
<style scoped>
.banner-img{
    max-height:600px;  
}
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
.text1{
 text-align: center;
 font-size: 22px;
 font-weight: 300;
 line-height: 32px;
 padding: 30px 130px 40px;
 margin-top: 10px;
 margin-bottom: 10px;

 /* color:#889c88; */
}
.section3{ 
  background-color:#eeeeef;
}
.img{
  max-width: 100%;
  max-height: 100%;
  height: auto;
  opacity: 1;
  transition: opacity .3s;
  vertical-align: middle;
  border: 0;
}
.subSection3 {
text-align: left;
}
.subSection3 h2{
text-align: left;
font-weight: 900;
color:rgb(0 0 -4 / 0.7);
font-size: 30px;
margin-top: 20px;
margin-bottom: 10px;
line-height: 1.1;
}
.subSection3 p{
  margin: 23px 0 30px;
  font-size: 16px;
  font-weight: 400;
  color:rgb(0 0 -4 / 0.7);
}
.sublink-item-container{
  margin-right: 10px;
  height: 120px;
  display: inline-block;
  border: 1px solid rgba(0,0,0,.3);
  position: relative;
  font-size: 16px;
  line-height: 1.2em;
  font-weight: 400;
  width: calc(20% - 10px);
  
}
.sublink-item-container a{
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  margin-right:20px;
}
.sublink-top{
  height: 85px;
  width: 100%;
  display: block;
  position: relative;
  background: #fff;
}
.sublink-bottom{
  height: 33px;
  display: table;
  transition: background-color linear .2s;
  background-color: #00b4a4;
  width: 100%;
  text-align:center;
  padding-top:10px ;
}
.sublink-item-container-img{
  position: absolute;
  max-width: 70px;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: auto;
  opacity: .8;
  vertical-align: middle;
}
.sublink-container{
  padding-left:0;
}
.sublink-item-container a:hover{
  background-color: #096961;
}
.subsection4 h4{
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.1;
  color: inherit;
  font-weight: 900;
  font-size: 18px;
}
.subsection4-banner{
  background: #eeeeef;
  margin: 0 0 20px;
}
.subsection4-banner-img{
    background: #00b4a4;
    width: 60px;
    border-right: 5px solid #fff;
    display: inline-block;
}
.subsection4-banner h2 {
    margin: 0;
    height: 100%;
    vertical-align: middle;
    padding-left: 10px;
    font-weight: 900;
    display: inline-block;
    font-size: 30px;
    line-height: 1.1;
    padding-bottom:20px;
}
.subsection4-content{
  font-size: 20px;
  margin-top: 60px !important;
}
.subsection4-content p{
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 10px;
}
.subsection4-content h5{
  font-weight: 900;
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.2em;
}
.subsection4-content li::before{
  content: '';
  display: inline-block;
  background: #00b4a4;
  border-radius: 50px;
  width: 6px;
  height: 6px;
  position: absolute;
  margin: 8px 0 0 -23px;
}
.subsection4-content li{
  font-weight: 400;
  padding-top: .8em;
  text-indent: 25px;
  padding-left: 15px;
  font-size: 16px;
  line-height: 1.2em;
  font-weight: 400;
  list-style-type: none;
}
.subsection4-content ul{
  list-style-type: none;
}
.segment-container{
  margin-top: 60px;

}
.row-container{
   border-bottom: 1px solid rgba(0,0,0,.3);
   padding-bottom: 40px;
}
</style>
