function bubbleSort(arr) {
	const newArr = [...arr];
	for (let i = arr.length - 1; i >= 0; i--) {
		for (let j = 0; j <= i; j++) {
			if (newArr[j] > newArr[j + 1]) {
				const c = newArr[j];
				newArr[j] = newArr[j + 1];
				newArr[j + 1] = c;
			}
		}
	}
	return newArr;
}
