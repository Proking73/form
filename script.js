//fade-in wrapper; body onload="function" function makes the wrapper fade in but not working because 'animation-end' event, fix? maybe nest inside of function or other event?

//variables
const start = document.querySelector(".start");
const wrapper = document.querySelector("header");
const title = document.querySelector("h1");
const choices = document.querySelector(".choices");
const choiceItems = document.getElementsByClassName("choice-item");
const choiceItem1 = choiceItems[0];
const choiceItem2 = choiceItems[1];
const choiceItem3 = choiceItems[2].children.;
//animations
const fadeOut = "fadeOut 0.75s ease-out";
const fadeIn = "fadeIn 0.5s ease-in";
//logic
function hide() {
    wrapper.style.animation = fadeOut;
}
wrapper.addEventListener('animationend', () => {
    wrapper.style.display = "none";
    choices.style.display = "flex";
    choices.style.animation = fadeIn;
});
choices.addEventListener('animationend', () => {
    choices.style.opacity = "1";
});
