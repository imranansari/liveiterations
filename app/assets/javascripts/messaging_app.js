require(["order!jquery",
    "order!handlebars",
    "order!backbone",
    "order!modelbinding"
], function () {

});

define(['underscore', 'backbone', 'views/newMessageView', 'views/messagesView', 'collections/messages', 'models/message', 'text!templates/menu.html'],
    function (_, Backbone, NewMessageView, MessagesView, Messages, Message, menuHtml) {

        $(document).ready(function () {

            //$("#topmenu").html(menuHtml);

            var newMessageView = new NewMessageView();
            newMessageView.render();


            /*        //var messages = new Messages();
             Messages.add(new Message({desc:'Hello1'}));
             Messages.add(new Message({desc:'Hello2'}));

             var messagesView = new MessagesView({collection:Messages, el:$('#messages')});
             messagesView.render();*/

            Messages.fetch({
                success:function (Messages) {
                    var messagesView = new MessagesView({collection:Messages, el:$('#messages')});
                    messagesView.render();
                }
            });

            // var messagesView = new MessagesView({collection:Messages});

            /*        var updateMessages = function() {
             $('#messages').html("");
             Messages.fetch({
             success: function(Messages) {
             var messagesView = new MessagesView({collection:Messages, el:$('#messages')});
             messagesView.render();
             }
             });
             setTimeout(updateMessages, 5000);
             };
             updateMessages();*/


        });

    });

