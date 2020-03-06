module.exports = function getSeason( date ) {
  let result = 'Unable to determine the time of year!';
  if (typeof date == 'undefined') {
    return result;
  }
  if (Object.prototype.toString.call(date) != '[object Date]') {
    throw new Error();
  } 
  switch (Math.trunc((date.getMonth() + 1) / 3)) {
    case 1:
      result = 'spring';      
      break;
    case 2:
      result = 'summer';      
      break;
    case 3:
      result = 'fall';      
      break;              
    default:
      result = 'winter';
      break;
  }  
  return result;
};