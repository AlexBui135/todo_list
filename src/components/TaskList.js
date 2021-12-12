import '../style/TaskDetail.css';
import Task from './Task';
import SearchTask from './SearchTask';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import BulkAction from './BulkAction';

function TaskList(props) {
    const { taskList } = props;
    const [isShowBulkAction, setShowBulkAction] = useState(false);

    useEffect(() => {
        setShowBulkAction(false);
        for (let idx = 0; idx < taskList.length; idx++) {
            if (taskList[idx].is_select) {
                setShowBulkAction(true);
                break;
            }
        }
    }, [taskList])

    
    return (
        <div className='tasklist_container'>
            <div className='header'>Todo List</div>
            <SearchTask />
            <div className='tasklist_body'>

                {taskList.length === 0 ? <div className='task_note'>There is no task</div> :
                    taskList.map(function (item, index) {
                        return (
                            <Task key={index} task={item} />
                        )
                    })}
            </div>
            {
                isShowBulkAction ?  <BulkAction/>: null
            }
        </div>
    )
}

const filterTaskList = (task, filterName) => {
    /* sorted by Due date from the near future to far future */
    task.sort((a, b) => a.dueDate - b.dueDate);

    /* search task name */
    if (filterName === "") {
        return task;
    }
    return task.filter(item => item.name.includes(filterName.trim()));
}

function mapStateToProps(state) {
    return {
        taskList: filterTaskList(state.taskList, state.searchTask)
    }
}
export default connect(mapStateToProps, null)(TaskList);