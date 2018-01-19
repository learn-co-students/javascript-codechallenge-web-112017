class Image {
  constructor({id, url, name, like_count, comments}){
    this.id = id;
    this.url = url;
    this.name = name;
    this.like_count = like_count;
    this.comments = comments.sort((a,b) => { return a.id - b.id });
  }

  renderComments(){
    for (let comm of this.comments) {
      let comment = new Comment(comm);
      let commentLi = comment.createLi();
      store.app.imageCommentContainer.append(commentLi);
    }
  }

}
