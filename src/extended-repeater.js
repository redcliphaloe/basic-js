module.exports = function repeater( str, options ) {  
    function repeat(str, separator, repeats) {
        let result = str;
        for (let index = 1; index < repeats; index++) {
            result += separator;
            result += str;
        }    
        return result || '';    
    }
    let substr = repeat(options.addition, options.additionSeparator || '|', options.additionRepeatTimes);
    return repeat(str + substr, options.separator || '+', options.repeatTimes);
};