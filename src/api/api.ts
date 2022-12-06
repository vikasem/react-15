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
    userDelete(id: any) {
        return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        })
    },
    userPost(id: any) {
        return instance.post(`follow/${id}`, {},)
        .then(response => {
            return response.data
        })
    }
}

export let profileApi = {
    infoUser(id: any) {
        return instance.get('profile/' + id)
        .then(response => {
            return response.data
        })
    },
    getStatus(id: any) {
        return instance.get('profile/status/' + id)
        .then(response => {
            return response.data
        })
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status})
        .then(response => {
            return response.data
        })
    }
}

export let meApi = {
    meInfo() {
        return instance.get('auth/me')
        .then(response => {
            return response.data
        })
    },
    login(email: any, password: any, rememderMe: any = false) {
        return instance.post('auth/login', {email, password, rememderMe})
        .then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete('auth/login')
        .then(response => {
            return response.data
        })
    }
}
