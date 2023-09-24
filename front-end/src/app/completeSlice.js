import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
    isInPersonClicked : true
}

const completeSlice = createSlice({
    name: 'complete',
    initialState,
    reducers: {
        inPersonClickHandler(state) {
            state.isInPersonClicked = !state.isInPersonClicked
        } 
    }

})

export default completeSlice.reducer
export const completeActions = completeSlice.actions