/* @ds-bundle: {"format":3,"namespace":"DesignSystem_17827c","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Accordion","sourcePath":"components/data-display/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Chip","sourcePath":"components/data-display/Chip.jsx"},{"name":"Icon","sourcePath":"components/data-display/Icon.jsx"},{"name":"Link","sourcePath":"components/data-display/Link.jsx"},{"name":"ListItem","sourcePath":"components/data-display/ListItem.jsx"},{"name":"ProgressBar","sourcePath":"components/data-display/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/data-display/Spinner.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"Toast","sourcePath":"components/overlays/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"3bd1123f19eb","components/actions/IconButton.jsx":"8eb6794c2cce","components/data-display/Accordion.jsx":"cc395196acce","components/data-display/Avatar.jsx":"6281528a13fe","components/data-display/Card.jsx":"c59cc2528458","components/data-display/Chip.jsx":"38153237e003","components/data-display/Icon.jsx":"04cd91c02c71","components/data-display/Link.jsx":"b625a4fb2603","components/data-display/ListItem.jsx":"c956a55b62e7","components/data-display/ProgressBar.jsx":"3cd912df15eb","components/data-display/Spinner.jsx":"8af250efbfcd","components/data-display/Table.jsx":"1b8d98252c44","components/feedback/Badge.jsx":"2f87f631bbf1","components/feedback/Banner.jsx":"fb2c9001c31a","components/feedback/Callout.jsx":"e310839f1aff","components/forms/Checkbox.jsx":"192e5373f280","components/forms/FormField.jsx":"2d4ec836b962","components/forms/Radio.jsx":"87a058a8d990","components/forms/Select.jsx":"9ec0a2ecb023","components/forms/Toggle.jsx":"9c39c1ff0b24","components/navigation/Breadcrumbs.jsx":"9d3406372449","components/navigation/Menu.jsx":"6ac499598792","components/navigation/Tabs.jsx":"ebbe8bdbe317","components/overlays/Dialog.jsx":"6181292696c7","components/overlays/Toast.jsx":"a582c73c323d","components/overlays/Tooltip.jsx":"e343a7df5cfc","ui_kits/password-manager/App.jsx":"1a4aa9698766","ui_kits/password-manager/Generator.jsx":"69ef283453db","ui_kits/password-manager/ItemDetail.jsx":"9e53ee8a5a16","ui_kits/password-manager/Login.jsx":"3b0632e659a0","ui_kits/password-manager/Send.jsx":"a80e9e0b1465","ui_kits/password-manager/Sidebar.jsx":"4638d21f20bf","ui_kits/password-manager/VaultList.jsx":"ead5a393a142","ui_kits/password-manager/data.js":"706ca74b0361"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_17827c = window.DesignSystem_17827c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Injects a stylesheet once per component (keeps hover/focus/active states
 * working while staying self-contained — no external CSS file needed beyond
 * the design-system tokens).
 */
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const BUTTON_CSS = `
.bw-btn{
  font-family:var(--font-sans);
  font-weight:var(--font-weight-medium);
  border:1px solid transparent;
  border-radius:var(--radius-xl);
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:.5rem;
  text-align:center;
  text-decoration:none;
  transition:background-color .15s ease,border-color .15s ease,color .15s ease;
  outline:none;
  white-space:nowrap;
}
.bw-btn:focus-visible{
  box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);
}
.bw-btn--block{width:100%;}
/* sizes */
.bw-btn--small{padding:.4375rem .75rem;font-size:var(--text-xs);line-height:1rem;}
.bw-btn--default{padding:.5625rem 1rem;font-size:var(--text-sm);line-height:1.25rem;}
.bw-btn--large{padding:.6875rem 1rem;font-size:var(--text-base);line-height:1.5rem;}
/* primary */
.bw-btn--primary{background:var(--color-bg-brand);border-color:var(--color-border-brand);color:var(--color-fg-contrast);}
.bw-btn--primary:hover{background:var(--color-bg-brand-strong);border-color:var(--color-border-brand-strong);}
/* secondary */
.bw-btn--secondary{background:var(--color-bg-secondary);border-color:var(--color-border-base);color:var(--color-fg-heading);}
.bw-btn--secondary:hover{background:var(--color-bg-quaternary);color:var(--color-fg-brand-strong);}
/* danger */
.bw-btn--danger{background:var(--color-bg-danger);border-color:var(--color-border-danger);color:var(--color-fg-contrast);}
.bw-btn--danger:hover{background:var(--color-bg-danger-strong);border-color:var(--color-border-danger-strong);}
/* success */
.bw-btn--success{background:var(--color-bg-success);border-color:var(--color-border-success);color:var(--color-fg-contrast);}
.bw-btn--success:hover{background:var(--color-bg-success-strong);border-color:var(--color-border-success-strong);}
/* outlines */
.bw-btn--primaryOutline{background:transparent;border-color:var(--color-border-brand);color:var(--color-fg-brand);}
.bw-btn--primaryOutline:hover{background:var(--color-bg-hover);border-color:var(--color-border-brand-strong);color:var(--color-fg-brand-strong);}
.bw-btn--dangerOutline{background:transparent;border-color:var(--color-border-danger);color:var(--color-fg-danger);}
.bw-btn--dangerOutline:hover{background:var(--color-bg-hover);border-color:var(--color-border-danger-strong);color:var(--color-fg-danger-strong);}
/* ghost */
.bw-btn--ghost{background:transparent;border-color:transparent;color:var(--color-fg-heading);}
.bw-btn--ghost:hover{background:var(--color-bg-hover);color:var(--color-fg-brand);}
/* disabled */
.bw-btn:disabled,.bw-btn[aria-disabled="true"]{
  background:var(--color-bg-inactive);
  border-color:var(--color-border-base);
  color:var(--color-fg-inactive);
  cursor:default;
  pointer-events:none;
}
.bw-btn--ghost:disabled,.bw-btn--ghost[aria-disabled="true"],
.bw-btn--primaryOutline:disabled,.bw-btn--dangerOutline:disabled{background:transparent;}
.bw-spin{animation:bwi-spin 1s linear infinite;}
`;

/**
 * Bitwarden Button. Renders a <button> (or <a> when href is provided).
 */
function Button({
  variant = "primary",
  size = "default",
  block = false,
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  href,
  type = "button",
  children,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-button-styles", BUTTON_CSS);
  const classes = ["bw-btn", `bw-btn--${variant}`, `bw-btn--${size}`, block ? "bw-btn--block" : "", className].filter(Boolean).join(" ");
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-spinner bw-spin",
    "aria-hidden": "true"
  }), !loading && startIcon && /*#__PURE__*/React.createElement("i", {
    className: `bwi ${startIcon}`,
    "aria-hidden": "true"
  }), children && /*#__PURE__*/React.createElement("span", null, children), !loading && endIcon && /*#__PURE__*/React.createElement("i", {
    className: `bwi ${endIcon}`,
    "aria-hidden": "true"
  }));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: classes
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: classes,
    disabled: disabled || loading,
    "aria-disabled": disabled || loading || undefined
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const ICONBUTTON_CSS = `
.bw-iconbtn{
  font-family:var(--font-sans);
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border:1px solid transparent;
  border-radius:var(--radius-full);
  background:transparent;
  cursor:pointer;
  transition:background-color .15s ease,color .15s ease,border-color .15s ease;
  outline:none;
  color:var(--color-fg-body);
}
.bw-iconbtn:focus-visible{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}
/* sizes */
.bw-iconbtn--small{width:2rem;height:2rem;font-size:1rem;}
.bw-iconbtn--default{width:2.5rem;height:2.5rem;font-size:1.125rem;}
.bw-iconbtn--large{width:3rem;height:3rem;font-size:1.25rem;}
/* variants */
.bw-iconbtn--main{color:var(--color-fg-body);}
.bw-iconbtn--main:hover{background:var(--color-bg-hover);color:var(--color-fg-brand);}
.bw-iconbtn--muted{color:var(--color-fg-body-subtle);}
.bw-iconbtn--muted:hover{background:var(--color-bg-hover);color:var(--color-fg-brand);}
.bw-iconbtn--primary{background:var(--color-bg-brand);border-color:var(--color-border-brand);color:var(--color-fg-contrast);}
.bw-iconbtn--primary:hover{background:var(--color-bg-brand-strong);}
.bw-iconbtn--danger{color:var(--color-fg-danger);}
.bw-iconbtn--danger:hover{background:var(--color-bg-hover);color:var(--color-fg-danger-strong);}
.bw-iconbtn--contrast{color:var(--color-fg-contrast);}
.bw-iconbtn--contrast:hover{background:var(--color-bg-hover-contrast);}
.bw-iconbtn:disabled,.bw-iconbtn[aria-disabled="true"]{color:var(--color-fg-inactive);cursor:default;pointer-events:none;}
`;

/**
 * Circular icon-only button. Always pass a descriptive `label` for a11y.
 */
