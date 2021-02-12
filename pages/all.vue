<template>
  <div :class="{smalldisp: smallDisp}">
    <h1 class="pt-2 pl-3" >All Posts</h1>
    <small class="pl-3">"すべての投稿"</small>
    <div>
      <Contents />
    </div>
  </div>
</template>

<script>
import Contents from '~/components/Contents'
import { db, firebase } from '~/plugins/firebase'

export default {
  head() {
    return {
      title: 'All Posts'
    }
  },
  components: {
    Contents
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
}

.smalldisp {
  text-align: center;
}

</style>
