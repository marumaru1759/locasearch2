import client from './axios'
import cheerio from 'cheerio'

export default {
	Scrape: urlInfo => {
		return new Promise(function (resolve, reject){
			client.get(urlInfo).then(function(){
				resolve({ webstatus: response.status, webbody: response.data})
			})
		})
	}
} 
