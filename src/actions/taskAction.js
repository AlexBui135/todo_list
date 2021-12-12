import { TASK } from "../utils/util"


export const addTask = (data) => {
    return {
        type: TASK.ADD,
        payload: data
    }
}

export const updateTask = (data) => {
    return {
        type: TASK.UDPATE,
        payload: data
    }
}

export const removeTask = (data) => {
    return {
        type: TASK.REMOVE,
        payload: data
    }
}

export const removeSelectedTask = (data) => {
    return {
        type: TASK.REMOVE_SELECT,
        payload: data
    }
}

export const searchTask = (name) => {
    return {
        type: TASK.SEARCH,
        payload: name
    }
}

export const selectTask = (id) => {
    return {
        type: TASK.SELECT,
        payload: id
    }
}