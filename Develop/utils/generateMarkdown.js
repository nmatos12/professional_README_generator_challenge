// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
    if (license === 'Apache 2.0') {
        badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    } else if (license === 'Boost') {
        badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
    } else if (license === 'GNU APGL v3') {
        badge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`
    } else if (license === 'MIT') {
        badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (license === 'Perl') {
        badge = `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
    } else {
        badge = ''
    }
    return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'None'){
        return'';
    }
    return `## License
    This project is registered under the [$(license) License]($(renderLicenseLink(license)))`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${data.description}

  ## ${data.installation}

  ## ${data.usage}

  ## ${data.credits}

  ## ${data.license}

`;
}

module.exports = generateMarkdown;
