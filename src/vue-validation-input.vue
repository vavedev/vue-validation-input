<style scoped>

</style>

<template>
  <div class="">
    <label :for="`${inputClass}-label`">{{label}}</label>
    <input 
    v-model="value"
    :class="inputClass" 
    :placeholder="placeholder" 
    >
  </div>
</template>

<script>
export default {
  name: 'VueValidationInput',
  props: {
    inputClass: { type: String, required: false, default: 'vue-validation-input'},
    label: {type: String, required: false, default: '' },
    minLength: { type: Number, required: false, default: 0 },
    maxLength: { type: Number, required: false, default: 0 }, 
    placeholder: { type: String, required: false, default: '' }
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