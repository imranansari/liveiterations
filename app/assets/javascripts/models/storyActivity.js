define(['underscore',
    'backbone',
    'collections/storyTasks'], function (_, Backbone, StoryTasks) {

    Backbone.Model.prototype.toJSON = function() {
      return _(_.clone(this.attributes)).extend({
       'authenticity_token' : $('meta[name="csrf-token"]').attr('content')
      });
     }

    function nestCollection(model, attributeName, nestedCollection) {
        //setup nested references
        for (var i = 0; i < nestedCollection.length; i++) {
            model.attributes[attributeName][i] = nestedCollection.at(i).attributes;
        }
        //create empty arrays if none

        nestedCollection.bind('add', function (initiative) {
            if (!model.get(attributeName)) {
                model.attributes[attributeName] = [];
            }
            model.get(attributeName).push(initiative.attributes);
        });

        nestedCollection.bind('remove', function (initiative) {
            var updateObj = {};
            updateObj[attributeName] = _.without(model.get(attributeName), initiative.attributes);
            model.set(updateObj);
        });
        return nestedCollection;
    }

    var StoryActivity = Backbone.Model.extend({
        idAttribute:"_id",


        initialize:function () {
            var model = this;

            if (this.get('storyTasks') != undefined) {
                //this.storyTasks = nestCollection(this, 'storyTasks', new StoryTasks(this.get('storyTasks')));
                //new StoryTasks(this.get('storyTasks'));
                this.storyTasks = nestCollection(this, 'storyTasks', new StoryTasks(this.get('storyTasks')));
            } else {
                this.storyTasks = nestCollection(this, 'storyTasks', new StoryTasks());
            }

/*            this.storyTasks.bind("change", function () {
                model.save();
            });

            this.storyTasks.bind("add", function () {
                model.save();
            });*/
        }
    });
    return StoryActivity;

});