function IconButton({
  icon,
  label,
  variant = "main",
  size = "default",
  disabled = false,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-iconbutton-styles", ICONBUTTON_CSS);
  const classes = ["bw-iconbtn", `bw-iconbtn--${variant}`, `bw-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    "aria-label": label,
    title: label,
    disabled: disabled,
    "aria-disabled": disabled || undefined
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: `bwi ${icon}`,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const ACCORDION_CSS = `
.bw-accordion{font-family:var(--font-sans);border:1px solid var(--color-border-base);border-radius:var(--radius-lg);overflow:hidden;background:var(--color-bg-primary);}
.bw-accordion__item + .bw-accordion__item{border-top:1px solid var(--color-border-light);}
.bw-accordion__head{
  display:flex;align-items:center;gap:10px;width:100%;padding:13px 16px;
  background:transparent;border:none;cursor:pointer;text-align:left;
  font-family:var(--font-sans);font-size:var(--text-base);font-weight:var(--font-weight-medium);
  color:var(--color-fg-heading);
}
.bw-accordion__head:hover{background:var(--color-bg-hover);}
.bw-accordion__head i.lead{color:var(--color-fg-body-subtle);font-size:16px;width:18px;}
.bw-accordion__chev{margin-left:auto;color:var(--color-fg-body-subtle);transition:transform .18s ease;font-size:14px;}
.bw-accordion__chev--open{transform:rotate(180deg);}
.bw-accordion__body{padding:0 16px 16px;font-size:var(--text-sm);color:var(--color-fg-body);}
`;

/**
 * Accordion. `items`: array of { id, title, icon?, content }. Single-open by
 * default; pass `multiple` to allow several open at once.
 */
function Accordion({
  items = [],
  defaultOpen = [],
  multiple = false,
  className = ""
}) {
  useStyleOnce("bw-accordion-styles", ACCORDION_CSS);
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = id => {
    setOpen(prev => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["bw-accordion", className].filter(Boolean).join(" ")
  }, items.map(it => {
    const isOpen = open.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      className: "bw-accordion__item",
      key: it.id
    }, /*#__PURE__*/React.createElement("button", {
      className: "bw-accordion__head",
      "aria-expanded": isOpen,
      onClick: () => toggle(it.id)
    }, it.icon && /*#__PURE__*/React.createElement("i", {
      className: `bwi ${it.icon} lead`,
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("i", {
      className: `bwi bwi-angle-down bw-accordion__chev ${isOpen ? "bw-accordion__chev--open" : ""}`,
      "aria-hidden": "true"
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "bw-accordion__body"
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const AVATAR_CSS = `
.bw-avatar{
  display:inline-flex;align-items:center;justify-content:center;
  border-radius:var(--radius-full);
  color:var(--color-white);
  font-family:var(--font-sans);font-weight:var(--font-weight-medium);
  text-transform:uppercase;flex:none;overflow:hidden;line-height:1;
}
.bw-avatar--small{width:1.75rem;height:1.75rem;font-size:.6875rem;}
.bw-avatar--default{width:2.5rem;height:2.5rem;font-size:.9375rem;}
.bw-avatar--large{width:3.5rem;height:3.5rem;font-size:1.25rem;}
.bw-avatar--teal{background:var(--color-bg-avatar-teal);}
.bw-avatar--coral{background:var(--color-bg-avatar-coral);}
.bw-avatar--brand{background:var(--color-bg-avatar-brand);}
.bw-avatar--green{background:var(--color-bg-avatar-green);}
.bw-avatar--purple{background:var(--color-bg-avatar-purple);}
.bw-avatar img{width:100%;height:100%;object-fit:cover;}
`;
const PALETTE = ["brand", "teal", "coral", "green", "purple"];
function initials(text = "") {
  const parts = text.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2);
  return parts[0][0] + parts[parts.length - 1][0];
}
function autoColor(text = "") {
  let sum = 0;
  for (let i = 0; i < text.length; i++) sum += text.charCodeAt(i);
  return PALETTE[sum % PALETTE.length];
}

/** Circular avatar with initials (or an image). Color auto-derives from text. */
function Avatar({
  text = "",
  src,
  color,
  size = "default",
  className = "",
  ...rest
}) {
  useStyleOnce("bw-avatar-styles", AVATAR_CSS);
  const resolved = color || autoColor(text);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["bw-avatar", `bw-avatar--${resolved}`, `bw-avatar--${size}`, className].filter(Boolean).join(" "),
    title: text
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: text
  }) : initials(text));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CARD_CSS = `
.bw-card{
  background:var(--color-bg-primary);
  border:1px solid var(--color-border-base);
  border-radius:var(--radius-xl);
  padding:1.5rem;
  font-family:var(--font-sans);
  color:var(--color-fg-body);
}
.bw-card--flush{padding:0;overflow:hidden;}
.bw-card--secondary{background:var(--color-bg-secondary);}
.bw-card__title{font-size:var(--text-lg);font-weight:var(--font-weight-medium);color:var(--color-fg-heading);margin:0 0 .25rem;}
.bw-card__subtitle{font-size:var(--text-sm);color:var(--color-fg-body-subtle);margin:0 0 1rem;}
`;

/** Generic surface container. */
function Card({
  title,
  subtitle,
  surface = "primary",
  flush = false,
  children,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-card-styles", CARD_CSS);
  const classes = ["bw-card", surface === "secondary" ? "bw-card--secondary" : "", flush ? "bw-card--flush" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    className: "bw-card__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "bw-card__subtitle"
  }, subtitle), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Chip.jsx
try { (() => {
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CHIP_CSS = `
.bw-chip{
  display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);
  font-size:var(--text-sm);font-weight:var(--font-weight-medium);
  padding:5px 10px;border-radius:var(--radius-full);cursor:pointer;
  border:1px solid var(--color-border-base);background:var(--color-bg-secondary);
  color:var(--color-fg-body);transition:background-color .12s ease,border-color .12s ease,color .12s ease;
}
.bw-chip:hover{border-color:var(--color-border-brand-soft);color:var(--color-fg-brand);}
.bw-chip--selected{background:var(--color-bg-brand-softer);border-color:var(--color-border-brand-soft);color:var(--color-fg-brand-strong);}
.bw-chip--static{cursor:default;}
.bw-chip--static:hover{border-color:var(--color-border-base);color:var(--color-fg-body);}
.bw-chip__remove{background:transparent;border:none;cursor:pointer;color:inherit;font-size:13px;padding:0;line-height:1;opacity:.7;}
.bw-chip__remove:hover{opacity:1;}
`;

/** Filter / selectable chip. Use `selected` + `onClick`, or `onRemove` for a removable tag. */
function Chip({
  label,
  icon,
  selected = false,
  onClick,
  onRemove,
  className = ""
}) {
  useStyleOnce("bw-chip-styles", CHIP_CSS);
  const interactive = !!(onClick || onRemove);
  return /*#__PURE__*/React.createElement("span", {
    className: ["bw-chip", selected ? "bw-chip--selected" : "", interactive ? "" : "bw-chip--static", className].filter(Boolean).join(" "),
    onClick: onClick
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: `bwi ${icon}`,
    "aria-hidden": "true"
  }), label, onRemove && /*#__PURE__*/React.createElement("button", {
    className: "bw-chip__remove",
    "aria-label": `Remove ${label}`,
    onClick: e => {
      e.stopPropagation();
      onRemove();
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-close",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thin wrapper around the Bitwarden icon font (bwi). Equivalent to writing
 * <i className="bwi bwi-…" />, with size and spin helpers.
 */
function Icon({
  name,
  size,
  spin = false,
  className = "",
  title,
  ...rest
}) {
  const sizeClass = size ? `bwi-${size}` : "";
  const classes = ["bwi", name, sizeClass, spin ? "bwi-spin" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("i", _extends({
    className: classes,
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    title: title
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const LINK_CSS = `
.bw-link{
  font-family:var(--font-sans);color:var(--color-fg-brand);text-decoration:none;cursor:pointer;
  background:none;border:none;padding:0;font:inherit;display:inline-flex;align-items:center;gap:5px;
  font-weight:var(--font-weight-medium);
}
.bw-link:hover{color:var(--color-fg-brand-strong);text-decoration:underline;}
.bw-link--danger{color:var(--color-fg-danger);}
.bw-link--danger:hover{color:var(--color-fg-danger-strong);}
.bw-link--subtle{color:var(--color-fg-body);font-weight:var(--font-weight-normal);}
.bw-link--subtle:hover{color:var(--color-fg-brand);}
`;

/** Inline text link / link-button. Renders <a> when href is set, else <button>. */
function Link({
  variant = "primary",
  icon,
  href,
  children,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-link-styles", LINK_CSS);
  const cls = ["bw-link", variant !== "primary" ? `bw-link--${variant}` : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("i", {
    className: `bwi ${icon}`,
    "aria-hidden": "true"
  }), children);
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), inner) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Link.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const ITEM_CSS = `
.bw-item{
  display:flex;align-items:center;gap:.75rem;
  font-family:var(--font-sans);
  background:var(--color-bg-primary);
  border:1px solid var(--color-border-base);
  padding:.625rem .875rem;
  transition:background-color .12s ease;
}
.bw-item + .bw-item{border-top:none;}
.bw-item:first-child{border-top-left-radius:var(--radius-lg);border-top-right-radius:var(--radius-lg);}
.bw-item:last-child{border-bottom-left-radius:var(--radius-lg);border-bottom-right-radius:var(--radius-lg);}
.bw-item--clickable{cursor:pointer;}
.bw-item--clickable:hover{background:var(--color-bg-hover);}
.bw-item__tile{
  flex:none;width:2.25rem;height:2.25rem;border-radius:var(--radius-md);
  background:var(--color-bg-secondary);border:1px solid var(--color-border-light);
  display:inline-flex;align-items:center;justify-content:center;
  color:var(--color-fg-body-subtle);font-size:1.125rem;overflow:hidden;
}
.bw-item__tile img{width:1.25rem;height:1.25rem;object-fit:contain;}
.bw-item__body{flex:1;min-width:0;}
.bw-item__title{font-size:var(--text-base);color:var(--color-fg-heading);font-weight:var(--font-weight-medium);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.bw-item__subtitle{font-size:var(--text-sm);color:var(--color-fg-body-subtle);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.bw-item__actions{display:flex;align-items:center;gap:.125rem;flex:none;}
`;

/**
 * Vault-style list row: leading icon tile, title + subtitle, trailing actions.
 * Use several in sequence to form a grouped list (rounded top & bottom).
 */
function ListItem({
  icon,
  iconSrc,
  title,
  subtitle,
  actions,
  onClick,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-item-styles", ITEM_CSS);
  const classes = ["bw-item", onClick ? "bw-item--clickable" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bw-item__tile"
  }, iconSrc ? /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: ""
  }) : /*#__PURE__*/React.createElement("i", {
    className: `bwi ${icon || "bwi-globe"}`,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bw-item__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-item__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "bw-item__subtitle"
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    className: "bw-item__actions"
  }, actions));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ProgressBar.jsx
try { (() => {
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const PROGRESS_CSS = `
.bw-progress{font-family:var(--font-sans);}
.bw-progress__track{height:8px;border-radius:var(--radius-full);background:var(--color-bg-quaternary);overflow:hidden;}
.bw-progress__track--thin{height:4px;}
.bw-progress__fill{height:100%;border-radius:var(--radius-full);transition:width .25s ease;}
.bw-progress__label{display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-fg-body-subtle);margin-top:5px;}
`;
const STRENGTH = {
  weak: ["25%", "var(--color-bg-danger)", "Weak"],
  fair: ["50%", "var(--color-bg-warning)", "Fair"],
  good: ["75%", "var(--color-orange-400)", "Good"],
  strong: ["100%", "var(--color-bg-success)", "Strong"]
};

/**
 * Progress / meter bar. Either pass `value` (0–100) + `color`, or pass
 * `strength` ("weak"|"fair"|"good"|"strong") for a password-strength meter.
 */
function ProgressBar({
  value = 0,
  color = "var(--color-bg-brand)",
  strength,
  label,
  thin = false,
  className = ""
}) {
  useStyleOnce("bw-progress-styles", PROGRESS_CSS);
  let width = `${Math.max(0, Math.min(100, value))}%`;
  let fillColor = color;
  let text = label;
  if (strength && STRENGTH[strength]) {
    [width, fillColor] = STRENGTH[strength];
    text = text || `Password strength: ${STRENGTH[strength][2]}`;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: ["bw-progress", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: `bw-progress__track ${thin ? "bw-progress__track--thin" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-progress__fill",
    style: {
      width,
      background: fillColor
    }
  })), text && /*#__PURE__*/React.createElement("div", {
    className: "bw-progress__label"
  }, /*#__PURE__*/React.createElement("span", null, text), !strength && /*#__PURE__*/React.createElement("span", null, value, "%")));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const SPINNER_CSS = `
.bw-spinner{display:inline-block;border-radius:50%;border-style:solid;border-color:var(--color-border-base);border-top-color:var(--color-fg-brand);animation:bw-spin .8s linear infinite;}
@keyframes bw-spin{to{transform:rotate(360deg);}}
`;
const SIZES = {
  small: [16, 2],
  default: [24, 3],
  large: [40, 4]
};

