export const server = (done) => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    notify: false, // для вывода сообщений указать true 
    port: 3000,
  });
}
