import { _ as _export_sfc, D as resolveComponent, o as openBlock, b as createBlock, w as withCtx, a as createTextVNode, I as createVNode } from "./framework.2IsXxFXf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Text = resolveComponent("Text");
  const _component_Banner = resolveComponent("Banner");
  return openBlock(), createBlock(_component_Banner, {
    title: "Some of your product variants are missing weights",
    tone: "warning",
    action: { content: "Edit variant weights", url: "" },
    secondaryAction: { content: "View all variants", url: "" },
    onDismiss: () => {
    }
  }, {
    default: withCtx(() => [
      createVNode(_component_Text, { as: "p" }, {
        default: withCtx(() => [
          createTextVNode(" Add weights to show accurate rates at checkout and when buying shipping labels in Shopify. ")
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const BannerWithFooterCallToAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  BannerWithFooterCallToAction as default
};
