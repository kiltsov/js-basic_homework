const rub = 'Рубль';
const usd = 'Доллар';
const eur = 'Евро';
const idr = 'Индонезийская рупия';
const vnd = 'Вьетнамский донг';
const kzt = 'Казахстанский тенге';

function currencyConverter(sumMoney, sourceCur, targetCur) {
  switch (true) {
    // RUB - USD
    case sourceCur == rub && targetCur == usd:
      return Number(sumMoney * 0.0102);
    case sourceCur == usd && targetCur == rub:
      return Number(sumMoney / 0.0102);

    // RUB - EUR
    case sourceCur == rub && targetCur == eur:
      return Number(sumMoney * 0.00972);
    case sourceCur == eur && targetCur == rub:
      return Number(sumMoney / 0.00972);

    // RUB - IDR
    case sourceCur == rub && targetCur == idr:
      return Number(sumMoney * 157.43);
    case sourceCur == idr && targetCur == rub:
      return Number(sumMoney / 157.43);

    // RUB - VND
    case sourceCur == rub && targetCur == vnd:
      return Number(sumMoney * 247.25);
    case sourceCur == vnd && targetCur == rub:
      return Number(sumMoney / 247.25);

    // RUB - KZT
    case sourceCur == rub && targetCur == kzt:
      return Number(sumMoney * 5.41);
    case sourceCur == kzt && targetCur == rub:
      return Number(sumMoney / 5.41);

    // USD - EUR
    case sourceCur == usd && targetCur == eur:
      return Number(sumMoney * 0.95);
    case sourceCur == eur && targetCur == usd:
      return Number(sumMoney / 0.95);

    // USD - IDR
    case sourceCur == usd && targetCur == idr:
      return Number(sumMoney * 15429.5);
    case sourceCur == idr && targetCur == usd:
      return Number(sumMoney / 15429.5);

    // USD - VND
    case sourceCur == usd && targetCur == vnd:
      return Number(sumMoney * 23458.75);
    case sourceCur == vnd && targetCur == usd:
      return Number(sumMoney / 23458.75);

    // USD - KZT
    case sourceCur == usd && targetCur == kzt:
      return Number(sumMoney * 510.22);
    case sourceCur == kzt && targetCur == usd:
      return Number(sumMoney / 510.22);

    default:
      return null;
  }
}

console.log(currencyConverter(1000, rub, usd)); // RUB -> USD
console.log(currencyConverter(1000, usd, rub)); // USD -> RUB
console.log(currencyConverter(1000, rub, eur)); // RUB -> EUR
console.log(currencyConverter(1000, eur, rub)); // EUR -> RUB
console.log(currencyConverter(1000, rub, idr)); // RUB -> IDR
console.log(currencyConverter(1000, idr, rub)); // IDR -> RUB
console.log(currencyConverter(1000, rub, vnd)); // RUB -> VND
console.log(currencyConverter(1000, vnd, rub)); // VND -> RUB
console.log(currencyConverter(1000, rub, kzt)); // RUB -> KZT
console.log(currencyConverter(1000, kzt, rub)); // KZT -> RUB
//
console.log(currencyConverter(1000, vnd, kzt)); // Null
