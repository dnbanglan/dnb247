import fs from 'node:fs';

const filesToUpdate = [
  'public/dnbangla-photocard-engine.html',
  'public/github-package/index.html'
];

filesToUpdate.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. Remove the HTML UI block for Category / Tag
  const categoryBlockRegex = /<!--\s*ক্যাটাগরি \/ ট্যাগ কন্ট্রোল\s*-->[\s\S]*?<\/div>\s*<\/div>\s*(?=<!--\s*Date Controls)/g;
  if (categoryBlockRegex.test(content)) {
    content = content.replace(categoryBlockRegex, '');
    console.log('Removed category UI block from', filePath);
  } else {
    // Alternative match by label
    const altRegex = /<div class="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2">\s*<div class="flex items-center justify-between">\s*<label class="text-xs font-bold text-slate-200">ক্যাটাগরি \/ ট্যাগ \(ডিএন বাংলা\)<\/label>[\s\S]*?<\/div>\s*<\/div>/g;
    content = content.replace(altRegex, '');
    console.log('Removed category UI block via alt regex from', filePath);
  }

  // 2. Remove canvas drawing logic for the category badge
  const canvasBadgeRegex = /if\s*\(\s*document\.getElementById\(['"]toggle-category-badge['"]\)\s*\?\.\s*checked|if\s*\(\s*document\.getElementById\(['"]toggle-category-badge['"]\)\.checked\s*\)\s*\{[\s\S]*?ctx\.fillText\s*\(\s*catText[\s\S]*?\}\s*\}/g;
  content = content.replace(canvasBadgeRegex, '');

  // 3. Clean up sendScheduleToHeadline safely
  content = content.replace(
    /document\.getElementById\(['"]input-category['"]\)\.value\s*=\s*categoryTitle;/g,
    '/* category option removed */'
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Successfully updated', filePath);
});
