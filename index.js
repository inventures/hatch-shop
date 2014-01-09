var compound = require('compound');

module.exports = function (parent) {
    return compound.createServer({ root: __dirname });
};
