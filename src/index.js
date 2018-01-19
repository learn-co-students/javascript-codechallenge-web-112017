document.addEventListener('DOMContentLoaded', function() {
  const imageId = 13 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


function getimage() {
  fetch(imageURL).then(resp=> resp.json()).then(json => displayImage(json))
}


function displayImage(json) {
  let picture = document.getElementById("image")
  picture.src = json.url
  picture.dataset.id = json.id
  let button = document.getElementById("like_button")
  button.dataset.id = json.id
  let likes = document.getElementById("likes")
  likes.innerText = json.like_count
  button.dataset.id = json.id
  let commentForm = document.getElementById("comment_form")
  commentForm.dataset.id = json.id
  console.log(json)
  let comments = document.getElementById("comments")
  let commentlist = json.comments
  for (i = 0; i < commentlist.length; i++) {
      addComment(commentlist[i].content)
  }
}

getimage()

let pageContainer = document.getElementById("page-container")

pageContainer.addEventListener("click", likeImage)

function likeImage(event) {
  if (event.target.className === "like-img") {
    event.preventDefault()
    let x = event.target.dataset.id
    let likes = document.getElementById("likes")
    let count = parseInt(likes.innerText)
    count += 1
    likes.innerText = count
    console.log(count)
    fetch(likeURL, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"image_id": x})
    }).then(resp => resp.json()).then(json=> console.log(json))

  }
}


let commentForm = document.getElementById("comment_form")

commentForm.addEventListener("submit", test)

function test(event){
  event.preventDefault()
  let comment =  document.getElementById("comment_input")
  let value = comment.value
  let x = event.target.dataset.id

  addComment(value)

  fetch(commentsURL, {
   method: "POST",
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({"image_id": x, "content": value})
 })
  comment.value = ""
}

function addComment(value) {
  let list = document.getElementById("comments")
  let newComment = document.createElement("li")
  newComment.innerText = value
  list.appendChild(newComment)
}


})
