document.addEventListener('DOMContentLoaded', function() {
  const imageId = 14 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imagePath = document.querySelector('#image')
  const imageName = document.querySelector('#name')
  const imageLikes = document.querySelector('#likes')
  const imageComments = document.querySelector('#comments')
  const imageLikeButton = document.querySelector('#like_button')

  const form = document.querySelector('#comment_form')
  const formInput = document.querySelector('#comment_input')

  fetch(imageURL)
  .then(response => response.json())
  .then(image => {
    imagePath.src = image.url
    imageName.innerText = image.name
    imageLikes.innerText = image.like_count

    imageLikeButton.addEventListener( 'click', event => {
      let like = new Like({imageId: image.id})
    })

    image.comments.sort((a,b) => {return a.id > b.id})
    .forEach(comment => {
      Comment.createFrontend(comment)
    })

    form.addEventListener('submit', event => {
      event.preventDefault()
      if (formInput.value.length < 1) return null
      new Comment( {imageId: image.id, content: formInput.value} )
    })
  }) // fetch

})
