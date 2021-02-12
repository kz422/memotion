<template>
  <div class="main-container">
    <v-container>
      <h2 v-if="posts.length == 0">投稿はありません</h2>
      <!-- <v-btn @click="deleteOverduePost">del</v-btn> -->
      <v-btn @click="login">login</v-btn>
      <transition-group>
        <v-card v-for="post in posts" :key="post.id" class="pa-5 mt-5" align="center">
          <v-row>
            <v-col align="left">
              <h5 class="mb-0">Name</h5>
              <v-divider width="25%"></v-divider>
              <p class="mb-0">{{ post.name }} さん</p>
            </v-col>
            <v-col align="left">
              <h5 class="mb-0">Title</h5>
              <v-divider width="20%"></v-divider>
              <p class="mb-5">『 {{ post.title }} 』</p>
            </v-col>
          </v-row>
          <div class="comment-area" align="left">
          <h5>Comment</h5>
          <v-divider class="divider"></v-divider>
            <p class="post-comment pa-3">{{ post.comment }}</p>
          </div>
          <v-row>
          <v-col></v-col>
          <v-col>
            <p class="created-time mb-0">{{ post.createdAt }}</p>
          </v-col>
          <v-col align="right">
            <v-icon v-if="isAuthenticated" @click="deletePost(post.id)" >mdi-trash-can</v-icon>
          </v-col>
          </v-row>
          <!-- <v-btn v-if="isAuthenticated" @click="deletePost(post.id)" class="mb-5">
            <v-icon>mdi-trash-can</v-icon>
          </v-btn> -->
        </v-card>
      </transition-group>
    </v-container>
  </div>
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
          console.log(user)
        }).catch((error) => {
          alert(error)
        })
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
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
    this.login()
    console.log(this.isAuthenticated)
  },
  data() {
    return {
      posts: [],
      times: []
    }
  },
  created: function() {
    setInterval(() => {this.deleteOverduePost()}, 10000)
  }
}
</script>

<style scoped>
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

/* .comment-area {
  height: 30vh;
} */

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
