define([
    'underscore',
    'backbone',
    'models/storyActivity'
], function (_, Backbone, StoryActivity) {

    var StoryActivities = Backbone.Collection.extend({

        // Reference to this collection's model.
        model:StoryActivity,

        url:'/storymap/activity?projectId='+PROJECT_ID

    });


    return new StoryActivities;
});
