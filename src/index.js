document.addEventListener('DOMContentLoaded', function() {
  const imageId = 5 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  let likes = document.getElementById('likes')
  let comments = document.getElementById('comments')
  // set initial picture, likes, and comment data
  Adapter.getPictureData().then( (res) => {
    // set picture
    let picture2 = document.getElementById('image')
    picture2.setAttribute('src', res.url)
    // add like feature
    likes.innerText = parseInt(res.like_count)
    //load initial comments
    for (c of res.comments){
      let newComment = new Comment(c.id,c.content)
      comments.append(newComment.render())
      }
    }
  )

  //Add like feature to a picture + persistence
    let likeButton = document.getElementById('like_button')
    likeButton.addEventListener('click', function(){
    let likes = document.getElementById('likes')
    likes.innerText = parseInt(likes.innerText) + 1
    Adapter.postData(likes.innerText)
  })

    //add comment feature
    let form = document.getElementById('comment_form')
    form.addEventListener('submit', function(e){
      e.preventDefault()
      let commentInput = document.getElementById('comment_input').value
      if (commentInput !== ''){
        //post comment data, append stuff.
        let newComment = new Comment(999,commentInput)
        comments.append(newComment.render())
        Adapter.postComment(commentInput)
        let commentInputForm = document.getElementById('comment_input')
        commentInputForm.value = ''
      }
    })
    // handle delete
    comments.addEventListener('click', function(e){
      debugger
      if (e.target.tagName.toLowerCase() === 'button'){
        e.target.parentNode.remove()
        Adapter.deleteComment(e.target.parentNode.dataset.id)
      }
    })



})
