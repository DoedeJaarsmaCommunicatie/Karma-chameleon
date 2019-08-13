<?php
/**
 * Search results page.
 *
 * @deprecated Search is locked to only products.
 *             And thus the search results are sent
 *             to the archive-product page.
 * @package Targaryen
 */

$context = \Timber\Timber::get_context();

$context['query'] = get_search_query();
$context['posts'] = new Timber\PostQuery();

\Timber\Timber::render(
	[
		'views/search.twig',
	],
	$context
);
