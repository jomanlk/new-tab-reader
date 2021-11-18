<template>
  <div id="app">
    <Header 
      @toggleImportFeeds="isImportFeedsVisible = true" 
      @toggleViewFeeds="isViewFeedsVisible = true" />
    <ImportFeeds @close="isImportFeedsVisible = false" v-if="isImportFeedsVisible" 
      :isVisible="isImportFeedsVisible" />
    <router-view class="container-fluid mt-3"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ImportFeeds from './components/ImportFeeds.vue';

export default {
  name: 'App',
  data : function data(){
    return {
      isImportFeedsVisible : false,
      isViewFeedsVisible : false
    }
  },
  components: {
    Header,
    ImportFeeds,
  }
}
</script>
 