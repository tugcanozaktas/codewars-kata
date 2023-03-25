function monkeyCount(n) {
    let myArray =[];
    while(n >= 1){
      myArray.unshift(n);
      n--;
    } 
    return myArray;
  }

  module.exports = {
    monkeyCount
  };