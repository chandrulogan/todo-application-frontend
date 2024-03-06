import API from "./Api"
import { createTodoListEndpoint, editMyTodoListEndpoint, findMyTodoListEndpoint, findOneTodoListEndpoint, updateTodoListStatusEndpoint } from "./Endpoints"

export const createTodoApi = (data) => {
    return API.post(`${createTodoListEndpoint}`, data)
}

export const findMyTodoListApi = (userId) => {
    return API.get(`${findMyTodoListEndpoint}/${userId}`)
}

export const findOneTodoListApi = (listId) => {
    return API.get(`${findOneTodoListEndpoint}/${listId}`)
}

export const editMyTodoListApi = (id, data) => {
    return API.post(`${editMyTodoListEndpoint}/${id}`,data)
}

export const updateTodoListStatusApi = (data) => {
    return API.post(`${updateTodoListStatusEndpoint}`, data)
}

export const deleteTodoListApi = (data) => {
    return API.delete(`${updateTodoListStatusEndpoint}`, data)
}