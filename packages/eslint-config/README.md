# `@nielse63/eslint-config`

> Shareable eslint config that combines the airbnb config with unicorn

## Installation

Install with Yarn or npm

```bash
yarn add --dev @nielse63/eslint-config
npm install --save-dev @nielse63/eslint-config
```

## Usage

Use in your `.eslintrc.js` by adding to the `extends` attribute:

```js
{
  extends: [
    '@nielse63/eslint-config',
  ],
}
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
