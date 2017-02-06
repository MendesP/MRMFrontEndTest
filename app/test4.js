export default function getPrimes(max){
	var primes = [];
	if(typeof max === "undefined" || max === 0 || max === 1 || max === 2){
		return primes;
	}
	
	// max is > 3
	primes.push(2);
	for(var i=3; i < max; i+=2){
		var isPrime = true;
		for(var j=2; j < i; j++){
			if(i % j === 0){
				isPrime = false;
				break;
			}	
		}
		if(isPrime){
			primes.push(i);
		}
	}
	return primes;
}
