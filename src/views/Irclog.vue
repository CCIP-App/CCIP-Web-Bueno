<template>
  <div id='Irclog'>
    <iframe :src="url()" />
  </div>
</template>

<script>
export default {
  name: 'Irclog',
  mounted () {
    this.$emit('view', this.meta())
  },

  methods: {
    meta () {
      return {
        title: 'Irclog'
      }
    },
    url () {
      return 'https://ysitd.licson.net/channel/sitcon/today'
    }
  }
}
</script>

<style scoped>
  iframe {
    border: none;
    width: 100%;
    height: calc(100vh - 4.5rem);
    margin-top: 0.5rem;
  }
</style>
