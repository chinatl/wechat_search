const state = {
    loading: false,
}
const mutations = {
    success(state, user) {
        state.loading = true;
	}
}
export default {
    state,
    mutations
}
