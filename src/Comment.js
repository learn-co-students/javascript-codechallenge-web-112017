class Comment {
  constructor({content, id}){
    this.content = content;
    this.id = id;
  }

  createLi(){
    let li = document.createElement("li");
    li.id = this.id;
    li.innerText = this.content;

    let button = document.createElement("button");
    button.innerText = "Delete Comment";

    li.append(button);

    return li;
  }

}
