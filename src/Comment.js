class Comment {
  constructor(obj){
    this.content = obj.content
    this.created_at = obj.created_at
    this.id = obj.id
    this.image_id = obj.image_id
    this.updated_at = obj.updated_at

  }

  static addComment(img, comment){
    fetch("https://randopic.herokuapp.com/comments/", {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
      },
      body: JSON.stringify({
        image_id: `${img.id}`,
        content: `${comment.value}`
        })
      }).then(res => res.json())
      
  }

  renderComments(){

  }





}
