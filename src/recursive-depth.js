const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {   
    var count = 1;
    for(var val in arr){
      if(typeof arr[val] === 'object'){
        count++;
        calculateDepth(arr[val]);
      }
    }
    return count;    
  }
}

module.exports = {
  DepthCalculator
};
