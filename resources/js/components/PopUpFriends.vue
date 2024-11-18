<template>
    <div class="pop-up__friends">
        <div class="pop-up__friends__frame">
            <div class="pop-up__friends__counter">
                <span class="pop-up__friends__counter-span">
                    0
                </span>
                Друзей
            </div>
            
            <div class="pop-up__friends__title">
                Пригласи друга и получи бонусы
            </div>
            <div class="pop-up__friends__invite-list">
                <div class="pop-up__friends__invite-item">
                    <div class="pop-up__friends__invite-item__img">
                        <img class="pop-up__friends__invite-item__img-img" src="/images/pop-ups/friends/plane-icon.svg" alt="">
                    </div>
                    <div class="pop-up__friends__invite-item__content">
                        <div class="pop-up__friends__invite-item__content-title">
                            Пригласи друга 
                        </div>
                        <div class="pop-up__friends__invite-item__content-text">
                            <img class="pop-up__friends__invite-item__content-img" src="/images/pop-ups/friends/plane-icon.svg" alt="">
                            <span class="pop-up__friends__invite-item__content-text__span">2500</span> для тебя и твоего друга
                        </div>
                    </div>
                </div>
                <div class="pop-up__friends__invite-item">
                    <div class="pop-up__friends__invite-item__img">
                        <img class="pop-up__friends__invite-item__img-img" src="/images/pop-ups/friends/star.svg" alt="">
                    </div>
                    <div class="pop-up__friends__invite-item__content">
                        <div class="pop-up__friends__invite-item__content-title">
                            Пригласи с Telegram Premium
                        </div>
                        <div class="pop-up__friends__invite-item__content-text">
                            <img class="pop-up__friends__invite-item__content-img" src="/images/pop-ups/friends/plane-icon.svg" alt="">
                            <span class="pop-up__friends__invite-item__content-text__span">5000</span> для тебя и твоего друга
                        </div>
                    </div>
                </div>

                <div class="pop-up__friends__btns">
                    <div class="pop-up__friends__invite-btn">
                        Пригласить друга
                    </div>
                    <img class="pop-up__friends__copy-btn" src="/images/pop-ups/friends/copy-btn.svg" alt="">
                </div>
            </div>
            <div class="pop-up__friends__menu-btn" @click="showPopUpLang">
                <img class="pop-up__friends__menu-btn__img" src="/images/btns/header-lock.svg" alt="">
                <div class="pop-up__friends__menu-btn__text">
                    Меню <br> пользователя
                </div>
            </div>


        </div>
        

        <div class="pop-up__friends__bg"></div>
    </div>
</template>

<script>
export default {
    name: 'PopUpFriends',
    methods: {
        closePopUp(){
            document.querySelector('.pop-up__friends').style.display = "none";
        },
        showPopUp(){
            document.querySelector('.pop-up__friends').style.display = "block";
        },
        showPopUpLang(){
            this.$emit('showPopUpLang');
        }
    },
    mounted() {
        document.querySelector('.pop-up__friends__bg').addEventListener('click', () => {
            this.closePopUp();
        });
    }
}
</script>

<style scoped>
    .pop-up__friends{
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
    .pop-up__friends__frame{
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
    .pop-up__friends__frame {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    .pop-up__friends__frame::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
    .pop-up__friends__bg{
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
    .pop-up__friends__counter{
        font-family: Roboto;
        font-size: 1.7em;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 20px;
    }
    .pop-up__friends__counter-span{
        color: #FFAC27;
    }

    .pop-up__friends__title{
        font-family: Roboto;
        font-size: 1.2em;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 20px;
    }

    .pop-up__friends__invite-list{
        background-image: url("/images/pop-ups/friends/list-bg.svg");
        background-size: 100% 100%;
        padding: 25px;
        width: 100%;
        height: 320px;
    }

    .pop-up__friends__invite-item{
        background-image: url("/images/pop-ups/friends/item-bg.svg");
        background-size: 100% 100%;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        padding: 20px;
    }

    .pop-up__friends__invite-item__img,
    .pop-up__friends__invite-item__img-img{
        height: 50px;
    }
    .pop-up__friends__invite-item__img-img{
        margin-right: 20px;
    }

    .pop-up__friends__invite-item__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        height: 100%;
    }
    .pop-up__friends__invite-item__content-title{
        font-family: Roboto;
        font-size: 1em;
        font-weight: 600;


        color: rgba(94, 48, 4, 1);
        text-shadow: 0px 2px 0px rgba(255, 214, 171, 1);

    }
    .pop-up__friends__invite-item__content-img{
        display: inline;
        height: 15px;
    }

    .pop-up__friends__invite-item__content-text{
        font-family: Roboto;
        font-size: 0.75em;
        font-weight: 600;
        color: rgba(94, 48, 4, 1);
        display: flex;
        align-items: center;
    }
    .pop-up__friends__invite-item__content-text__span{
        font-weight: 900;
        color: red;
        padding: 0 5px;
    }
</style>

<style scoped>
    .pop-up__friends__btns{
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 20px;
        padding: 10px;
    }
    .pop-up__friends__copy-btn{
        display: block;
        border-radius: 4px;
        height: 50px;

        /* box-shadow: 0px 5px 0px 5px rgba(40, 58, 91, 1);

        box-shadow: 0px 0px 9.5px 4px rgba(59, 43, 85, 1) inset;

        box-shadow: 0px 2px 1px 2px rgba(40, 58, 91, 1) ;

        background-color: rgba(40, 58, 91, 1); */

    }
    .pop-up__friends__invite-btn{
        height: 48px;
        width: 100%;
        background: linear-gradient(360deg, #328732 -25.2%, #81FF81 188.19%),
        linear-gradient(180deg, rgba(255, 255, 255, 0) 53.23%, rgba(0, 0, 0, 0.056) 57.48%);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: 0px 5px 0px 5px rgba(19, 105, 19, 1);

        box-shadow: 0px 0px 9.5px 4px rgba(39, 124, 39, 1) inset;

        box-shadow: 0px 0px 5.2px 1px rgba(173, 255, 173, 0.22) inset;

        box-shadow: 0px 2px 1px 2px rgba(19, 105, 19, 1);


        font-family: Roboto;
        font-size: 1em;
        font-weight: 600;
        color: rgba(252, 255, 198, 1);
        -webkit-text-stroke: 1px rgba(43, 85, 43, 1);

    }
</style>

<style scoped>
    .pop-up__friends__menu-btn,
    .pop-up__friends__menu-btn__img{
        height: 100px;
    }
    .pop-up__friends__menu-btn{
        position: relative;
    }
    .pop-up__friends__menu-btn__text{
        position: absolute;
        bottom: -10%;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Roboto;
        font-size: 1em;
        font-weight: 600;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        text-shadow: 0px 4px 0px rgba(0, 0, 0, 1);



    }
</style>