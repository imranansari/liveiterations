require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3-min',
    modelbinding: 'libs/backbone/backbone.modelbinding',
    //twDropdown: 'libs/twitter/bootstrap-dropdown',
    twTransition: 'libs/twitter/bootstrap-transition',
    twAlert: 'libs/twitter/bootstrap-alert',
    //twModal: 'libs/twitter/bootstrap-modal',
    twScroll: 'libs/twitter/bootstrap-scrollspy',
    twTab: 'libs/twitter/bootstrap-tab',
    twTooltip1: 'libs/twitter/bootstrap-tooltip',
    twPopover: 'libs/twitter/bootstrap-popover',
    twButton: 'libs/twitter/bootstrap-button',
    twCollapse: 'libs/twitter/bootstrap-collapse',
    twCarousel: 'libs/twitter/bootstrap-carousel',
    twTypeahead: 'libs/twitter/bootstrap-typeahead',
    handlebars: 'libs/handlebars/handlebars.1.0.0.beta.3',
    text: 'libs/require/text'
  }

});

require(["order!jquery",
    "order!backbone",
    "order!modelbinding",
    "order!/assets/libs/twitter/bootstrap-dropdown.js",
    "order!/assets/libs/twitter/bootstrap-modal.js",
    'views/app'], function(AppView){
  var app_view = new AppView;
});
