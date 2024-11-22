<template>
    <div class="pop-up__earn">
        <div class="pop-up__earn__frame">
            <div class="pop-up__earn__main-title">
                EARN screen
            </div>
            
            <div class="pop-up__earn__title">
                DAILY TASK
            </div>

            <div class="pop-up__earn__list">
                <!-- <div class="pop-up__earn__item">
                    <div class="pop-up__earn__item__img">
                        <img class="pop-up__earn__item__img-img" src="/images/pop-ups/boost/energy-item.svg" alt="">
                    </div>
                    <div class="pop-up__earn__item__content">
                        <div class="pop-up__earn__item__content-title">
                            Ton Promo
                            <span class="pop-up__earn__item__content-title__span">
                                <img class="pop-up__earn__item__content-title__span-img" src="/images/pop-ups/friends/plane-icon.svg" alt="">
                                +1000
                            </span>
                        </div>
                        <div class="pop-up__earn__item__content-text">
                            Engage with the TON blockchain and conduct
                            transactions daily to earn extra rewards.
                        </div>
                    </div>
                    <div class="pop-up__earn__item__btn">
                        GO
                    </div>
                </div> -->

                <div v-for="(item,index) in this.items" :key="index" class="pop-up__earn__item">
                    <div class="pop-up__earn__item__img">
                        <img class="pop-up__earn__item__img-img" :src="item.img" alt="">
                    </div>
                    <div class="pop-up__earn__item__content">
                        <div class="pop-up__earn__item__content-title">
                            {{item.title}}
                            <span class="pop-up__earn__item__content-title__span">
                                <img class="pop-up__earn__item__content-title__span-img" src="/images/pop-ups/friends/plane-icon.svg" alt="">
                                +{{item.points}}
                            </span>
                        </div>
                        <div class="pop-up__earn__item__content-text">
                            {{item.text}}
                        </div>
                    </div>
                    <div class="pop-up__earn__item__btn">
                        GO
                    </div>


                    <div class="pop-up__earn__item__paper-container">
                        <img class="pop-up__earn__item__paper-img" src="/images/pop-ups/friends/item-bg.png" alt="">
                    </div>
                </div>

                

                
            </div>
            


        </div>
        

        <div class="pop-up__earn__bg"></div>
    </div>
</template>

<script>
export default {
    name: 'PopUpEarn',
    data(){
        return{
            items: [
            {
                    title: 'Ton Promo',
                    points: 1000,
                    text: 'Engage with the TON blockchain and conduct transactions daily to earn extra rewards.',
                    img: '/images/pop-ups/earn/1.svg',
                },
                {
                    title: 'Watch the ads',
                    points: 200,
                    text: '',
                    img: '/images/pop-ups/earn/2.svg',
                },
                {
                    title: 'Stars Purchase',
                    points: 10000,
                    text: ' Get 1,000 Telegram stars and unlock extra rewards!.',
                    img: '/images/pop-ups/earn/3.svg',
                },
                {
                    title: 'Share in Telegram Stories',
                    points: 300,
                    text: ' Share on your story to get extra rewards',
                    img: '/images/pop-ups/earn/4.svg',
                },
                {
                    title: 'Boost channel',
                    points: 200,
                    text: 'Promote the official Tapper$ channel for additional features. Keep up the momentum to earn extra rewards',
                    img: '/images/pop-ups/earn/5.svg',
                },
                {
                    title: 'Join Telegram',
                    points: 90,
                    text: 'Subscribe the official channel',
                    img: '/images/pop-ups/earn/6.svg',
                },
                {
                    title: 'Follow on X',
                    points: 90,
                    text: ' Engage with the TON blockchain and conduct transactions daily to earn extra rewards.',
                    img: '/images/pop-ups/earn/7.svg',
                }
            ]
        }
    },
    methods: {
        closePopUp(){
            document.querySelector('.pop-up__earn').style.display = "none";
        },
        showPopUp(){
            document.querySelector('.pop-up__earn').style.display = "block";
        },
    },
    mounted() {
        document.querySelector('.pop-up__earn__bg').addEventListener('click', () => {
            this.closePopUp();
        });
    }
}
</script>

<style scoped>
    .pop-up__earn{
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
    .pop-up__earn__frame{
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

    .pop-up__earn__frame {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    .pop-up__earn__frame::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }

    .pop-up__earn__bg{
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
    .pop-up__earn__main-title{
        position: relative;
        font-family: Roboto;
        font-size: 1.7em;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 20px;
    }

    .pop-up__earn__title{
        font-family: Roboto;
        font-size: 1.2em;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 20px;
    }

    .pop-up__earn__list{
        width: 100%;
    }

    .pop-up__earn__item{
        /* background-image: url("/images/pop-ups/friends/item-bg.svg");
        background-size: 100%; */
        /* background-position: center center; */
        position: relative;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px;
        overflow: visible;
    }

    .pop-up__earn__item__img,
    .pop-up__earn__item__img-img{
        height: 50px;
    }
    .pop-up__earn__item__img-img{
        margin-right: 20px;
    }

    .pop-up__earn__item__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        height: 100%;
        width: 100%;
    }
    .pop-up__earn__item__content-title{
        font-family: Roboto;
        font-size: 1em;
        font-weight: 600;


        color: rgba(94, 48, 4, 1);
        text-shadow: 0px 1px 0px rgba(255, 214, 171, 1);

        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .pop-up__earn__item__content-img{
        display: inline;
        height: 15px;
    }

    .pop-up__earn__item__content-text{
        font-family: Roboto;
        font-size: 0.75em;
        font-weight: 600;
        color: rgba(94, 48, 4, 1);
        display: flex;
        align-items: center;
    }
    .pop-up__earn__item__content-text__span{
        font-weight: 900;
        color: red;
        padding: 0 5px;
    }

    .pop-up__earn__item__btn{
        height: 40px;
        width: 60px;
        background: linear-gradient(360deg, #328732 -25.2%, #81FF81 188.19%),
        linear-gradient(180deg, rgba(255, 255, 255, 0) 53.23%, rgba(0, 0, 0, 0.056) 57.48%);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 5px 0px 5px rgba(19, 105, 19, 1);

        box-shadow: 0px 0px 9.5px 4px rgba(39, 124, 39, 1) inset;

        box-shadow: 0px 2px 3px 2px rgba(19, 105, 19, 1);

        font-family: Roboto;

        font-weight: 600;
        color: rgba(252, 255, 198, 1);


    }

    .pop-up__earn__item__content-title__span{
        font-weight: 900;
        color: red;
        display: flex;
        align-items: center;
        text-shadow: none;
    }
    .pop-up__earn__item__content-title__span-img{
        display: inline;
        height: 20px;
    }
</style>

<style scoped>
    .pop-up__earn__item__paper-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .pop-up__earn__item__paper-container .pop-up__earn__item__paper-img {
        width: 100%; /* Растягиваем по ширине */
        height: 100%; /* Растягиваем по высоте */
    }   
</style>

<style scoped>
    @media (min-width: 600px) {
        .pop-up__earn__item{
            padding: 20px 40px;
        }
    }
    @media (min-width: 768px) {
        .pop-up__earn__frame{
           width: 768px;
        }
    }
</style>


