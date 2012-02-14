/**
 * Created by JetBrains RubyMine.
 * User: imranansari
 * Date: 2/14/12
 * Time: 10:20 AM
 * To change this template use File | Settings | File Templates.
 */

define(['underscore', 'backbone'], function(_, Backbone){

    var Project = Backbone.Model.extend({
        idAttribute:"_id"
    });

    return Project;

});