//Constantes para automatizar tareas
const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");

//Constante para el modulo de recarga automatica del sitio web al hacer cambios
const browserSync = require("browser-sync");

//Instancia del servidor de desarrollo
const server = browserSync.create();

//Tarea para los estilos de la UX
gulp.task("styles", ()=>{
    return gulp.src("./src/scss/styles.scss")
    .pipe(plumber())
    .pipe(
        sass({
            outputStyle: "compact"
        })
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest("./public/css"))
    .pipe(server.stream());
});

//Tarea para el js de la UX
gulp.task("babel", () => {
    return gulp
      .src("./src/js/*.js")
      .pipe(plumber())
      .pipe(babel({ presets: ["@babel/preset-env"]}))
      .pipe(concat("script-min.js"))
      .pipe(uglify())
      .pipe(gulp.dest("./public/js/"));
});

//Tareas por defecto para que se ejecuten todas
gulp.task("default", () => {
    server.init({
        proxy: "localhost:3000"
    });
//Para vigilar los cambios y mostrarlos en tiempo real(witchers)
    gulp.watch("./src/views/**/*.pug").on("change", server.reload);  //PUG
    gulp.watch("./src/scss/*.scss", gulp.series("styles"));          //scss
    gulp.watch("./src/js/*.js", gulp.series("babel")).on("change", server.reload);   //js
});