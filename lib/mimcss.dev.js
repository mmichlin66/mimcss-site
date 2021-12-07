(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mimcss"] = factory();
	else
		root["mimcss"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/api/ColorAPI.js":
/*!*****************************!*\
  !*** ./lib/api/ColorAPI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colors": () => (/* binding */ Colors),
/* harmony export */   "registerColor": () => (/* binding */ registerColor),
/* harmony export */   "rgb": () => (/* binding */ rgb),
/* harmony export */   "hsl": () => (/* binding */ hsl),
/* harmony export */   "lab": () => (/* binding */ lab),
/* harmony export */   "lch": () => (/* binding */ lch),
/* harmony export */   "colorContrast": () => (/* binding */ colorContrast),
/* harmony export */   "colorMix": () => (/* binding */ colorMix),
/* harmony export */   "alpha": () => (/* binding */ alpha)
/* harmony export */ });
/* harmony import */ var _impl_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/Utils */ "./lib/impl/Utils.js");

/**
 * Object whose property names are the well-known Web color names while values correspond to the
 * hexadecimal representation of the RGB separations (without an alpha mask). The properties of
 * this object can be used wherever the [[CssColor]] type can be used. Since the properties are
 * of the `number` type, they can be used for manipulating the color value.
*/
const Colors = {
    black: 0x000000,
    silver: 0xc0c0c0,
    gray: 0x808080,
    white: 0xffffff,
    maroon: 0x800000,
    red: 0xff0000,
    purple: 0x800080,
    fuchsia: 0xff00ff,
    green: 0x008000,
    lime: 0x00ff00,
    olive: 0x808000,
    yellow: 0xffff00,
    navy: 0x000080,
    blue: 0x0000ff,
    teal: 0x008080,
    aqua: 0x00ffff,
    orange: 0xffa500,
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    blanchedalmond: 0xffebcd,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    oldlace: 0xfdf5e6,
    olivedrab: 0x6b8e23,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    whitesmoke: 0xf5f5f5,
    yellowgreen: 0x9acd32,
    rebeccapurple: 0x663399,
};
/**
 * Object where we keep the registered custom colors. We need it to determine whether the color
 * is a standard or a custom one.
 */
const customColors = {};
/**
 * Registers a new custom color or changes the value of the existing custom color. The name of the
 * custom color should have been already added to the [[INamedColors]] interface using the module
 * augmentation technique. Note that values of standard Web colors cannot be changed.
 *
 * @param name Color name. This name cannot be a name of the standard Web color.
 * @param value Color value to assign to the given named color.
 * @returns Flag indicating whether the operation was successful.
 */
const registerColor = (name, value) => {
    if (!name || value == null)
        return false;
    // try to retrieve this name from the CustomColors object. Non-undefined value means that
    // we already have this color registered.
    let customValue = customColors[name];
    // if the color name already exists in the Colors object we will only allow changing its
    // value if this is a custom color.
    if (name in Colors && customValue != null)
        return false;
    // add the value to the Colors and CustomColors objects
    Colors[name] = value;
    customColors[name] = value;
    return true;
};
/**
 * Converts color value from the numeric representation to the CSS color string.
 */
let colorNumber2s = (val) => {
    // if the number is negative, remember that fact and get the positive number
    let isNegative = val < 0;
    let n = isNegative ? -val : val;
    // if the number has a floating point part, separate it into alpha channel
    let a = 0;
    if (!Number.isInteger(n)) {
        let k = Math.floor(n);
        // a = Math.round( (n - k) * 100);
        a = Math.round((n - k) * 255);
        n = k;
    }
    // If the number was negative we revert the color by negating all the bits. In any case,
    // we clear everything beyond the first three bytes.
    n = isNegative ? ~(0xFF000000 | n) : 0x00FFFFFF & n;
    let s = "#" + n.toString(16).padStart(6, "0");
    return a ? s + a.toString(16).padStart(2, "0") : s;
};
/**
 * Converts color style value to the CSS string. We convert numeric values to the #RRGGBBAA
 * representation. If a string value is a custom color added via INamedColors module
 * augmentation we get its number from the `custmColors` object and also convert it to the
 * #RRGGBBAA representation. Standard named colors as well as are returned as is.
 */
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[11] = (val) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    str: v => v in customColors ? colorNumber2s(customColors[v]) : v,
    num: colorNumber2s
});
/**
 * Converts color style value to the CSS string. We convert numeric values to the #RRGGBBAA
 * representation. If a string value is a custom color added via INamedColors module
 * augmentation we get its number from the `custmColors` object and also convert it to the
 * #RRGGBBAA representation. Standard named colors as well as are returned as is.
 */
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[30] = (val) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, { any: 11 /* Color */ });
/**
 * Converts the color separation value to a CSS string.
 */
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[28] = (c) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(c, {
    num: c => {
        c = c < 0 ? -c : c;
        return (c === 0 || c >= 1) ? "" + c : (Math.round(c * 100) + "%");
    }
});
/**
 * Converts the color specified as red, green, blue separation values and an optional alpha
 * mask to a CSS color representation. Each color separation can be represented as a number with
 * the following meaning:
 *   - Integer number -255 to 255. Numbers beyond this range will be clamped. Negative numbers
 *     will be inverted.
 *   - Floating number -1.0 to 1.0 non-inclusive, which is multiplied by 100 treated as percentage.
 *     Floating numbers beyond this range will be rounded and treated as integer numbers. Negative
 *     numbers will be inverted.
 *
 * The alpha mask can be one of the following:
 *   - Floating number 0 to 1 inclusive.
 *   - Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped.
 *   - The sign of alpha is ignored; that is, only the absolute value is considered.
 *
 * - MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb()
 *
 * @param r Red separation value.
 * @param g Green separation value.
 * @param b Blue separation value.
 * @param a Optional alpha mask as a percentage value.
 * @return The `IRgbFunc` object representing the invocation of the `rgb()` CSS function
 */
const rgb = (r, g, b, a) => {
    return { fn: "rgb", r, g, b, a };
};
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.rgb = {
    p: [["r", 28 /* ColorSeparation */], ["g", 28 /* ColorSeparation */], ["b", 28 /* ColorSeparation */], ["a", 2 /* Percent */, "/"]],
    s: " "
};
/**
 * Converts the color specified as hue-saturation-lightness components and an optional alpha
 * mask to a CSS color representation. This method should be used when defining CSS color
 * values in styleset properties.
 *
 * The Hue component is treated as the CSS `<angle>` type. Numbers are considered degrees.
 *
 * The Saturation and Lightness components are treated as percentages:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Floating number 0 to 1 inclusive are multiplied by 100 and treated as percentage.
 *   - Integer or floating number 1 to 100 are treated as percentage. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped to 100.
 *
 * The alpha mask can be one of the following:
 *   - Floating number 0 to 1 inclusive.
 *   - Integer or floating number 1 to 100, which is divided by 100. Floating numbers will be
 *     rounded. Numbers beyond this range will be clamped.
 *   - The sign of alpha is ignored; that is, only the absolute value is considered.
 *
 * - MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl()
 *
 * @param h Hue component as an angle value.
 * @param s Saturation component as a percentage value.
 * @param l Lightness component as a percentage value.
 * @param a Optional alpha mask as a percentage value.
 * @return The `IHslFunc` object representing the invocation of the `hsl()` CSS function
 */
const hsl = (h, s, l, a) => {
    return { fn: "hsl", h, s, l, a };
};
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.hsl = {
    p: [["h", 4 /* Angle */], ["s", 2 /* Percent */], ["l", 2 /* Percent */], ["a", 2 /* Percent */, "/"]],
    s: " "
};
/**
 * Converts the color specified as L\*a\*b\* components and an optional alpha
 * mask to a CSS color representation. This method should be used when defining CSS color
 * values in styleset properties.
 *
 * - MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab()
 *
 * @param l CIE Lightness component
 * @param da Distance along the a axis in the Lab colorspace
 * @param db Distance along the b axis in the Lab colorspace
 * @param a Optional alpha mask as a percentage value.
 * @returns The `ILabFunc` object representing the invocation of the `lab()` CSS function
 */
const lab = (l, da, db, a) => {
    return { fn: "lab", l, da, db, a };
};
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.lab = {
    p: [["l", 27 /* AlwaysPercent */], "da", "db", ["a", 2 /* Percent */, "/"]],
    s: " "
};
/**
 * Converts the color specified as lightness-chroma-hue components and an optional alpha
 * mask to a CSS color representation. This method should be used when defining CSS color
 * values in styleset properties.
 *
 * - MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch()
 *
 * @param l CIE Lightness component
 * @param c Chroma component
 * @param h Hue component as an angle value.
 * @param a Optional alpha mask as a percentage value.
 * @returns The `ILchFunc` object representing the invocation of the `lch()` CSS function
 */
const lch = (l, c, h, a) => {
    return { fn: "lch", l, c, h, a };
};
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.lch = {
    p: [["l", 27 /* AlwaysPercent */], "c", ["h", 4 /* Angle */], ["a", 2 /* Percent */, "/"]],
    s: " "
};
/**
 * Implements the `color-contrast()` CSS property.
 *
 * - MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast()
 *
 * @param c Color to which the list of colors in the `vs` property will be compared
 * @param vs List of colors from which to select the most contrasting to the base color.
 * @returns The `IColorContrastFunc` object representing the invocation of the `color-contrast()`
 * CSS function
 */
const colorContrast = (c, ...vs) => ({ fn: "color-contrast", c, vs });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["color-contrast"] = {
    p: [
        ["c", (v) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(v, 11 /* Color */) + " vs"],
        ["vs", (v) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.a2s)(v, 11 /* Color */, ",")]
    ],
    s: " "
};
/**
 * Represents an invocation of the CSS `color-mix()` function. This interface is returned from the
 * [[colorMix]] function. Developers can use this structure wherever [[CssColor]] is accepted.
 */
class ColorMixFunc {
    constructor(c, p) {
        this.fn = "color-mix";
        this.c1 = [c, p];
    }
    with(c, p) { this.c2 = [c, p]; return this; }
    in(cs) { this.cs = cs; return this; }
}
/**
 * Implements the `color-mix()` CSS property.
 *
 * - MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-nix()
 *
 * **Examples**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefnition
 * {
 *     // color-mix( "blue", "red")
 *     cls1 = this.$class({
 *         color: css.colorMix("blue").with("red");
 *     })
 *
 *     // color-mix( in srgb, "blue 30%", "red" 60%)
 *     cls2 = this.$class({
 *         color: css.colorMix("blue", 30).with("red", 60).in("srgb");
 *     })
 * }
 * ```
 *
 * @param cs Color space. Default is "lch".
 * @returns The `IColorMixBuilder` object that allows adding colors and optional percentages to mix
 */
const colorMix = (c, p) => new ColorMixFunc(c, p);
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["color-mix"] = [
    ["cs", (v) => v ? "in " + (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(v) : ""],
    ["c1", v => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.mv2s)([[v[0], 11 /* Color */], [v[1], 2 /* Percent */]])],
    ["c2", v => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.mv2s)([[v[0], 11 /* Color */], [v[1], 2 /* Percent */]])],
];
/**
 * Converts the given color and the alpha mask to the CSS Color representation. This
 * method should be used when defining CSS color values in styleset properties.
 *
 * The color can be specified as a numeric value or as a color name from the [[INamedColors]]
 * interface - including colors added using the module augmentation technique.
 *
 * The alpha mask is specified as a number:
 *   - The sign is ignored; that is, only the absolute value is considered.
 *   - Number 0 to 1 inclusive, which is treated as percentage.
 *   - Number 1 to 100 inclusive, which is treated as percentage.
 *   - Numbers greater than 100 are clamped to 100;
 *
 * **Examples**
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // applying alpha to a numeric color
 *     cls1 = this.$class({ color: css.alpha( 0xAA00AA, 0.5) })
 *
 *     // applying alpha to a named color
 *     cls1 = this.$class({ color: css.alpha( "darkolivegreen", 0.5) })
 * }
 * ```
 * @param c Color value as either a number or a named color
 * @param a Alpha channel value
 */
const alpha = (c, a) => ({ fn: "alpha", c, a });
const alpha2s = (c, a) => {
    // if the alpha is 0, return transparent color
    if (a === 0)
        return "#0000";
    // convert color to numeric value (if it's not a number yet). If the color was given as a
    // string that we cannot find in the Colors object, return pure white.
    let n = typeof c === "string" ? Colors[c] : c;
    if (n == null)
        return "#FFF";
    // negative and positive values of alpha are treated identically, so convert to positive
    if (a < 0)
        a = -a;
    // convert alpha to a number with absolute value less than 1 (if it is not yet). If alpha
    // is 1 or 100, then set it to 0 because 0 in the colorNumberToString means "no alpha".
    a = a === 1 || a >= 100 ? 0 : a > 1 ? a / 100 : a;
    // make the new alpha
    return colorNumber2s(n >= 0 ? n + a : n - a);
};
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.alpha = (v) => alpha2s(v.c, v.a);


/***/ }),

/***/ "./lib/api/ColorTypes.js":
/*!*******************************!*\
  !*** ./lib/api/ColorTypes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/api/CoreAPI.js":
/*!****************************!*\
  !*** ./lib/api/CoreAPI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selector": () => (/* binding */ selector),
/* harmony export */   "sel": () => (/* binding */ sel),
/* harmony export */   "steps": () => (/* binding */ steps),
/* harmony export */   "cubicBezier": () => (/* binding */ cubicBezier),
/* harmony export */   "raw": () => (/* binding */ raw),
/* harmony export */   "url": () => (/* binding */ url),
/* harmony export */   "cursor": () => (/* binding */ cursor),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "counters": () => (/* binding */ counters),
/* harmony export */   "usevar": () => (/* binding */ usevar)
/* harmony export */ });
/* harmony import */ var _impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/StyleImpl */ "./lib/impl/StyleImpl.js");
/* harmony import */ var _impl_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../impl/Utils */ "./lib/impl/Utils.js");


///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Selector functions
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a string representation of a selector. This function is a tag function and must be
 * invoked with the template string without parentheses. This function can be used wherever the
 * [[CssSelector]] types are allowed. The parameters embedded into the string
 * must conform to the [[CssSelector]] type.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // css: ul > li {...}
 *     s1 = this.$style( css.selector`ul > li`, {...})
 *
 *     // css: ul.c1:hover {...}
 *     c1 = this.$class({...})
 *     s2 = this.$style( css.selector`ul.${this.c1}:hover`, {...})
 * }
 * ```
 */
const selector = (parts, ...params) => () => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.tag2s)(parts, params);
/**
 * Array of attribute comparison operation strings - needed to check whether a string is an
 * attribute comparison operation.
 */
const attrComparisonOperations = ["=", "~=", "|=", "^=", "$=", "*="];
/**
 * Array of combinator symbols - needed to check whether a string is a combinator.
 */
const selectorCombinators = [",", " ", ">", "+", "~", "||"];
// SelectorProcessingInfo object that used several times, so it is "cached" here
const pseudoClassWithSelectorsInfo = { f: wrapAndAddSelectors, a: [","], p: ":" };
/**
 * Object containing information about how properties and methods of the ISelectorBuilder interface
 * should be converted to CssSelector values. If a name of the property is not in this object, it
 * is treated as a non-parameterized pseudo class.
 */
const selectorInfos = {
    // helper methods
    "attr": addAttrSelector,
    "and": { f: addSelectorsWithCombinators, a: [""] },
    "or": { f: addSelectorsWithCombinators, a: [","] },
    "child": { f: addSelectorsWithCombinators, a: [">"] },
    "desc": { f: addSelectorsWithCombinators, a: [" "] },
    "sib": { f: addSelectorsWithCombinators, a: ["~"] },
    "adj": { f: addSelectorsWithCombinators, a: ["+"] },
    // simple pseudo elements
    "after": 1 /* SimplePseudoElement */,
    "backdrop": 1 /* SimplePseudoElement */,
    "before": 1 /* SimplePseudoElement */,
    "cue": 1 /* SimplePseudoElement */,
    "firstLetter": 1 /* SimplePseudoElement */,
    "firstLine": 1 /* SimplePseudoElement */,
    "grammarError": 1 /* SimplePseudoElement */,
    "marker": 1 /* SimplePseudoElement */,
    "placeholder": 1 /* SimplePseudoElement */,
    "selection": 1 /* SimplePseudoElement */,
    "spellingError": 1 /* SimplePseudoElement */,
    // parameterized pseudo classes
    "dir": 2 /* ParameterizedPseudoClass */,
    // "has": pseudoClassWithSelectorsInfo,
    "host$": { f: wrapAndAddSelectors, a: [","], p: ":", n: ":host" },
    "hostContext": pseudoClassWithSelectorsInfo,
    "is": pseudoClassWithSelectorsInfo,
    "lang": 2 /* ParameterizedPseudoClass */,
    "not": pseudoClassWithSelectorsInfo,
    "nthChild": addNthPseudoClass,
    "nthLastChild": addNthPseudoClass,
    "nthOfType": addNthPseudoClass,
    "nthLastOfType": addNthPseudoClass,
    "where": pseudoClassWithSelectorsInfo,
    // parameterized pseudo elements
    "part": 3 /* ParameterizedPseudoElement */,
    "slotted": { f: wrapAndAddSelectors, a: [","], p: "::" },
};
/**
 * Proxy handler that serves as an implementation of the ISelectorBuilder interface.
 */
class SelectorBuilderHandler {
    constructor(items) {
        this.items = [];
        this.items = items;
    }
    get(t, propName, r) {
        if (typeof propName !== "string")
            return undefined;
        // the following makes our object to implement the ISelectorFunc interface
        if (propName === "fn")
            return "sel";
        else if (propName === "items")
            return this.items;
        let info = selectorInfos[propName];
        if (!info)
            return pushSelector.call(this, pseudoCamelTodDash(":", propName));
        else if (info === 1 /* SimplePseudoElement */)
            return pushSelector.call(this, pseudoCamelTodDash("::", propName));
        else if (info === 2 /* ParameterizedPseudoClass */)
            return addParameterizedPseudoEntity.bind(this, pseudoCamelTodDash(":", propName));
        else if (info === 3 /* ParameterizedPseudoElement */)
            return addParameterizedPseudoEntity.bind(this, pseudoCamelTodDash("::", propName));
        else if (typeof info === "function")
            return info.bind(this, propName);
        else {
            propName = info.n ?? (info.p ? pseudoCamelTodDash(info.p, propName) : propName);
            return info.f.bind(this, propName, ...info.a);
        }
    }
    ownKeys(t) { return SelectorBuilderHandler.keys; }
    has(t, p) { return SelectorBuilderHandler.keys.includes(p); }
}
// array of keys that are considered "own": these are the keys from the ISelectorFunc interface
SelectorBuilderHandler.keys = ["fn", "items"];
// adds an attribute selector
function addAttrSelector(propName, attrName, p2, p3, p4, p5) {
    return pushSelector.call(this, attrComparisonOperations.includes(p2)
        ? { fn: "attr-sel", name: attrName, val: p3, op: p2, cf: p4, ns: p5 }
        : { fn: "attr-sel", name: attrName, val: p2, cf: p3, ns: p4 });
}
// Pushes a selector for the given parameterized pseudo entity to the list of items
function addParameterizedPseudoEntity(entity, param) {
    return pushSelector.call(this, { fn: entity, p: param });
}
// Adds the given selectors intermingled with the given combinator to the list of items.
function addSelectorsWithCombinators(entity, combinator, ...newItems) {
    return pushSelectorsWithCombinators.call(this, combinator, true, ...newItems);
}
// Wraps the given selectors with the invocation of the given pseudo entity and pushes them
// to the list of items
function wrapAndAddSelectors(name, combinator, ...newItems) {
    this.items.push(name + "(");
    pushSelectorsWithCombinators.call(this, combinator, false, ...newItems);
    this.items.push(")");
    return this.proxy;
}
// Pushes the "nth" pseudo class with the given parameters to the list of items
function addNthPseudoClass(propName, p1, p2) {
    return pushSelector.call(this, { fn: pseudoCamelTodDash(":", propName), p: p2 != null ? [p1, p2] : p1 });
}
// Pushes the given selectors intermingled with the given combinator to the list of items. The
// "insertBefore" parameter indicates whether the combinator should be inserted before the first
// selector item.
function pushSelectorsWithCombinators(combinator, insertBefore, ...newItems) {
    if (insertBefore && combinator)
        this.items.push(combinator);
    for (let i = 0; i < newItems.length; i++) {
        if (i > 0 && combinator)
            this.items.push(combinator);
        this.items.push(newItems[i]);
    }
    return this.proxy;
}
// Pushes the given argument to the list of items
function pushSelector(item) {
    this.items.push(item);
    return this.proxy;
}
// combines the given prefix with the pseudo entity camel name converted to dash form
const pseudoCamelTodDash = (prefix, name) => prefix + (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.camelToDash)(name);
/**
 * Creates selector builder object that provides means to build complex selectors from multiple
 * selector items of all possible kinds including tags, classess, IDs, attributes, pseudo classes
 * and pseudo elements combined with CSS combinators. This function returns the [[ISelectorBuilder]]
 * interface, which has methods and properties for all selector items.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     cls = this.$class({...})
 *     myID = this.$id({...})
 *
 *     // produces CSS: label.cls1[data-item="myID"]:hover {...}
 *     s1 = this.$style( css.sel("label").and(this.cls1)).attr("for", this.myID).hover, {...})
 * }
 * ```
 * @param items List of selector items to initialize the complex selector. If multiple items are
 * specified, they are treated as list; that is, they are combined with the `","` combinator.
 * @returns
 */
const sel = (...items) => {
    let handler = new SelectorBuilderHandler(items);
    let proxy = new Proxy({}, handler);
    // the handler should reference the proxy in order to return it from methods (and properties)
    // to allow chain calls.
    handler.proxy = proxy;
    return proxy;
};
_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.fdo.sel = v => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.a2s)(v.items, { sep: "", recursive: true }, "");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Animation and transition timing functions.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a function representing an invocation of the CSS `steps()` function.
 *
 * @category Transition and Animation
 */
const steps = (n, j) => ({ fn: "steps", n, j });
_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.fdo.steps = ["n", "j"];
/**
* Returns a function representing an invocation of the CSS `cubic-bezier()` function.
*
* @category Transition and Animation
*/
const cubicBezier = (n1, n2, n3, n4) => ({ fn: "cubic-bezier", n1, n2, n3, n4 });
_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.fdo["cubic-bezier"] = ["n1", "n2", "n3", "n4"];
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Utility functions
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The `raw` function allows specifying arbitrary text for properties whose type normally doesn't
 * allow strings.This function is a tag function and must be invoked with the template string
 * without parentheses. The `raw` function can be used for any style property. Note, however, that
 * no validation checks are performed on the structure of the string. If the string isn't valid
 * for the style property, the property will not become part of the style rule inserted into the
 * DOM.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     poly = this.$class({
 *         clipPath: css.raw`polygon(50% 20%, 90% 80%, 10% 80%)`
 *     })
 * }
 * ```
 */
const raw = (parts, ...params) => () => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.tag2s)(parts, params);
/**
 * Returns a function representing the CSS `url()` function. The string parameter
 * will be wrapped in a `url()` invocation. The function can also accept the IIDRule object to
 * create url(#element) invocation, which is often used to address SVG elements by their IDs.
 */
const url = (p) => ({ fn: "url", p });
_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.fdo.url = [["p", { str: 23 /* Quoted */ }]];
// Implementation
function cursor(url, x, y) {
    return { fn: "cursor", url, x, y };
}
_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.fdo.cursor = (v) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.mv2s)([url(v.url), v.x, v.y]);
/**
 * Returns a function representing the `attr()` CSS function. It returns [[IStringProxy]] and
 * theoretically can be used in any style property wherever the CSS `<string>` type is accepted;
 * however, its use by browsers is currently limited to the `content` property. Also not all
 * browsers currently support type, units or fallback values.
 *
 * @param attrName Name of the attribute whose value should be returned.
 * @param typeOrUnit Optional type or unit keyword that determines the returned CSS type.
 * @param fallback Optional value that is used if the attribute is not found on the element.
 * @returns
 */
const attr = (attrName, typeOrUnit, fallback) => () => `attr(${(0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.mv2s)([(0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.mv2s)([attrName, typeOrUnit]), fallback], ",")})`;
/**
 * Returns a representation of the CSS `counter()` function with an optional counter style.
 *
 * @param c Counter name or counter rule object
 * @returns ICounterFunc object representing the invocation of the `counter()` CSS function
 */
const counter = (counterObj, style) => () => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.f2s)("counter", [counterObj, style]);
/**
 * Returns a representation of the CSS `counters()` function with the given separator and
 * an optional counter style.
 *
 * @param counterObj Counter name or counter rule object
 * @param sep Separator string between multiple counters
 * @param style Counter style
 * @returns ICounterFunc object representing the invocation of the `counter()` CSS function
 */
const counters = (counterObj, sep, style) => () => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.f2s)("counters", [counterObj, [sep, 23 /* Quoted */], style]);
/**
 * Returns a function representing the invocation of the `var()` CSS function for the given custom
 * CSS property with optional fallbacks. Usually, when you want to refer to a custom CSS property
 * in style rules, it is enough to just refer to the style definition property created using the
 * [[$var]] function; however, if you want to provide a fallback value, you must use this function.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends StyleDefinition
 * {
 *     // create custom CSS property but without an assigned value; it can be assigned
 *     // later programmatically
 *     bgColor = this.$var( "color")
 *
 *     div = this.$tag( "div", {
 *         // use the custom CSS property with the given fallback value
 *         backgroundColor: css.usevar( this.bgColor, "beige")
 *     })
 * }
 * ```
 *
 * @typeparam K Key of the [[IVarTemplateStyleset]] interface that determines the type of the
 * custom CSS property and of the fallback value.
 * @param varObj Custom CSS property object created using the [[$var]] function.
 * @param fallback Fallback value that will be used if the custom CSS property isnt set.
 * @returns The `IRawProxy` callable interface, whcih allows the `usevar` function to be called
 * in any context.
 */
const usevar = (varObj, fallback) => () => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.f2s)("var", [varObj.cssVarName, (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.sp2s)(varObj.template, fallback)]);


/***/ }),

/***/ "./lib/api/CoreTypes.js":
/*!******************************!*\
  !*** ./lib/api/CoreTypes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Basic types.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
;



/***/ }),

/***/ "./lib/api/FontTypes.js":
/*!******************************!*\
  !*** ./lib/api/FontTypes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/api/MediaTypes.js":
/*!*******************************!*\
  !*** ./lib/api/MediaTypes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/api/NumericAPI.js":
/*!*******************************!*\
  !*** ./lib/api/NumericAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Num": () => (/* binding */ Num),
/* harmony export */   "Percent": () => (/* binding */ Percent),
/* harmony export */   "percent": () => (/* binding */ percent),
/* harmony export */   "Len": () => (/* binding */ Len),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "ch": () => (/* binding */ ch),
/* harmony export */   "cm": () => (/* binding */ cm),
/* harmony export */   "em": () => (/* binding */ em),
/* harmony export */   "ex": () => (/* binding */ ex),
/* harmony export */   "ic": () => (/* binding */ ic),
/* harmony export */   "inch": () => (/* binding */ inch),
/* harmony export */   "lh": () => (/* binding */ lh),
/* harmony export */   "mm": () => (/* binding */ mm),
/* harmony export */   "pc": () => (/* binding */ pc),
/* harmony export */   "pt": () => (/* binding */ pt),
/* harmony export */   "px": () => (/* binding */ px),
/* harmony export */   "vb": () => (/* binding */ vb),
/* harmony export */   "vh": () => (/* binding */ vh),
/* harmony export */   "vi": () => (/* binding */ vi),
/* harmony export */   "vw": () => (/* binding */ vw),
/* harmony export */   "rem": () => (/* binding */ rem),
/* harmony export */   "rlh": () => (/* binding */ rlh),
/* harmony export */   "vmin": () => (/* binding */ vmin),
/* harmony export */   "vmax": () => (/* binding */ vmax),
/* harmony export */   "fr": () => (/* binding */ fr),
/* harmony export */   "Angle": () => (/* binding */ Angle),
/* harmony export */   "deg": () => (/* binding */ deg),
/* harmony export */   "rad": () => (/* binding */ rad),
/* harmony export */   "grad": () => (/* binding */ grad),
/* harmony export */   "turn": () => (/* binding */ turn),
/* harmony export */   "Time": () => (/* binding */ Time),
/* harmony export */   "ms": () => (/* binding */ ms),
/* harmony export */   "s": () => (/* binding */ s),
/* harmony export */   "Resolution": () => (/* binding */ Resolution),
/* harmony export */   "dpi": () => (/* binding */ dpi),
/* harmony export */   "dpcm": () => (/* binding */ dpcm),
/* harmony export */   "dppx": () => (/* binding */ dppx),
/* harmony export */   "x": () => (/* binding */ x),
/* harmony export */   "Frequency": () => (/* binding */ Frequency),
/* harmony export */   "hz": () => (/* binding */ hz),
/* harmony export */   "khz": () => (/* binding */ khz),
/* harmony export */   "fitContent": () => (/* binding */ fitContent),
/* harmony export */   "ratio": () => (/* binding */ ratio),
/* harmony export */   "rect": () => (/* binding */ rect)
/* harmony export */ });
/* harmony import */ var _impl_NumericImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/NumericImpl */ "./lib/impl/NumericImpl.js");
/* harmony import */ var _impl_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../impl/Utils */ "./lib/impl/Utils.js");


// Helper function for units conversion
const toUnitsProxy = (n, unit) => () => n + unit;
/**
 * The `Num` object contains methods that implement CSS mathematic functions on the `<number>`
 * CSS type. It implements the [[INumericMath]] interface and thus allows using the methods such
 * as [[min]], [[max]], [[calc]] and [[clamp]] with parameters of the [[CssNumber]] type.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     // define custom CSS property - note that its value can be changed
 *     // programmatically
 *     columnQty = this.$var( "CssNumber", 3)
 *
 *     // max( 5, var(--columnQty))
 *     cls1 = this.$class({
 *         columns: css.Num.max( 5, this.columnQty)
 *     })
 * }
 * ```
 */
const Num = _impl_NumericImpl__WEBPACK_IMPORTED_MODULE_0__.NumberMath;
/**
 * The `Percent` object contains methods that implement CSS mathematic functions on the
 * `<percentage>` CSS type. It implements the [[INumericMath]] interface and thus allows using
 * the methods such as [[min]], [[max]], [[calc]] and [[clamp]] with parameters of the
 * [[CssPercent]] type.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     initialZoom = css.var( "CssPercent", 1.5)
 *
 *     // min( 0.5, var(--initialZoom))
 *     cls1 = this.$class({
 *         zoom: css.Percent.min( 0.5, this.initialZoom)
 *     })
 * }
 * ```
 */
