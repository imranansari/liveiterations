define([
    'underscore',
    'backbone',
    'models/tag'
], function (_, Backbone, StoryTask) {

    var Tags = Backbone.Collection.extend({

        model:Tag ,
        url:'/message/tag'
    });


    return Tags;
});
