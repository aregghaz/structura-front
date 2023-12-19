import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import {IUser} from "@/types/global";

// Define a type for the slice state
export interface UserState {
    user: IUser
}

// Define the initial state using that type
const initialState: UserState = {
    user: {
        email: '',
        name: '',
        surname: '',
        fatherName: '',
        country: '',
        passport: '',
        password: 'admin',
        isActive: false,
        dob: '',
    }
}

export const UsersSlice = createSlice({
    name: 'users',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        registration: (state,action) :void => {
            state.user = {
                ...state.user,
                [action.payload.key]: action.payload.value
            }
         ///   return state
        },
    }
})

export const {registration} = UsersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const userData = (state: RootState) => state.users.user

export default UsersSlice.reducer