document.addEventListener('DOMContentLoaded', function() {
  const imageId = 9 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  function getInfo() {
    fetch(`${imageURL}`).then(res => res.json()).then(json => console.log(json)).then(json => showData(json)).then(console.log("got it"))
  }
  getInfo();

  // function makeComment() {
  //   let imgComment = document.getElementById('comment_input').value;
  //   fetch(`${commentsURL}` , {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       comments: imgComment
  //     })
  //   }).then(res => res.json()).then(res => new Comment(res)).then(res => console.log(res))
  //   document.getElementById('comment_input').value = ''
  // }

  // function showComment(data) {
  //
  //   makeComment(data)
  // }

  function showData(json) {
    // let img = document.getElementById('image')
    // let name = document.getElementById('name')
  }

})
