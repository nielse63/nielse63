# `@nielse63/kebabcase`

> Transform any string into kebab case

## Installation

Install with Yarn or npm

```bash
yarn add --dev @nielse63/kebabcase
npm install --dev @nielse63/kebabcase
```

## Usage

```js
const kebabcase = require('@nielse63/kebabcase');

const output = kebabcase('SomeStringOfMine');
// "some-string-of-mine"
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
