<?php
namespace App\Providers;

use function get_sites;

/**
 * Class ContentServiceProvider
 *
 * @package App\Providers
 */
class ContentServiceProvider {

	/**
	 * ContentServiceProvider constructor.
	 */
	public function __construct() {
		$this->boot();
	}

	/**
	 * Adds functionality to the \Timber\Context.
	 */
	public function boot(): void {
		add_filter(
			'timber/context',
			static function ( $context ) {
				if ( function_exists( 'get_sites' ) ) {
					$context['sites'] = get_sites(
						[
							'site__not_in' => get_current_blog_id(),
							'public'       => 1,
							'archived'     => 0,
						]
					);
				}
				return $context;
			}
		);
	}
}