const Percent = _impl_NumericImpl__WEBPACK_IMPORTED_MODULE_0__.PercentMath;
/**
 * Creates percent value by appenfing the `"%"` sign to the given number. This function should be
 * used whenever a `<percentage>` CSS type is used for a style property or value.
 * @category Units
 */
const percent = (n) => toUnitsProxy(n, "%");
/**
 * The `Len` object contains methods that implement CSS mathematic functions on the
 * `<length> | <percentage>` CSS type. It implements the [[INumericMath]] interface and thus
 * allows using the methods such as [[min]], [[max]], [[calc]] and [[clamp]] with parameters
 * of the [[CssLength]] type.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends css.StyleDefinition
 * {
 *     defaultPadding = css.var( "CssLength", 8)
 *
 *     // calc( 200px - (2 * var(--defaultPadding)))
 *     cls1 = this.$class({
 *         width: css.Len.calc` 200px - (2 * ${this.defaultPadding})`
 *     })
 * }
 * ```
 */
const Len = _impl_NumericImpl__WEBPACK_IMPORTED_MODULE_0__.LengthMath;
/**
 * Creates length value in quarters of an inch.
 * @category Units
 */
const Q = (n) => toUnitsProxy(n, "Q");
/**
 * Creates length value in ch units, which is equal to the used advance measure of the `“0”` (ZERO,
 * U+0030) glyph found in the font used to render it. (The advance measure of a glyph is its
 * advance width or height, whichever is in the inline axis of the element.)
 * @category Units
 */
const ch = (n) => toUnitsProxy(n, "ch");
/**
 * Creates length value in cantimeters.
 * @category Units
 */
const cm = (n) => toUnitsProxy(n, "cm");
/**
 * Creates length value in calculated font-sizes of the element.
 * @category Units
 */
const em = (n) => toUnitsProxy(n, "em");
/**
 * Creates length value in heights of lowercase letter 'x' in the font.
 * @category Units
 */
const ex = (n) => toUnitsProxy(n, "ex");
/**
 * Creates length value in ic units.
 * @category Units
 */
const ic = (n) => toUnitsProxy(n, "ic");
/**
 * Creates length value in inches.
 * @category Units
 */
const inch = (n) => toUnitsProxy(n, "in");
/**
 * Creates length value in line-heights of the element.
 * @category Units
 */
const lh = (n) => toUnitsProxy(n, "lh");
/**
 * Creates length value in millimeters.
 * @category Units
 */
const mm = (n) => toUnitsProxy(n, "mm");
/**
 * Creates length value in picas.
 * @category Units
 */
const pc = (n) => toUnitsProxy(n, "pc");
/**
 * Creates length value in points.
 * @category Units
 */
const pt = (n) => toUnitsProxy(n, "pt");
/**
 * Creates length value in pixels.
 * @category Units
 */
const px = (n) => toUnitsProxy(n, "px");
/**
 * Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s block axis.
 * @category Units
 */
const vb = (n) => toUnitsProxy(n, "vb");
/**
 * Creates length value in 1% of the height of the viewport's initial containing block.
 * @category Units
 */
const vh = (n) => toUnitsProxy(n, "vh");
/**
 * Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s inline axis.
 * @category Units
 */
const vi = (n) => toUnitsProxy(n, "vi");
/**
 * Creates length value in 1% of the width of the viewport's initial containing block.
 * @category Units
 */
const vw = (n) => toUnitsProxy(n, "vw");
/**
 * Creates length value in font-sizes of the root element (<html>).
 * @category Units
 */
const rem = (n) => toUnitsProxy(n, "rem");
/**
 * Creates length value in line-heights of the root element (<html>).
 * @category Units
 */
const rlh = (n) => toUnitsProxy(n, "rlh");
/**
 * Creates length value in the units which are a smaller value between vw and vh.
 * @category Units
 */
const vmin = (n) => toUnitsProxy(n, "vmin");
/**
 * Creates length value in the units which are a larger value between vw and vh.
 * @category Units
 */
const vmax = (n) => toUnitsProxy(n, "vmax");
/**
 * Creates length value for flex.
 * @category Units
 */
const fr = (n) => toUnitsProxy(n, "fr");
/**
 * The `Angle` object contains methods that implement CSS mathematic functions on the
 * `<angle> | <percentage>` CSS type. It implements the [[INumericMath]] interface and thus
 * allows using the methods such as [[min]], [[max]], [[calc]] and [[clamp]] with parameters
 * of the [[CssAngle]] type.
 */
const Angle = _impl_NumericImpl__WEBPACK_IMPORTED_MODULE_0__.AngleMath;
/**
 * Creates angle value in degrees.
 * @category Units
 */
const deg = (n) => toUnitsProxy(n, "deg");
/**
 * Creates angle value in radians.
 * @category Units
 */
const rad = (n) => toUnitsProxy(n, "rad");
/**
 * Creates angle value in gradians.
 * @category Units
 */
const grad = (n) => toUnitsProxy(n, "grad");
/**
 * Creates angle value in turns.
 * @category Units
 */
const turn = (n) => toUnitsProxy(n, "turn");
/**
 * The `Time` object contains methods that implement CSS mathematic functions on the `<time>`
 * CSS type. It implements the [[INumericMath]] interface and thus allows using the methods such
 * as [[min]], [[max]], [[calc]] and [[clamp]] with parameters of the [[CssTime]] type.
 */
const Time = _impl_NumericImpl__WEBPACK_IMPORTED_MODULE_0__.TimeMath;
/**
* Creates time value in milliseconds.
* @category Units
*/
const ms = (n) => toUnitsProxy(n, "ms");
/**
 * Creates time value in seconds.
 * @category Units
 */
const s = (n) => toUnitsProxy(n, "s");
/**
 * The `Resolution` object contains methods that implement CSS mathematic functions on the
 * `<resolution>` CSS type. It implements the [[INumericMath]] interface and thus allows using
 * the methods such as [[min]], [[max]], [[calc]] and [[clamp]] with parameters of the
 * [[CssResolution]] type.
 */
const Resolution = _impl_NumericImpl__WEBPACK_IMPORTED_MODULE_0__.ResolutionMath;
/**
* Creates resolution value in DPI.
* @category Units
*/
const dpi = (n) => toUnitsProxy(n, "dpi");
/**
 * Creates resolution value in DPCM.
 * @category Units
 */
const dpcm = (n) => toUnitsProxy(n, "dpcm");
/**
 * Creates resolution value in DPPX.
 * @category Units
 */
const dppx = (n) => toUnitsProxy(n, "dppx");
/**
 * Creates resolution value in X.
 * @category Units
 */
const x = (n) => toUnitsProxy(n, "x");
/**
 * The `Frequency` object contains methods that implement CSS mathematic functions on the `<frequency>`
 * CSS type. It implements the [[INumericMath]] interface and thus allows using the methods such
 * as [[min]], [[max]], [[calc]] and [[clamp]] with parameters of the [[CssFrequency]] type.
 */
const Frequency = _impl_NumericImpl__WEBPACK_IMPORTED_MODULE_0__.FrequencyMath;
/**
* Creates frequency value in Hertz.
* @category Units
*/
const hz = (n) => toUnitsProxy(n, "hz");
/**
 * Creates frequency value in Kilo-Hertz.
 * @category Units
 */
const khz = (n) => toUnitsProxy(n, "khz");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Utility functions
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an [[IFitContentProxy]] function representing the `fit-content()` CSS function
 * ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content())).
 */
const fitContent = (size) => () => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.f2s)("fit-content", [[size, 3 /* Length */]]);
/**
 * Returns an [[IAspectRatioProxy]] function representing the `<ratio>` CSS type.
 */
const ratio = (w, h) => () => [w, h].join("/");
/**
 * Returns an [[IRectProxy]] function representing the `rect()` CSS function used for the `clip`
 * style property.
 * @deprecated The CSS `clip` property and `rect()` function are deprecated.
 */
const rect = (top, right, bottom, left) => () => `rect(${(0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.a2s)([top, right, bottom, left], 3 /* Length */, ",")})`;


/***/ }),

/***/ "./lib/api/NumericTypes.js":
/*!*********************************!*\
  !*** ./lib/api/NumericTypes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
;
;
;
;
;
;
;



/***/ }),

/***/ "./lib/api/RuleAPI.js":
/*!****************************!*\
  !*** ./lib/api/RuleAPI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleDefinition": () => (/* binding */ StyleDefinition),
/* harmony export */   "embedded": () => (/* binding */ embedded),
/* harmony export */   "configNameGeneration": () => (/* binding */ configNameGeneration),
/* harmony export */   "classes": () => (/* binding */ classes),
/* harmony export */   "chooseClass": () => (/* binding */ chooseClass),
/* harmony export */   "virtual": () => (/* binding */ virtual),
/* harmony export */   "ThemeDefinition": () => (/* binding */ ThemeDefinition),
/* harmony export */   "activate": () => (/* binding */ activate),
/* harmony export */   "deactivate": () => (/* binding */ deactivate),
/* harmony export */   "getActiveTheme": () => (/* binding */ getActiveTheme)
/* harmony export */ });
/* harmony import */ var _rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");
/* harmony import */ var _rules_StyleRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/StyleRules */ "./lib/rules/StyleRules.js");
/* harmony import */ var _rules_AnimationRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/AnimationRule */ "./lib/rules/AnimationRule.js");
/* harmony import */ var _rules_VarRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rules/VarRule */ "./lib/rules/VarRule.js");
/* harmony import */ var _rules_CounterRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rules/CounterRules */ "./lib/rules/CounterRules.js");
/* harmony import */ var _rules_GridRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rules/GridRules */ "./lib/rules/GridRules.js");
/* harmony import */ var _rules_MiscRules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules/MiscRules */ "./lib/rules/MiscRules.js");
/* harmony import */ var _rules_GroupRules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rules/GroupRules */ "./lib/rules/GroupRules.js");
/* harmony import */ var _impl_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../impl/Utils */ "./lib/impl/Utils.js");
/* harmony import */ var _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../impl/SchedulingImpl */ "./lib/impl/SchedulingImpl.js");










/**
 * Symbol that is used by the `$parent` property in the StyleDefinition class that keeps reference
 * to the parnt style definition class. Developers can use this property to access rules in
 * the chain of nested grouping rules. We need this symbol to avoid enumerating the `$parent`
 * property when processing the rules in the style definition object.
 */
const symParent = Symbol("parent");
/**
 * The `StyleDefinition` class is a base for all classes that contain defininitions of CSS rules.
 * Style definition classes are regular TypeScript classes and as such can have any fields and
 * methods - both instance and static. Normally, however, they contain instance properties
 * initialized with functions returning style rules and at-rules, such as [[$class]],
 * [[$tag]], [[$media]], [[$counter]] and others.
 *
 * **Examples**
 *
 * ```typescript
 * // top-level style definition class
 * class MyStyles extends css.StyleDefinition
 * {
 *     cls = this.$class({ color: "red"})
 *
 *     // using style-definition class for @media rule
 *     ifNarrowScreen = this.$media( { maxWidth: 800 },
 *         class extends css.StyleDefinition<MyStyles>
 *         {
 *             cls = this.$class({ color: "pink"})
 *         }
 *     )
 * }
 * ```
 *
 * @typeparam P Parent style definition class. Parent of a top-level class is null.
 */
class StyleDefinition {
    /**
     * Style definition instances are created directly only by the *styled components* - that is,
     * components that use different styles for each instance. Otherwise, style definition
     * instances are created when either the [[$use]] method or [[activate]] function is called.
     * @param parent Reference to the parent style definition class
     */
    constructor(parent) {
        this[symParent] = parent;
        // instead of returning an instance of our class, the constructor returns a proxy. This
        // allows creating proxies for all properties defined in the class, which allows processing
        // the properties immediately upon definition.
        return new Proxy(this, new _rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.RuleContainer(this));
    }
    /**
     * Refers to the instance of the style definition class which is the parnt of this style
     * definition object in the chain of style definition classes. Through this member, all rules
     * and other members defined in the parent definition class can be accessed. For top-level
     * style definitions, this property is always undefined. This property can also be undefined
     * if it was not provided to the constructor when creating the style definition class manually.
     *
     * The `$parent` reference is used when there is a need to refer from grouping rules (created
     * by `$media()` or `$support()` functions) to the rules defined in the parent style definition
     * class. If there are multiple nested grouping rules, then the constuct `this.$parent.$parent...`
     * allows reaching to rules defined in any ancestor style definition class.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     defaultColor = this.$var( "color", "blue")
     *
     *     ifSmallScreen = this.$media( { maxWidth: 600 },
     *         class extends css.StyleDefinition<MyStyles>
     *         {
     *             p = this.$style( "p", { color: this.$parent.defaultColor })
     *         }
     *     )
     * }
     * ```
     */
    get $parent() { return this[symParent]; }
    /**
     * Creates a new abstract rule, which defines a styleset that can be extended by other style rules.
     * Abstract rules don't have selectors and are not inserted into the DOM. Abstract rules can
     * themselves extend other rules - both abstract and non-abstract.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     colorBox = this.$abstract({
     *         backgroundColor: "orange",
     *         borderRadius: css.percent(10),
     *         border: [4, "solid", "red"],
     *         ":hover": {
     *             opacity: 0.7
     *         }
     *     })
     *
     *     box = this.$class({
     *         "+": this.colorBox,
     *         width: 200,
     *         height: 200,
     *     })
     *
     *     specialElm = this.$id({
     *         "+": this.colorBox,
     *         width: 600,
     *         height: 400,
     *     })
     * }
     * ```
     *
     * @param styleset One or more styleset objects that will be inherited by style rules that
     * extend this abstract rule.
     * @returns `IStyleRule` object that should be used by the derived rules in the `"+"` property.
     */
    $abstract(styleset) {
        return new _rules_StyleRules__WEBPACK_IMPORTED_MODULE_1__.AbstractRule(styleset);
    }
    /**
     * Creates a new class rule. The class name will be created when the rule is processed as part of
     * the style definition class. The name can be also overridden by providing either an explicit
     * name or another class rule. The function can be called without parameters just to "declare"
     * the class. Such class can be later used either in conditional grouping rules or in derived
     * style definition classes.
     *
     * The returned [[IClassRule]] interface has the `name` property that should be used to assign
     * the class to an HTML element
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     vbox = this.$class({
     *         display: "flex",
     *         flexDirection: "column",
     *         alignItems: "center"
     *     })
     * }
     * ...
     * let styles = css.activate( MyClasses);
     * ...
     * render
     * {
     *     return <div class={styles.vbox.name}>
     *         <span>Hello</span>
     *         <span>World!</span>
     *     </div>
     * }
     * ```
     *
     * @param styleset One or more styleset objects that define style properties of the class.
     * @param nameOverride string or another `IClassRule` object that determines the name of the class.
     * If this optional parameter is defined, the name will override the Mimcss name assignment
     * mechanism. This might be useful if there is a need for the class to match a name of another,
     * probably external, class.
     * @returns `IClassRule` object that should be used for getting the class name and for accessing
     * the style properties if needed.
     */
    $class(styleset, nameOverride) {
        return new _rules_StyleRules__WEBPACK_IMPORTED_MODULE_1__.ClassRule(styleset, nameOverride);
    }
    /**
     * Creates a new class name rule, which combines one or more other class names. This creates a
     * "synonym" that is easier to apply to an element's class attribute than an array of two or
     * more class rules.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     // declare class - just to be used later
     *     spaced = css.class({gap: 8})
     *
     *     vbox = this.$class({
     *         display: "flex",
     *         flexDirection: "column"
     *     })
     *
     *     // use $classname rule to combine the names of classes vbox and spaced
     *     spacedVbox = this.$classname( this.vbox, this.spaced)
     * }
     * ...
     * let styles = css.activate( MyClasses);
     * ...
     * render
     * {
     *     // without spacedVbox, the class would be: {[styles.vbox.name, styles.spaced.name]}
     *     return <div class={styles.spacedVbox.name}>
     *         <span>Hello</span>
     *         <span>World!</span>
     *     </div>
     * }
     * ```
     *
     * @param ...classes List of class names specified either as a string or [[IClassRule]] or
     * [[IClassNameRule]] objects.
     * @returns `IClassNameRule` object whose `name` property contains the combined class name, e.g.
     * `"class1 class2"`. The `cssClassName` property contains the combined selector, e.g.
     * `".class1.class2"`.
     */
    $classname(...classes) {
        return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_6__.ClassNameRule(classes);
    }
    /**
     * Creates a new ID rule. The ID name will be created when the rule is processed as part of
     * the style definition class. The name can be also overridden by providing either an explicit
     * name or another ID rule. The function can be called without parameters just to "declare"
     * the ID. Such ID can be later used either in conditional grouping rules or in derived
     * style definition classes.
     *
     * The returned [[IIDRule]] interface has the `name` property that should be used to assign
     * the ID to an HTML element.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     container = this.$id({
     *         display: "flex",
     *         flexDirection: "column",
     *         alignItems: "center"
     *     })
     * }
     * ...
     * let styles = css.activate( MyClasses);
     * ...
     * render
     * {
     *     return <div id={styles.container.name}>
     *         <span>Hello</span>
     *         <span>World!</span>
     *     </div>
     * }
     * ```
     *
     * @param styleset One or more styleset objects that define style properties of the element.
     * @param nameOverride string or another `IIDRule` object that determines the name of the ID.
     * If this optional parameter is defined, the name will override the Mimcss name assignment
     * mechanism. This might be useful if there is a need for the ID to match a name of another ID.
     * @returns `IIDRule` object that should be used for getting the ID name and for accessing
     * the style properties if needed.
     */
    $id(styleset, nameOverride) {
        return new _rules_StyleRules__WEBPACK_IMPORTED_MODULE_1__.IDRule(styleset, nameOverride);
    }
    /**
     * Creates a new style rule for the given HTML or SVG element tags. The `tag` parameter specifies
     * either a single tag or an array of tags. In addition, an asterisk symbol (`"*"`) can be
     * specified to target all elements.
     *
     * When multiple tags are specified, they will be treated as a selector list; that is, they will
     * be separated by commas.
     *
     * **Examples:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     // using string for selecting a single elemenet tag
     *     tr = this.$tag( "tr", {})
     *
     *     // using array for selecting multiple elemenet tags
     *     header123 = this.$tag( ["h1", "h2", "h3"], {})
     *
     *     // using asterisk to address all elements
     *     all = this.$tag( "*", {})
     * }
     * ```
     *
     * @param tag One or more element tags
     * @param styleset One or more styleset objects that define style properties for the tags.
     * @returns `IStyleRule` object representing the tag rule.
     */
    $tag(tag, styleset) {
        return new _rules_StyleRules__WEBPACK_IMPORTED_MODULE_1__.SelectorRule(Array.isArray(tag) ? tag.join(",") : tag, styleset);
    }
    /**
     * Creates a new style rule with an arbitrary complex selector. Selectors can be specified as
     * one or array of [[SelectorItem]] objects where each `SelectorItem` is one of the following
     * types:
     * - string - allows any content but lacks type-safety checks.
     * - any style rule, that is a rule that implements the [[IStyleRule]] interface. This allows
     *   using prevously defined tag, class, ID and other style rules as selector items
     * - [[selector]] function - a tag function that allows convenient mixing of free-format strings
     *   and strongly typed style rules.
     *
     * When multiple selector items are specified, they will be concatenated into a single string.
     *
     * Note that although style rules can be used for selecting element tags, the [[$tag]] function would
     * be more appropriate because it will catch misspellings of tag names.
     *
     * **Examples:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     // using a string
     *     style1 = this.$style( "li::before", {})
     *
     *     id = this.$id()
     *     cls = this.$class()
     *
     *     // using an array of style rules. The selector will be "#id.cls"
     *     style2 = this.$style( [this.id, this.cls], {})
     *
     *     // using the selector function. The selector will be "#id > .cls"
     *     style3 = this.$style( css.selector`${this.id} > ${this.cls}`, {})
     *
     *     // using a string for selecting element tag.
     *     h1 = this.$style( "h1", {})
     * }
     * ```
     *
     * @param selector Style rule selector
     * @param styleset One or more styleset objects that define style properties for this selector.
     * @returns `IStyleRule` object representing the style rule.
     */
    $style(selector, styleset) {
        return new _rules_StyleRules__WEBPACK_IMPORTED_MODULE_1__.SelectorRule(selector, styleset);
    }
    /**
     * Creates new animation rule. The animation name will be created when the rule is processed as
     * part of the style definition class. The name can be also overridden by providing either an
     * explicit name or another animation rule. The function can be called without parameters just to
     * "declare" the animation. Such animation can be later used either in conditional grouping rules
     * or in derived style definition classes.
     *
     * The returned [[IAnimationRule]] interface represents an object that should be used when
     * using the keyframes name in the `animation-name` or `animation` style properties.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     vanish = this.$keyframes([
     *         [0, { opacity: 100 }],
     *     	   [100, { opacity: 0 }],
     *     ])
     *
     *     vanishingBlock = this.$class({
     *         animation: { name: this.vanish, duration: 2000, count: "infinite", direction: "alternate" }
     *     })
     * }
     * ```
     *
     * @param frames Array of [[AnimationFrame]] objects. Each animation frame contains a waypoint
     * and a styleset.
     * @param nameOverride String or another `IAnimationRule` object that determines the name of the
     * animation. If this optional parameter is defined, the name will override the Mimcss name
     * assignment mechanism. This might be useful if there is a need for the name to match a name of
     * another animation.
     * @returns `IAnimationRule` object that should be used for getting the animation name.
     */
    $keyframes(frames, nameOverride) {
        return new _rules_AnimationRule__WEBPACK_IMPORTED_MODULE_2__.AnimationRule(frames, nameOverride);
    }
    /**
     * Creates new custom variable object that defines a custom CSS property. The variable name will
     * be created when the rule is processed as part of the style definition class. The name can be
     * also overridden by providing either an explicit name or another custom variable rule. The
     * function can be called without specifying the value just to "declare" the variable. Such
     * variable can be later used either in conditional grouping rules or in derived style definition
     * classes.
     *
     * Custom properties defined using the `$var` function are included into the `:root {}` block;
     * however, they can be redefined with different values under any style rule.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     // define and use custom CSS property
     *     importantTextColor = this.$var( "color", "red")
     *     important = this.$class({
     *         color: this.importantTextColor
     *     })
     *
     *     // use different value for the custom property under another CSS class
     *     special = this.$class({
     *         "+": this.important,
     *         "--": [ [this.importantTextColor, "maroon"] ]
     *     })
     * }
     * ```
     *
     * @param template Either a name of a style property (in camel-case) or a name of the property from
     * the [[IVarTemplateStyleset]] interface. The type corresponding to this property defines the type
     * of the second parameter.
     * @param value The value assigned to the property.
     * @param nameOverride String or another `IVarRule` object that determines the name of the
     * custom property. If this optional parameter is defined, the name will override the Mimcss name
     * assignment mechanism. This might be useful if there is a need for the name to match a name of
     * existing property.
     * @returns The `IVarRule` object that represents the custom property. Any usage of this object in
     * style properties or function parameters is substituted by the `var()` CSS function invocation.
     */
    $var(template, value, nameOverride) {
        return new _rules_VarRule__WEBPACK_IMPORTED_MODULE_3__.VarRule(template, value, nameOverride);
    }
    // implementation
    $property(syntax, initValue, inherits = true, nameOverride) {
        return new _rules_VarRule__WEBPACK_IMPORTED_MODULE_3__.PropertyRule(syntax, initValue, inherits, nameOverride);
    }
    /**
     * Creates a "constant" that can be used anywhere the type defined by the `template` parameter can
     * be used. They are called constants, because they provide a convenient and lightweight way of
     * defining values that are unchanged during the application lifetime. Although constants are
     * defined very similarly to custom properties (see the [[$var]] function), they cannot participate
     * in the cascade and cannot be redefined under style rules. Constant can use any expression that
     * satisfies the type defined by the `template` parameter including other constants, custom
     * properties and functions.
     *
     * No CSS rules are created for constants and, due to this fact, constants are preferable to custom
     * properties unless the intention is to change the variable value at run-time or to redefine its
     * value under different style rules.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     // defining and using custom CSS property
     *     defaultTextColor = this.$const( "color", "red")
     *     para = this.$style( "p", {
     *         color: this.defaultTextColor
     *     })
     * }
     * ```
     *
     * @param template Either a name of a style property (in camel-case) or a name of the property from
     * the [[IVarTemplateStyleset]] interface. The type corresponding to that property defines the type
     * of the second parameter.
     * @param value The value assigned to the constant.
     * @returns The `IConstRule` object that represents the value of the constant. The value is
     * computed once when the style definition is processed.
     */
    $const(template, value) {
        return new _rules_VarRule__WEBPACK_IMPORTED_MODULE_3__.ConstRule(template, value);
    }
    /**
     * Creates new counter object. The counter name will be created when the rule is processed as
     * part of the style definition class. The name can be also overridden by providing either an
     * explicit name or another counter rule.
     *
     * Counter rules don't create any CSS rules, but they create unique names that can be used
     * for `counter-reset` and `counter-increment` style properties. Counter rules are usually used
     * in conjunction with the [[counter]] and [[counters]] functions.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     counter = this.$counter()
     *     ol = this.$style( "ol", { counterReset: this.counter, listStyleType: "none" })
     *     li = this.$style( "li", {
     *         counterIncrement: this.counter,
     *         "::before": { content: css.counters( this.counter) }
     *     })
     * }
     * ```
     *
     * @param nameOverride String or another `ICounterRule` object that determines the name of the
     * counter. If this optional parameter is defined, the name will override the Mimcss name
     * assignment mechanism. This might be useful if there is a need for the name to match a name of
     * existing counter.
     * @returns The `ICounterRule` object that represents the counter.
     */
    $counter(nameOverride) {
        return new _rules_CounterRules__WEBPACK_IMPORTED_MODULE_4__.CounterRule(nameOverride);
    }
    /**
     * Creates new counter style rule. The counter style name will be created when the rule is
     * processed as part of the style definition class. The name can be also overridden by providing
     * either an explicit name or another counter style rule.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     counterStyle = this.$counterStyle({
     *         system: "cyclic",
     *         symbols: ["one", "two", "three"],
     *         suffix: " - "
     *     })
     * }
     * ```
     *
     * @param counterStyleset An object that defines counter style features.
     * @param nameOverride String or another `ICounterStyleRule` object that determines the name of the
     * counter style. If this optional parameter is defined, the name will override the Mimcss name
     * assignment mechanism. This might be useful if there is a need for the name to match a name of
     * existing counter style.
     * @returns The `ICounterStyleRule` object that represents the counter style.
     */
    $counterStyle(counterStyleset, nameOverride) {
        return new _rules_CounterRules__WEBPACK_IMPORTED_MODULE_4__.CounterStyleRule(counterStyleset, nameOverride);
    }
    /**
     * Creates a new grid line rule. The line name will be created when the rule is processed as
     * part of the style definition class. The name can be also overridden by providing either an
     * explicit name or another grid line rule. The grid line rules are used to define values of
     * style properties `grid-row-start/end` and `grid-column-start/end`.
     *
     * No CSS rule is created for grid lines - these objects are solely used for creating names, which
     * can be type-safely referred to from style rules.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     gridLineFirst = this.$gridline()
     *     gridLineLast = this.$gridline()
     *
     *     grid = this.$class({
     *         display: "grid",
     *         gridTemplateColumns: [ [this.gridLineFirst], "1fr", "2fr", [this.gridLineLast] ],
     *         gridTemplateRows: css.repeat( 2, "1fr"),
     *     })
     *
     *     first = this.$class({
     *         gridColumnStart: this.gridLineFirst,
     *     })
     *
     *     last = this.$class({
     *         gridColumnEnd: this.gridLineLast,
     *     })
     * }
     * ```
     *
     * @param nameOverride String or another `IGridLineRule` object that determines the name of the
     * line. If this optional parameter is defined, the name will override the Mimcss name
     * assignment mechanism. This might be useful if there is a need for the name to match a name of
     * existing grid line.
     * @param isStartEndOrNone Flag indicating whether the `"-start"` or `"-end"` suffix should be
     * appended to the rule name. If the flag is true, `"-start"` is appended; if the flag is false,
     * `"-end"` is appended; if the flag is undefined, no suffix is appended to the rule name.
     * @returns The `IGridLineRule` object that represents the grid line.
     */
    $gridline(nameOverride, isStartEndOrNone) {
        return new _rules_GridRules__WEBPACK_IMPORTED_MODULE_5__.GridLineRule(nameOverride, isStartEndOrNone);
    }
    /**
     * Creates a new grid area rule. The area name will be created when the rule is processed as
     * part of the style definition class. The name can be also overridden by providing either an
     * explicit name or another grid area rule. The grid area rules are used to define values of
     * style properties `grid-area`, `grid-row-start/end`, `grid-column-start/end` and
     * `grid-template-areas`.
     *
     * No CSS rule is created for grid areas - these objects are solely used for creating names, which
     * can be type-safely referred to from style rules.
     *
     * Every grid area defines two grid line rules in each direction, which can be accessed using the
     * [[IGridAreaRule.startLine]] and [[IGridAreaRule.endLine]] properties.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     headerArea = this.$gridarea();
     *     mainArea = this.$gridarea();
     *
     *     grid = this.$class({
     *         display: "grid",
     *         gridTemplateColumns: "1fr",
     *         gridTemplateRows: ["3em", "1fr"],
     *         gridTemplateAreas: [
     *             [this.headerArea, 1,1, 1,1],
     *             [this.mainArea, 2,1, 2,1],
     *         ],
     *     })
     *
     *     header = this.$class({
     *         gridArea: this.headerArea,
     *         backgroundColor: "blue"
     *     })
     *
     *     main = this.$class({
     *         gridArea: this.mainArea,
     *         backgroundColor: "lightgrey"
     *     })
     * }
     * ```
     *
     * @param nameOverride String or another `IGridAreaRule` object that determines the name of the
     * area. If this optional parameter is defined, the name will override the Mimcss name
     * assignment mechanism. This might be useful if there is a need for the name to match a name of
     * existing grid area.
     * @returns The `IGridAreaRule` object that represents the grid area.
     */
    $gridarea(nameOverride) {
        return new _rules_GridRules__WEBPACK_IMPORTED_MODULE_5__.GridAreaRule(nameOverride);
    }
    /**
     * Creates a new `@font-face` rule.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     font = this.$fontface({
     *         fontFamily: "Roboto",
     *         fontStyle: "italic",
     *         fontWeight: 700,
     *         src: {url: 'roboto.woff', format: 'woff'}
     *     });
     * }
     * ```
     *
     * @param fontface Object implementing the `IFontFace` interface defining the parameter of the
     * font to use.
     * @returns The `IFontFaceRule` object that represents the @font-face rule.
     */
    $fontface(fontface) {
        return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_6__.FontFaceRule(fontface);
    }
    /**
     * Creates a new `@import` rule referencing the given CSS file.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     importedCssFiles = [
     *         this.$import( "common-3rdparty.css"),
     *         this.$import( "small-screen-3rdparty.css", {maxWidth: 600}),
     *     ]
     * }
     * ```
     *
     * @param url URL to the CSS file. Relative URLs are resolved relative to the base URL of the
     * page where the Mimcss library is invoked.
     * @returns The `IImportRule` object that represents the `@import` rule.
     */
    $import(url, mediaQuery, supportsQuery) {
        return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_6__.ImportRule(url, mediaQuery, supportsQuery);
    }
    /**
     * Creates new `@namespace` rule.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     init = [
     *         this.$namespace( css.WebNamespaces.SVG, "svg")
     *     ]
     * }
     * ```
     *
     * @param namespace Namespace string - use the [[WebNamespaces]] for well-known namespaces.
     * @param prefix Prefix string to use for the namespace.
     * @returns The `INamespaceRule` object that represents the namespace rule.
     */
    $namespace(namespace, prefix) {
        return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_6__.NamespaceRule(namespace, prefix);
    }
    /**
     * Creates new `@page` rule.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     init = [
     *         this.$page( ":first", { margin: "auto" })
     *     ]
     * }
     * ```
     *
     * @param pseudoClass Optional name of the page pseudo style.
     * @param styleset Styles to apply.
     * @returns The `IPageRule` object that represents the page rule.
     */
    $page(pseudoClass, styleset) {
        return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_6__.PageRule(pseudoClass, styleset);
    }
    /**
     * Creates a new `@supports` rule.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     cls = this.$class({ color: "red"})
     *
     *     ifGridSupported = this.$media( { display: "grid" },
     *         class extends css.StyleDefinition<MyStyles>
     *         {
     *             cls = this.$class({ color: "pink"})
     *         }
     *     )
     * }
     * ```
     *
     * @param statement Supports statement containing one or more supports queries.
     * @param instOrClass Either style definition class or an instance of a style defintion class.
     * @returns `ISupportsRule` object representing the supports rule
     */
    $supports(statement, instOrClass) {
        return new _rules_GroupRules__WEBPACK_IMPORTED_MODULE_7__.SupportsRule(statement, instOrClass);
    }
    /**
     * Creates new `@media` rule.
     *
     * **Example:**
     *
     * ```typescript
     * class MyStyles extends css.StyleDefinition
     * {
     *     cls = this.$class({ color: "red"})
     *
     *     ifNarrowScreen = this.$media( { maxWidth: 800 },
     *         class extends css.StyleDefinition<MyStyles>
     *         {
     *             cls = this.$class({ color: "pink"})
     *         }
     *     )
     * }
     * ```
     *
     * @param statement Media statement containing one or more media queries.
     * @param instOrClass Either style definition class or an instance of a style defintion class.
     * @returns `IMediaRule` object representing the media rule
     */
    $media(statement, instOrClass) {
        return new _rules_GroupRules__WEBPACK_IMPORTED_MODULE_7__.MediaRule(statement, instOrClass);
    }
    /**
     * Processes the given style definition class or instance and creates unique names for all named
     * entities. For a given style definition class only a single instance is created, no matter how
     * many times this function is invoked. However, if an instance, which has not yet been processed,
     * is passed, then a new set of unique names will be created for it.
     *
     * The `$use` function is used to reference a style definition from another style definition, for
     * example:
     *
     * ```typescript
     * class CommonStyles extends css.StyleDefinition
     * {
     *     error = this.$class({ color: "red"})
     * }
     *
     * class PageStyles extends css.StyleDefinition
     * {
     *     common = this.$use( CommonStyles)
     *
     *     erroMessage = this.$class({
     *         "+": this.common.error,
     *         fontWeight: "bold"
     *     })
     * }
     * ```
     *
     * When the `$use` function is called, the rules from the referenced style definition are not
     * inserted into the DOM; they will be inserted when the style definition class that contains
     * the `$use` call is activated. The same style definition class can be used from several
     * other style definitions: as long as there is at least one referencing style definition that
     * is activated, the rules will be in the DOM; as soon as all referencing style definitions are
     * deactivated, the rules from the referenced definition are removed from the DOM.
     *
     * @param instOrClass Either style definition class or an instance of a style definition class.
     * @returns An instance of the style definition class, which will be activated and deactivated
     * along with the enclosing style definition.
     */
    $use(instOrClass) {
        return (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.processSD)(instOrClass);
    }
}
/**
 * Decorator function for style definition classes that will be embedded into an embedding
 * container for the given category. All style definitions for a given category will be activated
 * and deactivated together and their rules will be inserted into a single `<style>` element.
 *
 * **Example:**
 * ```typescript
 * @css.embedded("widgets")
 * class FirstWidgetStyles extends css.StyleDefinition {...}
 *
 * @css.embedded("widgets")
 * class SecondWidgetStyles extends css.StyleDefinition {...}
 * ```
 */
