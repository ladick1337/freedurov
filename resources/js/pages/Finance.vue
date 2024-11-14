<template>
    <div class="power screen">
        <div id="player-ton"></div>
    </div>
</template>

<script>



export default {
    name: 'Finance',
    mounted() {
        // this.initPlayer();
    },
    methods: {
        initPlayer() {
            const player = new spine.SpinePlayer("player-ton", {
                jsonUrl: '/animations/Scene_TON/scene_05.json',
                atlasUrl: '/animations/Scene_TON/scene_05.atlas',
                pngUrl: '/animations/Scene_TON/scene_05.png',
                width: window.innerWidth,  // Исходная ширина
                height: window.innerHeight, // Исходная высота
                alpha: true,
                backgroundColor: "#000000",
                showControls: false,
                animation: "animation", // Начальная анимация

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
    
    
}
</script>

<style>
   #player-ton {
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