define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/storyTask.html'
], function ($, _, Backbone, handlebars, htmlTpl) {
    var StoryTaskView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
        //tagName:"div",

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = Handlebars.compile(htmlTpl);
        },

        render:function () {
            var content = this.template(this.model.toJSON());
            $(this.el).html(content);

            //console.log(this.model.get('firstName'));
            //$(this.el).html(this.model.get('firstName'));
            return this;
        }
    });
    return StoryTaskView;
});
