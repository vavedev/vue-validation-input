<style scoped>

</style>

<template>
  <input 
  v-model="value"
  :class="inputClass" 
  :placeholder="placeholder" 
  >
</template>

<script>
export default {
  name: 'VueValidationInput',
  props: {
    minLength: { type: Number, required: false, default: 0 },
    maxLength: { type: Number, required: false, default: 0 }, 
    placeholder: { type: String, required: false, default: '' }
  },
  data() {
    return {
      valid: false,
      value: '',
    };
  },
  computed: {},
  watch: {
    value: function(newValue, oldValue){
      if(newValue.length >= this.minLength && newValue.length <= this.maxLength) this.valid = true;
      else this.valid = false;
    }
  },
  methods: {},
};
</script>