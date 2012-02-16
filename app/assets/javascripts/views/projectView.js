define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'modelbinding',
    'text!templates/project.html'
], function ($, _, Backbone, handlebars, modelbinding, htmlTpl) {

    Backbone.ModelBinding = require('modelbinding');

    var ProjectView = Backbone.View.extend({

        initialize:function (options) {
            this.template = Handlebars.compile(htmlTpl);
            _.bindAll(this, 'render', 'remove');
            this.model.bind('change', this.render);
            this.model.bind('destroy', this.remove);
        },
        render:function () {
            var content = this.template(this.model.toJSON());

            $(this.el).html(content);
            return this;
        },

        remove:function () {
            $(this.el).remove();
        },

        events:{
            "click #project":"launchPortal"
        },


        launchPortal:function () {
            console.log(this.model.get('name'));


            var auth = $('meta[name="csrf-token"]').attr('content');


            $.get('/project/savesession' + "?authenticity_token=" + auth, {payload:JSON.stringify({id:this.model.id, name:this.model.get('name')})}, function (data) {
                console.log('a');
                window.location.href = "/message/index";
            });

            /*            $.ajax({
             type: 'POST',
             url: '/project/savesession',
             data: this.model,
             success: function(){
             alert('go');
             },
             dataType: 'json'
             });*/
        }

    });

    return ProjectView;
});