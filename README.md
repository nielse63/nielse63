# nielse63

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Build Status](https://travis-ci.org/nielse63/nielse63.svg?branch=master)](https://travis-ci.org/nielse63/nielse63)
[![Coverage Status](https://coveralls.io/repos/github/nielse63/nielse63/badge.svg?branch=master)](https://coveralls.io/github/nielse63/nielse63?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/35a7987502cef49a34c7/maintainability)](https://codeclimate.com/github/nielse63/nielse63/maintainability)
[![Greenkeeper badge](https://badges.greenkeeper.io/nielse63/nielse63.svg)](https://greenkeeper.io/)

<!-- markdownlint-disable MD033 -->
<img src="logo.png" height="100" align="right">
<!-- markdownlint-enable MD033 -->

> A big ole' monorepo of utility and helper modules

## Packages

### String

- [@nielse63/capitalize](https://github.com/nielse63/nielse63/tree/master/packages/capitalize)
- [@nielse63/kebabcase](https://github.com/nielse63/nielse63/tree/master/packages/kebabcase)
- [@nielse63/titlecase](https://github.com/nielse63/nielse63/tree/master/packages/titlecase)

### Concurrency

- [@nielse63/debounce](https://github.com/nielse63/nielse63/tree/master/packages/debounce)

### Linter Configs

- [@nielse63/eslint-config](https://github.com/nielse63/nielse63/tree/master/packages/eslint-config)

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

### Testing

```bash
yarn test
```

This will run the test suite and provide you with a coverage report.

## License

[MIT](https://github.com/nielse63/nielse63/blob/master/LICENSE) © [Erik Nielsen](https://312development.com)
