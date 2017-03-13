<template>
  <v-sidebar id="mainsidebar" fixed>
    <div class="sitcon">
      <a href="http://sitcon.org/">
        <img src="~public/stone.png" width="80px" />
      </a>
      <br><br>
      <hr>
    </div>
    <v-list dense>
      <v-list-item v-for="item in items">
        <v-list-tile :href="item.href" router ripple>
          <v-list-tile-action>
            <v-icon>{{ item.avatar }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-sidebar>
</template>
<script>
  export default {
    name: 'main-side',
    data() {
      return {
        items: [{
            title: "快速通關",
            href: "/scenario",
            avatar: 'local_activity',
          },
          {
            title: "議程",
            href: "/schema",
            avatar: 'event_note'
          },
          {
            title: "大會訊息",
            href: "/announcement",
            avatar: 'announcement'
          },
          {
            title: "IRC Log",
            href: "/irclog",
            avatar: 'question_answer'
          },
          {
            title: "贊助",
            href: "/sponsor",
            avatar: 'redeem'
          },
          {
            title: "工作人員",
            href: "/staff",
            avatar: 'group'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .sidebar
    background-color: #fff
    
    &__links
      margin: 0rem
      display: flex
      justify-content: center
      align-items: center
      
      a
        text-align: center
        text-decoration: none
        margin: 0 0rem
        
        img
          height: 25px
          
        i
          padding: 0
  
  .sitcon
    background-color: $theme.primary
    text-align: center
    padding-top: 16px
    color: #fff
    
    a
      color: #fff
      text-decoration: none
      
    .gitter
      margin-bottom: 16px

    h1
      color: #fff
      font-size: 3em  
  

  

  .list
    margin: 0 0rem !important

    .list__tile
      color: $grey.darken-3
    
    .icon
      color: $grey.darken-3 !important
</style>