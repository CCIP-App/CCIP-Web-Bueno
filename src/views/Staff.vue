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
        title: '工作人員'
      }
    },
    url () {
      return 'https://sitcon.org/2018/?mode=app#/staff'
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
