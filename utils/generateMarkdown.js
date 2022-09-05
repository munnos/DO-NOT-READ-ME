// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (`${license}` === "MIT") {
  licenseBadge = `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else if (`${license}` === "GPL 3.0") {
    licenseBadge = `![Github license](https://img.shields.io/badge/license-GPL%203.0-blue.svg)`;

  } else if (`${license}` === "BSD 3") {
    licenseBadge = `![GitHub license] (https://img.shields.io/badge/license-BSD--3--Clause-green.svg)`;

  }
    else if (`${license}` === "APACHE 2.0") {
      licenseBadge = `[![Github license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    } else {
      licenseBadge = "";
    }
  return licenseBadge;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseLink = "";
  if (`${license}` === "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT"; }

    else if (`${license}` === "GPL 3.0") {
      licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
    }
    else if (`${license}` === "BSD 3") {
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
    }
    else if (`${license}` === "APACHE 2.0") {
      licenseLink = `https://opensource.org/licenses/Apache-2.0`;
    } else {
      licenseLink = ""
    } return licenseLink

  };

  


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

${renderLicenseBadge(data.license)}


## Description

 ${data.description}

 
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Screenshot](${data.screenshot})
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.install}

## Usage

${data.use}

## Screenshot

![Screenshot](${data.screenshot})

## License

${renderLicenseLink(data.license)}

This project is under the license of ${data.license}.

## Contributing 

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions about this project, you can contact me at ${
  data.email
}. More of my projects are available here at: https://github.com/${data.github}.
`;
  
}


module.exports = generateMarkdown;