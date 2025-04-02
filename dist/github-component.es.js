import { defineComponent as o, createElementBlock as e, openBlock as s, toDisplayString as a } from "vue";
const l = { class: "my-button" }, c = /* @__PURE__ */ o({
  __name: "MyButton",
  props: {
    label: {}
  },
  setup(t) {
    return (n, p) => (s(), e("button", l, a(n.label), 1));
  }
}), u = {
  install(t) {
    t.component("MyButton", c);
  }
};
export {
  c as MyButton,
  u as default
};
