<template>
<div class="row">
  <h2>Subscribed Feeds</h2>
  <section class="col-12">
      <p v-if="!feedItems.length" class="alert alert-info">You're not following any feeds.</p>

      <div class="row feed-list">
        <div v-for="feed in feedItems" :key="feed.id" class="card-wrap mb-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <a :href="feed.getSiteUrl()">{{ feed.title }}</a>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted"> {{ feed.feedType }} </h6>
              <p class="card-text">
                <small>
                  <a :href="feed.feedUrl" class="text-secondary">{{ feed.feedUrl }}</a>
                </small>
              </p>
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

  components: {
  },

  props: {
    isVisible: Boolean
  },

  data() {
    return {
      feedItems : [], 
    }
  },

  mounted: function () {
    this.feedItems = db.getAll(Feed);
  },
};
</script>
