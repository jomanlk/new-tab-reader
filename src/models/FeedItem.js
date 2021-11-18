class FeedItem {
  constructor({ link, title, contentSnippet, siteTitle, siteLink, isoDate }) {
    this.link = link;
    this.title = title;
    this.contentSnippet = contentSnippet;
    this.siteTitle = siteTitle;
    this.siteLink = siteLink;
    this.isoDate = isoDate;

    this.id = this.link;
  }
}
FeedItem.prototype.name = 'FeedItem';

export default FeedItem;
