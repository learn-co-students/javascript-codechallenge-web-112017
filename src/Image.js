class Image {
  constructor(name,url,likes,comment){
    this.url = url
    this.name = name
    this.comments = comments
    this.likes = likes
  }
  render() {
    let imageSource = document.getElementById("image").src
    imageSource = this.url
    return imageSource
  }

}

//   render(){
//     //let imageSpot = document.getElementById("image")
//     let imageSource = document.getElementById("image").src
//     //console.log(this.url)
//     //imageSpot.attr('src', `${this.url}`);
//     return imageSource = `${this.url}`
//   }