const embedded = (category) => 
// we return the function that is the actual decorator.
_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.embeddedDecorator.bind(undefined, category);
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Name generation.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Sets the method uses to generate names of CSS entities. If yes, the names will be created by
 * appending a unique number to the given prefix. If the prefix is not specified, the standard
 * prefix "n" will be used.
 *
 * By default the development version of the library (mimcss.dev.js) uses the [[UniqueScoped]]
 * method and the production version (mimcss.js) uses the [[Optimized]] method. This function can
 * be called to switch to the alternative method of name generation in either the development or
 * the production builds.
 *
 * @param method Indicates what method to use.
 * @param prefix Optional string that will serve as a prefix to which unique numbers will be added
 * to generate optimized names. Ignored if the `method` parameter is anything other than
 * [[NameGenerationMethod.Optimized]].
 */
const configNameGeneration = (method, prefix) => (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.configNames)(method, prefix);
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Helper functions.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Concatenates the names of the given classes into a single string that can be assigned to a
 * `class` property of an HTML element.
 *
 * @param classProps Variable argument list of either class names or class rule objects.
 * @returns The string that combines all class names (separated with space) from the input array.
 */
const classes = (...classProps) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_8__.v2s)(classProps, {
    obj: (v) => v.name,
    item: classes
});
/**
 * Chooses the first non-null name from the given list of classes.
 * @param classProps
 * @returns The first non-empty class name from the input array or null if all inputs are empty.
 */
const chooseClass = (...classProps) => {
    for (let classProp of classProps) {
        if (!classProp)
            continue;
        else if (typeof classProp === "string")
            return classProp;
        else if (Array.isArray(classProp)) {
            let name = chooseClass(classProp);
            if (name)
                return name;
        }
        else if (classProp.name)
            return classProp.name;
    }
    return null;
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Rule virtualization and theming.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Decorator that should be applied to a rule if it is defined and used in the same style
 * definition class but then is overridden in a derived style definition class. The problem
 * this solves is this: when a rule is defined in a base class and then overridden in a derived
 * class, when an instance of the derived class is created, the rules that are created in the
 * base and derived classes see different values of the rule. Since our rules are defined as
 * part of the constructor, the base class constructor's code only sees the value assigned in that
 * code. If another rule in the base class uses this first rule, this value is remembered.
 *
 * The `@virtual` decorator creates a Proxy object for the rule with the handler that keeps the
 * most recent value set. Thus when a rule in the base class's constructor uses a virtualized
 * rule, the first rule will see the overridden value of the rule when accessed in the
 * post-constructor code.
 *
 * @deprecated This decorator is deprecated as  all rules defined in style definition classes are
 * always virtualized.
 */
const virtual = (target, name) => { };
/**
 * The `ThemeDefinition` class is a base for all classes that define themes. In addition to
 * being a style definition class, themes provide some extra capabilities related to style
 * inheritance and theme activation.
 *
 * @typeparam P Parent style definition class. Parent of a top-level class is null.
 */
class ThemeDefinition extends StyleDefinition {
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Activation.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Activates the given style definition class or instance and inserts all its rules into DOM. If
 * the input object is not an instance but a class, which is not yet associated with an instance,
 * the instance is first created and processed. Note that each style definition instance maintains
 * a reference counter of how many times it was activated and deactivated. The rules are inserted
 * into DOM only upon first activation.
 */
const activate = (instOrClass, schedulerType) => {
    let instance = (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.processSD)(instOrClass);
    if (instance)
        (0,_impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_9__.getActivator)(schedulerType).activate(instance);
    return instance;
};
/**
 * Deactivates the given style definition instance by removing its rules from DOM. Note that each
 * style definition instance maintains a reference counter of how many times it was activated and
 * deactivated. The rules are removed from DOM only when this reference counter goes down to 0.
 */
const deactivate = (instance, schedulerType) => (0,_impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_9__.getActivator)(schedulerType).deactivate(instance);
/**
 * Returns the theme definition object, which is currently active for the given theme declaration
 * class.
 * @param themeClass Theme declaration class
 * @returns Theme instance, which is currently active for the given theme class or undefined
 * if no instance is currently active.
 */
const getActiveTheme = (themeClass) => (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.getCurrentTheme)(themeClass);


/***/ }),

/***/ "./lib/api/RuleTypes.js":
/*!******************************!*\
  !*** ./lib/api/RuleTypes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/api/SchedulingAPI.js":
/*!**********************************!*\
  !*** ./lib/api/SchedulingAPI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forceDOMUpdate": () => (/* binding */ forceDOMUpdate),
/* harmony export */   "cancelDOMUpdate": () => (/* binding */ cancelDOMUpdate),
/* harmony export */   "getDefaultScheduler": () => (/* binding */ getDefaultScheduler),
/* harmony export */   "setDefaultScheduler": () => (/* binding */ setDefaultScheduler),
/* harmony export */   "registerScheduler": () => (/* binding */ registerScheduler),
/* harmony export */   "unregisterScheduler": () => (/* binding */ unregisterScheduler)
/* harmony export */ });
/* harmony import */ var _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/SchedulingImpl */ "./lib/impl/SchedulingImpl.js");

///////////////////////////////////////////////////////////////////////////////////////////////
//
// Scheduling.
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Writes to DOM all style changes caused by the calls to the activate and deactivate functions
 * accumulated since the last activation of the given scheduling type.
 */
const forceDOMUpdate = (schedulerType) => _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_0__.getActivator(schedulerType).forceDOMUpdate();
/**
 * Removes all scheduled activations caused by the calls to the activate and deactivate functions
 * accumulated since the last activation of the given scheduling type.
 */
const cancelDOMUpdate = (schedulerType) => _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_0__.getActivator(schedulerType).cancelDOMUpdate();
/**
 * Returns the current default scheduler type.
 */
const getDefaultScheduler = () => _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_0__.getDefaultScheduler();
/**
 * Sets the default scheduling type that is used by activate and deactivate functions that are
 * called without explicitly providing value to the scheduling parameter. Returns the type of the
 * previous default activator or 0 if an error occurs (e.g. the given scheduler type ID is not
 * registered).
 */
const setDefaultScheduler = (schedulerType) => _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_0__.setDefaultScheduler(schedulerType);
/**
 * Registers the given scheduler object and returns the scheduler type identifier, which
 * should be used when calling activate and deactivate functions.
 */
const registerScheduler = (scheduler) => _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_0__.registerScheduler(scheduler);
/**
 * Unregisters a scheduler object with the given scheduler type identifier.
 */
const unregisterScheduler = (schedulerType) => _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_0__.unregisterScheduler(schedulerType);


/***/ }),

/***/ "./lib/api/SchedulingTypes.js":
/*!************************************!*\
  !*** ./lib/api/SchedulingTypes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/api/ShapeAPI.js":
/*!*****************************!*\
  !*** ./lib/api/ShapeAPI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linearGradient": () => (/* binding */ linearGradient),
/* harmony export */   "radialGradient": () => (/* binding */ radialGradient),
/* harmony export */   "conicGradient": () => (/* binding */ conicGradient),
/* harmony export */   "crossFade": () => (/* binding */ crossFade),
/* harmony export */   "imageSet": () => (/* binding */ imageSet),
/* harmony export */   "registerPaintWorklet": () => (/* binding */ registerPaintWorklet),
/* harmony export */   "paint": () => (/* binding */ paint),
/* harmony export */   "brightness": () => (/* binding */ brightness),
/* harmony export */   "contrast": () => (/* binding */ contrast),
/* harmony export */   "grayscale": () => (/* binding */ grayscale),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "opacity": () => (/* binding */ opacity),
/* harmony export */   "saturate": () => (/* binding */ saturate),
/* harmony export */   "sepia": () => (/* binding */ sepia),
/* harmony export */   "blur": () => (/* binding */ blur),
/* harmony export */   "dropShadow": () => (/* binding */ dropShadow),
/* harmony export */   "hueRotate": () => (/* binding */ hueRotate),
/* harmony export */   "matrix": () => (/* binding */ matrix),
/* harmony export */   "matrix3d": () => (/* binding */ matrix3d),
/* harmony export */   "perspective": () => (/* binding */ perspective),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "rotate3d": () => (/* binding */ rotate3d),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleX": () => (/* binding */ scaleX),
/* harmony export */   "scaleY": () => (/* binding */ scaleY),
/* harmony export */   "scaleZ": () => (/* binding */ scaleZ),
/* harmony export */   "scale3d": () => (/* binding */ scale3d),
/* harmony export */   "skew": () => (/* binding */ skew),
/* harmony export */   "skewX": () => (/* binding */ skewX),
/* harmony export */   "skewY": () => (/* binding */ skewY),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "translateX": () => (/* binding */ translateX),
/* harmony export */   "translateY": () => (/* binding */ translateY),
/* harmony export */   "translateZ": () => (/* binding */ translateZ),
/* harmony export */   "translate3d": () => (/* binding */ translate3d),
/* harmony export */   "inset": () => (/* binding */ inset),
/* harmony export */   "circle": () => (/* binding */ circle),
/* harmony export */   "ellipse": () => (/* binding */ ellipse),
/* harmony export */   "polygon": () => (/* binding */ polygon),
/* harmony export */   "path": () => (/* binding */ path),
/* harmony export */   "ray": () => (/* binding */ ray),
/* harmony export */   "minmax": () => (/* binding */ minmax),
/* harmony export */   "repeat": () => (/* binding */ repeat),
/* harmony export */   "span": () => (/* binding */ span)
/* harmony export */ });
/* harmony import */ var _impl_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/Utils */ "./lib/impl/Utils.js");
/* harmony import */ var _impl_StyleImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../impl/StyleImpl */ "./lib/impl/StyleImpl.js");


///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Images and gradients.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const gradientNameToString = (val) => `${val.repeat ? "repeating-" : ""}${val.fn}`;
const gradientStopsOrHintsToString = (val, math) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    item: {
        num: 11 /* Color */,
        arr: { 1: [math], any: [11 /* Color */, math, math] }
    },
    sep: ","
});
/**
 * Function returning the ILinearGradientBuilder interface representing the `linear-gradient` CSS functions.
 *
 * *Examples:*
 *
 * ```typescript
 * backgroundImage: linearGradient( "red", "blue")
 *
 * backgroundImage: linearGradient( ["red", 30], ["green", 50, 60], ["blue", 80]).repeating()
 *
 * backgroundImage: linearGradient( "red", "blue").to( 45)
 * ```
 *
 * @param stops Variable argument list specifying stops or hints that will be added to
 * the gradient definition.
 *
 * @category Image
 */
const linearGradient = (...stops) => new LinearGradientBuilder(stops);
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["linear-gradient"] = {
    fn: gradientNameToString,
    f: (val) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.mv2s)([
        (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val.angle, { num: 4 /* Angle */, str: v => "to " + v }),
        gradientStopsOrHintsToString(val.stops, 3 /* Length */)
    ], ",")
};
/**
 * Function returning the IRadialGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Examples:*
 *
 * ```typescript
 * backgroundImage: radialGradient( "red", "blue")
 *
 * backgroundImage: radialGradient( "red", "blue").circle( css.percent(30)).at( ["center", css.percent(65)])
 *
 * backgroundImage: radialGradient( "red", "blue").circle( 200).repeating()
 *
 * backgroundImage: radialGradient( "red", "blue").ellipse( "closest-side")
 * ```
 *
 * @param stops Variable argument list specifying stops or hints that will be added to
 * the gradient definition.
 *
 * @category Image
 */
const radialGradient = (...stops) => new RadialGradientBuilder(stops);
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["radial-gradient"] = {
    fn: gradientNameToString,
    f: (val) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.mv2s)([
        (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.mv2s)([val.shape, [val.size, 13 /* MultiLengthWithSpace */], [val.pos, 9 /* AtPosition */]]),
        gradientStopsOrHintsToString(val.stops, 3 /* Length */)
    ], ",")
};
/**
 * Function returning the IConicGradient interface representing the `radial-gradient` CSS functions.
 *
 * *Examples:*
 *
 * ```typescript
 * backgroundImage: conicGradient( "red", "blue")
 *
 * backgroundImage: conicGradient().repeating().add( "red", "blue")
 *
 * backgroundImage: conicGradient( "red", "blue").from( 0.25).at( ["center", css.percent(65)])
 * ```
 *
 * @param stops Variable argument list specifying stops or hints that will be added to
 * the gradient definition.
 *
 * @category Image
 */
const conicGradient = (...stops) => new ConicGradientBuilder(stops);
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["conic-gradient"] = {
    fn: gradientNameToString,
    f: (val) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.mv2s)([
        (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.mv2s)([[val.angle, (v) => "from " + (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(v, 4 /* Angle */)], [val.pos, 9 /* AtPosition */]]),
        gradientStopsOrHintsToString(val.stops, 4 /* Angle */)
    ], ",")
};
/**
 * Base class for gradient implementation
 */
class GradientBuilder {
    constructor(stops) {
        this.stops = stops ?? [];
    }
    repeating(flag) {
        this.repeat = flag == null ? true : flag;
        return this;
    }
    add(...stopsOrHints) {
        this.stops.push(...stopsOrHints);
        return this;
    }
}
/**
 * Implements functionality of linear gradients
 */
class LinearGradientBuilder extends GradientBuilder {
    constructor() {
        super(...arguments);
        this.fn = "linear-gradient";
    }
    to(angle) { this.angle = angle; return this; }
}
/**
 * Implements functionality of radial gradients
 */
class RadialGradientBuilder extends GradientBuilder {
    constructor() {
        super(...arguments);
        this.fn = "radial-gradient";
    }
    circle(sizeOrExtent) {
        this.shape = "circle";
        this.size = sizeOrExtent;
        return this;
    }
    ellipse(...params) {
        this.shape = "ellipse";
        this.size =
            params.length === 1 ? params[0] :
                params.length === 2 ? [params[0], params[1]] :
                    undefined;
        return this;
    }
    extent(extent) { this.size = extent; return this; }
    at(pos) { this.pos = pos; return this; }
}
/**
 * Implements functionality of conic gradients
 */
class ConicGradientBuilder extends GradientBuilder {
    constructor() {
        super(...arguments);
        this.fn = "conic-gradient";
    }
    from(angle) { this.angle = angle; return this; }
    at(pos) { this.pos = pos; return this; }
}
/** Implementation */
function crossFade() {
    return new CrossFadeBuilder(...arguments);
}
/**
 * Implements functionality of cross-fade()
 */
class CrossFadeBuilder {
    constructor() {
        this.fn = "cross-fade";
        let p1 = arguments[0];
        if (Array.isArray(p1) && p1.length === 3) {
            // this is the old signature
            this.old = p1;
        }
        else {
            // this is the new signature
            this.add(...arguments);
        }
    }
    add(...images) {
        if (!this.images)
            this.images = [];
        for (let item of images)
            this.images.push(Array.isArray(item) ? item : [item]);
        return this;
    }
    color(c) { this.c = c; return this; }
}
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["cross-fade"] = (val) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.f2s)("cross-fade", [
    val.images
        ? (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.mv2s)([[val.images, { item: { arr: [0 /* Default */, 2 /* Percent */] }, sep: "," }], [val.c, 11 /* Color */]], ",")
        : (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val.old, { arr: [0 /* Default */, 0 /* Default */, 2 /* Percent */], sep: "," })
]);
/**
 * Returns an IImageSetFunc object representing the `image-set()` CSS function.
 *
 * @param items One or more items specifying an image and optionally image type and resolution.
 * @returns
 *
 * @category Image
 */
const imageSet = (...items) => ({ fn: "image-set", items });
const imageTypeToString = (val) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    str: v => `type("${v.indexOf("/") > 0 ? val : "image/" + val}")`
});
const imageResolutionToString = (val) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    num: v => v + "x"
});
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["image-set"] = [
    [
        "items", {
            item: {
                str: 23 /* Quoted */,
                arr: {
                    1: [23 /* Quoted */],
                    2: [23 /* Quoted */, { str: imageTypeToString, num: imageResolutionToString }],
                    3: [23 /* Quoted */, imageTypeToString, imageResolutionToString],
                }
            },
            sep: ","
        }
    ]
];
/**
 * Registers a paint worklet with the given name, optional argument syntax and optional URL of
 * the worklet module. The worklet name should have been added to the [[IPaintWorklets]] interface
 * using the module augmentation technique. Although it is possible to use paint worklets without
 * adding them to the [[IPaintWorklets]] interface, this will prevent Mimcss from enforcing the
 * types of arguments when the [[paint]] function is invoked.
 * @param name Worklet name
 * @param syntax Tuple containing syntax definitions for worklet arguments.
 * @param url URL to the worklet module. If specified, the module will be automatically added.
 */
const registerPaintWorklet = async (name, syntax = [], url) => {
    if (CSS.paintWorklet) {
        if (!registeredPaintWorkletInfos[name]) {
            registeredPaintWorkletInfos[name] = { syntax, url };
            // if URL is specified use it to add worklet module
            if (url && !addedPaintWorkletModules.has(url)) {
                addedPaintWorkletModules.add(url);
                try {
                    await CSS.paintWorklet.addModule(url);
                }
                catch (x) {
                    console.error(`Error adding module '${url}' for paint worklet '${name}'`, x);
                }
            }
        }
    }
};
/**
 * Information about registered paint worklets.
 */
let registeredPaintWorkletInfos = {};
/**
 * Set of URLs of already added paint worklet modules.
 */
let addedPaintWorkletModules = new Set();
/**
 * Returns the IPaintFunc object describing an invocation of the `paint()` CSS function.
 *
 * @param name Paint worklet name.
 * @param args Parameters to be passed to the paint worklet.
 *
 * @category Image
 *
 * @ts-expect-error: Erroneously reports TS2370 although the rest's type is an array (a tuple) */
const paint = (name, ...args) => ({ fn: "paint", name: name, args: args });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.paint = (v) => {
    if (!v?.args?.length)
        return `paint(${v.name})`;
    let info = registeredPaintWorkletInfos[v.name];
    let buf = [];
    for (let i = 0; i < v.args.length; i++) {
        let syntax = info?.syntax[i];
        buf.push(syntax ? (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_1__.sp2s)(syntax, v.args[i]) : (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(v.args[i]));
    }
    return `paint(${v.name},${buf.filter(v => !!v).join(",")})`;
};
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Filters
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an IFilterProxy function representing one of the filter CSS function.
 */
const filterPercent = (fn, p) => ({ fn, p });
/**
 * Returns an [[IPercentFilterFunc]] object representing the `brightness()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: brightness(150%)
 *     bright = this.$class({ filter: css.brightness(150)})
 *
 *     // filter: brightness(50%)
 *     dim = this.$class({ filter: css.brightness(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
const brightness = (p) => filterPercent("brightness", p);
/**
 * Returns an [[IPercentFilterFunc]] object representing the `contrast()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: contrast(150%)
 *     highContrast = this.$class({ filter: css.contrast(150)})
 *
 *     // filter: contrast(50%)
 *     lowContrast = this.$class({ filter: css.contrast(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
const contrast = (p) => filterPercent("contrast", p);
/**
 * Returns an [[IPercentFilterFunc]] object representing the `grayscale()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: grayscale(100%)
 *     gray = this.$class({ filter: css.grayscale(100)})
 *
 *     // filter: grayscale(50%)
 *     halfColor = this.$class({ filter: css.grayscale(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
const grayscale = (p) => filterPercent("grayscale", p);
/**
 * Returns an [[IPercentFilterFunc]] object representing the `invert()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: invert(100%)
 *     inverted = this.$class({ filter: css.invert(100)})
 *
 *     // filter: invert(75%)
 *     somewhatnverted = this.$class({ filter: css.invert(0.75)})
 *
 *     // filter: invert(50%)
 *     gray = this.$class({ filter: css.invert(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
const invert = (p) => filterPercent("invert", p);
/**
 * Returns an [[IPercentFilterFunc]] object representing the `opacity()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: opacity(50%)
 *     halfTransparent = this.$class({ filter: css.opacity(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
const opacity = (p) => filterPercent("opacity", p);
/**
 * Returns an [[IPercentFilterFunc]] object representing the `saturate()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: saturate(150%)
 *     superSaturated = this.$class({ filter: css.saturate(150)})
 *
 *     // filter: saturate(50%)
 *     underSaturated = this.$class({ filter: css.saturate(0.5)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
const saturate = (p) => filterPercent("saturate", p);
/**
 * Returns an [[IPercentFilterFunc]] object representing the `sepia()` CSS function.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: sepia(100%)
 *     vintage = this.$class({ filter: css.sepia(100)})
 * }
 * ```
 *
 * @param p Value interpreted as percentage. Integer number is used as is while  floating point
 * numbers are multiplied by 100.
 * @returns The `IPercentFilterFunc` interface containing percentage value
 * @category Filter
 */
const sepia = (p) => filterPercent("sepia", p);
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.brightness = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.contrast = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.grayscale = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.invert = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.opacity = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.saturate =
    _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.sepia = 2 /* Percent */;
/**
 * Returns an [[IBlurFunc]] object representing the `blur()` CSS function parameters.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: blur(0)
 *     sharp = this.$class({ filter: css.blur(0)})
 *
 *     // filter: blur(2px)
 *     blurred = this.$class({ filter: css.blur(2)})
 *
 *     // filter: blur(1.5em)
 *     superBlurred = this.$class({ filter: css.blur(1.5)})
 * }
 * ```
 *
 * @param r Radius of the blur.
 * @returns The `IBlurFunc` interface containing the blur radius
 * @category Filter
 */
const blur = (r) => ({ fn: "blur", r });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.blur = 3 /* Length */;
/**
 * Returns an [[IDropShadowFunc]] object representing the `dropShadow()` CSS function parameters.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: drop-shadow(30px 10px 4px blue)
 *     blurredShadow = this.$class({ filter: css.dropShadow( 30, 10, "blue", 4)})
 *
 *     // filter: drop-shadow(2.5em -1.5em green)
 *     sharpShadow = this.$class({ filter: css.dropShadow( 2.5, -1.5, "green")})
 *
 *     // filter: drop-shadow(0 0 20px orange)
 *     haloShadow = this.$class({ filter: css.dropShadow( 0, 0, "orange", 20px)})
 * }
 * ```
 *
 * @param x Horizontal offset of the shadow.
 * @param y Vertical offset of the shadow.
 * @param color Color of the shadow. If undefined, the color of the shadow is taken from the color
 * property.
 * @param blur Value of the shadow's blurring. If undefined, the shadow will be sharp (not blurred).
 * @returns The `IDropShadowFunc` interface containing the shadow parameters.
 *
 * @category Filter
 */
const dropShadow = (x, y, color, blur) => ({ fn: "drop-shadow", x, y, color, blur });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["drop-shadow"] = {
    p: ["x", "y", "blur", ["color", 11 /* Color */]],
    do: 3 /* Length */,
    s: " "
};
/**
 * Returns an [[IHueRotateFunc]] object representing the `hue-rotate()` CSS function parameters.
 *
 * **Example**
 *
 * ```tsx
 * class MyStyles extends css.StyleDefinition
 * {
 *     // filter: hue-rotate(90deg)
 *     toTheRight = this.$class({ filter: css.hueRotate(90)})
 *
 *     // filter: hue-rotate(-0.25turn)
 *     toTheLeft = this.$class({ filter: css.blur(-0.25)})
 * }
 * ```
 *
 * @param a The relative change in hue of the input sample.
 * @returns The `IHueRotateFunc` interface containing the hue rotation angle
 * @category Filter
 */
const hueRotate = (a) => ({ fn: "hue-rotate", a });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["hue-rotate"] = 4 /* Angle */;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Transforms
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an IMatrixFunc object representing the `matrix()` CSS function.
 *
 * @category Transform
 */
const matrix = (a, b, c, d, tx, ty) => ({ fn: "matrix", a, b, c, d, tx, ty });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.matrix = ["a", "b", "c", "d", "tx", "ty"];
/**
 * Returns an IMatrix3dFunc function representing the `matrix3d()` CSS function.
 *
 * @category Transform
 */
const matrix3d = (a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) => ({ fn: "matrix3d", a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4 });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.matrix = ["a1", "b1", "c1", "d1", "a2", "b2", "c2", "d2", "a3", "b3", "c3", "d3", "a4", "b4", "c4", "d4"];
/**
 * Returns an IPerspectiveFunc function representing the `perspective()` CSS function.
 *
 * @category Transform
 */
const perspective = (d) => ({ fn: "perspective", d });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.perspective = 3 /* Length */;
/**
 * Returns an IRotateFunc function representing the `rotate()` CSS function.
 *
 * @category Transform
 */
const rotate = (a) => ({ fn: "rotate", a });
/**
 * Returns an ITransformProxy function representing the `rotateX()` CSS function.
 *
 * @category Transform
 */
const rotateX = (a) => ({ fn: "rotateX", a });
/**
 * Returns an ITransformProxy function representing the `rotateY()` CSS function.
 *
 * @category Transform
 */
const rotateY = (a) => ({ fn: "rotateY", a });
/**
 * Returns an ITransformProxy function representing the `rotateZ()` CSS function.
 *
 * @category Transform
 */
const rotateZ = (a) => ({ fn: "rotateZ", a });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.rotate = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.rotateX = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.rotateY = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.rotateZ = 4 /* Angle */;
/**
 * Returns an IRotate3dFunc function representing the `rotate3d()` CSS function.
 *
 * @category Transform
 */
const rotate3d = (x, y, z, a) => ({ fn: "rotate3d", x, y, z, a });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.rotate3d = ["x", "y", "z", ["a", 4 /* Angle */]];
/**
 * Returns an IScaleFunc function representing the `scale()` CSS function.
 *
 * @category Transform
 */
const scale = (sx, sy) => ({ fn: "scale", sx, sy });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.scale = ["sx", "sy"];
/**
 * Returns an IScale1dFunc function representing the `scaleX()` CSS function.
 *
 * @category Transform
 */
const scaleX = (s) => ({ fn: "scaleX", s });
/**
 * Returns an IScale1dFunc function representing the `scaleY()` CSS function.
 *
 * @category Transform
 */
const scaleY = (s) => ({ fn: "scaleY", s });
/**
 * Returns an IScale1dFunc function representing the `scaleZ()` CSS function.
 *
 * @category Transform
 */
const scaleZ = (s) => ({ fn: "scaleZ", s });
/**
 * Returns an IScale3dFunc function representing the `scale3d()` CSS function.
 *
 * @category Transform
 */
const scale3d = (sx, sy, sz) => ({ fn: "scale3d", sx, sy, sz });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.scale3d = ["sx", "sy", "sz"];
/**
 * Returns an ISkewFunc function representing the `skew()` CSS function.
 *
 * @category Transform
 */
const skew = (ax, ay) => ({ fn: "skew", ax, ay });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.skew = {
    p: ["ax", "ay"],
    do: 4 /* Angle */
};
/**
 * Returns an ISkew1dFunc function representing the `skewX()` CSS function.
 *
 * @category Transform
 */
const skewX = (a) => ({ fn: "skewX", a });
/**
 * Returns an ISkew1dFunc function representing the `skewY()` CSS function.
 *
 * @category Transform
 */
const skewY = (a) => ({ fn: "skewY", a });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.skewX = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.skewY = 4 /* Angle */;
/**
 * Returns an ITranslateFunc function representing the `translate()` CSS function.
 *
 * @category Transform
 */
const translate = (x, y) => ({ fn: "translate", x, y });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.translate = {
    p: ["x", "y"],
    do: 3 /* Length */
};
/**
 * Returns an ITranslate1dFunc function representing the `translateX()` CSS function.
 *
 * @category Transform
 */
const translateX = (d) => ({ fn: "translateX", d });
/**
 * Returns an ITranslate1dFunc function representing the `translateY()` CSS function.
 *
 * @category Transform
 */
const translateY = (d) => ({ fn: "translateY", d });
/**
 * Returns an ITranslate1dFunc function representing the `translateZ()` CSS function.
 *
 * @category Transform
 */
const translateZ = (d) => ({ fn: "translateZ", d });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.translateX = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.translateY = _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.translateZ = 3 /* Length */;
/**
 * Returns an ITranslate3dFunc function representing the `translate3d()` CSS function.
 *
 * @category Transform
 */
const translate3d = (x, y, z) => ({ fn: "translate3d", x, y, z });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.translate3d = {
    p: ["x", "y", "z"],
    do: 3 /* Length */
};
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Basic shapes
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an IInsetBuilder object representing the `inset()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: inset( css.percent(15))
 *
 * clipPath: inset( 10, 12, 14, 16).round( 8)
 * ```
 *
 * @category Basic Shape
 */
const inset = (o1, o2, o3, o4) => ({
    fn: "inset", o1, o2, o3, o4,
    round(r) { this.r = r; return this; }
});
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.inset = {
    p: ["o1", "o2", "o3", "o4", ["r", v => "round " + _impl_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[20](v)]],
    do: 3 /* Length */,
    s: " "
};
/**
 * Returns an ICircleBuilder object representing the `circle()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: circle( 100)
 *
 * clipPath: circle( 100).at( ["center", css.percent(30)])
 * ```
 *
 * @category Basic Shape
 */
const circle = (r) => ({
    fn: "circle", r,
    at(pos) { this.pos = pos; return this; }
});
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.circle = {
    p: [["r", 3 /* Length */], ["pos", 9 /* AtPosition */]],
    s: " "
};
// implementation
function ellipse() {
    return {
        fn: "ellipse", rx: arguments[0], ry: arguments[1],
        at(pos) { this.pos = pos; return this; }
    };
}
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.ellipse = {
    p: ["rx", "ry", ["pos", 9 /* AtPosition */]],
    do: 3 /* Length */,
    s: " "
};
/**
 * Returns an IPolygon object representing the `polygon()` CSS function.
 *
 * *Example:*
 *
 * ```typescript
 * clipPath: css.polygon( [0,100], [50,0], [100,100])
 *
 * clipPath: css.polygon( [0,100], [50,0], [100,100]).fill( "evenodd")
 * ```
 *
 * @category Basic Shape
 */
const polygon = (...points) => ({
    fn: "polygon", points: points ?? [],
    add(...points) { this.points.push(...points); return this; },
    fill(rule) { this.rule = rule; return this; }
});
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.polygon = [
    "rule",
    ["points", { item: 13 /* MultiLengthWithSpace */, sep: "," }],
];
/**
 * Returns an IPathBuilder object that allows building a CSS path.
 *
 * @category Basic Shape
 */
const path = (fillRule) => new PathBuilder(fillRule);
/**
 * The IPathBuilder interface represents the object that accumulates path commands that are then
 * converted to a string parameter of the CSS `path()` function.
 */
class PathBuilder {
    constructor(rule) {
        this.fn = "path";
        this.items = [];
        this.rule = rule;
    }
    // Adds the given command and parameters to the path.
    add(command, params) {
        this.items.push([command, params]);
        return this;
    }
    M(...params) { return this.add("M", params); }
    m(...params) { return this.add("m", params); }
    L(...params) { return this.add("L", params); }
    l(...params) { return this.add("l", params); }
    H(...params) { return this.add("H", params); }
    h(...params) { return this.add("h", params); }
    V(...params) { return this.add("V", params); }
    v(...params) { return this.add("v", params); }
    C(...params) { return this.add("C", params); }
    c(...params) { return this.add("c", params); }
    S(...params) { return this.add("S", params); }
    s(...params) { return this.add("s", params); }
    Q(...params) { return this.add("Q", params); }
    q(...params) { return this.add("q", params); }
    T(...params) { return this.add("T", params); }
    t(...params) { return this.add("t", params); }
    A(...params) { return this.add("A", params); }
    a(...params) { return this.add("a", params); }
    z() { return this.add("z"); }
}
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.path = ["rule", ["items", (v) => `"${(0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.a2s)(v)}"`]];
/**
 * Returns an IRay object representing invocation of the `ray()` CSS function.
 *
 * @category Basic Shape
 */
const ray = (angle, size, contain) => ({ fn: "ray", angle, size, contain });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.ray = {
    p: [
        ["angle", 4 /* Angle */],
        ["size", 3 /* Length */],
        ["contain", (v) => (v ? "contain" : "")]
    ],
    s: " "
};
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Grids
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
* Returns an IMinMax function representing the `minmax()` CSS function.
*
* @category Grid
*/
const minmax = (min, max) => ({ fn: "minmax", min, max });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.minmax = [["min", 3 /* Length */], ["max", 3 /* Length */]];
/**
 * Returns an IRepeat function representing the `repeat()` CSS function.
 *
 * @category Grid
 */
const repeat = (count, ...tracks) => ({ fn: "repeat", count, tracks });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.repeat = ["count", ["tracks", { item: 22 /* GridTrack */ }]];
/**
 * Returns an IGridSpanFunc function representing the `span` expression for grid layouts. If the first
 * parameter is a number, the second parameter (if defined) must be a name; if the first parameter
 * is a name, the second parameter (if defined) must be a number.
 *
 * @category Grid
 */
const span = (p1, p2) => ({ fn: "span", p1, p2 });
_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo.span = (v) => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_0__.mv2s)(["span", v.p1, v.p2]);