/** Indeterminate loading spinner. */
function Spinner({
  size = "default",
  className = "",
  ...rest
}) {
  useStyleOnce("bw-spinner-styles", SPINNER_CSS);
  const [d, w] = SIZES[size] || SIZES.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["bw-spinner", className].filter(Boolean).join(" "),
    style: {
      width: d,
      height: d,
      borderWidth: w
    },
    role: "status",
    "aria-label": "Loading"
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const TABLE_CSS = `
.bw-table{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:var(--text-sm);}
.bw-table th{
  text-align:left;font-weight:var(--font-weight-medium);color:var(--color-fg-body-subtle);
  padding:10px 14px;border-bottom:2px solid var(--color-border-base);white-space:nowrap;
}
.bw-table td{padding:11px 14px;border-bottom:1px solid var(--color-border-light);color:var(--color-fg-body);vertical-align:middle;}
.bw-table tbody tr{transition:background-color .1s ease;}
.bw-table--hover tbody tr:hover{background:var(--color-bg-hover);}
.bw-table tbody tr:last-child td{border-bottom:none;}
`;

/**
 * Simple data table. `columns`: array of { key, header, width?, align?, render?(row) }.
 * `rows`: array of objects keyed by column.key.
 */
function Table({
  columns = [],
  rows = [],
  hover = true,
  className = ""
}) {
  useStyleOnce("bw-table-styles", TABLE_CSS);
  return /*#__PURE__*/React.createElement("table", {
    className: ["bw-table", hover ? "bw-table--hover" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      width: c.width,
      textAlign: c.align
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align
    }
  }, c.render ? c.render(row) : row[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const BADGE_CSS = `
.bw-badge{
  font-family:var(--font-sans);
  font-weight:var(--font-weight-medium);
  display:inline-flex;
  align-items:center;
  gap:.25rem;
  border:1px solid transparent;
  border-radius:var(--radius-full);
  white-space:nowrap;
  cursor:default;
}
.bw-badge--small{font-size:var(--text-xs);line-height:1rem;padding:.125rem .375rem;}
.bw-badge--large{font-size:var(--text-sm);line-height:1.25rem;padding:.25rem .5rem;}
.bw-badge--primary{background:var(--color-bg-brand-softer);border-color:var(--color-border-brand-soft);color:var(--color-fg-brand-strong);}
.bw-badge--subtle{background:var(--color-bg-secondary);border-color:var(--color-border-base);color:var(--color-fg-body);}
.bw-badge--success{background:var(--color-bg-success-soft);border-color:var(--color-border-success-soft);color:var(--color-fg-success-strong);}
.bw-badge--warning{background:var(--color-bg-warning-soft);border-color:var(--color-border-warning-soft);color:var(--color-fg-warning-strong);}
.bw-badge--danger{background:var(--color-bg-danger-soft);border-color:var(--color-border-danger-soft);color:var(--color-fg-danger-strong);}
.bw-badge--accent-primary{background:var(--color-bg-accent-primary-soft);border-color:var(--color-border-accent-primary-soft);color:var(--color-fg-accent-primary-strong);}
`;
const DEFAULT_ICON = {
  success: "bwi-check-circle",
  warning: "bwi-exclamation-triangle",
  danger: "bwi-error"
};

/** Small status label / pill. */
function Badge({
  variant = "primary",
  size = "large",
  startIcon,
  showDefaultIcon = false,
  children,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-badge-styles", BADGE_CSS);
  const icon = startIcon || (showDefaultIcon ? DEFAULT_ICON[variant] : undefined);
  const classes = ["bw-badge", `bw-badge--${variant}`, `bw-badge--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: `bwi ${icon}`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const BANNER_CSS = `
.bw-banner{
  font-family:var(--font-sans);
  display:flex;
  align-items:center;
  gap:.75rem;
  padding:.75rem 1rem;
  border-bottom:1px solid transparent;
  font-size:var(--text-sm);
  color:var(--color-fg-heading);
}
.bw-banner__icon{font-size:1.125rem;flex:none;}
.bw-banner__body{flex:1;min-width:0;}
.bw-banner__title{font-weight:var(--font-weight-medium);}
.bw-banner__actions{display:flex;align-items:center;gap:.5rem;flex:none;}
.bw-banner--primary{background:var(--color-bg-brand-softer);border-bottom-color:var(--color-border-brand-soft);}
.bw-banner--primary .bw-banner__icon{color:var(--color-fg-brand-strong);}
.bw-banner--success{background:var(--color-bg-success-soft);border-bottom-color:var(--color-border-success-soft);}
.bw-banner--success .bw-banner__icon{color:var(--color-fg-success-strong);}
.bw-banner--warning{background:var(--color-bg-warning-soft);border-bottom-color:var(--color-border-warning-soft);}
.bw-banner--warning .bw-banner__icon{color:var(--color-fg-warning-strong);}
.bw-banner--danger{background:var(--color-bg-danger-soft);border-bottom-color:var(--color-border-danger-soft);}
.bw-banner--danger .bw-banner__icon{color:var(--color-fg-danger-strong);}
.bw-banner__close{
  background:transparent;border:none;cursor:pointer;color:var(--color-fg-body);
  font-size:1.125rem;line-height:1;padding:.25rem;border-radius:var(--radius-full);
}
.bw-banner__close:hover{background:var(--color-bg-hover);}
`;
const DEFAULT_ICON = {
  primary: "bwi-info-circle",
  success: "bwi-star",
  warning: "bwi-exclamation-triangle",
  danger: "bwi-error"
};

/**
 * Global, full-width, dismissible message. Use sparingly for system-level
 * states; never stack banners. (Use Callout for in-flow messages.)
 */
function Banner({
  variant = "primary",
  icon,
  title,
  onDismiss,
  actions,
  children,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-banner-styles", BANNER_CSS);
  const resolvedIcon = icon === null ? null : icon || DEFAULT_ICON[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-banner", `bw-banner--${variant}`, className].filter(Boolean).join(" "),
    role: "status"
  }, rest), resolvedIcon && /*#__PURE__*/React.createElement("i", {
    className: `bwi ${resolvedIcon} bw-banner__icon`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bw-banner__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "bw-banner__title"
  }, title, " "), /*#__PURE__*/React.createElement("span", null, children)), actions && /*#__PURE__*/React.createElement("div", {
    className: "bw-banner__actions"
  }, actions), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bw-banner__close",
    "aria-label": "Close",
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-close",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CALLOUT_CSS = `
.bw-callout{
  font-family:var(--font-sans);
  border:1px solid transparent;
  border-radius:var(--radius-lg);
  padding:.75rem 1rem 1rem;
  display:flex;
  gap:.75rem;
}
.bw-callout__icon{font-size:1.125rem;line-height:1.5rem;flex:none;}
.bw-callout__body{flex:1;min-width:0;}
.bw-callout__title{
  font-weight:var(--font-weight-medium);
  font-size:var(--text-base);
  margin:0 0 .25rem;
  text-transform:none;
}
.bw-callout__content{font-size:var(--text-sm);color:var(--color-fg-body);}
.bw-callout__content p:last-child{margin-bottom:0;}
.bw-callout--info{background:var(--color-bg-brand-softer);border-color:var(--color-border-brand-soft);}
.bw-callout--info .bw-callout__icon,.bw-callout--info .bw-callout__title{color:var(--color-fg-brand-strong);}
.bw-callout--success{background:var(--color-bg-success-soft);border-color:var(--color-border-success-soft);}
.bw-callout--success .bw-callout__icon,.bw-callout--success .bw-callout__title{color:var(--color-fg-success-strong);}
.bw-callout--warning{background:var(--color-bg-warning-soft);border-color:var(--color-border-warning-soft);}
.bw-callout--warning .bw-callout__icon,.bw-callout--warning .bw-callout__title{color:var(--color-fg-warning-strong);}
.bw-callout--danger{background:var(--color-bg-danger-soft);border-color:var(--color-border-danger-soft);}
.bw-callout--danger .bw-callout__icon,.bw-callout--danger .bw-callout__title{color:var(--color-fg-danger-strong);}
.bw-callout--subtle{background:var(--color-bg-secondary);border-color:var(--color-border-base);}
.bw-callout--subtle .bw-callout__icon,.bw-callout--subtle .bw-callout__title{color:var(--color-fg-heading);}
`;
const DEFAULT_ICON = {
  success: "bwi-check-circle",
  info: "bwi-info-circle",
  warning: "bwi-exclamation-triangle",
  danger: "bwi-error",
  subtle: "bwi-info-circle"
};
const DEFAULT_TITLE = {
  warning: "Warning",
  danger: "Error"
};

/**
 * Contextual inline message block. Use within page flow (vs. Banner which is
 * global/full-width).
 */
function Callout({
  type = "info",
  title,
  icon,
  children,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-callout-styles", CALLOUT_CSS);
  const resolvedIcon = icon === null ? null : icon || DEFAULT_ICON[type];
  const resolvedTitle = title === null ? null : title ?? DEFAULT_TITLE[type];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-callout", `bw-callout--${type}`, className].filter(Boolean).join(" "),
    role: "note"
  }, rest), resolvedIcon && /*#__PURE__*/React.createElement("i", {
    className: `bwi ${resolvedIcon} bw-callout__icon`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bw-callout__body"
  }, resolvedTitle && /*#__PURE__*/React.createElement("h4", {
    className: "bw-callout__title"
  }, resolvedTitle), /*#__PURE__*/React.createElement("div", {
    className: "bw-callout__content"
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CONTROL_CSS = `
.bw-control{font-family:var(--font-sans);display:inline-flex;align-items:flex-start;gap:.5rem;cursor:pointer;color:var(--color-fg-body);font-size:var(--text-base);line-height:1.5rem;}
.bw-control--disabled{cursor:default;color:var(--color-fg-inactive);}
.bw-control input{position:absolute;opacity:0;width:0;height:0;}

/* checkbox */
.bw-check{
  flex:none;width:1rem;height:1rem;margin-top:.25rem;border-radius:var(--radius-sm);
  border:1px solid var(--color-border-strong);background:var(--color-bg-primary);
  display:inline-flex;align-items:center;justify-content:center;
  transition:background-color .12s ease,border-color .12s ease;color:var(--color-fg-contrast);font-size:.625rem;
}
.bw-control input:checked + .bw-check{background:var(--color-bg-brand);border-color:var(--color-border-brand);}
.bw-control:hover input:not(:disabled) + .bw-check{border-color:var(--color-border-brand);}
.bw-control input:focus-visible + .bw-check{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}
.bw-control input:disabled + .bw-check{background:var(--color-bg-inactive);border-color:var(--color-border-base);}
.bw-check__mark{opacity:0;}
.bw-control input:checked + .bw-check .bw-check__mark{opacity:1;}

/* radio */
.bw-radio{
  flex:none;width:1rem;height:1rem;margin-top:.25rem;border-radius:var(--radius-full);
  border:1px solid var(--color-border-strong);background:var(--color-bg-primary);
  display:inline-flex;align-items:center;justify-content:center;transition:border-color .12s ease;
}
.bw-radio__dot{width:.5rem;height:.5rem;border-radius:var(--radius-full);background:var(--color-bg-brand);transform:scale(0);transition:transform .12s ease;}
.bw-control input:checked + .bw-radio{border-color:var(--color-border-brand);}
.bw-control input:checked + .bw-radio .bw-radio__dot{transform:scale(1);}
.bw-control:hover input:not(:disabled) + .bw-radio{border-color:var(--color-border-brand);}
.bw-control input:focus-visible + .bw-radio{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}

/* switch */
.bw-switch{
  flex:none;width:2.25rem;height:1.25rem;border-radius:var(--radius-full);
  background:var(--color-bg-gray);position:relative;transition:background-color .15s ease;margin-top:.125rem;
}
.bw-switch__knob{position:absolute;top:2px;left:2px;width:1rem;height:1rem;border-radius:var(--radius-full);background:var(--color-white);transition:transform .15s ease;box-shadow:0 1px 2px rgba(0,0,0,.3);}
.bw-control input:checked + .bw-switch{background:var(--color-bg-brand);}
.bw-control input:checked + .bw-switch .bw-switch__knob{transform:translateX(1rem);}
.bw-control input:focus-visible + .bw-switch{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}
.bw-control input:disabled + .bw-switch{background:var(--color-bg-inactive);}
.bw-control__label{user-select:none;}
.bw-control__sub{display:block;font-size:var(--text-sm);color:var(--color-fg-body-subtle);}
`;

/** Checkbox with label and optional hint. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  hint,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-control-styles", CONTROL_CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ["bw-control", disabled ? "bw-control--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bw-check"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-check bw-check__mark",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("span", {
    className: "bw-control__label"
  }, label, hint && /*#__PURE__*/React.createElement("span", {
    className: "bw-control__sub"
  }, hint)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const FORMFIELD_CSS = `
.bw-field{font-family:var(--font-sans);display:flex;flex-direction:column;gap:.25rem;}
.bw-field__label{
  font-size:var(--text-sm);
  font-weight:var(--font-weight-medium);
  color:var(--color-fg-heading);
}
.bw-field__label .bw-field__optional{color:var(--color-fg-body-subtle);font-weight:var(--font-weight-normal);}
.bw-field__box{
  display:flex;align-items:center;gap:.5rem;
  background:var(--color-bg-primary);
  border:1px solid var(--color-border-strong);
  border-radius:var(--radius-lg);
  padding:0 .75rem;
  transition:border-color .15s ease,box-shadow .15s ease;
}
.bw-field__box:hover{border-color:var(--color-border-brand);}
.bw-field__box:focus-within{border-color:var(--color-border-brand);box-shadow:0 0 0 1px var(--color-border-brand);}
.bw-field__box--error{border-color:var(--color-border-danger);}
.bw-field__box--error:focus-within{border-color:var(--color-border-danger);box-shadow:0 0 0 1px var(--color-border-danger);}
.bw-field__box--disabled{background:var(--color-bg-secondary);border-color:var(--color-border-base);}
.bw-field__input{
  flex:1;min-width:0;border:none;outline:none;background:transparent;
  font-family:var(--font-sans);font-size:var(--text-base);
  color:var(--color-fg-heading);
  padding:.5rem 0;line-height:1.5rem;
}
.bw-field__input::placeholder{color:var(--color-fg-body-subtle);}
.bw-field__input:disabled{color:var(--color-fg-inactive);}
.bw-field__affix{color:var(--color-fg-body-subtle);font-size:1.0625rem;flex:none;}
.bw-field__btn{
  background:transparent;border:none;cursor:pointer;color:var(--color-fg-body-subtle);
  font-size:1.0625rem;padding:.25rem;border-radius:var(--radius-full);flex:none;line-height:1;
}
.bw-field__btn:hover{color:var(--color-fg-brand);background:var(--color-bg-hover);}
.bw-field__hint{font-size:var(--text-sm);color:var(--color-fg-body-subtle);}
.bw-field__error{font-size:var(--text-sm);color:var(--color-fg-danger);display:flex;align-items:center;gap:.25rem;}
`;

/**
 * Labelled text field. Supports a leading icon, a trailing reveal/copy button,
 * hint text and error state. Set `type="password"` to get a built-in reveal toggle.
 */
function FormField({
  label,
  optional = false,
  type = "text",
  value,
  defaultValue,
  placeholder,
  startIcon,
  endButton,
  // { icon, label, onClick }
  hint,
  error,
  disabled = false,
  readOnly = false,
  id,
  className = "",
  onChange,
  ...rest
}) {
  useStyleOnce("bw-formfield-styles", FORMFIELD_CSS);
  const [reveal, setReveal] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? reveal ? "text" : "password" : type;
  const fieldId = id || `bw-field-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: ["bw-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "bw-field__label",
    htmlFor: fieldId
  }, label, optional && /*#__PURE__*/React.createElement("span", {
    className: "bw-field__optional"
  }, " (optional)")), /*#__PURE__*/React.createElement("div", {
    className: ["bw-field__box", error ? "bw-field__box--error" : "", disabled ? "bw-field__box--disabled" : ""].filter(Boolean).join(" ")
  }, startIcon && /*#__PURE__*/React.createElement("i", {
    className: `bwi ${startIcon} bw-field__affix`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "bw-field__input",
    type: inputType,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    "aria-invalid": error ? true : undefined,
    onChange: onChange
  }, rest)), isPassword && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bw-field__btn",
    "aria-label": reveal ? "Hide" : "Show",
    onClick: () => setReveal(r => !r)
  }, /*#__PURE__*/React.createElement("i", {
    className: `bwi ${reveal ? "bwi-eye-slash" : "bwi-eye"}`,
    "aria-hidden": "true"
  })), endButton && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bw-field__btn",
    "aria-label": endButton.label,
    title: endButton.label,
    onClick: endButton.onClick
  }, /*#__PURE__*/React.createElement("i", {
    className: `bwi ${endButton.icon}`,
    "aria-hidden": "true"
  }))), error ? /*#__PURE__*/React.createElement("span", {
    className: "bw-field__error"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-error",
    "aria-hidden": "true"
  }), error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "bw-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CONTROL_CSS = `
.bw-control{font-family:var(--font-sans);display:inline-flex;align-items:flex-start;gap:.5rem;cursor:pointer;color:var(--color-fg-body);font-size:var(--text-base);line-height:1.5rem;}
.bw-control--disabled{cursor:default;color:var(--color-fg-inactive);}
.bw-control input{position:absolute;opacity:0;width:0;height:0;}

/* checkbox */
.bw-check{
  flex:none;width:1rem;height:1rem;margin-top:.25rem;border-radius:var(--radius-sm);
  border:1px solid var(--color-border-strong);background:var(--color-bg-primary);
  display:inline-flex;align-items:center;justify-content:center;
  transition:background-color .12s ease,border-color .12s ease;color:var(--color-fg-contrast);font-size:.625rem;
}
.bw-control input:checked + .bw-check{background:var(--color-bg-brand);border-color:var(--color-border-brand);}
.bw-control:hover input:not(:disabled) + .bw-check{border-color:var(--color-border-brand);}
.bw-control input:focus-visible + .bw-check{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}
.bw-control input:disabled + .bw-check{background:var(--color-bg-inactive);border-color:var(--color-border-base);}
.bw-check__mark{opacity:0;}
.bw-control input:checked + .bw-check .bw-check__mark{opacity:1;}

/* radio */
.bw-radio{
  flex:none;width:1rem;height:1rem;margin-top:.25rem;border-radius:var(--radius-full);
  border:1px solid var(--color-border-strong);background:var(--color-bg-primary);
  display:inline-flex;align-items:center;justify-content:center;transition:border-color .12s ease;
}
.bw-radio__dot{width:.5rem;height:.5rem;border-radius:var(--radius-full);background:var(--color-bg-brand);transform:scale(0);transition:transform .12s ease;}
.bw-control input:checked + .bw-radio{border-color:var(--color-border-brand);}
.bw-control input:checked + .bw-radio .bw-radio__dot{transform:scale(1);}
.bw-control:hover input:not(:disabled) + .bw-radio{border-color:var(--color-border-brand);}
.bw-control input:focus-visible + .bw-radio{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}

/* switch */
.bw-switch{
  flex:none;width:2.25rem;height:1.25rem;border-radius:var(--radius-full);
  background:var(--color-bg-gray);position:relative;transition:background-color .15s ease;margin-top:.125rem;
}
.bw-switch__knob{position:absolute;top:2px;left:2px;width:1rem;height:1rem;border-radius:var(--radius-full);background:var(--color-white);transition:transform .15s ease;box-shadow:0 1px 2px rgba(0,0,0,.3);}
.bw-control input:checked + .bw-switch{background:var(--color-bg-brand);}
.bw-control input:checked + .bw-switch .bw-switch__knob{transform:translateX(1rem);}
.bw-control input:focus-visible + .bw-switch{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}
.bw-control input:disabled + .bw-switch{background:var(--color-bg-inactive);}
.bw-control__label{user-select:none;}
.bw-control__sub{display:block;font-size:var(--text-sm);color:var(--color-fg-body-subtle);}
`;

/** Radio button with label. Group with a shared \`name\`. */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  onChange,
  hint,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-control-styles", CONTROL_CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ["bw-control", disabled ? "bw-control--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bw-radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bw-radio__dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "bw-control__label"
  }, label, hint && /*#__PURE__*/React.createElement("span", {
    className: "bw-control__sub"
  }, hint)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const SELECT_CSS = `
.bw-select{font-family:var(--font-sans);display:flex;flex-direction:column;gap:.25rem;}
.bw-select__label{font-size:var(--text-sm);font-weight:var(--font-weight-medium);color:var(--color-fg-heading);}
.bw-select__box{position:relative;display:flex;align-items:center;}
.bw-select__el{
  appearance:none;width:100%;
  background:var(--color-bg-primary);
  border:1px solid var(--color-border-strong);
  border-radius:var(--radius-lg);
  padding:.5rem 2.25rem .5rem .75rem;
  font-family:var(--font-sans);font-size:var(--text-base);line-height:1.5rem;
  color:var(--color-fg-heading);cursor:pointer;
  transition:border-color .15s ease,box-shadow .15s ease;
}
.bw-select__el:hover{border-color:var(--color-border-brand);}
.bw-select__el:focus{outline:none;border-color:var(--color-border-brand);box-shadow:0 0 0 1px var(--color-border-brand);}
.bw-select__el:disabled{background:var(--color-bg-secondary);color:var(--color-fg-inactive);cursor:default;}
.bw-select__chevron{position:absolute;right:.75rem;pointer-events:none;color:var(--color-fg-body-subtle);font-size:1rem;}
`;

/** Native select, styled to match Bitwarden form fields. */
function Select({
  label,
  value,
  defaultValue,
  options = [],
  disabled,
  id,
  onChange,
  className = "",
  children,
  ...rest
}) {
  useStyleOnce("bw-select-styles", SELECT_CSS);
  const fieldId = id || `bw-select-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: ["bw-select", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "bw-select__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "bw-select__box"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "bw-select__el",
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange
  }, rest), children || options.map(opt => {
    const o = typeof opt === "string" ? {
      value: opt,
      label: opt
    } : opt;
    return /*#__PURE__*/React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label);
  })), /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-angle-down bw-select__chevron",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CONTROL_CSS = `
