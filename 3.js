function insertionSort(arr) {
	const newArr = [...arr];

	for (let i = 1; i < newArr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (newArr[j] < newArr[j - 1]) {
				const c = newArr[j];
				newArr[j] = newArr[j - 1];
				newArr[j - 1] = c;
			}
		}
	}
	return newArr;
}
