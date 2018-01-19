class Comment {
  constructor({content, image_id}) {
    this.content = content
    this.image_id = image_id
    comments.push(this)
  }

  render() {
    const li = document.createElement("li")
    li.innerText = this.content
    // const button = document.createElement("button")
    // button.className = "delete"
    // button.innerText = "Delete Comment"
    // li.appendChild(button)
    document.getElementById("comments").appendChild(li)
  }
}
