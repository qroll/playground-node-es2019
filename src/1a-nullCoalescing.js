import "./clearConsole";

const options = {
  enableSubtitles: false,
  display: {
    resolution: "1080p",
    fullscreen: false
  }
};

// -> vanilla javascript

// ---> whoops!
// const enableSubtitles = options.enableSubtitles || true;

// ---> check that property exists
// const enableSubtitles = options.hasOwnProperty("enableSubtitles")
//   ? options.enableSubtitles
//   : true;

// ---> via destructuring
// const { enableSubtitles = true } = options; // only works for undefined

// -> new: null coalescing
const enableSubtitles = options.enableSubtitles ?? true; // only for null and undefined

console.log(enableSubtitles);

// -> combining with optional chaining
const resolution = options?.display?.resolution ?? "720p";

console.log(resolution);
