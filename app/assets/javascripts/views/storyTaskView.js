define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'views/newTaskView',
    'text!templates/storyTask.html'
], function ($, _, Backbone, handlebars,NewTaskView, htmlTpl) {
    var StoryTaskView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
        //tagName:"div",

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = Handlebars.compile(htmlTpl);
        },

        events:{
            "click .editTask":"editTask"
        },

        render:function () {
            var content = this.template(this.model.toJSON());
            $(this.el).html(content);
            return this;
        },

        editTask:function () {
            console.log(this.model.id);
            //console.log("def od new task1 "+NewTaskView);
            var editTaskView = new window.NewTaskView({model:this.model, viewToRemove:this, mode:'edit'});
            editTaskView.render();
        }
    });
    return StoryTaskView;
});
