<?php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package studiolegalemauro
 */

if ( ! function_exists( 'studiolegalemauro_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 */
function studiolegalemauro_posted_on() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() ),
		esc_attr( get_the_modified_date( 'c' ) ),
		esc_html( get_the_modified_date() )
	);

	$posted_on = sprintf(
		esc_html_x( 'Posted on %s', 'post date','studiolegalemauro'),
		'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
	);

	$byline = sprintf(
		esc_html_x( 'by %s', 'post author','studiolegalemauro'),
		'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
	);

	echo '<span class="posted-on">' . $posted_on . '</span><span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.

}
endif;

if ( ! function_exists( 'studiolegalemauro_entry_footer' ) ) :
/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function studiolegalemauro_entry_footer() {
	// Hide category and tag text for pages.
	if ( 'post' === get_post_type() ) {
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( esc_html__( ', ','studiolegalemauro') );
		if ( $categories_list && studiolegalemauro_categorized_blog() ) {
			printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s','studiolegalemauro') . '</span>', $categories_list ); // WPCS: XSS OK.
		}

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', esc_html__( ', ','studiolegalemauro') );
		if ( $tags_list ) {
			printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s','studiolegalemauro') . '</span>', $tags_list ); // WPCS: XSS OK.
		}
	}

	if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link">';
		/* translators: %s: post title */
		comments_popup_link( sprintf( wp_kses( __( 'Leave a Comment<span class="screen-reader-text"> on %s</span>','studiolegalemauro'), array( 'span' => array( 'class' => array() ) ) ), get_the_title() ) );
		echo '</span>';
	}

	edit_post_link(
		sprintf(
			/* translators: %s: Name of current post */
			esc_html__( 'Edit %s','studiolegalemauro'),
			the_title( '<span class="screen-reader-text">"', '"</span>', false )
		),
		'<span class="edit-link">',
		'</span>'
	);
}
endif;

/**
 * Returns true if a blog has more than 1 category.
 *
 * @return bool
 */
function studiolegalemauro_categorized_blog() {
	if ( false === ( $all_the_cool_cats = get_transient( 'studiolegalemauro_categories' ) ) ) {
		// Create an array of all the categories that are attached to posts.
		$all_the_cool_cats = get_categories( array(
			'fields'     => 'ids',
			'hide_empty' => 1,
			// We only need to know if there is more than one category.
			'number'     => 2,
		) );

		// Count the number of categories that are attached to the posts.
		$all_the_cool_cats = count( $all_the_cool_cats );

		set_transient( 'studiolegalemauro_categories', $all_the_cool_cats );
	}

	if ( $all_the_cool_cats > 1 ) {
		// This blog has more than 1 category so studiolegalemauro_categorized_blog should return true.
		return true;
	} else {
		// This blog has only 1 category so studiolegalemauro_categorized_blog should return false.
		return false;
	}
}

/**
 * Flush out the transients used in studiolegalemauro_categorized_blog.
 */
function studiolegalemauro_category_transient_flusher() {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	// Like, beat it. Dig?
	delete_transient( 'studiolegalemauro_categories' );
}
add_action( 'edit_category', 'studiolegalemauro_category_transient_flusher' );
add_action( 'save_post',     'studiolegalemauro_category_transient_flusher' );

//ACF functions fallbacks
if(!function_exists('get_field')){
	function get_field($key, $post_id=null){

		if($post_id === null){
			$post_id = get_the_ID();
		}

		return get_post_meta( $post_id, $key, true );
	}
}
if(!function_exists('the_field')){
	function the_field($key, $post_id=null){
		echo get_field( $key, $post_id );
	}
}

if(!function_exists('the_field_template')){
	function the_field_template($field, $before='', $after='' ){
		if($value = get_field($field)){
			echo $before.$value.$after;
		}
	}
}

add_filter('get_the_archive_title', function($title){
	return str_replace( sprintf(__( 'Archives: %s' ), ''), '', $title );
});

add_filter('get_the_archive_description', function($description){
	if(!$description && is_post_type_archive()){
			$description = get_theme_mod('archive_'.get_query_var( 'post_type' ).'_description');
	}
	return $description;
});

function studiolegalemauro_custom_post_type_archive_image($prefix='', $suffix='', $size='content-header', $post_type=null ){

	if($post_type === null){
		$post_type = get_query_var( 'post_type' );
	}

	$image = get_theme_mod("archive_{$post_type}_image");

	if(is_post_type_archive() && $image){
			echo $prefix.wp_get_attachment_image($image, $size).$suffix;
	}
}
