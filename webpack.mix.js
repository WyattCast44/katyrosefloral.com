const mix = require('laravel-mix');

// require('laravel-mix-imagemin');

mix.js('resources/app.js', 'dist/js')

mix.disableNotifications()

mix.postCss("resources/app.css", "dist/css", [
    require("tailwindcss"),
]);
    
// mix.imagemin([
//     'dist/images/full/**.*',
//     'dist/images/reviews/**.*',
//     'dist/images/packages/*/**.*',
//     'dist/images/thumbnails/**.*'
// ]);

// mix.browserSync();
