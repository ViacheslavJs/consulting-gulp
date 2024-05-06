import fileInclude from "gulp-file-include";

/* TODO - исправление в случае 
   неккоректной работы webp https://github.com/FreelancerLifeStyle/gulp-webp-html-nosvg#readme */
import webpHtmlNosvg from "gulp-webp-html-nosvg";

import versionNumber from "gulp-version-number";

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/..\/img\//g, 'img/'))
    
    /*
    // TODO - откл./подкл. для webp
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpHtmlNosvg()
      )
    ) 
    //
    */
    
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          'value': '%DT%',
          'append': {
            'key': '_v',
            'cover': 0,
            'to': [
              'css',
              'js',
            ]
          },
          'output': {
            'file': 'gulp/version.json'
          }
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
}
