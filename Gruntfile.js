module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['client/src/bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'client/src/css/app.css': 'client/src/scss/app.scss'
        }        
      }
    },

    clean: ["dist"],

    copy: {
      main: {
        files: [
          { expand: true, cwd: 'client/src/', src: ['index.html'], dest: 'client/dist/' },
          { expand: true, cwd: 'client/src/', src: ['images/**'], dest: 'client/dist/' }
        ]
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'client/src/scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['clean', 'sass', 'copy']);
  grunt.registerTask('default', ['build','watch']);
}