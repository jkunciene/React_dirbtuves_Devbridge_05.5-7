# NPM

npm is the world’s largest software registry.
Open source developers from every continent use npm to share and borrow packages,
and many organizations use npm to manage private development as well.

## package.json

Dependencies that our project will be using are defined in `package.json`
that should be located at the root folder of the project.

[Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)

### Dependencies

* `dependencies` - Packages required by your application in production.
* `devDependencies` - Packages that are only needed for local development and testing.

[Specifying dependencies and devDependencies in a package.json file](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

### npm install

When setting up the project and after any changes on dependencies in package.json, you will need to run `npm intstall` to install/update dependencies.

### npm-scripts

npm scripts are scripts that we can define under `"scripts": {` section in package.json.

* `"start": "react-scripts start",` - start is usually the main script used for development, in our case this runs the application in development mode on "localhost:3000". Tu run this use `npm start` command (it is a shortcut to `npm run start`).
* `"build": "react-scripts build",` - this script will build production ready application in "/build" directory under the root of the project.
* `"test": "react-scripts test",` - `npm run test` aka `npm test` is prepared to run test files.
* `"eject": "react-scripts eject"` - create-react-app adds a lot of commonly used features to our project, to be able to customize those feature we would need to run `npm run eject` script to move all configurations from `react-scripts` to our project code base.

Notice "react-scripts" used in each of our defined script, these are default scripts generated by [create-react-app](https://github.com/facebook/create-react-app) when creating this project. 

[npm-scripts](https://docs.npmjs.com/using-npm/scripts.html)

#### Try adding your own script

Add `"test-and-build": "npm test -- --watchAll=false --passWithNoTests && npm run build"` to `scripts` in package.json.
Try running it with `npm run test-and-build`.

## More information:
Full official documentation is available at [https://docs.npmjs.com/](https://docs.npmjs.com/)