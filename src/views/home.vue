<template>
  <v-app>
    <v-app-bar app color="white">
      <v-toolbar-title>
          <v-img
          alt="SUNRISE LOGO"
          class="logo mr-5"
          to="/"
          contain
          src="../assets/sunset.png"
          transition="scale-transition"
          width="60"
          />
      </v-toolbar-title>
      <h3 class="logo-text">SUNRISE PARTIES PLANNER</h3>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
          <router-link class="mr-3 navbar-link" to="/">HOME</router-link>
          <router-link class="mr-3 navbar-link" to="#About">ABOUT US</router-link>
          <router-link class="mr-3 navbar-link" to="/training">OUR TRAINING</router-link>
          <router-link class="mr-3 navbar-link" to="#">GALLERY</router-link>
      </div>
    </v-app-bar>
    <v-main>
      <div>
        <v-carousel cycle>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </div>
      <div>
        <div class="section1" id="About">
          <v-container>
            <div class="section1-content"> 
              <h2 id="About">We are Event Planners!</h2>
              <div class="bottom-border"></div>
              <h3>
                We are Sunrise Parties Planner a dedicated event planning business 
                establishment with team of event professionals having the creative 
                capacity to design a unique, colorful and 
                unforgettable event.
              </h3>
            </div>
          </v-container>
        </div>
        <div class="section2">
          <v-container>
            <h2>Our services at Sunrise Parties Events</h2>
            <div class="bottom-border"></div>
            <h3>
              We enjoy working in many different capacities within the event planning field such as Event management,
              Events decorations,
              Cakes,
              Indoor & outdoor catering service and 
              Confectionery.We tailor our services to the needs of each client.
            </h3>
          </v-container>
        </div>
          
        <v-container>
          <v-row>
            <v-col cols="6">
              <div class="section4-content"> 
                <v-img
                  contain
                  src="../assets/mission.jpg"
                  transition="scale-transition"
                  class="section4-content-img"
                  />
              </div>
            </v-col>
            <v-col cols="6">
              <div class="section4-content"> 
                <h2>Mission Statement</h2>
                <div class="bottom-border"></div>
                <h3>
                  To design and carry out personalize, innovative,
                  high quality and unique events that meet our clients needs and desires.
                </h3>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="6">
              <div class="section4-content"> 
                <h2>Vision Statement</h2>
                <div class="bottom-border"></div>
                <h3>
                  To ensure clients full satisfaction and positive feedback 
                  as we deliver services that is beyond expectation and create
                  a long term loyal relationship by consistently providing outstanding services.
                </h3>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="section4-content"> 
                <v-img
                  contain
                  src="../assets/vision.jpg"
                  transition="scale-transition"
                  class="section4-content-img"
                  />
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="section5">
          <h2>GALLERY</h2>
          <v-row>
            <v-col cols="3">
              <div> 
                <v-img
                  contain
                  src="../assets/event5.jpg"
                  transition="scale-transition"
                  class="section5-content-img"
                  />
              </div>
            </v-col>
            <v-col cols="3">
              <div> 
                <v-img
                  contain
                  src="../assets/cakes.jpg"
                  transition="scale-transition"
                  class="section5-content-img"
                  />
              </div>
            </v-col>
            <v-col cols="3">
              <div> 
                <v-img
                  contain
                  src="../assets/event3.jpg"
                  transition="scale-transition"
                  class="section5-content-img"
                  />
              </div>
            </v-col>
            <v-col cols="3">
              <div> 
                <v-img
                  src="../assets/cake3.jpg"
                  transition="scale-transition"
                  class="section5-content-img"
                  />
              </div>
            </v-col>
          </v-row>
          <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="require('../assets/ttt.jpg')"
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
      </div>
    </v-main>
    
    <v-footer absolute class= "red lighten-1" padless>
      <v-row
      justify="center"
      no-gutters
    >
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
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>SUNRISE PARTIES PLANNER</strong>
      </v-col>
    </v-row>
      
    </v-footer>
  </v-app>
</template>
<script>

export default {
  name:"home",
  components: {
    
  },
  data () {
      return {
        items: [
          {
            src: require('../assets/ttt.jpg'),
          },
          {
            src: require('../assets/14_event.jpg'),
          },
          {
            src: require('../assets/ttt.jpg'),
          },
          {
            src: require('../assets/event7.jpg'),
          },
        ],
        links: [
        'Telephone: 08038294825 ',
        'Location: Address..no 1, bibilari street off oke omiru str, osogbo road ilesa,osun, Nigeria',
      ],
      }
    },
}
</script>
<style scoped>
.logo{
margin-left:15px;
}
.logo-text{
  color: #505152;
  text-decoration: none;
  padding: 10px 10px;
  font-size:20px;
  font-weight: 100;
}
.navbar-link {
  text-decoration: none;
  padding: 10px 30px;
  font-size:20px;
  font-weight: 100;
  color:#F39080 ;
}
.navbar-link:hover {
  color: #505152;
}
.section1{
  background-color: #ffffff;
  text-align: center;
}
.section1-content{
  padding-top:60px;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left:20px ;
}
.section1-content h2{
  color: #293e40;
  font-size:45px ;
  font-weight: 550;
  padding-top: 30px;
  padding-bottom: 10px;
}
.section1-content h3{
  color: #293e40;
  font-size:30px ;
  font-weight: 100;
  padding-top: 10px;
  padding-bottom: 30px;
  text-align: center;
}
.section2{
  padding-top: 60px;
  text-align: center;
  
}
.bottom-border{
  position: relative;
  margin: 0 auto;
  width: 97.4%;
  border-bottom: #FF0000 solid .3rem;
  opacity: .1;
}
.section2 h2{
   color: #293e40;
  font-size:45px ;
  font-weight: 550;
  padding-top: 30px;
  padding-bottom: 10px;
}
.section2 h3{
   color: #293e40;
  font-size:30px ;
  font-weight: 100;
  padding-top: 10px;
  padding-bottom: 30px;
  text-align: center;
}
.section2 a{
  text-decoration: none;
  color: #293d40;
}
.custom-btn{ 
  border: .2rem solid #293d40;
  width: 150px;
  text-align: center;
  padding: 10px 0;
  margin: 40px 200px;
  font-size: 16px;
}
.custom-btn:hover{
background-color:#293d40;
color: #fff ;
}
.section4-content{
  padding-top:50px;
  padding-bottom: 70px;
  padding-right: 20px;
  padding-left:20px ;
  text-align: center;
}
.section4-content h2{
  color: #293e40;
  font-size:45px ;
  font-weight: 550;
  padding-top: 30px;
  padding-bottom: 10px;
}
.section4-content h3{
  color: #293e40;
  font-size:30px ;
  font-weight: 100;
  padding-top: 10px;
  padding-bottom: 30px;
  text-align: center;
}
/* .section5-content-img{
} */
.section5 h2{
  color: #293e40;
  font-size:45px ;
  font-weight: 550;
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
}
.section5{
  margin-bottom: 50px;
}
</style>
