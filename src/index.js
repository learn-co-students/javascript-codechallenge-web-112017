// unprotected i know  (i need to review how to make it accessible from inside an enclosure)
const store = {
  images : [],
  comments: []
}

document.addEventListener('DOMContentLoaded', function() {
  const imageId = 17 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

// on load
  fetch(imageURL)
    .then( resp => resp.json())
    .then( json => {
      let image = new Image(json)
      image.render()
      for (comment of image.comments) {
        new Comment(comment).render()
      }
    })

//LIKES
document.getElementById('like_button').addEventListener('click', handleLikeClick)
function handleLikeClick(event) {
  store.images[0].like()
}

//COMMENTS
document.getElementById('comment_form').addEventListener('submit', handleCommentSubmit)
function handleCommentSubmit(event) {
  event.preventDefault()
  store.images[0].comment()
}


})
