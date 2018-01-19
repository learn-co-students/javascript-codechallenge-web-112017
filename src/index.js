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
  let comments = document.getElementById("comments")
  let commentlist = json.comments
  for (i = 0; i < commentlist.length; i++) {
      addComment(commentlist[i])
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
    })

  }
}


let commentForm = document.getElementById("comment_form")

commentForm.addEventListener("submit", newComment)

function newComment(event){
  event.preventDefault()
  let comment =  document.getElementById("comment_input")
  let value = comment.value
  let x = event.target.dataset.id

  // addComment(value)
  sendCommentToDB(x, value)
  comment.value = ""
}

 function sendCommentToDB (x, value){
    fetch(commentsURL, {
     method: "POST",
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({"image_id": x, "content": value})
   }).then(resp => resp.json()).then(json=> addComment(json))
 }

function addComment(json) {
  let list = document.getElementById("comments")
  let newListItem = document.createElement("li")
  newListItem.innerText = json.content
  newListItem.dataset.id = json.id
  // let deleteButton = document.createElement("button")
  // deleteButton.value = "delete"
  // deleteButton.setAttribute("class", "delete")
  // deleteButton.innerText = "x"
  // newListItem.appendChild(deleteButton)
  list.appendChild(newListItem)
}

// pageContainer.addEventListener("click", deleteComment)
//
// function deleteComment(event){
//   if(event.target.className === "delete") {
//     let x = parseInt(event.target.parentNode.dataset.id)
//
//     fetch(`${commentsURL}/${x}`,{
//       method: 'Delete',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//     }).then(resp=>resp.json()).then(json => console.log(json))
//   }
//   event.target.parentNode.remove()
// }


})
