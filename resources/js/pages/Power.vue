<template>
  <div class="power screen" @click="click">
      <div id="player"></div>
  </div>
</template>

<script>



export default {
  name: 'Power',
  mounted(){
      // this.initPlayer()
  },
  methods: {
      initPlayer(){
          const player = new spine.SpinePlayer("player", {
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
                  

                  const playerContainer = document.getElementById("player");
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

                  // function resizeCanvas(loadedPlayer){
                  //   loadedPlayer.setViewport({
                  //       x: -300,         // Позиция по оси X
                  //       y: -1200,         // Позиция по оси Y
                  //       width: 1600,   // Ширина видимой области
                  //       height: 1200,  // Высота видимой области
                  //       padLeft: "0%", // Без отступов
                  //       padRight: "0%",
                  //       padTop: "0%",
                  //       padBottom: "0%",
                  //       transitionTime: 0 // Отключаем плавные переходы
                  //   });
                  // }

                  // resizeCanvas(loadedPlayer);

                  // // Добавляем обработчик на изменение размеров экрана
                  // window.addEventListener('resize', resizeCanvas);
              }
          });

      },

      
  },
  
  
}
</script>
  

<style>
  .screen{
      height: 100vh;
      width: 100vw;
      background: rgba(55, 51, 63, 1);

  }
</style>

<style>
 #player {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;  /* Высота на весь экран */
    width: 100%;   /* Ширина на весь экран */
    background-color: #000000; /* Черный фон */
    position: relative;
  }

  /* Стиль для канваса */
  canvas {
    object-fit: none;  /* Отменяем стандартное поведение object-fit */
    transition: all 0.3s ease; /* Плавный переход при изменении размеров */
  }
</style>