define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'modelbinding',
    'models/storyActivity',
    'models/storyTask',
    'collections/storyActivities',
    'views/storyActivityView',
    'text!templates/newtask.html'
], function ($, _, Backbone, handlebars, modelbinding, StoryActivity, StoryTask, StoryActivities ,StoryActivityView, htmlTpl) {

    var mod1;
    Backbone.ModelBinding = require('modelbinding');

    var NewTaskView = Backbone.View.extend({

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
            this.options.parentModel.storyTasks.add(this.model);
            this.options.parentModel.save();
            this.close();
        }

    });


    return NewTaskView;
});
