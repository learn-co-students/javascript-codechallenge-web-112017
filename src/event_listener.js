class EventListener {

  static listen(){
    EventListener.listenForAddComment()
    EventListener.listenForLikes()
  }


  static listenForAddComment(){
    let commentForm = document.getElementById("comment_form")

    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let commentInput = document.getElementById("comment_input")
      Fetch.addComment(commentInput.value)
    })
  }


  static listenForLikes(){
    let likeButton = document.getElementById("like_button");

    likeButton.addEventListener("click", event => {
      event.preventDefault()
      Image.all[0].update()
      Fetch.addLike()
    })
  }
}
