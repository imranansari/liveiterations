define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'modelbinding',
    'text!templates/project.html'
], function ($, _, Backbone, handlebars, modelbinding, htmlTpl) {

    Backbone.ModelBinding = require('modelbinding');

    var ProjectView = Backbone.View.extend({

        initialize:function (options) {
            this.template = Handlebars.compile(htmlTpl);
            _.bindAll(this, 'render', 'remove');
            this.model.bind('change', this.render);
            this.model.bind('destroy', this.remove);
        },
        render:function () {
            var content = this.template(this.model.toJSON());

            $(this.el).html(content);
            return this;
        },

        remove:function () {
            $(this.el).remove();
        },

        events:{
            "click #updateMessage":"update"
        },


        update:function () {
            console.log(this.model.toJSON());
            this.model.save();
        }


    });

    return ProjectView;
});