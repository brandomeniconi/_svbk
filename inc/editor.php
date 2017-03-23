<?php

function studiolegalemauro_mce_insert_formats( $init_array ) {  
    
	// Define the style_formats array
	$style_formats = array(
		// Each array child is a format with it's own settings
		array(  
			'title' => __('Dropcap', 'studiolegalemauro'),  
			'inline' => 'span',  
			'classes' => 'dropcap',
			'wrapper' => true,
		),
		array(
			'title' => __('Section', '_sbk'),
			'block' => 'section',
			'classes' => 'content-section',
			'wrapper' => true,
		),		
		array(  
			'title' => __('Collapse', 'studiolegalemauro'),
			'block' => 'div',
			'classes' => 'collapsible',
			'wrapper' => true,
		),
	
		array(  
			'title' => __('Accordion', 'studiolegalemauro'),  
			'block' => 'div',  
			'classes' => 'accordion',
			'wrapper' => true,
		),		
		array(  
			'title' => __('Subtitle', 'studiolegalemauro'),  
			'block' => 'div',  
			'classes' => 'subtitle',
			'wrapper' => true,
		),
		array(  
			'title' => __('Quote', 'studiolegalemauro'),  
			'block' => 'aside',  
			'classes' => 'callout',
			'wrapper' => true,
		),
		array(  
			'title' => __('Half size Image', 'studiolegalemauro'),  
			'inline' => 'img',  
			'classes' => 'half-size',
			'wrapper' => false,
		),		
		array(  
			'title' => __('Callout / Pull Quote', 'studiolegalemauro'),  
			'block' => 'aside',  
			'classes' => 'callout',
			'wrapper' => true,
		),		
		array(  
			'title' => __('Highlighted Paragraph', 'studiolegalemauro'),  
			'block' => 'p',  
			'classes' => 'highlighted',
			'wrapper' => false,
		),

	);
	// Insert the array, JSON ENCODED, into 'style_formats'
	$init_array['style_formats'] = json_encode( $style_formats );  
	
	return $init_array;  
  
} 
// Attach callback to 'tiny_mce_before_init' 
add_filter( 'tiny_mce_before_init', 'studiolegalemauro_mce_insert_formats' );  

// Callback function to insert 'styleselect' into the $buttons array
function studiolegalemauro_mce_buttons( $buttons ) {
	array_unshift( $buttons, 'styleselect' );
	return $buttons;
}
// Register our callback to the appropriate filter
add_filter( 'mce_buttons_2', 'studiolegalemauro_mce_buttons' );

function studiolegalemauro_custom_tinymce_buttons() {

      //Abort early if the user will never see TinyMCE
      if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
           return;

      //Add a callback to regiser our tinymce plugin   
      add_filter("mce_external_plugins", "studiolegalemauro_register_tinymce_plugins"); 

      // Add a callback to add our button to the TinyMCE toolbar
      add_filter('mce_buttons', 'studiolegalemauro_add_tinymce_button');
}

// init process for registering our button
add_action('init', 'studiolegalemauro_custom_tinymce_buttons');

//This callback registers our plug-in
function studiolegalemauro_register_tinymce_plugins($plugin_array) {
    $plugin_array['studiolegalemauro_helper_buttons'] = get_theme_file_uri('/js/tinymce.plugins.js');
    return $plugin_array;
}

//This callback adds our button to the toolbar
function studiolegalemauro_add_tinymce_button($buttons) {
            //Add the button ID to the $button array
    $buttons[] = "section_button";
    $buttons[] = "band";
    $buttons[] = "image_faq";
    $buttons[] = "page_header";
    $buttons[] = "definition";
    
    return $buttons;
}
