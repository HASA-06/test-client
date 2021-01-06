<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-app-bar-nav-icon @click="navigationButton()"></v-app-bar-nav-icon>
      <v-toolbar-title class="app-bar-title">고기아찌 Beta ver.01</v-toolbar-title>
      <v-spacer></v-spacer>
      <p class="app-bar-content"><span>로그인</span> 해주세요</p>
      <v-btn>
        <v-icon large>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="isNavigationDrawlerShow"
      absolute
      temporary
    >
      <v-card class="rounded-0">
        <v-card-title class="black app-bar-title white--text">
          고기아찌 
          <v-spacer></v-spacer>
          <span>Beta 
            <span>ver.01</span>
          </span>
        </v-card-title>
        <v-card-text class="black white--text elevation-0 nav-content">
          질 좋고 맛있는 <span class="strong-text">소고기</span>, 바로 여기에
        </v-card-text>
      </v-card>
      <v-list
        nav
        dense
      >
        <template 
          v-for="(navigationItem, index) in navigationItemList"
        >
          <v-list-item 
            v-if="!navigationItem.children" :key="index"
            link
            :to="navigationItem.router"
          >
            <v-list-item-icon>
              <v-icon>{{ navigationItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ navigationItem.text }}
            </v-list-item-title>
          </v-list-item>
          <v-list-group 
            v-if="navigationItem.children" :key="index"
            :value="navigationItem.model"
            :prepend-icon="navigationItem.icon"
          >
            <template v-slot:activator>
              <v-list-item-title>
                {{ navigationItem.text }}
              </v-list-item-title>
            </template>
            <template 
              v-for="(navigationChildItem, subIndex) in navigationItem.children"
            >
              <v-list-item 
                :key="subIndex" 
                link
                :to="navigationChildItem.router"
              >
                <v-list-item-icon>
                  <v-icon>{{ navigationChildItem.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  {{ navigationChildItem.text }}
                </v-list-item-title>
              </v-list-item>
            </template>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
// Common
import { Component, Vue } from 'vue-property-decorator';

// Structure

// Service

// Model

// Utils

// Library

@Component({
  components: {
  },
})

export default class App extends Vue {
  /*
    About variables
  */
  private isNavigationDrawlerShow = false;
  private navigationItemList = [
    {
      icon: 'mdi-home',
      text: '홈으로 가기',
      model: true,
      router: '/',
    },
    {
      icon: 'mdi-food-drumstick',
      text: '고기 보러가기',
      model: false,
      children: [
        {
          icon: 'mdi-food-drumstick',
          text: '미국산 소고기 프라임 등급',
          router: '/meat/american-prime-pride-meat',
          model: false,
        },
        {
          icon: 'mdi-food-drumstick',
          text: '고기1',
          router: '/meat/salt-aging-meat',
          model: false,
        },
        {
          icon: 'mdi-food-drumstick',
          text: '고기2',
          router: '/meat/salt-aging-meat',
          model: false,
        },
        {
          icon: 'mdi-food-drumstick',
          text: '고기3',
          router: '/meat/salt-aging-meat',
          model: false,
        }
      ],
    },
    {
      icon: 'mdi-account-group',
      text: '커뮤니티',
      model: false,
      children: [
        {
          icon: 'mdi-bullhorn',
          text: '공지사항',
          router: '/community/announcement',
          model: false,
        },
        {
          icon: 'mdi-message-draw',
          text: '상품후기',
          router: '/community/review',
          model: false,
        },
        {
          icon: 'mdi-help-circle',
          text: 'Q & A',
          router: '/commuinty/question-answer',
        },
        {
          icon: 'mdi-account-voice',
          text: '자유게시판',
          router: '/community/free-board',
        },
      ],
    },
  ];

  /*
    About functions
  */
  // Page lifecycle

  // Data request

  // Data management

  // Page event
  navigationButton() {
    this.isNavigationDrawlerShow = !this.isNavigationDrawlerShow;
  }
}
</script>

<style lang="scss" scoped>
.app-bar-title {
  font-weight: 800;
  font-size: 24px;
  text-shadow: 1px 1px grey;

  span {
    font-size: 16px;
    font-weight: 800;

    span {
      font-size: 14px;
      font-weight: 500;
    }
  }
}

.app-bar-content {
  margin: auto 0 auto 0;
  font-weight: 500;
  font-size: 14px;

  span {
    font-weight: 800;
    font-size: 16px;
  }
}

.strong-text {
  font-weight: 800;
}

.nav-content {
  font-size: 12px;
  text-align: center;
}
</style>
