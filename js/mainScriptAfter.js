
var portfolio = portfolio || {};

portfolio.core = (function(doc, $, undefined) {

  // Private variables
  var hash = $.address.path(),
      

  // Initialise on page load
  init = function(){
    eventAgeGate();
    portfolio.data();
 
    
  },

  portfolio.data = function(){
	  $.getJSON('../imageGal.xml', function(data) {
	  
  },
  
 
  }
  
  // Public variables, these are exposed so that selected methods can be called externally
  return {
    run: init,
    runGmaps: initGmap
  };
  
})(document, jQuery);

$(function() {
  portfolio.core.run();
});