define(['underscore', 'backbone'], function (_, Backbone) {
    var Tag = Backbone.Model.extend({
        idAttribute:"_id"
    });
    return Tag;
});
