import fs from 'node:fs';

const patchScript = `  <script>
    (function() {
      try {
        var origFetch = window.fetch;
        var currentFetch = typeof origFetch === 'function' ? origFetch.bind(window) : null;
        var desc = {
          get: function() { return currentFetch; },
          set: function(val) { currentFetch = val; },
          configurable: true,
          enumerable: true
        };
        Object.defineProperty(window, 'fetch', desc);
        if (typeof Window !== 'undefined' && Window.prototype) {
          try {
            Object.defineProperty(Window.prototype, 'fetch', desc);
          } catch (e) {}
        }
      } catch (err) {}
    })();
  </script>\n`;

['public/dnbangla-photocard-engine.html', 'public/github-package/index.html'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes('var currentFetch = typeof origFetch')) {
      content = content.replace('<head>', '<head>\n' + patchScript);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Patched', filePath);
    }
  }
});
