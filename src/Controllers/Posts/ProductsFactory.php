<?php
namespace App\Controllers\Posts;

/**
 * Class ProductsFactory
 *
 * @package App\Controllers\Posts
 */
final class ProductsFactory {
	/**
	 * ProductsFactory constructor.
	 */
	protected function __construct() {}

	/**
	 * Start the process
	 *
	 * @param string $class The class to be called and ran.
	 *
	 * @return mixed
	 */
	public static function create( $class ) {
		return new $class();
	}
}
