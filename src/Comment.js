class Comment {
  constructor(json) {
    this.id = json.id
    this.content = json.content
    store.comments[this.id] = this
  }

  render() {
    let commentList = document.getElementById('comments')
    let newLi = document.createElement('li')
    newLi.id = this.id
    newLi.content = this.content
    newLi.id = this.id
    newLi.innerHTML = `Comment: ${this.content}`
    commentList.appendChild(newLi)
    return commentList
  }
}
