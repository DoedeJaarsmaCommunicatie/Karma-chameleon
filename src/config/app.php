<?php
namespace App;

use App\Providers\CustomizerServiceProvider;
use App\Providers\MenuServiceProvider;

return [
	'providers' => [
		CustomizerServiceProvider::class,
		MenuServiceProvider::class,
	],
];
