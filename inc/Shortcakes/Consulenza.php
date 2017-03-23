<?php

namespace Svbk\WP\Themes\LandingFactory\Shortcakes;

use Svbk\WP\Shortcakes\Form;

class Consulenza extends Form {
    
    public $defaults = array(
		'title' => '',
		'hidden' => false,
		'privacy_link' => '',
		'open_button_label' => 'Open',
		'submit_button_label' => 'Submit',
    );
    
    public $md_apikey = '';
    public $md_template = '';
    public $messageDefaults;

    public $shortcode_id = 'consulenza';
    public $field_prefix = 'csl';
    public $action = 'consulenza';
    public $formClass = 'Svbk\WP\Themes\LandingFactory\Forms\Consulenza';

    public static function register($options=array()){
        
        $instance = parent::register($options);
        
        $instance->setRenderPosition(array('netiquette'), 13);
        
        return $instance;
    }

    public function title(){
        return __('Consulenza', 'svbk-shortcakes');
    }
    
    protected function getForm($set_send_params=false){
        
        $form = parent::getForm($set_send_params);
        
        if($set_send_params) {
            
            $form->md_apikey = $this->md_apikey;
            $form->templateName = $this->md_template;
            
            if(!empty( $this->messageDefaults ) ){
                $form->messageDefaults = array_merge(
                    $form->messageDefaults,
                    $this->messageDefaults
                );
            }
            
        }
        
        return $form;
    }
    
    public function renderOutput($attr, $content, $shortcode_tag){
        
        $output = parent::renderOutput($attr, $content, $shortcode_tag);
        
        if($content){
            $output['netiquette'] = '<span class="netiquette">'.$content.'</span>';
        }
        
        return $output;
    }

    
}
