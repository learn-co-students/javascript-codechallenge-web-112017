const images = []

class Image {
  constructor(obj){
    this.comments = obj.comments
    this.id = obj.id
    this.like_count = obj.like_count
    this.name = obj.name
    this.url = obj.url
    images.push(this)

      this.comments.map((comment) => {
        let com = new Comment(comment)
      });

    }

  static getTheImage(){
      fetch(`https://randopic.herokuapp.com/images/21`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        let img = new Image(json)
        console.log(img)
        img.renderImage()
      })
    }



  renderImage(){
    let picDiv = document.getElementById("image")
    picDiv.src = this.url

    let likes = document.getElementById("likes")
    let count = this.like_count
    likes.innerHTML = `${count}`

    let ulComments = document.getElementById("comments")
    this.comments.map((comment) =>{
      let newComIL = document.createElement("li")
      let delComm = document.createElement("button")
      newComIL.innerHTML = `${comment.content}`
      delComm.innerHTML = `X`
      delComm.className = "delete-comment"
      newComIL.appendChild(delComm)
      ulComments.appendChild(newComIL)
    })



  }


}