/***/ }),

/***/ "./lib/api/ShapeTypes.js":
/*!*******************************!*\
  !*** ./lib/api/ShapeTypes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/api/StyleAPI.js":
/*!*****************************!*\
  !*** ./lib/api/StyleAPI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerStyleProperty": () => (/* binding */ registerStyleProperty),
/* harmony export */   "getStylePropValue": () => (/* binding */ getStylePropValue),
/* harmony export */   "setElementStyle": () => (/* binding */ setElementStyle),
/* harmony export */   "setElementStringStyle": () => (/* binding */ setElementStringStyle),
/* harmony export */   "stylesetToString": () => (/* binding */ stylesetToString),
/* harmony export */   "stylesetToStringStyleset": () => (/* binding */ stylesetToStringStyleset),
/* harmony export */   "diffStylesets": () => (/* binding */ diffStylesets),
/* harmony export */   "media": () => (/* binding */ media),
/* harmony export */   "mediaToString": () => (/* binding */ mediaToString),
/* harmony export */   "supports": () => (/* binding */ supports),
/* harmony export */   "supportsToString": () => (/* binding */ supportsToString),
/* harmony export */   "createCssSerializer": () => (/* binding */ createCssSerializer),
/* harmony export */   "serializeToCSS": () => (/* binding */ serializeToCSS)
/* harmony export */ });
/* harmony import */ var _impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/StyleImpl */ "./lib/impl/StyleImpl.js");
/* harmony import */ var _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../impl/SchedulingImpl */ "./lib/impl/SchedulingImpl.js");
/* harmony import */ var _rules_RuleContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");
/* harmony import */ var _impl_MiscImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../impl/MiscImpl */ "./lib/impl/MiscImpl.js");
/* harmony import */ var _impl_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../impl/Utils */ "./lib/impl/Utils.js");





///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Styleset manipulation
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Registers the given function to be used for converting values of the given style property to
 * string. The `registerStyleProperty` function must be used after adding the property to the
 * [[IStyleset]] interface via the module augmentation technique if the conversion to string
 * requires non-standard operations. This function should not be called for propeties whose
 * values only include numbers, strings, functions returning a string, objects whose `toString`
 * method produces the necessary string or arrays of the above types.
 *
 * This function can be used for style properties that are not yet supported by Mimcss. This is
 * also the way to support properties with vendor prefixes.
 */
const registerStyleProperty = (name, toStringFunc) => (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.s_registerSP)(name, toStringFunc);
/**
 * Converts the given value corresponding to the given style property to a CSS string.
 * @param stylePropName Style property name that determines how the value should be converted
 * to a CSS compliant string.
 * @param stylePropValue Value to convert.
 */
const getStylePropValue = (stylePropName, stylePropValue) => (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.sp2s)(stylePropName, stylePropValue);
// Sets style property on HTML or SVG element
const setElementStyleProp = (elm, name, value, schedulerType) => (0,_impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_1__.scheduleStyleUpdate)(elm, name, (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.sp2s)(name, value), false, schedulerType);
/**
 * Sets values of the style properties from the given Styleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML/SVG element whose styles will be set.
 * @param styleset Styleset object which provides values for style properties.
 */
const setElementStyle = (elm, styleset, schedulerType) => setElementStringStyle(elm, styleset ? stylesetToStringStyleset(styleset) : null, schedulerType);
/**
 * Sets values of the style properties from the given StringStyleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML/SVG element whose styles will be set.
 * @param styleset [[StringStyleset]] object which provides values for style properties.
 */
const setElementStringStyle = (elm, styleset, schedulerType) => (0,_impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_1__.scheduleStyleUpdate)(elm, null, styleset, false, schedulerType);
/**
 * Serializes the given [[Styleset]] to a string.
 * @param styleset
 */
const stylesetToString = (styleset) => (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.styleset2s)(styleset);
/**
 * Converts the given [[Styleset]] object into an object, where each Styleset's property is
 * converted to its string value.
 * @param styleset
 */
const stylesetToStringStyleset = (styleset) => (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.s2ss)(styleset);
/**
 * Compares two Styleset objects by converting style properties to strings and returns an object
 * that contains string values of properties that were new or have different values in the new
 * styleset and undefined values for properties that exist in the old styleset but don't exist
 * in the new one.
 * @param oldStyleset
 * @param newStyleset
 * @returns StringStyleset object with properties that have different values in the old and new
 * stylesets. Properties that existed in the old but don't exist in the new styleset, will have
 * their values set to `"unset"`. If there is no differences between the two stylesets null is
 * returned.
 */
const diffStylesets = (oldStyleset, newStyleset) => {
    if (!oldStyleset && !newStyleset)
        return null;
    else if (!oldStyleset)
        return (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.s2ss)(newStyleset);
    else if (!newStyleset)
        return (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.s2ss)(oldStyleset);
    // first convert both stylesets to their string versions
    let oldStringStyleset = (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.s2ss)(oldStyleset);
    let newStringStyleset = (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.s2ss)(newStyleset);
    let updateVal = null;
    // loop over keys in the old style object and find those that are not in the new one. These
    // will be removed.
    for (let key in oldStringStyleset) {
        let newStringVal = newStringStyleset[key];
        if (newStringVal == null) {
            updateVal = updateVal || {};
            updateVal[key] = "unset";
        }
        else {
            let oldStringVal = oldStringStyleset[key];
            if (oldStringVal !== newStringVal) {
                updateVal = updateVal || {};
                updateVal[key] = newStringVal;
            }
        }
    }
    // loop over keys in the new style object and find those that are not in the old one. These
    // will be added.
    for (let key in newStringStyleset) {
        let oldStringVal = oldStringStyleset[key];
        if (oldStringVal == null) {
            updateVal = updateVal || {};
            updateVal[key] = newStringStyleset[key];
        }
    }
    return updateVal;
};
// functions on HTML and SVG element prototypes
HTMLElement.prototype.setStyleProp = setThisElementStyleProp;
SVGElement.prototype.setStyleProp = setThisElementStyleProp;
HTMLElement.prototype.setStyleset = setThisElementStyle;
SVGElement.prototype.setStyleset = setThisElementStyle;
// Sets style property on HTML or SVG element
function setThisElementStyleProp(name, value, schedulerType) {
    setElementStyleProp(this, name, value, schedulerType);
}
function setThisElementStyle(styleset, schedulerType) {
    setElementStyle(this, styleset, schedulerType);
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// @media and @supports queries.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Tag function that represents a media query. This function allows expressing media queries in
 * a natural string form while embedding media feature values in type safe manner. The string can
 * contain any media expressions while the embedded objects must be of type [[IMediaFeatureset]].
 * Multiple features in the feature set will be expanded into clauses combined with the "and"
 * operator.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends StyleDefinition
 * {
 *     // screen and (min-width: 400px) and (max-width: 600px) and (orientation: portrait)
 *     ifNarrowDevice = this.$media(
 *         css.media`screen and ${{width:[400,600], orientation: "portrait"}}`, ...)
 * }
 * ```
 */
const media = (parts, ...params) => () => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_4__.tag2s)(parts, params, v => typeof v === "string" ? v : (0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_3__.media2s)(v));
/**
 * Converts the given media query value to the CSS media query string. This function can be used
 * by libraries that allow specifying [[MediaStatement]] for the `media` attribute of elements
 * such as `<link>`, `<style>` and `<source>`
 */
const mediaToString = (query) => (0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_3__.media2s)(query);
/**
 * Tag function that represents a supports query. This function allows expressing supports
 * queries in a natural string form while embedding media feature values in type safe manner. The
 * string can contain any supports expressions while the embedded objects must be of type
 * Styleset. Multiple properties in the styleset will be expanded into clauses combined with the
 * "or" operator.
 *
 * **Example:**
 *
 * ```typescript
 * class MyStyles extends StyleDefinition
 * {
 *     // not (transform-origin: 30px 30px 30px)
 *     ifNoTransformOrigin = this.$supports(
 *         css.supports`not (${{transform-origin: [30, 30, 30]}})`, ...)
 * }
 * ```
 */
const supports = (parts, ...params) => () => (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_4__.tag2s)(parts, params, v => typeof v === "string" ? v : (0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_3__.supports2s)(v));
/**
 * Converts the given supports query value to the CSS supports query string.
 */
const supportsToString = (query) => (0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_3__.supports2s)(query);
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Style serialization.
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Creates a new ICssSerializer object that allows adding style definition classes
 * and instances and serializing them to a string. This can be used for server-side rendering when
 * the resultant string can be set as the content of a `<style>` element.
 */
const createCssSerializer = () => new CssSerializer();
/**
 * Serializes one or more style definition classes and instances and returns their CSS string
 * representation. This can be used for server-side rendering when the resultant string can be
 * set as the content of a `<style>` element.
 */
const serializeToCSS = (...args) => {
    if (args.length === 0)
        return "";
    let serializer = new CssSerializer();
    args.forEach(instOrClass => serializer.add(instOrClass));
    return serializer.serialize();
};
/**
 * The StyleSerializer class allows adding style definition classes and objects
 * and serializing them to a single string. This can be used for server-side rendering when
 * the resultant string can be set as the content of a `<style>` element.
 */
class CssSerializer {
    constructor() {
        // Set of style definition instances. This is needed to not add style definitions more than once
        this.sds = new Set();
    }
    /**
     * Adds style definition class or instance.
     */
    add(instOrClass) {
        let instance = (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_2__.processSD)(instOrClass);
        if (!instance || this.sds.has(instance))
            return;
        this.sds.add(instance);
    }
    /**
     * Returns concatenated string representation of all CSS rules added to the context.
     */
    serialize() {
        if (this.sds.size === 0)
            return "";
        let ctx = new RuleSerializationContext();
        this.sds.forEach(instance => ctx.addSD(instance));
        return ctx.tl + ctx.ntl;
    }
}
/**
 * The RuleSerializationContext class implements the IRuleSerializationContext interface and
 * accumulates text of serialized CSS rules.
 */
class RuleSerializationContext {
    constructor() {
        // String buffer that accumulates top-level rule texts.
        this.tl = "";
        // String buffer that accumulates non-top-level rule texts.
        this.ntl = "";
        // Set of style definition instances that were already serialized in this context.
        this.sds = new Set();
    }
    // Adds rule text
    addRule(s, isTopLevelRule) {
        if (isTopLevelRule)
            this.tl += s;
        else
            this.ntl += s;
    }
    // Adds rule text
    addSD(instance) {
        if (!this.sds.has(instance)) {
            this.sds.add(instance);
            (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_2__.serializeSD)(instance, this);
        }
    }
}


/***/ }),

/***/ "./lib/api/StyleTypes.js":
/*!*******************************!*\
  !*** ./lib/api/StyleTypes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/api/Stylesets.js":
/*!******************************!*\
  !*** ./lib/api/Stylesets.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/impl/CoreImpl.js":
/*!******************************!*\
  !*** ./lib/impl/CoreImpl.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selector2s": () => (/* binding */ selector2s)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./lib/impl/Utils.js");

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS selector.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a string representation of a selector.
 */
const selector2s = (val) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, { sep: "", recursive: true });
// Converting attribute selector definition to string
_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo["attr-sel"] = (v) => `[${v.ns ? (typeof v.ns === "string" ? v.ns : v.ns.prefix) + "|" : ""}${v.name}` +
    (v.val == null ? "]" : `${v.op ?? "="}"${v.val}"${v.cf ? " " + v.cf : ""}]`);
// Converting "nth" pseudo classes to string
_Utils__WEBPACK_IMPORTED_MODULE_0__.fdo[":nth-child"] = _Utils__WEBPACK_IMPORTED_MODULE_0__.fdo[":nth-last-child"] = _Utils__WEBPACK_IMPORTED_MODULE_0__.fdo[":nth-of-type"] = _Utils__WEBPACK_IMPORTED_MODULE_0__.fdo[":nth-last-of-type"] = [
    ["p", {
            arr: [
                v => v + "n",
                v => !v ? "" : v > 0 ? "+" + v : "-" + -v
            ],
            sep: ""
        }]
];
// // Converting pseudo entities that accept CssSelector to string
// fdo[":is"] = fdo[":has"] = fdo[":host-context"] = fdo[":not"] = fdo[":where"] = fdo["::slotted"] = [
//     ["p", selector2s]
//     // ["p", {sep: ",", recursive: true}]
// ]


/***/ }),

/***/ "./lib/impl/MiscImpl.js":
/*!******************************!*\
  !*** ./lib/impl/MiscImpl.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "media2s": () => (/* binding */ media2s),
/* harmony export */   "supports2s": () => (/* binding */ supports2s),
/* harmony export */   "fontFace2s": () => (/* binding */ fontFace2s),
/* harmony export */   "counterStyleset2s": () => (/* binding */ counterStyleset2s)
/* harmony export */ });
/* harmony import */ var _StyleImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleImpl */ "./lib/impl/StyleImpl.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./lib/impl/Utils.js");


///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS @media rule.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts the given media query object to the CSS media query string
 */
const media2s = (statement) => (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.v2s)(statement, {
    any: mediaQuery2s,
    sep: ","
});
/**
 * Converts the given media query object to the CSS media query string
 */
const mediaQuery2s = (query) => (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.propSet2s)(query, mediaFeatureInfos, {
    separator: " and ",
    propFunc: mediaFeature2s,
});
/**
 * Converts the given media feature to the CSS media query string
 */
const mediaFeature2s = (dashName, camelName, val, options) => {
    if (val == null)
        return "";
    // if defaultValue is defined and the property value is equal to it, no value should be returned.
    let defaultValue = mediaFeatureDefaultValues.get(camelName);
    if (defaultValue !== undefined && val === defaultValue)
        return dashName;
    let isRange = rangeMediaFeatures.has(camelName);
    if (isRange && Array.isArray(val)) {
        return `(${"min-" + dashName}:${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.v2s)(val[0], options)}) and (${"max-" + dashName}:${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.v2s)(val[1], options)})`;
        // this syntax is not widely supported yet
        // return `${s1} <= ${dashName} <= ${s2}`;
    }
    else
        return `(${dashName}:${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.v2s)(val, options)})`;
};
const mediaFeatureInfos = {
    aspectRatio: {
        num: (v) => v + "/1"
    },
    height: 3 /* Length */,
    minHeight: 3 /* Length */,
    maxHeight: 3 /* Length */,
    resolution: 6 /* Resolution */,
    minResolution: 6 /* Resolution */,
    maxResolution: 6 /* Resolution */,
    width: 3 /* Length */,
    minWidth: 3 /* Length */,
    maxWidth: 3 /* Length */,
};
// Set of media features that allow range of values
const rangeMediaFeatures = new Set(["aspectRatio", "color", "colorIndex", "height", "monochrome", "resolution", "width"]);
// Map of media features to default values
const mediaFeatureDefaultValues = new Map([
    ["color", 0],
    ["colorIndex", 0],
    ["monochrome", 0]
]);
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS @supports rule.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/** Converts the given supports statement to its string representation */
const supports2s = (statement) => (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.v2s)(statement, {
    any: supportsQuery2s,
    sep: " or "
});
/** Converts the given supports query to its string representation */
const supportsQuery2s = (query) => (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.v2s)(query, {
    obj: (v) => {
        let propNames = Object.keys(v);
        if (propNames.length === 0)
            return "";
        return `(${propNames.map((propName) => `${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.camelToDash)(propName)}:${(0,_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.sp2s)(propName, query[propName])}`).join(") and (")})`;
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS @font-face rule.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts the given font face object to the CSS style string.
 */
const fontFace2s = (fontface) => (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.propSet2s)(fontface, fontFacePropertyInfos);
_Utils__WEBPACK_IMPORTED_MODULE_1__.wkf[24] = v => (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.v2s)(v, {
    num: v => `oblique ${_Utils__WEBPACK_IMPORTED_MODULE_1__.wkf[4](v)}`,
    arr: v => `oblique ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.a2s)(v, 4 /* Angle */)}`
});
/**
 * Map of property names to the V2SOptions objects describing custom actions necessary to
 * convert the property value to the CSS-compliant string.
 */
const fontFacePropertyInfos = {
    ascentOverride: 2 /* Percent */,
    descentOverride: 2 /* Percent */,
    fontStretch: { any: 2 /* Percent */ },
    fontStyle: 24 /* FontStyle */,
    fontWeight: { any: 1 /* Number */ },
    lineGapOverride: 2 /* Percent */,
    src: {
        any: {
            obj: [
                ["local", v => `local(${v})`],
                ["url", v => `url(${v})`],
                ["format", {
                        any: v => `format(\"${v}\")`,
                        sep: ","
                    }]
            ]
        },
        sep: ","
    },
    sizeAdjust: 2 /* Percent */,
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS @counter-style rule.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts the given counter styleset property to the CSS style string. Property name can be in
 * either dash or camel form.
 */
const counterStylesetProp2s = (propName, propVal, includeName) => {
    if (!propName)
        return "";
    // convert the value to string based on the information object for the property (if defined)
    let stringValue = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.v2s)(propVal, counterStylePropertyInfos[(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.dashToCamel)(propName)]);
    // if the resulting string is empty and the name should be included, then we return
    // "name:; otherwise we will return an empty string.
    if (!stringValue && includeName)
        stringValue = "";
    return includeName ? `${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.camelToDash)(propName)}:${stringValue}` : stringValue;
};
/**
 * Converts the given counter styleset object to the CSS media query string
 */
const counterStyleset2s = (counterStyleset) => {
    if (!counterStyleset)
        return "";
    let s = "";
    for (let name in counterStyleset)
        s += counterStylesetProp2s(name, counterStyleset[name], true) + ";";
    return s;
};
/**
* Map of property names to the V2SOptions objects describing custom actions necessary to
* convert the property value to the CSS-compliant string.
*/
const counterStylePropertyInfos = {
    system: {
        num: v => "fixed " + v,
        arr: v => "extends " + (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.v2s)(v[0])
    },
    negative: {
        any: 23 /* Quoted */
    },
    prefix: 23 /* Quoted */,
    suffix: 23 /* Quoted */,
    range: {
        arr2: { sep: "," }
    },
    pad: {
        item: 23 /* Quoted */
    },
    symbols: {
        item: 23 /* Quoted */
    },
    additiveSymbols: {
        arr2: { item: { item: 23 /* Quoted */ }, sep: "," },
        any: 23 /* Quoted */
    },
};


/***/ }),

/***/ "./lib/impl/NumericImpl.js":
/*!*********************************!*\
  !*** ./lib/impl/NumericImpl.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumericMath": () => (/* binding */ NumericMath),
/* harmony export */   "NumberMath": () => (/* binding */ NumberMath),
/* harmony export */   "PercentMath": () => (/* binding */ PercentMath),
/* harmony export */   "LengthMath": () => (/* binding */ LengthMath),
/* harmony export */   "AngleMath": () => (/* binding */ AngleMath),
/* harmony export */   "TimeMath": () => (/* binding */ TimeMath),
/* harmony export */   "ResolutionMath": () => (/* binding */ ResolutionMath),
/* harmony export */   "FrequencyMath": () => (/* binding */ FrequencyMath)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./lib/impl/Utils.js");

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Numbers
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts a single numeric value to a CSS string optionally appending units that can be different
 * for integer and floating point numbers.
 * @param n Number to convert to string representation.
 * @param intUnit Units to append if the number is integer.
 * @param floatUnit Units to append if the number is floating point.
 */
const numberToString = (n, intUnit = "", floatUint = "") => n + (Number.isInteger(n) ? intUnit : floatUint);
/**
 * The NumericMath class contains methods that implement CSS mathematic functions on the
 * numeric CSS types. When arguments for these functions are of the number JavaScript type they
 * are converted to strings by calling a function specified in the constructor.
 */
class NumericMath {
    constructor(n2s) {
        this.n2s = n2s;
    }
    v2s(val) {
        return (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, { num: this.n2s });
    }
    mv2s(val, separator) {
        return (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
            any: v => this.v2s(v),
            sep: separator
        });
    }
    /** Creates CssLength value from the number and the given unit. */
    units(n, unit) {
        return () => n + unit;
    }
    min(...params) {
        return () => this.m("min", params);
    }
    max(...params) {
        return () => this.m("max", params);
    }
    clamp(min, pref, max) {
        // return () => mathFunc( "clamp", [min, pref, max], this.n2s);
        return () => this.m("clamp", [min, pref, max]);
    }
    calc(formulaParts, ...params) {
        return () => `calc(${(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.tag2s)(formulaParts, params, (v) => this.v2s(v))})`;
    }
    m(name, params) {
        return `${name}(${this.mv2s(params, ",")})`;
    }
}
/**
 * The NumberMath object contains methods that implement CSS mathematic functions on the `<number>`
 * CSS type.
 */
const NumberMath = new NumericMath(n => n.toString());
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[1] = v => NumberMath.v2s(v);
/**
 * The PercentMath object contains methods that implement CSS mathematic functions on the
 * `<percentage>` CSS type by appending a "%" unit suffix. If the number is between -1 and 1 (non
 * inclusive), multiplies the number by 100.
 */
const PercentMath = new NumericMath(n => (n >= 1 || n <= -1 ? n : Math.round(n * 100)) + "%");
/**
 * Converts the given number to string using the following rules:
 * - if the number is between -1 and 1 (non inclusive), multiplies the number by 100 and appends "%"
 * - otherwise, converts the number to string without appending any units.
 */
const unitlessOrPercentToString = (n) => n >= 1 || n <= -1 ? n.toString() : (Math.round(n * 100) + "%");
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[2] = v => PercentMath.v2s(v);
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[17] = unitlessOrPercentToString;
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[27] = v => v + "%";
/**
 * The LengthMath object contains methods that implement CSS mathematic functions on the `<length>`
 * CSS type by appending a length unit suffix.
 * Integer numbers use "px"; floating point numbers use "em".
 */
const LengthMath = new NumericMath(n => numberToString(n, "px", "em"));
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[3] = v => LengthMath.v2s(v);
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[13] = v => LengthMath.mv2s(v, " ");
/**
 * The AngleMath object contains methods that implement CSS mathematic functions on the `<angle>`
 * CSS type by appending an angle unit suffix.
 * Integer numbers use "deg"; floating point numbers use "turn".
 */
const AngleMath = new NumericMath(n => numberToString(n, "deg", "turn"));
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[4] = v => AngleMath.v2s(v);
/**
 * The TimeMath object contains methods that implement CSS mathematic functions on the `<time>`
 * CSS type by appending a time unit suffix.
 * Integer numbers use "ms"; floating point numbers use "s".
 */
const TimeMath = new NumericMath(n => numberToString(n, "ms", "s"));
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[5] = v => TimeMath.v2s(v);
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[14] = v => TimeMath.mv2s(v, ",");
/**
 * The ResolutionMath object contains methods that implement CSS mathematic functions on the
 * `<resolution>` CSS type by appending a resolution unit suffix.
 * Integer numbers use "dpi"; floating point numbers use "x".
 */
const ResolutionMath = new NumericMath(n => numberToString(n, "dpi", "x"));
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[6] = v => ResolutionMath.v2s(v);
/**
 * The FrequencyMath object contains methods that implement CSS mathematic functions on the
 * `<frequency>` CSS type by appending a frequency unit suffix.
 * Integer numbers use "Hz"; floating point numbers use "kHz".
 */
