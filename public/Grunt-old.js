module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			options: {
				mangle: true, 
				compress: true,
				sourceMap: "dist/main.map",
				banner: "/*Mukesh 2013*/"
			},
			// to minify the concat files
			target: {
				src: "dist/main.js",
				dest: "dist/main.min.js"
			}
		},
		jshint: {
			options: {
				eqeqeq: true, 
				curly: true, 
				undef: true, 
				unused: true, 
				indent: true,
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
				src: ["js/*.js","js/controllers/*.js"],
				dest: "dist/main.js"
			}
		},
		watch: {
			scripts: {
				files: ["src/*.js"], 
				tasks: ["jshint"]
			}
		},
		clean: {
			target: ["dist/main.js"]
		}
	});

	// loading the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	//grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask("default",['concat','uglify']);
	grunt.registerTask("reboot",['default','clean']);

};