class Image {
  constructor(json) {
    this.id = json.id;
    this.url = json.url;
    this.name = json.name;
    this.like_count = json.like_count;
  }
}
