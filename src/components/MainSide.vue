<template>
  <v-navigation-drawer id="mainsidebar" v-model="isActive" persistent enable-resize-watcher :mini-variant.sync="mini" overflow>
    <div class="sitcon">
      <a href="https://coscup.org/">
        <!-- <img src="~public/conf_logo.png" width="80%" /> -->
      </a>
      <p>{{ userid }}</p>
    </div>
    <v-list dense>
      <v-list-tile v-for="item in items" :key="item.title" :href="item.target && item.href" :to="!item.target ? item.href : null" router ripple>
        <v-list-tile-action>
          <v-icon>{{ item.avatar }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    name: 'main-side',
    data() {
      return {
        isActive: true,
        mini: false,
        items: [{
            title: "快速通關",
            href: "/scenario",
            avatar: 'local_activity',
          },
          // {
          //   title: "議程",
          //   href: "/schema",
          //   avatar: 'event_note'
          // },
          {
            title: "大會訊息",
            href: "/announcement",
            avatar: 'announcement'
          },
          {
            title: '開源巔峰挑戰賽',
            href: '/puzzle',
            avatar: 'extension'
          },
          {
            title: '我的票卷',
            href: '/myticket',
            avatar: 'assignment_ind'
          },
          {
            title: 'Telegram',
            href: 'https://t.me/COSCUPchat',
            target: '_blank',
            avatar: ''
          },
          // {
          //   title: "IRC Log",
          //   href: "/irclog",
          //   avatar: 'question_answer'
          // },
          // {
          //   title: "贊助",
          //   href: "/sponsor",
          //   avatar: 'redeem'
          // },
          // {
          //   title: "工作人員",
          //   href: "/staff",
          //   avatar: 'group'
          // },
          {
            title: 'Star on GitHub',
            href: 'https://github.com/CCIP-App/CCIP-Web-Bueno',
            target: '_blank',
            avatar: 'stars'
          }
        ]
      }
    },
    props: {
      value: Boolean,
      userid: String
    },
    watch: {
      isActive () {
        this.$emit('input', this.isActive)
      },
      value () {
        this.isActive = this.value
      }
    }
  }
</script>
<style lang="stylus">  
  .sitcon
    background-image: url('~public/nav_header_bg.png')
    background-size cover
    height : 180px
    text-align: center
    color: #fff
    
    a
      display: block
      color: #fff
      text-decoration: none
      background-image: url('~public/conf_logo.png')
      background-size: 80%
      background-position: center
      width: 100%
      height: 100%
      
    .gitter
      margin-bottom: 16px

    h1
      color: #fff
      font-size: 3em 
    p 
      position: relative
      top: -28px;
      color: black
      margin-left: 16px;
      text-align: left
      font-size: 18px

</style>