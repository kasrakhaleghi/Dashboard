<template>
 <div class="topbar">
   <v-app-bar app
      fixed
      color="rgba(52, 138, 167,1)"
      elevate-on-scroll
      elevation="4"
    >
      <v-app-bar-nav-icon @click="$emit('handeDrawer')" color="white"></v-app-bar-nav-icon>
      <v-spacer/>
      <v-col lg="4" cols="8">
          <v-form class="mt-5">
            <v-text-field 
            class="white--text"
            rounded 
            outlined 
            dense
            placeholder="search"
            append-icon="mdi-magnify"
            color="white"
            />
          </v-form>
      </v-col>
      <v-spacer></v-spacer>
       <v-menu
          offset-y     
         bottom
         left
    >
      <template v-slot:activator="{ on, attrs }">
        <span
          class="mx-5 mr-10"
          dark
          v-bind="attrs"
          v-on="on"
          style="cursor: pointer"
        >
        <v-badge offset-x="10" offset-y="10" color="red" content="5">
          <v-icon color="white">mdi-bell</v-icon>
        </v-badge>
        </span>
      </template>
      <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-icon>
          <v-icon
            v-if="item.icon"
            color="red"
          >
            mdi-numeric-5-circle
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
          <span class="mx-5 mr-10" v-bind="attrs" v-on="on" style="cursor: pointer" >
            <v-chip link>
                <v-avatar size="20">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="john">
                </v-avatar>
              <span>Kasra Khaleqi</span>
            </v-chip>
          </span>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="john">
          </v-list-item-avatar>
          <v-list-item-content>
          <v-list-item-title>
              Kasra Khaleqi
          </v-list-item-title>
          <v-list-item-subtitle>
            Logged In
          </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
        <v-list-item v-for="(menu,index) in menus" :key="index" link>
          <v-list-item-icon>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{menu.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name:'Topbar',
  data(){
    return{
    items: [
         { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
      menus:[
             {title:"Profile",icon:"mdi-account"},
             {title:"Change Password",icon:"mdi-key"},
             {title:"setting",icon:"mdi-cog"},
             {title:"Logout",icon:"mdi-logout"},


          ],
    }
  }
}
</script>

<style lnag="sass" scoped>

</style>