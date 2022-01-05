<template>
    <div>
        <setting-main/>
    <router-view></router-view>
    </div>
</template>
<script>
import SettingMain from '../components/SettingMain.vue'
export default {
    name:'SettingView',
    components:{SettingMain},
}
</script>