!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r),r.register("7xFj2",(function(e,n){var t,r,o,i;function u(e){return fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flags,languages")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return e}))}t=e.exports,r="fetchCountries",o=function(){return u},Object.defineProperty(t,r,{get:o,set:i,enumerable:!0,configurable:!0})})),r("7xFj2")}();
//# sourceMappingURL=index.02e305c2.js.map