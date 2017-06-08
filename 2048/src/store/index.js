import Vue from 'vue'
import Vuex from 'vuex'
import {
	mergeLeft,
	mergeRight,
	mergeUp,
	mergeDown,
	randomBlock
} from '../direct'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		color: ['#F2EEE3', '#BAAF92', '#FF8426', '#388186', '#4BA2AC', '#1D7D81', '#59569D'],
		data: [
			[
				'0px', //left
				'100px', //top
				'#F2EEE3', //color
				2, //number
				0 //id
			],
			[
				'100px',
				'0px',
				'#BAAF92',
				4, 1
			],
			[
				'200px',
				'0px',
				'#FF8426',
				8, 2
			],
			[
				'200px',
				'100px',
				'#388186',
				2, 3
			]
		],
		score: 0
	},
	getter: {

	},
	mutations: {
		onLeft(state) {
			mergeLeft(state)
				// state.data.splice(0, 1)
				// console.log(JSON.stringify(state.data))
		},
		onRight(state) {
			mergeRight(state)
		},
		onUp(state) {
			mergeUp(state)
		},
		onDown(state) {
			mergeDown(state)
		},
		score(state) {
			var sum = 0
			state.data.forEach(s => {
				sum += s[3]
			})
			state.score = sum
		},
		restart(state) {
			console.log('random')
		}
	}
})