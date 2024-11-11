<template>
    <div class="screen-buttons">
        <div class="screen-btn earn" @click="showPopUpEarn">
            <img class="screen-btn__img" src="/images/btns/earn.svg" alt="">
            <div class="screen-btn__text">
                EARN
            </div>
        </div>
        <div class="screen-btn boost"  @click="showPopUpBoost">
            <img class="screen-btn__img" src="/images/btns/boost.svg" alt="">
            <div class="screen-btn__text">
                BOOST
            </div>
        </div>
        <div class="screen-btn friends" @click="showPopUpFriends">
            <img class="screen-btn__img" src="/images/btns/friends.svg" alt="">
            <div class="screen-btn__text">
                FRIENDS
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScreenButtons',
    methods: {
        showPopUpFriends(){
            this.$emit('showPopUpFriends');
        },
        showPopUpBoost(){
            this.$emit('showPopUpBoost');
        },
        showPopUpEarn(){
            this.$emit('showPopUpEarn');
        }
    }
}
</script>

<style scoped>
    .screen-buttons{
        z-index: 1;
        position: absolute;
        bottom: 15vh;
        right: 20px;
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 10px;
    }
    .screen-btn{
        height: 10vh;
        position: relative;
    }
    .screen-btn.boost{
        height: 9vh;
    }
    .screen-btn.earn{
        height: 8vh;
    }
    .screen-btn__img{
        height: 100%;
    }
    .screen-btn__text{
        font-family: Roboto;
        font-size: 0.75em;
        font-weight: 600;
        text-shadow: 0px 2px 0px rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;

    }
</style>