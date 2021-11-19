<template>
  <div>
    <p v-if="!items.length" class="alert alert-info">
      You don't have anything to view right now.
    </p>

    <div class="row feed-item-list">
      <div v-for="item in items" :key="item.id" class="card-wrap mb-2">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title mb-2">
              <a v-snip="2" :title="item.title" :href="item.link">{{
                item.title
              }}</a>
            </h3>

            <div
              class="card-image"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>

            <div class="card-text mb-2">
              <p v-snip="4" class="mb-0">{{ item.contentSnippet }}</p>
            </div>

            <div class="d-flex justify-content-between">
              <small>
                <timeago class="text-muted" :datetime="item.isoDate"></timeago>
              </small>

              <small>
                <a class="text-muted" :href="item.siteLink">{{
                  item.siteTitle
                }}</a>
              </small>
            </div>
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
    console.log(items);
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
