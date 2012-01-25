define([
    'jquery',
    'livequery',
    'underscore',
    'backbone',
    'handlebars',
    'views/storyActivityView',
    'views/storyTaskView',
    'models/storyTask',
    'text!templates/storyActivity.html'
], function ($, livequery, _, Backbone, handlebars, StoryActivityView, StoryTaskView, StoryTask, htmlTpl) {
    var StoryActivitiesView = Backbone.View.extend({
        tagName:"div",
        initialize:function (options) {
            // Bind on initialization rather than rendering. This might seem
            // counter-intuitive because we are effectively "rendering" this
            // view by creating other views. The reason we are doing this here
            // is because we only want to bind to "add" once, but effectively we should
            // be able to call render multiple times without subscribing to "add" more
            // than once.
            this.collection.bind("add", function (model) {
                var storyActivityView = new StoryActivityView({
                    model:model
                });

                $(this.el).append(storyActivityView.render().el);

                var storyTasksArr = model.get('storyTasks');

                if (storyTasksArr != undefined) {

                    $(storyTasksArr).each(function () {
                        console.log(this);

                        var storyTaskView = new StoryTaskView({
                            model:new StoryTask(this)
                        });

                        $("#" + model.id).livequery(function () {
                            $("#" + model.id).append(storyTaskView.render().el);
                        });
                    });

                }

            }, this);
        },
        render:function () {
            return this;
        }
    });

    return StoryActivitiesView;
});
