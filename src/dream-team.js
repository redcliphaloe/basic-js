module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = '';
  members.forEach(element => {
    if (typeof element == 'string') {
      result += element.trim()[0].toUpperCase();
    }
  }); 
  return result ? result.split('').sort().join('') : false;
};