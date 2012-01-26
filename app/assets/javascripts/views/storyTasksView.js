define([
    'jquery',
    'underscore',
    'backbone',
    'views/storyTaskView'
], function ($, _, Backbone, StoryTaskView) {
    var StoryTasksView = Backbone.View.extend({
        tagName:"div",
        initialize:function (options) {
            // Bind on initialization rather than rendering. This might seem
            // counter-intuitive because we are effectively "rendering" this
            // view by creating other views. The reason we are doing this here
            // is because we only want to bind to "add" once, but effectively we should
            // be able to call render multiple times without subscribing to "add" more
            // than once.
            this.collection.bind("add", function (model) {
                var storyTaskView = new StoryTaskView({
                    model:model
                });

                $(this.el).append(storyTaskView.render().el);

            }, this);
        },
        render:function () {
            return this;
        }
    });

    return StoryTasksView;
});
