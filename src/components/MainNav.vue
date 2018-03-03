<template>
  <header>
    <v-toolbar fixed dark id="main-toolbar" app>
      <v-toolbar-side-icon v-on:click.native.stop="$emit('sidebar')" ></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
  </header>
</template>

<script>
  export default {
    name: 'main-nav',

    props: {
      title: String
    }
  }
</script>
<style  lang="stylus" scoped>
  #main-toolbar
    background: #009A79;
    &__logo, &__title
      white-space: nowrap
      min-width: 0
      overflow: hidden
      text-overflow: ellipsis
    &__links
      margin: 1rem
      display: flex
      justify-content: center
      align-items: center
      a
        color: #fff
        text-align: center
        text-decoration: none
        margin: 0 .5rem
        img
          height: 25px
        i
          padding: 0
        h1
          font-size: 4vw
</style>
