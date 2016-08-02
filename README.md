# try-expression

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Build Status](https://travis-ci.org/phuu/try-expression.svg?branch=master)](https://travis-ci.org/phuu/try-expression)

JavaScript "if" as an expression.

## Install

```
npm install --save try-expression
```

## Use

Run some code if the predicate is true:

```js
import tryy from "try-expression";

const message = tryy(
  true,
  () => "Cool!"
); // => Cool!
```

Run some other code if the predicate's false:

```js
import tryy from "try-expression";

const message = tryy(
  false,
  () => "Cool!",
  () => "Not so cool."
); // => Not so cool.
```

Check many things!

```js
import tryy from "try-expression";

const message = tryy(
  false,
  () => "Cool!",
  true,
  () => "Pretty cool!",
  () => "Not so cool."
; // => Pretty cool!
```

Just return a value if everything is falsey:

```js
import tryy from "try-expression";

const message = tryy(
  false,
  () => "Cool!",
  false,
  () => "Pretty cool!",
  "Not too shabby!"
); // => Not too shabby!
```

## What to do if this makes you nervous...

It can act like a statement too!

```js
import tryy from "try-expression";

let message;
tryy(true, () => {
  message = "Cool!";
}, () => {
  message = "Not so cool.";
});
```

## Development

```
$ npm install
$ npm test
```

Commit messages should follow the [Angular commit message guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).

### Release

This repository uses [semantic-release](https://github.com/semantic-release/semantic-release). Changes will automatically be released to npm.
