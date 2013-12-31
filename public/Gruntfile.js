module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			options: {
				//mangle: true, 
				compress: true,
				sourceMap: "dist/main.map",
				banner: "/*Mukesh 2013*/"
			},
			// to minify the concat files
			target: {
				src: "dist/main.js",
				dest: "dist/main.min.js"
			},
			lib: {
				src: "dist/lib.js",
				dest: "dist/lib.min.js"
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
			},
			lib: {
				src: ["js/vendors/*.js"],
				dest: "dist/lib.js"
			}
		}
	});

	// loading the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask("default",['concat','uglify']);

};