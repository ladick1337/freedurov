<template>
  <div ref="spineContainer" style="width: 100vw; height: 100vh;">
    <canvas ref="spineCanvas"></canvas>
  </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from 'vue';

export default {
  setup() {
    const spineContainer = ref(null);
    const spineCanvas = ref(null);
    let player = null;

    const loadSpineAnimation = () => {
      const canvas = spineCanvas.value;
      const config = {
        jsonUrl: 'http://127.0.0.1:8000/animations/Scene_Macron/main_scene2.json',
        atlasUrl: 'http://127.0.0.1:8000/animations/Scene_Macron/main_scene2.atlas',
        pngUrl: 'http://127.0.0.1:8000/animations/Scene_Macron/main_scene2.png',
        success: (loadedPlayer) => {
          console.log("Animation loaded successfully");
          player = loadedPlayer;

          const resizeCanvas = () => {
            const container = spineContainer.value;
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;

            if (player && player.skeleton && player.renderer) {
              const skeletonBounds = player.skeleton.getBoundsRect();
              const scale = Math.min(
                containerWidth / skeletonBounds.width,
                containerHeight / skeletonBounds.height
              );

              // Изменяем размер канваса и масштаб
              canvas.width = containerWidth;
              canvas.height = containerHeight;
              player.renderer.resize(containerWidth, containerHeight);
              player.skeleton.scaleX = player.skeleton.scaleY = scale;

              // Центрируем анимацию
              player.skeleton.x = containerWidth / 2 - skeletonBounds.width * scale / 2;
              player.skeleton.y = containerHeight / 2 - skeletonBounds.height * scale / 2;
            }
          };

          // Вызов функции масштабирования и центрирования
          resizeCanvas();

          // Подписка на изменение размера окна
          window.addEventListener('resize', resizeCanvas);
        },
        error: (error) => {
          console.error("Error loading Spine animation:", error);
        }
      };

      // Инициализация Spine Web Player
      player = new spine.SpinePlayer(canvas, config);
    };

    onMounted(loadSpineAnimation);

    // Очистка ресурсов при уничтожении компонента
    onUnmounted(() => {
      if (player) {
        player.dispose();
      }
      window.removeEventListener('resize', resizeCanvas);
    });

    return {
      spineContainer,
      spineCanvas,
    };
  },
};
</script>

<style>
.spine-container {
  width: 100vw;
  height: 100vh;
}
</style>