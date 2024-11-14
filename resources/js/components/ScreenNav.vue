<template>
    <div  class="screen-nav">
        <router-link to="/finance" class="screen-nav__item" :class="this.$route.name=='finance'? 'active' : 'disactive'">
            <div class="screen-nav__item__img">
                <img class="screen-nav__item__img-img" src="/images/nav/finance.svg" alt="">
                <img class="screen-nav__item__img-img active" src="/images/nav/finance-active.svg" alt="">
            </div>
            <div class="screen-nav__item__name">
                Финансы
            </div>
        </router-link>
        <router-link to="/freedom" class="screen-nav__item" :class="this.$route.name=='freedom'? 'active' : 'disactive'">
            <div class="screen-nav__item__img">
                <img class="screen-nav__item__img-img" src="/images/nav/freedom.svg" alt="">
                <img class="screen-nav__item__img-img active" src="/images/nav/freedom-active.svg" alt="">
            </div>
            <div class="screen-nav__item__name">
                Свобода
            </div>
        </router-link>
        <router-link to="/shield" class="screen-nav__item" :class="this.$route.name=='shield'? 'active' : 'disactive'">
            <div class="screen-nav__item__img">
                <img class="screen-nav__item__img-img" src="/images/nav/shield.svg" alt="">
                <img class="screen-nav__item__img-img active" src="/images/nav/shield-active.svg" alt="">
            </div>
            <div class="screen-nav__item__name">
                Защита
            </div>
        </router-link>
        <router-link to="/" class="screen-nav__item" :class="this.$route.name=='power'? 'active' : 'disactive'">
            <div class="screen-nav__item__img">
                <img class="screen-nav__item__img-img" src="/images/nav/power.svg" alt="">
                <img class="screen-nav__item__img-img active" src="/images/nav/power-active.svg" alt="">
            </div>
            <div class="screen-nav__item__name">
                Сила
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ScreenNav'
}
</script>

<style scoped>
    .screen-nav{
        position: absolute;
        bottom: 0;
        display: flex;
        height: 10%;
        width: 100%;
        z-index: 1;
    }
    .screen-nav__item{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(55, 51, 63, 1);
        cursor: pointer;

        font-family: Roboto;
        font-size: 0.75em;
        font-weight: 400;
        /* line-height: 35.16px; */
        color: rgba(255, 255, 255, 1);

    }
    .screen-nav__item.active{
        /* background: linear-gradient(180deg, #68B5FF 0%, rgba(144, 134, 165, 0) 100%); */
        background: linear-gradient(180deg, rgba(104,181,255,1) 0%, rgba(55,51,63,1) 100%);
    }
    .screen-nav__item__img{
        height: 57%;
    }
    .screen-nav__item__img-img{
        display: block;
        height: 100%;
    }

    .screen-nav__item__img .screen-nav__item__img-img.active{
        display: none;
    }
    .screen-nav__item.active .screen-nav__item__img .screen-nav__item__img-img{
        display: none;
    }
    .screen-nav__item.active .screen-nav__item__img .screen-nav__item__img-img.active{
        display: block;
    }
    
</style>