<template>
  <v-col class="sidebar d-xs-none d-none d-md-flex" cols="12" sm="3" md="3" lg="3" xl="2">
    <v-col align="center" justify="center">
      <h1><img class="mt-13" width="120px" src="~/assets/square_logo3.png"></h1>
      <p style="color: #fff">ddd</p>
      <v-icon color="blue" class="pr-2">mdi-twitter</v-icon>
      <v-icon @click="openmenu">mdi-arrow-expand-vertical</v-icon>
    </v-col>
  </v-col>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  width: 100%;
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material2.jpg");
  /* background-image: url("~@/assets/fish.jpg"); */
  background-size: cover;
}
</style>
