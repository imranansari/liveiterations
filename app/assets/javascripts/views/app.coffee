define [ "jquery", "underscore", "backbone", "models/storyActivity", "collections/storyActivities", "views/storyActivityView", "views/storyActivitiesView", "views/newActivityView", "text!templates/menu.html" ], ($, _, Backbone, StoryActivity, StoryActivities, StoryActivityView, StoryActivitiesView, NewActivityView, menuHtml) ->
  $(document).ready ->
    $("#topmenu").html menuHtml
    $(".addUserTask").live "click", ->
      $(this).parent().parent().parent().append "<div>User Task</div>"

    $("#addActivity").click ->
      storyActivity = new StoryActivity()
      newActivityView = new NewActivityView(model: storyActivity)
      newActivityView.render()

  AppView = Backbone.View.extend({})
  storyActivitiesView = new StoryActivitiesView(collection: StoryActivities)
  $("#storyActivitiesList").html storyActivitiesView.render().el
  AppView