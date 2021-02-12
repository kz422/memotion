<template>
<div>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
    <v-form
      class="pa-4 pt-6"
      ref="form"
      v-model="form"
      ><v-text-field
        v-model="name"
        label="ここだけのお名前"
        auto-grow
        filled
        counter="10"
        :rules="[required, name_limit_length]"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="title"
        label="題名を"
        auto-grow
        filled
        counter="10"
        :rules="[required, name_limit_length]"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-textarea
        v-model="comment"
        label="なんでもどうぞ"
        no-resize
        filled
        counter="500"
        :rules="[required, comment_limit_length]"
        dense
      ></v-textarea>
      <div class="category">
        <v-select
          v-model="selected"
          :items="categories"
          label="カテゴリーを選択"
          return-object
          single-line
          :rules="[selectRequired]"
          clearable
          clear-icon="mdi-close"
        ></v-select>
      </div>
      <v-btn
      @click="resetForm" 
      >
      <v-icon>mdi-trash-can</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        :disabled="!form"
        @click="savePost()"
      >
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-form>
  </v-card>

</div>
</template>

<script>
import { db,firebase } from '~/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  props: ['modal'],
  methods: {
    ...mapActions(['setUser']),
    resetForm() {
      if(confirm('フォームが全て消去されますがよろしいですか？')) {
        this.name = ''
        this.title = ''
        this.comment = '',
        this.selected = null,
        this.$refs.form.resetValidation()
      }
    },
    savePost() {
      const moment = require("moment")
      if(confirm('投稿しますか？')){
        db.collection('posts')
        .add({ 
          name: this.name,
          title: this.title,
          comment: this.comment,
          createdAt: moment().format("MM/DD HH:mm"),
          createdAtMs: Date.now(),
          category: this.selected,
          likeCount: 0,
          postedUser: this.userUid
          })
        this.name = ''
        this.title = ''
        this.comment = ''
        this.selected = null
        this.$refs.form.resetValidation()
        this.$emit('closeModal')
      }
    }
  },
  data() {
    return {
      userUid: '',
      postedUser: '',
      selected: '',
      categories: ['嬉しい', '悲しい','怒り', '悩み', '愚痴', 'ただ言いたい'],
      name: '通りすがりさん',
      comment: '',
      title: '無題',
      form: true,
      required: value => !!value || "入力必須です", // 入力必須の制約
      selectRequired: value => !!value || "選択必須です", // 入力必須の制約
      name_limit_length: value => value.length <= 10 || "10文字以内で入力してください",
      comment_limit_length: value => value.length <= 500 || "500文字以内で入力してください"
    }
  },
  created () {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        // User is signed in.
        this.userUid = user.uid
        // console.log(this.userUid)
      } else {
        // No user is signed in.
        console.log('No user is signed in.')
      }
    })
  },
}
</script>

<style scoped>
* {
  font-family: 'Arial';
}
</style>
