!function(){function n(n,e,i,t){Object.defineProperty(n,e,{get:i,set:t,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},o=e.parcelRequired7c6;null==o&&((o=function(n){if(n in i)return i[n].exports;if(n in t){var e=t[n];delete t[n];var o={id:n,exports:{}};return i[n]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){t[n]=e},e.parcelRequired7c6=o),o.register("4J59Q",(function(e,i){function t(n){return n.map((function(n){var e=n.name,i=n.flags;return'<li class = "country-item"><img src='.concat(i.svg,' alt="flag of ').concat(e.official,'" height = "100px"><p>').concat(e.official,"</p></li>")})).join("")}function o(n){return n.map((function(n){var e=n.name,i=n.flags,t=n.capital,o=n.population,a=n.languages;return"<div><img src = ".concat(i.svg,' alt="flag of ').concat(e.official,'" height = "200px"><h2>').concat(e.official,"</h2></div><ul><li><p><span>Capital:</span> ").concat(t,"</p></li><li><p><span>Population:</span> ").concat(o,"</p></li><li><p><span>Languages:</span> ").concat(Object.values(a).join(", "),"</p></li></ul>")})).join("")}n(e.exports,"countryList",(function(){return t})),n(e.exports,"countryFullInfo",(function(){return o}))})),o("4J59Q")}();
//# sourceMappingURL=index.20d3b706.js.map