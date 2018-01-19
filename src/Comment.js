class Comment {
  constructor( {imageId, content} ) {
    this.imageId = imageId
    this.content = content

    Comment.createFrontend(this)
    Comment.createBackend()
    document.querySelector('#comment_input').value = ''
  }

  static createFrontend(comment){
    const comments = document.querySelector('#comments')

    let newComment = document.createElement('li')
    newComment.innerText = comment.content
    comments.append(newComment)
  }

  static createBackend(){
    fetch('https://randopic.herokuapp.com/comments/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        image_id: this.imageId,
        content: this.content
      }) // body
    }) // fetch
  }

}
