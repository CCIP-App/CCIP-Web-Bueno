<template>
  <div id='Schema'>
    <v-expansion-panel expand>
      <v-expansion-panel-content v-for="(item, index) in schemas" :key="'schemas-'+index">
        <div slot="header">{{ item.time }}</div>
        <v-card class="ma-0">
          <v-card-text class="pa-0">

            <v-list two-line class="ma-0 pa-0">

              <v-list-item v-for="(schema,index) in item.data" :key="'schema-'+index">
                <v-list-tile avatar ripple>
                  <v-list-tile-content>
                    <v-list-tile-sub-title><div style="display: inline-block;" class="mt-1">{{ schema.speakername }}</div><v-chip class="grey white--text" style="float: right;">{{ schema.room }}</v-chip></v-list-tile-sub-title>
                    <v-list-tile-title>{{ schema.subject }}</v-list-tile-title>
                    <v-list-tile-sub-title><v-chip small class="grey darken-3 white--text mt-1">{{ schema.type }}</v-chip></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-item>

            </v-list>

          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
<script>
export default {
  name: 'Schema',

  mounted () {
    this.$emit('view', this.meta())
  },

  data () {
    return {
      'schemas': []
    }
  },

  methods: {
    meta () {
      return {
        title: '議程'
      }
    }
  }
}
</script>

<style>

</style>
