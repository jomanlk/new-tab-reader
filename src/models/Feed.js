class Feed {
  constructor({ url, feedUrl, feedType, title }) {
    this.url = url;
    this.feedUrl = feedUrl;
    this.feedType = feedType;
    this.title = title;

    this.id = this.feedUrl;
  }

  getSiteUrl() {
    return this.url ? this.url : this.feedUrl;
  }
}

Feed.prototype.name = 'Feed';
export default Feed;
