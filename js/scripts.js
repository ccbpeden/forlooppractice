var blanksArray = ["item1", "item2", "item3", "item4"];

var inputArray = []

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    $("#blanks").hide();
    $("#results").show();
    event.preventDefault();
    var index = 0
    for(index = 0; index <= blanksArray.length; index += 1) {
      var userInput = $("input#" + blanksArray[index]).val();
      if (userInput) {
        inputArray.push(userInput);
      };
    };
    inputArray.sort();
    inputArray.forEach(function(item) {
      $("#resultsHere").append("<li>" + item + "</li>");
    });
  });
});
