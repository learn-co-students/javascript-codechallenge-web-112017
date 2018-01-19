let store = {images: {}, comments: {}}
document.addEventListener('DOMContentLoaded', function() {
  console.log("The DOM Content has loaded.")
  const imageId = 16 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(`https://randopic.herokuapp.com/images/${imageId}`)
    .then(res => res.json())
    .then(res => createImages(res));

    // GRABS IMAGE FROM BACK END
    function createImages(res) {
        let image = new Image(res);
        image.render()
    }

    let form = document.getElementById('comment_form')
    form.addEventListener('submit', createNewComment);

    function createNewComment(event) {
    event.preventDefault();

    let newCommentContent = document.getElementById('comment_input').value;

    fetch('https://randopic.herokuapp.com/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        content: newCommentContent
      })
    }).then(res => res.json())
      .then(commentData => {
      const comment = new Comment(commentData)
       comment.render()
     })
     form.reset()
   }

 let likeButton = document.getElementById('like_button')
 likeButton.addEventListener('submit', handleLikes)

 function handleLikes(event) {
   event.preventDefault()
   let numOfLikes = document.getElementById('likes').innerText

   fetch(`https://randopic.herokuapp.com/likes/`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({
       like_count: numOfLikes
     })
   }).then(res => res.json())
     .then(likeData => {
      likeData.like_count++
      image.render()
    })

    // if (event.target.id === "like-button"){
    //   debugger;
    //   `${numOfLikes.innerText++}`
    // }
  }

})
