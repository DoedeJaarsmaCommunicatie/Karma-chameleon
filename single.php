<?php

use App\Controllers\Posts\Products\Newest;
use App\Controllers\Posts\ProductsFactory;

$context = \Timber\Timber::get_context();

$context['post'] = new \Timber\Post();

if ( get_post_type() === 'streek' ) {
	/**
	 * The newest products.
	 *
	 * @var Newest $products
	 */
	$products = ProductsFactory::create( Newest::class );
	$products->boot();
	$products->add_args(
		[
			'tax_query' => [
				[
					'taxonomy' => 'pa_streek',
					'field'    => 'slug',
					'terms'    => $context['post']->slug,
				],
			],
		]
	);

	if ( $products->initialize_query()->get_wp_query()->have_posts() ) {
		$context['products'] = $products->query->posts;
	}
}

if ( get_post_type() === 'druif' ) {
	/**
	 * The newest products.
	 *
	 * @var Newest $products
	 */
	$products = ProductsFactory::create( Newest::class );
	$products->boot();
	$products->add_args(
		[
			'tax_query' => [
				[
					'taxonomy' => 'pa_druif',
					'field'    => 'slug',
					'terms'    => $context['post']->slug,
					'operator' => 'IN',
				],
			],
		]
	);

	if ( $products->initialize_query()->get_wp_query()->have_posts() ) {
		$context['products'] = $products->query->posts;
	}
}

if ( get_post_type() === 'producent' ) {
	/**
	 * The newest products.
	 *
	 * @var Newest $products
	 */
	$products = ProductsFactory::create( Newest::class );
	$products->boot();
	$products->add_args(
		[
			'tax_query' => [
				[
					'taxonomy' => 'pa_domein',
					'field'    => 'slug',
					'terms'    => $context['post']->slug,
					'operator' => 'IN',
				],
			],
		]
	);

	if ( $products->initialize_query()->get_wp_query()->have_posts() ) {
		$context['products'] = $products->query->posts;
	}
}

\Timber\Timber::render(
	[
		'views/' . get_post_type() . '/single-' . $context['post']->slug . '.twig',
		'views/' . get_post_type() . '/single.twig',
		'views/single-' . get_post_type() . '-' . $context['post']->slug . '.twig',
		'views/single-' . $context['post']->slug . '.twig',
		'views/single-' . get_post_type() . '.twig',
		'views/single.twig',
		'views/index.twig',
	],
	$context,
	600
);
