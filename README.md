# dtg-format

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![License][license-src]][license-href]

📆 Convert date to DTG

## Install

```sh

# Using npm
npm install dtg-format

# Using yarn
yarn add dtg-format
```

## Usage

### `toDTG(date: Date, withTimezone?: boolean`

Format a date object to dtg-format.
`withTimezone` is default `false`, if `true` its add the local computer timezone.
```js
// CommonJS
const { toDTG } = require("dtg-format");

// ESM
import { toDTG } from "dtg-format";

const date = new Date("August 19, 2022 23:15:30 UTC+2");
const dtg = toDTG(date);

--> "192315aug22"

```

## License

Published under MIT - Made with ❤️ by Conner  Bachmann

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/dtg-format/latest.svg
[npm-version-href]: https://npmjs.com/package/dtg-format
[npm-downloads-src]: https://img.shields.io/npm/dt/dtg-format.svg
[npm-downloads-href]: https://npmjs.com/package/dtg-format
[github-actions-ci-src]: https://github.com/intevel/dtg-format/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/intevel/dtg-format/actions?query=workflow%3Aci
[license-src]: https://img.shields.io/npm/l/dtg-format.svg
[license-href]: https://npmjs.com/package/dtg-format
