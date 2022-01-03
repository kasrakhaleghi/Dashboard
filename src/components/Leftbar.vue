<template>
<v-navigation-drawer  :right="$vuetify.rtl" v-model="drawer" app color="blue-grey lighten-5" fixed>
    <v-img src="" class="pa-4"
    gradient="to right,rgba(52, 138, 167,.8), rgba(239, 169, 174,.8)">
    <div class="text-center mt-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"/>
        </v-avatar>
        <h3 class="white--text">Kasra Khaleqi</h3>
    </div>
    </v-img>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(menu, text) in menus"
          :key="text"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link :to="{name:menu.route}" style="text-decoration: none; color: inherit;">
            <v-list-item-title>{{ menu.text }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    props:['drawer'],
    name:'Leftbar',
    data(){
        return{
            menus: [
        {icon:"mdi-home-variant", text:"Main", route:"Dashboard" },
        {icon:'mdi-inbox',text: 'Inbox',route:"InboxView"},
        {icon:'mdi-cog',text: 'Setting',route:"SettingView"},
        {icon:'mdi-shield-star',text: 'Privacy Policy',route:"PrivacyView"},
      ],
        }
    }
}
</script>