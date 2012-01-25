define(['underscore', 'backbone'], function (_, Backbone) {
    var StoryTask = Backbone.Model.extend({
        idAttribute:"_id"
    });
    return StoryTask;
});
