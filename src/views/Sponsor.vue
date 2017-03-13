<template>

</template>

<script>
    export default {
    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: '贊助'
        }
      }
    }
  }
</script>