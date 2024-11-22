<template>
    <div class="pop-up__select-lang">
        <div class="pop-up__select-lang__frame">

            <div class="pop-up__select-lang__title">
                Меню пользователя
            </div>

            <div class="pop-up__select-lang__sub-title">
                язык
            </div>

            <div class="pop-up__select-lang__lang-list">
                <div class="pop-up__select-lang__lang-item" value="ru" :class="this.selectedLanguage == 'ru'? 'active': ''" @click="toggleLang($event)">
                    <img class="pop-up__select-lang__lang-item__img empty" src="/images/pop-ups/lang/ru-empty.svg" alt="">
                    <img class="pop-up__select-lang__lang-item__img" src="/images/pop-ups/lang/ru-active.svg" alt="">
                </div>
                <div class="pop-up__select-lang__lang-item" value="en" :class="this.selectedLanguage == 'en'? 'active': ''" @click="toggleLang($event)">
                    <img class="pop-up__select-lang__lang-item__img empty" src="/images/pop-ups/lang/en-empty.svg" alt="">
                    <img class="pop-up__select-lang__lang-item__img" src="/images/pop-ups/lang/en-active.svg" alt="">
                </div>
            </div>

            
            <div class="pop-up__select-lang__paper-container">
                <img class="pop-up__select-lang__paper-img" src="/images/pop-ups/lang/bg.png" alt="">
            </div>

            <img class="pop-up__select-lang__cross" src="/images/pop-ups/lang/cross.svg" alt="" @click="closePopUp">
            


        </div>
        

        <div class="pop-up__select-lang__bg"></div>
    </div>
</template>

<script>
export default {
    name: 'PopUpSelectLang',
    data(){
        return{
            
        }
    },
    props: {
        selectedLanguage: {
            type: String,
            required: true
        }
    },
    methods: {
        closePopUp(){
            document.querySelector('.pop-up__select-lang').style.display = "none";
        },
        showPopUp(){
            document.querySelector('.pop-up__select-lang').style.display = "block";
        },
        toggleLang(event){
            let node = event.target;
            while(!node.classList.contains('pop-up__select-lang__lang-item')){
                node = node.parentNode;
                if(node.parentNode.classList.contains('pop-up__select-lang__lang-item')){
                    return;
                }
            }
            let items = document.querySelectorAll('.pop-up__select-lang__lang-item');
            items.forEach((item)=>{
                item.classList.remove('active');
            });

            node.classList.add('active');
            this.$emit('toggleLang',node.getAttribute('value'));
        },
    },
    mounted() {
        document.querySelector('.pop-up__select-lang__bg').addEventListener('click', () => {
            this.closePopUp();
        });
    }
}
</script>

<style scoped>
    .pop-up__select-lang{
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
    .pop-up__select-lang__frame{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        padding: 30px 30px 50px;
        position: absolute;
        /* width: 584px;
        height: 322px; */
        height: fit-content;
        background: transparent;
        z-index: 35;
        /* padding: 38px 66px; */
        display: flex;
        /* display: none; */
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
    }

    .pop-up__select-lang__frame {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    .pop-up__select-lang__frame::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }

    .pop-up__select-lang__bg{
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
    .pop-up__select-lang__paper-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .pop-up__select-lang__paper-container .pop-up__select-lang__paper-img {
        width: 100%; /* Растягиваем по ширине */
        height: 100%; /* Растягиваем по высоте */
    }   

    .pop-up__select-lang__title{
        font-family: Roboto;
        font-size: 1.5em;
        font-weight: 600;

        color: rgba(120, 63, 10, 1);

        text-transform: uppercase;
        text-align: center;
        margin-bottom: 50px;
    }

    .pop-up__select-lang__sub-title{
        font-family: Roboto;
        font-size: 1em;
        font-weight: 600;

        color: rgba(120, 63, 10, 1);
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    .pop-up__select-lang__lang-list{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
        height: 100px;
    }

    .pop-up__select-lang__lang-item{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .pop-up__select-lang__lang-item+.pop-up__select-lang__lang-item{
        justify-content: flex-start;
    }

    .pop-up__select-lang__lang-item__img{
        /* width: 50%; */
        height: 100%;
    }

    .pop-up__select-lang__lang-item .pop-up__select-lang__lang-item__img{
        display: none;
    }

    .pop-up__select-lang__lang-item .pop-up__select-lang__lang-item__img.empty{
        display: block;
    }

    .pop-up__select-lang__lang-item.active .pop-up__select-lang__lang-item__img{
        display: block;
    }
    .pop-up__select-lang__lang-item.active .pop-up__select-lang__lang-item__img.empty{
        display: none;
    }

    .pop-up__select-lang__cross{
        position: absolute;
        top: 30px;
        right: 30px;
        width: 20px;
        height: 20px;
    }
</style>

<style scoped>
    @media (min-width: 500px) {
        .pop-up__select-lang__frame{
           width: 500px;
        }
    }
</style>




