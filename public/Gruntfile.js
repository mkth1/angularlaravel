module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			options: {
				mangle: true, 
				compress: true,
				sourceMap: "dist/app.map",
				banner: "/*Mukesh 2013*/"
			},
			// to minify the concat files
			target: {
				src: "dist/app.js",
				dest: "dist/app.min.js"

			}
		},
		jshint: {
			
			options: {
				eqeqeq: true, // requires === instead of ==
				curly: true, //requires curly braces with loops and conditionals
				undef: true, //warns for never used variables
				unused: true, //prohibits undeclared variables
				indent: true, // enforces specific tab or indents
			},
			target: {
				src: "src/*.js"
			}
		},
		concat: {
			options:{
				separator: ";", 
				banner: "/*Mukesh 2013*/"
			},
			target: {
				src: ["src/app.js","src/util.js"],
				dest: "dist/app.js"
			}
		},
		watch: {
			scripts: {
				files: ["src/*.js"], 
				tasks: ["jshint"]
			}
		},
		clean: {
			target: ["dist/app.js"]
		}
	});

	// loading the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask("default",['jshint','concat','uglify']);
	grunt.registerTask("reboot",['default','clean']);

};