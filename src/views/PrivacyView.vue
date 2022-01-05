<template>
    <div>
        <privacy/>
        <router-view></router-view>
    </div>
</template>
<script>
import Privacy from '../components/Privacy.vue'
export default {
    components:{Privacy},
    name:'PrivacyView'
}
</script>