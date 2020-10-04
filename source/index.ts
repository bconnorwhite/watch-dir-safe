import { watch } from "chokidar";

export type EventCallback = (path: string) => void;

export type Watcher = {
  onAdd: (cb: EventCallback) => Watcher;
  onRemove: (cb: EventCallback) => Watcher;
  onChange: (cb: EventCallback) => Watcher;
  onAddDir: (cb: EventCallback) => Watcher;
  onRemoveDir: (cb: EventCallback) => Watcher;
  onReady: (cb: () => void) => Watcher;
  /**
   * Return `true` on success, `false` on errors.
   */
  stop: () => Promise<boolean>;
}

export default function watchFile(path: string): Watcher {
  const chokidar = watch(path);
  const watcher: Watcher = {
    onAdd: (cb: EventCallback) => {
      chokidar.on("add", cb);
      return watcher;
    },
    onChange: (cb: EventCallback) => {
      chokidar.on("change", cb);
      return watcher;
    },
    onRemove: (cb: EventCallback) => {
      chokidar.on("unlink", cb);
      return watcher;
    },
    onAddDir: (cb: EventCallback) => {
      chokidar.on("addDir", cb);
      return watcher;
    },
    onRemoveDir: (cb: EventCallback) => {
      chokidar.on("unlinkDir", cb);
      return watcher;
    },
    onReady: (cb: () => void) => {
      chokidar.on("ready", cb);
      return watcher;
    },
    stop: async () => {
      return chokidar.close().then(() => {
        return true;
      }).catch(() => {
        return false;
      });
    }
  }
  return watcher;
}
