<?php

namespace Svbk\WP\Shortcakes;

use Svbk\WP\Helpers\Mandrill;
use Svbk\WP\Themes\LandingFactory\Shortcakes\Consulenza;

add_action( 'init', __NAMESPACE__.'\\shortcode_ui_detection' );

function shortcode_ui_detection() {
	if ( ! function_exists( 'shortcode_ui_register_for_shortcode' ) ) {
		add_action( 'admin_notices', __NAMESPACE__.'\\shortcode_ui_notices' );
	}
}

function shortcode_ui_notices() {
	if ( current_user_can( 'activate_plugins' ) ) {
		?>
		<div class="error message">
			<p><?php esc_html_e( 'Shortcode UI plugin must be active for Shortcode UI Example plugin to function.', 'studiolegalemauro' ); ?></p>
		</div>
		<?php
	}
}

Mandrill::$messageDefaults['subaccount'] = 'studiolegalemauro';

//Example
Testimonials::register([ 'attach_to' => ['page'] ]);
ResponsiveImage::register([ 'attach_to' => ['page'] ]);

SimpleBox::register([ 'attach_to' => ['page'] ]);

SimpleBox::register([ 
	'attach_to' => ['page'], 
	'shortcode_id'=>'simple-box-image', 
	'classes'=>'simple_box_image', 
	'title'=>__('Image Box', 'studiolegalemauro') 
]);

WhitepaperDl::register(
	array(
		'attach_to' => ['page'], 
		'mc_apikey'=>'87e65d0e377f4e584097a4d4a69f6172-us14', 
		'mc_list_id'=>'8776f4b5de', 
		'md_apikey' => 'yV5gWpU-hNrqMlkFt9LKaw',
		'md_template' => 'test-landing',
	)
);

Consulenza::register(
	array(
		'attach_to' => ['page'], 
		'md_apikey' => 'yV5gWpU-hNrqMlkFt9LKaw',
		'md_template' => 'test-consulenza',
	)
);

ContactForm::register(
	array(
		'attach_to' => ['page'], 
		'md_apikey' => 'yV5gWpU-hNrqMlkFt9LKaw',
		'md_template' => 'test-contact',
	)
);
