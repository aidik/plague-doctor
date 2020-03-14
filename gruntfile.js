module.exports = function(grunt) {

    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON("package.json"),

        // Concat
        concat: {
            js: {
                src: ["src/quotes.js", "src/i18n/quotes.*.js", "src/htmlFragment.js", "src/main.js"],
                dest: "js/plague-doctor.js"
            }
        },

        // Lint
        jshint: {
            files: ["src/plague-doctor.js", "src/i18n/quotes.*.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        // Uglify
        uglify: {
            js: {
                src: ["js/plague-doctor.js"],
                dest: "js/plague-doctor.min.js"
            },
            options: {
                preserveComments: "all"
            }
        },

        // Grunt image
        image: {
            static: {
                options: {
                  optipng: false,
                  pngquant: true,
                  zopflipng: true,
                  svgo: true
                },
                files: [{expand: true, cwd: "src/img", src: ["**/*.{png,jpg,gif,svg}"], dest: "img/"}]
            }
      },


        // Watch for changes
        watch: {
            files: ["src/*"],
            tasks: ["default"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-image");

    grunt.registerTask("build", ["concat", "uglify"]);
    grunt.registerTask("release", ["default", "image"]);
    grunt.registerTask("default", ["jshint", "build"]);
};

