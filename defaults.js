var conventionalCommitTypes = require('./types');

module.exports = {
  types: conventionalCommitTypes,
  projectKey: '',
  skipScope: false,
  customScope: false,
  maxHeaderWidth: 72,
  minHeaderWidth: 2,
  maxLineWidth: 100,
  issueKeyPrepend: '',
  issueKeyAppend: '',
  exclamationMark: false,
};
