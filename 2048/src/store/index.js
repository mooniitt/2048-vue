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
		left: ['200px', '100px', '300px', '300px', '100px', '200px', '0px'],
		top: ['0px', '200px', '100px', '300px', '0px', '100px', '100px'],
		color: ['#F2EEE3', '#BAAF92', '#FF8426', '#388186', '#4BA2AC', '#1D7D81', '#59569D'],
		number: [1, 2, 3, 4, 1, 3, 3],
		length: 7,
		score: 0
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
			var score = 0
			state.number.forEach((n) => {
				score += n
			})
			console.log(score)
			state.score = score
		},
		restart(state) {
			randomBlock(state)
		}
	}
})