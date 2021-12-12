import { TASK } from "../utils/util";

export default function searchReducer(state = "", action) {
    switch (action.type) {
        case TASK.SEARCH:
            return action.payload;
        default:
            return state;
    }
}