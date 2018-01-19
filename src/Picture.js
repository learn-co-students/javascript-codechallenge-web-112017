class Picture {
   constuctor (obj) {
     this.id = obj.id
     this.url = obj.url
     this.name = obj.name
     this.like_count = obj.like_count
     this.comments = obj.comments
   }

  render() {
    let picture = document.getElementById("image")
    picture.src = this.url
    picture.dataset.id = this.id
    console.log(`${picture.src}`)
  }


  }