.bw-control{font-family:var(--font-sans);display:inline-flex;align-items:flex-start;gap:.5rem;cursor:pointer;color:var(--color-fg-body);font-size:var(--text-base);line-height:1.5rem;}
.bw-control--disabled{cursor:default;color:var(--color-fg-inactive);}
.bw-control input{position:absolute;opacity:0;width:0;height:0;}

/* checkbox */
.bw-check{
  flex:none;width:1rem;height:1rem;margin-top:.25rem;border-radius:var(--radius-sm);
  border:1px solid var(--color-border-strong);background:var(--color-bg-primary);
  display:inline-flex;align-items:center;justify-content:center;
  transition:background-color .12s ease,border-color .12s ease;color:var(--color-fg-contrast);font-size:.625rem;
}
.bw-control input:checked + .bw-check{background:var(--color-bg-brand);border-color:var(--color-border-brand);}
.bw-control:hover input:not(:disabled) + .bw-check{border-color:var(--color-border-brand);}
.bw-control input:focus-visible + .bw-check{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}
.bw-control input:disabled + .bw-check{background:var(--color-bg-inactive);border-color:var(--color-border-base);}
.bw-check__mark{opacity:0;}
.bw-control input:checked + .bw-check .bw-check__mark{opacity:1;}

/* radio */
.bw-radio{
  flex:none;width:1rem;height:1rem;margin-top:.25rem;border-radius:var(--radius-full);
  border:1px solid var(--color-border-strong);background:var(--color-bg-primary);
  display:inline-flex;align-items:center;justify-content:center;transition:border-color .12s ease;
}
.bw-radio__dot{width:.5rem;height:.5rem;border-radius:var(--radius-full);background:var(--color-bg-brand);transform:scale(0);transition:transform .12s ease;}
.bw-control input:checked + .bw-radio{border-color:var(--color-border-brand);}
.bw-control input:checked + .bw-radio .bw-radio__dot{transform:scale(1);}
.bw-control:hover input:not(:disabled) + .bw-radio{border-color:var(--color-border-brand);}
.bw-control input:focus-visible + .bw-radio{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}

