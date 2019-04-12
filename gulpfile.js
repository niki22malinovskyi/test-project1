var gulp = require("gulp"),
  scss = require("gulp-sass"),
  browserSync = require("browser-sync"),
  uglifyjs = require("gulp-uglifyjs"),
  concat = require("gulp-concat"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer");

gulp.task("scss", function() {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        browsers: ["last 8 versions"]
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task("html", function() {
  return gulp.src("app/*.html").pipe(browserSync.stream());
});

gulp.task("browser-sync", function(done) {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
  done();
});

gulp.task("js", function() {
  return gulp
    .src([
      "app/libs/jquery/dist/jquery.js",
      "app/libs/slick-carousel/slick/slick.js"
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglifyjs())
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function(done) {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("app/js/main.js", gulp.parallel("js"));
  gulp.watch("app/*.html", gulp.parallel("html"));
  done();
});

gulp.task("default", gulp.series("watch", "scss", "js", "browser-sync"));