import '../style/TaskDetail.css';
import '../style/controls.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { PRIORITY } from '../utils/util';
import { AiFillCalendar } from "react-icons/ai";

export default function TaskDetail(props) {

    const { task, btnTitle, placeHolder, onClick } = props;

    const [dueDate, setDueDate] = useState("");
    const [nameTask, setNameTask] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    useEffect(() => {
        setDueDate(task.dueDate);
        setNameTask(task.name);
        setDescription(task.description);
        setPriority(task.priority);
    }, [task]);

    const onHandleClick = () => {
        onClick({
            name: nameTask,
            description: description,
            dueDate: dueDate,
            priority: priority,
        });
    }

    return (
        <div>
            <input
                type="text"
                placeholder={placeHolder}
                value={nameTask}
                className="input"
                onChange={e => setNameTask(e.target.value)}>
            </input>

            <div className="label">Description</div>
            <textarea
                className="text_area"
                value={description}
                onChange={e => setDescription(e.target.value)}>
            </textarea>

            <div className='row_layout' style={{ padding: 0 }}>
                <div style={{ width: '45%' }}>
                    <div className='label'>Due Date</div>
                    <div className='calendar_area'>
                        <div style={{ height: '2rem' }}>
                            <DatePicker
                                selected={dueDate}
                                customInput={
                                    <input type="text" value={dueDate} className="input"></input>
                                }
                                onChange={(date) => setDueDate(date)} />
                        </div>
                        <div className='calendar_ico'><AiFillCalendar /></div>
                    </div>
                </div>
                <div style={{ width: '45%' }}>
                    <div className='label'>Priority</div>
                    <select className='select' value={priority} onChange={e => setPriority(e.target.value)}>
                        {Object.values(PRIORITY).map((item, index) =>
                            <option key={index} value={item}>{item}</option>
                        )}
                    </select>
                </div>
            </div>

            <button className='btn btn_submit' onClick={onHandleClick}>{btnTitle}</button>
        </div >
    )
}