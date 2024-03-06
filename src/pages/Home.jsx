import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import { findMyTodoListApi } from '../api/Todo'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskList } from '../store/taskSlice'

const Home = () => {
    const [data, setdata] = useState()
    const userId = localStorage.getItem("userId")
    const taskList = useSelector(state => state.task.taskList);
    const dispatch = useDispatch()
    console.log(`This is user id:${userId}`);

    const fetchData = () => {
        findMyTodoListApi(userId).then(res => {
            console.log("This is api data",res.data.myTodoList);
            setdata(res.data.myTodoList);
            dispatch(setTaskList(res.data.myTodoList))
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData()
    })

    console.log("This value is from redux", taskList);

    return (
        <div className='Home_styles'>
            <div className='home_containerInner'>
                <Header />

                {data ? (
                    taskList.map((data, index) => (
                        <TodoList
                            key={index}
                            sno={index + 1}
                            content={data.title}
                            date={data.deadlineDate}
                            status={data.status}
                            listId={data._id}
                        />
                    ))
                ) : (
                    <div>Not created any tasks</div>
                )}

            </div>
        </div>
    )
}

export default Home