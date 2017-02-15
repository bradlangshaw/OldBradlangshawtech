/// </// <reference path=".../typings/tsd.d.ts" />

(function(){

    "use strict";
    
  /*---  console.log("inside iife")
    // Load the navbar dynamically via jQuery and Ajax
    var header = $('#mainHeader').load("", function() {
        var bodyid = $('body').attr('id');
        switch (bodyid.toString()) {
            case "index":
                $('#indexLink').attr("class", "active");
                break;
            case "projects":
                $('#projectsLink').attr("class", "active");
                break;
            case "contact":
                $('#contactLink').attr("class", "active");
                break;
        }
    }); --*/
    
  $(document).ready(function($) {

	$('.card__share > a').on('click', function(e){ 
		e.preventDefault() // prevent default action - hash doesn't appear in url
   		$(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
		$(this).toggleClass('share-expanded');
    });
  
});
})();




    
    
    

   

