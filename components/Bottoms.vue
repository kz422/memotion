<template>
  <div>
    <v-layout wrap>
      <v-dialog
        v-model="dialog"
      >
        <v-card>
          <Post v-on:closeModal="closeModal"/>
        </v-card>
      </v-dialog>

      <v-bottom-navigation
        class="pl-5 pr-5"
        v-model="activeBtn"
        :input-value="showNav"
        fixed
        shift
      >

      <nuxt-link to="/all" class="links">
        <v-btn class="btn">
          <span>一覧</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </nuxt-link>

      <v-menu offset-y top offset-x left>
        <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="btn"
        value="recent"
        v-bind="attrs"
        v-on="on"
        >
          <span>Category</span>
          <v-icon>mdi-forum</v-icon>
        </v-btn>
        </template>
        <v-list v-for="(item, index) in items" :key="index">
          <nuxt-link :to="`/${item.link}`">
            <v-list-item>
              <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list>
        </v-menu>

        <v-btn @click="addPost" class="btn">
          <span>POST</span>
          <v-icon color="orange">mdi-comment-plus-outline</v-icon>
        </v-btn>

        <nuxt-link to="/mypost" class="links">
          <v-btn class="btn">
            <span>my post</span>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </nuxt-link>

        <v-btn @click="openSettings" class="btn">
          <span>設定</span>
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <Settings ref="setting"/>
    </v-layout>
  </div>
</template>

<script>
import Post from '~/components/Post'
import Settings from '~/components/Settings'

  export default {
    methods: {
      navToggle() {
        this.showNav = !this.showNav
      },
      openSettings() {
        this.$refs.setting.openSettings()
      },
      addPost() {
        this.dialog = true
      },
      closeModal() {
        this.dialog = false
      }
      },
    components: {
      Post,
      Settings
    }, 
    data () {
      return {
        activeBtn: 1,
        showNav: true,
        dialog: false,
        items: [
        { title: '嬉しい', link: "happy", icon: "mdi-emoticon-happy-outline" },
        { title: '悲しい', link: "sad", icon: "mdi-emoticon-cry-outline" },
        { title: '怒り', link: "anger", icon: "mdi-emoticon-angry-outline" },
        { title: '悩み', link: "worry", icon: "mdi-emoticon-sad-outline" },
        { title: '愚痴', link: "complaint", icon: "mdi-emoticon-confused-outline" },
        { title: 'ただ言いたい', link: "justsay", icon: "mdi-emoticon-cool-outline" },
      ],
      }
    },
  }
</script>

<style scoped>
a {
  text-decoration: none;
}

.links {
  align-items: center;
  display: flex;
  height: 100%;
}

.showhide {
  margin-bottom: 15px;
  position: fixed;
}

</style>
