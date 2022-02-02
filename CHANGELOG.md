# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.0.1](https://github.com/growthops-digital/ext-ts/compare/v3.0.0...v3.0.1) (2022-02-02)

## [3.0.0](https://github.com/growthops-digital/ext-ts/compare/v2.6.1...v3.0.0) (2022-02-02)


### ⚠ BREAKING CHANGES

* replace XO with GrowthOps ESLint config, fix all affected files

### Features

* replace XO with GrowthOps ESLint config, fix all affected files ([d5e30f2](https://github.com/growthops-digital/ext-ts/commit/d5e30f281b5ac00f8371fa0e68f91af893b1f9c4))

### [2.6.1](https://github.com/growthops-digital/ext-ts/compare/v2.6.0...v2.6.1) (2021-11-18)


### Bug Fixes

* update attempt function signature to explicity allow the suppied input to be T/undefined/null ([7a691fa](https://github.com/growthops-digital/ext-ts/commit/7a691fac410245eb1a6a8a23541df9c7c5e6b64b))

## [2.6.0](https://github.com/growthops-digital/ext-ts/compare/v2.5.0...v2.6.0) (2021-11-18)


### Features

* extend attempt function to accept more than one supplied processing function parameter ([e8f88c7](https://github.com/growthops-digital/ext-ts/commit/e8f88c73427a60eeac389f013c9a6ed96e2b26f7))

## [2.5.0](https://github.com/growthops-digital/ext-ts/compare/v2.4.0...v2.5.0) (2021-11-07)


### Features

* add Optional utility type ([4c16c2b](https://github.com/growthops-digital/ext-ts/commit/4c16c2bb428fcc569bcef5372a473668dd58f6e9))

## [2.4.0](https://github.com/growthops-digital/ext-ts/compare/v2.3.0...v2.4.0) (2021-11-04)


### Features

* add generateDatoTestImage function ([c2190e1](https://github.com/growthops-digital/ext-ts/commit/c2190e1bcd6a071e41f14d6f99d2fcd32a30cb2d))

## [2.3.0](https://github.com/growthops-digital/ext-ts/compare/v2.2.0...v2.3.0) (2021-11-03)


### Features

* add Portrait and Tall aspect ratios ([2b9806e](https://github.com/growthops-digital/ext-ts/commit/2b9806e088e6997b9177437a40413401d1dd1aab))

## [2.2.0](https://github.com/growthops-digital/ext-ts/compare/v2.1.0...v2.2.0) (2021-10-26)


### Features

* add attempt function ([539e85f](https://github.com/growthops-digital/ext-ts/commit/539e85fa1a2004c0b406147051dc370fd683c438))

## [2.1.0](https://github.com/growthops-digital/ext-ts/compare/v2.0.0...v2.1.0) (2021-10-26)


### Features

* add keyEquals function ([e3eae31](https://github.com/growthops-digital/ext-ts/commit/e3eae31d41fa7ef23da0e40aab37e3d01df3e1be))

## [2.0.0](https://github.com/growthops-digital/ext-ts/compare/v1.7.2...v2.0.0) (2021-10-25)


### Features

* define aspect ratio fraction and notational lookup tables ([cb96205](https://github.com/growthops-digital/ext-ts/commit/cb962059a0fdda683b1b822c9c4f03ec5ebced70))


### Bug Fixes

* update generateTestImage function signature to match new aspect ratio utils and fix tests ([d778ede](https://github.com/growthops-digital/ext-ts/commit/d778edec8a79af990fb705bbf57ed64348e11b21))

### [1.7.2](https://github.com/growthops-digital/ext-ts/compare/v1.7.1...v1.7.2) (2021-10-25)

### [1.7.1](https://github.com/growthops-digital/ext-ts/compare/v1.7.0...v1.7.1) (2021-10-21)

## [1.7.0](https://github.com/growthops-digital/ext-ts/compare/v1.6.0...v1.7.0) (2021-10-21)


### Features

* add cinemaFilm and cinemaScope aspect ratios ([21259e8](https://github.com/growthops-digital/ext-ts/commit/21259e80ed40c793365f13100be147a2e06b8fa4))

## [1.6.0](https://github.com/growthops-digital/ext-ts/compare/v1.5.1...v1.6.0) (2021-10-21)


### Features

* add aspectRatios lookup table, and accompanying generateTestImage function ([314a0e0](https://github.com/growthops-digital/ext-ts/commit/314a0e04977324c93636cbbab0dd6fe10f6eb73a))

### [1.5.1](https://github.com/growthops-digital/ext-ts/compare/v1.5.0...v1.5.1) (2021-10-20)


### Bug Fixes

* convert isPopulated and notPopulated into type guards ([54387ba](https://github.com/growthops-digital/ext-ts/commit/54387bafd044c2007097bdbb4c1d0b82c62f5e72))
* simplify isEmpty function, remove type guard, and update documentation ([bcd4895](https://github.com/growthops-digital/ext-ts/commit/bcd48953b7feb890519978c0e99778a714dd33d7))

## [1.5.0](https://github.com/growthops-digital/ext-ts/compare/v1.4.0...v1.5.0) (2021-10-20)


### Features

* add isPopulated function ([cea86fc](https://github.com/growthops-digital/ext-ts/commit/cea86fcf9c3f77652e51ea61136067aedab23d5f))
* add notPopulated function ([1f92cc9](https://github.com/growthops-digital/ext-ts/commit/1f92cc9248cf80ea18fc1f52d83cd02c202656ba))


### Bug Fixes

* add missing isPopulated and notPopulated function exports to src/index.ts ([28afc3d](https://github.com/growthops-digital/ext-ts/commit/28afc3d32f62fd473441bee76971cfb1b327e8c5))

## [1.4.0](https://github.com/growthops-digital/ext-ts/compare/v1.3.0...v1.4.0) (2021-10-13)


### Features

* add useOnScreen custom hook ([9eb88e9](https://github.com/growthops-digital/ext-ts/commit/9eb88e939b180c9bf2ac4eb5130cb040443bfdce))


### Bug Fixes

* add type generic to useOnScreen hook to ensure we only observe Element types ([368c711](https://github.com/growthops-digital/ext-ts/commit/368c711e2b0d2f23da25f9712ffd6627b82597b0))

## [1.3.0](https://github.com/growthops-digital/ext-ts/compare/v1.2.1...v1.3.0) (2021-08-16)


### Features

* convert isEmpty function to guard clause ([8908849](https://github.com/growthops-digital/ext-ts/commit/8908849e40b00f7a1b9e45348e4b73e9f36b17ba))
* update notEquals function to support data-first and data-last implementations ([3ddda7a](https://github.com/growthops-digital/ext-ts/commit/3ddda7aad391fa73d83ae106438844bd3e6729bd))

### [1.2.1](https://github.com/growthops-digital/ext-ts/compare/v1.2.0...v1.2.1) (2021-08-12)

## [1.2.0](https://github.com/growthops-digital/ext-ts/compare/v1.0.0...v1.2.0) (2021-08-12)


### Features

* add basic utility functions isEmpty, notEmpty, notEquals, and notNil ([8e9129b](https://github.com/growthops-digital/ext-ts/commit/8e9129b97320c46ffaab009cfed8e7feda048ef8))

## [1.0.0](https://github.com/growthops-digital/ext-ts/compare/v0.0.2...v1.0.0) (2021-08-12)

### [0.0.2](https://github.com/growthops-digital/ext-ts/compare/v0.0.1...v0.0.2) (2021-08-12)

### 0.0.1 (2021-08-12)
