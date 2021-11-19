class Feed {
  constructor({ url, feedUrl, feedType, title }) {
    this.url = url;
    this.feedUrl = feedUrl;
    this.feedType = feedType;
    this.title = title;

    this.id = this.feedUrl;
  }

  static get name() {
    return 'Feed';
  }

  getSiteUrl() {
    return this.url ? this.url : this.feedUrl;
  }
}

export default Feed;
