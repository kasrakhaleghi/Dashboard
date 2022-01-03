<template>
<v-col lg="7" cols="12">
<v-row>
    <v-col lg="6" cols="12" v-for="(item,index) in activities" :key="index">
              <v-card elevation="2" class="rounded-lg">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div class="">
                    <strong>{{item.title}}</strong><br/>
                    <small>(Last 1 Weeks)</small>
                  </div>
                  <v-avatar :color="item.color" size="60">
                    <span class="white--text">{{item.amouts}}</span>
                  </v-avatar>
                </v-card-text>
              </v-card>
            </v-col>
</v-row>
</v-col>
</template>

<script>
export default {
    name:'Statistics',
    data(){
        return{
             activities:[
                {title:'Total Products', color:'green',amouts:533},
                {title:'Total Category', color:'red',amouts:135},
                {title:'Total Orders', color:'blue',amouts:346},
                {title:'Total Sells', color:'light-green',amouts:412},
        ],
        }
            }
}
</script>