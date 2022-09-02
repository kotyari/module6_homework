
//"Натуральное число, большее 1 , называется простым, если оно ни на что не делится, кроме себя и 1."

function isPrime (x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0){
      return false
    }
  }
  return x > 1;
}

function isPrimeThousand(num) {
  if (num>1000){
    console.log('Данные неверны.')
  }
  else {
    if (isPrime(num) === true ){
      console.log('Число простое.')
    }
    else { console.log('Число составное.')
    }
  }
}

userInput = prompt('Введите число не больше 1000');
isPrimeThousand(userInput);