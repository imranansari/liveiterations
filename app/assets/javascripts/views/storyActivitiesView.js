define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'views/storyActivityView',
    'text!templates/storyActivity.html'
], function ($, _, Backbone, handlebars, StoryActivityView, htmlTpl) {
    var StoryActivitiesView = Backbone.View.extend({
        tagName:"ul",
        className:"storyActivities",
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

                $(this.el).prepend(storyActivityView.render().el);
            }, this);
        },
        render:function () {
            return this;
        }
    });

    return StoryActivitiesView;
});
