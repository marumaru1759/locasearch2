import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	auth: {
		token: null,
	},
	board:{
		Lists: []
	},

	currentUser:{
		uid: '',
		email: ''
	}
}


export default new Vuex.Store({
	state,
	strict: process.env.NODE_ENV !== 'production',

})	

	


