## How to Set Up a Javascript Project

* install node, visit
[Node.js website](https://nodejs.org/en/download/)
* install Node tools from command line
```
$ npm init
```
* if using prompt - install it!
```
$ npm install prompt --save
```
* require prompt in cli.js
```
var prompt = require('prompt');
prompt.start();
```
* browserify
 ```
$ npm install browserify --save-dev
$ npm install browserify -g
```
* install gulp
```
$ npm install gulp --save-dev
$ npm install gulp -g
```
* install vinyl source stream
```
$ npm install vinyl-source-stream --save-dev
```
* install gulp minification
```
var uglify = require('gulp-uglify');
```
* install environments
```
$ npm install gulp-util --save-dev
```
* install delete
```
$ npm install del --save-dev
```
* install JSHint
```
$ npm install jshint --save-dev
$ npm install gulp-jshint --save-dev
```
* build
```
$ gulp build
```
* bower
```
$ npm install bower -g
$ bower init
```
* jQuery
```
$ bower install jquery --save
$ bower install
```
* Bootstrap
```
$ bower install bootstrap --save
```
* Moment.js
```
$ bower install moment --save
```
* Bower-files - combine front end dependencies  
```
$ npm install bower-files --save-dev
```
* We have created a task in gulpfile.js
```
gulp.task('bower', ['bowerJS', 'bowerCSS']);
```
we can now run with ``gulp bower`` any time we add a bower dependency.

* BrowserSync
```
$ npm install browser-sync --save-dev
```
*  Now we can run ``gulp serve`` from the top level of our project directory to launch our server and run the app.
