import '../style/MainView.css';
import '../style/NewTask.css';
import NewTask from './NewTask';
import TaskList from './TaskList';

export default function MainView() {
    return (
        <div className="main_layout">
            <NewTask />
            <TaskList />
        </div>
    )
}