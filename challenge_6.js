/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;

  this.sumOfSquares = function(){
    let allSquaredSum = 0;
    for (let i=1; i<=this.naturalNumbers; i++){
      allSquaredSum += Math.pow(i, 2);
    }
    return allSquaredSum
  }
  
  this.squareOfTheSums = function(){
    let allSumBeforeSquare = 0;
    let allSumSquared = 0;
    for (let j=1; j<=this.naturalNumbers;j++){
      allSumBeforeSquare += j;
      allSumSquared = Math.pow(allSumBeforeSquare, 2);
    }
    return allSumSquared;
  }
}
// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
