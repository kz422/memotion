<template>
<div :class="{smalldisp: smallDisp}">
    <h1 class="pt-2 pl-3" >Sad</h1>
    <small class="pl-3">"悲しい"</small>
    <div>
      <Sad />
    </div>
  </div>
</template>

<script>
import Sad from '~/components/Sad'
import { db, firebase } from '~/plugins/firebase'

export default {
  head() {
    return {
      title: 'Sad'
    }
  },
  components: {
    Sad
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
