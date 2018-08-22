# `@nielse63/throttle`

> Creates a throttled function that's evoked only as frequently as you want it to

[![Known Vulnerabilities](https://snyk.io/test/github/nielse63/nielse63/badge.svg?targetFile=packages%2Fthrottle%2Fpackage.json)](https://snyk.io/test/github/nielse63/nielse63?targetFile=packages%2Fthrottle%2Fpackage.json)

## Installation

Install with Yarn or npm

```bash
yarn add --dev @nielse63/throttle
npm install --save-dev @nielse63/throttle
```

## Usage

```js
const throttle = require('@nielse63/throttle');

function callback() {
  // some expensive function...
}

window.addEventListener('scroll', throttle(callback, 150), false);
// `callback` is only executed once every 150ms
```

## API

### `debounce(callback[, delay, immediate])`

<!-- markdownlint-disable MD013 -->
| Name     | Type     | Description                               | Default   |
| :------- | :------- | :---------------------------------------- | :-------- |
| callback | Function | Callback to execute after `delay` ms      | undefined |
| wait     | Number   | Delay, in ms, before executing `callback` | 250       |
<!-- markdownlint-enable MD013 -->

### Return Value

`Function` - The wrapper to execute the callback

## Contributing

### Development Setup

This project uses a monorepo setup that requires using Yarn because it
relies on
[Yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/).
Clone the repo and install the dependencies:

```bash
git clone https://github.com/nielse63/nielse63.git
cd nielse63
yarn
```

## License

[MIT](https://github.com/nielse63/nielse63/blob/master/LICENSE) © [Erik Nielsen](https://312development.com)
