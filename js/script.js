$(document).ready(function () {
  

    $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
    
    $('#overlay').on("mouseup",function(){          // lock it when mouse up
    	$('#map').addClass('scrolloff'); 
        //somehow the mouseup event doesn't get call...
    });
    $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
    	$('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
        $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
    });
 	
 	$('#gallery').masonry({
	  	// options
		itemSelector: '.canvas_cont',
	});

	$('#gallery img').on("load",function(){
		$('#gallery').masonry('layout');
	});

	$('.fancybox').fancybox();

  $('.more').click(function() {
    var j = $(this).html();
        
    $(this).prev('div').slideToggle();
    
    if (j === 'more')
      $(this).html('close');
    else
      $(this).html('more');
});
      /*
       *  Different effects
       */

      // Change title type, overlay closing speed
      // $(".fancybox-effects-a").fancybox({
      //   helpers: {
      //     title : {
      //       type : 'outside'
      //     },
      //     overlay : {
      //       speedOut : 0
      //     }
      //   }
      // });

      // Disable opening and closing animations, change title type
      // $(".fancybox-effects-b").fancybox({
      //   openEffect  : 'none',
      //   closeEffect : 'none',

      //   helpers : {
      //     title : {
      //       type : 'over'
      //     }
      //   }
      // });

      // Set custom style, close if clicked, change title type and overlay color
      // $(".fancybox-effects-c").fancybox({
      //   wrapCSS    : 'fancybox-custom',
      //   closeClick : true,

      //   openEffect : 'none',

      //   helpers : {
      //     title : {
      //       type : 'inside'
      //     },
      //     overlay : {
      //       css : {
      //         'background' : 'rgba(238,238,238,0.85)'
      //       }
      //     }
      //   }
      // });

      // Remove padding, set opening and closing animations, close if clicked and disable overlay
      // $(".fancybox-effects-d").fancybox({
      //   padding: 0,

      //   openEffect : 'elastic',
      //   openSpeed  : 150,

      //   closeEffect : 'elastic',
      //   closeSpeed  : 150,

      //   closeClick : true,

      //   helpers : {
      //     overlay : null
      //   }
      // });

      /*
       *  Button helper. Disable animations, hide close button, change title type and content
       */

      // $('.fancybox-buttons').fancybox({
      //   openEffect  : 'none',
      //   closeEffect : 'none',

      //   prevEffect : 'none',
      //   nextEffect : 'none',

      //   closeBtn  : false,

      //   helpers : {
      //     title : {
      //       type : 'inside'
      //     },
      //     buttons : {}
      //   },

      //   afterLoad : function() {
      //     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
      //   }
      // });

      /*
       *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
       */

      // $('.fancybox-thumbs').fancybox({
      //   prevEffect : 'none',
      //   nextEffect : 'none',

      //   closeBtn  : false,
      //   arrows    : false,
      //   nextClick : true,

      //   helpers : {
      //     thumbs : {
      //       width  : 50,
      //       height : 50
      //     }
      //   }
      // });
});