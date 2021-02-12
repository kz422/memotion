<template>
  <div :class="{smalldisp: smallDisp}">
    <h1 class="pt-2 pl-3" >Complaint</h1>
    <small class="pl-3">"愚痴"</small>
    <div>
      <Complaint />
    </div>
  </div>
</template>

<script>
import Complaint from '~/components/Complaint'
import { db, firebase } from '~/plugins/firebase'

export default {
  head() {
    return {
      title: 'Complaint'
    }
  },
  components: {
    Complaint
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
