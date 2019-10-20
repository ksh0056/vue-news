import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        news: [],
        job: [],
        ask: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news
        },
        SET_JOBS(state, job) {
            state.job = job
        },
        SET_ASK(state, ask) {
            state.ask = ask
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_NEWS', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        FETCH_JOBS({ commit }) {
            fetchJobsList()
                .then(response => {
                    commit('SET_JOBS', response.data)
                })
                .catch(error => {
                    console.log(error)
                });
        },
        FETCH_ASK(context) {
            fetchAskList()
                .then(response => {
                    context.commit('SET_ASK', response.data)
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }
});