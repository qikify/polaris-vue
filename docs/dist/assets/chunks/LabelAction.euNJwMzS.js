import { d as defineComponent, h as ref, D as resolveComponent, o as openBlock, b as createBlock } from "./framework.1qnja6qJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LabelAction",
  setup(__props) {
    const textFieldValue = ref("6201.11.0000");
    return (_ctx, _cache) => {
      const _component_TextField = resolveComponent("TextField");
      return openBlock(), createBlock(_component_TextField, {
        label: "Tariff code",
        modelValue: textFieldValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => textFieldValue.value = $event),
        "label-action": { content: "Look up codes" },
        autoComplete: "off"
      }, null, 8, ["modelValue"]);
    };
  }
});
export {
  _sfc_main as default
};