import { d as defineComponent, a3 as h, D as resolveComponent, h as ref, k as computed, o as openBlock, b as createBlock, w as withCtx, p as unref, I as createVNode } from "./framework.1qnja6qJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AllElements",
  setup(__props) {
    const initiallySortedRows = [
      [
        h(
          resolveComponent("Link"),
          { removeUnderline: true, url: "https://www.example.com", key: "emerald-silk-gown" },
          () => "Emerald Silk Gown"
        ),
        "$875.00",
        124689,
        140,
        "$122,500.00"
      ],
      [
        h(
          resolveComponent("Link"),
          { removeUnderline: true, url: "https://www.example.com", key: "mauve-cashmere-scarf" },
          () => "Mauve Cashmere Scarf"
        ),
        "$230.00",
        124533,
        83,
        "$19,090.00"
      ],
      [
        h(
          resolveComponent("Link"),
          { removeUnderline: true, url: "https://www.example.com", key: "navy-merino-wool" },
          () => "Navy Merino Wool Blazer with khaki chinos and yellow belt"
        ),
        "$445.00",
        124518,
        32,
        "$14,240.00"
      ]
    ];
    const sortedRows = ref(null);
    const rows = computed(() => sortedRows.value || initiallySortedRows);
    const footerContent = h(
      resolveComponent("InlineStack"),
      {
        align: "center",
        gap: 200
      },
      () => [
        h(resolveComponent("Badge"), { tone: "success" }, () => "Tip!"),
        h("div", `Showing ${rows.value.length} of ${rows.value.length} results`)
      ]
    );
    const handleSort = (index, direction) => {
      sortedRows.value = sortCurrency(rows.value, index, direction);
    };
    function sortCurrency(rows2, index, direction) {
      return [...rows2].sort((rowA, rowB) => {
        const amountA = parseFloat((rowA[index] || 0).toString().substring(1));
        const amountB = parseFloat((rowB[index] || 0).toString().substring(1));
        return direction === "descending" ? amountB - amountA : amountA - amountB;
      });
    }
    return (_ctx, _cache) => {
      const _component_DataTable = resolveComponent("DataTable");
      const _component_LegacyCard = resolveComponent("LegacyCard");
      const _component_Page = resolveComponent("Page");
      return openBlock(), createBlock(_component_Page, { title: "Sales by product" }, {
        default: withCtx(() => [
          createVNode(_component_LegacyCard, null, {
            default: withCtx(() => [
              createVNode(_component_DataTable, {
                columnContentTypes: ["text", "numeric", "numeric", "numeric", "numeric"],
                headings: ["Product", "Price", "SKU Number", "Net quantity", "Net sales"],
                rows: rows.value,
                totals: ["", "", "", 255, "$155,830.00"],
                sortable: [false, true, false, false, true],
                defaultSortDirection: "descending",
                initialSortColumnIndex: 4,
                footerContent: unref(footerContent),
                onSort: handleSort
              }, null, 8, ["rows", "footerContent"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};