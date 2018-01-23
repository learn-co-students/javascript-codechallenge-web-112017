class Comment {

  constructor(data){
    this.id = data.id;
    this.content = data.content;
    Comment.all.unshift(this)
  }

  static renderAll(){
    let ul = document.getElementById("comments");
    ul.innerHTML = "";

    Comment.all.forEach((comment) => {
      ul.innerHTML += `<li>${comment.content}</li>`
    })
  }

  static addNewComment(){
    Comment.renderAll();
    document.getElementById("comment_input").value = ""
  }

}

Comment.all = [];
