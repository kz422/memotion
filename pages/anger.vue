<template>
  <div :class="{smalldisp: smallDisp}">
    <h1 class="pt-2 pl-3" >Anger</h1>
    <small class="pl-3">"怒り"</small>
    <div>
      <Anger />
    </div>
  </div>
</template>

<script>
import Anger from '~/components/Anger'
import { db, firebase } from '~/plugins/firebase'

export default {
  head() {
    return {
      title: 'Anger'
    }
  },
  components: {
    Anger
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
