console.log("File Loaded Correctly!")

$(".ptbContain").on("click", function() {
    $(".sectionHead").slideToggle();
    $(".colorContainer").fadeToggle();
    $(".typography").slideToggle();
    $(".uiElements").slideToggle();
    $(".imagery").slideToggle();
    $(".header").fadeToggle();
});


$("#pageTopicButton").hover(
    function() {
      $(this).css("background-color", "blue"); // Change to blue on hover
    },
    function() {
      $(this).css("background-color", "red"); // Change back to red when hover ends
    }
  );