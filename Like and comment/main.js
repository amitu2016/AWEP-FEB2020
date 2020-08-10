var counter = 1;
var likeCounter = 1;

function commentHere() {

let userComment = document.querySelector("#inputid").value;

    let newElement = document.createElement("div");
    newElement.textContent = ;


    newElement.style.background = "tomato";
    newElement.style.margin = "4px";

    let commentBox = document.querySelector("#commentBox")
    commentBox.appendChild(newElement);

    counter ++;
}

function likeHere() {
    likeCounter ++ 


        document.querySelector("#likeid").innerHTML = "Like " + likeCounter;
    
}