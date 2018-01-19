document.addEventListener('DOMContentLoaded', function() {
  const imageId = 20 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(imageURL)
    .then( response => response.json() )
    .then( imageData => new App(imageData) )


})
