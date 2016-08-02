# try-expression

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Build Status](https://travis-ci.org/phuu/try-expression.svg?branch=master)](https://travis-ci.org/phuu/try-expression)

JavaScript's try statement as an expression.

## Install

```
npm install --save try-expression
```

## Use

Try some code out and deal with an error, like `try-catch`:

```js
import tryy from "try-expression";

const result = tryy(
  () => doRiskyThing(),
  error => {
    logError(error);
    return 'Sorry!';
  }
); // => 'Sorry!'
```

Fall back to a value if there's an error:

```js
import tryy from "try-expression";

const config = tryy(
  () => loadConfig(),
  { squibbles: 4 }
); // => { squibbles: 4 }
```

Run some code to clean up, like `try-catch-finally`:

```js
import tryy from "try-expression";

const result = tryy(
  () => ['Success', readFile()],
  err => ['Failure', err],
  () => closeFile()
); // => ['Failure', err];
```

Note that, to avoid [confusing JavaScript behaviour](http://eslint.org/docs/rules/no-unsafe-finally) you *cannot* return a value from `finally`.

## Development

```
$ npm install
$ npm test
```

Commit messages should follow the [Angular commit message guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).

### Release

This repository uses [semantic-release](https://github.com/semantic-release/semantic-release). Changes will automatically be released to npm.
