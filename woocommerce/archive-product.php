<?php
$context = \Timber\Timber::get_context();
$posts = \Timber\Timber::get_posts();
$context['products'] = $posts;

if ( is_product_category() ) {
	$queried_object = get_queried_object();
	$term_id = $queried_object->term_id;
	$context['category'] = get_term( $term_id, 'product_cat' );
	$context['title'] = single_term_title( '', false );
}

\Timber\Timber::render( 'views/woocommerce/archive-product.twig', $context );
