<template>
  <div :class="{smalldisp: smallDisp}">
    <h1 class="pt-2 pl-3" >Happy</h1>
    <small class="pl-3">"嬉しい"</small>
    <div>
      <Happy />
    </div>
  </div>
</template>

<script>
import Happy from '~/components/Happy'
import { db, firebase } from '~/plugins/firebase'

export default {
  head() {
    return {
      title: 'Happy'
    }
  },
  components: {
    Happy
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