const FrequencyMath = new NumericMath(n => numberToString(n, "Hz", "kHz"));
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[7] = v => FrequencyMath.v2s(v);
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Size, Point, Position, Radius
//
///////////////////////////////////////////////////////////////////////////////////////////////////
// // Converts single position style value to the CSS string.
// const pos2s = (val: Extended<CssPosition>): string => v2s( val, { any: WKF.Length });
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[8] = (val) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, { any: 3 /* Length */ });
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[9] = (v) => v == null ? "" : "at " + _Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[8](v);
/**
 * Converts multi-position style value to the CSS string.
 */
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[12] = (val) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    arr2: { any: 8 /* Position */, sep: "," },
    any: 8 /* Position */
});
// Converts corner radius style value to the CSS string.
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[18] = (v) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(v, { any: 3 /* Length */ });
/**
 * Converts border radius style value to the CSS string.
 */
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[20] = (val) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    arr2: { any: { any: 3 /* Length */ }, sep: "/" },
    any: 3 /* Length */
});


/***/ }),

/***/ "./lib/impl/SchedulingImpl.js":
/*!************************************!*\
  !*** ./lib/impl/SchedulingImpl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleStyleUpdate": () => (/* binding */ scheduleStyleUpdate),
/* harmony export */   "getActivator": () => (/* binding */ getActivator),
/* harmony export */   "getDefaultScheduler": () => (/* binding */ getDefaultScheduler),
/* harmony export */   "setDefaultScheduler": () => (/* binding */ setDefaultScheduler),
/* harmony export */   "registerScheduler": () => (/* binding */ registerScheduler),
/* harmony export */   "unregisterScheduler": () => (/* binding */ unregisterScheduler)
/* harmony export */ });
/* harmony import */ var _rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");

/**
 * Set the value of either a single property or a set of properties in the given
 * CSS style object.
 */
const updateStyleProperty = (ruleOrElm, name, value, important) => {
    if (!name && value == null) {
        if (ruleOrElm instanceof CSSStyleRule)
            ruleOrElm.cssText = "";
        else
            ruleOrElm.removeAttribute("style");
    }
    else if (name) {
        if (value == null)
            ruleOrElm.style.removeProperty(name);
        else
            ruleOrElm.style.setProperty(name, value, important ? "important" : undefined);
    }
    else {
        let styleset = value;
        for (let propName in styleset)
            ruleOrElm.style[propName] = styleset[propName];
    }
};
/**
 * The SynchronousActivator class represents the synchronous activation mechanism, which writes
 * style changes to the DOM when the activate and deactivate functions are called.
 */
class SynchronousActivator {
    /**
     * Instructs to activate the given style definition instance. This method is called when the
     * activate function is called for this activation mechanism.
     * @param definition
     */
    activate(definition) {
        (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.activateSD)(definition);
    }
    /**
     * Instructs to deactivate the given style definition instance. This method is called when the
     * deactivate function is called for this activation mechanism.
     * @param definition
     */
    deactivate(definition) {
        (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.deactivateSD)(definition);
    }
    /**
     * Instructs to set the value of either a single property or a set of properties in the given
     * CSS style object.
     */
    updateStyle(ruleOrElm, name, value, important) {
        updateStyleProperty(ruleOrElm, name, value, important);
    }
    /**
     * Performs activation/deactivation for all style definitions accumulated since the last
     * activation/deactivation. This method is called when the forceDOMUpdate function is called
     * for this activation mechanism.
     */
    forceDOMUpdate() { }
    /**
     * Cancels activation/deactivation for all style definitions accumulated since the last
     * activation/deactivation. This method is called when the cancelDOMUpdate function is called
     * for this activation mechanism.
     */
    cancelDOMUpdate() { }
}
/**
 * The SchedulingActivator class keeps a map of StyleDefinition instances that are scheduled for
 * activation or deactivation. Each instance is mapped to a refernce count, which is incremented
 * upon the activate calls and decremented upon the deactivate calls. When the doActivation
 * method is called The style definition will be either activated or deactivated based on whether
 * the reference count is positive or negative.
 */
class SchedulingActivator {
    constructor(scheduler) {
        // Array of functions that will be invoked when the scheduled update runs.
        this.actions = [];
        if (scheduler) {
            scheduler.init(() => this.doDOMUpdate());
            this.scheduler = scheduler;
        }
    }
    /**
     * Instructs to activate the given style definition instance.
     */
    activate(definition) {
        if (this.isSchedulingNeeded)
            this.scheduler.scheduleDOMUpdate();
        this.actions.push(() => (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.activateSD)(definition));
    }
    /**
     * Instructs to deactivate the given style definition instance.
     */
    deactivate(definition) {
        if (this.isSchedulingNeeded)
            this.scheduler.scheduleDOMUpdate();
        this.actions.push(() => (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.deactivateSD)(definition));
    }
    /**
     * Instructs to set the value of either a single property or a set of properties in the given
     * CSS style object.
     */
    updateStyle(ruleOrElm, name, value, important) {
        if (this.isSchedulingNeeded)
            this.scheduler.scheduleDOMUpdate();
        this.actions.push(() => updateStyleProperty(ruleOrElm, name, value, important));
    }
    /**
     * Performs activation/deactivation for all style definitions in our internal map.
     */
    forceDOMUpdate() {
        if (this.actions.length > 0) {
            this.doDOMUpdate();
            this.scheduler && this.scheduler.cancelDOMUpdate();
        }
    }
    /**
     * Cancels activation/deactivation for all style definitions accumulated since the last
     * activation/deactivation.
     */
    cancelDOMUpdate() {
        if (this.actions.length > 0) {
            this.actions = [];
            this.scheduler && this.scheduler.cancelDOMUpdate();
        }
    }
    get isSchedulingNeeded() {
        return !!this.scheduler && !this.actions.length;
    }
    /**
     * Performs activation/deactivation and property set operations accumulated internally. This
     * method should be used by the derived classes when scheduled activations should be performed.
     */
    doDOMUpdate() {
        // update style properties
        for (let action of this.actions)
            action();
        this.actions = [];
    }
}
/**
 * The AnimationFrameScheduler implements scheduling using animation frames.
 */
class AnimationFrameScheduler {
    constructor() {
        // Handle returned by requestAnimationFrame function.
        this.h = 0;
        /**
         * Is invoked when animation frame should be executed.
         */
        this.onFrame = () => {
            this.h = 0;
            this.cb();
        };
    }
    /**
     * Initializes the scheduler object and provides the callback that should be invoked when the
     * scheduler decides to make changes to the DOM.
     */
    init(doDOMUpdate) {
        this.cb = doDOMUpdate;
    }
    /**
     * Is invoked when the scheduler needs to schedule its callback or event.
     */
    scheduleDOMUpdate() {
        this.h = requestAnimationFrame(this.onFrame);
    }
    /**
     * Is invoked when the scheduler needs to cancels its scheduled callback or event.
     */
    cancelDOMUpdate() {
        if (this.h > 0) {
            cancelAnimationFrame(this.h);
            this.h = 0;
        }
    }
}
/**
 * Schedules the update of the value of the given CSS property in the given rule.
 */
const scheduleStyleUpdate = (ruleOrElm, name, value, important, schedulerType) => getActivator(schedulerType).updateStyle(ruleOrElm, name, value, important);
/**
 * Returns the activator for the given scheduler type. If scheduler type is not specified returns
 * the activator currently set as default. If, for some reason, the default activator is not set,
 * returns the synchronous activator.
 */
const getActivator = (schedulerType) => (schedulerType == null ? s_defaultActivator : s_registeredActivators.get(schedulerType)) ?? s_synchronousActivator;
/**
 * Returns the current default scheduler type.
 */
const getDefaultScheduler = () => s_defaultSchedulerType;
/**
 * Sets the default scheduling type that is used by activate and deactivate functions that are
 * called without explicitly providing value to the scheduling parameter. Returns the type of the
 * previous default activator or 0 if an error occurs (e.g. the given scheduler type ID is not
 * registered).
 */
const setDefaultScheduler = (schedulerType) => {
    // check that the given number is in our map of registered activators
    let activator = s_registeredActivators.get(schedulerType);
    if (!activator)
        return 0;
    let prevSchedulerType = s_defaultSchedulerType;
    s_defaultSchedulerType = schedulerType;
    s_defaultActivator = activator;
    return prevSchedulerType;
};
/**
 * Registers the given scheduler object and returns the scheduler type identifier, which
 * should be used when calling activate and deactivate functions.
 */
const registerScheduler = (scheduler) => {
    // get the registration ID for this scheduler
    let id = s_nextCustomSchedulerType++;
    s_registeredActivators.set(id, new SchedulingActivator(scheduler));
    return id;
};
/**
 * Unregisters a scheduler object with the given scheduler type identifier.
 */
const unregisterScheduler = (id) => {
    if (id >= s_firstCustomSchedulerType) {
        s_registeredActivators.delete(id);
        // if the deleted scheduler was our default one, we set the default to SYNC
        if (s_defaultSchedulerType === id) {
            s_defaultSchedulerType = 1 /* Sync */;
            s_defaultActivator = s_synchronousActivator;
        }
    }
};
/**
 * Current default scheduler. This scheduler will be used if scheduler type is not explicitly
 * specified in calls such as activate or IStyleRule.setProp.
 */
let s_defaultSchedulerType = 1 /* Sync */;
/**
 * Synchronous activator instance.
 */
const s_synchronousActivator = new SynchronousActivator();
/**
 * Current default activator. This activator will be used if scheduler type is not explicitly
 * specified in calls such as activate or IStyleRule.setProp.
 */
let s_defaultActivator = s_synchronousActivator;
/**
 * Scheduler type identifier to be assigned to the first custom scheduler to be registered.
 * All custom scheduler identifiers are greater or equal to this number.
 */
const s_firstCustomSchedulerType = 1001;
/**
 * Scheduler type identifier to be assigned to the next custom scheduler to be registered.
 */
let s_nextCustomSchedulerType = s_firstCustomSchedulerType;
/**
 * Map of registered built-in and custom activators.
 */
const s_registeredActivators = new Map();
/**
 * Register built-in and custom activators.
 */
s_registeredActivators.set(1 /* Sync */, s_synchronousActivator);
s_registeredActivators.set(2 /* AnimationFrame */, new SchedulingActivator(new AnimationFrameScheduler()));
s_registeredActivators.set(3 /* Manual */, new SchedulingActivator());


/***/ }),

/***/ "./lib/impl/StyleImpl.js":
/*!*******************************!*\
  !*** ./lib/impl/StyleImpl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sp2s": () => (/* binding */ sp2s),
/* harmony export */   "styleset2s": () => (/* binding */ styleset2s),
/* harmony export */   "s2ss": () => (/* binding */ s2ss),
/* harmony export */   "s_registerSP": () => (/* binding */ s_registerSP)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./lib/impl/Utils.js");
/* harmony import */ var _rules_RuleContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");


///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions for converting CSS property types to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const borderImageToString = (val) => {
    // if width is specified, but slice is not, we need to set slice to the default 100% value;
    // if outset is specified but width is not. we need to set width to the default 1 value;
    let valCopy = Object.assign({}, val);
    if (val.slice == null && (val.width != null || val.outset != null))
        valCopy.slice = "100%";
    if (val.width == null && val.outset != null)
        valCopy.width = 1;
    return (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.o2s)(valCopy, [
        "source",
        "slice",
        ["width", undefined, "/"],
        ["outset", undefined, "/"],
        "repeat",
        "mode"
    ]);
};
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[25] = (val) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    obj: [
        ["inset", (v) => v ? "inset" : ""],
        ["x", 3 /* Length */],
        ["y", 3 /* Length */],
        ["blur", 3 /* Length */],
        ["spread", 3 /* Length */],
        ["color", 11 /* Color */]
    ]
});
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[26] = (val) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    obj: 25 /* BoxShadowSingle */,
    item: 25 /* BoxShadowSingle */,
    sep: ","
});
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[19] = (val) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    num: 3 /* Length */,
    arr: arr => {
        let numbersProcessed = 0;
        return (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.a2s)(arr, item => typeof item === "number"
            ? (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(item, numbersProcessed++ ? 11 /* Color */ : 3 /* Length */)
            : (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(item));
    },
});
const gridTemplateAreasToString = (val) => 
// val can be array of strings or GridTemplateArea_Definition touples
(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
    arr: v => typeof v[0] === "string" ? (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.a2s)(v, 23 /* Quoted */) : createGridTemplateAreasFromDefinitions(v)
});
/**
 * Converts the array of GridTemplateArea_Definition objects to a string that is suitable for
 * the grid-template-areas format.
 */
const createGridTemplateAreasFromDefinitions = (defs) => {
    // calculate total size of the matrix from the areas' sizes
    let rowCount = 0, colCount = 0;
    for (let def of defs) {
        rowCount = Math.max(rowCount, def[3]);
        colCount = Math.max(colCount, def[4]);
    }
    if (rowCount === 0 || colCount === 0)
        return "";
    // create array of rows where every element is an array of cells
    let matrix = new Array(rowCount);
    for (let i = 0; i < rowCount; i++)
        matrix[i] = new Array(colCount);
    // go over definitions and fill the appropriate places in the cells with area names
    for (let def of defs) {
        let name = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(def[0]);
        for (let i = def[1]; i <= def[3]; i++) {
            for (let j = def[2]; j <= def[4]; j++)
                matrix[i - 1][j - 1] = name;
        }
    }
    // go over our matrix and for every row create a quoted string. Since our cell arrays may be
    // sparse, use dot for the undefined cells
    let s = "";
    for (let i = 0; i < rowCount; i++) {
        let rowNames = [];
        for (let j = 0; j < rowCount; j++) {
            let name = matrix[i][j];
            rowNames.push(name ? name : ".");
        }
        s += `"${rowNames.join(" ")}"\n`;
    }
    return s;
};
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[22] = (v) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(v, {
    num: 3 /* Length */,
    arr: v => `[${(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.a2s)(v)}]`
});
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[21] = (v) => (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(v, {
    num: 3 /* Length */,
    item: 22 /* GridTrack */
});
_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[29] = (val) => {
    return (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(val, {
        obj: v => `url(#${v.name})`
    });
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions for handling Stylesets.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts the given style property to the CSS style string. Property name can be in either
 * dash or camel form.
 */
const sp2s = (propName, propVal) => {
    if (!propName)
        return "";
    // handle special properties "!" and "[]"
    let impFlag = false;
    if (typeof propVal === "object") {
        if ("!" in propVal) {
            // if the property value is an object with the "!" property, then the actual value is
            // the value of this property and we also need to set the "!important" flag.
            propVal = propVal["!"];
            impFlag = true;
        }
        else if ("[]" in propVal) {
            // If the property value is an object with the "[]" property, then we take the last
            // value from this property's array.
            let arr = propVal["[]"];
            if (!arr || arr.length === 0)
                return "";
            // recurse with the last value from the array
            return sp2s(propName, arr[arr.length - 1]);
        }
    }
    // convert the value to string based on the information object for the property (if defined)
    let stringValue = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.v2s)(propVal, stylePropertyInfos[(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.dashToCamel)(propName)]);
    if (!stringValue)
        return "";
    if (impFlag)
        stringValue += " !important";
    return stringValue;
};
/** Converts the given styleset to its string representation */
const styleset2s = (styleset) => {
    if (!styleset)
        return "{}";
    let s = "{";
    // enumerate all styleset properties retrieving also vendor-prefixed variants
    forAllPropsInStylset(styleset, (name, value, isCustom, isPrefixed) => {
        s += isCustom
            ? `${name}:${value};`
            : `${isPrefixed ? "-" : ""}${(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.camelToDash)(name)}:${value};`;
    });
    return s + "}";
};
/**
 * Converts the given Styleset object into a StringStyleset object, where each Styleset's property
 * is converted to its string value.
 */
const s2ss = (styleset) => {
    // enumerate all styleset properties without retrieving vendor-prefixed variants
    let res = {};
    forAllPropsInStylset(styleset, (name, value) => { res[name] = value; });
    return res;
};
/**
 * Extracts name, template and string tuples from the given custom CSS property definition.
 * @param customVars
 */
const getVarsNTVs = (customVars) => {
    if (Array.isArray(customVars)) {
        let varName;
        let template;
        let value;
        if (customVars.length === 2) {
            varName = customVars[0].name;
            template = customVars[0].template;
            value = customVars[1];
        }
        else {
            varName = customVars[0];
            template = customVars[1];
            value = customVars[2];
        }
        if (!varName || !template)
            return [];
        if (!varName.startsWith("--"))
            varName = "--" + varName;
        return [[varName, template, sp2s(template, value)]];
    }
    else {
        let varRules = (0,_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_1__.getVarsFromSD)(customVars);
        return varRules.map(varRule => [varRule.cssVarName, varRule.template,
            sp2s(varRule.template, varRule.getValue())]);
    }
};
/**
 * For each property - regular and custom - in the given styleset invokes the appropriate
 * function that gets the property name and the value converted to string.
 * @param styleset
 * @param callback
 * @param getPrefixedVariants Flag indicating whether we need to retrieve property variants with
 * vendor prefixes
 */
const forAllPropsInStylset = (styleset, callback) => {
    for (let propName in styleset) {
        // special handling of the "--" property, which is an array where each item is
        // a two-item or three-item array
        if (propName === "--") {
            let customVars = styleset[propName];
            for (let customVar of customVars) {
                if (!customVar)
                    continue;
                // in each tuple, the first element is var name, the second is template property and
                // the third is the value;
                let ntvs = getVarsNTVs(customVar);
                for (let ntv of ntvs)
                    callback(ntv[0], ntv[2], true, false);
            }
        }
        else {
            let propVal = styleset[propName];
            if (propVal == null)
                continue;
            else {
                // check whether the property contains an array of values behind the object with
                // the "[]" property. If not, convert the single value to an array, so that we can
                // iterate over it.
                let propArray = propVal["[]"];
                if (!propArray)
                    propArray = [propVal];
                for (let propVal of propArray) {
                    // get the string representation of the property value
                    let propString = sp2s(propName, propVal);
                    if (!propString)
                        continue;
                    // get vendor-prefixed variants
                    let variants = getPrefixVariants(propName, propString);
                    if (variants) {
                        for (let variant of variants)
                            callback(variant[0], variant[1], false, variant[0] !== propName);
                    }
                    // invoke the callback for the originally found prop name and with (perhaps updated)
                    // value
                    callback(propName, propString, false, false);
                }
            }
        }
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Registry of CSS properties that specifies how their values should be converted to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const s_registerSP = (name, toStringFunc) => name in stylePropertyInfos ? false : (stylePropertyInfos[name] = toStringFunc, true);
/**
 * Map of property names to the V2SOptions objects describing custom actions necessary to
 * convert the property value to the CSS-compliant string.
 */
const stylePropertyInfos = {
    accentColor: 11 /* Color */,
    animation: {
        any: { obj: [
                ["duration", 5 /* Time */],
                "func",
                ["delay", 5 /* Time */],
                ["count", 1 /* Number */],
                "direction",
                "mode",
                "state",
                "name"
            ] },
        sep: ",",
    },
    animationDelay: 14 /* MultiTimeWithComma */,
    animationDuration: 14 /* MultiTimeWithComma */,
    animationIterationCount: 15 /* OneOrManyWithComma */,
    animationFillMode: 15 /* OneOrManyWithComma */,
    animationName: 15 /* OneOrManyWithComma */,
    animationPlayState: 15 /* OneOrManyWithComma */,
    animationTimingFunction: 15 /* OneOrManyWithComma */,
    background: {
        num: 11 /* Color */,
        any: {
            num: 11 /* Color */,
            obj: [
                ["color", 11 /* Color */],
                "image",
                ["position", 8 /* Position */],
                ["size", 13 /* MultiLengthWithSpace */, "/"],
                "repeat",
                "attachment",
                "origin",
                "clip"
            ]
        },
        sep: ",",
    },
    backgroundAttachment: 15 /* OneOrManyWithComma */,
    backgroundBlendMode: 15 /* OneOrManyWithComma */,
    backgroundClip: 15 /* OneOrManyWithComma */,
    backgroundColor: 11 /* Color */,
    backgroundImage: 15 /* OneOrManyWithComma */,
    backgroundOrigin: 15 /* OneOrManyWithComma */,
    backgroundPosition: 12 /* MultiPosition */,
    backgroundPositionX: 12 /* MultiPosition */,
    backgroundPositionY: 12 /* MultiPosition */,
    backgroundRepeat: 15 /* OneOrManyWithComma */,
    backgroundSize: {
        num: 3 /* Length */,
        item: { any: 3 /* Length */ },
        sep: ","
    },
    baselineShift: 3 /* Length */,
    blockSize: 3 /* Length */,
    border: 19 /* Border */,
    borderBlock: 19 /* Border */,
    borderBlockColor: 30 /* Colors */,
    borderBlockEnd: 19 /* Border */,
    borderBlockEndColor: 11 /* Color */,
    borderBlockEndWidth: 3 /* Length */,
    borderBlockStart: 19 /* Border */,
    borderBlockStartColor: 11 /* Color */,
    borderBlockStartWidth: 3 /* Length */,
    borderBlockWidth: 3 /* Length */,
    borderBottom: 19 /* Border */,
    borderBottomColor: 11 /* Color */,
    borderBottomLeftRadius: 18 /* Radius */,
    borderBottomRightRadius: 18 /* Radius */,
    borderBottomWidth: 3 /* Length */,
    borderColor: 30 /* Colors */,
    borderEndEndRadius: 18 /* Radius */,
    borderEndStartRadius: 18 /* Radius */,
    borderImage: {
        obj: borderImageToString,
    },
    borderInline: 19 /* Border */,
    borderInlineColor: 30 /* Colors */,
    borderInlineEnd: 19 /* Border */,
    borderInlineEndColor: 11 /* Color */,
    borderInlineEndWidth: 3 /* Length */,
    borderInlineStart: 19 /* Border */,
    borderInlineStartColor: 11 /* Color */,
    borderInlineStartWidth: 3 /* Length */,
    borderInlineWidth: 3 /* Length */,
    borderLeft: 19 /* Border */,
    borderLeftColor: 11 /* Color */,
    borderLeftWidth: 3 /* Length */,
    borderRadius: 20 /* BorderRadius */,
    borderRight: 19 /* Border */,
    borderRightColor: 11 /* Color */,
    borderRightWidth: 3 /* Length */,
    borderSpacing: 13 /* MultiLengthWithSpace */,
    borderStartEndRadius: 18 /* Radius */,
    borderStartStartRadius: 18 /* Radius */,
    borderTop: 19 /* Border */,
    borderTopColor: 11 /* Color */,
    borderTopLeftRadius: 18 /* Radius */,
    borderTopRightRadius: 18 /* Radius */,
    borderTopWidth: 3 /* Length */,
    borderWidth: 13 /* MultiLengthWithSpace */,
    bottom: 3 /* Length */,
    boxShadow: 26 /* BoxShadow */,
    caretColor: 11 /* Color */,
    clip: {
        arr: v => `rect(${_Utils__WEBPACK_IMPORTED_MODULE_0__.wkf[13](v)}`
    },
    color: 11 /* Color */,
    columnGap: 3 /* Length */,
    columnRule: 19 /* Border */,
    columnRuleColor: 11 /* Color */,
    columnRuleWidth: 13 /* MultiLengthWithSpace */,
    columnWidth: 3 /* Length */,
    content: {
        str: 23 /* Quoted */,
        item: 23 /* Quoted */
    },
    cursor: 15 /* OneOrManyWithComma */,
    fill: 11 /* Color */,
    fillOpacity: 2 /* Percent */,
    flex: {
        num: 3 /* Length */,
        arr: {
            3: [1 /* Number */, 1 /* Number */, 3 /* Length */]
        }
    },
    flexBasis: 3 /* Length */,
    floodColor: 11 /* Color */,
    font: {
        item: 3 /* Length */,
        obj: [
            ["style", 24 /* FontStyle */],
            "variant",
            "weight",
            "stretch",
            ["size", 3 /* Length */],
            ["lineHeight", undefined, "/"],
            "family"
        ]
    },
    fontSize: 3 /* Length */,
    fontStretch: 2 /* Percent */,
    fontStyle: 24 /* FontStyle */,
    gap: 13 /* MultiLengthWithSpace */,
    gridColumnGap: 3 /* Length */,
    gridGap: 13 /* MultiLengthWithSpace */,
    gridRowGap: 3 /* Length */,
    gridArea: 16 /* OneOrManyWithSlash */,
    gridAutoColumns: 21 /* GridAxis */,
    gridAutoRows: 21 /* GridAxis */,
    gridColumn: 16 /* OneOrManyWithSlash */,
    gridRow: 16 /* OneOrManyWithSlash */,
    gridTemplateAreas: gridTemplateAreasToString,
    gridTemplateColumns: 21 /* GridAxis */,
    gridTemplateRows: 21 /* GridAxis */,
    height: 3 /* Length */,
    inlineSize: 3 /* Length */,
    inset: 13 /* MultiLengthWithSpace */,
    insetBlock: 13 /* MultiLengthWithSpace */,
    insetBlockEnd: 3 /* Length */,
    insetBlockStart: 3 /* Length */,
    insetInline: 13 /* MultiLengthWithSpace */,
    insetInlineEnd: 3 /* Length */,
    insetInlineStart: 3 /* Length */,
    left: 3 /* Length */,
    letterSpacing: 3 /* Length */,
    lightingColor: 11 /* Color */,
    margin: 13 /* MultiLengthWithSpace */,
    marginBlock: 13 /* MultiLengthWithSpace */,
    marginBlockEnd: 3 /* Length */,
    marginBlockStart: 3 /* Length */,
    marginBottom: 3 /* Length */,
    marginInline: 13 /* MultiLengthWithSpace */,
    marginInlineEnd: 3 /* Length */,
    marginInlineStart: 3 /* Length */,
    marginLeft: 3 /* Length */,
    marginRight: 3 /* Length */,
    marginTop: 3 /* Length */,
    markerEnd: 29 /* Marker */,
    markerMid: 29 /* Marker */,
    markerStart: 29 /* Marker */,
    maskBorder: {
        obj: borderImageToString,
    },
    maskClip: 15 /* OneOrManyWithComma */,
    maskComposite: 15 /* OneOrManyWithComma */,
    maskImage: 15 /* OneOrManyWithComma */,
    maskMode: 15 /* OneOrManyWithComma */,
    maskOrigin: 15 /* OneOrManyWithComma */,
    maskPosition: 12 /* MultiPosition */,
    maskRepeat: 15 /* OneOrManyWithComma */,
    maskSize: {
        num: 3 /* Length */,
        item: { any: 3 /* Length */ },
        sep: ","
    },
    maxBlockSize: 3 /* Length */,
    maxHeight: 3 /* Length */,
    maxInlineSize: 3 /* Length */,
    maxWidth: 3 /* Length */,
    minBlockSize: 3 /* Length */,
    minHeight: 3 /* Length */,
    minInlineSize: 3 /* Length */,
    minWidth: 3 /* Length */,
    objectPosition: 8 /* Position */,
    offset: {
        obj: [
            ["position", 8 /* Position */],
            "path",
            ["distance", 3 /* Length */],
            ["rotate", { any: 4 /* Angle */ }],
            ["anchor", 8 /* Position */, "/"],
        ]
    },
    offsetAnchor: 8 /* Position */,
    offsetDistance: 3 /* Length */,
    offsetPosition: 8 /* Position */,
    offsetRotate: {
        any: 4 /* Angle */
    },
    outline: 19 /* Border */,
    outlineColor: 11 /* Color */,
    outlineOffset: 3 /* Length */,
    overflowClipMargin: 3 /* Length */,
    padding: 13 /* MultiLengthWithSpace */,
    paddingBlock: 13 /* MultiLengthWithSpace */,
    paddingBlockEnd: 3 /* Length */,
    paddingBlockStart: 3 /* Length */,
    paddingBottom: 3 /* Length */,
    paddingInline: 13 /* MultiLengthWithSpace */,
    paddingInlineEnd: 3 /* Length */,
    paddingInlineStart: 3 /* Length */,
    paddingLeft: 3 /* Length */,
    paddingRight: 3 /* Length */,
    paddingTop: 3 /* Length */,
    perspective: 3 /* Length */,
    perspectiveOrigin: 13 /* MultiLengthWithSpace */,
    quotes: {
        item: {
            str: 23 /* Quoted */,
            item: 23 /* Quoted */,
        }
    },
    right: 3 /* Length */,
    rotate: {
        num: 4 /* Angle */,
        arr: {
            2: [0 /* Default */, 4 /* Angle */],
            any: [0 /* Default */, 0 /* Default */, 0 /* Default */, 4 /* Angle */],
        }
    },
    rowGap: 3 /* Length */,
    scrollMargin: 13 /* MultiLengthWithSpace */,
    scrollMarginBlock: 13 /* MultiLengthWithSpace */,
    scrollMarginBlockEnd: 3 /* Length */,
    scrollMarginBlockStart: 3 /* Length */,
    scrollMarginBottom: 3 /* Length */,
    scrollMarginInline: 13 /* MultiLengthWithSpace */,
    scrollMarginInlineEnd: 3 /* Length */,
    scrollMarginInlineStart: 3 /* Length */,
    scrollMarginLeft: 3 /* Length */,
    scrollMarginRight: 3 /* Length */,
    scrollMarginTop: 3 /* Length */,
    scrollPadding: 13 /* MultiLengthWithSpace */,
    scrollPaddingBlock: 13 /* MultiLengthWithSpace */,
    scrollPaddingBlockEnd: 3 /* Length */,
    scrollPaddingBlockStart: 3 /* Length */,
    scrollPaddingBottom: 3 /* Length */,
    scrollPaddingInline: 13 /* MultiLengthWithSpace */,
    scrollPaddingInlineEnd: 3 /* Length */,
    scrollPaddingInlineStart: 3 /* Length */,
    scrollPaddingLeft: 3 /* Length */,
    scrollPaddingRight: 3 /* Length */,
    scrollPaddingTop: 3 /* Length */,
    scrollbarColor: {
        item: 11 /* Color */
    },
    shapeMargin: 3 /* Length */,
    stopColor: 11 /* Color */,
    stroke: 11 /* Color */,
    textCombineUpright: {
        num: v => `digits ${v}`
    },
    textDecoration: {
        num: 11 /* Color */,
        obj: [
            "line",
            "style",
            ["color", 11 /* Color */],
            ["thickness", 3 /* Length */],
        ]
    },
    textDecorationColor: 11 /* Color */,
    textDecorationThickness: 3 /* Length */,
    textEmphasis: 11 /* Color */,
    textEmphasisColor: 11 /* Color */,
    textFillColor: 11 /* Color */,
    textIndent: 13 /* MultiLengthWithSpace */,
    textShadow: 26 /* BoxShadow */,
    textSizeAdjust: 2 /* Percent */,
    textStrokeColor: 11 /* Color */,
    textStrokeWidth: 3 /* Length */,
    top: 3 /* Length */,
    transformOrigin: 13 /* MultiLengthWithSpace */,
    transition: {
        any: { obj: [
                ["property", _Utils__WEBPACK_IMPORTED_MODULE_0__.camelToDash],
                ["duration", 5 /* Time */],
                "func",
                ["delay", 5 /* Time */]
            ] },
        sep: ",",
    },
    transitionDelay: 14 /* MultiTimeWithComma */,
    transitionDuration: 14 /* MultiTimeWithComma */,
    transitionTimingFunction: 15 /* OneOrManyWithComma */,
    translate: 13 /* MultiLengthWithSpace */,
    verticalAlign: 3 /* Length */,
    width: 3 /* Length */,
    willChange: {
        str: _Utils__WEBPACK_IMPORTED_MODULE_0__.camelToDash
    },
    wordSpacing: 3 /* Length */,
    zoom: 2 /* Percent */,
    // properties for CSS syntax values
    "<number>#": 15 /* OneOrManyWithComma */,
    "<length>": 3 /* Length */,
    "<length>+": 13 /* MultiLengthWithSpace */,
    "<length>#": { any: 3 /* Length */, sep: "," },
    "<percentage>": 2 /* Percent */,
    "<percentage>+": { any: 2 /* Percent */ },
    "<percentage>#": { any: 2 /* Percent */, sep: "," },
    "<length-percentage>": 3 /* Length */,
    "<length-percentage>+": 13 /* MultiLengthWithSpace */,
    "<length-percentage>#": { any: 3 /* Length */, sep: "," },
    "<angle>": 4 /* Angle */,
    "<angle>+": { any: 4 /* Angle */ },
    "<angle>#": { any: 4 /* Angle */, sep: "," },
    "<time>": 5 /* Time */,
    "<time>+": { any: 5 /* Time */ },
    "<time>#": 14 /* MultiTimeWithComma */,
    "<resolution>": 6 /* Resolution */,
    "<resolution>+": { any: 6 /* Resolution */ },
    "<resolution>#": { any: 6 /* Resolution */, sep: "," },
    "<color>": 11 /* Color */,
    "<color>+": { any: 11 /* Color */ },
    "<color>#": { any: 11 /* Color */, sep: "," },
    "<image>#": 15 /* OneOrManyWithComma */,
    "<custom-ident>#": 15 /* OneOrManyWithComma */,
    // special properties for IVarRule types
    "<string>": 23 /* Quoted */,
    "<frequency>": 7 /* Frequency */,
    "<size>": 3 /* Length */,
    "<point>": 13 /* MultiLengthWithSpace */,
    "<position>": 8 /* Position */,
    "<multi-position>": 12 /* MultiPosition */,
    "<radius>": 18 /* Radius */,
};
// Vendor prefixes with indexes from the VendorPrefix enumeration. The first one is only here to
// allow the first enumeration value to be 1 and not zero.
const vendorPrefixStrings = ["", "webkit", "moz", "ms"];
const getPrefixVariants = (name, value) => {
    let info = propPrefixInfos[name];
    if (!info)
        return null;
    if (typeof info === "string")
        return [[info, value]];
    if (typeof info === "number")
        return [[(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.dashToCamel)(`${vendorPrefixStrings[info]}-${name}`), value]];
    let variants = [];
    for (let item of info) {
        if (typeof item === "string")
            variants.push([item, value]);
        else if (typeof item === "number")
            variants.push([(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.dashToCamel)(`${vendorPrefixStrings[item]}-${name}`), value]);
        else {
            let prefixString = vendorPrefixStrings[item.p];
            // determine whether the property name should be prefixed. Note that even if we decide
            // here that it should not be prefixed, it can change when we go over property values.
            let shouldPrefixProperty = !item.valsOnly;
            // if property values are defined, try to replace them with prefixed versions. Note that
            // this can also set the flag indicating that the property name should be prefixed too.
            let newPropValue = "";
            if (value && item.vals) {
                for (let valueInfo of item.vals) {
                    let valueToSearch = valueInfo.val;
                    if (value.indexOf(valueToSearch) < 0)
                        continue;
                    if (valueInfo.mode !== 2 /* PropertyOnly */) {
                        newPropValue = value.split(valueToSearch).join(valueInfo.alt ? valueInfo.alt : `-${prefixString}-${valueToSearch}`);
                        value = newPropValue;
                    }
                    if (valueInfo.mode !== 1 /* ValueOnly */)
                        shouldPrefixProperty = true;
                }
            }
            let newPropName = "";
            if (shouldPrefixProperty)
                newPropName = item.alt ? item.alt : (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.dashToCamel)(`${prefixString}-${name}`);
            if (newPropName || newPropValue)
                variants.push([newPropName || name, newPropValue || value]);
        }
    }
    return variants.length > 0 ? variants : null;
};
// Prefix information for size-like properties that accept "stretch" value
const sizePrefixInfos = [
    { p: 1 /* webkit */, valsOnly: true, vals: [{ val: "stretch", mode: 1 /* ValueOnly */, alt: "-webkit-fill-available" }] },
];
// Prefix information for properties that accept "cross-fade" and "image-set" functions (that is, images)
const imageFuncsPrefixInfo = {
    p: 1 /* webkit */, valsOnly: true, vals: [
        { val: "cross-fade", mode: 1 /* ValueOnly */ },
        { val: "image-set", mode: 1 /* ValueOnly */ }
    ]
};
const imageFuncsPrefixInfos = [imageFuncsPrefixInfo];
const propPrefixInfos = {
    appearance: [1 /* webkit */, 2 /* moz */],
    backgroundClip: [
        { p: 1 /* webkit */, valsOnly: true, vals: [{ val: "text", mode: 2 /* PropertyOnly */ }] }
    ],
    blockSize: sizePrefixInfos,
    boxDecorationBreak: 1 /* webkit */,
    background: imageFuncsPrefixInfos,
    backgroundImage: imageFuncsPrefixInfos,
    borderImage: imageFuncsPrefixInfos,
    borderImageSource: imageFuncsPrefixInfos,
    clipPath: 1 /* webkit */,
    colorAdjust: "webkitPrintColorAdjust",
    content: imageFuncsPrefixInfos,
    height: sizePrefixInfos,
    hyphens: [1 /* webkit */, 2 /* moz */, 3 /* ms */],
    initialLetter: 1 /* webkit */,
    inlineSize: sizePrefixInfos,
    lineClamp: 1 /* webkit */,
    mask: 1 /* webkit */,
    maskBorder: ["webkitMaskBoxImage", imageFuncsPrefixInfo],
    maskBorderOutset: "webkitMaskBoxImageOutset",
    maskBorderRepeat: "webkitMaskBoxImageRepeat",
    maskBorderSlice: "webkitMaskBoxImageSlice",
    maskBorderSource: "webkitMaskBoxImageSource",
    maskBorderWidth: "webkitMaskBoxImageWidth",
    maskClip: 1 /* webkit */,
    maskComposite: 1 /* webkit */,
    maskImage: [1 /* webkit */, imageFuncsPrefixInfo],
    maskMode: 1 /* webkit */,
    maskOrigin: 1 /* webkit */,
    maskPosition: 1 /* webkit */,
    maskRepeat: 1 /* webkit */,
    maskSize: 1 /* webkit */,
    maskType: 1 /* webkit */,
    maxBlockSize: sizePrefixInfos,
    maxHeight: sizePrefixInfos,
    maxInlineSize: sizePrefixInfos,
    maxWidth: sizePrefixInfos,
    minBlockSize: sizePrefixInfos,
    minHeight: sizePrefixInfos,
    minInlineSize: sizePrefixInfos,
    minWidth: sizePrefixInfos,
    shapeOutside: imageFuncsPrefixInfos,
    scrollbarColor: 1 /* webkit */,
    scrollbarWidth: 1 /* webkit */,
    textEmphasis: 1 /* webkit */,
    textEmphasisColor: 1 /* webkit */,
    textEmphasisPosition: 1 /* webkit */,
    textEmphasisStyle: 1 /* webkit */,
    textFillColor: 1 /* webkit */,
    textOrientation: 1 /* webkit */,
    textSizeAdjust: [1 /* webkit */, 2 /* moz */, 3 /* ms */],
    textStroke: 1 /* webkit */,
    textStrokeColor: 1 /* webkit */,
    textStrokeWidth: 1 /* webkit */,
    userSelect: [
        { p: 1 /* webkit */, vals: [{ val: "none", mode: 2 /* PropertyOnly */ }] }
    ],
    width: sizePrefixInfos,
};


/***/ }),

/***/ "./lib/impl/Utils.js":
/*!***************************!*\
  !*** ./lib/impl/Utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashToCamel": () => (/* binding */ dashToCamel),
/* harmony export */   "camelToDash": () => (/* binding */ camelToDash),
/* harmony export */   "symV2S": () => (/* binding */ symV2S),
/* harmony export */   "wkf": () => (/* binding */ wkf),
/* harmony export */   "v2s": () => (/* binding */ v2s),
/* harmony export */   "a2s": () => (/* binding */ a2s),
/* harmony export */   "t2s": () => (/* binding */ t2s),
/* harmony export */   "o2s": () => (/* binding */ o2s),
/* harmony export */   "mv2s": () => (/* binding */ mv2s),
/* harmony export */   "f2s": () => (/* binding */ f2s),
/* harmony export */   "tag2s": () => (/* binding */ tag2s),
/* harmony export */   "propSet2s": () => (/* binding */ propSet2s),
/* harmony export */   "fdo": () => (/* binding */ fdo),
/* harmony export */   "fdo2s": () => (/* binding */ fdo2s)
/* harmony export */ });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Case conversions for property names.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts dashe-case to camelCase, e.g. font-size to fontSize.
 * @param dash
 */
