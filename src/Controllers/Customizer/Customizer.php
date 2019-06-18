<?php
namespace App\Controllers\Customizer;

/**
 * Class Customizer
 *
 * @package App\Controllers\Customizer
 */
abstract class Customizer {
	
	/**
	 * Customizer constructor.
	 *
	 * @param \Kirki $kirki
	 */
	public function __construct( \Kirki $kirki ) {}

	abstract function register_panel();

	abstract function register_sections();
}
