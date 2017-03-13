<template>
  <div id="Scenario" class="pa-4">
    <scenario-item v-for="scenario in scenarios" :scenario="scenario"></scenario-item>
  </div>
</template>
<script>
  export default {
    name: 'Scenario',
    mounted() {
      this.$emit('view', this.meta())
    },

    methods: {
      meta() {
        return {
          title: '快速通關'
        }
      }
    },
    data() {
      return {
        "scenarios": [
          {
            "countdown": 0,
            "available_time": 1488846600,
            "order": 0,
            "id": "checkin",
            "expire_time": 1489827600,
            "attr": {},
            "used": 1489424131,
            "display_text": {
              "en-US": "Check-in",
              "zh-TW": "報到"
            }
          },
          {
            "countdown": 30,
            "available_time": 1488846600,
            "order": 1,
            "id": "kit",
            "expire_time": 1489827600,
            "attr": {},
            "used": 1489424133,
            "display_text": {
              "en-US": "Welcome Kit",
              "zh-TW": "小貓袋"
            }
          },
          {
            "countdown": 30,
            "available_time": 1488858600,
            "order": 2,
            "id": "lunch",
            "expire_time": 1489816800,
            "attr": {
              "diet": "meat"
            },
            "display_text": {
              "en-US": "Lunch",
              "zh-TW": "午餐"
            }
          },
          {
            "countdown": 30,
            "available_time": 1488844800,
            "order": 3,
            "id": "vipkit",
            "expire_time": 1489827600,
            "display_text": {
              "en-US": "Special Gift",
              "zh-TW": "獨家紀念品"
            },
            "attr": {},
            "disabled": "For Supporters Only"
          }
        ]
      }
    }
  }

</script>

<style>

</style>