class Image {

  constructor(data){
    this.id = data.id
    this.url = data.url
    this.name = data.name
    this.likeCount = data.like_count
    Image.all.push(this)
  }

  static increaseLikes(){
    let numOfLikes = document.getElementById("likes")
    console.log(numOfLikes)
  }

  render(){
    let imgTag = document.getElementById("image")
    imgTag.src = `${this.url}`

    let name = document.getElementById("name")
    name.innerHTML = `${this.name}`
  }

  update(){
    let likes = this.likeCount.parseInt()
    likes++
    document.getElementById("likes").innerHTML = `${likes}`
  }

}

Image.all = []
