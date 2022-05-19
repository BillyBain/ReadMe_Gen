const inquirer = require("inquirer");
const fs = require("fs");



const readMe = ({name, description, license, install, use, contribute, test, git, email, contact}, licenseImage, licenseLink) => 

function() {
    if (license === 'GPL') {
        licenseLink = '[GPL Wiki](https://en.wikipedia.org/wiki/GNU_General_Public_License#)'
        licenseImage = '![GPLv3_Logo](https://user-images.githubusercontent.com/100814286/169187075-73f0be8d-7775-42b2-87c2-034f7ff1fa08.png)';
        return `${licenseImage}
# ${name}

## Table of Contents
- [Descrpition](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution_guidelines)
- [Test Instructions](#test_instructions)
- [Questions](#questions)

# Descrpition
${description}
# License
${licenseLink}
# Installation
${install}
# Usage
${use}
# Contribution Guidelines
${contribute}
# Test Instructions
${test}
# Questions
If there are any other question feel free to contact me at:
- My Git Hub: [${git}](https://github.com/${git})
- My email address: ${email}
- Other ways to contact me: ${contact}
`;
    } else if (license === 'MIT') {
        licenseLink = '[MIT Wiki](https://en.wikipedia.org/wiki/MIT_License#)';
        licenseImage = '![MIT_logo](https://user-images.githubusercontent.com/100814286/169187073-f947d05c-514f-4e0f-8bd2-0075e6abdda8.png)';
        return `${licenseImage}
# ${name}

## Table of Contents
- [Descrpition](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution_guidelines)
- [Test Instructions](#test_instructions)
- [Questions](#questions)

# Descrpition
${description}
# License
${licenseLink}
# Installation
${install}
# Usage
${use}
# Contribution Guidelines
${contribute}
# Test Instructions
${test}
# Questions
If there are any other question feel free to contact me at:
- My Git Hub: [${git}](https://github.com/${git})
- My email address: ${email}
- Other ways to contact me: ${contact}
`;
    } else if (license === 'Apache') {
        licenseLink = '[Apache Wiki](https://en.wikipedia.org/wiki/Apache_License#)';
        licenseImage = '![ASF_Logo](https://user-images.githubusercontent.com/100814286/169186886-5626af2a-4d59-46b1-8c5f-797e8ccb3917.png)';
        return `${licenseImage}
# ${name}

## Table of Contents
- [Descrpition](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution_guidelines)
- [Test Instructions](#test_instructions)
- [Questions](#questions)

# Descrpition
${description}
# License
${licenseLink}
# Installation
${install}
# Usage
${use}
# Contribution Guidelines
${contribute}
# Test Instructions
${test}
# Questions
If there are any other question feel free to contact me at:
- My Git Hub: [${git}](https://github.com/${git})
- My email address: ${email}
- Other ways to contact me: ${contact}
`;
    } else {
        licenseLink = '[OpenBSD Wiki](https://en.wikipedia.org/wiki/OpenBSD#)';
        licenseImage = '![OpenBSD_Logo](https://user-images.githubusercontent.com/100814286/169187074-b580e742-dd0d-4ce0-90ad-915cfa65732d.png)';
        return `${licenseImage}
# ${name}

## Table of Contents
- [Descrpition](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution_guidelines)
- [Test Instructions](#test_instructions)
- [Questions](#questions)

# Descrpition
${description}
# License
${licenseLink}
# Installation
${install}
# Usage
${use}
# Contribution Guidelines
${contribute}
# Test Instructions
${test}
# Questions
If there are any other question feel free to contact me at:
- My Git Hub: [${git}](https://github.com/${git})
- My email address: ${email}
- Other ways to contact me: ${contact}
`;
    }
}

`${licenseImage}
# ${name}

## Table of Contents
- [Descrpition](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution_guidelines)
- [Test Instructions](#test_instructions)
- [Questions](#questions)

# Descrpition
${description}
# License
${licenseLink}
# Installation
${install}
# Usage
${use}
# Contribution Guidelines
${contribute}
# Test Instructions
${test}
# Questions
If there are any other question feel free to contact me at:
- My Git Hub: [${git}](https://github.com/${git})
- My email address: ${email}
- Other ways to contact me: ${contact}
`

inquirer 
    .prompt([
        {
        type: 'input',
        message: "What is Title of the Project?",
        name: 'name',
        },
        {
        type: 'input',
        message: "Write a breif description.",
        name: 'description',
        },
        {
        type: 'list',
        message: 'Does it have any license?',
        name: 'license',
        choices: ['GPL', 'MIT', 'Apache', 'OpenBSD']
        },
        {
            type: 'input',
            message: 'Are there any installation instructions?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What is it usaged?',
            name: 'use',
        },
        {
            type: 'input',
            message: 'How can you contributed to this project?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'git',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Any other way to contact?',
            name: 'contact',
        },
    ])
    .then((answers => {
    const info = readMe(answers);
    fs.writeFile('README.md', info, (err) => 
    err ? console.log(err) : console.log('Success!'))
    }));
        
   