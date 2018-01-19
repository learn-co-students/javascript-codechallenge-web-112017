
  class App {
    static init() {
      //define some constants

      //fetch page data
      App.fetchImage()

      //add event listeners
      const likeButton = document.getElementById('like_button')
      likeButton.addEventListener('click', App.handleLikeButtonClick)

      const commentForm = document.getElementById('comment_form')
      commentForm.addEventListener("submit", App.handleNewCommentSubmit)
    }

    static fetchImage() {
      const imageId = 18 //Enter your assigned imageId here
      const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
      fetch(imageURL)
        .then(res => res.json())
        .then(json => {
          let i = new Image(json)
          i.renderToImageCard()
          i.renderImageComments()
        })
    }

    //app event handlers

    static handleLikeButtonClick(event) {
      let imageLikes = document.getElementById('likes')
      let image = Image.all().find(i => i.id === imageLikes.dataset.id)
      imageLikes.innerText = `${imageLikes.dataset.like_count + 1}`
      image.renderLikes()
    }

    static handleNewCommentSubmit(event) {
     event.preventDefault()
     let commentsDiv = document.getElementById('comments')
     let image = document.getElementById('image')
     let commentImageId = image.dataset.id
     let inputContent = document.getElementById('comment_input')
     let commentContent = inputContent.value

     fetch('https://randopic.herokuapp.com/comments', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       body: JSON.stringify({
         image_id: commentImageId,
         content: commentContent
       })
     })
     .then(res => res.json())
     .then(json => {
       let i = new Image(json)
       .renderImageComments()
     })
     //render something
   }

  }

  document.addEventListener('DOMContentLoaded', App.init)
