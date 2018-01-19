let pictureInfo = ""

class Picture {
  constructor(id, url, name, like_count, comments) {
    this.id = id
    this.url = url
    this.name = name
    this.like_count = like_count
    this.comments = comments
    pictureInfo = this
  }
}

class App {
  static init() {
    fetch('https://randopic.herokuapp.com/images/19')
    .then(res => res.json())
    .then(json => {
      App.fromBackEndToStoreAndDom(json)})

      const newLikePush = document.getElementById("like_button")
      newLikePush.addEventListener("click", App.handleNewLikes)

    }

    static fromBackEndToStoreAndDom(data) {
      let pic = new Picture(data.id, data.url, data.name, data.like_count, data.comments)
      App.createPicDomElements(pictureInfo)
    }

    static createPicDomElements(pic) {

      let imageElement = document.getElementById("image")
      imageElement.src = pic["url"]

      let nameElement = document.getElementById("name")
      nameElement.innerText = pic["name"]

      let likesElement = document.getElementById("likes")
      console.log(pic["likes"])
      likesElement.innerText = pic["like_count"]

      let commentUL = document.getElementById("comments")
      let commentItem = document.createElement("li")

      for (let i=0; i<pic["comments"].length; i++) {
        commentItem.innerText = pic["comments"][i]["content"]
        commentUL.appendChild(commentItem)
      }
    }

    static handleNewLikes(event) {
      event.preventDefault()

      pictureInfo["like_count"] += 1

      document.getElementById("likes").innerText = pictureInfo["like_count"]

    }

    fetch('https://randopic.herokuapp.com/images/19',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          like_count: pictureInfo.like_count
        })
      })
}








document.addEventListener('DOMContentLoaded', function() {
  App.init()
  const imageId = 1 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

})
