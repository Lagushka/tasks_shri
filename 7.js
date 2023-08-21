function erathosphen(n) {
	const arr = [];
	for (let i = 2; i <= n; i++) {
		arr[i] = true;
	}

	let step = 2;

	while (step <= n) {
		for (let i = step * 2; i <= n; i += step) {
			arr[i] = false;
		}

		let i = step + 1;
		while (i <= n && !arr[i]) {
			i++;
		}
		step = i;
	}

	const result = [];

	for (let i = 2; i < arr.length; i++) {
		if (arr[i]) {
			result.push(i);
		}
	}

	return result;
}

// console.log(erathosfen(400));
