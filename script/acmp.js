'use strict';

const { exec,exit } = require('./helpers');
const chalk = require('chalk');

let message = [].slice.apply(process.argv)[2] || 'Daily Development';
exec(`git add . && git commit -m ${message} && git push`);
