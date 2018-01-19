document.addEventListener('DOMContentLoaded', function() {
  const imageId = 8 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  document.getElementById('like_button').addEventListener('click', handleLike)
  document.getElementById('comment_form').addEventListener('submit', handleCommentSubmit)
  fetchMainImage(imageURL)

})

function fetchMainImage(imageURL){
  fetch(imageURL).then(response => response.json())
  .then(function(r){
    addImageToPage(r);
    setLikes(r);
    addCommentsFromAPI(r);
  })
}
function addImageToPage(img){
  document.getElementById('image').src = img.url
  document.getElementById('name').innerText = img.name
}
function setLikes(img){
  document.getElementById('likes').innerText = img.like_count
}
function addCommentsFromAPI(img){
  let commentsUl = document.getElementById('comments')
  for (comment of img.comments) {
    let x = document.createElement('li');
    x.innerText = comment.content;
    y = document.createElement('button');
    y.innerText = "delete"
    y.setAttribute('data-id' , comment.id)
    y.addEventListener('click', deleteComment);
    commentsUl.appendChild(x);
    commentsUl.appendChild(y);

    //addCommentToPage(comment.content)
  }
}

function handleLike(e){
  let likes = document.getElementById('likes');
  let num = parseInt(likes.innerText);
  num++;
  likes.innerText = num;
  postLikeToDB();
}
function postLikeToDB(){
  const data = {
    image_id: 8
  }
  fetch('https://randopic.herokuapp.com/likes',
  {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data),
  headers: new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    })
  })
}

function handleCommentSubmit(e){
  e.preventDefault();
  const text = e.target.firstElementChild.value;
  addCommentToPage(text)
}
function addCommentToPage(text){
  let commentsUl = document.getElementById('comments')
  let commentDiv = document.createElement('div')
  let deleteButton = document.createElement('button')
  deleteButton.innerText = "delete";
  deleteButton.addEventListener('click', deleteComment)
  let x = document.createElement('li');
  x.innerText = text

  commentDiv.appendChild(x);
  commentDiv.appendChild(deleteButton);
  commentsUl.appendChild(commentDiv);
  document.getElementById('comment_input').value = '';
  postCommentToDB(text);
}
function postCommentToDB(text){
  const data = {
    image_id: 8,
    content: text
  }
  fetch('https://randopic.herokuapp.com/comments',
  {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data),
  headers: new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    })
  })
}
function deleteComment(e){
  debugger
  const comment = e.target;
  removeComment(comment);
  deleteCommentFromDB(comment);
}
function removeComment(comment){
  //go back and create specific ids for each comment

  //remove comment from dom by id
}

function deleteCommentFromDB(comment){
  data = {comment_id: comment.id}
  fetch(`https://randopic.herokuapp.com/comment/${comment.id}`,
  {
  method: 'DELETE', // or 'PUT'
  body: JSON.stringify(data),
  headers: new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
  }).then(r => console.log(r))
}

// A RandoPic user will be able to do the following things:
//
// As a user, when the page loads I will see an image, any comments that image has, and the number of likes that image has.
//
// As a user, I can click to like an image, which will increase the number of likes that image has by one.
//
// As a user I can fill out an input fields and submit the form to add a comment to an image. I should see my new comment below any previous comments.
//
// As a user, when I refresh the page, any comments or likes I have added should be persisted to the backend API and I should see my changes on the page.
