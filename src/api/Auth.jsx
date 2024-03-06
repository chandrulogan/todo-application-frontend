import API from "./Api"
import { signinEndpoint, signupEndpoint } from "./Endpoints"

export const signupApi = (data) => {
    return API.post(`${signupEndpoint}`, data)
}

export const signinApi = (data) => {
    return API.post(`${signinEndpoint}`, data)
}