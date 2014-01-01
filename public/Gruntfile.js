module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),

		ngmin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'js/controllers/',
					src: '*.js',
					dest: 'js/controllers/'
				}]
			}
		},
		uglify: {
			options: {
				mangle: false, 
				compress: true,
				sourceMap: "dist/main.map",
				banner: "/*! <%= pkg.name %> - <%= pkg.author %> - <%= pkg.license %> - v<%= pkg.version %> - <%= grunt.template.today(\"dd.mm.yyyy\") %> */\n"
			},
			// to minify the concat files
			js: {
				src: "dist/main.js",
				dest: "dist/main.min.js"
			}

		},
		cssmin: {
			combine: {
				files: {
					'dist/app.min.css': ['css/vendors/*.css', 'css/*.css']
				}
			}
		},
		concat: {
			options:{
				separator: ";", 
				banner: "/*! <%= pkg.name %> - <%= pkg.author %> - <%= pkg.license %> - v<%= pkg.version %> - <%= grunt.template.today(\"dd.mm.yyyy\") %> */\n"
			},
			js: {
				src: ['js/vendors/angular.js',"js/vendors/jquery.js","js/vendors/*.js","js/controllers/*.js","js/*.js"],
				dest: "dist/main.js"
			}
		},
		php: {
			options: {
				port: 5000,
				keepalive: true,
				//open: true,
			},
			watch: {
				options: {
					livereload: 5000
				}
			}
		},
		clean: {
			dir:  ["dist"],
			files:  ["dist/main.js"]
		}

	});

	// loading the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-ngmin'); // this plugin not used
	
	grunt.registerTask("default",['concat','uglify','cssmin','clean:files']);
	grunt.registerTask('server', ['php']);
	grunt.registerTask('phpwatch', ['php:watch','watch']);

};