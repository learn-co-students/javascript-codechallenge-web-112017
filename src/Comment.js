class Comment {
  constructor({id, content, image_id}){
    this.id = id
    this.content = content
    this.image_id = image_id
    store.comments.push(this)
  }

  render() {
    const comment = document.createElement('li')
    comment.dataset.id = this.id
    comment.innerText = this.content
    document.getElementById('comments').prepend(comment)
  }

}
