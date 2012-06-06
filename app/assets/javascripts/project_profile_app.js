require(["order!jquery",
    "order!handlebars",
    "order!backbone",
    "order!shorten"
], function () {

});

define(['jquery', 'underscore', 'backbone', 'shorten'],
    function (jquery, _, Backbone, shorten) {

        $(document).ready(function () {

            //alert('a');
            var projectDescHeight = $(".project_desc").css('height');
            console.log(projectDescHeight);
            $(".project_desc").css('height', '300px');


            $(document).click(function () {
                $(".project_desc").animate({
                    'height':projectDescHeight});
            });
        });

    });

