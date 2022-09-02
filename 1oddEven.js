function funcOddEven(userInput) {
  
  let x = +userInput
  
  if (typeof x === "number") 
{
//если строго равно числу, то
  if (isNaN(x)===false)
  {
  //если строго не равно Not-a-Number, то

    if (x % 2 === 0)
    {
    //если без остатка делится на 2, то
    console.log ("Вы ввели чётное число.");
    } 
    else 
    { 
    //если с остатком делится на 2, то
    console.log ("Вы ввели нечётное число.");
    }
  }
  else 
  { 
  //если ввести NaN
    console.log ("Упс, кажется, вы ошиблись.");
  } 
  }
else 
{ 
//если ввести не число
   console.log ("Упс, кажется, вы ошиблись."); 
}
 
}

funcOddEven(prompt());