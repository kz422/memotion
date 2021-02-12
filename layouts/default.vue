<template>
  <v-app class="apps" :class="{light: isDark}">
    <v-app-bar v-if="!isIndex" fixed height="60vh" color="rgba(255, 255, 255, 0)" class="d-xl-none d-lg-none d-md-none d-xl-flex appbar" :class="{lightab: isDark}">
    <!-- <v-app-bar v-if="!isIndex" color="rgba(255, 255, 255, 0)" fixed> -->
    <v-row align="center" justify="center">
      <v-col align="center" class="pt-7">
        <nuxt-link to="/">
        <img width="70px" src="~/assets/square_logo3.png">
        </nuxt-link>
      </v-col>
      <v-col align="center">
        <!-- <v-icon color="blue">mdi-twitter</v-icon> -->
      </v-col>
      <v-col align="center">
        <v-icon color="blue" class="pr-2">mdi-twitter</v-icon>
        <v-icon @click="openmenu">mdi-arrow-expand-vertical</v-icon>
      </v-col>
    </v-row>
    </v-app-bar>
    <v-main>
      <v-container class="pa-0 main" fluid>
        <v-row>
          <v-col v-if="!isIndex" class="pa-0 d-xs-none d-none d-md-flex" cols="12" sm="3" md="3" lg="3" xl="2">
            <v-col class="sidebar" :class="{lightsb: isDark}" cols="12" sm="3" md="3" lg="3" xl="2">
              <v-col align="center" justify="center">
                <nuxt-link to="/">
                  <h1><img class="mt-13" width="120px" src="~/assets/square_logo3.png"></h1>
                </nuxt-link>
                <p style="color: #fff">ようこそ<br>"MEMOTION"へ</p>
                <!-- <v-btn @click="test">test</v-btn> -->
                <v-icon color="blue" class="pr-2">mdi-twitter</v-icon>
                <v-icon @click="openmenu">mdi-arrow-expand-vertical</v-icon>
              </v-col>
            </v-col>
          </v-col>
          <v-col class="pa-0">
            <nuxt />
          </v-col>
        </v-row>
        <Bottoms v-if="!isIndex" ref="bottomsNav"/>
      </v-container>
      <v-overlay :value="overlay">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
    </v-overlay>
    </v-main>
  </v-app>
</template>

<script>
import Post from '~/components/Post'
import Bottoms from '~/components/Bottoms'
import { db,firebase } from '~/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  components: {
    Bottoms
  },
  methods: {
    ...mapActions(['setUser']),
    openmenu() {
      this.$refs.bottomsNav.navToggle()
    },
    login() {
      const provider = new firebase.auth().signInAnonymously()
        .then((result) => {
          const user = result.user
          this.setUser(user)
          console.log(this.isAuthenticated)
        }).catch((error) => {
          alert(error)
        })
    },
    lightMode() {
      this.$vuetify.theme.dark = false
      localStorage.theme = "light"
    },
    darkMode() {
      this.$vuetify.theme.dark = true
      localStorage.theme = "dark"
    },
    addPost() {
      this.dialog = true
    },
    closeModal() {
      this.dialog = false
    }
  },
  data () {
    return {
      userUid: '',
      bottomNav: 'recent',
      overlay: true,
      dialog: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'say gucci'
    }
  },
  mounted() {
    this.overlay = false
    this.login()
    if(localStorage.theme == "light") {
      this.lightMode()
    } else {
      this.darkMode()
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
    isIndex() {
      return this.$route.name === "index"
    },
    isDark() {
      return !this.$vuetify.theme.dark
    },
    smallDisp() {
      return this.$vuetify.breakpoint.width < 960
    }
  },
  created () {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        // User is signed in.
        this.userUid = user.uid
        // console.log(this.userUid)
      }
    })
  },
}
</script>

<style scoped>
.appbar {
  background-image: url("~@/assets/bgdka.jpg"); 
  background-size: cover;
}
.lightab {
  background-image: url("~@/assets/bg6.jpg"); 
  background-size: cover;
}

.sidebar {
  height: 100vh;
  width: 100%;
  /* background-image: url("https://cdn.vuetifyjs.com/images/parallax/material2.jpg"); */
  background-image: url("~@/assets/bgdk.jpg"); 
  background-size: cover;
  position: fixed;
}
.lightsb {
  height: 100vh;
  width: 100%;
  /* background-image: url("https://cdn.vuetifyjs.com/images/parallax/material2.jpg"); */
  background-image: url("~@/assets/bg5.jpg"); 
  background-size: cover;
  position: fixed;
}

/* .smalldisp {
  margin-top: 60px;
} */

.apps {
  overflow: hidden;
  font-family: 'Oswald';
}

.main{
  height: 100%;
}

.light {
  background-color: #f9f9f9;
}

h1 {
  margin: 0 auto;
}

.add-post {
  position: fixed;
  right: 20px;
  bottom: 50px;
}

</style>

<style>
.smalldisp {
  text-align: center;
  margin-top: 60px;
}

.v-enter-active, .v-leave-active {
  transform: translate(0px, 0px);
  transition: transform 1s cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateY(100vh) translateY(0px);
}
</style>
