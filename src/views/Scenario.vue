<template>
  <div id="Scenario">
    <v-card v-for="scenario in scenarios">
      <v-card-text v-if="scenario.disabled===undefined" v-ripple="{class:'ripple--text'}" class="touch">
        <v-card-row>
          <img height="80rem" :src="imgsrc(scenario.id)" />
          <div class="ml-4">
            <h3 class="ma-0 text-xs-left"><strong>{{ scenarioName(scenario.id) }}</strong></h3>
            <p class="ma-0  text-xs-left">{{ formatDatetime(scenario.available_time)+" ~ "+formatDatetime(scenario.expire_time) }}</p>
          </div>
        </v-card-row>
      </v-card-text>
      <v-card-text v-else class="disableCard">
        <v-card-row>
          <img height="80rem" :src="imgsrc(scenario.id)" />
          <div class="ml-4">
            <h3 class="ma-0 text-xs-left"><strong>{{ scenarioName(scenario.id) }}</strong></h3>
            <p class="ma-0  text-xs-left">{{ scenario.disabled }}</p>
          </div>
        </v-card-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
  export default {
    name: 'Scenario',
    mounted() {
      this.$emit('view', this.meta())
    },

    preFetch() {
      return this.methods.meta()
    },

    methods: {
      meta() {
        return {
          title: '快速通關'
        }
      },
      imgsrc(url) {
        let filename = (url.indexOf('lunch') != -1) ? 'lunch' : url
        return require('public/' + filename + '.png')
      },
      scenarioName(id) {
        let strings = {
          day1checkin: "Day 1 報到",
          day2checkin: "Day 2 報到",
          day1lunch: "Day 1 午餐",
          day2lunch: "Day 2 午餐",
          kit: "迎賓袋",
          vipkit: "獨家紀念品"
        }
        return strings[id]
      },
      formatDatetime(time) {
        let datetime = new Date(time * 1000)
        return this.leftpad(datetime.getMonth() + 1, 2) + "/" + this.leftpad(datetime.getDate(), 2) + " " +
          this.leftpad(datetime.getHours(), 2) + ":" + this.leftpad(datetime.getMinutes(), 2)
      },
      disabledCard(scenario) {
        return {
          disableCard: scenario.disabled !== undefined
        }
      },
      leftpad(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
          output = '0' + output;
        }
        return output;
      }
    },
    data() {
      return {
        "scenarios": [{
            "available_time": 1471678200,
            "countdown": 0,
            "id": "day1checkin",
            "order": 1,
            "attr": {},
            "expire_time": 1471712400
          },
          {
            "available_time": 1471681800,
            "countdown": 30,
            "id": "kit",
            "order": 2,
            "attr": {},
            "expire_time": 1471788000,
            "disabled": "Haven't Check-in"
          },
          {
            "available_time": 1471694400,
            "countdown": 30,
            "id": "day1lunch",
            "order": 3,
            "attr": {
              "diet": "meat"
            },
            "expire_time": 1471701600,
            "disabled": "Haven't Check-in"
          },
          {
            "available_time": 1471764600,
            "countdown": 0,
            "id": "day2checkin",
            "order": 4,
            "attr": {},
            "expire_time": 1471798800
          },
          {
            "available_time": 1471781400,
            "countdown": 30,
            "id": "day2lunch",
            "order": 5,
            "attr": {
              "diet": "meat"
            },
            "expire_time": 1471788000,
            "disabled": "Haven't Check-in"
          },
          {
            "available_time": 1471680900,
            "countdown": 30,
            "id": "vipkit",
            "order": 6,
            "attr": {},
            "expire_time": 1471788000,
            "disabled": "For Supporters Only"
          }
        ]
      }
    }
  }
</script>

<style>
  .card {
    margin-bottom: 2.5rem;
  }
  
  .disableCard {
    opacity: 0.4;
  }
  .touch:hover {
    cursor: pointer;
  }
</style>