<template>
  <v-app standalone>

    <main-side v-model="sidebar" v-bind:userid="user"></main-side>
    <main-nav v-bind:title="title"  v-on:sidebar="sidebar = !sidebar"></main-nav>

    <v-content>
      <v-container fluid class="pa-0">
        <transition name="slide" mode="out-in">
          <router-view @view="meta"></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {

    data () {
      return {
        sidebar: true,
        title: '',
        user: ''
      }
    },

    methods: {
      meta (obj) {
        this.title = obj.title
        this.user = obj.userId
      }
    }
  }
</script>
