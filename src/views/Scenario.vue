<template>
  <div id="Scenario" class="pa-4">
    <div v-if="hasToken">
      <scenario-item v-for="scenario in scenarios" :scenario="scenario" :key="scenario.id" @use="useIt" @startCount="startCount" @reload="reload"></scenario-item>
    </div>
    <div v-else>
      <qrcode-reader :enable="true" :noResult="true" title="" subTitle="請透過連結開啟此應用程式，你也可以使用下面掃描 KKTIX 提供的 QR Code" @OnSuccess="OnSuccess"></qrcode-reader>
    </div>
    <count-down :scenario="countSce" :enable="countEnable" @close="closeCount"></count-down>
  </div>
</template>
<script>
import api from '../modal/apiClient'
export default {
  name: 'Scenario',
  data() {
    return {
      "scenarios": [],
      "hasToken": false,
      "countSce": null,
      "countEnable": false
    }
  },

  mounted() {
    this.$emit('view', this.meta())
  },

  beforeMount() {
    if ((this.parameters().token || '').length != 0) {
      console.log('asd')
      try {
        window.localStorage.setItem('ccip-token', this.parameters().token)
      } catch (error) {
        window.alert('請離開 iOS 隱私模式 或 Add to homescreen'); 
      }
    }
    this.startScenario()
  },

  methods: {
    meta() {
      return {
        title: '快速通關',
        userId: window.localStorage.getItem('user_id')
      }
    },
    startScenario() {
      var self = this
      if (window.localStorage.getItem('ccip-token')) {
        self.hasToken = true
        api.getStatus(window.localStorage.getItem('ccip-token')).then(function (res) {
          window.localStorage.setItem('user_id', res.data['user_id'])
          self.$emit('view', self.meta())
          self.scenarios = res.data.scenarios
        }).catch(function (error) {
          console.log(error)
          window.alert('錯誤，請檢查網路連線並使用會場網路')
        })
      } else {
        self.hasToken = false
      }
    },
    OnSuccess(result) {
      window.localStorage.setItem('ccip-token', result)
      this.startScenario()
    },
    useIt(scenario) {
      var self = this
      api.useScenario(scenario.id, window.localStorage.getItem('ccip-token')).then(function (res) {
        self.scenarios = res.data.scenarios
        if (scenario.countdown > 0) {
          self.startCount(scenario)
          // startCountdownActivity(scenario);
        }
      }).catch(function (error) {
        console.log(error)
        window.alert('錯誤，請檢查網路連線並使用會場網路')
      })
    },
    startCount(scenario) {
      this.countSce = scenario
      this.countEnable = true
    },
    closeCount() {
      this.countSce = null
      this.countEnable = false
    },
    reload() {
      this.startScenario()
    },
    parameters() {
      return location.search.split('?').pop().split('&').map(function (p) {
        var ps = p.split('=');
        var o = {};
        o[ps.shift()] = ps.join('=');
        return o;
      }).reduce(function (a, b) {
        var o = a;
        for (var k in b) {
          o[k] = b[k];
        }
        return o;
      });
    }
  },

}

</script>

<style>

</style>