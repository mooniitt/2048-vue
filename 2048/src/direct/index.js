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
	number += number
	return [left, top, COLOR[number], number, _newId()]
}

function update(data) {
	for (var i = 0; i < data.length; i++) {
		data.splice(i, 1, data[i])
	}
}

function _left(state, row) {
	var arr = []
	state.removeId = []
	state.newBlock = []
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
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))
				}
				break
			case 3:
				if (_row[0][3] == _row[1][3]) {
					_row[1][0] = "0px"
					_row[2][0] = "100px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][0] = "100px"
					state.removeId.push(_row[1][4], _row[2][4])
					state.newBlock.push(block(_row[1][0], _row[1][1], _row[1][3]))
				}
				break
			case 4:
				if (_row[0][3] == _row[1][3]) {
					_row[1][0] = "0px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))

					if (_row[2][3] == _row[3][3]) {
						_row[2][0] = "100px"
						_row[3][0] = "100px"
						state.removeId.push(_row[2][4], _row[3][4])
						state.newBlock.push(block(_row[2][0], _row[2][1], _row[2][3]))
					}
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][0] = "100px"
					_row[3][0] = "200px"
					state.removeId.push(_row[1][4], _row[2][4])
					state.newBlock.push(block(_row[1][0], _row[1][1], _row[1][3]))
				} else if (_row[2][3] == _row[3][3]) {
					_row[3][0] = "200px"
					state.removeId.push(_row[2][4], _row[3][4])
					state.newBlock.push(block(_row[2][0], _row[2][1], _row[2][3]))
				}
				break
			default:
				break
		}
	}
	for (var i in row) {
		for (var j = 0; j < row[i].length; j++) {
			arr.push(row[i][j])
		}
	}
	console.log("..." + JSON.stringify(row))
	return arr
}

function _right(state, row) {
	var arr = []
	state.removeId = []
	state.newBlock = []
	for (var i in row) {
		row[i].sort((prev, cur) => {
			return parseInt(cur[0]) - parseInt(prev[0])
		})
		var _row = row[i]
		for (var j = 0; j < _row.length; j++) {
			_row[j][0] = 300 - j * 100 + "px"
		}
		switch (_row.length) {
			case 2:
				if (_row[0][3] == _row[1][3]) {
					_row[1][0] = "300px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))
				}
				break
			case 3:
				if (_row[0][3] == _row[1][3]) {
					_row[1][0] = "300px"
					_row[2][0] = "200px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][0] = "200px"
					state.removeId.push(_row[1][4], _row[2][4])
					state.newBlock.push(block(_row[1][0], _row[1][1], _row[1][3]))
				}
				break
			case 4:
				if (_row[0][3] == _row[1][3]) {
					_row[1][0] = "300px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))

					if (_row[2][3] == _row[3][3]) {
						_row[2][0] = "200px"
						_row[3][0] = "200px"
						state.removeId.push(_row[2][4], _row[3][4])
						state.newBlock.push(block(_row[2][0], _row[2][1], _row[2][3]))
					}
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][0] = "200px"
					_row[3][0] = "200px"
					state.removeId.push(_row[1][4], _row[2][4])
					state.newBlock.push(block(_row[1][0], _row[1][1], _row[1][3]))
				} else if (_row[2][3] == _row[3][3]) {
					_row[3][0] = "200px"
					state.removeId.push(_row[2][4], _row[3][4])
					state.newBlock.push(block(_row[2][0], _row[2][1], _row[2][3]))
				}
				break
			default:
				break
		}
	}
	for (var i in row) {
		for (var j = 0; j < row[i].length; j++) {
			arr.push(row[i][j])
		}
	}
	console.log("..." + JSON.stringify(row))
	return arr
}

function _up(state, row) {
	var arr = []
	state.removeId = []
	state.newBlock = []
	for (var i in row) {
		row[i].sort((prev, cur) => {
			return parseInt(prev[1]) - parseInt(cur[1])
		})
		var _row = row[i]
		for (var j = 0; j < _row.length; j++) {
			_row[j][1] = j * 100 + "px"
		}
		switch (_row.length) {
			case 2:
				if (_row[0][3] == _row[1][3]) {
					_row[1][1] = "0px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))
				}
				break
			case 3:
				if (_row[0][3] == _row[1][3]) {
					_row[1][1] = "0px"
					_row[2][1] = "100px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][1] = "100px"
					state.removeId.push(_row[1][4], _row[2][4])
					state.newBlock.push(block(_row[1][0], _row[1][1], _row[1][3]))
				}
				break
			case 4:
				if (_row[0][3] == _row[1][3]) {
					_row[1][1] = "0px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))

					if (_row[2][3] == _row[3][3]) {
						_row[2][1] = "100px"
						_row[3][1] = "100px"
						state.removeId.push(_row[2][4], _row[3][4])
						state.newBlock.push(block(_row[2][0], _row[2][1], _row[2][3]))
					}
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][1] = "100px"
					_row[3][1] = "200px"
					state.removeId.push(_row[1][4], _row[2][4])
					state.newBlock.push(block(_row[1][0], _row[1][1], _row[1][3]))
				} else if (_row[2][3] == _row[3][3]) {
					_row[3][1] = "200px"
					state.removeId.push(_row[2][4], _row[3][4])
					state.newBlock.push(block(_row[2][0], _row[2][1], _row[2][3]))
				}
				break
			default:
				break
		}
	}
	for (var i in row) {
		for (var j = 0; j < row[i].length; j++) {
			arr.push(row[i][j])
		}
	}
	console.log("..." + JSON.stringify(row))
	return arr
}

