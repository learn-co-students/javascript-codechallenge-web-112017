class Comment {
  constructor(id, commentInfo){
    this.id = id
    this.comment = commentInfo
  }

  render(){
    let newComment = document.createElement('li')
    newComment.setAttribute('data-id', this.id)
    newComment.innerText = this.comment
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    newComment.append(deleteButton)
    return newComment
  }
}
