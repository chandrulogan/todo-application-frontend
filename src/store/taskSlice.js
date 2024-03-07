import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setTaskList: (state, action) => {
            state.taskList = action.payload;
        },
        setAddTaskList: (state, action) => {
            state.taskList = [...state.taskList, action.payload];
        }
    }
});


export const { setTaskList, setAddTaskList } = taskSlice.actions;
export default taskSlice.reducer;
