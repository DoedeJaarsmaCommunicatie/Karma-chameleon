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
                        require('postcss-import'),
                        require('tailwindcss'),
                        require('postcss-nested'),
                        require('postcss-color-function'),
                        require('postcss-preset-env')({ stage: 1 })
                ]
        }
    )
    .ts('assets/scripts/Main.ts', 'dist/js/main.js');


