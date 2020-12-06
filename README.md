# dwebx-serve-resolve-path

dBrowser's method to find the file to serve in dwebx:// requests

```js
const dwebxServeResolvePath = require('@dbrowser/dwebx-serve-resolve-path')

var entry = await dwebxServeResolvePath(archive, manifest, url, acceptHeader)
console.log(entry) /* => {
  path: '...',
  isDirectory(),
  isFile(),
  ...
}
```

Pass in:

 - `archive` The DWebXArchive to read from.
 - `manifest` The dwebx archive's dwebx.json manifest (optional)
 - `url` The request URL (can be pre-parsed by `parse-dwebx-urls`). If passing the URL, include the FULL url (hostname too).
 - `acceptHeader` The request Accept header.

Returns a `Stat` object with the `.path` string added. Will return `null` if no matching file is found.

### In the browser

Run `npm run build` to output `dist.js`. This bundle will set `window.dwebxServeResolvePath()` when included.