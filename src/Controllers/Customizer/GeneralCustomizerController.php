<?php
namespace App\Controllers\Customizer;

use App\Providers\CustomizerServiceProvider;

class GeneralCustomizerController {
	
	/**
	 * This holds the section data.
	 *
	 * @var array Holds the section data.
	 */
	protected $section = [
		'title'       => 'General Settings',
		'description' => 'These values are used all over the site.',
	];
	
	/**
	 * The section name.
	 *
	 * @var string $section_name
	 */
	protected $section_name = 'general_settings';
	
	
	/**
	 * The basic fields.
	 *
	 * @var array
	 */
	protected $fields = [
		[
			'id'       => CustomizerServiceProvider::CONFIG_ID,
			'type'     => 'text',
			'settings' => 'address',
			'label'    => 'Gratis verzending vanaf:',
			'section'  => 'general_settings',
			'default'  => 'Lauriergracht 54BG',
			'priority' => 10,
		],
		[
			'id'       => CustomizerServiceProvider::CONFIG_ID,
			'type'     => 'text',
			'settings' => 'postalcode',
			'label'    => 'Postcode',
			'section'  => 'general_settings',
			'default'  => '1016RL',
			'priority' => 20,
		],
		[
			'id'       => CustomizerServiceProvider::CONFIG_ID,
			'type'     => 'text',
			'settings' => 'city',
			'label'    => 'Postcode',
			'section'  => 'general_settings',
			'default'  => 'Amsterdam',
			'priority' => 20,
		],
		[
			'id'       => CustomizerServiceProvider::CONFIG_ID,
			'type'     => 'text',
			'settings' => 'phone',
			'label'    => 'Telefoon nummer',
			'section'  => 'general_settings',
			'default'  => '020 2614758',
			'priority' => 20,
		],
		[
			'id'       => CustomizerServiceProvider::CONFIG_ID,
			'type'     => 'email',
			'settings' => 'email',
			'label'    => 'E-mailadres',
			'section'  => 'general_settings',
			'default'  => 'info@italiaansewijnwinkel.nl',
			'priority' => 20,
		],
	];
}
