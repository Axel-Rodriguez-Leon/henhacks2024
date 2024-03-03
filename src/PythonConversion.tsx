import {exec} from 'child_process'
//if you don't use module use this line instead:
// const { exec } = require('child_process')

exec('python3 ./../backend/ollamatest.py', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
  }
  else if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
  else {
    console.log(stdout);
  }
})