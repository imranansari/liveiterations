define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/storyTask.html',
    'views/newTaskView'
], function ($, _, Backbone, handlebars, htmlTpl, NewTaskView) {
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
            var editTaskView = new NewTaskView({model:this.model});
            editTaskView.render();
        }
    });
    return StoryTaskView;
});
