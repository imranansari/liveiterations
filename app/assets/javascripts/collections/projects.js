define([
    'underscore',
    'backbone',
    'models/project'
], function (_, Backbone, Project) {

    var Projects = Backbone.Collection.extend({

        // Reference to this collection's model.
        model:Project,

        url:'/project'

    });


    return new Projects;
});
