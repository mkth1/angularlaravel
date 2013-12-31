module.exports = function(grunt) {

	grunt.initConfig({
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
				//mangle: true, 
				compress: true,
				sourceMap: "dist/main.map",
				banner: "/*Mukesh 2013*/"
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
				banner: "/*Mukesh 2013*/"
			},
			js: {
				src: ['js/vendors/angular.js',"js/vendors/jquery.js","js/vendors/*.js","js/controllers/*.js","js/*.js"],
				dest: "dist/main.js"
			},
			/*css: {
				src: ['css/vendors/*.css', 'css/*.css'],
				dest: 'dist/app.css'
			}*/
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
			target: ["dist"]
		}

	});

	// loading the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-ngmin');
	
	grunt.registerTask("default",['concat','uglify','cssmin']);
	grunt.registerTask('server', ['php']);
	grunt.registerTask('phpwatch', ['php:watch','watch']);

};