# cz-conventional-changelog

Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) standard and also prompts for a mandatory issue.

## Features

- Works seamlessly with semantic-release 🚀

## Quickstart

### Installation

```bash
npm install commitizen @nois/newoceaninfosys
```

and then add the following to package.json:

```json
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/@nois/cz-conventional-changelog"
    }
  }
}
```

### Usage
[TBD]

## Configuration

Like commitizen, you can specify the configuration of cz-conventional-changelog through the package.json's `config.commitizen` key, or with environment variables.

| Environment variable | package.json    | Default           | Description                                                                                                                                                             |
|----------------------|-----------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CZ_PROJECT_KEY       | projectKey      | undefined         | A default project key for issue.                                                                                                                                        |
| CZ_MAX_HEADER_WIDTH  | maxHeaderWidth  | 72                | This limits how long a commit message head can be.                                                                                                                      |
| CZ_MIN_HEADER_WIDTH  | minHeaderWidth  | 2                 | This limits how short a commit message can be.                                                                                                                          |
| CZ_MAX_LINE_WIDTH    | maxLineWidth    | 100               | Commit message bodies are automatically wrapped. This decides how long the lines will be.                                                                               |
| CZ_SKIP_SCOPE        | skipScope       | true              | If scope should be used in commit messages.                                                                                                                             |
|                      | scopes          | undefined         | A list (JS Array) of scopes that will be available for selection. Note that adding this will change the scope field from Inquirer 'input' to 'list'.                    |
| CZ_TYPE              | defaultType     | undefined         | The default type.                                                                                                                                                       |
| CZ_SCOPE             | defaultScope    | undefined         | The default scope.                                                                                                                                                      |
| CZ_CUSTOM_SCOPE      | customScope     | false             | Whether user can provide custom scope in addition to predefined ones                                                                                                    |
| CZ_SUBJECT           | defaultSubject  | undefined         | A default subject.                                                                                                                                                      |
| CZ_BODY              | defaultBody     | undefined         | A default body.                                                                                                                                                         |
| CZ_ISSUES            | defaultIssues   | undefined         | A default issue.                                                                                                                                                        |
| CZ_ISSUE_KEY_PREPEND | issueKeyPrepend | ""                | Prepends ISSUE ID with an optional decorator. e.g.: `[DAZ-1234`                                                                                                         |
| CZ_ISSUE_KEY_APPEND  | issueKeyAppend  | ""                | Appends ISSUE ID with an optional decorator. e.g.: `DAZ-1234]`                                                                                                          |
| CZ_EXCLAMATION_MARK  | exclamationMark | false             | On breaking changes, adds an exclamation mark (!) after the scope, e.g.: `type(scope)!: break stuff`. When activated, reduces the effective allowed header length by 1. |

## Dynamic Configuration

Alternatively, if you want to create your own profile, you can use the _configurable_ approach.
Here is an example:
**./index.js**
```javascript
const custom = require('@nois/cz-conventional-changelog/configurable');
// You can do this optionally if you want to extend the commit types
const defaultTypes = require('@nois/cz-conventional-changelog/types');

module.exports = custom({
  types: {
    ...defaultTypes,
    perf: {
      description: 'Improvements that will make your code perform better',
      title: 'Performance'
    }
  },
  skipScope: false,
  scopes: ['myScope1', 'myScope2'],
  customScope: true
});
```
**./package.json**
```json
{
  "config": {
    "commitizen": {
      "path": "./index.js"
    }
  }
}
```

This example would:
* Display _"perf"_ as an extra commit type
* Ask you to add a commit scope
* Limit the scope selection to either `myScope` or `myScope2`

List of all supported configurable options when using the _configurable_ approach:

| Key             | Default           | Description                                                                                                                                                                                                                                  |
|-----------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| projectKey      | true              | A default project key for issue.                                                                                                                                                                                                             |
| maxHeaderWidth  | 72                | This limits how long a commit message head can be.                                                                                                                                                                                           |
| minHeaderWidth  | 2                 | This limits how short a commit message can be.                                                                                                                                                                                               |
| maxLineWidth    | 100               | Commit message bodies are automatically wrapped. This decides how long the lines will be.                                                                                                                                                    |
| skipScope       | true              | If scope should be used in commit messages.                                                                                                                                                                                                  |
| defaultType     | undefined         | The default type.                                                                                                                                                                                                                            |
| defaultScope    | undefined         | The default scope.                                                                                                                                                                                                                           |
| defaultSubject  | undefined         | A default subject.                                                                                                                                                                                                                           |
| defaultBody     | undefined         | A default body.                                                                                                                                                                                                                              |
| defaultIssues   | undefined         | A default issue.                                                                                                                                                                                                                             |
| types           | ./types.js        | A list (JS Object) of supported commit types.                                                                                                                                                                                                |
| scopes          | undefined         | A list (JS Array) of scopes that will be available for selection. Note that adding this will change the scope field from Inquirer 'input' to 'list'.                                                                                         |
| customScope     | false             | If this is set to true, users are given an option to provide custom scope aside the ones predefined in 'scopes' array. In this case a new option named 'custom' appears in the list and once chosen a prompt appears to provide custom scope |
| issueKeyPrepend | ""                | Prepends ISSUE ID with an optional decorator. e.g.: `[DAZ-1234`                                                                                                                                                                              |
| issueKeyAppend  | ""                | Appends ISSUE ID with an optional decorator. e.g.: `DAZ-1234]`                                                                                                                                                                               |
| exclamationMark | false             | On breaking changes, adds an exclamation mark (!) after the scope, e.g.: `type(scope)!: break stuff`. When activated, reduces the effective allowed header length by 1.                                                                      |


### Commitlint

If using the [commitlint](https://github.com/conventional-changelog/commitlint) js library, the "maxHeaderWidth" configuration property will default to the configuration of the "header-max-length" rule instead of the hard coded value of 72. This can be ovewritten by setting the 'maxHeaderWidth' configuration in package.json or the CZ_MAX_HEADER_WIDTH environment variable.

### Reference
- Fork of https://github.com/newoceaninfosys/cz-conventional-changelog
