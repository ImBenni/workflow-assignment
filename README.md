# Social Media Client - Workflow CA

[![Deploy static content to Pages](https://github.com/ImBenni/workflow-assignment/actions/workflows/static.yml/badge.svg)](https://github.com/ImBenni/workflow-assignment/actions/workflows/static.yml)
[![Automated E2E Testing](https://github.com/ImBenni/workflow-assignment/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/ImBenni/workflow-assignment/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/ImBenni/workflow-assignment/actions/workflows/unit-test.yml/badge.svg)](https://github.com/ImBenni/workflow-assignment/actions/workflows/unit-test.yml)


## Description

This is my work for the Course assignment at Noroff.
The goal was to make a good quality enviroment by using workflows.

## Installing and Running
 
 Start by cloning this repo and run "npm i" to install the necessary packages.
 
    npm i
    
Then shortly after that, run the sass build.

    npm run build
    
## Setup and Configuration

Installing Prettier

    npm install --save-dev prettier

Installing ESlint

    npm install eslint --save-dev

Setting up ESLint, This will create a .eslintrc file that holds all the rules that eslint will follow.

    npx eslint --init

Recommended answers for this project

    How would you like to use ESLint? · problems
    What type of modules does your project use? · esm
    Which framework does your project use? · none
    Does your project use TypeScript? · No
    Where does your code run? · browser
    What format do you want your config file to be in? · JSON

Install pre-commit package

    npx mrm@2 lint-staged

Update script in package.json file

```json
  "scripts": {
    "format": "prettier -w src/js/**/**/*.js",
    "lint": "eslint src/js/**/**/*.js",
    "lint-fix": "eslint src/js/**/**/*.js --cache --fix"
  }
```

Update lint-staged to run scripts on commit

```json
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.html": [
    "prettier --write"
  ],
  "*.scss": [
    "prettier --write"
  ]
}
```

## Testing

### Unit testing with Jest

Instal jest

    npm i -D jest@29.2.0

Add the following scripts in package.json

```json
{
  "scripts": {
    "test": "npm run test-unit",
    "test-unit": "jest"
  }
}
```

Recommended answers for this project

    npx eslint --init

    How would you like to use ESLint? · problems
    What type of modules does your project use? · esm
    Which framework does your project use? · none
    Does your project use TypeScript? · No
    Where does your code run? · browser
    What format do you want your config file to be in? · JSON
    Local ESLint installation not found.
    The config that youve selected requires the following dependencies:

    eslint@latest
    Would you like to install them now? · Yes
    Which package manager do you want to use? · npm

The result will be a .eslintrc.json like this:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

Install the eslint-plugin-jest package

    npm i -D eslint-plugin-jest

Update .eslintrc.json file with overrides

```json
    "overrides": [
      {
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }
    ],
```

Configuring Babel for Jest

    npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4

Create a file called babel.config.json and add the following content:

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

To run unit test use:

    npm run test-unit

### End to end testing with Cypress

Install Cypress

    npm i -D cypress eslint-plugin-cypress@2.12.1

Update eslint.config.json with configuration data for linting Cypress tests:

```json
  "overrides": [
    {
      "files": ["**/*.cy.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off"
      }
    }
  ]
```

Add a new script to your package.json file:

```json
{
  "scripts": {
    "test": "npm run test-e2e",
    "test-e2e": "cypress open"
  }
}
```

To run tests use:

    npm run test-e2e
