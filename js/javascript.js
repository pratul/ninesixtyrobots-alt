
// Prefill the search box with Search... text.
$(document).ready(function(){
  $('#search input:text').autofill({
    value: "Search..."
  });
});