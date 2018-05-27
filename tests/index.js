const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const pkgsExamples = require('../prototypes/example-info.json');
const protoPath = __dirname;
const rootPath = path.join(protoPath, '../');

for (const categoryId of Object.keys(pkgsExamples)) {
  const cotegory = pkgsExamples[categoryId];

  for (const exampleId of Object.keys(cotegory)) {
    const examplePath = path.join(rootPath, categoryId, exampleId);
    const assets = cotegory[exampleId].assets;

    if (!assets) {
      continue;
    } else {
      assets.push('index.html');
    }

    describe(`Testing example: ${examplePath}`, () => {
      childProcess.execSync('yarn build', { cwd: examplePath, });

      const distPath = path.join(examplePath, 'dist');
      assets.map(async asset => {
        test(`Testing asset: ${asset}`, () => {
          expect(
            fs.readFileSync(path.join(distPath, asset), 'utf-8')
          ).toMatchSnapshot();
        });
      });
    });
  }
}
