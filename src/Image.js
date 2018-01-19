class Image {
  constructor({id, url, name, like_count, comments}){
    this.id = id
    this.url = url
    this.name = name
    this.like_count = like_count
    this.comments = comments
    store.images.push(this)
  }

  render() {
    const image = document.getElementById('image')
    image.src = this.url
    document.getElementById('likes').innerText = this.like_count

  }

  like() {
    this.like_count += 1
    document.getElementById('likes').innerText = this.like_count
    fetch('https://randopic.herokuapp.com/likes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: this.id
      })
    })
  }

  // i'd rather refactor this as a create method on comment
  comment() {
    const input = document.getElementById('comment_input').value
    const comment = new Comment({'content' : `${input}`, 'image_id' : `${this.id}`})
    comment.render()
    store.images[0].comments.push(comment)
    document.getElementById('comment_input').value = ''
    fetch('https://randopic.herokuapp.com/comments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: this.id,
        content: input
      })
    })
  }

}
