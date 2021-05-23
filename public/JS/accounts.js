$(document).ready(function () {
    $('#search').click(function () {
        // your code here
        let name = $('#searchBar').val().toLowerCase();
        // console.log(name);


        if (name === "") {
            $('#error').text("Enter listing name on search bar");
        } else {
            $('#error').text(' ');
            $(".card").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(name) > -1)
            });
            // $('.card').show();
            // $('.card').find(".card-title:not(:contains(" + name + "))").parent().parent().css('display','none');

            // $.get('/listings/find', details, (data, status) => {
            //     // console.log(status);
            //     console.log("data : " + data);
            //     if (status == 'success') {
            //         $('#name').val('');
            //         $('#searchBar').val('');

            //         // $('body').load('/listings');

            //     }
            // })

        }
    });
});
