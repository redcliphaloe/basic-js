module.exports = class DepthCalculator {
    calculateDepth( arr ) { 
        let depth = 1;     
        // while (arr.some(element => {return Array.isArray(element)})) {
        //     depth++;
        //     arr = arr.flat();
        // }    
        if (arr.some(element => {return Array.isArray(element)})) {
            arr = arr.flat();
            depth += this.calculateDepth( arr );
        }
        return depth;        
    }
};