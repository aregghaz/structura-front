import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
export interface DocState {
    body:string,

}

// Define the initial state using that type
const initialState: DocState = {
    body:'',
}

export const DocumentSlice = createSlice({
    name: 'documents',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setBody: (state,action:PayloadAction<string>) :void => {
            state.body = action.payload
         ///   return state
        },
    }
})

export const {setBody} = DocumentSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const documentBody = (state: RootState) => state.documents.body


export default DocumentSlice.reducer