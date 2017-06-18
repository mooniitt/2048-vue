const COLOR = {
	2: '#F2EEE3',
	4: '#BAAF92',
	8: '#FF8426',
	16: '#388186',
	32: '#254B62',
	64: '#CF4647',
	128: '#1B4B36',
	256: '#3498DB',
	512: '#F4E1E1',
	1024: '#626FE6',
	2048: '#205D67'
}

function singleId() {
	var id = 10
	return function() {
		id += 1
		return id
	}
}

var _newId = singleId()

function block(left, top, number) {
	return [left, top, COLOR[number], number, _newId()]
}

function init(state) {
	console.log(Math.pow(2, 11))
	var data = state.data
	data.splice(0, 1, block('0px', '0px', 2))
	data.splice(1, 1, block('100px', '0px', 4))
	data.splice(2, 1, block('200px', '0px', 8))
	data.splice(3, 1, block('300px', '0px', 16))

	data.splice(4, 0, block('0px', '100px', 32))
	data.splice(5, 0, block('100px', '100px', 64))
	data.splice(6, 0, block('200px', '100px', 128))
	data.splice(7, 0, block('300px', '100px', 256))

	data.splice(8, 0, block('0px', '200px', 512))
	console.log(data[i])


	console.log(data[i])
	data.splice(9, 0, block('100px', '200px', 1024))
	data.splice(10, 0, block('200px', '200px', 2048))
	data.splice(11, 0, block('300px', '200px', 2))

	data.splice(12, 0, block('0px', '300px', 2))
	data.splice(13, 0, block('100px', '300px', 2))
	data.splice(14, 0, block('200px', '300px', 2))
	data.splice(15, 0, block('300px', '300px', 2))

}

function _sort(state, dir) {
	var arr = state.data.map(item => {
			return item
		})
		// console.log(JSON.stringify(arr))
		// console.log(arr.length)
	switch (dir) {
		case "down":
			return arr.sort((prev, cur) => {
				return parseInt(prev[0]) - parseInt(cur[0])
			})
	}
}

function mergeLeft(state) {
	var data = state.data
	console.log('mergeLeft')
	for (var i in data) {
		switch (data[i][1]) {
			case '0px':
				break
			case '100px':
				// console.log(data[i])
				break
			case '200px':
				// console.log(data[i])
				break
			case '300px':
				// console.log(data[i])
				break
		}
	}
}

function mergeRight(state) {
	console.log('mergeRight')
	state.data.splice(0, 1)
}

function mergeUp(state) {
	console.log('mergeUp')
	init(state)
}

function mergeDown(state) {
	console.log('mergeDown')
	console.log(JSON.stringify(state.data))
	var arr = _sort(state, 'down')
	state.data = [
		["0px", "0px", COLOR[8], 8, 2],
		["100px", "0px", COLOR[4], 4, 1],
		["0px", "100px", COLOR[16], 16, 0],
		["0px", "200px", COLOR[2], 2, 3]
	]
	console.log(JSON.stringify(state.data))
		// console.log(JSON.stringify(arr))

	// state.data = {
	// 	"1": ["300px", "100px", "#F2EEE3", 16],
	// 	"2": ["200px", "0px", "#BAAF92", 4],
	// 	"3": ["100px", "0px", "#FF8426", 8],
	// 	"4": ["300px", "200px", "#388186", 2]
	// }

	// state.data = {
	// 	"1": ["100px", "0px", "#FF8426", 8],
	// 	"2": ["200px", "0px", "#BAAF92", 4],
	// 	"3": ["300px", "100px", "#F2EEE3", 16],
	// 	"4": ["300px", "200px", "#388186", 2]
	// }

}

function randomBlock(state) {
	var init = {
		left: ['0px'],
		top: ['0px'],
		color: ['#eee'],
		number: [2],
		length: 1,
		score: 2
	}
	state.left = init.left
	state.top = init.top
	state.color = init.color
	state.number = init.number
	state.length = init.length
	state.score = init.score
}

export {
	mergeLeft,
	mergeRight,
	mergeUp,
	mergeDown,
	randomBlock
}