<?php

use Carbon_Fields\Block;
use Carbon_Fields\Field\Field;
use Timber\Timber;

function get_query_args_gb( $type ) {
	switch ( $type ) {
		case 'sale':
			$args = [
				'post_type'      => 'product',
				'posts_per_page' => 4,
				'post_status'    => 'publish',
				'meta_query'     => [
					'relation' => 'OR',
					[
						'key'     => '_sale_price',
						'value'   => 0,
						'compare' => '>',
						'type'    => 'numeric',
					],
				],
				'fields'         => 'ids',
			];
			break;
		default:
			$args = [
				'post_type'      => 'product',
				'posts_per_page' => 4,
				'post_status'    => 'publish',
				'tax_query'      => [
					[
						'taxonomy' => 'product_cat',
						'field'    => 'slug',
						'terms'    => $type,
					],
				],
				'fields'         => 'ids',
			];
			break;

	}

	return $args;
}

function get_product_selection() {
	return [
		'wit'        => 'Witte wijn',
		'rood'       => 'Rode wijn',
		'mousserend' => 'Mousserende wijn',
		'dessert'    => 'Dessert wijn',
		'rose'       => 'Rose wijn',
		'sale'       => 'Uitverkoop',
	];
}

add_action(
	'carbon_fields_register_fields',
	static function () {
		Block::make( __( 'Producten rij' ) )
			->add_fields(
				[
					Field::make( 'checkbox', 'kiyoh', __( 'Met Kiyoh' ) ),
					Field::make( 'select', 'type', __( 'Type flessen' ) )
						->set_options( get_product_selection() ),
				]
			)
			->set_render_callback(
				static function ( $fields ) {
					$context          = Timber::get_context();
					$context['kiyoh'] = $fields['kiyoh'];

					$context['posts'] = \Timber\Timber::get_posts( get_query_args_gb( $fields['type'] ) );

					return Timber::render( 'views/partials/front-page/sale-row.twig', $context );
				}
			);

		Block::make( __( 'Foto links grijze achtergrond' ) )
			->add_fields(
				[
					Field::make( 'image', 'image', __( 'Afbeelding' ) ),
					Field::make( 'text', 'title', __( 'Titel' ) ),
					Field::make( 'text', 'link', __( 'Link' ) ),
					Field::make( 'select', 'type', __( 'Type flessen' ) )
						->set_options( get_product_selection() ),
				]
			)
			->set_render_callback(
				static function ( $fields ) {
					$context          = Timber::get_context();
					$context['image'] = new \Timber\Image( $fields['image'] );
					$context['title'] = $fields['title'];

					$context['posts'] = \Timber\Timber::get_posts( get_query_args_gb( $fields['type'] ) );
					$context['url']   = $fields['link']?? '#';

					return Timber::render( 'views/partials/front-page/row-image-left.twig', $context );
				}
			);

		Block::make( __( 'Foto rechts grijze achtergrond' ) )
			->add_fields(
				[
					Field::make( 'image', 'image', __( 'Afbeelding' ) ),
					Field::make( 'text', 'title', __( 'Titel' ) ),
					Field::make( 'text', 'link', __( 'Link' ) ),
					Field::make( 'select', 'type', __( 'Type flessen' ) )
						->set_options( get_product_selection() ),
				]
			)
			->set_render_callback(
				static function ( $fields ) {
					$context          = Timber::get_context();
					$context['image'] = new \Timber\Image( $fields['image'] );
					$context['title'] = $fields['title'];

					$context['posts'] = \Timber\Timber::get_posts( get_query_args_gb( $fields['type'] ) );
					$context['url']   = $fields['link']?? '#';

					return Timber::render( 'views/partials/front-page/row-image-right.twig', $context );
				}
			);
	}
);


