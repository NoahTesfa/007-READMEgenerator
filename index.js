const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title?'
  }, {
    type: 'input',
    name: 'Description',
    message: 'What is the description?'
  }, {
    type: 'input',
    name: 'Installation',
    message: 'What are the installation instructions?',
    default: 'npm i',
  }, {
    type: 'input',
    name: 'Usage',
    message: 'What is the usage information?'
  }, {
    type: 'list',
    name: 'License',
    message: 'Choose a license:',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  }, {
    type: 'input',
    name: 'Contribution',
    message: 'What are the contributing guidelines?'
  }, {
    type: 'input',
    name: 'Test',
    message: 'What are the test instructions?',
    default: 'npm test',
  }, {
    type: 'input',
    name: 'questionsGithub',
    message: 'Type in your GitHub Username:'
  }, {
    type: 'input',
    name: 'questionsEmail',
    message: 'Type in your email address:'
  }

])
  .then(res => {
    let body = `
# ${res.Title}

## Description
${res.Description}
## Installation
${res.Installation}
## Usage
${res.Usage}
## Credits
${res.Contribution}
## License
${res.License}
## Questions
You can visit my GitHub at: ${res.questionsGithub}
or
You can email me at: ${res.questionsEmail}
      `
    fs.writeFile('README.md', body, err => {
      if (err) { console.log(err) }
    })
  })
  .catch(err => console.log(err))
