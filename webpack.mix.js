const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('resources/app.js', 'dist/js')

mix.sass('resources/app.scss', 'dist/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')],
    })
