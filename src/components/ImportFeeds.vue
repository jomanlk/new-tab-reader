<template>
  <Modal @close="close" :isVisible="isVisible">
    <template v-slot:header>Import Feeds</template>
    <template v-slot:body>
      <div class="col-12">
        <textarea
          v-model="opmlXML"
          placeholder="Paste the OPML XML feed here"
          class="form-control"
        ></textarea>
      </div>
    </template>
    <template v-slot:footer>
      <button @click="importFeed" class="btn btn-primary" type="button">
        Import Feed
      </button>
    </template>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';
import OpmlXmlParser from '../libs/opml/OpmlXmlParser';
import Feed from '../models/Feed';
import db from '../persistence/Database';
import feedXml from '../sample-data/feed';

const parser = new OpmlXmlParser();

export default {
  name: 'ImportFeed',

  components: {
    Modal,
  },

  props: {
    isVisible: Boolean,
  },

  data() {
    return {
      opmlXML: feedXml,
    };
  },

  mounted: function() {},
  methods: {
    close: function close() {
      this.$emit('close');
    },

    importFeed: async function importFeed() {
      const feeds = await parser.parse(this.opmlXML);
      if (feeds.length == 0) {
        alert("There's nothing to import");
        return;
      }

      console.log('starting log1');
      console.log(Feed);
      console.log(Feed._name);
      console.log(Feed.name);
      console.log(Object.getOwnPropertyNames(Feed));
      console.log(Object.getOwnPropertyDescriptor(Feed, '_name'));

      const feedModels = [];
      feeds.forEach(feedData => {
        feedModels.push(new Feed(feedData));
      });
      db.saveAll(Feed, feedModels);
      this.close();
    },
  },
};
</script>
