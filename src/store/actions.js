import * as types from './mutation-types'
import { Auth , Scraping } from '../api'

export default{
	login({ commit }, authInfo ) {
		return Auth.login(authInfo)
		.then(function onFulfilled({ uid, email }){
			console.log(uid);
			console.log(email);
			commit(types.AUTH_LOGIN, { uid, email })
		})
		.catch(function onRejected(error){
		 	return error;
		})
	},

	logout({ commit }){
		Auth.logout()
        .then(function onFulfilled({ uid, email }){
        	commit(types.AUTH_LOGOUT, { uid, email })
        })
        .catch(function onRejected(error){
        	console.log("error");
        })
	},

	userRegister({ commit }, { email, password }){
		return Auth.userRegister(email, password)
			.then(function onFulfilled({ uid, email }){
				console.log(uid);
				console.log(email);
				commit(types.AUTH_LOGIN, { uid, email })
			})
			.catch(function onRejected(error){
				return error;
		})		
 
	},

	webScraping({ commit }, urlInfo ){
		return Scraping.Scrape( urlInfo )
		.then(function onFulfilled({ webstatus, webbody }){
			console.log(webstatus);
			console.log(webbody);
		})
		.catch(function onRejected(error){
			return error;
		})
	}

}	

