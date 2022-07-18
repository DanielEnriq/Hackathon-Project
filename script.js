$(document).on('click', 'div.barker button.follow', function(e) {
    // console.log($(e.target).val());
    $(e.target).text("Following");
});

// from "https://stackoverflow.com/questions/57942695/make-input-height-increase-when-typing"
// adjusted to fit flow of program
var textArea = document.getElementById("input-area");
textArea.addEventListener("input", evt => {
    textArea.style.height = textArea.scrollHeight + "px";
 
});


// PLEASE HELP!!
// const btn = document.getElementById('div.barker button.follow');
// btn.addEventListener('click', function handleClick() {
//   btn.textContent = 'Following';
// });