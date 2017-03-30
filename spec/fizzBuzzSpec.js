describe ('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      javabuzz = new Javabuzz ();
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('Fizz', function() {
      javabuzz = new Javabuzz ();
      expect(javabuzz.isFizz(3)).toBe('Fizz');
    });

    it('Buzz', function() {
      javabuzz = new Javabuzz ();
      expect(javabuzz.isBuzz(5)).toBe('Buzz');
    });

    it('FizzBuzz', function() {
      javabuzz = new Javabuzz ();
      expect(javabuzz.isFizzBuzz(15)).toBe('FizzBuzz');
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

  });

});
