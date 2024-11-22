<template>
    <div class="pop-up__boost">
        <div class="pop-up__boost__frame">
            <div class="pop-up__boost__points">
                692
            </div>
            
            <div class="pop-up__boost__title">
                Бесплатные ежедневные бусты
            </div>

            <div class="pop-up__boost__btns">
                <div class="pop-up__boost-btn rocket-btn">
                    <div class="pop-up__boost-btn__img">
                        <img class="pop-up__boost-btn__img-img" src="/images/pop-ups/boost/rocket.svg" alt="">
                    </div>
                    <div class="pop-up__boost-btn__content">
                        <div class="pop-up__boost-btn__content-title">
                            Ракета
                        </div>
                        <div class="pop-up__boost-btn__content-info">
                            3/3
                        </div>
                    </div>
                </div>

                <div class="pop-up__boost-btn energy-btn">
                    <div class="pop-up__boost-btn__img">
                        <img class="pop-up__boost-btn__img-img" src="/images/pop-ups/boost/energy.svg" alt="">
                    </div>
                    <div class="pop-up__boost-btn__content">
                        <div class="pop-up__boost-btn__content-title">
                            Энергия
                        </div>
                        <div class="pop-up__boost-btn__content-info">
                            in 8 часы
                        </div>
                    </div>
                </div>
            </div>

            <div class="pop-up__boost__title">
                Усилители
            </div>

            <div class="pop-up__boost__list">
                <div class="pop-up__boost__item">
                    <div class="pop-up__boost__item__img">
                        <img class="pop-up__boost__item__img-img" src="/images/pop-ups/boost/energy-item.svg" alt="">
                    </div>
                    <div class="pop-up__boost__item__content">
                        <div class="pop-up__boost__item__content-title">
                            Пополнить энергию
                        </div>
                        <div class="pop-up__boost__item__content-text">
                            <span class="pop-up__boost__item__content-text__span">x8 зарядов</span>
                        </div>
                    </div>
                    <img class="pop-up__boost__item__btn" src="/images/pop-ups/boost/play.svg" alt="">

                    <div class="pop-up__boost__item__paper-container">
                        <img class="pop-up__boost__item__paper-img" src="/images/pop-ups/friends/item-bg.png" alt="">
                    </div>
                </div>

                <div class="pop-up__boost__item">
                    <div class="pop-up__boost__item__img">
                        <img class="pop-up__boost__item__img-img" src="/images/pop-ups/boost/energy-item.svg" alt="">
                    </div>
                    <div class="pop-up__boost__item__content">
                        <div class="pop-up__boost__item__content-title">
                            Лимит энергии
                        </div>
                        <div class="pop-up__boost__item__content-text">
                            <img class="pop-up__boost__item__content-img" src="/images/pop-ups/friends/plane-icon.svg" alt="">
                            <span class="pop-up__boost__item__content-text__span">2500</span> уровень 1
                        </div>
                    </div>
                    <img class="pop-up__boost__item__btn" src="/images/pop-ups/boost/play.svg" alt="">

                    <div class="pop-up__boost__item__paper-container">
                        <img class="pop-up__boost__item__paper-img" src="/images/pop-ups/friends/item-bg.png" alt="">
                    </div>
                </div>

                <div class="pop-up__boost__item">
                    <div class="pop-up__boost__item__img">
                        <img class="pop-up__boost__item__img-img" src="/images/pop-ups/boost/tap-bot.svg" alt="">
                    </div>
                    <div class="pop-up__boost__item__content">
                        <div class="pop-up__boost__item__content-title">
                            Tap Bot
                        </div>
                        <div class="pop-up__boost__item__content-text">
                            <img class="pop-up__boost__item__content-img" src="/images/pop-ups/friends/plane-icon.svg" alt="">
                            <span class="pop-up__boost__item__content-text__span">2500</span>
                        </div>
                    </div>
                    <img class="pop-up__boost__item__btn" src="/images/pop-ups/boost/play.svg" alt="">

                    <div class="pop-up__boost__item__paper-container">
                        <img class="pop-up__boost__item__paper-img" src="/images/pop-ups/friends/item-bg.png" alt="">
                    </div>
                </div>

                
            </div>
            


        </div>
        

        <div class="pop-up__boost__bg"></div>
    </div>
</template>

<script>
export default {
    name: 'PopUpBoost',
    methods: {
        closePopUp(){
            document.querySelector('.pop-up__boost').style.display = "none";
        },
        showPopUp(){
            document.querySelector('.pop-up__boost').style.display = "block";
        },
    },
    mounted() {
        document.querySelector('.pop-up__boost__bg').addEventListener('click', () => {
            this.closePopUp();
        });
    }
}
</script>

