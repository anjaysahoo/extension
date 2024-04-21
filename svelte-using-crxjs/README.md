## Svelte CXRJS Setup for Extension

### Step-1
Refer `vanilla-js-using-cxrj` project for the setup.

Doc:
https://crxjs.dev/vite-plugin/getting-started/vanilla-js/create-project

### Step-2
Update `manifest.json` file
```json
{
  "manifest_version": 3,
  "name": "CRXJS Svelte Vite Example",
  "version": "1.0.0",
  "action": { "default_popup": "index.html" }
}

```

### Step-3

Update `vite.config.js` file
```js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        crx({ manifest })
    ],
})
```
