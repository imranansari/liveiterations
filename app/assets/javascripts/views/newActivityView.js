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
    'text!templates/newactivity.html'
], function ($, _, Backbone, handlebars, modelbinding, StoryActivity, StoryTask, StoryActivities ,StoryActivityView, htmlTpl) {

    var mod1;
    Backbone.ModelBinding = require('modelbinding');

    var NewActivityView = Backbone.View.extend({

        initialize:function (options) {
            this.template = Handlebars.compile(htmlTpl);
        },
        render:function () {
            var content = this.template({editable: (this.options.mode == 'edit')});
            $(this.el).html(content);
            mod1 = $(this.el).modal('show');
            Backbone.ModelBinding.bind(this);
            return this;
        },

        events:{
            "click .close":"close",
            "click #saveActivity":"save",
            "click #deleteActivity":"deleteActivity"

        },

        close:function () {
            mod1.modal('hide');
        },

        save:function () {
            //console.log(JSON.stringify(this.model));

            if (this.options.mode != 'edit') {
                StoryActivities.add([this.model]);
            }

            this.model.save();
            this.close();
        },

        deleteActivity:function(){
            this.options.viewToRemove.remove();
            this.model.destroy();
            StoryActivities.remove(this.model);
            this.close();
        }

    });


    return NewActivityView;
});
