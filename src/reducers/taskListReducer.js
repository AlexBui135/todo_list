import { TASK, PRIORITY } from '../utils/util';

const initialTask = [
    {
        id: Date.now().toString(),
        name: "Task 1",
        description: "",
        dueDate: new Date(),
        priority: PRIORITY.LOW,
        is_select: false,
    },
]

export default function taskListReducer(state = initialTask, action) {
    switch (action.type) {
        case TASK.ADD:
            return [
                ...state,
                {
                    id: Date.now().toString(),
                    ...action.payload,
                    is_select: false
                }
            ]
        case TASK.UDPATE:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...action.payload, is_select: task.is_select
                    };
                }
                return task;
            })
        case TASK.SELECT:
            return state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        is_select: !task.is_select
                    }
                }
                return task;
            })
        case TASK.REMOVE:
            return state.filter(task => task.id !== action.payload);
        case TASK.REMOVE_SELECT:
            return state.filter(task => !task.is_select);
        default:
            return state;
    }
}