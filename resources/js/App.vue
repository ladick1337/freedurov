<template>
    <!-- <router-view></router-view> -->
    <Header @showPopUpLang="showPopUpLang"
            @showLvlUp="showLvlUp"
            ref="Header"/>
    <ScreenButtons
        @showPopUpFriends="showPopUpFriends"
        @showPopUpBoost="showPopUpBoost"
        @showPopUpEarn="showPopUpEarn" />
    <ScreenNav/>
    <PopUpFriends @showPopUpLang="showPopUpLang" ref="PopUpFriends"/>
    <PopUpBoost ref="PopUpBoost"/>
    <PopUpEarn ref="PopUpEarn"/>
    <PopUpSelectLang 
        @toggleLang="toggleLang"
        :selectedLanguage="this.selectedLanguage" ref="PopUpSelectLang"/>

    <SpinePlayers
        :selectedLanguage="selectedLanguage"
        :currentPlayer="currentPlayer" 
        @tap="tap"
        ref="SpinePlayers"/>
</template>

<script>
import Header from './components/Header.vue';
import ScreenNav from './components/ScreenNav.vue';
import ScreenButtons from './components/ScreenButtons.vue';
import PopUpFriends from './components/PopUpFriends.vue';
import PopUpBoost from './components/PopUpBoost.vue';
import PopUpEarn from './components/PopUpEarn.vue';
import PopUpSelectLang from './components/PopUpSelectLang.vue';
import SpinePlayers from './components/SpinePlayers.vue';

export default {
    components: {
        ScreenNav,
        ScreenButtons,
        Header,
        PopUpFriends,
        PopUpBoost,
        PopUpEarn,
        PopUpSelectLang,
        SpinePlayers
    },
    data() {
        return {
            currentPlayer: 'power' , // Начальный экран
            selectedLanguage: 'ru',
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
        },
        tap(){
            this.$refs.Header.tap();
        },
        toggleLang(value){
            this.selectedLanguage = value;
        },
        showPopUpLang(){
            this.$refs.PopUpFriends.closePopUp();
            this.$refs.PopUpSelectLang.showPopUp();
        },
        showLvlUp(){
            this.$refs.SpinePlayers.showLvlUpAnim();
        }
    }
};
</script>