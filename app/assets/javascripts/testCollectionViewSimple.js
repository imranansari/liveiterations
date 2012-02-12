require(["order!jquery",
    "order!handlebars",
    "order!backbone",
    "order!modelbinding"
], function () {

});

define(['underscore', 'backbone'], function (_, Backbone) {

  $(document).ready(function () {


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

        var Templates = {};
        var Views = {};

        Templates.StoryBoard = _.template(
            "<h2>My StoryBoard</h2>"
        );

        Templates.Activities = _.template(
            "<div class='activities'><%= name %>" +
                "<div id='<%= name %>'></div>" +
                "</div>"
        );

        Templates.Tasks = _.template(
            "<div class='title'>Task : <%= name %></div>"
        );

        Views.Task = Backbone.View.extend({
            template:Templates.Tasks,
            initialize:function (options) {
                _.bindAll(this, 'render', 'remove');
                this.model.bind('change', this.render);
                this.model.bind('destroy', this.remove);
            },
            render:function () {
                console.log(this.template(this.model.toJSON()));
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            },
            remove:function () {
                $(this.el).remove();
            }
        });

        Views.Activity = Backbone.View.extend({
            template:Templates.Activities,
            initialize:function (options) {
                _.bindAll(this, 'render', 'remove');
                this.model.bind('change', this.render);
                this.model.bind('destroy', this.remove);
            },
            render:function () {
                $(this.el).html(this.template(this.model.toJSON()));

                return this;
            },
            remove:function () {
                $(this.el).remove();
            }

        });


        Views.ActivitiesView = Backbone.View.extend({
            template:Templates.Activities,
            initialize:function (options) {
                _.bindAll(this, 'render', 'addAll', 'addOne');
                this.collection.bind('add', this.addOne);
            },
            render:function () {
                $(this.el).html(this.template());
                this.addAll();
                return this;
            },
            addAll:function () {
                this.collection.each(this.addOne);
            },
            addOne:function (model) {
                view = new Views.Activity({model:model});
                view.render();
                $(this.el).append(view.el);
                model.bind('remove', view.remove);
            }
        });

        Views.TasksView = Backbone.View.extend({
            template:Templates.Tasks,
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
                view = new Views.Task({model:model});
                view.render();
                //$(this.el).append(view.el);
                $('.activities #'+ model.get('parentId')).append(view.el);
                model.bind('remove', view.remove);
            }
        });

        var Activities = Backbone.Collection.extend({
            model:Activity,

            url:'/activty'
        });

        var Tasks = Backbone.Collection.extend({
            model:Task,

            url:'/task'
        });


        var Activity = Backbone.Model.extend({


        });

        var Task = Backbone.Model.extend({

        });

        /*        var myBox = new Mailbox;
         myBox.set({mailBoxName:'Imrans Mail'});*/

        window.myTasks = new Tasks();
        myTasks.add(new Task({name:'task1', parentId:'Hello1'}));
        myTasks.add(new Task({name:'task2', parentId:'Hello1' }));
        myTasks.add(new Task({name:'h2-t1', parentId:'Hello2'}));
        myTasks.add(new Task({name:'h2-t2', parentId:'Hello2'}));
        myTasks.add(new Task({name:'h2-t3', parentId:'Hello2'}));
        myTasks.add(new Task({name:'h2-t4', parentId:'Hello2'}));


        window.myActivities = new Activities();
        //myActivities.add(new Activity({name:'Hello1'}));
        //myActivities.add(new Activity({name:'Hello2'}));

        myAct1 = new Activity({name:'Hello1'});


        myActivities.add(myAct1);
        myActivities.add(new Activity({name:'Hello2'}));


        var m1 = myActivities.at(0);
        //m1.set({name:'changed 1'});

        /*myBox.set({messages:myMessages});*/

        //console.log(myBox.toJSON());

        new Views.ActivitiesView({
            collection:myActivities, el:$('#myInbox')
        }).render();

      new Views.TasksView({
          collection:myTasks
      }).render();


      $("#newTask").click(function(){
          myTasks.add(new Task({name:'h2-t5', parentId:'Hello2'}));
          myTasks.add(new Task({name:'h1-t5', parentId:'Hello1'}));
          myTasks.add(new Task({name:'h3-t1', parentId:'Hello3'}));
      });

      $("#newActivity").click(function(){
          myActivities.add(new Activity({name:'Hello3'}));
      });

      $("#updateActivity").click(function(){
          var m1 = myActivities.at(0);
          m1.set({name:'changed 1'});
      });

      $("#removeActivity").click(function(){
          var m1 = myActivities.at(1);
          m1.destroy();
      });

    });

});

