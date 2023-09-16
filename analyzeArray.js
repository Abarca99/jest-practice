function analyzeArray(arr){
    const sortedArray = arr.sort((a,b) => { return a - b});
    const av = sortedArray.reduce((sum, num) => sum + num, 0) / sortedArray.length;
    const mi = sortedArray[0];
    const ma = sortedArray[sortedArray.length - 1];
    const len = sortedArray.length;

    return {
       average:av,
       length:len,
       max:ma,
       min:mi, 
    };
}

module.exports = analyzeArray;