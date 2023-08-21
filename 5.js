// const tree = {
// 	val: 4,
// 	left: {
// 		val: 3,
// 		left: {
// 			val: 934,
// 			left: null,
// 			right: null,
// 		},
// 		right: {
// 			val: 29,
// 			left: {
// 				val: 23,
// 				left: {
// 					val: 10,
// 					left: null,
// 					right: null,
// 				},
// 				right: null,
// 			},
// 		},
// 	},
// 	right: {
// 		val: 23,
// 		left: null,
// 		right: null,
// 	},
// };

function bfs(tree) {
	const arr = [];
	const queue = [tree];

	while (queue.length) {
		const curElem = queue.shift();
		arr.push(curElem.val);
		if (curElem.left) {
			queue.push(curElem.left);
		}
		if (curElem.right) {
			queue.push(curElem.right);
		}
	}

	return arr;
}

// console.log(bfs(tree));
