var userClickedPattern=[];
// var buttonColours = ["red", "blue", "green", "yellow"];
//
// var gamePattern = [];

$("#red").click(function()
{
  $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


})
$("#blue").click(function()
{
  $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

})
$("#green").click(function()
{
  $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

})
$("#yellow").click(function()
{
  $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

})

$(".btn").click(function()
{
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});


function animatePress(currentColour)
{
  var shadow=$("."+currentColour).addClass("pressed");

  setTimeout(function()
{
  shadow.removeClass("pressed");
},100);
}

// function nextSequence() {
//
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//
//   //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
//   playSound(randomChosenColour);
// }
function playSound(name)
{
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}
