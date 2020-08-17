// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
    # Description
    ${data.description}

    # Table of contents
      - [Description](#description)
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributors](#contributors)
      - [Tests](#tests)
      - [Questions](#questions)

    # Installation
    ${data.installation}

    # Usage
    ${data.usage}

    # License
    ${data.license}

    # Contributors
    ${data.contributors}

    # Tests
    ${data.tests}

    # Questions
    ${data.questions}

    # Github
    ---  
    Github profile: https://github.com/${data.username}  
`;
}

module.exports = generateMarkdown;
