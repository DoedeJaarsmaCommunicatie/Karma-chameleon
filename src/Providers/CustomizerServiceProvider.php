<?php
/**
 * Registers customizer functions
 *
 * @author Mitch Hijlkema <mail@mitchhijlkema.nl>
 * @version 1.0.0
 * @package App\Providers
 * @since 1.0.0
 */

namespace App\Providers;

use App\Controllers\Customizer\FooterCustomizerController;
use App\Controllers\Customizer\FooterListsCustomizerController;
use App\Controllers\Customizer\SeoCustomizerController;
use App\Controllers\Customizer\UspCustomizerController;
use Kirki;

/**
 * Class CustomizerServiceProvider
 *
 * @package App\Providers
 */
class CustomizerServiceProvider {

	const CONFIG_ID = 'itww';

	/**
	 * CustomizerServiceProvider constructor.
	 */
	public function __construct() {
		$this->boot();
	}

	/**
	 * The boot function.
	 *
	 * @return void
	 */
	public function boot(): void {
		$this->register_namespace();

		$this->register();
	}

	/**
	 * Registers the customizer controllers
	 */
	public function register(): void {
		new UspCustomizerController();
		new SeoCustomizerController();
		new FooterCustomizerController();
		new FooterListsCustomizerController();
	}

	/**
	 * Registers \Kirki::class.
	 *
	 * @return void
	 */
	private function register_namespace(): void {
		Kirki::add_config(
			self::CONFIG_ID,
			[
				'capability'  => 'edit_theme_options',
				'option_type' => 'theme_mod',
			]
		);
	}
}
