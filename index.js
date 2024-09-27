const decode = require('heic-decode-1.18');
const formats = require('./formats-node.js');
const { one, all } = require('./lib.js')(decode, formats);

module.exports = one;
module.exports.all = all;
