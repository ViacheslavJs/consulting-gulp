export const swiper = () => {
  return app.gulp.src(app.path.src.swiper)
    .pipe(app.gulp.dest(app.path.build.swiper));
}
