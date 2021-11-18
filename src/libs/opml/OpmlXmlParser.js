//import sax from './sax';
import sax from 'sax';

/**
 * Code lifted from here : https://www.npmjs.com/package/node-opml-parser
 */

class OpmlXmlParser {
  async parse(opmlXML) {
    return new Promise((resolve, reject) => {
      const parser = sax.parser({
        strict: true,
        lowercase: true,
      });

      const items = [];
      const existingFeeds = {};

      parser.onopentag = function(node) {
        if (node.name === 'outline') {
          // folders also are outlines, make sure an xmlUrl is available
          const feedUrl = node.attributes.xmlUrl;
          if (feedUrl && !existingFeeds[feedUrl]) {
            items.push({
              title:
                node.attributes.title ||
                node.attributes.text ||
                node.attributes.description,
              url: node.attributes.htmlUrl,
              feedUrl: feedUrl,
              feedType: node.attributes.type,
            });
            existingFeeds[feedUrl] = true;
          }
        }
      };

      parser.onend = function() {
        resolve(items);
      };

      // Annoyingly sax also emits an error
      // https://github.com/isaacs/sax-js/pull/115
      try {
        parser.write(opmlXML).close();
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default OpmlXmlParser;
