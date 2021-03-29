// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `hello`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = '') {
    return;
  } else {
    return `
    ## License
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title} by ${data.name}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Questions](#questions)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.usage}

  ## Questions
  Github:
  github.com/${data.github}
  ${data.email}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
