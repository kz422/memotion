<template>
<v-container fluid class="pa-0">
    <nuxt-link to="all" style="text-decoration: none">
      <v-btn color="orange" class="btn mt-5" rounded>書いてみる→</v-btn>
    </nuxt-link>
  <v-parallax
    height="700"
    :src="require('@/assets/toppage.png')"
  >
    <h1>
      <img class="mt-13" width="120px" src="~/assets/square_logo3.png">
    </h1>
    <div class="topsec">
      <h1>ようこそ！</h1>
      <p class="mt-6">あなたの想い、気持ちを</p>
      <p>綴ってみましょう</p>
    </div>
  </v-parallax>

  <v-card class="top-section1" color="#f9f9f9">
    <v-row align-content="center" align="center" justify="center">
      <v-col v-if="!smallDisp" cols="12" sm="12" md="6" lg="6" xl="6">
        <v-img :src="require('@/assets/write.png')" max-width="350"></v-img>
      </v-col>
      <v-col class="text pt-12 pb-10">
        <h1 style="color:black">吐き出す ≒ 掃き出す<br>ことは大切</h1>
        <div class="mt-3 description">
          <p class="body-2">ストレスが溜まっている時</p>
          <p class="body-2">なんだかもやもやする時</p>
          <p class="body-2">考えごとばかりしてしまう時</p>
          <p class="body-2">やっているようでやっていない<br>「気持ちを書き出す」<br>という行為</p>
          <!-- <p class="body-2">「なんで自分だけ」<br>「なんでそんなこと言うの」</p>
          <p class="body-2">口に出して言えないそんな気持ちを<br>文字にして書き出してみましょう</p> -->
          <p class="body-2">気持ちを可視化することで<br>驚くほど気持ちを整理できます</p>
        </div>
      </v-col>
    </v-row>
    <v-col v-if="smallDisp" class="pt-0 pb-8">
        <v-img :src="require('@/assets/write.png')" max-width="250"></v-img>
    </v-col>
  </v-card>
  
  <v-card class="top-section2" color="#fff">
    <v-row align-content="center" align="center" justify="center">
      <v-col class="text pt-12 pb-10 mx-auto">
        <h1 style="color:black">人の目を気にする必要は<br>ありません</h1>
        <div class="mt-3 description">
          <p class="body-2">"MEMOTION"は匿名で利用できます</p>
          <p class="body-2">友人が見ているSNSでは言えないこと</p>
          <p class="body-2">そんなあなただけの気持ちを<br>是非、書き出してみてください</p>
          <p class="body-2">”いいね”は無いですが</p>
          <p class="body-2">同じ気持ちを持った同士が<br>見てくれているはずです</p>
        </div>
      </v-col>
      <v-col v-if="!smallDisp" class="sec2img" cols="12" sm="12" md="6" lg="6" xl="6">
        <v-img :src="require('@/assets/MiniLapTop.png')" max-width="350"></v-img>
      </v-col>
      <v-col v-else class="sec2img mb-6" cols="12" sm="12" md="6" lg="6" xl="6">
        <v-img :src="require('@/assets/MiniLapTop.png')" max-width="250"></v-img>
      </v-col>
    </v-row>
  </v-card>

  <v-card class="top-section3" color="#f9f9f9">
    <v-row align-content="center" align="center" justify="center">
      <v-col v-if="!smallDisp" cols="12" sm="12" md="6" lg="6" xl="6">
        <v-img :src="require('@/assets/time.png')" max-width="350"></v-img>
      </v-col>
      <v-col class="text py-16 mx-auto">
        <h1 style="color:black">ポジティブな気持ちも<br>ネガティブな気持ちも<br>いずれは消えます</h1>
        <div class="mt-3 description">
          <p class="body-2">いいことも悪いことも、いずれは忘れます</p>
          <p class="body-2">"MEMOTION"への投稿は<br>24時間で消えるようになっています</p>
          <p class="body-2">今だけの、生の気持ちをPostしましょう</p>
        </div>
      </v-col>
    </v-row>
      <v-col v-if="smallDisp" class="mb-6">
        <v-img :src="require('@/assets/time.png')" max-width="300"></v-img>
      </v-col>
    <v-footer>
      <v-col>
      <small> 2020 - &copy;MEMOTION </small>
      </v-col>
    </v-footer>
  </v-card>
</v-container>
</template>

<script>
export default {
  computed: {
    smallDisp() {
      return this.$vuetify.breakpoint.width < 960
    }
  }
}
</script>


<style scoped>

.topsec {
  color: #fff;
}

.v-parallax__image {
  transform: none !important;
  width: 100% !important;
}

.text {
  max-height: 100%;
  color: gray;
}

.btn {
  color: #fff;
  top: 85%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 200;
}

</style>
