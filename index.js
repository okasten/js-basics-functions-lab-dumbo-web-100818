// Code your solution in this file!
function distanceFromHqInBlocks(start){
  return Math.abs(start - 42);
}

function distanceFromHqInFeet(start){
  return 264 * distanceFromHqInBlocks(start);
}

function distanceTravelledInFeet(start, end){
  return 264 * Math.abs(start-end);
}

function calculatesFarePrice(start, end) {
  const total = distanceTravelledInFeet(start, end);
  if (total >= 400 && total > 2000){
    return total * .02;
  }
}