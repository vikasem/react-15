import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '13c18e30-7073-467e-8ce1-10d63a1424be'
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export let usersApi = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    userDelete(id) {
        return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        })
    },
    userPost(id) {
        return instance.post(`follow/${id}`, {},)
        .then(response => {
            return response.data
        })
    }
}

export let profileApi = {
    infoUser(id) {
        return instance.get('profile/' + id)
        .then(response => {
            return response.data
        })
    }
}

export let headerApi = {
    meInfo() {
        return instance.get('auth/me')
        .then(response => {
            return response.data
        })
    }
}
