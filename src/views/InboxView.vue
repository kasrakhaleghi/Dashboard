<template>
<div>
    <inbox-title/>
    <v-spacer/>
    <br/>
    <inbox-file/>
    <router-view></router-view>
</div>
</template>
<script>
import InboxTitle from '../components/InboxTitle.vue'
import InboxFile from '../components/InboxFile.vue'
export default {
  components: { InboxTitle,InboxFile },
  
    name:"InboxView"
}
</script>