function color(data) {
	var color = ''
	switch (data.number) {
		case 2:
			color = '#F2EEE3'
			break
		case 4:
			color = '#BAAF92'
			break
		case 8:
			color = '#FF8426'
			break
		case 16:
			color = '#388186'
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
	return data
}

function row(state) {

}

function _remove(state, item) {

}

function merge(state, rows) {}

function mergeLeft(state) {
	var data = state.data
	data.splice(2, 1, [data[2][0], data[2][1], 'red', 2, data[2][4]])
	console.log('mergeLeft')
}

function mergeRight(state) {
	console.log('mergeRight')
	state.data.splice(0, 1)
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