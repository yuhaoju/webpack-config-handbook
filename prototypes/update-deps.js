require('colors');
const fs = require('fs');
const path = require('path');

const protoPath = __dirname;
const rootPath = path.join(protoPath, '../');

const pkgsExamples = require('./pkgs-example.json');
const pkgsTemplate = fs.readFileSync(
  path.join(protoPath, './pkgs-template.json'),
  'utf-8'
);

Object.keys(pkgsExamples).forEach(categoryId => {
  const cotegory = pkgsExamples[categoryId];
  Object.keys(cotegory).forEach(exampleId => {
    const exmapleDeps = cotegory[exampleId];
    const newPkgContent = JSON.parse(
      pkgsTemplate.replace('${{example-name}}', exampleId)
    );
    newPkgContent.dependencies = Object.assign(
      newPkgContent.dependencies,
      exmapleDeps
    );

    const pkgJsonPath = path.join(
      rootPath,
      categoryId,
      exampleId,
      'package.json'
    );

    if (isFileExists(pkgJsonPath)) {
      fs.writeFileSync(
        pkgJsonPath,
        JSON.stringify(newPkgContent, null, '  '),
        'utf-8'
      );
    } else {
      console.log(`[Error] not found ${pkgJsonPath}`.red);
    }

    console.log(`[Updated] ${pkgJsonPath}`.green);
  });
});

function isFileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}
