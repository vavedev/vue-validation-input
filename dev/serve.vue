<script>
import Vue from 'vue';
import VueValidationInput from '@/vue-validation-input.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueValidationInput
  }
});
</script>

<template>
  <div id="app">
    <vue-validation-input :placeholder="'This is a placeholder'"  />
  </div>
</template>
