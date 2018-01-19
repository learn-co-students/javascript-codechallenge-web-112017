document.addEventListener('DOMContentLoaded', function() {
  const imageId = 11 //Enter your assigned imageId here DONE
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  let image = document.getElementById('image')
  let likeButton = document.getElementById('like_button')
  let likeDisplay = document.getElementById('likes')
  let commentForm = document.getElementById('comment_form')
  let commentDisplay = document.getElementById('comments')
  let commentId = 1

  getImage(imageURL)

  // function getLikes() {
  //   fetch(likeURL).then(res=>res.json())
  // }
  //
  // getLikes()

  function getImage(imageURL) {
    fetch(imageURL).then(res=>res.json()).then(data=> {
      image.src = data.url})
  }

  likeButton.addEventListener('click', function(e) {
    likeDisplay.innerText = parseInt(likeDisplay.innerText)+1
    postLike()
  })

  function postLike () {
    let postData = {
      image_id: imageId
    };
    fetch(likeURL, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json())
  }



  commentForm.addEventListener("submit", function(e) {
    e.preventDefault()
    let input = e.target.comment_input.value
    let newComment = document.createElement('li')
    newComment.innerHTML = `<h3>${input}</h3><button id='delete-comment'>Delete Comment</button>`

    let commentData = {
      image_id: imageId,
      content: input
    }
    fetch(commentsURL, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(res=>res.json()).then(data=>{
      newComment.id = data.id
    })
    commentDisplay.appendChild(newComment)
    e.target.reset()
  })

  //DELETE BUTTON 
  // commentDisplay.addEventListener("click", function(event) {
  //   if (event.target.id==='delete-comment') {
  //     let id = event.target.parentElement.id
  //     fetch(commentsURL, {
  //       method: 'DELETE'
  //     }).then(res=> {
  //       renderComments()
  //     })
  //   }
  // })

  function postComment(input) {
    let commentData = {
      image_id: imageId,
      content: input
    }
    fetch(commentsURL, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  }

})
