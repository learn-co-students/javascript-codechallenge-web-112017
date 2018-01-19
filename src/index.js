const imageId = 4 //Enter your assigned imageId here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const likeURL = `https://randopic.herokuapp.com/likes/`
const commentsURL = `https://randopic.herokuapp.com/comments/`
const comments = []

document.addEventListener('DOMContentLoaded', function() {
  getPic(imageURL)

  document.getElementById("like_button").addEventListener("click", addLike)
  document.getElementById("comment_form").addEventListener("submit", addComment)
  // document.getElementById("comments").addEventListener("click", deleteComment)
})

function getPic(imageURL) {
  fetch(imageURL)
    .then(response => response.json())
    .then(setImg)
}

function setImg(data) {
  const img = new Image(data)
  img.render()
}

function addLike() {
  let likes = document.getElementById("likes")
  likes.innerText = parseInt(likes.innerText) + 1
  fetch(likeURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({image_id: imageId})
  })
}

function addComment() {
  event.preventDefault()

  const comment = new Comment({content: document.getElementById("comment_input").value, image_id: imageId})
  document.getElementById("comment_input").value = ""
  comment.render()

  fetch(commentsURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(comment)
  })
}


// function deleteComment() {
//   if (event.target.tagName === "BUTTON") {
//     const comment = event.target.parentNode
//     document.getElementById("comments").removeChild(comment)
//   }
  // const url = `${commentsURL}${ID}`
  // fetch(url, method: "DELETE"})
// }
