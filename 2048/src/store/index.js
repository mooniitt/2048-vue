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
		data: [
			[
				'300px', //left
				'100px', //top
				'#F2EEE3', //color
				16, //number
				0 //id
			],
			[
				'200px',
				'0px',
				'#BAAF92',
				4, 1
			],
			[
				'100px',
				'0px',
				'#FF8426',
				8, 2
			],
			[
				'300px',
				'200px',
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