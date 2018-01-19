class App {
  static init() {
    const imageId = 2 //Enter your assigned imageId here
    const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
    const likeURL = `https://randopic.herokuapp.com/likes/`
    const commentsURL = `https://randopic.herokuapp.com/comments/`

    App.getImageData()

    const likeButton = document.getElementById('like_button')
    likeButton.addEventListener('click', App.handleFrontEndAddLike)

    const commentButton = document.getElementById('comment_form')
    commentButton.addEventListener('submit', App.handleFrontEndAddComment)

  }

  static getImageData() {
    const imageId = 2
    const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

    fetch(imageURL)
    .then( res => res.json())
    .then( imageData => {
      App.renderImageData(imageData)
    })
  }

  static renderImageData(imageData) {
    new Image(imageData.id, imageData.url, imageData.name, imageData.like_count, imageData.comments)

    new Comment(imageData.id, imageData.content)

    const imageName = document.getElementById('name')
    imageName.innerText = imageData.name

    const image = document.getElementById('image')
    image.src = imageData.url

    const likes = document.getElementById('likes')
    likes.innerText = imageData.like_count

    const commentsList = document.getElementById('comments')
    for (let comment of imageData.comments) {
      let newLi = document.createElement('li')
      newLi.dataset.id = comment.id
      newLi.innerText = comment.content

      commentsList.appendChild(newLi)
    }
  }

  static handleFrontEndAddLike(event) {
    event.preventDefault()

    const likeCount = document.getElementById('likes')
    const count = ++likeCount.innerText
    likeCount.innerText = count

    App.handleBackEndAddLike(count)
  }

  static handleBackEndAddLike(count) {
    event.preventDefault()
    const imageId = 2
    const likeURL = `https://randopic.herokuapp.com/likes`

    fetch(likeURL, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: imageId
      })
    })
    .then( res => res.json() )
    .then( likeData => {
      console.log(likeData)
    })
  }

  static handleFrontEndAddComment(event) {
    event.preventDefault()

    const commentsList = document.getElementById('comments')
    const commentInput = document.getElementById('comment_input').value
    const newCommentLi = document.createElement('li')
    newCommentLi.innerText = commentInput

    commentsList.appendChild(newCommentLi)

  }

}


document.addEventListener('DOMContentLoaded', App.init)




// document.addEventListener('DOMContentLoaded', function() {
//   const imageId = 2 //Enter your assigned imageId here
//   const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
//   const likeURL = `https://randopic.herokuapp.com/likes/`
//   const commentsURL = `https://randopic.herokuapp.com/comments/`
//
// })
