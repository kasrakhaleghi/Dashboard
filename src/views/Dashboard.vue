<template>
<div>
  <topbar @handeDrawer=" drawer = !drawer"/>
  <leftbar :drawer="drawer"/>
    <v-container 
    class="py-15 px-5"
    fluid>
    <router-view></router-view>
      <div class="dashboard" v-if="this.$route.name === 'Dashboard' ">
        <v-subheader class="d-flex justify-space-between align-center">
          <h3>Dashboard</h3>
        </v-subheader>
          <v-row>
              <statistics/>
            <sparkline/>
          </v-row>
             <tabledown/>
      </div>
    </v-container>
</div>
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
          drawer: true,
      }
    },
  }
</script>