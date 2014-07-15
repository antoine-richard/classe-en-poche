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

    clean: ["client/dist"],

    copy: {
      main: {
        files: [
          { expand: true, cwd: 'client/src/', src: ['index.html'], dest: 'client/dist/' },
          { expand: true, cwd: 'client/src/', src: ['images/**', 'css/**', 'js/**'], dest: 'client/dist/' },
          { /* temp */ 
            expand: true, 
            cwd: 'client/src/', 
            src: [
              'bower_components/modernizr/modernizr.js', 
              'bower_components/foundation/js/foundation.min.js',
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/jquery/dist/jquery.min.map',
              'bower_components/fastclick/lib/fastclick.js',
              'robots.txt'
            ], 
            dest: 'client/dist/' 
          }
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
  grunt.registerTask('default', ['build', 'watch']);
}