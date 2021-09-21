'use strict'

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
}

// Text + chalk definitions
const data = {
    name: chalk.white('               Ashraf Ahmed'),
    handle: chalk.white('ashraf'),
    work: chalk.white('Junior web-developer'),
    // opensource: chalk.white('Node.js Community Committee ') + chalk.green('⬢'),
    facebook: chalk.white.dim('https://facebook.com/') + chalk.cyan('4SHR4.S4L3H'),
    npm: chalk.white.dim('https://npmjs.com/') + chalk.red('~ashr4f'),
    github: chalk.white.dim('https://github.com/') + chalk.green('ashr4f'),
    linkedin: chalk.white.dim('https://linkedin.com/in/') + chalk.blue('ashr4f'),
    web: chalk.cyan('https://ashr4f.github.io/'),
    npx: chalk.red('npx') + ' ' + chalk.white('ashraf'),
    labelWork: chalk.white.bold('       Work:'),
    // labelOpenSource: chalk.white.bold('Open Source:'),
    labelFacebook: chalk.white.bold('   Facebook:'),
    labelnpm: chalk.white.bold('        npm:'),
    labelGitHub: chalk.white.bold('     GitHub:'),
    labelLinkedIn: chalk.white.bold('   LinkedIn:'),
    labelWeb: chalk.white.bold('        Web:'),
    labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
// const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelFacebook}  ${data.facebook}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
    newline + newline + // Add one whole blank line
    working + newline + // data.labelWork + data.work
    // opensourcing + newline + newline + // data.labelOpenSource + data.opensource
    twittering + newline + // data.labelFacebook + data.facebook
    npming + newline + // data.labelnpm + data.npm
    githubing + newline + // data.labelGitHub + data.github
    linkedining + newline + // data.labelLinkedIn + data.linkedin
    webing + newline + newline + // data.labelWeb + data.web
    carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.yellow(boxen(output, options)))
