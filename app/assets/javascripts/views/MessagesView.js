define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'modelbinding',
    'text!templates/newmessage.html',
    'models/message'
], function ($, _, Backbone, handlebars, modelbinding, htmlTpl, Message) {

    Backbone.ModelBinding = require('modelbinding');

    var NewMessageView = Backbone.View.extend({
        el: "#newMessage",

        initialize:function (options) {
            this.template = Handlebars.compile(htmlTpl);
            this.model = new Message();
        },
        render:function () {
            var content = this.template();
            $(this.el).html(content);
            Backbone.ModelBinding.bind(this);
            return this;
        },

        events:{
            "click #updateMessage":"update"
        },


        update:function () {
            console.log(this.model.toJSON());
            this.model.save();
        }


    });

    return NewMessageView;
});
