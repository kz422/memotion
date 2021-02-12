<template>
  <v-container fluid class="mb-10">
    <p class="pl-1" :class="{smalldisp: smallDisp}">現在の投稿数<br>{{ posts.length }}</p>
    <transition appear>
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
            <!-- <v-icon v-if="isAuthenticated" @click="deletePost(post.id)" small>mdi-trash-can</v-icon> -->
          </v-card>

        </v-dialog>
      </v-col>
    </v-row>
    </transition>
  </v-container>
</template>

<script>
import { db,firebase } from '~/plugins/firebase'
import { mapActions } from 'vuex'
import Bottoms from '~/components/Bottoms'
import Nopost from '~/components/Nopost'

export default {
  components: {
    Bottoms,
    Nopost
  },
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
    deletePost(index) {
      if(confirm('削除してもよろしいですか？')) {
        db.collection('posts').doc(index).delete()
      }
    },
    ...mapActions(['setUser']),
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
    db.collection('posts').orderBy('createdAt')
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
  },
  data() {
    return {
      posts: [],
      times: [],
      show: false
    }
  },
  created: function() {
    setInterval(() => {this.deleteOverduePost()}, 10000)
  }
}
</script>

<style scoped>
.smalldisp {
  text-align: center;
  margin-top: 0;
}

* {
  color: gray;
}

textarea {
  width: 80%;
  margin: 0 auto;
  border: 1px solid black;
}

/* h3 {
  font-weight: normal;
} */

.post-comment {
  white-space: pre-wrap;
  word-wrap:break-word;
  /* background-color: aliceblue; */
}

/* .comment-area {
  height: 30vh;
} */
.v-enter-active, .v-leave-active {
  transition: all 500ms;
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

<style>
.smalldisp {
  text-align: center;
}
</style>
