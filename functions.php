<?php

use Carbon_Fields\Carbon_Fields;
use Timber\Timber;

require_once get_stylesheet_directory() . '/vendor/aristath/kirki/kirki.php';
require_once get_stylesheet_directory() . '/vendor/autoload.php';

Timber::$locations = [
	get_stylesheet_directory() . '/templates/',
	ABSPATH . '/wp-content/templates/karma',
];

add_theme_support( 'custom-logo' );
add_theme_support( 'woocommerce' );
add_theme_support( 'post-thumbnails' );

add_action(
	'after_setup_theme',
	static function () {
		Carbon_Fields::boot();
	}
);

remove_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display' );

$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/DoedeJaarsmaCommunicatie/Karma-chameleon/',
	__FILE__,
	'karma'
);
