// Renders license badge. Returns empty string if no license.
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (`${license}` === "MIT") {
    licenseBadge = `![MIT license badge](https://img.shields.io/badge/license-MIT-blue.svg)`;
  } else if (`${license}` === "GPL 3.0") {
    licenseBadge = `![GPL 3.0 license badge](https://img.shields.io/badge/license-GPL%203.0-blue.svg)`;
  } else if (`${license}` === "BSD 3") {
    licenseBadge = `![BSD 3 license badge] (https://img.shields.io/badge/license-BSD--3--Clause-green.svg)`;
  } else if (`${license}` === "APACHE 2.0") {
    licenseBadge = `[![APACHE 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// Renders link to license page. Returns empty string if no license.
function renderLicenseLink(license) {
  let licenseLink = "";
  if (`${license}` === "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (`${license}` === "GPL 3.0") {
    licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (`${license}` === "BSD 3") {
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
  } else if (`${license}` === "APACHE 2.0") {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`;
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// Renders applicable disclaimer depending on license user has selected. Returns empty string if no license.
function renderLicenseSection(license) {
  let licenseReadme = "";
  if (`${license}` === "MIT") {
    licenseReadme = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of 
the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (`${license}` === "GPL 3.0") {
    licenseReadme = ` This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  } else if (`${license}` === "BSD 3") {
    licenseReadme = `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
    INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  } else if (`${license}` === "APACHE 2.0") {
    licenseReadme = ` Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
  } else {
    licenseReadme = "";
  }
  return licenseReadme;
}

// Function to generate readme markdown file with user input
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

${renderLicenseSection(data.license)}

${data.license} Copyright 2022 ${data.name}.

## Contributing 

${data.contribution}

## Tests

${data.test}

## Questions

If you have any queries regarding this project, you can contact me at ${
    data.email
  }. My projects are available at: https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
