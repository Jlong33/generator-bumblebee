module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: ['Gruntfile.js', 'src/assets/js/**/*.js', '!src/assets/js/vendor/**/*.js', '!src/assets/js/main.js'],
			options: {
				reporter: require('jshint-stylish')
			}
		},

		watch: {
			compass: {
				files: ['src/scss/**/*.{scss,sass}'],
				tasks: ['compass:dev'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['src/assets/js/**/*.js', '!src/assets/js/main.js'],
				tasks: ['jshint', 'concat:js'],
				options: {
					livereload: true
				}
			}
		},

		compass: {
			dev: {
				options: {
					environment: 'development',
					config: 'config.rb'
				}
			}
		},

	    concat: {
	        options: {
	            // Task-specific options go here.
	            separator: '\n'
	        },
	        // only concat what's in shared folders (js/vendor/shared and js/shared)
	        js: {
	            src: [
	            	'src/assets/js/vendor/shared/require.min.js', 
	            	'src/assets/js/vendor/shared/jquery-1.11.1.min.js', 
	            	'src/assets/js/vendor/shared/duh.min.js', 
	            	'src/assets/js/shared/requireConfig.js', 
	            	'src/assets/js/shared/main.js', 
	            	'src/assets/js/shared/helpers.js'
	            ],
	            dest: 'src/assets/js/main.js'
	        }
	    },

	    copy: {
	    	main: {
	    		files: [
	    			{expand: true, cwd:'src', src: ['assets/css/main.css'], dest: 'build/'},
	    			{expand: true, cwd:'src', src: ['assets/fonts/**'], dest: 'build/'},
	    			{expand: true, cwd:'src', src: ['assets/img/**'], dest: 'build/'},
	    			{expand: true, cwd:'src', src: ['assets/js/**', '!assets/js/shared/**', '!assets/js/vendor/shared/**'], dest: 'build/'}
	    		]
	    	},
	    	html: {
	    		expand: true,
	    		cwd: 'src/html',
	    		src: ['**'],
	    		dest: 'build/',
			    options: {
			    	process: function (content, srcpath) {
			        	return content.replace(/\.\.\/assets/g,"assets");
			    	}
			    }
	    	}
	    },

	    clean: {
	    	build: ['build'],
	    	zip: ['tmpZp']
	    },

	    ftpush: {
	    	build: {
	    		auth: {
	    			host: 'your.host.com',
	    			port: 21,
	    			authKey: 'key1'
	    		},
	    		src: 'build/',
	    		dest: '/destination/folder/build/',
	    		exclusions: '**/.DS_Store',
	    	},
	    	zip: {
	    		auth: {
	    			host: 'your.host.com',
	    			port: 21,
	    			authKey: 'key1'
	    		},
	    		src: 'tmpZp',
	    		dest: '/destination/folder/',
	    		exclusions: '**/.DS_Store',
	    		simple: true
	    	}
	    },


	    // make a zipfile
		compress: {
		  main: {
		    options: {
		      mode: 'tar',
		      archive: 'tmpZp/build.tar'
		    },
		    files: [
		      {src: ['build/**'], dest: '/'},
		    ]
		  }
		},

		imagemin: {
		    png: {
		      options: {
		        optimizationLevel: 7
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'src/assets/img/',
		          src: ['**/*.png'],
		          // Could also match cwd line above. i.e. project-directory/img/
		          dest: 'build/assets/img/',
		          ext: '.png'
		        }
		      ]
		    },
		    jpg: {
		      options: {
		        progressive: true
		      },
		      files: [
		        {
		          // Set to true to enable the following options…
		          expand: true,
		          // cwd is 'current working directory'
		          cwd: 'src/assets/img/',
		          src: ['**/*.jpg'],
		          // Could also match cwd. i.e. project-directory/img/
		          dest: 'build/assets/img/',
		          ext: '.jpg'
		        }
		      ]
		    }
		  }

	});

	// For `grunt -help`
	// Empty task to visually seperate the available tasks in `grunt --help`
	grunt.registerTask('', ' ', []);
	grunt.registerTask('INSTALLED NPM TASKS', ' ', []);

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
 	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
 	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ftpush');

	// Empty task to visually seperate the available tasks in `grunt --help`
	grunt.registerTask(' ', ' ', []);
	grunt.registerTask('CUSTOM TASKS', ' ', []);

	// Default Task
	grunt.registerTask('default', 'default task to run JSHint, build and concatenate CSS and JS files, and then copy to build folder. This will not push to FTP', ['jshint', 'compass', 'concat', 'copy', 'imagemin']);

	// Our Tasks
	grunt.registerTask('deploy', 'Compress files in build directory and push to server specified in ftpush task', ['compress', 'ftpush', 'clean:zip']);
	grunt.registerTask('clean-deploy', 'Removes build folder and rebuilds project and deploys', ['clean', 'default', 'deploy']);
	grunt.registerTask('cd', 'Shortcut for "clean-deploy" task', ['clean-deploy']);
};