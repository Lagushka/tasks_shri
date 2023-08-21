// const linkedList = {
// 	val: 1,
// 	next: {
// 		val: 2,
// 		next: {
// 			val: 3,
// 			next: {
// 				val: 4,
// 				next: {
// 					val: 5,
// 					next: {
// 						val: 6,
// 						next: null,
// 					},
// 				},
// 			},
// 		},
// 	},
// };

function reverseLinkedList(list) {
	let curElem = list;
	let prevElem = null;
	while (curElem) {
		const nextElem = curElem.next;
		curElem.next = prevElem;
		prevElem = curElem;
		curElem = nextElem;
	}
}

// reverseLinkedList(linkedList);
