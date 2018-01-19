class Comment {
  constructor(commentInfo){
    this.comment = commentInfo
  }

  render(){
    let newComment = document.createElement('li')
    newComment.innerText = this.comment
    return newComment
  }
}
