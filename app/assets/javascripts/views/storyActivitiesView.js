define([
    'jquery',
    'livequery',
    'underscore',
    'backbone',
    'views/storyActivityView',
    'views/storyTasksView',
    'models/storyTask',
    'collections/storyTasks'
], function ($, livequery, _, Backbone, StoryActivityView, StoryTasksView, StoryTask, StoryTasks) {
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

                var storyTasks = new StoryTasks();

                var storyTasksView = new StoryTasksView({ collection:storyTasks });
                //storyTasks.add(new StoryTask({name:'tasks 1234'}));

                var storyTasksArr = model.get('storyTasks');

                if (storyTasksArr != undefined) {
                    storyTasks.add(storyTasksArr);
                }
                console.log(storyTasksView.render().el);

                $("#" + model.id).livequery(function () {
                    $("#" + model.id).expire();
                    $("#" + model.id).append(storyTasksView.render().el);
                });

            }, this);

            this.collection.bind("change", function (model) {
                console.log('collection change');

                var storyTasks = new StoryTasks();

                var storyTasksView = new StoryTasksView({ collection:storyTasks });
                //storyTasks.add(new StoryTask({name:'tasks 1234'}));

                var storyTasksArr = model.get('storyTasks');

                if (storyTasksArr != undefined) {
                    storyTasks.add(storyTasksArr);
                }

                $("#" + model.id).append(storyTasksView.render().el);

            }, this);
        },
        render:function () {
            console.log('rendering activities view');
            return this;
        }
    });

    return StoryActivitiesView;
});
