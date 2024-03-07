import React, { useEffect } from 'react'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import { findMyTodoListApi } from '../api/Todo'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskList } from '../store/taskSlice'
import Logout from '../components/Logout/Logout'

const Home = () => {
    const userId = localStorage.getItem("userId")
    const taskList = useSelector(state => state.task.taskList);
    const dispatch = useDispatch()

    const fetchData = () => {
        findMyTodoListApi(userId).then(res => {
            dispatch(setTaskList(res.data.myTodoList))
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData()
    })

    // console.log("This value is from redux", taskList);

    return (
        <div className='Home_styles'>
            <div className='home_containerInner'>
                <Header />

                {taskList ? (
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
            <Logout />
        </div>
    )
}

export default Home