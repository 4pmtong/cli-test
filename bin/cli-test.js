/**
 * @desc: cli-test
 * @author: 4pmtong
 * @date: 2017/12/18 14:42
 */

const _program = require('commander');
const _pkg = require('../package.json');

_program
.name('cli-test')
.version(_pkg.version)
.description(_pkg.description)
.command('init [name]')
.action(function (name) {
  console.log(name);
});
