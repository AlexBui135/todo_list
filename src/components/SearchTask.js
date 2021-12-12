import '../style/TaskDetail.css';
import '../style/Task.css';
import { connect } from 'react-redux';
import { searchTask } from '../actions/taskAction';
import '../style/SearchTask.css';

function SearchTask(props) {

    const onSearchTask = (data) => {
        props.searchTask(data);
    }
    return (
        <div className='search_area'>
            <input
                type="text"
                placeholder="Search..."
                className="input"
                onChange={e => onSearchTask(e.target.value)}>
            </input>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        searchTask: (data) => dispatch(searchTask(data))
    }
}

export default connect(null, mapDispatchToProps)(SearchTask);