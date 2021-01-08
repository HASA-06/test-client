<template>
    <v-container>
      Token value is :: {{ tokenValue }}
    </v-container>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';
import router from '../../router/index';

// Structure

// Service
import PaymentService from '../../services/PaymentService';

// Model

// Utils

// Library

@Component({
  components: {
  },
})

export default class TokenPage extends Vue {
  /*
    About variables
  */
  private tokenValue = "";

  /*
    About functions
  */
  // Page lifecycle
  async beforeMount() {
    this.getToken();
  }

  // Data request
  async getToken() {
    try {
      const response = await PaymentService.token();
      
      this.tokenValue = response.data.data;
    } catch (error) {
      if(typeof error === 'string') {
        alert('토큰이 존재하지 않습니다');

        router.push({
          path: '/',
        });
      } else {
        alert(error.response.data.message);
      }
    }
  };

  // Data management

  // Page event
}
</script>

<style lang="scss" scoped>

</style>
