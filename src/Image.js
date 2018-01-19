const Image = (() => {
  let all=[];

  return class Image {
    constructor({id, url, name, like_count, comments}){
      this.id = id
      this.url = url
      this.name = name
      this.like_count = like_count
      this.comments = comments
      all.push(this)
    }

    //it can render itself to image card
    renderToImageCard() {
      let imageCard = document.getElementById('image_card')
      imageCard.innerHTML = `
          <img id="image" data-id=${this.id} src=${this.url}>
          <h4 id="name">${this.name}</h4>
          <span>Likes:
            <span id="likes" data-id=${this.id} data-like_count=${this.like_count}>${this.like_count}</span>
          </span>
          <button id="like_button">Like</button>
          <form id="comment_form">
            <input id="comment_input" type="text" name="comment" placeholder="Add Comment">
            <input type="submit" value="Submit">
          </form>
          <ul id="comments">
          </ul>`
    }

    renderLikes() {
      let imageLikes = document.getElementById('likes')
      imageLikes.innerText = `${this.like_count}`
    }

    renderImageComments() {
      let imageCardComments = document.getElementById('comments')
      for (const comment of this.comments) {
        let newCommentLi = document.createElement('li')
        newCommentLi.dataset.id = comment.id
        newCommentLi.innerText = comment.content
        imageCardComments.append(newCommentLi)
      }
    }

    static all() {
      return [...all]
    }
  }

})()
