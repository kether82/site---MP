$(document).ready(function() {

    $("#rate-acc").on('click', function () {

        $(".rate-container").show();
        $(".page-darken").show(); 
    });
    
    
    $("#rating").change(function () {

        //gets the value of the button
        var rating = $('#rating').find(":selected").text();
        console.log(rating);
        $(".rate-container").hide();
        $(".page-darken").hide();
    });

    $("#cancel-rate").on('click', function () {

        $(".rate-container").hide();
        $(".page-darken").hide();
    });

    $("#add-list").on('click', function() {

        $("#add-error-msg").hide();
        $(".addlist-container").show();
        $(".page-darken").show(); 
    });

    $("#cancel-addlist").on('click', function() {

        $(".addlist-container").hide();
        $(".page-darken").hide(); 
    });

    $("#confirm-addlist").on('click', function() {
        var name = $("#itemName").val();
        var description = $("#itemDesc").val();
        //get image
        //write image to path
        // var pic = document.querySelector('#itemPic');
        // console.log(pic);
        // const file = pic.files[0];
        // const picURI = URL.createObjectURL(file);
        // console.log(picURI);

        let files = document.getElementById("itemPic").files;
        let file = files[0];
        
            if(validateAddList(name, description,files)) {
                readFile(file,(b64)=>{
                    $("#add-error-msg").hide();
                    $(".addlist-container").hide();
                    $(".page-darken").hide(); 
                    // console.log(picURI);
                    // CODE ADD CONTENTS OF ADD LIST DB
                    jQuery.post("/profile/addListing",{name : name, description : description, pic: b64},function(val){
                        // console.log(val.listing_id);
                        // window.location.replace("/listing/"+val.listing_id);
                        $('body').load('');
                    });
                })
            }
    
            else $("#add-error-msg").show();
    
        
        
    });

    function validateAddList(name, description, files) {

        if(name === "" || description === "" || files.length===0){
            return false;
        }

        else return true;
    }
    function readFile(file, cb) {
        let myReader = new FileReader();
        myReader.onloadend = function (e) {
            cb(myReader.result);
        };
        myReader.readAsDataURL(file);
    };
    //EDIT ACCOUNT TO BE IMPROVED WHEN DATABASE IS AVAILABLE
    $("#edit-info").on('click', function () {
        
        $(".page-darken").show();
        $(".edit-container").show();

    });

    $("#exit-edit").on('click', function () {

        $(".edit-container").hide();
        $(".page-darken").hide();
        $("#edit-error-msg").hide();
    });

    $("#confirm-edit").on('click', function () {


        var name = $("#userName").val();
        var number = $("#number").val();
        var description = $("#description").val();
        let files = document.getElementById("userPic").files;
        let file = files[0];
        // console.log(validateEdit(name, number, description, files));

        if(validateEdit(name, number, description, files)) {
            //change values
            $("#error-msg").hide();
            $(".page-darken").hide();
            $(".edit-container").hide();

            $("#add-error-msg").hide();
            $(".addlist-container").hide();
            $(".page-darken").hide(); 
            if(files.length===0){
                    
                    console.log(name);
                    console.log(number);
                    console.log(description);
                    // console.log(picURI);
                    // CODE ADD CONTENTS OF ADD LIST DB
                    jQuery.post("/profile/editProfile",{name : name, number : number, description : description, pic: ""},function(val){
                        // console.log(val.listing_id);
                        // window.location.replace("/listing/"+val.listing_id);
                        $('body').load('');
                    });
            }else{
                readFile(file,(b64)=>{
                    console.log(b64);
                    console.log(name);
                    console.log(number);
                    console.log(description);
                    // console.log(picURI);
                    // CODE ADD CONTENTS OF ADD LIST DB
                    jQuery.post("/profile/editProfile",{name : name, number : number, description : description, pic: b64},function(val){
                        // console.log(val.listing_id);
                        // window.location.replace("/listing/"+val.listing_id);
                        $('body').load('');
                    });
                })
            }
            
        }

        else {
            $("#edit-error-msg").show();
        }
    });

    $("#del-acc").on('click', function () {

        $(".page-darken").show();
        $(".delete-container").show();

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

    function validateEdit(name, number, description, files) {
        
        if(name === "" && description === "" && number === "" && files.length===0){
            return false;
        }

        else return false;
    }
});