document.addEventListener('DOMContentLoaded', function() {
  const imageId = 12 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`






//FIRST - LOAD THE DB DATA

fetch(imageURL)
  .then(res => res.json())
  .then(res => loadImage(res), imageLoaded())


  function loadImage(res) {
    let image = new Image(res.id, res.url, res.name, res.like_count, res.comments)
    image.render()
  }

  function imageLoaded() {
    //event listener for likes
    let likeButton = document.getElementById('like_button')
    likeButton.addEventListener("click", likeClicked)

    //event listener for new comment
    let submitButton = document.getElementById('comment_submit')
    submitButton.addEventListener("click", commentSubmitted)
  }


//EVENT LISTENER CALLBACK FUNCTIONS/////////////////
function likeClicked () {
  //increase the number on the page currently
  //THEN (optimistic) patch fetch for this image
  let likeTag = document.getElementById('likes')
  let newLikeCount = parseInt(likeTag.innerHTML, 10) + 1
  likeTag.innerHTML = newLikeCount

  fetch(likeURL, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: JSON.stringify({
                image_id: imageId
              })
            })
}

function commentSubmitted() {
  //add + render comment & clear form
  //POST
  let contentInput = document.getElementById('comment_input').value

  let newComment = new Comment(null, contentInput)
  newComment.render()
  document.getElementById('comment_input').value = ""


  fetch(commentsURL, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: JSON.stringify({
                image_id: imageId,
                content: contentInput
              })
            })


}





class Image {
  constructor(id, url, name, like_count, comments){
    this.id = id
    this.url = url
    this.name = name
    this.like_count = like_count
    this.comments = comments
  }

  render(){
    let imageTag = document.getElementById('image')
    imageTag.src = this.url

    let nameTag = document.getElementById('name')
    nameTag.innerHTML = this.name

    let likeTag = document.getElementById('likes')
    likeTag.innerHTML = this.like_count

    this.comments.forEach(function (commentObj) {
      let comment = new Comment(commentObj.id, commentObj.content)
      comment.render()
    })
  }
}



class Comment {
  constructor(id, content) {
    this.id = id
    this.content = content
  }

  render() {
    let commentsArea = document.getElementById('comments')
    let commentLi = document.createElement('li')
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<button id="delete_button">Delete</button>'
    commentLi.innerText = this.content
    commentLi.appendChild(deleteButton)
    commentsArea.appendChild(commentLi)

    // deleteButton
    // fetch(`http://localhost:3000/tasks/${id}`, {
    //          method: 'DELETE',
    //          headers: {
    //              'Content-Type': 'application/json',
    //              'Accept': 'application/json'
    //          }
    //        }).then( ()=> document.getElementById(id).remove() )//remove from page
    //



  }






}

})
