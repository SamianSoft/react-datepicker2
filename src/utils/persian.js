const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];

function prepareNumber(input) {
  let string;
  if (typeof input === 'number') {
    string = input.toString();
  } else if (typeof input === 'undefined') {
    string = '';
  } else {
    string = input;
  }

  return string;
}

function latinToPersian(string) {
  let result = string;

  for (let index = 0; index < 10; index++) {
    result = result.replace(latinNumbers[index], latinToPersianMap[index]);
  }

  return result;
}

function toEnglishDigits(str) {
  if (!str) return str;
  const regex1 = /[\u0660-\u0669]/g;
  const regex2 = /[\u06f0-\u06f9]/g;
  return str
    .replace(regex1, function(c) {
      return c.charCodeAt(0) - 0x0660;
    })
    .replace(regex2, function(c) {
      return c.charCodeAt(0) - 0x06f0;
    });
}

export function persianNumber(input) {
  return latinToPersian(prepareNumber(input));
}

export function toLatin(input) {
  return toEnglishDigits(prepareNumber(input));
}
