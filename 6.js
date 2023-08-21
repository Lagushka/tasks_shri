function balance(str) {
	let balance = 0;
	let passes = true;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			balance++;
		}
		if (str[i] === ")") {
			balance--;
			if (balance < 0) {
				passes = false;
			}
		}
		if (i === str.length - 1 && balance !== 0) {
			passes = false;
		}
	}

	return passes;
}

// console.log(balance("((()(()wegw)))"));
