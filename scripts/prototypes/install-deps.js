require('colors');
const path = require('path');
const childProcess = require('child_process');

const protoPath = __dirname;
const rootPath = path.join(protoPath, '../../');

const pkgsExamples = require('./static/example-info.json');

install();

async function install() {
  const errors = [];

  for (const categoryId of Object.keys(pkgsExamples)) {
    const cotegory = pkgsExamples[categoryId];

    for (const exampleId of Object.keys(cotegory)) {
      const examplePath = path.join(rootPath, categoryId, exampleId);
      await new Promise((resolve, reject) => {
        console.log('Installing in', examplePath);
        try {
          childProcess.exec(
            'yarn install --non-interactive',
            { cwd: examplePath },
            (err, stdout) => {
              if (err) {
                reject(err);
              }

              console.log(stdout);
              if (stdout.includes('Done')) {
                resolve();
              }
            }
          );
        } catch (e) {
          errors.push(e);
          reject(e);
        }
      });
    }
  }

  if (errors.length > 0) {
    console.log(errors);
  }
}
