define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'modelbinding',
    'models/storyActivity',
    'models/storyTask',
    'collections/storyActivities',
    'views/storyActivityView',
    'text!templates/newactivity.html'
], function ($, _, Backbone, handlebars, modelbinding, StoryActivity, StoryTask, StoryActivities ,StoryActivityView, htmlTpl) {

    var mod1;
    Backbone.ModelBinding = require('modelbinding');

    var NewActivityView = Backbone.View.extend({

        initialize:function (options) {
            this.template = Handlebars.compile(htmlTpl);
        },
        render:function () {
            var content = this.template({editable: (this.options.mode == 'edit')});
            $(this.el).html(content);
            mod1 = $(this.el).modal('show');
            Backbone.ModelBinding.bind(this);
            return this;
        },

        events:{
            "click .close":"close",
            "click #saveActivity":"save",
            "click #deleteActivity":"deleteActivity"

        },

        close:function () {
            mod1.modal('hide');
        },

        save:function () {
            //console.log(JSON.stringify(this.model));

            this.model.set({modifiedBy : CURRENT_USER_ID});

            if (this.options.mode != 'edit') {
                this.model.set({projectId: PROJECT_ID});
                StoryActivities.add([this.model]);
            }

            //?projectId='+PROJECT_ID
            this.model.save();
            this.close();
            //$('#content').css('width', $('#content').css('width') + 300 +'px');
            $('#content').css('width', ($('.storyContainer').size() * $('.storyContainer').width()) + 350 + 'px');
            window.zyngaScroller.setDimensions(zyngaStorymapContainer.clientWidth, zyngaStorymapContainer.clientHeight, content.offsetWidth, content.offsetHeight);

        },

        deleteActivity:function(){
            this.options.viewToRemove.remove();
            this.model.destroy();
            StoryActivities.remove(this.model);
            this.close();
        }

    });


    return NewActivityView;
});
