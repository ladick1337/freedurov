<template>
    <div class="shield screen">
        <div id="player-shield"></div>
    </div>
</template>

<script>



export default {
    name: 'Shield',
    mounted() {
        this.initPlayer();
    },
    methods: {
        initPlayer() {
            const player = new spine.SpinePlayer("player-shield", {
                jsonUrl: '/animations/Scene_Shield/bg_03_B.json',
                atlasUrl: '/animations/Scene_Shield/bg_03_B.atlas',
                pngUrl: '/animations/Scene_Shield/bg_03_B.png',
                width: window.innerWidth,  // Исходная ширина
                height: window.innerHeight, // Исходная высота
                alpha: true,
                backgroundColor: "#000000",
                showControls: false,
                animation: "idle", // Начальная анимация

                // Глобальная настройка viewport
                viewport: {
                    x: -400,         // Позиция по оси X
                    y: -1200,         // Позиция по оси Y
                    width: 1600,   // Ширина видимой области
                    height: 1200,  // Высота видимой области
                    padLeft: "0%", // Без отступов
                    padRight: "10%",
                    padTop: "0%",
                    padBottom: "0%",
                    transitionTime: 0 // Отключаем плавные переходы
                },

                // Параметры анимации
                animation: 'idle',  // Начальная анимация

                success: (loadedPlayer) => {
                    console.log("Animation loaded successfully");

                    const playerContainer = document.getElementById("player-shield");
                    playerContainer.addEventListener('click', function() {
                        // Запуск анимации "hit" при клике
                        const actionSmileAnimation = loadedPlayer.setAnimation("hit", false);
                        actionSmileAnimation.timeScale = 2.0;
                    });

                    // Слушатель для возврата к анимации idle после завершения
                    loadedPlayer.animationState.addListener({
                        complete: function(trackEntry) {
                            if (trackEntry.animation.name === 'hit') {
                                loadedPlayer.setAnimation("idle", true);
                            }
                        }
                    });
                }
            });
        }
    }
};
</script>

<style>
   #player-shield {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;  
      width: 100vw;   
      background-color: #000000; 
      position: relative;
    }


    /* canvas {
      object-fit: none;  
      transition: all 0.3s ease; 
    } */
</style>