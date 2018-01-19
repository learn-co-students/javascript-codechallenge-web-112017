document.addEventListener('DOMContentLoaded', function() {
  const imageId = 6 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  //fetch image on load
  fetch(imageURL)
    .then(res => res.json())
    .then(res => {
      createImage(res);
  });

  // fetch all comments on load
  // fetch(commentsURL)
  //   .then(res => res.json())
  //   .then(res => {
  //     renderComments(res);
  //   });

function createImage(res) {
    let image = new Image(res);
    displayImage(image);
  }

function displayImage(i) {
  let imageTag = document.getElementById('image')
  imageTag.src = i.url;
  let imageName = document.getElementById('name')
  imageName.innerHTML = i.name;
  let imageLikes = document.getElementById('likes')
  imageLikes.innerHTML = i.like_count;
}

let commentForm = document.getElementById('comment_form')
let commentField = document.getElementById('comment_input').value
commentForm.addEventListener('submit', newComment);

  // function renderComments(res) {
  //   res.forEach(function(c) {
  //     let comment = new Comment(c);
  //     displayComment(comment);
  //   })
  // }

  function newComment(event) {
    event.preventDefault();
    let commentField = document.getElementById('comment_input').value

    fetch(commentsURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        image_id: imageId,
        content: commentField
      })
    }).then(res => res.json())
      .then(commentData => {
      let comment = new Comment(commentData)
        displayComment(comment);
      })
  }

function displayComment(c) {
    let commentList = document.getElementById('comments')
    let newComment = document.createElement('li');
    newComment.innerHTML = c.render()
    commentList.append(newComment)
    // commentForm.reset();
  }


// Likes
  let likeCount = 0;
  let likeButton = document.getElementById('like_button')
  let likes = document.getElementById('likes')
  likeButton.addEventListener('click', likeImage);

  function likeImage() {
    likes.innerHTML = likeCount++;

    fetch(likeURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        like_count: likeCount
      })
    })
  }
})
