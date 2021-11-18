<template>
  <div>
    <div class="modal-backdrop fade show"></div>
    <div class="modal" v-bind:class="{show : isVisible}" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <slot name="header"></slot>
            </h5>
            <button @click="close" type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <section class="modal-body">
            <slot name="body">Some content</slot>
          </section>
          <footer class="modal-footer">
            <slot name="footer">
              <button @click="close" type="button" class="btn btn-secondary">Close</button>
            </slot>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  components: {},

  props: {
    isVisible : Boolean
  },

  data() {
    return {
      
    }
  },

  mounted: function () {},
  methods: {
    close : function close() {
      this.$emit('close');
    }
  },
};
</script>

<style scoped>
.modal.show {
  display: block;
}
</style>