require('jest-specific-snapshot');
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

    describe(`Testing example: ${examplePath}`, () => {
      childProcess.execSync('yarn build', { cwd: examplePath });

      const distPath = path.join(examplePath, 'dist');
      fs.readdirSync(distPath).map(assetId => {
        test(`Testing asset: ${assetId}`, () => {
          expect(
            fs.readFileSync(path.join(distPath, assetId), 'utf-8')
          ).toMatchSpecificSnapshot(
            `__snapshots__/${categoryId}/${exampleId}/${assetId}`
          );
        });
      });
    });
  }
}
