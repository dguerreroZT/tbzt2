$(document).ready(function() {
    $('select').material_select();
     $('input.autocomplete').autocomplete({
    data: {
      "Kenwoth": null,
      "International": null,
      "Volvo": null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
       
  });
