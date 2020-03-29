import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
async function fetchList(pageName) {
    try {
        return axios.get(`${config.baseUrl}${pageName}/1.json`)
    } catch (error) {
        console.log(error)
    }
}

function fetchUserInfo(username) {
    try {
        return axios.get(`${config.baseUrl}user/${username}.json`)
    } catch (error) {
        console.log(error)
    }
}

function fetchCommentItem(id) {
    try {
        return axios.get(`${config.baseUrl}item/${id}.json`)
    } catch (error) {
        console.log(error)
    }

}

export {
    fetchList,
    fetchUserInfo,
    fetchCommentItem
}