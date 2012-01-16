define([
    'jquery',
    'underscore',
    'backbone',
    'models/storyActivity',
    'collections/storyActivities',
    'views/storyActivityView',
    'views/storyActivitiesView'
], function ($, _, Backbone, StoryActivity, StoryActivities, StoryActivityView, StoryActivitiesView) {


    var rec1 = {
        storyName:"Story1",
        assigned:"Homer"
    };

    var storyActivity1 = new StoryActivity();
    storyActivity1.set(rec1);


    var AppView = Backbone.View.extend({


    });


    var storyActivitiesView = new StoryActivitiesView({ collection : StoryActivities });

    $('#storyActivitiesList').html(storyActivitiesView.render().el);


    window.StoryActivities = StoryActivities;
    window.StoryActivity = StoryActivity;
    StoryActivities.add([storyActivity1]);

    return AppView;
});
