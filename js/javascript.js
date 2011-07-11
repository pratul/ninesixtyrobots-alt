(function ($) {
  $(document).ready(function () {

    $('#search input:text').autofill({
      value: "Search..."
    });
    
    $('.gallery').cycle({
      fx: 'fade'
    });
	  
  });
})(jQuery);