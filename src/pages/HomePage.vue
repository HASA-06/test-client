<template>
  <v-container>
    <v-card class="elevation-0" width="100%" height="400px">
      <v-tabs 
        v-model="activateTab"
        :hide-slider="true"
      >
        <v-tab-item>
          <v-card>
            <v-card-title>고기 사진 1</v-card-title>
            <v-img width="300px" :src="mainImage1"></v-img>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-title>고기 사진 2</v-card-title>
            <v-img width="300px" :src="mainImage2"></v-img>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-title>고기 사진 3</v-card-title>
            <v-img width="300px" :src="mainImage3"></v-img>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <v-tabs
      v-model="activateTab"
      :hide-slider="true"
    >
      <v-tab><v-icon :color="isActiveTab(0)">mdi-food-drumstick</v-icon></v-tab>
      <v-tab><v-icon :color="isActiveTab(1)">mdi-food-drumstick</v-icon></v-tab>
      <v-tab><v-icon :color="isActiveTab(2)">mdi-food-drumstick</v-icon></v-tab>
    </v-tabs>
    <v-card class="elevation-0" width="100%" height="500px">
      <video
        class="video-player"
        ref="videoPlayer"
        :src="mainVideo"
        :poster="videoThumbnail"
        muted
        autoplay
        :loop="true"
        :playsinline="true"
        controlsList="nodownload"
        width="640"
        height="300"
      >
      </video>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';
import router from '../router/index';
import videojs from 'video.js';

// Structure

// Service
import homeService from '../services/HomeService';

// Model

// Utils

// Library


@Component({
  components: {
  },
})

export default class HomePage extends Vue {
  /*
    About variables
  */
  private mainImage1 = 'https://cdn.clien.net/web/api/file/F01/4600276/3a10d00f818448f08a6.GIF?w=230&h=150&gif=true';
  private mainImage2 = 'https://file3.instiz.net/data/file3/2018/03/02/6/b/0/6b0eda40828ccfd4a67019986da38a43.gif';
  private mainImage3 = 'https://th2.tmon.kr/thumbs/image/719/4bc/7fb/b7b7e1bdc_700x700_95_FIT.jpg';
  private mainVideo = 'https://miiif-test.s3.ap-northeast-2.amazonaws.com/development/video/product/62204a80-4f30-11eb-9679-771bce042dd2/360_short.mp4';
  private videoThumbnail = 'https://miiif-test.s3.ap-northeast-2.amazonaws.com/development/video/product/62204a80-4f30-11eb-9679-771bce042dd2/360.jpg';
  private activateTab = 0;
  private player: any = null;
  private videoOptions = {
    autoPlay: true,
    controls: true,
    sources: [
      {
        src: this.mainVideo,
        type: 'video/mp4',
      },
    ],
  };

  /*
    About functions
  */
  // Page lifecycle
  async beforeMount() {
    const response = await homeService.checkServer();

    if (response.status === 200 && response.data.message === 'Success') {
      console.log('Check connection with server\n::: Server connected :::\n');
    }
  }

  async created() {
    this.transActivateTab();
  }

  beforeDestroy() {
    if(this.player) this.player.dispose();
  }

  // Data request

  // Data management
  async transActivateTab() {
    await setTimeout(() => {
      console.log('Timer is run');
    }, 4000)

    await setInterval(() => {
      this.activateTab === 3 ? this.activateTab = 1 : this.activateTab += 1;
    }, 4000);
  }

  isActiveTab(tabNumber: number) {
    return this.activateTab === tabNumber
      ? 'black'
      : 'grey';
  }

  checkItemInViewport() {
    if (this.$refs.videoPlayer) this.checkVideoInViewport();
  }

  async checkVideoInViewport() {
    if (this.$refs.videoPlayer) {
      return true;
    }
  }

  // Page event
}
</script>

<style lang="scss" scoped>
.VideoItem {
  max-height: 480px;
}
</style>
