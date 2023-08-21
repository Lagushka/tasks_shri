function selectionSort(arr) {
	const newArr = [...arr];

	for (let i = 0; i < newArr.length - 1; i++) {
		let min = newArr[i],
			minIndex = i;

		for (let j = i + 1; j < newArr.length; j++) {
			if (newArr[j] < min) {
				minIndex = j;
				min = newArr[j];
			}
		}
		const c = newArr[minIndex];
		newArr[minIndex] = newArr[i];
		newArr[i] = c;
	}
	return newArr;
}
