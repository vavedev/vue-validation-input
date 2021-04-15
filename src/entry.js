import component from '@/vue-validation-input.vue';

const install = function installVueValidationInput(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueValidationInput', component);
};

const plugin = {
  install,
};

if ('false' === process.env.ES_BUILD) {
  let GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}

component.install = install;

export default component;