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

var removeId = [],
	newBlock = {}

function _left(row) {
	var arr = []
	removeId = []
	for (var i in row) {
		row[i].sort((prev, cur) => {
			return parseInt(prev[0]) - parseInt(cur[0])
		})
		var _row = row[i]
		for (var j = 0; j < _row.length; j++) {
			_row[j][0] = j * 100 + "px"
		}
		switch (_row.length) {
			case 2:
				if (_row[0][3] == _row[1][3]) {
					_row[1][0] = "0px"
					removeId.push(_row[0][4])
					removeId.push(_row[1][4])
				}
				break
			case 3:
				if (_row[0][3] == _row[1][3]) {
					_row[1][0] = "0px"
					_row[2][0] = "100px"
					removeId.push(_row[0][4])
					removeId.push(_row[1][4])
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][0] = "100px"
					removeId.push(_row[1][4])
					removeId.push(_row[2][4])
				}
				break
			case 4:
				if (_row[0][3] == _row[1][3]) {
					_row[1][0] = "0px"
					removeId.push(_row[0][4])
					removeId.push(_row[1][4])
					if (_row[2][3] == _row[3][3]) {
						_row[2][0] = "100px"
						_row[3][0] = "100px"
						removeId.push(_row[2][4])
						removeId.push(_row[3][4])
					}
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][3] = "100px"
					_row[3][3] = "200px"
					removeId.push(_row[1][4])
					removeId.push(_row[2][4])
				} else if (_row[2][3] == _row[3][3]) {
					_row[3][3] = "200px"
					removeId.push(_row[2][4])
					removeId.push(_row[3][4])
				}
				break
			default:
				break
		}
	}
	console.log("..." + JSON.stringify(row))
	for (var i in row) {
		for (var j = 0; j < row[i].length; j++) {
			arr.push(row[i][j])
		}
	}
	console.log(JSON.stringify(removeId))
	return arr.sort((prev, cur) => {
		return prev[4] - cur[4]
	})
}

function mergeLeft(state) {
	var data = state.data
	var row = {}
	console.log('mergeLeft')
	for (var i = 0; i < data.length; i++) {
		switch (data[i][1]) {
			case '0px':
				row[0] = row[0] ? row[0] : []
				row[0].push(data[i])
				break
			case '100px':
				row[1] = row[1] ? row[1] : []
				row[1].push(data[i])
				break
			case '200px':
				row[2] = row[2] ? row[2] : []
				row[2].push(data[i])
				break
			case '300px':
				row[3] = row[3] ? row[3] : []
				row[3].push(data[i])
				break
		}
	}
	console.log(JSON.stringify(data))
	var _data = _left(row);
	// removeId = removeId.sort((prev, cur) => {
	// 	return prev - cur
	// }).map((item, index) => {
	// 	return item - index
	// })

	console.log(JSON.stringify(removeId))

	setTimeout(() => {
		console.log(JSON.stringify(data))
			// data.splice(1, 1)
			// data.splice(3, 1, block("100px", "0px", 8))
			// for (var i = 0; i < removeId.length; i++) {
			// 	data.splice(removeId[i], 1)
			// }
		data.splice(1, 1)
		data.splice(3, 1)
		console.log(JSON.stringify(data))
	}, 2200)



	// data.splice(0, 1, ["0px", "100px", "#F2EEE3", 16, 0])
}

function mergeRight(state) {
	console.log('mergeRight')

}

function mergeUp(state) {
	console.log('mergeUp')
}

function mergeDown(state) {
	console.log('mergeDown')
	console.log(JSON.stringify(state.data))
		// var arr = _sort(state, 'down')

	state.data.splice(0, 1, [
		'0px', //left
		'100px', //top
		'#F2EEE3', //color
		16, //number
		0 //id
	])
	setTimeout(() => {
		state.data.splice(0, 1, [
			'0px', //left
			'100px', //top
			'#F2EEE3', //color
			16, //number
			4 //id
		])
	}, 200)
	console.log(JSON.stringify(state.data))
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