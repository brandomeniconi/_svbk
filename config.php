<?php
# SilverbackStudio Theme Config File
# Version: 1.2

return array(
    'version' =>'1.2',
    'textdomain' => 'studiolegalemauro',
    'contact'=> [
        'company_name' => 'Avv. Giuseppe Mauro',
        'address' => 'Via Angelo Emo n°106',
        'cap' => '00136',
        'city' => 'Roma&nbsp;(RM)',
        'phone' => '(+39)&nbsp;06&nbsp;60657026',
        'fax' => '(+39)&nbsp;06&nbsp;68806878',
        'email' => 'g.mauro@studiolegalemauro.net',
        'pec' => 'giuseppemauro@ordineavvocatiroma.org',
        'vat' => '02766360784',
    ],

    'contact_pisa' => [
        'company_name' => 'Avv. Ferdinando Mauro',
        'address' => 'Via Renato Fucini n°49',
        'cap' => '56127',
        'city' => 'Pisa&nbsp;(PI)',
        'phone' => '(+39)&nbsp;050&nbsp;5202388',
        'fax' => '(+39)&nbsp;06&nbsp;68806878',
        'email' => 'f.mauro@studiolegalemauro.net',
        'pec' => 'ferdinandomauro@ordineavvocatiroma.org',
        'vat' => '03197530789',    
    ],

    'google-fonts' => [
        'fonts' => 'Open+Sans:400,700',
    ],

    'google-tag-manager' => [
        'id' => 'GTM-NHSM8RS',
    ],

    'googlemaps' => [
        'key' => 'AIzaSyA1sdx1TJQ2pI8caA8wzn0kvDTDecbXyGA',
        'callback' => 'initGMaps',
        'libraries' => 'places',
        'mapOptions' => [ 
         'zoom' => '14',
//         'styles' => ''
        ],
        'markerOptions' => [
         'icon' => get_stylesheet_directory_uri().'/media/pin.png',
        ]    
    ],

    'icons' => [
        'path' => 'icons/style.css',
    ],

    'fonts_com' => [
        'api_key' => '2ee806bc-a6f2-494a-8889-8c66239f3dad',
    ],

    'iubenda' => [
        'siteId' => '732770',
        'cookiePolicyId' => '8039003',
        'privacyPolicyId' => '8039003',
        'banner' => [
            'slideDown'=> false,
	        'applyStyles' => false,
	        //'content'=> ''
	    ]
    ]

    # generate access token @ https://www.maestrooo.com/instagram || http://instagram.pixelunion.net/
    # lookup instagram id @ http://jelled.com/instagram/lookup-user-id

    // 'instagram' => [
    //     'get' => 'user',
    //     'userId' => '',
    //     'limit' => 6,
    //     'accessToken' => '',
    // ]
);
