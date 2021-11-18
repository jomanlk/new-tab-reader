<template>
  <div>
    <p v-if="!items.length" class="alert alert-info">
      You don't have anything to view right now.
    </p>

    <div class="row feed-list">
      <div v-for="item in items" :key="item.id" class="card-wrap mb-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <a :href="item.link">{{ item.title }}</a>
            </h5>
            <h6 class="card-subtitle mb-2 ">
              <a class="text-muted" :href="item.siteLink">{{
                item.siteTitle
              }}</a>
            </h6>
            <p class="card-text">
              {{ item.contentSnippet }}
              <small>
                {{ item.isoDate }}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../persistence/Database';
import FeedItem from '../models/FeedItem';

export default {
  name: 'FeedItemList',
  components: {},
  data() {
    return {
      items: [],
    };
  },

  mounted: function() {
    const items = db.getAll(FeedItem);
    // Sort by date
    items.sort((a, b) => {
      if (a.isoDate < b.isoDate) {
        return -1;
      } else if (a.isoDate > b.isoDate) {
        return 1;
      }
      return 0;
    });
    this.items = items;
  },
  methods: {},
};
</script>

<style lang="scss">
.feed-list {
  a {
    display: none;
  }
}
</style>
