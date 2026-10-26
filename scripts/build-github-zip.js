import fs from 'node:fs';
import path from 'node:path';
import JSZip from 'jszip';

async function buildZip() {
  const zip = new JSZip();
  const rootDir = path.resolve('public/github-package');
  const outputFile = path.resolve('public/dnbangla-photocard-github-ready.zip');

  function addDir(currentDir, relativePath = '') {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const entryRelPath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        addDir(fullPath, entryRelPath);
      } else {
        const content = fs.readFileSync(fullPath);
        zip.file(entryRelPath, content);
      }
    }
  }

  addDir(rootDir);

  const content = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });

  fs.writeFileSync(outputFile, content);
  console.log(`Successfully built zip: ${outputFile} (${content.length} bytes)`);
}

buildZip().catch(console.error);
