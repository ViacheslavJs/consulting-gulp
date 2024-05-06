import { deleteAsync } from "del";
export const reset = () => {
  return deleteAsync(app.path.clean);
}


/*
Проблема/решение:
https://ru.stackoverflow.com/questions/978364/gulp-4-0-1
Ответ:
В документации, вот тут https://www.npmjs.com/package/del четко прописано - 
что теперь писать нужно не: import del from 'del'; а по другому, вот так: 
import {deleteAsync} from 'del';
Актуально на 10.10.2022
*/

/*  У некоторых работает так:
import del from "delete";
export const reset = () => {
  return del(app.path.clean);
}
*/
