// Проверить, может ли пользователь сесть за руль, исходя из трех параметров:
// Наличие водительских прав
// Возраст 18 лет и старше
// Трезвость пользователя

let age = 18;
const hasLicense = true;
const isDrunk = false;

const canDrive = age >= 18 && hasLicense && !isDrunk;

console.log(`Вести машину: ${canDrive ? 'может' : 'не может'}`);
