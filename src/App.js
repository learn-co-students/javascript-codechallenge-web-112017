class App {

  constructor(imageData){
    this.image = new Image(imageData)
    this.imageCard = document.getElementById('image_card')
    this.imageElement = document.getElementById('image')
    this.nameElement = document.getElementById('name')
    this.likeElement = document.getElementById('likes')
    this.commentInput = document.getElementById('comment_input')

    this.likeButton = document.getElementById('like_button')
    this.likeButton.addEventListener('click', event => this.addLike(event))

    this.submitButton = document.getElementById('comment_submit')
    this.submitButton.addEventListener('click', event => this.addComment(event))

    this.commentElement = document.getElementById('comments')
    this.commentElement.addEventListener('click', event => this.deleteComment(event))

    this.renderImageNameLikesOnPage()
    this.renderCommentsOnPage()
  }

  renderImageNameLikesOnPage() {
    this.imageElement.src = this.image.url
    this.nameElement.innerHTML = this.image.name
    this.likeElement.innerHTML = this.image.like_count
  }

  renderCommentsOnPage() {
    this.commentElement.innerHTML = this.image.comments.map( comment => this.renderCommentHTML(comment)).join('')
  }

  renderCommentHTML(comment) {
    return `<li id="${comment.id}" data-action="none">${comment.content} <a id="delete-botton-${comment.id}" data-action="delete-comment" data-commentId="${comment.id}">Delete</a></li>`
  }

  addLike(event) {
    event.preventDefault()
    this.likeElement.innerHTML = ++this.image.like_count
    fetch('https://randopic.herokuapp.com/likes',
      {method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({image_id: this.image.id})})
  }

  addComment(event) {
    event.preventDefault()
    let newCommentHTML = `<li data-action="none">${this.commentInput.value} <a id="delete-botton-${comment.id}" data-action="delete-comment" data-commentId="${comment.id}">Delete</a></li>`
    this.commentElement.insertAdjacentHTML('beforeend', newCommentHTML)
    let newComment = {image_id: this.image.id, content: this.commentInput.value}
    this.commentInput.value = ''
    fetch('https://randopic.herokuapp.com/comments',
      {method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(newComment)})
    }

  deleteComment(event) {
    event.preventDefault()
    if (event.target.dataset.action === "delete-comment") {
      document.getElementById(`${event.target.dataset.commentid}`).remove();
      fetch(`https://randopic.herokuapp.com/comments/${event.target.dataset.commentid}`,
        {method: 'DELETE',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify()})
      }
    }

}
