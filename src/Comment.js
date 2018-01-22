class Comment {
    constructor(obj) {
      this.id = obj.id
      this.content = obj.content
      this.image_id = obj.image_id
      this.created_at = obj.created_at
    }

   render() {
     let list = document.getElementById("comments")
     let newListItem = document.createElement("li")
     newListItem.innerText = this.content
     newListItem.dataset.id = this.id
     let deleteButton = document.createElement("button")
     deleteButton.value = "delete"
     deleteButton.setAttribute("class", "delete")
     deleteButton.innerText = "x"
     newListItem.appendChild(deleteButton)
     list.appendChild(newListItem)
   }


}
