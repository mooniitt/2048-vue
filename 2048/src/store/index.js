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
				'300px', //top
				'#F2EEE3', //color
				16, //number
				0 //id
			],
			[
				'200px',
				'100px',
				'#BAAF92',
				4, 1
			],
			[
				'200px',
				'0px',
				'#FF8426',
				4, 2
			],
			[
				'300px',
				'100px',
				'#388186',
				4, 3
			],
			[
				'300px',
				'0px',
				'#388186',
				4, 4
			]
		],
		removeId: [],
		newBlock: [],
		score: 0
	},
	getters: {
		datafilter: state => {
			return state.data.sort((prev, cur) => {
				return prev[4] - cur[4]
			})
		},
		idfilter: state => {
			return state.removeId.sort((prev, cur) => {
				return prev - cur
			})
		}
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
			state.data = []
			randomBlock(state)
			console.log('random')
		}
	},
	actions: {
		onUp(context) {
			context.commit("onUp")
			CRUD(context)
		},
		onDown(context) {
			context.commit("onDown")
			CRUD(context)
		},
		onLeft(context) {
			context.commit("onLeft")
			CRUD(context)
		},
		onRight(context) {
			context.commit("onRight")
			CRUD(context)
		}
	},
})

function CRUD(context) {
	var id = context.getters.idfilter
	var block = context.state.newBlock
	var data = context.getters.datafilter
	var arr = []
	setTimeout(() => {
		for (var i in data) {
			if (data[i][4] == id[0]) {
				id.shift()
				arr.push(i - 0)
			}
		}
		arr = arr.reverse()
		arr.forEach(cur => {
			data.splice(cur, 1)
		})

		block.forEach(cur => {
			data.splice(data.length, 1, cur)
		})
		randomBlock(context.state)
	}, 90)
}