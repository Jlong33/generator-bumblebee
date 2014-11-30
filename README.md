#About
A yeoman generator to quickly setup a website. Aimed at quick projects or experiments but has been used for larger complex projects. Includes most 'boilerplate' amenities. This generator is pretty customized to my personal work/usage. It seems open enough and hopefully useful enough for others to use. Assumes that you have [Ruby] | [Sass] | [Compass] installed.

##**Installation**:
`npm install -g generator-bumblebee`

Then run `yo bumblebee` to start the generator. The generator does not currently automatically install the npm_modules so a `npm install` in the generated project is necessary.

Run `grunt -h` to see list of Grunt tasks. Use `grunt watch` to start watching the files and run the default task `grunt` to build the output folder.

TODO: list things that happen during the default task and explain other tasks

##**How Things Are Set Up:**

####Paths in HTML
-----------------------
All source HTML files are in the src/html/ folder. When the project is built, one level is removed from all source paths within HTML files.

	Examples: 
	    "../assets/css/main.css" becomes "assets/css/main.css"
        "/../../assets" becomes "/../assets"
        
(<small>*CSS and JS paths shouldn't be affected since all asset files are relative to each other within the assets folder*</small>)

####JavaScript Methodology
-----------------------
Some JavaScript libraries/frameworks are used across the whole site. These will be in 
`src/js/vendor/shared/`

Custom files that are used across the site are in`src/js/shared/`

All JS files inside of a shared folder should concatenate into main.js. Specify concatenation order in the Gruntfile. 

    concat: {
	        js: {
	            src: [
            		'src/assets/js/vendor/shared/require.min.js', 
            		'src/assets/js/vendor/shared/jquery-1.11.1.min.js', 
            		'src/assets/js/shared/requireConfig.js', 
            		'src/assets/js/shared/main.js', 
            		'src/assets/js/shared/helpers.js'
	            ],
	            dest: 'src/assets/js/main.js'
	        }
	    }

All component/page specific JS files should be seperate so they are only requested on pages that need it. Place these wherever you want within the assets/js folder.

All JS files are watched and processed by JSHint except files within the js/vendor folder and the js/main.js file (since that is the concatenation of all the other JavaScript files).

##**FAVICONS**
Favicons were generated using this awesome website service: http://realfavicongenerator.net/

To customize icons, replace existing icons in /src/assets/img/global/icons or generate your own with [realfavicongenerator] and update the links in the main index.html

##**Heroku as a subtree**
To add Heroku deployment to an existing Heroku repository, create a git subtree. Make sure the origin and heroku repository urls are in the git remotes.
First remove the build folder (`grunt clean` optionally), then add subtree with:

`git subtree add --prefix build/ heroku master --squash` (squash is optional)

`git subtree push --prefix=build heroku master`

**TODOs**: 
<list>
    <li>Make an optional flag for building for Heroku. The index.html file needs to be renamed to index.php to be accepted by Heroku. Currently, the index.html file in build needs to be renamed manually if using the build folder as a git subtree and deploying to Heroku. Input for origin repo url and input for Heroku repo url.</li>
    <li>Add task that installs node_modules</li>
    <li>Implement an option to include Bower</li>
    <li>Fix README</li>
    <li>List the 'boilerplate' amenities</li>
    <li>Document RequireJS usage</li>
    <li>Document Sass usage</li>
</list>

######<small>readme v0.1.1</small>

[realfavicongenerator]:http://realfavicongenerator.net/
[Ruby]:https://www.ruby-lang.org/en/
[Sass]:http://sass-lang.com/guide
[Compass]:http://compass-style.org/
[DUH]:https://github.com/GODPUS/DUH
