<template>
  <div class="row">
    <h2 class="mb-4">Subscribed Feeds</h2>
    <section class="col-12">
      <p v-if="!feedItems.length" class="alert alert-info">
        You're not following any feeds.
      </p>

      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 feed-list">
        <div v-for="feed in feedItems" :key="feed.id" class="col">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">
                <a v-snip="1" :href="feed.getSiteUrl()">{{ feed.title }}</a>
              </h3>
              <a
                v-snip="1"
                :title="feed.feedUrl"
                :href="feed.feedUrl"
                class="text-primary text-decoration-none"
              >
                {{ feed.feedUrl }}
              </a>
              <span class="badge bg-primary mt-2">{{ feed.feedType }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Feed from '../models/Feed';
import db from '../persistence/Database';

export default {
  name: 'ViewFeed',

  components: {},

  props: {
    isVisible: Boolean,
  },

  data() {
    return {
      feedItems: [],
    };
  },

  mounted: function() {
    this.feedItems = db.getAll(Feed);
    console.log(this.feedItems);
  },
};
</script>
