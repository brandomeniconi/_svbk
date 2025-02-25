<?php
/**
 *'studiolegalemauro'functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package studiolegalemauro
 */

use \Svbk\WP\Helpers;

if(file_exists(__DIR__.'/vendor/autoload.php')){
	require_once __DIR__.'/vendor/autoload.php';
}

if(class_exists('\Svbk\WP\Helpers\Theme')){
	Helpers\Theme::init()->all();
}


if ( ! function_exists( 'studiolegalemauro_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function studiolegalemauro_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on studiolegalemauro, use a find and replace
	 * to change'studiolegalemauro'to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'studiolegalemauro', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	add_image_size( 'content-half', 768, 999 );
	add_image_size( 'content-full', 1320, 999 );

	set_post_thumbnail_size( 768, 560, true );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'menu-1' => esc_html__( 'Primary', 'studiolegalemauro' ),
		'menu-404' => esc_html__( 'Not Found (404) Page', 'studiolegalemauro' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for custom logo.
	 */
	add_theme_support( 'custom-logo', array(
		'height'      => 400,
		'width'       => 100,
		'flex-width'  => true,
		'flex-height' => true,
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'studiolegalemauro_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	add_editor_style();

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	if(class_exists('\Svbk\WP\Helpers\AMP')){
		Helpers\AMP::init();
	}
}
endif;
add_action( 'after_setup_theme', 'studiolegalemauro_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function studiolegalemauro_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'studiolegalemauro_content_width', 640 );
}
add_action( 'after_setup_theme', 'studiolegalemauro_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function studiolegalemauro_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar','studiolegalemauro'),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.','studiolegalemauro'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'studiolegalemauro_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function studiolegalemauro_scripts() {
	wp_enqueue_style( 'studiolegalemauro-style', get_stylesheet_uri() );

	wp_enqueue_script( 'studiolegalemauro-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );
	wp_enqueue_script( 'studiolegalemauro-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
	wp_enqueue_script( 'studiolegalemauro-theme', get_template_directory_uri() . '/js/theme.js', array('jquery'), '20170120', true );

	if(get_theme_mod('sticky_header')){
		wp_enqueue_script( 'waypoints' );
		wp_add_inline_script( 'waypoints', 'var sticky = new Waypoint.Sticky({ element: document.getElementById(\'site-header-content\') })' );
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'studiolegalemauro_scripts' );

function studiolegalemauro_max_srcset_image_width($size){
	return 2560;
}
add_filter( 'max_srcset_image_width', 'studiolegalemauro_max_srcset_image_width');

function studiolegalemauro_post_thumbnail_sizes_attr( $attr, $attachment, $size ) {

	switch($size){
		case 'post-thumbnail':
			$attr['sizes'] = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1320px) 35vw, 600px';	break;
		case 'thumbnail':
			$attr['sizes'] = '(max-width: 710px) 100vw, (max-width: 910px) 50vw, (max-width: 1320px) 40vw, 650px';	break;
		case 'header':
			$attr['sizes'] = '100vw'; break;
		case 'content-full':
			$attr['sizes'] = ' (max-width: 1320px) 100vw,  1320px'; break;
		case 'content-half':
			$attr['sizes'] = ' (max-width: 1024px) 100vw, (max-width: 1320px) 50vw, 660px'; break;
	}

	return $attr;
}
add_filter( 'wp_get_attachment_image_attributes', 'studiolegalemauro_post_thumbnail_sizes_attr', 10 , 3 );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Shortcode UI
 */
require get_template_directory() . '/inc/shortcode-ui.php';

/**
 * Editor Custom Styles
 */
require get_template_directory() . '/inc/editor.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
