class FeedItem {
  name = 'FeedItem';

  constructor({
    link,
    title,
    image,
    contentSnippet,
    siteTitle,
    siteLink,
    isoDate,
  }) {
    this.link = link;
    this.title = title;
    this.image = image;
    this.contentSnippet = contentSnippet;
    this.siteTitle = siteTitle;
    this.siteLink = siteLink;
    this.isoDate = isoDate;

    this.id = this.link;
  }

  static get name() {
    return 'FeedItem';
  }
}

export default FeedItem;
