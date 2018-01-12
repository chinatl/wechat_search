import request from 'superagent';
import URLS from '@/config.js'
export default function (url, data, success) {
	request
		.get(URLS+'' + url)
		.set("Content-Type", "application/json")
		.set("Authorization", "Bearer " + localStorage.getItem('token'))
		.send(JSON.stringify(data))
		.then(res => {
		console.log(res)
			if(res.body){
				success && success(res.body)
			}
		})
}
