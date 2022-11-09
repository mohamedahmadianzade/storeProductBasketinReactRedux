import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: { totalCount: 6 },
    reducers: {
        setTotalCount: (state, action) => {
            state.totalCount = action.payload.totalCount
        }
    }
})
export default appSlice  