<template>
    <v-container>Question Answer</v-container>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';
import router from '../../router/index';

// Structure

// Service

// Model

// Utils

// Library

@Component({
  components: {
  },
})

export default class QuestionAnswerPage extends Vue {
  /*
    About variables
  */

  /*
    About functions
  */
  // Page lifecycle

  // Data request

  // Data management

  // Page event
  async created() {
		alert("아직 개발중입니다 :)");

    router.push({
        path: '/',
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
