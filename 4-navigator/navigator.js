// Написать код, который рассчитывает расстояние от текущей точки
// до точки назначения, представляя расчет как нахождение диагонали прямоугольника
// (используя основы тригонометрии или геометрии).
// Для расчетов можно воспользоваться приемами математики,
// вспомнить знания из школы или найти формулу в интернете.

const positionLat = 3;
const positionLong = 4;
const adressLat = 10;
const adressLong = 10;

const currentLat = adressLat - positionLat;
const currentLong = adressLong - positionLong;

const distance = Math.sqrt(currentLat ** 2 + currentLong ** 2);

const templateMessage = `
Ваша текущая позиция: ${currentLat} по широте ${currentLong} по долготе
Расстояние до точки назначения: ${distance}`;

console.log(templateMessage);
