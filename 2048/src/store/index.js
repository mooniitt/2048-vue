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
		data: [],
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
		},
		start(state) {
			randomBlock(state)
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