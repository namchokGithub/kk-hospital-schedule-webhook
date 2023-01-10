function checkNumber(number) {
    let numberChecker = parseInt(number, 10);
    if (!isNaN(numberChecker) && numberChecker < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

module.exports = checkNumber;