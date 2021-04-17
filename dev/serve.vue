<template>
  <div id="app">
    <vue-validation-input />
  </div>
</template>

<script>
import Vue from 'vue';
import VueValidationInput from '@/vue-validation-input.vue';

export default Vue.extend({
  name: 'VueValidationInputApp',
  components: {
    VueValidationInput
  }
});
</script>