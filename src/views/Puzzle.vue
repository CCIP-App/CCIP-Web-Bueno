<template>
  <div id='Puzzle'>
    <iframe :src="url()" />
  </div>
</template>

<script>
  import crypto from 'crypto'
  export default {
    name: 'Puzzle',
    mounted() {
      this.$emit('view', this.meta())
    },


    methods: {
      meta() {
        return {
          title: '開源巔峰挑戰賽'
        }
      },
      url() {
        if(window.localStorage.getItem('ccip-token')){
          return 'https://play.coscup.org/?mode=app&token='+this.sha1Gen(window.localStorage.getItem('ccip-token'))
        }else{
          return 'https://play.coscup.org/?token='
        }
      },
      sha1Gen(raw) {
        var hashGen = crypto.createHash('sha1')
        hashGen.update(raw)
        return hashGen.digest('hex')
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