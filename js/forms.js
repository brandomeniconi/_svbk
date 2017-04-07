(function($){

    $('.svbk-form').on('submit.svbk', function(e){

        var $form = $(this);
        var data = $form.serialize();
        var $messages = $('.messages', $form);
        var formTitle = $form.find('.form-title').text();

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

                        dataLayer.push({'event': 'formEvent',  'formEvent': 'errorField', 'formTitle': formTitle, 'errorField': field, 'errorDescription': response.errors[field] });
                    }

                } else {
                    $messages.append('<li class="success">' + response.message + '</li>');
                    $form.trigger("reset");
                    dataLayer.push({'event': 'formEvent',  'formEvent': 'success', 'formTitle': formTitle});
                }
            },
            error: function(response){
                e.preventDefault();

                $form.addClass('response-error');
                $messages.append('<li class="error">Request Error</li>');
                dataLayer.push({'event': 'formEvent',  'formEvent': 'requestError', 'formTitle': formTitle});
            }
        }
        );

        dataLayer.push({'event': 'formEvent',  'formEvent': 'submit', 'formTitle': formTitle});

        e.preventDefault();
    });

    $('.policy-flags-open').on('click', function(e){
        dataLayer.push({'event': 'formEvent',  'formEvent': 'policyOpen'});
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
    
})(jQuery);
