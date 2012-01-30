define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'views/newTaskView',
    'views/newActivityView',
    'models/storyTask',
    'text!templates/storyActivity.html'
], function ($, _, Backbone, handlebars, NewTaskView, NewActivityView, StoryTask, htmlTpl) {
    var StoryActivityView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
        //tagName:"div",

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = Handlebars.compile(htmlTpl);
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
    window.StoryActivityView = StoryActivityView;
    return StoryActivityView;
});
