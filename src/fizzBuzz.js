var Javabuzz = function(){};

Javabuzz.prototype.isDivisibleByThree = function (number) {
  if (number % 3 === 0) {
    return true
  } else {
    return false
  };
};

Javabuzz.prototype.isDivisibleByFive = function (number) {
  if (number % 5 === 0) {
    return true
  } else {
    return false
  };
};

Javabuzz.prototype.isFizzBuzz = function (number) {
  if (this.isDivisibleByThree(number) && this.isDivisibleByFive(number)) {
    return 'FizzBuzz'
  } else {
    this.isFizz(number)
  };
};

Javabuzz.prototype.isFizz = function (number) {
 if (this.isDivisibleByThree(number)) {
   return 'Fizz'
 } else {
   this.isBuzz(number)
 };
};

Javabuzz.prototype.isBuzz = function (number) {
  if (this.isDivisibleByFive(number)) {
    return 'Buzz'
  } else {
    return number
  };
};
