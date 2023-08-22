// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'Boost') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'CCO') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache') {
    return 'This application is covered under Apache 2.0 license'
  } else if (license === 'Boost') {
    return 'This application is covered under Boost software license'
  } else if (license === 'BSD') {
    return 'This application is covered under BSD 3-clause license'
  } else if (license === 'CCO') {
    return 'This application is covered under Creative commons license'
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, tableOfContents, installation, usage, credits, license}) {
return `# ${title} 

${renderLicenseBadge(license)}
## description
${description}

## table of contents
${tableOfContents}

## istallation
${installation}

## usage
${usage}

## credits
${credits}

## license
${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
