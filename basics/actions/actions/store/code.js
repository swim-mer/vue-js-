export const state = () => ({
    code: ''
})

export const mutations = {
    setCode(state, code = '') {
        state.code = code
    }
}

export const actions = {
    async status({ commit }) {
        const code = '200'
        console.log('code: ', code)
        commit('setCode', code)
    }
}

export const getters = {
    code: (state) => state.code
}