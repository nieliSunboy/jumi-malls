
var tokenKey = 'token'

export const setToken = (token) => {
    sessionStorage.setItem(tokenKey, token);
}

export const getToken = () => {
    return sessionStorage.getItem(tokenKey);
}