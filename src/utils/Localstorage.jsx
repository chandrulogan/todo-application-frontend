export const saveLoginToken = (data) => {
    localStorage.setItem("authToken", data.token)
    localStorage.setItem("userName", data.userName)
    localStorage.setItem("userId", data.userId)
}

export const getToken = () => {
    localStorage.getItem("authToken")
}