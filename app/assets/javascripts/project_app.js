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

            $("#addProject").click(function () {


                Projects.create({name:"Visualizer", desc:"Sales Demo iPad & Web App for Annuities", imgFileName:"visualizer.png", status:"Production"});

                sleep(2000);

                Projects.create({name:"Dashboard", desc:"Dashboard iPad App is a launcher for Lincoln & Approved Third party Apps", imgFileName:"dashboard.png", status:"Testing"});


                //Projects.create({name: "Mobility COE", desc: "Mobility Center Of Excellence", imgFileName: "coe.png", status: "Testing"});


                sleep(2000);
                Projects.create({name:"BCP Field Contacts", desc:"iOS & Android Hybrid App for Field Contacts", imgFileName:"bcp.png", status:"Development"});

                sleep(2000);
                Projects.create({name:"Conference App", desc:"Conference App Designed for IT Leadership Forum", imgFileName:"realtime1.png", status:"Production"});

                //sleep(2000);
                //Projects.create({name:"Responsive Design Framework", desc:"Custom Framework for Mobile Enabling HUB2 Apps", imgFileName:"responsive-design.png", status:"Development"});

                sleep(2000);
                Projects.create({name:"iEngage", desc:"LRPS Enrollment iPad App", imgFileName:"iengage.png", status:"Definition"});

                sleep(2000);
                Projects.create({name:"Mobile CRM", desc:"Extending 3rd Party Application to include Holdings Information", imgFileName:"crm.png", status:"Production"});


            })

            function sleep(ms) {
                var dt = new Date();
                dt.setTime(dt.getTime() + ms);
                while (new Date().getTime() < dt.getTime());
            }

        });

    });

