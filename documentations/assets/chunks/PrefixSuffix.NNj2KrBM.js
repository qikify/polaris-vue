import { d as defineComponent, h as ref, D as resolveComponent, o as openBlock, b as createBlock } from "./framework.2IsXxFXf.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PrefixSuffix",
  setup(__props) {
    const textFieldValue = ref("2.00");
    return (_ctx, _cache) => {
      const _component_TextField = resolveComponent("TextField");
      return openBlock(), createBlock(_component_TextField, {
        label: "Price",
        type: "number",
        modelValue: textFieldValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => textFieldValue.value = $event),
        prefix: "$",
        autoComplete: "off"
      }, null, 8, ["modelValue"]);
    };
  }
});
export {
  _sfc_main as default
};
