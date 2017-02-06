export default function test3(numMax){
	var fibonacciNums = [];
	if(typeof numMax === "undefined" || numMax === 0){
		return fibonacciNums;
	}
	else{
		if(numMax === 1){
			fibonacciNums.push(0);
			return fibonacciNums;
		}
		else if(numMax === 2){
			fibonacciNums.push(0);
			fibonacciNums.push(1);
			return fibonacciNums;
		}
		else if(numMax > 2){
			var nextNum= 0;
			var previousNum = 0;
			var currentNum = 1;
			fibonacciNums.push(previousNum);
			fibonacciNums.push(currentNum);
			for(var i = 2; i < numMax; i++){
				nextNum = previousNum + currentNum;
				previousNum = currentNum;
				currentNum = nextNum;
				fibonacciNums.push(currentNum);
			}
			return fibonacciNums;
		}
	}
	
}
