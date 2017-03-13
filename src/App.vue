<template>
  <v-app left-fixed-sidebar top-fixed-navbar>
    
    <main-nav v-bind:title="title"  v-on:sidebar="sidebar = !sidebar"></main-nav>

    <main>
      <main-side v-model="sidebar"></main-side>

      <v-content>
        <v-container fluid>
          <transition name="slide" mode="out-in">
            <router-view class="mt-5" @view="meta"></router-view>
          </transition>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {

    data () {
      return {
        sidebar: true,
        title : ""
      }
    },

    methods: {
      meta (obj) {
        this.title = obj.title
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './css/main.css'
</style>