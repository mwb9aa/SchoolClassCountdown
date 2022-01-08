//Steps
1. create package.json or yarn init to auto create and add info.
2. navigate to directory
3. yarn add electron-builder --dev //May not need the global
4. electron --version //to verify it is in the package.json
5. yarn electron-builder --win portable


//install electron-builder
yarn global add electron-builder --dev

//to build
yarn electron-builder --win portable

//may need to get a specific electron version
electron --version

//Need to have a package.json file
https://docs.npmjs.com/cli/v8/configuring-npm/package-json
https://nodejs.dev/learn/the-package-json-guide
https://www.geeksforgeeks.org/node-js-package-json/
