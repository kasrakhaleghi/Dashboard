<template>
<v-app>
  <topbar @handeDrawer=" drawer = !drawer"/>
  <leftbar :drawer="drawer"/>
    <v-container 
    class="py-15 px-5"
    fluid>
    <router-view></router-view>
      <div class="dashboard">
        <v-subheader class="d-flex justify-space-between align-center">
          <h3>Dashboard</h3>
        </v-subheader>
          <v-row>
            <v-col lg="7" cols="12">
              <statistics/>
            </v-col>
           <v-col lg="5" cols="12">
            <sparkline/>
           </v-col>
          </v-row>
          <h3>Table</h3>
        <v-row>
          <v-col lg="12">
             <tabledown/>
          </v-col>
        </v-row>
      </div>
    </v-container>
</v-app>
</template>

<script>
import Topbar from '../components/Topbar.vue'
import Leftbar from '../components/Leftbar.vue'
import Tabledown from '../components/Tabledown.vue'
import Sparkline  from '../components/Sparkline.vue'
import Statistics from '../components/Statistics.vue'
  export default {
  components: { Topbar,Leftbar,Tabledown,Sparkline ,Statistics, Sparkline },
  name:"Dashboard",
    data(){
      return{
          drawer: false,
      }
    },
  }
</script>