<template>
    <div class="screen">
        <!-- Используем v-show для скрытия и показа элементов в зависимости от currentPlayer -->
        <div id="player-power" v-show="this.$route.name == 'power' && this.selectedLanguage == 'en'"></div>
        <div id="player-power-ru" v-show="this.$route.name == 'power' && this.selectedLanguage == 'ru'"></div>
        <div id="player-shield" v-show="this.$route.name == 'shield'"></div>
        <div id="player-ton" v-show="this.$route.name == 'finance'"></div>
        <div id="player-level"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            language: 'ru',
            showLvlUp: false,
            lvlUpPlayer: {},
        }
    },
    props: {
        currentPlayer: {
            type: String,
            required: true
        },
        selectedLanguage: {
            type: String,
            required: true
        }
    },
    mounted() {
        console.log('mounting');
        this.initPlayers();
        console.log(this.$route.name);
    },
    methods: {
        initPlayers() {
            let self = this;
            // Инициализация плеера Power
            new spine.SpinePlayer("player-power", {
                jsonUrl: '/animations/Scene_Macron/main_scene2.json',
                atlasUrl: '/animations/Scene_Macron/main_scene2.atlas',
                pngUrl: '/animations/Scene_Macron/main_scene2.png',
                width: window.innerWidth,  // Исходная ширина
                height: window.innerHeight, // Исходная высота
                alpha: true,
                backgroundColor: "#000000",
                showControls: false,
                showLoading: false,
                animation: "idle",
                viewport: {
                    x: -300,         // Позиция по оси X
                    y: -1200,         // Позиция по оси Y
                    width: 1600,   // Ширина видимой области
                    height: 1200,  // Высота видимой области
                    padLeft: "0%", // Без отступов
                    padRight: "0%",
                    padTop: "0%",
                    padBottom: "0%",
                    transitionTime: 0 // Отключаем плавные переходы
                },
                success: (loadedPlayer) => {
                    console.log("Animation loaded successfully");
                    const playerContainer = document.getElementById("player-power");
                    let isAnimating = false;
                    playerContainer.addEventListener('click', function() {
                        self.$emit('tap');
                        // При клике запускаем анимацию "baloon_pump"
                        if(!isAnimating){
                            const pumpAnimation = loadedPlayer.setAnimation("action_smile", false);
                            pumpAnimation.timeScale = 3.0;
                            isAnimating = true;
                        }
                    });

                    loadedPlayer.animationState.addListener({
                        complete: function (trackEntry) {
                        // Если анимация завершена, переключаемся на idle
                        if (trackEntry.animation.name === 'action_smile') {
                            loadedPlayer.setAnimation("idle", true);
                            isAnimating = false;
                        }
                        }
                    });
                }
            });

            // Инициализация плеера Power-ru
            new spine.SpinePlayer("player-power-ru", {
                jsonUrl: '/animations/Scene_Baloon/bg.json',
                atlasUrl: '/animations/Scene_Baloon/bg.atlas',
                pngUrl: '/animations/Scene_Baloon/bg.png',
                width: window.innerWidth,  // Исходная ширина
                height: window.innerHeight, // Исходная высота
                alpha: true,
                backgroundColor: "#000000",
                showControls: false,
                showLoading: false,
                animation: "Idle",
                viewport: {
                    x: -700,         // Позиция по оси X
                    y: -1600,         // Позиция по оси Y
                    width: 2400,   // Ширина видимой области
                    height: 1900,  // Высота видимой области
                    padLeft: "0%", // Без отступов
                    padRight: "0%",
                    padTop: "0%",
                    padBottom: "0%",
                    transitionTime: 0 // Отключаем плавные переходы
                },
                success: (loadedPlayer) => {
                    console.log("Animation loaded successfully");
                    console.log(loadedPlayer);
                    let isPumping = false;
                    const playerContainer = document.getElementById("player-power-ru");
                    playerContainer.addEventListener('click', function() {
                        self.$emit('tap');
                        // При клике запускаем анимацию "baloon_pump"
                        if(!isPumping){
                            const pumpAnimation = loadedPlayer.setAnimation("baloon_pump", false);
                            pumpAnimation.timeScale = 3.0;
                            isPumping = true;
                        }
                    });
                    // Добавляем слушатель завершения анимации
                    loadedPlayer.animationState.addListener({
                        complete: function (trackEntry) {
                        // Если анимация завершена, переключаемся на idle
                        if (trackEntry.animation.name === 'baloon_pump') {
                            loadedPlayer.setAnimation("Idle", true);
                            isPumping = false;
                        }
                        }
                    });
                }
            });

            // Инициализация плеера Shield
            new spine.SpinePlayer("player-shield", {
                jsonUrl: '/animations/Scene_Shield/bg_03_B.json',
                atlasUrl: '/animations/Scene_Shield/bg_03_B.atlas',
                pngUrl: '/animations/Scene_Shield/bg_03_B.png',
                width: window.innerWidth,
                height: window.innerHeight,
                alpha: true,
                backgroundColor: "#000000",
                showControls: false,
                showLoading: false,
                animation: "idle", // Стартовая анимация

                viewport: {
                    x: -400,
                    y: -1200,
                    width: 1600,
                    height: 1200,
                    padLeft: "0%",
                    padRight: "10%",
                    padTop: "0%",
                    padBottom: "0%",
                    transitionTime: 0
                },
                success: (loadedPlayer) => {
                    console.log("Shield animation loaded successfully");
                    const playerContainer = document.getElementById("player-shield");

                    // Изначальное состояние статичное (idle)
                    let currentAnimationName = "none";

                    playerContainer.addEventListener('click', function() {
                        self.$emit('tap');
                        if (currentAnimationName === "idle") {
                            // Если щит статичен (idle), запускаем анимацию idle


                            // loadedPlayer.setAnimation("idle", false); 

                            // const actionIdleAnimation = loadedPlayer.setAnimation("idle", false);
                            // actionIdleAnimation.timeScale = 1.5;


                            // currentAnimationName = "idle"; // Обновляем состояние
                        }
                        if (currentAnimationName === "none") {
                            // Если щит статичен (none), запускаем анимацию hit
                            loadedPlayer.setAnimation("hit", false); 
                            currentAnimationName = "hit"; // Обновляем состояние
                        }
                    });

                    // Слушатель завершения анимации
                    loadedPlayer.animationState.addListener({
                        complete: function(trackEntry) {
                            if (trackEntry.animation.name === 'hit') {
                                // После завершения "hit" запускаем "idle"



                                // loadedPlayer.setAnimation("idle", false); 
                                const actionIdleAnimation = loadedPlayer.setAnimation("idle", false);
                                actionIdleAnimation.timeScale = 1.5;



                                currentAnimationName = "idle"; // Обновляем состояние на idle
                                setTimeout(() => {
                                    const actionIdleAnimation = loadedPlayer.setAnimation("idle", false);
                                    actionIdleAnimation.timeScale = 100;
                                }, 2000);
                            }
                            if (trackEntry.animation.name === 'idle') {
                                // После завершения "idle" запускаем "none"
                                
                                currentAnimationName = "none"; // Обновляем состояние на none
                            }
                        }
                    });
                }
            });

            // Инициализация плеера Finance
            new spine.SpinePlayer("player-ton", {
                jsonUrl: '/animations/Scene_TON_02/scene_05.json',
                atlasUrl: '/animations/Scene_TON_02/scene_05.atlas',
                pngUrl: '/animations/Scene_TON_02/scene_05.png',
                width: window.innerWidth,  // Исходная ширина
                height: window.innerHeight, // Исходная высота
                alpha: true,
                backgroundColor: "#000000",
                showControls: false,
                showLoading: false,
                animation: "idle", // Начальная анимация
                loop: false,
                // Глобальная настройка viewport
                viewport: {
                    x: -250,         // Позиция по оси X
                    y: -1200,         // Позиция по оси Y
                    width: 1600,   // Ширина видимой области
                    height: 1200,  // Высота видимой области
                    padLeft: "30%", // Без отступов
                    padRight: "30%",
                    padTop: "-50%",
                    padBottom: "-50%",
                    transitionTime: 0 // Отключаем плавные переходы
                },
                success: (loadedPlayer) => {
                    console.log("Animation loaded successfully");
                    console.log(loadedPlayer)
                    const playerContainer = document.getElementById("player-ton");
                    let isAnimating = false;
                    playerContainer.addEventListener('click', function() {
                        self.$emit('tap');
                        // При клике запускаем анимацию "baloon_pump"
                        if(!isAnimating){
                            const clickAnimation = loadedPlayer.setAnimation("action", false);
                            clickAnimation.timeScale = 3.0;
                            isAnimating = true;
                        }
                    });

                    loadedPlayer.animationState.addListener({
                        complete: function (trackEntry) {
                        // Если анимация завершена, переключаемся на idle
                        if (trackEntry.animation.name === 'action') {
                            loadedPlayer.setAnimation("idle", true);
                            isAnimating = false;
                        }
                        }
                    });

                }
            });




            new spine.SpinePlayer("player-level", {
                jsonUrl: '/animations/Animation_level/main_all.json',
                atlasUrl: '/animations/Animation_level/main_all.atlas',
                pngUrl: '/animations/Animation_level/main_all.png',
                width: window.innerWidth,  // Исходная ширина
                height: window.innerHeight, // Исходная высота
                alpha: true,
                backgroundColor: "#00000000",
                showControls: false,
                showLoading: false,
                animation: "animation", // Начальная анимация
                loop: false,
                // Глобальная настройка viewport
                // viewport: {
                //     x: -378/2,         // Позиция по оси X
                //     y: -656*2,         // Позиция по оси Y
                //     width: 378*2,   // Ширина видимой области
                //     height: 656*2,  // Высота видимой области
                //     // padLeft: "30%", // Без отступов
                //     // padRight: "30%",
                //     // padTop: "-50%",
                //     // padBottom: "-50%",
                //     transitionTime: 0 // Отключаем плавные переходы
                // },
                viewport: {

                    width: 378*2,         // Ширина текстуры из атласа
                    height: 656*2,        // Высота текстуры из атласа
                    transitionTime: 0,   // Без анимации переходов
                    padLeft: "100%",
                    padRight: "100%",
                    padTop: "85%",
                    padBottom: "100%",
                },

                success: (loadedPlayer) => {
                    self.lvlUpPlayer = loadedPlayer;
                    console.log("lvlUpAnimation loaded successfully");
                    console.log(self.lvlUpPlayer);
                    const playerContainer = document.getElementById("player-level");
                    let isAnimating = false;
                    playerContainer.addEventListener('click', function() {
                        self.$emit('tap');
                        // При клике запускаем анимацию "baloon_pump"
                        if(!isAnimating){
                            const clickAnimation = loadedPlayer.setAnimation("animation", false);
                            clickAnimation.timeScale = 1.5;
                            isAnimating = true;
                        }
                    });

                    loadedPlayer.animationState.addListener({
                        complete: function (trackEntry) {
                        // Если анимация завершена, переключаемся на idle
                        if (trackEntry.animation.name === 'animation') {
                            // loadedPlayer.setAnimation("idle", true);
                            isAnimating = false;
                            self.hideLvlUpAnim();
                        }
                        }
                    });

                }
            });
        },
        showLvlUpAnim(){
            let self = this;
            this.showLvlUp = true;
            document.querySelector('#player-level').style.zIndex = "1";
            
            const clickAnimation = this.lvlUpPlayer.setAnimation("animation", false);
            clickAnimation.timeScale = 1.5;




            this.lvlUpPlayer.animationState.addListener({
                complete: function (trackEntry) {
                    // Если анимация завершена, переключаемся на idle
                    if (trackEntry.animation.name === 'animation') {
                            self.hideLvlUpAnim();
                    }
                    }
            });
        },
        hideLvlUpAnim(){
            this.showLvlUp = false;
            document.querySelector('#player-level').style.zIndex = "-2";
        }
    }
};
</script>

<style>
  .screen{
      height: 100vh;
      width: 100vw;
      background: rgba(55, 51, 63, 1);

  }
</style>

<style>
    .screen{
        position: relative;
    }
    #player-power, #player-power-ru, #player-shield, #player-ton, #player-level {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;  /* Высота на весь экран */
        width: 100%;   /* Ширина на весь экран */
        background-color: #000000; /* Черный фон */
        position: relative;
        /* z-index: -1; */
    }
    #player-level {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -2;
        background-color: transparent;
    }

    .spine-player{
        width: 100%;
    }

    /* Стиль для канваса */
    canvas {
        object-fit: none;  /* Отменяем стандартное поведение object-fit */
        transition: all 0.3s ease; /* Плавный переход при изменении размеров */
    }
</style>