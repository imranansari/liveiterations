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
};

define([
    'jquery',
    'underscore',
    'backbone',
    'models/storyActivity',
    'collections/storyActivities',
    'collections/storyTasks',
    'views/storyActivityView',
    'views/storyActivitiesView',
    'views/storyTasksView',
    'views/newActivityView',
    'text!templates/menu.html'
], function ($, _, Backbone, StoryActivity, StoryActivities, StoryTasks,StoryActivityView, StoryActivitiesView, StoryTasksView, NewActivityView, menuHtml) {

    $(document).ready(function () {

        $("#topmenu").html(menuHtml);

        $("#addActivity").click(function () {

            var storyActivity = new StoryActivity();
            var newActivityView = new NewActivityView({model:storyActivity});
            newActivityView.render();
        });

/*        $("#searchMenu").click(function () {
            $(this).parent(".dropdown").toggleClass("open");
        })*/

/*        $('.addUserTask').popover({trigger: 'manual', placement: 'bottom', content: $('#example').html()});
        $('.addUserTask').live('mouseover', function(){
            $('.addUserTask').popover('hide');
            $(this).popover('show');
        });*/
    });

    var AppView = Backbone.View.extend({


    });

    var storyActivitiesView = new StoryActivitiesView({ collection:StoryActivities });

    var data = this.getActivitiesFromService($);

    StoryActivities.add(data);

    $('#storyActivitiesList').html(storyActivitiesView.render().el);


    return AppView;
});
