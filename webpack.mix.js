const mix = require('laravel-mix');

mix.postCss(
    'assets/styles/main.pcss',
    'dist/styles/',
    [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-color-function'),
        require('postcss-preset-env')({stage: 1}),
    ]
);

mix.ts('assets/vue/app.ts', 'dist/vue')
    .options(
        {
                extractVueStyles: true,
                postCss: [
                        require('postcss-import'),
                        require('tailwindcss'),
                        require('postcss-nested'),
                        require('postcss-color-function'),
                        require('postcss-preset-env')({ stage: 1 })
                ]
        }
    )

mix
    .babel([
        'assets/scripts/MenuOpener.js',
        'assets/scripts/FilterOpener.js',
    ], 'dist/js/main.js');
