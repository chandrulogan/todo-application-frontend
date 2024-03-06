import React, { useEffect, useState } from 'react';
import './viewTask.css'
import { validateDeadlineDate, validateTask, validateDescription } from '../../utils/Validation';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editMyTodoListApi, findOneTodoListApi } from '../../api/Todo';

const ViewTask = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({
        task: '',
        description: "",
        deadlineDate: '',
        status: ""
    });

    // Initial data fetch from api
    const fetchData = () => {
        findOneTodoListApi(id).then(res => {
            console.log(res.data.myTodoList);
            setData({
                task: res.data.myTodoList.title,
                description: res.data.myTodoList.description,
                deadlineDate: res.data.myTodoList.deadlineDate,
                status: res.data.myTodoList.status
            })
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData()
    }, [data])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };
    const updateTask = (e) => {
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

        // console.log(`Task: ${data.task}, Description: ${data.description}, Deadline Date: ${data.deadlineDate}, Status: ${data.status}`);
        setData({
            task: '',
            deadlineDate: '',
            description: "",
            status: ''
        })

        editMyTodoListApi(id, data).then(res=>{
            // console.log(res);
            navigate('/')
        }).catch(err=>{
            console.log(err);
        })
    };

    return (
        <div className='show'>
            <div className='viewTaskModal_container'>
                <div className='viewTaskModal_container__inner'>
                    <Link to={`/`} className='Create_container__closeIcon'><AiOutlineClose
                        size={25}
                    /></Link>
                    <div className='Create_container__inputContainer'>
                        <input
                            name='task'
                            type='text'
                            placeholder='task name'
                            value={data.task}
                            onChange={handleChange}
                        // disabled
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
                        // disabled
                        />
                    </div>
                    <div className='viewTaskModal__finalRow'>
                        <button className='todo_royalBlue_button med_size' onClick={updateTask}>
                            Update Task
                        </button>

                        <select
                            name="status"
                            value={data.status}
                            onChange={handleChange}
                        >
                            <option value="in Progress">In-Progress</option>
                            <option value="completed">completed</option>
                            <option value="aborted">Aborted</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTask