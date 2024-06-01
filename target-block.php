<?php
/**
 * Plugin Name:       Target Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       target-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_target_block_block_init() {
	register_block_type( __DIR__ . '/build/title' );
	register_block_type( __DIR__ . '/build/textarea' );
	register_block_type( __DIR__ . '/build/team' );
}
add_action( 'init', 'create_block_target_block_block_init' );


add_filter( 'block_categories_all' , function( $categories ) {

    // Adding a new category.
	$categories[] = array(
		'slug'  => 'TargetBlock',
		'title' => 'Target Block'
	);

	return $categories;
} );


