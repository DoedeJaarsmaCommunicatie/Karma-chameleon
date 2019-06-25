<?php
namespace App\Controllers\Posts\Products;

class Biologisch extends Product {
	/**
	 * Biologisch constructor.
	 */
	public function __construct() {
		$this->add_args(
			[
				'product_tag' => 'biologisch',
			]
		);
	}
}
