document.addEventListener('DOMContentLoaded', function() {
  const imageId = 21 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`



  Image.getTheImage();




  let likeButton = document.getElementById("like_button")
  likeButton.addEventListener("click", handleLikes);

  function handleLikes(event){
    event.preventDefault();

    // fix this later
    let img = images[0];
    let count = ++img.like_count
    let likes = document.getElementById("likes")
    likes.innerHTML = ``
    likes.innerHTML = `${count}`

    Like.addLikes(img);
  }



  let submitForm = document.getElementById("comment_form")
  submitForm.addEventListener("submit", handleCommentSubmit);

  function handleCommentSubmit(event){
    event.preventDefault();

    let img = images[0];
    let comment = document.getElementById("comment_form").getElementsByTagName("input")[0]

    // Need to Address DRY code - this is repeated below!!!
    let ulComments = document.getElementById("comments")
    let newComIL = document.createElement("li")
    let delComm = document.createElement("button")
    newComIL.innerHTML = `${comment.value}`
    delComm.innerHTML = `X`
    delComm.className = "delete-comment"
    newComIL.appendChild(delComm)
    ulComments.appendChild(newComIL)

    Comment.addComment(img, comment);

    }

    // let deleteButtons = document.getElementsByClassName("delete-comment")



})
