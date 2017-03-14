<template>
  <v-modal v-model="modal" id='CountDown'>
    <v-card :class="{'default-bg':(diet===''),'dietmeat-bg':(diet==='葷食'),'dietvegen-bg':(diet==='素食'),'finish-bg':(countdown===0)}">
      <v-card-text class="text-xs-center">
        <h3>{{ diet }}</h3>
        <h1>{{ countdown }}</h1>
        <h2 v-if="currentTime!==''">{{ currentTime }}</h2>
      </v-card-text>
      <v-card-row actions>
        <v-btn block v-on:click.native.stop="modal = false" class="black--text">close</v-btn>
      </v-card-row>
    </v-card>
  </v-modal>
</template>

<script>
  export default {
    name: 'CountDown',
    props: ['scenario','enable'],
    data () {
      return {
        modal: false,
        countdown: 12,
        currentTime: "00:55:50"
      }
    },
    watch: {
      enable: function(state){
        this.modal = state
        var self = this
        if(state === true){
          if(this.scenario.used === undefined){
            this.countdown = this.scenario.countdown
          }else{
            this.countdown = ((this.scenario.used + this.scenario.countdown) * 1000 - new Date().getTime()) / 1000
          }
          

          window.setTimeout(this.ticker, 1000);
        }
      }
    },
    computed: {
      diet: function() {
        if(this.scenario !== null && this.scenario.attr !== undefined){
          if(this.scenario.attr.diet !== undefined){
            if(this.scenario.attr.diet === 'meat'){
              return '葷食'
            }else if(this.scenario.attr.diet === 'vegan'){
              return '素食'
            }
          }else{
            var text = ''
            for(var prop in this.scenario.attr){
              text += this.scenario.attr[prop]+"\n"
            }
            return text
          }
        }else{
          return '';
        }
      }
    },
    methods: {
      formatTime(time) {
        var datetime = time
        return this.leftpad(datetime.getHours(), 2) + ":" + this.leftpad(datetime.getMinutes(), 2) + ":" + this.leftpad(datetime.getSeconds(), 2)
      },
      leftpad(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
          output = '0' + output;
        }
        return output;
      },
      ticker() {
        this.countdown = this.countdown - 1
        this.currentTime = this.formatTime(new Date())
        if(this.countdown === 0){
          this.currentTime = ''

        }else{
          if(this.modal === true){
            window.setTimeout(this.ticker, 1000);
          }
        }
      }
    },
    mounted () {
      this.modal = this.enable

      if(this.enable === true){
        if(this.scenario.used === undefined){
          this.countdown = this.scenario.countdown
        }else{
          this.countdown = ((this.scenario.used + this.scenario.countdown) * 1000 - new Date().getTime()) / 1000
        }
        

        window.setTimeout(this.ticker, 1000);
      }
    }

  }

</script>

<style scoped>
  .default-bg{
    background-color: #ff99cc
  }
  .dietmeat-bg{
    background-color: #FFA000
  }
  .dietvegen-bg{
    background-color: #298A08
  }
  .finish-bg{
    background-color: red !important
  }
</style>