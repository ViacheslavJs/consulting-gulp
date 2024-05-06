import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const logo = () => {
  return app.gulp.src(app.path.src.logo)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "LOGO",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(app.plugins.newer(app.path.build.logo))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webp()
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.gulp.dest(app.path.build.logo)
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.gulp.src(app.path.src.logo)
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.plugins.newer(app.path.build.logo)
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
    .pipe(app.gulp.dest(app.path.build.logo))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.logo))
    .pipe(app.plugins.browserSync.stream());
}







    
    
