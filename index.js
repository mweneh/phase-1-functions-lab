// Code your solution in this file!


const distanceFromHqInBlocks= function (number1){
   if (number1>42){
    return number1-42}
    else{return 42-number1}

}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

const distanceFromHqInFeet= function (number2){
    if (number2>42){
        return (number2-42)*264
    }
    else {
        return (42-number2)*264
    }
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

const distanceTravelledInFeet= function(a,b){
    return a<b? (b-a)*264 : (a-b)*264
}
distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

const calculatesFarePrice= function (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400)*.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
