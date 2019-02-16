require('colors');
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [{ name: 'src', type: String, defaultOption: true }];
const { src: workPath } = commandLineArgs(optionDefinitions);

start();

async function start() {
  if (!workPath) {
    return console.log('You need to specify an example path'.red);
  }

  const yarnlockPath = path.join(workPath, 'yarn.lock');
  if (workPath && fs.existsSync(yarnlockPath)) {
    const execOpt = { cwd: workPath, stdio: 'inherit' };
    childProcess.execSync('yarn', execOpt);
    childProcess.execSync('yarn dev', execOpt);
  } else {
    return console.log('Not an example directory'.red);
  }
}
