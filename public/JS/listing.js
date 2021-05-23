$(document).ready(function() {

    $("#edit-info").on('click', function () {

        $(".edit-container").show();
        $(".page-darken").show(); 
        $("#iName").val("");
        $("#iDescription").val("");
    });

    $("#exit-edit").on('click', function () {

        $(".edit-container").hide();
        $(".page-darken").hide(); 
        $("#edit-error-msg").hide();
    });

    function validateEdit(name, description, files) {
        
        if(name !== "" || description !== "" || files.length!==0){
            return true;
        }

        else return false;
    }
    function readFile(file, cb) {
        let myReader = new FileReader();
        myReader.onloadend = function (e) {
            cb(myReader.result);
        };
        myReader.readAsDataURL(file);
    };

    $("#confirm-edit").on('click', function () {

        var name = $("#iName").val();
        var description = $("#iDescription").val();
        var parser = document.createElement("a");
        var url = $(location).attr('href');
        parser.href = url;
        var listing_id = parser.pathname.split("/listing/")[1];
        // alert(listing_id)
        
        
        var files = document.getElementById("itemPic").files;
        var file = files[0];

        if (validateEdit(name, description, files)) {

            $(".edit-container").hide();
            $(".page-darken").hide(); 
            if(files.length===0){
                jQuery.post('/listing/editListing',{name : name, description : description, listing_id : listing_id},function(){
                    $('body').load('');
                })
            }else{
                readFile(file,(b64)=>{
                    jQuery.post('/listing/editListing',{name : name, description : description, listing_id : listing_id, image : b64},function(){
                        $('body').load('');
                    })
                })
            }
           
        }

        else $("#edit-error-msg").show();
    });

    $("#del-listing").on('click', function () {

        $(".delete-container").show();
        $(".page-darken").show(); 
    });

    $("#cancel-delete").on('click', function () {
        
        $(".page-darken").hide();
        $(".delete-container").hide();

    });

    $("#confirm-delete").on('click', function () {
        
        $(".page-darken").hide();
        $(".delete-container").hide();

        //TO BE ADDED ONCE DATABASE BECOMES AVAILABLE
        //Delete account code

    });
});