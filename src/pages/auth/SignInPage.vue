<template>
    <v-container>
        <v-card max-width="800px" class="elevation-12">
            <v-row class="ma-0 pa-0">
                <v-col class="ma-0 pa-0">
                    <v-card-title class="font-weight-black">로그인</v-card-title>
                </v-col>
            </v-row>
            <v-form ref="signInForm" persistent>
                <v-row class="ma-0 pa-0">
                    <v-col class="ma-0 pa-0 text-right" cols="2">
                        <v-card-text>Email</v-card-text>
                    </v-col>
                    <v-col class="ma-0 pa-0" cols="10">
                        <v-text-field
                            type="text"
                            class="pl-2"
                            label="Email"
                            v-model.lazy="email"
                            required
                            :rules="emailRules"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="ma-0 pa-0">
                    <v-col class="ma-0 pa-0 text-right" cols="2">
                        <v-card-text>Password</v-card-text>
                    </v-col>
                    <v-col class="ma-0 pa-0" cols="10">
                        <v-text-field
                            type="password"
                            class="pl-2"
                            label="Password"
                            v-model.lazy="password"
                            required
                            :rules="passwordRules"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-col class="ma-0 pa-0" cols="12">
                  <v-btn @click="signInButton()">로그인 하기<v-icon></v-icon></v-btn>
                  <v-btn @click="signUpButton()">회원가입 하기<v-icon></v-icon></v-btn>
                </v-col>
            </v-form>
        </v-card>
    </v-container>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';
import router from '../../router/index';

// Structure

// Service
import AuthService from '../../services/AuthService';

// Model

// Utils

// Library

@Component({
  components: {
  },
})

export default class SignInPage extends Vue {
  /*
    About variables
  */
  private email = "";
  private password = "";
  private emailRules = [
    (v: string) => !!v || '이메일은 필수입니다',
    (v: string) => /^[a-zA-Z0-9\@\.\_\-]{8,50}$/.test(v) || '불가능한 형식입니다',
  ];
  private passwordRules = [
    (v: string) => !!v || '비밀번호는 필수입니다',
    (v: string) => /^[a-zA-Z0-9]{4,16}$/.test(v) || '비밀번호 형식이 올바르지 않습니다',
  ];
  /*
    About functions
  */
  // Page lifecycle

  // Data request
  async signIn() {
    try {
      const response = await AuthService.signIn(this.email, this.password);

      this.saveToken(response.data.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // Data management
  async saveToken(tokenDatas: any) {
    this.$store.commit("setAuth", tokenDatas);
    this.$cookies.set("access_token", tokenDatas.accessToken, 60 * 30, '/');
    this.$cookies.set("refresh_token", tokenDatas.refreshToken, 60 * 60 * 24 * 30, '/');

    router.push({
      path: '/',
    });
  }

  // Page event
  async signInButton() {
    if (!(this.$refs.signInForm as any).validate()) return;
    
    this.signIn();
  };

  signUpButton() {
    router.push({
      path: '/auth/sign-up'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
