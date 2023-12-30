import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
export interface DocState {
    body: string,
    document: {
        folder_id: number
        id: number
        owner_id: number
    }
}

// Define the initial state using that type
const initialState: DocState = {
    body: '',
    document: {
        folder_id: 0,
        id: 0,
        owner_id: 0
    }
}

export const DocumentSlice = createSlice({
    name: 'documents',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setBody: (state, action: PayloadAction<string>): void => {
            state.body = action.payload
            ///   return state
        },
        setDocument: (state, action: PayloadAction<any>) => {
            state.document = action.payload
        },
        setDocumentId: (state, action:PayloadAction<any>) => {
            state.document = {
                ...state.document,
                id: action.payload
            }
        }
    }
})

export const {setBody, setDocumentId} = DocumentSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const documentBody = (state: RootState) => state.documents.body
export const documentId = (state: RootState) => state.documents.document.id


export default DocumentSlice.reducer