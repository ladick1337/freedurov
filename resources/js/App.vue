<template>
    <!-- <router-view></router-view> -->
    <Header/>
    <ScreenButtons
        @showPopUpFriends="showPopUpFriends"
        @showPopUpBoost="showPopUpBoost"
        @showPopUpEarn="showPopUpEarn" />
    <ScreenNav/>
    <PopUpFriends ref="PopUpFriends"/>
    <PopUpBoost ref="PopUpBoost"/>
    <PopUpEarn ref="PopUpEarn"/>

    <SpinePlayers :currentPlayer="currentPlayer" />
</template>

<script>
import Header from './components/Header.vue';
import ScreenNav from './components/ScreenNav.vue';
import ScreenButtons from './components/ScreenButtons.vue';
import PopUpFriends from './components/PopUpFriends.vue';
import PopUpBoost from './components/PopUpBoost.vue';
import PopUpEarn from './components/PopUpEarn.vue';
import SpinePlayers from './components/SpinePlayers.vue';

export default {
    components: {
        ScreenNav,
        ScreenButtons,
        Header,
        PopUpFriends,
        PopUpBoost,
        PopUpEarn,
        SpinePlayers
    },
    data() {
        return {
            currentPlayer: 'power'  // Начальный экран
        };
    },
    watch: {
        $route(to) {
            console.log(to);
            // console.log('route '+ this.currentPlayer);
            this.updateCurrentPlayer(to.name);
            
        }
    },
    mounted() {
        this.updateCurrentPlayer(this.$route.name);
    },
    methods: {
        updateCurrentPlayer(routeName) {
            this.currentPlayer = routeName;
        },
        showPopUpFriends() {
            this.$refs.PopUpFriends.showPopUp();
        },
        showPopUpBoost() {
            this.$refs.PopUpBoost.showPopUp();
        },
        showPopUpEarn() {
            this.$refs.PopUpEarn.showPopUp();
        }
    }
};
</script>