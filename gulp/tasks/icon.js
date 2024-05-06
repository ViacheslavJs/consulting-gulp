import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const icon = () => {
  return app.gulp.src(app.path.src.icon)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "LOGO",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(app.plugins.newer(app.path.build.icon))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webp()
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.gulp.dest(app.path.build.icon)
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.gulp.src(app.path.src.icon)
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.plugins.newer(app.path.build.icon)
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3 // 0 to 7
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.icon))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.icon))
    .pipe(app.plugins.browserSync.stream());
}







    
    
