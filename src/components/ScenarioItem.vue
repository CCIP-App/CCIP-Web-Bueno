<template>
  <v-card class="ScenarioItem" @click.native.stop="clickSce">
    <v-card-text v-if="isDisabled" class="disableCard">
      <v-card-row>
        <div><img height="80rem" :src="imgsrc(scenario.id)" /></div>
        <div class="ml-4">
          <h3 class="ma-0 text-xs-left"><strong>{{ scenario.display_text['zh-TW'] }}</strong></h3>
          <p class="ma-0  text-xs-left">{{ scenario.disabled }}</p>
        </div>
      </v-card-row>
    </v-card-text>
    
    <v-card-text v-else-if="isUsed">
      <v-card-row>
        <div><img height="80rem" class="disableCard" :src="imgsrc(scenario.id)" />
        <img class="tick" height="20rem" src="public/tick.png" /></div>
        <div class="ml-4 disableCard">
          <h3 class="ma-0 text-xs-left"><strong>{{ scenario.display_text['zh-TW'] }}</strong></h3>
          <p class="ma-0  text-xs-left">{{ formatDatetime(scenario.available_time)+" ~ "+formatDatetime(scenario.expire_time) }}</p>
        </div>
      </v-card-row>
    </v-card-text>
    <v-card-text v-else v-ripple="{class:'ripple--text'}" class="touch">
      <v-card-row>
        <div><img height="80rem" :src="imgsrc(scenario.id)" /></div>
        <div class="ml-4">
          <h3 class="ma-0 text-xs-left"><strong>{{ scenario.display_text['zh-TW'] }}</strong></h3>
          <p class="ma-0  text-xs-left">{{ formatDatetime(scenario.available_time)+" ~ "+formatDatetime(scenario.expire_time) }}</p>
        </div>
      </v-card-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'ScenarioItem',
    props: ['scenario'],
    data () {
      return {
        
      }
    },
    computed: {
      isDisabled: function(){
        return this.scenario.disabled !== undefined
      },
      isUsed: function(){
        if(this.scenario.used !== undefined){
          if((new Date().getTime() / 1000) - this.scenario.used < this.scenario.countdown){
            return false
          }else{
            return true
          }
        }else{
          return false
        }
      }
    },
    methods: {
      imgsrc(url) {
        var filename = (url.indexOf('lunch') != -1) ? 'lunch' : url
        return require('public/' + filename + '.png')
      },
      formatDatetime(time) {
        var datetime = new Date(time * 1000)
        return this.leftpad(datetime.getMonth() + 1, 2) + "/" + this.leftpad(datetime.getDate(), 2) + " " +
          this.leftpad(datetime.getHours(), 2) + ":" + this.leftpad(datetime.getMinutes(), 2)
      },
      leftpad(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
          output = '0' + output;
        }
        return output;
      },
      clickSce(){
        var self = this
        if(!self.isDisabled && !self.isUsed){
          if(self.scenario.used === undefined){
            if (scenario.countdown > 0) {
                //showConfirmDialog(scenario);
            } else {
                //use(scenario);
            }
          }else{
            //startCountdownActivity(scenario);
          }
        }
      }
    }
  }

</script>

<style scoped>
  .card {
    margin-bottom: 1rem;
  }
  
  .disableCard {
    opacity: 0.4;
  }
  
  .touch:hover {
    cursor: pointer;
  }

  .tick {
    position: absolute;
    bottom: 20px;
    left: 5.5rem;
  }
</style>
