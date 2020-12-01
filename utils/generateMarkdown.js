// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ---
  ${data.description}

  ## Table of Contents 
  --- 
  [Installation](#installation)
  
  [Usage](#usage)
  
  [Contributing](#contribution)

  [Tests](#test)

  [Questions](#Questions)

  [License](#license)
  
  ## Installation
  ---
  ${data.installation}

  ## Usage
  ---
  ${data.usage}

  ## Contributing
  ---
  ${data.contribution}

  ## Test
  ---
  ${data.test}

  ## Questions
  --
  To reach me with additional questions please contact me with one of the following below.
  * My github profile - [Github Link](https://github.com/${data.github})
  * Email - <${data.email}>

 ## License
  ---
  Licensed under the ${data.license} license.

  `;
}

module.exports = generateMarkdown;
