class Adapter {

  static getPictureData(){
    return fetch('https://randopic.herokuapp.com/images/5')
    .then(res => res.json())
  }

  static postData(likes){
    return fetch('https://randopic.herokuapp.com/likes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        image_id: 5,
        like_count: likes
      })
    }).then(res => res.json())
  }

  static postComment(comment){
    return fetch('https://randopic.herokuapp.com/comments', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        image_id: 5,
        content: comment
      })
    }).then(res => res.json())
  }

  static deleteComment(id){
    return fetch(`https://randopic.herokuapp.com/comments/${id}`, {
      method: 'delete'
    })

  }

}
