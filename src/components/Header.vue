<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          NewTabReader
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 text-white">Home</router-link></li>
        </ul>

        <div class="text-end">
          <button v-on:click="$emit('toggleImportFeeds')" type="button" class="btn btn-primary">Import Feeds</button>
          <router-link to="/feeds" class="btn btn-primary">View Feeds</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
}
</script>
 
<style scoped>
.text-end .btn {
  margin-right: 5px;  
}
</style>