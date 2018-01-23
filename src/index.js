document.addEventListener('DOMContentLoaded', function() {
  const imageId = 7 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  Fetch.getImgAndComment(imageURL)
  EventListener.listen()

})
