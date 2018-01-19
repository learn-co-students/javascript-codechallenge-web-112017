class Like {
  constructor( {imageId, content} ) {
    // frontend
    this.imageId = imageId
    const likes = document.querySelector('#likes')
    likes.innerText = parseInt(likes.innerText) + 1

    // backend
    fetch('https://randopic.herokuapp.com/likes/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        image_id: imageId
      })
    }) //fetch
  } //constructor

} // class
