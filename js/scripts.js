$(function() {
  $("form#track-picker").submit(function(event){
    event.preventDefault();

    var firstName = $("#first-name").val();
    var visited = $("input:radio[name=visited]:checked").val();
    var experience = parseInt($("input#experience").val());
    var workplace = parseInt($("input:radio[name=workplace]:checked").val());
    var cms = parseInt($("input:radio[name=cms]:checked").val());
    var design = parseInt($("input:radio[name=design]:checked").val());
    var platform = parseInt($("input:radio[name=platform]:checked").val());
    var userScore = workplace + cms + design + platform;

    console.log(firstName);
    console.log(visited);
    console.log(experience);
    console.log(workplace);
    console.log(cms);
    console.log(design);
    console.log(platform);
    console.log(userScore);

    if (firstName){
      $("#questionaire").fadeOut();
      $("#answer").fadeIn();
      $("#answer-img").fadeIn();

      if (visited === "yes"){
        $("#answer").append("<h3>Welcome back to the <em>Track Picker</em> " + firstName + "! I'm thinking you should take the:</h3>");
      } else if (visited === "no") {
        $("#answer").append("<h3>Hello " + firstName + "! Welcome to the <em>Track Picker</em>, I think you should take the:</h3>")
      }
        if (userScore <= 10){
          $("#answer").append("<h1>CSS/Design Track</h1>");
          $("#answer-img").addClass("design");
        } else if (userScore >= 11 && userScore <= 20) {
          $("#answer").append("<h1>Ruby/Rails Track</h1>");
          $("#answer-img").addClass("ruby");
        } else if (userScore >= 21 && userScore <=30) {
          $("#answer").append("<h1>PHP/Drupal Track</h1>");
          $("#answer-img").addClass("php");
        } else if (userScore >= 31) {
          $("#answer").append("<h1>C#/.net Track</h1>");
          $("#answer-img").addClass("c-sharp");
        }

    } else {
      alert("Please, we would like to address you by name!");
    }
  });
});
