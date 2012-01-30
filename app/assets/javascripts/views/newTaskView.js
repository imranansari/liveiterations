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
    'views/storyActivitiesView',
    'text!templates/newtask.html'
], function ($, _, Backbone, handlebars, modelbinding, StoryActivity, StoryTask, StoryActivities, StoryActivityView, StoryActivitiesView, htmlTpl) {

    var mod1;
    Backbone.ModelBinding = require('modelbinding');

    var NewTaskView = Backbone.View.extend({

        initialize:function (options) {
            this.template = Handlebars.compile(htmlTpl);
        },
        render:function () {
            var content = this.template({editable:(this.options.mode == 'edit')});
            $(this.el).html(content);
            mod1 = $(this.el).modal('show');
            Backbone.ModelBinding.bind(this);
            return this;
        },

        events:{
            "click .close":"close",
            "click #saveTask":"save",
            "click #deleteTask":"deleteTask"

        },

        close:function () {
            mod1.modal('hide');
        },

        save:function () {
            console.log(JSON.stringify(this.model));

            if (this.options.mode != 'edit') {
                this.options.parentModel.storyTasks.add(this.model);
                this.options.parentModel.set({updated_at:new Date()});
                this.options.parentModel.save();
            } else {
                this.model.save();
            }

            this.close();
        },

        deleteTask:function () {
            this.options.viewToRemove.remove();
            this.model.destroy();
            //var colll1 = this.model.collection;
            //colll1.remove(this.model);
            //StoryActivities.get();
            window.location.reload();



/*            var storyActivitiesView = new StoryActivitiesView({ collection:StoryActivities });

                var data = getActivitiesFromService($);

                StoryActivities.add(data);

                $('#storyActivitiesList').html(storyActivitiesView.render().el);*/

            this.close();
        }

    });


    window.NewTaskView = NewTaskView;
    return NewTaskView;
});
