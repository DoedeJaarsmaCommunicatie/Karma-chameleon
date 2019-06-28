<?php
namespace App;

use App\Providers\ContentServiceProvider;
use App\Providers\CustomizerServiceProvider;
use App\Providers\MenuServiceProvider;

return [
	'providers' => [
		CustomizerServiceProvider::class,
		MenuServiceProvider::class,
		ContentServiceProvider::class,
	],
];
