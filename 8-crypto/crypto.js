//
// 8.13. Домашнее задание - Массивы
//
const password = 'СУПЕР_ПАРОЛЬ';
const key = 'РЕПУСЬЛОРАП_';
const invalidKey = 'НЕПОДХОДЯЩИЙ_КЛЮЧ';

// Шифрока и дешифровка
function crypto(input) {
  if (input.length < 5) {
    console.log('Пароль должен быть длиннее 5 символов');
    return null;
  }

  const splitInput = input.split('');

  let [i0, i1, i2, i3, i4, ...other] = splitInput;
  [i0, i4] = [i4, i0];
  [i1, i3] = [i3, i1];
  const newOther = other.reverse();

  return [i0, i1, i2, i3, i4].concat(newOther).join('');
}

// Зашифровка пароля
function coder(password) {
  const crypted = crypto(password);
  if (crypted) console.log('Зашифрованный пароль:', crypted);
  return crypted;
}

// Проверка
function check(password, key) {
  const deCrypted = crypto(key);
  console.log('Раcшифрованный пароль:', deCrypted);

  password === deCrypted
    ? console.log(password === deCrypted, 'Проверка пройдена')
    : console.log(password === deCrypted, 'Задание провалено');
}

// Тестирование
coder(password);
check(password, key);
console.log('___________________________________________');
coder(password);
check(password, invalidKey);
