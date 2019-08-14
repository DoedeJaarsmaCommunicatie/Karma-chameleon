const mix = require('laravel-mix');


mix.sass('assets/styles/main.scss', 'dist/styles')
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer')
        ]
    })

mix.ts('assets/vue/app.ts', 'dist/vue')
    .options(
        {
                extractVueStyles: false,
                postCss: [
                    require('tailwindcss')('./tailwind.config.js'),
                    require('autoprefixer')
                ]
        }
    )
    .ts('assets/scripts/Main.ts', 'dist/js/main.js');



if (!mix.inProduction()) {
    mix
        .webpackConfig({
            devtool: 'inline-source-maps',
        })
        .sourceMaps();
}
