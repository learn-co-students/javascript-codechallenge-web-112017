class Image {
  constructor(json) {
    this.id = json.id
    this.url = json.url
    this.name = json.name
    this.like_count = json.like_count
    this.comments = json.comments
    store.images[this.id] = this
  }

  render() {
    let imageDiv = document.getElementById('image_card')
    let imageDisplay = document.getElementById('image');
    let imageName = document.getElementById('name');
    let imageLikes = document.getElementById('likes')
    let likeCount = imageLikes.innerText
    imageDisplay.src = this.url;
    imageName.innerHTML = this.name;
    imageDiv.appendChild(imageLikes)
    imageDiv.appendChild(imageDisplay)
    imageDiv.appendChild(imageName)
    return imageDiv
  }

}
