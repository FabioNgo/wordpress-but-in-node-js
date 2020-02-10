/**
 * Loads the WordPress environment and template.
 *
 * @package WordPress
 */


// Load the WordPress library.
import wp_load from "wp-load";
import {isset} from "../../PHP Runtime/standard/_types";
import GLOBAL from "../../PHP Runtime/Core/GLOBAL";

if ( ! isset(wp_did_header) ) {

    var wp_did_header = true;
// Set up the WordPress query.
    wp();

    // Load the theme template.
    require( 'template-loader.js' );

}
