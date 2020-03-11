#!/usr/bin/env node

const { mdlinks } = require('./index.js');
const path = process.argv[2];
const options = {
  validate: process.argv.includes('--validate') || process.argv.includes('-v'),
  stats: process.argv.includes('--stats') || process.argv.includes('-s'),
}
mdlinks(path, options).then((data)=> {
  console.log(data);
}).catch((err)=> {
  console.log(err);
})