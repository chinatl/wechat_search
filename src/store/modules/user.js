import request from 'superagent'
const state = {
    user: '',
    token: ''
}
const mutations = {
    isLogin(state, user) {
        state.user = user;
    },
    setItem(state, token) {
        var token = 'Bearer '+token;
        localStorage.setItem('token',token);
        state.token = token;
    },
    clearItem(state){
       localStorage.removeItem('token');
    },
	getData(state,url,data,success){
		request
			.get('/api/'+url)
			.set("Content-Type", "application/json")
			.set("Authorization","Bearer "+localStorage.getItem('token'))
			.send(JSON.stringify(data))
			.then(res=>{
				console.log(res)
				success&&success(res)
			})	
	},
	postData(state,url,data,success){
		request
			.get('/api/'+url)
			.set("Content-Type", "application/json")
			.set("Authorization","Bearer "+localStorage.getItem('token'))
			.send(JSON.stringify(data))
			.then(res=>{
				success&&success(res)
			})	
	}
}
export default {
    state,
    mutations,
}
