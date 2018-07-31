const fs = require('fs');
const globby = require('globby');
const remark = require('remark');
const license = require('remark-license');

const licenseURL = '(https://github.com/nielse63/nielse63/blob/master/LICENSE)';

(async () => {
  const paths = await globby(['*.md', 'packages/*/*.md']);
  paths.forEach((filepath) => {
    remark()
      .use(license)
      .process(fs.readFileSync(filepath), (err, file) => {
        if (err) throw err;
        const content = String(file)
          .replace(/\(LICENSE\)/, licenseURL);
        fs.writeFileSync(filepath, content, 'utf8');
      });
  });
})();
