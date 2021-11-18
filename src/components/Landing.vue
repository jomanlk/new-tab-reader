<template>
    <section class="row">
    <div class="col-12 mb-3">
      <button @click="parse" type="button" class="btn btn-primary">Parse</button>
    </div>

    <div class="col-12">
      <FeedItemList />
    </div>
  </section>
</template>

<script>
import FeedParser from '../libs/feed/FeedParser';
import FeedItemList from './FeedItemList.vue'

const parser = new FeedParser();

export default {
  name: 'Landing',

  components:{FeedItemList},

  methods : {
    parse: function parse() {
      parser.syncAllFeeds();
    }
  }
}
</script>