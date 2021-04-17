'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'VueValidationInput',
  props: {
    containerClass: {
      type: [String, Array, Object],
      default: ''
    },
    inputClass: {
      type: [String, Array, Object],
      default: ''
    },
    iconClass: {
      type: [String, Array, Object],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    pattern: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    minlength: {
      type: Number,
      default: 1
    },
    maxlength: {
      type: Number,
      default: -1
    },
    validColor: {
      type: String,
      default: '#33AF28'
    },
    invalidColor: {
      type: String,
      default: '#EE0202'
    }
  },
  data: function data() {
    return {
      value: '',
      valid: false
    };
  },
  watch: {
    value: function value(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (this.minlength) this.valid = newValue.length < this.minlength ? false : true;
        if (this.pattern) this.valid = newValue.match(this.pattern) ? true : false;
      }
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-validation-container",
    class: _vm.containerClass
  }, [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("minlength", _vm.minlength) + _vm._ssrAttr("maxlength", _vm.maxlength) + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("pattern", _vm.pattern) + _vm._ssrAttr("readonly", _vm.readonly) + _vm._ssrAttr("value", _vm.value) + _vm._ssrClass("vue-validation-input", _vm.inputClass) + " data-v-ce2dd152> "), _vm.value ? _c('font-awesome-icon', {
    staticClass: "vue-validation-input-error-icon",
    class: _vm.iconClass,
    attrs: {
      "color": _vm.valid ? _vm.validColor : _vm.invalidColor,
      "icon": _vm.valid ? 'check-circle' : 'times-circle'
    }
  }) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-ce2dd152_0", {
    source: ".vue-validation-container[data-v-ce2dd152]{display:flex;align-items:center}.vue-validation-input[data-v-ce2dd152]{margin-right:2px}.vue-validation-input[data-v-ce2dd152]:focus{outline:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-ce2dd152";
/* module identifier */

var __vue_module_identifier__ = "data-v-ce2dd152";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);var install = function installVueValidationInput(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueValidationInput', __vue_component__);
};

var plugin = {
  install: install
};

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}

__vue_component__.install = install;exports.default=__vue_component__;