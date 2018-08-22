# `titlecase`

> Capitalize the first letter of each word

[![Known Vulnerabilities](https://snyk.io/test/github/nielse63/nielse63/badge.svg?targetFile=packages%2Ftitlecase%2Fpackage.json)](https://snyk.io/test/github/nielse63/nielse63?targetFile=packages%2Ftitlecase%2Fpackage.json)

## Installation

Install with Yarn or npm

```bash
yarn add --dev @nielse63/titlecase
npm install --save-dev @nielse63/titlecase
```

## Usage

```js
const titlecase = require('@nielse63/titlecase');

const output = titlecase('some string of mine');
// "Some String Of Mine"
```

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
