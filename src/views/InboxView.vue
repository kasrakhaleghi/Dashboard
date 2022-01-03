<template>
<v-app>
    <inbox-title/>
    <v-spacer/>
    <br/>
    <inbox-file/>
    <router-view></router-view>
</v-app>
</template>
<script>
import InboxTitle from '../components/InboxTitle.vue'
import InboxFile from '../components/InboxFile.vue'
export default {
  components: { InboxTitle,InboxFile },
  
    name:"InboxView"
}
</script>