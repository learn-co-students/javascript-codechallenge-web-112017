class Like {
  constructor(obj){
    this.id = obj.id
    this.image_id = obj.image_id
    this.created_at = obj.created_at
    this.updated_at = obj.updated_at
  }

  static addLikes(img){
    fetch("https://randopic.herokuapp.com/likes/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        image_id: `${img.id}`
      })
    }).then(res => res.json())
    .then(json => {
      let like = new Like(json)
      console.log(like)
    })

  }

  renderLikes(){
    let newComIL = document.createElement("li")
    let delComm = document.createElement("button")
    newComIL.innerHTML = `${this.content}`
    delComm.innerHTML = `X`
    delComm.className = "delete-comment"
    newComIL.appendChild(delComm)
    ulComments.appendChild(newComIL)
  }


}
