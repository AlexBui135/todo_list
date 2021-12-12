import '../style/TaskDetail.css';
import TaskDetail from './TaskDetail';
import '../style/NewTask.css';
import { PRIORITY } from '../utils/util';
import { addTask } from '../actions/taskAction';
import { connect } from 'react-redux';
import { useModal } from 'react-hooks-use-modal';

function NewTask(props) {

    // const [isError, setError] = useState(false);

    const [Modal, openErrMsg, closeErrMsg] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });

    const onAddTask = (data) => {
        if (data.name.trim() === "") {
            // setError(true);
            openErrMsg();
        } else {
            props.addTask(data);
        }
    }

    return (
        <div className='newtask_container'>
            <div className='header'>New Task</div>
            <div className='taskdetail_container'>
                <TaskDetail
                    task={{
                        name: "",
                        description: "",
                        dueDate: new Date(),
                        priority: PRIORITY.NORMAL
                    }}
                    placeHolder="Add new task..."
                    btnTitle="Add"
                    onClick={onAddTask}
                />
            </div>
            <Modal>
                <div className='modal'>
                    <div className='title_modal'>Error</div>
                    <p>Please input task name</p>
                    <div style={{display: 'flex', justifyContent:'end'}}>
                    <button onClick={closeErrMsg} className='btn btn_remove'>Close</button>
                    </div>
                </div>
            </Modal>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (data) => dispatch(addTask(data))
    }
}

export default connect(null, mapDispatchToProps)(NewTask);