<style scoped>
    .pop-up__boost{
        position: fixed;
        width: 100%;
        height: 100%;
        display: none;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        z-index: 25;
    }
    .pop-up__boost__frame{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        position: absolute;
        /* width: 584px;
        height: 322px; */
        height: 70vh;
        background: transparent;
        z-index: 35;
        /* padding: 38px 66px; */
        display: flex;
        /* display: none; */
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
    }

    .pop-up__boost__frame {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    .pop-up__boost__frame::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
    .pop-up__boost__bg{
        position: absolute;
        z-index: 34;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        margin: auto;
        background: rgba(0,0,0,0.8);
    }
    
</style>

<style scoped>
    .pop-up__boost__points{
        position: relative;
        font-family: Roboto;
        font-size: 1.7em;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 20px;
    }
    .pop-up__boost__points::before{
        position: absolute;
        left: -100%;
        top: 0;
        bottom: 0;
        margin: auto 0;
        display: block;
        background-image: url("/images/btns/header-plane-icon.svg");
        background-size: 100% 100%;
        width: 50px; 
        height: 50px;
        /* background: url("/images/btns/header-plane-icon.svg"); */
        content: "";
    }

    .pop-up__boost__title{
        font-family: Roboto;
        font-size: 1.2em;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 20px;
    }

    .pop-up__boost__list{
        width: 100%;
    }

    .pop-up__boost__item{
        /* background-image: url("/images/pop-ups/friends/item-bg.svg");
        background-size: 100%; */
        position: relative;
        /* background-position: center center; */
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 40px;
        overflow: visible;
    }

    .pop-up__boost__item__img,
    .pop-up__boost__item__img-img{
        height: 50px;
    }
    .pop-up__boost__item__img-img{
        margin-right: 20px;
    }

    .pop-up__boost__item__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        height: 100%;
        width: 100%;
    }
    .pop-up__boost__item__content-title{
        font-family: Roboto;
        font-size: 1em;
        font-weight: 600;


        color: rgba(94, 48, 4, 1);
        text-shadow: 0px 2px 0px rgba(255, 214, 171, 1);

    }
    .pop-up__boost__item__content-img{
        display: inline;
        height: 15px;
    }

    .pop-up__boost__item__content-text{
        font-family: Roboto;
        font-size: 0.75em;
        font-weight: 600;
        color: rgba(94, 48, 4, 1);
        display: flex;
        align-items: center;
    }
    .pop-up__boost__item__content-text__span{
        font-weight: 900;
        color: red;
        padding: 0 5px;
    }

    .pop-up__boost__item__btn{
        height: 60%;
    }
</style>

<style scoped>
    .pop-up__boost__btns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 40px;
        padding: 20px 20px 40px;
    }
    .pop-up__boost-btn{
        width: 100%;
        height: 50px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        padding: 10px;
        
    }
    .pop-up__boost-btn.rocket-btn{
        background: linear-gradient(360deg, #5442B3 -25.2%, #58A9FF 188.19%),
        linear-gradient(180deg, rgba(255, 255, 255, 0) 53.23%, rgba(0, 0, 0, 0.056) 57.48%);
        box-shadow: 0px 5px 0px 5px rgba(19, 28, 105, 1);

        box-shadow: 0px 0px 9.5px 4px rgba(46, 39, 124, 1) inset;

        box-shadow: 0px 0px 5.2px 1px rgba(173, 236, 255, 0.22) inset;

        -webkit-text-stroke: 0.5px rgba(19, 28, 105, 1);
    }
    .pop-up__boost-btn.energy-btn{
        background: linear-gradient(360deg, #F1AD00 -25.2%, #FFFB81 188.19%),
        linear-gradient(180deg, rgba(255, 255, 255, 0) 53.23%, rgba(0, 0, 0, 0.056) 57.48%);
        box-shadow: 0px 5px 0px 5px rgba(203, 87, 4, 1);

        box-shadow: 0px 0px 9.5px 4px rgba(255, 103, 43, 1) inset;

        box-shadow: 0px 0px 5.2px 1px rgba(239, 255, 173, 0.22) inset;

        -webkit-text-stroke: 0.5px rgba(203, 87, 4, 1);
    }

    .pop-up__boost-btn__img,
    .pop-up__boost-btn__img-img{
        height: 100%;
    }

    .pop-up__boost-btn__content-title{
        font-family: Roboto;
        font-size: 1em;
        font-weight: 600;
        color: rgba(252, 255, 198, 1);
    }
    .pop-up__boost-btn__content-info{
        font-family: Roboto;
        font-size: 0.7em;
        font-weight: 600;
        color: rgba(252, 255, 198, 1);
    }
</style>

<style scoped>
    .pop-up__boost__item__paper-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .pop-up__boost__item__paper-container .pop-up__boost__item__paper-img {
        width: 100%; /* Растягиваем по ширине */
        height: 100%; /* Растягиваем по высоте */
    }   
</style>

<style scoped>
    @media (min-width: 768px) {
        .pop-up__boost__frame{
           width: 768px;
        }
    }
</style>

