<template>
  <div id='Announcement' class="pa-4">
    <v-card v-for="item in announs" :key="item['_id']">
        {{ item['msg_zh'] }}
    </v-card>
  </div>
</template>

<script>
import api from '../modal/apiClient.js'
export default {
    name: 'Announcement',
    mounted () {
        this.$emit('view', this.meta())
    },
    beforeMount () {
        var self = this
        api.getAnnouncement().then(function(res){
            self.announs = res.data
        })
    },
    data () {
        return {
        announs:[]
        }
    },
    methods: {
        meta() {
            return {
                title: '大會公告'
            }
        }
    }
}

</script>

<style scoped>

</style>