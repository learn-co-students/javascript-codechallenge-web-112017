commentStore = []

class Comment {
  constructor(id, content) {
    this.id = id
    this.content = content
    commentStore.push(this)
  }
}
