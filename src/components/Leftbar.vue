<template>
<v-navigation-drawer v-model="drawer" app color="blue-grey lighten-5">
    <v-img src="" class="pa-4"
    gradient="to right, rgba(239, 169, 174,.8),rgba(52, 138, 167,.8)">
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
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
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
          menus:[
             {title:"Profile",icon:"mdi-account"},
             {title:"Change Password",icon:"mdi-key"},
             {title:"setting",icon:"mdi-cog"},
             {title:"Logout",icon:"mdi-logout"},
          ],
            links: [
        ['mdi-account', 'Profile'],
        ['mdi-inbox', 'Inbox'],
        ['mdi-cog', 'Setting'],
        ['mdi-shield-star', 'Privacy Policy'],
      ],
        }
    }
}
</script>