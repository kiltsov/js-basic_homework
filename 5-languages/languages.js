// Разработать чат-бота,
// который использует данную информацию о языке пользователя,
// чтобы выбрать и показать соответствующее приветствие.

const en = 'en';
const ru = 'ru';
const de = 'de';
const fr = 'fr';
const fi = 'fi';

let currentLang = ru;
// const currentLang = document.documentElement.lang || 'default';

switch (currentLang) {
  case en:
    console.log('Hello, welcome!');
    break;

  case ru:
    console.log('Привет, добро пожаловать!');
    break;

  case de:
    console.log('Hallo, willkommen!');
    break;

  case fr:
    console.log('Bonjour, bienvenue!');
    break;

  case fi:
    console.log('Hei, tervetuloa!');
    break;

  default:
    console.log('Выберите язык');
}
