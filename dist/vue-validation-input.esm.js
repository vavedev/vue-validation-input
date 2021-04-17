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

  data() {
    return {
      value: '',
      valid: false
    };
  },

  watch: {
    value: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        if (this.minlength) this.valid = newValue.length < this.minlength ? false : true;
        if (this.pattern) this.valid = newValue.match(this.pattern) ? true : false;
        this.$emit('vue-validation-output', {
          value: this.value,
          valid: this.valid
        });
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "vue-validation-container",
    class: _vm.containerClass
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.value,
      expression: "value"
    }],
    staticClass: "vue-validation-input",
    class: _vm.inputClass,
    attrs: {
      "type": "text",
      "minlength": _vm.minlength,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder,
      "pattern": _vm.pattern,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.value = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.value ? _c('font-awesome-icon', {
    staticClass: "vue-validation-input-error-icon",
    class: _vm.iconClass,
    attrs: {
      "color": _vm.valid ? _vm.validColor : _vm.invalidColor,
      "icon": _vm.valid ? 'check-circle' : 'times-circle'
    }
  }) : _vm._e()], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-a0dfc09c_0", {
    source: ".vue-validation-container[data-v-a0dfc09c]{display:flex;align-items:center}.vue-validation-input[data-v-a0dfc09c]{margin-right:2px}.vue-validation-input[data-v-a0dfc09c]:focus{outline:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-a0dfc09c";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

const install = function installVueValidationInput(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueValidationInput', __vue_component__);
};

__vue_component__.install = install;

export default __vue_component__;
