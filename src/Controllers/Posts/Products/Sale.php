<?php
namespace App\Controllers\Posts\Products;

/**
 * Class Sale
 *
 * @package App\Controllers\Posts\Products
 */
class Sale extends Product {

	/**
	 * Sale constructor.
	 */
	public function __construct() {
		$this->add_args(
			[
				'tax_query'  => [
					'relation' => 'OR',
					[
						'taxonomy' => 'product_tag',
						'field'    => 'slug',
						'terms'    => [ 'aanbieding', 'op-is-op' ],
						'operator' => 'IN',
					],
				],
			]
		);
	}
}
