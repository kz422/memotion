<template>
  <v-container fluid class="mb-10">
    <div>
      <p class="pl-1">現在の投稿数<br>{{ posts.length }}</p>
    </div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="6" lg="6" xl="6" v-for="post in posts" :key="post.id">
        <v-dialog max-width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-card
              class="py-5 mx-auto"
              v-bind="attrs"
              v-on="on"
              max-width="400"
              rounded="xl"
              align="center" justify="center"
            >
              <v-card-title>
                <v-icon
                  left
                >
                  mdi-message-bulleted
                </v-icon>
                <span class="title font-weight-light">{{ post.title }}</span>
              </v-card-title>
              
              <v-card-text class="headline font-weight-bold">
                {{ post.comment.slice(0, 50) }} ...
              </v-card-text>

              <v-list-item class="grow">
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon
                      
                      class="pr-1"
                      small
                    >mdi-account</v-icon>
                  {{ post.name }}
                  </v-list-item-title>
                </v-list-item-content>

              <v-row
                align="center"
                justify="end"
              >
                <small class="subheading mr-5">{{ post.createdAt }}</small>
                <!-- <span class="mr-1"></span>
                <span class="subheading">{{ post.category }}</span> -->
              </v-row>
              </v-list-item>

            </v-card>
          </template>

<!-- モーダルを開いた時 -->
          <v-card 
            class="pa-8" 
            align="center" 
            justify="center" 
            rounded="xl"
            width="500"
          >
            <v-card-title class="pl-0">
                <v-icon
                  left
                >
                  mdi-message-bulleted
                </v-icon>
                <span class="title font-weight-light">{{ post.title }}</span>
              </v-card-title>
              <v-card-text 
                class="
                font-weight-light 
                text-body-2 
                text-sm-body-1
                text-md-body-1
                text-lg-body-1
                text-xl-body-1
                post-comment 
                px-0
                pt-1" 
                align="left"
                >{{ post.comment }}</v-card-text>

              <v-list-item class="grow">
                <v-list-item-content>
                  <v-list-item-title align="left">
                    <v-icon
                      
                      class="pr-1"
                      small
                    >mdi-account</v-icon>
                  {{ post.name }}
                  </v-list-item-title>
                </v-list-item-content>

              <v-row
                align="center"
                justify="end"
              >
                <small class="subheading mr-5">{{ post.createdAt }}</small>
                <!-- <span class="mr-1"></span>
                <span class="subheading">{{ post.category }}</span> -->
              </v-row>
              </v-list-item>
            <v-icon v-if="isAuthenticated" @click="deletePost(post.id)" small>mdi-trash-can</v-icon>
          </v-card>

        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db,firebase } from '~/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  methods: {
    //期限切れのPostを削除↓（created時、自動でsetInterval実行）
    //overTimeで過ぎた時間の管理
    deleteOverduePost(){
      const dt = Date.now()
      const overTime = 86400000 //24h
      const overDate = dt - overTime
      db.collection('posts').where("createdAtMs", "<", overDate).get()
        .then((querySnapshot)=>{
          querySnapshot.forEach(function(doc) {
            const overDatePost = doc.id
            console.log('times up')
            db.collection('posts').doc(overDatePost).delete()
          })
        })
    },
    ...mapActions(['setUser']),
    deletePost(index) {
      if(confirm('削除してもよろしいですか？')) {
        db.collection('posts').doc(index).delete()
      }
    },
    //匿名ログインを実施（mounted時、自動で実行）
    login() {
      const provider = new firebase.auth().signInAnonymously()
        .then((result) => {
          const user = result.user
          this.setUser(user)
        }).catch((error) => {
          alert(error)
        })
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
    smallDisp() {
      return this.$vuetify.breakpoint.width < 960
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        // User is signed in.
        this.userUid = user.uid
        // console.log(this.userUid)
        var userInfo = user.uid
        db.collection('posts').where("postedUser", "==" , userInfo).orderBy('createdAt')
          .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
              const doc = change.doc
              const index = this.posts.findIndex(post => post.id === change.doc.id)
              if(change.type === 'added') {
                this.posts.unshift({id: doc.id, ...doc.data()})
              }
              if(change.type === 'removed') {
                this.posts.splice(index, 1)
              }
            })
          })
      } else {
        // No user is signed in.
        // console.log('No user is signed in.')
      }
      this.login()
    })
  },
  data() {
    return {
      posts: [],
      times: [],
      show: false,
      userUid: ''
    }
  },
  created: function() {
    setInterval(() => {this.deleteOverduePost()}, 10000)
  },
  created () {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        // User is signed in.
        this.userUid = user.uid
      } else {
        // No user is signed in.
        // console.log('No user is signed in.')
      }
    })
  },
}
</script>

<style scoped>
* {
  color: gray;
}

h1 {
  font-family: 'Oswald';
  font-weight: lighter;
  height: 50px;
  color: gray;
  /* margin-top: 60px; */
}

.smalldisp {
  text-align: center;
}
.main-container {
  text-align: center;
}

textarea {
  width: 80%;
  margin: 0 auto;
  border: 1px solid black;
}

h3 {
  font-weight: normal;
}

.post-comment {
  white-space: pre-wrap;
  word-wrap:break-word;
  /* background-color: aliceblue; */
}

.v-enter-active {
  transition: all 500ms;
}

.v-leave-active {
  transition: all 2000ms;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.v-move {
  transition: all 400ms;
}

.created-time {
  color: gray;
  font-size: small;
}

</style>
