require(["order!jquery",
    "order!handlebars",
    "order!backbone",
    "order!modelbinding"], function () {

});

define(['underscore', 'backbone'], function (_, Backbone) {

    $(document).ready(function () {


        function nestCollection(model, attributeName, nestedCollection) {
            //setup nested references
            for (var i = 0; i < nestedCollection.length; i++) {
                model.attributes[attributeName][i] = nestedCollection.at(i).attributes;
            }
            //create empty arrays if none

            nestedCollection.bind('add', function (initiative) {
                if (!model.get(attributeName)) {
                    model.attributes[attributeName] = [];
                }
                model.get(attributeName).push(initiative.attributes);
            });

            nestedCollection.bind('remove', function (initiative) {
                var updateObj = {};
                updateObj[attributeName] = _.without(model.get(attributeName), initiative.attributes);
                model.set(updateObj);
            });
            return nestedCollection;
        }

        var Templates = {};
        var Views = {};

        Templates.MailBox = _.template(
            "<h2>My Inbox</h2>"
        );

        Templates.Message = _.template(
            "<div class='title'><%= messageTitle %></div>"
        );

        Views.Message = Backbone.View.extend({
            template:Templates.Message,
            initialize:function (options) {
                _.bindAll(this, 'render', 'remove');
                this.model.bind('change', this.render);
                this.model.bind('destroy', this.remove);
            },
            render:function () {
                console.log(this.template(this.model.toJSON()));
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            },
            remove:function () {
                $(this.el).remove();
            }
        });


        Views.MyInboxView = Backbone.View.extend({
            template:Templates.MailBox,
            initialize:function (options) {
                _.bindAll(this, 'render', 'addAll', 'addOne');
                this.collection.bind('add', this.addOne);
            },
            render:function () {
                $(this.el).html(this.template());
                this.addAll();
                return this;
            },
            addAll:function () {
                this.collection.each(this.addOne);
            },
            addOne:function (model) {
                view = new Views.Message({model:model});
                view.render();
                $(this.el).append(view.el);
                model.bind('remove', view.remove);
            }
        });

        var Messages = Backbone.Collection.extend({
            model:window.Message,

            url:'/message'

        });

        window.Message = Backbone.Model.extend({


        });

        /*        var Mailbox = Backbone.Model.extend({

         initialize:function () {
         this.messages = nestCollection(this, 'messages', new Messages(this.get('messages')));
         }
         });*/

        /*        var myBox = new Mailbox;
         myBox.set({mailBoxName:'Imrans Mail'});*/

        window.myMessages = new Messages();
        myMessages.add(new Message({messageTitle:'Hello1'}));
        myMessages.add(new Message({messageTitle:'Hello2'}));
        myMessages.add(new Message({messageTitle:'Hello3'}));

        var m1 = myMessages.at(1);
        m1.set({messageTitle:'changed 1'});

        /*myBox.set({messages:myMessages});*/

        //console.log(myBox.toJSON());

        new Views.MyInboxView({
            collection:myMessages, el:$('#myInbox')
        }).render();


    });

});