/* switch */
.bw-switch{
  flex:none;width:2.25rem;height:1.25rem;border-radius:var(--radius-full);
  background:var(--color-bg-gray);position:relative;transition:background-color .15s ease;margin-top:.125rem;
}
.bw-switch__knob{position:absolute;top:2px;left:2px;width:1rem;height:1rem;border-radius:var(--radius-full);background:var(--color-white);transition:transform .15s ease;box-shadow:0 1px 2px rgba(0,0,0,.3);}
.bw-control input:checked + .bw-switch{background:var(--color-bg-brand);}
.bw-control input:checked + .bw-switch .bw-switch__knob{transform:translateX(1rem);}
.bw-control input:focus-visible + .bw-switch{box-shadow:0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-border-focus);}
.bw-control input:disabled + .bw-switch{background:var(--color-bg-inactive);}
.bw-control__label{user-select:none;}
.bw-control__sub{display:block;font-size:var(--text-sm);color:var(--color-fg-body-subtle);}
`;

/** Toggle switch with label. */
function Toggle({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  hint,
  className = "",
  ...rest
}) {
  useStyleOnce("bw-control-styles", CONTROL_CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ["bw-control", disabled ? "bw-control--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bw-switch"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bw-switch__knob"
  })), /*#__PURE__*/React.createElement("span", {
    className: "bw-control__label"
  }, label, hint && /*#__PURE__*/React.createElement("span", {
    className: "bw-control__sub"
  }, hint)));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CRUMB_CSS = `
.bw-crumbs{font-family:var(--font-sans);display:flex;align-items:center;gap:6px;font-size:var(--text-sm);flex-wrap:wrap;}
.bw-crumbs a,.bw-crumbs button{color:var(--color-fg-body-subtle);text-decoration:none;background:none;border:none;cursor:pointer;font:inherit;display:inline-flex;align-items:center;gap:5px;padding:0;}
.bw-crumbs a:hover,.bw-crumbs button:hover{color:var(--color-fg-brand);text-decoration:underline;}
.bw-crumbs__sep{color:var(--color-fg-inactive);font-size:12px;}
.bw-crumbs__current{color:var(--color-fg-heading);font-weight:var(--font-weight-medium);display:inline-flex;align-items:center;gap:5px;}
`;

/** Breadcrumb trail. `items`: array of { label, icon?, onClick? }; last is the current page. */
function Breadcrumbs({
  items = [],
  className = ""
}) {
  useStyleOnce("bw-crumbs-styles", CRUMB_CSS);
  return /*#__PURE__*/React.createElement("nav", {
    className: ["bw-crumbs", className].filter(Boolean).join(" "),
    "aria-label": "Breadcrumb"
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "bw-crumbs__current"
    }, it.icon && /*#__PURE__*/React.createElement("i", {
      className: `bwi ${it.icon}`,
      "aria-hidden": "true"
    }), it.label) : /*#__PURE__*/React.createElement("button", {
      onClick: it.onClick
    }, it.icon && /*#__PURE__*/React.createElement("i", {
      className: `bwi ${it.icon}`,
      "aria-hidden": "true"
    }), it.label), !last && /*#__PURE__*/React.createElement("i", {
      className: "bwi bwi-angle-right bw-crumbs__sep",
      "aria-hidden": "true"
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const MENU_CSS = `
.bw-menu{position:relative;display:inline-block;font-family:var(--font-sans);}
.bw-menu__panel{
  position:absolute;z-index:50;min-width:200px;margin-top:6px;
  background:var(--color-bg-primary);border:1px solid var(--color-border-base);
  border-radius:var(--radius-lg);box-shadow:var(--shadow-md);padding:6px;
}
.bw-menu__panel--right{right:0;}
.bw-menu__label{font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--color-fg-body-subtle);padding:6px 10px 2px;font-weight:500;}
.bw-menu__item{
  display:flex;align-items:center;gap:10px;width:100%;
  padding:8px 10px;border:none;background:transparent;cursor:pointer;
  font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg-heading);
  border-radius:var(--radius-md);text-align:left;
}
.bw-menu__item:hover{background:var(--color-bg-hover);}
.bw-menu__item i{font-size:15px;width:18px;color:var(--color-fg-body-subtle);}
.bw-menu__item--danger{color:var(--color-fg-danger);}
.bw-menu__item--danger:hover{background:var(--color-bg-danger-soft);}
.bw-menu__item--danger i{color:var(--color-fg-danger);}
.bw-menu__divider{height:1px;background:var(--color-border-light);margin:6px 4px;}
`;

/**
 * Dropdown menu. Provide a `trigger` node and an array of `items`:
 * { label, icon?, danger?, onClick } or { divider: true } or { label, header: true }.
 */
function Menu({
  trigger,
  items = [],
  align = "left",
  className = ""
}) {
  useStyleOnce("bw-menu-styles", MENU_CSS);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: ["bw-menu", className].filter(Boolean).join(" "),
    ref: ref
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "inline-flex"
    }
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    className: `bw-menu__panel ${align === "right" ? "bw-menu__panel--right" : ""}`,
    role: "menu"
  }, items.map((it, i) => {
    if (it.divider) return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "bw-menu__divider"
    });
    if (it.header) return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "bw-menu__label"
    }, it.label);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "menuitem",
      className: ["bw-menu__item", it.danger ? "bw-menu__item--danger" : ""].filter(Boolean).join(" "),
      onClick: () => {
        setOpen(false);
        it.onClick && it.onClick();
      }
    }, it.icon && /*#__PURE__*/React.createElement("i", {
      className: `bwi ${it.icon}`,
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label));
  })));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const TABS_CSS = `
.bw-tabs{font-family:var(--font-sans);}
.bw-tabs__list{display:flex;gap:4px;border-bottom:1px solid var(--color-border-base);}
.bw-tab{
  appearance:none;background:transparent;border:none;cursor:pointer;
  padding:10px 14px;font-family:var(--font-sans);font-size:var(--text-sm);
  font-weight:var(--font-weight-medium);color:var(--color-fg-body);
  border-bottom:2px solid transparent;margin-bottom:-1px;
  display:inline-flex;align-items:center;gap:7px;transition:color .12s ease,border-color .12s ease;
}
.bw-tab:hover{color:var(--color-fg-brand);}
.bw-tab--active{color:var(--color-fg-brand);border-bottom-color:var(--color-border-brand);}
.bw-tab--disabled{color:var(--color-fg-inactive);cursor:default;}
.bw-tab__count{font-size:11px;background:var(--color-bg-secondary);border:1px solid var(--color-border-base);border-radius:var(--radius-full);padding:0 6px;color:var(--color-fg-body-subtle);}
.bw-tab--active .bw-tab__count{background:var(--color-bg-brand-softer);border-color:var(--color-border-brand-soft);color:var(--color-fg-brand-strong);}
`;

/**
 * Underline tab bar. Controlled (pass `active` + `onChange`) or uncontrolled
 * (pass `defaultActive`). `tabs` is an array of { id, label, icon?, count?, disabled? }.
 */
function Tabs({
  tabs = [],
  active,
  defaultActive,
  onChange,
  className = ""
}) {
  useStyleOnce("bw-tabs-styles", TABS_CSS);
  const [internal, setInternal] = useState(defaultActive ?? (tabs[0] && tabs[0].id));
  const current = active !== undefined ? active : internal;
  const select = id => {
    if (active === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["bw-tabs", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-tabs__list",
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    role: "tab",
    "aria-selected": t.id === current,
    disabled: t.disabled,
    className: ["bw-tab", t.id === current ? "bw-tab--active" : "", t.disabled ? "bw-tab--disabled" : ""].filter(Boolean).join(" "),
    onClick: () => !t.disabled && select(t.id)
  }, t.icon && /*#__PURE__*/React.createElement("i", {
    className: `bwi ${t.icon}`,
    "aria-hidden": "true"
  }), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
    className: "bw-tab__count"
  }, t.count)))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const DIALOG_CSS = `
