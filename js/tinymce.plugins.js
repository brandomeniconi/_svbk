jQuery(document).ready(function($) {

    tinymce.create('tinymce.plugins.studiolegalemauro_helper_buttons', {
        init : function(ed, url) {
                // Register command for when button is clicked
                ed.addCommand('insert_section_template', function() {
                    var content, selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        //If text is selected when button is clicked
                        //Wrap shortcode around it.
                        content =  '<section class="content-section"><header><h2>Title</h2><p class="subtitle">Subtitle</p></header><p>'+selected+'</p></section><br/>';
                    }else{
                        content =  '<section class="content-section"><header><h2>Title</h2><p class="subtitle">Subtitle</p></header><p>Content</p></section><br/>';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });
                ;             
                
                
                ed.addCommand('insert_definition', function() {
                    var content, selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        content =  '<div class="definition">'+selected+'<span class="definition-text">Insert text here</span></div>';
                    }else{
                        content =  '<div class="definition">Content<span class="definition-text">Insert text here</span></div>';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });    
                
                ed.addCommand('insert_band', function() {
                    var content, selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        content =  '<div class="band">'+selected+'</div>';
                    }else{
                        content =  '<div class="band">Content</div>';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });   
                
                ed.addCommand('insert_image_faq', function() {
                    var content, selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        content =  '<div class="image-faq"><img class="image" src="http://placehold.it/350x300" /><div class="content"><q>Domanda</q><h3>Title</h3>'+selected+'</div></div>';
                    } else {
                        content =  '<div class="image-faq"><img class="image" src="http://placehold.it/350x300" /><div class="content"><q>Domanda</q><h3>Title</h3>Content</div></div>';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });                   

                ed.addCommand('insert_image_section', function() {
                    var content = '<section class="image-section">\n'
                            +'<figure class="main-image">\n'
                                +'<img src="http://placehold.it/350x300" />\n'
                                +'<figcaption>[Insert Image Caption Here]</figcaption>\n'
                            +'</figure>\n'                       
                            +'<div class="content">\n'
                                +'<header>\n'
                                    +'<p class="pretitle">[Insert Text Before Title]</p>\n'
                                    +'<h1 class="section-title">[Insert Answer Here]</h1>\n'
                                    +'<p class="subtitle">[Insert Subtitle Here]</p>\n'
                                +'</header>\n'
                                +'[Insert Content Here]\n'
                            +'</div>\n'
                        '</section>';
                    tinymce.execCommand('mceInsertContent', false, content);
                });                   


            // Register buttons - trigger above command when clicked
            ed.addButton('section_button', {title : 'Section', cmd : 'insert_section_template', image: url.replace('js', 'icons') + '/tinymce/section.png' });
            ed.addButton('definition', {title : 'Definizione', cmd : 'insert_definition', image: url.replace('js', 'icons') + '/tinymce/anchors-index.png' });            
            ed.addButton('band', {title : 'Banda', cmd : 'insert_band', image: url.replace('js', 'icons') + '/tinymce/insert-band.png' });            
            ed.addButton('image_faq', {title : 'Sottosezione con Immagine', cmd : 'insert_image_faq', image: url.replace('js', 'icons') + '/tinymce/insert-image-faq.png' });            
            ed.addButton('image_section', {title : 'Image Section', cmd : 'insert_image_section', image: url.replace('js', 'icons') + '/tinymce/insert-image_section.png' });            
        },   
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('studiolegalemauro_helper_buttons', tinymce.plugins.studiolegalemauro_helper_buttons);
});