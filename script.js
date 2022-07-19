var barkButton = document.getElementById('bark-button');
var postArea = document.getElementsByClassName('post-container');
const posts = document.querySelector('#post-container');
var textArea = document.getElementById("input-area");
var NAME = "placeholder";
var USERNAME = "placeholder";

var box = document.getElementById("login-form-group1");
var submitButton = document.getElementById("submit-button");

window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;

    NAME = params.get('name-input');
    USERNAME = params.get('username-input');
})

barkButton.onclick = function () {
    var inputArea = document.getElementById('input-area');
    createPost(inputArea.value);
    textArea.style.height = textArea.style.lineHeight;
    textArea.value = "";
}


// from "https://stackoverflow.com/questions/57942695/make-input-height-increase-when-typing"
// adjusted to fit flow of program
var textArea = document.getElementById("input-area");
textArea.addEventListener("input", evt => {
    textArea.style.height = textArea.scrollHeight + "px";
});

function createPost(textContent) {
    // OUTER DIV
    let tweetBox = document.createElement("div");
    tweetBox.className = "sample-post";
    // ROW DIV
    let row = document.createElement("div");
    row.className = "row";
    // ADDING ROW TO OUTER DIV
    tweetBox.append(row);
    //LEFT SIDE
    let leftSide = document.createElement("div");
    leftSide.className = "col-2 left";
    //ADDING IMG TO LEFT SIDE
    var boxPFP = document.createElement("img");
    boxPFP.src = "logos/dog.jpg";
    boxPFP.className = "textbox-pfp";
    leftSide.append(boxPFP);
    row.append(leftSide);
    //RIGHT SIDE
    let rightSide = document.createElement("div");
    rightSide.className = "col-10 right";

    //ADDING NAME/USERNAME/TIME TO RIGHT SIDE
    var boxName = document.createElement("span");
    var boxUser = document.createElement("span");
    var boxTime = document.createElement("span");
    boxName.className = "name";
    boxUser.className = "username";
    boxTime.className = "time";
    // EDIT THIS LATERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
    boxName.textContent = NAME;
    boxUser.textContent = ("@" + USERNAME);
    boxTime.textContent = "7/19/2022";
    rightSide.append(boxName);
    rightSide.append(boxUser);
    // rightSide.append(boxTime)

    var postContent = document.createElement("div");
    postContent.textContent = textContent;
    rightSide.append(postContent);

    var imgbox = document.createElement("div");
    rightSide.append(imgbox);
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    img1.src = ("logos/comment.png");
    img2.src = ("logos/re-bark.png");
    img3.src = ("logos/heart.png");
    img4.src = ("logos/share.png");
    img1.className = "post-img";
    img2.className = "post-img";
    img3.className = "post-img";
    img4.className = "post-img";
    imgbox.append(img1);
    imgbox.append(img2);
    imgbox.append(img3);
    imgbox.append(img4);

    row.append(rightSide);
    //MODIFIED FROM "https://stackoverflow.com/questions/4687579/append-an-element-with-fade-in-effect-jquery"
    $(tweetBox).hide().appendTo("#post-container").fadeIn(500);

    textArea.style.height = textArea.style.lineHeight;
    textArea.value = "";

}

