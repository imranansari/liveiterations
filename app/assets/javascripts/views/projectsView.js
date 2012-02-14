define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'modelbinding',
    'models/project',
    'views/projectView'
], function ($, _, Backbone, handlebars, modelbinding, Project, ProjectView) {

    Backbone.ModelBinding = require('modelbinding');

    var ProjectsView = Backbone.View.extend({
        initialize:function (options) {
            _.bindAll(this, 'render', 'addAll', 'addOne');
            this.collection.bind('add', this.addOne);
        },
        render:function () {
            //$(this.el).html(this.template());
            this.addAll();
            return this;
        },
        addAll:function () {
            this.collection.each(this.addOne);
        },
        addOne:function (model) {
            view = new ProjectView({model:model});
            view.render();
            $(this.el).prepend(view.el);
            model.bind('remove', view.remove);
        }


    });

    return ProjectsView;
});