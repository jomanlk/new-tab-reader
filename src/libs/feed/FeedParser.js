import db from '../../persistence/Database';
import Feed from '../../models/Feed';
import FeedItem from '../../models/FeedItem';
import RSSParser from 'rss-parser';

class FeedParser {
  async fetchItemsOfFeed(feed) {
    const feedUrl = feed.feedUrl;
    console.log(`fetching ${feedUrl}`);

    return new Promise(function(resolve) {
      try {
        let parser = new RSSParser();
        parser.parseURL(`${process.env.VUE_APP_PROXY_URL}${feedUrl}`, function(
          err,
          feed
        ) {
          if (err) {
            console.log(`Failed fetching ${feedUrl}`);
            console.log(err);
            resolve([]);
            return;
          }
          resolve(
            feed.items.slice(0, 50).map(item => {
              // Do some more cleanup
              item.image = `https://picsum.photos/seed/${btoa(item.link)}/600`;
              item.siteTitle = feed.title;
              item.siteLink = feed.link;
              item.contentSnippet = item.contentSnippet.substring(0, 150);
              return item;
            })
          );
        });
      } catch (e) {
        console.log(e);
        resolve([]);
      }
    });
  }

  /**
   * Fetches all rss feeds and synces
   */
  async syncAllFeeds() {
    db.getAll(Feed)
      .slice(0, 5)
      .forEach(async feed => {
        db.saveAll(
          FeedItem,
          (await this.fetchItemsOfFeed(feed)).map(item => new FeedItem(item))
        );
      });
  }
}

export default FeedParser;