.bw-dialog__backdrop{
  position:fixed;inset:0;z-index:100;background:var(--color-bg-overlay);
  display:flex;align-items:center;justify-content:center;padding:24px;
}
.bw-dialog{
  font-family:var(--font-sans);background:var(--color-bg-primary);
  border-radius:var(--radius-xl);box-shadow:var(--shadow-lg);
  width:100%;max-width:480px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;
}
.bw-dialog--small{max-width:380px;}
.bw-dialog--large{max-width:680px;}
.bw-dialog__header{display:flex;align-items:flex-start;gap:12px;padding:20px 22px 0;}
.bw-dialog__titles{flex:1;min-width:0;}
.bw-dialog__title{font-size:var(--text-xl);font-weight:var(--font-weight-medium);color:var(--color-fg-heading);margin:0;}
.bw-dialog__subtitle{font-size:var(--text-sm);color:var(--color-fg-body-subtle);margin:2px 0 0;}
.bw-dialog__close{background:transparent;border:none;cursor:pointer;color:var(--color-fg-body-subtle);font-size:18px;padding:4px;border-radius:var(--radius-full);line-height:1;}
.bw-dialog__close:hover{background:var(--color-bg-hover);color:var(--color-fg-heading);}
.bw-dialog__body{padding:14px 22px;overflow-y:auto;color:var(--color-fg-body);font-size:var(--text-base);}
.bw-dialog__footer{display:flex;gap:8px;padding:14px 22px 20px;border-top:1px solid var(--color-border-light);}
`;

/**
 * Modal dialog with backdrop. Render conditionally (when open) — it includes its
 * own fixed backdrop and closes on backdrop click / Esc.
 */
function Dialog({
  title,
  subtitle,
  size = "default",
  onClose,
  footer,
  children,
  className = ""
}) {
  useStyleOnce("bw-dialog-styles", DIALOG_CSS);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__backdrop",
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: ["bw-dialog", `bw-dialog--${size}`, className].filter(Boolean).join(" "),
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__titles"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "bw-dialog__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "bw-dialog__subtitle"
  }, subtitle)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "bw-dialog__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-close",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Toast.jsx
try { (() => {
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const TOAST_CSS = `
.bw-toast{
  font-family:var(--font-sans);display:flex;align-items:flex-start;gap:12px;
  background:var(--color-bg-primary);border:1px solid var(--color-border-base);
  border-left-width:4px;border-radius:var(--radius-lg);box-shadow:var(--shadow-md);
  padding:12px 14px;min-width:300px;max-width:420px;
}
.bw-toast__icon{font-size:18px;flex:none;margin-top:1px;}
.bw-toast__body{flex:1;min-width:0;}
.bw-toast__title{font-size:var(--text-sm);font-weight:var(--font-weight-medium);color:var(--color-fg-heading);}
.bw-toast__msg{font-size:var(--text-sm);color:var(--color-fg-body);}
.bw-toast__close{background:transparent;border:none;cursor:pointer;color:var(--color-fg-body-subtle);font-size:14px;padding:2px;border-radius:var(--radius-full);line-height:1;flex:none;}
.bw-toast__close:hover{color:var(--color-fg-heading);}
.bw-toast--success{border-left-color:var(--color-bg-success);}
.bw-toast--success .bw-toast__icon{color:var(--color-fg-success);}
.bw-toast--error{border-left-color:var(--color-bg-danger);}
.bw-toast--error .bw-toast__icon{color:var(--color-fg-danger);}
.bw-toast--warning{border-left-color:var(--color-bg-warning);}
.bw-toast--warning .bw-toast__icon{color:var(--color-fg-warning);}
.bw-toast--info{border-left-color:var(--color-bg-brand);}
.bw-toast--info .bw-toast__icon{color:var(--color-fg-brand);}
`;
const ICON = {
  success: "bwi-check-circle",
  error: "bwi-error",
  warning: "bwi-exclamation-triangle",
  info: "bwi-info-circle"
};

/** Transient notification. Variant sets the left accent + icon. */
function Toast({
  variant = "info",
  title,
  message,
  onClose,
  className = ""
}) {
  useStyleOnce("bw-toast-styles", TOAST_CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: ["bw-toast", `bw-toast--${variant}`, className].filter(Boolean).join(" "),
    role: "status"
  }, /*#__PURE__*/React.createElement("i", {
    className: `bwi ${ICON[variant]} bw-toast__icon`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bw-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "bw-toast__title"
  }, title), message && /*#__PURE__*/React.createElement("div", {
    className: "bw-toast__msg"
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "bw-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-close",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Toast.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const TOOLTIP_CSS = `
.bw-tip{position:relative;display:inline-flex;}
.bw-tip__bubble{
  position:absolute;z-index:60;font-family:var(--font-sans);
  background:var(--color-bg-contrast);color:var(--color-fg-contrast);
  font-size:var(--text-xs);line-height:1.35;padding:6px 9px;border-radius:var(--radius-md);
  box-shadow:var(--shadow-md);white-space:nowrap;pointer-events:none;
}
.bw-tip__bubble--top{bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:7px;}
.bw-tip__bubble--bottom{top:100%;left:50%;transform:translateX(-50%);margin-top:7px;}
.bw-tip__bubble--left{right:100%;top:50%;transform:translateY(-50%);margin-right:7px;}
.bw-tip__bubble--right{left:100%;top:50%;transform:translateY(-50%);margin-left:7px;}
`;

/** Wraps a child and shows a dark tooltip bubble on hover/focus. */
function Tooltip({
  content,
  placement = "top",
  children,
  className = ""
}) {
  useStyleOnce("bw-tooltip-styles", TOOLTIP_CSS);
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: ["bw-tip", className].filter(Boolean).join(" "),
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocusCapture: () => setShow(true),
    onBlurCapture: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    className: `bw-tip__bubble bw-tip__bubble--${placement}`,
    role: "tooltip"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/password-manager/App.jsx
try { (() => {
// Bitwarden Password Manager — app shell tying screens together
function App() {
  const D = window.PMData;
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [product, setProduct] = React.useState("Password Manager");
  const [active, setActive] = React.useState("all");
  const [selectedId, setSelectedId] = React.useState(2);
  const [search, setSearch] = React.useState("");
  const [items, setItems] = React.useState(D.items);
  const [toast, setToast] = React.useState(null);
  const toggleFav = id => setItems(arr => arr.map(it => it.id === id ? {
    ...it,
    favorite: !it.favorite
  } : it));
  const copy = label => {
    setToast(`${label} copied`);
    clearTimeout(window.__pmToast);
    window.__pmToast = setTimeout(() => setToast(null), 1800);
  };
  const counts = {
    all: items.length,
    favorites: items.filter(i => i.favorite).length,
    login: items.filter(i => i.type === "login").length,
    card: items.filter(i => i.type === "card").length,
    identity: items.filter(i => i.type === "identity").length,
    note: items.filter(i => i.type === "note").length
  };
  const titleMap = {
    all: "All vaults",
    favorites: "Favorites",
    login: "Logins",
    card: "Cards",
    identity: "Identities",
    note: "Secure notes",
    trash: "Trash",
    work: "Work",
    personal: "Personal"
  };
  let filtered = items;
  if (active === "favorites") filtered = items.filter(i => i.favorite);else if (["login", "card", "identity", "note"].includes(active)) filtered = items.filter(i => i.type === active);else if (active === "trash") filtered = [];
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(i => (i.name + " " + (i.username || "") + " " + (i.url || "")).toLowerCase().includes(q));
  }
  const selected = items.find(i => i.id === selectedId);
  const detailItem = filtered.find(i => i.id === selectedId) ? selected : null;
  if (!loggedIn) return /*#__PURE__*/React.createElement(Login, {
    onLogin: () => setLoggedIn(true)
  });
  const onSelectNav = id => {
    setActive(id);
    if (id !== "generator") setProduct("Password Manager");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--color-bg-primary)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: product === "Send" ? "send" : active,
    onSelect: onSelectNav,
    counts: counts,
    product: product,
    onProduct: setProduct
  }), product === "Send" ? /*#__PURE__*/React.createElement(Send, null) : active === "generator" ? /*#__PURE__*/React.createElement(Generator, {
    onCopy: copy
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VaultList, {
    title: titleMap[active] || "Vault",
    items: filtered,
    selectedId: selectedId,
    onSelect: setSelectedId,
    onToggleFav: toggleFav,
    search: search,
    onSearch: setSearch,
    onNew: () => copy("New item")
  }), /*#__PURE__*/React.createElement(ItemDetail, {
    item: active === "trash" ? null : detailItem,
    onCopy: copy
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 22,
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--color-bg-contrast)",
      color: "var(--color-fg-contrast)",
      padding: "10px 16px",
      borderRadius: "var(--radius-lg)",
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-sans)",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-check-circle",
    style: {
      color: "var(--color-green-400)"
    },
    "aria-hidden": "true"
  }), " ", toast));
}
window.PMApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/password-manager/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/password-manager/Generator.jsx
try { (() => {
// Bitwarden web vault — password generator
const {
  Button: GBtn,
  IconButton: GIconBtn,
  Toggle: GToggle,
  Checkbox: GCheck,
  Radio: GRadio
} = window.DesignSystem_17827c;
const WORDS = ["coral", "lantern", "mango", "quartz", "pine", "river", "velvet", "amber", "sky", "ember", "cobalt", "fern"];
function genPassword(len, opts) {
  let pool = "abcdefghijklmnopqrstuvwxyz";
  if (opts.upper) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (opts.num) pool += "0123456789";
  if (opts.sym) pool += "!@#$%^&*-_";
  let out = "";
  for (let i = 0; i < len; i++) out += pool[Math.floor(Math.random() * pool.length)];
  return out;
}
function genPassphrase(n) {
  const pick = () => WORDS[Math.floor(Math.random() * WORDS.length)];
  const w = [];
  for (let i = 0; i < n; i++) w.push(pick());
  return w.join("-") + "-" + Math.floor(Math.random() * 90 + 10);
}
function Generator({
  onCopy
}) {
  const [mode, setMode] = React.useState("password");
  const [len, setLen] = React.useState(16);
  const [words, setWords] = React.useState(4);
  const [opts, setOpts] = React.useState({
    upper: true,
    num: true,
    sym: true
  });
  const [value, setValue] = React.useState(genPassword(16, {
    upper: true,
    num: true,
    sym: true
  }));
  const regen = React.useCallback(() => {
    setValue(mode === "password" ? genPassword(len, opts) : genPassphrase(words));
  }, [mode, len, opts, words]);
  React.useEffect(() => {
    regen();
  }, [mode, len, words, opts]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      background: "var(--color-bg-secondary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: "0 auto",
      padding: "28px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      margin: "0 0 4px",
      color: "var(--color-fg-heading)"
    }
  }, "Generator"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-body-subtle)",
      marginTop: 0,
      marginBottom: 20
    }
  }, "Create strong, unique passwords and passphrases."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-bg-primary)",
      border: "1px solid var(--color-border-base)",
      borderRadius: "var(--radius-xl)",
      padding: "16px 18px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-lg)",
      color: "var(--color-fg-heading)",
      wordBreak: "break-all"
    }
  }, value), /*#__PURE__*/React.createElement(GIconBtn, {
    icon: "bwi-refresh",
    label: "Regenerate",
    variant: "muted",
    onClick: regen
  }), /*#__PURE__*/React.createElement(GIconBtn, {
    icon: "bwi-copy",
    label: "Copy",
    variant: "primary",
    onClick: () => onCopy("Password")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(GRadio, {
    name: "gtype",
    label: "Password",
    checked: mode === "password",
    onChange: () => setMode("password")
  }), /*#__PURE__*/React.createElement(GRadio, {
    name: "gtype",
    label: "Passphrase",
    checked: mode === "passphrase",
    onChange: () => setMode("passphrase")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-bg-primary)",
      border: "1px solid var(--color-border-base)",
      borderRadius: "var(--radius-xl)",
      padding: "16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, mode === "password" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-heading)",
      fontWeight: 500,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Length"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, len)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "8",
    max: "64",
    value: len,
    onChange: e => setLen(+e.target.value),
    style: {
      width: "100%",
      accentColor: "var(--color-brand-700)"
    }
  })), /*#__PURE__*/React.createElement(GCheck, {
    label: "Uppercase letters (A\u2013Z)",
    checked: opts.upper,
    onChange: e => setOpts({
      ...opts,
      upper: e.target.checked
    })
  }), /*#__PURE__*/React.createElement(GCheck, {
    label: "Numbers (0\u20139)",
    checked: opts.num,
    onChange: e => setOpts({
      ...opts,
      num: e.target.checked
    })
  }), /*#__PURE__*/React.createElement(GCheck, {
    label: "Special characters (!@#$)",
    checked: opts.sym,
    onChange: e => setOpts({
      ...opts,
      sym: e.target.checked
    })
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-heading)",
      fontWeight: 500,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Number of words"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, words)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "3",
    max: "8",
    value: words,
    onChange: e => setWords(+e.target.value),
    style: {
      width: "100%",
      accentColor: "var(--color-brand-700)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-body-subtle)",
      margin: 0
    }
  }, "Passphrases are easier to remember and type than random strings.")))));
}
window.Generator = Generator;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/password-manager/Generator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/password-manager/ItemDetail.jsx
try { (() => {
// Bitwarden web vault — item detail panel
const {
  IconButton: DIconBtn,
  Button: DBtn,
  Badge: DBadge
} = window.DesignSystem_17827c;
function CopyRow({
  label,
  value,
  mono,
  sensitive,
  onCopy
}) {
  const [reveal, setReveal] = React.useState(false);
  const shown = sensitive && !reveal ? "•".repeat(Math.min(value.length, 16)) : value;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--color-border-light)",
      padding: "10px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--color-fg-body-subtle)",
      marginBottom: 2
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: "var(--text-base)",
      color: "var(--color-fg-heading)",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      wordBreak: "break-all"
    }
  }, shown), sensitive && /*#__PURE__*/React.createElement(DIconBtn, {
    icon: reveal ? "bwi-eye-slash" : "bwi-eye",
    label: "Reveal",
    variant: "muted",
    size: "small",
    onClick: () => setReveal(r => !r)
  }), /*#__PURE__*/React.createElement(DIconBtn, {
    icon: "bwi-copy",
    label: `Copy ${label}`,
    variant: "muted",
    size: "small",
    onClick: () => onCopy(label)
  })));
}
function strengthMeter(item) {
  const map = {
    weak: ["25%", "var(--color-bg-danger)", "Weak"],
    good: ["66%", "var(--color-bg-warning)", "Good"],
    strong: ["100%", "var(--color-bg-success)", "Strong"]
  };
  const [w, c, label] = map[item.strength] || map.strong;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 2,
      background: "var(--color-bg-quaternary)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: "100%",
      background: c
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--color-fg-body-subtle)",
      marginTop: 4
    }
  }, "Password strength: ", label));
}
function ItemDetail({
  item,
  onCopy
}) {
  if (!item) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-fg-body-subtle)",
        background: "var(--color-bg-secondary)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/shield.svg",
      alt: "",
      style: {
        width: 64,
        opacity: 0.5,
        marginBottom: 14
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-sm)"
      }
    }, "Select an item to view its details."));
  }
  const D = window.PMData;
  const letter = item.name[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      background: "var(--color-bg-secondary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: "0 auto",
      padding: "24px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-lg)",
      flex: "none",
      background: "var(--color-bg-primary)",
      border: "1px solid var(--color-border-base)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-fg-brand)",
      fontSize: 22,
      fontWeight: 600
    }
  }, item.type === "login" ? letter : /*#__PURE__*/React.createElement("i", {
    className: `bwi ${D.typeIcon[item.type]}`,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-xl)",
      margin: 0,
      color: "var(--color-fg-heading)"
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-body-subtle)",
      textTransform: "capitalize"
    }
  }, item.type)), item.favorite && /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-star-f",
    style: {
      color: "var(--color-yellow-500)",
      fontSize: 18
    },
    "aria-hidden": "true"
  })), (item.exposed || item.reused || item.strength === "weak") && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "12px 14px",
      borderRadius: "var(--radius-lg)",
      background: "var(--color-bg-warning-soft)",
      border: "1px solid var(--color-border-warning-soft)",
      color: "var(--color-fg-warning-strong)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-exclamation-triangle",
    style: {
      fontSize: 16
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, item.exposed ? "This password was found in a data breach. Change it now." : item.reused ? "This password is reused across other items." : "This password is weak. Generate a stronger one."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-bg-primary)",
      border: "1px solid var(--color-border-base)",
      borderRadius: "var(--radius-xl)",
      padding: "4px 16px 12px"
    }
  }, item.type === "login" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CopyRow, {
    label: "Username",
    value: item.username,
    onCopy: onCopy
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--color-border-light)",
      padding: "10px 0"
    }
  }, /*#__PURE__*/React.createElement(CopyRow, {
    label: "Password",
    value: item.password,
    mono: true,
    sensitive: true,
    onCopy: onCopy
  }), item.strength && strengthMeter(item)), /*#__PURE__*/React.createElement(CopyRow, {
    label: "Website",
    value: item.url,
    onCopy: onCopy
  })), item.type === "card" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CopyRow, {
    label: "Number",
    value: item.number,
    mono: true,
    sensitive: true,
    onCopy: onCopy
  }), /*#__PURE__*/React.createElement(CopyRow, {
    label: "Expiration",
    value: item.exp,
    onCopy: onCopy
  }), /*#__PURE__*/React.createElement(CopyRow, {
    label: "Brand",
    value: item.brand,
    onCopy: onCopy
  })), item.type === "note" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 0",
      fontSize: "var(--text-base)",
      color: "var(--color-fg-body)"
    }
  }, "Guest network \xB7 SSID \u201CBabbage\u201D \xB7 passphrase stored securely."), item.type === "identity" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CopyRow, {
    label: "Full name",
    value: "Ada Lovelace",
    onCopy: onCopy
  }), /*#__PURE__*/React.createElement(CopyRow, {
    label: "Email",
    value: D.user.email,
    onCopy: onCopy
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(DBtn, {
    variant: "primary",
    startIcon: "bwi-pencil"
  }, "Edit"), /*#__PURE__*/React.createElement(DBtn, {
    variant: "secondary",
    startIcon: "bwi-clone"
  }, "Clone"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(DBtn, {
    variant: "dangerOutline",
    startIcon: "bwi-trash"
  }, "Delete"))));
}
window.ItemDetail = ItemDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/password-manager/ItemDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/password-manager/Login.jsx
try { (() => {
// Bitwarden web vault — login (anon layout)
const {
  Button: PMButton,
  FormField: PMField
} = window.DesignSystem_17827c;
function Login({
  onLogin
}) {
  const [email, setEmail] = React.useState("ada@analyticalengine.dev");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-bg-secondary)",
      padding: "40px 16px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-horizontal-blue.svg",
    alt: "Bitwarden",
    style: {
      width: 220,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 380,
      background: "var(--color-bg-primary)",
      border: "1px solid var(--color-border-base)",
      borderRadius: "var(--radius-xl)",
      padding: "28px 28px 24px",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-xl)",
      margin: "0 0 4px",
      color: "var(--color-fg-heading)"
    }
  }, "Log in to Bitwarden"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-body-subtle)",
      margin: "0 0 20px"
    }
  }, "Your vault is end-to-end encrypted."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PMField, {
    label: "Email address",
    type: "email",
    startIcon: "bwi-envelope",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(PMField, {
    label: "Master password",
    type: "password",
    defaultValue: "correct horse battery",
    hint: "Bitwarden cannot recover your master password."
  }), /*#__PURE__*/React.createElement(PMButton, {
    variant: "primary",
    block: true,
    startIcon: "bwi-sign-in",
    onClick: onLogin
  }, "Log in with master password"), /*#__PURE__*/React.createElement(PMButton, {
    variant: "secondary",
    block: true,
    startIcon: "bwi-passkey"
  }, "Log in with passkey"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-body-subtle)",
      marginTop: 22
    }
  }, "New to Bitwarden? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--color-fg-brand)"
    }
  }, "Create account")));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/password-manager/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/password-manager/Send.jsx
try { (() => {
// Bitwarden Send — share encrypted text & files
const {
  Button: SBtn,
  FormField: SField,
  Badge: SBadge,
  IconButton: SIconBtn,
  Select: SSelect
} = window.DesignSystem_17827c;
function Send() {
  const sends = [{
    name: "Design review notes",
    type: "Text",
    views: "3 / 10",
    expires: "in 6 days"
  }, {
    name: "contract-final.pdf",
    type: "File",
    views: "1 / 5",
    expires: "in 2 days"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      background: "var(--color-bg-secondary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      margin: 0,
      color: "var(--color-fg-heading)"
    }
  }, "Send"), /*#__PURE__*/React.createElement(SBadge, {
    variant: "accent-primary"
  }, "End-to-end encrypted")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-body-subtle)",
      marginTop: 4,
      marginBottom: 22
    }
  }, "Securely share text and files with anyone \u2014 they expire automatically."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-bg-primary)",
      border: "1px solid var(--color-border-base)",
      borderRadius: "var(--radius-xl)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      margin: 0,
      color: "var(--color-fg-heading)"
    }
  }, "New Send"), /*#__PURE__*/React.createElement(SField, {
    label: "Name",
    placeholder: "Send name"
  }), /*#__PURE__*/React.createElement(SSelect, {
    label: "Type",
    options: ["Text", "File"]
  }), /*#__PURE__*/React.createElement(SField, {
    label: "Text to share",
    placeholder: "Type your secret message\u2026"
  }), /*#__PURE__*/React.createElement(SSelect, {
    label: "Deletion date",
    options: ["1 day", "7 days", "30 days"],
    defaultValue: "7 days"
  }), /*#__PURE__*/React.createElement(SBtn, {
    variant: "primary",
    startIcon: "bwi-send",
    block: true
  }, "Create Send")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: "var(--color-fg-heading)",
      marginBottom: 10
    }
  }, "Active Sends"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, sends.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--color-bg-primary)",
      border: "1px solid var(--color-border-base)",
      borderRadius: "var(--radius-lg)",
      padding: "12px 14px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-md)",
      flex: "none",
      background: "var(--color-bg-accent-primary-soft)",
      color: "var(--color-fg-accent-primary-strong)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bwi ${s.type === "File" ? "bwi-file" : "bwi-file-text"}`,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: 500,
      color: "var(--color-fg-heading)"
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-fg-body-subtle)"
    }
  }, s.views, " views \xB7 expires ", s.expires)), /*#__PURE__*/React.createElement(SIconBtn, {
    icon: "bwi-copy",
    label: "Copy link",
    variant: "muted",
    size: "small"
  }), /*#__PURE__*/React.createElement(SIconBtn, {
    icon: "bwi-trash",
    label: "Delete",
    variant: "muted",
    size: "small"
  }))))))));
}
window.Send = Send;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/password-manager/Send.jsx", error: String((e && e.message) || e) }); }

