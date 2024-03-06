export const saveLoginToken = (data) => {
    localStorage.setItem("authToken", data.token)
    localStorage.setItem("userName", data.userName)
    localStorage.setItem("userId", data.userId)
}

export const getToken = () => {
    return localStorage.getItem("authToken");
}

export const clearLocalStorage = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
}
