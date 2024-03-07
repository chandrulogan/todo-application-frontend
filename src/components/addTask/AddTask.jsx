import React, { useState } from 'react'
import './AddTask.css'
import { validateDeadlineDate, validateTask, validateDescription } from '../../utils/Validation';
import { Link, useNavigate } from 'react-router-dom';
import { createTodoApi } from '../../api/Todo';
import Logout from '../Logout/Logout';
import { useDispatch } from 'react-redux';
import { setAddTaskList } from '../../store/taskSlice';

const AddTask = () => {
    const userId = localStorage.getItem("userId");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        userId: userId,
        title: '',
        description: "",
        deadlineDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const truncatedValue = value.slice(0, 200);

        setData({
            ...data,
            [name]: truncatedValue
        });
    };

    const addTask = (e) => {
        e.preventDefault();

        if (!validateTask(data.task)) {
            alert('Special characters are not allowed in the task name.');
            return;
        }

        if (!validateDescription(data.description)) {
            alert('Special characters are not allowed in the task name.');
            return;
        }

        if (!validateDeadlineDate(data.deadlineDate)) {
            alert('Please provide a deadline date.');
            return;
        }

        setData({
            title: '',
            description: "",
            deadlineDate: ''
        })

        dispatch(setAddTaskList(data))

        createTodoApi(data).then(res=>{
            console.log(res.data);
            navigate('/')
        }).catch(err=>{
            console.log(err);
        })
    };

    return (
        <div className="AddTask_container">
            <div className='AddTask_container__inner'>
                <div className={`Create_container`}>
                    <div className='Create_container__inputContainer'>
                        <input
                            name='title'
                            type='text'
                            placeholder='title'
                            value={data.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='Create_container__inputContainer'>
                        <textarea
                            name='description'
                            type='text'
                            placeholder='description'
                            value={data.description}
                            onChange={handleChange}
                            className='textArea__style'
                        // disabled
                        />
                    </div>
                    <div className='Create_container__dateInputContainer'>
                        Deadline:{' '}
                        <input
                            type='datetime-local'
                            name='deadlineDate'
                            value={data.deadlineDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='Create_container__buttons'>
                        <button className='todo_royalBlue_button med_size' onClick={addTask}>
                            Submit
                        </button>
                        <Link className='globalOutlineButton med_size' to={`/`}>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
            <Logout />
        </div>
    )
}

export default AddTask