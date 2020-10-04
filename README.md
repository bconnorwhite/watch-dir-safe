<div align="center">
  <h1>watch-dir-safe</h1>
  <a href="https://npmjs.com/package/watch-dir-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/watch-dir-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/watch-dir-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/watch-dir-safe.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/watch-dir-safe?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/watch-dir-safe.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/watch-dir-safe">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/watch-dir-safe?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Watch a directory for changes.

## Installation

```sh
yarn add watch-dir-safe
```

```sh
npm install watch-dir-safe
```

## API

### Usage
```ts
import watchFile from "watch-file-safe";

const watcher = watchFile("/path/to/dir");

watcher.onReady(() => {
  console.log(`Ready`);
}).onAdd((path: string) => {
  console.log(`Added ${path}`);
}).onChange((path: string) => {
  console.log(`Changed ${path}`);
}).onRemove((path: string) => {
  console.log(`Removed ${path}`);
}).onAddDir((path: string) => {
  console.log(`Added dir ${path}`);
}).onRemoveDir((path: string) => {
  console.log(`Added dir ${path}`);
});

// To stop watching:
watcher.stop();
```

### Types
```ts
import watchFile, { Watcher, EventCallback } from "watch-file-safe";

function watchFile(path: string): Watcher;

type EventCallback = (path: string) => void;

type Watcher = {
  onAdd: (cb: EventCallback) => Watcher;
  onRemove: (cb: EventCallback) => Watcher;
  onChange: (cb: EventCallback) => Watcher;
  onReady: (cb: () => void) => Watcher;
  stop: () => Promise<boolean>;
}
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/watch-file-safe.svg"></h2>

- [chokidar](https://www.npmjs.com/package/chokidar): A neat wrapper around node.js fs.watch / fs.watchFile / fsevents.

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/watch-dir-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): undefined

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/watch-dir-safe.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

<br />

## Related Packages

- [watch-dir-safe](https://www.npmjs.com/package/watch-dir-safe): Watch a directory for changes
- [read-dir-safe](https://www.npmjs.com/package/read-dir-safe): Read directories recursively or non-recursively
- [write-dir-safe](https://www.npmjs.com/package/write-dir-safe): Create directories and their parents recursively
- [remove-dir-safe](https://www.npmjs.com/package/remove-dir-safe): Remove directories recursively or non-recursively
