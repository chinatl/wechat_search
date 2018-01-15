import request from 'superagent';
import URLS from '@/config.js'
export default function (url, data, success) {
	request
		.get(URLS+'' + url)
		.set("Content-Type", "application/json")
		.set("Authorization", "Bearer " + localStorage.getItem('token'))
		.send(JSON.stringify(data))
		.then(res => {
			if(res.body.code == 0){
				success && success(res.body.data)
			}
		}).catch(err=>{
						console.dir(err);
						if(err.status == 500){
							alert('网络错误')
						}
					})
}
