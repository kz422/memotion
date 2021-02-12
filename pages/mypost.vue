<template>
  <div :class="{smalldisp: smallDisp}">
    <h1 class="pt-2 pl-3" >MyPost</h1>
    <small class="pl-3">"あなたの投稿"</small>
    <div>
      <MyPost />
    </div>
  </div>
</template>

<script>
import MyPost from '~/components/MyPost'
import { db, firebase } from '~/plugins/firebase'

export default {
  head() {
    return {
      title: 'My Page'
    }
  },
  components: {
    MyPost
  },
  computed: {
    smallDisp() {
      return this.$vuetify.breakpoint.width < 960
    }
  }
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

</style>
