// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//

require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3-min',
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
    "order!/assets/libs/twitter/bootstrap-dropdown.js",
    "order!/assets/libs/twitter/bootstrap-modal.js",
    'views/app'], function(AppView){
  var app_view = new AppView;
});



/*require(['views/test'], function(){

});*/
