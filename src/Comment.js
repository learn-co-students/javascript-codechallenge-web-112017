class Comment {
  constructor(text) {
    this.content = text
  }
  render(){
    let commentList = document.getElementById("comments")
    let commentSpot = document.createElement("li")
    commentSpot.innerText = this.content
    return commentList.appendChild(commentSpot)
  }
}
