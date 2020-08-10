
var likeCounter = 1;

function commentHere() {

let userComment = document.querySelector("#inputid").value;

const newElement = document
.querySelector("#referenceCommentId")
.cloneNode(true);
newElement.removeAttribute("id"); //good practice to keep unique id.
newElement.style.visibility = "visible";
newElement.children[0].innerHTML = userComment;

// comment box elment
const commentBox = document.querySelector("#commentBox");

// now we want to add the element at the top.
// commentBox.appendChild(newElement);
commentBox.insertBefore(newElement, commentBox.firstChild);

// clean the input box
document.querySelector("#inputid").value = "";


}
    

function likeHere() {
    likeCounter ++ 


        document.querySelector("#likeid").innerHTML = "Like " + likeCounter;
    
}
function deleteComment(btnElement) {
    btnElement.parentElement.remove();
  }