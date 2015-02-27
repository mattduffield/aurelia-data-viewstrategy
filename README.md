# aurelia-data-viewstrategy

This library is an addon to the [Aurelia](http://www.aurelia.io/) platform and provides `DataView` ViewStrategy class which will allow you to utilize Web API.

## Usage
To utilise this `ViewStrategy`, override the `getViewStrategy` on your ViewModel. Here's an example using `DataView`:

```js
import {DataView} from 'aurelia-data-viewstrategy';

class ViewModel {
	getViewStrategy() {
		return new DataView('');
	}
}
```

## Dependencies

* [aurelia-templating](https://github.com/aurelia/templating)
* [aurelia-metadata](https://github.com/aurelia/metadata)

## Platform Support

This library can be used in the **browser** as well as on the **server**.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

	```shell
	npm install
	```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

	```shell
	npm install -g gulp
	```
4. To build the code, you can now run:

	```shell
	gulp build
	```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.
