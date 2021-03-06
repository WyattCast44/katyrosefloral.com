const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

require('laravel-mix-imagemin');

mix.js('resources/app.js', 'dist/js')

mix.sass('resources/app.scss', 'dist/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')],
    })

mix.imagemin([
    'dist/images/full/**.*',
    'dist/images/reviews/**.*',
    'dist/images/packages/*/**.*',
    'dist/images/thumbnails/**.*'
]);

mix.browserSync();
