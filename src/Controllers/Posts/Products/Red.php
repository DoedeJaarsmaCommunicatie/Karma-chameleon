<?php
namespace App\Controllers\Posts\Products;

/**
 * Class Red
 *
 * @package App\Controllers\Posts\Products
 */
class Red extends Product {
	/**
	 * Red constructor.
	 */
	public function __construct() {
		$this->add_args(
			[
				'tax_query'      => [
					[
						'taxonomy' => 'product_cat',
						'field'    => 'slug',
						'terms'    => 'rood',
					],
				],
			]
		);
	}
}
