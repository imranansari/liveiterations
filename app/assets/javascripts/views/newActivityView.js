define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'modelbinding',
    'models/storyActivity',
    'collections/storyActivities',
    'views/storyActivityView',
    'text!templates/newactivity.html'
], function ($, _, Backbone, handlebars, modelbinding, StoryActivity, StoryActivities ,StoryActivityView, htmlTpl) {

    var mod1;
    Backbone.ModelBinding = require('modelbinding');

    var NewActivityView = Backbone.View.extend({

        initialize:function (options) {

        },
        render:function () {
            $(this.el).html(htmlTpl);
            mod1 = $(this.el).modal('show');
            Backbone.ModelBinding.bind(this);
            return this;
        },

        events:{
            "click .close":"close",
            "click #saveActivity":"save"

        },

        close:function () {
            mod1.modal('hide');
        },

        save:function () {
            console.log(JSON.stringify(this.model));
            StoryActivities.add([this.model]);
            this.close();
        }

    });


    return NewActivityView;
});