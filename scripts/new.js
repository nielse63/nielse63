const fs = require('fs');
const path = require('path');
const copydir = require('copy-dir');
const globby = require('globby');

function snakeCase(string) {
  return string.replace(/-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g, match => match.slice(1).toUpperCase());
}

const type = process.argv[2];
const name = process.argv[3];
const snakeName = snakeCase(name);
const templateDir = path.resolve(__dirname, '../templates/{{package}}');
const destDir = path.resolve(__dirname, `../packages/${name}`);

if (type !== 'package') {
  console.error('Only packages are supported at this time');
  process.exit(1);
}

copydir(templateDir, destDir, async (err) => {
  if (err) throw err;
  const paths = await globby([`${destDir}/**/*`]);
  paths.forEach((filepath) => {
    const content = fs.readFileSync(filepath, 'utf8');
    const output = content
      .replace(/{{package}}/g, name)
      .replace(/{{snakeName}}/g, snakeName);
    fs.writeFileSync(filepath, output, 'utf8');
    if (filepath.includes('{{package}}')) {
      const newFilePath = filepath.replace('{{package}}', name);
      fs.renameSync(filepath, newFilePath);
    }
  });
});
