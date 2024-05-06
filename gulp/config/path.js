// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
  build: {
    images: `${buildFolder}/img/`,
    logo: `${buildFolder}/logo/`,
    icon: `${buildFolder}/icon/`,
    vendors: `${buildFolder}/vendors/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`
  },
  src: {
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    logo: `${srcFolder}/logo/**/*.{jpg,jpeg,png,gif,webp}`,
    icon: `${srcFolder}/icon/**/*.{jpg,jpeg,png,gif,webp}`,
    vendors: `${srcFolder}/vendors/**/*.*`,
    svg: `${srcFolder}/img/**/*.svg`,
    js: `${srcFolder}/js/app.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    logo: `${srcFolder}/logo/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    icon: `${srcFolder}/icon/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    vendors: `${srcFolder}/vendors/**/*.*`,
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`   
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}