const dashToCamel = (dash) => !dash ? dash : dash.replace(/-([a-zA-Z])/g, (x, $1) => $1.toUpperCase());
/**
 * Converts camelCase to dash-case, e.g. fontSize to font-size.
 * @param camel
 */
const camelToDash = (camel) => camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Conversion of values to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Symbol under which a function is defined that converts an object to a string. We need a special
 * symbol because the standard method toString exists on every object and we only want some to
 * explicitly provide this support.
 */
const symV2S = Symbol();
/**
 * Array of well known conversion functions. Indexes are the identifier of well known functions
 * from the WellKnownFunc enumeration
 */
let wkf = new Array(31 /* Last */);
/**
 * Converts a value of an arbitrary type to a single string. The options parameter
 * can define how specific types are converted.
 */
const v2s = (val, options) => {
    // if options is not specified, do standard processing
    if (options == null) {
        if (typeof val === "string")
            return val;
        else if (Array.isArray(val))
            return a2s(val);
        else if (typeof val === "function")
            return v2s(val());
        else if (val == null)
            return "";
        else if (typeof val[symV2S] === "function")
            return val[symV2S]();
        else if (typeof val.fn === "string")
            return fdo2s(val);
        else
            return val.toString();
    }
    // do different things for different types of options
    if (typeof options == "number")
        return wkf[options] ? wkf[options](val) : "";
    else if (typeof options == "function")
        return options(val);
    else {
        // processing with options. For all types except null and string, if the type-specific
        // property is not defined, use options.any if defined.
        let newOptions = undefined;
        if (val == null)
            return options.nil ? typeof options.nil === "string" ? options.nil : options.nil(val) : "";
        else if (typeof val === "number")
            newOptions = options.num ?? options.any;
        else if (typeof val === "function")
            return v2s(val());
        else if (Array.isArray(val)) {
            if (val.length === 0)
                return "";
            else if (typeof options.arr === "object") // this can also be an array
                return t2s(val, options.arr, options.sep);
            else if (options.arr2 && Array.isArray(val[0]))
                newOptions = options.arr2;
            else if (options.arr)
                newOptions = options.arr;
            else
                return a2s(val, options.item ?? options.any ?? (options.recursive ? options : undefined), options.sep);
        }
        else if (typeof val === "object") {
            if (typeof val[symV2S] === "function")
                return val[symV2S]();
            else if (typeof val.fn === "string")
                return fdo2s(val);
            else if (options.obj || options.any) {
                if (Array.isArray(options.obj))
                    return o2s(val, options.obj, options.sep);
                else
                    newOptions = options.obj ?? options.any;
            }
            else
                return val.toString();
        }
        else if (typeof val === "string")
            newOptions = options.str ?? options.any;
        else if (typeof val === "boolean")
            return options.bool ? options.bool(val) : val.toString();
        else
            return "";
        return v2s(val, newOptions);
    }
};
wkf[0 /* Default */] = v2s;
wkf[15 /* OneOrManyWithComma */] = v => v2s(v, { sep: "," });
wkf[16 /* OneOrManyWithSlash */] = v => v2s(v, { sep: "/" });
wkf[23 /* Quoted */] = v => typeof v === "string" ? `"${v}"` : v2s(v);
/**
 * Converts the given array to a single string by converting every item using the given otions
 * and joining the results with the given delimiter.
 */
const a2s = (val, options, separator = " ") => !val || val.length === 0
    ? ""
    : val.map(v => v2s(v, options)).filter(v => !!v).join(separator);
/**
 * Converts the given array to a single string by converting every item using the given otions
 * and joining the results with the given delimiter.
 */
const t2s = (val, options, separator = " ") => {
    let v2sOptions = Array.isArray(options) ? options : (options[val.length] ?? options.any);
    if (!v2sOptions)
        return a2s(val, undefined, separator);
    let buf = [];
    for (let i = 0; i < v2sOptions.length; i++)
        buf.push(v2s(val[i], v2sOptions[i]));
    return buf.filter(v => !!v).join(separator);
};
/**
 * Converts properties of the given object to string by converting each property from the options
 * array and joining them using the given separator.
 * @param val Object to convert to string
 * @param options array of property names or tuples with property names, options and prefixes.
 * @param separator Separator character.
 * @param defaultOptions - V2SOptions for those properties in the "params" array that don't
 * define their own. This should be used in the case when all function parameters are of the
 * same type
 * @param defaultPrefix - prefix to use for those properties in the "params" array that don't
 * define their own prefix
 */
const o2s = (val, options, separator, defaultOptions, defaultPrefix) => {
    if (val == null)
        return "";
    let params = [];
    for (let nameOrTuple of options) {
        // get the name of the property in the value to be converted and the corresponding value;
        // if the properties value is not defined, skip it.
        let propName = typeof nameOrTuple === "string" ? nameOrTuple : nameOrTuple[0];
        let propVal = val[propName];
        if (propVal == null)
            continue;
        // check whether we have a prefix
        let prefix = typeof nameOrTuple === "string" ? defaultPrefix : nameOrTuple[2];
        if (prefix)
            params.push(prefix);
        let options = typeof nameOrTuple === "string" ? defaultOptions : nameOrTuple[1];
        params.push(v2s(propVal, options));
    }
    return params.filter(v => !!v).join(separator ?? " ");
};
/**
 * Converts the given array of values to a single string according to the specified options and
 * using the given separator. For each item in the array, the v2s function is called to convert
 * it to string.
 * @param values
 * @param separator
 */
const mv2s = (values, separator = " ") => {
    if (values == null || values.length === 0)
        return "";
    let arr = [];
    for (let item of values) {
        let val;
        let options;
        if (Array.isArray(item)) {
            val = item[0];
            options = item[1];
        }
        else
            val = item;
        if (val || (options && options.nil))
            arr.push(v2s(val, options));
    }
    return arr.filter(v => !!v).join(separator);
};
/**
 * Converts the given values as parameters to the given CSS function invocation.
 * @param name
 * @param values
 * @param separator
 */
const f2s = (name, values, separator = ",") => `${name}(${mv2s(values, separator)})`;
/**
 * The tag2s is a tag function helper that converts the template string with
 * parameters to a string using the given options object.
 */
const tag2s = (parts, params, options) => {
    // number of parameters is always 1 less than the number of string parts
    let paramsLen = params.length;
    if (paramsLen === 0)
        return parts[0];
    let s = "";
    for (let i = 0; i < paramsLen; i++)
        s += parts[i] + v2s(params[i], options);
    // add the last part
    return s + parts[paramsLen];
};
/**
 * Converts the given property set object to the CSS style string.
 */
const propSet2s = (val, infos, options) => v2s(val, {
    obj: v => {
        let propNames = Object.keys(v);
        if (propNames.length === 0)
            return "";
        let func = options?.propFunc ?? propInPropSet2s;
        let arr = propNames.map((propName) => {
            let dashPropName = camelToDash(propName);
            let camelPropName = dashToCamel(propName);
            return func(dashPropName, camelPropName, v[propName], infos[camelPropName]);
        });
        return (options?.prefix ?? "") + `${arr.join(options?.separator ?? ";")}` + (options?.suffix ?? "");
    }
});
// convert the value to string based on the information object for the property (if defined)
const propInPropSet2s = (dashName, camelName, val, options) => `${dashName}:${v2s(val, options)}`;
// This object is filled in in the XxxAPI files where the functions corresponding to CSS functions
// are defined.
const fdo = {};
/**
 * Converts the given function definition object to string. Conversion is performed according
 * to the type found in the "fdo" object for the property name equal to the "fn" property of
 * the given value. If no such property exist in the "fdo" object, all object's properties except
 * "fn" will be converted to strings using v2s and concatenated with comma.
 *
 * @param val Function definition object that has the "fn" property defining the function name.
 * @returns String representation of CSS function invocation.
 */
const fdo2s = (val) => {
    let options = fdo[val.fn];
    if (!options)
        return goOverProps(val);
    else if (typeof options === "number")
        return goOverProps(val, options);
    else if (typeof options === "function")
        return options(val);
    else if (Array.isArray(options))
        return `${val.fn}(${o2s(val, options, ",")})`;
    else {
        let fn = options.fn;
        fn = !fn ? val.fn : typeof fn === "string" ? fn : fn(val);
        return options.p
            ? `${fn}(${o2s(val, options.p, options.s ?? ",", options.do, options.dp)})`
            : options.f
                ? `${fn}(${options.f(val)})`
                : "";
    }
};
/**
 * Helper function that goes over the props of the given object except the "fn" property,
 * serializes all the props using the given options and concatenates them with the given
 * separator (comma by default).
 * @param val
 * @param options
 * @param sep
 * @returns
 */
const goOverProps = (val, options, sep) => {
    let buf = [];
    for (let p in val) {
        if (p !== "fn")
            buf.push(v2s(val[p], options));
    }
    return `${val.fn}(${buf.filter(v => !!v).join(sep ?? ",")})`;
};


/***/ }),

/***/ "./lib/rules/AnimationRule.js":
/*!************************************!*\
  !*** ./lib/rules/AnimationRule.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationRule": () => (/* binding */ AnimationRule)
/* harmony export */ });
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _StyleRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleRules */ "./lib/rules/StyleRules.js");
/* harmony import */ var _impl_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../impl/Utils */ "./lib/impl/Utils.js");



/**
 * The AnimationRule class describes a @keyframes CSS rule.
 */
class AnimationRule extends _Rule__WEBPACK_IMPORTED_MODULE_0__.Rule {
    constructor(frames, nameOverride) {
        super();
        if (frames)
            this.frameRules = frames.map(frame => new AnimationFrameRule(frame[0], frame[1]));
        this.nameOverride = nameOverride;
    }
    // This function is called to convert an object to a string. Animation rule returns its name.
    toString() { return this.name; }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        this.name = container.getScopedName(ruleName, this.nameOverride);
        for (let keyframeRule of this.frameRules)
            keyframeRule.process(container, ruleName);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        if (!this.frameRules)
            return;
        this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_0__.Rule.toDOM(`@keyframes ${this.name} {}`, parent);
        let cssKeyframesRule = this.cssRule;
        for (let frameRule of this.frameRules) {
            try {
                cssKeyframesRule.appendRule(frameRule.toCss());
                // although the cssRule in the frame is typed as CSSStyleRule, we know that in
                // practice, it is of the CSSKeyframeRule type.
                frameRule.cssRule = this.cssRule.cssRules.item(this.cssRule.cssRules.length - 1);
            }
            catch (x) {
                console.error("Cannot add CSS keyframe rule", x);
            }
        }
    }
    // Serializes this rule to a string.
    serialize(ctx) {
        if (!this.frameRules)
            return;
        ctx.addRule(`@keyframes ${this.name} {`);
        for (let frameRule of this.frameRules)
            ctx.addRule(frameRule.toCss());
        ctx.addRule("}");
    }
}
/**
 * The AnimationFrameRule class represents a single keyframe clause in the animation rule.
 */
class AnimationFrameRule extends _StyleRules__WEBPACK_IMPORTED_MODULE_1__.StyleRule {
    constructor(waypoint, styleset) {
        super(styleset);
        this.waypoint = waypoint;
    }
    // Returns the selector part of the style rule.
    getSel() {
        return (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_2__.v2s)(this.waypoint, { any: 2 /* Percent */, sep: "," });
    }
    /**
     * SOM keyframe rule. Although the cssRule in the frame is typed as CSSStyleRule, we know that
     * in practice, it is of the CSSKeyframeRule type.
     */
    get cssKeyframeRule() { return this.cssRule; }
    ;
}


/***/ }),

/***/ "./lib/rules/CounterRules.js":
/*!***********************************!*\
  !*** ./lib/rules/CounterRules.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterRule": () => (/* binding */ CounterRule),
/* harmony export */   "CounterStyleRule": () => (/* binding */ CounterStyleRule)
/* harmony export */ });
/* harmony import */ var _impl_MiscImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/MiscImpl */ "./lib/impl/MiscImpl.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");


/**
 * The CounterRule class describes a named counter definition. Use this rule to create
 * counter objects that can be used in counter-increment, counter-reset and counter-set style
 * properties. No CSS rule is created for counters - they are needed only to provide type-safe
 * counter definitions.
 */
class CounterRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__.RuleLike {
    constructor(nameOverride) {
        super();
        this.nameOverride = nameOverride;
    }
    // This function is used when the object is specified as a value of a style property.
    // We return the counter name.
    toString() { return this.name; }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        this.name = container.getScopedName(ruleName, this.nameOverride);
    }
    /** Name of the counter */
    get counterName() { return this.name; }
}
/**
 * The CounterStyleRule class describes the CSS @nounter-style at-rule.
 */
class CounterStyleRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule {
    constructor(counterStyleset, nameOverride) {
        super();
        this.counterStyleset = counterStyleset ?? {};
        this.nameOverride = nameOverride;
    }
    /** Name of the counter */
    get counterStyleName() { return this.name; }
    // This function is used when the object is specified as a value in a style property or in
    // another counter style rule. We return the counter style name.
    toString() { return this.name; }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        this.name = container.getScopedName(ruleName, this.nameOverride);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule.toDOM(this.toCss(), parent);
    }
    // Serializes this rule to a string.
    serialize(ctx) {
        ctx.addRule(this.toCss());
    }
    // Serializes this rule to a string.
    toCss() {
        return `@counter-style ${this.name} {${(0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_0__.counterStyleset2s)(this.counterStyleset)}}`;
    }
}


/***/ }),

/***/ "./lib/rules/GridRules.js":
/*!********************************!*\
  !*** ./lib/rules/GridRules.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridLineRule": () => (/* binding */ GridLineRule),
/* harmony export */   "GridAreaRule": () => (/* binding */ GridAreaRule)
/* harmony export */ });
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");

/**
 * The GridLineRule class describes a named grid line definition. No CSS rule is created for grid
 * lines - they are needed only to provide type-safe grid line definitions.
 */
class GridLineRule extends _Rule__WEBPACK_IMPORTED_MODULE_0__.RuleLike {
    // if the nameOverride is an area rule object, the isStartEndOrNone flag is always defined
    // because this constructor can only be invoked for the start and end lines of the GridAreaRule
    // object.
    constructor(nameOverride, isStartEndOrNone) {
        super();
        this.nameOverride = nameOverride;
        this.isStartEndOrNone = isStartEndOrNone;
    }
    // This function is used when the object is specified as a value of a style property.
    // We return the line name.
    toString() { return this.name; }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        let name;
        let areaName;
        let isStartEndOrNone = this.isStartEndOrNone;
        let nameOverride = this.nameOverride;
        if (nameOverride instanceof GridLineRule) {
            name = nameOverride.name;
            this.isStartEndOrNone = nameOverride.isStartEndOrNone;
            areaName = nameOverride.areaName;
        }
        else if (nameOverride instanceof GridAreaRule) {
            name = nameOverride.name + (isStartEndOrNone === true ? "-start" : isStartEndOrNone === false ? "-end" : "");
            areaName = nameOverride.name;
        }
        else {
            name = container.getScopedName(ruleName, nameOverride);
            // if the obtained name doesn't have "-start" or "-end" but the isStartEndOrNone flag is
            // defined (that is, it is either start or end line), we need to append the suffix. If the
            // obtained name already has "-start" or "-end" and the isStartEndOrNone flag is not
            // defined, we set this flag to either true or false depending on the suffix. Note that if
            // the nameOverride is an area rule object, the isStartEndOrNone flag is always defined.
            let nameHasStart = name.endsWith("-start");
            let nameHasEnd = name.endsWith("-end");
            if (nameHasStart) {
                this.isStartEndOrNone = true;
                areaName = name.substr(0, name.length - 6 /* "-start".length */);
            }
            else if (nameHasEnd) {
                isStartEndOrNone = false;
                areaName = name.substr(0, name.length - 4 /* "-end".length */);
            }
            else if (isStartEndOrNone === true) {
                areaName = name;
                name += "-start";
            }
            else if (isStartEndOrNone === false) {
                areaName = name;
                name += "-end";
            }
        }
        this.name = name;
        this.areaName = areaName;
        this.isStartEndOrNone = isStartEndOrNone;
    }
}
/**
 * The GridAreaRule class describes a named grid area definition. No CSS rule is created for grid
 * areas - they are needed only to provide type-safe grid area definitions.
 */
class GridAreaRule extends _Rule__WEBPACK_IMPORTED_MODULE_0__.RuleLike {
    // if the nameOverride is an area rule object, the isStartEndOrNone flag is always defined
    // because this constructor can only be invoked for the start and end lines of the GridAreaRule
    // object.
    constructor(nameOverride) {
        super();
        this.nameOverride = nameOverride;
        // create line rules
        this.startLine = new GridLineRule(this, true);
        this.endLine = new GridLineRule(this, false);
    }
    // This function is used when the object is specified as a value of a style property.
    // We return the area name.
    toString() { return this.name; }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        this.name = container.getScopedName(ruleName, this.nameOverride);
        // process line rules
        this.startLine.process(container, null);
        this.endLine.process(container, null);
    }
}


/***/ }),

/***/ "./lib/rules/GroupRules.js":
/*!*********************************!*\
  !*** ./lib/rules/GroupRules.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupRule": () => (/* binding */ GroupRule),
/* harmony export */   "SupportsRule": () => (/* binding */ SupportsRule),
/* harmony export */   "MediaRule": () => (/* binding */ MediaRule)
/* harmony export */ });
/* harmony import */ var _RuleContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RuleContainer */ "./lib/rules/RuleContainer.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _impl_MiscImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../impl/MiscImpl */ "./lib/impl/MiscImpl.js");



/**
 * The GroupRule class serves as a base class for all grouping CSS rules.
 */
class GroupRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule {
    constructor(instOrClass) {
        super();
        this.instOrClass = instOrClass;
    }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        // container to which our groupng rule belongs becomes the parent container for the
        // style definition instance
        this.sc = (0,_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.getRCfromSD)(this._sd = (0,_RuleContainer__WEBPACK_IMPORTED_MODULE_0__.processSD)(this.instOrClass, container.getDef()));
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        let selector = this.getSel();
        if (!selector)
            return;
        this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule.toDOM(`${selector} {}`, parent);
        // insert sub-rules
        if (this.cssRule)
            this.sc.insert(this.cssRule);
    }
    // Serializes this rule to a string.
    serialize(ctx) {
        let selector = this.getSel();
        if (!selector)
            return;
        ctx.addRule(`${selector} {`);
        // insert sub-rules
        this.sc.serialize(ctx);
        ctx.addRule("}");
    }
    // Condition of this grouping rule.
    get condition() {
        if (!this._cond)
            this._cond = this.getCond();
        return this._cond ?? "";
    }
    // Clers the CSS rule object.
    clear() {
        super.clear();
        // clear sub-rules
        this.sc.clear();
    }
    // Instance of the style definition class defining the rules under this grouping rule
    get sd() { return this._sd; }
}
/**
 * The SupportRule class describes a CSS @supports rule.
 */
class SupportsRule extends GroupRule {
    constructor(statement, instOrClass) {
        super(instOrClass);
        this.stmt = statement;
    }
    /** Flag indicated whether the browser supports this rule's query */
    get isSupported() {
        return CSS.supports(this.condition);
    }
    // Returns the condition string of this grouping rule.
    getCond() {
        return (0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_2__.supports2s)(this.stmt);
    }
    // Returns the selector string of this grouping rule.
    getSel() {
        return `@supports ${this.condition}`;
    }
}
/**
 * The MediaRule class describes a CSS @media rule.
 */
class MediaRule extends GroupRule {
    constructor(statement, instOrClass) {
        super(instOrClass);
        // cached MediaQueryList object created for the media statement
        this._mql = null;
        this.stmt = statement;
    }
    // Returns the condition string of this grouping rule.
    getCond() {
        return (0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_2__.media2s)(this.stmt);
    }
    // Returns the selector string of this grouping rule.
    getSel() {
        return `@media ${this.condition}`;
    }
    /**
     * Returns `MediaQueryList` object that allows programmatic checking whether the document matches
     * the media statement and also allows listening to its `change` event.
     */
    get mql() {
        if (!this._mql)
            this._mql = window.matchMedia(this.condition);
        return this._mql;
    }
}


/***/ }),

/***/ "./lib/rules/MiscRules.js":
/*!********************************!*\
  !*** ./lib/rules/MiscRules.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportRule": () => (/* binding */ ImportRule),
/* harmony export */   "NamespaceRule": () => (/* binding */ NamespaceRule),
/* harmony export */   "FontFaceRule": () => (/* binding */ FontFaceRule),
/* harmony export */   "PageRule": () => (/* binding */ PageRule),
/* harmony export */   "ClassNameRule": () => (/* binding */ ClassNameRule)
/* harmony export */ });
/* harmony import */ var _impl_MiscImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/MiscImpl */ "./lib/impl/MiscImpl.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _StyleRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleRules */ "./lib/rules/StyleRules.js");
/* harmony import */ var _impl_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../impl/Utils */ "./lib/impl/Utils.js");





/**
 * The MiscRule class serves as a base class for simple rules.
 */
class MiscRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule {
    constructor(isTopLevelRule) {
        super();
        this.isTopLevelRule = isTopLevelRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule.toDOM(this.toCss(), parent);
    }
    // Serializes this rule to a string.
    serialize(ctx) {
        ctx.addRule(this.toCss(), this.isTopLevelRule);
    }
}
/**
 * The ImportRule class describes a CSS @import rule.
 */
