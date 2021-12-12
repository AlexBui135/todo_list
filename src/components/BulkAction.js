import { connect } from "react-redux";
import { removeSelectedTask } from "../actions/taskAction";


function BulkAction(props) {

    const onRemoveSelectTask = () => {
        props.removeSelectedTask();
    }

    const onDoneTask = () => {

    }
    return (
        <div className='bulkaction_container'>
            <div className='row_layout'>
                <div className='title'>Bulk Action</div>
                <div>
                    <button className='btn btn_done' onClick={onDoneTask}>Done</button>
                    <button className='btn btn_remove' onClick={onRemoveSelectTask}>Remove</button>
                </div>
            </div>
        </div>
    )
}

const mapActionToProps = (dispatch) => {
    return {
        removeSelectedTask: () => dispatch(removeSelectedTask())
    }
}
export default connect(null, mapActionToProps)(BulkAction);