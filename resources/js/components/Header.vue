<template>
    <div class="header">
        <div class="header-btn">
            <img class="header-btn__img" src="/images/btns/header-lock.svg" alt="" @click="showPopUpLang">
        </div>
        <div class="header-progress">
            <div class="header-progress-bar__wrapper">
                <div class="header-progress-bar__filler"></div>
            </div>
            <div class="header-progress__next-step">
                <div class="header-progress__next-step__text" @click="tap()">
                    LV <span class="yellow">{{this.selectedProgress.currentLvl}}</span> > LV <span class="green">{{this.selectedProgress.currentLvl+1 }} + {{this.selectedProgress.nextLvlReward}}</span>
                </div>
            </div>
        </div>
        <div class="header-btn boost">
            <img class="header-btn__img" src="/images/btns/header-boost.svg" alt="">
        </div>
        <div class="header-points">
            {{this.points}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            selectedProgress:{},
            points: 20780,

            progress: {
                power: {
                    currentLvl: 1,
                    nextLvlReward: 20000,
                    taps: 10,
                    tapsToNextLvl: 50,
                },
                shield: {
                    currentLvl: 5,
                    nextLvlReward: 20000,
                    taps: 66,
                    tapsToNextLvl: 100,
                },
                finance: {
                    currentLvl: 10,
                    nextLvlReward: 20000,
                    taps: 4,
                    tapsToNextLvl: 200
                },
                
            }
        }
    },
    mounted(){
        this.updateSelectedProgress(this.$route.name);
    },
    watch: {
        $route(to) {
            console.log(to);
            // console.log('route '+ this.currentPlayer);
            this.updateSelectedProgress(to.name);
            
        }
    },
    methods: {
        updateSelectedProgress(routeName){
            switch (routeName) {
                case 'power':
                    this.selectedProgress = this.progress.power;
                    break;
                case 'finance':
                    this.selectedProgress = this.progress.finance;
                    break;
                case 'shield':
                    this.selectedProgress = this.progress.shield;
                    break;
                default:
                    this.selectedProgress = {
                        currentLvl: 1,
                        nextLvlReward: 20000,
                        taps: 0,
                        tapsToNextLvl: 10
                    };
            }
            this.fillProgressBar()
        },
        fillProgressBar(){
            let currentTaps = this.selectedProgress.taps;
            let requiredTaps = this.selectedProgress.tapsToNextLvl;
            document.querySelector('.header-progress-bar__filler').style.width = currentTaps/requiredTaps*100 + '%';
        },
        tap(){
            this.selectedProgress.taps++;
            this.points++;
            if(this.selectedProgress.taps == this.selectedProgress.tapsToNextLvl){
                this.selectedProgress.currentLvl++;
                this.selectedProgress.taps = 0;
                this.points += this.selectedProgress.nextLvlReward;
            }
            this.fillProgressBar();
        },
        showPopUpLang(){
            this.$emit('showPopUpLang');
        }

    }
}
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 20px;
        z-index: 1;
    }
    .header-btn{
        height: 8vh;
    }
    .header-btn.boost{
        height: 7vh;
    }
    .header-btn__img{
        height: 100%;
        width: auto;
    }

    .header-progress{
        width: 100%;
        position: relative;
    }
    .header-progress-bar__wrapper{
        height: 2vh;
        width: 100%;
        background: rgba(0, 0, 0, 0.19);
        border: 2px solid rgba(255, 186, 89, 1);
        border-radius: 12px;
    }
    .header-progress-bar__filler{
        width: 45%;
        height: 100%;
        background: linear-gradient(90.02deg, #3E54AA 0.02%, #068FFF 117.47%);
        /* border-radius: 12px 0 0 12px; */
        border-radius: 6px;
    }

    .header-progress__next-step{
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 90%;
        height: 2.5vh;
        background: rgba(0, 0, 0, 0.43);
        border-radius: 0 0 12px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-progress__next-step__text{
        font-family: Roboto;
        font-size: 0.75em;
        font-weight: 700;
        color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;

    }
    span.yellow{
        color: #FFAC27;
    }
    span.green{
        color: #03FF89;
    }
    .header-progress__next-step__text::after{
        background-image: url("/images/btns/header-plane-icon.svg");
        background-size: 20px 20px;
        width: 20px; 
        height: 20px;
        /* background: url("/images/btns/header-plane-icon.svg"); */
        content: "";
    }

    .header-points{
        position: absolute;
        bottom: -25%;
        width: 50%;
        height: 4vh;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Roboto;
        font-size: 1em;
        line-height: 1em;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        left: 0;
        right: 0;
        margin: 0 auto;

    }
    .header-points::before{
        background-image: url("/images/btns/header-plane-icon.svg");
        background-size: 100% 100%;
        width: 20%; 
        height: 100%;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }
</style>