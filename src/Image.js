class Image {

  constructor(data){
    this.id = data.id
    this.url = data.url
    this.name = data.name
    this.likeCount = data.like_count
    Image.all.push(this)
  }


  render(){
    let imgTag = document.getElementById("image")
    imgTag.src = `${this.url}`

    let name = document.getElementById("name")
    name.innerHTML = `${this.name}`

    let numOfLikes = document.getElementById("likes")
    let like = this.likeCount.toString();
    numOfLikes.innerHTML = ""
    numOfLikes.innerHTML = `${like}`




  }

  update(){
    this.likeCount += 1
    let stringLike = this.likeCount.toString()
    document.getElementById("likes").innerHTML = ""
    document.getElementById("likes").innerHTML = `${stringLike}`
  }

}

Image.all = []
