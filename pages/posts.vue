<template>
  <div class="main-container" align="center" justify="center">
    <Post2 />
  </div>
</template>

<script>
import Contents from '~/components/Contents'

export default {
  components: {
    Contents
  }
}
</script>

<style scoped>
.main-container {
  text-align: center;
}

textarea {
  width: 80%;
  margin: 0 auto;
  border: 1px solid black;
}

h3 {
  font-weight: normal;
}

.post-comment {
  white-space: pre-wrap;
  word-wrap:break-word;
  /* background-color: aliceblue; */
}

/* .comment-area {
  height: 30vh;
} */

.v-enter-active {
  transition: all 500ms;
}

.v-leave-active {
  transition: all 2000ms;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.v-move {
  transition: all 400ms;
}

.created-time {
  color: gray;
  font-size: small;
}

</style>
