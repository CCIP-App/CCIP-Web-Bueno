<template>
  <v-app left-fixed-sidebar top-fixed-navbar>
    
    <main-nav v-bind:title="title"></main-nav>

    <main>
      <main-side></main-side>

      <v-content>
        <v-container fluid>
          <transition name="slide" mode="out-in">
            <router-view class="pa-4 pt-5 mt-5" @view="meta"></router-view>
          </transition>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    mounted () {
      this.$vuetify.init()
    },

    data () {
      return {
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