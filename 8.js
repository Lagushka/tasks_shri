function binarySearch(arr, val) {
	let left = 0,
		right = arr.length - 1;

	while (left < right) {
		const middle = Math.floor((left + right) / 2);

		if (arr[middle] >= val) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}

	if (arr[left] === val) {
		return left;
	}

	return -1;
}

const arr = [1, 4, 5, 6, 7, 8, 9, 10, 24, 54, 83, 93, 130, 404, 632];

// console.log(binarySearch(arr, 404));
