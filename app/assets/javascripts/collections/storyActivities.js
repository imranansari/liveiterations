define([
    'underscore',
    'backbone',
    'models/storyActivity'
], function (_, Backbone, StoryActivity) {

    var StoryActivities = Backbone.Collection.extend({

        // Reference to this collection's model.
        model:StoryActivity,

        url:'/storymap/activities'

    });


    return new StoryActivities;
});