class ImportRule extends MiscRule {
    constructor(url, mediaStatement, supportsStatement) {
        // this is a top-level rule
        super(true);
        this.url = url;
        this.mediaStatement = mediaStatement;
        this.supportsStatement = supportsStatement;
    }
    // Returns CSS string for this rule.
    toCss() {
        let url;
        if (this.url.startsWith("url") || this.url.startsWith("\"") || this.url.startsWith("'"))
            url = this.url;
        else
            url = `url(${this.url})`;
        let supportsQueryString = !this.supportsStatement ? "" : (0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_0__.supports2s)(this.supportsStatement);
        if (supportsQueryString && !supportsQueryString.startsWith("supports"))
            supportsQueryString = `supports( ${supportsQueryString} )`;
        let mediaQueryString = !this.mediaStatement ? "" : (0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_0__.media2s)(this.mediaStatement);
        return `@import ${url} ${supportsQueryString} ${mediaQueryString}`;
    }
}
/**
 * The NamespaceRule class describes a CSS @namespace rule.
 */
class NamespaceRule extends MiscRule {
    constructor(namespace, prefix) {
        // this is a top-level rule
        super(true);
        this.namespace = namespace;
        this.prefix = prefix;
    }
    // Returns CSS string for this rule.
    toCss() {
        let url = this.namespace.startsWith("url(") ? this.namespace : `url(${this.namespace})`;
        return `@namespace ${this.prefix ? this.prefix : ""} ${url}`;
    }
}
/**
 * The FontFaceRule class describes a @font-face CSS rule.
 */
class FontFaceRule extends MiscRule {
    constructor(fontface) {
        super();
        this.fontface = fontface;
    }
    // Returns CSS string for this rule.
    toCss() {
        return `@font-face {${(0,_impl_MiscImpl__WEBPACK_IMPORTED_MODULE_0__.fontFace2s)(this.fontface)}}`;
    }
}
/**
 * The PageRule class represents the CSS @page rule.
 */
class PageRule extends _StyleRules__WEBPACK_IMPORTED_MODULE_2__.StyleRule {
    constructor(pseudoClass, style) {
        super(style);
        this.pseudoClass = pseudoClass;
    }
    // Returns the selector part of the style rule.
    getSel() {
        return `@page ${this.pseudoClass ? this.pseudoClass : ""}`;
    }
}
/**
 * The PageRule class represents the CSS @page rule.
 */
class ClassNameRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__.RuleLike {
    constructor(classes) {
        super();
        this.classes = classes;
    }
    // This function is used when the object is specified as a value of a style property.
    // We return the CSS class name.
    [_impl_Utils__WEBPACK_IMPORTED_MODULE_3__.symV2S]() { return this.cssClassName; }
    /** CSS rule selector string */
    get selectorText() {
        return this.cssClassName;
    }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        this.name = this.classes.map(cls => typeof cls === "string" ? cls : cls.name).join(" ");
        this.cssClassName = "." + this.classes.map(cls => typeof cls === "string" ? cls : cls.name).join(".");
    }
    // Implementation of the toString method returns the combined name of the classes (without
    // the CSS prefixes).
    toString() {
        return this.name;
    }
}


/***/ }),

/***/ "./lib/rules/Rule.js":
/*!***************************!*\
  !*** ./lib/rules/Rule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleLike": () => (/* binding */ RuleLike),
/* harmony export */   "Rule": () => (/* binding */ Rule)
/* harmony export */ });
/**
 * The RuleLike abstract class is a base for all "rules" defined in the style definition classes -
 * whether they correspond to real CSS rules (and thus derive from the Rule class) or not (such as
 * counters, grid lines and grid areas).
 */
class RuleLike {
    // Processes the rule.
    process(c, ruleName) {
        this.c = c;
        this.ruleName = ruleName;
    }
}
/**
 * The Rule class is used as a base class for all rules.
 */
class Rule extends RuleLike {
    // Clers the CSS rule object. This method is called when the style definition class, to which
    // this rule belongs, is deactivated.
    clear() { this.cssRule = null; }
    // Inserts the given rule into the given parent grouping rule or stylesheet.
    static toDOM(ruleText, parent) {
        try {
            let index = parent.insertRule(ruleText, parent.cssRules.length);
            return parent.cssRules[index];
        }
        catch (x) {
            console.error(`Cannot add CSS rule '${ruleText}'`, x);
            return null;
        }
    }
}


/***/ }),

/***/ "./lib/rules/RuleContainer.js":
/*!************************************!*\
  !*** ./lib/rules/RuleContainer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleContainer": () => (/* binding */ RuleContainer),
/* harmony export */   "configNames": () => (/* binding */ configNames),
/* harmony export */   "processSD": () => (/* binding */ processSD),
/* harmony export */   "getVarsFromSD": () => (/* binding */ getVarsFromSD),
/* harmony export */   "getRCfromSD": () => (/* binding */ getRCfromSD),
/* harmony export */   "activateSD": () => (/* binding */ activateSD),
/* harmony export */   "deactivateSD": () => (/* binding */ deactivateSD),
/* harmony export */   "serializeSD": () => (/* binding */ serializeSD),
/* harmony export */   "embeddedDecorator": () => (/* binding */ embeddedDecorator),
/* harmony export */   "getCurrentTheme": () => (/* binding */ getCurrentTheme)
/* harmony export */ });
/* harmony import */ var _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/RuleAPI */ "./lib/api/RuleAPI.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _VarRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VarRule */ "./lib/rules/VarRule.js");
/* harmony import */ var _MiscRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MiscRules */ "./lib/rules/MiscRules.js");
/* harmony import */ var _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../impl/SchedulingImpl */ "./lib/impl/SchedulingImpl.js");





// Define symbols that are used for keeping important information on the style definition
// instances that we don't want to be visible to developers.
/** Symbol on the style definition class pointing to the singleton instance. */
const symInstance = Symbol("sd");
/**
 * Symbol on the style definition instance pointing to the RuleContainer object that is
 * responsible for processing rules.
 */
const symContainer = Symbol("rc");
/**
 * Symbol on the style definition instance pointing to the StyleDefinition class for which
 * this instance was created.
 */
const symClass = Symbol("sdc");
/**
 * Element that is created at the top of the "<head>" element before any theme is activated. When
 * themes are activated, their '<style>' elements are created before this element.
 */
let s_themePlaceholderElm;
/**
 * Flag indicating that a rule container is created not directly (as for styled components)
 * but from the processClass function. This variable is set to true before instantiating the
 * style definition class (and thus the RuleCOntainer object) and is set back to false after
 * it is used in the RuleContainer constructor.
 */
let s_processingStyleDefinitionClass = false;
/**
 * The RuleContainer class is a shadow structure that accompanies every processed style definition
 * object. Since StyleDefinition class is an exported class visible to developers, we don't want
 * to have a lot of functionality in it. The RuleContainer object is linked to the StyleDefinition
 * object via the [symContainer] symbol. It contains all the functionality for parsing rule
 * definitions, name assignment and activation/deactivation.
 */
class RuleContainer {
    constructor(sd) {
        // Array of names of properties that would be considered "own" properties of the style
        // definition object. This array keeps the  property names in the order they are defined
        // in the class
        this.keys = [];
        // List of references to other style definitions creaed via the $use function.
        this.refs = [];
        // List of @import rules
        this.imports = [];
        // List of @namespace rules
        this.namespaces = [];
        // List of custom variable rules.
        this.vars = [];
        // List of rules that are not imports, namespaces, custom vars, references or grouping rules.
        this.otherRules = [];
        // List of rule-like objects.
        this.ruleLikes = [];
        // Reference count of activation requests.
        this.refCount = 0;
        // DOM style elemnt
        this.elm = null;
        this.sd = sd;
        this.sdc = sd.constructor;
        this.parent = sd.$parent;
        this.ec = this.sdc[symEmbeddingContainer];
        // get parent and top level containers
        if (this.parent) {
            this.pc = this.parent[symContainer];
            this.tlc = this.pc.tlc;
        }
        else
            this.tlc = this;
        // get the name for our container. If the container is created for a class from the
        // processClass function, then the flag s_processingStyleDefinitionClass is defined
        // and the name isgenerated depending on the current generation method. If this flag is
        // false, that means that the container is created from a direct "new" call on the style
        // definition class and the name is generated uniquely.
        let name;
        if (s_processingStyleDefinitionClass) {
            s_processingStyleDefinitionClass = false;
            name = !this.sdc.name || s_nameGeneratonMethod === 2 /* Optimized */
                ? generateUniqueName()
                : this.sdc.name;
            // associate the definition class with the created definition instance
            this.sdc[symInstance] = sd;
            sd[symClass] = this.sdc;
        }
        else {
            name = generateUniqueName();
            if (s_nameGeneratonMethod !== 2 /* Optimized */ && this.sdc.name)
                name += "_" + this.sdc.name;
        }
        // Style Definition instance points to this rule container
        sd[symContainer] = this;
        // if our container has parent container, prefix our name with the upper one
        this.name = this.pc ? `${this.pc.name}_${name}` : name;
    }
    // ProxyHandler method, whcih virtualizes all non-array properties
    set(t, p, v, r) {
        if (typeof p === "symbol" || typeof p === "number" || p in t /*t[p] !== undefined*/)
            return Reflect.set(t, p, v, r);
        else {
            // we don't virtualize arrays because there is no trap for isArray() method, which
            // we use later in the processProperty() method.
            if (!Array.isArray(v))
                virtualize(t, p);
            t[p] = v;
            this.keys.push(p);
            return true;
        }
    }
    // Processes the properties of the style definition instance. This creates names for classes,
    // IDs, animations and custom variables.
    process() {
        // loop over the properties of the definition object and process them.
        for (let propName of this.keys)
            this.processProperty(propName, this.sd[propName]);
        this.processed = true;
    }
    // Processes the properties of the style definition instance. This creates names for classes,
    // IDs, animations and custom variables.
    processProperty(propName, propVal) {
        if (propVal instanceof _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.StyleDefinition) {
            processInstance(propVal);
            this.refs.push(propVal);
        }
        // else if (propVal instanceof Array)
        else if (Array.isArray(propVal)) {
            // loop over array elements and recursively process them. Index becomes part of the
            // rule name.
            let i = 0;
            for (let item of propVal)
                this.processProperty(`${propName}_${i++}`, item);
        }
        else {
            if (propVal instanceof _Rule__WEBPACK_IMPORTED_MODULE_1__.RuleLike) {
                propVal.process(this, propName);
                if (propVal instanceof _VarRule__WEBPACK_IMPORTED_MODULE_2__.VarRule)
                    this.vars.push(propVal);
                else if (propVal instanceof _MiscRules__WEBPACK_IMPORTED_MODULE_3__.ImportRule)
                    this.imports.push(propVal);
                else if (propVal instanceof _MiscRules__WEBPACK_IMPORTED_MODULE_3__.NamespaceRule)
                    this.namespaces.push(propVal);
                else if (propVal instanceof _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule)
                    this.otherRules.push(propVal);
                else
                    this.ruleLikes.push(propVal);
            }
        }
    }
    /** Returns the instance of the stylesheet definition class */
    getDef() {
        return this.sd;
    }
    // Sets the given value for the custom CSS roperty with the given name.
    setVarValue(name, value, important, schedulerType) {
        if (this.varRootRule)
            (0,_impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_4__.scheduleStyleUpdate)(this.varRootRule, name, value, important, schedulerType);
    }
    /**
     * Generates a globally unique CSS name for the given rule name unless this rule name already
     * exists either in a base class or in the chain of parent grouping rules.
     */
    getScopedName(ruleName, nameOverride) {
        if (nameOverride)
            return typeof nameOverride === "string" ? nameOverride : nameOverride.name;
        else if (!ruleName)
            return generateUniqueName();
        else if (ruleName in this.sd && "name" in this.sd[ruleName])
            return this.sd[ruleName].name;
        else {
            // find out if there is a rule with this name defined in a stylesheet instance created
            // for a class from the prototype chain of the style definition class. Otherwise, if
            // there is a parent container, recurse to it; otherwise, generate the name.
            let existingName = findNameForRuleInPrototypeChain(this.sdc, ruleName);
            if (existingName)
                return existingName;
            else if (this.pc)
                return this.pc.getScopedName(ruleName);
            else
                return generateName(this.name, ruleName);
        }
    }
    /** Inserts all rules defined in this container to either the style sheet or grouping rule. */
    insert(sheetOrGroupingRule) {
        // insert @import and @namespace rules as they must be before other rules. If the parent is a grouping
        // rule, don't insert @import and @namespace rules at all
        if (sheetOrGroupingRule instanceof CSSStyleSheet) {
            this.imports.forEach(rule => rule.insert(sheetOrGroupingRule));
            this.namespaces.forEach(rule => rule.insert(sheetOrGroupingRule));
        }
        // activate referenced style definitions
        for (let ref of this.refs)
            ref[symContainer].activate(this.elm);
        // insert our custom variables into the ":root" rule
        if (this.vars.length > 0) {
            this.varRootRule = _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule.toDOM(getRootCssForVars(this.vars), sheetOrGroupingRule);
        }
        // insert all other rules
        this.otherRules.forEach(rule => rule.insert(sheetOrGroupingRule));
    }
    /** Clears all CSS rule objects defined in this container. */
    clear() {
        // import and namespace rules can only exist in the top-level style definition class
        if (!this.parent) {
            this.imports.forEach(rule => rule.clear());
            this.namespaces.forEach(rule => rule.clear());
        }
        this.varRootRule = null;
        this.otherRules.forEach(rule => rule.clear());
        // deactivate imported stylesheets
        for (let ref of this.refs)
            ref[symContainer].deactivate();
    }
    /**
     * Inserts this stylesheet into DOM.
     *
     * @param insertBefore Optional HTML element before which the new '<style>' element should be
     * inserted. If not specified, the new element will be inserted as the last element under the
     * '<head>' element.
     */
    activate(insertBefore = null) {
        if (++this.refCount > 1)
            return;
        // only the top-level not-embedded style definitions create the `<style>` element
        if (!this.parent) {
            if (this.ec)
                this.elm = this.ec.elm;
            else {
                // themes are inserted before the special placeholder element, which is created
                // at the top of the '<head>' element
                if (this.sd instanceof _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.ThemeDefinition) {
                    if (!s_themePlaceholderElm) {
                        s_themePlaceholderElm = document.createElement("style");
                        s_themePlaceholderElm.id = generateUniqueName("themePlaceholderElement_");
                        document.head.insertBefore(s_themePlaceholderElm, document.head.firstElementChild);
                    }
                    insertBefore = s_themePlaceholderElm;
                }
                this.elm = document.createElement("style");
                this.elm.id = this.name;
                document.head.insertBefore(this.elm, insertBefore);
            }
        }
        else
            this.elm = this.tlc.elm;
        // if this is a theme class activation, check whether the instance is set as the current
        // one for its theme base class. If no, then deactivate the theme instance currently set
        // as active. In any case, set our new instance as the currently active one. We ignore
        // theme declaration classes - those that directly derive from ThemeDefinition
        if (this.sd instanceof _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.ThemeDefinition && Object.getPrototypeOf(this.sdc) !== _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.ThemeDefinition) {
            let themeClass = this.sd[symClass];
            if (themeClass) {
                let currInstance = getCurrentTheme(themeClass);
                if (currInstance && currInstance !== this.sd) {
                    let currContainer = currInstance[symContainer];
                    currContainer.deactivate();
                }
                setCurrentTheme(this.sd);
            }
        }
        this.insert(this.elm.sheet);
    }
    /** Removes this stylesheet from DOM. */
    deactivate() {
        // guard from extra deactivate calls
        if (this.refCount === 0) {
/////////////////////////
            console.error(`Extra call to deactivate() for style definition class '${this.name}'`);
//////////////////////
            return;
        }
        if (--this.refCount > 0)
            return;
        this.clear();
        // only the top-level not-embedded style defiitions create the `<style>` element
        if (!this.parent && !this.ec)
            this.elm.remove();
        this.elm = null;
        // if this is a theme class deactivation, check whether the instance is set as the current
        // one for its theme base class. If yes, remove it as the currently active one.
        if (this.sd instanceof _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.ThemeDefinition && Object.getPrototypeOf(this.sdc) !== _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.ThemeDefinition) {
            let themeClass = this.sd[symClass];
            if (themeClass) {
                let currInstance = getCurrentTheme(themeClass);
                if (currInstance === this.sd)
                    removeCurrentTheme(themeClass);
            }
        }
    }
    /** Writes all rules recursively to the given string. */
    serialize(ctx) {
        // insert @import and @namespace rules as they must be before other rules. If the parent is a grouping
        // rule, don't insert @import and @namespace rules at all
        if (!this.parent) {
            this.imports.forEach(rule => rule.serialize(ctx));
            this.namespaces.forEach(rule => rule.serialize(ctx));
        }
        // activate referenced style definitions
        for (let ref of this.refs)
            ctx.addSD(ref);
        // serialize our custom variables in a ":root" rule
        if (this.vars.length > 0)
            ctx.addRule(getRootCssForVars(this.vars));
        // serialize all other rules
        this.otherRules.forEach(rule => rule.serialize(ctx));
    }
    getVars() { return this.vars; }
}
const getRootCssForVars = (vars) => `:root {${vars.map(varObj => varObj.toCss()).filter(v => !!v).join(";")}}`;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Name generation
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Sets the flag indicating whether to use optimized (short) rule names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param enable
 * @param prefix
 */
const configNames = (method, prefix) => {
    s_nameGeneratonMethod = method;
    s_uniqueStyleNamesPrefix = prefix ? prefix : "n";
};
/**
 * Flag indicating whether to use optimized names for style elements (classes,  animations, etc.)
 * By default this flag is true in the Release build of the library and false in the Debug build.
 */
let s_nameGeneratonMethod = 2 /* Optimized */;
/////////////
s_nameGeneratonMethod = 1 /* UniqueScoped */;
//////////
/**
 * Prefix to use when generating unique style names. If undefined, a standard prefix "n" will be used.
 */
let s_uniqueStyleNamesPrefix = "n";
/** Next number to use when generating unique identifiers. */
let s_nextUniqueID = 1;
/**
 * Generates name to use for the given rule from the given style sheet.
 */
const generateName = (sheetName, ruleName) => {
    switch (s_nameGeneratonMethod) {
        case 1 /* UniqueScoped */: return `${sheetName}_${ruleName}_${s_nextUniqueID++}`;
        case 2 /* Optimized */: return generateUniqueName();
        case 3 /* Scoped */: return `${sheetName}_${ruleName}`;
    }
};
/**
 * Generates a unique name, which can be used either for style element's ID or or class,
 * identifier or animation name. Names are generated using a simple incrementing number.
 */
const generateUniqueName = (prefix) => (prefix ? prefix : s_uniqueStyleNamesPrefix) + s_nextUniqueID++;
// Looks up a property with the given name in the prototype chain of the given style definition
// class. If found and if the property is a rule, then returns the name assigned for it.
const findNameForRuleInPrototypeChain = (definitionClass, ruleName) => {
    if (!definitionClass)
        return null;
    // loop over prototypes
    for (let baseClass = Object.getPrototypeOf(definitionClass); baseClass !== _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.StyleDefinition && baseClass !== _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.ThemeDefinition; baseClass = Object.getPrototypeOf(baseClass)) {
        // check if the base class already has an associated instance; if yes, check whether
        // it has a property with the given rule name. If yes, then use this rule's already
        // generated name (if exists).
        if (baseClass.hasOwnProperty(symInstance)) {
            let baseInst = baseClass[symInstance];
            if (baseInst && baseInst[ruleName] != null && "name" in baseInst[ruleName])
                return baseInst[ruleName].name;
        }
    }
    return null;
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Processing functions
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Processes the given stylesheet definition class or instance and assigns names to its rules.
 * If the parameter is a style definition class we check whether there is an instance already
 * created for it as a class will have only a single associated instane no matter how many times
 * this function is called.
 *
 * If the parameter is an object (an instance of the StyleDefinition class) then we check whether
 * it has already been processed. If yes, we just return it back; if no, we assign new unique names
 * to its rules.
 */
const processSD = (instOrClass, parent) => 
// instOrClass has type "object" if it is an instance and "function" if it is a class
typeof instOrClass === "object" ? processInstance(instOrClass) : processClass(instOrClass, parent);
/**
 * Processes the given style definition class by creating its instance and associating a
 * rule container object with it. The class will be associated with the instance using a
 * Symbol property. The parent parameter is a reference to the parent style defiition
 * object or null if the given class is itself a top-level class (that is, is not a class
 * that defines rules within nested grouping rules).
 */
const processClass = (sdc, parent) => {
    // check whether this definition class is already associated with an instance. Note that we
    // use hasOwnProperty() because otherwise, this could return instance for the base style
    // definition class.
    if (sdc.hasOwnProperty(symInstance))
        return sdc[symInstance];
    // recursively process all base classes so that rule names are generated. We don't activate styles
    // for these classes because derived classes will have all the rules from all the base classes
    // as their own and so these rules will be activated as part of the derived class.
    let baseClass = Object.getPrototypeOf(sdc);
    if (baseClass !== _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.StyleDefinition && baseClass !== _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.ThemeDefinition)
        processClass(baseClass, parent);
    try {
        // create the instance of the definition class
        s_processingStyleDefinitionClass = true;
        let sd = new sdc(parent);
        // get rule container from the instance and process the rules.
        sd[symContainer].process();
        return sd;
    }
    finally {
        s_processingStyleDefinitionClass = false;
    }
};
/**
 * Processes the given style definition instance and assigns names to its rules. If the
 * instance has already been processed, we do nothing; otherwise, we assign new unique names
 * to its rules.
 */
const processInstance = (sd) => {
    // if the instance is already processed, just return; in this case we ignore the
    // embeddingContainer parameter.
    let container = sd[symContainer];
    if (!container.processed)
        container.process();
    return sd;
};
/**
 * Processes the given style definition instance and assigns names to its rules. If the
 * instance has already been processed, we do nothing; otherwise, we assign new unique names
 * to its rules.
 */
const getVarsFromSD = (instOrClass) => processSD(instOrClass)[symContainer].getVars();
/**
 * Returns rule container object associated with the given style definition object.
 */
const getRCfromSD = (instance) => instance ? instance[symContainer] : null;
/**
 * Activates the given style definition and inserts all its rules into DOM. If the input object is
 * not a style definition but a style definition class, obtain style definition by calling the $use
 * function. Note that each style definition object maintains a reference counter of how many times
 * it was activated and deactivated. The rules are inserted to DOM only when this reference counter
 * goes from 0 to 1.
 */
const activateSD = (instance) => {
    let ruleContainer = getRCfromSD(instance);
    if (!ruleContainer)
        return;
    // if this container has an embedding container, activate the embedding container; otherwise,
    // activate the rule container itself.
    (ruleContainer.ec ?? ruleContainer).activate();
};
/**
 * Deactivates the given style definition by removing its rules from DOM. Note that each style
 * definition object maintains a reference counter of how many times it was activated and
 * deactivated. The rules are removed from DOM only when this reference counter goes from 1 to 0.
 */
const deactivateSD = (instance) => {
    let ruleContainer = getRCfromSD(instance);
    if (!ruleContainer)
        return;
    // if this container has an embedding container, deactivate the embedding container; otherwise,
    // deactivate the rule container itself.
    (ruleContainer.ec ?? ruleContainer).deactivate();
};
/**
 * Serializes the given style definition to the given string.
 */
const serializeSD = (instance, ctx) => {
    let ruleContainer = getRCfromSD(instance);
    if (ruleContainer)
        ruleContainer.serialize(ctx);
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Embedding
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/** Symbol used in style definition classes to point to an embedding container */
let symEmbeddingContainer = Symbol();
/**
 * The EmbeddingContainer class contains multiple style definition classes, which are activated and
 * deactivated together under a single `<style>` node. Style definition classes are added to the
 * embedding container by being decorated with the `@embedded` decorator.
 */
class EmbeddingContainer {
    constructor(id) {
        this.id = id;
        this.refCount = 0;
        this.sdcs = new Set();
    }
    /**
     * Adds the given style definition class to the list of embedded classes. If the container is
     * currently activated, the class will be activated too.
     */
    add(cls) {
        // add our class to the container
        this.sdcs.add(cls);
        // set the symbol on our class to point to the container
        cls[symEmbeddingContainer] = this;
        // if the embedding container is currently activated, we need to activate the added
        // style definition class using the currently default activator
        if (this.refCount > 0)
            (0,_impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_4__.getActivator)().activate(processClass(cls));
    }
    /**
     * Inserts all stylesheets in this container into DOM.
     */
    activate() {
        // only if this is the first activation call, create the style element and insert all
        // rules from all the style definition classes.
        if (++this.refCount === 1) {
            this.elm = document.createElement("style");
            this.elm.id = this.id;
            document.head.appendChild(this.elm);
            for (let cls of this.sdcs) {
                // definition class may be already associated with an instance; if not -
                // process it now.
                let instance = cls.hasOwnProperty(symInstance)
                    ? cls[symInstance]
                    : processClass(cls);
                let ruleContainer = instance[symContainer];
                ruleContainer.activate();
            }
        }
    }
    /**
     * Removes all stylesheets in this container into DOM.
     */
    deactivate() {
        // only if this is the last deactivation call, remove the style element and remove all
        // rules from all the style definition classes.
        if (--this.refCount === 0) {
            this.elm?.remove();
            this.elm = null;
            for (let cls of this.sdcs) {
                // definition class must be already associated with an instance
                if (!cls.hasOwnProperty(symInstance))
                    continue;
                let instance = cls[symInstance];
                let ruleContainer = instance[symContainer];
                ruleContainer.deactivate();
            }
        }
    }
}
/**
 * Map of category names to embedding container objects containing style definitions for the given
 * category.
 */
let s_embeddingContainers = new Map();
/**
 * Decorator function for style definition classes that will be embedded into an embedding
 * container for the given category. All style definitions for a given category will be activated
 * and deactivated together and their rules will be inserted into a single `<style>` element.
 */
const embeddedDecorator = (category, target) => {
    // check whether we already have container for this category; if not, add it
    let ec = s_embeddingContainers.get(category);
    if (!ec) {
        // generate unique ID for our container, which will be the ID of the `<style>` element
        let id = `${category}_${s_nextUniqueID++}`;
        ec = new EmbeddingContainer(id);
        s_embeddingContainers.set(category, ec);
    }
    // add our class to the container
    ec.add(target);
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Rule virtualization.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Decorator that should be applied to a rule if it is defined and used in the same style
 * definition class but then is overridden in a derived style definition class. The problem
 * this solves is this: when a rule is defined in a base class and then overridden in a derived
 * class, when an instance of the derived class is created, the rules that are created in the
 * base and derived classes see different values of the rule. Since our rules are defined as
 * part of the constructor, the base class constructor's code only sees the value assigned in that
 * code. If another rule in the base class uses this first rule, this value is remembered.
 *
 * The `@virtual` decorator creates a Proxy object for the rule with the handler that keeps the
 * most recent value set. Thus when a rule in the base class's constructor uses a virtualized
 * rule, the first rule will see the overridden value of the rule when accessed in the
 * post-constructor code.
 */
const virtualize = (target, name) => {
    // symbol to keep the proxy handler value
    let sym = Symbol(name);
    Object.defineProperty(target, name, {
        enumerable: true,
        get() { return ensureHandlerAndProxy(this, sym).x; },
        set(v) {
            // set the new value to the handler so that it will use it from now on. The primitive
            // values are boxed.
            let type = typeof v;
            ensureHandlerAndProxy(this, sym).t =
                type === "string" ? new String(v) :
                    type === "number" ? new Number(v) :
                        type === "boolean" ? new Boolean(v) :
                            type === "symbol" ? new Object(v) :
                                v;
        }
    });
};
/**
 * Creates handler and proxy in the given object using the given symbol if not created yet.
 * Returns the handler. Proxy is stored in the handler's property.
 */
const ensureHandlerAndProxy = (instance, sym) => {
    // check whether we already have the handler and create it if we don't. In this
    // case we also create a proxy for an empty object
    let handler = instance[sym];
    if (!handler) {
        instance[sym] = handler = new VirtHandler();
        handler.x = new Proxy({}, handler);
    }
    return handler;
};
/**
 * Handler for the proxy created by the `@virtual` decorator. It keeps the current value of a
 * rule so that the most recent value is used whenever the proxy is accessed.
 */
class VirtHandler {
    // interesting things happen in the get method
    get(t, p, r) {
        // if our value is null or undefined and the requested property is a well-known symbol
        // toPrimitive we return a function that returns either null or undefined. This will help
        // if our proxy either participate in an arithmetic expression or is combined with a
        // string.
        if (this.t == null && p === Symbol.toPrimitive)
            return () => this.t;
        // get the value of the request property; if the value is null or undefined, an exception
        // will be thrown - which is expected.
        let pv = Reflect.get(this.t, p, r);
        // if the requested property is a function, bind the original method to the target object
        return typeof pv === "function" ? pv.bind(this.t) : pv;
    }
    // the rest of the methods mostly delegate the calls to the latest target instead of the
    // original target. In some cases, we check whether the target is null or undefined so that
    // we don't throw exceptions where we can avoid it.
    getPrototypeOf(t) { return this.t == null ? null : Reflect.getPrototypeOf(this.t); }
    setPrototypeOf(t, v) { return Reflect.setPrototypeOf(this.t, v); }
    isExtensible(t) { return this.t == null ? false : Reflect.isExtensible(this.t); }
    preventExtensions(t) { return this.t == null ? false : Reflect.preventExtensions(this.t); }
    getOwnPropertyDescriptor(t, p) { return Reflect.getOwnPropertyDescriptor(this.t, p); }
    has(t, p) { return this.t == null ? false : Reflect.has(this.t, p); }
    set(t, p, v, r) { return Reflect.set(this.t, p, v, r); }
    deleteProperty(t, p) { return Reflect.deleteProperty(this.t, p); }
    defineProperty(t, p, attrs) { return Reflect.defineProperty(this.t, p, attrs); }
    ownKeys(t) { return Reflect.ownKeys(this.t); }
    apply(t, thisArg, args) { return this.t.apply(thisArg, args); }
    construct(t, args, newTarget) { return Reflect.construct(this.t, args, newTarget); }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Theming support.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Map of them definition classes to the instances that are currently active for these classes.
 */
let s_themeInstanceMap = new Map();
/**
 * Returns the theme base class for the given theme class.
 * @param themeClass ThemeDefinition-derived class
 * @returns Theme base class.
 */
const getThemeBaseClass = (themeClass) => {
    // make sure we are not passed the ThemeDefinition class itself
    if (themeClass === _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.ThemeDefinition)
        return undefined;
    // loop over prototypes until we find the class, which derives directly from ThemeDefinition.
    // This is the theme base class
    let themeBaseClass = themeClass;
    for (let cls = Object.getPrototypeOf(themeClass); cls !== _api_RuleAPI__WEBPACK_IMPORTED_MODULE_0__.ThemeDefinition; cls = Object.getPrototypeOf(cls))
        themeBaseClass = cls;
    return themeBaseClass;
};
/**
 * Returns the theme definition object, which is currently activated for the given theme.
 * @param themeClass Theme definition class
 * @returns Theme instance, which is currently activated for the given theme class or null
 * if no istance is currently activated.
 */
const getCurrentTheme = (themeClass) => {
    let themeBaseClass = getThemeBaseClass(themeClass);
    return themeBaseClass && s_themeInstanceMap.get(themeBaseClass);
};
/**
 * Sets the theme definition object as the instance that is currently activated for the
 * corresponding base theme class.
 * @param theme theme instance to set as current for the corresponding base theme class
 */
const setCurrentTheme = (theme) => {
    let themeBaseClass = getThemeBaseClass(theme.constructor);
    themeBaseClass && s_themeInstanceMap.set(themeBaseClass, theme);
};
/**
 * Removes a theme definition object set as the instance that is currently activated for the
 * corresponding base theme class.
 * @param themeClass Theme definition class
 */
const removeCurrentTheme = (themeClass) => {
    let themeBaseClass = getThemeBaseClass(themeClass);
    themeBaseClass && s_themeInstanceMap.delete(themeBaseClass);
};


/***/ }),

/***/ "./lib/rules/StyleRules.js":
/*!*********************************!*\
  !*** ./lib/rules/StyleRules.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleRule": () => (/* binding */ StyleRule),
/* harmony export */   "AbstractRule": () => (/* binding */ AbstractRule),
/* harmony export */   "ClassRule": () => (/* binding */ ClassRule),
/* harmony export */   "IDRule": () => (/* binding */ IDRule),
/* harmony export */   "SelectorRule": () => (/* binding */ SelectorRule)
/* harmony export */ });
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _impl_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../impl/Utils */ "./lib/impl/Utils.js");
/* harmony import */ var _impl_StyleImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../impl/StyleImpl */ "./lib/impl/StyleImpl.js");
/* harmony import */ var _impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../impl/SchedulingImpl */ "./lib/impl/SchedulingImpl.js");
/* harmony import */ var _impl_CoreImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../impl/CoreImpl */ "./lib/impl/CoreImpl.js");





