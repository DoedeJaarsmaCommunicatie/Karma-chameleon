<?php
namespace App\Controllers\Posts\Products;

/**
 * Class Newest
 *
 * @package App\Controllers\Posts\Products
 */
class Newest extends Product {

	/**
	 * Newest constructor.
	 */
	public function __construct() {
		$this->add_args(
			[
				'orderby'        => 'date',
				'order'          => 'DESC',
			]
		);
	}
}
