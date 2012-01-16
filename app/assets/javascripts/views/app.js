define([
    'jquery',
    'underscore',
    'backbone',

    'models/storyActivity',
    'collections/storyActivities',
    'views/storyActivityView',
    'views/storyActivitiesView',
    'text!templates/menu.html',
    'text!templates/newactivity.html'
], function ($, _, Backbone, StoryActivity, StoryActivities, StoryActivityView, StoryActivitiesView, menuHtml, newactivityHtml) {

    $(document).ready(function () {

        $("#topmenu").html(menuHtml);
        //$('#tempContainer').html(newactivityHtml);
         var mod1;

        $(".addUserTask").live('click',function () {
            $(this).parent().parent().parent().append("<div>User Task</div>")
            //this.parent.closest('storyContainer').css('backgroundColor', 'red');
        });
        $("#addActivity").click(function () {
            //alert('activity');
            mod1 = $(newactivityHtml).modal('show');

        });

        $('.close').live('click', function(){
            mod1.modal('hide');
        })

        $('#saveActivity').live('click', function(){

            StoryActivities.add([new StoryActivity({storyName:"test1 test1 test1 test1 test1 test1test1 test1 test1test1 test1 test1test1 test1 test1", assigned:"Home J Simpson"})]);
            mod1.modal('hide');
        })


    });

    var rec1 = {
        storyName:"Story1",
        assigned:"Homer"
    };

    var storyActivity1 = new StoryActivity();
    storyActivity1.set(rec1);


    var AppView = Backbone.View.extend({


    });


    var storyActivitiesView = new StoryActivitiesView({ collection:StoryActivities });

    $('#storyActivitiesList').html(storyActivitiesView.render().el);


    window.StoryActivities = StoryActivities;
    window.StoryActivity = StoryActivity;

    return AppView;
});
