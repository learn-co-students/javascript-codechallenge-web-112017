
class Picture {
   constructor(obj) {
     this.id = obj.id;
     this.url = obj.url;
     this.name = obj.name;
     this.like_count = obj.like_count;
     this.comments = obj.comments;
   }

  render() {
    let picture = document.getElementById("image")
    picture.src = this.url
    picture.dataset.id = this.id
    let button = document.getElementById("like_button")
    button.dataset.id = this.id
    let likes = document.getElementById("likes")
    likes.innerText = this.like_count
    button.dataset.id = this.id
    let commentForm = document.getElementById("comment_form")
    commentForm.dataset.id = this.id
    
  }


  }
