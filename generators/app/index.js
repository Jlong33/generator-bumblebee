var generators = require('yeoman-generator');
var art        = require('../../utils/art');

module.exports = generators.Base.extend({
    // The name `constructor` is important here
    constructor: function () {
        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);
        
        // This makes `appname` a required argument.
        this.argument('projectname', { type: String, required: false });
        
        if (this.projectname) {
            this.appName = this.projectname;
        }
        else {
            this.appName = "MyProject";
        }
    },

    prompting: {
        promptUser: function() {
            var done = this.async();
     
            // have Yeoman greet the user
            //this.log(this.yeoman);
            this.log(art.littlebee);
     
            var prompts = [{
                type: 'input',
                name: 'appName',
                message: 'What is your project\'s name ?',
                default: this.appName // Default to current folder name
            }
            // ,{
            //     type: 'confirm',
            //     name: 'usejQuery',
            //     message: 'Would you like to use jQuery ?',
            //     default: true
            // },{
            //     type: 'confirm',
            //     name: 'useDUH',
            //     message: 'Would you like to use DUH ?',
            //     default: true
            // }
            ];
     
            this.prompt(prompts, function (answers) {
                this.appName = answers.appName;
                this.usejQuery = answers.usejQuery;
                this.useDUH = answers.useDUH;
                done();
            }.bind(this));
        }
    },

    writing: {
        writeFilesAndFolders: function () {
            this.log(art.go);

            this.src.copy('.ftppass', '.ftppass');
            this.src.copy('.gitignore', '.gitignore');
            this.src.copy('config.rb', 'config.rb');
            this.src.copy('Gruntfile.js', 'Gruntfile.js');
            this.src.copy('package.json', 'package.json');

            this.dest.mkdir('src/assets/audio');
            this.dest.mkdir('src/assets/css');
            this.dest.mkdir('src/assets/fonts');
            this.dest.mkdir('src/assets/img/components');
            this.src.copy('src/assets/img/global/ajax-loader.gif', 'src/assets/img/global/ajax-loader.gif');
            this.dest.mkdir('src/assets/js/components');
            this.src.copy('src/assets/js/shared/helpers.js', 'src/assets/js/shared/helpers.js');
            this.src.copy('src/assets/js/shared/main.js', 'src/assets/js/shared/main.js');
            this.src.copy('src/assets/js/shared/requireConfig.js', 'src/assets/js/shared/requireConfig.js');
            this.src.copy('src/assets/js/vendor/shared/jquery-1.11.1.min.js', 'src/assets/js/vendor/shared/jquery-1.11.1.min.js');
            this.src.copy('src/assets/js/vendor/shared/require.min.js', 'src/assets/js/vendor/shared/require.min.js');
            this.src.copy('src/assets/js/vendor/shared/duh.min.js', 'src/assets/js/vendor/shared/duh.min.js');

            var context = {
                site_name: this.appName
            };

            this.template('src/html/index.html', 'src/html/index.html', context);

            this.src.copy('src/scss/main.scss', 'src/scss/main.scss');
            this.dest.mkdir('src/scss/components');
            this.src.copy('src/scss/global/_fonts.scss', 'src/scss/global/_fonts.scss');
            this.src.copy('src/scss/global/_icons.scss', 'src/scss/global/_icons.scss');
            this.src.copy('src/scss/global/_styleguide.scss', 'src/scss/global/_styleguide.scss');
            this.src.copy('src/scss/global/_variables.scss', 'src/scss/global/_variables.scss');
            this.src.copy('src/scss/vendor/_normalize.scss', 'src/scss/vendor/_normalize.scss');
            this.src.copy('src/scss/vendor/duh/_allsizes.scss', 'src/scss/vendor/duh/_allsizes.scss');
            this.src.copy('src/scss/vendor/duh/_grid.scss', 'src/scss/vendor/duh/_grid.scss');
            this.src.copy('src/scss/vendor/duh/_helpers.scss', 'src/scss/vendor/duh/_helpers.scss');
            this.src.copy('src/scss/vendor/duh/_mixins.scss', 'src/scss/vendor/duh/_mixins.scss');
            this.src.copy('src/scss/vendor/duh/_duh.scss', 'src/scss/vendor/duh/_duh.scss');
            this.src.copy('src/scss/vendor/duh/_variables.scss', 'src/scss/vendor/duh/_variables.scss');
        }
    },
    end: {
        onExit: function() {
            this.log(art.rainbowlittlebee);
        }
    }
});