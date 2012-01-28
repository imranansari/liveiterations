define([
    'underscore',
    'backbone',
    'models/storyTask'
], function (_, Backbone, StoryTask) {

    var StoryTasks = Backbone.Collection.extend({

        model:StoryTask ,
        url:'/storymap/task'
    });


    return StoryTasks;
});
