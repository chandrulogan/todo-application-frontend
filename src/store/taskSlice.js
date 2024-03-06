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
        }
    }
});


export const { setTaskList } = taskSlice.actions;
export default taskSlice.reducer;
