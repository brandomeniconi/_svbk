(function($){

    $('.testimonials').on('click', '.loadmore', function(){
      
        var container = $(this).closest('.testimonials');
        var data = container.data();
        
        data.paged++; 
        data.action = 'testimonials';
        
        container.addClass('loading');
        
        $.post( ajaxurl, data, function(response){
        
            $('.loadmore', container).remove();
            
            container
                .append(response)
                .data(data)
                .removeClass('loading');
        });
    });

    var smoothScroll = function(){
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
    };
    
    $(document).ready( smoothScroll );
    $(document.body).on( 'post-load', smoothScroll );

    $('.search-toggle').click(function(e){
        $('.search-form').toggleClass('visible');
        e.preventDefault();
    });
  
    $('.svbk-form').on('submit.svbk', function(e){
     
        var $form = $(this);    
        var data = $form.serialize();
        var $messages = $('.messages', $form);
        
        //reset
        $('.field-group', $form).removeClass('error');
        $('.field-group .field-errors', $form).text('');
        $form.removeClass('response-success response-error');
        $messages.empty();        
        
        $form.addClass('loading');
        
        $.ajax( 
        {
            dataType: "json",
            url: $(this).attr('action'),
            type: "POST",
            data: data,
            success: function(response){
                e.preventDefault();
                
                $form.addClass('response-' + response.status);
                
                if(response.status === 'error'){
                    
                    for(var field in response.errors){
                     
                        if(!$.isNumeric(field)){
                            $('.' + response.prefix + '-' + field + '-group', $form).addClass('error');
                            $('.' + response.prefix + '-' + field + '-group .field-errors', $form).text(response.errors[field]);
                        } else {
                            $messages.append('<li class="error">' + response.errors[field] + '</li>');
                        }
                     
                    }
                    
                } else {
                    $messages.append('<li class="success">' + response.message + '</li>');
                }
            }
        }
        );
        
        e.preventDefault();
    });  
    
    $('.policy-flags-open').on('click', function(e){
        e.preventDefault();
        $( $(this).attr('href') ).slideToggle();
    });
    
    
    $('.policy-flags-all input').on('change', function(e){
        
        var group = $(this).closest('.policy-agreements').find('.policy-flags input');
        
        if( $(this).is(':checked') ){
            group.prop('checked', true);
        } else {
            group.prop('checked', false);   
        }
        
    });    
    
    $('.svbk-show-content').on('click', function(e){
        e.preventDefault();
        
        $( $(this).attr('href') ).addClass('open');
    }); 
    
    $('.svbk-hide-content').on('click', function(e){
        e.preventDefault();
        
        $( $(this).attr('href') ).removeClass('open');
    });     
    
    
})(jQuery)
