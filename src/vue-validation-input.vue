<style scoped>
  .vue-validation-container {
    display: flex;
    align-items: center;
  }
  .vue-validation-input {
    margin-right: 2px;
  }
  .vue-validation-input:focus{
    outline: none;
  }
</style>

<template>
  <div class="vue-validation-container">
    <input
    class="vue-validation-input"
    :class="inputClass"
    type="text"
    v-model="value"
    :minlength="minlength"
    :maxlength="maxlength"
    :placeholder="placeholder"
    :pattern="pattern">
    <font-awesome-icon
    v-if="value"
    class="vue-validation-input-error-icon"
    :class="iconClass"
    :color="valid ? validColor : invalidColor"
    :icon="valid ? 'check-circle' : 'times-circle'" />
  </div>
</template>

<script>
export default {
  name: 'VueValidationInput',
  props: {
    inputClass: { type: [String, Array, Object], default: '' },
    iconClass: { type: [String, Array, Object], default: '' },
    placeholder: { type: String, default: '' },
    pattern: { type: String, default: '' },
    minlength: { type: Number, default: 1 },
    maxlength: { type: Number, default: -1 },
    validColor: { type: String, default: '#33AF28' },
    invalidColor: { type: String, default: '#EE0202' }
  },
  data() {
    return {
      value: '',
      valid: false
    };
  },
  watch: {
    value: function(newValue, oldValue){
      if(newValue !== oldValue){
        if(this.minlength) this.valid = newValue.length < this.minlength ? false : true;
        if(this.pattern) this.valid = newValue.match(this.pattern) ? true : false;
      }
    }
  },
};
</script>