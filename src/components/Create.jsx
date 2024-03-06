import React, { useState } from 'react';
import { validateTask, validateDeadlineDate } from '../utils/Validation';

const Create = ({ createTodoList }) => {
    const [data, setData] = useState({
        task: '',
        deadlineDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const addTask = (e) => {
        e.preventDefault();

        if (!validateTask(data.task)) {
            alert('Special characters are not allowed in the task name.');
            return;
        }

        if (!validateDeadlineDate(data.deadlineDate)) {
            alert('Please provide a deadline date.');
            return;
        }

        console.log(`Task: ${data.task}, Deadline Date: ${data.deadlineDate}`);
        setData({
            task: '',
            deadlineDate: ''
        })
    };

    return (
        <div className={createTodoList ? 'Create_container' : 'display_none'}>
            <div className='Create_container__inputContainer'>
                <input
                    name='task'
                    type='text'
                    placeholder='task name'
                    value={data.task}
                    onChange={handleChange}
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
            <button className='todo_royalBlue_button' onClick={addTask}>
                Submit
            </button>
        </div>
    );
};

export default Create;
