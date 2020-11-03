import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9cc9b017-1c56-4cdc-8ee0-81ec1f636574'
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}


export const followingUserAPI = {
    followUserRequest(userId) {
        return axiosInstance.post(`follow/${userId}`)
    }
    ,
    unFollowUserRequest(userId) {
        return axiosInstance.delete(`follow/${userId}`);
    }
}

export const authAPI = {
    checkAuth() {
        return axiosInstance.get(`auth/me`).then(response => {
            return response.data;
        });

    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return axiosInstance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return axiosInstance.get('profile/status/'+userId);
    },
    updateStatus(status){
        return axiosInstance.put('profile/status/',{status: status});
    },
    savePhoto(file){
        let formData = new FormData();
        formData.append('image',file);
        return axiosInstance.put('profile/photo',formData,{headers:{'Content-Type':'multipart/form-data'}});
    }

}

export const loginAPI = {
    login (login,password,rememberMe){
        return axiosInstance.post('auth/login',{email:login, password:password, rememberMe:rememberMe});
    },
    logout(){
        return axiosInstance.delete('auth/login');
    }
}


