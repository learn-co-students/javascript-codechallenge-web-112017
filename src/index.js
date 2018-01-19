document.addEventListener('DOMContentLoaded', function() {
  const imageId = 3 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetchData()
  //makeImage()
  //makeComments()

  function fetchData(){
    fetch(imageURL)
           .then(res => res.json())
           .then(json => makeImage(json))
  }


  function makeImage(data){
    let imageName = data.name
    let imageUrl = data.url
    let numLikes = data.like_count
    let commentArr = data.comments
    let myImage = new Image(imageName,imageUrl,numLikes,commentArr)
    myImage.render()
    //console.log(commentArr)
    makeComments(commentArr)
  }

  function makeComments(arr){
    for(let i=0; i<arr.length; i++){
      //console.log(arr[i].content)
      let commentText = arr[i].content
      let newComment = new Comment(commentText)
      newComment.render()
    }
  }

  let numberLikes = document.getElementById("likes").innerText
  let likeButton = document.getElementById("like_button")
  likeButton.addEventListener("click", function() {
    numberLikes = ParseInt(numberLikes) + 1  
  })


})
