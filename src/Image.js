class Image {
    constructor({url, name, like_count, comments}) {
      this.url = url
      this.name = name
      this.like_count = like_count
      this.comments = this.commentArray(comments)
    }

    commentArray(comments) {
      return comments.map(function(comment) { return new Comment(comment) })
    }

    render() {
      document.getElementById("image").src = this.url
      document.getElementById("name").innerText = this.name
      document.getElementById("likes").innerText = this.like_count
      for(const comment of this.comments) {
        comment.render()
      }
    }

}
