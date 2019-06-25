<?php
namespace App\Controllers\Posts\Products;

/**
 * Class Popular
 *
 * @package App\Controllers\Posts\Products
 */
class Popular extends Product {
	
	/**
	 * Popular constructor.
	 */
	public function __construct() {
		$this->add_args(
			[
				'meta_key'       => 'total_sales',
				'orderby'        => 'meta_value_num',
			]
		);
	}
}
