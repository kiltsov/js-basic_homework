//
// 8.13. Домашнее задание - Массивы
//
const password = 'СУПЕР_ПАРОЛЬ';
const key = 'РЕПУСЬЛОРАП_';
const invalidKey = 'НЕПОДХОДЯЩИЙ_КЛЮЧ';

// Шифратор пароля
function coder(password) {
  if (password.length < 5) {
    console.log('Пароль должен быть длиннее 5 символов');
    return null;
  }

  const splitPassword = password.split('');

  let [i0, i1, i2, i3, i4, ...other] = splitPassword;
  [i0, i4] = [i4, i0];
  [i1, i3] = [i3, i1];
  const newOtherPassword = other.reverse();

  const crypted = [i0, i1, i2, i3, i4].concat(newOtherPassword).join('');

  console.log('Зашифрованный пароль:', crypted);
  return crypted; // Зашифрованный пароль
}

// Проверка
function check(password, key) {
  const splitKey = key.split('');
  let [i0, i1, i2, i3, i4, ...other] = splitKey;
  [i4, i0] = [i0, i4];
  [i3, i1] = [i1, i3];
  const newOtherKey = other.reverse();
  const deCrypted = [i0, i1, i2, i3, i4].concat(newOtherKey).join('');

  console.log('Раcшифрованный пароль:', deCrypted);

  // Проверяем
  password === deCrypted
    ? console.log('Проверка пройдена', password === deCrypted)
    : console.log('Задание провалено', password === deCrypted);
}

coder(password);
check(password, key);
console.log('___________________________________________');
coder(password);
check(password, invalidKey);
