function sumOfDigits(num){
	var sum = 0;
	
	while(num > 0){
		sum += num % 10;
		num = Math.floor(num/10);
	}

	return sum;
}

function sumOfDigits(num){
	var sum = 0;
	var numStr = num.toString();
		
	for(var i = 0; i < numStr.length; i++){
		// or parseInt(numStr[i],10)
		//sum += Number(numStr[i]); using the Number keyword seems cleaner...isn't immediately clear the + is needed before numStr[i]
		sum += +numStr[i]
		
	}	
	return sum;
}
