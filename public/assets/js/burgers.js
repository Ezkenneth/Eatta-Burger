$(function () {
  $(".devour").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id)
    // Send the PUT request.
    $.ajax({
      url: "/api/burgers/" + id,
      type: "PUT",
      success: function () {
        // Reload the page to get the updated list
        location.reload();
      },
    });
  });
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

   
     var name = $("#ca").val().trim()
     

    // Send the POST request.
    $.ajax({
      url: "/api/burgers",
      type: "POST",
      data: {name:name},
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