// ui_kits/password-manager/Sidebar.jsx
try { (() => {
// Bitwarden web vault — dark side navigation
const {
  Avatar: PMAvatar
} = window.DesignSystem_17827c;
function NavItem({
  icon,
  label,
  active,
  badge,
  onClick,
  indent
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "8px 12px",
      paddingLeft: indent ? 34 : 12,
      background: active ? "var(--color-nav-bg-primary-hover)" : hover ? "var(--color-nav-bg-primary-hover)" : "transparent",
      border: "none",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      color: "var(--color-nav-fg-primary)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: active ? "var(--font-weight-medium)" : "var(--font-weight-normal)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bwi ${icon}`,
    style: {
      fontSize: 16,
      width: 18,
      opacity: 0.95
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      opacity: 0.8
    }
  }, badge));
}
function NavGroup({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: ".06em",
      color: "var(--color-nav-fg-primary)",
      opacity: 0.6,
      padding: "0 12px 4px",
      fontWeight: 500
    }
  }, title), children);
}
function Sidebar({
  active,
  onSelect,
  counts,
  product,
  onProduct
}) {
  const D = window.PMData;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 248,
      flex: "none",
      background: "var(--color-nav-bg-primary)",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 16px 12px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-horizontal-white.svg",
    alt: "Bitwarden",
    style: {
      width: 150
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 12px 10px",
      display: "flex",
      gap: 4
    }
  }, [["Password Manager", "bwi-vault"], ["Send", "bwi-send"]].map(([p, ic]) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => onProduct && onProduct(p),
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      padding: "7px 8px",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      border: "1px solid " + (product === p ? "rgba(255,255,255,.35)" : "transparent"),
      background: product === p ? "var(--color-nav-bg-primary-hover)" : "transparent",
      color: "var(--color-nav-fg-primary)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bwi ${ic}`,
    "aria-hidden": "true"
  }), " ", p === "Password Manager" ? "Vault" : "Send"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "4px 8px"
    }
  }, /*#__PURE__*/React.createElement(NavGroup, null, /*#__PURE__*/React.createElement(NavItem, {
    icon: "bwi-globe",
    label: "All vaults",
    active: active === "all",
    badge: counts.all,
    onClick: () => onSelect("all")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "bwi-star",
    label: "Favorites",
    active: active === "favorites",
    badge: counts.favorites,
    onClick: () => onSelect("favorites")
  })), /*#__PURE__*/React.createElement(NavGroup, {
    title: "Types"
  }, D.types.map(t => /*#__PURE__*/React.createElement(NavItem, {
    key: t.id,
    icon: t.icon,
    label: t.label,
    active: active === t.id,
    badge: counts[t.id],
    onClick: () => onSelect(t.id)
  }))), /*#__PURE__*/React.createElement(NavGroup, {
    title: "Folders"
  }, D.folders.map(f => /*#__PURE__*/React.createElement(NavItem, {
    key: f.id,
    icon: f.icon,
    label: f.label,
    active: active === f.id,
    onClick: () => onSelect(f.id),
    indent: true
  }))), /*#__PURE__*/React.createElement(NavGroup, {
    title: "Tools"
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "bwi-generate",
    label: "Generator",
    active: active === "generator",
    onClick: () => onSelect("generator")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "bwi-trash",
    label: "Trash",
    active: active === "trash",
    onClick: () => onSelect("trash")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-nav-border-primary)",
      padding: 12,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(PMAvatar, {
    text: window.PMData.user.name,
    size: "small",
    color: "coral"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      color: "var(--color-nav-fg-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, window.PMData.user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, window.PMData.user.email)), /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-cog",
    style: {
      color: "var(--color-nav-fg-primary)",
      opacity: 0.85,
      fontSize: 16
    },
    "aria-hidden": "true"
  })));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/password-manager/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/password-manager/VaultList.jsx
