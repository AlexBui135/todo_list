import { combineReducers } from "redux";
import searchReducer from "./searchTaskReducer";
import taskListReducer from "./taskListReducer";

const rootReducer = combineReducers({
    taskList: taskListReducer,
    searchTask: searchReducer
})

export default rootReducer;