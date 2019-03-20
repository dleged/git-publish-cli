'use strict';

const { exec,exit } = require('./helpers');
const chalk = require('chalk');

let message = [].slice.apply(process.argv)[2];

console.log(message);
