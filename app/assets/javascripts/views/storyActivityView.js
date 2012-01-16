define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/storyActivity.html'
], function ($, _, Backbone, handlebars,htmlTpl) {
    var StoryActivityView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
               tagName: "li",
         className: 'story',

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template =  Handlebars.compile(htmlTpl);
        },

        render:function () {
            var content = this.template(this.model.toJSON());
            $(this.el).html(content);

            //console.log(this.model.get('firstName'));
            //$(this.el).html(this.model.get('firstName'));
            return this;
        }
    });
    return StoryActivityView;
});
