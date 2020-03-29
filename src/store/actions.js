import { fetchList, fetchUserInfo, fetchCommentItem } from '../api/index.js';

export default {
    //promise
    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //         .then(({ data }) => {
    //             commit('SET_USER', data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    // FETCH_ITEM({ commit }, id) {
    //     return fetchCommentItem(id)
    //         .then(({ data }) => {
    //             commit('SET_ITEM', data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(response => {
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },
    // async
    async FETCH_USER({ commit }, name) {
        const response = await fetchUserInfo(name)
        commit('SET_USER', response.data)
        return response
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchCommentItem(id)
        commit.commit('SET_ITEM', response.data)
        return response
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName)
        commit('SET_LIST', response.data)
        return response
    }
}