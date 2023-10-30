const mix = require("laravel-mix");

mix.js('./src/main.js', 'mix/main.js')
  .js('./src/module.js', 'mix/module.js')
  .vue({ version: 2 });
