<?php
// TODO: Make this cleaner and split up to multiple files.
use App\Controllers\Posts\Products\Awarded;
use App\Controllers\Posts\Products\Biologisch;
use App\Controllers\Posts\Products\Dessert;
use App\Controllers\Posts\Products\Mousserend;
use App\Controllers\Posts\Products\Newest;
use App\Controllers\Posts\Products\Popular;
use App\Controllers\Posts\Products\Red;
use App\Controllers\Posts\Products\Rose;
use App\Controllers\Posts\Products\Sale;
use App\Controllers\Posts\Products\White;
use Carbon_Fields\Block;
use Carbon_Fields\Field\Field;
use Timber\Image;
use Timber\Timber;
use App\Controllers\Posts\ProductsFactory as Products;

/**
 * Gets the query args for the current request.
 *
 * @param string $type The current request name.
 *
 * @return array
 */
function get_query_args_gb( $type ) {
	switch ( $type ) {
		case 'sale':
			/**
			 * Sale wine model.
			 *
			 * @var Sale $products
			 */
			$products = Products::create( Sale::class );
			return $products->boot()->limit()->get_args();
		case 'popular':
			/**
			 * Popular wine model.
			 *
			 * @var Popular $products
			 */
			$products = Products::create( Popular::class );
			return $products->boot()->limit()->get_args();
		case 'rood':
			/**
			 * Red wine model.
			 *
			 * @var Red $rood
			 */
			$rood = Products::create( Red::class );
			return $rood->boot()->limit()->get_args();
		case 'wit':
			/**
			 * White wine model.
			 *
			 * @var White $products
			 */
			$products = Products::create( White::class );
			return $products->boot()->limit()->get_args();
		case 'rose':
			/**
			 * Rose wine model.
			 *
			 * @var Rose $products
			 */
			$products = Products::create( Rose::class );
			return $products->boot()->limit()->get_args();
		case 'dessert':
			/**
			 * Dessert wine model.
			 *
			 * @var Dessert $products
			 */
			$products = Products::create( Dessert::class );
			return $products->boot()->limit()->get_args();
		case 'mousserend':
			/**
			 * Mousserend wine model.
			 *
			 * @var Mousserend $products
			 */
			$products = Products::create( Mousserend::class );
			return $products->boot()->limit()->get_args();
		case 'new':
			/**
			 * Newest wine model.
			 *
			 * @var Newest $products
			 */
			$products = Products::create( Newest::class );
			return $products->boot()->limit()->get_args();
		case 'biologic':
			/**
			 * Biological wine model.
			 *
			 * @var Biologisch $products
			 */
			$products = Products::create( Biologisch::class );
			return $products->boot()->limit()->get_args();
		case 'prijswinnaar':
			/**
			 * Awarded wine model.
			 *
			 * @var Awarded $products
			 */
			$products = Products::create( Awarded::class );
			return $products->boot()->limit()->get_args();
	}
}

/**
 * The current available selections.
 *
 * @return array
 */
function get_product_selection(): array {
	return [
		'wit'          => 'Witte wijn',
		'rood'         => 'Rode wijn',
		'mousserend'   => 'Mousserende wijn',
		'dessert'      => 'Dessert wijn',
		'rose'         => 'Rose wijn',
		'sale'         => 'Uitverkoop',
		'popular'      => 'Populaire wijnen',
		'new'          => 'Nieuwste wijnen',
		'biologic'     => 'Biologische wijnen',
		'prijswinnaar' => 'Prijswinnende wijnen',
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
					$context['posts'] = Timber::get_posts( get_query_args_gb( $fields['type'] ) );

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
					$context['image'] = new Image( $fields['image'] );
					$context['title'] = $fields['title'];

					$context['posts'] = Timber::get_posts( get_query_args_gb( $fields['type'] ) );
					$context['link']  = $fields['link'] ?? '#';

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
					$context['image'] = new Image( $fields['image'] );
					$context['title'] = $fields['title'];

					$context['posts'] = Timber::get_posts( get_query_args_gb( $fields['type'] ) );
					$context['link']  = $fields['link'] ?? '#';

					return Timber::render( 'views/partials/front-page/row-image-right.twig', $context );
				}
			);
	}
);


