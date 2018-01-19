class Comment {
  constructor(json) {
    this.id = json.id;
    this.content = json.content;
    this.image_id = json.image_id;
  }
  render() {
    return `
      <li>${this.content}</li>
    `
  }
}