/**
 * The StyleRule class is used as a base class for rules that contain a style rule. This class
 * implements the parsing of the CombinedStyleset object.
 */
class StyleRule extends _Rule__WEBPACK_IMPORTED_MODULE_0__.Rule {
    // The styleset can be an CombinedStyleset for many rules; however, for some it is just
    // of the Styleset type.
    constructor(inputStyleset) {
        super();
        // Selector string cached after it is first obtained. Needed to not invoke getSelectorString
        // multiple times in the presence of dependent rules.
        this._sel = null;
        this.styleset = {};
        this.dependentRules = {};
        if (inputStyleset) {
            if (Array.isArray(inputStyleset))
                inputStyleset.forEach(v => this.parse(v));
            else
                this.parse(inputStyleset);
        }
    }
    /**
     * This function allows the object to particpate in "v2s" serialization. Whenever the
     * StyleRule-derived object is encountered by the `v2s` function, the rule's selector will be
     * used.
     */
    [_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.symV2S]() { return this.selectorText; }
    /**
     * Goes over properties in the given styleset and parses them into proper styleset, set of
     * important properties and dependent rules.
     */
    parse(inputStyleset) {
        for (let propName in inputStyleset) {
            let propVal = inputStyleset[propName];
            if (propName === "+") {
                let extendsPropVal = propVal;
                if (extendsPropVal) {
                    // the value is a single StyleRule or an array of StyleRules to copy properties from
                    let parentRules = extendsPropVal instanceof StyleRule ? [extendsPropVal] : extendsPropVal;
                    for (let parent of parentRules) {
                        mergeStylesets(this.styleset, parent.styleset);
                        this.copyDepRules(parent);
                    }
                }
            }
            else if (propName === "--") {
                if (propVal)
                    mergeCustomProps(this.styleset, propVal);
            }
            else if (propName.startsWith(":")) {
                // if the value is an array, then this is an array of tuples representing
                // parameterised pseudo entities where the first element is the parameter value
                // (string) and the second the CombinedStyleset. Otherwise, the value is just a
                // CombinedStyleset.
                if (Array.isArray(propVal)) {
                    let tuples = propVal;
                    if (tuples.length > 0) {
                        this.dependentRules[propName] = tuples.map(tuple => new DepRule(propName, tuple[0], tuple[1], this));
                    }
                }
                else
                    this.dependentRules[propName] = new DepRule("&" + propName, undefined, propVal, this);
            }
            else if (propName.includes("&")) {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    this.dependentRules[propName] = tuples.map(tuple => {
                        let newSelector = propName === "&"
                            ? tuple[0]
                            : propName.startsWith("&")
                                ? [propName, tuple[0]]
                                : [tuple[0], propName];
                        return new DepRule(newSelector, undefined, tuple[1], this);
                    });
                }
            }
            else if (this.parseSP(propName, propVal)) {
                // this is a regular CSS property: copy the property value to our internal styleset
                mergePropValues(this.styleset, propName, propVal);
            }
        }
    }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        this.forEachDepRule((depRule) => depRule.process(container, null));
    }
    // Converts the rule to CSS string representing the rule.
    toCss() {
        return this.selectorText + (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_2__.styleset2s)(this.styleset);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        if (Object.keys(this.styleset).length > 0)
            this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_0__.Rule.toDOM(this.toCss(), parent);
        // insert dependent rules under the same parent
        this.forEachDepRule((depRule) => depRule.insert(parent));
    }
    // Clers the CSS rule object.
    clear() {
        super.clear();
        // clear dependent rules
        this.forEachDepRule((depRule) => depRule.clear());
    }
    // Serializes this rule to a string.
    serialize(ctx) {
        if (Object.keys(this.styleset).length > 0)
            ctx.addRule(this.toCss());
        // insert dependent rules under the same parent
        this.forEachDepRule((depRule) => depRule.serialize(ctx));
    }
    // Invoke the given function for each of the dependent rules.
    forEachDepRule(func) {
        for (let propName in this.dependentRules) {
            let propVal = this.dependentRules[propName];
            if (Array.isArray(propVal))
                for (let depRule of propVal)
                    func(depRule);
            else
                func(propVal);
        }
    }
    /** CSS rule selector string */
    get selectorText() {
        if (this._sel == null)
            this._sel = this.getSel();
        return this._sel;
    }
    // Copies dependent rules from another style rule object.
    copyDepRules(src) {
        let srsDepRules = src.dependentRules;
        let thisDepRules = this.dependentRules;
        for (let propName in srsDepRules) {
            let srcRuleOrArr = srsDepRules[propName];
            if (Array.isArray(srcRuleOrArr)) {
                if (srcRuleOrArr.length > 0) {
                    let thisArr = thisDepRules[propName];
                    if (!thisArr)
                        thisDepRules[propName] = thisArr = [];
                    for (let srcDepRule of srcRuleOrArr)
                        thisArr.push(srcDepRule.clone(this));
                }
            }
            else
                thisDepRules[propName] = srcRuleOrArr.clone(this);
        }
    }
    // Allows the derived classes to process style properties that the StyleRule doesn't know about.
    // If false is returned, the property with the given name will not be added to the styleset.
    parseSP(propName, propVal) { return true; }
    /**
     * Adds/replaces the value of the given CSS property in this rule.
     * @param name Name of the CSS property.
     * @param value New value of the CSS property.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     * @param schedulerType ID of a registered scheduler type that is used to write the property
     * value to the DOM. If undefined, the current default scheduler will be used.
     */
    setProp(name, value, important, schedulerType) {
        // first set/remove the value in our internal styleset object
        if (value == null)
            delete this.styleset[name];
        else
            this.styleset[name] = important ? { "!": value } : value;
        // second, if CSSRule alredy exists, set/remove the property value there
        if (this.cssRule) {
            (0,_impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_3__.scheduleStyleUpdate)(this.cssRule, (0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.camelToDash)(name), value == null ? null : (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_2__.sp2s)(name, value), important, schedulerType);
        }
    }
    /**
     * Adds/replaces the value of the given custom CSS property in this rule.
     * @param varObj IVarRule object defining a custom CSS property.
     * @param varValue New value of the custom CSS property.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     * @param schedulerType ID of a registered scheduler type that is used to write the property
     * value to the DOM. If undefined, the current default scheduler will be used.
     */
    setCustomProp(varObj, value, important, schedulerType) {
        if (!varObj)
            return;
        // first set/remove the value in our internal styleset object
        let currCustomProps = this.styleset["--"];
        if (currCustomProps || value != null) {
            if (value == null) {
                let index = currCustomProps.findIndex(item => item[0] === varObj);
                if (index >= 0)
                    currCustomProps.splice(index, 1);
            }
            else if (!currCustomProps)
                this.styleset["--"] = [[varObj, value]];
            else {
                let index = currCustomProps.findIndex(item => item[0] === varObj);
                if (index >= 0)
                    currCustomProps[index][1] = value;
                else
                    currCustomProps.push([varObj, value]);
            }
        }
        // second, if CSSRule alredy exists, set/remove the property value there
        if (this.cssRule) {
            (0,_impl_SchedulingImpl__WEBPACK_IMPORTED_MODULE_3__.scheduleStyleUpdate)(this.cssRule, varObj.cssVarName, value == null ? null : (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_2__.sp2s)(varObj.template, value), important, schedulerType);
        }
    }
}
/**
 * The DependentRule class describes a styleset that depends on the containing style rule. This
 * is used for pseudo classes, pseudo elements, combinators and other selectors that combine the
 * containing rule's selector with additional selector items.
 */
class DepRule extends StyleRule {
    // for regular selectors, pseudo classes and pseudo elements, the selector already contains
    // the ampersand and the selectorParam is undefined. For parameterized pseudo classes, pseudo
    // elements and combinators, the selectorParam is defined and the selector is just the entity
    // name.
    constructor(selector, param, styleset, parent) {
        super(styleset);
        this.selector = selector;
        this.parent = parent;
        this.param = param;
    }
    // Creates a copy of the rule but with new parent (containing rule).
    clone(containingRule) {
        let newRule = new DepRule(this.selector, this.param, undefined, containingRule);
        // this method is called on a newly created object so we don't have any properties in
        // our own styleset yet
        mergeStylesets(newRule.styleset, this.styleset);
        newRule.copyDepRules(this);
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSel() {
        let parentSelector = this.parent.selectorText;
        if (this.param) {
            // the "param" value is only set for parameterized pseudo entities, so we convert it to
            // the "func" object form. We also know that the selector is a string - name of the entity.
            return `${parentSelector}${(0,_impl_Utils__WEBPACK_IMPORTED_MODULE_1__.fdo2s)({ fn: this.selector, p: this.param })}`;
        }
        else {
            // convert selector to string.
            let selector = (0,_impl_CoreImpl__WEBPACK_IMPORTED_MODULE_4__.selector2s)(this.selector);
            // if the selector string doesn't have any occurrences of the ampersand symbol, we
            // simply append the selector to the parent selector; otherwise, we replace all
            // occurrences of the ampersand symbol in the selector string with the selector
            // string of the parent rule.
            return selector.indexOf("&") < 0
                ? `${parentSelector}${selector}`
                : selector.replace(/&/g, parentSelector);
        }
    }
}
/**
 * The AbstractRule class describes a styleset that can only be used as a base for other style
 * rules.
 */
class AbstractRule extends StyleRule {
    // Overrides the StyleRule's implementation to do nothing. No CSSStyleRule is created for
    // abstract rules.
    insert(parent) { }
    // Overrides the StyleRule's implementation to do nothing.
    clear() { }
    // Overrides the StyleRule's implementation to do nothing.
    serialize(ctx) { }
    // Returns the selector part of the style rule.
    getSel() { return ""; }
}
/**
 * The NamedStyleRule class is a base for style rule classes that are also named entities - such
 * as class rule and ID rule.
 */
class NamedStyleRule extends StyleRule {
    constructor(styleset, nameOverride) {
        super(styleset);
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        this.name = container.getScopedName(ruleName, this.nameOverride);
        this.cssName = this.cssPrefix + this.name.replace(/ /g, this.cssPrefix);
    }
    // Returns the selector part of the style rule.
    getSel() {
        return this.cssName;
    }
    // Implementation of the toString method returns the name of the rule (without the CSS prefix).
    toString() {
        return this.name;
    }
}
/**
 * The ClassRule class describes a styleset that applies to elements identified by a CSS class.
 */
class ClassRule extends NamedStyleRule {
    // Allows the derived classes to process style properties that the StyleRule doesn't know about.
    // If returns false, the property with the given name will not be added to the styleset.
    parseSP(propName, propVal) {
        if (propName == "++") {
            let rules = propVal;
            if (rules)
                this.parents = Array.isArray(rules) ? rules : [rules];
            return false;
        }
        return super.parseSP(propName, propVal);
    }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        // by now our name and cssName properties have been set to reflect a single name. Now
        // look at the parent class rues defined using the "++" property and take names from the
        // referenced class rules and append them to the name.
        if (this.parents) {
            this.name += " " + this.parents.map(cls => typeof cls === "string" ? cls : cls.name).join(" ");
            this.cssName = "." + this.name.replace(/ /g, ".");
        }
    }
    /** Name of the class prefixed with "." */
    get cssClassName() { return this.cssName; }
    // Returns prefix that is put before the entity name to create a CSS name used in style rule
    // selectors.
    get cssPrefix() { return "."; }
}
/**
 * The IDRule class describes a styleset that applies to elements identified by an ID.
 */
class IDRule extends NamedStyleRule {
    /** Name of the element ID prefixed with "#" */
    get cssIDName() { return this.cssName; }
    // Returns prefix that is put before the entity name to create a CSS name used in style rule
    // selectors.
    get cssPrefix() { return "#"; }
}
/**
 * The SelectorRule type describes a styleset that applies to elements identified by a CSS selector.
 */
class SelectorRule extends StyleRule {
    constructor(selector, styleset) {
        super(styleset);
        this.selector = selector;
    }
    // Returns the selector part of the style rule.
    getSel() {
        return (0,_impl_CoreImpl__WEBPACK_IMPORTED_MODULE_4__.selector2s)(this.selector);
    }
}
/**
 * Merges properties from the source styleset to the target styleset. All regular properties are
 * replaced. The "--" property gets special treatment because it is an array.
 * @param target Target Styleset object - cannot be null or undefined;
 * @param source Source Styleset object - cannot be null or undefined.
 * @param source
 */
const mergeStylesets = (target, source) => {
    // copy all other properties from the source
    if (Object.keys(target).length === 0)
        Object.assign(target, source);
    else {
        for (let propName in source) {
            if (propName === "--")
                mergeCustomProps(target, source[propName]);
            else
                mergePropValues(target, propName, source[propName]);
        }
    }
};
/**
 * Merges "--" property from the source styleset to the target styleset.
 */
const mergeCustomProps = (target, sourceVars) => {
    let targetVars = target["--"];
    target["--"] = !targetVars ? sourceVars.slice() : targetVars.concat(sourceVars);
};
/**
 * Merges values of the given property from the source styleset to the target styleset. Note that
 * both source or target value can be either null or single value or an object with the `"[]"`
 * property that contains multiple values.
 * @param target Target Styleset object - cannot be null or undefined.
 * @param propName Name of the property.
 * @param sourceVal Value from the source styleset to merge with the target value - can be null or
 * undefined.
 */
const mergePropValues = (target, propName, sourceVal) => {
    if (sourceVal == null)
        delete target[propName];
    else {
        let targetVal = target[propName];
        if (targetVal == null) {
            // if property doesn't exist in the target or its value is null or undefined, just
            // take the source's value
            target[propName] = sourceVal;
        }
        else {
            let targetArray = targetVal["[]"];
            if (!targetArray)
                target[propName] = { "[]": targetArray = [targetVal] };
            let sourceArray = sourceVal["[]"];
            if (!sourceArray)
                targetArray.push(sourceVal);
            else
                targetArray.push(...sourceArray);
        }
    }
};


/***/ }),

/***/ "./lib/rules/VarRule.js":
/*!******************************!*\
  !*** ./lib/rules/VarRule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VarRule": () => (/* binding */ VarRule),
/* harmony export */   "PropertyRule": () => (/* binding */ PropertyRule),
/* harmony export */   "ConstRule": () => (/* binding */ ConstRule)
/* harmony export */ });
/* harmony import */ var _impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/StyleImpl */ "./lib/impl/StyleImpl.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");


/**
 * The VarBaseRule class contains functionality common for VarRule class describing a custom CSS
 * property definition in the `:root` rule and for PropertyRule class describing the `@property`
 * at-rule.
 */
class VarBaseRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule {
    constructor(template, value, nameOverride) {
        super();
        this.template = template;
        this.value = value;
        this.nameOverride = nameOverride;
    }
    // This function is used when the object is specified as a value of a style property.
    // We return the var(--name) expression.
    toString() {
        return `var(${this.cssVarName})`;
    }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        this.name = container.getScopedName(ruleName, this.nameOverride);
        if (this.name.startsWith("--"))
            this.name = this.name.substr(2);
        this.cssVarName = "--" + this.name;
    }
    // Inserts this rule into the given parent rule or stylesheet. This method is called when the
    // style definition class, to which this rule belongs, is activated.
    insert(parent) { }
    // Serializes this rule to a string.
    serialize(ctx) { }
    /**
     * Gets the value of the property.
     */
    getValue() {
        return this.value;
    }
    /**
     * Sets new value of this custom CSS property.
     * @param value New value for the CSS property.
     * @param schedulerType ID of a registered scheduler type that is used to write the property
     * value to the DOM. If undefined, the current default scheduler will be used.
     */
    setValue(value, schedulerType) {
        this.value = value;
        if (this.c) {
            let important = false;
            if (value != null && typeof value === "object" && "!" in value) {
                important = true;
                value = value["!"];
            }
            this.c.setVarValue(this.cssVarName, value == null
                ? null
                : (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.sp2s)(this.template, value), important, schedulerType);
        }
    }
}
/**
 * The VarRule class describes a custom CSS property. VarRule is not a real CSS rule; however, in
 * many aspects it repeats the Rule's functionality. In particular it has the process function that
 * allows it to obtain an actual name, which will be used when defining and using this custom
 * property in CSS.
 */
class VarRule extends VarBaseRule {
    constructor(template, value, nameOverride) {
        super(template, value, nameOverride);
    }
    // Converts the rule to CSS string.
    toCss() {
        return this.value == null ? null : `${this.cssVarName}: ${(0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.sp2s)(this.template, this.value)}`;
    }
}
/**
 * The PropertyRule class describes the `@property` at-rule.
 */
class PropertyRule extends VarBaseRule {
    constructor(syntax, initValue, inherits = true, nameOverride) {
        if (Array.isArray(syntax)) {
            super("*", initValue, nameOverride);
            this.syntax = syntax[0];
        }
        else {
            super(syntax, initValue, nameOverride);
            this.syntax = syntax;
        }
        this.inherits = inherits;
    }
    // public constructor( syntax: K, initValue: ExtendedVarValue<K>, inherits: boolean, nameOverride?: string | IVarRule<K>)
    // {
    //     super( syntax, initValue, nameOverride);
    // 	this.inherits = inherits;
    // }
    // Inserts this rule into the given parent rule or stylesheet. This method is called when the
    // style definition class, to which this rule belongs, is activated.
    insert(parent) {
        this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_1__.Rule.toDOM(this.toCss(), parent);
    }
    // Serializes this rule to a string.
    serialize(ctx) {
        ctx.addRule(this.toCss());
    }
    // Converts the rule to CSS string.
    toCss() {
        return `@property ${this.cssVarName}{syntax:'${this.syntax}';inherits:${this.inherits};` +
            `initial-value:${(0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.sp2s)(this.template, this.value)};}`;
    }
}
/**
 * The IConstRule interface represents a "constant" that can be used anywhere the type defined by
 * the `template` parameter can be used. These are called constants, because they provide the
 * convenient and lightweight way of defining values that are unchanged during the application
 * lifetime. Although constants are defined very similarly to custom properties (see the
 * [[IVarRule]] function), they cannot participate in the cascade and cannot be redefined under
 * elements. Constant can, however, use any expression that satisfies the type defined by the
 * `template` parameter including other constants, custom properties and functions.
 * Objects implementing this interface are returned from the [[$const]] function.
 */
class ConstRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__.RuleLike {
    constructor(template, value, cachedValue) {
        super();
        this.template = template;
        this.value = value;
        this._val = cachedValue;
    }
    // This function is used when the object is specified as a value of a style property.
    toString() { return this._val; }
    // Processes the given rule.
    process(container, ruleName) {
        super.process(container, ruleName);
        if (!this._val)
            this._val = (0,_impl_StyleImpl__WEBPACK_IMPORTED_MODULE_0__.sp2s)(this.template, this.value);
    }
    /**
     * Gets the value of the property.
     */
    getValue() {
        return this.value;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attr": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.attr),
/* harmony export */   "counter": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.counter),
/* harmony export */   "counters": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.counters),
/* harmony export */   "cubicBezier": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.cubicBezier),
/* harmony export */   "cursor": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.cursor),
/* harmony export */   "raw": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.raw),
/* harmony export */   "sel": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.sel),
/* harmony export */   "selector": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.selector),
/* harmony export */   "steps": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.steps),
/* harmony export */   "url": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.url),
/* harmony export */   "usevar": () => (/* reexport safe */ _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__.usevar),
/* harmony export */   "Angle": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.Angle),
/* harmony export */   "Frequency": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.Frequency),
/* harmony export */   "Len": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.Len),
/* harmony export */   "Num": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.Num),
/* harmony export */   "Percent": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.Percent),
/* harmony export */   "Q": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.Q),
/* harmony export */   "Resolution": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.Resolution),
/* harmony export */   "Time": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.Time),
/* harmony export */   "ch": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.ch),
/* harmony export */   "cm": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.cm),
/* harmony export */   "deg": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.deg),
/* harmony export */   "dpcm": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.dpcm),
/* harmony export */   "dpi": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.dpi),
/* harmony export */   "dppx": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.dppx),
/* harmony export */   "em": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.em),
/* harmony export */   "ex": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.ex),
/* harmony export */   "fitContent": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.fitContent),
/* harmony export */   "fr": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.fr),
/* harmony export */   "grad": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.grad),
/* harmony export */   "hz": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.hz),
/* harmony export */   "ic": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.ic),
/* harmony export */   "inch": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.inch),
/* harmony export */   "khz": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.khz),
/* harmony export */   "lh": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.lh),
/* harmony export */   "mm": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.mm),
/* harmony export */   "ms": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.ms),
/* harmony export */   "pc": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.pc),
/* harmony export */   "percent": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.percent),
/* harmony export */   "pt": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.pt),
/* harmony export */   "px": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.px),
/* harmony export */   "rad": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.rad),
/* harmony export */   "ratio": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.ratio),
/* harmony export */   "rect": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.rect),
/* harmony export */   "rem": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.rem),
/* harmony export */   "rlh": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.rlh),
/* harmony export */   "s": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.s),
/* harmony export */   "turn": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.turn),
/* harmony export */   "vb": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.vb),
/* harmony export */   "vh": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.vh),
/* harmony export */   "vi": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.vi),
/* harmony export */   "vmax": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.vmax),
/* harmony export */   "vmin": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.vmin),
/* harmony export */   "vw": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.vw),
/* harmony export */   "x": () => (/* reexport safe */ _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__.x),
/* harmony export */   "Colors": () => (/* reexport safe */ _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__.Colors),
/* harmony export */   "alpha": () => (/* reexport safe */ _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__.alpha),
/* harmony export */   "colorContrast": () => (/* reexport safe */ _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__.colorContrast),
/* harmony export */   "colorMix": () => (/* reexport safe */ _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__.colorMix),
/* harmony export */   "hsl": () => (/* reexport safe */ _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__.hsl),
/* harmony export */   "lab": () => (/* reexport safe */ _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__.lab),
/* harmony export */   "lch": () => (/* reexport safe */ _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__.lch),
/* harmony export */   "registerColor": () => (/* reexport safe */ _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__.registerColor),
/* harmony export */   "rgb": () => (/* reexport safe */ _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__.rgb),
/* harmony export */   "blur": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.blur),
/* harmony export */   "brightness": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.brightness),
/* harmony export */   "circle": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.circle),
/* harmony export */   "conicGradient": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.conicGradient),
/* harmony export */   "contrast": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.contrast),
/* harmony export */   "crossFade": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.crossFade),
/* harmony export */   "dropShadow": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.dropShadow),
/* harmony export */   "ellipse": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.ellipse),
/* harmony export */   "grayscale": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.grayscale),
/* harmony export */   "hueRotate": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.hueRotate),
/* harmony export */   "imageSet": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.imageSet),
/* harmony export */   "inset": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.inset),
/* harmony export */   "invert": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.invert),
/* harmony export */   "linearGradient": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.linearGradient),
/* harmony export */   "matrix": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.matrix),
/* harmony export */   "matrix3d": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.matrix3d),
/* harmony export */   "minmax": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.minmax),
/* harmony export */   "opacity": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.opacity),
/* harmony export */   "paint": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.paint),
/* harmony export */   "path": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.path),
/* harmony export */   "perspective": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.perspective),
/* harmony export */   "polygon": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.polygon),
/* harmony export */   "radialGradient": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.radialGradient),
/* harmony export */   "ray": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.ray),
/* harmony export */   "registerPaintWorklet": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.registerPaintWorklet),
/* harmony export */   "repeat": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.repeat),
/* harmony export */   "rotate": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.rotate),
/* harmony export */   "rotate3d": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.rotate3d),
/* harmony export */   "rotateX": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.rotateX),
/* harmony export */   "rotateY": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.rotateY),
/* harmony export */   "rotateZ": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.rotateZ),
/* harmony export */   "saturate": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.saturate),
/* harmony export */   "scale": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.scale),
/* harmony export */   "scale3d": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.scale3d),
/* harmony export */   "scaleX": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.scaleX),
/* harmony export */   "scaleY": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.scaleY),
/* harmony export */   "scaleZ": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.scaleZ),
/* harmony export */   "sepia": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.sepia),
/* harmony export */   "skew": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.skew),
/* harmony export */   "skewX": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.skewX),
/* harmony export */   "skewY": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.skewY),
/* harmony export */   "span": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.span),
/* harmony export */   "translate": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.translate),
/* harmony export */   "translate3d": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.translate3d),
/* harmony export */   "translateX": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.translateX),
/* harmony export */   "translateY": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.translateY),
/* harmony export */   "translateZ": () => (/* reexport safe */ _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__.translateZ),
/* harmony export */   "StyleDefinition": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.StyleDefinition),
/* harmony export */   "ThemeDefinition": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.ThemeDefinition),
/* harmony export */   "activate": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.activate),
/* harmony export */   "chooseClass": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.chooseClass),
/* harmony export */   "classes": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.classes),
/* harmony export */   "configNameGeneration": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.configNameGeneration),
/* harmony export */   "deactivate": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.deactivate),
/* harmony export */   "embedded": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.embedded),
/* harmony export */   "getActiveTheme": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.getActiveTheme),
/* harmony export */   "virtual": () => (/* reexport safe */ _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__.virtual),
/* harmony export */   "cancelDOMUpdate": () => (/* reexport safe */ _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_15__.cancelDOMUpdate),
/* harmony export */   "forceDOMUpdate": () => (/* reexport safe */ _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_15__.forceDOMUpdate),
/* harmony export */   "getDefaultScheduler": () => (/* reexport safe */ _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_15__.getDefaultScheduler),
/* harmony export */   "registerScheduler": () => (/* reexport safe */ _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_15__.registerScheduler),
/* harmony export */   "setDefaultScheduler": () => (/* reexport safe */ _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_15__.setDefaultScheduler),
/* harmony export */   "unregisterScheduler": () => (/* reexport safe */ _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_15__.unregisterScheduler),
/* harmony export */   "createCssSerializer": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.createCssSerializer),
/* harmony export */   "diffStylesets": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.diffStylesets),
/* harmony export */   "getStylePropValue": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.getStylePropValue),
/* harmony export */   "media": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.media),
/* harmony export */   "mediaToString": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.mediaToString),
/* harmony export */   "registerStyleProperty": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.registerStyleProperty),
/* harmony export */   "serializeToCSS": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.serializeToCSS),
/* harmony export */   "setElementStringStyle": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.setElementStringStyle),
/* harmony export */   "setElementStyle": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.setElementStyle),
/* harmony export */   "stylesetToString": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.stylesetToString),
/* harmony export */   "stylesetToStringStyleset": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.stylesetToStringStyleset),
/* harmony export */   "supports": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.supports),
/* harmony export */   "supportsToString": () => (/* reexport safe */ _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__.supportsToString)
/* harmony export */ });
/* harmony import */ var _api_CoreTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/CoreTypes */ "./lib/api/CoreTypes.js");
/* harmony import */ var _api_NumericTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/NumericTypes */ "./lib/api/NumericTypes.js");
/* harmony import */ var _api_ColorTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/ColorTypes */ "./lib/api/ColorTypes.js");
/* harmony import */ var _api_ShapeTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/ShapeTypes */ "./lib/api/ShapeTypes.js");
/* harmony import */ var _api_FontTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/FontTypes */ "./lib/api/FontTypes.js");
/* harmony import */ var _api_MediaTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/MediaTypes */ "./lib/api/MediaTypes.js");
/* harmony import */ var _api_RuleTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/RuleTypes */ "./lib/api/RuleTypes.js");
/* harmony import */ var _api_SchedulingTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/SchedulingTypes */ "./lib/api/SchedulingTypes.js");
/* harmony import */ var _api_StyleTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/StyleTypes */ "./lib/api/StyleTypes.js");
/* harmony import */ var _api_Stylesets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/Stylesets */ "./lib/api/Stylesets.js");
/* harmony import */ var _api_CoreAPI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/CoreAPI */ "./lib/api/CoreAPI.js");
/* harmony import */ var _api_NumericAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/NumericAPI */ "./lib/api/NumericAPI.js");
/* harmony import */ var _api_ColorAPI__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api/ColorAPI */ "./lib/api/ColorAPI.js");
/* harmony import */ var _api_ShapeAPI__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api/ShapeAPI */ "./lib/api/ShapeAPI.js");
/* harmony import */ var _api_RuleAPI__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api/RuleAPI */ "./lib/api/RuleAPI.js");
/* harmony import */ var _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api/SchedulingAPI */ "./lib/api/SchedulingAPI.js");
/* harmony import */ var _api_StyleAPI__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api/StyleAPI */ "./lib/api/StyleAPI.js");
// Type definitions for mimcss


















})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});