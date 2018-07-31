# `@nielse63/debounce`

> Lightweight debounce function for node

## Installation

Install with Yarn or npm

```bash
yarn add --dev @nielse63/debounce
npm install --dev @nielse63/debounce
```

## Usage

```js
const debounce = require('@nielse63/debounce');

const fn = () => {
  // do something later
};

debounce(fn); // executed after 250ms
```

## API

### `debounce(callback[, delay, immediate])`

<!-- markdownlint-disable MD013 -->
| Name      | Type     | Description                                    | Default |
|:----------|:---------|:-----------------------------------------------|:--------|
| callback  | Function | Callback to execute after `delay`              |         |
| delay     | Number   | Delay, in ms, before executing `callback`      | 250     |
| immediate | Boolean  | Whether or not to run the function immediately | false   |
<!-- markdownlint-enable MD013 -->

#### Returns

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
