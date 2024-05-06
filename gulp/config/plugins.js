import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)

/* TODO - https://browsersync.io/docs/gulp */
import browserSync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновления изображения - обрабатывать только те img, 
                                // которых ещё нет в папке dist

import ifPlugin from "gulp-if"; // Условное ветвление

// Экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin
}


