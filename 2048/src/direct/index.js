function color(val) {
	var color = ''
	switch (val) {
		case 2:
			color = ''
			break
		case 4:
			color = ''
			break
		case 8:
			color = ''
			break
		case 16:
			color = ''
			break
		case 32:
			color = ''
			break
		case 64:
			color = ''
			break
		case 128:
			color = ''
			break
		case 256:
			color = ''
			break
		case 512:
			color = ''
			break
		case 1024:
			color = ''
			break
		case 2048:
			color = ''
			break
	}
	return color
}

function row(state) {
	var row = {
		_1: [],
		_2: [],
		_3: [],
		_4: []
	}
	for (var i = 0; i < state.length; i++) {
		switch (state.top[i]) {
			case '0px': //第一行
				row._1.push({
					location: state.left[i],
					index: i,
					value: state.number[i]
				})
				break
			case '100px':
				row._2.push({
					location: state.left[i],
					index: i,
					value: state.number[i]
				})
				break
			case '200px':
				row._3.push({
					location: state.left[i],
					index: i,
					value: state.number[i]
				})
				break
			case '300px':
				row._4.push({
					location: state.left[i],
					index: i,
					value: state.number[i]
				})
				break
			default:
				break
		}
	}
	return row
}

function _remove(state, item) {
	state.length -= 1
	state.left.splice(item, 1)
	state.top.splice(item, 1)
	state.color.splice(item, 1)
	state.number.splice(item, 1)
}

function merge(state, rows) {
	var row_after = rows,
		arr = [],
		i, single = [],
		clearIndex = []
	for (i = 1; i <= 4; i++) {
		single = row_after['_' + i].sort((prv, cur) => {
			return parseInt(prv.location) - parseInt(cur.location)
		})

		// console.log(i + " : " + JSON.stringify(single))
		switch (single.length) {
			case 1:
				single[0].location = '0px'
				break
			case 2:
				single[0].location = '0px'
				single[1].location = '100px'
				console.log(i + " : " + JSON.stringify(state))
				if (single[0].value === single[1].value) {
					single[1].location = '0px'
					single[1].value += single[1].value
					state.number[single[1].index] = single[1].value
					clearIndex.push(single[0].index)
				}
				console.log(i + " : " + JSON.stringify(state))
				break
			case 3:
				single[0].location = '0px'
				single[1].location = '100px'
				single[2].location = '200px'
				if (single[0].value === single[1].value) {
					single[1].location = '0px'
					single[2].location = '100px'
					single[1].value += single[1].value
					state.number[single[1].index] = single[1].value
						// clearIndex.push(single[0].index)
				} else if (single[1].value === single[2].value) {
					single[2].location = '100px'
					single[2].value += single[2].value
					state.number[single[2].index] = single[2].value
					clearIndex.push(single[1].index)
				}
				break
			case 4:
				single[0].location = '0px'
				single[1].location = '100px'
				single[2].location = '200px'
				single[3].location = '300px'
				if (single[0].value === single[1].value) {
					single[1].location = '0px'
					single[1].value += single[1].value
					state.number[single[1].index] = single[1].value
					clearIndex.push(single[0].index)
					if (single[2].value === single[3].value) {
						single[2].location = '100px'
						single[3].location = '100px'
						single[3].value += single[3].value
						state.number[single[3].index] = single[3].value
						clearIndex.push(single[2].index)
					}
				} else if (single[1].value === single[2].value) {
					single[2].location = '100px'
					single[2].value += single[2].value
					state.number[single[2].index] = single[2].value
					clearIndex.push(single[1].index)
				} else if (single[2].value === single[3].value) {
					single[3].location = '200px'
					single[3].value += single[3].value
					state.number[single[3].index] = single[3].value
					clearIndex.push(single[2].index)
				}
				break
			default:
				break
		}
	}
	setTimeout(() => {
		clearIndex.forEach(val => {
			_remove(state, val)
		})
	}, 300)
	console.log(row_after)
	arr = [...row_after._1, ...row_after._2, ...row_after._3, ...row_after._4]
	return arr
}

function mergeLeft(states) {
	console.log('mergeLeft')
	var arr = []
	var after = merge(states, row(states))
	for (var i = 0; i < after.length; i++) {
		states.left[after[i].index] = after[i].location
	}
	arr = [...states.left]
	states.left = arr
}

function mergeRight(state) {
	console.log('mergeRight')

}

function mergeUp(state) {
	console.log('mergeUp')

}

function mergeDown(state) {
	console.log('mergeDown')

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