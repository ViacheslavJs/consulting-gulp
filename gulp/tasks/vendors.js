export const vendors = () => {
  return app.gulp.src(app.path.src.vendors)
    .pipe(app.gulp.dest(app.path.build.vendors));
}
