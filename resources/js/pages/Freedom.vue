<template>
    <div class="power screen">
        freedom
        <Header/>
        <ScreenButtons 
        @showPopUpFriends="showPopUpFriends"
        @showPopUpBoost="showPopUpBoost"
        @showPopUpEarn="showPopUpEarn"/>
        <ScreenNav/>
        <PopUpFriends ref="PopUpFriends"/>
        <PopUpBoost ref="PopUpBoost"/>
        <PopUpEarn ref="PopUpEarn"/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import ScreenNav from '../components/ScreenNav.vue'
import ScreenButtons from '../components/ScreenButtons.vue'
import PopUpFriends from '../components/PopUpFriends.vue'
import PopUpBoost from '../components/PopUpBoost.vue'
import PopUpEarn from '../components/PopUpEarn.vue'


export default {
    name: 'Freedom',
    components: {
        ScreenNav,
        ScreenButtons,
        Header,
        PopUpFriends,
        PopUpBoost,
        PopUpEarn,

    },
    methods: {
        showPopUpFriends(){
            this.$refs.PopUpFriends.showPopUp();
        },
        showPopUpBoost(){
            this.$refs.PopUpBoost.showPopUp();
        },
        showPopUpEarn(){
            this.$refs.PopUpEarn.showPopUp();
        },

        
    },
    
    
}
</script>
