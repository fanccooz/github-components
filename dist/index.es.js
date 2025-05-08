import { defineComponent as r, createElementBlock as s, openBlock as l, normalizeClass as a, renderSlot as i } from "vue";
const p = /* @__PURE__ */ r({
  __name: "Button",
  props: {
    color: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, c = () => {
      t("click");
    };
    return (o, m) => (l(), s("button", {
      class: a(["btn", o.color]),
      onClick: c
    }, [
      i(o.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _ = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [c, o] of n)
    t[c] = o;
  return t;
}, d = /* @__PURE__ */ _(p, [["__scopeId", "data-v-795e0a1b"]]);
export {
  d as Button
};
