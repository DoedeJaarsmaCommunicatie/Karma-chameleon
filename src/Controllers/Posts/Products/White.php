<?php
namespace App\Controllers\Posts\Products;

/**
 * Class White
 *
 * @package App\Controllers\Posts\Products
 */
class White extends Product {
	/**
	 * White constructor.
	 */
	public function __construct() {
		$this->add_args(
			[
				'tax_query'      => [
					[
						'taxonomy' => 'product_cat',
						'field'    => 'slug',
						'terms'    => 'wit',
					],
				],
			]
		);
	}
}
