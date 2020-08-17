// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
    
  ## Description
  ${data.description}

  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please email me at ${data.questions}

  ## Github 
  Follow my repository at https://github.com/${data.username}  
`;
}

module.exports = generateMarkdown;
