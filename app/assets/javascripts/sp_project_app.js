require(["order!jquery",
    "order!handlebars",
    "order!backbone",
    "order!modelbinding"
], function () {

});

define(['underscore', 'backbone', 'views/projectsView', 'models/project'],
    function (_, Backbone, ProjectsView, Project) {


        var Projects = Backbone.Collection.extend({
            model:Project,
            url:'/sp'
        });


        var Projects = new Projects;

        $(document).ready(function () {

            Projects.fetch({
                success:function (Projects) {
                    var projectsView = new ProjectsView({collection:Projects, el:$('#projects')});
                    projectsView.render();
                }
            });

        });

    });

