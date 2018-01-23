class Fetch {

  static getImgAndComment(imgURL){
    fetch(imgURL)
    .then(resp => resp.json())
    .then(json => {
      let myImg = new Image(json)
      myImg.render()
      json.comments.forEach((comment) =>{
        new Comment(comment)
        Comment.renderAll()
      })
    })
  }



  static addComment(commentInput){
    fetch("https://randopic.herokuapp.com/comments", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        image_id: 7,
        content: commentInput
      })
    }).then(resp => resp.json()).then(json => {
      let newC = new Comment(json)
      Comment.addNewComment()
    })

  }


  static addLike(){
    fetch('https://randopic.herokuapp.com/likes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        image_id: 7,
      })
    })
  }

}
