$(document).ready(function() {

    $("#send").on('click', function() {

        var message = $("#message").val();
        console.log(message);
        
        if(validateMessage(message)) {

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
    });

    $("#add-new-contact").on('click', function() {

        var name = $("#name").val();
        var email = $("#email").val();
        var number = $("#number").val();

        console.log(name);
        console.log(email);
        console.log(number);
        console.log(validateContact(name, email, number));

        if(validateContact(name, email, number)) {

            $('#error-msg-contact').hide();
            $('.card_add_contacts').hide();
            $('.contacts_container').show();

            var html = 
                `<div class="d-flex justify-content">
                <i class="fa fa-user mt-1" aria-hidden="true"></i>
                <div class="container-fluid">${name}<span class="status-online">Online</span>
                </div>
            </div>`

            $("#contacts_main_container").append(html);

            $("#name").val("");
            $("#email").val("");
            $("#number").val("");
        }

        else $('#error-msg-contact').show();
       
    });

    function validateMessage(message) {

        if (message == "")
            return false;
        else
            return true;
    }

    function validateContact(name, email, number) {
        
        if(name === "" || email === "" || number === ""){
            return false;
        }

        else return true;
    }
});