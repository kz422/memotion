<template>
  <div :class="{smalldisp: smallDisp}">
    <h1 class="pt-2 pl-3" >JustWannaSay</h1>
    <small class="pl-3">"ただ言いたい"</small>
    <div>
      <Justsay />
    </div>
  </div>
</template>

<script>
import Justsay from '~/components/Justsay'
import { db, firebase } from '~/plugins/firebase'

export default {
  head() {
    return {
      title: 'JustWannaSay'
    }
  },
  components: {
    Justsay
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
