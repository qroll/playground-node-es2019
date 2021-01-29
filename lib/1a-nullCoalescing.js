"use strict";

var _options$enableSubtit, _ref, _options$display;

var options = {
  enableSubtitles: false,
  display: {
    resolution: "1080p",
    fullscreen: false
  }
}; // -> vanilla javascript
// -> whoops!
// const enableSubtitles = options.enableSubtitles || true;
// -> check that property exists
// const enableSubtitles = options.hasOwnProperty('enableSubtitles') ? options.enableSubtitles : true;
// -> via destructuring
// const { enableSubtitles = true } = options; // only works for undefined
// -> new: null coalescing

var enableSubtitles = (_options$enableSubtit = options.enableSubtitles) !== null && _options$enableSubtit !== void 0 ? _options$enableSubtit : true; // only for null and undefined

console.log(enableSubtitles); // -> combining with optional chaining

var resolution = (_ref = options === null || options === void 0 ? void 0 : (_options$display = options.display) === null || _options$display === void 0 ? void 0 : _options$display.resolution) !== null && _ref !== void 0 ? _ref : "720p";
console.log(resolution);