require(["order!jquery",
    "order!handlebars",
    "order!backbone",
    "order!modelbinding"
], function () {

});

define(['underscore', 'backbone', 'views/projectsView', 'collections/projects', 'models/project', 'text!templates/menu.html'],
    function (_, Backbone, ProjectsView, Projects, Project, menuHtml) {

        $(document).ready(function () {

            //$("#topmenu").html(menuHtml);


            /*        //var messages = new Messages();
             Messages.add(new Message({desc:'Hello1'}));
             Messages.add(new Message({desc:'Hello2'}));

             var messagesView = new MessagesView({collection:Messages, el:$('#messages')});
             messagesView.render();*/

            Projects.fetch({
                success:function (Projects) {
                    var projectsView = new ProjectsView({collection:Projects, el:$('#projects')});
                    projectsView.render();
                }
            });

            $("#addProject").click(function(){
/*
                Projects.create({name: "Visualizer", desc: "Sales Demo tool Tablet App for Annuities", imgFileName: "visualizer.png"});
                Projects.create({name: "BCP Field Contacts", desc: "Phone App for looking up Field Contacts", imgFileName: "bcp.png"});
                Projects.create({name: "DC Enrollment", desc: "DC Enrollment iPad App", imgFileName: "iEngage.jpg"});
                Projects.create({name: "Mobile COE", desc: "Mobile Solutions Center Of Excellence", imgFileName: "260x180.gif"});
                Projects.create({name: "Dashboard", desc: "Dashboard iPad App is a wrapper for launching Lincoln & third party Apps", imgFileName: "dashboard.png"});
                Projects.create({name: "Responsive Design", desc: "Responsive Design implementation in HUB2 Web Apps", imgFileName: "bob-responsive.png"});
*/
                Projects.create({name: "Confererence App", desc: "Conference App Designed for IT Leadership Forum", imgFileName: "confApp.png"});


            })

        });

    });

