import '../style/TaskDetail.css';
import TaskDetail from './TaskDetail';
import '../style/Task.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { selectTask, updateTask, removeTask } from '../actions/taskAction';

function Task(props) {
    const { task } = props;
    const [showDetail, setShowDetail] = useState(false);

    const [isSelect, setSelect] = useState(false);

    useEffect(() => {
        setSelect(task.is_select);
    }, [task]);


    const onHandleShowDetail = () => {
        setShowDetail(!showDetail);
    }
    
    const onUpdateTask = (data) => {
        return props.updateTask(Object.assign({ 'id': task.id }, data));
    }

    const onRemoveTask = () => {
        props.removeTask(task.id);
    }

    const onSelectTask = () => {
        setSelect(!isSelect);
        props.selectTask(task.id);
    }

    return (
        <div className='task_area'>
            <div className='row_layout'>
                <div style={{ display: 'flex' }}>
                    <input type='checkbox' className='ck_box' checked={isSelect} onChange={onSelectTask}></input>
                    <div className='title'>{task.name}</div>
                </div>
                <div>
                    <button className='btn btn_detail' onClick={onHandleShowDetail}>Detail</button>
                    <button className='btn btn_remove' onClick={onRemoveTask}>Remove</button>
                </div>
            </div>
            {showDetail ?
                <div className='task_info'>
                    <TaskDetail
                        task={task}
                        btnTitle="Update"
                        placeHolder={task.name}
                        onClick={onUpdateTask}
                    />
                </div> : null}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: data => dispatch(updateTask(data)),
        removeTask: data => dispatch(removeTask(data)),
        selectTask: data => dispatch(selectTask(data)),
    }
}

const NewTaskContainer = connect(null, mapDispatchToProps)(Task)
export default NewTaskContainer;