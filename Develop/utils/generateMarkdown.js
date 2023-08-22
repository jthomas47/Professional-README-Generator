// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case 'CCO':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    case '':
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)'
    case 'Boost':
      return '(https://www.boost.org/LICENSE_1_0.txt)'
    case 'BSD':
      return '(https://opensource.org/licenses/BSD-3-Clause)'
    case 'CCO':
      return '(http://creativecommons.org/publicdomain/zero/1.0/)'
    case '':
      return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache':
      return 'This application is covered under the Apache 2.0 license'
    case 'Boost':
      return 'This application is covered under the Boost software license'
    case 'BSD':
      return 'This application is covered under the BSD 3-clause license'
    case 'CCO':
      return 'This application is covered under the Creative commons license'
    case '':
      return ''
  }
}

//function that returns the table of contents section of the README
function renderTableOfContents(tableOfContents) {
  let returnString = '';
  tableOfContents.forEach(option => {
    returnString += `[${option}](#${option})  
    `
  });
  return returnString

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, tableOfContents, installation, usage, credits, license }) {
  return `# ${title} 

${renderLicenseBadge(license)}

## Description
${description}

## Table Of Contents
${renderTableOfContents(tableOfContents)}

## Istallation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${renderLicenseSection(license)} ${renderLicenseLink(license)}

`;
}

module.exports = generateMarkdown;
