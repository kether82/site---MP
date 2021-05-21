$(document).ready(function() {

    $("#send").on('click', function() {

        var message = $("#message").val();
        console.log(message);
        
        if(validateField(message)) {

            var html = 
                `<div class="d-flex justify-content-end mb-3">
                     <div class="msg_container_you">
                          ${message}
                    </div>
                    <i class="fa fa-user mt-3" aria-hidden="true"></i>
                 </div>`;

            //console.log(html);

            $("#chat-box").append(html);

            $("#message").val("");
        }
    });

    $("#add-contact").on('click', function() {

        $('.contacts_container').hide();
        $('.card_add_contacts').show();  
    });

    $("#exit-add-contact").on('click', function() {

        $('.card_add_contacts').hide();
        $('.contacts_container').show();
    })

    function validateField(content) {

        if (content == "")
            return false;
        else
            return true;
    }
});