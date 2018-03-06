<template>
  <div id='Sponsor'>
    <iframe :src="url()" />
  </div>
</template>

<script>
export default {
  mounted () {
    this.$emit('view', this.meta())
  },

  methods: {
    meta () {
      return {
        title: '贊助'
      }
    },
    url () {
      return 'https://sitcon.org/2018/?mode=app#/sponsor'
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
