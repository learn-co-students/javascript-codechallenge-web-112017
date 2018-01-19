class App {
  constructor(){
    store.app = this;
    this.imageId = 15; //Enter your assigned imageId here
    this.imageURL = `https://randopic.herokuapp.com/images/${this.imageId}`;
    this.likeURL = `https://randopic.herokuapp.com/likes/`;
    this.commentsURL = `https://randopic.herokuapp.com/comments/`;

    this.imageContainer = document.getElementById("image");
    this.imageName = document.getElementById("name");
    this.imageLikes = document.getElementById("likes");
    this.imageCommentContainer = document.getElementById("comments");

    this.likeButton = document.getElementById("like_button");
    this.commentForm = document.getElementById("comment_form");
    this.commentInput = document.getElementById("comment_input");

    this.renderImage();
    this.initiateEventListeners();
  }

  async renderImage(){
    this.image = await fetch(this.imageURL).then(response => response.json()).then(json => new Image(json));

    this.imageContainer.src = this.image.url;
    this.imageName.innerText = this.image.name;
    this.imageLikes.innerText = this.image.like_count;
    this.image.renderComments();
  }

  initiateEventListeners(){
    this.likeButton.addEventListener("click", this.handleNewLike.bind(this));
    this.commentForm.addEventListener("submit", this.handleNewComment.bind(this));
    this.imageCommentContainer.addEventListener("click", this.handleDeleteComment.bind(this));
  }

  handleNewLike(event){
    this.imageLikes.innerText++;

    fetch(this.likeURL, {
      method: "POST",
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({"image_id": this.imageId})
    });
  }

  async handleNewComment(event){
    event.preventDefault();

    const newCommentLi = await fetch(this.commentsURL, {
      method: "POST",
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        image_id: this.imageId,
        content: this.commentInput.value
      })
    }).then(response => response.json())
      .then(json => new Comment(json))
      .then(comment => comment.createLi());


    this.imageCommentContainer.append(newCommentLi);
    this.commentInput.value = "";

  }

  handleDeleteComment(event){
    if (event.target.type === "submit"){
      let commentId = event.target.parentElement.id;

      fetch(`https://randopic.herokuapp.com/comments/${commentId}`, {
        method: "DELETE",
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      });

      event.target.parentElement.remove();

    }
  }

}
