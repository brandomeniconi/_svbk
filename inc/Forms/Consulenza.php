<?php

namespace Svbk\WP\Themes\LandingFactory\Forms;

use \Svbk\WP\Helpers\Form\Contact;

class Consulenza extends Contact {
    
    public function setInputFields($fields=array()){
        
        parent::setInputFields();
        
        $this->insertInputField('phone', array( 
            'required' => true,
            'label' => __('Phone', 'svbk-shortcakes'), 
            'filter' => FILTER_SANITIZE_SPECIAL_CHARS,
            'error' => __('Please enter your phone number', 'svbk-shortcakes')                
        ), 'email');
        
        $this->insertInputField('time', array( 
            'required' => false,
            'label' => __('Contact time', 'svbk-shortcakes'), 
            'filter' => FILTER_SANITIZE_SPECIAL_CHARS,
            'error' => __('Please enter your contact hours', 'svbk-shortcakes')                
        ), 'email');            
        
        $this->inputFields['request']['label'] = __('Do you want to specify something more?', 'landingfactory' );
        
        unset($this->inputFields['subject']);
    }
    
    protected function messageParams(){
            
        $messageParams = parent::messageParams();
        
        unset($messageParams['subject']);
        
        return $messageParams;
               
    }      
   
}