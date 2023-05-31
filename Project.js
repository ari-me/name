//Scroll to Top Button
function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Text Jumps and becomes Visible when Scroll
function checkForVisibility() {
  var paragraphs = document.querySelectorAll(".visible");
  paragraphs.forEach(function(visible) {
    if (isElementInViewport(visible)) {
      visible.classList.add("pVisible");
    } else {
      visible.classList.remove("pVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}

//Changing Text on Home Page
function quote(){
function writeRandomQuote() {
    var quotes = new Array();
    quotes[0] = "No one is born a great cook, one learns <b>by doing.</b>";
    quotes[1] = "The secret to being a good cook and making good food is first, having a <b>love</b> for it.";
    quotes[2] = "A recipe has no soul. You as the cook, must <b>bring soul</b> to the recipe.";
    quotes[3] = "Cooking is a caring and nurturing act. It's kind of the <b>ultimate gift</b> for someone, to cook for them. ";
    quotes[4] = "Cooking with love provides <b>FOOD</b> for the soul.";
	quotes[5] = "Cooking is <b>love made edible.</b>";
	quotes[6] = "Food is <b>essential</b> to life, therefore make it <b>good.</b>";
	quotes[7] = "Cooking well doesn't mean cooking fancy.";
	quotes[8] = "People who <b>love to eat</b> are always the <b>best</b> people.";
	quotes[9] = "Nothing brings people <b>together</b> like good food.";
	quotes[10] = "Good food is very often, even most often, <b>simple food.</b>";
	quotes[11] = "The people who give you their food, give you their <b>heart.</b>";
	quotes[12] = "Cooking is at once child's play and adult joy, but if done with care is always an act of love.";
	quotes[13] = "Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious. <br> -Ruth Reichl";
	quotes[14] = "Food is our common ground, a universal experience. <br> -James Beard";
	quotes[15] = "This magical, marvelous food on our plate, this sustenance we absorb, has a story to tell. It has a journey. <br>-Joel Salatin";
	quotes[16] = "Food to a large extent is what holds a society together, and eating is closely linked to deep spiritual experiences.";
	quotes[17] = "Cookbooks aren't so much about what's for dinner as they are about a world of abundant and creative choices.";
	quotes[18] = "There is no love sincerer than the love of food. <br> -George Bernard Shaw";
	quotes[19] = "One of the nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating.";
	quotes[20] = "No one who cooks, cooks alone. A cook in the kitchen is surrounded by generations of cooks past, the advice and menus of cooks present, the wisdom of cookbook writers.";
	var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
}
	writeRandomQuote();
}
	
/*Categories Drop Down*/
function buttons(){
var img = document.getElementsByClassName('img');
for (let i = 0; i < img.length; i++) {
	img[i].style.setProperty("display", "none");}	
	//All recipes
var all = document.getElementsByClassName("all_recipes");
all[0].addEventListener('click', function(){
	for (let i = 0; i < img.length; i++) {
	img[i].style.setProperty("display", "flex");}});
}