<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _svbk
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( ['post'] ); ?>>
	<header class="post__header entry-header">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="post__title entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="post__title entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;

		if ( 'post' === get_post_type() ) :
			?>
			<div class="post__meta entry-meta">
				<?php
				_svbk_entry_terms();
				_svbk_posted_on();
				_svbk_posted_by();
				_svbk_post_reading_time();
				?>
			</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="post__content entry-content">
		<?php
		the_content( sprintf(
			wp_kses(
				/* translators: %s: Name of current post. Only visible to screen readers */
				__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', '_svbk' ),
				array(
					'span' => array(
						'class' => array(),
					),
				)
			),
			get_the_title()
		) );

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', '_svbk' ),
			'after'  => '</div>',
		) );
		?>
	</div><!-- .entry-content -->

	<footer class="post__footer entry-footer">
		<?php _svbk_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
