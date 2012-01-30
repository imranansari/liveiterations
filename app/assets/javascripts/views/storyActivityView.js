define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'views/newTaskView',
    'views/newActivityView',
    'models/storyTask',
    'collections/storyActivities',
    'collections/storyTasks',
    'text!templates/storyActivity.html'
], function ($, _, Backbone, handlebars, NewTaskView, NewActivityView, StoryTask, StoryActivities, StoryTasks, htmlTpl) {
    var StoryActivityView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
        //tagName:"div",

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = handlebars.compile(htmlTpl);
        },

        events:{
            "click .addUserTask":"addUserTask",
            "click .editActivity":"editActivity"
        },

        render:function () {
            var content = this.template(this.model.toJSON());
            $(this.el).html(content);

            return this;
        },

        addUserTask:function () {
            console.log(JSON.stringify(this.model));
            //this.model.set({name: "ya hala"});

            //var storyTasks = new StoryTasks();
            //storyTasks.add(this.model.storyTasks);
            //var storyTaskModel = new StoryTask({name:'taask 123'});
            //storyTasks.add(storyTaskModel);

            /*            this.model.storyTasks.add({name:'taask 123'});

             console.log(StoryActivities.toJSON());*/

            var storyTask = new StoryTask();
            var newTaskView = new NewTaskView({model:storyTask, parentModel:this.model});
            newTaskView.render();
        },

        editActivity:function () {
            console.log(this.model.id);
            var newActivityView = new NewActivityView({model:this.model, viewToRemove:this, mode:'edit'});
            newActivityView.render();
        }

    });
    return StoryActivityView;
});
