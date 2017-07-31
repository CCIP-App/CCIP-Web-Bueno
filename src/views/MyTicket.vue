<template>
  <div id='MyTicket' class="pa-4">
    <p>請妥善保管你的票券，僅提供給工作人員或攤位人員於活動使用</p>
    <center>
      <canvas id="qrcode" height="240" width="240"></canvas>
    </center>
  </div>
</template>

<script>
  export default {
    name: 'MyTicket',
    mounted () {
      this.$emit('view', this.meta())
      if(window.localStorage.getItem('ccip-token')){
        var canvas = document.getElementById('qrcode');
        window.w69b.qr.encoding.drawOnCanvas(window.localStorage.getItem('ccip-token'), canvas);
      }
    },
    methods: {
      meta() {
        return {
          title: '我的票卷',
          userId: window.localStorage.getItem('user_id')
        }
      }
    }

  }

</script>

<style scoped>

</style>