function _down(state, row) {
	var arr = []
	state.removeId = []
	state.newBlock = []
	for (var i in row) {
		row[i].sort((prev, cur) => {
			return parseInt(cur[1]) - parseInt(prev[1])
		})
		var _row = row[i]
		for (var j = 0; j < _row.length; j++) {
			_row[j][1] = 300 - j * 100 + "px"
		}
		switch (_row.length) {
			case 2:
				if (_row[0][3] == _row[1][3]) {
					_row[1][1] = "300px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))
				}
				break
			case 3:
				if (_row[0][3] == _row[1][3]) {
					_row[1][1] = "300px"
					_row[2][1] = "200px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][1] = "200px"
					state.removeId.push(_row[1][4], _row[2][4])
					state.newBlock.push(block(_row[1][0], _row[1][1], _row[1][3]))
				}
				break
			case 4:
				if (_row[0][3] == _row[1][3]) {
					_row[1][1] = "300px"
					state.removeId.push(_row[0][4], _row[1][4])
					state.newBlock.push(block(_row[0][0], _row[0][1], _row[0][3]))

					if (_row[2][3] == _row[3][3]) {
						_row[2][1] = "200px"
						_row[3][1] = "200px"
						state.removeId.push(_row[2][4], _row[3][4])
						state.newBlock.push(block(_row[2][0], _row[2][1], _row[2][3]))
					}
				} else if (_row[1][3] == _row[2][3]) {
					_row[2][1] = "200px"
					_row[3][1] = "100px"
					state.removeId.push(_row[1][4], _row[2][4])
					state.newBlock.push(block(_row[1][0], _row[1][1], _row[1][3]))
				} else if (_row[2][3] == _row[3][3]) {
					_row[3][1] = "100px"
					state.removeId.push(_row[2][4], _row[3][4])
					state.newBlock.push(block(_row[2][0], _row[2][1], _row[2][3]))
				}
				break
			default:
				break
		}
	}
	for (var i in row) {
		for (var j = 0; j < row[i].length; j++) {
			arr.push(row[i][j])
		}
	}
	console.log("..." + JSON.stringify(row))
	return arr
}

function _rowSelect(data) {
	var row = {}
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
	return row
}

function _colSelect(data) {
	var col = {}
	for (var i = 0; i < data.length; i++) {
		switch (data[i][0]) {
			case '0px':
				col[0] = col[0] ? col[0] : []
				col[0].push(data[i])
				break
			case '100px':
				col[1] = col[1] ? col[1] : []
				col[1].push(data[i])
				break
			case '200px':
				col[2] = col[2] ? col[2] : []
				col[2].push(data[i])
				break
			case '300px':
				col[3] = col[3] ? col[3] : []
				col[3].push(data[i])
				break
		}
	}
	return col
}

function mergeLeft(state) {
	var data = state.data
	_left(state, _rowSelect(data))
	update(data)
	console.log('mergeLeft')
}

function mergeRight(state) {
	var data = state.data
	_right(state, _rowSelect(data))
	update(data)
	console.log('mergeRight')
}

function mergeUp(state) {
	var data = state.data
	_up(state, _colSelect(data))
	update(data)
	console.log('mergeUp')
}

function mergeDown(state) {
	var data = state.data
	_down(state, _colSelect(data))
	update(data)
	console.log('mergeDown')
}

function randomBlock(state) {
	var arr = [],
		tem = []
	var data = state.data
	for (var i = 0; i < 16; i++) {
		arr.push(i)
	}
	for (i = 0; i < data.length; i++) {
		tem.push(directMapNum(data[i][0], data[i][1]))
	}
	tem.sort((prev, cur) => {
		return cur - prev
	})
	for (i = 0; i < tem.length; i++) {
		arr.splice(tem[i], 1)
	}
	if (arr.length) {
		var random = Math.floor(Math.random() * arr.length)
		var val = Math.random() > 0.5 ? 1 : 2
		console.log("random: " + random + " val: " + val)
		var b = block(numMapDirect(random).left, numMapDirect(random).top, val)
		data.splice(data.length, 1, b)
	}
	console.log(arr)
}

function directMapNum(left, top) {
	var n, l, t
	l = left.slice(0, 1) - 0
	t = top.slice(0, 1) - 0
	n = l + t * 4
	return n
}

function numMapDirect(n) {
	var left, top
	top = Math.floor(n % 4)
	left = n - 4 * left
	return {
		left: left * 100 + "px",
		top: top * 100 + "px"
	}
}
export {
	mergeLeft,
	mergeRight,
	mergeUp,
	mergeDown,
	randomBlock
}