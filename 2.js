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

const arr = [3, 5, 2243, 24, 0, -2, 234, 9393];
const arr2 = [-2, 45, 2034, -288, -295, 92185, 292, -248];

console.log(selectionSort(arr2));
