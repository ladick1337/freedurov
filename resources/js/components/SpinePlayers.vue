<template>
    <div class="screen">
        <!-- Используем v-show для скрытия и показа элементов в зависимости от currentPlayer -->
        <div id="player-power" v-show="this.$route.name == 'power'"></div>
        <div id="player-shield" v-show="this.$route.name == 'shield'"></div>
        <div id="player-ton" v-show="this.$route.name == 'finance'"></div>
    </div>
</template>

<script>
export default {
    props: {
        currentPlayer: {
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
                    console.log(loadedPlayer);
                    console.log(window.innerWidth);
                    console.log(window.innerHeight);
                    const playerContainer = document.getElementById("player-power");
                    playerContainer.addEventListener('click', function() {
                        // При клике запускаем анимацию "action_smile"
                        const actionSmileAnimation = loadedPlayer.setAnimation("action_smile", false);
                        actionSmileAnimation.timeScale = 2.0;
                    });
                    // Добавляем слушатель завершения анимации
                    loadedPlayer.animationState.addListener({
                        complete: function (trackEntry) {
                        // Если анимация завершена, переключаемся на idle
                        if (trackEntry.animation.name === 'action_smile') {
                            loadedPlayer.setAnimation("idle", true);

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
                        console.log('click')
                        if (currentAnimationName === "idle") {
                            // Если щит статичен (idle), запускаем анимацию idle


                            // loadedPlayer.setAnimation("idle", false); 

                            const actionIdleAnimation = loadedPlayer.setAnimation("idle", false);
                            actionIdleAnimation.timeScale = 1.5;


                            currentAnimationName = "idle"; // Обновляем состояние
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
                jsonUrl: '/animations/Scene_TON/scene_05.json',
                atlasUrl: '/animations/Scene_TON/scene_05.atlas',
                pngUrl: '/animations/Scene_TON/scene_05.png',
                width: window.innerWidth,  // Исходная ширина
                height: window.innerHeight, // Исходная высота
                alpha: true,
                backgroundColor: "#000000",
                showControls: false,
                showLoading: false,
                animation: "animation", // Начальная анимация
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
                    playerContainer.addEventListener('click', function() {
                        // Запуск анимации "hit" при клике
                        const actionSmileAnimation = loadedPlayer.setAnimation("animation", false);
                        actionSmileAnimation.timeScale = 2.0;
                    });
                    // // Слушатель для возврата к анимации idle после завершения
                    // loadedPlayer.animationState.addListener({
                    //     complete: function(trackEntry) {
                    //         if (trackEntry.animation.name === 'hit') {
                    //             loadedPlayer.setAnimation("animation", true);
                    //         }
                    //     }
                    // });
                }
            });
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
#player-power, #player-shield, #player-ton {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;  /* Высота на весь экран */
    width: 100%;   /* Ширина на весь экран */
    background-color: #000000; /* Черный фон */
    position: relative;
    /* z-index: -1; */
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