var libraryObj_backboneamd = define(['order!underscore', 'order!jquery', 'order!backbone-min'], function(){
  _.noConflict();
  $.noConflict();
  return Backbone.noConflict();
});

export default libraryObj_backboneamd;