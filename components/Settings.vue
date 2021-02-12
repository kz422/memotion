
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>
        <div class="seetings pa-10">
          <h3>NightMode</h3>
          <v-icon color="yellow" v-if="this.$vuetify.theme.dark" @click="lightMode">mdi-theme-light-dark</v-icon>
            <v-icon color="red" v-else @click="darkMode">mdi-theme-light-dark</v-icon>
          <!-- <div class="contacts pt-5">
            <h3>Contacts</h3>
            <v-form
              ref="form"
              v-model="form"
              @submit.prevent="submit"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdICv9zkF-9TTPqvhUzpcsbujG7c448GHV8JlEurhdyCRW0Bg/formResponse"
            >
              <v-text-field
                name="entry.2071334191"
                v-model="name"
                :counter="20"
                :rules="nameRules"
                label="Name"
                filled
              ></v-text-field>

              <v-text-field
                name="entry.896772693"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                filled
              ></v-text-field>

              <v-textarea
                name="entry.1660306914"
                class="pt-3"
                v-model="comment"
                label="お問い合わせ内容"
                no-resize
                :rules="required"
                dense
                filled
              ></v-textarea>

              <v-btn
                color="error"
                class="mr-4"
                @click="reset"
              >
                Reset Form
              </v-btn>
              <v-btn :disabled="!form" color="primary" type="submit">
                Submit
              </v-btn>
            </v-form>
            <template>
              <div class="text-center">
                <v-overlay :value="overlay">
                  <v-card class="pa-5">
                    <v-card-title>お問い合わせを受け付けました。</v-card-title>
                    <v-card-text>担当よりメールにて回答を送信いたします。</v-card-text>
                    <v-card-text>しばらくお待ちくださいませ。</v-card-text>
                  </v-card>
                  <v-btn
                    icon
                    @click="done"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-overlay>
              </div>
            </template>
          </div> -->
        </div>


      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    done() {
      this.reset()
      this.dialog = false
    },
    submit() {
    const submitParams = new FormData()
    submitParams.append('entry.2071334191', this.name);
    submitParams.append('entry.896772693', this.email);
    submitParams.append('entry.1660306914', this.comment);

    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdICv9zkF-9TTPqvhUzpcsbujG7c448GHV8JlEurhdyCRW0Bg/formResponse'
    axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
      .then(() => {
//ここに送信完了の処理を書く
      this.overlay = true
      })
    },
    openSettings() {
      this.dialog = true
    },
    lightMode() {
    this.$vuetify.theme.dark = false
    localStorage.theme = "light"
    },
    darkMode() {
      this.$vuetify.theme.dark = true
      localStorage.theme = "dark"
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
      this.overlay = false
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
  data () {
    return {
      overlay: false,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      form: true,
      name: '',
      email: '',
      nameRules: [
        v => !!v || 'お名前は必須です',
      v => (v && v.length <= 20) || 'お名前は20文字以内で入力してください',
      ],
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスは必須です',
        v => /.+@.+\..+/.test(v) || 'メールアドレス形式で入力してください',
      ],
      comment: '',
      required: [ value => !!value || "何かしら入れてね" ]
    }
  },
}
</script>
