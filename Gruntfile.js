module.exports = function(grunt) {

    grunt.initConfig({
        wiredep: {
            task: {
                src: [
                    'index.html'
                ],
                fileTypes: {
                    html: {
                        replace: {
                            js: '<script src="{{filePath}}"></script>',
                            css: '<link rel="stylesheet" href="{{filePath}}"></link>'
                        }
                    },
                }
            }

        },
        bower_concat: {
            all: {
                dest: {
                    'js': 'assets/_bower.js',
                    'css': 'assets/_bower.css'
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-bower-concat');

};
