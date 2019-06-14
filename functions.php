<?php
include_once get_stylesheet_directory() . '/vendor/aristath/kirki/kirki.php';
include_once get_stylesheet_directory() . '/vendor/autoload.php';

\Timber\Timber::$locations = get_stylesheet_directory() . '/templates/';

add_theme_support('custom-logo');
add_theme_support('woocommerce');
