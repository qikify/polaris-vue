import { _ as _export_sfc, D as resolveComponent, o as openBlock, b as createBlock, w as withCtx, a as createTextVNode, I as createVNode } from "./framework.2IsXxFXf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Text = resolveComponent("Text");
  const _component_Box = resolveComponent("Box");
  return openBlock(), createBlock(_component_Box, { background: "bg-fill-info" }, {
    default: withCtx(() => [
      createVNode(_component_Text, {
        as: "p",
        variant: "bodyMd"
      }, {
        default: withCtx(() => [
          createTextVNode(" Content inside a box ")
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Color = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Color as default
};
