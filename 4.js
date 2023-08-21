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

function dfs(tree) {
	const arr = [];
	function rec(tree) {
		arr.push(tree.val);
		if (tree.left) {
			rec(tree.left);
		}
		if (tree.right) {
			rec(tree.right);
		}
	}
	rec(tree);
	return arr;
}

// console.log(dfs(tree));
