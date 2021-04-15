<style scoped>

</style>

<template>
  <div class="vue-validation-input-container" :class="containerClass">
    <label class="vue-validation-input-label" :class="labelClass">{{label}}</label>
    <input
    class="vue-validation-input"
    v-model="value"
    :class="inputClass"
    :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'VueValidationInput',
  props: {
    containerClass: { type: [String, Array, Object], default: '' },
    inputClass: { type: [String, Array, Object], default: '' },
    labelClass: { type: [String, Array, Object], default: '' },
    label: {type: String, default: '' },
    minLength: { type: Number, default: 0 },
    maxLength: { type: Number, default: 0 }, 
    placeholder: { type: String, default: '' }
  },
  data() {
    return {
      error: {
        message: ''
      },
      valid: false,
      value: '',
    };
  },
  computed: {},
  watch: {
    value: function(newValue, oldValue){
      /*if(newValue.length >= this.minLength && newValue.length <= this.maxLength) this.valid = true;
      else this.valid = false;*/
    }
  },
  methods: {
    
  },
};
</script>