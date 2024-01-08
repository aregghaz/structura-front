import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import {IUser} from "@/types/global";
import axios from "axios";

// Define a type for the slice state
export interface UserState {
    token: string,
    user_id: number,
    user: IUser
}

// Define the initial state using that type
const initialState: UserState = {
    token: '',
    user_id: 0,
    user: {
        email: '',
        name: '',
        surname: '',
        status:'',
        fatherName: '',
        country: '',
        passport: '',
        password: 'admin',
        dob: '',
        id: 0,
    }
}

export const UsersSlice = createSlice({
    name: 'users',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        registration: (state, action): void => {
            state.user = {
                ...state.user,
                [action.payload.key]: action.payload.value
            }
            ///   return state
        },
        setToken: (state, action): void => {
            axios.defaults.headers.common["Authorization"] = "Bearer " + action.payload;
            state.token = action.payload
        },
        setUserId: (state, action): void => {
            state.user_id = action.payload
        },
    }
})

export const {registration, setToken,setUserId} = UsersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const userData = (state: RootState) => state.users.user
export const tokenData = (state: RootState) => state.users.token
export const userId = (state: RootState) => state.users.user_id

export default UsersSlice.reducer