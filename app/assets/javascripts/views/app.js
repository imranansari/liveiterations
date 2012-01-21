define([
    'jquery',
    'underscore',
    'backbone',
    'models/storyActivity',
    'collections/storyActivities',
    'views/storyActivityView',
    'views/storyActivitiesView',
    'views/newActivityView',
    'text!templates/menu.html'
], function ($, _, Backbone, StoryActivity, StoryActivities, StoryActivityView, StoryActivitiesView, NewActivityView, menuHtml) {

    $(document).ready(function () {

        //$("#topmenu").html(menuHtml);


        $(".addUserTask").live('click', function () {
            $(this).parent().parent().parent().append("<div>User Task</div>");
        });
        $("#addActivity").click(function () {

            var storyActivity = new StoryActivity();
            var newActivityView = new NewActivityView({model:storyActivity});
            newActivityView.render();
        });

    });

    var AppView = Backbone.View.extend({


    });

    var storyActivitiesView = new StoryActivitiesView({ collection:StoryActivities });

    $('#storyActivitiesList').html(storyActivitiesView.render().el);


    return AppView;
});
