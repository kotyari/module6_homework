function logNum(begin, end){
    let current = begin;
    const timerId = setInterval(
    function (){
      console.log(current);
      if (current===end){
        clearInterval(timerId);
      }
      current++
    }, 1000)
  }
  
  logNum(1, 10)