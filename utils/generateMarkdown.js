function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GNU General Public License v3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "The Unlicense") {
    return "http://unlicense.org/";
  }
}

function renderLicenseSection(license) {
  return `This project is licensed under [${license}](${renderLicenseLink(
    license
  )}).`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 

${data.installation}

## Usage 

${data.usage}

## License  

${renderLicenseSection(data.license)} 

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}

`;
}

module.exports = generateMarkdown;
