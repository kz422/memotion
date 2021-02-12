<template>
  <v-container fluid class="pa-0 mx-0">
    <Top align="center"/>
  </v-container>
</template>

<script>
import Top from '~/components/Top'
// import Contents from '~/components/Contents'
import { db, firebase } from '~/plugins/firebase'

export default {
  components: {
    Top
  }
}
</script>

<style scoped>
/* .container {
  height: 1000px;
} */


</style>
