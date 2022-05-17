export const getPhoneNumberFormat = (phoneNumber: string) => {
  let numFormat = phoneNumber;
  if (!numFormat) return;

  // 가운데 3자리 휴대폰번호 처리
  if (numFormat[7] === "-") {
    if (numFormat.length === 13) return;
    if (numFormat.length === 8 && numFormat.slice(7, 8) === "-") {
      numFormat = `${numFormat.slice(0, 7)}-`;
      return numFormat;
    }
    return numFormat;
  }

  if (numFormat.length === 4 && numFormat[numFormat.length - 1] === "-") {
    return numFormat;
  }
  if (numFormat.length === 9 && numFormat[numFormat.length - 1] === "-") {
    return numFormat;
  }

  if (!/^\d+$/.test(numFormat[numFormat.length - 1].replace(/-/gi, ""))) {
    return;
  }
  if (numFormat.length === 4 && numFormat.slice(3, 4) !== "-") {
    numFormat = `${numFormat.slice(0, 3)}-${numFormat.slice(3, 4)}`;
    return numFormat;
  }
  if (numFormat.length === 9 && numFormat.slice(8, 9) !== "-") {
    numFormat = `${numFormat.slice(0, 8)}-${numFormat.slice(8, 9)}`;
    return numFormat;
  }
  if (numFormat.length === 4 && numFormat.slice(3, 4) === "-") {
    numFormat = `${numFormat.slice(0, 3)}`;
    return numFormat;
  }
  if (numFormat.length === 9 && numFormat.slice(8, 9) === "-") {
    numFormat = `${numFormat.slice(0, 8)}`;
    return numFormat;
  }

  return numFormat;
};
