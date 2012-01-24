getActivitiesFromService = function ($) {
    var data;

    $.ajax({
        url:'/storymap/activity',
        type:'GET',
        dataType:'json',
        async:false,
        success:function (dataFromService) {
            data = dataFromService;
        }});
    return data;
}
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

        $("#topmenu").html(menuHtml);


        $(".addUserTask").live('click', function () {
            $(this).parent().parent().parent().append("<div>User Task</div>");
        });

        $("#addActivity").click(function () {

            var storyActivity = new StoryActivity();
            var newActivityView = new NewActivityView({model:storyActivity});
            newActivityView.render();
        });

        $("#searchMenu").click(function () {
            $(this).parent(".dropdown").toggleClass("open");
        })

    });

    var AppView = Backbone.View.extend({


    });

    var storyActivitiesView = new StoryActivitiesView({ collection:StoryActivities });

    var data = this.getActivitiesFromService($);
    StoryActivities.add(data);

    $('#storyActivitiesList').html(storyActivitiesView.render().el);


    return AppView;
});