try { (() => {
// Bitwarden web vault — item list column
const {
  IconButton: PMIconBtn,
  Badge: PMBadge,
  Button: PMBtn2
} = window.DesignSystem_17827c;
function strengthBadge(item) {
  if (item.exposed) return /*#__PURE__*/React.createElement(PMBadge, {
    variant: "danger",
    size: "small",
    showDefaultIcon: true
  }, "Exposed");
  if (item.reused) return /*#__PURE__*/React.createElement(PMBadge, {
    variant: "warning",
    size: "small",
    showDefaultIcon: true
  }, "Reused");
  if (item.strength === "weak") return /*#__PURE__*/React.createElement(PMBadge, {
    variant: "warning",
    size: "small",
    showDefaultIcon: true
  }, "Weak");
  return null;
}
function ItemRow({
  item,
  selected,
  onClick,
  onToggleFav
}) {
  const [hover, setHover] = React.useState(false);
  const D = window.PMData;
  const letter = item.name[0];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 14px",
      cursor: "pointer",
      background: selected ? "var(--color-bg-brand-softer)" : hover ? "var(--color-bg-hover)" : "transparent",
      borderLeft: "3px solid " + (selected ? "var(--color-border-brand)" : "transparent")
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 36,
      height: 36,
      borderRadius: "var(--radius-md)",
      background: "var(--color-bg-secondary)",
      border: "1px solid var(--color-border-light)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-fg-body-subtle)",
      fontSize: 18
    }
  }, item.type === "login" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--color-fg-brand)"
    }
  }, letter) : /*#__PURE__*/React.createElement("i", {
    className: `bwi ${D.typeIcon[item.type]}`,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: 500,
      color: "var(--color-fg-heading)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, item.name), strengthBadge(item)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-body-subtle)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, item.username || item.subtitle || item.url)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      opacity: hover || selected ? 1 : 0.35
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onToggleFav(item.id);
    },
    "aria-label": "Favorite",
    title: "Favorite",
    style: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 6,
      borderRadius: "var(--radius-full)",
      color: item.favorite ? "var(--color-yellow-500)" : "var(--color-fg-body-subtle)",
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bwi ${item.favorite ? "bwi-star-f" : "bwi-star"}`,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement(PMIconBtn, {
    icon: "bwi-more-vertical",
    label: "Options",
    variant: "muted",
    size: "small",
    onClick: e => e.stopPropagation()
  })));
}
function VaultList({
  title,
  items,
  selectedId,
  onSelect,
  onToggleFav,
  search,
  onSearch,
  onNew
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      flex: "none",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      borderRight: "1px solid var(--color-border-base)",
      background: "var(--color-bg-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 10px",
      borderBottom: "1px solid var(--color-border-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-lg)",
      margin: 0,
      color: "var(--color-fg-heading)"
    }
  }, title), /*#__PURE__*/React.createElement(PMBtn2, {
    variant: "primary",
    size: "small",
    startIcon: "bwi-plus",
    onClick: onNew
  }, "New")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-search",
    style: {
      position: "absolute",
      left: 12,
      color: "var(--color-fg-body-subtle)",
      fontSize: 15
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => onSearch(e.target.value),
    placeholder: "Search vault",
    style: {
      width: "100%",
      padding: "8px 12px 8px 34px",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--color-border-strong)",
      background: "var(--color-bg-primary)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--color-fg-heading)",
      outline: "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--color-fg-body-subtle)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bwi bwi-search",
    style: {
      fontSize: 28,
      display: "block",
      marginBottom: 8,
      opacity: 0.5
    },
    "aria-hidden": "true"
  }), "No items match your search.") : items.map(it => /*#__PURE__*/React.createElement(ItemRow, {
    key: it.id,
    item: it,
    selected: it.id === selectedId,
    onClick: () => onSelect(it.id),
    onToggleFav: onToggleFav
  }))));
}
window.VaultList = VaultList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/password-manager/VaultList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/password-manager/data.js
try { (() => {
// Fake vault data for the Bitwarden Password Manager UI kit
window.PMData = {
  user: {
    name: "Ada Lovelace",
    email: "ada@analyticalengine.dev"
  },
  items: [{
    id: 1,
    type: "login",
    name: "GitHub",
    username: "ada-lovelace",
    url: "github.com",
    favorite: true,
    password: "Tr0ub@dor&-7Mango",
    strength: "strong",
    domain: "github.com"
  }, {
    id: 2,
    type: "login",
    name: "Google",
    username: "ada@analyticalengine.dev",
    url: "accounts.google.com",
    favorite: true,
    password: "Coral-Lantern-42-Pine",
    strength: "strong",
    domain: "google.com"
  }, {
    id: 3,
    type: "login",
    name: "Amazon",
    username: "ada.lovelace",
    url: "amazon.com",
    favorite: false,
    password: "hunter2",
    strength: "weak",
    reused: true,
    domain: "amazon.com"
  }, {
    id: 4,
    type: "login",
    name: "Figma",
    username: "ada@analyticalengine.dev",
    url: "figma.com",
    favorite: false,
    password: "Velvet#River9-Sky",
    strength: "strong",
    domain: "figma.com"
  }, {
    id: 5,
    type: "card",
    name: "Personal Visa",
    subtitle: "Visa, *4242",
    brand: "Visa",
    number: "4242 4242 4242 4242",
    exp: "08/27",
    favorite: false
  }, {
    id: 6,
    type: "login",
    name: "Slack",
    username: "ada",
    url: "slack.com",
    favorite: false,
    password: "Amber-Quartz-15-Lime",
    strength: "good",
    domain: "slack.com"
  }, {
    id: 7,
    type: "identity",
    name: "Ada Lovelace",
    subtitle: "Identity",
    favorite: false
  }, {
    id: 8,
    type: "note",
    name: "Wi-Fi password",
    subtitle: "Secure note",
    favorite: false
  }, {
    id: 9,
    type: "login",
    name: "Dropbox",
    username: "ada@analyticalengine.dev",
    url: "dropbox.com",
    favorite: false,
    password: "qwerty123",
    strength: "weak",
    exposed: true,
    domain: "dropbox.com"
  }],
  filters: [{
    id: "all",
    label: "All vaults",
    icon: "bwi-globe"
  }, {
    id: "favorites",
    label: "Favorites",
    icon: "bwi-star"
  }],
  types: [{
    id: "login",
    label: "Login",
    icon: "bwi-globe"
  }, {
    id: "card",
    label: "Card",
    icon: "bwi-credit-card"
  }, {
    id: "identity",
    label: "Identity",
    icon: "bwi-id-card"
  }, {
    id: "note",
    label: "Secure note",
    icon: "bwi-sticky-note"
  }],
  folders: [{
    id: "work",
    label: "Work",
    icon: "bwi-folder"
  }, {
    id: "personal",
    label: "Personal",
    icon: "bwi-folder"
  }],
  typeIcon: {
    login: "bwi-globe",
    card: "bwi-credit-card",
    identity: "bwi-id-card",
    note: "bwi-sticky-note"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/password-manager/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
