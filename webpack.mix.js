const mix = require('laravel-mix');

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.json', '.vue', '...'] // Добавьте необходимые расширения
  }
});

mix.js('resources/js/app.js', 'public/js')
  .vue()
  .postCss('resources/css/app.css', 'public/css', [
    // Ваши плагины
  ]);